"use strict";function ajaxRequest(e,t,s=!1){let a=new XMLHttpRequest;a.open("POST",e,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(t),a.onreadystatechange=function(){if(4===this.readyState){let e=this.responseText;200===this.status&&!1!==s&&s(e),500!==this.status&&400!==this.status||!1===onErrorFunction||alert("Произошла ошибка. Повторите попытку позже.")}}}function serializeSelectorsArray(e){let t,s;for(s=0,t="";s<e.length;){let a,o,n;if(a=e[s],o=document.querySelector(a),n=o.value.trim(),""===n)return alert("Необходимо заполнить все поля"),!1;a!==e[0]&&(t+="&"),t+=o.name+"="+n,o.value="",s++}return t}function toggleNavMenu(){$(".main-nav-btn").toggleClass("main-nav-btn_active"),$(".main-nav").slideToggle(200)}function showModal(e){$("#modal_wrap").show()}$(document).ready((function(){let e,t,s,a,o;t=$(".research-slider"),s=$(".project-slider"),a=$(".service__row"),e={dots:!0,dotsClass:"slick-dots",autoplay:!0,arrows:!1,pauseOnFocus:!0,mobileFirst:!0,adaptiveHeight:!0,responsive:[{breakpoint:993,settings:"unslick"}]},a.slick({autoplaySpeed:6e3,...e}),t.slick({autoplaySpeed:1e4,...e}),s.slick({infinite:!0,slidesToShow:3,slidesToScroll:2,dots:!0,dotsClass:"slick-dots",autoplay:!0,arrows:!1,autoplaySpeed:1e4}),$(window).on("resize",(function(){$(window).width()<992&&(a.slick("refresh"),t.slick("refresh"))})),$(".main-nav-btn").on("click",(function(e){e.preventDefault,toggleNavMenu()})),$(".main-nav-item").on("click",(function(e){e.preventDefault,$(window).width()<992&&toggleNavMenu()})),$('[data-scroll*="#"]').click((function(){return $("html, body").animate({scrollTop:$(this.dataset.scroll).offset().top},600),!1})),$(".modal-close").click((function(){$(".modal-wrap").fadeOut()})),$(".research-tab").on("click",(function(e){e.preventDefault,$(this).hasClass("research-tab_active")||($(".research-tab").removeClass("research-tab_active"),$(this).addClass("research-tab_active"),$(".research-slide").removeClass("research-slide_active"),$(".slide-"+this.dataset.slide).addClass("research-slide_active"))})),$(".request-form-input").on("focus",(function(){this.style.borderColor="#228CF4"})),$(".request-form-input").on("focusout",(function(){this.style.borderColor="#000000"})),o=document.getElementById("request-btn"),o.onclick=function(e){let t;return e.preventDefault,t=serializeSelectorsArray(["#user_name","#user_phone","#user_email"]),!1!==t&&ajaxRequest("/telegram.php",t,showModal),!1}}));