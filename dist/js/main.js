$(document).ready(function() {

	//setting slider width dinamically
	var worksTitleCol = $(".works-title-col");
	var worksTitleColOffset = worksTitleCol.offset().left;
	var worksTitleColWidth = worksTitleCol.outerWidth();
	var worksSliderWidth = parseInt($(window).width() - worksTitleColOffset - worksTitleColWidth);

	var worksSlider = $('.works-slider');
	worksSlider.css('width', worksSliderWidth+'px');

});


