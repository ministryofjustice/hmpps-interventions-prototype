const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

        var version = 'v2'

        // current-location
        router.post('/'+ version +'/current-location', function(request, response) {
            response.redirect('release-date');
        })

        router.get('/'+ version +'/current-location', function(request, response) {
            res.render(version + '/current-location', {})
        })