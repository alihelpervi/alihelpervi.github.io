(function() {
    var script = document.getElementById('mobileJS');
    if (script == null) {
        return;    
    }
    
    var parent = document.getElementsByTagName('head').item(0);
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://alihelpervi.github.io/mobile.css?' + script.dataset.ts;
    parent.appendChild(link);
})();
