module.exports = function (router) {
    var version = "v4" 

    //if did-the-session-happen == yes and did-they-attend == yes 
    //than show session-happen
    //if did-the-session-happen == no and did-they-attend == yes
    //than show you-told-us-that-the-person-did-attend
    //if anything else == you-told-us-that-the-person-didnt-attend 

    router.get('/' + version + '/pp/cancellation-request', function (req, res) {
        res.render(version + '/pp/cancellation-request')
      });

      router.post ('/' + version + '/pp/cancellation-request', function (request, response) {
       
        const doYouWantToCancel = request.session.data['do-you-want-to-cancel']
        
        
        if (doYouWantToCancel == 'yes'){
            
           response.redirect('case-progress-assigned-alex-cancellation-request-sent')
        } else if (doYouWantToCancel == "no"){
            response.redirect('case-progress-assigned-alex-no-cancellation')

        } else {
            response.redirect('what-parts-of-referral-would-you-like-to-change')
        }
      });

      router.post ('/' + version + '/sp/did-the-session-happen', function (request, response) {
       
        var didTheSessionHappen = request.session.data['did-the-session-happen']
        var didTheyAttend = request.session.data['did-they-attend']
        
        if (didTheSessionHappen == "yes"){
            response.redirect('session-happen')
            
        } else if (didTheSessionHappen == "no" && didTheyAttend == "yes"){
            response.redirect('you-told-us-that-the-person-attended')
      
        } else if (didTheSessionHappen == "no" && didTheyAttend == "no"){
            response.redirect('you-told-us-that-the-person-didnt-attend')
            
        } else {
            response.redirect('dont-know-if-person-attended')
        }
      });





 }


 




 


        