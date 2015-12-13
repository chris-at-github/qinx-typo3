$(function() {
	// -------------------------------------------------------------------------------------------------------------------
	// QxSurvey
	var qxSurveyMail 		= $('input[type=text]', '.qx-survey--name');
	var qxSurveyChoice	= $('.qx-survey--choice');

	qxSurveyChoice.on('click', function(e) {
		if(qxSurveyMail.val().length !== 0) {
			qxSurveyMail.closest('form').trigger('submit');
		}
	});

	//// -------------------------------------------------------------------------------------------------------------------
	//// QxGallery
	//$('.qx-gallery--category-images').slick({
	//	dots:          	true,
	//	infinite:      	false,
	//	speed:         	300,
	//	slidesToShow:  	1,
	//	variableWidth: 	true,
	//	prevArrow:			'<div class="slick-prev">Previous</div>',
	//	nextArrow: 			'<div class="slick-next">Next</div>'
	//});
	//
	//$('.qx-gallery--lightbox-link').colorbox({
	//	maxWidth: '90%',
	//	maxHeight: '90%',
	//	current: null,
	//	title: function() {
	//		var image	= $(this);
	//		var title = '';
	//
	//		if(image.attr('title') !== '') {
	//			title += '<div class=qx-gallery--lightbox-title-name">' + image.attr('title') + '</div>';
	//		}
	//
	//		if(image.data('dimension') !== undefined) {
	//			title += '<div class=qx-gallery--lightbox-title-dimension">' + image.data('dimension') + '</div>';
	//		}
	//
	//		if(image.data('price') !== undefined) {
	//			title += '<div class=qx-gallery--lightbox-title-price">' + image.data('price') + '</div>';
	//		}
	//
	//		return title;
	//	}
	//});
});