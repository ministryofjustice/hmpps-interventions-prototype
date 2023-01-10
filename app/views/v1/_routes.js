module.exports = function(router) {

    var version = 'v1';

    // make-a-referral
    router.post('/make-a-referral', function(req, res) {
        res.redirect('current-location');
    })
