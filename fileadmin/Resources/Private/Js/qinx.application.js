$(function() {
	// -------------------------------------------------------------------------------------------------------------------
	// QxSurvey
	var qxSurveyMail 		= $('input[type=text]', '.qx-survey--mail');
	var qxSurveyChoice	= $('.qx-survey--choice');

	qxSurveyChoice.on('click', function(e) {
		if(qxSurveyMail.val().length !== 0) {
			qxSurveyMail.closest('form').trigger('submit');
		}
	});

	// -------------------------------------------------------------------------------------------------------------------
	// QxGallery
	$('.qx-gallery--category-images').slick({
		dots:          	true,
		infinite:      	false,
		speed:         	300,
		slidesToShow:  	1,
		variableWidth: 	true,
		prevArrow:			'<div class="slick-prev">Previous</div>',
		nextArrow: 			'<div class="slick-next">Next</div>'
	});
});