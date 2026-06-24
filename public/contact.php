<?php

require __DIR__ . '/form-lib.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sensear_respond(false, 'Method not allowed.', 405);
}

$config = sensear_load_config();

if (!sensear_validate_origin($config)) {
    sensear_respond(false, 'Invalid form origin.', 403);
}

$recaptchaResult = sensear_verify_recaptcha(isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '', 'contact', $config);
if ($recaptchaResult !== true) {
    sensear_respond(false, $recaptchaResult, 400, ['errors' => ['_form' => [$recaptchaResult]]]);
}

$data = [
    'name' => trim(isset($_POST['name']) ? $_POST['name'] : ''),
    'surname' => trim(isset($_POST['surname']) ? $_POST['surname'] : ''),
    'business_name' => trim(isset($_POST['business_name']) ? $_POST['business_name'] : ''),
    'email' => trim(isset($_POST['email']) ? $_POST['email'] : ''),
    'phone' => trim(isset($_POST['phone']) ? $_POST['phone'] : ''),
    'country_code' => trim(isset($_POST['country_code']) ? $_POST['country_code'] : ''),
    'venue_type' => trim(isset($_POST['venue_type']) ? $_POST['venue_type'] : ''),
    'service_interest' => trim(isset($_POST['service_interest']) ? $_POST['service_interest'] : ''),
    'preferred_call_time' => trim(isset($_POST['preferred_call_time']) ? $_POST['preferred_call_time'] : ''),
    'message' => trim(isset($_POST['message']) ? $_POST['message'] : ''),
];

$errors = [];
$preferredCallTimes = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00', '19:00 - 21:00'];

if (sensear_strlen($data['name']) < 2) {
    $errors['name'] = ['Name must be at least 2 characters'];
}

if (sensear_strlen($data['surname']) < 2) {
    $errors['surname'] = ['Surname must be at least 2 characters'];
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = ['Invalid email address'];
}

if (strlen(preg_replace('/\D/', '', $data['phone'])) !== 10) {
    $errors['phone'] = ['Phone number must contain exactly 10 digits'];
}

if ($data['venue_type'] === '') {
    $errors['venue_type'] = ['Please select a venue type'];
}

if ($data['service_interest'] === '') {
    $errors['service_interest'] = ['Please select a service interest'];
}

if (!in_array($data['preferred_call_time'], $preferredCallTimes, true)) {
    $errors['preferred_call_time'] = ['Please select a valid preferred call time'];
}

if (sensear_strlen($data['message']) < 10) {
    $errors['message'] = ['Message must be at least 10 characters'];
}

if (!empty($errors)) {
    sensear_respond(false, 'Please correct the highlighted fields.', 422, ['errors' => $errors]);
}

$data['phone'] = $data['country_code'] !== '' ? $data['country_code'] . ' ' . $data['phone'] : $data['phone'];

$html = sensear_generate_contact_email_html($data);
$recipients = sensear_normalize_recipients($config['smtp']['to']);

if (empty($recipients)) {
    sensear_respond(false, 'No recipient email address is configured.', 500, ['errors' => ['_form' => ['No recipient email address is configured.']]]);
}

try {
    foreach ($recipients as $recipient) {
        sensear_send_email($config, $recipient, '[SensEar] New Contact Form Submission from ' . $data['name'], $html, $data['email']);
    }
} catch (Exception $e) {
    sensear_respond(false, 'Failed to send email. Server Error: ' . $e->getMessage(), 500, ['errors' => ['_form' => ['Failed to send email. Server Error: ' . $e->getMessage()]]]);
}

sensear_respond(true, 'Thank you. Your message has been sent successfully.');
