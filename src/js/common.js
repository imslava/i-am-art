/**
 * common.js
 */

// rulse fancybox
$('[data-fancybox]').fancybox({
	touch: false,
	autoFocus: false,
	backFocus: false,
	closeExisting: true
});

// swipen in big pipup
$('[data-popup-big]').fancybox({
	touch: false,
	autoFocus: false,
	backFocus: false,
	closeExisting: true,
	beforeShow: function( instance, current ) {
		var popupRecommend = new Swiper('.popup-recommend-carousel',{
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
			observer: true,
			observeParents: true,
			pagination: {
					el: '.popup-recommend-carousel__pagination',
					clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
				768: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				525: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
			}
		});
	}
});

// open favorite
$('.header-controls__favorites').click(function(){
	$('.header-controls__detail').slideToggle(300);
})

// promo slider
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

// item photo slider
var productItemGallery = new Swiper('.product-item__gallery',{
	loop: true,
	observer: true,
	observeParents: true,
	allowTouchMove: false,
	pagination: {
			el: '.product-item__pagination',
			clickable: true,
	}
});

// tabs
$(".sophistic-list li").click(function (){
	var $this = $(this),
			id    = $this.data("tab");	

	$(".sophistic-list li").removeClass("active");
	$(".sophistic-list li[data-tab=" + id + "]").addClass("active");

	$('.sophistic-content').removeClass("active").hide();
	$('.sophistic-content[data-tab=' + id + ']').addClass("active").fadeIn();

});

// cloud tags
if($('.tag-cloud').height() > 51){
	$('.tag-cloud').addClass('tag-cloud__more');
}else{
	$('.tag-cloud').removeClass('tag-cloud__more');
}
	
$('.tag-cloud__btn').click(function(){
	$('.tag-cloud').toggleClass('tag-cloud__height');
	$(this).html($(this).text() == 'Больше' ? 'Меньше' : 'Больше');
});

// likes
$('.product-item__like').click(function(){
	$(this).toggleClass('active');
});

// tabs
$(".about-tabs li").click(function (){
	var $this = $(this),
			id    = $this.data("tab");	

	$(".about-tabs li").removeClass("active");
	$(".about-tabs li[data-tab=" + id + "]").addClass("active");

	$('.about-tab').removeClass("active").hide();
	$('.about-tab[data-tab=' + id + ']').addClass("active").fadeIn();

});

// burger menu
$('.header-burger, .nav-close').click(function(){
	$('.nav').toggleClass('fixed');
	$('.nav-bg').fadeToggle();
});

// popup auth switch
$(".popup-auth__switch label").click(function (){
	var $this = $(this),
			id    = $this.data("form");	

	$(".popup-auth__switch label input").prop("checked", false);
	$(".popup-auth__switch label[data-form=" + id + "] input").prop("checked", true);

	$('#popup-reg form').removeClass("active").hide();
	$('#popup-reg form[data-form=' + id + ']').addClass("active").show();

});

// scroll to
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

// show header
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
      }else if (currentScrollTop == 0){
				navbar.css({
					'transform': 'translateY(0px)',
					'box-shadow': '0 0 20px 0 rgba(0,0,0,0)'
				});
			}
      c = currentScrollTop;
  });
  
});

// shadow on scroll
if($(".assistant-filter").length){
  
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

}

// nav arrow
$('.header-nav').scroll(function(){

	var newScrollLeft=$('.header-nav').scrollLeft();
	var divWidth = $('.header-nav').outerWidth();
	var scrollwidth =$('.header-nav')[0].scrollWidth;

	if(newScrollLeft === scrollwidth - divWidth){
		$('.header-nav-right').fadeOut(200);
	}else{
		$('.header-nav-right').fadeIn(200);
	}

	if(newScrollLeft > 0){
		$('.header-nav-left').fadeIn(200);
	}else{
		$('.header-nav-left').fadeOut(200);
	}

});

// open section
$('.catalog-tab__title').on('click', function(){
	$('+ .catalog-tab__content', this).slideToggle();
	$(this).toggleClass('active');
});

// open active section
$('.catalog-tab__title.active + .catalog-tab__content').slideToggle();

// switch type items
$('.catalog-filter__type-list').click(function(){
	$('.catalog-filter__type li').removeClass('active');
	$(this).toggleClass('active');
	loader();
	$('.catalog-grid').hide();
	$('.catalog-list').show();
})
$('.catalog-filter__type-grid').click(function(){
	$('.catalog-filter__type li').removeClass('active');
	$(this).toggleClass('active');
	loader();
	$('.catalog-grid').show();
	$('.catalog-list').hide();
})

// loader section
function loader() {
	$(".catalog-tab__content").addClass("loader");
	setTimeout(function(){ $(".catalog-tab__content").removeClass("loader") }, 400);
}

// slider list items
if($(window).width() >= 768){
	var catalogListSlider = new Swiper('.catalog-list__slider',{
			loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: '.catalog-list__slider-next',
			},
			breakpoints: {
				1410: {
					spaceBetween: 25,
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 2,
				},
			}
	});
}else{
	$('.catalog-list').remove();
}

// promotion catalog slider
var promotionCatalog = new Swiper('.catalog-promotion',{
	loop: true,
	observer: true,
	observeParents: true,
	pagination: {
			el: '.catalog-promotion__pagination',
			clickable: true,
	}
});

// tabs
$(".catalog-item-tabs__list li").click(function (){
	var $this = $(this),
			id    = $this.data("tab");	

	$(".catalog-item-tabs__list li").removeClass("active");
	$(".catalog-item-tabs__list li[data-tab=" + id + "]").addClass("active");

	$('.catalog-item-tabs__tab').removeClass("active").hide();
	$('.catalog-item-tabs__tab[data-tab=' + id + ']').addClass("active").fadeIn();

});

// assistant
$('.js-assistant').click(function(){
	$('.js-assistant').toggleClass('active');
	$('.assistant-content__switch').html($('.assistant-content__switch').text() == 'Умный помощник активен' ? 'Умный помощник неактивен' : 'Умный помощник активен');

	$('.assistant-content__section-block h4, .assistant-content__section-block h5, .assistant-content__section-block .btn').toggleClass('hide');

});

if($('.js-assistant').hasClass('active')){
	// good
}else{
	$('.assistant-content__section-block h4, .assistant-content__section-block h5, .assistant-content__section-block .btn').toggleClass('hide');
}

$('.assistant-filter__list').click(function(){
	$('.assistant').addClass('active');
});
$('.assistant-content__close').click(function(){
	$('.assistant').removeClass('active');
});

var countLabel = 0;
$('.assistant-filter__list label').each(function (i, item) {
	$(item).attr('data-id', ++countLabel);
});

var countSection = 0;
$('.assistant-content__section').each(function (i, item) {
	$(item).attr('data-id', ++countSection);
});

getProgress(1);

$(".assistant-filter__list label").click(function (){
	var $this = $(this),
			id    = $this.data("id");	

	$(".assistant-filter__list label").removeClass("active");
	$(".assistant-filter__list label[data-id=" + id + "]").addClass("active");

	$('.assistant-content__section').removeClass("active");
	$('.assistant-content__section[data-id=' + id + ']').addClass("active");

	getProgress(id);

});

function getProgress(id){
	if((100/countLabel) * id >= 100){
		$('.assistant-progress-line span').css('height', '100%');
		$('.assistant-progress-end').addClass('active');
	}else{
		$('.assistant-progress-line span').css('height', (100/countLabel) * id + '%');
		$('.assistant-progress-end').removeClass('active');
	}
}

$('.assistant-content__section-item input').click(function(){
	var id = $(this).closest('.assistant-content__section').data('id');
	var checkboxes = [];

	$('.assistant-content__section[data-id=' + id + '] .assistant-content__section-item input:checked').each(function(){
    checkboxes.push($('+ p', this).text());
  });
	$('.assistant-filter__list label[data-id=' + id + '] small').text(checkboxes.join(', '));
});

$('.js-assistant-next').click(function(){
	var id = $(this).closest('.assistant-content__section').data('id');

	$('.assistant-content__section[data-id='+ id +']').removeClass('active');
	$('.assistant-content__section[data-id='+ parseInt(id+1) +']').addClass('active');

	$('.assistant-filter__list label[data-id='+ id +']').removeClass('active');
	$('.assistant-filter__list label[data-id='+ id +'] input').prop('checked', false);

	$('.assistant-filter__list label[data-id='+ parseInt(id+1) +']').addClass('active');
	$('.assistant-filter__list label[data-id='+ parseInt(id+1) +'] input').prop('checked', true);

	getProgress(id+1);
});

$('.assistant-filter__clear').click(function() {
  $('.assistant-content__section-item input:checked').prop('checked', false);
  $('.assistant-filter__list label small').remove();
});