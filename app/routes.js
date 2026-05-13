//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Add your routes here
require('./views/v1/_routes')(router);
require('./views/v2/_routes')(router);
require('./views/IPB-265/_routes')(router);
require('./views/v3/_routes')(router);
require('./views/v4/_routes')(router);
require('./views/v5/_routes')(router);

router.post('/attendance-unhappy', function(request, response) {

	var attendance = request.session.data['attendance']
	if (attendance == "Yes"){
		response.redirect("/rm/initial-contact-session/why-session-not-happened")
	} else {
		response.redirect("/rm/initial-contact-session/why-not-attend")
	}
})

router.post('/edit-oasys-answer', function (req, res) {
	const changedName = req.body.changedName
  
	if (changedName === 'yes') {
	  res.redirect('/rm/find/edit-alex-risk-info')
	} else if (changedName === 'no') {
	  res.redirect('/rm/find/opd-question')
	} else {
	  // No option selected – reload page or show error
	  res.redirect('edit-oasys')
	}
  })
  

  router.post('/recommended-referral', function (req, res) {
	const choice = req.body.referralChoice;
  
	if (choice === 'yes') {
	  res.redirect('/rm/find-select-referral-type/region-question');
	} else if (choice === 'no') {
	  res.redirect('/rm/find-select-referral-type/select-referral-type');
	} else {
	  res.redirect('/rm/find-select-referral-type/region-question'); // fallback if nothing selected
	}
  });
  