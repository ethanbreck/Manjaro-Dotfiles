!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/.bootscripts/",n(n.s=271)}({1:function(e,t,n){"use strict";e.exports={getDependencyClass:function(e){if(!e)throw new Error("dependencyName required");return window.customElements.whenDefined(e).then(function(){return window.customElements.get(e)})},getFirstDependencyElement:function(e,t){if(!e)throw new Error("dependencyName required");return t||(t=document),window.customElements.whenDefined(e).then(function(){var n=t.querySelector(e);if(!n)throw new Error(e+" element cannot be found");return n})}}},271:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(0,n(1).getDependencyClass)("phoenix-page").then(function(e){var t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,u(n).apply(this,arguments))}var r,a,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,e.PhoenixElement),r=n,(a=[{key:"connectedCallback",value:function(){var t=this;if(!window.GdprStatus)throw new Error("window.GdprStatus is required");var n=[e.util.userHasPremium(),window.GdprStatus.isApplicable()];Promise.all(n).then(function(e){e[0]||e[1]?(t.setAttribute("aria-hidden",!0),t.style.display="none"):(t.pubExchangeId=t.getAttr("pub-exchange-id",{required:!0}),t.pubExchangeModuleId=t.getAttr("pub-exchange-module-id",{required:!1}),t.observeFirstIntersection())})}},{key:"onFirstIntersection",value:function(){var t,n=this;this.pubExchangeModuleId?(window.PUBX=window.PUBX||{pub:this.pubExchangeId,discover:!0},t="https://main.pubexchange.com/loader.min.js"):t="https://cdn.pubexchange.com/modules/partner/"+this.pubExchangeId,e.util.addScriptResource(t).then(function(){n.firstChild.classList.remove("is-waiting-to-load")})}}])&&o(r.prototype,a),f&&o(r,f),n}();window.customElements.define("phoenix-pub-exchange",t)})}});
//# sourceMappingURL=pubExchange.min.js.map