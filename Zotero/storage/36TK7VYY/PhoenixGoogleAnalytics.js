!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/.bootscripts/",t(t.s=197)}({197:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=t(198),i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),window.ga=window.ga||function(){},this.config=o({trackers:[],extraModelData:{channelName:"Web",positionInSession:"subsequent"},allowLinker:!0},n)}var n,t,i;return n=e,(t=[{key:"sendEvent",value:function(e,n,t,r,o){this._eachTracker(function(e){return e.sendEvents})("send","event",e,n,t,r,{nonInteraction:o})}},{key:"sendPageView",value:function(e,n){var t=n&&n.viewProperties&&n.viewProperties.analyticsModel||{},r=o(t,this.config.extraModelData);r.path=e,this.config.sendPageView(r)}},{key:"_eachTracker",value:function(e){var n=this.config;return function(){for(var t=Array.prototype.slice.call(arguments),r=t[0],o=0;o<n.trackers.length;o++){var i=n.trackers[o];e&&!e(i)||(i.name?t[0]=i.name+"."+r:t[0]=r,window.ga.apply(window,t))}}}}])&&r(n.prototype,t),i&&r(n,i),e}();window.googleAnalyticsPromise.then(function(){window.googleAnalytics=new i(window.googleAnalyticsConfig),window.googleAnalytics._eachTracker()("require","linker"),window.googleAnalytics._eachTracker()("linker:autoLink",[/tempest(premium|-identity)/])})},198:function(e,n,t){"use strict";e.exports=function(e){for(var n={},t=0;t<arguments.length;t++){var r=arguments[t];for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])}return n}}});
//# sourceMappingURL=PhoenixGoogleAnalytics.min.js.map