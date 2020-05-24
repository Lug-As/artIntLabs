<?php
require ' phpmailer/PHPMailer.php';
require ' phpmailer/SMTP.php';
require ' phpmailer/Exception.php';
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

    // Настройки вашей почты, для gmail
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('youremail@gmail.com', 'YOUR NAME'); // Адрес самой почты и имя отправителя
    // для яндекса
   // $mail->Host = ‘smtp.yandex.ru’;
   // $mail->SMTPSecure = ‘ssl’;
   // $mail->Port = 465;

    $mail->addAddress('skal.04@mail.com');// Получатель письма
    // $mail->addAddress('youremail@gmail.com');  Ещё один, если нужен

    // Прикрипление файлов к письму
    if (!empty($_FILES['myfile']['name'][0])) {
        for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
            $filename = $_FILES['myfile']['name'][$ct];
            if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
            } else {
                $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
            }
        }
    }


    // Само письмо

    $mail->isHTML(true);

    $mail->Subject = 'Заголовок письма';
    $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Почта:</b> $email<br><br>
        <b>Номер телефона:</b><br>$phone";


// Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";
    } else {
        echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}