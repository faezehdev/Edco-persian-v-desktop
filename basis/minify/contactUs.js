let countbranch=document.querySelectorAll("p.branch");for(let e=0;e<countbranch.length;e++)fetch(`http://r98w118.undertest.ir/loadBrench.inc?id=${countbranch[e].innerHTML}`).then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelector(".branch"),r=document.querySelector(".Branches");if(null==t.querySelector("h2")){console.log("نمایندگی وجود ندارد");let e=document.createElement("p");e.innerHTML="نمایندگی وجود ندارد",r.appendChild(e),e.classList.add("else")}else console.log("نمایندگی وجود دارد"),r.appendChild(t)}));var markers=[{name:"Iran",coords:[32,53],id:"Iran",style:{image:"./images/Group.png"}},{name:"Armenia",id:"Armenia",coords:[40,45],style:{image:"./images/Group.png"}}],map=new JsVectorMap({map:"world",selector:"#map-wrapper",regionsSelectable:!0,markersSelectable:!0,selectedMarkers:[0],onMarkerSelected:function(e,t,r){let n=map.getSelectedMarkers();n.includes(e)&&n.forEach((t=>{t!=e&&(map.clearSelectedMarkers([t]),console.log(map.getSelectedMarkers()))}));document.querySelector(`.jsvmap-marker[data-index="${e}"]`),document.querySelectorAll(".jsvmap-marker");switch(e){case"0":{console.log("Iran");let t=document.querySelector('.jsvmap-marker[data-index="0"]');n.includes(e)&&n.forEach((r=>{r!=e&&(map.clearSelectedMarkers([r]),console.log(map.getSelectedMarkers()),t.setAttribute("href","./images/activeLocation.png"))})),t.classList.add("clicked"),t.setAttribute("data-clicked","true");let r=document.querySelector(".Branches"),l=document.querySelector(".contact-company");for(;r.firstChild;)r.removeChild(r.firstChild);for(;l.firstChild;)l.removeChild(l.firstChild);let c=9533;console.log("id",c),fetch(`http://r98w118.undertest.ir/loadMainCenter.inc?id=${c}`).then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelector(".RightSec"),r=document.querySelector(".contact-company");for(console.log(t,"Sec");r.firstChild;)r.removeChild(r.firstChild);r.appendChild(t)}));let o=document.querySelectorAll("p.branch");for(let e=0;e<o.length;e++)fetch(`http://r98w118.undertest.ir/loadBrench.inc?id=${o[e].innerHTML}`).then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelector(".branch"),r=document.querySelector(".Branches");if(null==t.querySelector("h2")){console.log("نمایندگی وجود ندارد");let e=document.createElement("p");e.innerHTML="نمایندگی وجود ندارد",r.appendChild(e),e.classList.add("else")}else console.log("نمایندگی وجود دارد"),r.appendChild(t)}));break}case"1":{console.log("Armanestan");let t=document.querySelector('.jsvmap-marker[data-index="1"]');n.includes(e)&&n.forEach((r=>{r!=e&&(map.clearSelectedMarkers([r]),console.log(map.getSelectedMarkers()),t.setAttribute("href","./images/activeLocation.png"))}));let r=9533;console.log(r,"id");let l=document.querySelector(".Branches");for(;l.firstChild;)l.removeChild(l.firstChild);fetch(`http://r98w118.undertest.ir/loadCenter.inc?id=${r}`).then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelector(".RightSec"),r=document.querySelector(".contact-company");for(console.log(t,"Sec");r.firstChild;)r.removeChild(r.firstChild);r.appendChild(t)})),fetch("http://r98w118.undertest.ir/loadBrench.inc?id=0000").then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelector(".branch"),r=document.querySelector(".Branches");if(null==t.querySelector("h2")){console.log("نمایندگی وجود ندارد");let e=document.createElement("p");e.innerHTML="نمایندگی وجود ندارد",r.appendChild(e),e.classList.add("else")}else console.log("نمایندگی وجود دارد"),r.appendChild(t)}));break}}},onRegionTooltipShow:function(e,t){"RU"===t&&(e.selector.innerHTML=e.text()+" <b>(Hello Russia)</b>")},regionStyle:{selected:{}},regionLabelStyle:{},markers:markers,markerStyle:{selected:{fill:"#e3eaef",image:"./images/activeLocation.png"}},markerLabelStyle:{initial:{fontFamily:"Poppins",fontSize:13,fontWeight:500,fill:"#35373e"}}});function $(e){return document.querySelector(e)}try{fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",{method:"HEAD",mode:"no-cors"})).then((function(e){return!0})).catch((function(e){var t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom",t.id="_carbonads_js",document.getElementById("carbon-block").appendChild(t)}))}catch(e){console.log(e)}!function(e,t,r,n,l,c,o){e.GoogleAnalyticsObject=l,e[l]=e[l]||function(){(e[l].q=e[l].q||[]).push(arguments)},e[l].l=1*new Date,c=t.createElement(r),o=t.getElementsByTagName(r)[0],c.async=1,c.src="//www.google-analytics.com/analytics.js",o.parentNode.insertBefore(c,o)}(window,document,"script",0,"ga"),ga("create","UA-46156385-1","cssscript.com"),ga("send","pageview");