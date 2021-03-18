/**
 * common.js
 */

$(document).ready(function(){

	$('[data-fancybox]').fancybox({
		touch: false,
		autoFocus: false,
		backFocus: false,
		closeExisting: true
	});

	$('.header-controls__favorites').click(function(){
		$('.header-controls__detail').slideToggle(300);
	})

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

	$('.header-burger, .nav-close').click(function(){
		$('.nav').toggleClass('fixed');
		$('.nav-bg').fadeToggle();
	});

	$(".popup-auth__switch label").click(function (){
	  var $this = $(this),
	      id    = $this.data("form");	

	  $(".popup-auth__switch label input").prop("checked", false);
		$(".popup-auth__switch label[data-form=" + id + "] input").prop("checked", true);

		$('#popup-reg form').removeClass("active").hide();
		$('#popup-reg form[data-form=' + id + ']').addClass("active").show();

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


// function checkOffset() {

//   // var a=$(document).scrollTop()+window.innerHeight;
//   // var b=$('.footer').offset().top;
// 	// if($(window).width() > 1200){
// 	// 	if (a<b) {
// 	// 		$('.nav').css({'bottom': '20px', 'top': '20px'});
// 	// 	} else {
// 	// 		$('.nav').css({'bottom': (20+(a-b))+'px', 'top': (20-(a-b))+'px'});
// 	// 	}
// 	// } 

var padding = $('.header').outerHeight();
$('body').css('padding-top', padding);

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('.header');
​
   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.css({
					'transform': 'translateY(-'+padding+'px)',
					'box-shadow': '0 0 20px 0 rgba(0,0,0,0)'
				});
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.css({
					'transform': 'translateY(0px)',
					'box-shadow': '0 0 20px 0 rgba(0,0,0,.03)'
				});
      }
      c = currentScrollTop;
  });
  
});


var div = $('.assistant-filter__list'),
    div_sh = $(div)[0].scrollHeight,
    div_h = div.outerHeight();

if(div_sh == div_h){
	$('.assistant-filter__footer-more').fadeOut(200);
}

$(div).scroll(function(){

    if ($(this).scrollTop() >= div_sh - div_h - 5) {
			$('.assistant-filter__footer-more').fadeOut(200);
    }
    else {
      $('.assistant-filter__footer-more').fadeIn(200);
    }

		if($(this).scrollTop() > 0){
			$('.assistant-filter__top-more').fadeIn(200);
		}else {
      $('.assistant-filter__top-more').fadeOut(200);
    }

}); 

