(()=>{"use strict";var e={624:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n",""]);const c=r},543:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  border-bottom: 2px solid #ddd;\n}\nheader h1 {\n  font-size: 1.6rem;\n}\nheader i {\n  cursor: pointer;\n}\n\n#projects-list-container {\n  display: none;\n  border-bottom: 2px solid #ddd;\n}\n#projects-list-container div {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 25px 10px 15px;\n}\n#projects-list-container div:hover {\n  background: #ddd;\n  cursor: pointer;\n}\n#projects-list-container #selected-project {\n  color: #fff;\n  background: #777;\n}\n\ndiv#project-controls {\n  display: flex;\n  padding: 0px;\n  border-top: 2px solid #ddd;\n}\ndiv#project-controls:hover {\n  background: #fff;\n}\ndiv#project-controls p {\n  flex-basis: 33.33%;\n  padding: 10px 25px 10px 15px;\n  text-align: center;\n  cursor: pointer;\n}\ndiv#project-controls p:nth-child(-n+2) {\n  border-right: 1px solid #ddd;\n}\ndiv#project-controls p:nth-child(2):hover, div#project-controls p:nth-child(3):hover {\n  background: #ddd;\n}\ndiv#project-controls p:nth-child(1):hover {\n  background: red;\n}\n",""]);const c=r},868:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'.todo-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 3fr 1fr;\n  grid-template-areas: "completed title desc desc desc date date" "priority notes notes notes notes notes notes ";\n  row-gap: 15px;\n  column-gap: 5px;\n  align-items: center;\n  padding: 10px;\n}\n.todo-container p {\n  font-size: 0.8rem;\n}\n.todo-container p:nth-child(1) {\n  grid-area: title;\n  font-weight: 600;\n}\n.todo-container p:nth-child(2) {\n  grid-area: desc;\n}\n.todo-container p:nth-child(3) {\n  grid-area: date;\n  color: red;\n}\n.todo-container p:nth-child(4) {\n  grid-area: priority;\n  text-decoration: underline;\n}\n.todo-container p:nth-child(5) {\n  grid-area: notes;\n  font-style: italic;\n}\n.todo-container p:nth-child(6) {\n  grid-area: completed;\n}\n\n.todo-container:nth-child(even) {\n  background: #ddd;\n}\n',""]);const c=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var i=0;i<e.length;i++){var a=[].concat(e[i]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function d(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var p=d(s),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(c[p].references++,c[p].updater(u)):c.push({identifier:s,updater:f(u,t),references:1}),o.push(s)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var c=n.nc;c&&(o.nonce=c)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var d=r(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var c=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(c,d[t]):e.appendChild(c)}}function u(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function f(e,t){var n,o,r;if(t.singleton){var c=m++;n=h||(h=a(t)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else n=a(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=d(n[o]);c[r].references--}for(var a=i(e,t),l=0;l<n.length;l++){var s=d(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=a}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=class{constructor(e,t=!1){this.name=e,this.todos=[],this["default project"]=t}displayTodos(){return this.todos}addTodo(e){this.todos.push(e)}deleteTodo(e){this.todos.splice(e,1)}editTodo(e,t,n){this.todos[e][t]=n}toggleCompleted(e){this.todos[e].completed=!this.todos[e].completed}},t=class{constructor(e,t,n,o,r,c=!1){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r,this.completed=c}};var o=n(379),r=n.n(o),c=n(543);r()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const d=(()=>{const e=document.createElement("div");e.id="projects-list-container";const t=function(e){const t=document.createElement("button"),n=document.createElement("button");return t.textContent="Cancel",t.classList.add("btn-project-control-action"),n.textContent=e,n.classList.add("btn-project-control-action"),[t,n]},n=function(n){return n.list.forEach((t=>{const n=document.createElement("div"),o=document.createElement("input"),r=document.createElement("input"),c=document.createElement("p"),d=document.createElement("p");n.classList.add("project-container"),o.setAttribute("type","checkbox"),o.classList.add("checkbox-remove-project"),r.setAttribute("type","radio"),r.setAttribute("name","default-project"),r.classList.add("radio-default-project"),c.textContent=t.name,c.classList.add("project-name"),d.textContent=t.todos.length,t["default project"]&&(n.id="selected-project",r.checked=!0),o.style.display="none",r.style.display="none",n.appendChild(o),n.appendChild(r),n.appendChild(c),n.appendChild(d),e.appendChild(n)})),e.appendChild(function(){const e=document.createElement("div");return e.id="project-controls",["Remove","Edit","Add"].forEach((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("input"),[o,r]=t("Add");return e.id="add-project-container",e.classList.add("project-control-action-container"),n.attributes.type="text",e.appendChild(n),e.appendChild(o),e.appendChild(r),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Edit");return e.id="edit-project-container",e.classList.add("project-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Remove");return e.id="remove-project-container",e.classList.add("project-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e},o=function(t){const r=[...document.querySelectorAll(".project-container")],c=document.querySelector("#project-controls"),d=document.querySelectorAll(".btn-project-control-action"),i=document.querySelector("#menu"),a=document.querySelector("#close-menu-btn"),l=document.querySelectorAll(".checkbox-remove-project"),s=document.querySelectorAll(".radio-default-project");i.addEventListener("click",(()=>{e.style.display="block",i.style.display="none",a.style.display="block"})),a.addEventListener("click",(()=>{e.style.display="none",i.style.display="block",a.style.display="none",[...l,...s].forEach((e=>e.style.display="none"))})),r.forEach((e=>{e.addEventListener("click",(()=>{"none"!==c.style.display&&(document.querySelector("#selected-project").removeAttribute("id"),e.id="selected-project")}))})),[...c.children].forEach((e=>{e.addEventListener("click",(()=>{switch(c.style.display="none",e.textContent){case"Remove":document.querySelector("#remove-project-container").style.display="flex",[...l].forEach((e=>e.style.display="inline"));break;case"Edit":document.querySelector("#edit-project-container").style.display="flex",r.forEach((e=>{const t=[...e.children],n=document.createElement("input");n.classList.add("input-edit-project-name"),n.setAttribute("type","text"),n.value=t[2].textContent,e.removeChild(t[2]),e.insertBefore(n,t[t.length-1])})),[...s].forEach((e=>e.style.display="inline"));break;case"Add":document.querySelector("#add-project-container").style.display="flex"}}))})),[...d,a].forEach((r=>{const d=document.querySelector("#add-project-container"),i=document.querySelector("#edit-project-container"),a=document.querySelector("#remove-project-container");r.addEventListener("click",(()=>{if("flex"===i.style.display){const e=[...document.querySelectorAll(".input-edit-project-name")],n=[...document.querySelectorAll(".radio-default-project")];if("Edit"===r.textContent){e.forEach(((e,n)=>t.list[n].name=e.value.trim()));const o=n.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e))[0];t.list.forEach(((e,t)=>{e["default project"]=t===o})),document.querySelector("#selected-project").removeAttribute("id"),n[o].parentElement.id="selected-project"}}if("flex"===d.style.display&&(d.querySelector("input"),r.textContent),"flex"===a.style.display){const n=[...document.querySelectorAll(".checkbox-remove-project")];"Remove"===r.textContent&&(n.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e)).reverse().forEach((e=>t.list.splice(e,1))),t.list.some((e=>!e["default project"]))&&t.list.length>0&&(t.list[0]["default project"]=!0,document.querySelector("#selected-project").removeAttribute("id"),[...e.children][0].id="selected-project"),t.list.length<=0&&(document.querySelector("#selected-project").removeAttribute("id"),e.id="selected-project"),console.log(t))}[...e.children].forEach((e=>e.remove())),[...n(t).children].forEach((t=>{e.appendChild(t)})),o(t),c.style.display="flex",[...document.querySelectorAll(".project-control-action-container")].forEach((e=>{e.style.display="none"})),[...l,...s].forEach((e=>e.style.display="none"))}))}))};return{projectsHandler:function(e){const t=document.createElement("section");return t.appendChild(function(e){const t=document.createElement("header"),n=document.createElement("h1"),o=document.createElement("i"),r=document.createElement("i");return n.textContent=e.list.filter((e=>e["default project"]))[0].name,o.id="menu",o.classList.add("fas","fa-bars"),r.id="close-menu-btn",r.classList.add("fas","fa-times"),r.style.display="none",t.appendChild(n),t.appendChild(o),t.appendChild(r),t}(e)),t.appendChild(n(e)),t},updateHeaderTitle:function(){const e=document.querySelector("#selected-project"),t=document.querySelector("header>h1");"project-container"===e.classList.value?t.textContent=[...e.children][2].textContent:t.textContent="Todo List App"},projectsEventHandlers:o}})();var i=n(868);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=(()=>{const e=document.createElement("div");e.id="todos-container";const t=function(t){if(t.list.length<=0)return;const n=[...document.querySelector("#selected-project").children][2].textContent;return t.list.filter((e=>e.name===n))[0].todos.forEach((t=>{const n=document.createElement("div");n.classList.add("todo-container");for(let e in t)if("completed"===e){const e=document.createElement("input");e.type="checkbox",n.appendChild(e)}else{const o=document.createElement("p");o.textContent=t[e],n.appendChild(o)}e.appendChild(n)})),e};return{initialTodosRender:function(e){const n=document.createElement("section");return n.appendChild(t(e)),n},displayTodos:t,clearTodos:function(){const e=document.querySelector("#todos-container");for(;e.firstChild;)e.removeChild(e.firstChild)}}})();var l=n(624);r()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;!function(){const n=new class{constructor(){this.list=[]}displayList(){return this.list}displayProjectNames(){return this.list.map((e=>e.name))}addProject(e){this.list.push(e)}deleteProject(e){this.list.splice(e,1)}editProjectName(e,t){this.list[e].name=t}};n.addProject(new e("Default Project",!0)),n.addProject(new e("Project 1")),n.list[0].addTodo(new t("Clean room","Tidy up around room","tomorrow","3","Clean under bed, dust shelves, wipe TV")),n.list[0].addTodo(new t("Do homework","Finish all homework","today","5","history, math, science, business")),n.list[0].addTodo(new t("Pick up dog food","Get food for Liza","today","3","Petfoods Depot has a sale on dog food")),n.list[1].addTodo(new t("2","2 desc","never","1","notes22")),(e=>{const t=document.querySelector("#content-container");t.appendChild(d.projectsHandler(e)),t.appendChild(a.initialTodosRender(e)),d.projectsEventHandlers(e),new MutationObserver((function(){d.updateHeaderTitle(),a.clearTodos(),a.displayTodos(e)})).observe(document.querySelector("#projects-list-container"),{subtree:!0,attributes:!0,attributeFilter:["id"]})})(n)}()})()})();