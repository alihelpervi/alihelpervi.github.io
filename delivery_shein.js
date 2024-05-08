(function() {
    var script = document.getElementById('mobileJS');
    if (script == null) {
        return;    
    }
   
    var webviewWrapper = {};
    document.webviewWrapper = webviewWrapper;
    webviewWrapper.test = function() {
        return true;
    }
    webviewWrapper.processLoginPage = function() {
        var socialDiv = document.querySelector('.page__login-newUI-continue')
        if (socialDiv == null) return false;
        //socialDiv.style.display = 'none'; 
        var allElements = ['.page__login-newUI-third', '.page__login_swithSiteTabNew', '.page__login-newUI-continueFooter', '.page__login-weekPrivacy'];

        allElements.forEach(function(element) {
            var elementDiv = socialDiv.querySelector(element);
            if (elementDiv != null) {
                elementDiv.style.display = 'none';
            }
        });
        
        return true;
    }
    webviewWrapper.getOrders = function() {
        var e=document.querySelector(".j-scroll-container");if(null==e)return null;if(null!=document.querySelector(".mshe-show-loading"))return"loading";if(null!=document.querySelector(".icon-empty-history"))return"empty";for(var r=[],t=[],i=e.getElementsByClassName("macc-order-list"),l=0;l<i.length;l++){var n=i[l],s=n.querySelector(".list-bot-btn");if(null==s){t.push("list-bot-btn");continue}var o=s.getAttribute("id"),a=o.split("-");if(a.length<2){t.push("parse_id:"+o);continue}var u=a[a.length-1].trim(),c="https://m.shein.com/user/orders/detail/"+u,g=n.querySelector(".crop-image-container__img"),m="";null==g?t.push("img"):m="https:"+g.getAttribute("src");var d=u,h={orderId:u,trackUrl:c,imageUrl:m,title:d};r.push(h)}return JSON.stringify({data:r,errors:t,trackRegex:'"shipping_no":"([0-9a-zA-Z]*)"',trackRegexNum:0,combinedTrackRegex:"",combinedTrackRegexNum:0,successResponseRegex:'"msg":"OK"'})
    }
    webviewWrapper.checkInvalidLogin = function() {
        var errorDiv = document.querySelector('.text-error')
        if (errorDiv == null) {
            return false;    
        }
        
        return errorDiv.style.display != 'none'
    }
     webviewWrapper.checkIsOrderPage = function() {
        var div = document.querySelector(".order-list-top-pad");
        if (div == null) {
            return false;
        }
        return true;
    }
})();
