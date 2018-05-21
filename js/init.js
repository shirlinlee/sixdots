$(document).ready(function() {
    "use strict";

    /***** Sicky.js *****/
    $(".navbar").sticky({ topSpacing: 0 });

    /***** Smooth Scroll *****/
    smoothScroll.init({
        speed: 600
    });

    /***** Scroll Spy *****/
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 50
    });

    /***************** Back To Top ******************/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").hide();
        }
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 900);
    });

    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
    });


});