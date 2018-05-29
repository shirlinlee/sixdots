var hash = location.hash.replace('#', '');

$(document).ready(function() {
    "use strict";
    $('.filtr-item figure').each(function() {
            const str = $(this).attr('id').substr(4, 4)
            $(this).find('.work_pic').attr('src', "images/works/" + str + ".png");
            $(this).find('.work_frame').css({ backgroundImage:"url(/images/works/" + str + ".png)"})
            
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

    //Filter controls
    $('.portfolio-filter li').on('click', function(e) {
        $('.portfolio-filter li').removeClass('active');
        $(this).addClass('active');
    });

    /***** Pre-Loader *****/
    $(window).on('load', function() {
        var fiterEl = (hash === '') ? 'all' : hash;
        console.log(hash)

        /***** Filterizer *****/
        $('.filtr-container').filterizr({
            layout: 'sameWidth',
            easing: 'ease-out',
            filter: fiterEl,
            selector: '.filtr-container',
            setupControls: true
        });

        var currentTab = Number(fiterEl);
        if (hash === '') currentTab = 0;
        $('.portfolio-filter li').eq(currentTab).addClass('active');
        history.replaceState({}, document.title, "work.html");

    });

});