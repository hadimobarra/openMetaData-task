/*! For license information please see 9973.981ed775f3e98a544710.js.LICENSE.txt */
(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[9973],{12028:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(87462),r=n(4942),i=n(7085),o=n(36228),s=n.n(o),l=n(23653),c=n(8384),d=n(67294),u=n(54433),f=n.n(u),p=n(21770),v=n(15105),m=d.forwardRef((function(e,t){var n,a=e.prefixCls,i=void 0===a?"rc-switch":a,o=e.className,s=e.checked,u=e.defaultChecked,m=e.disabled,h=e.loadingIcon,g=e.checkedChildren,w=e.unCheckedChildren,E=e.onClick,y=e.onChange,C=e.onKeyDown,b=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),S=(0,p.Z)(!1,{value:s,defaultValue:u}),N=(0,l.Z)(S,2),Z=N[0],R=N[1];function T(e,t){var n=Z;return m||(R(n=e),null==y||y(n,t)),n}var x=f()(i,o,(n={},(0,r.Z)(n,"".concat(i,"-checked"),Z),(0,r.Z)(n,"".concat(i,"-disabled"),m),n));return d.createElement("button",Object.assign({},b,{type:"button",role:"switch","aria-checked":Z,disabled:m,className:x,ref:t,onKeyDown:function(e){e.which===v.Z.LEFT?T(!1,e):e.which===v.Z.RIGHT&&T(!0,e),null==C||C(e)},onClick:function(e){var t=T(!Z,e);null==E||E(t,e)}}),h,d.createElement("span",{className:"".concat(i,"-inner")},Z?g:w))}));m.displayName="Switch";var h=m,g=n(53124),w=n(98866),E=n(97647),y=n(21790),C=d.forwardRef((function(e,t){var n,o=e.prefixCls,l=e.size,c=e.disabled,u=e.loading,f=e.className,p=void 0===f?"":f,v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["prefixCls","size","disabled","loading","className"]),m=d.useContext(g.E_),C=m.getPrefixCls,b=m.direction,S=d.useContext(E.Z),N=d.useContext(w.Z),Z=(null!=c?c:N)||u,R=C("switch",o),T=d.createElement("div",{className:"".concat(R,"-handle")},u&&d.createElement(i.Z,{className:"".concat(R,"-loading-icon")})),x=s()((n={},(0,r.Z)(n,"".concat(R,"-small"),"small"===(l||S)),(0,r.Z)(n,"".concat(R,"-loading"),u),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===b),n),p);return d.createElement(y.Z,{insertExtraNode:!0},d.createElement(h,(0,a.Z)({},v,{prefixCls:R,className:x,disabled:Z,ref:t,loadingIcon:T})))}));C.__ANT_SWITCH=!0;var b=C},54433:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},35122:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(2717),r=n(67294),i=n(17197),o=n(94310),s=n(28549),l=n(48805),c=n(41546),d=n(69068),u=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];n(73935);var f=(0,r.forwardRef)((function(e,t){var n=function(e){var t=e.defaultOptions,n=void 0!==t&&t,a=e.cacheOptions,i=void 0!==a&&a,o=e.loadOptions;e.options;var f=e.isLoading,p=void 0!==f&&f,v=e.onInputChange,m=e.filterOption,h=void 0===m?null:m,g=(0,d.Z)(e,u),w=g.inputValue,E=(0,r.useRef)(void 0),y=(0,r.useRef)(!1),C=(0,r.useState)(Array.isArray(n)?n:void 0),b=(0,c.Z)(C,2),S=b[0],N=b[1],Z=(0,r.useState)(void 0!==w?w:""),R=(0,c.Z)(Z,2),T=R[0],x=R[1],L=(0,r.useState)(!0===n),k=(0,c.Z)(L,2),A=k[0],D=k[1],H=(0,r.useState)(void 0),F=(0,c.Z)(H,2),O=F[0],P=F[1],I=(0,r.useState)([]),B=(0,c.Z)(I,2),U=B[0],q=B[1],G=(0,r.useState)(!1),_=(0,c.Z)(G,2),M=_[0],J=_[1],Q=(0,r.useState)({}),V=(0,c.Z)(Q,2),j=V[0],K=V[1],z=(0,r.useState)(void 0),W=(0,c.Z)(z,2),$=W[0],X=W[1],Y=(0,r.useState)(void 0),ee=(0,c.Z)(Y,2),te=ee[0],ne=ee[1];i!==te&&(K({}),ne(i)),n!==$&&(N(Array.isArray(n)?n:void 0),X(n)),(0,r.useEffect)((function(){return y.current=!0,function(){y.current=!1}}),[]);var ae=(0,r.useCallback)((function(e,t){if(!o)return t();var n=o(e,t);n&&"function"==typeof n.then&&n.then(t,(function(){return t()}))}),[o]);(0,r.useEffect)((function(){!0===n&&ae(T,(function(e){y.current&&(N(e||[]),D(!!E.current))}))}),[]);var re=(0,r.useCallback)((function(e,t){var n=(0,l.L)(e,t,v);if(!n)return E.current=void 0,x(""),P(""),q([]),D(!1),void J(!1);if(i&&j[n])x(n),P(n),q(j[n]),D(!1),J(!1);else{var a=E.current={};x(n),D(!0),J(!O),ae(n,(function(e){y&&a===E.current&&(E.current=void 0,D(!1),P(n),q(e||[]),J(!1),K(e?(0,l.a)((0,l.a)({},j),{},(0,s.Z)({},n,e)):j))}))}}),[i,ae,O,j,v]),ie=M?[]:T&&O?U:S||[];return(0,l.a)((0,l.a)({},g),{},{options:ie,isLoading:A||p,onInputChange:re,filterOption:h})}(e),f=(0,o.u)(n);return r.createElement(i.S,(0,a.Z)({ref:t},f))}))},60819:function(e,t,n){"use strict";var a=n(94184),r=n.n(a),i=n(67294),o=n(52046),s=n(27300);t.Z=function(e){var t=e.header,n=e.headerClassName,a=e.onCancel,l=e.createThread,c=e.threadLink,d=e.defaultValue;return i.createElement("dialog",{className:"tw-modal","data-testid":"modal-container"},i.createElement("div",{className:"tw-modal-backdrop",onClick:a}),i.createElement("div",{className:"tw-modal-container tw-w-2/4 tw-pb-0 tw-pt-2"},i.createElement("div",{className:r()("tw-modal-header tw-pb-2",n)},i.createElement("p",{className:"tw-modal-title","data-testid":"modal-header"},t),i.createElement("div",{className:"tw-flex"},i.createElement("svg",{className:"tw-w-6 tw-h-6 tw-ml-1 tw-cursor-pointer","data-testid":"closeWhatsNew",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:a},i.createElement("path",{d:"M6 18L18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"})))),i.createElement("div",{className:r()("tw-px-0 tw-py-3"),"data-testid":"body-text"},i.createElement(s.Z,{buttonClass:"tw-mr-4 tw-pb-3",defaultValue:d,onSave:function(e){var t,n,r,i=null!==(n=null===(t=o.Z.userDetails)||void 0===t?void 0:t.name)&&void 0!==n?n:null===(r=o.Z.users[0])||void 0===r?void 0:r.name;l({message:e,from:i,about:c}),a()}}))))}},8851:function(e,t,n){"use strict";var a=n(94184),r=n.n(a),i=n(96486),o=n(67294),s=n(48132);t.Z=function(e){var t=e.activeTab,n=e.setActiveTab,a=e.tabs,l=e.className,c=void 0===l?"":l,d=e.rightPosButton,u=function(e,t){return"tw-gh-tabs tw-px-0 tw-pt-2 tw-mr-8"+(t===e?" active":"")};return o.createElement("div",{className:r()("tw-bg-transparent",c)},o.createElement("nav",{className:"tw-flex tw-items-center tw-justify-between tw-gh-tabs-container","data-testid":"tabs",id:"tabs"},o.createElement("div",{className:"tw-flex tw-flex-grow"},a.map((function(e){return e.isHidden?null:o.createElement("button",{className:u(e.position,t),"data-testid":e.name,id:(0,i.camelCase)(e.name),key:e.position,onClick:function(){return null==n?void 0:n(e.position)}},e.name,(0,i.isNil)(e.count)?null:(0,s.yh)(e.count,"",e.position===t))}))),d))}},52154:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var a=n(70655),r=n(60236),i=n(96486),o=n(67294),s=n(59293),l=n(52046),c=n(11617),d=n(71560),u=n(13950),f=n(54387),p=n(74313),v=n(22503),m=n(28178),h=n(19650),g=n(94199),w=n(25213),E=n(437),y=n(97882),C=n(73213),b=n(58369),S=n(20615),N=n(5681),Z=n(64632),R=n(55546),T=n(31615),x=n(90058),L=n(51887),k=n(6929),A=n(48132),D=n(22215),H=n(89987),F=n(31982),O=n(20184),P=n(39570),I=n(96840),B=n(38464),U=n(19790),q=n(37428),G=n(50168),_=n(22001),M=n(19521),J=n(37620),Q=n(9632),V=n(71008),j=n(80131),K=n(8851),z=n(74380),W=n(57033),$=n(53867),X=n(47368),Y=n(60819),ee=n(93389),te=n(79839),ne=n(60502),ae=n(57269),re=function(e){var t=e.entityName,n=e.followers,l=e.followDashboardHandler,c=e.unfollowDashboardHandler,u=e.owner,f=e.tier,p=e.slashedDashboardName,v=e.activeTab,m=e.setActiveTabHandler,re=e.description,ie=e.serviceType,oe=e.dashboardUrl,se=e.dashboardTags,le=e.dashboardDetails,ce=e.descriptionUpdateHandler,de=e.settingsUpdateHandler,ue=e.tagUpdateHandler,fe=e.charts,pe=e.chartDescriptionUpdateHandler,ve=e.chartTagUpdateHandler,me=e.entityLineage,he=e.isNodeLoading,ge=e.lineageLeafNodes,we=e.loadNodeHandler,Ee=e.versionHandler,ye=e.version,Ce=e.deleted,be=e.addLineageHandler,Se=e.removeLineageHandler,Ne=e.entityLineageHandler,Ze=e.isLineageLoading,Re=e.entityThread,Te=e.isentityThreadLoading,xe=e.postFeedHandler,Le=e.feedCount,ke=e.entityFieldThreadCount,Ae=e.createThread,De=e.dashboardFQN,He=e.deletePostHandler,Fe=e.paging,Oe=e.fetchFeedHandler,Pe=e.updateThreadHandler,Ie=e.entityFieldTaskCount,Be=e.onExtensionUpdate,Ue=(0,E.$)().t,qe=(0,s.k6)(),Ge=(0,a.CR)((0,o.useState)(!1),2),_e=Ge[0],Me=Ge[1],Je=(0,a.CR)((0,o.useState)(0),2),Qe=Je[0],Ve=Je[1],je=(0,a.CR)((0,o.useState)(!1),2),Ke=je[0],ze=je[1],We=(0,a.CR)((0,o.useState)(),2),$e=We[0],Xe=We[1],Ye=(0,a.CR)((0,o.useState)(),2),et=Ye[0],tt=Ye[1],nt=(0,a.CR)((0,o.useState)([]),2),at=nt[0],rt=nt[1],it=(0,a.CR)((0,o.useState)(!1),2),ot=it[0],st=it[1],lt=(0,a.CR)((0,o.useState)(!1),2),ct=lt[0],dt=lt[1],ut=(0,a.CR)((0,o.useState)(""),2),ft=ut[0],pt=ut[1],vt=(0,a.CR)((0,o.useState)(""),2),mt=vt[0],ht=vt[1],gt=(0,a.CR)((0,L.M)(S.a),2),wt=gt[0],Et=gt[1],yt=(0,a.CR)((0,o.useState)(T.Th.Conversation),2),Ct=yt[0],bt=yt[1],St=(0,a.CR)((0,o.useState)(P.Bd),2),Nt=St[0],Zt=St[1],Rt=(0,ee.BL)().getEntityPermission,Tt=(0,o.useCallback)((function(){return(0,a.mG)(void 0,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,Rt(te.A.DASHBOARD,le.id)];case 1:return e=t.sent(),Zt(e),[3,3];case 2:return t.sent(),(0,G.Eo)(k.Z["api-error-messages"]["fetch-entity-permissions-error"]),[3,3];case 3:return[2]}}))}))}),[le.id,Rt,Zt]);(0,o.useEffect)((function(){le.id&&Tt()}),[le.id]);var xt=[{name:"Details",icon:{alt:"schema",name:"icon-schema",title:"Details",selectedName:"icon-schemacolor"},isProtected:!1,position:1},{name:"Activity Feeds & Tasks",icon:{alt:"activity_feed",name:"activity_feed",title:"Activity Feed",selectedName:"activity-feed-color"},isProtected:!1,position:2,count:Le},{name:"Lineage",icon:{alt:"lineage",name:"icon-lineage",title:"Lineage",selectedName:"icon-lineagecolor"},isProtected:!1,position:3},{name:"Custom Properties",isProtected:!1,position:4}],Lt=[{key:Z.Jp.OWNER,value:(0,A.Hb)(u),placeholderText:(0,A.ji)((0,A.C_)(u),null==u?void 0:u.deleted),isLink:!0,openInNewTab:!1,profileName:(null==u?void 0:u.type)===R.jc.USER?null==u?void 0:u.name:void 0},{key:Z.Jp.TIER,value:(null==f?void 0:f.tagFQN)?f.tagFQN.split(C.o)[1]:""},{key:ie+" "+Z.Jp.URL,value:oe,placeholderText:t,isLink:!0,openInNewTab:!0}],kt=function(e,t){var n,o=(0,i.isUndefined)(et)?t:et;if(e&&o){var s=null===(n=o.chart.tags)||void 0===n?void 0:n.filter((function(t){return e.some((function(e){return e.tagFQN===t.tagFQN}))})),l=e.filter((function(e){var t;return!(null===(t=o.chart.tags)||void 0===t?void 0:t.some((function(t){return t.tagFQN===e.tagFQN})))})).map((function(e){return{labelType:"Manual",state:"Confirmed",source:e.source,tagFQN:e.tagFQN}})),c=(0,a.pi)((0,a.pi)({},o.chart),{tags:(0,a.ev)((0,a.ev)([],(0,a.CR)(s)),(0,a.CR)(l))}),d=(0,r.qu)(fe[o.index],c);ve(o.index,o.chart.id,d)}tt(void 0)},At=function(e,t){pt(e),t&&bt(t)};(0,o.useEffect)((function(){!function(e){ze(e.some((function(e){return e.id===(0,A.rc)()}))),Ve(null==e?void 0:e.length)}(n)}),[n]),(0,o.useEffect)((function(){var e,t;e=Fe,t=Te,Et&&(null==e?void 0:e.after)&&!t&&Oe(e.after)}),[Fe,Te,Et]);var Dt=(0,o.useCallback)((function(e,t){Oe(Fe.after,e,t)}),[Fe]),Ht=(0,o.useMemo)((function(){return[{title:Ue("label.chart-name"),dataIndex:"chartName",key:"chartName",width:200,render:function(e,t){return o.createElement(y.Link,{target:"_blank",to:{pathname:t.chartUrl}},o.createElement(h.Z,null,o.createElement("span",null,(0,A.C_)(t)),o.createElement(B.ZP,{alt:"external-link",className:"tw-align-middle",icon:"external-link",width:"16px"})))}},{title:Ue("label.chart-type"),dataIndex:"chartType",key:"chartType",width:100},{title:Ue("label.description"),dataIndex:"description",key:"description",width:300,render:function(e,t,n){return o.createElement(h.Z,{className:"w-full tw-group cursor-pointer","data-testid":"description"},o.createElement("div",null,e?o.createElement(j.Z,{markdown:e}):o.createElement("span",{className:"tw-no-description"},Ue("label.no-description"))),!Ce&&o.createElement(g.Z,{title:Nt.EditAll?Ue("label.edit-entity",{entity:Ue("label.description")}):Ue("message.no-permission-for-action")},o.createElement("button",{className:"tw-self-start tw-w-8 tw-h-auto tw-opacity-0 tw-ml-1 group-hover:tw-opacity-100 focus:tw-outline-none",disabled:!Nt.EditAll,onClick:function(){return function(e,t){Xe({chart:e,index:t})}(t,n)}},o.createElement(B.ZP,{alt:"edit",icon:"icon-edit",title:"Edit",width:"16px"}))))}},{title:Ue("label.tag-plural"),dataIndex:"tags",key:"tags",width:300,render:function(e,t,n){return o.createElement("div",{className:"relative tableBody-cell","data-testid":"tags-wrapper",onClick:function(){return function(e,t){et||((0===at.length||ot)&&(dt(!0),Promise.allSettled([(0,q.uL)(),(0,O.S9)()]).then((function(e){var t=[];if(e[0].status===N.c.FULFILLED&&e[0].value.data&&(t=(0,q.bM)(e[0].value.data).map((function(e){return{fqn:e,source:"Tag"}}))),e[1].status===N.c.FULFILLED&&e[1].value&&e[1].value.length>0){var n=(0,O.g4)(e[1].value).map((function(e){return{fqn:e,source:"Glossary"}}));t=(0,a.ev)((0,a.ev)([],(0,a.CR)(t)),(0,a.CR)(n))}rt(t),e[0].status===N.c.FULFILLED&&e[1].status===N.c.FULFILLED?st(!1):st(!0)})).catch((function(){rt([]),st(!0)})).finally((function(){dt(!1)}))),function(e,t){tt({chart:e,index:t})}(e,t))}(t,n)}},Ce?o.createElement(h.Z,null,o.createElement(ae.Z,{sizeCap:-1,tags:e||[]})):o.createElement(ne.Z,{editable:(null==et?void 0:et.index)===n,isLoading:ct&&(null==et?void 0:et.index)===n,selectedTags:e||[],showAddTagButton:Nt.EditAll||Nt.EditTags,size:"small",tagList:at,type:"label",onCancel:function(){kt()},onSelectionChange:function(e){kt(e,{chart:t,index:n})}}))}}]}),[Nt.EditAll,Nt.EditTags,et,at,Ce,ct,fe]);return o.createElement(z.Z,null,o.createElement("div",{className:"entity-details-container"},o.createElement(V.Z,{canDelete:Nt.Delete,currentOwner:le.owner,deleted:Ce,entityFieldTasks:(0,F.S$)(b.Sn.TAGS,Ie),entityFieldThreads:(0,F.S$)(b.Sn.TAGS,ke),entityFqn:De,entityId:le.id,entityName:t,entityType:Z.py.DASHBOARD,extraInfo:Lt,followHandler:function(){Ke?(Ve((function(e){return e-1})),ze(!1),c()):(Ve((function(e){return e+1})),ze(!0),l())},followers:Qe,followersList:n,isFollowing:Ke,isTagEditable:Nt.EditAll||Nt.EditTags,removeOwner:Nt.EditAll||Nt.EditOwner?function(){if(le){var e=(0,a.pi)((0,a.pi)({},le),{owner:void 0});de(e)}}:void 0,removeTier:Nt.EditAll||Nt.EditTier?function(){if(le){var e=(0,a.pi)((0,a.pi)({},le),{tags:void 0});de(e)}}:void 0,tags:se,tagsHandler:function(e){if(e){var t=(0,a.ev)((0,a.ev)([],(0,a.CR)(f?[f]:[])),(0,a.CR)(e)),n=(0,a.pi)((0,a.pi)({},le),{tags:t});ue(n)}},tier:f||"",titleLinks:p,updateOwner:Nt.EditAll||Nt.EditOwner?function(e){if(e){var t=(0,a.pi)((0,a.pi)({},le),{owner:e?(0,a.pi)((0,a.pi)({},le.owner),e):le.owner});de(t)}}:void 0,updateTier:Nt.EditAll||Nt.EditTier?function(e){if(e){var t=e?(0,a.ev)((0,a.ev)([],(0,a.CR)((0,U.nD)(le.tags))),[{tagFQN:e,labelType:x.JG.Manual,state:x.ZM.Confirmed}]):le.tags,n=(0,a.pi)((0,a.pi)({},le),{tags:t});de(n)}}:void 0,version:ye,versionHandler:Ee,onRestoreEntity:function(){return(0,a.mG)(void 0,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,(0,d.Fg)(le.id)];case 1:return t.sent(),(0,G.XA)(Ue("message.restore-entities-success",{entity:Ue("label.dashboard")}),2e3),(0,A.ZM)(),[3,3];case 2:return e=t.sent(),(0,G.Eo)(e,Ue("message.restore-entities-error",{entity:Ue("label.dashboard")})),[3,3];case 3:return[2]}}))}))},onThreadLinkSelect:At}),o.createElement("div",{className:"tw-mt-4 tw-flex tw-flex-col tw-flex-grow"},o.createElement(K.Z,{activeTab:v,className:"tw-flex-initial",setActiveTab:m,tabs:xt}),o.createElement("div",{className:"tw-flex-grow tw-flex tw-flex-col tw--mx-6 tw-px-7 tw-py-4"},o.createElement("div",{className:"tw-bg-white tw-flex-grow tw-p-4 tw-shadow tw-rounded-md"},1===v&&o.createElement(o.Fragment,null,o.createElement("div",{className:"tw-grid tw-grid-cols-4 tw-gap-4 tw-w-full"},o.createElement("div",{className:"tw-col-span-full"},o.createElement(Q.Z,{description:re,entityFieldTasks:(0,F.S$)(b.Sn.DESCRIPTION,Ie),entityFieldThreads:(0,F.S$)(b.Sn.DESCRIPTION,ke),entityFqn:De,entityName:t,entityType:Z.py.DASHBOARD,hasEditAccess:Nt.EditAll||Nt.EditDescription,isEdit:_e,isReadOnly:Ce,owner:u,onCancel:function(){Me(!1)},onDescriptionEdit:function(){Me(!0)},onDescriptionUpdate:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,a.Jh)(this,(function(r){switch(r.label){case 0:if(re===e)return[3,6];t=(0,a.pi)((0,a.pi)({},le),{description:e}),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,ce(t)];case 2:return r.sent(),[3,5];case 3:return n=r.sent(),(0,G.Eo)(n),[3,5];case 4:return Me(!1),[7];case 5:return[3,7];case 6:Me(!1),r.label=7;case 7:return[2]}}))}))},onThreadLinkSelect:At}))),o.createElement(w.Z,{bordered:!0,className:"p-t-xs",columns:Ht,"data-testid":"charts-table",dataSource:fe,pagination:!1,rowKey:"id",size:"small"})),2===v&&o.createElement("div",{className:"tw-py-4 tw-px-7 tw-grid tw-grid-cols-3 entity-feed-list tw--mx-7 tw--my-4",id:"activityfeed"},o.createElement("div",null),o.createElement(_.Z,{isEntityFeed:!0,withSidePanel:!0,className:"",deletePostHandler:He,entityName:t,feedList:Re,postFeedHandler:xe,updateThreadHandler:Pe,onFeedFiltersUpdate:Dt}),o.createElement("div",null)),3===v&&o.createElement("div",{className:"h-full"},o.createElement(W.Z,{addLineageHandler:be,deleted:Ce,entityLineage:me,entityLineageHandler:Ne,entityType:Z.py.DASHBOARD,hasEditAccess:Nt.EditAll||Nt.EditLineage,isLoading:Ze,isNodeLoading:he,lineageLeafNodes:ge,loadNodeHandler:we,removeLineageHandler:Se,onFullScreenClick:function(){qe.push((0,I.nA)(Z.py.DASHBOARD,De))}})),4===v&&o.createElement(J.t,{entityDetails:le,entityType:Z.py.DASHBOARD,handleExtensionUpdate:Be}),o.createElement("div",{"data-testid":"observer-element",id:"observer-element",ref:wt},Te?o.createElement($.Z,null):null))))),$e&&o.createElement(X.p,{header:Ue("label.edit-chart",{chartName:$e.chart.displayName}),placeholder:Ue("label.enter-chart-description"),value:$e.chart.description||"",visible:Boolean($e),onCancel:function(){Xe(void 0)},onSave:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,i;return(0,a.Jh)(this,(function(o){switch(o.label){case 0:if(!$e)return[3,6];t=(0,a.pi)((0,a.pi)({},$e.chart),{description:e}),n=(0,r.qu)(fe[$e.index],t),o.label=1;case 1:return o.trys.push([1,3,4,5]),[4,pe($e.index,$e.chart.id,n)];case 2:return o.sent(),[3,5];case 3:return i=o.sent(),(0,G.Eo)(i),[3,5];case 4:return Xe(void 0),[7];case 5:return[3,7];case 6:Xe(void 0),o.label=7;case 7:return[2]}}))}))}}),ft?o.createElement(M.Z,{createThread:Ae,deletePostHandler:He,open:Boolean(ft),postFeedHandler:xe,threadLink:ft,threadType:Ct,updateThreadHandler:Pe,onCancel:function(){pt("")}}):null,mt?o.createElement(Y.Z,{createThread:Ae,defaultValue:(0,H.o)(u),header:"Request description",threadLink:(0,D.ec)(Z.py.DASHBOARD,De,mt),onCancel:function(){ht("")}}):null)},ie=n(62761),oe=n(52114),se=n(89204),le=n(13932),ce=n(35892),de=function(){var e=(0,A.rc)(),t=(0,s.k6)(),n=(0,ee.BL)().getEntityPermissionByFqn,h=(0,s.UO)(),g=h.dashboardFQN,w=h.tab,E=(0,a.CR)((0,o.useState)({}),2),y=E[0],C=E[1],b=(0,a.CR)((0,o.useState)(""),2),S=b[0],N=b[1],R=(0,a.CR)((0,o.useState)(!1),2),T=R[0],x=R[1],L=(0,a.CR)((0,o.useState)(""),2),H=L[0],O=L[1],I=(0,a.CR)((0,o.useState)([]),2),B=I[0],q=I[1],_=(0,a.CR)((0,o.useState)(),2),M=_[0],J=_[1],Q=(0,a.CR)((0,o.useState)(),2),V=Q[0],j=Q[1],K=(0,a.CR)((0,o.useState)([]),2),z=K[0],W=K[1],X=(0,a.CR)((0,o.useState)((0,le.O3)(w)),2),Y=X[0],ne=X[1],ae=(0,a.CR)((0,o.useState)([]),2),de=ae[0],ue=ae[1],fe=(0,a.CR)((0,o.useState)(""),2),pe=fe[0],ve=fe[1],me=(0,a.CR)((0,o.useState)(""),2),he=me[0],ge=me[1],we=(0,a.CR)((0,o.useState)(""),2),Ee=we[0],ye=we[1],Ce=(0,a.CR)((0,o.useState)([]),2),be=Ce[0],Se=Ce[1],Ne=(0,a.CR)((0,o.useState)({}),2),Ze=Ne[0],Re=Ne[1],Te=(0,a.CR)((0,o.useState)(!1),2),xe=Te[0],Le=Te[1],ke=(0,a.CR)((0,o.useState)({}),2),Ae=ke[0],De=ke[1],He=(0,a.CR)((0,o.useState)({id:void 0,state:!1}),2),Fe=He[0],Oe=He[1],Pe=(0,a.CR)((0,o.useState)(),2),Ie=Pe[0],Be=Pe[1],Ue=(0,a.CR)((0,o.useState)(!1),2),qe=Ue[0],Ge=Ue[1],_e=(0,a.CR)((0,o.useState)(!1),2),Me=_e[0],Je=_e[1],Qe=(0,a.CR)((0,o.useState)([]),2),Ve=Qe[0],je=Qe[1],Ke=(0,a.CR)((0,o.useState)(!1),2),ze=Ke[0],We=Ke[1],$e=(0,a.CR)((0,o.useState)(0),2),Xe=$e[0],Ye=$e[1],et=(0,a.CR)((0,o.useState)([]),2),tt=et[0],nt=et[1],at=(0,a.CR)((0,o.useState)([]),2),rt=at[0],it=at[1],ot=(0,a.CR)((0,o.useState)({}),2),st=ot[0],lt=ot[1],ct=(0,a.CR)((0,o.useState)(P.Bd),2),dt=ct[0],ut=ct[1],ft=function(){(0,A.Aq)(Z.py.DASHBOARD,g,nt,it,Ye)},pt=function(t,n,r){We(!0),!t&&je([]),(0,u.XG)((0,D.ec)(Z.py.DASHBOARD,g),t,r,n,void 0,e).then((function(e){var t=e.data,n=e.paging;t?(lt(n),je((function(e){return(0,a.ev)((0,a.ev)([],(0,a.CR)(e)),(0,a.CR)(t))}))):(0,G.Eo)(k.Z["api-error-messages"]["fetch-entity-feed-error"])})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["fetch-entity-feed-error"])})).finally((function(){return We(!1)}))},vt=function(e){var t=(0,r.qu)((0,i.omitBy)(y,i.isUndefined),e);return(0,d.oH)(S,t)};return(0,o.useEffect)((function(){!function(e){switch(void 0===e&&(e=""),e){case Z.GB.LINEAGE:if(!qe){(0,i.isEmpty)(Ze)&&(Le(!0),(0,f.S)(g,Z.py.DASHBOARD).then((function(e){if(!e)throw k.Z["api-error-messages"]["unexpected-server-response"];Re(e)})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["fetch-lineage-error"])})).finally((function(){Le(!1)})));break}break;case Z.GB.ACTIVITY_FEED:pt()}}(le.Lq[Y-1].field)}),[Y]),(0,o.useEffect)((function(){(dt.ViewAll||dt.ViewBasic)&&(function(e){x(!0),(0,d.qK)(e,le.he).then((function(e){var t,n;if(!e)throw Je(!0),k.Z["api-error-messages"]["unexpected-server-response"];var r,i,o=e.id,s=e.deleted,l=e.description,c=e.followers,d=e.fullyQualifiedName,u=e.service,f=e.tags,p=e.owner,m=e.displayName,h=e.name,g=e.charts,w=e.dashboardUrl,E=e.serviceType,y=e.version;ge(m||h),C(e),Be(y+""),N(o),O(null!=l?l:""),q(null!=c?c:[]),J(p),j((0,U.Zk)(null!=f?f:[])),W((0,U.nD)(null!=f?f:[])),ye(null!=E?E:""),Ge(Boolean(s)),Se([{name:null!==(t=u.name)&&void 0!==t?t:"",url:u.name?(0,ie.LE)(u.name,se.u.DASHBOARD_SERVICES):"",imgSrc:E?(0,ce.zF)(E):void 0},{name:(0,A.C_)(e),url:"",activeTitle:!0}]),(0,A.nk)({displayName:(0,A.C_)(e),entityType:Z.py.DASHBOARD,fqn:null!=d?d:"",serviceType:E,timestamp:0,id:o}),(r=u.type,i=null!==(n=u.name)&&void 0!==n?n:"",new Promise((function(e,t){(0,v.dO)(r+"s",i,["owner"]).then((function(t){var n,a;if(!t)throw null;var r=(null===(a=null===(n=t.connection)||void 0===n?void 0:n.config)||void 0===a?void 0:a.hostPort)||"";e(r)})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["fetch-dashboard-details-error"]),t(e)}))}))).then((function(e){ve(e+w),(0,le.Mn)(g).then((function(t){var n=t.map((function(t){return(0,a.pi)((0,a.pi)({},t),{chartUrl:e+t.chartUrl})}));ue(n)})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["fetch-chart-error"])})),x(!1)})).catch((function(e){throw e}))})).catch((function(e){var t;404===(null===(t=e.response)||void 0===t?void 0:t.status)?Je(!0):(0,G.Eo)(e,k.Z["api-error-messages"]["fetch-dashboard-details-error"]),x(!1)}))}(g),Re({}),ft())}),[g,dt]),(0,o.useEffect)((function(){var e;e=g,(0,a.mG)(void 0,void 0,void 0,(function(){var t;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:x(!0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,n(te.A.DASHBOARD,e)];case 2:return t=a.sent(),ut(t),[3,5];case 3:return a.sent(),(0,G.Eo)(k.Z["api-error-messages"]["fetch-entity-permissions-error"]),[3,5];case 4:return x(!1),[7];case 5:return[2]}}))}))}),[g]),(0,o.useEffect)((function(){le.Lq[Y-1].path!==w&&ne((0,le.O3)(w)),je([])}),[w]),o.createElement(o.Fragment,null,T?o.createElement($.Z,null):Me?o.createElement(m.Z,null,(0,A.mW)("dashboard",g)):o.createElement(o.Fragment,null,dt.ViewAll||dt.ViewBasic?o.createElement(re,{activeTab:Y,addLineageHandler:function(e){return new Promise((function(t,n){(0,p.Zt)(e).then((function(){t()})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["add-lineage-error"]),n()}))}))},chartDescriptionUpdateHandler:function(e,t,n){return(0,a.mG)(void 0,void 0,void 0,(function(){var r,i;return(0,a.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,(0,c.L)(t,n)];case 1:if(!(r=o.sent()))throw k.Z["api-error-messages"]["unexpected-server-response"];return ue((function(t){var n=(0,a.ev)([],(0,a.CR)(t));return n[e]=r,n})),[3,3];case 2:return i=o.sent(),(0,G.Eo)(i),[3,3];case 3:return[2]}}))}))},chartTagUpdateHandler:function(e,t,n){(0,c.L)(t,n).then((function(t){if(!t)throw k.Z["api-error-messages"]["unexpected-server-response"];ue((function(n){var r=(0,a.ev)([],(0,a.CR)(n));return r[e]=t,(0,le.QM)(r)}))})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["update-chart-error"])}))},charts:de,createThread:function(e){(0,u.Kl)(e).then((function(e){e?(je((function(t){return(0,a.ev)((0,a.ev)([],(0,a.CR)(t)),[e])})),ft()):(0,G.Eo)(k.Z["api-error-messages"]["unexpected-server-response"])})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["create-conversation-error"])}))},dashboardDetails:y,dashboardFQN:g,dashboardTags:z,dashboardUrl:pe,deletePostHandler:function(e,t,n){(0,F.fR)(e,t,n,je)},deleted:qe,description:H,descriptionUpdateHandler:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r,i;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,vt(e)];case 1:if(!(t=a.sent()))throw k.Z["api-error-messages"]["unexpected-server-response"];return n=t.description,r=t.version,Be(r+""),C(t),O(n+""),ft(),[3,3];case 2:return i=a.sent(),(0,G.Eo)(i),[3,3];case 3:return[2]}}))}))},entityFieldTaskCount:rt,entityFieldThreadCount:tt,entityLineage:Ze,entityLineageHandler:function(e){Re(e)},entityName:he,entityThread:Ve,feedCount:Xe,fetchFeedHandler:pt,followDashboardHandler:function(){(0,d.vs)(S,e).then((function(e){if(!e)throw k.Z["api-error-messages"]["unexpected-server-response"];var t=e.changeDescription.fieldsAdded[0].newValue;q((0,a.ev)((0,a.ev)([],(0,a.CR)(B)),(0,a.CR)(t)))})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["update-entity-follow-error"])}))},followers:B,isLineageLoading:xe,isNodeLoading:Fe,isentityThreadLoading:ze,lineageLeafNodes:Ae,loadNodeHandler:function(e,t){var n;Oe({id:e.id,state:!0}),(0,f.S)(null!==(n=e.fullyQualifiedName)&&void 0!==n?n:"",e.type).then((function(e){e?(function(e,t){var n,r;"to"===t&&0===(null===(n=e.downstreamEdges)||void 0===n?void 0:n.length)&&De((function(t){var n;return(0,a.pi)((0,a.pi)({},t),{downStreamNode:(0,a.ev)((0,a.ev)([],(0,a.CR)(null!==(n=t.downStreamNode)&&void 0!==n?n:[])),[e.entity.id])})})),"from"===t&&0===(null===(r=e.upstreamEdges)||void 0===r?void 0:r.length)&&De((function(t){var n;return(0,a.pi)((0,a.pi)({},t),{upStreamNode:(0,a.ev)((0,a.ev)([],(0,a.CR)(null!==(n=t.upStreamNode)&&void 0!==n?n:[])),[e.entity.id])})}))}(e,t),Re((0,D.s)(Ze,e,t))):(0,G.Eo)(k.Z["api-error-messages"]["fetch-lineage-node-error"]),setTimeout((function(){Oe((function(e){return(0,a.pi)((0,a.pi)({},e),{state:!1})}))}),500)})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["fetch-lineage-node-error"])}))},owner:M,paging:st,postFeedHandler:function(e,t){var n,r,i,o={message:e,from:null!==(r=null===(n=l.Z.userDetails)||void 0===n?void 0:n.name)&&void 0!==r?r:null===(i=l.Z.users[0])||void 0===i?void 0:i.name};(0,u.Z1)(t,o).then((function(e){if(!e)throw k.Z["api-error-messages"]["unexpected-server-response"];var t=e.id,n=e.posts;je((function(r){return r.map((function(r){return r.id===t?(0,a.pi)((0,a.pi)({},e),{posts:null==n?void 0:n.slice(-3)}):r}))})),ft()})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["add-feed-error"])}))},removeLineageHandler:function(e){(0,p.lg)(e.fromEntity,e.fromId,e.toEntity,e.toId).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["delete-lineage-error"])}))},serviceType:Ee,setActiveTabHandler:function(e){var n=e-1;le.Lq[n].path!==w&&(ne((0,le.O3)(le.Lq[n].path)),t.push({pathname:(0,ie.pB)(g,le.Lq[n].path)}))},settingsUpdateHandler:function(e){return new Promise((function(t,n){vt(e).then((function(e){var n,r;if(!e)throw k.Z["api-error-messages"]["unexpected-server-response"];C((0,a.pi)((0,a.pi)({},e),{tags:null!==(n=e.tags)&&void 0!==n?n:[]})),Be(e.version+""),J(e.owner),j((0,U.Zk)(null!==(r=e.tags)&&void 0!==r?r:[])),ft(),t()})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["update-entity-error"]),n()}))}))},slashedDashboardName:be,tagUpdateHandler:function(e){vt(e).then((function(e){var t,n;if(!e)throw k.Z["api-error-messages"]["unexpected-server-response"];C(e),j((0,U.Zk)(null!==(t=e.tags)&&void 0!==t?t:[])),Be(e.version+""),W((0,U.nD)(null!==(n=e.tags)&&void 0!==n?n:[])),ft()})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["update-tags-error"])}))},tier:V,unfollowDashboardHandler:function(){(0,d.mM)(S,e).then((function(e){if(!e)throw k.Z["api-error-messages"]["unexpected-server-response"];var t=e.changeDescription.fieldsDeleted[0].oldValue;q(B.filter((function(e){return e.id!==t[0].id})))})).catch((function(e){(0,G.Eo)(e,k.Z["api-error-messages"]["update-entity-unfollow-error"])}))},updateThreadHandler:function(e,t,n,a){(0,F.jw)(e,t,n,a,je)},version:Ie,versionHandler:function(){t.push((0,ie.h4)(Z.py.DASHBOARD,g,Ie))},onExtensionUpdate:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r,i,o;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,vt(e)];case 1:if(!(t=a.sent()))throw k.Z["api-error-messages"]["update-entity-error"];return n=t.version,r=t.owner,i=t.tags,Be(n+""),C(t),J(r),j((0,U.Zk)(null!=i?i:[])),[3,3];case 2:return o=a.sent(),(0,G.Eo)(o,k.Z["api-error-messages"]["update-entity-error"]),[3,3];case 3:return[2]}}))}))}}):o.createElement(m.Z,null,oe._D)))}},89987:function(e,t,n){"use strict";n.d(t,{h:function(){return d},o:function(){return u}});var a=n(96486),r=n(67294),i=n(58369),o=n(31615),s=n(22215),l=n(31982),c=n(38464),d=function(e,t,n,i,d,u,f,p,v){void 0===p&&(p=!0);var m={};null==n||n.forEach((function(n){var a=(0,l.VP)(n.entityField);a[0]===e&&a[1]===t&&(m=n)}));var h=(0,a.isEqual)(v,o.Th.Task);return(0,a.isEmpty)(m)?r.createElement(r.Fragment,null,d&&u&&f&&p&&!h?r.createElement("button",{className:"link-text tw-self-start tw-w-7 tw-h-7 tw-mr-1 tw-flex-none hover-cell-icon","data-testid":"start-field-thread",onClick:function(e){e.preventDefault(),e.stopPropagation(),null==i||i((0,s.ec)(d,u,f))}},r.createElement(c.ZP,{alt:"comments",icon:c.PJ.COMMENT_PLUS,width:"16px"})):null):r.createElement("button",{className:"link-text tw-self-start tw-w-7 tw-h-7 tw-mr-1 tw-flex tw-items-center hover-cell-icon","data-testid":"field-thread",onClick:function(e){e.preventDefault(),e.stopPropagation(),null==i||i(m.entityLink,h?o.Th.Task:o.Th.Conversation)}},r.createElement(c.ZP,{alt:"comments",className:"tw-mt-0.5",height:"16px",icon:h?c.PJ.TASK_ICON:c.PJ.COMMENT,width:"16px"}),r.createElement("span",{className:"tw-ml-1","data-testid":"field-thread-count"},m.count))},u=function(e){var t="Can you add a description?";if((0,a.isUndefined)(e))return""+t;var n=e.name,r=e.displayName,o=e.type;return"<a href=/"+i.Gq[o]+"/"+n+">@"+r+"</a> "+t}}}]);