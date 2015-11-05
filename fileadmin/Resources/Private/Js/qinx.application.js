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
});