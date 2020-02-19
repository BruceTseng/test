(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(t,e,r){var content=r(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("9e7293fc",content,!0,{sourceMap:!1})},192:function(t,e,r){t.exports=function(){"use strict";function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var t="sticky-events--sentinel-top",e="sticky-events--sentinel-bottom",r=function(){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.container,r=void 0===e?document:e,i=t.enabled,s=void 0===i||i,n=t.stickySelector,o=void 0===n?".sticky-events":n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),this.container=r,this.observers=[],this.stickyElements=Array.from(document.querySelectorAll(o)),this.stickySelector=o,this.state=new Map,s&&this.enableEvents()}var r,n;return r=a,(n=[{key:"setState",value:function(r){this.state.get(r)||this.state.set(r,{isSticky:!1,headerSentinel:this.addSentinel(r,t),footerSentinel:this.addSentinel(r,e)})}},{key:"enableEvents",value:function(){var t=this;window.self===window.top?(this.observers={header:this.createHeaderObserver(),footer:this.createFooterObserver()},this.stickyElements.forEach((function(e){t.setState(e)}))):console.warn("StickyEvents: There are issues with using IntersectionObservers in an iframe, canceling initialization. Please see https://github.com/w3c/IntersectionObserver/issues/183")}},{key:"disableEvents",value:function(t){var e=this;0<arguments.length&&void 0!==t&&!t||this.stickyElements.forEach((function(t){return e.fire(!1,t)})),Object.values(this.observers).forEach((function(t){return t.disconnect()})),this.observers=null,this.state.clear()}},{key:"addStickies",value:function(t){var e,r=this;(e=this.stickyElements).push.apply(e,function(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t)),this.stickyElements.forEach((function(t){return r.setState(t)}))}},{key:"addSticky",value:function(t){this.stickyElements.push(t),this.setState(t)}},{key:"addSentinel",value:function(r,n){var o=document.createElement("div"),i=r.parentElement;switch(r.style.cssText="\n        position: -webkit-sticky;\n        position: sticky;\n      ",o.classList.add("sticky-events--sentinel",n),Object.assign(o.style,{left:0,position:"absolute",right:0,visibility:"hidden"}),n){case t:i.insertBefore(o,r),Object.assign(o.style,this.getSentinelPosition(r,o,n),{position:"relative"}),this.observers.header.observe(o);break;case e:i.appendChild(o),Object.assign(o.style,this.getSentinelPosition(r,o,n)),this.observers.footer.observe(o)}return o}},{key:"createHeaderObserver",value:function(){var t=this;return new IntersectionObserver((function(e){e.forEach((function(e){var r=e.boundingClientRect,n=e.isIntersecting,i=e.rootBounds,s=e.target.parentElement,o=s.querySelector(t.stickySelector);s.style.position="relative",r.bottom<i.bottom&&n?t.fire(!1,o):r.bottom<=i.top&&!n&&t.fire(!0,o)}))}),Object.assign({threshold:[0]},!(this.container instanceof HTMLDocument)&&{root:this.container}))}},{key:"createFooterObserver",value:function(){var t=this;return new IntersectionObserver((function(e){e.forEach((function(e){var r=e.boundingClientRect,n=e.isIntersecting,i=e.rootBounds,s=e.target.parentElement.querySelector(t.stickySelector);r.top<i.top&&r.bottom<i.bottom&&!n?t.fire(!1,s):r.bottom>i.top&&t.isSticking(s)&&n&&t.fire(!0,s)}))}),Object.assign({threshold:[1]},!(this.container instanceof HTMLDocument)&&{root:this.container}))}},{key:"fire",value:function(t,e){this.state.get(e).isSticky!==t&&(e.dispatchEvent(new CustomEvent(a.CHANGE,{detail:{isSticky:t},bubbles:!0})),e.dispatchEvent(new CustomEvent(t?a.STUCK:a.UNSTUCK,{bubbles:!0})),this.state.set(e,{isSticky:t}))}},{key:"getSentinelPosition",value:function(r,n,o){var i=window.getComputedStyle(r),s=window.getComputedStyle(r.parentElement);switch(o){case t:return{top:"calc(".concat(i.getPropertyValue("top")," * -1)"),height:1};case e:var c=parseInt(s.paddingTop);return{bottom:i.top,height:"".concat(r.getBoundingClientRect().height+c,"px")}}}},{key:"isSticking",value:function(t){var e=t.previousElementSibling,r=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top;return Math.round(Math.abs(r-i))!==Math.abs(parseInt(window.getComputedStyle(e).getPropertyValue("top")))}}])&&i(r.prototype,n),a}();return r.CHANGE="sticky-change",r.STUCK="sticky-stuck",r.UNSTUCK="sticky-unstuck",r}()},193:function(t,e,r){"use strict";var n=r(3),o=r(19),c=r(24),_=r(118),l=r(62),v=r(11),m=r(44).f,f=r(63).f,d=r(10).f,h=r(194).trim,y=n.Number,C=y,k=y.prototype,E="Number"==c(r(79)(k)),S="trim"in String.prototype,O=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=S?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,_=e.slice(2),i=0,v=_.length;i<v;i++)if((code=_.charCodeAt(i))<48||code>o)return NaN;return parseInt(_,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(E?v((function(){k.valueOf.call(r)})):"Number"!=c(r))?_(new C(O(e)),r,y):O(e)};for(var w,N=r(8)?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)o(C,w=N[x])&&!o(y,w)&&d(y,w,f(C,w));y.prototype=k,k.constructor=y,r(12)(n,"Number",y)}},194:function(t,e,r){var n=r(7),o=r(23),c=r(11),_=r(195),l="["+_+"]",v=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),f=function(t,e,r){var o={},l=c((function(){return!!_[t]()||"​"!="​"[t]()})),v=o[t]=l?e(d):_[t];r&&(o[r]=v),n(n.P+n.F*l,"String",o)},d=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},195:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},196:function(t,e,r){"use strict";var n=r(189);r.n(n).a},197:function(t,e,r){(e=r(42)(!1)).push([t.i,".stars{display:inline-block;vertical-align:sub}.stars ul{direction:rtl;text-align:left;font-size:0}.stars ul li{display:inline-block;width:.5em;overflow:hidden;text-indent:-.5em;color:#fff;padding:0;transition:.5s;font-size:1.125rem;cursor:pointer}.stars ul li.active{color:#f5a623}.stars ul li:nth-child(odd){text-indent:0;margin-right:4px}",""]),t.exports=e},202:function(t,e,r){"use strict";r.r(e);r(80),r(31),r(20),r(14),r(46);var n=r(58),o=(r(45),r(5)),c=r(192),_=r.n(c),l=(r(193),{props:{score:{type:Number,default:0}},computed:{plus:function(){return 2*this.score},minus:function(){return 10-2*this.score}}}),v=(r(196),r(22)),m=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stars"},[r("ul",[t._l(t.minus,(function(e,n){return r("li",{key:n},[t._v("★")])})),t._v(" "),t._l(t.plus,(function(e,n){return r("li",{key:n,staticClass:"active"},[t._v("★")])}))],2)])}),[],!1,null,null,null).exports;function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=null,y={components:{Stars:m},data:function(){return{program:{startDateTime:0,endDateTime:0},recommendPrograms:[]}},computed:{eventNoteContent:function(){if(this.program&&this.program.eventVenues&&this.program.eventVenues.length>0){var t=this.program.eventVenues[0];return t&&t.eventNoteContent?t.eventNoteContent:""}return""},eventNoteNotice:function(){if(this.program&&this.program.eventVenues&&this.program.eventVenues.length>0){var t=this.program.eventVenues[0];return t&&t.eventNoteNotice?t.eventNoteNotice:""}return""},ticketingInfoContent:function(){if(this.program&&this.program.eventVenues&&this.program.eventVenues.length>0){var t=this.program.eventVenues[0];return t&&t.ticketingInfoContent?t.ticketingInfoContent:""}return""},refundAgreement:function(){return this.program&&this.program.refundAgreement?this.program.refundAgreement:""}},mounted:function(){(h=new _.a({stickySelector:".l-program__functions"})).stickyElements.forEach((function(t){t.addEventListener(_.a.CHANGE,(function(e){t.classList.toggle("isSticky",e.detail.isSticky)}))}))},beforeDestroy:function(){h.disableEvents()},beforeMount:function(){this.fetchSomething(),this.fetchRecommendProgrmas()},methods:{fetchSomething:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("api/programs/1228149766812614657");case 2:r=e.sent,t.program=r.result,(n=t.program.programOrganizers.map((function(t,e){return"主辦單位"===t.type?t.key=0:"協辦單位"===t.type?t.key=1:"贊助單位"===t.type?t.key=2:"其他主辦單位"===t.type?t.key=3:t.key=e+4,d({},t)}))).sort((function(a,b){return a.key-b.key})),t.program.programOrganizers=n;case 7:case"end":return e.stop()}}),e)})))()},fetchRecommendProgrmas:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("api/programs");case 2:r=e.sent,t.recommendPrograms=r.result.data;case 4:case"end":return e.stop()}}),e)})))()}}},C=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.program.id?r("div",[r("section",{staticClass:"l-header__bars"},[r("nav",{staticClass:"col-container"},[r("div",{staticClass:"l-header-section"},[r("div",{staticClass:"l-header-section__left"},[r("ul",[r("li",[t._v(t._s(t.$t("header.main")))]),t._v(" "),r("li",[t._v(t._s(t.$t("header.category")))]),t._v(" "),r("li",[t._v(t._s(t.$t("header.event")))]),t._v(" "),r("li",[t._v(t._s(t.$t("header.annoucement")))])])]),t._v(" "),r("div",{staticClass:"l-header-section__right"},[r("ul",[r("li",{staticClass:"icon"},[r("fa",{attrs:{icon:["fas","search"]}})],1),t._v(" "),r("li",{staticClass:"icon"},["zw"===t.$i18n.locale?r("NuxtLink",{staticClass:"Header__Link",attrs:{to:"/en"+t.$route.fullPath,"active-class":"none",exact:""}},[r("fa",{attrs:{icon:["fas","language"]}})],1):r("NuxtLink",{staticClass:"Header__Link",attrs:{to:t.$route.fullPath.replace(/^\/[^\/]+/,""),"active-class":"none",exact:""}},[r("fa",{attrs:{icon:["fas","language"]}})],1)],1),t._v(" "),r("li",{staticClass:"icon"},[r("fa",{attrs:{icon:["fas","shopping-cart"]}})],1),t._v(" "),r("li",[t._v("註冊/登入")])])])])])]),t._v(" "),r("section",{staticClass:"l-program__introduce col-container"},[r("div",{staticClass:"l-program__introduce--left"},[r("div",{staticClass:"introduce--bg"}),t._v(" "),r("img",{staticClass:"program-logo",attrs:{src:t.program.imageUrl,alt:""}}),t._v(" "),r("div",{staticClass:"program__brief"},[r("span",{staticClass:"program__brief--title"},[t._v(t._s(t.program.name))]),t._v(" "),r("span",[r("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.time"))+"：")]),t._v("\n          "+t._s(t._f("formatDate")(t.program.startDateTime,"yyyy-MM-dd"))+" -\n          "+t._s(t._f("formatDate")(t.program.endDateTime,"yyyy-MM-dd")))]),t._v(" "),r("span",[r("span",{staticClass:"program__brief__category"},[t._v("\n            "+t._s(t.$t("program.score"))+"：\n          ")]),t._v(" "),r("span",{staticClass:"program__brief__scores"},[t._v("\n            "+t._s(t.program.userRating)+"\n          ")]),t._v(" "),r("Stars",{attrs:{score:"3.5"}})],1),t._v(" "),r("span",[r("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.level"))+"：")]),t._v("建議年齡 13 歲以上")]),t._v(" "),r("span",[r("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.price"))+"：")]),t._v("\n          "+t._s("$"+t.program.minPrice)+" - "+t._s("$"+t.program.maxPrice)+"\n        ")]),t._v(" "),r("span",[r("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.organizer"))+"：")]),r("a",{attrs:{href:""}},[t._v("C MUSICAL")]),t._v(" 0919-941-611")])]),t._v(" "),r("ul",{staticClass:"program__brief--tags"},t._l(t.program.tags,(function(e,n){return r("li",{key:n},[t._v(t._s(e))])})),0)]),t._v(" "),r("div",{staticClass:"l-program__introduce--right"},[r("a",{attrs:{href:""}},[t._v("立即購買")]),t._v(" "),r("span",{staticClass:"icon__social"},[r("fa",{attrs:{icon:["fas","link"]}})],1),t._v(" "),r("span",{staticClass:"icon__social"},[r("fa",{attrs:{icon:["far","heart"]}})],1)])]),t._v(" "),t._m(0),t._v(" "),r("section",{staticClass:"l-program__contents col-container"},[r("div",[r("div",{staticClass:"content content__introduce"},[r("span",{staticClass:"content__title"},[t._v("節目介紹")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content__content"},[r("div",{domProps:{innerHTML:t._s(t.program.description)}})])]),t._v(" "),r("div",{staticClass:"content content__discount"},[r("span",{staticClass:"content__title"},[t._v("折扣優惠")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content__content"},[r("div",{domProps:{innerHTML:t._s(t.program.saleInfoContent)}})])]),t._v(" "),r("div",{staticClass:"content content__introduce"},[r("span",{staticClass:"content__title"},[t._v("展演須知")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content__content"},[r("div",{domProps:{innerHTML:t._s(t.eventNoteContent)}}),t._v(" "),r("div",{staticClass:"content__content__notice"},[r("span",{staticClass:"content__content__notice__title"},[r("fa",{attrs:{icon:["fas","exclamation-circle"]}}),t._v("溫馨提醒")],1),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.eventNoteNotice)}})])])]),t._v(" "),r("div",{staticClass:"content content__introduce"},[r("span",{staticClass:"content__title"},[t._v("購票須知")]),t._v(" "),r("a",{staticClass:"content__more"},[t._v("查看")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content__content"},[r("div",{domProps:{innerHTML:t._s(t.ticketingInfoContent)}})])]),t._v(" "),r("div",{staticClass:"content content__introduce"},[r("span",{staticClass:"content__title"},[t._v("退換須知")]),t._v(" "),r("a",{staticClass:"content__more"},[t._v("查看")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content__content"},[r("div",{domProps:{innerHTML:t._s(t.refundAgreement)}})])]),t._v(" "),r("div",{staticClass:"content content__introduce"},[r("span",{staticClass:"content__title"},[t._v("相關單位")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content__content"},t._l(t.program.programOrganizers,(function(e,n){return r("div",{key:n},[r("div",{staticClass:"programOrganizers__title"},[t._v(t._s(e.type))]),t._v(" "),r("ul",t._l(e.info,(function(p,i){return r("li",{key:i,staticClass:"programOrganizers__organizer"},[r("a",{attrs:{href:p.websiteUrl}},[r("img",{attrs:{src:p.logoUrl}})])])})),0)])})),0)])]),t._v(" "),r("div",[r("div",{staticClass:"recommend"},[r("span",{staticClass:"recommend__title"},[t._v("為您推薦")]),t._v(" "),r("ul",t._l(t.recommendPrograms,(function(rp,e){return r("li",{key:e,staticClass:"recommend__program"},[r("img",{staticClass:"recommend__program__logo",attrs:{src:rp.imageUrl,alt:""}}),t._v(" "),r("div",{staticClass:"recommend__program__description"},[r("span",{staticClass:"recommend__program__title"},[t._v(t._s(rp.name))]),t._v(" "),r("span",{staticClass:"recommend__program__date"},[t._v(t._s(t._f("formatDate")(rp.startDateTime,"yyyy-MM-dd"))+"\n              ")])])])})),0)]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"l-program__functions"},[r("div",{staticClass:"l-program__functions--menus col-container"},[r("ul",[r("li",[r("a",{staticClass:"active",attrs:{href:""}},[t._v("場次購票")])]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[t._v("節目介紹")])]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[t._v("折扣優惠")])]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[t._v("展演須知")])]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[t._v("評論評分")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"history"},[r("span",{staticClass:"history__title"},[t._v("瀏覽紀錄")]),t._v(" "),r("ul",[r("li",{staticClass:"history__program"},[r("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581548936925-407b8c676603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",alt:""}}),t._v(" "),r("div",{staticClass:"history__program__description"},[r("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),r("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),r("li",{staticClass:"history__program"},[r("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581700598738-c0743919eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:""}}),t._v(" "),r("div",{staticClass:"history__program__description"},[r("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),r("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),r("li",{staticClass:"history__program"},[r("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581636624937-a31682a6ca1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""}}),t._v(" "),r("div",{staticClass:"history__program__description"},[r("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),r("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),r("li",{staticClass:"history__program"},[r("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1754&q=80",alt:""}}),t._v(" "),r("div",{staticClass:"history__program__description"},[r("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),r("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),r("li",{staticClass:"history__program"},[r("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581682100477-d2a6bfc7c6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""}}),t._v(" "),r("div",{staticClass:"history__program__description"},[r("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),r("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"l-footer"},[r("footer",{staticClass:"l-footer-container col-container"},[r("div",{staticClass:"l-footer__menus"},[r("ul",[r("li",[t._v("關於我們")]),t._v(" "),r("li",[t._v("服務據點")]),t._v(" "),r("li",[t._v("隱私政策")]),t._v(" "),r("li",[t._v("行銷合作")]),t._v(" "),r("li",[t._v("連絡信箱")]),t._v(" "),r("li",[t._v("友站連結")])])]),t._v(" "),r("div",{staticClass:"l-footer__contact"},[r("div",[r("span",[t._v("台北")]),t._v(" "),r("span",[t._v("電話 02-12345678")]),t._v(" "),r("span",[t._v("每日 9:00-20:00")]),t._v(" "),r("span",[t._v("售票處時間 9:00-20:00")])]),t._v(" "),r("div",[r("span",[t._v("台中")]),t._v(" "),r("span",[t._v("電話 02-12345678")]),t._v(" "),r("span",[t._v("每日 9:00-20:00")]),t._v(" "),r("span",[t._v("售票處時間 9:00-20:00")])]),t._v(" "),r("div",[r("span",[t._v("台南")]),t._v(" "),r("span",[t._v("電話 02-12345678")]),t._v(" "),r("span",[t._v("每日 9:00-20:00")]),t._v(" "),r("span",[t._v("售票處時間 9:00-20:00")])]),t._v(" "),r("div",[r("span",[t._v("高雄")]),t._v(" "),r("span",[t._v("電話 02-12345678")]),t._v(" "),r("span",[t._v("每日 9:00-20:00")]),t._v(" "),r("span",[t._v("售票處時間 9:00-20:00")])])]),t._v(" "),r("div",{staticClass:"l-footer__copyright"},[t._v("\n        OpenArtsPlus all rights reserved.\n      ")])])])}],!1,null,null,null);e.default=C.exports}}]);