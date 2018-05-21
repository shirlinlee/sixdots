$(document).ready(function() {
    "use strict";


    /***** WOW Js *****/
    // new WOW().init();
    var wow = new WOW({
        boxClass: 'ani', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();


    $('.view_more').click(function() {
        $("html, body").animate({ scrollTop: $(window).innerHeight() }, 700);
    });

    $('.work').on('hover', '.W60', function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');

    });

    $('#portfolio>div').on('click',function(){
        var index = $(this).attr('id').substring(4,5);
        window.location="work.html#"+index;
        
        // console.log(index)
    })


});