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
    webviewWrapper.getOrders = function() {
        var e=document.querySelector(".order-list");if(null==e)return null;var t=document.querySelector("div[placeholder]");if(null==t)return null;if(!t.classList.contains("amp-hidden"))return"loading";if(null!=e.getElementsByClassName("ms-ept-page")[0])return"empty";for(var r=[],l=[],a=e.getElementsByClassName("order-item"),n=0;n<a.length;n++){var i=a[n],s=i.getElementsByClassName("order-item-id")[0];if(null!=s){var m=s.textContent,u=m.split(":");if(2==u.length){var o=u[1].trim(),d=i.getElementsByClassName("order-action")[0];if(null!=d){var g=d.getElementsByTagName("a")[0];if(null!=g){var f=g.getAttribute("href");if(f.includes("logistics")){var c=i.getElementsByTagName("img")[0];if(null!=c||null!=(c=i.getElementsByTagName("amp-img")[0])){var v=c.getAttribute("src"),p=i.getElementsByClassName("order-product-title")[0];if(null!=p){var y={orderId:o,trackUrl:f,imageUrl:v,title:p.textContent};r.push(y)}}}}}}else l.push("fail to parse orderId: "+m)}else l.push("fail to find order-item-id")}var N={data:r,errors:l};return JSON.stringify(N);
    }
    webviewWrapper.checkInvalidLogin = function() {
        return document.querySelector('.fm-error-message') != null
    }
})();
