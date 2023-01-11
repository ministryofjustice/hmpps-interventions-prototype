const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

        var version = 'v1'

        // current-location
        router.post('/'+ version +'/current-location', function(request, response) {
            response.redirect('release-date');
        })
