console.log(`This is main.js`);

$(document).ready(function(){
	console.log($('.works-slider'));
	$('.works-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});