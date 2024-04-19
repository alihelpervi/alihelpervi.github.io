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

        var allElements = ['.facebook', '.fm-sns-item.facebook'/*, '.fm-sns-item.google'*/, '.vk', '.fm-sns-item.vk', '.twitter', '.fm-sns-item.twitter', '.apple', '.fm-sns-item.apple', '.ok', '.fm-sns-item.ok', '.instagram', '.fm-sns-item.instagram', '.hide', '.show-all', '.fm-forget', '.fm-sns-trigger'];

        allElements.forEach(function(element) {
            var elementDiv = socialDiv.querySelector(element);
            if (elementDiv != null) {
                elementDiv.style.display = 'none';
            }
        });

        try {
            document.getElementsByClassName('show-all')[0].click()
        } catch (e) {}

        return true;
    }
    webviewWrapper.loadMore = function() {
        try {
            var button = document.getElementsByClassName('order-more')[0].firstChild;
            var isEnabled = typeof button.attributes['disabled'] === 'undefined';
            if (!isEnabled) return false;
            button.click();

            return true;
        } catch (e) { }
        return false;
    }
    webviewWrapper.getOrders = function() {
        var useAdditionalTrack = true;
        var e=document.querySelector(".order-wrap .order-header")?2:1,t=[],r=[];if(2==e){var l=document.querySelector(".order-content");if(null==l)return null;for(var t=[],r=[],a=l.getElementsByClassName("order-item"),i=0;i<a.length;i++){var n,s=a[i],o=s.getAttribute("href");if(null==o){r.push("fail to find order-item-id");continue}var m=o,u=m.split("orderId=");if(2!=u.length){r.push("fail to parse orderId: "+m);continue}var d=u[1].trim(),g=s.getElementsByClassName("order-item-btns")[0];if(null!=g){var c=g.getElementsByTagName("a")[0];n=null==c?"https://track.aliexpress.com/logisticsdetail.htm?tradeId="+d:s.getAttribute("href");var f=s.getElementsByClassName("order-item-content-img")[0],p=f.getAttribute("style").match(/url\(["'](.*?)["']\)/);if(2!=p.length){r.push("fail to parse url image: "+f.getAttribute("style"));continue}var v=p[1],h=s.getElementsByClassName("order-item-content-info-name")[0],y=d;null!=h&&(y=h.textContent);var N="https://track.aliexpress.com/logistic/getDetail.json?tradeId="+d;useAdditionalTrack||(useAdditionalTrack=null);var $={orderId:d,trackUrl:N,additionalTrackUrl:n,imageUrl:v,title:y};t.push($)}}}else{var l=document.querySelector(".order-list");if(null==l)return null;var B=document.querySelector("div[placeholder]");if(null==B)return null;if(!B.classList.contains("amp-hidden"))return"loading";if(null!=l.getElementsByClassName("ms-ept-page")[0])return"empty";for(var a=l.getElementsByClassName("order-item"),i=0;i<a.length;i++){var s=a[i],o=s.getElementsByClassName("order-item-id")[0];if(null==o){r.push("fail to find order-item-id");continue}var m=o.textContent,u=m.split(":");if(2!=u.length){r.push("fail to parse orderId: "+m);continue}var d=u[1].trim(),g=s.getElementsByClassName("order-action")[0];if(null!=g){var c=g.getElementsByTagName("a")[0];if(null!=c){var N=c.getAttribute("href");if(N.includes("logistics")){var f=s.getElementsByTagName("img")[0];if(null!=f||null!=(f=s.getElementsByTagName("amp-img")[0])){var v=f.getAttribute("src"),h=s.getElementsByClassName("order-product-title")[0];if(null!=h){var y=h.textContent,n=null;useAdditionalTrack&&(n="https://track.aliexpress.com/logistic/getDetail.json?tradeId="+d);var $={orderId:d,trackUrl:N,additionalTrackUrl:n,imageUrl:v,title:y};t.push($)}}}}}}};return JSON.stringify({_version:e,data:t,errors:r,trackRegex:'\\"logisticsNo\\":[ ]?\\"([0-9a-zA-Z]*)\\"',trackRegexNum:1,combinedTrackRegex:'\\"secondMailNo\\":[ ]?\\"([0-9a-zA-Z]*)\\"',combinedTrackRegexNum:1,successResponseRegex:'"success":[ ]?true'});
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
