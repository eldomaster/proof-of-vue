(function(t){function e(e){for(var o,i,c=e[0],a=e[1],s=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},u=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7825fde2"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=i(t);var s=new Error;u=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",s.name="ChunkLoadError",s.type=o,s.request=u,n[1](s)}r[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/proof-of-vue/",c.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0613":function(t,e,n){"use strict";var o=n("2b0e"),r=n("2f62"),u=n("be95");n("1cc6");o["a"].use(r["a"]);var i=function(){return{init:!1}};e["default"]=new r["a"].Store({state:i,mutations:{init:function(t){console.log("App initialized"),t.init=!0}},actions:{},modules:{AuthStore:u["AuthStore"]}})},"1b35":function(t,e,n){},"1cc6":function(t,e){},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},8799:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return f}));var o=n("5530"),r=function(){return{info:{loggendIn:!1,loginError:void 0,username:void 0,token:void 0},count:1}},u="AuthStore/",i={count:u+"getCount",state:u+"getState"},c={getCount:function(t){return t.count},getState:function(t){return t}},a={INCREMENT:u+"increment",SET_COUNT:u+"setCount",TRY_LOGIN:u+"tryLogin",LOGOFF:u+"logoff"},s={increment:function(t){var e=t.commit,n=t.state;console.log("Action fired"),e("setCount",n.count+1)},setCount:function(t,e){var n=t.commit;console.log("Action fired"),n("setCount",e.count)},tryLogin:function(t,e){var n=t.commit;console.log("Action fired"),n("setInfo",{loggendIn:!0,username:e.username})},logoff:function(t){var e=t.commit;console.log("Action fired"),e("setInfo",Object(o["a"])({},r().info))}},l={setCount:function(t,e){console.log("Mutation fired"),t.count=e},setInfo:function(t,e){console.log("Mutation fired"),t.info=Object(o["a"])({},t.info,{},e)}},f={namespaced:!0,state:r,getters:c,mutations:l,actions:s}},"9c0c":function(t,e,n){},be95:function(t,e,n){"use strict";var o=n("8799");n.d(e,"AuthActions",(function(){return o["a"]})),n.d(e,"AuthGetters",(function(){return o["b"]})),n.d(e,"AuthStore",(function(){return o["c"]}));n("e0ed")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},u=[],i=n("d4ec"),c=n("bee2"),a=n("99de"),s=n("7e84"),l=n("262e"),f=n("9ab4"),d=n("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(a["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.$store.commit("init")}}]),e}(d["d"]);p=Object(f["a"])([d["a"]],p);var v=p,b=v,h=(n("5c0b"),n("2877")),m=Object(h["a"])(b,r,u,!1,null,null,null),g=m.exports,O=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v(t._s(t.username))]),n("HelloWorld",{attrs:{msg:t.msg},on:{"update:msg":function(e){t.msg=e},"update-name":function(e){return t.setUSername(e)}}})],1)},y=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("button",{on:{click:function(e){return t.increment()}}},[t._v("Increment")]),n("button",{on:{click:function(e){return t.setCount(1)}}},[t._v("Set to 1")]),n("button",{on:{click:function(e){return t.logInOff()}}},[t._v(t._s(t.info.loggendIn?"Logoff":"login"))]),t.count?n("p",[t._v(t._s(t.count))]):t._e(),n("p",[t._v("authState: "+t._s(t.authState))])])},A=[],k=(n("4160"),n("159b"),n("be95")),S=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(a["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.subscriptions=[],t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"updateName",value:function(){var t,e,n,o,r=(null===(t=this.authState)||void 0===t||null===(e=t.info)||void 0===e?void 0:e.username)?"User "+(null===(n=this.authState)||void 0===n||null===(o=n.info)||void 0===o?void 0:o.username):"Not logged in!";return r}},{key:"updateMsg",value:function(){var t;return(null===(t=this.authState.info)||void 0===t?void 0:t.loggendIn)?"Welcome!":"Hello"}},{key:"increment",value:function(){this.$store.dispatch(k["AuthActions"].INCREMENT)}},{key:"setCount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;this.$store.dispatch(k["AuthActions"].SET_COUNT,{count:t})}},{key:"logInOff",value:function(){var t;(null===(t=this.info)||void 0===t?void 0:t.loggendIn)?this.$store.dispatch(k["AuthActions"].LOGOFF):this.$store.dispatch(k["AuthActions"].TRY_LOGIN,{username:"eldo",password:"eldo"})}},{key:"created",value:function(){var t=this;this.subscriptions.push(this.$store.subscribe((function(e,n){t.updateName(),t.updateMsg(),console.log(e),console.log(n)})))}},{key:"destroyed",value:function(){console.log("unsubscribe from store"),this.subscriptions.forEach((function(t){return t()}))}},{key:"count",get:function(){return this.$store.getters[k["AuthGetters"].count]}},{key:"authState",get:function(){return this.$store.getters[k["AuthGetters"].state]}},{key:"info",get:function(){return this.$store.getters[k["AuthGetters"].state].info}}]),e}(d["d"]);Object(f["a"])([Object(d["c"])()],S.prototype,"msg",void 0),Object(f["a"])([Object(d["b"])()],S.prototype,"updateName",null),Object(f["a"])([Object(d["b"])("update:msg")],S.prototype,"updateMsg",null),S=Object(f["a"])([Object(d["a"])({computed:{}})],S);var w=S,C=w,I=(n("d6dd"),Object(h["a"])(C,_,A,!1,null,"75a45c18",null)),E=I.exports,T=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(a["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.username="Username",t.msg="Hello",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"setUSername",value:function(t){this.username=t}}]),e}(d["d"]);T=Object(f["a"])([Object(d["a"])({components:{HelloWorld:E}})],T);var $=T,N=$,M=Object(h["a"])(N,j,y,!1,null,null,null),x=M.exports;o["a"].use(O["a"]);var L=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=new O["a"]({routes:L}),G=P,H=n("0613");n("3d43");o["a"].config.productionTip=!1,new o["a"]({router:G,store:H["default"],render:function(t){return t(g)}}).$mount("#app")},d6dd:function(t,e,n){"use strict";var o=n("1b35"),r=n.n(o);r.a},e0ed:function(t,e){}});
//# sourceMappingURL=app.6b2e752b.js.map