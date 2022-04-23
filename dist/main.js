(()=>{"use strict";var t={152:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bg: rgb(228,67,50);\r\n  --white: #fff;\r\n  --nav-bg: rgb(250,250,250);\r\n  --btn-hover: rgb(236,236,236);\r\n  --form-outline-color: rgb(221,221,221);\r\n}\r\n\r\n\r\ninput {\r\n  border: none;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n  text-align: left;\r\n  background: none;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--btn-hover);\r\n}\r\n\r\ni {\r\n  margin-right: 10px;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-grow: 1;\r\n  \r\n}\r\n\r\n#header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: var(--header-bg);\r\n  padding: 5px;\r\n}\r\n\r\n#header-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.logo-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo-container img {\r\n  height: 100%;\r\n}\r\n\r\n.logo-container span {\r\n  color: var(--white);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav {\r\n  width: 300px;\r\n  min-width: 250px;\r\n  padding: 20px;\r\n  background: var(--nav-bg);\r\n  height: calc(100vh - 50px);\r\n}\r\n\r\n.active {\r\n  background-color: var(--btn-hover);\r\n}\r\n\r\n.display-section {\r\n  margin-bottom: 38px;\r\n  padding-bottom: 2px;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list-display-container {\r\n  padding: 35px 55px 0 55px;\r\n  \r\n}\r\n\r\n.list-header {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.add-task-button {\r\n  display: flex;\r\n  padding-left: 0px;\r\n  align-items: center;\r\n}\r\n\r\n.add-task-button:hover {\r\n  background: none;\r\n  color: var(--header-bg);\r\n}\r\n\r\n#add-task-image {\r\n  height: 13px;\r\n  margin-right: 5px;\r\n}\r\n\r\n#addTaskForm  {\r\n  font-size: 13px;\r\n  font-family: inherit;\r\n}\r\n\r\n#addTaskFormTop {\r\n  min-height: 115px;\r\n  width: auto;\r\n  margin: 0 0 10px 0;\r\n  border: var(--form-outline-color) solid 1px;\r\n  border-radius: 10px;\r\n  display: grid;\r\n  grid-template-rows: 30px 80px 40px;\r\n  grid-template-columns: 110px auto;\r\n}\r\n\r\n#taskTitleArea {\r\n  grid-row: 1/2;\r\n  grid-column: 1/3;\r\n  min-height: 65px;\r\n  width: 95%;\r\n  padding: 10px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  font-size: inherit;\r\n}\r\n\r\n#taskDetailsArea {\r\n  grid-row: 2/3;\r\n  grid-column: 1/3;\r\n  min-height: 65px;\r\n  width: 95%;\r\n  padding: 10px;\r\n  font-family: inherit;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n#dueDate {\r\n  grid-row: 3/4;\r\n  width: 100px;\r\n  height: 30px;margin: auto;\r\n  margin-left: 10px;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  padding: 0px;\r\n  border-radius: 5px;\r\n  border: var(--form-outline-color) solid 1px;\r\n}\r\n\r\n#add-new-task-button {\r\n  background-color: var(--header-bg);\r\n  color: white;\r\n  width: fit-content;\r\n  margin-right: 5px;\r\n  font-weight: 900;\r\n}\r\n\r\n#cancel-task-button {\r\n  width: fit-content;\r\n  font-weight: 900;\r\n  color: black;\r\n  border: var(--form-outline-color) solid 1px;\r\n}\r\n\r\n\r\n.task-list-item {\r\n  list-style-type: none;\r\n  border-bottom: 1px solid #f0f0f0;\r\n}\r\n\r\n.task-list-body {\r\n  display: flex;\r\n  align-items: stretch;\r\n  position: relative;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-list-checkbox-container {\r\n  margin: 11px 6px 0 -3px;\r\n  z-index: 1;\r\n}\r\n\r\n.task-list-item-content {\r\n  flex: 1;\r\n  padding: 8px 0;\r\n  margin-right: 30px;\r\n}\r\n\r\n.task-list-item-content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.head {\r\n  flex-grow: 1;\r\n  font-size: 14px;\r\n  line-height: 21px;\r\n  word-wrap: break-word;\r\n  overflow: hidden;\r\n  color: grey;\r\n}\r\n\r\n.description {\r\n  flex-basis: 100%;\r\n  font-size: 12px;\r\n  word-wrap: break-word;\r\n  overflow: hidden;\r\n  color: grey;\r\n}\r\n\r\n.date {\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n}\r\n\r\n.task-list-item-delete-wrapper {\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.task-list-body:hover .hidden {\r\n  display: block;\r\n}",""]);const d=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],d=0;d<t.length;d++){var s=t[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var s=r(t,o),c=0;c<i.length;c++){var l=n(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),d=n(565),s=n.n(d),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(152),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,document.querySelector("body");let b=[];const g=document.querySelector(".todo-list-display-container"),f=document.createElement("div"),x=document.createElement("ul"),v=document.createElement("h2");function y(t,e,n){this.title=t,this.description=e,this.date=n}if(null===localStorage.getItem("tasks"))b=[];else{const t=JSON.parse(localStorage.getItem("tasks"));b=t}const k=document.querySelector("#button-inbox-project");k.addEventListener("click",(t=>{t.target.classList.contains("active")||(S(k),C("Inbox"),T().addEventListener("click",(()=>{E(),T().style.display="none"})))}));const w=document.querySelector("#button-today-project");w.addEventListener("click",(t=>{t.target.classList.contains("active")||(S(w),C("Today"),T().addEventListener("click",(()=>{E(),T().style.display="none"})))}));const A=document.querySelector("#button-upcoming-project");function C(t){g.textContent="",v.setAttribute("class","list-header"),v.textContent=t,f.setAttribute("class","todo-list-holder"),x.setAttribute("class","task-list-section"),L();const e=document.createElement("button");e.setAttribute("class","add-task-button");const n=document.createElement("img");n.setAttribute("id","add-task-image"),n.src="./icons8-plus-64.png";const r=document.createElement("span");switch(r.setAttribute("id","add-task-btn-text"),r.textContent="Add Task",e.appendChild(n),e.appendChild(r),f.appendChild(x),g.appendChild(v),g.appendChild(f),g.appendChild(e),t){case"Inbox":e.setAttribute("id","inbox-add-btn"),x.setAttribute("id","inbox-todo-list-details");break;case"Today":e.setAttribute("id","today-add-btn"),x.setAttribute("id","today-todo-list-details");break;case"Upcoming":e.setAttribute("id","upcoming-add-btn"),x.setAttribute("id","upcoming-todo-list-details");break;default:return}}function E(){const t=document.createElement("form");t.setAttribute("id","addTaskForm");const e=document.createElement("div");e.setAttribute("id","addTaskFormTop");const n=document.createElement("textarea");n.setAttribute("id","taskTitleArea"),n.placeholder="e.g. Read everyday p3 @goals #Learning",n.required;const r=document.createElement("textarea");r.setAttribute("id","taskDetailsArea"),r.placeholder="Description";const o=document.createElement("input");o.setAttribute("id","dueDate"),o.placeholder="Due Date",o.autocomplete="off",o.type="date";const i=document.createElement("div");i.setAttribute("id","addTaskFormbottom");const a=document.createElement("button");a.setAttribute("id","add-new-task-button"),a.textContent="Add Task",a.type="button",a.addEventListener("click",(()=>{!function(){const t=document.querySelector("#addTaskForm"),e=document.querySelector("#taskTitleArea"),n=document.querySelector("#taskDetailsArea"),r=document.querySelector("#dueDate");""!==e.value&&""!==n.value&&function(t,e,n){const r=new y(t,e,n);b.push(r),console.log(b)}(e.value,n.value,r.value),t.reset()}(),g.removeChild(t),T().style.display="block",L()}));const d=document.createElement("button");d.setAttribute("id","cancel-task-button"),d.textContent="Cancel",d.type="button",d.addEventListener("click",(()=>{t.reset(),g.removeChild(t),T().style.display="block"})),e.appendChild(n),e.appendChild(r),e.appendChild(o),i.appendChild(a),i.appendChild(d),t.appendChild(e),t.appendChild(i),g.appendChild(t)}function S(t){document.querySelectorAll(".button-default-project").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}function T(){const t=document.getElementById(function(){const t=document.querySelector(".add-task-button");return console.log(t.id),t.id}());return console.log(t),t}function L(){localStorage.setItem("tasks",JSON.stringify(b)),console.log(b.length),x.textContent=" ";for(let t=0;t<b.length;t++){const e=document.createElement("li"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("input");o.type="checkbox";const i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("h4");d.textContent=b[t].title;const s=document.createElement("p");s.textContent=b[t].description;const c=document.createElement("div"),l=document.createElement("span"),p=document.createElement("div"),u=document.createElement("button"),m=document.createElement("img");l.textContent=b[t].date,e.setAttribute("class","task-list-item"),n.setAttribute("class","task-list-body"),r.setAttribute("class","task-list-checkbox-container"),o.setAttribute("class","task-list-complete-checkbox"),i.setAttribute("class","task-list-item-content"),a.setAttribute("class","task-list-item-content-wrapper"),d.setAttribute("class","task-content head"),s.setAttribute("class","task-content description"),c.setAttribute("class","task-content-date-container"),l.setAttribute("class","task-content date"),p.setAttribute("class","task-list-item-delete-wrapper"),u.setAttribute("class","task-delete-button hidden"),m.setAttribute("class","task-delete-img"),m.src="./icons8-delete-16.png",r.appendChild(o),u.appendChild(m),p.appendChild(u),a.appendChild(d),a.appendChild(s),c.appendChild(l),i.appendChild(a),i.appendChild(c),n.appendChild(r),n.appendChild(i),n.appendChild(p),e.appendChild(n),x.appendChild(e)}}A.addEventListener("click",(t=>{t.target.classList.contains("active")||(S(A),C("Upcoming"),T().addEventListener("click",(()=>{E(),T().style.display="none"})))})),C("Inbox"),S(document.querySelector(".button-default-project")),T().addEventListener("click",(()=>{E(),T().style.display="none"}))})()})();