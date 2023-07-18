const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

        var version = 'v1'

        router.post('/'+ version +'/pp/current-location', function(request, response) {
            response.redirect('release-date');
        })


        router.post('/'+ version +'/pp/referral-type-prison', function(request, response) {
            if (request.session.data['referral-type'] == 'prison') {
            response.redirect('make-a-referral-prerelease');
        } else if (request.session.data['referral-type'] == 'community') {
            response.redirect('make-a-referral-community');
        }
        })

        router.post('/'+ version +'/pp/referral-type-community', function(request, response) {
            if (request.session.data['referral-type'] == 'prison') {
            response.redirect('make-a-referral-prerelease');
        } else if (request.session.data['referral-type'] == 'community') {
            response.redirect('make-a-referral-community');
        }
        })
    
        router.post('/IPB-265/sp/did-session-happen', function(request, response) {
            if (request.session.data['did-session-happen']== 'Yes, and something was delivered towards the intervention') {
                response.redirect('session-happen')
            } else if (request.session.data['did-session-happen']== 'Yes, but something was delivered') {
                response.redirect('something-delivered')
            } else {
                response.redirect('nothing-delivered')
            }  
        })
