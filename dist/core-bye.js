!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";function o(t,e=null,n={mode:"open"}){const o=t.attachShadow(n);return e&&o.appendChild(e.content.cloneNode(!0)),o}const r=Symbol("stopPropagateUpdate"),i=Symbol("ATTRIBUTE_SIDE"),a=Symbol("PROPERTY_SIDE");function s(t,e){switch(t||String){case Object:return JSON.parse(e);case Boolean:return null!==e||void 0!==e;default:return"function"==typeof t?t(e):e}}function c(t,e,n,o=null){if(n.type===Boolean)return void(o?t.setAttribute(e,""):t.removeAttribute(e));const r=function(t,e){switch(t||String){case Object:return JSON.stringify(e);default:return e}}(n.type,o);t.setAttribute(e,r)}function u(t,e,n,o,s,u){t[r]||(t[r]=!0,u===i?t[e]=s:u===a&&t.isConnected&&n.reflect&&c(t,n.attribute,n,s),"function"==typeof t.propertyChangedCallback&&t.propertyChangedCallback(e,o,s),t[r]=!1)}function l(t,e){const n=`__${t}`;return{get(){let t;return t=e.attributeOnly?function(t,e,n){const o=n.type;return o===Boolean?t.hasAttribute(e):s(o,t.getAttribute(e))}(this,e.attribute,e):this[n],e.get&&(t=e.get.call(this,t)),t},set(o){const r=this[t];e.set&&(o=e.set.call(this,o,r)),r!==o&&(e.attributeOnly?c(this,e.attribute,e,o):this[n]=o,u(this,t,e,r,o,a))},configurable:!0,enumerable:!0}}function p(t,e,n){const o=l(e,n);if(t.hasOwnProperty(e)){const n=t[e];delete t[e],o.set.call(t,n)}const r=Object.getOwnPropertyDescriptor(t,e);if(r){if("function"==typeof r.get)throw new Error("Found conflicting getter for instance.");if("function"==typeof r.set)throw new Error("Found conflicting setter for instance.")}Object.defineProperty(t,e,o)}const f=Symbol("classProperties");function d(t){return t.hasOwnProperty(f)}function b(t,e,n){void 0===n.attribute&&(n.attribute=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}(e));const o=t[f];o.options.set(e,n),n.attribute&&o.attributes.set(n.attribute,e)}function g(t){if(!d(t)&&(function(t){let e,n;const o=Object.getPrototypeOf(t);if("function"==typeof o.buildProperties&&o.buildProperties(),o&&d(o)){const t=o[f];e=new Map(t.options),n=new Map(t.attributes)}else e=new Map,n=new Map;t[f]={options:e,attributes:n}}(t),t.hasOwnProperty("properties")))for(const e of Object.getOwnPropertyNames(t.properties))b(t,e,t.properties[e])}class h extends HTMLElement{static buildProperties(){g(this)}static get observedAttributes(){return this.buildProperties(),Array.from(this[f].attributes.keys())}constructor(t=null){super(),o(this,t),function(t){const e=t.constructor[f];for(const[n,o]of e.options.entries())p(t,n,o)}(this)}attributeChangedCallback(t,e,n){!function(t,e,n,o){if(n===o)return;const r=t.constructor[f];if(r.attributes.has(e)){const a=r.attributes.get(e),c=r.options.get(a);u(t,a,c,c.attributeOnly?s(c.type,n):t[a],s(c.type,o),i)}}(this,t,e,n)}connectedCallback(){}disconnectedCallback(){}adoptedCallback(){}propertyChangedCallback(){}}h.templateNode=function(t="",e=""){const n=`<template><style>${e.toString()}</style>${t}</template>`,o=document.createRange().createContextualFragment(n),r=o.firstElementChild;return document.head.appendChild(o),r},h.customTag=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)},h.shadowRoot=o;e.a=h},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){t.exports="<label> <span id=greet>Greet</span> <slot id=name></slot> </label>"},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,":host {\n    display: inline;\n    contain: content;\n\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    color: black;\n}\n\n:host([rainbow]) {\n    animation: rainbow 6s infinite; \n}\n\n@keyframes rainbow {\n    0%  { color: red }\n    15% { color: orange }\n    30% { color: yellow }\n    45% { color: green }\n    60% { color: blue }\n    75% { color: indigo }\n    90% { color: violet }\n    100%{ color: red }\n}\n",""])},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(2),i=n.n(r),a=n(3),s=n.n(a);const c=o.a.templateNode(i.a,s.a);class u extends o.a{static get properties(){return{name:{type:String},rainbow:{type:Boolean},lang:{type:String}}}constructor(t=null){super(c),this.langMapping=t||{en:"Greet"},this.greetElement=this.shadowRoot.querySelector("#greet"),this.nameElement=this.shadowRoot.querySelector("#name"),this.name="World"}propertyChangedCallback(t,e,n){switch(t){case"name":this.nameElement.textContent=n;break;case"lang":this.greetElement.textContent=this.langMapping[n]||this.langMapping.en}}}o.a.customTag("core-greet",u),e.default=u},,,,,,function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(4);const i={en:"Bye",es:"Adios",jp:"さようなら",fr:"Au revoir"};class a extends r.default{constructor(){super(i)}}o.a.customTag("core-bye",a),e.default=a}]);