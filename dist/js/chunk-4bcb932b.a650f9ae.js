(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bcb932b"],{"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):r(i(t))}},"0b42":function(t,e,n){var i=n("861d"),r=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),o=n("2d00"),s=r("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f57":function(t,e,n){"use strict";n("4a97")},"3b8d":function(t,e,n){"use strict";n.r(e);var i=n("7a23");Object(i["x"])("data-v-6ee98b53");var r={class:"student-works"},o=Object(i["i"])("h2",{class:"student-works__title"},"Учебные работы",-1),s={class:"student-works__wrapper"};function a(t,e,n,a,u,c){var l=Object(i["B"])("router-link"),f=Object(i["B"])("Filter"),d=Object(i["B"])("Gallery");return Object(i["u"])(),Object(i["h"])("section",r,[o,Object(i["k"])(l,{class:"student-works__close close-btn",to:"/"}),Object(i["i"])("div",s,[Object(i["k"])(f,{onChangeFilter:c.onChangeFilter},null,8,["onChangeFilter"]),Object(i["i"])("div",{class:Object(i["q"])(["student-works__gallery gallery",{"student-works__gallery--active":u.galleryActivator}])},[Object(i["k"])(d,{filter:u.activeFilter,filterDesc:u.activeFilterDescription,onHiddenMobile:c.changeGallery},null,8,["filter","filterDesc","onHiddenMobile"])],2)])])}Object(i["v"])();n("a4d3"),n("e01a");var u={class:"student-works__filter filter"},c=["id","onClick"];function l(t,e,n,r,o,s){return Object(i["u"])(),Object(i["h"])("div",u,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(o.types,(function(t){return Object(i["u"])(),Object(i["h"])("a",{class:Object(i["q"])(["filter__btn",{"filter__btn--active":o.activeFilter===t.title}]),href:"#",key:t.title,id:t.title,onClick:Object(i["K"])((function(e){return s.changeActiveFilter(t.title,t.description)}),["prevent"])},Object(i["F"])(t.description),11,c)})),128))])}var f=[{title:"website",description:"Сайты"},{title:"mobile",description:"Моб.приложения"},{title:"magazine",description:"Журналы"},{title:"poster",description:"Плакаты"}],d=f,h={name:"Filter",data:function(){return{types:d,activeFilter:"",activeFilterDescription:""}},methods:{changeActiveFilter:function(t,e){this.activeFilter=t,this.activeFilterDescription=e;var n={title:this.activeFilter,description:this.activeFilterDescription};this.$emit("changeFilter",n)}},mounted:function(){this.activeFilter=this.types[0].title,this.activeFilterDescription=this.types[0].description;var t={title:this.activeFilter,description:this.activeFilterDescription};this.$emit("changeFilter",t)}};n("8e91");h.render=l;var p=h,v={class:"glide"},m={class:"glide__track","data-glide-el":"track",ref:"glide"},g={key:0,class:"glide__slides"},b=["id","onClick"],y={href:"#",class:"gallery__link"},w=["src"],_={key:1,class:"gallery__item--empty",ref:"empty"},k={key:0,class:"glide__arrows","data-glide-el":"controls"},O=Object(i["i"])("button",{class:"glide__arrow glide__arrow--left","data-glide-dir":"<"},null,-1),j=Object(i["i"])("button",{class:"glide__arrow glide__arrow--right","data-glide-dir":">"},null,-1),S=[O,j],x={class:"mobile__gallery"},A={class:"student-works__title"},T={key:0,class:"mobile__gallery-list"},H=["id","onClick"],F={href:"#",class:"gallery__link"},C=["src"];function M(t,e,n,r,o,s){return Object(i["u"])(),Object(i["h"])(i["a"],null,[Object(i["i"])("div",v,[Object(i["i"])("div",m,[o.filteredWorks.length?(Object(i["u"])(),Object(i["h"])("ul",g,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(o.filteredWorks,(function(e){return Object(i["u"])(),Object(i["h"])("li",{class:"glide__slide gallery__item",key:e.id,id:e.id,onClick:Object(i["K"])((function(n){return t.$router.push("/work-review/"+e.id)}),["prevent"])},[Object(i["i"])("a",y,[Object(i["i"])("img",{src:e.main_image,class:"gallery__img"},null,8,w)])],8,b)})),128))])):(Object(i["u"])(),Object(i["h"])("div",_," Таких работ пока нет... ",512))],512),o.filteredWorks.length>1?(Object(i["u"])(),Object(i["h"])("div",k,S)):Object(i["g"])("",!0)]),Object(i["i"])("div",x,[Object(i["i"])("h2",A,Object(i["F"])(n.filterDesc),1),Object(i["i"])("a",{class:"student-works__close close-btn",href:"/student-works",onClick:e[0]||(e[0]=Object(i["K"])((function(){return s.hideMobile&&s.hideMobile.apply(s,arguments)}),["prevent"]))}),o.filteredWorks.length?(Object(i["u"])(),Object(i["h"])("ul",T,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(o.filteredWorks,(function(e){return Object(i["u"])(),Object(i["h"])("li",{class:"gallery__item",key:e.id,id:e.id,onClick:Object(i["K"])((function(n){return t.$router.push("/work-review/"+e.id)}),["prevent"])},[Object(i["i"])("a",F,[Object(i["i"])("img",{src:e.main_image,class:"gallery__img"},null,8,C)])],8,H)})),128))])):Object(i["g"])("",!0)])],64)}n("4de4"),n("d3b7");var D={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function P(t){console.error("[Glide warn]: "+t)}var E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},W=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},R=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0},G=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},N=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e};function B(t){return parseInt(t)}function q(t){return parseFloat(t)}function I(t){return"string"===typeof t}function $(t){var e="undefined"===typeof t?"undefined":E(t);return"function"===e||"object"===e&&!!t}function V(t){return"number"===typeof t}function K(t){return"function"===typeof t}function J(t){return"undefined"===typeof t}function Y(t){return t.constructor===Array}function X(t,e,n){var i={};for(var r in e)K(e[r])?i[r]=e[r](t,i,n):P("Extension must be a function");for(var o in i)K(i[o].mount)&&i[o].mount();return i}function Q(t,e,n){Object.defineProperty(t,e,n)}function U(t){return Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e[n],e}),{})}function Z(t,e){var n=z({},t,e);return e.hasOwnProperty("classes")&&(n.classes=z({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=z({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=z({},t.breakpoints,e.breakpoints)),n}var tt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L(this,t),this.events=e,this.hop=e.hasOwnProperty}return W(t,[{key:"on",value:function(t,e){if(Y(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(Y(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),et=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};L(this,t),this._c={},this._t=[],this._e=new tt,this.disabled=!1,this.selector=e,this.settings=Z(D,n),this.index=this.settings.startAt}return W(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),$(t)?this._c=X(this,t,this._e):P("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Y(t)?this._t=t:P("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=Z(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){$(t)?this._o=t:P("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=B(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function nt(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,i=e.steps,r=e.direction,o=V(B(i))&&0!==B(i);switch(r){case">":">"===i?t.index=n:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):o?t.index+=Math.min(n-t.index,-B(i)):t.index++;break;case"<":"<"===i?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=n):o?t.index-=Math.min(t.index,B(i)):t.index--;break;case"=":t.index=i;break;default:P("Invalid direction pattern ["+r+i+"] has been used");break}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return Q(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?B(e)?B(e):e:0}}}),Q(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(B(n.perView)-1)+B(n.focusAt):i-1}}),Q(i,"offset",{get:function(){return this._o}}),i}function it(){return(new Date).getTime()}function rt(t,e,n){var i=void 0,r=void 0,o=void 0,s=void 0,a=0;n||(n={});var u=function(){a=!1===n.leading?0:it(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=it();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,o=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(u,l)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}var ot={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function st(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[ot[o][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?r[ot[o][1]]=this.value/2+"px":r[ot[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return Q(i,"value",{get:function(){return B(t.settings.gap)}}),Q(i,"grow",{get:function(){return i.value*(e.Sizes.length-1)}}),Q(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],rt((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i}function at(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function ut(t){return!!(t&&t instanceof window.HTMLElement)}var ct='[data-glide-el="track"]';function lt(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector(ct),this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.cloneSlide)}))}};return Q(n,"root",{get:function(){return n._r},set:function(t){I(t)&&(t=document.querySelector(t)),ut(t)?n._r=t:P("Root element must be a existing Html node")}}),Q(n,"track",{get:function(){return n._t},set:function(t){ut(t)?n._t=t:P("Could not find track element. Please use "+ct+" attribute.")}}),Q(n,"wrapper",{get:function(){return n.track.children[0]}}),n}function ft(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return Q(i,"value",{get:function(){return i._v},set:function(t){$(t)?(t.before=B(t.before),t.after=B(t.after)):t=B(t),i._v=t}}),Q(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return $(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i}function dt(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return Q(i,"offset",{get:function(){return i._o},set:function(t){i._o=J(t)?0:B(t)}}),Q(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),Q(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i}function ht(t,e,n){var i={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return Q(i,"length",{get:function(){return e.Html.slides.length}}),Q(i,"width",{get:function(){return e.Html.root.offsetWidth}}),Q(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),Q(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i}function pt(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),at(i).forEach((function(t){t.classList.remove(n.activeSlide)})))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(n.activeSlide)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i}function vt(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=+!!t.settings.peek,u=o+a,c=i.slice(0,u),l=i.slice(-u),f=0;f<Math.max(1,Math.floor(o/i.length));f++){for(var d=0;d<c.length;d++){var h=c[d].cloneNode(!0);h.classList.add(s.cloneSlide),n.push(h)}for(var p=0;p<l.length;p++){var v=l[p].cloneNode(!0);v.classList.add(s.cloneSlide),n.unshift(v)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),u=e.Sizes.slideWidth+"px",c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return Q(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i}var mt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L(this,t),this.listeners=e}return W(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];I(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];I(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();function gt(t,e,n){var i=new mt,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,rt((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r}var bt=["ltr","rtl"],yt={">":"<","<":">","=":"="};function wt(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(yt[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return Q(i,"value",{get:function(){return i._v},set:function(t){bt.indexOf(t)>-1?i._v=t:P("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i}function _t(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function kt(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function Ot(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function jt(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return $(i)?n-i.before:n-i}return n}}}function St(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}function xt(t,e,n){var i=[kt,Ot,jt,St].concat(t._t,[_t]);return{mutate:function(r){for(var o=0;o<i.length;o++){var s=i[o];K(s)&&K(s().modify)?r=s(t,e,n).modify(r):P("Transformer should be a function that returns an object with `modify()` method")}return r}}}function At(t,e,n){var i={set:function(n){var i=xt(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",(function(r){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after((function(){n.emit("translate.jump"),i.set(a*(s-1))})),i.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after((function(){n.emit("translate.jump"),i.set(0)})),i.set(a*s+o*s)):i.set(r.movement)})),n.on("destroy",(function(){i.remove()})),i}function Tt(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return Q(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r}var Ht=!1;try{var Ft=Object.defineProperty({},"passive",{get:function(){Ht=!0}});window.addEventListener("testPassive",null,Ft),window.removeEventListener("testPassive",null,Ft)}catch(ee){}var Ct=Ht,Mt=["touchstart","mousedown"],Dt=["touchmove","mousemove"],Pt=["touchend","touchcancel","mouseup","mouseleave"],Et=["mousedown","mousemove","mouseup","mouseleave"];function Lt(t,e,n){var i=new mt,r=0,o=0,s=0,a=!1,u=!!Ct&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=B(i.pageX),s=B(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,f=this.touches(i),d=B(f.pageX)-o,h=B(f.pageY)-s,p=Math.abs(d<<2),v=Math.abs(h<<2),m=Math.sqrt(p+v),g=Math.sqrt(v);if(r=Math.asin(g/m),!(180*r/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(d*q(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=this.touches(i),u=this.threshold(i),c=a.pageX-o,l=180*r/Math.PI,f=Math.round(c/e.Sizes.slideWidth);this.enable(),c>u&&l<s.touchAngle?(s.perTouch&&(f=Math.min(f,B(s.perTouch))),e.Direction.is("rtl")&&(f=-f),e.Run.make(e.Direction.resolve("<"+f))):c<-u&&l<s.touchAngle?(s.perTouch&&(f=Math.max(f,-B(s.perTouch))),e.Direction.is("rtl")&&(f=-f),e.Run.make(e.Direction.resolve(">"+f))):e.Move.make(),e.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings;r.swipeThreshold&&i.on(Mt[0],e.Html.wrapper,(function(t){n.start(t)}),u),r.dragThreshold&&i.on(Mt[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(Mt[0],e.Html.wrapper,u),i.off(Mt[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(Dt,e.Html.wrapper,rt((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(Dt,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(Pt,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(Pt,e.Html.wrapper)},touches:function(t){return Et.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return Et.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c}function Wt(t,e,n){var i=new mt,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r}function zt(t,e,n){var i=new mt,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return Q(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s}var Rt='[data-glide-el="controls[nav]"]',Gt='[data-glide-el^="controls"]';function Nt(t,e,n){var i=new mt,r=!!Ct&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll(Rt),this._c=e.Html.root.querySelectorAll(Gt),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&(i.classList.add(n.classes.activeNav),at(i).forEach((function(t){t.classList.remove(n.classes.activeNav)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return Q(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o}function Bt(t,e,n){var i=new mt,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r}function qt(t,e,n){var i=new mt,r={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&J(this._i)&&(this._i=setInterval((function(){n.stop(),e.Run.make(">"),n.start()}),this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t.stop()})),i.on("mouseout",e.Html.root,(function(){t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return Q(r,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return B(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","pause","destroy","swipe.start","update"],(function(){r.stop()})),n.on(["run.after","play","swipe.end"],(function(){r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r}function It(t){return $(t)?U(t):(P("Breakpoints option must be an object"),{})}function $t(t,e,n){var i=new mt,r=t.settings,o=It(r.breakpoints),s=z({},r),a={match:function(t){if("undefined"!==typeof window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return z(r,a.match(o)),i.on("resize",window,rt((function(){t.settings=Z(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=It(o),s=z({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}var Vt={Html:lt,Translate:At,Transition:Tt,Direction:wt,Peek:ft,Sizes:ht,Gaps:st,Move:dt,Clones:vt,Resize:gt,Build:pt,Run:nt,Swipe:Lt,Images:Wt,Anchors:zt,Controls:Nt,Keyboard:Bt,Autoplay:qt,Breakpoints:$t},Kt=function(t){function e(){return L(this,e),N(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return G(e,t),W(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,z({},Vt,t))}}]),e}(et),Jt=Kt,Yt=n("e37f"),Xt=function(t){for(var e=[],n=0;n<t;n++){var i={};i.id="".concat(Object(Yt["a"])()),i.type=d[Object(Yt["b"])(0,d.length-1)].title,i.main_image="https://imgholder.ru/720x480/9EA2A3/F5F5F5.jpg&text=WORK+".concat(n+1),e.push(i)}return e},Qt=Xt,Ut={name:"Gallery",props:{filter:{type:String,required:!0},filterDesc:{type:String,required:!0}},data:function(){return{works:Qt(Object(Yt["b"])(12,30)),gilde:null,filteredWorks:[]}},methods:{setupSlider:function(){this.filteredWorks.length&&(this.glide=new Jt(".gallery",{type:1===this.filteredWorks.length?"slider":"carousel",focusAt:"center",perView:2,gap:100,peek:80,breakpoints:{1800:{gap:80,peek:-10},1700:{gap:75,peek:-29},1600:{gap:70,peek:-48},1500:{gap:65,peek:-67},1400:{gap:60,peek:-76},1300:{gap:55,peek:-95},1200:{gap:50,peek:-114},1100:{gap:45,peek:-133},1e3:{gap:40,peek:-152},900:{gap:40,peek:-171},800:{gap:40,peek:-200}},rewind:!1,startAt:0}).mount())},destroySlider:function(){this.glide&&this.glide.destroy(),this.glide=null},filterWork:function(){var t=this;this.filteredWorks=this.works.filter((function(e){return e.type===t.filter}))},hideMobile:function(){this.$emit("hiddenMobile",!0)}},mounted:function(){this.filterWork()},updated:function(){var t=this;setTimeout((function(){t.destroySlider(),t.setupSlider()}),300)},watch:{filter:function(){var t=this;this.$refs.glide.classList.contains("glide__slides--activation")&&this.$refs.glide.classList.remove("glide__slides--activation"),setTimeout((function(){t.filterWork(),t.$refs.glide.classList.add("glide__slides--activation")}),300)}}};n("1f57");Ut.render=M;var Zt=Ut,te={name:"StudentWorks",components:{Filter:p,Gallery:Zt},data:function(){return{activeFilter:"",activeFilterDescription:"",galleryActivator:!1,timer:!1}},methods:{onChangeFilter:function(t){this.activeFilter=t.title,this.activeFilterDescription=t.description,this.timer&&(this.galleryActivator=!0)},changeGallery:function(t){t&&(this.galleryActivator=!1)}},mounted:function(){var t=this;setTimeout((function(){t.timer=!0}),0)}};n("bc94");te.render=a,te.__scopeId="data-v-6ee98b53";e["default"]=te},"428f":function(t,e,n){var i=n("da84");t.exports=i},"4a11":function(t,e,n){},"4a97":function(t,e,n){},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,o=n("1dde"),s=o("filter");i({target:"Array",proto:!0,forced:!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||s(e,t,{value:o.f(t)})}},"8e91":function(t,e,n){"use strict";n("4a11")},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),u=n("4930"),c=n("d039"),l=n("5135"),f=n("e8b5"),d=n("861d"),h=n("d9b5"),p=n("825a"),v=n("7b0b"),m=n("fc6a"),g=n("a04b"),b=n("577e"),y=n("5c6c"),w=n("7c73"),_=n("df75"),k=n("241c"),O=n("057f"),j=n("7418"),S=n("06cf"),x=n("9bf2"),A=n("d1e7"),T=n("9112"),H=n("6eeb"),F=n("5692"),C=n("f772"),M=n("d012"),D=n("90e3"),P=n("b622"),E=n("e538"),L=n("746f"),W=n("d44e"),z=n("69f3"),R=n("b727").forEach,G=C("hidden"),N="Symbol",B="prototype",q=P("toPrimitive"),I=z.set,$=z.getterFor(N),V=Object[B],K=r.Symbol,J=o("JSON","stringify"),Y=S.f,X=x.f,Q=O.f,U=A.f,Z=F("symbols"),tt=F("op-symbols"),et=F("string-to-symbol-registry"),nt=F("symbol-to-string-registry"),it=F("wks"),rt=r.QObject,ot=!rt||!rt[B]||!rt[B].findChild,st=a&&c((function(){return 7!=w(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=Y(V,e);i&&delete V[e],X(t,e,n),i&&t!==V&&X(V,e,i)}:X,at=function(t,e){var n=Z[t]=w(K[B]);return I(n,{type:N,tag:t,description:e}),a||(n.description=e),n},ut=function(t,e,n){t===V&&ut(tt,e,n),p(t);var i=g(e);return p(n),l(Z,i)?(n.enumerable?(l(t,G)&&t[G][i]&&(t[G][i]=!1),n=w(n,{enumerable:y(0,!1)})):(l(t,G)||X(t,G,y(1,{})),t[G][i]=!0),st(t,i,n)):X(t,i,n)},ct=function(t,e){p(t);var n=m(e),i=_(n).concat(pt(n));return R(i,(function(e){a&&!ft.call(n,e)||ut(t,e,n[e])})),t},lt=function(t,e){return void 0===e?w(t):ct(w(t),e)},ft=function(t){var e=g(t),n=U.call(this,e);return!(this===V&&l(Z,e)&&!l(tt,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,G)&&this[G][e])||n)},dt=function(t,e){var n=m(t),i=g(e);if(n!==V||!l(Z,i)||l(tt,i)){var r=Y(n,i);return!r||!l(Z,i)||l(n,G)&&n[G][i]||(r.enumerable=!0),r}},ht=function(t){var e=Q(m(t)),n=[];return R(e,(function(t){l(Z,t)||l(M,t)||n.push(t)})),n},pt=function(t){var e=t===V,n=Q(e?tt:m(t)),i=[];return R(n,(function(t){!l(Z,t)||e&&!l(V,t)||i.push(Z[t])})),i};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,e=D(t),n=function(t){this===V&&n.call(tt,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),st(this,e,y(1,t))};return a&&ot&&st(V,e,{configurable:!0,set:n}),at(e,t)},H(K[B],"toString",(function(){return $(this).tag})),H(K,"withoutSetter",(function(t){return at(D(t),t)})),A.f=ft,x.f=ut,S.f=dt,k.f=O.f=ht,j.f=pt,E.f=function(t){return at(P(t),t)},a&&(X(K[B],"description",{configurable:!0,get:function(){return $(this).description}}),s||H(V,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),R(_(it),(function(t){L(t)})),i({target:N,stat:!0,forced:!u},{for:function(t){var e=b(t);if(l(et,e))return et[e];var n=K(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!h(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),i({target:"Object",stat:!0,forced:!u,sham:!a},{create:lt,defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:c((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),J){var vt=!u||c((function(){var t=K();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));i({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var i,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=e,(d(e)||void 0!==t)&&!h(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!h(e))return e}),r[1]=e,J.apply(null,r)}})}K[B][q]||T(K[B],q,K[B].valueOf),W(K,N),M[G]=!0},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),u=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,l=4==t,f=6==t,d=7==t,h=5==t||f;return function(p,v,m,g){for(var b,y,w=o(p),_=r(w),k=i(v,m,3),O=s(_.length),j=0,S=g||a,x=e?S(p,O):n||d?S(p,0):void 0;O>j;j++)if((h||j in _)&&(b=_[j],y=k(b,j,w),t))if(e)x[j]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:u.call(x,b)}else switch(t){case 4:return!1;case 7:u.call(x,b)}return f?-1:c||l?l:x}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},bc94:function(t,e,n){"use strict";n("e5bb")},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),s=n("5135"),a=n("861d"),u=n("9bf2").f,c=n("e893"),l=o.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};c(d,l);var h=d.prototype=l.prototype;h.constructor=d;var p=h.toString,v="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(f,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}},e37f:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var i=function(t,e){return Math.floor(Math.random()*(e+1-t)+t)},r=function(){return Date.now()+parseInt(1e3*Math.random(),10)}},e538:function(t,e,n){var i=n("b622");e.f=i},e5bb:function(t,e,n){},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-4bcb932b.a650f9ae.js.map