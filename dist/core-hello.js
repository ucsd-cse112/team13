<<<<<<< HEAD
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";const r=Symbol("classProperties");function o(t,e=null){switch(e||String){case Number:return Number(t);case Object:return JSON.parse(t);case Boolean:case String:return t;default:return"function"==typeof e?e(t):t}}function i(t,e,n){t[r].set(e,n);const i={get(){return t=this,r=e,(i=n).type===Boolean?t.hasAttribute(r):o(t.getAttribute(r),i.type);var t,r,i},set(t){!function(t,e,n,r){const o=n.type||String;o===Boolean?r?t.setAttribute(e,""):t.removeAttribute(e):o===Object?t.setAttribute(e,JSON.stringify(r)):o===String||o===Number||"function"==typeof o?t.setAttribute(e,r):t.setAttribute(e,`${r}`)}(this,e,n,t)},configurable:!0,enumerable:!0},s=Object.getOwnPropertyDescriptor(t.prototype,e);s&&("function"==typeof s.get&&delete i.get,"function"==typeof s.set&&delete i.set),Object.defineProperty(t.prototype,e,i)}function s(t){return[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)]}class a extends HTMLElement{static buildProperties(){if(this.hasOwnProperty(r))return;const t=Object.getPrototypeOf(this);if("function"==typeof t.buildProperties&&t.buildProperties(),this[r]=new Map,function(t,e){if(t.hasOwnProperty(r)){const n=e[r];t[r].forEach((t,e)=>{n.set(e,t)})}}(t,this),this.hasOwnProperty("properties")){const t=this.properties,e=s(t);for(const n of e)i(this,n,t[n])}}static get observedAttributes(){return this.buildProperties(),Array.from(this[r].keys())}constructor(t=null){super(),t&&function(t,e=null){const n=t.attachShadow({mode:"open"});e&&n.appendChild(e.content.cloneNode(!0))}(this,t)}connectedCallback(){"properties"in this.constructor&&function(t,e){for(const n of s(e)){const r=e[n];r.hasOwnProperty("value")&&!t.hasAttribute(n)&&(t[n]=r.value)}}(this,this.constructor.properties)}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(t,e,n){e!==n&&function(t,e,n,r){let i=n,s=r;if(t.constructor.hasOwnProperty("properties")){const a=t.constructor.properties[e];i=o(n,a.type),s=o(r,a.type)}"function"==typeof t.propertyChangedCallback&&t.propertyChangedCallback(e,i,s)}(this,t,e,n)}propertyChangedCallback(){}}a.template=function(t="",e=""){const n=`<template><style>${e.toString()}</style>${t}</template>`,r=document.createRange().createContextualFragment(n),o=r.firstElementChild;return document.head.appendChild(r),o},a.customTag=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)},e.a=a},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){t.exports="<label> <span id=greet>Greet</span> <slot id=name></slot> </label>"},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,":host {\r\n    display: inline;\r\n    contain: content;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 20px;\r\n    color: black;\r\n}\r\n\r\n:host([rainbow]) {\r\n    animation: rainbow 6s infinite; \r\n}\r\n\r\n@keyframes rainbow {\r\n    0%  { color: red }\r\n    15% { color: orange }\r\n    30% { color: yellow }\r\n    45% { color: green }\r\n    60% { color: blue }\r\n    75% { color: indigo }\r\n    90% { color: violet }\r\n    100%{ color: red }\r\n}\r\n",""])},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2),i=n.n(o),s=n(3),a=n.n(s);const c=r.a.template(i.a,a.a);class u extends r.a{constructor(t=null){super(c),this.langMapping=t||{en:"Greet"},this.greetElement=this.shadowRoot.querySelector("#greet"),this.nameElement=this.shadowRoot.querySelector("#name")}static get properties(){return{name:{type:String,value:"World"},rainbow:{type:Boolean},lang:{type:String}}}propertyChangedCallback(t,e,n){switch(t){case"name":this.nameElement.textContent=n;break;case"lang":this.greetElement.textContent=this.langMapping[n]||this.langMapping.en}}}r.a.customTag("core-greet",u),e.default=u},,,,,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(4);const i={en:"Hello",es:"Hola",jp:"こんにちは",fr:"Bonjour"};class s extends o.default{constructor(){super(i)}}r.a.customTag("core-hello",s),e.default=s}]);
=======
!function(t,e,n,r,o,i){if("customElements"in t)i();else{if(t.WC_ENV)return void t.WC_ENV.then(i);var c=function(t,n){var r=e.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,n())}:r.onload=function(){n()},r.src=t,e.getElementsByTagName("head")[0].appendChild(r)},u=t.WC_ENV=(p=function(t){try{t()}catch(t){console.error(t)}},(s=[]).isDone=!1,s.exec=function(){s.splice(0).forEach(p)},s.then=function(t){return s.isDone?t():s.push(t),s},s);u.then(i);var a=t.WC_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",l=0,f=function(){--l||(u.isDone=!0,u.exec())};"Reflect"in t||t.SKIP_ES_POLYFILL?(l++,c(a,f)):(l++,c(t.ES_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js",function(){c(a,f)}),function(){try{new Function("function* test() {}")()}catch(t){return!1}return!0}()||t.regeneratorRuntime||(l++,c(window.GE_POLYFILL||r,f)))}var s,p}(window,document,0,"//unpkg.com/regenerator-runtime@0.12.1/runtime.js",0,function(){!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.setPrototypeOf(l.prototype,HTMLElement.prototype),Object.setPrototypeOf(l,HTMLElement);var s=Symbol("classProperties");function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(e||String){case Number:return Number(t);case Object:return JSON.parse(t);case Boolean:case String:return t;default:return"function"==typeof e?e(t):t}}function y(t,e,n){t[s].set(e,n);var r={get:function(){return t=this,r=e,(o=n).type===Boolean?t.hasAttribute(r):p(t.getAttribute(r),o.type);var t,r,o},set:function(t){!function(t,e,n,r){var o=n.type||String;o===Boolean?r?t.setAttribute(e,""):t.removeAttribute(e):o===Object?t.setAttribute(e,JSON.stringify(r)):o===String||o===Number||"function"==typeof o?t.setAttribute(e,r):t.setAttribute(e,"".concat(r))}(this,e,n,t)},configurable:!0,enumerable:!0},o=Object.getOwnPropertyDescriptor(t.prototype,e);o&&("function"==typeof o.get&&delete r.get,"function"==typeof o.set&&delete r.set),Object.defineProperty(t.prototype,e,r)}function b(t){return[].concat(f(Object.getOwnPropertyNames(t)),f(Object.getOwnPropertySymbols(t)))}var h=function(t){function e(){var t,n,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,t=!(c=o(e).call(this))||"object"!==r(c)&&"function"!=typeof c?i(n):c,u&&function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t.attachShadow({mode:"open"});e&&n.appendChild(e.content.cloneNode(!0))}(i(t),u),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,l),u(e,null,[{key:"buildProperties",value:function(){if(!this.hasOwnProperty(s)){var t=Object.getPrototypeOf(this);if("function"==typeof t.buildProperties&&t.buildProperties(),this[s]=new Map,function(t,e){if(t.hasOwnProperty(s)){var n=e[s];t[s].forEach(function(t,e){n.set(e,t)})}}(t,this),this.hasOwnProperty("properties")){var e=this.properties,n=b(e),r=!0,o=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var a=c.value;y(this,a,e[a])}}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}}}}},{key:"observedAttributes",get:function(){return this.buildProperties(),Array.from(this[s].keys())}}]),u(e,[{key:"connectedCallback",value:function(){"properties"in this.constructor&&function(t,e){var n=!0,r=!1,o=void 0;try{for(var i,c=b(e)[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var u=i.value,a=e[u];a.hasOwnProperty("value")&&!t.hasAttribute(u)&&(t[u]=a.value)}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}}(this,this.constructor.properties)}},{key:"disconnectedCallback",value:function(){}},{key:"adoptedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&function(t,e,n,r){var o=n,i=r;if(t.constructor.hasOwnProperty("properties")){var c=t.constructor.properties[e];o=p(n,c.type),i=p(r,c.type)}"function"==typeof t.propertyChangedCallback&&t.propertyChangedCallback(e,o,i)}(this,t,e,n)}},{key:"propertyChangedCallback",value:function(){}}]),e}();h.template=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="<template><style>".concat(e.toString(),"</style>").concat(t,"</template>"),r=document.createRange().createContextualFragment(n),o=r.firstElementChild;return document.head.appendChild(r),o},h.customTag=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)},e.a=h},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(c=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var c;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var c=t[o];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e){t.exports="<label> <span id=greet>Greet</span> <slot id=name></slot> </label>"},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,":host {\n    display: inline;\n    contain: content;\n\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    color: black;\n}\n\n:host([rainbow]) {\n    animation: rainbow 6s infinite; \n}\n\n@keyframes rainbow {\n    0%  { color: red }\n    15% { color: orange }\n    30% { color: yellow }\n    45% { color: green }\n    60% { color: blue }\n    75% { color: indigo }\n    90% { color: violet }\n    100%{ color: red }\n}\n",""])},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2),i=n.n(o),c=n(3),u=n.n(c);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=r.a.template(i.a,u.a),b=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=f(this,s(e).call(this,y))).langMapping=n||{en:"Greet"},t.greetElement=t.shadowRoot.querySelector("#greet"),t.nameElement=t.shadowRoot.querySelector("#name"),t}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,r["a"]),n=e,i=[{key:"properties",get:function(){return{name:{type:String,value:"World"},rainbow:{type:Boolean},lang:{type:String}}}}],(o=[{key:"propertyChangedCallback",value:function(t,e,n){switch(t){case"name":this.nameElement.textContent=n;break;case"lang":this.greetElement.textContent=this.langMapping[n]||this.langMapping.en}}}])&&l(n.prototype,o),i&&l(n,i),e}();r.a.customTag("core-greet",b),e.default=b},,,,,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(4);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l={en:"Hello",es:"Hola",jp:"こんにちは",fr:"Bonjour"},f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,u(e).call(this,l))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,o["default"]),e}();r.a.customTag("core-hello",f),e.default=f}])});
>>>>>>> 027a7118b0c99af1ab1a9cca084cbb687a52ceb5
