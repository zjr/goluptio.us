/*!
 * Modernizr JavaScript library 1.5
 * http://www.modernizr.com/
 *
 * Copyright (c) 2009-2010 Faruk Ates - http://farukat.es/
 * Dual-licensed under the BSD and MIT licenses.
 * http://www.modernizr.com/license/
 *
 * Featuring major contributions by
 * Paul Irish  - http://paulirish.com
 */
/*
 * Modernizr is a script that will detect native CSS3 and HTML5 features
 * available in the current UA and provide an object containing all
 * features with a true/false value, depending on whether the UA has
 * native support for it or not.
 * 
 * In addition to that, Modernizr will add classes to the <html>
 * element of the page, one for each cutting-edge feature. If the UA
 * supports it, a class like "cssgradients" will be added. If not,
 * the class name will be "no-cssgradients". This allows for simple
 * if-conditionals in CSS styling, making it easily to have fine
 * control over the look and feel of your website.
 * 
 * @author        Faruk Ates
 * @copyright     (c) 2009-2010 Faruk Ates.
 *
 * @contributor   Paul Irish
 * @contributor   Ben Alman
 */
window.Modernizr=function(e,t,n){function at(e){l.cssText=e}function ft(e,t){return at(et.join(e+";")+(t||""))}function lt(e,t){return(""+e).indexOf(t)!==-1}function ct(e,t){for(var r in e)if(l[e[r]]!==n&&(!t||t(e[r],f)))return!0}function ht(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),r=[e,"Webkit"+n,"Moz"+n,"O"+n,"ms"+n,"Khtml"+n];return!!ct(r,t)}function pt(){i[D]=function(e){for(var t=0,n=e.length;t<n;t++)rt[e[t]]=e[t]in c;return rt}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),i[P]=function(e){for(var r=0,i,s=e.length;r<s;r++)c.setAttribute("type",e[r]),i=c.type!=="text",i&&(c.value=Y,/^range$/.test(c.type)&&c.style.WebkitAppearance!==n?(u.appendChild(c),i=t.defaultView.getComputedStyle&&t.defaultView.getComputedStyle(c,null).WebkitAppearance!=="textfield"&&c.offsetHeight!==0,u.removeChild(c)):/^(search|tel)$/.test(c.type)||(/^(url|email)$/.test(c.type)?i=c.checkValidity&&c.checkValidity()===!1:i=c.value!=Y)),nt[e[r]]=!!i;return nt}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="1.5",i={},s=!0,o=75,u=t.documentElement,a="modernizr",f=t.createElement(a),l=f.style,c=t.createElement("input"),h="canvas",p="canvastext",d="rgba",v="hsla",m="multiplebgs",g="backgroundsize",y="borderimage",b="borderradius",w="boxshadow",E="opacity",S="cssanimations",x="csscolumns",T="cssgradients",N="cssreflections",C="csstransforms",k="csstransforms3d",L="csstransitions",A="fontface",O="geolocation",M="video",_="audio",D="input",P=D+"types",H="svg",B="smil",j=H+"clippaths",F="background",I=F+"Color",q="canPlayType",R="localStorage",U="sessionStorage",z="applicationCache",W="webworkers",X="hashchange",V="crosswindowmessaging",$="historymanagement",J="draganddrop",K="websqldatabase",Q="indexedDB",G="websockets",Y=":)",Z=Object.prototype.toString,et=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),tt={},nt={},rt={},it=[],st=function(){function n(n,r){var i=arguments.length==1;if(i&&t[n])return t[n];r=r||document.createElement(e[n]||"div"),n="on"+n;var s=n in r;return!s&&r.setAttribute&&(r.setAttribute(n,"return;"),s=typeof r[n]=="function"),r=null,i?t[n]=s:s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},t={};return n}(),ot={}.hasOwnProperty,ut;typeof ot!="undefined"&&typeof ot.call!="undefined"?ut=function(e,t){return ot.call(e,t)}:ut=function(e,t){return t in e&&typeof e.constructor.prototype[t]=="undefined"},tt[h]=function(){return!!t.createElement(h).getContext},tt[p]=function(){return!!tt[h]()&&typeof t.createElement(h).getContext("2d").fillText=="function"},tt[O]=function(){return!!navigator.geolocation},tt[V]=function(){return!!e.postMessage},tt[K]=function(){var t=!!e.openDatabase;if(t)try{t=!!openDatabase(a+"testdb","1.0",a+"testdb",2e4)}catch(n){t=!1}return t},tt[Q]=function(){return!!e[Q]},tt[X]=function(){return st(X,e)&&(document.documentMode===n||document.documentMode>7)},tt[$]=function(){return!!e.history&&!!history.pushState},tt[J]=function(){return st("drag")&&st("dragstart")&&st("dragenter")&&st("dragover")&&st("dragleave")&&st("dragend")&&st("drop")},tt[G]=function(){return"WebSocket"in e},tt[d]=function(){return at(F+"-color:rgba(150,255,150,.5)"),lt(l[I],d)},tt[v]=function(){return at(F+"-color:hsla(120,40%,100%,.5)"),lt(l[I],d)||lt(l[I],v)},tt[m]=function(){return at(F+":url(//:),url(//:),red url(//:)"),(new RegExp("(url\\s*\\(.*?){3}")).test(l[F])},tt[g]=function(){return ht(F+"Size")},tt[y]=function(){return ht("borderImage")},tt[b]=function(){return ht("borderRadius","",function(e){return lt(e,"orderRadius")})},tt[w]=function(){return ht("boxShadow")},tt[E]=function(){return ft("opacity:.5"),lt(l[E],"0.5")},tt[S]=function(){return ht("animationName")},tt[x]=function(){return ht("columnCount")},tt[T]=function(){var e=F+"-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return at((e+et.join(t+e)+et.join(n+e)).slice(0,-e.length)),lt(l.backgroundImage,"gradient")},tt[N]=function(){return ht("boxReflect")},tt[C]=function(){return!!ct(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},tt[k]=function(){var e=!!ct(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);if(e){var n=document.createElement("style"),r=t.createElement("div");n.textContent="@media ("+et.join("transform-3d),(")+"modernizr){#modernizr{height:3px}}",t.getElementsByTagName("head")[0].appendChild(n),r.id="modernizr",u.appendChild(r),e=r.offsetHeight===3,n.parentNode.removeChild(n),r.parentNode.removeChild(r)}return e},tt[L]=function(){return ht("transitionProperty")},tt[A]=function(){var e,n=t.createElement("style"),r=t.createElement("span"),s,a=!1,f=t.body,l,c;n.textContent="@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}",t.getElementsByTagName("head")[0].appendChild(n),r.setAttribute("style","font:99px _,arial,helvetica;position:absolute;visibility:hidden"),f||(f=u.appendChild(t.createElement(A)),a=!0),r.innerHTML="........",r.id="fonttest",f.appendChild(r),s=r.offsetWidth*r.offsetHeight,r.style.font="99px testfont,_,arial,helvetica",e=s!==r.offsetWidth*r.offsetHeight;function h(){if(!f.parentNode)return;e=i[A]=s!==r.offsetWidth*r.offsetHeight,u.className=u.className.replace(/(no-)?fontface\b/,"")+(e?" ":" no-")+A}return setTimeout(h,o),setTimeout(h,o*2),addEventListener("load",function(){h(),(c=!0)&&l&&l(e),setTimeout(function(){a||(f=r),f.parentNode.removeChild(f),n.parentNode.removeChild(n)},50)},!1),i._fontfaceready=function(t){c||e?t(e):l=t},e||s!==r.offsetWidth},tt[M]=function(){var e=t.createElement(M),n=!!e[q];return n&&(n=new Boolean(n),n.ogg=e[q]('video/ogg; codecs="theora"'),n.h264=e[q]('video/mp4; codecs="avc1.42E01E"'),n.webm=e[q]('video/webm; codecs="vp8, vorbis"')),n},tt[_]=function(){var e=t.createElement(_),n=!!e[q];return n&&(n=new Boolean(n),n.ogg=e[q]('audio/ogg; codecs="vorbis"'),n.mp3=e[q]("audio/mpeg;"),n.wav=e[q]('audio/wav; codecs="1"'),n.m4a=e[q]("audio/x-m4a;")||e[q]("audio/aac;")),n},tt[R]=function(){try{return"localStorage"in e&&e[R]!==null}catch(t){return!1}},tt[U]=function(){try{return"sessionStorage"in e&&e[U]!==null}catch(t){return!1}},tt[W]=function(){return!!e.Worker},tt[z]=function(){var t=e[z];return!!t&&typeof t.status!="undefined"&&typeof t.update=="function"&&typeof t.swapCache=="function"},tt[H]=function(){return!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect},tt[B]=function(){return!!t.createElementNS&&/SVG/.test(Z.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))},tt[j]=function(){return!!t.createElementNS&&/SVG/.test(Z.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))};for(var dt in tt)ut(tt,dt)&&it.push(((i[dt.toLowerCase()]=tt[dt]())?"":"no-")+dt.toLowerCase());return i[D]||pt(),i.addTest=function(e,t){e=e.toLowerCase();if(i[e])return;return t=!!t(),u.className+=" "+(t?"":"no-")+e,i[e]=t,i},at(""),f=c=null,s&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",e.childNodes.length!==1}()&&function(e,t){function n(e,r){if(a[e])a[e].styleSheet.cssText+=r;else{var i=o[p],s=t[d]("style");s.media=e,i.insertBefore(s,i[p]),a[e]=s,n(e,r)}}function r(e,t){for(var i=new RegExp("\\b("+f+")\\b(?!.*[;}])","gi"),s=function(e){return".iepp_"+e},o=-1;++o<e.length;)t=e[o].media||t,r(e[o].imports,t),n(t,e[o].cssText.replace(i,s))}function i(){for(var e,n=t.getElementsByTagName("*"),i,s,o=new RegExp("^"+f+"$","i"),a=-1;++a<n.length;)(e=n[a])&&(s=e.nodeName.match(o))&&(i=new RegExp("^\\s*<"+s+"(.*)\\/"+s+">\\s*$","i"),u.innerHTML=e.outerHTML.replace(/\r|\n/g," ").replace(i,e.currentStyle.display=="block"?"<div$1/div>":"<span$1/span>"),i=u.childNodes[0],i.className+=" iepp_"+s,i=c[c.length]=[e,i],e.parentNode.replaceChild(i[1],i[0]));r(t.styleSheets,"all")}function s(){for(var e=-1,t;++e<c.length;)c[e][1].parentNode.replaceChild(c[e][0],c[e][1]);for(t in a)o[p].removeChild(a[t]);a={},c=[]}for(var o=t.documentElement,u=t.createDocumentFragment(),a={},f="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",l=f.split("|"),c=[],h=-1,p="firstChild",d="createElement";++h<l.length;)t[d](l[h]),u[d](l[h]);u=u.appendChild(t[d]("div")),e.attachEvent("onbeforeprint",i),e.attachEvent("onafterprint",s)}(this,t),i._enableHTML5=s,i._version=r,u.className=u.className.replace(/\bno-js\b/,"")+" js",u.className+=" "+it.join(" "),i}(this,this.document);