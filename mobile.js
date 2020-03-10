(function() {
    var wvWrapper = {};
    wvWrapper.script = document.getElementById('mobileJS');
    if (wvWrapper.script == null) {
        return;    
    }
    
    wvWrapper.cssTS = wvWrapper.script.dataset.ts;
    
    wvWrapper.injectCss = function(ts)  {
        var parent = document.getElementsByTagName('head').item(0);
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'https://alihelpervi.github.io/mobile.css?' + ts;
        parent.appendChild(link);
    }
    
    wvWrapper.getTitle = function() {
        return document.querySelector('#ms-title span').innerText;
    }
    
    wvWrapper.injectCss(wvWrapper.cssTS);
})();
