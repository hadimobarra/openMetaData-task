/*! For license information please see 5329.c19652aab99ecdcde4d7.js.LICENSE.txt */
(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[5329],{59879:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(1413),l=a(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},s=a(13401),i=function(e,t){return l.createElement(s.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:r}))};i.displayName="ReloadOutlined";var c=l.forwardRef(i)},9676:function(e,t,a){"use strict";a.d(t,{Z:function(){return Z}});var n=a(4942),l=a(87462),r=a(36228),s=a.n(r),i=a(50132),c=a(67294),o=a(53124),u=a(65223),d=a(5555),m=a(23653),v=a(98423),p=c.createContext(null),f=function(e,t){var a=e.defaultValue,r=e.children,i=e.options,u=void 0===i?[]:i,f=e.prefixCls,b=e.className,h=e.style,E=e.onChange,y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),x=c.useContext(o.E_),Z=x.getPrefixCls,C=x.direction,N=c.useState(y.value||a||[]),S=(0,m.Z)(N,2),k=S[0],w=S[1],I=c.useState([]),A=(0,m.Z)(I,2),O=A[0],R=A[1];c.useEffect((function(){"value"in y&&w(y.value||[])}),[y.value]);var D=function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},P=Z("checkbox",f),F="".concat(P,"-group"),T=(0,v.Z)(y,["value","disabled"]);u&&u.length>0&&(r=D().map((function(e){return c.createElement(g,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:y.disabled,value:e.value,checked:k.includes(e.value),onChange:e.onChange,className:"".concat(F,"-item"),style:e.style},e.label)})));var L={toggleOption:function(e){var t=k.indexOf(e.value),a=(0,d.Z)(k);-1===t?a.push(e.value):a.splice(t,1),"value"in y||w(a);var n=D();null==E||E(a.filter((function(e){return O.includes(e)})).sort((function(e,t){return n.findIndex((function(t){return t.value===e}))-n.findIndex((function(e){return e.value===t}))})))},value:k,disabled:y.disabled,name:y.name,registerValue:function(e){R((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){R((function(t){return t.filter((function(t){return t!==e}))}))}},M=s()(F,(0,n.Z)({},"".concat(F,"-rtl"),"rtl"===C),b);return c.createElement("div",(0,l.Z)({className:M,style:h},T,{ref:t}),c.createElement(p.Provider,{value:L},r))},b=c.forwardRef(f),h=c.memo(b),E=a(98866),y=function(e,t){var a,r,d=e.prefixCls,m=e.className,v=e.children,f=e.indeterminate,b=void 0!==f&&f,h=e.style,y=e.onMouseEnter,g=e.onMouseLeave,x=e.skipGroup,Z=void 0!==x&&x,C=e.disabled,N=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),S=c.useContext(o.E_),k=S.getPrefixCls,w=S.direction,I=c.useContext(p),A=(0,c.useContext)(u.aM).isFormItemInput,O=(0,c.useContext)(E.Z),R=null!==(r=(null==I?void 0:I.disabled)||C)&&void 0!==r?r:O,D=c.useRef(N.value);c.useEffect((function(){null==I||I.registerValue(N.value)}),[]),c.useEffect((function(){if(!Z)return N.value!==D.current&&(null==I||I.cancelValue(D.current),null==I||I.registerValue(N.value),D.current=N.value),function(){return null==I?void 0:I.cancelValue(N.value)}}),[N.value]);var P=k("checkbox",d),F=(0,l.Z)({},N);I&&!Z&&(F.onChange=function(){N.onChange&&N.onChange.apply(N,arguments),I.toggleOption&&I.toggleOption({label:v,value:N.value})},F.name=I.name,F.checked=I.value.includes(N.value));var T=s()((a={},(0,n.Z)(a,"".concat(P,"-wrapper"),!0),(0,n.Z)(a,"".concat(P,"-rtl"),"rtl"===w),(0,n.Z)(a,"".concat(P,"-wrapper-checked"),F.checked),(0,n.Z)(a,"".concat(P,"-wrapper-disabled"),R),(0,n.Z)(a,"".concat(P,"-wrapper-in-form-item"),A),a),m),L=s()((0,n.Z)({},"".concat(P,"-indeterminate"),b)),M=b?"mixed":void 0;return c.createElement("label",{className:T,style:h,onMouseEnter:y,onMouseLeave:g},c.createElement(i.default,(0,l.Z)({"aria-checked":M},F,{prefixCls:P,className:L,disabled:R,ref:t})),void 0!==v&&c.createElement("span",null,v))},g=c.forwardRef(y),x=g;x.Group=h,x.__ANT_CHECKBOX=!0;var Z=x},47960:function(e,t,a){"use strict";var n=a(8081),l=a.n(n),r=a(23645),s=a.n(r)()(l());s.push([e.id,'/*\n *  Copyright 2022 Collate\n *  Licensed under the Apache License, Version 2.0 (the "License");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *  http://www.apache.org/licenses/LICENSE-2.0\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an "AS IS" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n.request-badge.success .ant-badge-count {\n  background-color: #008376;\n}\n.request-badge.failed .ant-badge-count {\n  background-color: #ff4c3b;\n}\n.request-badge.running .ant-badge-count {\n  background-color: #54C5D0;\n}\n',""]),t.Z=s},50132:function(e,t,a){"use strict";a.r(t);var n=a(87462),l=a(4942),r=a(8384),s=a(1413),i=a(15671),c=a(43144),o=a(60136),u=a(79147),d=a(67294),m=a(67795),v=a.n(m),p=function(e){(0,o.Z)(a,e);var t=(0,u.Z)(a);function a(e){var n;(0,i.Z)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.props,a=t.disabled,l=t.onChange;a||("checked"in n.props||n.setState({checked:e.target.checked}),l&&l({target:(0,s.Z)((0,s.Z)({},n.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var l="checked"in e?e.checked:e.defaultChecked;return n.state={checked:l},n}return(0,c.Z)(a,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,s=t.className,i=t.style,c=t.name,o=t.id,u=t.type,m=t.disabled,p=t.readOnly,f=t.tabIndex,b=t.onClick,h=t.onFocus,E=t.onBlur,y=t.onKeyDown,g=t.onKeyPress,x=t.onKeyUp,Z=t.autoFocus,C=t.value,N=t.required,S=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),k=Object.keys(S).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=S[t]),e}),{}),w=this.state.checked,I=v()(a,s,(e={},(0,l.Z)(e,"".concat(a,"-checked"),w),(0,l.Z)(e,"".concat(a,"-disabled"),m),e));return d.createElement("span",{className:I,style:i},d.createElement("input",(0,n.Z)({name:c,id:o,type:u,required:N,readOnly:p,disabled:m,tabIndex:f,className:"".concat(a,"-input"),checked:!!w,onClick:b,onFocus:h,onBlur:E,onKeyUp:x,onKeyDown:y,onKeyPress:g,onChange:this.handleChange,autoFocus:Z,ref:this.saveInput,value:C},k)),d.createElement("span",{className:"".concat(a,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,s.Z)((0,s.Z)({},t),{},{checked:e.checked}):null}}]),a}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.default=p},67795:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var s=l.apply(null,a);s&&e.push(s)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},85329:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n,l,r,s=a(70655),i=a(59879),c=a(71230),o=a(15746),u=a(91894),d=a(19650),m=a(71577),v=a(27049),p=a(79166),f=a(96486),b=a(67294),h=a(97451);!function(e){e.ElasticSearch="elasticSearch",e.Kafka="kafka"}(n||(n={})),function(e){e.Batch="batch",e.Stream="stream"}(l||(l={})),function(e){e.Active="ACTIVE",e.ActiveWithError="ACTIVE_WITH_ERROR",e.Completed="COMPLETED",e.Idle="IDLE",e.Retry="RETRY",e.Starting="STARTING"}(r||(r={}));var E=function(e){return(0,s.mG)(void 0,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return[4,h.Z.get("/indexResource/reindex/status/"+e)];case 1:return[2,t.sent().data]}}))}))},y=function(e){var t=e.runMode,a=e.entities,l=void 0===a?["all"]:a,r=e.recreateIndex,i=void 0===r||r,c=e.batchSize,o=e.flushIntervalInSec;return(0,s.mG)(void 0,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(a){switch(a.label){case 0:return e={publisherType:n.ElasticSearch,runMode:t,recreateIndex:i,entities:l,batchSize:c,flushIntervalInSec:o},[4,h.Z.post("/indexResource/reindex",e)];case 1:return[2,a.sent().data]}}))}))},g=a(80131),x=a(95216),Z=a(62761),C=a(85087),N=a(6929),S=a(67800),k=a(38464),w=function(e){switch(e){case r.Idle:return k.PJ.TASK_OPEN;case r.Starting:case r.Active:case r.Completed:return k.PJ.SUCCESS_BADGE;case r.ActiveWithError:return k.PJ.FAIL_BADGE;case r.Retry:return k.PJ.PENDING_BADGE;default:return""}},I=function(e){switch(e){case r.Starting:return(0,S.t)("label.starting");case r.Idle:return(0,S.t)("label.idle");case r.Completed:return(0,S.t)("label.completed");case r.Active:return(0,S.t)("label.active");case r.ActiveWithError:return(0,S.t)("label.active-with-error");case r.Retry:return(0,S.t)("label.retry");default:return e||""}},A=a(87968),O=a(50168),R=a(93379),D=a.n(R),P=a(7795),F=a.n(P),T=a(90569),L=a.n(T),M=a(3565),B=a.n(M),V=a(19216),z=a.n(V),K=a(44589),_=a.n(K),G=a(47960),U={};U.styleTagTransform=_(),U.setAttributes=B(),U.insert=L().bind(null,"head"),U.domAPI=F(),U.insertStyleElement=z(),D()(G.Z,U),G.Z&&G.Z.locals&&G.Z.locals;var j=a(50146),J=a(9242),q=a(34041),W=a(9676),H=a(4107),Y=a(437),Q=[{value:"table",label:(0,S.t)("label.table")},{value:"topic",label:(0,S.t)("label.topic")},{value:"dashboard",label:(0,S.t)("label.dashboard")},{value:"pipeline",label:(0,S.t)("label.pipeline")},{value:"mlmodel",label:(0,S.t)("label.mlmodel")},{value:"user",label:(0,S.t)("label.user")},{value:"team",label:(0,S.t)("label.team")},{value:"glossaryTerm",label:(0,S.t)("label.glossary-term")},{value:"tag",label:(0,S.t)("label.tag")},{value:"entityReportData",label:(0,S.t)("label.data-assets-report")},{value:"webAnalyticEntityViewReport",label:(0,S.t)("label.web-analytics-report")},{value:"webAnalyticUserActivityReport",label:(0,S.t)("label.user-analytics-report")}],X=["table","topic","dashboard","pipeline","mlmodel","user","team","glossaryTerm","tag","entityReportData","webAnalyticEntityViewReport","webAnalyticUserActivityReport"],$=[{label:(0,S.t)("label.yes"),value:!0},{label:(0,S.t)("label.no"),value:!1}],ee=function(e){var t=e.visible,a=e.onCancel,n=e.onSave,l=e.confirmLoading,r=(0,Y.$)().t,i=(0,s.CR)((0,b.useState)(X),2),u=i[0],d=i[1];return b.createElement(j.Z,{centered:!0,closable:!1,confirmLoading:l,okButtonProps:{form:"re-index-form",type:"primary",htmlType:"submit"},okText:"Submit",title:r("label.re-index-elastic-search"),visible:t,width:650,onCancel:a},b.createElement(J.Z,{id:"re-index-form",layout:"vertical",name:"elastic-search-re-index",onFinish:n},b.createElement(J.Z.Item,{initialValue:!0,label:r("label.recreate-indexes"),name:"recreateIndex"},b.createElement(q.Z,{"data-testid":"re-index-selector",options:$})),b.createElement(J.Z.Item,{initialValue:u,label:r("label.entities-plural"),name:"entities"},b.createElement(W.Z.Group,{onChange:function(e){return d(e)}},b.createElement(c.Z,{gutter:[16,16]},Q.map((function(e){return b.createElement(o.Z,{key:e.value,span:8},b.createElement(W.Z,{value:e.value},e.label))}))))),b.createElement(J.Z.Item,{initialValue:30,label:r("label.flush-interval-secs"),name:"flushIntervalInSec"},b.createElement(H.Z,{"data-testid":"flush-interval-in-sec",placeholder:r("label.enter-entity",{entity:r("label.seconds-plural")})})),b.createElement(J.Z.Item,{initialValue:100,label:r("label.batch-size")+":",name:"batchSize"},b.createElement(H.Z,{"data-testid":"batch-size",placeholder:r("label.enter-entity",{entity:r("label.batch-size")})}))))},te=function(){var e,t,a,n,r,h,S,R,D,P,F,T,L,M,B,V,z,K,_=(0,s.CR)((0,b.useState)(),2),G=_[0],U=_[1],j=(0,s.CR)((0,b.useState)(),2),J=j[0],q=j[1],W=(0,C.a)().isAdminUser,H=(0,s.CR)((0,b.useState)(!1),2),Y=H[0],Q=H[1],X=(0,s.CR)((0,b.useState)(!1),2),$=X[0],te=X[1],ae=(0,s.CR)((0,b.useState)(!1),2),ne=ae[0],le=ae[1],re=(0,s.CR)((0,b.useState)(!1),2),se=re[0],ie=re[1],ce=(0,x.KM)().socket,oe=function(){return(0,s.mG)(void 0,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),Q(!0),[4,E(l.Batch)];case 1:return e=t.sent(),U(e),[3,4];case 2:return t.sent(),(0,O.Eo)(N.Z["api-error-messages"]["fetch-re-index-all"]),[3,4];case 3:return Q(!1),[7];case 4:return[2]}}))}))},ue=function(){return(0,s.mG)(void 0,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),te(!0),[4,E(l.Stream)];case 1:return e=t.sent(),q(e),[3,4];case 2:return t.sent(),(0,O.Eo)(N.Z["api-error-messages"]["fetch-re-index-all"]),[3,4];case 3:return te(!1),[7];case 4:return[2]}}))}))};return(0,b.useEffect)((function(){return ce&&ce.on(Z.QH.JOB_STATUS,(function(e){if(e){var t=JSON.parse(e);t.runMode===l.Batch?U(t):q(t)}})),function(){ce&&ce.off(Z.QH.JOB_STATUS)}}),[ce]),(0,b.useEffect)((function(){oe(),ue()}),[]),b.createElement("div",null,b.createElement(c.Z,{gutter:[16,16]},b.createElement(o.Z,{span:24},b.createElement(u.Z,{extra:b.createElement(d.Z,null,b.createElement(m.Z,{"data-testid":"elastic-search-re-fetch-data",disabled:Y,icon:b.createElement(i.Z,null),size:"small",title:"Refresh log",onClick:oe}),b.createElement(m.Z,{"data-testid":"elastic-search-re-index-all",disabled:!W,size:"small",type:"primary",onClick:function(){return ie(!0)}},"Re Index All")),loading:Y,size:"small",title:"ElasticSearch"},b.createElement(c.Z,{gutter:[16,8]},b.createElement(o.Z,{span:24},b.createElement(d.Z,{wrap:!0,direction:"horizontal",size:0},b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Mode")," :",b.createElement("span",{className:"m-l-xs"},(0,f.startCase)(null==G?void 0:G.runMode)||"--")),b.createElement(v.Z,{type:"vertical"}),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Status")," :",b.createElement("span",{className:"m-l-xs"},b.createElement(d.Z,{size:8},(null==G?void 0:G.status)&&b.createElement(k.ZP,{alt:"result",className:"w-4",icon:w(null==G?void 0:G.status)}),b.createElement("span",null,I(null==G?void 0:G.status)||"--")))),b.createElement(v.Z,{type:"vertical"}),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Index stats")," :",b.createElement("span",{className:"m-l-xs"},(0,f.isEmpty)(G)?"--":b.createElement(d.Z,{size:8},b.createElement(p.Z,{className:"request-badge running",count:null===(e=null==G?void 0:G.stats)||void 0===e?void 0:e.total,overflowCount:99999999,title:"Total index sent: "+(null===(t=null==G?void 0:G.stats)||void 0===t?void 0:t.total)}),b.createElement(p.Z,{className:"request-badge success",count:null===(a=null==G?void 0:G.stats)||void 0===a?void 0:a.success,overflowCount:99999999,title:"Success index: "+(null===(n=null==G?void 0:G.stats)||void 0===n?void 0:n.success)}),b.createElement(p.Z,{showZero:!0,className:"request-badge failed",count:null===(r=null==G?void 0:G.stats)||void 0===r?void 0:r.failed,overflowCount:99999999,title:"Failed index: "+(null===(h=null==G?void 0:G.stats)||void 0===h?void 0:h.failed)})))),b.createElement(v.Z,{type:"vertical"}),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Last Updated")," :",b.createElement("span",{className:"m-l-xs"},(null==G?void 0:G.timestamp)?(0,A.sd)(null==G?void 0:G.timestamp):"--")),b.createElement(v.Z,{type:"vertical"}),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Last Failed At:"),b.createElement("p",{className:"m-l-xs"},(null===(S=null==G?void 0:G.failureDetails)||void 0===S?void 0:S.lastFailedAt)?(0,A.sd)(null===(R=null==G?void 0:G.failureDetails)||void 0===R?void 0:R.lastFailedAt):"--")))),b.createElement(o.Z,{span:24},b.createElement("span",{className:"text-grey-muted"},"Failure Context:"),b.createElement("span",{className:"m-l-xs"},(null===(D=null==G?void 0:G.failureDetails)||void 0===D?void 0:D.context)?b.createElement(g.Z,{enableSeeMoreVariant:Boolean(G),markdown:null===(P=null==G?void 0:G.failureDetails)||void 0===P?void 0:P.context}):"--")),b.createElement(o.Z,{span:24},b.createElement("span",{className:"text-grey-muted"},"Last error:"),b.createElement("span",{className:"m-l-xs"},(null===(F=null==G?void 0:G.failureDetails)||void 0===F?void 0:F.lastFailedReason)?b.createElement(g.Z,{enableSeeMoreVariant:Boolean(G),markdown:null===(T=null==G?void 0:G.failureDetails)||void 0===T?void 0:T.lastFailedReason}):"--"))))),b.createElement(o.Z,{span:24},b.createElement(u.Z,{extra:b.createElement(m.Z,{"data-testid":"elastic-search-re-fetch-data",disabled:$,icon:b.createElement(i.Z,null),size:"small",title:"Refresh log",onClick:ue}),loading:$,size:"small",title:"ElasticSearch"},b.createElement(c.Z,{gutter:[16,8]},b.createElement(o.Z,{span:24},b.createElement(d.Z,{direction:"horizontal",size:16},b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Mode")," :",b.createElement("span",{className:"m-l-xs"},(0,f.startCase)(null==J?void 0:J.runMode)||"--")),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Status")," :",b.createElement("span",{className:"m-l-xs"},b.createElement(d.Z,{size:8},(null==J?void 0:J.status)&&b.createElement(k.ZP,{alt:"result",className:"w-4",icon:w(null==J?void 0:J.status)}),b.createElement("span",null,I(null==J?void 0:J.status)||"--")))),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Last Updated")," :",b.createElement("span",{className:"m-l-xs"},(null==J?void 0:J.timestamp)?(0,A.sd)(null==J?void 0:J.timestamp):"--")),b.createElement("div",{className:"flex"},b.createElement("span",{className:"text-grey-muted"},"Last Failed At:"),b.createElement("p",{className:"m-l-xs"},(null===(L=null==J?void 0:J.failureDetails)||void 0===L?void 0:L.lastFailedAt)?(0,A.sd)(null===(M=null==J?void 0:J.failureDetails)||void 0===M?void 0:M.lastFailedAt):"--")))),b.createElement(o.Z,{span:24},b.createElement("span",{className:"text-grey-muted"},"Failure Context:"),b.createElement("span",{className:"m-l-xs"},(null===(B=null==J?void 0:J.failureDetails)||void 0===B?void 0:B.context)?b.createElement(g.Z,{enableSeeMoreVariant:Boolean(J),markdown:null===(V=null==J?void 0:J.failureDetails)||void 0===V?void 0:V.context}):"--")),b.createElement(o.Z,{span:24},b.createElement("span",{className:"text-grey-muted"},"Last error:"),b.createElement("span",{className:"m-l-xs"},(null===(z=null==J?void 0:J.failureDetails)||void 0===z?void 0:z.lastFailedReason)?b.createElement(g.Z,{enableSeeMoreVariant:Boolean(J),markdown:null===(K=null==J?void 0:J.failureDetails)||void 0===K?void 0:K.lastFailedReason}):"--")))))),b.createElement(ee,{confirmLoading:ne,visible:se,onCancel:function(){return ie(!1)},onSave:function(e){return(0,s.mG)(void 0,void 0,void 0,(function(){var t;return(0,s.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,3,4]),le(!0),[4,y((0,s.pi)((0,s.pi)({},e),{runMode:l.Batch}))];case 1:return a.sent(),(0,O.XA)(N.Z["api-success-messages"]["fetch-re-index-all"]),[3,4];case 2:return t=a.sent(),(0,O.Eo)(t,N.Z["api-error-messages"]["update-re-index-all"]),[3,4];case 3:return ie(!1),le(!1),[7];case 4:return[2]}}))}))}}))}}}]);