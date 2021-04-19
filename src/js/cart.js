/**
 * cart.js
 */
if($('.cart').length){

	var fio = 0,
			phone = 0,
			email = 0;

	$('#fio').change(function(){
		var count = $(this).val().length > 2 ? fio = 1 : fio = 0;
		cC();
	});
	$('#phone').change(function(){
		var count = $(this).val().length > 2 ? phone = 1 : phone = 0;
		cC();
	});
	$('#email').change(function(){
		var count = $(this).val().length > 2 ? email = 1 : email = 0;
		cC();
	});

	function cC(){
		contactCount = parseInt(fio+phone+email);
		var count = contactCount === 3 ? $('.contact-val').removeClass('error').addClass('success').html('заполнены') : $('.contact-val').removeClass('success').addClass('error').html('не заполнены');
	}

	$('.cart-radio-payment').click(function(){
		$('.payment-val').removeClass('error').addClass('success').html('выбрана');
		$('.payment-result').addClass('show');
		$('.payment-result-val').text($('+ p', this).text());
	});

	$(".cart-delivery-tabs li").click(function (){
		var $this = $(this),
				id    = $this.data("tab");	

		$(".cart-delivery-tabs li").removeClass("active");
		$(".cart-delivery-tabs li[data-tab=" + id + "]").addClass("active");

		$('.cart-delivery-tab').removeClass("active");
		$('.cart-delivery-tab[data-tab=' + id + ']').addClass("active");

		getProgress(id);

	});

	$('.cart-delivery-tab .cart-open-delivery').click(function(){
		$('.cart-delivery').removeClass('show');
		$('+ .cart-delivery', this).addClass('show');
	});

	$('.cart-delivery-cost').click(function(){
		$('.delivery-val').removeClass('error').addClass('success').html('выбрана');
		$('.delivery-result').addClass('show');
		$('.delivery-result-val').text($('+ p > b:first-child', this).text());
		$('.delivery-result-cost').text($('+ p > .delivery-cost', this).text());
	});

}