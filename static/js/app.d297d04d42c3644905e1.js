webpackJsonp([6],{"0+7D":function(n,e){},"9Tyx":function(n,e,t){"use strict";var r=t("/5sW"),o=t("TXmL");r.default.use(o.a);var a=new o.a({locale:"en",fallbackLocale:"en",messages:{}});e.a=a},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("SCKt"),t("kLF+"),t("VM32"),t("0K64"),t("X8hh"),t("fB7P"),t("B4Cs"),t("rplX");var r=t("/5sW"),o=t("fyxR"),a=t("cVIJ"),i={components:{LoadingBar:t.n(a).a},methods:{error:function(){},done:function(){}},computed:{progress:function(){return 100*this.$store.state.networkProgress}}},u={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"outer"},[e("div",{staticClass:"lmask"},[e("loading-bar",{attrs:{"on-error-done":this.error,"on-progress-done":this.done,progress:this.progress}})],1)])},staticRenderFns:[]};var s=t("VU/8")(i,u,!1,function(n){t("npqa")},"data-v-341d7d52",null).exports;t.e(3).then(t.bind(null,"mcDd"));var c={components:{Index:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"42Hy"))},Loading:s},name:"app",data:function(){return{inited:!1,preload:!1}},mounted:function(){var n=this;this.$store.commit("setLoading",!0);var e=this.$i18n.fallbackLocale;o.a.init(e).then(function(n){var t=void 0,r=navigator.language||navigator.userLanguage;return(t=n.languages[r]?r:e)!==e?o.a.loadTranslation(t):t}).then(function(e){n.$i18n.locale=e,n.preload=!0})},methods:{indexMounting:function(){this.preload&&(console.log("inited"),this.inited=!0,this.preload=!1,this.$store.commit("setLoading",!1))}},computed:{loading:function(){return this.$store.state.loading}}},l={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade"}},[!n.loading&&n.inited||n.preload?t("index",{on:{mounted:n.indexMounting}}):n._e()],1),n._v(" "),t("transition",{attrs:{name:"fade"}},[n.loading||!n.inited?t("Loading"):n._e()],1)],1)},staticRenderFns:[]};var f=t("VU/8")(c,l,!1,function(n){t("0+7D")},null,null).exports,d=t("olkN"),g=t("9Tyx");r.default.config.productionTip=!1,new r.default({el:"#app",store:d.a,i18n:g.a,render:function(n){return n(f)}})},fyxR:function(n,e,t){"use strict";var r=t("olkN"),o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();var a=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),Object.assign(this,e)}return o(n,[{key:"getProp",value:function(n){var e=void 0;return this[r.a.state.difficulty]?void 0===(e=this[r.a.state.difficulty])&&(e=this.normal):e=this.normal,e[n]}},{key:"results",get:function(){return this.getProp("results")}},{key:"energy_required",get:function(){return this.getProp("energy_required")}},{key:"ingredients",get:function(){return this.getProp("ingredients")}},{key:"ingredient_count",get:function(){return this.getProp("ingredient_count")}}]),n}(),i=t("9Tyx"),u=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s={},c={},l={fs:s,files:c,meta:void 0,getFileContent:function(n){return c[n]},exists:function(n){var e=s;return!n.split("/").some(function(n){return!(e=e[n])})},readDir:function(n){var e=s;return n.split("/").forEach(function(n){return!!e&&(e=e[n])}),e?Object.keys(e).join("|"):""},extractZipToVirtualFS:function(n,e){var t=void 0;(e=e||"")?(t=s,s[e]=s[e]||{},t=s[e],e+="/"):t=s;var r=[];return n.forEach(function(n,o){var a=u(n,2),i=a[0],s=a[1];console.log("extracting "+i);var l=t;s.forEach(function(n,t){if(t.dir){var o=l;t.name.split("/").forEach(function(n){o[n]?o=o[n]:n&&(o[n]={})});var a=t.name.match(/(.*)\/(.+)/);a&&a[2]||(a={1:"",2:t.name})}else{var i=t.name.substring(t.name.length-4,t.name.length);".lua"===i||".cfg"===i||".ini"===i||"json"===i?r.push(t.async("text").then(function(n){c[e+t.name]=n;var r=l;t.name.split("/").forEach(function(n){n&&r[n]?r=r[n]:r[n]=!0})})):r.push(t.async("base64").then(function(n){c[e+t.name]=n}))}})}),Promise.all(r)}},f=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.e(0).then(t.bind(null,"xe4/"));var d=void 0,g=void 0,h={};window.quantorioBridge=l;var m=function(n,e){if(!n)return-1;if(!e)return 1;var t,r,o=n.showName||n.name,a=e.showName||e.name;t=g[o].order.split("-"),r=g[a].order.split("-");for(var i=0;i<Math.max(t.length,r.length);i++){if(void 0===t[i])return-1;if(void 0===r[i])return 1;if(t[i]!==r[i])return t[i]>r[i]?1:-1}return(o=parseInt(o.replace(/^.*-/,"")))>(a=parseInt(a.replace(/^.*-/,"")))?1:o<a?-1:0},p=function(n){var e=n.languages,t={};Object.keys(e).forEach(function(n){t[e[n]]=n}),n.languages={},Object.keys(t).sort().forEach(function(e){n.languages[t[e]]=e}),n.modules.sort(m);var r={},o=[];n.inserters.sort(function(e,t){return m(n.items[e.name],n.items[t.name])}),n.inserters.forEach(function(n){r[n.turns_per_minute]||(r[n.turns_per_minute]={}),r[n.turns_per_minute][n.stack]||(r[n.turns_per_minute][n.stack]=!0,o.push(n))}),n.inserters=o,n.machines.sort(function(n,e){return"player"===n.name?-1:"player"===e.name?1:n.name>e.name?1:-1});var i={};return Object.keys(n.recipes).forEach(function(e){i[e]=new a(n.recipes[e])}),n.recipes=i,Object.keys(n.groups).forEach(function(e){var t=n.groups[e];if(t.subgroups){t.subgroupsWithItems=[];var r=0;Object.keys(t.subgroups).forEach(function(e){if(n.subgroups[e]){var o=[];Object.keys(t.subgroups[e]).forEach(function(e){if(n.items[e]&&n.recipes[e]){var t=n.recipes[e];o.push(t),r++}o.sort(m)});var a={order:t.subgroups[e],items:o,name:e};t.subgroupsWithItems.push(a)}}),0!==r?t.subgroupsWithItems.sort(m):delete n.groups[e]}else delete n.groups[e]}),n.groups=Object.values(n.groups).sort(m),console.log("done"),n},v=[],y=function(n,e){if(h[n])return h[n];console.log("loading file "+n);var o=void 0,a=n;return o=(o=e?Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"WgY6")).then(function(n){return n.loadAsync(e)}):function(n){return fetch(n,{mode:"cors"}).then(function(n){var e=n.headers.get("Content-Length");if(!e||!n.body)return n.blob();var t=v.length;v.push({length:0,loaded:0}),v[t].length=Number(e);var o=n.body.getReader(),a=new Uint8Array(e);return function n(){return o.read().then(function(e){var o=e.done,i=e.value;if(o)return a;a.set(i,v[t].loaded),v[t].loaded+=i.byteLength;var u=0,s=0;return v.forEach(function(n){u+=n.length,s+=n.loaded}),r.a.commit("setNetworkProgress",s/(u+1)),n()})}()})}(n+".zip").then(function(n){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"WgY6")).then(function(e){return e.loadAsync(n)})})).then(function(e){return[n,e]}),h[a]=o,o},b=function(n){Object.keys(n.translations).forEach(function(e){var t=n.translations[e];i.a.mergeLocaleMessage(e,t),r.a.commit("saveTranslation",[e,t])})},w=function(n){return y("locale/"+n).then(function(n){return k([n],void 0,void 0,!0)}).then(function(e){return b(e),r.a.commit("loadedLanguage",n),n}).catch(function(e){console.error(e),alert("error when loading "+n)})},k=function(n,e,r,o){return l.extractZipToVirtualFS(n,e).then(function(){return console.log("lua..."),function(n,e){return t.e(4).then(t.bind(null,"1PN3")).then(function(t){var r=["core","base"];if(n=n||[],r=r.concat(n),!d){(d=new t.Lua.State).push(l),d.setglobal("quantorioBridge");var o=d.load(l.files["core/quantorio.lua"],"core/quantorio.lua","t");o(),o.free()}if(e)d.execute("\n        data.raw = {}\n        loadLanguages({'"+r.join("','")+"'}, "+r.length+")\n        quantorioBridge.meta = dkjson.encode(generator.getMeta())\n        "),l.meta=JSON.parse(l.meta),b(l.meta);else{d.execute("\n        data.raw = {}\n        quantorioBridge.meta = dkjson.encode(browserParse({'"+r.join("','")+"'}, "+r.length+"))\n      ");var a=JSON.parse(l.meta);g=a.items,l.meta=p(a)}return l.meta})}(r,o)})},x=function(n){return r.a.commit("setMeta",n),b(n),n};e.a={init:function(n){return Promise.all([y("lualib"),y("core"),y("base"),y("quantorio"),y("locale/"+n)]).then(k).then(x).then(function(e){return r.a.commit("setNetworkProgress",1),w(n),e}).catch(function(n){throw n})},parse:k,setVue:x,loadTranslation:w,loadFiles:function(n){var e=[];return n.forEach(function(n){var t=f(n,2),r=t[0],o=t[1];e.push(y(r,o))}),Promise.all(e).then(function(n){var e=[];return n.forEach(function(n){var t=f(n,2),r=(t[0],t[1].folder(/^[^/]+\/$/)[0].name);e.push(r.substring(0,r.length-1))}),k(n,"data",e)}).then(x)},files:l.files,sortByOrder:m}},npqa:function(n,e){},olkN:function(n,e,t){"use strict";var r=t("/5sW"),o=t("NYxO"),a=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r.default.use(o.a);var i=new o.a.Store({state:{difficulty:"normal",meta:{},metaVersion:0,loading:0,loadedLanguages:{},networkProgress:0,dataProgress:0,indexMounted:!1},mutations:{setDifficulty:function(n,e){n.difficulty=e},setMeta:function(n,e){n.meta=e,n.metaVersion=n.metaVersion+1},saveTranslation:function(n,e){var t=a(e,2),r=t[0],o=t[1];n.meta.translations[r]=o},setLoading:function(n,e){n.loading=e?n.loading+1:n.loading-1},setNetworkProgress:function(n,e){n.networkProgress=e},setDataProgress:function(n,e){n.dataProgress=e},loadedLanguage:function(n,e){n.loadedLanguages[e]=!0}}});e.a=i}},["NHnr"]);