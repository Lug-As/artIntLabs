<?php
// Файлы phpmailer
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/Exception.php';

// Переменные, которые отправляет пользователь
if (!isset($_POST['name']) or !isset($_POST['phone']) or !isset($_POST['email'])) {
    http_response_code(400);
    die;
}

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
	$mail->addAddress('skaliushartem@gmail.com');  

	$mail->isHTML(true);

	$mail->Subject = 'Заголовок письма';
	$mail->Body    = "<b>Имя:</b> $name<br>
	<b>Почта:</b> $email<br>
	<b>Номер:</b> $phone";

	// Проверяем отравленность сообщения
	echo $msg;

} catch (Exception $e) {
	echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}