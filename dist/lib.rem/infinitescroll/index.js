/*! vue-ydui v0.4.7 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.ydui=t(require("Vue")):e.ydui=t(e.Vue)}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.InfiniteScroll=void 0;var o=n(51),s=i(o);t.InfiniteScroll=s.default},1:function(e,t){e.exports=function(e,t,n,i){var o,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),i){var d=u.computed||(u.computed={});Object.keys(i).forEach(function(e){var t=i[e];d[e]=function(){return t}})}return{esModule:o,exports:s,options:u}}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||i.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},s=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,i=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-i,s=o+t.offsetHeight;return o>=0&&o<n||s>0&&s<=n},r=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},u=function(e,t){r(e,t)||(e.className=""==e.className?t:e.className+" "+t)},d=function(e,t){if(r(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=i,t.getScrollview=o,t.checkInview=s,t.addClass=u,t.removeClass=d},8:function(t,n){t.exports=e},51:function(e,t,n){var i=n(1)(n(157),n(114),null,null);e.exports=i.exports},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("list"),e._v(" "),n("div",{ref:"tag"}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&e.isDone,expression:"!isLoading && isDone"}],staticClass:"list-donetip"},[e._t("doneTip",[e._v("没有更多数据了")])],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"list-loading"},[e._t("loadingTip",[e._v("加载中")])],2)],2)},staticRenderFns:[]}},157:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),s=i(o),r=n(5);window.$yduiBus=window.$yduiBus||new s.default,t.default={name:"yd-infinitescroll",data:function(){return{isLoading:!1,isDone:!1}},props:{onInfinite:{type:Function,required:!0}},methods:{init:function(){var e=this;this.scrollview=(0,r.getScrollview)(this.$el),this.scrollview.addEventListener("scroll",function(){e.throttle(e.scrollHandler)}),window.$yduiBus.$on("ydui.infinitescroll.loadedDone",function(){e.isLoading=!1,e.isDone=!0}),window.$yduiBus.$on("ydui.infinitescroll.finishLoad",function(){e.isLoading=!1})},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var e=this.scrollview,t=e==window?document.body.offsetHeight:e.offsetHeight,n=e==window?0:e.getBoundingClientRect().top;this.$refs.tag.getBoundingClientRect().top<=n+t+t/10&&(this.isLoading=!0,this.onInfinite())}},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},100)}},mounted:function(){this.$nextTick(this.init)},destroyed:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler)}}}})});