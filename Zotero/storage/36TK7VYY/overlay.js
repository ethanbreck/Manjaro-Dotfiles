!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/.bootscripts/",n(n.s=266)}({1:function(e,t,n){"use strict";e.exports={getDependencyClass:function(e){if(!e)throw new Error("dependencyName required");return window.customElements.whenDefined(e).then(function(){return window.customElements.get(e)})},getFirstDependencyElement:function(e,t){if(!e)throw new Error("dependencyName required");return t||(t=document),window.customElements.whenDefined(e).then(function(){var n=t.querySelector(e);if(!n)throw new Error(e+" element cannot be found");return n})}}},266:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(0,n(1).getDependencyClass)("phoenix-page").then(function(e){var t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,c(n).apply(this,arguments))}var r,l,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e.PhoenixElement),r=n,(l=[{key:"connectedCallback",value:function(){u(c(n.prototype),"connectedCallback",this).call(this),this.overlayName=this.getAttr("overlay-name",{required:!0})}},{key:"broadcastedEventCallback",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.detail&&t.detail.value;"phoenix:overlay"===e&&(this.inactive=n!==this.overlayName)}},{key:"observedBroadcastedEvents",get:function(){return["phoenix:overlay"]}},{key:"inactive",set:function(e){this.setAttribute("aria-hidden",e)}}])&&o(r.prototype,l),a&&o(r,a),n}();window.customElements.define("phoenix-overlay",t)})}});
//# sourceMappingURL=overlay.min.js.map