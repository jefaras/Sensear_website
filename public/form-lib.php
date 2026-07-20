<?php

if (isset($_SERVER['SCRIPT_FILENAME']) && realpath($_SERVER['SCRIPT_FILENAME']) === __FILE__) {
    http_response_code(404);
    exit;
}

function sensear_env($name, $default = '')
{
    $value = getenv($name);
    return $value === false || $value === '' ? $default : $value;
}

function sensear_clean_smtp_host($host)
{
    $host = trim(preg_replace('/^https?:\/\//i', '', (string) $host));
    return $host === '' || $host === 'sensear.music' ? 'mail.sensear.music' : $host;
}

function sensear_load_config()
{
    $secureEnv = strtolower(sensear_env('SMTP_SECURE', 'false')) === 'true';

    $defaults = [
        'smtp' => [
            'host' => sensear_clean_smtp_host(sensear_env('SMTP_HOST', 'mail.sensear.music')),
            'port' => (int) sensear_env('SMTP_PORT', $secureEnv ? '465' : '587'),
            'encryption' => $secureEnv ? 'ssl' : 'none',
            'username' => sensear_env('SMTP_USER', 'info@sensear.music'),
            'password' => sensear_env('SMTP_PASSWORD', ''),
            'from_email' => sensear_env('SMTP_FROM', 'info@sensear.music'),
            'from_name' => sensear_env('COMPANY_NAME', 'SensEar'),
            'to' => sensear_env('SMTP_TO', 'info@sensear.music,jefaraz@gmail.com'),
            'timeout' => 20,
        ],
        'recaptcha' => [
            'enabled' => true,
            'secret_key' => sensear_env('RECAPTCHA_SECRET_KEY', ''),
            'min_score' => 0.5,
            'allowed_hostnames' => ['sensear.music', 'www.sensear.music', 'test.sensear.music'],
        ],
        'allowed_origins' => [
            'https://sensear.music',
            'https://www.sensear.music',
            'https://test.sensear.music',
        ],
    ];

    // Look for the private config outside the webroot first, then fall back.
    $configCandidates = [
        getenv('SENSEAR_FORM_CONFIG') ?: '',           // optional explicit absolute path
        dirname(__DIR__) . '/private/form-config.php', // one level above the webroot
        __DIR__ . '/form-config.php',                  // legacy in-webroot fallback
    ];

    $custom = [];
    foreach ($configCandidates as $configFile) {
        if ($configFile !== '' && is_file($configFile)) {
            $loaded = require $configFile;
            if (is_array($loaded)) {
                $custom = $loaded;
            }
            break;
        }
    }

    $config = array_replace_recursive($defaults, $custom);
    $config['smtp']['host'] = sensear_clean_smtp_host($config['smtp']['host']);

    return $config;
}

function sensear_escape($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function sensear_strlen($value)
{
    $value = (string) $value;
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function sensear_tel_href($value)
{
    return preg_replace('/[^\d+]/', '', (string) $value);
}

function sensear_normalize_recipients($recipients)
{
    if (is_string($recipients)) {
        $recipients = explode(',', $recipients);
    }

    if (!is_array($recipients)) {
        return [];
    }

    $clean = [];
    foreach ($recipients as $recipient) {
        $recipient = trim((string) $recipient);
        if ($recipient !== '' && filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
            $clean[] = $recipient;
        }
    }

    return array_values(array_unique($clean));
}

function sensear_wants_json()
{
    $accept = isset($_SERVER['HTTP_ACCEPT']) ? $_SERVER['HTTP_ACCEPT'] : '';
    return stripos($accept, 'application/json') !== false;
}

function sensear_respond($success, $message, $status = 200, $extra = [])
{
    http_response_code($status);
    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

    if (sensear_wants_json()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(array_merge([
            'success' => (bool) $success,
            'message' => $message,
        ], $extra));
        exit;
    }

    header('Content-Type: text/html; charset=utf-8');
    $safeTitle = $success ? 'Thank you' : 'Form submission error';
    $safeMessage = sensear_escape($message);
    echo "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>{$safeTitle}</title><style>body{font-family:Arial,sans-serif;line-height:1.6;max-width:680px;margin:10vh auto;padding:0 24px;color:#111}a{color:#111}</style></head><body><h1>{$safeTitle}</h1><p>{$safeMessage}</p><p><a href=\"/\">Return to the website</a></p></body></html>";
    exit;
}

function sensear_validate_origin($config)
{
    $allowed = isset($config['allowed_origins']) && is_array($config['allowed_origins']) ? $config['allowed_origins'] : [];
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? trim($_SERVER['HTTP_ORIGIN']) : '';

    if ($origin === '' || empty($allowed)) {
        return true;
    }

    return in_array($origin, $allowed, true);
}

function sensear_verify_recaptcha($token, $expectedAction, $config)
{
    $recaptcha = isset($config['recaptcha']) && is_array($config['recaptcha']) ? $config['recaptcha'] : [];

    if (isset($recaptcha['enabled']) && !$recaptcha['enabled']) {
        return true;
    }

    $secret = isset($recaptcha['secret_key']) ? trim((string) $recaptcha['secret_key']) : '';
    if ($secret === '' || $secret === 'CHANGE_ME') {
        return 'reCAPTCHA secret key is not configured on the server.';
    }

    $token = trim((string) $token);
    if ($token === '') {
        return 'reCAPTCHA token is missing. Please refresh the page and try again.';
    }

    $fields = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '',
    ]);

    $responseBody = false;
    if (function_exists('curl_init')) {
        $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
        $responseBody = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $fields,
                'timeout' => 10,
            ],
        ]);
        $responseBody = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
    }

    if ($responseBody === false || $responseBody === '') {
        return 'Could not verify reCAPTCHA with Google.';
    }

    $data = json_decode($responseBody, true);
    if (!is_array($data)) {
        return 'Invalid reCAPTCHA response from Google.';
    }

    if (empty($data['success'])) {
        $codes = isset($data['error-codes']) && is_array($data['error-codes']) ? implode(', ', $data['error-codes']) : 'unknown error';
        return 'Google reCAPTCHA rejected the submission: ' . $codes;
    }

    if (isset($data['action']) && $expectedAction !== '' && $data['action'] !== $expectedAction) {
        return 'Google reCAPTCHA action mismatch.';
    }

    $minScore = isset($recaptcha['min_score']) ? (float) $recaptcha['min_score'] : 0.5;
    if (isset($data['score']) && (float) $data['score'] < $minScore) {
        return 'Google reCAPTCHA rejected the submission because the score was too low.';
    }

    $allowedHostnames = isset($recaptcha['allowed_hostnames']) && is_array($recaptcha['allowed_hostnames']) ? $recaptcha['allowed_hostnames'] : [];
    if (!empty($allowedHostnames) && isset($data['hostname']) && !in_array($data['hostname'], $allowedHostnames, true)) {
        return 'Google reCAPTCHA hostname mismatch.';
    }

    return true;
}

function sensear_text_from_html($html)
{
    return html_entity_decode(trim(strip_tags(preg_replace('/<br\s*\/?>(\s*)/i', "\n", $html))), ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function sensear_encode_header($value)
{
    return '=?UTF-8?B?' . base64_encode((string) $value) . '?=';
}

function sensear_smtp_read($socket, $expectedCodes)
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || substr($line, 3, 1) === ' ') {
            break;
        }
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new Exception('SMTP error: ' . trim($response));
    }

    return $response;
}

function sensear_smtp_command($socket, $command, $expectedCodes)
{
    fwrite($socket, $command . "\r\n");
    return sensear_smtp_read($socket, $expectedCodes);
}

function sensear_send_email($config, $to, $subject, $html, $replyTo = '', $text = '')
{
    $smtp = isset($config['smtp']) && is_array($config['smtp']) ? $config['smtp'] : [];
    $host = sensear_clean_smtp_host(isset($smtp['host']) ? $smtp['host'] : 'mail.sensear.music');
    $port = isset($smtp['port']) ? (int) $smtp['port'] : 587;
    $encryption = isset($smtp['encryption']) ? strtolower((string) $smtp['encryption']) : 'none';
    $timeout = isset($smtp['timeout']) ? (int) $smtp['timeout'] : 20;
    $username = isset($smtp['username']) ? (string) $smtp['username'] : '';
    $password = isset($smtp['password']) ? (string) $smtp['password'] : '';
    $fromEmail = isset($smtp['from_email']) ? (string) $smtp['from_email'] : 'info@sensear.music';
    $fromName = isset($smtp['from_name']) ? (string) $smtp['from_name'] : 'SensEar';

    if ($username === '' || $password === '' || $password === 'CHANGE_ME') {
        throw new Exception('SMTP username/password is not configured on the server.');
    }

    $remote = ($encryption === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
    $errno = 0;
    $errstr = '';
    $context = stream_context_create([
        'ssl' => [
            // Match the previous Nodemailer TLS behavior in `lib/email.ts`:
            // allow the mail server even when the certificate hostname differs.
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
        ],
    ]);

    $socket = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        throw new Exception('Could not connect to SMTP server: ' . $errstr);
    }

    stream_set_timeout($socket, $timeout);

    try {
        sensear_smtp_read($socket, [220]);
        sensear_smtp_command($socket, 'EHLO sensear.music', [250]);

        if ($encryption === 'starttls') {
            sensear_smtp_command($socket, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new Exception('Could not enable STARTTLS for SMTP connection.');
            }
            sensear_smtp_command($socket, 'EHLO sensear.music', [250]);
        }

        sensear_smtp_command($socket, 'AUTH LOGIN', [334]);
        sensear_smtp_command($socket, base64_encode($username), [334]);
        sensear_smtp_command($socket, base64_encode($password), [235]);

        sensear_smtp_command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
        sensear_smtp_command($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        sensear_smtp_command($socket, 'DATA', [354]);

        $boundary = 'sensear-' . bin2hex(random_bytes(12));
        $text = $text !== '' ? $text : sensear_text_from_html($html);
        $date = date(DATE_RFC2822);
        $messageId = '<' . bin2hex(random_bytes(16)) . '@sensear.music>';

        $headers = [];
        $headers[] = 'Date: ' . $date;
        $headers[] = 'From: ' . sensear_encode_header($fromName) . ' <' . $fromEmail . '>';
        if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
            $headers[] = 'Reply-To: <' . $replyTo . '>';
        }
        $headers[] = 'To: <' . $to . '>';
        $headers[] = 'Subject: ' . sensear_encode_header($subject);
        $headers[] = 'Message-ID: ' . $messageId;
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';

        $message = implode("\r\n", $headers) . "\r\n\r\n";
        $message .= '--' . $boundary . "\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $message .= str_replace("\n", "\r\n", str_replace("\r", '', $text)) . "\r\n\r\n";
        $message .= '--' . $boundary . "\r\n";
        $message .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $message .= str_replace("\n", "\r\n", str_replace("\r", '', $html)) . "\r\n\r\n";
        $message .= '--' . $boundary . "--\r\n";
        $message = preg_replace('/^\./m', '..', $message);

        fwrite($socket, $message . "\r\n.\r\n");
        sensear_smtp_read($socket, [250]);
        sensear_smtp_command($socket, 'QUIT', [221, 250]);
    } finally {
        fclose($socket);
    }

    return true;
}

function sensear_generate_contact_email_html($data)
{
    $name = sensear_escape($data['name']);
    $surname = sensear_escape($data['surname']);
    $businessName = isset($data['business_name']) ? sensear_escape($data['business_name']) : '';
    $email = sensear_escape($data['email']);
    $phone = isset($data['phone']) ? sensear_escape($data['phone']) : '';
    $telHref = isset($data['phone']) ? sensear_tel_href($data['phone']) : '';
    $venueType = sensear_escape($data['venue_type']);
    $serviceInterest = sensear_escape($data['service_interest']);
    $preferredCallTime = sensear_escape($data['preferred_call_time']);
    $message = nl2br(sensear_escape($data['message']));
    $receivedAt = (new DateTime('now', new DateTimeZone('Europe/Athens')))->format('n/j/Y, g:i:s A') . ' (Athens Time)';

    $businessBlock = $businessName !== '' ? '<div class="field"><div class="field-label">💼 Business Name:</div><div class="field-value">' . $businessName . '</div></div>' : '';
    $phoneBlock = $phone !== '' ? '<div class="field"><div class="field-label">📱 Phone:</div><div class="field-value"><a href="tel:' . $telHref . '">' . $phone . '</a></div></div>' : '';

    return '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:#000;color:#fff;padding:20px;text-align:center}.content{background:#f9f9f9;padding:30px;border-radius:8px;margin-top:20px}.field{margin-bottom:20px}.field-label{font-weight:bold;color:#000;margin-bottom:5px}.field-value{color:#555}.footer{text-align:center;margin-top:30px;color:#999;font-size:12px}</style></head><body><div class="container"><div class="header"><h1>SENSEAR</h1><p>New Contact Form Submission</p></div><div class="content"><div class="field"><div class="field-label">👤 Name:</div><div class="field-value">' . $name . ' ' . $surname . '</div></div>' . $businessBlock . '<div class="field"><div class="field-label">📧 Email:</div><div class="field-value"><a href="mailto:' . rawurlencode($data['email']) . '">' . $email . '</a></div></div>' . $phoneBlock . '<div class="field"><div class="field-label">🏢 Venue Type:</div><div class="field-value">' . $venueType . '</div></div><div class="field"><div class="field-label">🎯 Service Interest:</div><div class="field-value">' . $serviceInterest . '</div></div><div class="field"><div class="field-label">🕒 Preferred Call Time:</div><div class="field-value">' . $preferredCallTime . '</div></div><div class="field"><div class="field-label">Message:</div><div class="field-value">' . $message . '</div></div></div><div class="footer"><p>This email was sent from the SensEar contact form</p><p>Received at: ' . sensear_escape($receivedAt) . '</p></div></div></body></html>';
}

function sensear_generate_newsletter_email_html($data)
{
    $email = sensear_escape($data['email']);
    $source = sensear_escape($data['source']);
    $receivedAt = (new DateTime('now', new DateTimeZone('Europe/Athens')))->format('n/j/Y, g:i:s A') . ' (Athens Time)';

    return '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:#000;color:#fff;padding:20px;text-align:center}.content{background:#f9f9f9;padding:30px;border-radius:8px;margin-top:20px}.intro{margin:0 0 24px;color:#333}.field{margin-bottom:20px}.field-label{font-weight:bold;color:#000;margin-bottom:5px}.field-value{color:#555}.footer{text-align:center;margin-top:30px;color:#999;font-size:12px}</style></head><body><div class="container"><div class="header"><h1>SENSEAR</h1><p>New Newsletter Subscription</p></div><div class="content"><p class="intro">Hello SensEar team,</p><p class="intro">A new visitor has signed up to receive the SensEar Curation Journal. Their details are below so you can add them to your mailing list and follow up if appropriate. You can reply directly to this email to reach the subscriber.</p><div class="field"><div class="field-label">📧 Subscriber Email:</div><div class="field-value"><a href="mailto:' . rawurlencode($data['email']) . '">' . $email . '</a></div></div><div class="field"><div class="field-label">📍 Subscription Source:</div><div class="field-value">' . $source . '</div></div></div><div class="footer"><p>This email was sent automatically from the SensEar newsletter subscription form at sensear.music</p><p>Received at: ' . sensear_escape($receivedAt) . '</p></div></div></body></html>';
}
