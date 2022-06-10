/* --------------------------------------------------------

Template Name: X-Fusion
Description: One Page Parallax Html5 Template
Version: 1.0

=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header takes the Full Height of the window
3 - Sticky Menu
4 - About Section Skill Bars
5 - Hide menu after clicking on a link
6 - Jquery Smooth Scroll
7 - jquery scroll spy
8 - Parallax Effect
9 - Start numbers animate at fun-facts section
10 - Start Isotop Plugin in Portfolio Section
11 - Start Owl Carousel Plugin in Client Section

------------------------------------------------------- */

(function($) {

    "use strict";

	/* ---------------------------------------------------
        1 - Adjust Loading Page
	----------------------------------------------------- */
    $(window).on("load", function () {
        $(".preloader .item-wrapper").delay(100).animate({
            top: "-100%"
        }, 100, "easeInQuart");
        $(".preloader").delay(100).fadeOut(1500);
    });
        
    /* ----------------------------------------------------------
        2 - Make Header takes the Full Height of the window
    ------------------------------------------------------------ */
    var homeSec = $("#home");
    homeSec.height($(window).height());

    $(window).on("resize", function() {
        homeSec.height($(window).height());
    });
    
    /* ---------------------------------------------------
        3 - Sticky Menu
    ----------------------------------------------------- */
     var $window = $(window);
    // if ($window.width() > 767) {
    //     new WOW().init();
    // }
    // :: 8.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 20) {
            $('.main-header').addClass('sticky slideInDown');
        } else {
            $('.main-header').removeClass('sticky slideInDown');
        }
    });

    /* ---------------------------------------------------
        5 - Jquery Smooth Scroll
    ----------------------------------------------------- */
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
    });      

    /* ---------------------------------------------------
        6 - jquery scroll spy
    ----------------------------------------------------- */
    $(window).on("scroll", function () {
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 94
        }); 
    });

    /* ---------------------------------------------------
        7 - Parallax Effect
    ----------------------------------------------------- */
    var parallaxHome 	    = $("#home.parallax"),
        parallaxVideos 	    = $("#video-bg.parallax"),
        parallaxFacts 	    = $("#fun-facts.parallax"),
        parallaxClient 	    = $("#client.parallax");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        parallaxHome.css({"background-attachment": "scroll"});
        parallaxVideos.css({"background-attachment": "scroll"});
        parallaxFacts.css({"background-attachment": "scroll"});
        parallaxClient.css({"background-attachment": "scroll"});
    } else {
        parallaxHome.parallax("50%", 0.3);
        parallaxVideos.parallax("50%", 0.3);
        parallaxFacts.parallax("50%", 0.3);
        parallaxClient.parallax("50%", 0.3);
    }
    
    /* ---------------------------------------------------
        8 - Start numbers animate at fun-facts section 
    ----------------------------------------------------- */
    $(".fun-facts").appear(function () {
          $(".timer").countTo();
    }, {
          accX: 0,
          accY: -350
    });
    
    /* ---------------------------------------------------
        9 - MixitUp in Portfolio Section
    ----------------------------------------------------- */

    /* --------------------------------------------------------
        10 - Start Magnific Popup Plugin in Video-bg Section
    ---------------------------------------------------------- */   
    
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    /* ---------------------------------------------------
        11 - Start Owl Carousel Plugin in Client Section
    ----------------------------------------------------- */
    $(".client-group").owlCarousel({
        navigation: false,
        autoPlay: 3500,
        slideSpeed: 2500,
        pagination: true,
        paginationSpeed: 2500,
        singleItem: true 
    });

})(jQuery);

 $(function () {
            
            var filterList = {
            
                init: function () {
       
                    $('#portfoliolist1').mixItUp({
                    selectors: {
                      target: '.portfolio1',
                      filter: '.filter' 
                  },
                  load: {
                 
                }     
                    });                             
                
                }

            };
            
            // Run the show!
            filterList.init();
            
        }); 