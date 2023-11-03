module.exports = function (router) {

    var version = 'v2'


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
        response.redirect('');
    }
    })

    router.post('/'+ version +'/pp/allocated-pp-community', function(request, response) {
        if (request.session.data['allocated-pp-community'] == 'yes') {
        response.redirect('referral-type-community');
    } else if (request.session.data['allocated-pp-community'] == 'no') {
        response.redirect('');
    }
    })

    router.post('/'+ version +'/pp/allocated-pp-nocom-prerelease', function(request, response) {
        if (request.session.data['allocated-pp-nocom-prerelease'] == 'yes') {
        response.redirect('');
    } else if (request.session.data['allocated-pp-nocom-prerelease'] == 'no') {
        response.redirect('referral-type-nocom-prerelease');
    }
    })

    router.post('/'+ version +'/pp/allocated-pp-nocom-prison', function(request, response) {
        if (request.session.data['allocated-pp-nocom-prison'] == 'yes') {
        response.redirect('');
    } else if (request.session.data['allocated-pp-nocom-prison'] == 'no') {
        response.redirect('referral-type-nocom-prison');
    }
    })



  }