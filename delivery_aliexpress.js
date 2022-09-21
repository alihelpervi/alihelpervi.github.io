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
        var e=document.querySelector(".order-wrap .order-header")?2:1,t=[],l=[];if(2==e){if(null==(u=document.querySelector(".order-content")))return null;t=[],l=[];for(var r=u.getElementsByClassName("order-item"),i=0;i<r.length;i++){if(null!=(f=(c=r[i]).getAttribute("href")))if(2==(h=(p=f).split("orderId=")).length){var a=h[1].trim();if(null!=(y=c.getElementsByClassName("order-item-btns")[0])){if(null==(v=y.getElementsByTagName("a")[0]))N="https://track.aliexpress.com/logisticsdetail.htm?tradeId="+a;else if(!(N=c.getAttribute("href")).includes("logistics"))continue;var s=(B=c.getElementsByClassName("order-item-content-img")[0]).getAttribute("style").match(/url\(["'](.*?)["']\)/);if(2==s.length){var n=s[1],o=a;null!=(E=c.getElementsByClassName("order-item-content-info-name")[0])&&(o=E.textContent);var d=null;useAdditionalTrack&&(d="https://track.aliexpress.com/logistic/getDetail.json?tradeId="+a);var m={orderId:a,trackUrl:N,additionalTrackUrl:d,imageUrl:n,title:o};t.push(m)}else l.push("fail to parse url image: "+B.getAttribute("style"))}}else l.push("fail to parse orderId: "+p);else l.push("fail to find order-item-id")}}else{var u;if(null==(u=document.querySelector(".order-list")))return null;var g=document.querySelector("div[placeholder]");if(null==g)return null;if(!g.classList.contains("amp-hidden"))return"loading";if(null!=u.getElementsByClassName("ms-ept-page")[0])return"empty";for(r=u.getElementsByClassName("order-item"),i=0;i<r.length;i++){var c,f,p,h;if(null!=(f=(c=r[i]).getElementsByClassName("order-item-id")[0]))if(2==(h=(p=f.textContent).split(":")).length){var y,v,N,B;a=h[1].trim();if(null!=(y=c.getElementsByClassName("order-action")[0]))if(null!=(v=y.getElementsByTagName("a")[0]))if((N=v.getAttribute("href")).includes("logistics"))if(null!=(B=c.getElementsByTagName("img")[0])||null!=(B=c.getElementsByTagName("amp-img")[0])){var E;n=B.getAttribute("src");if(null!=(E=c.getElementsByClassName("order-product-title")[0])){o=E.textContent,d=null;useAdditionalTrack&&(d="https://track.aliexpress.com/logisticsdetail.htm?tradeId="+a);m={orderId:a,trackUrl:N,additionalTrackUrl:d,imageUrl:n,title:o};t.push(m)}}}else l.push("fail to parse orderId: "+p);else l.push("fail to find order-item-id")}}var C={_version:e,data:t,errors:l};return JSON.stringify(C);
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
