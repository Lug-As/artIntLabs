<?php

/* https://api.telegram.org/bot1014315431:AAEvVVZFvAtnL6OP3beLUXHsj1YWIh3zLrI/getUpdates,
где XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

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

$token = "1346558055:AAEBKuGyrpW7JqF_tnqJQ3uJgBTa5ulnDAA";
$chat_id = "-272810377";
$arr = [
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,
	'Email: ' => $email
];

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");