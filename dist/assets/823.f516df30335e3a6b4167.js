"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[823],{69852:function(e,t,n){var a=n(75899),r=n(94184),i=n.n(r),s=n(67294),l=a.Z.Step;t.Z=function(e){var t=e.steps,n=e.activeStep,r=e.excludeSteps,u=void 0===r?[]:r;return s.createElement("div",{className:"tw-px-24","data-testid":"stepper-container"},s.createElement(a.Z,{current:n,labelPlacement:"vertical",size:"small"},t.filter((function(e){return!u.includes(e.step)})).map((function(e){return s.createElement(l,{icon:s.createElement("span",{className:i()("ingestion-rounder tw-self-center",{active:e.step===n},{completed:e.step<n}),"data-testid":"step-icon-"+e.step}),key:""+e.name,title:e.name})}))))}},15689:function(e,t,n){n.d(t,{HZ:function(){return l},A:function(){return u},VQ:function(){return c}});var a=n(67800),r=n(62761),i=a.ZP.t("label.test-suite"),s=a.ZP.t("label.add-entity",{entity:a.ZP.t("label.test-suite")}),l=[{name:s,step:1},{name:a.ZP.t("label.test-suite-status"),step:2}],u=[{name:i,url:"",activeTitle:!0}],c=[{name:i,url:r.Z6.TEST_SUITES,activeTitle:!1},{name:s,url:"",activeTitle:!0}]},55546:function(e,t,n){var a,r,i,s;n.d(t,{jc:function(){return r},Wm:function(){return i},aX:function(){return s}}),function(e){e.USERS="users",e.ADMINS="admins",e.BOTS="bots"}(a||(a={})),function(e){e.USER="user",e.TEAM="team"}(r||(r={})),function(e){e.AutomaticGenerate="AUTOMATIC_GENERATE",e.CreatePassword="CREATE_PASSWORD"}(i||(i={})),function(e){e.ACTIVITY="activity",e.TASKS="tasks",e.MY_DATA="mydata",e.FOLLOWING="following"}(s||(s={}))},60823:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(70655),r=n(71230),i=n(15746),s=n(19650),l=n(56256),u=n(67294),c=n(437),o=n(59293),m=n(32822),d=n(34797),f=n(27586),p=n(78736),E=n(45351),v=n(78339),Z=n(84419),S=n(69852),b=n(15689),h=n(31968),T=n(55546),y=n(48132),C=n(96840),w=n(50168),A=n(9242),k=n(4107),g=n(71577),R=n(97809),I=n(53867),N=n(62761),P=n(6929),x=function(e){var t=e.onSubmit,n=(0,c.$)().t,r=(0,a.CR)(A.Z.useForm(),1)[0],i=(0,a.CR)((0,u.useState)([]),2),l=i[0],m=i[1],f=(0,a.CR)((0,u.useState)(!1),2),p=f[0],E=f[1],v=(0,o.k6)(),Z={required:n("message.field-text-is-required",{fieldText:"${label}"})};return(0,u.useEffect)((function(){(0,a.mG)(void 0,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),E(!0),[4,(0,d.eL)({fields:"owner,tests",limit:N.Ou})];case 1:return e=t.sent(),m(e.data),[3,4];case 2:return t.sent(),m([]),[3,4];case 3:return E(!1),[7];case 4:return[2]}}))}))}),[]),p?u.createElement(I.Z,null):u.createElement(A.Z,{"data-testid":"test-suite-form",form:r,layout:"vertical",name:"selectTestSuite",validateMessages:Z,onFinish:function(e){return t(e)}},u.createElement(A.Z.Item,{label:n("label.name"),name:"name",rules:[{required:!0},{pattern:/^[A-Za-z0-9_]*$/g,message:P.Z.label["special-character-error"]},{validator:function(e,t){return l.some((function(e){return e.name===t}))?Promise.reject(n("label.entity-already-exists",{entity:n("label.name")})+"!"):Promise.resolve()}}]},u.createElement(k.Z,{"data-testid":"test-suite-name",placeholder:n("label.enter-entity",{entity:n("label.test-suite")+" "+n("label.name")})})),u.createElement(A.Z.Item,{label:n("label.description"),name:"description",rules:[{required:!0}]},u.createElement(R.Z,{"data-testid":"test-suite-description",initialValue:"",onTextChange:function(e){return r.setFieldsValue({description:e})}})),u.createElement(A.Z.Item,{noStyle:!0},u.createElement(s.Z,{className:"w-full justify-end",size:16},u.createElement(g.Z,{"data-testid":"cancel-button",onClick:function(){return v.push(N.Z6.TEST_SUITES)}},n("label.cancel")),u.createElement(g.Z,{"data-testid":"submit-button",htmlType:"submit",type:"primary"},n("label.submit")))))},_=function(){var e=(0,c.$)().t,t=(0,o.k6)(),n=(0,a.CR)((0,u.useState)(1),2),A=n[0],k=n[1],g=(0,a.CR)((0,u.useState)(),2),R=g[0],I=g[1],N=(0,a.CR)((0,u.useState)(!1),2),P=N[0],_=N[1],V=(0,a.CR)((0,u.useState)(!1),2),G=V[0],O=V[1],U=function(){return(0,a.mG)(void 0,void 0,Promise,(function(){var e;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,(0,m.x1)()];case 1:return t.sent(),_(!0),[3,3];case 2:return e=t.sent(),(0,w.Eo)(e),[3,3];case 3:return[2]}}))}))},j=function(){t.push((0,C.nn)((null==R?void 0:R.fullyQualifiedName)||""))},D=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r;return(0,a.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t={id:(0,y.rc)(),type:T.jc.USER},[4,(0,d.H6)((0,a.pi)((0,a.pi)({},e),{owner:t}))];case 1:return n=i.sent(),I(n),[3,3];case 2:return r=i.sent(),(0,w.Eo)(r),[3,3];case 3:return k(2),[2]}}))}))},M=(0,u.useCallback)((function(){return 2===A?u.createElement(v.Z,{showIngestionButton:!0,handleIngestionClick:function(){return O(!0)},handleViewServiceClick:j,isAirflowSetup:P,name:(null==R?void 0:R.name)||"",state:h.Y.ADD,viewServiceText:"View Test Suite",onCheckAirflowStatus:U}):u.createElement(x,{onSubmit:D})}),[A,P]);return(0,u.useEffect)((function(){U()}),[]),u.createElement(r.Z,{className:"m-t-md","data-testid":"test-suite-stepper-container",gutter:[16,16]},u.createElement(i.Z,{offset:4,span:12},u.createElement(s.Z,{direction:"vertical",size:"middle"},u.createElement(Z.Z,{titleLinks:b.VQ}),G?u.createElement(E.Z,{testSuite:R,onCancel:function(){return O(!1)}}):u.createElement(r.Z,{className:"tw-form-container",gutter:[16,16]},u.createElement(i.Z,{span:24},u.createElement(l.Z.Title,{className:"heading","data-testid":"header",level:5},e("label.add-entity",{entity:e("label.test-suite")}))),u.createElement(i.Z,{span:24},u.createElement(S.Z,{activeStep:A,steps:b.HZ})),u.createElement(i.Z,{span:24},M())))),u.createElement(i.Z,{className:"m-t-md","data-testid":"right-panel",span:6},u.createElement(f.Z,{data:G?p.j$:(0,p.nA)(A,(null==R?void 0:R.name)||"")})))}}}]);