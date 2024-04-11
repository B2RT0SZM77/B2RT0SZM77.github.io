var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
if (a.indexOf('html') > -1) { //Check of html String in URL.
   url = url.substring(0, newURL.lastIndexOf("."));
}
