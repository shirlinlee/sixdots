$(document).ready(function() {
    "use strict";
    $('.filtr-item figure').each(function() {
        const str = $(this).attr('id').substr(4, 4)
        $(this).find('.work_pic').attr('src', "images/works/" + str + ".png");
        // console.log("images/works/" + str + ".png")
    })
    /***** Magnific-popup *****/
    $('.filtr-item').magnificPopup({
        type: 'inline',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'

    });


    /***** Pre-Loader *****/
    $(window).on('load', function() {
        
        var fiterEl = 'all';
        console.log(hash)
        /***** Filterizer *****/
        $('.filtr-container').filterizr({
            layout: 'sameWidth',
            easing: 'ease-out',
            filter: fiterEl,
            selector: '.filtr-container',
            setupControls: true
        });
        //Filter controls
        $('.portfolio-filter li').on('click', function(e) {
            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
        });
    });

});