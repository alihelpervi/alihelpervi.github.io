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

        var allElements = ['.facebook', '.fm-sns-item.facebook'/*, '.fm-sns-item.google'*/, '.vk', '.fm-sns-item.vk', '.twitter', '.fm-sns-item.twitter', '.apple', '.fm-sns-item.apple', '.ok', '.fm-sns-item.ok', '.instagram', '.fm-sns-item.instagram', '.hide', '.show-all', '.fm-forget'];

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
        var e=!0,t=document.querySelector(".order-wrap .order-header")?2:1,r=[],l=[];if(2==t){var a=document.querySelector(".order-content");if(null==a)return null;for(var r=[],l=[],i=a.getElementsByClassName("order-item"),n=0;n<i.length;n++){var s,o=i[n],m=null;try{var u=o.getElementsByTagName("a")[0].getAttribute("href").split("orderId=");if(2!=u.length){l.push("fail to parse orderId");continue}m=u[1].trim()}catch(d){}if(null==m){l.push("fail to find order-item-id");continue}var g=o.getElementsByClassName("order-item-btns")[0];if(null!=g){var c=g.getElementsByTagName("a")[0];s=null==c?"https://track.aliexpress.com/logisticsdetail.htm?tradeId="+m:o.getAttribute("href");var f=o.getElementsByClassName("order-item-content-img")[0],p=f.getAttribute("style").match(/url\(["'](.*?)["']\)/);if(2!=p.length){l.push("fail to parse url image: "+f.getAttribute("style"));continue}var v=p[1],h=o.getElementsByClassName("order-item-content-info-name")[0],y=m;null!=h&&(y=h.textContent);var N="https://track.aliexpress.com/logistic/getDetail.json?tradeId="+m;e||(e=null);var $={orderId:m,trackUrl:N,additionalTrackUrl:s,imageUrl:v,title:y};r.push($)}}}else{var a=document.querySelector(".order-list");if(null==a)return null;var B=document.querySelector("div[placeholder]");if(null==B)return null;if(!B.classList.contains("amp-hidden"))return"loading";if(null!=a.getElementsByClassName("ms-ept-page")[0])return"empty";for(var i=a.getElementsByClassName("order-item"),n=0;n<i.length;n++){var o=i[n],E=o.getElementsByClassName("order-item-id")[0];if(null==E){l.push("fail to find order-item-id");continue}var C=E.textContent,u=C.split(":");if(2!=u.length){l.push("fail to parse orderId: "+C);continue}var m=u[1].trim(),g=o.getElementsByClassName("order-action")[0];if(null!=g){var c=g.getElementsByTagName("a")[0];if(null!=c){var N=c.getAttribute("href");if(N.includes("logistics")){var f=o.getElementsByTagName("img")[0];if(null!=f||null!=(f=o.getElementsByTagName("amp-img")[0])){var v=f.getAttribute("src"),h=o.getElementsByClassName("order-product-title")[0];if(null!=h){var y=h.textContent,s=null;e&&(s="https://track.aliexpress.com/logistic/getDetail.json?tradeId="+m);var $={orderId:m,trackUrl:N,additionalTrackUrl:s,imageUrl:v,title:y};r.push($)}}}}}}};return JSON.stringify({_version:t,data:r,errors:l,trackRegex:'\\"logisticsNo\\":[ ]?\\"([0-9a-zA-Z]*)\\"',trackRegexNum:1,combinedTrackRegex:'\\"secondMailNo\\":[ ]?\\"([0-9a-zA-Z]*)\\"',combinedTrackRegexNum:1,successResponseRegex:'"success":[ ]?true';});
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
