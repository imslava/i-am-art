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
		loop: true,
		speed: 700,
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
				clickable: true,
		}
	});

	var productItemGallery = new Swiper('.product-item__gallery',{
		loop: true,
		allowTouchMove: false,
		pagination: {
				el: '.product-item__pagination',
				clickable: true,
		}
	});

	$(".sophistic-list li").click(function (){
	  var $this = $(this),
	      id    = $this.data("tab");	

	  $(".sophistic-list li").removeClass("active");
		$(".sophistic-list li[data-tab=" + id + "]").addClass("active");

		$('.sophistic-content').removeClass("active").hide();
		$('.sophistic-content[data-tab=' + id + ']').addClass("active").fadeIn();

	});

	if($('.novelty-tags').height() > 36){
		$('.novelty-tags').addClass('novelty-tags__more');
	}else{
		$('.novelty-tags').removeClass('novelty-tags__more');
	}
	
	$('.novelty-tags__btn').click(function(){
		$('.novelty-tags').toggleClass('novelty-tags__height');
		$(this).html($(this).text() == 'Больше' ? 'Меньше' : 'Больше');
	});

	$('.product-item__like').click(function(){
		$(this).toggleClass('active');
	});

	$(".about-tabs li").click(function (){
	  var $this = $(this),
	      id    = $this.data("tab");	

	  $(".about-tabs li").removeClass("active");
		$(".about-tabs li[data-tab=" + id + "]").addClass("active");

		$('.about-tab').removeClass("active").hide();
		$('.about-tab[data-tab=' + id + ']').addClass("active").fadeIn();

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