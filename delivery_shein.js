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
        var socialDiv = document.querySelector('.page__login-third-part')
        if (socialDiv == null) return false;
        socialDiv.style.display = 'none';
        return true;
    }
    webviewWrapper.getOrders = function() {
        var e=document.querySelector(".j-scroll-container");if(null==e)return null;if(null!=document.querySelector(".mshe-show-loading"))return"loading";if(null!=document.querySelector(".icon-empty-history"))return"empty";for(var r=[],t=[],l=e.getElementsByClassName("macc-order-list"),i=0;i<l.length;i++){var s=l[i],n=s.querySelector(".list-bot-btn");if(null!=n){var o=n.getAttribute("id"),u=o.split("-");if(u.length<2)t.push("parse_id:"+o);else{var a=u[u.length-1].trim(),c="https://m.shein.com/user/orders/searchOrderGoods?limit=1&page=1&keyword="+a,m=s.querySelector(".list-con-img>img.lazy"),d="";null==m?t.push("img"):d="https:"+m.getAttribute("data-src");var g={orderId:a,trackUrl:c,imageUrl:d,title:a};r.push(g)}}else t.push("list-bot-btn")}var h={data:r,errors:t,trackRegex:'"shipping_no":"([0-9a-zA-Z]*)"',trackRegexNum:0,combinedTrackRegex:'',combinedTrackRegexNum:0,successResponseRegex:'"msg":"OK"'};return JSON.stringify(h)
    }
    webviewWrapper.checkInvalidLogin = function() {
        var errorDiv = document.querySelector('.text-error')
        if (errorDiv == null) {
            return false;    
        }
        
        return errorDiv.style.display != 'none'
    }
})();
