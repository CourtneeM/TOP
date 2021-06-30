(()=>{"use strict";var e={397:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 40px;\n  font-family: sans-serif;\n  color: #eee;\n  background: #333;\n}\nheader ul {\n  display: flex;\n}\nheader ul li {\n  margin-left: 30px;\n  margin-right: 30px;\n  font-weight: 600;\n  list-style: none;\n}\n",""]);const i=a},462:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"#home-container {\n  width: 60%;\n  margin: 60px auto 0;\n  font-family: sans-serif;\n  text-align: center;\n}\n#home-container h2 {\n  margin-bottom: 50px;\n  font-size: 2.6rem;\n}\n#home-container p {\n  font-size: 1.4rem;\n  line-height: 30px;\n}\n",""]);const i=a},756:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n",""]);const i=a},159:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"#menu-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-family: sans-serif;\n}\n#menu-container h2 {\n  flex-basis: 100%;\n  margin-top: 40px;\n  font-size: 2.4rem;\n  text-align: center;\n}\n#menu-container p {\n  margin: 80px 30px 0 30px;\n  font-size: 1.2rem;\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:u,updater:a(p,r),references:1}),o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(695),o=n.n(i),s=n(216),c=n.n(s),l=n(756),d={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=o()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};d.domAPI=a(),d.insertStyleElement=c(),t()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals;var u=n(397),m={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=o()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};m.domAPI=a(),m.insertStyleElement=c(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var p=n(462),f={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=o()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};f.domAPI=a(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=()=>{const e=document.createElement("section"),t=document.createElement("h2"),n=document.createElement("p");return e.id="home-container",t.textContent="Home Cooked Italian Food Without a Mess",n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet? Vero ipsum dolorem amet ab dolores praesentium tempore quam natus eius necessitatibus dicta mollitia aut eos, harum sapiente temporibus, minus, suscipit animi rerum aperiam impedit? Excepturi distinctio fuga veniam non.",e.appendChild(t),e.appendChild(n),e};var v=n(159),C={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=o()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};C.domAPI=a(),C.insertStyleElement=c(),t()(v.Z,C),v.Z&&v.Z.locals&&v.Z.locals;const y=document.querySelector("#content");(()=>{const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("ul");t.textContent="Franky's Bistro",["Home","Menu","About","Contact"].forEach((e=>{const t=document.createElement("li");t.id=e.toLowerCase(),t.classList.add("nav-item"),t.textContent=e,n.appendChild(t)})),[t,n].forEach((t=>e.appendChild(t))),document.querySelector("#content").appendChild(e)})(),y.appendChild(h()),document.querySelectorAll(".nav-item").forEach((e=>{e.addEventListener("click",(e=>{for(;[...y.children].length>1;)y.removeChild(y.lastChild);"home"===e.target.id&&y.appendChild(h()),"menu"===e.target.id&&y.appendChild((()=>{const e=document.createElement("section"),t=document.createElement("h2"),n=[{name:"Pizza",price:"$8"},{name:"Pasta",price:"$5"},{name:"Bread",price:"$2"},{name:"Dessert",price:"$10"},{name:"Drink",price:"$3"}].map((e=>{const t=document.createElement("p");return t.textContent=`${e.name} - ${e.price}`,t}));return e.id="menu-container",t.textContent="Menu",[t,...n].forEach((t=>e.appendChild(t))),e})()),"about"===e.target.id&&y.appendChild((()=>{const e=document.createElement("section");return e.textContent="Abooooout",e})()),"contact"===e.target.id&&y.appendChild((()=>{const e=document.createElement("section");return e.textContent="Contaaaact",e})())}))}))})()})();