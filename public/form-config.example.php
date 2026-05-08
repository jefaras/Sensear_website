<?php
/**
 * SensEar static form configuration.
 *
 * Copy this file to `form-config.php` in the deployed document root and fill in
 * the real SMTP password and reCAPTCHA secret key on the Plesk server.
 * Do not commit or publicly share the real `form-config.php` file.
 */

return [
    'smtp' => [
        'host' => 'mail.sensear.music',
        'port' => 587,

        // Match the former Nodemailer setup by default: no SSL/STARTTLS when false.
        // Use 'ssl' for port 465, 'starttls' for port 587 if your host requires it,
        // or 'none' to authenticate without TLS.
        'encryption' => 'none',

        'username' => 'info@sensear.music',
        'password' => 'CHANGE_ME',
        'from_email' => 'info@sensear.music',
        'from_name' => 'SensEar',
        'to' => ['info@sensear.music', 'jefaraz@gmail.com'],
        'timeout' => 20,
    ],

    'recaptcha' => [
        'enabled' => true,
        'secret_key' => 'CHANGE_ME',
        'min_score' => 0.5,
        'allowed_hostnames' => ['sensear.music', 'www.sensear.music', 'test.sensear.music'],
    ],

    'allowed_origins' => [
        'https://sensear.music',
        'https://www.sensear.music',
        'https://test.sensear.music',
    ],
];
