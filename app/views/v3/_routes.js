module.exports = function (router) {
var version = "v3"

// router.get('/' + version + '/sp/did-they-attend', function (req, res) {
//     res.render(version + '/sp/did-they-attend-2')
//   });
//  router.post('/' + version + '/sp/did-they-attend', function(request, response) {
//     const didTheyAttend = req.session.data['did-they-attend']
//            if ( didTheyAttend == 'yes') {
//            response.redirect('/' + version + '/sp/session-happen');
//         } else {
//            response.redirect('/' + version + 'person-attend-session-does-not-happen');
//         }
//        });

    router.get('/' + version + '/sp/did-they-attend', function(req, res){
        res.render(version + '/sp/did-they-attend')
    });
    router.post('/' + version + '/sp/did-they-attend', function(req,res){
        res.redirect('/'+ version + '/sp/session-happen')
    });
 }