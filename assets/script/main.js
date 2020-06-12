//------------------------------
//navbar
//------------------------------

	//navbar scroll class
	$(document).ready(function(){
	  $(window).scroll(function(){
	  	var scroll = $(window).scrollTop();
		  if (scroll > 0) {
		    $('nav').addClass('scroll');
		  }

		  else{
			  $('nav').removeClass('scroll');	
		  }
	  })
	});

//------------------------------
//Smooth In-page navigation
//------------------------------

	$('a[href*="#"]').on('click', function(e) {
		$('html, body').animate(
			{
			    scrollTop: $($(this).attr('href')).offset().top,
			},
			500,
			'linear'
		);
	});

//------------------------------
//Projects Carousel 
//------------------------------

	$('.owl-carousel').owlCarousel({
		    loop:true,
		    center:true,
		    margin:50,
		    dots:true,
		    autoWidth:true,
		    autoplay: true,
		    smartSpeed: 1000,
		    autoplayTimeout:10000,
		    autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1,
		            autoplay:true,
		            margin:10,
		            autoplayTimeout:5000,
		        },
		        600:{
		            items:2,
		            autoplay:true,
		            margin:30,
		            autoplayTimeout:5000,
		        },
		        1000:{
		            items:4,
		            margin:40,
		            autoplay:true,
		            autoplayTimeout:9000,
		        }
		    }
		})

//------------------------------
//Counter
//------------------------------	

			$(function () {
			  	$("#counter_up").waypoint(function (direction) {
			        if (direction === "down") {
						$(".counter").each(function () {
							var $this = $(this);
					        var counterNumber = $this.attr("data-count");
					        $({
					          couterInit: $this.text()
					        }).animate({
					          couterInit: counterNumber
					        }, {
							        duration: 3000,
							        easing: 'swing',
							        step: function () {
							            $this.text(Math.ceil(this.couterInit));
							        },
							        complete: function () {
							        	$this.text(this.counterNumbercountNum);
							        }
							    })
							    });
							    }
							  },{
							    	offset:"50%"
							    });
						});


//------------------------------
//Pre-Loader
//------------------------------

	$(window).on('load', function () {
        $('#pre_loader').fadeOut('slow');
        $('#pre_loader').css({"display":"none"});
    });
