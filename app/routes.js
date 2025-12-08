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