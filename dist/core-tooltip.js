!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=12)}([function(t,e,o){"use strict";const n=Symbol("classProperties"),r=Symbol("attributePropertyMap");function s(t,e=null){switch(e||String){case Number:return Number(t);case Object:return JSON.parse(t);case Boolean:case String:return t;default:return"function"==typeof e?e(t):t}}function i(t,e,o){void 0===o.attribute&&(o.attribute=e.replace(/([A-Z])/g,"-$1").toLowerCase());const i=o.attribute;t[n].set(e,o),t[r].set(i,e);const a={get(){return function(t,e,o){return o.type===Boolean?t.hasAttribute(e):s(t.getAttribute(e),o.type)}(this,i,o)},set(t){!function(t,e,o,n){const r=o.type||String;r===Boolean?n?t.setAttribute(e,""):t.removeAttribute(e):r===Object?t.setAttribute(e,JSON.stringify(n)):r===String||r===Number||"function"==typeof r?t.setAttribute(e,n):t.setAttribute(e,`${n}`)}(this,i,o,t)},configurable:!0,enumerable:!0},l=Object.getOwnPropertyDescriptor(t.prototype,e);l&&("function"==typeof l.get&&delete a.get,"function"==typeof l.set&&delete a.set),Object.defineProperty(t.prototype,e,a)}function a(t){return[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)]}class l extends HTMLElement{static buildProperties(){if(this.hasOwnProperty(n))return;const t=Object.getPrototypeOf(this);if("function"==typeof t.buildProperties&&t.buildProperties(),this[n]=new Map,this[r]=new Map,function(t,e){if(t.hasOwnProperty(n)){const o=e[n],s=e[r];t[n].forEach((t,e)=>{o.set(e,t)}),t[r].forEach((t,e)=>{s.set(e,t)})}}(t,this),this.hasOwnProperty("properties")){const t=this.properties,e=a(t);for(const o of e)i(this,o,t[o])}}static get observedAttributes(){return this.buildProperties(),Array.from(this[n].keys())}constructor(t=null){super(),t&&function(t,e=null){const o=t.attachShadow({mode:"open"});e&&o.appendChild(e.content.cloneNode(!0))}(this,t)}connectedCallback(){"properties"in this.constructor&&function(t,e){for(const o of a(e)){const n=e[o];n.hasOwnProperty("value")&&!t.hasAttribute(n.attribute)&&(t[o]=n.value)}}(this,this.constructor.properties)}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(t,e,o){e!==o&&function(t,e,o,n){let r=o,i=n;if(t.constructor.hasOwnProperty("properties")){const a=t.constructor.properties[e];r=s(o,a.type),i=s(n,a.type)}"function"==typeof t.propertyChangedCallback&&t.propertyChangedCallback(e,r,i)}(this,t,e,o)}propertyChangedCallback(){}}l.template=function(t="",e=""){const o=`<template><style>${e.toString()}</style>${t}</template>`,n=document.createRange().createContextualFragment(o),r=n.firstElementChild;return document.head.appendChild(n),r},l.customTag=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)},e.a=l},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[o].concat(s).concat([r]).join("\n")}var i;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(r=0;r<t.length;r++){var i=t[r];null!=i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),e.push(i))}},e}},,,,,,function(t,e){t.exports="<span id=tooltip-back> <slot id=tooltip-content></slot> </span>"},function(t,e,o){(t.exports=o(1)(!1)).push([t.i,':host {\n    display: inline-block;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n\n    opacity: 0;\n    transition: opacity 0.3s ease;\n\n    transform: translate(-50%, -100%);\n    z-index: 1000;\n\n    pointer-events: none;\n\n    --back-color: white;\n    --border-color: black;\n    --arrow-size: 0.5rem;\n}\n\n#tooltip-back {\n    border-style: solid;\n    border-radius: 0.5rem;\n    border-color: var(--border-color);\n\n    display: flex;\n    padding: 0.5rem;\n    background: var(--back-color);\n}\n\nspan#tooltip-back::after {\n    content: " ";\n    position: absolute;\n    top: 100%; /* At the bottom of the tooltip */\n    left: 50%;\n    border-width: var(--arrow-size);\n    border-style: solid;\n    border-color: var(--border-color) transparent transparent transparent;\n    transform: translate(-50%, 0%);\n}\n\n:host([effect=light]) {\n    color: black;\n    --border-color: black;\n    --back-color: white;\n}\n\n:host([effect=dark]) {\n    color: white;\n    --border-color: black;\n    --back-color: black;\n}\n\n:host([placement=left]) {\n    left: 100%;\n    transform: translate(0%, -50%);\n}\n:host([placement=left]) span#tooltip-back::after {\n    top: 50%;\n    left: 0%; /* At the left of the tooltip */\n    border-color: transparent var(--border-color) transparent transparent;\n    transform: translate(-100%, 0%);\n}\n\n:host([placement=right]) {\n    left: 0%;\n    transform: translate(-100%, -50%);\n}\n:host([placement=right]) span#tooltip-back::after {\n    top: 50%;\n    left: 100%; /* At the right of the tooltip */\n    border-color: transparent transparent transparent var(--border-color);\n    transform: translate(0%, 0%);\n}\n\n:host([placement=bottom]) {\n    top: 100%;\n    transform: translate(-50%, 0%);\n}\n:host([placement=bottom]) span#tooltip-back::after {\n    top: 0%;\n    left: 50%; /* At the right of the tooltip */\n    border-color: transparent transparent var(--border-color) transparent;\n    transform: translate(-50%, -100%);\n}',""])},,,,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(7),s=o.n(r),i=o(8),a=o.n(i);const l=n.a.template(s.a,a.a);class c extends n.a{constructor(){super(l),this.tooltipSlot=this.shadowRoot.querySelector("#tooltip-content"),this.target=null,this.openTimeout=null,this.closeTimeout=null,this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onTooltipOpen=this.onTooltipOpen.bind(this),this.onTooltipClose=this.onTooltipClose.bind(this)}static get properties(){return{placement:{type:String},content:{type:String},openDelay:{type:Number,value:0},closeDelay:{type:Number,value:1e3}}}propertyChangedCallback(t,e,o){switch(t){case"content":this.tooltipSlot.textContent=o}}connectedCallback(){super.connectedCallback();const t=this.shadowRoot.host.parentElement;this.setTarget(t)}disconnectedCallback(){super.disconnectedCallback(),this.clearTarget(),this.clearTimeout()}setTarget(t){this.target&&this.clearTarget(),t&&(t.addEventListener("mouseenter",this.onMouseEnter),t.addEventListener("mouseleave",this.onMouseLeave),this.target=t,this.target.style.position="relative")}clearTarget(){this.target&&(this.target.removeEventListener("mouseenter",this.onMouseEnter),this.target.removeEventListener("mouseleave",this.onMouseLeave),this.target=null)}clearTimeout(){this.openTimeout&&(clearTimeout(this.openTimeout),this.openTimeout=null),this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}onMouseEnter(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null),this.openTimeout=setTimeout(this.onTooltipOpen,this.openDelay)}onMouseLeave(){this.openTimeout&&(clearTimeout(this.openTimeout),this.openTimeout=null),setTimeout(this.onTooltipClose,this.closeDelay)}onTooltipOpen(){this.shadowRoot.host.style.opacity=1}onTooltipClose(){this.shadowRoot.host.style.opacity=0}}n.a.customTag("core-tooltip",c),e.default=c}]);