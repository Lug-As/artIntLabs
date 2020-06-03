<?php
// Файлы phpmailer
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/Exception.php';

if (!isset($_POST['name']) or !isset($_POST['phone']) or !isset($_POST['email'])) {
    http_response_code(400);
    die;
}

// Переменные, которые отправляет пользователь
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);

if ($name === "" or $phone === "" or $email === "") {
    http_response_code(400);
    die;
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
	$msg = "Сообщение успешно отправлено.";
	$mail->setLanguage('ru', 'mailer/language/');
	$mail->isSMTP();   
	$mail->CharSet = "UTF-8";
	$mail->SMTPAuth = true;

	// Настройки вашей почты
	$mail->Username = 'mailer.tyoma@mail.ru';
	$mail->Password = 'oaYotIpT3Y9}';
	$mail->SMTPSecure = 'ssl';
	$mail->Host = 'ssl://smtp.mail.ru';
	$mail->Port = 465;
	$mail->setFrom('mailer.tyoma@mail.ru', 'Request Mailer'); // Адрес самой почты и имя отправителя

	// Получатель письма
	$mail->addAddress('skaliushartem@gmail.com'); // sergey-artlab@yandex.ru

	$mail->isHTML(true);

	$mail->Subject = 'Новая заявка';
	$mail->Body = "<b>Имя:</b> $name<br>
	<b>Почта:</b> $email<br>
	<b>Номер:</b> $phone";

	$mail->send();
	$result = "success";
	$status = "Cообщение было успешно отправлено.";
} catch (Exception $e) {
	$result = "error";
    $status = "Сообщение не было отправлено.";
    http_response_code(500);
}

echo json_encode(["result" => $result, "status" => $status]);