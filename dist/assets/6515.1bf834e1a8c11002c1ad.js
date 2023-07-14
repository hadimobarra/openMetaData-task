/*! For license information please see 6515.1bf834e1a8c11002c1ad.js.LICENSE.txt */
(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[6515],{10801:function(e,t,n){var r,o,i,a,c;window,e.exports=(r=n(67294),o=n(91288),i=n(96486),a=n(27274),c=n(34898),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=r},function(e,t,n){e.exports=n(8)()},function(e,t){e.exports=o},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=c},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";var r=n(9);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(5),a=n.n(i),c=n(6),u=n.n(c),l=n(3),s=n.n(l),d=n(4),f=n.n(d);function p(e){try{var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}catch(e){console.error(e)}}function h(){return{w:Math.max(document.documentElement.clientWidth,window.innerWidth||0),h:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function m(e){return e===document.querySelector("body")||e===document.querySelector("html")}var b,g,v,w,y,O=function(e){return e<0?0:e},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))},E=n(2),k=n.n(E),S=k.a.button(b||(g=["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ",";\n"],v||(v=g.slice(0)),b=Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(v)}}))),(function(e){return e.disabled?"not-allowed":"pointer"})),j=n(1),C=n.n(j);function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var T=k.a.span(w||(w=P(["\n  font-size: 12px;\n  line-height: 1;\n"])));function _(e){var t=e.className,n=e.onClick,r=e.inverted,i=e.label,a=e.disabled;return o.a.createElement(S,{className:t,onClick:n,"data-tour-elem":"".concat(r?"right":"left","-arrow"),disabled:a},i?o.a.createElement(T,null,i):o.a.createElement("svg",{viewBox:"0 0 18.4 14.4"},o.a.createElement("path",{d:r?"M17 7.2H1M10.8 1L17 7.2l-6.2 6.2":"M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"})))}_.propTypes={className:C.a.string.isRequired,onClick:C.a.func.isRequired,inverted:C.a.bool,label:C.a.node,disabled:C.a.bool};var N,R=k()(_)(y||(y=P(["\n  color: ",";\n\n  ",";\n  ",";\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.disabled?"#caccce":"#646464"}),(function(e){return e.inverted?"margin-left: 24px;":"margin-right: 24px;"}),(function(e){return!e.label&&"\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  "}),(function(e){return e.disabled?"#caccce":"#000"}));function L(e){var t=e.className,n=e.onClick;return o.a.createElement(S,{className:t,onClick:n},o.a.createElement("svg",{viewBox:"0 0 9.1 9.1"},o.a.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))}L.propTypes={className:C.a.string.isRequired,onClick:C.a.func.isRequired};var M,I,D,q,W,A,z=k()(L)(N||(N=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"]))),H=k.a.div(M||(M=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  --reactour-accent: ",";\n  ","\n  position: fixed;\n  transition: top 0.3s, left 0.3s;\n  top: ",";\n  left: ",';\n\n  z-index: 1000000;\n\n  &::after {\n    background: #fff;\n    position: absolute;\n    height: 0;\n    width: 0;\n    margin-left: -14px;\n    content: "";\n    border: 10px solid #fff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    ',"\n  }\n"])),(function(e){return e.accentColor}),(function(e){return e.defaultStyles?"\n  max-width: 400px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(10,"px;\n  background-color: #fff;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  "):""}),(function(e){return e.coords.top}),(function(e){return e.coords.left}),(function(e){switch(e.coords.arrowPosition){case"left":return"\n          left: 4px;\n          top: 40%;\n        ";case"right":return"\n          right: -10px;\n          top: 40%;\n        ";case"bottom":return"\n          left: 50%;\n          bottom: -10px;\n        ";default:return"\n            left: 50%;\n            top: -10px;\n          "}})),B=k.a.span(I||(I=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  font-family: monospace;\n  background: var(--reactour-accent);\n  background: ",";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"])),(function(e){return e.accentColor})),Q=k.a.div(D||(D=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n  justify-content: space-between;\n"]))),Y=k.a.nav(q||(q=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),U=k.a.button(W||(W=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: ",";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ",";\n  transform: scale(",");\n\n  color: ",";\n  background: ",";\n\n  color: ",";\n  background: ",";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ",";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"])),(function(e){return e.current===e.index?"0":"1px solid #caccce"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.current===e.index?1.25:1}),(function(e){return e.current===e.index?"var(--reactour-accent)":"#caccce"}),(function(e){return e.current===e.index?"var(--reactour-accent)":"none"}),(function(e){return e.current===e.index?e.accentColor:"#caccce"}),(function(e){return e.current===e.index?e.accentColor:"none"}),(function(e){return e.showNumber?"block":"none"})),G=k.a.div(A||(A=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  opacity: 0.7;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n  color: ",";\n"])),(function(e){return e.maskColor?e.maskColor:"#000"}));function V(e){var t=e.windowWidth,n=e.windowHeight,r=e.targetWidth,i=e.targetHeight,a=e.targetTop,c=e.targetLeft,u=e.padding,l=e.rounded,s=e.disableInteraction,d=e.disableInteractionClassName,f=e.className,p=e.maskColor,h=e.onClick,m=O(r+2*u),b=O(i+2*u),g=O(a-u),v=O(c-u);return o.a.createElement(G,{onClick:h,maskColor:p},o.a.createElement("svg",{width:t,height:n,xmlns:"http://www.w3.org/2000/svg",className:f},o.a.createElement("defs",null,o.a.createElement("mask",{id:"mask-main"},o.a.createElement("rect",{x:0,y:0,width:t,height:n,fill:"white"}),o.a.createElement("rect",{x:v,y:g,width:m,height:b,fill:"black"}),o.a.createElement("rect",{x:v-1,y:g-1,width:l,height:l,fill:"white"}),o.a.createElement("circle",{cx:v+l,cy:g+l,r:l,fill:"black"}),o.a.createElement("rect",{x:v+m-l+1,y:g-1,width:l,height:l,fill:"white"}),o.a.createElement("circle",{cx:v+m-l,cy:g+l,r:l,fill:"black"}),o.a.createElement("rect",{x:v-1,y:g+b-l+1,width:l,height:l,fill:"white"}),o.a.createElement("circle",{cx:v+l,cy:g+b-l,r:l,fill:"black"}),o.a.createElement("rect",{x:v+m-l+1,y:g+b-l+1,width:l,height:l,fill:"white"}),o.a.createElement("circle",{cx:v+m-l,cy:g+b-l,r:l,fill:"black "})),o.a.createElement("clipPath",{id:"clip-path"},o.a.createElement("rect",{x:0,y:0,width:t,height:g}),o.a.createElement("rect",{x:0,y:g,width:v,height:b}),o.a.createElement("rect",{x:c+r+u,y:g,width:O(t-r-v),height:b}),o.a.createElement("rect",{x:0,y:a+i+u,width:t,height:O(n-i-g)}))),o.a.createElement("rect",{x:0,y:0,width:t,height:n,fill:"currentColor",mask:"url(#mask-main)"}),o.a.createElement("rect",{x:0,y:0,width:t,height:n,fill:"currentColor",clipPath:"url(#clip-path)",pointerEvents:"auto"}),o.a.createElement("rect",{x:v,y:g,width:m,height:b,pointerEvents:"auto",fill:"transparent",display:s?"block":"none",className:d})))}V.propTypes={windowWidth:C.a.number.isRequired,windowHeight:C.a.number.isRequired,targetWidth:C.a.number.isRequired,targetHeight:C.a.number.isRequired,targetTop:C.a.number.isRequired,targetLeft:C.a.number.isRequired,padding:C.a.number.isRequired,rounded:C.a.number.isRequired,disableInteraction:C.a.bool.isRequired,disableInteractionClassName:C.a.string.isRequired};var F={steps:C.a.arrayOf(C.a.shape({selector:C.a.string,content:C.a.oneOfType([C.a.node,C.a.element,C.a.func]).isRequired,position:C.a.oneOf(["top","right","bottom","left"]),dropSelector:C.a.string,actionType:C.a.oneOf(["click","dblclick","typing","dragdrop","dragwithmove","custom","enter","wait"]),userTypeText:C.a.string,waitTimer:C.a.number,beforeStep:C.a.func,afterStep:C.a.func,beforePrev:C.a.func,beforeNext:C.a.func}))},K="undefined"!=typeof document?document:{},X="reactutorial__mask--disable-interaction",Z="reactutorial__helper",$="reactutorial__helper--is-open",J="reactutorial__dot",ee="reactutorial__dot--is-active",te=["type"];function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function ae(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){ie(i,r,o,a,c,"next",e)}function c(e){ie(i,r,o,a,c,"throw",e)}a(void 0)}))}}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le=["top","bottom","right","left"],se=function(e){var t,n,i,c=e.steps,l=e.playTour,d=e.onRequestClose,b=e.showButtons,g=e.showNavigation,v=e.prevButton,w=e.showNavigationNumber,y=e.children,O=e.className,E=e.showNumber,k=e.scrollDuration,S=e.maskSpace,j=e.disableKeyboardNavigation,C=e.disableInteraction,P=e.highlightedMaskClassName,T=e.rounded,_=e.maskClassName,N=e.accentColor,L=e.scrollOffset,M=e.onAfterOpen,I=e.onBeforeClose,D=e.inViewThreshold,q=e.disableDotsNavigation,W=e.lastStepNextButton,A=e.nextButton,G=e.startAt,F=e.maskColor,te=e.stepWaitTimer,ne=e.allowScreenScroll,ie=void 0!==ne&&ne,ue=e.onRequestSkip,se=e.showCloseButton,he=e.bubblePosition,me=ce(Object(r.useState)(c.length),1)[0],be=ce(Object(r.useState)("number"==typeof G?G:0),2),ge=be[0],ve=be[1],we=Object(r.useRef)(null),ye=Object(r.useRef)(null),Oe=ce(Object(r.useState)(l),2),xe=Oe[0],Ee=Oe[1],ke=ce(Object(r.useState)(le),2),Se=ke[0],je=ke[1],Ce=ce((t=Object(r.useRef)(),n=K.documentElement,i=K.body,[function(){if(i&&i.style&&!t.current){var e=window.innerWidth-n.clientWidth,r=parseInt(window.getComputedStyle(i).getPropertyValue("padding-right"))||0;n.style.position="relative",n.style.overflow="hidden",i.style.position="relative",i.style.overflow="hidden",i.style.paddingRight="".concat(r+e,"px"),t.current=!0}},function(){i&&i.style&&t.current&&(n.style.position="",n.style.overflow="",i.style.position="",i.style.overflow="",i.style.paddingRight="",t.current=!1)}]),2),Pe=Ce[0],Te=Ce[1],_e=ce(Object(r.useReducer)(fe,de),2),Ne=_e[0],Re=_e[1],Le=Object(r.useCallback)((function(){if(ge>=0&&ge<me){var e=c[ge];!function(e){e.beforeStep&&e.beforeStep(e)}(e),Be(e)}else He()}),[ge]);function Me(){return Ie.apply(this,arguments)}function Ie(){return(Ie=ae(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(ge+1<me)){e.next=12;break}if(!(t=c[ge]).userTypeText){e.next=6;break}if((t.selector?document.querySelector(t.selector):null).value===t.userTypeText){e.next=6;break}return e.abrupt("return");case 6:return t.beforeNext&&t.beforeNext(),e.next=9,x(te);case 9:ve(ge+1),e.next=13;break;case 12:He();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){if(he&&he.length){var e=[],t=[];le.forEach((function(n){var r;r=n,he.indexOf(r)<=0?e[he.indexOf(r)]=r:t.push(r)})),je([].concat(e,t))}}),[]),Object(r.useEffect)((function(){return ie?Te():Pe(),l&&Le(),l!==xe&&l&&(we.current&&(we.current.focus(),M&&"function"==typeof M&&M(ye.current)),Ee(l)),window.addEventListener("keydown",et,!1),window.addEventListener("resize",qe),function(){Ee(!1),window.removeEventListener("keydown",et,!1),window.removeEventListener("resize",qe)}}),[l,Le]);var De=Object(r.useCallback)(function(){var e=ae(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(te);case 2:ve(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[ve]);function qe(e){if(l){var t=c[ge],n=t.selector?document.querySelector(t.selector):null;n&&Je(p(n),t.position)}}function We(){return Ae.apply(this,arguments)}function Ae(){return(Ae=ae(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=c[ge]).beforePrev&&t.beforePrev(),e.next=4,x(te);case 4:ve(0===ge?ge:ge-1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ze(){var e=c[ge];e.afterStep&&e.afterStep(e),Me()}function He(){I&&"function"==typeof I&&I(we.current),d(),Te()}var Be=function(e){var t=e.selector?document.querySelector(e.selector):null;(f.a.isNull(t)||f.a.isUndefined(t))&&e.actionType!==pe.WAIT&&(He(),console.error("Element could not found with selector: ".concat(e.selector," \n Please update selector and try again"))),Ye(t,e),function(e,t){Qe.apply(this,arguments)}(t,e)};function Qe(){return(Qe=ae(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.actionType,e.next=e.t0===pe.CLICK?3:e.t0===pe.DBL_CLICK?5:e.t0===pe.TYPING?7:e.t0===pe.ENTER?9:e.t0===pe.DRAG_N_DROP?11:e.t0===pe.DRAG_WITH_MOUSE_MOVE?17:e.t0===pe.WAIT?22:(e.t0,pe.CUSTOM,27);break;case 3:return t.addEventListener("click",Ue),e.abrupt("break",28);case 5:return t.addEventListener("dblclick",Ge),e.abrupt("break",28);case 7:return t.addEventListener("input",Fe),e.abrupt("break",28);case 9:return t.addEventListener("keydown",Ve),e.abrupt("break",28);case 11:return t.addEventListener("mousedown",Ke),r=n.dropSelector?document.querySelector(n.dropSelector):null,window.addEventListener("drag",Xe,!0),window.addEventListener("dragend",$e),r&&r.addEventListener("drop",Ze),e.abrupt("break",28);case 17:return r=n.dropSelector?document.querySelector(n.dropSelector):null,t.addEventListener("mousedown",Ke),window.addEventListener("mousemove",Xe),r&&r.addEventListener("mouseup",Ze),e.abrupt("break",28);case 22:return n.isRendered=!0,e.next=25,x(n.waitTimer);case 25:return ze(),e.abrupt("break",28);case 27:return e.abrupt("break",28);case 28:n.isRendered=!0;case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(e,t){var n=h(),r=n.w,o=n.h;if(e){var i=p(e);if(function(e){var t=e.top,n=e.right,r=e.bottom,o=e.left,i=e.w,a=e.h,c=e.threshold,u=void 0===c?0:c;return t>=0+u&&o>=0+u&&r<=a-u&&n<=i-u}(re(re({},i),{},{w:r,h:o,threshold:D})))Je(i,t.position);else{var c=a()(e),l=L||(i.height>o?-25:-o/2+i.height/2);u.a.to(e,{context:m(c)?window:c,duration:k,offset:l,callback:function(e){Je(p(e),t.position)}})}t.isRendered=!0}else Re({type:"NO_DOM_NODE",helperPosition:t.position,w:r,h:o,inDOM:!1}),t.actionType!==pe.WAIT&&console.error("Node not found with selector: ",t.selector)}function Ue(e){e.target.removeEventListener("click",Ue),ze()}function Ge(e){e.target.removeEventListener("click",Ge),ze()}function Ve(e){var t=c[ge];t.userTypeText?t.userTypeText===e.target.value&&("Enter"===e.key&&(e.target.removeEventListener("keydown",Ve),ze()),e.target.removeEventListener("input",Ve)):"Enter"===e.key&&(e.target.removeEventListener("keydown",Ve),ze())}function Fe(e){c[ge].userTypeText===e.target.value&&(e.target.removeEventListener("input",Fe),setTimeout((function(){ze()}),0))}function Ke(e){c[ge].mouseDownReceived=!0}function Xe(e){var t=c[ge];t.mouseDownReceived&&t.dropSelector&&(Ye(t.dropSelector?document.querySelector(t.dropSelector):null,t),t.mouseMoved=!0)}function Ze(e){var t=c[ge],n=t.dropSelector?document.querySelector(t.dropSelector):null,r=t.selector?document.querySelector(t.selector):null;n&&t.mouseDownReceived&&e.path[0]===n?(r.removeEventListener("mousedown",Ke),window.removeEventListener("drag",Xe),window.removeEventListener("dragend",$e),n.removeEventListener("drop",Ze),r.removeEventListener("mousedown",Ke),window.removeEventListener("mousemove",Xe),n.removeEventListener("mouseup",Ze),ze()):Ye(r,t),t.mouseDownReceived=!1}function $e(e){var t=c[ge];Ye(t.selector?document.querySelector(t.selector):null,t),t.mouseDownReceived=!1}function Je(e,t){var n=h(),r=n.w,o=n.h,i=p(we.current),a=i.width,c=i.height;Re(re(re({type:"HAS_DOM_NODE"},e),{},{helperWidth:a,helperHeight:c,helperPosition:t,w:r,h:o,inDOM:!0}))}function et(e){var t,n,r;e.stopPropagation(),!0!==j&&(j&&(t=j.includes("esc"),n=j.includes("right"),r=j.includes("left")),27!==e.keyCode||t||(e.preventDefault(),He()),39!==e.keyCode||n||(e.preventDefault(),Me()),37!==e.keyCode||r||(e.preventDefault(),We()))}var tt=c[ge]&&("function"==typeof c[ge].content?c[ge].content({close:He,goTo:De,inDOM:Ne.inDOM,step:ge+1}):c[ge].content),nt=function e(t,n,r){var o=n.helperWidth,i=n.helperHeight,a=n.helperPosition,c=n.available,u=n.targetXcenter,l=n.targetYcenter,s=n.helperXcenter,d=n.helperYcenter,f=n.bufferSpace,p=r,h=a,m=t?c.top>i+f&&s-u<=c.left&&s-u<=c.right:c.top>i+f,b=t?c.bottom>i+f&&s-u<=c.left&&s-u<=c.right:c.bottom>i+f,g=t?c.right>o+f&&d-l<=c.top&&d-l<=c.bottom:c.right>o+f,v=t?c.left>o+f&&d-l<=c.top&&d-l<=c.bottom:c.left>o+f;if(p++,a&&{top:m,bottom:b,right:g,left:v}[a])h=a;else{for(var w=!1,y=0;y<Se.length;y++){if("top"===Se[y]&&m){h="top",w=!0;break}if("bottom"===Se[y]&&b){h="bottom",w=!0;break}if("right"===Se[y]&&g){h="right",w=!0;break}if("left"===Se[y]&&v){h="left",w=!0;break}}w||(h=p<2?e(!1,n,p):"center")}return h};return l?o.a.createElement("div",{className:"react-tutorial"},o.a.createElement(H,{ref:we,rounded:T,accentColor:N,defaultStyles:!0,coords:function(e){var t=e.targetWidth,n=e.targetHeight,r=e.helperWidth,o=e.helperHeight,i=e.helperPosition,a={left:e.targetLeft,right:e.windowWidth-e.targetRight,top:e.targetTop,bottom:e.windowHeight-e.targetBottom},c=20+e.padding,u=i,l=0,s=0,d="bottom",f=t/2,p=n/2,h=r/2,m=o/2,b=re(re({},e),{},{available:a,targetXcenter:f,targetYcenter:p,helperXcenter:h,helperYcenter:m,bufferSpace:c});switch(t&&n&&(u=i?nt(r>t&&i,b):nt(!0,b,0)),u){case"top":l=Math.round(a.top-(o+c)),s=Math.round(a.left+f-h),d="bottom";break;case"bottom":l=Math.round(a.top+(n+c)),s=Math.round(a.left+f-h),d="top";break;case"right":l=Math.round(a.top+p-m),s=Math.round(a.left+t+c),d="left";break;case"left":l=Math.round(a.top+p-m),s=Math.round(a.left-r-c),d="right";break;case"center":l=Math.round(a.top+p-m),s=Math.round(a.left+f-h),d="bottom"}return{top:"".concat(-1!==Math.sign(l)?l:5,"px"),left:"".concat(-1!==Math.sign(s)?s:5,"px"),arrowPosition:d}}({windowWidth:Ne.w,windowHeight:Ne.h,targetWidth:Ne.width,targetHeight:Ne.height,targetTop:Ne.top,targetLeft:Ne.left,targetRight:Ne.right,targetBottom:Ne.bottom,helperWidth:Ne.helperWidth,helperHeight:Ne.helperHeight,helperPosition:Ne.helperPosition,padding:S||10}),className:s()(Z,O,oe({},$,l))},y,tt,E&&o.a.createElement(B,{"data-tour-elem":"badge"},ge+1),(b||g)&&o.a.createElement(Q,{"data-tour-elem":"controls"},b&&o.a.createElement(R,{onClick:We,disabled:0===ge,label:v||null}),g&&o.a.createElement(Y,{"data-tour-elem":"navigation"},c.map((function(e,t){return o.a.createElement(U,{key:"".concat(e.selector?e.selector:"undef","_").concat(t),onClick:function(){return De(t)},current:ge,index:t,disabled:ge===t||q,showNumber:w,"data-tour-elem":"dot",className:s()(J,oe({},ee,ge===t))})}))),b&&o.a.createElement(R,{onClick:ge===c.length-1?W?He:function(){}:Me,disabled:!W&&ge===c.length-1,inverted:!0,label:W&&ge===c.length-1?W:A||null})),se&&o.a.createElement(z,{onClick:function(){He(),ue&&ue()},className:"reactour__close"})),o.a.createElement(V,{windowWidth:Ne.w,windowHeight:Ne.h,targetWidth:Ne.width,targetHeight:Ne.height,targetTop:Ne.top,targetLeft:Ne.left,padding:S,rounded:T,className:_,disableInteraction:!1===c[ge].stepInteraction||C?!c[ge].stepInteraction:C,maskColor:F,disableInteractionClassName:s()(X,P)})):null},de={top:0,right:0,bottom:0,left:0,width:0,height:0,w:0,h:0,node:null};function fe(e,t){switch(t.type){case"HAS_DOM_NODE":t.type;var n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,te);return re(re({},e),n);case"NO_DOM_NODE":return re(re({},e),{},{top:e.h+10,right:e.w/2+9,bottom:e.h/2+9,left:t.w/2-e.helperWidth?e.helperWidth/2:0,width:0,height:0,w:t.w,h:t.h,helperPosition:"center",node:null});default:return e}}var pe={CLICK:"click",DBL_CLICK:"dblclick",TYPING:"typing",ENTER:"enter",DRAG_N_DROP:"dragdrop",DRAG_WITH_MOUSE_MOVE:"dragwithmove",CUSTOM:"custom",WAIT:"wait"};se.propTypes=F,se.defaultProps={showNavigation:!0,showNavigationNumber:!0,showButtons:!0,showNumber:!0,startAt:0,scrollDuration:1,maskSpace:10,stepWaitTimer:0,disableInteraction:!1,rounded:0,accentColor:"#007aff",closeWithMask:!0,maskColor:"#000"};var he=se;t.default=he}]))},19337:function(e,t){"use strict";t.Z=function(e){return Array.from(new Set(e))}},21902:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(r=n(3198))&&r.__esModule?r:{default:r};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=void 0===t?'[href^="#"]:not([href="#"]':t,r=e.match,a=void 0===r?function(e){return document.getElementById(e.hash.substring(1))}:r,c=e.hashChange,u=void 0===c||c,l=e.scrollSmoothConfig,s=document.querySelectorAll(n),d=function(e){e.preventDefault();var t=a(e.target);t&&(u&&history.replaceState(null,null,"#"+t.id),(0,i.default)(t,o({},l)))};Array.from(s).map((function(e){e.addEventListener("click",d,!1)}))},e.exports=t.default},34898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(3198)),o=n(73760),i=c(n(21902)),a=c(n(20914));function c(e){return e&&e.__esModule?e:{default:e}}t.default={to:r.default,calcEndPoint:o.calcEndPoint,anchorScroll:i.default,observe:a.default},e.exports=t.default},20914:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.activeClass,r=void 0===t?"active":t,o=e.query,i=void 0===o?'[href^="#"]:not([href="#"]':o,a=e.threshold,c=void 0===a?[.25,.5,.75]:a,u=e.detectType,l=void 0===u?"max":u,s={threshold:c},d=function(e){return e.classList.remove(r)},f=function(e){return e.classList.add(r)},p=function(){document.querySelectorAll("."+r).forEach(d)},h=function(e){p(),f(document.querySelector('a[href="#'+e.id+'"]'))},m=function(e){e.forEach((function(e){e.intersectionRatio>=Math[l].apply(Math,n(c))&&h(e.target)}))},b=document.querySelectorAll(i),g=new IntersectionObserver(m,s),v=function(e){var t=document.querySelector("#"+e.hash.slice(1));g.observe(t)};b.forEach(v)},e.exports=t.default},3198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(73760);t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,i=void 0===n?500:n,a=t.context,c=void 0===a?window:a,u=t.offset,l=void 0===u?0:u,s=t.ease,d=void 0===s?"easeInOutCubic":s,f=t.callback;if("object"===("undefined"==typeof window?"undefined":r(window))){var p=c.scrollTop||window.pageYOffset,h=(0,o.calcEndPoint)(e,c,l),m=performance.now(),b=window.requestAnimationFrame,g=function t(){var n=performance.now()-m,r=(0,o.setPosition)(p,h,n,i,d);c!==window?c.scrollTop=r:window.scroll(0,r),n>i?"function"==typeof f&&f(e):b(t)};g()}},e.exports=t.default},73760:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.easeFunctions={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},r=t.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.setPosition=function(e,t,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutCubic";return r>o?t:e+(t-e)*n[i](r/o)},t.calcEndPoint=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(r(e))return parseInt(e)+n;var o=t===window?window.pageYOffset:t.scrollTop-t.getBoundingClientRect().top,i="html"===e.nodeName.toLowerCase()?-o:e.getBoundingClientRect().top+o;return i+n}},27274:function(e,t){var n,r;void 0===(r="function"==typeof(n=function(){var e=/(auto|scroll)/,t=function(e,n){return null===e.parentNode?n:t(e.parentNode,n.concat([e]))},n=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},r=function(t){return e.test(function(e){return n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")}(t))};return function(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var n=t(e.parentNode,[]),o=0;o<n.length;o+=1)if(r(n[o]))return n[o];return document.scrollingElement||document.documentElement}}})?n.apply(t,[]):n)||(e.exports=r)}}]);