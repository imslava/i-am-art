/**
 * main.js
 */

$(document).ready(function() {
	$('.product-item__details-tags').mousewheel(function(e, delta) {
			this.scrollLeft -= (delta * 30);
			e.preventDefault();
	});
});

function ratio(){
	$('.product-item').each(function (i, item) {
		var width = $(item).width();
		$('> .product-item__gallery .swiper-wrapper', this).height(width);
		$('> .product-item__gallery .product-item__details', this).innerHeight(width);
		$('> .product-item__gallery', this).height(width + 30);
	});
	// ratio();
}
$(window).resize(ratio());
$(document).ready(ratio());

// rulse fancybox
$('[data-fancybox]').fancybox({
	touch: false,
	autoFocus: false,
	backFocus: false,
	closeExisting: true
});

// open favorite
$('.header-controls__favorites').click(function(){
	$('.header-controls__detail').slideToggle(300);
})

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
$('.product-item__like, .catalog-item__like').click(function(){
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
	$('.catalog-list').toggleClass('open');
	ratio();
})
$('.catalog-filter__type-grid').click(function(){
	$('.catalog-filter__type li').removeClass('active');
	$(this).toggleClass('active');
	loader();
	$('.catalog-grid').show();
	$('.catalog-list').toggleClass('open');
	ratio();
})

// loader section
function loader() {
	$(".catalog-tab__content").addClass("loader");
	setTimeout(function(){ $(".catalog-tab__content").removeClass("loader") }, 400);
}

// tabs
$(".catalog-tabs__list li").click(function (){
	var $this = $(this),
			id    = $this.data("tab");	

	$(".catalog-tabs__list li").removeClass("active");
	$(".catalog-tabs__list li[data-tab=" + id + "]").addClass("active");

	$('.catalog-tabs__tab').removeClass("active").hide();
	$('.catalog-tabs__tab[data-tab=' + id + ']').addClass("active").fadeIn();

});

$('.catalog-packaging-video__play').click(function(){
	var video = $('.catalog-packaging-video__wrap iframe'),
			src 	= video.attr('src');
	video.attr('src', src + '&autoplay=1');
	$(this).fadeOut(300);
});

if($('.catalog-packaging-video__wrap').length){
	var video = $('.catalog-packaging-video__wrap iframe').attr('src');
	var videoid = video.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
	var urlID = 'https://i.ytimg.com/vi_webp/'+videoid[2]+'/sddefault.webp';
	$('.catalog-packaging-video__play').css('background-image', 'url('+urlID+')');
}

$('.catalog-item__color-item input').click(function(){
	var color = $(this).val(),
			pic = $('+ .catalog-item__color-pic', this).attr('style');

	$('.catalog-item__color-select p').text(color);
	$('.catalog-item__color-select .catalog-item__color-pic').attr('style', pic);

	var id = $(this).closest('.catalog-item__color-item').data('id');	

	$('.catalog-item__gallery-color').removeClass("active");
	$('.catalog-item__gallery-color[data-id=' + id + ']').addClass("active");

	$('.catalog-item__color').removeClass('focus');
	$('.catalog-item__color-no').remove();
});

if($('.catalog-item__color-item input').is(":checked")){
	var color = $('.catalog-item__color-item input:checked').val(),
			pic = $('.catalog-item__color-item input:checked + .catalog-item__color-pic').attr('style');
			
	$('.catalog-item__color-select p').text(color);
	$('.catalog-item__color-select .catalog-item__color-pic').attr('style', pic);
}

$('.js-no-color').click(function(){
	$('.catalog-item__color').addClass('focus');
	$('.catalog-item__color').prepend('<div class="catalog-item__color-no">Выберите цвет</div>');
});

$('.lk-order-info').click(function(){
	$('+ .lk-order-content', this).slideToggle();
	$('> .lk-order-info__price', this).toggleClass('hide');
});

$('.lk-select').change(function(){
	$(this).css('color', '#1b1c1f');
});

// load file
$(function() {
	var btnTitle = $(".lk-file p").html();
	var btnTitleHtml = $.parseHTML(btnTitle);
	$(".lk-file input:file").change(function (){
		 if( this.files && this.files.length >= 1 ) {
				var file = this.files[0];
					 var reader = new FileReader();
					 reader.onload = function (e) {
							$(".lk-file p").text('- ' + file.name).addClass('load');
					 }
					 reader.readAsDataURL(file);
		 }
		 else {
				$(".lk-file p").html(btnTitle).removeClass('load');
		 }
			 
	 });   
});

function workRatio(){
	$('.single-works a').each(function (i, item) {
		var width = $(item).width();
		$(this).height(width);
	});
}
$(window).resize(workRatio());
$(document).ready(workRatio());