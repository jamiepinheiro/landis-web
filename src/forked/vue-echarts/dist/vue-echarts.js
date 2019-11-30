!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("echarts/lib/echarts")):"function"==typeof define&&define.amd?define(["echarts/lib/echarts"],t):(e=e||self).VueECharts=t(e.echarts)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="object"==typeof i&&i&&i.Object===Object&&i,r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")(),s=function(){return o.Date.now()},a=o.Symbol,c=Object.prototype,d=c.hasOwnProperty,l=c.toString,u=a?a.toStringTag:void 0;var h=function(e){var t=d.call(e,u),i=e[u];try{e[u]=void 0;var n=!0}catch(e){}var r=l.call(e);return n&&(t?e[u]=i:delete e[u]),r},_=Object.prototype.toString;var f=function(e){return _.call(e)},g="[object Null]",p="[object Undefined]",m=a?a.toStringTag:void 0;var v=function(e){return null==e?void 0===e?p:g:m&&m in Object(e)?h(e):f(e)};var b=function(e){return null!=e&&"object"==typeof e},z="[object Symbol]";var y=function(e){return"symbol"==typeof e||b(e)&&v(e)==z},w=NaN,O=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,E=/^0o[0-7]+$/i,T=parseInt;var M=function(e){if("number"==typeof e)return e;if(y(e))return w;if(t(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=t(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=C.test(e);return n||E.test(e)?T(e.slice(2),n?2:8):x.test(e)?w:+e},S="Expected a function",j=Math.max,L=Math.min;var $=function(e,i,n){var r,o,a,c,d,l,u=0,h=!1,_=!1,f=!0;if("function"!=typeof e)throw new TypeError(S);function g(t){var i=r,n=o;return r=o=void 0,u=t,c=e.apply(n,i)}function p(e){var t=e-l;return void 0===l||t>=i||t<0||_&&e-u>=a}function m(){var e=s();if(p(e))return v(e);d=setTimeout(m,function(e){var t=i-(e-l);return _?L(t,a-(e-u)):t}(e))}function v(e){return d=void 0,f&&r?g(e):(r=o=void 0,c)}function b(){var e=s(),t=p(e);if(r=arguments,o=this,l=e,t){if(void 0===d)return function(e){return u=e,d=setTimeout(m,i),h?g(e):c}(l);if(_)return clearTimeout(d),d=setTimeout(m,i),g(l)}return void 0===d&&(d=setTimeout(m,i)),c}return i=M(i)||0,t(n)&&(h=!!n.leading,a=(_="maxWait"in n)?j(M(n.maxWait)||0,i):a,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==d&&clearTimeout(d),u=0,r=l=o=d=void 0},b.flush=function(){return void 0===d?c:v(s())},b},R=null;var A=null;function N(e,t){void 0===t&&(t={});var i=document.createElement(e);return Object.keys(t).forEach(function(e){i[e]=t[e]}),i}function U(e,t,i){return(window.getComputedStyle(e,i||null)||{display:"none"})[t]}function W(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if("none"===U(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var D='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',F=0,H=null;function P(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=function(){var e=W(this),t=e.rendered,i=e.detached;t!==this.__resize_rendered__&&(!i&&this.__resize_triggers__&&(q(this),this.addEventListener("scroll",k,!0)),this.__resize_rendered__=t,B(this))}.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){var i=e.offsetWidth,n=e.offsetHeight,r=new ResizeObserver(function(){(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==i||e.offsetHeight!==n))&&B(e)}),o=W(e),s=o.detached,a=o.rendered;e.__resize_observer_triggered__=!1===s&&!1===a,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){B(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(F||(H=function(e){var t=document.createElement("style");return t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}(D)),function(e){var t=U(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};var i=N("div",{className:"resize-triggers"}),n=N("div",{className:"resize-expand-trigger"}),r=N("div"),o=N("div",{className:"resize-contract-trigger"});n.appendChild(r),i.appendChild(n),i.appendChild(o),e.appendChild(i),e.__resize_triggers__={triggers:i,expand:n,expandChild:r,contract:o},q(e),e.addEventListener("scroll",k,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=W(e).rendered,window.MutationObserver){var c=new MutationObserver(e.__resize_mutation_handler__);c.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=c}e.__resize_listeners__.push(t),F++}function k(){var e,t,i=this;q(this),this.__resize_raf__&&(e=this.__resize_raf__,A||(A=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),A(e)),this.__resize_raf__=(t=function(){var e,t,n,r,o,s,a=(t=(e=i).__resize_last__,n=t.width,r=t.height,o=e.offsetWidth,s=e.offsetHeight,o!==n||s!==r?{width:o,height:s}:null);a&&(i.__resize_last__=a,B(i))},R||(R=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),R(t))}function B(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(function(t){t.call(e)})}function q(e){var t=e.__resize_triggers__,i=t.expand,n=t.expandChild,r=t.contract,o=r.scrollWidth,s=r.scrollHeight,a=i.offsetWidth,c=i.offsetHeight,d=i.scrollWidth,l=i.scrollHeight;r.scrollLeft=o,r.scrollTop=s,n.style.width=a+1+"px",n.style.height=c+1+"px",i.scrollLeft=d,i.scrollTop=l}var G=["legendselectchanged","legendselected","legendunselected","legendscroll","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","geoselectchanged","geoselected","geounselected","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected","axisareaselected","focusnodeadjacency","unfocusnodeadjacency","brush","brushselected","rendered","finished","click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"],I=["theme","initOptions","autoresize"],V=["manualUpdate","watchShallow"],X={props:{options:Object,theme:[String,Object],initOptions:Object,group:String,autoresize:Boolean,watchShallow:Boolean,manualUpdate:Boolean},data:function(){return{lastArea:0}},watch:{group:function(e){this.chart.group=e}},methods:{mergeOptions:function(e,t,i){this.manualUpdate&&(this.manualOptions=e),this.chart?this.delegateMethod("setOption",e,t,i):this.init()},appendData:function(e){this.delegateMethod("appendData",e)},resize:function(e){this.delegateMethod("resize",e)},dispatchAction:function(e){this.delegateMethod("dispatchAction",e)},convertToPixel:function(e,t){return this.delegateMethod("convertToPixel",e,t)},convertFromPixel:function(e,t){return this.delegateMethod("convertFromPixel",e,t)},containPixel:function(e,t){return this.delegateMethod("containPixel",e,t)},showLoading:function(e,t){this.delegateMethod("showLoading",e,t)},hideLoading:function(){this.delegateMethod("hideLoading")},getDataURL:function(e){return this.delegateMethod("getDataURL",e)},getConnectedDataURL:function(e){return this.delegateMethod("getConnectedDataURL",e)},clear:function(){this.delegateMethod("clear")},dispose:function(){this.delegateMethod("dispose")},delegateMethod:function(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];return this.chart||this.init(),(t=this.chart)[e].apply(t,i)},delegateGet:function(e){return this.chart||this.init(),this.chart[e]()},getArea:function(){return this.$el.offsetWidth*this.$el.offsetHeight},init:function(){var t=this;if(!this.chart){var i=e.init(this.$el,this.theme,this.initOptions);this.group&&(i.group=this.group),i.setOption(this.manualOptions||this.options||{},!0),G.forEach(function(e){i.on(e,function(i){t.$emit(e,i)})}),this.autoresize&&(this.lastArea=this.getArea(),this.__resizeHandler=$(function(){0===t.lastArea?(t.mergeOptions({},!0),t.resize(),t.mergeOptions(t.options||t.manualOptions||{},!0)):t.resize(),t.lastArea=t.getArea()},100,{leading:!0}),P(this.$el,this.__resizeHandler)),Object.defineProperties(this,{width:{configurable:!0,get:function(){return t.delegateGet("getWidth")}},height:{configurable:!0,get:function(){return t.delegateGet("getHeight")}},isDisposed:{configurable:!0,get:function(){return!!t.delegateGet("isDisposed")}},computedOptions:{configurable:!0,get:function(){return t.delegateGet("getOption")}}}),this.chart=i}},initOptionsWatcher:function(){var e=this;this.__unwatchOptions&&(this.__unwatchOptions(),this.__unwatchOptions=null),this.manualUpdate||(this.__unwatchOptions=this.$watch("options",function(t,i){!e.chart&&t?e.init():e.chart.setOption(t,t!==i)},{deep:!this.watchShallow}))},destroy:function(){this.autoresize&&function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);var i=e.__resize_listeners__;i&&(i.splice(i.indexOf(t),1),i.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",k),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--F&&H&&H.parentNode.removeChild(H))}(this.$el,this.__resizeHandler),this.dispose(),this.chart=null},refresh:function(){this.chart&&(this.destroy(),this.init())}},created:function(){var e=this;this.initOptionsWatcher(),I.forEach(function(t){e.$watch(t,function(){e.refresh()},{deep:!0})}),V.forEach(function(t){e.$watch(t,function(){e.initOptionsWatcher(),e.refresh()})})},mounted:function(){this.options&&this.init()},activated:function(){this.autoresize&&this.chart&&this.chart.resize()},destroyed:function(){this.chart&&this.destroy()},connect:function(t){"string"!=typeof t&&(t=t.map(function(e){return e.chart})),e.connect(t)},disconnect:function(t){e.disConnect(t)},registerMap:function(t,i,n){e.registerMap(t,i,n)},registerTheme:function(t,i){e.registerTheme(t,i)},graphic:e.graphic};var J=function(e,t,i,n,r,o,s,a,c,d){"boolean"!=typeof s&&(c=a,a=s,s=!1);var l,u="function"==typeof i?i.options:i;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),n&&(u._scopeId=n),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):t&&(l=s?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),l)if(u.functional){var h=u.render;u.render=function(e,t){return l.call(t),h(e,t)}}else{var _=u.beforeCreate;u.beforeCreate=_?[].concat(_,l):[l]}return i},K="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Q=document.head||document.getElementsByTagName("head")[0],Y={};return J({render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"echarts"})},staticRenderFns:[]},function(e){e&&e("data-v-237c3a22_0",{source:".echarts{width:600px;height:400px}",map:void 0,media:void 0})},X,void 0,!1,void 0,function(e){return function(e,t){return function(e,t){var i=K?t.media||"default":e,n=Y[i]||(Y[i]={ids:new Set,styles:[]});if(!n.ids.has(e)){n.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),Q.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(r),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var o=n.ids.size-1,s=document.createTextNode(r),a=n.element.childNodes;a[o]&&n.element.removeChild(a[o]),a.length?n.element.insertBefore(s,a[o]):n.element.appendChild(s)}}}(e,t)}},void 0)});
