  var pathlink = (window.location != window.parent.location)
    ? document.referrer
    : document.location.href;

alert(pathlink);
