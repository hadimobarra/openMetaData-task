"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[3666],{97564:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(4942),r=n(87462),o=n(23653),i=n(36228),l=n.n(i),s=n(1391),u=n.n(s),c=n(31878),d=n(21770),f=n(67294),m=n(53124),v=n(42051),g=n(65223),h=n(99692),p=n(16984),C=n(34041);function E(e){var t=e.fullscreen,n=e.validRange,a=e.generateConfig,r=e.locale,i=e.prefixCls,l=e.value,s=e.onChange,u=e.divRef,c=a.getYear(l||a.getNow()),d=c-10,m=d+20;n&&(d=a.getYear(n[0]),m=a.getYear(n[1])+1);for(var v=r&&"年"===r.year?"年":"",g=[],h=d;h<m;h++)g.push({label:"".concat(h).concat(v),value:h});return f.createElement(C.Z,{size:t?void 0:"small",options:g,value:c,className:"".concat(i,"-year-select"),onChange:function(e){var t=a.setYear(l,e);if(n){var r=(0,o.Z)(n,2),i=r[0],u=r[1],c=a.getYear(t),d=a.getMonth(t);c===a.getYear(u)&&d>a.getMonth(u)&&(t=a.setMonth(t,a.getMonth(u))),c===a.getYear(i)&&d<a.getMonth(i)&&(t=a.setMonth(t,a.getMonth(i)))}s(t)},getPopupContainer:function(){return u.current}})}function Z(e){var t=e.prefixCls,n=e.fullscreen,a=e.validRange,r=e.value,i=e.generateConfig,l=e.locale,s=e.onChange,u=e.divRef,c=i.getMonth(r||i.getNow()),d=0,m=11;if(a){var v=(0,o.Z)(a,2),g=v[0],h=v[1],p=i.getYear(r);i.getYear(h)===p&&(m=i.getMonth(h)),i.getYear(g)===p&&(d=i.getMonth(g))}for(var E=l.shortMonths||i.locale.getShortMonths(l.locale),Z=[],y=d;y<=m;y+=1)Z.push({label:E[y],value:y});return f.createElement(C.Z,{size:n?void 0:"small",className:"".concat(t,"-month-select"),value:c,options:Z,onChange:function(e){s(i.setMonth(r,e))},getPopupContainer:function(){return u.current}})}function y(e){var t=e.prefixCls,n=e.locale,a=e.mode,r=e.fullscreen,o=e.onModeChange;return f.createElement(h.Z,{onChange:function(e){var t=e.target.value;o(t)},value:a,size:r?void 0:"small",className:"".concat(t,"-mode-switch")},f.createElement(p.Z,{value:"month"},n.month),f.createElement(p.Z,{value:"year"},n.year))}var S=function(e){var t=e.prefixCls,n=e.fullscreen,a=e.mode,o=e.onChange,i=e.onModeChange,l=f.useRef(null),s=(0,f.useContext)(g.aM),u=(0,f.useMemo)((function(){return(0,r.Z)((0,r.Z)({},s),{isFormItemInput:!1})}),[s]),c=(0,r.Z)((0,r.Z)({},e),{onChange:o,fullscreen:n,divRef:l});return f.createElement("div",{className:"".concat(t,"-header"),ref:l},f.createElement(g.aM.Provider,{value:u},f.createElement(E,(0,r.Z)({},c)),"month"===a&&f.createElement(Z,(0,r.Z)({},c))),f.createElement(y,(0,r.Z)({},c,{onModeChange:i})))},R=n(74228),b=function(e){function t(t,n){return t&&n&&e.getYear(t)===e.getYear(n)}function n(n,a){return t(n,a)&&e.getMonth(n)===e.getMonth(a)}function i(t,a){return n(t,a)&&e.getDate(t)===e.getDate(a)}return function(s){var g=s.prefixCls,h=s.className,p=s.style,C=s.dateFullCellRender,E=s.dateCellRender,Z=s.monthFullCellRender,y=s.monthCellRender,b=s.headerRender,w=s.value,T=s.defaultValue,N=s.disabledDate,M=s.mode,D=s.validRange,A=s.fullscreen,L=void 0===A||A,k=s.onChange,B=s.onPanelChange,H=s.onSelect,F=f.useContext(m.E_),Y=F.getPrefixCls,x=F.direction,P=Y("picker",g),V="".concat(P,"-calendar"),G=e.getNow(),Q=(0,d.Z)((function(){return w||e.getNow()}),{defaultValue:T,value:w}),_=(0,o.Z)(Q,2),I=_[0],U=_[1],j=(0,d.Z)("month",{value:M}),J=(0,o.Z)(j,2),X=J[0],q=J[1],W=f.useMemo((function(){return"year"===X?"month":"date"}),[X]),z=f.useCallback((function(t){return!!D&&(e.isAfter(D[0],t)||e.isAfter(t,D[1]))||!!(null==N?void 0:N(t))}),[N,D]),K=function(e,t){null==B||B(e,t)},O=function(e){q(e),K(I,e)},$=function(e){!function(e){U(e),i(e,I)||(("date"===W&&!n(e,I)||"month"===W&&!t(e,I))&&K(e,X),null==k||k(e))}(e),null==H||H(e)},ee=f.useCallback((function(t){return C?C(t):f.createElement("div",{className:l()("".concat(P,"-cell-inner"),"".concat(V,"-date"),(0,a.Z)({},"".concat(V,"-date-today"),i(G,t)))},f.createElement("div",{className:"".concat(V,"-date-value")},u()(String(e.getDate(t)),2,"0")),f.createElement("div",{className:"".concat(V,"-date-content")},E&&E(t)))}),[C,E]),te=f.useCallback((function(t,r){if(Z)return Z(t);var o=r.shortMonths||e.locale.getShortMonths(r.locale);return f.createElement("div",{className:l()("".concat(P,"-cell-inner"),"".concat(V,"-date"),(0,a.Z)({},"".concat(V,"-date-today"),n(G,t)))},f.createElement("div",{className:"".concat(V,"-date-value")},o[e.getMonth(t)]),f.createElement("div",{className:"".concat(V,"-date-content")},y&&y(t)))}),[Z,y]);return f.createElement(v.Z,{componentName:"Calendar",defaultLocale:function(){var e=s.locale,t=(0,r.Z)((0,r.Z)({},R.Z),e);return t.lang=(0,r.Z)((0,r.Z)({},t.lang),(e||{}).lang),t}},(function(t){var n;return f.createElement("div",{className:l()(V,(n={},(0,a.Z)(n,"".concat(V,"-full"),L),(0,a.Z)(n,"".concat(V,"-mini"),!L),(0,a.Z)(n,"".concat(V,"-rtl"),"rtl"===x),n),h),style:p},b?b({value:I,type:X,onChange:$,onTypeChange:O}):f.createElement(S,{prefixCls:V,value:I,generateConfig:e,mode:X,fullscreen:L,locale:t.lang,validRange:D,onChange:$,onModeChange:O}),f.createElement(c.N4,{value:I,prefixCls:P,locale:t.lang,generateConfig:e,dateRender:ee,monthCellRender:function(e){return te(e,t.lang)},onSelect:$,mode:W,picker:W,disabledDate:z,hideHeader:!0}))}))}}},3398:function(e,t,n){n.r(t);var a=n(70655),r=n(60236),o=n(96486),i=n(67674),l=n(67294),s=n(59293),u=n(52046),c=n(13950),d=n(54387),f=n(74313),m=n(57794),v=n(28178),g=n(73780),h=n(53867),p=n(93389),C=n(79839),E=n(73213),Z=n(62761),y=n(52114),S=n(64632),R=n(89204),b=n(80307),w=n(6929),T=n(48132),N=n(63406),M=n(22215),D=n(31982),A=n(39570),L=n(35892),k=n(19790),B=n(50168);t.default=(0,i.Pi)((function(){var e=(0,s.k6)(),t=(0,p.BL)().getEntityPermissionByFqn,n=(0,a.CR)((0,l.useState)(!0),2),i=n[0],H=n[1],F=(0,a.CR)((0,l.useState)(!1),2),Y=F[0],x=F[1],P=(0,a.CR)((0,l.useState)(!1),2),V=P[0],G=P[1],Q=(0,a.CR)((0,l.useState)(!1),2),_=Q[0],I=Q[1],U=(0,a.CR)((0,l.useState)(!1),2),j=U[0],J=U[1],X=(0,T.rc)(),q=(0,a.CR)((0,l.useState)(""),2),W=q[0],z=q[1],K=(0,a.CR)((0,l.useState)(),2),O=K[0],$=K[1],ee=(0,a.CR)((0,l.useState)(""),2),te=ee[0],ne=ee[1],ae=(0,a.CR)((0,l.useState)([]),2),re=ae[0],oe=ae[1],ie=(0,a.CR)((0,l.useState)([]),2),le=ie[0],se=ie[1],ue=(0,a.CR)((0,l.useState)(""),2),ce=ue[0],de=ue[1],fe=(0,a.CR)((0,l.useState)([]),2),me=fe[0],ve=fe[1],ge=(0,a.CR)((0,l.useState)({columns:[],rows:[]}),2),he=ge[0],pe=ge[1],Ce=(0,a.CR)((0,l.useState)([]),2),Ee=Ce[0],Ze=Ce[1],ye=(0,a.CR)((0,l.useState)(),2),Se=ye[0],Re=ye[1],be=(0,a.CR)((0,l.useState)({startDate:new Date,dayCount:0,columnJoins:[],directTableJoins:[]}),2),we=be[0],Te=be[1],Ne=(0,a.CR)((0,l.useState)(b.Nd.Regular),2),Me=Ne[0],De=Ne[1],Ae=(0,a.CR)((0,l.useState)(),2),Le=Ae[0],ke=Ae[1],Be=(0,a.CR)((0,l.useState)({}),2),He=Be[0],Fe=Be[1],Ye=(0,s.UO)(),xe=Ye.datasetFQN,Pe=Ye.tab,Ve=(0,a.CR)((0,l.useState)((0,N.jW)(Pe)),2),Ge=Ve[0],Qe=Ve[1],_e=(0,a.CR)((0,l.useState)({}),2),Ie=_e[0],Ue=_e[1],je=(0,a.CR)((0,l.useState)({}),2),Je=je[0],Xe=je[1],qe=(0,a.CR)((0,l.useState)({}),2),We=qe[0],ze=qe[1],Ke=(0,a.CR)((0,l.useState)(),2),Oe=Ke[0],$e=Ke[1],et=(0,a.CR)((0,l.useState)({id:void 0,state:!1}),2),tt=et[0],nt=et[1],at=(0,a.CR)((0,l.useState)((0,T.Td)(xe,[S.ih.Service,S.ih.Database,S.ih.Schema,S.ih.Table],E.o)),2),rt=at[0],ot=at[1],it=(0,a.CR)((0,l.useState)(!1),2),lt=it[0],st=it[1],ut=(0,a.CR)((0,l.useState)(!1),2),ct=ut[0],dt=ut[1],ft=(0,a.CR)((0,l.useState)([]),2),mt=ft[0],vt=ft[1],gt=(0,a.CR)((0,l.useState)([]),2),ht=gt[0],pt=gt[1],Ct=(0,a.CR)((0,l.useState)(0),2),Et=Ct[0],Zt=Ct[1],yt=(0,a.CR)((0,l.useState)([]),2),St=yt[0],Rt=yt[1],bt=(0,a.CR)((0,l.useState)([]),2),wt=bt[0],Tt=bt[1],Nt=(0,a.CR)((0,l.useState)(A.Bd),2),Mt=Nt[0],Dt=Nt[1],At=(0,a.CR)((0,l.useState)({}),2),Lt=At[0],kt=At[1],Bt=function(e,t,n){J(!0),(0,c.XG)((0,M.ec)(S.py.TABLE,rt),e,n,t,void 0,X).then((function(e){var t=e.data,n=e.paging;t?(kt(n),pt((function(e){return(0,a.ev)((0,a.ev)([],(0,a.CR)(e)),(0,a.CR)(t))}))):(0,B.Eo)(w.Z["api-error-messages"]["fetch-entity-feed-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["fetch-entity-feed-error"])})).finally((function(){return J(!1)}))};(0,l.useEffect)((function(){N.Xl[Ge-1].path!==Pe&&Qe((0,N.jW)(Pe)),pt([])}),[Pe]),(0,l.useEffect)((function(){!function(e){var t;switch(void 0===e&&(e=""),e){case S.GB.SAMPLE_DATA:if((0,o.isUndefined)(he)){G(!0),(0,m.gs)(rt,e).then((function(e){if(e){var t=e.sampleData;pe(t)}else(0,B.Eo)(w.Z["api-error-messages"]["fetch-sample-data-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["fetch-sample-data-error"])})).finally((function(){return G(!1)}));break}break;case S.GB.LINEAGE:if(!lt){(0,o.isEmpty)(Ie)&&(x(!0),(0,d.S)(rt,S.py.TABLE).then((function(e){e?Ue(e):(0,B.Eo)(w.Z["api-error-messages"]["fetch-lineage-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["fetch-lineage-error"])})).finally((function(){x(!1)})));break}break;case S.GB.TABLE_QUERIES:if((null!==(t=null==mt?void 0:mt.length)&&void 0!==t?t:0)>0)break;I(!0),(0,m.gs)(rt,e).then((function(e){if(e){var t=e.tableQueries;vt(t)}else(0,B.Eo)(w.Z["api-error-messages"]["fetch-table-queries-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["fetch-table-queries-error"])})).finally((function(){return I(!1)}));break;case S.GB.ACTIVITY_FEED:Bt()}}(N.Xl[Ge-1].field)}),[Ge]);var Ht=function(){(0,T.Aq)(S.py.TABLE,rt,Rt,Tt,Zt)},Ft=function(e){var t=(0,r.qu)(He,e);return(0,m.JD)(W,t)};return(0,l.useEffect)((function(){(Mt.ViewAll||Mt.ViewBasic)&&(function(){var e;H(!0),(0,m.gs)(rt,(0,T.VN)(N.he,null!==(e=N.Xl[Ge-1].field)&&void 0!==e?e:"")).then((function(e){var t,n,a;if(e){var r=e.description,o=e.id,i=e.name,l=e.columns,s=e.database,u=e.deleted,c=e.owner,d=e.usageSummary,f=e.followers,m=e.fullyQualifiedName,v=e.joins,g=e.tags,h=e.sampleData,p=e.profile,C=e.tableType,E=e.version,y=e.service,b=e.serviceType,N=e.databaseSchema,M=null!==(t=null==y?void 0:y.name)&&void 0!==t?t:"",D=null!==(n=null==s?void 0:s.fullyQualifiedName)&&void 0!==n?n:"",A=null!==(a=null==N?void 0:N.fullyQualifiedName)&&void 0!==a?a:"";Fe(e),z(o),$e(E+""),$((0,k.Zk)(null!=g?g:[])),De(C),Re(c),oe(null!=f?f:[]),st(Boolean(u)),se([{name:M,url:M?(0,Z.LE)(M,R.u.DATABASE_SERVICES):"",imgSrc:b?(0,L.zF)(b):void 0},{name:(0,T.Td)(D,[S.ih.Database]),url:(0,Z.aY)(D)},{name:(0,T.Td)(A,[S.ih.Schema]),url:(0,Z.vh)(A)},{name:(0,T.C_)(e),url:"",activeTitle:!0}]),(0,T.nk)({displayName:(0,T.C_)(e),entityType:S.py.TABLE,fqn:null!=m?m:"",serviceType:b,timestamp:0,id:o}),ne(i),de(null!=r?r:""),ve(l||[]),pe(h),ke(p),Ze((0,k.nD)(g||[])),ze(d),Te(v)}else(0,B.Eo)(w.Z["api-error-messages"]["fetch-table-details-error"]),dt(!0)})).catch((function(e){var t;404===(null===(t=e.response)||void 0===t?void 0:t.status)?dt(!0):(0,B.Eo)(e,w.Z["api-error-messages"]["fetch-table-details-error"])})).finally((function(){H(!1)}))}(),Qe((0,N.jW)(Pe)),Ht())}),[Mt]),(0,l.useEffect)((function(){var e;e=rt,(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:H(!0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,t(C.A.TABLE,e)];case 2:return n=a.sent(),Dt(n),[3,5];case 3:return a.sent(),(0,B.Eo)(w.Z["api-error-messages"]["fetch-entity-permissions-error"]),[3,5];case 4:return H(!1),[7];case 5:return[2]}}))}))}),[rt]),(0,l.useEffect)((function(){ot((0,T.Td)(xe,[S.ih.Service,S.ih.Database,S.ih.Schema,S.ih.Table],E.o)),Ue({})}),[xe]),l.createElement(l.Fragment,null,i?l.createElement(h.Z,null):ct?l.createElement(v.Z,null,(0,T.mW)("table",rt)):l.createElement(l.Fragment,null,Mt.ViewAll||Mt.ViewBasic?l.createElement(g.Z,{activeTab:Ge,addLineageHandler:function(e){return new Promise((function(t,n){(0,f.Zt)(e).then((function(){t()})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["add-lineage-error"]),n()}))}))},columns:me,columnsUpdateHandler:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r,o;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,Ft(e)];case 1:if(!(t=a.sent()))throw w.Z["api-error-messages"]["update-entity-error"];return n=t.columns,r=t.version,$e(r+""),Fe(t),ve(n),Ht(),[3,3];case 2:return o=a.sent(),(0,B.Eo)(o),[3,3];case 3:return[2]}}))}))},createThread:function(e){(0,c.Kl)(e).then((function(e){e?(pt((function(t){return(0,a.ev)((0,a.ev)([],(0,a.CR)(t)),[e])})),Ht()):(0,B.Eo)(w.Z["api-error-messages"]["create-conversation-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["create-conversation-error"])}))},dataModel:He.dataModel,datasetFQN:rt,deletePostHandler:function(e,t,n){(0,D.fR)(e,t,n,pt)},deleted:lt,description:ce,descriptionUpdateHandler:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r,o;return(0,a.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,Ft(e)];case 1:if(!(t=i.sent()))throw w.Z["api-error-messages"]["update-description-error"];return n=t.description,r=t.version,$e(r+""),Fe((function(e){return(0,a.pi)((0,a.pi)({},e),{description:n,version:r})})),de(null!=n?n:""),Ht(),[3,3];case 2:return o=i.sent(),(0,B.Eo)(o),[3,3];case 3:return[2]}}))}))},entityFieldTaskCount:wt,entityFieldThreadCount:St,entityLineage:Ie,entityLineageHandler:function(e){Ue(e)},entityName:te,entityThread:ht,feedCount:Et,fetchFeedHandler:function(e,t,n){!e&&pt([]),Bt(e,t,n)},followTableHandler:function(){(0,m.vs)(W,X).then((function(e){if(e){var t=e.changeDescription.fieldsAdded[0].newValue;oe((0,a.ev)((0,a.ev)([],(0,a.CR)(re)),(0,a.CR)(t)))}else(0,B.Eo)(w.Z["api-error-messages"]["update-entity-follow-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["update-entity-follow-error"])}))},followers:re,handleExtensionUpdate:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r,o,i,l;return(0,a.Jh)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,Ft(e)];case 1:if(!(t=s.sent()))throw w.Z["api-error-messages"]["update-entity-error"];return n=t.version,r=t.owner,o=t.tags,i=t.extension,$e(null==n?void 0:n.toString()),Fe((function(e){return(0,a.pi)((0,a.pi)({},e),{version:n,owner:Se,tags:o,extension:i})})),Re(r),$((0,k.Zk)(null!=o?o:[])),[3,3];case 2:return l=s.sent(),(0,B.Eo)(l),[3,3];case 3:return[2]}}))}))},isLineageLoading:Y,isNodeLoading:tt,isQueriesLoading:_,isSampleDataLoading:V,isentityThreadLoading:j,joins:we,lineageLeafNodes:Je,loadNodeHandler:function(e,t){var n;nt({id:e.id,state:!0}),(0,d.S)(null!==(n=e.fullyQualifiedName)&&void 0!==n?n:"",e.type).then((function(e){e?(function(e,t){var n,r;"to"===t&&0===(null===(n=e.downstreamEdges)||void 0===n?void 0:n.length)&&Xe((function(t){var n;return(0,a.pi)((0,a.pi)({},t),{downStreamNode:(0,a.ev)((0,a.ev)([],(0,a.CR)(null!==(n=t.downStreamNode)&&void 0!==n?n:[])),[e.entity.id])})})),"from"===t&&0===(null===(r=e.upstreamEdges)||void 0===r?void 0:r.length)&&Xe((function(t){var n;return(0,a.pi)((0,a.pi)({},t),{upStreamNode:(0,a.ev)((0,a.ev)([],(0,a.CR)(null!==(n=t.upStreamNode)&&void 0!==n?n:[])),[e.entity.id])})}))}(e,t),Ue((0,M.s)(Ie,e,t))):(0,B.Eo)(w.Z["api-error-messages"]["fetch-lineage-node-error"]),setTimeout((function(){nt((function(e){return(0,a.pi)((0,a.pi)({},e),{state:!1})}))}),500)})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["fetch-lineage-node-error"])}))},owner:Se,paging:Lt,postFeedHandler:function(e,t){var n,r,o,i={message:e,from:null!==(r=null===(n=u.Z.userDetails)||void 0===n?void 0:n.name)&&void 0!==r?r:null===(o=u.Z.users[0])||void 0===o?void 0:o.name};(0,c.Z1)(t,i).then((function(e){if(e){var t=e.id,n=e.posts;pt((function(r){return r.map((function(r){return r.id===t?(0,a.pi)((0,a.pi)({},e),{posts:null==n?void 0:n.slice(-3)}):r}))})),Ht()}else(0,B.Eo)(w.Z["api-error-messages"]["add-feed-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["add-feed-error"])}))},removeLineageHandler:function(e){(0,f.lg)(e.fromEntity,e.fromId,e.toEntity,e.toId).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["delete-lineage-error"])}))},sampleData:he,setActiveTabHandler:function(t){var n=t-1;N.Xl[n].path!==Pe&&(Qe((0,N.jW)(N.Xl[n].path)),e.push({pathname:(0,Z.DV)(rt,N.Xl[n].path)}))},settingsUpdateHandler:function(e){return new Promise((function(t,n){Ft(e).then((function(e){if(e){var n=e.version,r=e.owner,o=e.tags,i=void 0===o?[]:o;$e(n+""),Fe((function(e){return(0,a.pi)((0,a.pi)((0,a.pi)({},e),r?{owner:r}:{}),{version:n,tags:i})})),Re(r),$((0,k.Zk)(i)),Ht(),t()}else(0,B.Eo)(w.Z["api-error-messages"]["update-entity-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["update-entity-error"]),n()}))}))},slashedTableName:le,tableDetails:He,tableProfile:Le,tableQueries:mt,tableTags:Ee,tableType:Me,tagUpdateHandler:function(e){Ft(e).then((function(e){var t,n;e?(Fe((function(t){return(0,a.pi)((0,a.pi)({},t),{tags:e.tags})})),$((0,k.Zk)(null!==(t=e.tags)&&void 0!==t?t:[])),$e(e.version+""),Ze((0,k.nD)(null!==(n=e.tags)&&void 0!==n?n:[])),Ht()):(0,B.Eo)(w.Z["api-error-messages"]["update-tags-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["update-tags-error"])}))},tier:O,unfollowTableHandler:function(){(0,m.mM)(W,X).then((function(e){if(e){var t=e.changeDescription.fieldsDeleted[0].oldValue;oe(re.filter((function(e){return e.id!==t[0].id})))}else(0,B.Eo)(w.Z["api-error-messages"]["update-entity-unfollow-error"])})).catch((function(e){(0,B.Eo)(e,w.Z["api-error-messages"]["update-entity-unfollow-error"])}))},updateThreadHandler:function(e,t,n,a){(0,D.jw)(e,t,n,a,pt)},usageSummary:We,version:Oe,versionHandler:function(){e.push((0,Z.h4)(S.py.TABLE,rt,Oe))}}):l.createElement(v.Z,null,y._D)))}))}}]);