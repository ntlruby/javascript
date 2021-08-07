/*-----------------------------------*/
/*-----------------------------------*/
/*Name: Contact Button Widget*/
/*Nguồn code: thietkeblogspot.com*/
/*Lưu trử: dropbox cá nhân của NTLRUBY*/
/*Blog chia sẻ: https://www.ntlruby.com*/
/*----------------------------------*/
/*-----------------------------------*/
function _append(t,s){if("css"==s){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",t)}void 0!==e&&document.getElementsByTagName("head")[0].appendChild(e)}var is_load=0;function _css_js(){0==is_load&&(is_load=1,_append("https://dl.dropboxusercontent.com/s/6ua7wafcr97pkpq/contact-button-widget.css","css"),$.getScript("https://dl.dropboxusercontent.com/s/aid5sltj5weejj2/Contact-Button-Widget-html.js"))}$(window).scroll(function(){_css_js()}),$(window).mousemove(function(){_css_js()}),setTimeout(function(){_css_js()},3e3);