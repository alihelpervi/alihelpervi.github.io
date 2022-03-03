(function() {
    var script = document.getElementById('mobileJS');
    if (script == null) {
        return;    
    }

    var webviewWrapper = {};
    document.webviewWrapper = webviewWrapper;

    webviewWrapper.getProductContent = function() {
        var hasContent = false
        try {
            hasContent = document.getElementById('root').clientHeight > 2000
        } catch(e) {
            window.scroll(0, 2000)
            return null
        }

        if (hasContent) {
            return document.getElementsByTagName('html')[0].innerHTML;
        } else {
            window.scroll(0, 2000)
            return null
        }
    }

    webviewWrapper.applyCountrySettings = function(countryCode) {  
      document.getElementsByClassName(countryCode)[0].click()
      return true
    }

    webviewWrapper.applyCurrencySettings = function(currencyCode) {  
      //document.getElementsByClassName(currencyCode)[0].click()
      return true
    }

    webviewWrapper.applyLanguageSettings = function(languageCode) {  
      var map = {
            'en': 0,
            'ru': 1,
            'pt': 2,
            'es': 3,
            'de': 5,
            'it': 6,
            'fr': 7,
            'nl': 8,
            'tr': 9,
            'pl': 14,
            'ar': 15
        }
        var section = document.getElementById('account-section')
        var lis = section.getElementsByTagName('li')
        var li = lis[map[languageCode]]
        li.click()
        return true
    }
})();
