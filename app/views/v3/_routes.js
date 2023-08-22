module.exports = function (router) {
    var version = "v3"
    
    
    
    router.get('/' + version + '/sp/did-they-attend', function(req, res){
        res.render(version + '/sp/did-they-attend')
    });
    router.post('/' + version + '/sp/did-they-attend', function(req,res){
        res.redirect('/'+ version + '/sp/session-happen');
    })
     }