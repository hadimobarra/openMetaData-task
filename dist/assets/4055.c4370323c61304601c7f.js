"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[4055],{45471:function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.PresetStatusColorTypes=e.PresetColorTypes=void 0;var n=o(66764),r=(0,n.tuple)("success","processing","error","default","warning");e.PresetStatusColorTypes=r;var a=(0,n.tuple)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");e.PresetColorTypes=a},74132:function(t,e,o){var n=o(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.arrowWidth,o=void 0===e?4:e,n=t.horizontalArrowShift,f=void 0===n?16:n,l=t.verticalArrowShift,s=void 0===l?8:l,c=t.autoAdjustOverflow,p=t.arrowPointAtCenter,d={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(f+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(s+o)]},topRight:{points:["br","tc"],offset:[f+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(s+o)]},bottomRight:{points:["tr","bc"],offset:[f+o,4]},rightBottom:{points:["bl","cr"],offset:[4,s+o]},bottomLeft:{points:["tl","bc"],offset:[-(f+o),4]},leftBottom:{points:["br","cl"],offset:[-4,s+o]}};return Object.keys(d).forEach((function(t){d[t]=p?(0,r.default)((0,r.default)({},d[t]),{overflow:i(c),targetOffset:u}):(0,r.default)((0,r.default)({},a.placements[t]),{overflow:i(c)}),d[t].ignoreShake=!0})),d},e.getOverflowOptions=i;var r=n(o(10434)),a=o(24375),f={adjustX:1,adjustY:1},l={adjustX:0,adjustY:0},u=[0,0];function i(t){return"boolean"==typeof t?t?f:l:(0,r.default)((0,r.default)({},l),t)}},94055:function(t,e,o){var n=o(75263).default,r=o(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(o(81670)),f=r(o(27424)),l=r(o(10434)),u=r(o(36228)),i=r(o(26326)),s=r(o(60869)),c=n(o(67294)),p=o(31929),d=o(45471),v=o(53683),b=r(o(74132)),m=o(47419),g=(r(o(13594)),function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]])}return o}),y=new RegExp("^(".concat(d.PresetColorTypes.join("|"),")(-inverse)?$"));var O=c.forwardRef((function(t,e){var o,n=c.useContext(p.ConfigContext),r=n.getPopupContainer,d=n.getPrefixCls,O=n.direction,w=(0,s.default)(!1,{value:void 0!==t.open?t.open:t.visible,defaultValue:void 0!==t.defaultOpen?t.defaultOpen:t.defaultVisible}),P=(0,f.default)(w,2),h=P[0],C=P[1],N=function(){var e=t.title,o=t.overlay;return!e&&!o&&0!==e},E=function(){var e=t.builtinPlacements,o=t.arrowPointAtCenter,n=void 0!==o&&o,r=t.autoAdjustOverflow,a=void 0===r||r;return e||(0,b.default)({arrowPointAtCenter:n,autoAdjustOverflow:a})},_=t.getPopupContainer,j=t.placement,R=void 0===j?"top":j,T=t.mouseEnterDelay,k=void 0===T?.1:T,A=t.mouseLeaveDelay,x=void 0===A?.1:A,I=g(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay"]),L=t.prefixCls,S=t.openClassName,D=t.getTooltipContainer,M=t.overlayClassName,B=t.color,V=t.overlayInnerStyle,U=t.children,z=d("tooltip",L),X=d(),Y=h;"open"in t||"visible"in t||!N()||(Y=!1);var W,F,H=function(t,e){var o=t.type;if((!0===o.__ANT_BUTTON||"button"===t.type)&&t.props.disabled||!0===o.__ANT_SWITCH&&(t.props.disabled||t.props.loading)||!0===o.__ANT_RADIO&&t.props.disabled){var n=function(t,e){var o={},n=(0,l.default)({},t);return["position","left","right","top","bottom","float","display","zIndex"].forEach((function(e){t&&e in t&&(o[e]=t[e],delete n[e])})),{picked:o,omitted:n}}(t.props.style),r=n.picked,a=n.omitted,f=(0,l.default)((0,l.default)({display:"inline-block"},r),{cursor:"not-allowed",width:t.props.block?"100%":void 0}),i=(0,l.default)((0,l.default)({},a),{pointerEvents:"none"}),s=(0,m.cloneElement)(t,{style:i,className:null});return c.createElement("span",{style:f,className:(0,u.default)(t.props.className,"".concat(e,"-disabled-compatible-wrapper"))},s)}return t}((0,m.isValidElement)(U)&&!(0,m.isFragment)(U)?U:c.createElement("span",null,U),z),$=H.props,q=$.className&&"string"!=typeof $.className?$.className:(0,u.default)($.className,(0,a.default)({},S||"".concat(z,"-open"),!0)),G=(0,u.default)(M,(o={},(0,a.default)(o,"".concat(z,"-rtl"),"rtl"===O),(0,a.default)(o,"".concat(z,"-").concat(B),B&&y.test(B)),o)),J=V,K={};return B&&!y.test(B)&&(J=(0,l.default)((0,l.default)({},V),{background:B}),K={"--antd-arrow-background-color":B}),c.createElement(i.default,(0,l.default)({},I,{placement:R,mouseEnterDelay:k,mouseLeaveDelay:x,prefixCls:z,overlayClassName:G,getTooltipContainer:_||D||r,ref:e,builtinPlacements:E(),overlay:(W=t.title,F=t.overlay,0===W?W:F||W||""),visible:Y,onVisibleChange:function(e){var o,n;C(!N()&&e),N()||(null===(o=t.onOpenChange)||void 0===o||o.call(t,e),null===(n=t.onVisibleChange)||void 0===n||n.call(t,e))},onPopupAlign:function(t,e){var o=E(),n=Object.keys(o).find((function(t){var n,r;return o[t].points[0]===(null===(n=e.points)||void 0===n?void 0:n[0])&&o[t].points[1]===(null===(r=e.points)||void 0===r?void 0:r[1])}));if(n){var r=t.getBoundingClientRect(),a={top:"50%",left:"50%"};/top|Bottom/.test(n)?a.top="".concat(r.height-e.offset[1],"px"):/Top|bottom/.test(n)&&(a.top="".concat(-e.offset[1],"px")),/left|Right/.test(n)?a.left="".concat(r.width-e.offset[0],"px"):/right|Left/.test(n)&&(a.left="".concat(-e.offset[0],"px")),t.style.transformOrigin="".concat(a.left," ").concat(a.top)}},overlayInnerStyle:J,arrowContent:c.createElement("span",{className:"".concat(z,"-arrow-content"),style:K}),motion:{motionName:(0,v.getTransitionName)(X,"zoom-big-fast",t.transitionName),motionDeadline:1e3}}),Y?(0,m.cloneElement)(H,{className:q}):H)}));e.default=O},24375:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.placements=void 0;var o={adjustX:1,adjustY:1},n=[0,0],r={left:{points:["cr","cl"],overflow:o,offset:[-4,0],targetOffset:n},right:{points:["cl","cr"],overflow:o,offset:[4,0],targetOffset:n},top:{points:["bc","tc"],overflow:o,offset:[0,-4],targetOffset:n},bottom:{points:["tc","bc"],overflow:o,offset:[0,4],targetOffset:n},topLeft:{points:["bl","tl"],overflow:o,offset:[0,-4],targetOffset:n},leftTop:{points:["tr","tl"],overflow:o,offset:[-4,0],targetOffset:n},topRight:{points:["br","tr"],overflow:o,offset:[0,-4],targetOffset:n},rightTop:{points:["tl","tr"],overflow:o,offset:[4,0],targetOffset:n},bottomRight:{points:["tr","br"],overflow:o,offset:[0,4],targetOffset:n},rightBottom:{points:["bl","br"],overflow:o,offset:[4,0],targetOffset:n},bottomLeft:{points:["tl","bl"],overflow:o,offset:[0,4],targetOffset:n},leftBottom:{points:["br","bl"],overflow:o,offset:[-4,0],targetOffset:n}};e.placements=r;var a=r;e.default=a},18545:function(t,e,o){var n=o(75263).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=r.useRef();e.current=t;var o=r.useCallback((function(){for(var t,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return null===(t=e.current)||void 0===t?void 0:t.call.apply(t,[e].concat(n))}),[]);return o};var r=n(o(67294))},82546:function(t,e,o){var n=o(64836).default,r=o(75263).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useLayoutUpdateEffect=e.default=void 0;var a=r(o(67294)),f=(0,n(o(19158)).default)()?a.useLayoutEffect:a.useEffect,l=f;e.default=l,e.useLayoutUpdateEffect=function(t,e){var o=a.useRef(!0);f((function(){if(!o.current)return t()}),e),f((function(){return o.current=!1,function(){o.current=!0}}),[])}},60869:function(t,e,o){var n=o(75263).default,r=o(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var o=e||{},n=o.defaultValue,r=o.value,p=o.onChange,d=o.postState,v=(0,s.default)((function(){var e,o=void 0;return c(r)?(o=r,e=a.PROP):c(n)?(o="function"==typeof n?n():n,e=a.PROP):(o="function"==typeof t?t():t,e=a.INNER),[o,e,o]})),b=(0,f.default)(v,2),m=b[0],g=b[1],y=c(r)?r:m[0],O=d?d(y):y;(0,i.useLayoutUpdateEffect)((function(){g((function(t){var e=(0,f.default)(t,1)[0];return[r,a.PROP,e]}))}),[r]);var w=l.useRef(),P=(0,u.default)((function(t,e){g((function(e){var o=(0,f.default)(e,3),n=o[0],r=o[1],l=o[2],u="function"==typeof t?t(n):t;if(u===n)return e;var i=r===a.INNER&&w.current!==l?l:n;return[u,a.INNER,i]}),e)})),h=(0,u.default)(p);return(0,i.default)((function(){var t=(0,f.default)(m,3),e=t[0],o=t[1],n=t[2];e!==n&&o===a.INNER&&(h(e,n),w.current=n)}),[m]),[O,P]};var a,f=r(o(27424)),l=n(o(67294)),u=r(o(18545)),i=n(o(82546)),s=r(o(78423));function c(t){return void 0!==t}!function(t){t[t.INNER=0]="INNER",t[t.PROP=1]="PROP"}(a||(a={}))},78423:function(t,e,o){var n=o(75263).default,r=o(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=f.useRef(!1),o=f.useState(t),n=(0,a.default)(o,2),r=n[0],l=n[1];return f.useEffect((function(){return e.current=!1,function(){e.current=!0}}),[]),[r,function(t,o){o&&e.current||l(t)}]};var a=r(o(27424)),f=n(o(67294))}}]);