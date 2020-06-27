function ajaxRequest(url, body, onSuccessFunction = false) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(body);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            let result = this.responseText;
            if (this.status === 200 && onSuccessFunction !== false) {
                onSuccessFunction(result);
            }
            if ((this.status === 500 || this.status === 400) && onErrorFunction !== false) {
                alert("Произошла ошибка. Повторите попытку позже.")
            }
        }
    }
}

function toggleNavMenu() {
    $('.main-nav-btn').toggleClass('main-nav-btn_active');
    $('.main-nav').slideToggle(200);
}

function showModal(result) {
    $("#modal_wrap").show();
}

$(document).ready(function(){
    let properties, researchSlider, serviceSlider;
    researchSlider = $('.research-slider');
    serviceSlider = $('.service__row');
    properties = {
        dots: true,
        dotsClass: 'slick-dots',
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnFocus: true,
        mobileFirst: true,
        adaptiveHeight: true,
        responsive: [
        {
            breakpoint: 993,
            settings: 'unslick',
        },
        ]
    };
    serviceSlider.slick(properties);
    researchSlider.slick(properties);
    $(window).on('resize', function () {
        if ($(window).width() < 992) {
            serviceSlider.slick('refresh');
            researchSlider.slick('refresh');
        }
    });
    $('.main-nav-btn').on('click', function(e) {
        e.preventDefault;
        toggleNavMenu();
    });
    $('.main-nav-item').on('click', function(e) {
        e.preventDefault;
        if ($(window).width() < 992) {
            toggleNavMenu();
        }
    });
    $('[data-scroll*="#"]').click(function() {
        $('html, body').animate({
            scrollTop: $(this.dataset.scroll).offset().top
        }, 600);
        return false;
    });
    $('.modal-close').click(function () {
        $('.modal-wrap').fadeOut();
    })
    $('.research-tab').on('click', function(e) {
        e.preventDefault;
        if (!$(this).hasClass('research-tab_active')) {
            $('.research-tab').removeClass('research-tab_active');
            $(this).addClass('research-tab_active');
            $(".research-slide").removeClass("research-slide_active");
            $(".slide-" + this.dataset.slide).addClass('research-slide_active');
        }
    });
    $(".request-form-input").on('focus', function() {
        this.style.borderColor = "#228CF4";
    });
    $(".request-form-input").on('focusout', function() {
        this.style.borderColor = "#000000";
    });
    let btn;
    btn = document.getElementById("request-btn");
    btn.onclick = function(event) {
        event.preventDefault;
        let body, token, chat_id, name, phone, email, txt;
        name = $("#user_name").val();
        phone = $("#user_phone").val();
        email = $("#user_email").val();
        token = "1346558055:AAEBKuGyrpW7JqF_tnqJQ3uJgBTa5ulnDAA";
        chat_id = "-272810377";
        txt = `<b>Имя пользователя: </b>${name}%0A`;
        txt += `<b>Телефон: </b>${phone}%0A`;
        txt += `<b>E-mail: </b>${email}%0A`;
        body = `parse_mode=html&text=${txt}`;
        if (body !== false) {
            ajaxRequest(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`, body, showModal);
        }
        return false;
    }
});