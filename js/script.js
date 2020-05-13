

$(window).resize(function () {
    if ($(window).width() < 992) {
        $('.row').slick({
            dots: true,
            dotsClass: 'slick-dots',
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: false,
            mobileFirst: true,
            speed: 300,
            pauseOnFocus: true,
        });
    }

});

$(window).resize(function () {
    if ($(window).width() > 993) {
        window.location = window.location.href
    }
});
/*$(window).resize(function () {
    if (document.documentElement.clientWidth > 768) {
        $('.row').slick({});
    });
    }
    */
/*function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.row').slick({}
        );
    }
} else {
    $(hide) {
        $('.row').slick({}
        );
    }
}
var x = window.matchMedia("(max-width: 768px)")
myFunction(x)
x.addListener(myFunction)
*/