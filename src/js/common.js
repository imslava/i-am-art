/**
 * common.js
 */

$(document).ready(function(){

	$('[data-fancybox]').fancybox({
		touch: false,
		autoFocus: false,
		backFocus: false
	});

	$(".masked").inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	});

	$('.js-validate').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	// $('.header-search').hover(function(){
	// 	$('.header-search__assistant').slideToggle(300);
	// }, function(){
	// 	$('.header-search__assistant').slideToggle(300);
	// });

	// $('.header-controls__favorites').hover(function(){
	// 	$('.header-controls__detail').slideToggle(300);
	// }, function(){
	// 	$('.header-controls__detail').slideToggle(300);
	// });

	$('.header-search').click(function(){
		$('.header-search__assistant').slideToggle(300);
	})

	$('.header-controls__favorites').click(function(){
		$('.header-controls__detail').slideToggle(300);
	})

	// $('.header-search').click(function(){
	// 	$('.header-search__assistant').slideToggle(300);
	// })

	var promoSlider = new Swiper('.promo-slider',{
		speed:700,
		effect: 'fade',
		fadeEffect: {
				crossFade: true
		},
		direction: 'vertical',
		autoplay:{
			delay: 5000
		},
		pagination: {
				el: '.promo-slider__pagination',
				clickable:true,
		},
});

});

function scroll() {
	$(".js-scroll").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 30;
		$('html, body').animate({
			scrollTop: top
		}, 1500);
	});
}

scroll();