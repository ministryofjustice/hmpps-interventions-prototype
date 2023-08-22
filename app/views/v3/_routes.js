const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var version = "v3"


 router.post('/' + version + '/did-they-attend', function(request, response) {
    const didTheyAttend = req.session.data['did-they-attend']
           if ( didTheyAttend == 'Yes') {
           response.redirect('/' + version + 'session-happen');
        } else if ( didTheyAttend == 'No') {
           response.redirect('/' + version + 'person-attend-session-does-not-happen');
        }
       });