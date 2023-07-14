"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[4662],{32822:function(e,t,n){n.d(t,{XZ:function(){return o},ne:function(){return c},E0:function(){return s},Pj:function(){return l},FD:function(){return u},aw:function(){return d},g6:function(){return m},cB:function(){return w},tr:function(){return f},x1:function(){return v},ut:function(){return p},fT:function(){return g},MX:function(){return b},z8:function(){return h}});var r=n(70655),i=n(22334),a=n(97451),o=function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return[4,a.Z.post("/services/ingestionPipelines",e)];case 1:return[2,t.sent().data]}}))}))},c=function(e,t){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n=(0,i.JP)("/services/ingestionPipelines/name/"+e,t),[4,a.Z.get(n)];case 1:return[2,r.sent().data]}}))}))},s=function(e,t){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n=(0,i.JP)("/services/ingestionPipelines/name/"+e,t),[4,a.Z.get(n)];case 1:return[2,r.sent().data]}}))}))},l=function(e,t,n){return(0,r.mG)(void 0,void 0,void 0,(function(){var o,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return o=t?"service="+t:"",c=""+(0,i.JP)("/services/ingestionPipelines",e,o)+(n||""),[4,a.Z.get(c)];case 1:return[2,r.sent().data]}}))}))},u=function(e){return a.Z.post("/services/ingestionPipelines/trigger/"+e)},d=function(e){return a.Z.post("/services/ingestionPipelines/deploy/"+e)},m=function(e){return a.Z.post("/services/ingestionPipelines/toggleIngestion/"+e)},w=function(e){return a.Z.delete("/services/ingestionPipelines/"+e+"?hardDelete=true")},f=function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return[4,a.Z.put("/services/ingestionPipelines",e)];case 1:return[2,t.sent().data]}}))}))},v=function(){return a.Z.get("/services/ingestionPipelines/status")},p=function(){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,a.Z.get("/services/ingestionPipelines/ip")];case 1:return[2,e.sent().data]}}))}))},g=function(e,t){return a.Z.get("/services/ingestionPipelines/logs/"+e+"/last",{params:{after:t}})},b=function(e){return a.Z.post("/services/ingestionPipelines/kill/"+e)},h=function(e,t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/services/ingestionPipelines/"+e+"/pipelineStatus",{params:t})];case 1:return[2,n.sent().data]}}))}))}},179:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(70655),i=n(96486),a=n(67294),o=n(32822),c=n(22503),s=n(89204),l=n(6929),u=n(65131),d=n(31487),m=n(98736),w=n(41642),f=n(11384),v=n(81706),p=n(79469),g=n(35892),b=n(50168),h=n(67814),y=n(8056),E=n(94184),x=n.n(E),C=n(38464),S=n(10584),N=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"tw-flex tw-justify-between tw-items-center"},a.createElement("div",null,a.createElement("label",{className:"control-label"},e.title),a.createElement("p",{className:"field-description"},e.schema.description)),e.canAdd&&a.createElement(S.z,{className:"tw-h-7 tw-w-7 tw-px-2","data-testid":"add-item-"+e.title,size:"small",theme:"primary",variant:"contained",onClick:e.onAddClick},a.createElement(h.G,{icon:"plus"}))),e.items.map((function(e,t){return a.createElement("div",{className:x()("tw-flex tw-items-center tw-w-full",{"tw-mt-2":t>0}),key:e.key+"-"+t},a.createElement("div",{className:"tw-flex-1 array-fields"},e.children),e.hasRemove&&a.createElement("button",{className:"focus:tw-outline-none tw-w-7 tw-ml-3",type:"button",onClick:function(t){e.onDropIndexClick(e.index)(t)}},a.createElement(C.ZP,{alt:"delete",icon:C.PJ.DELETE,title:"Delete",width:"16px"})))})))},k=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"tw-flex tw-justify-between tw-items-center"},a.createElement("div",null,a.createElement("label",{className:"control-label",id:e.idSchema.$id+"__title"},e.title),a.createElement("p",{className:"field-description",id:e.idSchema.$id+"__description"},e.description)),e.schema.additionalProperties&&a.createElement(S.z,{className:"tw-h-7 tw-w-7 tw-px-2","data-testid":"add-item-"+e.title,id:e.idSchema.$id+"__add",size:"small",theme:"primary",variant:"contained",onClick:function(){e.onAddClick(e.schema)()}},a.createElement(h.G,{icon:"plus"}))),e.properties.map((function(t,n){return a.createElement("div",{className:x()("property-wrapper",{"additional-fields":e.schema.additionalProperties}),key:t.content.key+"-"+n},t.content)})))},T=n(53867),Z=function(e){var t=e.formData,n=e.schema,c=e.okText,s=e.cancelText,l=e.showFormHeader,u=void 0!==l&&l,d=e.status,w=void 0===d?"initial":d,f=e.onCancel,v=e.onSubmit,p=e.onTestConnection,g=e.uiSchema,b=e.isAirflowAvailable,E=e.disableTestConnection,Z=(0,r._T)(e,["formData","schema","okText","cancelText","showFormHeader","status","onCancel","onSubmit","onTestConnection","uiSchema","isAirflowAvailable","disableTestConnection"]),P=(0,a.useRef)(),z=(0,r.CR)((0,a.useState)((0,m.jv)(t)),2),A=z[0],D=z[1],R=(0,r.CR)((0,a.useState)(!1),2),j=R[0],_=R[1],F=(0,r.CR)((0,a.useState)("initial"),2),J=F[0],G=F[1],I=(0,r.CR)((0,a.useState)("[fetching]"),2),O=I[0],M=I[1];return(0,a.useEffect)((function(){b&&(0,r.mG)(void 0,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,(0,o.ut)()];case 1:return e=t.sent(),M((null==e?void 0:e.ip)||"[unknown]"),[3,3];case 2:return t.sent(),M("[error - unknown]"),[3,3];case 3:return[2]}}))}))}),[b]),a.createElement(y.ZP,(0,r.pi)({ArrayFieldTemplate:N,ObjectFieldTemplate:k,className:x()("rjsf",Z.className,{"no-header":!u}),formData:A,ref:P,schema:n,showErrorList:!1,transformErrors:function(e){return e.map((function(e){var t=e.params.missingProperty,n=(0,i.startCase)(t)+" is required";return e.message=n,e}))},uiSchema:g,onChange:function(e){var t;t=e.formData,D(t),Z.onChange&&Z.onChange(e)},onSubmit:v},Z),(0,i.isEmpty)(n)&&a.createElement("div",{className:"tw-text-grey-muted tw-text-center"},"No Connection Configs available."),!(0,i.isEmpty)(n)&&b&&a.createElement("div",{className:"tw-flex tw-justify-between tw-bg-white tw-border tw-border-main tw-shadow tw-rounded tw-p-3 tw-mt-4","data-testid":"ip-address"},a.createElement("div",{className:"tw-self-center"},"MCI-DGP will connect to your resource from the IP ",O,". Make sure to allow inbound traffic in your network security settings.")),!(0,i.isEmpty)(n)&&p&&a.createElement("div",{className:"tw-flex tw-justify-between tw-bg-white tw-border tw-border-main tw-shadow tw-rounded tw-p-3 tw-mt-4"},a.createElement("div",{className:"tw-self-center"},function(){switch(J){case"waiting":return a.createElement("div",{className:"tw-flex"},a.createElement(T.Z,{size:"small",type:"default"})," ",a.createElement("span",{className:"tw-ml-2"},"Testing Connection"));case"success":return a.createElement("div",{className:"tw-flex"},a.createElement(C.ZP,{alt:"success-badge",icon:C.PJ.SUCCESS_BADGE}),a.createElement("span",{className:"tw-ml-2"},"Connection test was successful"));default:return"Test your connections before creating the service"}}()),a.createElement(S.z,{className:x()("tw-self-center tw-py-1 tw-px-1.5",{"tw-opacity-40":j}),"data-testid":"test-connection-btn",disabled:j||E,size:"small",theme:"primary",variant:"outlined",onClick:function(){A&&p&&(_(!0),G("waiting"),p(A).then((function(){G("success")})).catch((function(){G("initial")})).finally((function(){_(!1)})))}},"Test Connection")),a.createElement("div",{className:"tw-mt-6 tw-flex tw-justify-between"},a.createElement("div",null),a.createElement("div",{className:"tw-text-right","data-testid":"buttons"},a.createElement(S.z,{size:"regular",theme:"primary",variant:"text",onClick:function(){D((0,m.jv)(t)),f&&f()}},s),"waiting"===w?a.createElement(S.z,{disabled:!0,className:"tw-w-16 tw-h-10 disabled:tw-opacity-100",size:"regular",theme:"primary",variant:"contained"},a.createElement(T.Z,{size:"small",type:"white"})):"success"===w?a.createElement(S.z,{disabled:!0,className:"tw-w-16 tw-h-10 disabled:tw-opacity-100",size:"regular",theme:"primary",variant:"contained"},a.createElement(h.G,{icon:"check"})):a.createElement(S.z,{className:"tw-w-16 tw-h-10","data-testid":"submit-btn",size:"regular",theme:"primary",variant:"contained",onClick:function(){P.current&&P.current.submit()}},c))))},P=function(e){var t,n=e.data,h=e.okText,y=void 0===h?"Save":h,E=e.cancelText,x=void 0===E?"Cancel":E,C=e.serviceType,S=e.serviceCategory,N=e.status,k=e.onCancel,T=e.onSave,P=e.disableTestConnection,z=void 0!==P&&P,A=(0,r.CR)((0,a.useState)(!1),2),D=A[0],R=A[1],j=(0,a.useMemo)((function(){return(0,g.jz)(C)}),[C]),_=(0,i.isNil)(n)?{}:null===(t=n.connection)||void 0===t?void 0:t.config,F=function(e){var t=(0,m.Fz)(e.formData);T((0,r.pi)((0,r.pi)({},e),{formData:t}))},J=function(e){var t=(0,m.Fz)(e);return new Promise((function(e,n){(0,c.mX)(t,(0,g.Qw)(S)).then((function(t){if(200!==t.status)throw l.Z["api-error-messages"]["unexpected-server-response"];e()})).catch((function(e){(0,b.Eo)(e,l.Z["api-error-messages"]["test-connection-error"]),n(e)}))}))};return(0,a.useEffect)((function(){(0,o.x1)().then((function(e){200===e.status?R(!0):R(!1)})).catch((function(e){console.log(e)}))}),[]),a.createElement(a.Fragment,null,function(){var e,t,n={schema:{},uiSchema:{}},o=(0,i.cloneDeep)(_||{});try{for(var c=(0,r.XA)(Object.entries(o)),l=c.next();!l.done;l=c.next()){var m=(0,r.CR)(l.value,2),g=m[0],b=m[1];(0,i.isNil)(b)&&delete o[g]}}catch(t){e={error:t}}finally{try{l&&!l.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}switch(S){case s.u.DATABASE_SERVICES:n=(0,d.c)(C);break;case s.u.MESSAGING_SERVICES:n=(0,w.m)(C);break;case s.u.DASHBOARD_SERVICES:n=(0,u.n)(C);break;case s.u.PIPELINE_SERVICES:n=(0,p.o)(C);break;case s.u.ML_MODEL_SERVICES:n=(0,v.$)(C);break;case s.u.METADATA_SERVICES:n=(0,f.J)(C)}return a.createElement(Z,{cancelText:x,disableTestConnection:z,formData:o,isAirflowAvailable:D,okText:y,schema:n.schema,status:N,uiSchema:n.uiSchema,onCancel:k,onSubmit:F,onTestConnection:j&&D?J:void 0})}())}},10584:function(e,t,n){n.d(t,{z:function(){return s}});var r=n(70655),i=n(45697),a=n.n(i),o=n(67294),c={base:"button-comp tw-align-bottom tw-inline-flex tw-items-center tw-justify-center tw-cursor-pointer \n    tw-leading-5 tw-transition-colors tw-duration-150 tw-font-medium focus:tw-outline-none",block:"tw-block tw-w-full",size:{large:"tw-px-5 tw-py-3 tw-rounded-lg",regular:"tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm",small:"tw-px-2 tw-py-0.5 tw-rounded-md tw-text-sm","x-small":"tw-px-2 tw-py-px tw-rounded-md tw-text-xs",custom:""},contained:{default:{base:"tw-text-gray-600 tw-bg-gray-300 tw-border tw-border-transparent",active:"active:tw-bg-gray-400 hover:tw-bg-gray-400 focus:tw-ring focus:tw-ring-gray-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-white tw-bg-primary tw-border tw-border-transparent",active:"active:tw-bg-primary-active hover:tw-bg-primary-hover focus:tw-bg-primary-active focus:tw-ring focus:tw-ring-purple-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"}},outlined:{default:{base:"tw-text-grey-muted tw-border-gray-300 tw-border dark:tw-text-gray-400 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-border-gray-600 focus:tw-border-gray-600 \n      hover:tw-text-gray-600 active:tw-text-gray-600 focus:tw-ring focus:tw-ring-gray-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-primary tw-border-primary tw-border dark:tw-text-blue-300 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-bg-primary hover:tw-text-white focus:tw-bg-primary \n      focus:tw-text-white active:tw-bg-primary active:tw-text-white focus:tw-ring focus:tw-ring-purple-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"}},link:{default:{base:"tw-text-grey dark:tw-text-gray-400 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-underline focus:tw-underline \n        hover:tw-text-gray-600 active:tw-text-gray-600",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-primary dark:tw-text-blue-300 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-underline focus:tw-underline \n        hover:tw-text-primary-hover active:tw-text-primary-active",disabled:"tw-opacity-50 tw-cursor-not-allowed"}},text:{default:{base:"tw-text-grey-muted dark:tw-text-gray-400 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-text-gray-600 active:tw-text-gray-600",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-primary dark:tw-text-blue-300 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-text-primary-hover active:tw-text-primary-active",disabled:"tw-opacity-50 tw-cursor-not-allowed"}}},s=o.forwardRef((function(e,t){var n=e.block,i=void 0!==n&&n,a=e.children,s=e.className,l=void 0===s?"":s,u=e.disabled,d=void 0!==u&&u,m=e.size,w=void 0===m?"regular":m,f=e.tag,v=void 0===f?"button":f,p=e.theme,g=void 0===p?"default":p,b=e.type,h=void 0===b?"button"===v?"button":void 0:b,y=e.variant,E=void 0===y?"contained":y,x=(0,r._T)(e,["block","children","className","disabled","size","tag","theme","type","variant"]),C=c.base,S=c.block,N=c.size[w],k=c[E][g].base,T=c[E][g].active,Z=c[E][g].disabled,P=[C,N,k,d?Z:T,i?S:"",l].join(" ");return o.createElement(v,(0,r.pi)({className:P,ref:t,disabled:d,type:h},x),a)}));s.propTypes={block:a().bool,children:a().node,className:a().string,disabled:a().bool,tag:a().string,size:a().oneOf(["large","regular","small","x-small","custom"]),theme:a().oneOf(["default","primary"]),type:a().oneOf(["button","submit","reset"]),variant:a().oneOf(["contained","outlined","link","text"])},s.displayName="Button"},24662:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(70655),i=n(56256),a=n(19650),o=n(96486),c=n(67294),s=n(59293),l=n(22503),u=n(28178),d=n(84419),m=n(74380),w=n(14109),f=n(53867),v=n(96840),p=n(179),g=function(e){var t=e.serviceCategory,n=e.serviceFQN,i=e.serviceType,a=e.data,o=e.handleUpdate,l=e.disableTestConnection,u=(0,s.k6)(),d=(0,r.CR)((0,c.useState)("initial"),2),m=d[0],w=d[1];return c.createElement("div",{className:"bg-white h-full"},c.createElement("div",{className:"w-full p-b-lg","data-testid":"service-config",id:"serviceConfig"},c.createElement("div",{className:"tw-mx-auto"},c.createElement(p.Z,{data:a,disableTestConnection:l,serviceCategory:t,serviceType:i,status:m,onCancel:function(){u.goBack()},onSave:function(e){w("waiting"),o(e.formData,t).then((function(){setTimeout((function(){w("success"),u.push((0,v.jN)(t,n))}),200)})).finally((function(){setTimeout((function(){w("initial")}),500)}))}}))))},b=n(96162),h=n(85071),y=n(22132),E=n(89204),x=n(6929),C=n(48132),S=n(35892),N=n(50168),k=function(){var e,t=(0,s.UO)(),n=t.serviceFQN,p=t.serviceCategory,k=(0,r.CR)((0,c.useState)(!0),2),T=k[0],Z=k[1],P=(0,r.CR)((0,c.useState)(!1),2),z=P[0],A=P[1],D=(0,r.CR)((0,c.useState)(),2),R=D[0],j=D[1],_=(0,r.CR)((0,c.useState)([]),2),F=_[0],J=_[1];return(0,c.useEffect)((function(){Z(!0),(0,l.dO)(p,n,["owner"]).then((function(e){e?(j(e),J([{name:(0,o.startCase)(p),url:(0,v.si)(b.CZ.SERVICES,(0,S.tJ)(p))},{name:(0,C.C_)(e),imgSrc:(0,S.zF)(e.serviceType),url:(0,v.jN)(p,n)},{name:"Edit Connection",url:"",activeTitle:!0}])):(0,N.Eo)(x.Z["api-error-messages"]["fetch-service-error"])})).catch((function(e){var t;404===(null===(t=e.response)||void 0===t?void 0:t.status)?A(!0):(0,N.Eo)(e,x.Z["api-error-messages"]["fetch-service-error"])})).finally((function(){Z(!1)}))}),[n,p]),c.createElement(m.Z,null,c.createElement("div",{className:"self-center"},c.createElement(c.Fragment,null,T?c.createElement(f.Z,null):z?c.createElement(u.Z,null,(0,C.mW)(p,n)):c.createElement(w.Z,{center:!0},c.createElement(a.Z,{direction:"vertical",size:"middle"},c.createElement(d.Z,{titleLinks:F}),c.createElement("div",{className:"form-container"},c.createElement(i.Z.Title,{level:5},"Edit "+n+" Service Connection"),c.createElement(g,{data:R,disableTestConnection:E.u.METADATA_SERVICES===p&&y.sl===n,handleUpdate:function(e){var t={name:null==R?void 0:R.name,serviceType:null==R?void 0:R.serviceType,description:null==R?void 0:R.description,owner:null==R?void 0:R.owner,connection:{config:e}};return new Promise((function(e,n){var i;(0,l.Pg)(p,null!==(i=null==R?void 0:R.id)&&void 0!==i?i:"",t).then((function(t){var n;t?j((0,r.pi)((0,r.pi)({},t),{owner:null!==(n=null==t?void 0:t.owner)&&void 0!==n?n:null==R?void 0:R.owner})):(0,N.Eo)(""+x.Z["api-error-messages"]["update-service-config-error"]),e()})).catch((function(e){n(),(0,N.Eo)(e,""+x.Z["api-error-messages"]["update-service-config-error"])}))}))},serviceCategory:p,serviceFQN:n,serviceType:(null==R?void 0:R.serviceType)||""}))),c.createElement("div",{className:"m-t-xlg p-x-lg w-800"},(e=h.rw.find((function(e){return 3===e.step})))&&c.createElement(c.Fragment,null,c.createElement(i.Z.Title,{level:5},e.title),c.createElement("div",{className:"mb-5"},e.description)))))))}},98736:function(e,t,n){n.d(t,{cH:function(){return i},Fz:function(){return o},jv:function(){return c}});var r=n(96486);function i(e){for(var t in e)if("object"==typeof e[t])i(e[t]);else{var n=e[t];(0,r.isString)(n)&&(e[t]=n.replace(/\\n/g,"\n"))}return e}function a(e){for(var t in e)if("object"==typeof e[t])a(e[t]);else{var n=e[t];t.startsWith("newKey")&&"New Value"===n&&delete e[t]}return e}function o(e){return function(e,t){if(e&&e[t]){var n=e[t];for(var r in n){var i=n[r];try{e[t][r]=JSON.parse(i)}catch(e){}}}return e}(e=a(e=i(e=(0,r.cloneDeep)(e))),"connectionArguments")}function c(e){return function(e,t){if(e&&e[t]){var n=e[t];for(var r in n){var i=n[r];"object"==typeof i&&(e[t][r]=JSON.stringify(i))}}return e}(e=(0,r.cloneDeep)(e),"connectionArguments")}}}]);