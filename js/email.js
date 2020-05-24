
// Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
    'use strict';
    $('#form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'send.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                    alert('Сообщение отправлено');
                    $('#form').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });
    });
});
