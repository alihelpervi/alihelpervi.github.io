(function() {
    var script = document.getElementById('mobileJS');
    if (script == null) {
        return;    
    }
    
    var cssTS = script.dataset.ts;
    function injectCss(ts)  {
        var parent = document.getElementsByTagName('head').item(0);
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'https://alihelpervi.github.io/mobile.css?' + ts;
        parent.appendChild(link);
    }
    injectCss(cssTS);
    
    var wvWrapper = {};
    document.wvWrapper = wvWrapper;
    wvWrapper.getTitle = function() {
        return document.querySelector('#ms-title span').innerText;
    }
})();
