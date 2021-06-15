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
       var t=document.querySelector(".j-scroll-container");if(null==t)return null;if(null!=document.querySelector(".mshe-show-loading"))return"loading";if(null!=document.querySelector("icon-empty-history"))return"empty";for(var e=[],r=[],l=t.getElementsByClassName("macc-order-list"),i=0;i<l.length;i++){var n=l[i],o=n.querySelector(".list-bot-btn");if(null!=o){var s=o.getAttribute("id"),a=s.split("-");if(a.length<2)r.push("fail to parse da-label: "+s);else{var u=a[a.length-1].trim(),c="https://m.shein.com/user/orders/searchOrderGoods?limit=1&page=1&keyword="+u,m=n.querySelector(".list-con-img>img.lazy"),g="";null==m?r.push("fail to parse list-con-img>img.lazy"):g="https:"+m.getAttribute("data-src");var d={orderId:u,trackUrl:c,imageUrl:g,title:u};e.push(d)}}else r.push("fail to find list-bot-btn")}var h={data:e,errors:r};return JSON.stringify(h);
    }
})();
