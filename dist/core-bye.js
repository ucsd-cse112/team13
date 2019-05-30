!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";const r=Symbol("classProperties");function o(t,e=null){switch(e||String){case Number:return Number(t);case Object:return JSON.parse(t);case Boolean:case String:return t;default:return"function"==typeof e?e(t):t}}function i(t,e,n){t[r].set(e,n);const i={get(){return t=this,r=e,(i=n).type===Boolean?t.hasAttribute(r):o(t.getAttribute(r),i.type);var t,r,i},set(t){!function(t,e,n,r){const o=n.type||String;o===Boolean?r?t.setAttribute(e,""):t.removeAttribute(e):o===Object?t.setAttribute(e,JSON.stringify(r)):o===String||o===Number||"function"==typeof o?t.setAttribute(e,r):t.setAttribute(e,`${r}`)}(this,e,n,t)},configurable:!0,enumerable:!0},s=Object.getOwnPropertyDescriptor(t.prototype,e);s&&("function"==typeof s.get&&delete i.get,"function"==typeof s.set&&delete i.set),Object.defineProperty(t.prototype,e,i)}class s extends HTMLElement{static buildProperties(){if(this.hasOwnProperty(r))return;const t=Object.getPrototypeOf(this);"function"==typeof t.buildProperties&&t.buildProperties();const e=new Map;if(t.hasOwnProperty(r)&&t[r].forEach((t,n)=>{e.set(n,t)}),this[r]=e,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)i(this,n,t[n])}}static get observedAttributes(){const t=[];return this.buildProperties(),this[r].forEach((e,n)=>{t.push(n)}),t}constructor(t=null){super(),t&&function(t,e=null){const n=t.attachShadow({mode:"open"});e&&n.appendChild(e.content.cloneNode(!0))}(this,t)}connectedCallback(){if("properties"in this.constructor){const t=this.constructor.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)t[n].hasOwnProperty("value")&&(this.hasAttribute(n)||(this[n]=t[n].value))}}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(t,e,n){e!==n&&function(t,e,n,r){let i=n,s=r;if(t.constructor.hasOwnProperty("properties")){const a=t.constructor.properties[e];i=o(n,a.type),s=o(r,a.type)}"function"==typeof t.propertyChangedCallback&&t.propertyChangedCallback(e,i,s)}(this,t,e,n)}propertyChangedCallback(){}}s.template=function(t="",e=""){const n=`<template><style>${e.toString()}</style>${t}</template>`,r=document.createRange().createContextualFragment(n),o=r.firstElementChild;return document.head.appendChild(r),o},s.customTag=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)},e.a=s},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){t.exports="<label> <span id=greet>Greet</span> <slot id=name></slot> </label>"},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,":host {\r\n    display: inline;\r\n    contain: content;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 20px;\r\n    color: black;\r\n}\r\n\r\n:host([rainbow]) {\r\n    animation: rainbow 6s infinite; \r\n}\r\n\r\n@keyframes rainbow {\r\n    0%  { color: red }\r\n    15% { color: orange }\r\n    30% { color: yellow }\r\n    45% { color: green }\r\n    60% { color: blue }\r\n    75% { color: indigo }\r\n    90% { color: violet }\r\n    100%{ color: red }\r\n}\r\n",""])},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2),i=n.n(o),s=n(3),a=n.n(s);const c=r.a.template(i.a,a.a);class u extends r.a{constructor(t=null){super(c),this.langMapping=t||{en:"Greet"},this.greetElement=this.shadowRoot.querySelector("#greet"),this.nameElement=this.shadowRoot.querySelector("#name")}static get properties(){return{name:{type:String,value:"World"},rainbow:{type:Boolean},lang:{type:String}}}propertyChangedCallback(t,e,n){switch(t){case"name":this.nameElement.textContent=n;break;case"lang":this.greetElement.textContent=this.langMapping[n]||this.langMapping.en}}}r.a.customTag("core-greet",u),e.default=u},,,,,,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(4);const i={en:"Bye",es:"Adios",jp:"さようなら",fr:"Au revoir"};class s extends o.default{constructor(){super(i)}}r.a.customTag("core-bye",s),e.default=s}]);