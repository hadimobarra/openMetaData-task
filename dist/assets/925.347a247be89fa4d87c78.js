"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[925],{49857:function(e,t,n){var a=n(8081),r=n.n(a),i=n(23645),o=n.n(i)()(r());o.push([e.id,'/*\n *  Copyright 2022 Collate\n *  Licensed under the Apache License, Version 2.0 (the "License");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *  http://www.apache.org/licenses/LICENSE-2.0\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an "AS IS" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n.description-markdown-editor .ant-modal-header,\n.description-markdown-editor .ant-modal-body,\n.description-markdown-editor .ant-modal-footer {\n  padding: 20px 24px;\n}\n',""]),t.Z=o},63750:function(e,t,n){n.d(t,{Qe:function(){return i},ov:function(){return o},q8:function(){return l},TJ:function(){return s}});var a=n(70655),r=n(97451),i=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t;return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return t={category:e,limit:"12"},[4,r.Z.get("/metadata/types",{params:t})];case 1:return[2,n.sent().data]}}))}))},o=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return t="/metadata/types/name/"+e,n={fields:"customProperties"},[4,r.Z.get(t,{params:n})];case 1:return[2,a.sent().data]}}))}))},l=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return n="/metadata/types/"+e,[4,r.Z.put(n,t)];case 1:return[2,a.sent().data]}}))}))},s=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n,i;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return n={headers:{"Content-type":"application/json-patch+json"}},i="/metadata/types/"+e,[4,r.Z.patch(i,t,n)];case 1:return[2,a.sent().data]}}))}))}},19521:function(e,t,n){var a=n(70655),r=n(38222),i=n(94184),o=n.n(i),l=n(96486),s=n(67294),c=n(73935),d=n(58369),u=n(31615),m=n(26051),p=n(82913);t.Z=function(e){var t=e.threadLink,n=e.className,i=e.onCancel,w=e.open,h=e.postFeedHandler,f=e.createThread,v=e.deletePostHandler,E=e.updateThreadHandler,y=e.threadType,N=r.Z.TabPane,b=(0,a.CR)((0,s.useState)(d.qL.TASKS),2),x=b[0],k=b[1];return(0,s.useEffect)((function(){(0,l.isEqual)(y,u.Th.Conversation)&&k(d.qL.CONVERSATIONS)}),[y]),(0,s.useEffect)((function(){document.body.style.overflow="hidden"}),[]),c.createPortal(s.createElement("div",{className:o()("tw-h-full",n)},s.createElement(m.Z,{className:"tw-z-9997 tw-fixed tw-inset-0 tw-top-16 tw-h-full tw-w-3/5 tw-bg-black tw-opacity-40",onCancel:function(){return i&&i()}}),s.createElement("div",{className:o()("tw-top-16 tw-right-0 tw-bottom-0 tw-w-2/5 tw-bg-white tw-fixed tw-shadow-md tw-transform tw-ease-in-out tw-duration-1000 tw-overflow-y-auto tw-z-9997",{"tw-translate-x-0":w,"tw-translate-x-full":!w}),id:"thread-panel"},s.createElement(r.Z,{activeKey:x,className:"ant-tabs-custom-line ant-tabs-custom-threadpanel",onChange:function(e){k(e)}},s.createElement(N,{key:d.qL.TASKS,tab:"Tasks"},s.createElement(p.Z,{createThread:f,deletePostHandler:v,postFeedHandler:h,threadLink:t,threadType:u.Th.Task,updateThreadHandler:E,onCancel:i})),s.createElement(N,{key:d.qL.CONVERSATIONS,tab:"Conversations"},s.createElement(p.Z,{createThread:f,deletePostHandler:v,postFeedHandler:h,threadLink:t,threadType:u.Th.Conversation,updateThreadHandler:E,onCancel:i}))))),document.body)}},47368:function(e,t,n){n.d(t,{p:function(){return g}});var a=n(70655),r=n(50146),i=n(71577),o=n(56256),l=n(67294),s=n(437),c=n(50168),d=n(97809),u=n(53867),m=n(93379),p=n.n(m),w=n(7795),h=n.n(w),f=n(90569),v=n.n(f),E=n(3565),y=n.n(E),N=n(19216),b=n.n(N),x=n(44589),k=n.n(x),C=n(49857),T={};T.styleTagTransform=k(),T.setAttributes=y(),T.insert=v().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=b(),p()(C.Z,T),C.Z&&C.Z.locals&&C.Z.locals;var g=function(e){var t=e.header,n=e.placeholder,m=e.value,p=e.onSave,w=e.onCancel,h=e.visible,f=(0,s.$)().t,v=(0,a.CR)((0,l.useState)(!1),2),E=v[0],y=v[1],N=(0,l.useRef)();return l.createElement(r.Z,{centered:!0,destroyOnClose:!0,className:"description-markdown-editor",closable:!1,"data-testid":"markdown-editor",footer:[l.createElement(i.Z,{"data-testid":"cancel",disabled:E,key:"cancelButton",type:"link",onClick:w},f("label.cancel")),l.createElement(i.Z,{"data-testid":"save",key:"saveButton",type:"primary",onClick:function(){return(0,a.mG)(void 0,void 0,void 0,(function(){var e,t,n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:if(!N.current)return[3,5];y(!0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,null==p?void 0:p(null!==(n=null===(t=N.current)||void 0===t?void 0:t.getEditorContent().trim())&&void 0!==n?n:"")];case 2:return a.sent(),[3,5];case 3:return e=a.sent(),(0,c.Eo)(e),[3,5];case 4:return y(!1),[7];case 5:return[2]}}))}))}},E?l.createElement(u.Z,{size:"small",type:"white"}):f("label.save"))],open:h,title:l.createElement(o.Z.Text,{"data-testid":"header"},t),width:"90%",onCancel:w},l.createElement(d.Z,{initialValue:m,placeHolder:n,ref:N}))}},37620:function(e,t,n){n.d(t,{t:function(){return y}});var a=n(70655),r=n(25213),i=n(96486),o=n(67294),l=n(63750),s=n(50168),c=n(28178),d=n(67800),u=n(38464),m=n(47368),p=n(80131),w=n(67814),h=n(10584),f=function(e){var t=e.value,n=e.onCancel,r=e.type,i=e.propertyName,l=e.onSave,s="string"===r?"text":"number",c=(0,a.CR)((0,o.useState)(t||""),2),d=c[0],u=c[1];return o.createElement("div",{className:"tw-flex tw-items-center tw-gap-1"},o.createElement("input",{className:"tw-form-inputs tw-form-inputs-padding tw-py-0.5 tw-w-64","data-testid":"value-input",id:"value",name:i,placeholder:"value",type:s,value:d,onChange:function(e){var t=e.target.value;u(t)}}),o.createElement("div",{className:"tw-flex tw-justify-end","data-testid":"buttons"},o.createElement(h.z,{className:"tw-px-1 tw-py-1 tw-rounded tw-text-sm tw-mr-1","data-testid":"cancel-value",size:"custom",theme:"primary",variant:"contained",onMouseDown:n},o.createElement(w.G,{className:"tw-w-3.5 tw-h-3.5",icon:"times"})),o.createElement(h.z,{className:"tw-px-1 tw-py-1 tw-rounded tw-text-sm","data-testid":"save-value",size:"custom",theme:"primary",variant:"contained",onClick:function(){l(d)}},o.createElement(w.G,{className:"tw-w-3.5 tw-h-3.5",icon:"check"}))))},v=function(e){var t=e.onShowInput;return o.createElement("span",{className:"tw-cursor-pointer tw-ml-2","data-testid":"edit-icon",onClick:t},o.createElement(u.ZP,{alt:"edit",icon:u.PJ.EDIT,width:"16px"}))},E=function(e){var t,n=e.propertyName,r=e.extension,l=e.propertyType,s=e.onExtensionUpdate,c=null==r?void 0:r[n],u=(0,a.CR)((0,o.useState)(!1),2),w=u[0],h=u[1],E=function(){h(!1)},y=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,o;return(0,a.Jh)(this,(function(c){switch(c.label){case 0:return t=(0,a.pi)((0,a.pi)({},r||{}),((o={})[n]="integer"===l.name?(0,i.toNumber)(e||0):e,o)),[4,s(t)];case 1:return c.sent(),h(!1),[2]}}))}))};return o.createElement("div",null,w?function(){switch(l.name){case"string":case"integer":return o.createElement(f,{propertyName:n,type:l.name,value:c,onCancel:E,onSave:y});case"markdown":return o.createElement(m.p,{header:(0,d.t)("label.edit-property",{propertyName:n}),placeholder:(0,d.t)("label.enter-property-value"),value:c||"",visible:w,onCancel:E,onSave:y});default:return null}}():o.createElement(o.Fragment,null,o.createElement("div",{className:"tw-flex"},(t="markdown"===l.name?o.createElement(p.Z,{markdown:c||""}):o.createElement("span",{"data-testid":"value"},c),"integer"===l.name?(0,i.isUndefined)(c)?o.createElement("span",{className:"tw-text-grey-muted","data-testid":"no-data"},"No data"):t:c?t:o.createElement("span",{className:"tw-text-grey-muted","data-testid":"no-data"},"No data")),o.createElement(v,{onShowInput:function(){h(!0)}}))))},y=function(e){var t=e.entityDetails,n=e.handleExtensionUpdate,d=e.entityType,u=(0,a.CR)((0,o.useState)({}),2),m=u[0],p=u[1],w=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(r){switch(r.label){case 0:return[4,n((0,a.pi)((0,a.pi)({},t),{extension:e}))];case 1:return r.sent(),[2]}}))}))},h=(0,o.useMemo)((function(){return[{title:"Name",dataIndex:"name",key:"name",width:"50%"},{title:"Value",dataIndex:"value",key:"value",width:"50%",render:function(e,n){return o.createElement(E,{extension:t.extension,propertyName:n.name,propertyType:n.propertyType,onExtensionUpdate:w})}}]}),[t.extension]);return(0,o.useEffect)((function(){(0,l.ov)(d).then((function(e){p(e)})).catch((function(e){return(0,s.Eo)(e)}))}),[]),o.createElement(o.Fragment,null,(0,i.isEmpty)(m.customProperties)?o.createElement(c.Z,{heading:"Custom Properties"}):o.createElement(r.Z,{bordered:!0,columns:h,"data-testid":"custom-properties-table",dataSource:m.customProperties||[],pagination:!1,rowKey:"name",size:"small"}))}},9632:function(e,t,n){var a=n(70655),r=n(55241),i=n(94184),o=n.n(i),l=n(67800),s=n(96486),c=n(67294),d=n(59293),u=n(58369),m=n(31615),p=n(48132),w=n(22215),h=n(38464),f=n(44355),v=n(50168),E=n(47368),y=n(80131);t.Z=function(e){var t=e.className,n=e.hasEditAccess,i=e.onDescriptionEdit,N=e.description,b=void 0===N?"":N,x=e.isEdit,k=e.onCancel,C=e.onDescriptionUpdate,T=e.isReadOnly,g=void 0!==T&&T,S=e.removeBlur,Z=void 0!==S&&S,P=e.entityName,I=e.entityFieldThreads,L=e.onThreadLinkSelect,O=e.entityType,R=e.entityFqn,q=e.entityFieldTasks,A=(0,d.k6)(),J=null==I?void 0:I[0],F=null==q?void 0:q[0],H=function(){A.push((0,f.Ie)(O,R))},G=function(){A.push((0,f.Q3)(O,R))},U=function(){i&&i()},z=function(){var e=Boolean(b.trim());return f.GZ.includes(O)?c.createElement("button",{className:"tw-w-7 tw-h-7 tw-flex-none link-text focus:tw-outline-none","data-testid":"request-entity-description",onClick:e?G:H},c.createElement(r.Z,{destroyTooltipOnHide:!0,content:e?"Request update description":"Request description",overlayClassName:"ant-popover-request-description",trigger:"hover",zIndex:9999},c.createElement(h.ZP,{alt:"request-description",icon:h.PJ.REQUEST,width:"16px"}))):null},D=function(e){var t=e.descriptionThread;return(0,s.isUndefined)(t)?c.createElement(c.Fragment,null,(null==b?void 0:b.trim())&&L?c.createElement("button",{className:"tw-w-7 tw-h-7 tw-flex-none link-text focus:tw-outline-none","data-testid":"start-description-thread",onClick:function(){return null==L?void 0:L((0,w.ec)(O,R,u.Sn.DESCRIPTION))}},c.createElement(h.ZP,{alt:"comments",icon:h.PJ.COMMENT_PLUS,width:"16px"})):null):c.createElement("button",{className:"tw-w-7 tw-h-7 tw-flex-none link-text focus:tw-outline-none","data-testid":"description-thread",onClick:function(){return null==L?void 0:L(t.entityLink)}},c.createElement("span",{className:"tw-flex"},c.createElement(h.ZP,{alt:"comments",icon:h.PJ.COMMENT,width:"16px"})," ",c.createElement("span",{className:"tw-ml-1","data-testid":"description-thread-count"}," ",t.count)))};return c.createElement("div",{className:"schema-description tw-relative "+t},c.createElement("div",{className:"tw-flex description-inner-main-container tw-items-end"},c.createElement("div",{className:"tw-relative"},c.createElement("div",{className:"description tw-h-full tw-overflow-y-scroll tw-relative ","data-testid":"description",id:"center"},(null==b?void 0:b.trim())?c.createElement(y.Z,{enableSeeMoreVariant:!Z,markdown:b}):c.createElement("span",{className:"tw-no-description p-y-xs"},(0,l.t)("label.no-description"))),c.createElement(E.p,{header:(0,l.t)("label.edit-description-for",{entityName:P}),placeholder:(0,l.t)("label.enter-description"),value:b,visible:Boolean(x),onCancel:k,onSave:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t;return(0,a.Jh)(this,(function(n){switch(n.label){case 0:if(!C||!(0,s.isFunction)(C))return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(e)];case 2:return n.sent(),k&&k(),[3,4];case 3:return t=n.sent(),(0,v.Eo)(t),[3,4];case 4:return[2]}}))}))}})),c.createElement((function(){return g?null:c.createElement("div",{className:o()("tw-w-5 tw-min-w-max tw-flex")},n&&c.createElement("button",{className:"tw-w-7 tw-h-7 tw-flex-none focus:tw-outline-none","data-testid":"edit-description",onClick:U},c.createElement(h.ZP,{alt:"edit",icon:"icon-edit",title:"Edit",width:"16px"})),(0,p.nq)(O)?c.createElement(c.Fragment,null," ",c.createElement(z,null),(0,s.isUndefined)(F)?null:c.createElement("button",{className:"tw-w-7 tw-h-7 tw-mr-2 tw-flex-none link-text focus:tw-outline-none","data-testid":"description-task",onClick:function(){return null==L?void 0:L(F.entityLink,m.Th.Task)}},c.createElement("span",{className:"tw-flex"},c.createElement(h.ZP,{alt:"tasks",icon:h.PJ.TASK_ICON,width:"16px"})," ",c.createElement("span",{className:"tw-ml-1","data-testid":"description-tasks-count"}," ",F.count)))):null,c.createElement(D,{descriptionThread:J}))}),null)))}}}]);