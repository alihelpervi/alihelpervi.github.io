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
        var socialDiv = document.querySelector('.fm-sns')
        if (socialDiv == null) return false;
        socialDiv.style.display = 'none';
        return true;
    }
    webviewWrapper.getOrders = function() {
        return GB_OrderList.orders;
    }
    webviewWrapper.checkInvalidLogin = function() {
        return document.querySelector('.fm-error-message') != null
    }
})();
