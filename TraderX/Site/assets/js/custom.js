/*===============================================================================
@File: Arduix Template JS

* This file contains the JS for the actual template, this
is the file you need to edit to change the look of the
template.

This files table contents are outlined below>>>>>
=================================================================================*/

// Mean Menu
// Preloader
// Nice Select JS
// Header Sticky
// PrevScrollpos
// Client Wrap
// Brand Wrap
// Case Top Wrap
// Go to Top
// Click Event
// FAQ Accordion
// Count Time 
// Animation
// Odometer
// Subscribe form
// AJAX MailChimp
// Popup Video JS 
// Arduix Slider
// Input Plus & Minus Number JS


(function($) {
	'use strict';
	jQuery(document).on('ready', function(){
		
		// Mean Menu
		jQuery('.mean-menu').meanmenu({ 
			meanScreenWidth: "991"
		});

		// Preloader
		jQuery(window).on('load', function() {
            $('.preloader').fadeOut();
		});

		// Nice Select JS
        $('select').niceSelect();
		
		// Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >150){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
		});

		// PrevScrollpos
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("header").style.top = "0";
			} else {
				document.getElementById("header").style.top = "-100px";
			}
			prevScrollpos = currentScrollPos;
		}

        // Client Wrap
		$('.client-wrap').owlCarousel({
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 20,
			center: false,
			dots: false,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
      
        // Brand Wrap
		$('.brand-wrap').owlCarousel({
			loop:true,
			nav:false,
			autoplay:true,
			mouseDrag: true,
			margin: 0,
			center: false,
			dots: false,
			slideTransition: 'linear',
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			autoplaySpeed: 4500,
			responsive:{
				0:{
					items:2
				},
				576:{
					items:3
				},
				768:{
					items:4
				},
				992:{
					items:5
				},
				1200:{
					items:5
				}
			}
		});

        // Case Top Wrap
		$('.case-top-wrap').owlCarousel({
			loop:true,
			nav:false,
			autoplay:true,
			mouseDrag: true,
			margin: 30,
			center: false,
			dots: true,
			slideTransition: 'linear',
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			autoplaySpeed: 4500,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});

		// Go to Top
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  

		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});

		// FAQ Accordion
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
		
		// Count Time 
        function makeTimer() {
            var endTime = new Date("november  30, 2020 17:00:00 PDT");			
            var endTime = (Date.parse(endTime)) / 1000;
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
		setInterval(function() { makeTimer(); }, 300);

		// Animation
		new WOW().init();

		// Tabs
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});

		// Odometer 
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		
		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
			callback: callbackFunction
		});

		// Popup Video JS 
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
		});

		// Arduix Slider
		$('.arduix-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			mouseDrag: false,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: true,
			smartSpeed:1500,
			autoplayHoverPause: true,
			animateOut: "slideOutDown",
            animateIn: "slideInDown",
			navText: [
				"<i class='bx bx-chevron-left'></i>",
				"<i class='bx bx-chevron-right'></i>",
			],
		});
		
		// Input Plus & Minus Number JS
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
            
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
	});
})(jQuery);