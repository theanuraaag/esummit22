!function(){var e=document.currentScript,t=!1;function n(t){var n=document.createElement("script"),r=e||document.getElementsByTagName("script")[0];n.setAttribute("async",!0),n.setAttribute("src",t),r.parentNode.insertBefore(n,r)}function r(e,t){return Element.prototype.matches?e.matches(t):Element.prototype.msMatchesSelector?e.msMatchesSelector(t):void 0}function o(e,t){if(e.closest)return e.closest(t);var n=e;do{if(r(n,t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null}function i(e,t){for(var n=0;n<e.length;n++)t(e[n],n,e)}function u(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function s(e){e&&(e.style.display="none")}function a(e){e&&e.style.removeProperty("display")}function c(e){return!e||"none"===e.style.display}var l=".sharing-hidden .inner",d="data-sharing-more-button-id";function h(e){this.button=e,this.pane=o(e,"div").querySelector(l),this.openedBy=null,this.recentlyOpenedByHover=!1,h.instances.push(this),this.pane.setAttribute(d,h.instances.length-1),this.attachHandlers()}if(h.instances=[],h.hoverOpenDelay=200,h.recentOpenDelay=400,h.hoverCloseDelay=300,h.instantiateOrReuse=function(e){var t=o(e,"div").querySelector(l),n=t&&t.getAttribute(d),r=h.instances[n];return r||new h(e)},h.getButtonInstanceFromPane=function(e){var t=e&&e.getAttribute(d);return h.instances[t]},h.closeAll=function(){for(var e=0;e<h.instances.length;e++)h.instances[e].close()},h.prototype.open=function(){var e,t,n=[0,0];function r(e){var t=e.getBoundingClientRect();return[t.left+(window.scrollX||window.pageXOffset||0),t.top+(window.scrollY||window.pageYOffset||0)]}function o(e,t){return parseInt(getComputedStyle(e).getPropertyValue(t)||0)}for(e=r(this.button),t=this.button.offsetParent||document.documentElement;t&&(t===document.body||t===document.documentElement)&&"static"===getComputedStyle(t).getPropertyValue("position");)t=t.parentNode;t&&t!==this.button&&1===t.nodeType&&(n=[(n=r(t))[0]+o(t,"border-left-width"),n[1]+o(t,"border-top-width")]);var i=e[0]-n[0]-o(this.button,"margin-left"),u=e[1]-n[1]-o(this.button,"margin-top");this.pane.style.left=i+"px",this.pane.style.top=u+this.button.offsetHeight+3+"px",a(this.pane)},h.prototype.close=function(){s(this.pane),this.openedBy=null},h.prototype.toggle=function(){c(this.pane)?this.open():this.close()},h.prototype.resetCloseTimer=function(){clearTimeout(this.closeTimer),this.closeTimer=setTimeout(this.close.bind(this),h.hoverCloseDelay)},h.prototype.attachHandlers=function(){this.buttonClick=function(e){e.preventDefault(),e.stopPropagation(),this.openedBy="click",clearTimeout(this.openTimer),clearTimeout(this.closeTimer),f(),this.recentlyOpenedByHover?(this.recentlyOpenedByHover=!1,clearTimeout(this.hoverOpenTimer),this.open()):this.toggle()}.bind(this),this.buttonEnter=function(){this.openedBy||(this.openTimer=setTimeout(function(){f(),this.open(),this.openedBy="hover",this.recentlyOpenedByHover=!0,this.hoverOpenTimer=setTimeout(function(){this.recentlyOpenedByHover=!1}.bind(this),h.recentOpenDelay)}.bind(this),h.hoverOpenDelay)),clearTimeout(this.closeTimer)}.bind(this),this.buttonLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer(),clearTimeout(this.openTimer)}.bind(this),this.paneEnter=function(){clearTimeout(this.closeTimer)}.bind(this),this.paneLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer()}.bind(this),this.documentClick=function(){this.close()}.bind(this),this.button.addEventListener("click",this.buttonClick),document.addEventListener("click",this.documentClick),void 0===document.ontouchstart&&(this.button.addEventListener("mouseenter",this.buttonEnter),this.button.addEventListener("mouseleave",this.buttonLeave),this.pane.addEventListener("mouseenter",this.paneEnter),this.pane.addEventListener("mouseleave",this.paneLeave))},window.sharing_js_options&&window.sharing_js_options.counts){var p={done_urls:[],get_counts:function(){var e,t,r,o,i;if("undefined"!=typeof WPCOM_sharing_counts)for(e in WPCOM_sharing_counts)if(r=WPCOM_sharing_counts[e],void 0===p.done_urls[r]){for(o in t={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(e)]})if(document.querySelector("a[data-shared=sharing-"+o+"-"+r+"]")){for(;i=t[o].pop();)n(i);window.sharing_js_options.is_stats_active&&p.bump_sharing_count_stat(o)}p.done_urls[r]=!0}},update_pinterest_count:function(e){void 0!==e.count&&1*e.count>0&&p.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[e.url],e.count)},inject_share_count:function(e,t){i(document.querySelectorAll("a[data-shared="+e+"] > span"),(function(e){u(e.querySelector(".share-count"));var n=document.createElement("span");n.className="share-count",n.textContent=p.format_count(t),e.appendChild(n)}))},format_count:function(e){return e<1e3?e:e>=1e3&&e<1e4?String(e).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(e){(new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request="+e+"&r="+Math.random()}};window.WPCOMSharing=p}function m(e){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)}function f(){s(document.querySelector("#sharing_email"))}function F(){var e=document.querySelector("#sharing_email");e&&document.body.appendChild(e),g()}function g(){window.WPCOMSharing&&window.WPCOMSharing.get_counts(),i(document.querySelectorAll(".sharedaddy a"),(function(e){var t=e.getAttribute("href");t&&-1!==t.indexOf("share=")&&-1===t.indexOf("&nb=1")&&e.setAttribute("href",t+"&nb=1")})),i(document.querySelectorAll(".sharedaddy a.sharing-anchor"),(function(e){h.instantiateOrReuse(e)})),void 0!==document.ontouchstart&&document.body.classList.add("jp-sharing-input-touch"),i(document.querySelectorAll(".sharedaddy ul"),(function(e){"true"!==e.getAttribute("data-sharing-events-added")&&(e.setAttribute("data-sharing-events-added","true"),i(e.querySelectorAll("a.share-print"),(function(e){e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var n=e.getAttribute("href")||"",r=function(){if(-1===n.indexOf("#print")){var e=(new Date).getTime();t=e,r=n,(o=document.createElement("iframe")).setAttribute("style","position:fixed; top:100; left:100; height:1px; width:1px; border:none;"),o.setAttribute("id","printFrame-"+t),o.setAttribute("name",o.getAttribute("id")),o.setAttribute("src",r),o.setAttribute("onload",'frames["printFrame-'+t+'"].focus();frames["printFrame-'+t+'"].print();'),document.body.appendChild(o)}else window.print();var t,r,o},i=o(e,l);if(i){var u=h.getButtonInstanceFromPane(i);u&&(u.close(),r())}else r()}))})),i(e.querySelectorAll("a.share-press-this"),(function(e){e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var n="";if(window.getSelection?n=window.getSelection():document.getSelection?n=document.getSelection():document.selection&&(n=document.selection.createRange().text),n){var r=e.getAttribute("href");e.setAttribute("href",r+"&sel="+encodeURI(n))}window.open(e.getAttribute("href"),"t","toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570")||(document.location.href=e.getAttribute("href"))}))})),i(e.querySelectorAll("a.share-email"),(function(e){var r=document.querySelector("#sharing_email");e.addEventListener("click",(function(o){if(o.preventDefault(),o.stopPropagation(),"object"!=typeof grecaptcha&&!t){var i=document.querySelector(".g-recaptcha");i&&"true"===i.getAttribute("data-lazy")&&(t=!0,n(decodeURI(i.getAttribute("data-url"))))}var s=e.getAttribute("href"),l=window.location.protocol+"//"+window.location.hostname+"/";if(0!==s.indexOf(l))return!0;if(c(r)){u(document.querySelector("#sharing_email .response"));var d=document.querySelector("#sharing_email form");a(d),d.querySelector("input[type=submit]").removeAttribute("disabled"),a(d.querySelector("a.sharing_cancel")),"object"==typeof grecaptcha&&"function"==typeof grecaptcha.reset&&window.___grecaptcha_cfg.count&&grecaptcha.reset();var p=e.getBoundingClientRect(),m=window.pageXOffset||document.documentElement.scrollLeft||0,F=window.pageYOffset||document.documentElement.scrollTop||0;r.style.left=m+p.left+"px",r.style.top=F+p.top+p.height+"px",a(r),h.closeAll()}else f()})),r.querySelector("a.sharing_cancel").addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),s(r.querySelector(".errors")),s(r),s(document.querySelector("#sharing_background"))}));var l=r.querySelector("input[type=submit]");l.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var n=o(l,"form"),u=n.querySelector("input[name=source_email]"),c=n.querySelector("input[name=target_email]");if(l.setAttribute("disabled",!0),s(n.querySelector("a.sharing_cancel")),i(n.querySelectorAll("img.loading"),(function(e){a(e)})),s(n.querySelector(".errors")),i(n.querySelectorAll(".error"),(function(e){e.classList.remove("error")})),m(u.value)||u.classList.add("error"),m(c.value)||c.classList.add("error"),!n.querySelector(".error")){for(var d=[],h=0;h<n.elements.length;h++)if(n.elements[h].name){var p=encodeURIComponent(n.elements[h].name)+"="+encodeURIComponent(n.elements[h].value);d.push(p.replace("%20","+"))}var F=d.join("&"),g=new XMLHttpRequest;return g.open("POST",e.getAttribute("href"),!0),g.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),g.setRequestHeader("x-requested-with","XMLHttpRequest"),g.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE&&200===this.status)if(i(n.querySelectorAll("img.loading"),(function(e){s(e)})),"1"===this.response||"2"===this.response||"3"===this.response)a(r.querySelector(".errors-"+this.response)),r.querySelector("input[type=submit]").removeAttribute("disabled"),a(r.querySelector("a.sharing_cancel")),"object"==typeof grecaptcha&&"function"==typeof grecaptcha.reset&&grecaptcha.reset();else{s(n);var e=document.createElement("div");e.innerHTML=this.response,r.appendChild(e.firstChild),a(r.querySelector("a.sharing_cancel"));var t=r.querySelector(".response a.sharing_cancel");t&&t.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),f(),s(document.querySelector("#sharing_background"))}))}},void g.send(F)}i(r.querySelectorAll("img.loading"),(function(e){s(e)})),l.removeAttribute("disabled"),a(r.querySelector("a.sharing_cancel")),i(r.querySelectorAll(".errors-1"),(function(e){a(e)}))}))})))})),i(document.querySelectorAll("li.share-email, li.share-custom a.sharing-anchor"),(function(e){e.classList.add("share-service-visible")}))}"loading"!==document.readyState?F():document.addEventListener("DOMContentLoaded",F),document.body.addEventListener("is.post-load",g)}();