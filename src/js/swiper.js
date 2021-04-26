/**
 * swiper.js
 */

// big popup
$('[data-popup-big]').fancybox({
	touch: false,
	autoFocus: false,
	backFocus: false,
	closeExisting: true,
	beforeShow: function( instance, current ) {
		popupRecommend = document.querySelectorAll('.popup-recommend-carousel');
		if(popupRecommend){
			popupRecommend.forEach((el) => {
				var popupRecommend = new Swiper(el,{
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
							slidesPerView: 'auto'
						},
					},
				});
			});
		}
		ratio();
	}
});

// promo slider
promoSlider = document.querySelectorAll('.promo-slider');
if(promoSlider){
	promoSlider.forEach((el) => {
		var promoSlider = new Swiper(el,{
			loop: true,
			observer: true,
			observeParents: true,
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
	});
}

// item card slider
function loadProductItemGallery(){
	productItemGallery = document.querySelectorAll('.product-item__gallery');
	productItemGallery.forEach((el) => {
		var productItemGallery = new Swiper(el,{
			loop: true,
			observer: true,
			observeParents: true,
			allowTouchMove: false,
			pagination: {
					el: '.product-item__pagination',
					clickable: true,
			},
			preloadImages: false,
			lazy: true,
			effect: 'fade',
		});
	});
}
loadProductItemGallery();

//catalog slider
catalogListSlider = document.querySelectorAll('.catalog-list__slider');
if(catalogListSlider && $(window).width() >= 768){
	catalogListSlider.forEach((el) => {
		var catalogListSlider = new Swiper(el,{
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
					spaceBetween: 25,
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
	});
}else{
	$('.catalog-list').remove();
}

// catalog-section promo slider
promotionCatalog = document.querySelectorAll('.catalog-promotion');
if(promotionCatalog){
	promotionCatalog.forEach((el) => {
		var promotionCatalog = new Swiper(el,{
			loop: true,
			observer: true,
			observeParents: true,
			pagination: {
					el: '.catalog-promotion__pagination',
					clickable: true,
			}
		});
	});
}

// recommend slider
sliderRecommend = document.querySelectorAll('.catalog-recommend-carousel');
if(sliderRecommend){
	sliderRecommend.forEach((el) => {
		var sliderRecommend = new Swiper(el,{
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
			observer: true,
			observeParents: true,
			pagination: {
					el: '.catalog-recommend-carousel__pagination',
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
					slidesPerView: 'auto'
				},
			},
			on: {
				init: function () {
					ratio();
				},
			},
		});
	});
}

// 3d effect slider
slider3D = document.querySelectorAll('.catalog-item__gallery-3d');
if(slider3D){
	slider3D.forEach((el) => {
		var slider3D = new Swiper(el,{
			loop: false,
			observer: true,
			observeParents: true,
			effect: 'fade',
			pagination: {
				el: '.catalog-item__gallery-3d-pagination',
				clickable: true,
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
		});
	});
}

// cart bonus slider
cartBonus = document.querySelectorAll('.cart-bonus-carousel');
if(cartBonus){
	cartBonus.forEach((el) => {
		var cartBonus = new Swiper(el,{
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			pagination: {
					el: '.cart-bonus-pagination',
					clickable: true,
			},
			navigation: {
				nextEl: '.cart-bonus-arrow-next',
				prevEl: '.cart-bonus-arrow-prev',
			},
			breakpoints: {
				1400: {
					spaceBetween: 50,
				},
				1200: {
					spaceBetween: 30,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 50,
				}
			}
		});

		var maxHeight = 0;
    $('.cart-bonus-title').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    });
		$('.cart-bonus-title').css('height', maxHeight);

		setTimeout(() => {
			var height = $('.cart-bonus-carousel .swiper-wrapper').height();
			$('.cart-bonus-carousel .swiper-slide').css('height', height);
		}, 300);
		
	});
}

// more color item
var colorCount = 0;
$('.catalog-item__color-item').each(function (i, item) {
	$(item).attr('data-id', ++colorCount);
});

var galleryCount = 0;
$('.catalog-item__gallery-color').each(function (i, item) {
	$(item).attr('data-id', ++galleryCount).attr('id', 'carousel-' + galleryCount);

	var galleryThumbs = new Swiper('#carousel-'+ galleryCount +' .catalog-item__gallery-thumb', {
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.catalog-item__gallery-next',
			prevEl: '.catalog-item__gallery-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
				direction: 'vertical',
				spaceBetween: 15,
			},
			475: {
				slidesPerView: 4,
				direction: 'vertical',
				spaceBetween: 15,
			},
			425: {
				spaceBetween: 10,
				slidesPerView: 5,
				direction: 'horizontal'
			},
			320: {
				spaceBetween: 10,
				slidesPerView: 4,
				direction: 'horizontal'
			},
		}
	});
	var galleryTop = new Swiper('#carousel-'+ galleryCount +' .catalog-item__gallery-slider', {
		thumbs: {
			swiper: galleryThumbs,
		},
		observer: true,
		observeParents: true,
		allowTouchMove: false,
	});

});

$(document).on("mouseenter", '.swiper-pagination-bullet', function () {
	$(this).trigger('click');
});