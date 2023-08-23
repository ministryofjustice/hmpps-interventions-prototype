module.exports = function (router) {
    var version = "v3" 


     router.post('/' + version + '/sp/did-they-attend', function (req, res) {
        const didTheyAttend = req.session.data['/sp/did-they-attend']
    
        if (didTheyAttend == 'yes'){
          res.redirect('session-happen')
        }else {
          res.redirect('you-told-us-that-the-person-attended')
        }
      });
    }