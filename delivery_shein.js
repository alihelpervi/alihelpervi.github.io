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
        var e=document.querySelector(".list-body");if(null==e)return null;var r=document.querySelector(".order-list-loading");if(null==r)return null;if("block"==r.style.display)return"loading";if(null!=document.querySelector("icon-empty-history"))return"empty";for(var t=[],l=[],i=e.getElementsByClassName("list-item-row"),s=0;s<i.length;s++){var a=i[s],o=a.querySelector(".c-icon-tip-spec>a");if(null!=o){var n=o.getAttribute("da-label"),u=n.split("-");if(2==u.length){var c=u[0].trim(),d="https://www.shein.com/user/orders/searchOrderGoods?limit=1&page=1&keyword="+c,p=a.querySelector(".list-con-img>img"),m="";null==p?l.push("fail to parse swiper-slide-active>img"):m="https:"+p.getAttribute("src");var y={orderId:c,trackUrl:d,imageUrl:m,title:c};t.push(y)}else l.push("fail to parse da-label: "+n)}else l.push("fail to find c-icon-tip-spec>a")}var f={data:t,errors:l};return JSON.stringify(f);
    }
    webviewWrapper.checkInvalidLogin = function() {
        return false;
    }
})();
