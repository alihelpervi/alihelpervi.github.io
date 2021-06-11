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
        var socialDiv = document.querySelector('.c-login-footer')
        if (socialDiv == null) return false;
        socialDiv.style.display = 'none';
        return true;
    }
    webviewWrapper.getOrders = function() {
        var e=document.querySelector(".list-body");if(null==e)return null;var r=document.querySelector(".order-list-loading");if(null==r)return null;if("block"==r.style.display)return"loading";if(null!=document.querySelector("icon-empty-history"))return"empty";for(var t=[],l=[],i=e.getElementsByClassName("list-item-row"),s=0;s<i.length;s++){var a=i[s],n=a.querySelector(".c-icon-tip-spec>a");if(null!=n){var o=n.getAttribute("da-label"),u=o.split("-");if(2==u.length){var c=u[0].trim(),p="https://www.shein.com/user/orders/track/"+c,d=a.querySelector(".swiper-slide-active>img"),f="";null==d?l.push("fail to parse swiper-slide-active>img"):f="https:"+d.getAttribute("src");var m={orderId:c,trackUrl:p,imageUrl:f,title:""};t.push(m)}else l.push("fail to parse da-label: "+o)}else l.push("fail to find c-icon-tip-spec>a")}var y={data:t,errors:l};JSON.stringify(y);
    }
    webviewWrapper.checkInvalidLogin = function() {
//        return document.querySelector('.fm-error-message') != null
        return false;
    }
})();
