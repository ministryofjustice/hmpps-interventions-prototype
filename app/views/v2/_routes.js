module.exports = function (router) {

    var version = 'v2'

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

    router.post('/'+ version +'/pp/allocated-pp', function(request, response) {
        if (request.session.data['allocated-pp'] == 'yes') {
        response.redirect('referral-type-prison');
    } else if (request.session.data['allocated-pp'] == 'no') {
        response.redirect('referral-type-prison');
    }
    })




  }