module.exports = function(router) {

    var version = 'v1';

    // current-location
    router.post('/current-location', function(req, res) {
        res.redirect('release-date');
    })

    };
