(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/shaker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07e2":function(e,t,n){e.exports=n.p+"img/setting.91babb81.png"},1425:function(e,t,n){e.exports=n.p+"img/p4.5976f9b6.jpg"},"1f90":function(e,t,n){e.exports=n.p+"img/p5.ce2ba69a.jpg"},2395:function(e,t,n){},"3fcf":function(e,t,n){},"4b74":function(e,t,n){e.exports=n.p+"img/p3.7d517af3.jpg"},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("top-header"),n("middle"),n("card")],1)},r=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap"},[a("span",{staticClass:"animated wobble"},[e._v("抖一抖")]),a("img",{staticClass:"animated rotateIn",attrs:{src:n("07e2"),alt:""}})])}],c={name:"TopHeader"},u=c,l=(n("ca8d"),n("2877")),p=Object(l["a"])(u,o,s,!1,null,null,null),d=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"splits"},[a("div",{class:[e.isOpen?"open":"","inner1"],on:{click:e.open}}),a("div",{class:[e.isOpen?"open":"","inner2"],on:{click:e.open}})]),a("img",{attrs:{src:n("d1b4"),id:"bg-img"}})])},b=[],h=(n("0d03"),[{name:"武则天",sex:0,url:n("f030"),desc:"先充值再用我。。。"},{name:"金三胖",sex:1,url:n("e0a1"),desc:"我们随时盒实验。"},{name:"川巨巨",sex:1,url:n("4b74"),desc:"来白宫坐坐吗？"},{name:"饭冰冰",sex:0,url:n("1425"),desc:"我太难了！"},{name:"杨超月",sex:0,url:n("1f90"),desc:"你今天又写了多少个bug？"}]),m={name:"middle",data:function(){return{isOpen:!1,last_update:0,x:0,y:0,z:0}},mounted:function(){window.DeviceMotionEvent&&window.addEventListener("devicemotion",this.deviceMotionHandler)},methods:{deviceMotionHandler:function(e){var t=(new Date).getTime(),n=t-this.last_update;if(n>1e3){this.last_update=t;var a=e.accelerationIncludingGravity;this.x=Math.floor(Math.abs(a.x)),this.y=Math.floor(Math.abs(a.y)),this.z=Math.floor(Math.abs(a.z)),(this.x>10||this.y>10||this.z>10)&&this.open()}},open:function(){navigator.vibrate?navigator.vibrate(300):navigator.webkitVibrate&&navigator.webkitVibrate(300),this.$bus.$emit("clear"),this.isOpen=!0,this.sendInfo()},sendInfo:function(){var e=this;setTimeout((function(){e.isOpen=!1;var t=Math.floor(Math.random()*h.length);e.$bus.$emit("getOne",h[t])}),1e3)}}},v=m,g=(n("a842"),Object(l["a"])(v,f,b,!1,null,null,null)),w=g.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"card-wrap animated fadeInDown"},[a("img",{attrs:{src:e.obj.url}}),a("div",{staticClass:"right"},[a("span",[e._v(e._s(e.obj.name))]),e.obj.sex?a("img",{attrs:{src:n("abc7")}}):a("img",{attrs:{src:n("e290")}}),a("p",[e._v(e._s(e.obj.desc))])])])},j=[],_={name:"card",data:function(){return{isShow:!1,obj:{name:"",sex:1,url:n("dc3a"),desc:""}}},mounted:function(){var e=this;this.$bus.$on("getOne",(function(t){e.showCard(t)})),this.$bus.$on("clear",(function(){e.hideCard()}))},methods:{showCard:function(e){this.obj=e,this.isShow=!0},hideCard:function(){this.obj={name:"",sex:1,url:n("dc3a"),desc:""},this.isShow=!1}}},y=_,O=(n("e45b"),Object(l["a"])(y,x,j,!1,null,null,null)),M=O.exports,$={name:"app",components:{TopHeader:d,Middle:w,Card:M}},C=$,S=(n("7c55"),Object(l["a"])(C,i,r,!1,null,null,null)),k=S.exports;n("4ee2"),n("ebd9");a["a"].config.productionTip=!1,a["a"].prototype.$bus=new a["a"],new a["a"]({render:function(e){return e(k)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var a=n("2395"),i=n.n(a);i.a},9400:function(e,t,n){},a842:function(e,t,n){"use strict";var a=n("9400"),i=n.n(a);i.a},abc7:function(e,t,n){e.exports=n.p+"img/man.a50da3e1.png"},be7d:function(e,t,n){},ca8d:function(e,t,n){"use strict";var a=n("3fcf"),i=n.n(a);i.a},d1b4:function(e,t,n){e.exports=n.p+"img/bg.bd315fd8.jpg"},dc3a:function(e,t,n){e.exports=n.p+"img/default.f0f4c914.jpg"},e0a1:function(e,t,n){e.exports=n.p+"img/p2.cbf1b9e7.jpg"},e290:function(e,t,n){e.exports=n.p+"img/woman.dc58e92c.png"},e45b:function(e,t,n){"use strict";var a=n("be7d"),i=n.n(a);i.a},ebd9:function(e,t,n){},f030:function(e,t,n){e.exports=n.p+"img/p1.b194ea23.jpg"}});
//# sourceMappingURL=app.04bfc3cc.js.map