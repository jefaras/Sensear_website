<?php

require __DIR__ . '/form-lib.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sensear_respond(false, 'Method not allowed.', 405);
}

$config = sensear_load_config();

if (!sensear_validate_origin($config)) {
    sensear_respond(false, 'Invalid form origin.', 403);
}

$recaptchaResult = sensear_verify_recaptcha(isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '', 'newsletter', $config);
if ($recaptchaResult !== true) {
    sensear_respond(false, $recaptchaResult, 400, ['errors' => ['_form' => [$recaptchaResult]]]);
}

$data = [
    'email' => trim(isset($_POST['email']) ? $_POST['email'] : ''),
    'source' => trim(isset($_POST['source']) ? $_POST['source'] : 'Website'),
];

if ($data['source'] === '') {
    $data['source'] = 'Website';
}

$errors = [];
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = ['Invalid email address'];
}

if (!empty($errors)) {
    sensear_respond(false, 'Please enter a valid email address.', 422, ['errors' => $errors]);
}

$html = sensear_generate_newsletter_email_html($data);
$recipients = sensear_normalize_recipients($config['smtp']['to']);

if (empty($recipients)) {
    sensear_respond(false, 'No recipient email address is configured.', 500, ['errors' => ['_form' => ['No recipient email address is configured.']]]);
}

try {
    foreach ($recipients as $recipient) {
        sensear_send_email($config, $recipient, '[SensEar] New Newsletter Subscription from ' . $data['email'], $html, $data['email']);
    }
} catch (Exception $e) {
    sensear_respond(false, 'Failed to subscribe. Server Error: ' . $e->getMessage(), 500, ['errors' => ['_form' => ['Failed to subscribe. Server Error: ' . $e->getMessage()]]]);
}

sensear_respond(true, 'Thank you for subscribing.');
