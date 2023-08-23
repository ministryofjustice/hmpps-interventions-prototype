module.exports = function (router) {
    var version = "v3" 

    //if did-the-session-happen == yes and did-they-attend == yes 
    //than show session-happen
    //if did-the-session-happen == no and did-they-attend == yes
    //than show you-told-us-that-the-person-did-attend
    //if anything else == you-told-us-that-the-person-didnt-attend 

      router.post ('/' + version + '/sp/did-they-attend-answer', function (request, response) {
       
        var didTheSessionHappen = request.session.data['did-the-session-happen']
        var didTheyAttend = request.session.data['did-they-attend']
        
        if (didTheSessionHappen == "yes" && didTheyAttend == "yes"){
            response.redirect('session-happen')
            
        } else if (didTheSessionHappen == "no" && didTheyAttend == "yes"){
            response.redirect('you-told-us-that-the-person-attended')
            
        } else {
            response.redirect('you-told-us-that-the-person-didnt-attend')
        }
      });
 }

        