(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{HfuW:function(e,t,n){"use strict";(function(t){var r=n("ChiG");e.exports=function(e){return new t((function(t,i){n.e(38).then(function(i){var o=n("mfwF"),a=r("BarronsTheme",o);t(a(e))}.bind(null,n)).catch((function(e){return i(e)}))}))}}).call(this,n("CSL1"))},XGuf:function(e,t,n){"use strict";(function(t){var r=n("ChiG");e.exports=function(e){return new t((function(t,i){n.e(71).then(function(i){var o=n("yOkk"),a=r("WSJTheme",o);t(a(e))}.bind(null,n)).catch((function(e){return i(e)}))}))}}).call(this,n("CSL1"))},htyH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBondNotation=t.formatUpdates=t.percentChange=t.defensiveToFixed=void 0;t.defensiveToFixed=function(e,t){var n=Number.prototype.toFixed;return e?n.call(e,t):0};t.percentChange=function(e,t){return(e-(e-t))/(e-t)*100};t.formatUpdates=function(e){var t=e.h,n=e.b;return{action:t.a,number:t.n,sequence:t.s,channelName:t.t,timestampUtc:n.z,ticker:n.t,last:n.l,volume:n.v,change:n.c,tradeType:n.y,utcOffsetHours:n.e,b:n.b,a:n.a,utcOffsetMinutes:n.em}};t.getBondNotation=function(e){var t=parseInt(3125,10),n=e<0,r=Math.abs(e);return e=parseInt(r,10),r=parseInt(r%1*1e5,10),(n?"-":"")+(0!==e?e+" ":"")+(t=parseInt(r/t+.5,10))+"/32"}},oTNf:function(e,t,n){"use strict";var r="/home/jenkins/workspace/NPM-web-ui/lib/components/shared/MarketDataStrip/index.js";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=n("q1tI"),p=n("fFtP"),f=n("htyH").formatUpdates,m=n("htyH").defensiveToFixed,d=n("htyH").percentChange,h=n("htyH").getBondNotation,y=n("XhxB"),b=n("QqA1"),N=n("TYSa").includeSpecAttributes,g=n("92b2").getBluegrassEndpoint,v=null,_=function(e,t){if(v)return t(null,!0);n("h02E").Runtime.openConnection({to:e,jsonp:!1,useQueryStringForData:!0,altPickupUrl:e},(function(e){v=e,t(null,!0)}))},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(w,e);var t,n,i,p,y=(t=w,function(){var e,n=l(t);if(u()){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s(this,e)});function w(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w),y.call(this,e)}return n=w,(i=[{key:"subscribe",value:function(){var e=this,t=this.originalData;if(!t)return null;t.map((function(t){t.bgChannel&&v.subscribe(t.bgChannel,(function(t){e.update(t)}))}))}},{key:"unsubscribe",value:function(){var e=this.originalData;if(!e)return null;e.map((function(e){v.unsubscribe(e.bgChannel,(function(e){console.error(e)}))}))}},{key:"update",value:function(e){var t=this,n=f(e),r=Object.assign(this.props.context.data,{});r.forEach((function(e){if(e.bgChannel===n.channelName){var r=Object.prototype.hasOwnProperty.call(e,"type")?e.type:"";t.save(e,r,n)}})),this.setContext(b({},this.props.context,{data:r}))}},{key:"save",value:function(e,t,n){var r={},i="BOND"===t.toUpperCase(),o=Number(n.last),a=Number(n.change),s=Number(d(n.last,n.change)),u=i?Number(n.a):a;return r.displayPrice=m(o,e.decimalPrecision),r.displayPerChange=m(s,2)+"%",r.displayChange=m(a,e.decimalPrecision),r.up=u>0,r.down=u<0,i&&(r.displayPrice=h(d(n.b,n.a)),r.displayChange=m(o,e.decimalPrecision)+"%",r.displayPerChange=r.displayChange),Object.assign(e,r)}},{key:"componentDidMount",value:function(){var e=this;if(this.props.hideStrip)return null;var t={},n=!0,r=!0;this.props.content&&this.props.content.data?(t=this.props.content.data,this.originalData=this.props.content.data):(t=this.props.options.strip||!1,this.originalData=this.props.options.strip||!1),this.props.options.toggleDisplayedValue&&(n=!0,r=!1,"undefined"!=typeof window&&(this._switchDisplayInterval=window.setInterval(this.switchDisplayedValue.bind(this),5e3))),this.setContext({data:t,renderPrice:n,renderPercentage:r}),_(g(this.props.options),(function(t,n){n&&e.subscribe()}))}},{key:"componentWillUnmount",value:function(){var e=this;_(g(this.props.options),(function(t,n){n&&e.unsubscribe()})),this.props.options.toggleDisplayedValue&&"undefined"!=typeof window&&window.clearInterval(this._switchDisplayInterval)}},{key:"switchDisplayedValue",value:function(){this.setContext(b({},this.props.context,{renderPrice:!this.props.context.renderPrice,renderPercentage:!this.props.context.renderPercentage}))}},{key:"getTicker",value:function(e){var t=this.props.options.unit,n=null;if("4"===t&&e.hideIn4u)n=null;else if("8"===t&&"SPX"!==e.ticker&&e.hideIn4u)n=null;else if("12"===t&&e.hideIn12u)n=null;else{var r=e.displayName;n=Object.assign({},e,{displayName:r})}return n}},{key:"formatTickerUrl",value:function(e){return"asia,jp"===(this.props.options||{}).region?e.replace("https://www.wsj.com","https://jp.wsj.com"):e}},{key:"renderStrip",value:function(e){var t=this,n=this.props.css||function(){return""};return!e||e.length<1?null:e.map((function(e,i){var o=t.getTicker(e);if(!o)return null;if(!o.displayName||!o.displayPrice)return null;var a=t.props.context,s=a.renderPrice,u=a.renderPercentage,l=t.props.options.arrowAtEnd,p=o.up?c.createElement("span",{"aria-label":"increase",className:n("arrow-up"),__self:t,__source:{fileName:r,lineNumber:216,columnNumber:11}},"▲"):c.createElement("span",{"aria-label":"decrease",className:n("arrow-down"),__self:t,__source:{fileName:r,lineNumber:217,columnNumber:11}},"▼"),f=l?null:p,m=l?p:null,d=c.createElement("span",{className:n("display-price"),__self:t,__source:{fileName:r,lineNumber:223,columnNumber:9}},o.displayPrice," ",o.isUS10YrBond?" Yield":null),h=o.up?"ticker-up":"ticker-down",y=o.displayPerChange&&o.displayPerChange.split("-")||null,b=c.createElement("span",{className:n("display-per-change"),__self:t,__source:{fileName:r,lineNumber:233,columnNumber:9}},y),N="U.S. 10 Year Treasury Note"===o.commonName?"with a":"points with a",g="Crude Oil WTI (NYM $/bbl) Front Month"===o.commonName?"Crude Oil currently":o.commonName+" currently";return c.createElement("div",{className:n("ticker",h),key:i,__self:t,__source:{fileName:r,lineNumber:242,columnNumber:9}},c.createElement("a",{className:n("ticker-link"),href:t.formatTickerUrl(o.url),__self:t,__source:{fileName:r,lineNumber:243,columnNumber:11}},c.createElement("span",{"aria-label":g,className:n("display-name"),__self:t,__source:{fileName:r,lineNumber:244,columnNumber:13}},o.displayName),f,s?d:null,c.createElement("span",{className:n("visually-hidden"),__self:t,__source:{fileName:r,lineNumber:249,columnNumber:13}},N),u?b:null,m))}))}},{key:"render",value:function(){var e=this.props.css||function(){return""},t=this.props.options,n=t.border,i=t.hideStrip,o=t.isFixedScroll,a=t.unit;if(i)return null;var s=this.props.context.data,u=s?this.renderStrip(s):null,l=["md-sector"];return n&&N("border",n,l),l.push("sector-unit-"+a),l.push(o?"":"is-not-fixed"),c.createElement("div",{role:"region","aria-label":"Markets summary",className:e("market-data"),__self:this,__source:{fileName:r,lineNumber:278,columnNumber:7}},c.createElement("div",{className:e(l),__self:this,__source:{fileName:r,lineNumber:279,columnNumber:9}},u))}}])&&o(n.prototype,i),p&&o(n,p),w}(p);w.options={type:"object",properties:{arrowAtEnd:{type:"boolean"},border:{type:"array",items:{type:"string",enum:["top","right","bottom","left"]}},hideStrip:{type:"boolean"},isBarrons:{type:"boolean"},isFixedScroll:{type:"boolean"},strip:{type:"array"},toggleDisplayedValue:{type:"boolean"},unit:{type:"string"},region:{type:"string"}}},w.content=["market_data","wsj_mdstrip"],w.decorators={WSJTheme:n("XGuf"),BarronsTheme:n("HfuW")},w.defaultOptions={arrowAtEnd:!1,border:!1,hideStrip:!1,isBarrons:!1,isFixedScroll:!0,strip:[],toggleDisplayedValue:!1,unit:16,region:"na,us"},w.markAsImmutableForCache=[{$props:["options","strip"]}],e.exports=y(w,n("yt/+"))},"yt/+":function(e){e.exports={id:"17f32040-0bfd-4790-bb36-732d32093176",displayName:"MarketDataStrip"}}}]);