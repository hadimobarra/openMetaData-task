"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[282],{83663:function(e,t,n){var a=n(75263).default,i=n(64836).default;t.Z=void 0;var r,s=i(n(81670)),l=i(n(10434)),o=i(n(40753)),c=i(n(36228)),u=i(n(57315)),d=a(n(67294)),m=i(n(65400)),p=n(41954),f=n(31929),v=n(51130),E=i(n(73625)),g=n(53683),h=n(38882),b=(i(n(13594)),n(10625));(0,h.canUseDocElement)()&&document.documentElement.addEventListener("click",(function(e){r={x:e.pageX,y:e.pageY},setTimeout((function(){r=null}),100)}),!0);t.Z=function(e){var t,n=d.useContext(f.ConfigContext),a=n.getPopupContainer,i=n.getPrefixCls,h=n.direction,w=function(t){var n=e.onCancel;null==n||n(t)},y=function(t){var n=e.onOk;null==n||n(t)},C=e.prefixCls,N=e.footer,Z=e.visible,k=e.open,S=void 0!==k&&k,T=e.wrapClassName,P=e.centered,I=e.getContainer,x=e.closeIcon,O=e.focusTriggerAfterClose,R=void 0===O||O,D=e.width,A=void 0===D?520:D,L=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["prefixCls","footer","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose","width"]),U=i("modal",C),B=i(),_=d.createElement(E.default,{componentName:"Modal",defaultLocale:(0,b.getConfirmLocale)()},(function(t){var n=e.okText,a=e.okType,i=void 0===a?"primary":a,r=e.cancelText,s=e.confirmLoading,o=void 0!==s&&s;return d.createElement(d.Fragment,null,d.createElement(m.default,(0,l.default)({onClick:w},e.cancelButtonProps),r||t.cancelText),d.createElement(m.default,(0,l.default)({},(0,p.convertLegacyProps)(i),{loading:o,onClick:y},e.okButtonProps),null!=n?n:t.okText))})),G=d.createElement("span",{className:"".concat(U,"-close-x")},x||d.createElement(o.default,{className:"".concat(U,"-close-icon")})),F=(0,c.default)(T,(t={},(0,s.default)(t,"".concat(U,"-centered"),!!P),(0,s.default)(t,"".concat(U,"-wrap-rtl"),"rtl"===h),t));return d.createElement(v.NoFormStyle,{status:!0,override:!0},d.createElement(u.default,(0,l.default)({width:A},L,{getContainer:void 0===I?a:I,prefixCls:U,wrapClassName:F,footer:void 0===N?_:N,visible:S||Z,mousePosition:r,onClose:w,closeIcon:G,focusTriggerAfterClose:R,transitionName:(0,g.getTransitionName)(B,"zoom",e.transitionName),maskTransitionName:(0,g.getTransitionName)(B,"fade",e.maskTransitionName)})))}},93573:function(e,t,n){var a=n(94184),i=n.n(a),r=n(45697),s=n.n(r),l=n(67294),o=n(59293),c=n(85087),u=function(e){var t=e.children,n=e.leftPanelContent,a=e.className,r=(0,o.TH)(),s=(0,c.a)(r.pathname).isAuthenticatedRoute;return l.createElement("div",{className:i()("page-container",a||"",s?null:"full-page"),"data-testid":"container"},l.createElement("div",{className:"page-layout centered-layout"},n&&l.createElement("div",{className:"side-panel"},n),t))};u.propTypes={children:s().oneOfType([s().node,s().arrayOf(s().node)]).isRequired,leftPanelContent:s().oneOfType([s().node,s().arrayOf(s().node)]),className:s().string},t.Z=u},48311:function(e,t,n){var a=n(8081),i=n.n(a),r=n(23645),s=n.n(r)()(i());s.push([e.id,".test-suite-description .description-inner-main-container {\n  padding-left: 0;\n  padding-right: 0;\n}\n.test-suite-description .rich-text-editor-container {\n  padding-left: 0;\n}\n",""]),t.Z=s},83099:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var a=n(70655),i=n(71230),r=n(15746),s=n(60236),l=n(96486),o=n(67294),c=n(59293),u=n(34797),d=n(28178),m=n(8851),p=n(93573),f=n(53867),v=n(93389),E=n(79839),g=n(12028),h=n(72819),b=n(39570),w=n(2913),y=n(94199),C=n(71577),N=n(62761),Z=n(52114),k=n(41693),S=function(e){var t=e.buttonName,n=e.children,a=e.paging,s=e.currentPage,c=e.testCasePageHandler,u=e.onButtonClick,d=e.showButton,m=void 0===d||d,p=e.isPaging,f=void 0!==p&&p,v=e.hasAccess;return o.createElement(i.Z,{className:"tw-mt-4",gutter:[16,16]},m&&o.createElement(r.Z,{className:"tw-flex tw-justify-end",span:24},o.createElement(y.Z,{title:v?t:Z.oH},o.createElement(C.Z,{disabled:!v,type:"primary",onClick:u},t))),n,o.createElement((function(){return f&&!(0,l.isUndefined)(a)&&(null==a?void 0:a.total)>N.IV&&!(0,l.isUndefined)(s)&&c?o.createElement(r.Z,{span:24},o.createElement(k.Z,{currentPage:s,pageSize:N.IV,paging:a,pagingHandler:c,totalCount:a.total})):null}),null))},T=function(e){var t=e.isDataLoading,n=e.testCases,i=e.testCasesPaging,s=e.currentPage,c=e.onTestUpdate,u=e.testCasePageHandler,d=(0,v.BL)().permissions,m=(0,l.orderBy)(n||[],["name"],"asc"),p=(0,a.CR)((0,o.useState)(!1),2),f=p[0],y=p[1],C=(0,o.useMemo)((function(){return(0,b.P_)(h.OX.Create,E.A.TEST_CASE,d)}),[d]);return o.createElement(S,{isPaging:!0,buttonName:"Add Test",currentPage:s,hasAccess:C,paging:i,showButton:!1,testCasePageHandler:u},o.createElement(o.Fragment,null,o.createElement(r.Z,{className:"flex justify-end items-center",span:24},o.createElement("span",{className:"m-r-xs"},"Deleted Tests"),o.createElement(g.Z,{checked:f,onClick:function(e){y(e),c(e)}})),o.createElement(r.Z,{span:24},o.createElement(w.Z,{hasAccess:!0,deletedTable:f,isLoading:t,testCases:m,onTestUpdate:function(){return c(f)}}))))},P=n(19650),I=n(96566),x=n(85087),O=n(38464),R=n(10584),D=n(72945),A=n(9632),L=n(4142),U=n(84419),B=function(e){var t,n=e.extraInfo,a=e.slashedBreadCrumb,i=e.handleDeleteWidgetVisible,r=e.isDeleteWidgetVisible,s=e.isDescriptionEditable,l=e.testSuite,c=e.handleUpdateOwner,u=e.handleRemoveOwner,d=e.testSuiteDescription,m=e.descriptionHandler,p=e.handleDescriptionUpdate,f=(0,x.a)().isAdminUser,v=(0,I.Eu)().isAuthDisabled,E=f||v;return o.createElement(o.Fragment,null,o.createElement(P.Z,{align:"center",className:"tw-justify-between",style:{width:"100%"}},o.createElement(U.Z,{"data-testid":"test-suite-breadcrumb",titleLinks:a}),o.createElement(y.Z,{title:E?"Delete":Z.oH},o.createElement(R.z,{"data-testid":"test-suite-delete",disabled:!E,size:"small",theme:"primary",variant:"outlined",onClick:function(){return i(!0)}},o.createElement(O.Is,{className:"tw-mr-1.5",height:14,viewBox:"0 0 24 24",width:14}),o.createElement("span",null,"Delete"))),o.createElement(D.Z,{allowSoftDelete:!0,isRecursiveDelete:!0,entityId:null==l?void 0:l.id,entityName:null==l?void 0:l.fullyQualifiedName,entityType:"testSuite",visible:r,onCancel:function(){return i(!1)}})),o.createElement("div",{className:"tw-flex tw-gap-1 tw-mb-2 tw-mt-1 tw-flex-wrap"},n.map((function(e,t){return o.createElement("span",{className:"tw-flex",key:t},o.createElement(L.Z,{currentOwner:null==l?void 0:l.owner,data:e,removeOwner:u,updateOwner:E?c:void 0}))}))),o.createElement(P.Z,null,o.createElement(A.Z,{className:"test-suite-description",description:d||"",entityName:null!==(t=null==l?void 0:l.displayName)&&void 0!==t?t:null==l?void 0:l.name,hasEditAccess:E,isEdit:s,onCancel:function(){return m(!1)},onDescriptionEdit:function(){return m(!0)},onDescriptionUpdate:p})))},_=n(67814),G=n(25213),F=n(92458),V=n.n(F),H=n(437),M=n(32822),j=n(74313),J=n(48132),X=n(96840),z=n(50168),Q=n(89946),W=n(95597),K=n(29695),q=n(50922),Y=n(35741),$=function(){var e=(0,H.$)().t,t=(0,c.UO)().testSuiteFQN,n=(0,v.BL)().permissions,s=(0,c.k6)(),l=(0,c.TH)(),u=(0,a.CR)((0,o.useState)(!0),2),d=u[0],m=u[1],p=(0,a.CR)((0,o.useState)([]),2),g=p[0],w=p[1],N=(0,a.CR)((0,o.useState)(""),2),Z=N[0],k=N[1],T=(0,a.CR)((0,o.useState)(),2),P=T[0],I=T[1],x=(0,a.CR)((0,o.useState)(!1),2),R=x[0],D=x[1],A=(0,a.CR)((0,o.useState)({id:"",name:"",state:""}),2),L=A[0],U=A[1],B=(0,a.CR)((0,o.useState)(!1),2),F=B[0],$=B[1],ee=(0,a.CR)((0,o.useState)({id:"",state:""}),2),te=ee[0],ne=ee[1],ae=(0,a.CR)((0,o.useState)({id:"",state:""}),2),ie=ae[0],re=ae[1],se=(0,a.CR)((0,o.useState)(!0),2),le=se[0],oe=se[1],ce=(0,o.useMemo)((function(){return l.pathname.split("/")[1]}),[l]),ue=(0,o.useMemo)((function(){return b.NE.hasViewPermissions(E.A.INGESTION_PIPELINE,n)}),[n]),de=(0,o.useMemo)((function(){return(0,b.P_)(h.OX.Create,E.A.INGESTION_PIPELINE,n)}),[n]),me=(0,o.useMemo)((function(){return(0,b.P_)(h.OX.Delete,E.A.INGESTION_PIPELINE,n)}),[n]),pe=(0,o.useMemo)((function(){return(0,b.P_)(h.OX.EditAll,E.A.INGESTION_PIPELINE,n)}),[n]),fe=function(){$(!1),U({id:"",name:"",state:""})},ve=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var n,i;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,3,4]),m(!0),[4,(0,M.Pj)(["owner","pipelineStatuses"],t,e)];case 1:return n=a.sent(),w(n.data),[3,4];case 2:return i=a.sent(),(0,z.Eo)(i),[3,4];case 3:return m(!1),[7];case 4:return[2]}}))}))},Ee=function(t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,M.g6)(t)];case 1:return a.sent(),ve(),[3,3];case 2:return n=a.sent(),(0,z.Eo)(n,e("server.unexpected-response")),[3,3];case 3:return[2]}}))}))},ge=o.createElement("span",{className:"tw-inline-block tw-text-gray-400 tw-self-center"},"|"),he=function(t,n){return(0,a.mG)(void 0,void 0,void 0,(function(){var i;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:re({id:t,state:"waiting"}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,(0,M.aw)(t)];case 2:return a.sent(),re({id:t,state:"success"}),setTimeout((function(){return re({id:"",state:""})}),1500),(0,z.XA)(e("label.pipeline")+"  "+e(n?"label.re-deploy":"label.deployed")+"  "+e("label.successfully-small")),[3,4];case 3:return i=a.sent(),re({id:"",state:""}),(0,z.Eo)(i,e("server.ingestion-workflow-operation-error",{operation:"updating",displayName:""})),[3,4];case 4:return[2]}}))}))};(0,o.useEffect)((function(){ve(),(0,a.mG)(void 0,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,(0,j.oQ)()];case 1:return e=t.sent(),k(e.apiEndpoint),[3,3];case 2:return t.sent(),k(""),[3,3];case 3:return[2]}}))}))}),[]),(0,o.useEffect)((function(){m(!0),(0,M.x1)().then((function(e){200===e.status?oe(!0):oe(!1)})).catch((function(){oe(!1),m(!1)}))}),[]);var be=(0,o.useMemo)((function(){var n=[{title:e("label.name"),dataIndex:"name",key:"name",render:function(t){return o.createElement(y.Z,{title:ue?t:e("message.no-permission-to-view")},o.createElement(C.Z,{type:"link"},o.createElement("a",{className:"link-text tw-mr-2","data-testid":"airflow-tree-view",href:""+Z,rel:"noopener noreferrer",target:"_blank"},t,o.createElement(O.ZP,{alt:"external-link",className:"tw-align-middle tw-ml-1",icon:O.PJ.EXTERNAL_LINK,width:"16px"}))))}},{title:e("label.type"),dataIndex:"pipelineType",key:"pipelineType"},{title:e("label.schedule"),dataIndex:"airflowConfig",key:"airflowEndpoint",render:function(e,t){var n;return o.createElement(o.Fragment,null,(null==t?void 0:t.airflowConfig.scheduleInterval)?o.createElement(W.Z,{html:o.createElement("div",null,V().toString(t.airflowConfig.scheduleInterval||"",{use24HourTimeFormat:!0,verbose:!0})),position:"bottom",theme:"light",trigger:"mouseenter"},o.createElement("span",null,null!==(n=t.airflowConfig.scheduleInterval)&&void 0!==n?n:"--")):o.createElement("span",null,"--"))}},{title:e("label.recent-runs"),dataIndex:"pipelineStatuses",key:"recentRuns",render:function(e,t){return o.createElement(i.Z,{align:"middle"},o.createElement(K.K,{ingestion:t}))}},{title:e("label.actions"),dataIndex:"actions",key:"actions",render:function(n,i){var r,l;return o.createElement(o.Fragment,null,o.createElement("div",{className:"tw-flex"},i.enabled?o.createElement(o.Fragment,null,(l=i).deployed?o.createElement(o.Fragment,null,o.createElement(y.Z,{title:e(pe?"label.run":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"run",disabled:!pe,type:"link",onClick:function(){return t=l.id,n=l.name,(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(a){switch(a.label){case 0:ne({id:t,state:"waiting"}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,(0,M.FD)(t)];case 2:return a.sent(),ne({id:t,state:"success"}),setTimeout((function(){ne({id:"",state:""}),(0,z.XA)("Pipeline triggered successfully")}),1500),ve(),[3,4];case 3:return a.sent(),(0,z.Eo)(e("server.ingestion-workflow-operation-error",{operation:"triggering",displayName:n})),ne({id:"",state:""}),[3,4];case 4:return[2]}}))}));var t,n}},(0,J.vc)(te,l.id,e("label.run")))),ge,o.createElement(y.Z,{title:e(pe?"label.re-deploy":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"re-deploy-btn",disabled:!pe,type:"link",onClick:function(){return he(l.id,!0)}},(0,J.vc)(ie,l.id,e("label.re-deploy"))))):o.createElement(y.Z,{title:e(pe?"label.deploy":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"deploy",disabled:!pe,type:"link",onClick:function(){return he(l.id,!1)}},(0,J.vc)(ie,l.id,e("label.deploy")))),ge,o.createElement(y.Z,{title:e(pe?"label.pause":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"pause",disabled:!pe,type:"link",onClick:function(){return Ee(i.id||"")}},e("label.pause")))):o.createElement(y.Z,{title:e(pe?"label.unpause":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"unpause",disabled:!pe,type:"link",onClick:function(){return Ee(i.id||"")}},e("label.unpause"))),ge,o.createElement(y.Z,{title:e(pe?"label.edit":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"edit",disabled:!pe,type:"link",onClick:function(){s.push((0,X.nX)(t,i.fullyQualifiedName))}},"Edit")),ge,o.createElement(y.Z,{title:e(me?"label.delete":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"delete",disabled:!me,type:"link",onClick:function(){return e=i.id,t=i.name,U({id:e,name:t,state:""}),void $(!0);var e,t}},L.id===i.id?"success"===L.state?o.createElement(_.G,{icon:"check"}):o.createElement(f.Z,{size:"small",type:"default"}):e("label.delete"))),ge,o.createElement(y.Z,{title:e(pe?"label.kill":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"kill",disabled:!pe,type:"link",onClick:function(){D(!0),I(i)}},"Kill")),ge,o.createElement(y.Z,{title:e(ue?"label.logs":"message.no-permission-for-action")},o.createElement(C.Z,{"data-testid":"logs",disabled:!ue,href:(0,X.Ht)(ce,(null===(r=i.service)||void 0===r?void 0:r.name)||"",i.fullyQualifiedName||""),type:"link",onClick:function(){I(i)}},"Logs"))),R&&P&&i.id===(null==P?void 0:P.id)&&o.createElement(Y.Z,{isModalOpen:R,pipelinName:P.name,pipelineId:P.id,onClose:function(){D(!1),I(void 0)},onIngestionWorkflowsUpdate:ve}))}}];return n}),[Z,R,P,ie,te]);return d?o.createElement(f.Z,null):le?o.createElement(S,{buttonName:e("label.add-pipeline-ingestion",{pipelineType:""}),hasAccess:de,showButton:0===g.length,onButtonClick:function(){s.push((0,X.nX)(t))}},o.createElement(r.Z,{span:24},o.createElement(G.Z,{bordered:!0,className:"table-shadow",columns:be,dataSource:g.map((function(e){return(0,a.pi)((0,a.pi)({},e),{key:e.name})})),pagination:!1,size:"small"}),o.createElement(q.Z,{entityName:L.name,entityType:e("label.ingestion-lowercase"),loadingState:L.state,visible:F,onCancel:fe,onConfirm:function(){return t=L.id,n=L.name,(0,a.mG)(void 0,void 0,void 0,(function(){var i;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:U({id:t,name:n,state:"waiting"}),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,(0,M.cB)(t)];case 2:return a.sent(),U({id:t,name:n,state:"success"}),ve(),[3,5];case 3:return i=a.sent(),(0,z.Eo)(i,e("server.ingestion-workflow-operation-error",{operation:"deleting",displayName:n})),[3,5];case 4:return fe(),[7];case 5:return[2]}}))}));var t,n}}))):o.createElement(Q.Z,null)},ee=n(61105),te=n(55546),ne=n(34530),ae=n(6929),ie=n(93379),re=n.n(ie),se=n(7795),le=n.n(se),oe=n(90569),ce=n.n(oe),ue=n(3565),de=n.n(ue),me=n(19216),pe=n.n(me),fe=n(44589),ve=n.n(fe),Ee=n(48311),ge={};ge.styleTagTransform=ve(),ge.setAttributes=de(),ge.insert=ce().bind(null,"head"),ge.domAPI=le(),ge.insertStyleElement=pe(),re()(Ee.Z,ge),Ee.Z&&Ee.Z.locals&&Ee.Z.locals;var he=function(){var e=(0,v.BL)().getEntityPermissionByFqn,t=(0,c.UO)().testSuiteFQN,n=(0,a.CR)((0,o.useState)(),2),g=n[0],h=n[1],w=(0,a.CR)((0,o.useState)(!1),2),y=w[0],C=w[1],k=(0,a.CR)((0,o.useState)(!1),2),S=k[0],P=k[1],I=(0,a.CR)((0,o.useState)(!1),2),x=I[0],O=I[1],R=(0,a.CR)((0,o.useState)([]),2),D=R[0],A=R[1],L=(0,a.CR)((0,o.useState)(N.j2),2),U=L[0],_=L[1],G=(0,a.CR)((0,o.useState)(N.OQ),2),F=G[0],V=G[1],H=(0,a.CR)((0,o.useState)(!1),2),M=H[0],j=H[1],X=(0,a.CR)((0,o.useState)(b.Bd),2),Q=X[0],W=X[1],K=(0,a.CR)((0,o.useState)([]),2),q=K[0],Y=K[1],ie=(0,a.CR)((0,o.useState)(1),2),re=ie[0],se=ie[1],le=(0,o.useMemo)((function(){return{testOwner:null==g?void 0:g.owner,testSuiteId:null==g?void 0:g.id,testSuiteDescription:null==g?void 0:g.description}}),[g]),oe=le.testSuiteDescription,ce=le.testSuiteId,ue=le.testOwner,de=function(e){var t=(0,s.qu)(g,e);return(0,u.pQ)(ce,t)},me=function(e){C(e)},pe=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(i){switch(i.label){case 0:O(!0),i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,(0,u.Cz)((0,a.pi)({fields:"testCaseResult,testDefinition,testSuite",testSuiteId:ce,limit:t||N.IV,before:e&&e.before,after:e&&e.after},e))];case 2:return n=i.sent(),A(n.data),V(n.paging),[3,5];case 3:return i.sent(),A([]),(0,z.Eo)(ae.Z["api-error-messages"]["fetch-test-cases-error"]),[3,5];case 4:return O(!1),[7];case 5:return[2]}}))}))},fe=function(e,t){de(e).then((function(e){e?h(e):(0,z.Eo)(ae.Z["api-error-messages"]["unexpected-server-response"])})).catch((function(e){(0,z.Eo)(e,ae.Z["api-error-messages"][t===ee.KW.UPDATE?"update-owner-error":"remove-owner-error"])}))},ve=(0,o.useMemo)((function(){return[{key:"Owner",value:"team"===(null==ue?void 0:ue.type)?(0,N.bV)((null==ue?void 0:ue.name)||""):(0,J.C_)(ue)||"",placeholderText:(0,J.ji)((null==ue?void 0:ue.displayName)||(null==ue?void 0:ue.name),null==ue?void 0:ue.deleted)||"",isLink:"team"===(null==ue?void 0:ue.type),openInNewTab:!1,profileName:(null==ue?void 0:ue.type)===te.jc.USER?null==ue?void 0:ue.name:void 0}]}),[ue]);return(0,o.useEffect)((function(){(Q.ViewAll||Q.ViewBasic)&&(0,a.mG)(void 0,void 0,void 0,(function(){var e,n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,u.zz)(t,{fields:"owner"})];case 1:return e=a.sent(),Y([{name:"Test Suites",url:N.Z6.TEST_SUITES},{name:(0,l.startCase)((0,l.camelCase)((null==e?void 0:e.fullyQualifiedName)||(null==e?void 0:e.name))),url:""}]),h(e),pe({testSuiteId:e.id}),[3,3];case 2:return n=a.sent(),h(void 0),(0,z.Eo)(n,ae.Z["api-error-messages"]["fetch-test-suite-error"]),[3,3];case 3:return[2]}}))}))}),[Q,t]),(0,o.useEffect)((function(){(0,a.mG)(void 0,void 0,void 0,(function(){var n,i;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:j(!0),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,e(E.A.TEST_SUITE,t)];case 2:return n=a.sent(),W(n),[3,5];case 3:return i=a.sent(),(0,z.Eo)(i),[3,5];case 4:return j(!1),[7];case 5:return[2]}}))}))}),[t]),M?o.createElement(f.Z,null):o.createElement(o.Fragment,null,Q.ViewAll||Q.ViewBasic?o.createElement(p.Z,null,o.createElement(i.Z,{className:"tw-px-6 tw-w-full"},o.createElement(r.Z,{span:24},o.createElement(B,{descriptionHandler:me,extraInfo:ve,handleDeleteWidgetVisible:function(e){P(e)},handleDescriptionUpdate:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,i;return(0,a.Jh)(this,(function(r){switch(r.label){case 0:if((null==g?void 0:g.description)===e)return[3,6];t=(0,a.pi)((0,a.pi)({},g),{description:e}),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,de(t)];case 2:if(!(n=r.sent()))throw ae.Z["api-error-messages"]["unexpected-server-response"];return h(n),[3,5];case 3:return i=r.sent(),(0,z.Eo)(i),[3,5];case 4:return me(!1),[7];case 5:return[3,7];case 6:me(!1),r.label=7;case 7:return[2]}}))}))},handleRemoveOwner:function(){if(g){var e=(0,a.pi)((0,a.pi)({},g),{owner:void 0});fe(e,ee.KW.REMOVE)}},handleUpdateOwner:function(e){if(e){var t=(0,a.pi)((0,a.pi)({},g),{owner:(0,a.pi)((0,a.pi)({},null==g?void 0:g.owner),e)});fe(t,ee.KW.UPDATE)}},isDeleteWidgetVisible:S,isDescriptionEditable:y,permissions:Q,slashedBreadCrumb:q,testSuite:g,testSuiteDescription:oe})),o.createElement(r.Z,{className:"tw-mt-8",span:24},o.createElement(m.Z,{activeTab:re,setActiveTab:function(e){se(e)},tabs:[{name:"Test Cases",isProtected:!1,position:1},{name:"Pipeline",isProtected:!1,position:2}]}),o.createElement("div",{className:"tw-mb-4"},1===re&&o.createElement(T,{currentPage:U,isDataLoading:x,testCasePageHandler:function(e,t){var n;_(t),pe(((n={})[e]=F[e],n))},testCases:D,testCasesPaging:F,onTestUpdate:function(e){void 0===e&&(e=!1),pe({include:e?ne.y.Deleted:ne.y.NonDeleted})}}),2===re&&o.createElement($,null))))):o.createElement(d.Z,null,Z._D))}}}]);