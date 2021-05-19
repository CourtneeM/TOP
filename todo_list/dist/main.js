(()=>{"use strict";var e={624:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),d=n.n(o)()((function(e){return e[1]}));d.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n",""]);const r=d},543:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),d=n.n(o)()((function(e){return e[1]}));d.push([e.id,"#projects-section {\n  position: relative;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  border-bottom: 2px solid #ddd;\n}\nheader h1 {\n  font-size: 1.6rem;\n}\nheader i {\n  cursor: pointer;\n}\n\n#projects-list-container {\n  position: absolute;\n  overflow-y: scroll;\n  z-index: 1;\n  width: 100%;\n  display: none;\n  max-height: 43vh;\n  background: #fff;\n  border-bottom: 2px solid #ddd;\n}\n\n.project-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  padding: 10px 25px 10px 15px;\n}\n.project-container input {\n  padding: 3px 5px;\n}\n.project-container:hover {\n  background: #ddd;\n  cursor: pointer;\n}\n\n#selected-project {\n  color: #fff;\n  background: #777;\n}\n\n#project-controls-container {\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 45px;\n  padding: 0px;\n  background: #fff;\n  border-top: 2px solid #ddd;\n}\n#project-controls-container:hover {\n  background: #fff;\n}\n#project-controls-container p {\n  flex-basis: 33.33%;\n  padding: 13px 15px 12px;\n  text-align: center;\n  cursor: pointer;\n}\n#project-controls-container p:nth-child(-n+2) {\n  border-right: 1px solid #ddd;\n}\n#project-controls-container p:nth-child(2):hover, #project-controls-container p:nth-child(3):hover {\n  background: #ddd;\n}\n#project-controls-container p:nth-child(1):hover {\n  background: red;\n}\n\n.project-control-action-container {\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  justify-content: space-around;\n  padding: 9px;\n  background: #fff;\n  border-top: 2px solid #ddd;\n}\n.project-control-action-container input {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.project-control-action-container button {\n  padding: 3px 8px;\n}\n",""]);const r=d},868:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),d=n.n(o)()((function(e){return e[1]}));d.push([e.id,'#todos-section {\n  min-height: 88.3vh;\n}\n\n#todos-list-container {\n  padding-bottom: 45px;\n}\n\n.todo-container {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.completed-todo p {\n  color: #777;\n  text-decoration: line-through;\n}\n\n.todo-info-container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 2fr 3fr 1fr;\n  grid-template-areas: "title title desc desc desc date date" "priority notes notes notes notes notes notes ";\n  row-gap: 15px;\n  column-gap: 5px;\n  align-items: center;\n  padding: 10px;\n}\n.todo-info-container p {\n  font-size: 0.8rem;\n}\n.todo-info-container p:nth-child(1) {\n  grid-area: title;\n  font-weight: 600;\n}\n.todo-info-container p:nth-child(2) {\n  grid-area: desc;\n}\n.todo-info-container p:nth-child(3) {\n  grid-area: date;\n  color: red;\n}\n.todo-info-container p:nth-child(4) {\n  grid-area: priority;\n}\n.todo-info-container p:nth-child(5) {\n  grid-area: notes;\n  font-style: italic;\n}\n.todo-info-container p:nth-child(6) {\n  grid-area: completed;\n}\n\n.todo-container:nth-child(even) {\n  background: #ddd;\n}\n\n.edit-todo-info-container,\n.add-todo-info-container {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 10px;\n}\n.edit-todo-info-container label,\n.add-todo-info-container label {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 2px;\n  padding: 3px 2px;\n  font-size: 0.9rem;\n}\n.edit-todo-info-container label:nth-child(1),\n.add-todo-info-container label:nth-child(1) {\n  flex: 2 0 100px;\n}\n.edit-todo-info-container label:nth-child(2),\n.add-todo-info-container label:nth-child(2) {\n  flex: 4 0 200px;\n}\n.edit-todo-info-container label:nth-child(3),\n.add-todo-info-container label:nth-child(3) {\n  flex: 1 0 75px;\n}\n.edit-todo-info-container label:nth-child(4),\n.add-todo-info-container label:nth-child(4) {\n  flex: 1 0 50px;\n}\n.edit-todo-info-container label:nth-child(5),\n.add-todo-info-container label:nth-child(5) {\n  flex: 6 0 250px;\n}\n.edit-todo-info-container label input,\n.add-todo-info-container label input {\n  margin-top: 3px;\n  padding: 3px 2px;\n}\n\n.add-todo-info-container {\n  border-top: 1px solid #ddd;\n}\n\n#todos-controls-container {\n  position: fixed;\n  bottom: 0;\n  padding: 0px;\n  width: 100%;\n  display: flex;\n  background: #fff;\n  border-top: 2px solid #ddd;\n}\n\n#todos-control-btns-container {\n  display: flex;\n  width: 100%;\n  height: 45px;\n  text-align: center;\n  border-top: 1px solid #ddd;\n}\n#todos-control-btns-container p {\n  flex-basis: 33.33%;\n  padding: 13px 15px 12px;\n  cursor: pointer;\n}\n#todos-control-btns-container p:nth-child(-n+2) {\n  border-right: 1px solid #ddd;\n}\n#todos-control-btns-container p:hover {\n  background: #ddd;\n}\n\n.todos-control-action-container {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.todos-control-action-container button {\n  padding: 3px 8px;\n}\n',""]);const r=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var d={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(d[i]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&d[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:(e,t,n)=>{var o,d=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function i(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],d=0;d<e.length;d++){var c=e[d],a=t.base?c[0]+t.base:c[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var p=i(s),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:s,updater:m(u,t),references:1}),o.push(s)}return o}function a(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=d(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var d=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,d);else{var r=document.createTextNode(d),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function u(e,t,n){var o=n.css,d=n.media,r=n.sourceMap;if(d?e.setAttribute("media",d):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,f=0;function m(e,t){var n,o,d;if(t.singleton){var r=f++;n=h||(h=a(t)),o=p.bind(null,n,r,!1),d=p.bind(null,n,r,!0)}else n=a(t),o=u.bind(null,n,t),d=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else d()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var d=i(n[o]);r[d].references--}for(var a=c(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}n=a}}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=class{constructor(e,t=!1){this.name=e,this.todos=[],this["default project"]=t}displayTodos(){return this.todos}addTodo(e){this.todos.push(e)}deleteTodo(e){this.todos.splice(e,1)}editTodo(e,t,n){this.todos[e][t]=n}toggleCompleted(e){this.todos[e].completed=!this.todos[e].completed}},t=class{constructor(e,t,n,o,d,r=!1){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=d,this.completed=r}};var o=n(379),d=n.n(o),r=n(543);d()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i=(()=>{const e=document.createElement("div");e.id="projects-list-container";const t=function(e){const t=document.createElement("button"),n=document.createElement("button");return t.textContent="Cancel",t.classList.add("btn-project-control-action"),n.textContent=e,n.classList.add("btn-project-control-action"),[t,n]},n=function(n){return n.list.forEach((t=>{const n=document.createElement("div"),o=document.createElement("input"),d=document.createElement("input"),r=document.createElement("p"),i=document.createElement("p");n.classList.add("project-container"),o.setAttribute("type","checkbox"),o.classList.add("checkbox-remove-project"),d.setAttribute("type","radio"),d.setAttribute("name","default-project"),d.classList.add("radio-default-project"),r.textContent=t.name,r.classList.add("project-name"),i.textContent=t.todos.length,t["default project"]&&(n.id="selected-project",d.checked=!0),o.style.display="none",d.style.display="none",n.appendChild(o),n.appendChild(d),n.appendChild(r),n.appendChild(i),e.appendChild(n)})),e.appendChild(function(){const e=document.createElement("div");return e.id="project-controls-container",["Remove","Edit","Add"].forEach((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("input"),[o,d]=t("Add");return e.id="add-project-container",e.classList.add("project-control-action-container"),n.attributes.type="text",e.appendChild(n),e.appendChild(o),e.appendChild(d),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Edit");return e.id="edit-project-container",e.classList.add("project-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Remove");return e.id="remove-project-container",e.classList.add("project-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e},o=function(t,d){const r=[...document.querySelectorAll(".project-container")],i=document.querySelector("#project-controls-container"),c=document.querySelectorAll(".btn-project-control-action"),a=document.querySelector("#menu"),l=document.querySelector("#close-menu-btn"),s=document.querySelectorAll(".checkbox-remove-project"),p=document.querySelectorAll(".radio-default-project");a.addEventListener("click",(()=>{e.style.display="block",a.style.display="none",l.style.display="block"})),l.addEventListener("click",(()=>{e.style.display="none",a.style.display="block",l.style.display="none",[...s,...p].forEach((e=>e.style.display="none"))})),r.forEach((e=>{e.addEventListener("click",(()=>{"none"!==i.style.display&&(document.querySelector("#selected-project").removeAttribute("id"),e.id="selected-project")}))})),[...i.children].forEach((e=>{e.addEventListener("click",(()=>{switch(i.style.display="none",e.textContent){case"Remove":document.querySelector("#remove-project-container").style.display="flex",[...s].forEach((e=>e.style.display="inline"));break;case"Edit":document.querySelector("#edit-project-container").style.display="flex",r.forEach((e=>{const t=[...e.children],n=document.createElement("input");n.classList.add("input-edit-project-name"),n.setAttribute("type","text"),n.value=t[2].textContent,e.removeChild(t[2]),e.insertBefore(n,t[t.length-1])})),[...p].forEach((e=>e.style.display="inline"));break;case"Add":document.querySelector("#add-project-container").style.display="flex"}}))})),[...c,l].forEach((r=>{const c=document.querySelector("#add-project-container"),a=document.querySelector("#edit-project-container"),l=document.querySelector("#remove-project-container");r.addEventListener("click",(()=>{if("flex"===a.style.display){const e=[...document.querySelectorAll(".input-edit-project-name")],n=[...document.querySelectorAll(".radio-default-project")];if("Edit"===r.textContent){e.forEach(((e,n)=>t.list[n].name=e.value.trim()));const o=n.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e))[0];t.list.forEach(((e,t)=>{e["default project"]=t===o})),document.querySelector("#selected-project").removeAttribute("id"),n[o].parentElement.id="selected-project"}}if("flex"===c.style.display&&"Add"===r.textContent&&t.addProject(new d(c.querySelector("input").value)),"flex"===l.style.display){const n=[...document.querySelectorAll(".checkbox-remove-project")];"Remove"===r.textContent&&(n.map((e=>{if(e.checked)return[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e)).reverse().forEach((e=>t.list.splice(e,1))),t.list.some((e=>!e["default project"]))&&t.list.length>0&&(t.list[0]["default project"]=!0,document.querySelector("#selected-project").removeAttribute("id"),[...e.children][0].id="selected-project"),t.list.length<=0&&(document.querySelector("#selected-project").removeAttribute("id"),e.id="selected-project"))}[...e.children].forEach((e=>e.remove())),[...n(t).children].forEach((t=>{e.appendChild(t)})),o(t,d),i.style.display="flex",[...document.querySelectorAll(".project-control-action-container")].forEach((e=>{e.style.display="none"})),[...s,...p].forEach((e=>e.style.display="none"))}))}))};return{projectsHandler:function(e){const t=document.createElement("section");return t.id="projects-section",t.appendChild(function(e){const t=document.createElement("header"),n=document.createElement("h1"),o=document.createElement("i"),d=document.createElement("i");return n.id="selected-project-name",n.textContent=e.list.filter((e=>e["default project"]))[0].name,o.id="menu",o.classList.add("fas","fa-bars"),d.id="close-menu-btn",d.classList.add("fas","fa-times"),d.style.display="none",t.appendChild(n),t.appendChild(o),t.appendChild(d),t}(e)),t.appendChild(n(e)),t},updateHeaderTitle:function(){const e=document.querySelector("#selected-project"),t=document.querySelector("header>h1");"project-container"===e.classList.value?t.textContent=[...e.children][2].textContent:t.textContent="Todo List App"},projectsEventHandlers:o}})();var c=n(868);d()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const a=(()=>{const e=document.createElement("div");e.id="todos-list-container";const t=function(){const e=document.createElement("div");e.id="todos-controls-container";const t=function(e){const t=document.createElement("button"),n=document.createElement("button");return t.textContent="Cancel",t.classList.add("btn-todos-control-action"),n.textContent=e,n.classList.add("btn-todos-control-action"),[t,n]};return{todosControlsHandler:function(){return e.appendChild(function(){const e=document.createElement("div");return e.id="todos-control-btns-container",["Remove","Edit","Add"].forEach((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Remove");return e.id="remove-todo-container",e.classList.add("todos-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Edit");return e.id="edit-todo-container",e.classList.add("todos-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e.appendChild(function(){const e=document.createElement("div"),[n,o]=t("Add");return e.id="add-todo-container",e.classList.add("todos-control-action-container"),e.appendChild(n),e.appendChild(o),e.style.display="none",e}()),e}}}(),n=function(t){if(t.list.length<=0)return;const n=[...document.querySelector("#selected-project").children][2].textContent;return t.list.filter((e=>e.name===n))[0].todos.forEach((t=>{const n=document.createElement("div");n.classList.add("todo-container");const o=document.createElement("div");o.classList.add("todo-info-container");for(let e in t)if("completed"===e){const e=document.createElement("input"),t=document.createElement("input");e.classList.add("complete-todo-checkbox"),e.type="checkbox",t.classList.add("remove-todo-checkbox"),t.type="checkbox",t.style.display="none",n.appendChild(e),n.appendChild(t)}else{const n=document.createElement("p");n.textContent=t[e],o.appendChild(n)}n.appendChild(o),e.appendChild(n)})),e},o=function(){for(;e.firstChild;)e.removeChild(e.firstChild)},d=function(r,i){const c=document.querySelector("#selected-project-name").textContent,a=r.list.filter((e=>e.name===c))[0],l=Object.keys(r.list[0].todos[0]),s=(e.children,[...document.querySelectorAll(".todo-info-container")]),p=[...document.querySelectorAll(".complete-todo-checkbox")],u=[...document.querySelectorAll(".remove-todo-checkbox")],h=(document.querySelector("#todos-controls-container"),document.querySelector("#todos-control-btns-container")),f=[...h.children],m=[...document.querySelectorAll(".btn-todos-control-action")];p.forEach((e=>{e.addEventListener("click",(()=>{const t=[...e.parentElement.parentElement.children].indexOf(e.parentElement);e.parentElement.classList.toggle("completed-todo"),a.toggleCompleted(t)}))})),f.forEach((t=>{t.addEventListener("click",(()=>{switch(h.style.display="none",t.textContent){case"Remove":document.querySelector("#remove-todo-container").style.display="flex",u.forEach((e=>e.style.display="inline"));break;case"Edit":document.querySelector("#edit-todo-container").style.display="flex",s.forEach((e=>{e.removeAttribute("class"),e.classList.add("edit-todo-info-container"),[...e.children].forEach(((t,n)=>{const o=document.createElement("label"),d=document.createElement("input");o.textContent=l[n][0].toUpperCase()+l[n].slice(1),d.setAttribute("type","text"),d.classList.add("edit-todo-field-input"),d.value=t.textContent,o.appendChild(d),e.replaceChild(o,t)}))}));break;case"Add":document.querySelector("#add-todo-container").style.display="flex";const t=document.createElement("div");t.classList.add("add-todo-info-container"),l.forEach((e=>{if("completed"===e);else{const n=document.createElement("label"),o=document.createElement("input");n.textContent=e[0].toUpperCase()+e.slice(1),o.setAttribute("type","text"),o.classList.add("add-todo-field-input"),n.appendChild(o),t.appendChild(n)}})),e.appendChild(t)}}))})),m.forEach((c=>{const p=document.querySelector("#remove-todo-container"),f=document.querySelector("#edit-todo-container"),m=document.querySelector("#add-todo-container");c.addEventListener("click",(()=>{if("flex"===p.style.display&&"Remove"===c.textContent&&u.map((e=>{if(e.checked)return console.log(r.list),[...e.parentElement.parentElement.children].indexOf(e.parentElement)})).filter((e=>e||0===e)).reverse().forEach((e=>a.deleteTodo(e))),"flex"===f.style.display){if("Edit"===c.textContent){const e=[...document.querySelectorAll(".edit-todo-info-container")].map((e=>[...e.children].map((e=>e.querySelector("input").value))));a.todos.forEach(((t,n)=>{l.forEach(((o,d)=>{t[o]=e[n][d]}))}))}[...s].forEach((e=>{e.removeAttribute("class"),e.classList.add("todo-info-container")}))}if("flex"===m.style.display&&"Add"===c.textContent){const e=[...document.querySelectorAll(".add-todo-info-container")].map((e=>[...e.children].map((e=>e.querySelector("input").value))))[0];a.addTodo(new i(...e))}o(),function(){const e=document.querySelector("#todos-controls-container");for(;e.firstChild;)e.removeChild(e.firstChild)}(),[...n(r).children].forEach((t=>{e.appendChild(t)})),document.querySelector("#todos-section").appendChild(t.todosControlsHandler()),d(r,i),h.style.display="flex",[...document.querySelectorAll(".todos-control-action-container")].forEach((e=>{e.style.display="none"})),[...u].forEach((e=>e.style.display="none"))}))}))};return{todosHandler:function(e){const o=document.createElement("section");return o.id="todos-section",o.appendChild(n(e)),o.appendChild(t.todosControlsHandler()),o},clearTodos:o,todosEventHandlers:d}})();var l=n(624);d()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;!function(){const n=new class{constructor(){this.list=[]}displayList(){return this.list}displayProjectNames(){return this.list.map((e=>e.name))}addProject(e){0===this.list.length&&(e["default project"]=!0),this.list.push(e)}deleteProject(e){this.list.splice(e,1)}editProjectName(e,t){this.list[e].name=t}};n.addProject(new e("Default Project")),n.addProject(new e("Project 1")),n.list[0].addTodo(new t("Clean room","Tidy up around room","tomorrow","3","Clean under bed, dust shelves, wipe TV")),n.list[0].addTodo(new t("Do homework","Finish all homework","today","5","history, math, science, business")),n.list[0].addTodo(new t("Pick up dog food","Get food for Liza","today","3","Petfoods Depot has a sale on dog food")),n.list[1].addTodo(new t("2","2 desc","never","1","notes22")),((e,t,n)=>{const o=document.querySelector("#content-container");o.appendChild(i.projectsHandler(e)),o.appendChild(a.todosHandler(e)),i.projectsEventHandlers(e,t),a.todosEventHandlers(e,n),new MutationObserver((function(){i.updateHeaderTitle(),a.clearTodos(),a.displayTodos(e)})).observe(document.querySelector("#projects-list-container"),{subtree:!0,attributes:!0,attributeFilter:["id"]})})(n,e,t)}()})()})();