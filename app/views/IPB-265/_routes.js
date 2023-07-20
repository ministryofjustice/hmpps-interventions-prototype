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
                response.redirect('was-the-session-delivered.html')
            } else if (request.session.data['did-session-happen']== 'Yes, but something was delivered') {
                response.redirect('something-delivered')
            } else {
                response.redirect('nothing-delivered')
            }  
        })

        router.post('/IPB-265/sp/did-they-come-to-session', function(request, response) {
            if (request.session.data['did-they-come-to-session']== 'Yes, they were on time') {
                response.redirect('was-the-session-delivered.html')
            } else if (request.session.data['did-they-come-to-session']== 'Yes, but they were late') {
                response.redirect('person-was-late')
            } else {
                response.redirect('did-not-attend')
            }  
        })

        router.post('/IPB-265/sp/was-the-session-delivered', function(request, response) {
            if (request.session.data['was-the-session-delivered'] == 'Yes') {
            response.redirect('session-happen');
        } else if (request.session.data['was-the-session-delivered'] == 'No') {
            response.redirect('why-was-the-session-not-delivered');
        }
        })

        router.post('/IPB-265/sp/person-was-late', function(request, response) {
            if (request.session.data['could-the-session-still-be-delivered'] == 'Yes') {
            response.redirect('session-happen');
        } else if (request.session.data['could-the-session-still-be-delivered'] == 'No') {
            response.redirect('would-you-like-to-reschedule');
        }
        })