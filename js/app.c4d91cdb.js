(function(e){function t(t){for(var r,a,i=t[0],c=t[1],f=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-04b77f8f":"ff6df74a","chunk-4bcb932b":"a650f9ae","chunk-7f4972db":"f2bb7633"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-04b77f8f":1,"chunk-4bcb932b":1,"chunk-7f4972db":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-04b77f8f":"a57c099e","chunk-4bcb932b":"f0a5f2ce","chunk-7f4972db":"08fd4af4"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var f=u[i],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){f=d[i],l=f.getAttribute("data-href");if(l===r||l===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],s.parentNode.removeChild(s),n(u)},s.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(s)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/student-designer-portfolio/",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,u){var i=Object(r["B"])("router-view");return Object(r["u"])(),Object(r["f"])(i,null,{default:Object(r["I"])((function(e){var t=e.Component;return[Object(r["k"])(r["c"],{mode:"in-out","leave-active-class":"animate__animated animate__fadeOut animate__delay-0s","enter-active-class":"animate__animated animate__bounceInDown animate__delay-0s",duration:o.duration},{default:Object(r["I"])((function(){return[(Object(r["u"])(),Object(r["f"])(r["b"],{include:["Home","StudentWorks"]},[(Object(r["u"])(),Object(r["f"])(Object(r["D"])(t)))],1024))]})),_:2},1032,["duration"])]})),_:1})}n("ac1f"),n("1276");var o={data:function(){return{duration:{enter:700,leave:300}}},watch:{$route:function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;e.meta.title&&(document.title=e.meta.title),n<r?(this.duration.enter=20,this.duration.leave=400):n===r&&"/"===e.path?(this.duration.enter=20,this.duration.leave=500):(this.duration.enter=800,this.duration.leave=100)}}};n("fe9b");o.render=a;var u=o,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),c=[{path:"/",name:"Home",meta:{transitionName:"home-fade",title:"Главная"},component:function(){return n.e("chunk-04b77f8f").then(n.bind(null,"b3d7"))}},{path:"/student-works",name:"StudentWorks",meta:{title:"Обзор работ"},component:function(){return n.e("chunk-4bcb932b").then(n.bind(null,"3b8d"))}},{path:"/work-review/:id",name:"workReview",component:function(){return n.e("chunk-7f4972db").then(n.bind(null,"8702"))}}],f=Object(i["a"])({history:Object(i["b"])("/student-designer-portfolio/"),routes:c}),l=f,d=n("9a7e");Object(r["e"])(u).use(l).use(d["a"]).mount("#app")},b9fa:function(e,t,n){},fe9b:function(e,t,n){"use strict";n("b9fa")}});
//# sourceMappingURL=app.c4d91cdb.js.map