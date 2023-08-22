const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var version = "v3";

 router.post('/' + version + '/did-they-attend', function(request, response) {
           if (request.session.data['did-they-attend'] == 'Yes') {
           response.redirect('/' + version + 'session-happen');
        } else if (request.session.data['did-they-attend'] == 'No') {
           response.redirect('/' + version + 'person-attend-session-does-not-happen');
        }
       });