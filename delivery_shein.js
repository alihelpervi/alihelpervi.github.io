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
        //This code called from Android webview
   var content = document.querySelector('.j-scroll-container');
    if (content == null) {
         // console.log('content == null');
        return null;
    }

    var loading = document.querySelector('.mshe-show-loading');
    if (loading != null) {
         // console.log('loading');
         return 'loading';
    }

    var emptyTag = document.querySelector('.icon-empty-history');
    if (emptyTag != null) {
         // console.log('empty');
         return 'empty';
    }

    var domain = 'https://m.shein.com';
    var parsedData = [];
    var errors = [];
    var orderItems = content.getElementsByClassName('macc-order-list');
    for (var i = 0; i < orderItems.length; i++) {
        var orderItem = orderItems[i];
        var orderItemId = orderItem.querySelector('.list-bot-btn');
        if (orderItemId == null) {
            errors.push('list-bot-btn');
            continue;
        }

        var orderItemIdText = orderItemId.getAttribute('id');
        var orderIdArr = orderItemIdText.split('-');
        if (orderIdArr.length < 2) {
            errors.push('parse_id:' + orderItemIdText);
            continue;
        }
        var orderId = orderIdArr[orderIdArr.length - 1].trim()
        var trackUrl = domain + "/api/orders/base/searchOrderGoods/query?_ver=1.1.8&_lang=en&limit=1&page=1&keyword=" + orderId;
        var imageUrlTag = orderItem.querySelector('.crop-image-container__img')
        var imageUrl = '';
        if (imageUrlTag == null) {
            errors.push('img');
        } else {
            imageUrl = 'https:' + imageUrlTag.getAttribute('data-src');
        }

        var title = orderId;

        var obj = {
            'orderId': orderId,
            'trackUrl': trackUrl,
            'imageUrl': imageUrl,
            'title': title
        }
        parsedData.push(obj);
    }

    var outObj = {
        'data': parsedData,
        'errors': errors,
        'trackRegex':'"shipping_no":"([0-9a-zA-Z]*)"',
        'trackRegexNum':0,
        'combinedTrackRegex':'',
        'combinedTrackRegexNum':0,
        'successResponseRegex':'"msg":"OK"'
    }
    var json = JSON.stringify(outObj);
     // console.log(json);
    return json;

//Output json:
//{"data":[{"orderId":"GSHMGE00R00M0WK","trackUrl":"https://www.shein.com/user/orders/track/GSHMGE00R00M0WK","imageUrl":"https://img.ltwebstatic.com/images3_pi/2021/03/29/1617008453e5a56393452bc07abd3a92d02de16aee_thumbnail_220x293.webp","title":""}],"errors":[]}
//end code for webview

        //var e=document.querySelector(".j-scroll-container");if(null==e)return null;if(null!=document.querySelector(".mshe-show-loading"))return"loading";if(null!=document.querySelector(".icon-empty-history"))return"empty";for(var r=[],t=[],i=e.getElementsByClassName("macc-order-list"),l=0;l<i.length;l++){var n=i[l],s=n.querySelector(".list-bot-btn");if(null==s){t.push("list-bot-btn");continue}var o=s.getAttribute("id"),a=o.split("-");if(a.length<2){t.push("parse_id:"+o);continue}var u=a[a.length-1].trim(),c="https://m.shein.com/user/orders/detail/"+u,g=n.querySelector(".crop-image-container__img"),m="";null==g?t.push("img"):m="https:"+g.getAttribute("data-src'");var d=u,h={orderId:u,trackUrl:c,imageUrl:m,title:d};r.push(h)}return JSON.stringify({data:r,errors:t,trackRegex:'"shipping_no":"([0-9a-zA-Z]*)"',trackRegexNum:0,combinedTrackRegex:"",combinedTrackRegexNum:0,successResponseRegex:'"msg":"OK"'})
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
