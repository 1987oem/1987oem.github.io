$(function () {

    var $right_arrow1 = $('.working__steps__step1__right_arrow');

    $right_arrow1.on('click', function(e) {
        var $slide1 = $('.working__steps__step1__slide1').css('display');
        var $slide2 = $('.working__steps__step1__slide2').css('display');
        var $slide3 = $('.working__steps__step1__slide3').css('display');

        e.preventDefault();

        if($slide1 == 'block') {
            $('.working__steps__step1__slide1').hide();
            $('.working__steps__step1__slide2').show();
            $('.working__steps__step1__slide3').hide();
        } else if ($slide2 == 'block') {
            $('.working__steps__step1__slide1').hide();
            $('.working__steps__step1__slide2').hide();
            $('.working__steps__step1__slide3').show();
        } else {
            $('.working__steps__step1__slide1').show();
            $('.working__steps__step1__slide2').hide();
            $('.working__steps__step1__slide3').hide();
        }


    });

    var $left_arrow1 = $('.working__steps__step1__left_arrow');

    $left_arrow1.on('click', function(e) {
        var $slide1 = $('.working__steps__step1__slide1').css('display');
        var $slide2 = $('.working__steps__step1__slide2').css('display');
        var $slide3 = $('.working__steps__step1__slide3').css('display');

        e.preventDefault();

        if($slide1 == 'block') {
            $('.working__steps__step1__slide1').hide();
            $('.working__steps__step1__slide2').hide();
            $('.working__steps__step1__slide3').show();
        } else if ($slide2 == 'block') {
            $('.working__steps__step1__slide1').show();
            $('.working__steps__step1__slide2').hide();
            $('.working__steps__step1__slide3').hide();
        } else {
            $('.working__steps__step1__slide1').hide();
            $('.working__steps__step1__slide2').show();
            $('.working__steps__step1__slide3').hide();
        }


    });

    var $right_arrow2 = $('.working__steps__step2__right_arrow');

    $right_arrow2.on('click', function(e) {
        var $slide1 = $('.working__steps__step2__slide1').css('display');
        var $slide2 = $('.working__steps__step2__slide2').css('display');
        var $slide3 = $('.working__steps__step2__slide3').css('display');

        e.preventDefault();

        if($slide1 == 'block') {
            $('.working__steps__step2__slide1').hide();
            $('.working__steps__step2__slide2').show();
            $('.working__steps__step2__slide3').hide();
        } else if ($slide2 == 'block') {
            $('.working__steps__step2__slide1').hide();
            $('.working__steps__step2__slide2').hide();
            $('.working__steps__step2__slide3').show();
        } else {
            $('.working__steps__step2__slide1').show();
            $('.working__steps__step2__slide2').hide();
            $('.working__steps__step2__slide3').hide();
        }


    });

    var $left_arrow2 = $('.working__steps__step2__left_arrow');

    $left_arrow2.on('click', function(e) {
        var $slide1 = $('.working__steps__step2__slide1').css('display');
        var $slide2 = $('.working__steps__step2__slide2').css('display');
        var $slide3 = $('.working__steps__step2__slide3').css('display');

        e.preventDefault();

        if($slide1 == 'block') {
            $('.working__steps__step2__slide1').hide();
            $('.working__steps__step2__slide2').hide();
            $('.working__steps__step2__slide3').show();
        } else if ($slide2 == 'block') {
            $('.working__steps__step2__slide1').show();
            $('.working__steps__step2__slide2').hide();
            $('.working__steps__step2__slide3').hide();
        } else {
            $('.working__steps__step2__slide1').hide();
            $('.working__steps__step2__slide2').show();
            $('.working__steps__step2__slide3').hide();
        }

    });

    var $right_arrow3 = $('.working__steps__step3__right_arrow');

    $right_arrow3.on('click', function(e) {
        var $slide1 = $('.working__steps__step3__slide1').css('display');
        var $slide2 = $('.working__steps__step3__slide2').css('display');
        var $slide3 = $('.working__steps__step3__slide3').css('display');

        e.preventDefault();

        if($slide1 == 'block') {
            $('.working__steps__step3__slide1').hide();
            $('.working__steps__step3__slide2').show();
            $('.working__steps__step3__slide3').hide();
        } else if ($slide2 == 'block') {
            $('.working__steps__step3__slide1').hide();
            $('.working__steps__step3__slide2').hide();
            $('.working__steps__step3__slide3').show();
        } else {
            $('.working__steps__step3__slide1').show();
            $('.working__steps__step3__slide2').hide();
            $('.working__steps__step3__slide3').hide();
        }


    });

    var $left_arrow3 = $('.working__steps__step3__left_arrow');

    $left_arrow3.on('click', function(e) {
        var $slide1 = $('.working__steps__step3__slide1').css('display');
        var $slide2 = $('.working__steps__step3__slide2').css('display');
        var $slide3 = $('.working__steps__step3__slide3').css('display');

        e.preventDefault();

        if($slide1 == 'block') {
            $('.working__steps__step3__slide1').hide();
            $('.working__steps__step3__slide2').hide();
            $('.working__steps__step3__slide3').show();
        } else if ($slide2 == 'block') {
            $('.working__steps__step3__slide1').show();
            $('.working__steps__step3__slide2').hide();
            $('.working__steps__step3__slide3').hide();
        } else {
            $('.working__steps__step3__slide1').hide();
            $('.working__steps__step3__slide2').show();
            $('.working__steps__step3__slide3').hide();
        }

    });

});