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
   webviewWrapper.processLoginPage = function(showButtons) {
        var socialDiv = document.querySelector('.fm-login');
        if (socialDiv == null) return false;

       var isSocialLoginEnabled = true;
       if (typeof showButtons === 'undefined' || !isSocialLoginEnabled) {
            socialDiv.style.display = 'none';
            return true;
       }

       var allElements = ['.facebook', '.fm-sns-item.facebook'/*, '.fm-sns-item.google'*/, '.vk', '.fm-sns-item.vk', '.twitter', '.fm-sns-item.twitter', '.apple', '.fm-sns-item.apple', '.ok', '.fm-sns-item.ok', '.instagram', '.fm-sns-item.instagram', '.fm-sns-trigger', '.show-all', '.fm-forget'];

       allElements.forEach(function(element) {
            var elementDiv = socialDiv.querySelector(element);
            if (elementDiv != null) {
                elementDiv.style.display = 'none';
            }
       });
       
        return true;
    }
    webviewWrapper.loadMore = function() {
       var button = document.getElementById('order-list-button');
       if (button == null) return false;
       button.click();
       return true;
    }
    webviewWrapper.getOrders = function() {
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
   webviewWrapper.processLoginPage = function(showButtons) {
        var socialDiv = document.querySelector('.fm-login');
        if (socialDiv == null) return false;

       var isSocialLoginEnabled = true;
       if (typeof showButtons === 'undefined' || !isSocialLoginEnabled) {
            socialDiv.style.display = 'none';
            return true;
       }

       var allElements = ['.facebook', '.fm-sns-item.facebook'/*, '.fm-sns-item.google'*/, '.vk', '.fm-sns-item.vk', '.twitter', '.fm-sns-item.twitter', '.apple', '.fm-sns-item.apple', '.ok', '.fm-sns-item.ok', '.instagram', '.fm-sns-item.instagram', '.fm-sns-trigger', '.show-all', '.fm-forget'];

       allElements.forEach(function(element) {
            var elementDiv = socialDiv.querySelector(element);
            if (elementDiv != null) {
                elementDiv.style.display = 'none';
            }
       });
       
        return true;
    }
    webviewWrapper.loadMore = function() {
       var button = document.getElementById('order-list-button');
       if (button == null) return false;
       button.click();
       return true;
    }
    webviewWrapper.getOrders = function() {
        var useAdditionalTrack = true;
        e=document.querySelector(".order-list");if(null==e)return null;var t=document.querySelector("div[placeholder]");if(null==t)return null;if(!t.classList.contains("amp-hidden"))return"loading";if(null!=e.getElementsByClassName("ms-ept-page")[0])return"empty";for(var l=[],r=[],a=e.getElementsByClassName("order-item"),i=0;i<a.length;i++){var n=a[i],s=n.getElementsByClassName("order-item-id")[0];if(null!=s){var m=s.textContent,d=m.split(":");if(2==d.length){var o=d[1].trim(),u=n.getElementsByClassName("order-action")[0];if(null!=u){var g=u.getElementsByTagName("a")[0];if(null!=g){var c=g.getAttribute("href");if(c.includes("logistics")){var f=n.getElementsByTagName("img")[0];if(null!=f||null!=(f=n.getElementsByTagName("amp-img")[0])){var p=f.getAttribute("src"),v=n.getElementsByClassName("order-product-title")[0];if(null!=v){var y=v.textContent,h=null;useAdditionalTrack&&(h="https://track.aliexpress.com/logisticsdetail.htm?tradeId="+o);var N={orderId:o,trackUrl:c,additionalTrackUrl:h,imageUrl:p,title:y};l.push(N)}}}}}}else r.push("fail to parse orderId: "+m)}else r.push("fail to find order-item-id")}var B={data:l,errors:r};return JSON.stringify(B);
    }
    webviewWrapper.checkInvalidLogin = function() {
        return document.querySelector('.fm-login .comet-alert-error') != null;
    }
    webviewWrapper.checkIsOrderPage = function() {
        var div = document.querySelector(".order-list");
        if (div == null) {
            return false;
        }
        return true;
    }
    webviewWrapper.getProductContent = function() {
        var priceDiv = document.getElementById('root')
        if (priceDiv == null || priceDiv.innerHTML == '') {
            return null
        }
       
        return document.getElementsByTagName('html')[0].innerHTML;
    }
})();

    }
    webviewWrapper.checkInvalidLogin = function() {
        return document.querySelector('.fm-login .comet-alert-error') != null;
    }
    webviewWrapper.checkIsOrderPage = function() {
        var div = document.querySelector(".order-list");
        if (div == null) {
            return false;
        }
        return true;
    }
    webviewWrapper.getProductContent = function() {
        var priceDiv = document.getElementById('root')
        if (priceDiv == null || priceDiv.innerHTML == '') {
            return null
        }
       
        return document.getElementsByTagName('html')[0].innerHTML;
    }
})();
