(()=>{"use strict";var e={624:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n",""]);const d=r},543:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#projects-section {\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 15px;\r\n  border-bottom: 2px solid #ddd;\r\n}\r\nheader h1 {\r\n  font-size: 1.6rem;\r\n}\r\nheader i {\r\n  cursor: pointer;\r\n}\r\n\r\n#projects-list-container {\r\n  position: absolute;\r\n  overflow-y: scroll;\r\n  z-index: 1;\r\n  width: 100%;\r\n  display: none;\r\n  max-height: 43vh;\r\n  background: #fff;\r\n  border-bottom: 2px solid #ddd;\r\n}\r\n\r\n.project-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 45px;\r\n  padding: 10px 25px 10px 15px;\r\n}\r\n.project-container input {\r\n  padding: 3px 5px;\r\n}\r\n.project-container:hover {\r\n  background: #ddd;\r\n  cursor: pointer;\r\n}\r\n\r\n#selected-project {\r\n  color: #fff;\r\n  background: #777;\r\n}\r\n\r\n#project-controls-container {\r\n  position: sticky;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 45px;\r\n  padding: 0px;\r\n  background: #fff;\r\n  border-top: 2px solid #ddd;\r\n}\r\n#project-controls-container:hover {\r\n  background: #fff;\r\n}\r\n#project-controls-container p {\r\n  flex-basis: 33.33%;\r\n  padding: 13px 15px 12px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n#project-controls-container p:nth-child(-n+2) {\r\n  border-right: 1px solid #ddd;\r\n}\r\n#project-controls-container p:nth-child(2):hover, #project-controls-container p:nth-child(3):hover {\r\n  background: #ddd;\r\n}\r\n#project-controls-container p:nth-child(1):hover {\r\n  background: red;\r\n}\r\n\r\n.project-control-action-container {\r\n  position: sticky;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  padding: 9px;\r\n  background: #fff;\r\n  border-top: 2px solid #ddd;\r\n}\r\n.project-control-action-container input {\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n}\r\n.project-control-action-container button {\r\n  padding: 3px 8px;\r\n}\r\n",""]);const d=r},868:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'#todos-section {\r\n  min-height: 88.3vh;\r\n}\r\n\r\n#todos-list-container {\r\n  padding-bottom: 90px;\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n}\r\n\r\n.completed-todo p {\r\n  color: #777;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todo-info-container {\r\n  flex-grow: 1;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 3fr 1fr;\r\n  grid-template-areas: "title title desc desc desc date date" "priority notes notes notes notes notes notes ";\r\n  row-gap: 15px;\r\n  column-gap: 5px;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n.todo-info-container p {\r\n  font-size: 0.8rem;\r\n}\r\n.todo-info-container p:nth-child(1) {\r\n  grid-area: title;\r\n  font-weight: 600;\r\n}\r\n.todo-info-container p:nth-child(2) {\r\n  grid-area: desc;\r\n}\r\n.todo-info-container p:nth-child(3) {\r\n  grid-area: date;\r\n  color: red;\r\n}\r\n.todo-info-container p:nth-child(4) {\r\n  grid-area: priority;\r\n}\r\n.todo-info-container p:nth-child(5) {\r\n  grid-area: notes;\r\n  font-style: italic;\r\n}\r\n.todo-info-container p:nth-child(6) {\r\n  grid-area: completed;\r\n}\r\n\r\n.todo-container:nth-child(even) {\r\n  background: #ddd;\r\n}\r\n\r\n.edit-todo-info-container,\r\n.add-todo-info-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n.edit-todo-info-container label,\r\n.add-todo-info-container label {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 2px;\r\n  padding: 3px 2px;\r\n  font-size: 0.9rem;\r\n}\r\n.edit-todo-info-container label:nth-child(1),\r\n.add-todo-info-container label:nth-child(1) {\r\n  flex: 2 0 100px;\r\n}\r\n.edit-todo-info-container label:nth-child(2),\r\n.add-todo-info-container label:nth-child(2) {\r\n  flex: 4 0 200px;\r\n}\r\n.edit-todo-info-container label:nth-child(3),\r\n.add-todo-info-container label:nth-child(3) {\r\n  flex: 1 0 75px;\r\n}\r\n.edit-todo-info-container label:nth-child(4),\r\n.add-todo-info-container label:nth-child(4) {\r\n  flex: 1 0 50px;\r\n}\r\n.edit-todo-info-container label:nth-child(5),\r\n.add-todo-info-container label:nth-child(5) {\r\n  flex: 6 0 250px;\r\n}\r\n\r\n.add-todo-info-container {\r\n  border-top: 1px solid #ddd;\r\n}\r\n\r\n.edit-todo-field-input,\r\n.add-todo-field-input {\r\n  margin-top: 3px;\r\n  padding: 3px 2px;\r\n  height: 28px;\r\n}\r\n\r\n#todos-controls-container {\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0px;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-top: 2px solid #ddd;\r\n}\r\n\r\n#sort-filter-options-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 45px;\r\n  margin: 0 auto;\r\n  padding: 4px;\r\n  font-size: 0.7rem;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n#sort-filter-options-container select {\r\n  padding: 3px 2px;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.options-choice-container:nth-child(1) {\r\n  margin-right: 5%;\r\n}\r\n.options-choice-container:nth-child(3) {\r\n  margin-left: 5%;\r\n}\r\n\r\n#todos-control-btns-container {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 45px;\r\n  text-align: center;\r\n}\r\n#todos-control-btns-container p {\r\n  flex-basis: 33.33%;\r\n  padding: 13px 15px 12px;\r\n  cursor: pointer;\r\n}\r\n#todos-control-btns-container p:nth-child(-n+2) {\r\n  border-right: 1px solid #ddd;\r\n}\r\n#todos-control-btns-container p:hover {\r\n  background: #ddd;\r\n}\r\n\r\n.todos-control-action-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.todos-control-action-container button {\r\n  padding: 3px 8px;\r\n}\r\n',""]);const d=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=[];function i(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],a=t.base?c[0]+t.base:c[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var p=i(s),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(d[p].references++,d[p].updater(u)):d.push({identifier:s,updater:h(u,t),references:1}),o.push(s)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var d=n.nc;d&&(o.nonce=d)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var d=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(d,i[t]):e.appendChild(d)}}function u(e,t,n){var o=n.css,r=n.media,d=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(e,t){var n,o,r;if(t.singleton){var d=f++;n=m||(m=a(t)),o=p.bind(null,n,d,!1),r=p.bind(null,n,d,!0)}else n=a(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);d[r].references--}for(var a=c(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===d[s].references&&(d[s].updater(),d.splice(s,1))}n=a}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var d=t[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=class{constructor(e,t=!1){this.name=e,this.todos=[],this["default project"]=t}displayTodos(){return this.todos}addTodo(e){this.todos.push(e)}deleteTodo(e){this.todos.splice(e,1)}editTodo(e,t,n){this.todos[e][t]=n}toggleCompleted(e){this.todos[e].completed=!this.todos[e].completed}},t=class{constructor(e,t,n,o,r,d=!1){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r,this.completed=d}};var o=n(379),r=n.n(o),d=n(543);r()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;const i=(()=>{const e=document.createElement("div");let t,n,o=0;e.id="projects-list-container";const r=function(){const t=document.querySelector("header>h1");[...e.querySelectorAll(".project-container")].length>0?t.textContent=n:t.textContent="Todo List App"},d=function(){0===[...e.children].length?r():(t&&t.removeAttribute("id"),t=[...e.children][o],n=t.querySelector(".project-name").textContent,t.id="selected-project")},i=function(e){const t=document.createElement("button"),n=document.createElement("button");return t.textContent="Cancel",t.classList.add("btn-project-control-action"),n.textContent=e,n.classList.add("btn-project-control-action"),[t,n]},c=function(r){if(r.list.forEach((n=>{const o=document.createElement("div"),r=document.createElement("input"),i=document.createElement("input"),c=document.createElement("p"),a=document.createElement("p");o.classList.add("project-container"),r.setAttribute("type","checkbox"),r.classList.add("checkbox-remove-project"),i.setAttribute("type","radio"),i.setAttribute("name","default-project"),i.classList.add("radio-default-project"),c.textContent=n.name,c.classList.add("project-name"),a.textContent=n.todos.length,a.classList.add("project-todo-count"),n["default project"]&&(i.checked=!0),r.style.display="none",i.style.display="none",o.appendChild(r),o.appendChild(i),o.appendChild(c),o.appendChild(a),e.appendChild(o),t||d()})),[...e.children].length>0){const t=[...e.querySelectorAll(".project-name")].map((e=>e.textContent));t.some((e=>e===n))?(o=t.indexOf(n),d()):(o=0,d())}else d();return e.appendChild(function(){const e=document.createElement("div");return e.id="project-controls-container",["Remove","Edit","Add"].forEach((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("input"),[n,o]=i("Add");return e.id="add-project-container",e.classList.add("project-control-action-container"),t.id="add-project-input",t.attributes.type="text",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[t,n]=i("Edit");return e.id="edit-project-container",e.classList.add("project-control-action-container"),e.appendChild(t),e.appendChild(n),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[t,n]=i("Remove");return e.id="remove-project-container",e.classList.add("project-control-action-container"),e.appendChild(t),e.appendChild(n),e.style.display="none",e}()),e},a=function(){[...e.children].forEach((e=>e.remove()))},l=function(t,r){const i=[...document.querySelectorAll(".project-container")],s=document.querySelector("#project-controls-container"),p=document.querySelectorAll(".btn-project-control-action"),u=document.querySelector("#menu"),m=document.querySelector("#close-menu-btn"),f=document.querySelectorAll(".checkbox-remove-project"),h=document.querySelectorAll(".radio-default-project");u.addEventListener("click",(()=>{e.style.display="block",u.style.display="none",m.style.display="block"})),m.addEventListener("click",(()=>{e.style.display="none",u.style.display="block",m.style.display="none",[...f,...h].forEach((e=>e.style.display="none"))})),i.forEach(((e,t)=>{e.addEventListener("click",(()=>{"none"!==s.style.display&&(o=t,d())}))})),[...s.children].forEach((e=>{e.addEventListener("click",(()=>{switch(s.style.display="none",e.textContent){case"Remove":document.querySelector("#remove-project-container").style.display="flex",[...f].forEach((e=>e.style.display="inline"));break;case"Edit":document.querySelector("#edit-project-container").style.display="flex",i.forEach((e=>{const t=[...e.children],n=document.createElement("input");n.classList.add("input-edit-project-name"),n.setAttribute("type","text"),n.value=t[2].textContent,e.removeChild(t[2]),e.insertBefore(n,t[t.length-1])})),[...h].forEach((e=>e.style.display="inline"));break;case"Add":document.querySelector("#add-project-container").style.display="flex"}}))})),[...p,m].forEach((o=>{const d=document.querySelector("#add-project-container"),i=document.querySelector("#edit-project-container"),p=document.querySelector("#remove-project-container");function u(){a(),[...c(t).children].forEach((t=>{e.appendChild(t)})),l(t,r),s.style.display="flex",[...document.querySelectorAll(".project-control-action-container")].forEach((e=>{e.style.display="none"})),[...f,...h].forEach((e=>e.style.display="none"))}o.addEventListener("click",(()=>{"flex"===p.style.display&&function(){const e=[...document.querySelectorAll(".checkbox-remove-project")];"Remove"===o.textContent&&(e.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e)).reverse().forEach((e=>t.list.splice(e,1))),t.list.some((e=>!e["default project"]))&&t.list.length>0&&(t.list[0]["default project"]=!0)),u()}(),"flex"===i.style.display&&function(){const e=[...document.querySelectorAll(".input-edit-project-name")],r=[...document.querySelectorAll(".radio-default-project")];if("Edit"===o.textContent){if(e.some((e=>""===e.value)))return void e.forEach((e=>{e.setCustomValidity("Field required"),e.reportValidity()}));{e.forEach(((e,n)=>t.list[n].name=e.value.trim()));const o=r.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e))[0];t.list.forEach(((e,t)=>{e["default project"]=t===o})),n=document.querySelector("#selected-project").querySelector(".input-edit-project-name").value,document.querySelector("#selected-project").removeAttribute("id")}}u()}(),"flex"===d.style.display&&function(){if("Add"===o.textContent){const e=d.querySelector("input");if(!e.value)return e.setCustomValidity("Field required"),void e.reportValidity();if(t.list.some((t=>t.name===e.value)))return e.setCustomValidity("Cannot have duplicate project names"),void e.reportValidity();t.addProject(new r(e.value))}u()}()}))}))};return{projectsHandler:function(e){const t=document.createElement("section");return t.id="projects-section",t.appendChild(function(e){const t=document.createElement("header"),o=document.createElement("h1"),r=document.createElement("i"),d=document.createElement("i");return o.id="selected-project-name",o.textContent=e.list.filter((e=>e["default project"]))[0].name,r.id="menu",r.classList.add("fas","fa-bars"),d.id="close-menu-btn",d.classList.add("fas","fa-times"),d.style.display="none",n=o.textContent,t.appendChild(o),t.appendChild(r),t.appendChild(d),t}(e)),t.appendChild(c(e)),t},projectsList:c,clearProjectsList:a,updateHeaderTitle:r,updateProjectTodoCount:function(e){[...document.querySelectorAll(".project-todo-count")].forEach(((t,n)=>t.textContent=e.list[n].todos.length))},projectsEventHandlers:l}})();var c=n(868);r()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const a=(()=>{const e=document.createElement("div");e.id="todos-list-container";const t=function(){const e=document.createElement("div");e.id="todos-controls-container";const t=function(e){const t=document.createElement("button"),n=document.createElement("button");return t.textContent="Cancel",t.classList.add("btn-todos-control-action"),n.textContent=e,n.classList.add("btn-todos-control-action"),[t,n]};return{todosControlsHandler:function(){return e.appendChild(function(){const e=document.createElement("div"),t=["All","Day","3 Days","7 Days","2 Weeks","Month"],n=["Priority","Due Date"],o=["Descending","Ascending"];return e.id="sort-filter-options-container",["Due in the next:","Sort by:","Sort order:"].forEach((r=>{const d=document.createElement("div"),i=document.createElement("p"),c=document.createElement("select");switch(d.classList.add("options-choice-container"),i.textContent=r,r){case"Due in the next:":d.id="filter-options-container",t.forEach((e=>{const t=document.createElement("option");t.classList.add(".filter-option"),t.textContent=e,t.value=e,c.appendChild(t)}));break;case"Sort by:":d.id="sort-by-options-container",n.forEach((e=>{const t=document.createElement("option");t.classList.add(".sort-option"),t.textContent=e,t.value=e,c.appendChild(t)}));break;case"Sort order:":d.id="sort-order-options-container",o.forEach((e=>{const t=document.createElement("option");t.classList.add(".sort-by-option"),t.textContent=e,t.value=e,c.appendChild(t)}))}d.appendChild(i),d.appendChild(c),e.appendChild(d)})),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="todos-control-btns-container",["Remove","Edit","Add"].forEach((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Remove");return e.id="remove-todo-container",e.classList.add("todos-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Edit");return e.id="edit-todo-container",e.classList.add("todos-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Add");return e.id="add-todo-container",e.classList.add("todos-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e}}}(),n=function(t){if(t.length<=0)return;const n=function(){const e=document.querySelector("#selected-project");return e.querySelector(".project-name")?e.querySelector(".project-name").textContent:e.querySelector(".input-edit-project-name").value}();return t.filter((e=>e.name===n))[0].todos.forEach((t=>{const n=document.createElement("div");n.classList.add("todo-container");const o=document.createElement("div");o.classList.add("todo-info-container");for(let e in t)if("completed"===e){const o=document.createElement("input"),r=document.createElement("input");o.classList.add("complete-todo-checkbox"),o.type="checkbox",r.classList.add("remove-todo-checkbox"),r.type="checkbox",r.style.display="none",n.appendChild(o),n.appendChild(r),t[e]&&(o.checked=!0,o.parentElement.classList.add("completed-todo"))}else{const n=document.createElement("p");n.textContent=t[e],o.appendChild(n)}n.appendChild(o),e.appendChild(n)})),e},o=function(){for(;e.firstChild;)e.removeChild(e.firstChild)},r=function(){const e=document.querySelector("#todos-controls-container");for(;e.firstChild;)e.removeChild(e.firstChild)},d=function(i,c){const a=document.querySelector("#selected-project-name").textContent,l=i.filter((e=>e.name===a))[0],s=["title","description","dueDate","priority","notes","completed"],p=[...document.querySelectorAll(".todo-info-container")],u=[...document.querySelectorAll(".complete-todo-checkbox")],m=[...document.querySelectorAll(".remove-todo-checkbox")],f=document.querySelector("#todos-control-btns-container"),h=[...f.children],y=[...document.querySelectorAll(".btn-todos-control-action")];u.forEach((e=>{e.addEventListener("click",(()=>{const t=[...e.parentElement.parentElement.children].indexOf(e.parentElement);e.parentElement.classList.toggle("completed-todo"),l.toggleCompleted(t)}))})),function(){const e=document.querySelector("#filter-options-container").querySelector("select"),t=document.querySelector("#sort-by-options-container").querySelector("select"),r=document.querySelector("#sort-order-options-container").querySelector("select");[e,t,r].forEach((d=>d.addEventListener("change",(d=>{let c=JSON.parse(JSON.stringify(i));c=function(t){switch(e.value){case"Day":t=t.map((e=>(e.name===l.name&&(e.todos=e.todos.filter((e=>{const t=new Date;return t<new Date(e.dueDate)&&new Date(e.dueDate)<new Date(t.getFullYear(),t.getMonth(),t.getDate()+1)}))),e)));break;case"3 Days":t=t.map((e=>(e.name===l.name&&(e.todos=e.todos.filter((e=>{const t=new Date;return t<new Date(e.dueDate)&&new Date(e.dueDate)<new Date(t.getFullYear(),t.getMonth(),t.getDate()+3)}))),e)));break;case"7 Days":t=t.map((e=>(e.name===l.name&&(e.todos=e.todos.filter((e=>{const t=new Date;return t<new Date(e.dueDate)&&new Date(e.dueDate)<new Date(t.getFullYear(),t.getMonth(),t.getDate()+7)}))),e)));break;case"2 Weeks":t=t.map((e=>(e.name===l.name&&(e.todos=e.todos.filter((e=>{const t=new Date;return t<new Date(e.dueDate)&&new Date(e.dueDate)<new Date(t.getFullYear(),t.getMonth(),t.getDate()+14)}))),e)));break;case"Month":t=t.map((e=>(e.name===l.name&&(e.todos=e.todos.filter((e=>{const t=new Date;return t<new Date(e.dueDate)&&new Date(e.dueDate)<new Date(t.getFullYear(),t.getMonth()+1,t.getDate())}))),e)))}return t}(c),c=function(e){switch(t.value){case"Priority":e=e.map((e=>(e.name===l.name&&e.todos.sort(((e,t)=>e.priority-t.priority)),e)));break;case"Due Date":default:e=e.map((e=>(e.name===l.name&&e.todos.sort(((e,t)=>e.dueDate<t.dueDate?-1:e.dueDate>t.dueDate?1:0)),e)))}return e}(c),c=function(e){return e.map((e=>(e.name===l.name&&("Due Date"===t.value&&"Descending"===r.value&&e.todos.reverse(),"Priority"===t.value&&"Ascending"===r.value&&e.todos.reverse()),e)))}(c),o(),n(c)}))))}(),h.forEach((t=>{t.addEventListener("click",(()=>{switch(f.style.display="none",t.textContent){case"Remove":document.querySelector("#remove-todo-container").style.display="flex",u.forEach((e=>e.style.display="none")),m.forEach((e=>e.style.display="inline"));break;case"Edit":document.querySelector("#edit-todo-container").style.display="flex",u.forEach((e=>e.style.display="none")),p.forEach((e=>{e.removeAttribute("class"),e.classList.add("edit-todo-info-container"),[...e.children].forEach(((t,n)=>{const o=document.createElement("label");let r=document.createElement("input");o.textContent=s[n][0].toUpperCase()+s[n].slice(1),r.classList.add("edit-todo-field-input"),"priority"===s[n]?(r=document.createElement("select"),r.classList.add("edit-todo-field-input"),["1","2","3","4","5"].forEach((e=>{const t=document.createElement("option");t.value=e,t.textContent=e,r.appendChild(t)}))):"dueDate"===s[n]?r.setAttribute("type","date"):r.setAttribute("type","text"),r.value=t.textContent,o.appendChild(r),e.replaceChild(o,t)}))}));break;case"Add":document.querySelector("#add-todo-container").style.display="flex";const t=document.createElement("div");t.classList.add("add-todo-info-container"),s.forEach((e=>{if("completed"===e);else{const n=document.createElement("label");let o=document.createElement("input");n.textContent=e[0].toUpperCase()+e.slice(1),o.classList.add("add-todo-field-input"),"priority"===e?(o=document.createElement("select"),o.classList.add("add-todo-field-input"),["1","2","3","4","5"].forEach((e=>{const t=document.createElement("option");t.value=e,t.textContent=e,o.appendChild(t)}))):"dueDate"===e?o.setAttribute("type","date"):o.setAttribute("type","text"),n.appendChild(o),t.appendChild(n)}})),e.appendChild(t)}}))})),y.forEach((a=>{const u=document.querySelector("#remove-todo-container"),h=document.querySelector("#edit-todo-container"),y=document.querySelector("#add-todo-container");a.addEventListener("click",(x=>{if("flex"===u.style.display&&"Remove"===a.textContent&&m.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e)).reverse().forEach((e=>l.deleteTodo(e))),"flex"===h.style.display&&"Edit"===a.textContent){const e=[...document.querySelectorAll(".edit-todo-info-container")].map((e=>[...e.querySelectorAll(".edit-todo-field-input")].map((e=>e.value))));e.some((e=>e.includes("")))?[...document.querySelector(".edit-todo-info-container").querySelectorAll("input")].forEach((e=>{e.setCustomValidity("All fields required"),e.reportValidity()})):(l.todos.forEach(((t,n)=>{s.forEach(((o,r)=>{t[o]=e[n][r]}))})),[...p].forEach((e=>{e.removeAttribute("class"),e.classList.add("todo-info-container")})))}if("flex"===y.style.display&&"Add"===a.textContent){const e=[...document.querySelectorAll(".add-todo-field-input")].map((e=>e.value));e.includes("")?[...document.querySelector(".add-todo-info-container").querySelectorAll("input")].forEach((e=>{e.setCustomValidity("All fields required"),e.reportValidity()})):l.addTodo(new c(...e))}if("Cancel"===x.target.textContent);else{if([...document.querySelectorAll(".edit-todo-field-input")].map((e=>e.value)).includes(""))return;if([...document.querySelectorAll(".add-todo-field-input")].map((e=>e.value)).includes(""))return}o(),r(),[...n(i).children].forEach((t=>{e.appendChild(t)})),document.querySelector("#todos-section").appendChild(t.todosControlsHandler()),d(i,c),f.style.display="flex",[...document.querySelectorAll(".todos-control-action-container")].forEach((e=>{e.style.display="none"})),[...m].forEach((e=>e.style.display="none"))}))}))};return{todosHandler:function(e){const o=document.createElement("section");return o.id="todos-section",o.appendChild(n(e)),o.appendChild(t.todosControlsHandler()),o},displayTodos:n,todosControlsContainers:t,clearTodos:o,clearControlsContainer:r,todosEventHandlers:d}})();var l=n(624);r()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;!function(){const n=new class{constructor(){this.list=[]}displayList(){return this.list}displayProjectNames(){return this.list.map((e=>e.name))}addProject(e){0===this.list.length&&(e["default project"]=!0),this.list.push(e)}deleteProject(e){this.list.splice(e,1)}editProjectName(e,t){this.list[e].name=t}};n.addProject(new e("Test Project 1")),n.addProject(new e("Test Project 2")),n.list[0].addTodo(new t("Test Todo 1","Tidy up around room","2021-06-20",3,"Clean under bed, dust shelves, wipe TV")),n.list[0].addTodo(new t("Test Todo 2","Finish all homework","2021-05-22",5,"history, math, science, business")),n.list[0].addTodo(new t("Test Todo 3","Get food for Liza","2021-05-23",3,"Petfoods Depot has a sale on dog food")),n.list[1].addTodo(new t("Test Todo 1","Test Project 2, Test Todo 1","2021-06-05",1,"Notes for test todo 1")),((e,t,n)=>{const o=e.list,r=document.querySelector("#content-container");r.appendChild(i.projectsHandler(e)),r.appendChild(a.todosHandler(o)),i.projectsEventHandlers(e,t),a.todosEventHandlers(o,n),new MutationObserver((function(){i.updateHeaderTitle(),a.clearTodos(),a.displayTodos(o),a.clearControlsContainer(),a.todosControlsContainers.todosControlsHandler(),a.todosEventHandlers(o,n)})).observe(document.querySelector("#projects-list-container"),{subtree:!0,childList:!0,attributes:!0,attributeFilter:["id"]}),new MutationObserver((function(){i.updateProjectTodoCount(e)})).observe(document.querySelector("#todos-list-container"),{childList:!0})})(n,e,t)}()})()})();