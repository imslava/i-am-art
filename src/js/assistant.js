/**
 * assistant.js
 */

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