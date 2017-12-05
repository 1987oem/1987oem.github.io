// ---------MENU--------//

$(function () {
    $("#my-menu").mmenu({
        extensions: ["theme-black", "effect-menu-slide", "pagedim-black"],
        navbar: {
            title: '<img src="img/logo.svg" alt="Make Up">'
        },
        offCanvas: {
            position: 'right'
        }
    });

    //   Get the API
    var api = $("#my-menu").data("mmenu");
    api.bind( "opened", function() {
        $(".hamburger").addClass("is-active");
    });
    api.bind( "closed", function() {
        $(".hamburger").removeClass("is-active");
    });
});

// ---------Main CAROUSEL--------//

    $(".carousel-services").on("initialized.owl.carousel", function () {
        setTimeout(function () {
            carouselService()
        }, 500);
    });

    $(".carousel-services").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

// ---------Carousel Auto-Height--------//

    function carouselService() {
        $(".carousel-services-item").each(function () {
            var ths = $(this);
                thsHeight = ths.find(".carousel-services-content").outerHeight();
                    ths.find(".carousel-services-image").css('min-height', thsHeight);
        });
    }
    carouselService();


// ---------Style the first/second word in "Logo/h2/h3 etc."--------//

    $(".carousel-services-composition .h3").each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

    $("section .h2").each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

// ---------Selectize--------//

    $("select").selectize({
        create: true
    });

// ---------CallBack Form--------//

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find(".success").addClass("active").css("display", "flex").hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                $(th).find(".success").removeClass("active").fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

// ---------Resize Window--------//

    function onResize() {
        $(".carousel-services-content").equalHeights();
    }
    onResize();
    window.onResize = function () {onResize()};

// ---------Review's CAROUSEL--------//

$(".reviews").owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeights: true
});

// ---------Partner's CAROUSEL--------//

$(".partners").owlCarousel({
    loop: true,
    dots: false,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }

});

// ---------PageUp Button--------//

$(window).scroll(function () {
    if($(this).scrollTop() > $(this).height()) {
        $(".top").addClass("active");
    } else {
        $(".top").removeClass("active");
    }
});
$(".top").click(function () {
    $("html, body").stop().animate({scrollTop: 0}, 'slow', 'swing');
});

// ---------Preloader--------//

$(window).on("load", function () {
   $(".preloader").delay(1000).fadeOut("slow");
})