$(document).ready(function(){

	$('.tablet-owl').owlCarousel({
		loop:true,
		nav:false,
		items: 1,
		autoplay: Boolean,
		mouseDrag: true,
		dots: false,
		autoplayTimeout: 5000,
	});
	$('.phone-owl').owlCarousel({
		loop:true,
		nav:false,
		items: 1,
		autoplay: Boolean,
		mouseDrag: true,
		dots: true,
		autoplayTimeout: 3000,
		animateOut: "fadeOutDown",
		animateIn: 'fadeInUp'
	});
});		