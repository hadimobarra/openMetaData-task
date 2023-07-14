"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[2913],{88389:function(e,t,n){var a=n(8081),r=n.n(a),i=n(23645),l=n.n(i)()(r());l.push([e.id,'/*\n *  Copyright 2022 Collate\n *  Licensed under the Apache License, Version 2.0 (the "License");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *  http://www.apache.org/licenses/LICENSE-2.0\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an "AS IS" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n.table-profiler-container .overall-summery-card:not(:first-child) {\n  border-left: 1px solid #e5e7eb;\n  padding-left: 16px;\n}\n.table-profiler-container .success {\n  color: #28a745;\n}\n.table-profiler-container .failed {\n  color: #cb2431;\n}\n.table-profiler-container .aborted {\n  color: #efae2f;\n}\n.table-profiler-container .ant-table-row .ant-table-cell:first-child,\n.table-profiler-container .ant-table-thead .ant-table-cell:first-child {\n  padding-left: 16px;\n}\n.table-profiler-container .ant-menu-inline {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.profiler-setting-sql-editor {\n  border: 1px solid #dde3ea;\n  border-radius: 2px;\n}\n.profiler-setting-sql-editor .CodeMirror {\n  height: 200px;\n}\n.include-columns-add-button.ant-btn-icon-only.ant-btn-sm {\n  width: 18px;\n  height: 18px;\n  font-size: 8px;\n}\n',""]),t.Z=l},36736:function(e,t,n){var a=n(93379),r=n.n(a),i=n(7795),l=n.n(i),o=n(90569),u=n.n(o),s=n(3565),c=n.n(s),d=n(19216),m=n.n(d),p=n(44589),f=n.n(p),v=n(88389),E={};E.styleTagTransform=f(),E.setAttributes=c(),E.insert=u().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=m(),r()(v.Z,E),v.Z&&v.Z.locals&&v.Z.locals},34797:function(e,t,n){n.d(t,{Cz:function(){return o},xf:function(){return u},rO:function(){return s},no:function(){return c},ch:function(){return d},AJ:function(){return m},eL:function(){return p},H6:function(){return f},zz:function(){return v},pQ:function(){return E}});var a=n(70655),r=n(97451),i="/testCase",l="/testSuite",o=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.get(i,{params:e})];case 1:return[2,t.sent().data]}}))}))},u=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return n="/testCase/"+e+"/testCaseResult",[4,r.Z.get(n,{params:t})];case 1:return[2,a.sent().data]}}))}))},s=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.post(i,e)];case 1:return[2,t.sent().data]}}))}))},c=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return n={headers:{"Content-type":"application/json-patch+json"}},[4,r.Z.patch("/testCase/"+e,t,n)];case 1:return[2,a.sent().data]}}))}))},d=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.get("/testDefinition",{params:e})];case 1:return[2,t.sent().data]}}))}))},m=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,r.Z.get("/testDefinition/"+e,{params:t})];case 1:return[2,n.sent().data]}}))}))},p=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.get(l,{params:e})];case 1:return[2,t.sent().data]}}))}))},f=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.post(l,e)];case 1:return[2,t.sent().data]}}))}))},v=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,r.Z.get("/testSuite/name/"+e,{params:t})];case 1:return[2,n.sent().data]}}))}))},E=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return n={headers:{"Content-type":"application/json-patch+json"}},[4,r.Z.patch("/testSuite/"+e,t,n)];case 1:return[2,a.sent().data]}}))}))}},30835:function(e,t,n){var a=n(70655),r=n(49101),i=n(4107),l=n(85986),o=n(12028),u=n(9242),s=n(71577),c=(n(87825),n(67294)),d=n(99017),m=n(38464);n(36736),t.Z=function(e){var t=e.definition,n=function(e){var t=c.createElement(i.Z,{placeholder:"Enter "+e.displayName});switch(e.dataType){case d.QP.String:t=c.createElement(i.Z,{placeholder:"Enter "+e.displayName});break;case d.QP.Number:case d.QP.Int:case d.QP.Decimal:case d.QP.Double:case d.QP.Float:t=c.createElement(l.Z,{className:"tw-w-full",placeholder:"Enter "+e.displayName});break;case d.QP.Boolean:t=c.createElement(o.Z,null);break;case d.QP.Array:case d.QP.Set:return t=c.createElement(i.Z,{placeholder:"Enter comma(,) separated "+e.displayName}),c.createElement(u.Z.List,{initialValue:[{value:""}],key:e.name,name:e.name||""},(function(t,n){var l=n.add,o=n.remove;return c.createElement(u.Z.Item,{key:e.name,label:c.createElement("span",null,c.createElement("span",{className:"tw-mr-3"},e.displayName,":"),c.createElement(s.Z,{icon:c.createElement(r.Z,null),size:"small",type:"primary",onClick:function(){return l()}})),name:e.name,tooltip:e.description},t.map((function(t){var n=t.key,r=t.name,l=(0,a._T)(t,["key","name"]);return c.createElement("div",{className:"tw-flex tw-gap-2 tw-w-full",key:n},c.createElement(u.Z.Item,(0,a.pi)({className:"tw-w-11/12 tw-mb-4"},l,{name:[r,"value"],rules:[{required:e.required,message:e.displayName+" is required!"}]}),c.createElement(i.Z,{placeholder:"Enter "+e.displayName})),c.createElement(s.Z,{icon:c.createElement(m.ZP,{alt:"delete",className:"tw-w-4",icon:m.PJ.DELETE}),type:"text",onClick:function(){return o(r)}}))})))}))}return c.createElement(u.Z.Item,{key:e.name,label:e.displayName+":",name:e.name,rules:[{required:e.required,message:e.displayName+" is required!"}],tooltip:e.description},t)};return c.createElement(u.Z.List,{name:"params"},(function(){var e;return null===(e=t.parameterDefinition)||void 0===e?void 0:e.map(n)}))}},2913:function(e,t,n){n.d(t,{Z:function(){return ne}});var a=n(70655),r=n(19650),i=n(71230),l=n(94199),o=n(71577),u=n(25213),s=n(96486),c=n(67294),d=n(437),m=n(97882),p=n(96566),f=n(62761),v=n(52114),E=n(85087),b=n(48132),y=n(96840),h=n(81274),g=n(38464),C=n(19790),T=n(87968),N=n(9242),Z=n(4107),w=n(83663),A=n(60236),S=n(34797),D=n(27914),I=n(99017),x=n(6929),L=n(50168),R=n(97809),k=n(53867),P=n(89216),M=n(30835),O=function(e){var t,n,r=e.visible,i=e.testCase,l=e.onCancel,o=e.onUpdate,u=(0,d.$)().t,s=(0,a.CR)(N.Z.useForm(),1)[0],m=(0,a.CR)((0,c.useState)(),2),p=m[0],f=m[1],v=(0,a.CR)((0,c.useState)(null!==(n=null===(t=null==i?void 0:i.parameterValues)||void 0===t?void 0:t[0])&&void 0!==n?n:{name:"sqlExpression",value:""}),2),E=v[0],y=v[1],h=(0,a.CR)((0,c.useState)(!0),2),g=h[0],T=h[1],O=(0,a.CR)((0,c.useState)(!1),2),F=O[0],q=O[1],B=(0,c.useRef)(),G=(0,c.useMemo)((function(){return null==i?void 0:i.entityLink.includes("::columns::")}),[i]),U=(0,c.useCallback)((function(){if(p&&p.parameterDefinition){var e=p.parameterDefinition[0].name;return"sqlExpression"===e?c.createElement(N.Z.Item,{"data-testid":"sql-editor-container",key:e,label:u("label.sql-query"),name:e,tooltip:u("label.sql-query-tooltip")},c.createElement(P.Z,{className:"profiler-setting-sql-editor",mode:{name:D.Q.SQL},options:{readOnly:!1},value:E.value||"",onChange:function(e){return y((function(t){return(0,a.pi)((0,a.pi)({},t),{value:e})}))}})):c.createElement(M.Z,{definition:p})}}),[i,p,E]),V=function(){var e;return null===(e=null==i?void 0:i.parameterValues)||void 0===e?void 0:e.reduce((function(e,t){var n,r;return(0,a.pi)((0,a.pi)({},e),((n={})[t.name||""]=(null===(r=null==p?void 0:p.parameterDefinition)||void 0===r?void 0:r[0].dataType)===I.QP.Array?JSON.parse(t.value||"[]").map((function(e){return{value:e}})):t.value,n))}),{})};return(0,c.useEffect)((function(){var e,t,n;i&&((0,a.mG)(void 0,void 0,void 0,(function(){var e,t;return(0,a.Jh)(this,(function(n){switch(n.label){case 0:T(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,(0,S.AJ)(i.testDefinition.id||"")];case 2:return e=n.sent(),f(e),[3,5];case 3:return t=n.sent(),(0,L.Eo)(t),[3,5];case 4:return T(!1),[7];case 5:return[2]}}))})),s.setFieldsValue({name:null==i?void 0:i.name,testDefinition:null===(e=null==i?void 0:i.testDefinition)||void 0===e?void 0:e.name,params:V(),table:(0,b.AY)((0,C.lW)(null==i?void 0:i.entityLink)),column:(0,b.AY)((0,C.lW)(null==i?void 0:i.entityLink,G))}),y(null!==(n=null===(t=null==i?void 0:i.parameterValues)||void 0===t?void 0:t[0])&&void 0!==n?n:{name:"sqlExpression",value:""}))}),[i]),c.createElement(w.Z,{centered:!0,destroyOnClose:!0,afterClose:function(){s.resetFields(),l()},closable:!1,confirmLoading:F,okText:u("label.submit"),title:u("label.edit")+" "+(null==i?void 0:i.name),visible:r,width:600,onCancel:l,onOk:function(){return s.submit()}},g?c.createElement(k.Z,null):c.createElement(N.Z,{className:"tw-h-70vh tw-overflow-auto",form:s,initialValues:{sqlExpression:E.value},layout:"vertical",name:"tableTestForm",onFinish:function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r,u,c,d;return(0,a.Jh)(this,(function(m){switch(m.label){case 0:if(t=function(e){var t,n,r=null===(t=null==p?void 0:p.parameterDefinition)||void 0===t?void 0:t[0],i="sqlExpression"===(null==r?void 0:r.name)?[E]:Object.entries(e.params||{}).map((function(e){var t=(0,a.CR)(e,2),n=t[0],i=t[1];return{name:n,value:(null==r?void 0:r.dataType)===I.QP.Array?JSON.stringify(i.map((function(e){return e.value}))):i}}));return{parameterValues:i,description:null===(n=B.current)||void 0===n?void 0:n.getEditorContent()}}(e),n=t.parameterValues,r=t.description,u=(0,a.pi)((0,a.pi)({},i),{parameterValues:n,description:r}),!(c=(0,A.qu)(i,u)).length)return[3,5];m.label=1;case 1:return m.trys.push([1,3,4,5]),q(!0),[4,(0,S.no)(i.id||"",c)];case 2:return m.sent(),o&&o(),(0,L.XA)(x.Z["api-success-messages"]["update-test-case-success"]),l(),s.resetFields(),[3,5];case 3:return d=m.sent(),(0,L.Eo)(d),[3,5];case 4:return q(!1),[7];case 5:return[2]}}))}))}},c.createElement(N.Z.Item,{required:!0,label:u("label.table")+":",name:"table"},c.createElement(Z.Z,{disabled:!0})),G&&c.createElement(N.Z.Item,{required:!0,label:u("label.column")+":",name:"column"},c.createElement(Z.Z,{disabled:!0})),c.createElement(N.Z.Item,{required:!0,label:u("label.name")+":",name:"name"},c.createElement(Z.Z,{disabled:!0,placeholder:u("label.enter-test-case-name")})),c.createElement(N.Z.Item,{required:!0,label:u("label.test-type")+":",name:"testDefinition"},c.createElement(Z.Z,{disabled:!0,placeholder:u("label.enter-test-case-name")})),U(),c.createElement(N.Z.Item,{label:u("label.description")+":",name:"description"},c.createElement(R.Z,{height:"200px",initialValue:(null==i?void 0:i.description)||"",ref:B,style:{margin:0}}))))},F=n(72945),q=n(56256),B=n(15746),G=n(34041),U=n(52505),V=n(29009),K=n(98687),J=n(3023),Q=n(75358),Y=n(99307),z=n(23872),W=n(56880),j=n(56275),H=n(61105),X=n(98809),_=n(6776),$=n(28178),ee=n(80131),te=function(e){var t,n,l=e.data,o=(0,a.CR)((0,c.useState)({}),2),u=o[0],d=o[1],m=(0,a.CR)((0,c.useState)([]),2),p=m[0],f=m[1],v=(0,a.CR)((0,c.useState)("last3days"),2),E=v[0],b=v[1],y=(0,a.CR)((0,c.useState)(!0),2),g=y[0],C=y[1],N=(0,c.useMemo)((function(){return Object.entries(j.CF).map((function(e){var t=(0,a.CR)(e,2),n=t[0];return{label:t[1].title,value:n}}))}),[]),Z=function(e){var t=e.cx,n=void 0===t?0:t,a=e.cy,r=void 0===a?0:a,i=e.payload,l=i.status===X.M.Success?"#28A745":i.status===X.M.Failed?"#CB2431":"#EFAE2F";return c.createElement("svg",{fill:"none",height:8,width:8,x:n-4,xmlns:"http://www.w3.org/2000/svg",y:r-4},c.createElement("circle",{cx:4,cy:4,fill:l,r:4}))};return(0,c.useEffect)((function(){(0,a.mG)(void 0,void 0,void 0,(function(){var e,t,n,r;return(0,a.Jh)(this,(function(i){switch(i.label){case 0:if((0,s.isEmpty)(l))return[2];i.label=1;case 1:return i.trys.push([1,3,4,5]),e=(0,T.Dk)(j.CF[E].days),t=(0,T.uh)(),[4,(0,S.xf)((0,h.Yd)(l.fullyQualifiedName||""),{startTs:e,endTs:t})];case 2:return n=i.sent().data,f(n),function(e){var t,n,r=[];e.forEach((function(e){var t,n=null===(t=e.testResultValue)||void 0===t?void 0:t.reduce((function(e,t){var n;return(0,a.pi)((0,a.pi)({},e),((n={})[t.name||"value"]=parseInt(t.value||"")||0,n))}),{});r.push((0,a.pi)({name:(0,T.bo)(e.timestamp),status:e.testCaseStatus||""},n))})),d({information:(null===(n=null===(t=e[0])||void 0===t?void 0:t.testResultValue)||void 0===n?void 0:n.map((function(e,t){return{label:e.name||"",color:j.DM[t]}})))||[],data:r.reverse()})}(n),[3,5];case 3:return r=i.sent(),(0,L.Eo)(r),[3,5];case 4:return C(!1),[7];case 5:return[2]}}))}))}),[E]),c.createElement(i.Z,{gutter:16},c.createElement(B.Z,{span:16},g?c.createElement(k.Z,null):c.createElement("div",null,c.createElement(r.Z,{align:"end",className:"tw-w-full",direction:"vertical"},c.createElement(G.Z,{className:"tw-w-32 tw-mb-2",options:N,value:E,onChange:function(e){e!==E&&b(e)}})),p.length?c.createElement(V.h,{className:"tw-bg-white",id:l.name+"_graph",minHeight:300},c.createElement(K.w,{data:u.data,margin:{top:8,bottom:8,right:8}},c.createElement(J.K,{dataKey:"name",padding:{left:8,right:8}}),c.createElement(Q.B,{allowDataOverflow:!0,padding:{top:8,bottom:8},tickFormatter:function(e){return(0,_.qS)(e)}}),c.createElement(Y.u,null),c.createElement(z.D,null),2===(null===(t=l.parameterValues)||void 0===t?void 0:t.length)&&function(){var e,t=null===(e=l.parameterValues)||void 0===e?void 0:e.reduce((function(e,t,n){var r;return(0,a.pi)((0,a.pi)({},e),((r={})["y"+(n+1)]=parseInt(t.value||""),r))}),{});return c.createElement(U.z,(0,a.pi)({fill:"#28A74530",ifOverflow:"extendDomain",stroke:"#28A745",strokeDasharray:"4"},t))}(),null===(n=null==u?void 0:u.information)||void 0===n?void 0:n.map((function(e,t){return c.createElement(W.x,{dataKey:e.label,dot:Z,key:t,stroke:e.color,type:"monotone"})})))):c.createElement($.Z,{classes:"tw-mt-0",size:H.NO.MEDIUM},c.createElement(q.Z.Paragraph,{className:"m-b-md"},"No Results Available. Try filtering by a different time period.")))),c.createElement(B.Z,{span:8},c.createElement(i.Z,{gutter:[8,8]},c.createElement(B.Z,{span:24},c.createElement(q.Z.Text,{type:"secondary"},"Name: "),c.createElement(q.Z.Text,null,l.displayName||l.name)),c.createElement(B.Z,{span:24},c.createElement(q.Z.Text,{type:"secondary"},"Parameter: ")),c.createElement(B.Z,{offset:1,span:24},l.parameterValues&&l.parameterValues.length>0?l.parameterValues.map((function(e){var t;return"sqlExpression"===e.name?c.createElement("div",{key:e.name},c.createElement(q.Z.Text,null,e.name,": "),c.createElement(P.Z,{className:"tw-w-11/12 tw-mt-1",editorClass:"table-query-editor",mode:{name:D.Q.SQL},options:{styleActiveLine:!1},value:null!==(t=e.value)&&void 0!==t?t:""})):c.createElement("div",{key:e.name},c.createElement(q.Z.Text,null,e.name,": "),c.createElement(q.Z.Text,null,e.value))})):c.createElement(q.Z.Text,{type:"secondary"},"No Parameter Available")),c.createElement(B.Z,{className:"tw-flex tw-gap-2",span:24},c.createElement(q.Z.Text,{type:"secondary"},"Description: "),c.createElement(ee.Z,{markdown:l.description||""})))))},ne=function(e){var t=e.isLoading,n=void 0!==t&&t,N=e.testCases,Z=e.deletedTable,w=void 0!==Z&&Z,A=e.onTestUpdate,S=(0,d.$)().t,D=(0,a.CR)((0,c.useState)(),2),I=D[0],x=D[1],L=(0,a.CR)((0,c.useState)(),2),R=L[0],P=L[1],M=(0,E.a)().isAdminUser,q=(0,p.Eu)().isAuthDisabled,B=M||q,G=(0,c.useMemo)((function(){return[{title:S("label.last-run-result"),dataIndex:"testCaseResult",key:"testCaseResult",render:function(e){return c.createElement(r.Z,{size:8},(null==e?void 0:e.testCaseStatus)&&c.createElement(g.ZP,{alt:"result",className:"w-4",icon:(0,C.LW)(e.testCaseStatus)}),c.createElement("span",null,(null==e?void 0:e.testCaseStatus)||"--"))}},{title:S("label.last-run"),dataIndex:"testCaseResult",key:"lastRun",render:function(e){return(null==e?void 0:e.timestamp)?(0,T.bo)(e.timestamp):"--"}},{title:S("label.name"),dataIndex:"name",key:"name",render:function(e){return c.createElement("span",{"data-testid":e},e)}},{title:S("label.description"),dataIndex:"description",key:"description",render:function(e){return(0,s.isEmpty)(e)?"--":e}},{title:S("label.test-suite"),dataIndex:"testSuite",key:"testSuite",render:function(e){return c.createElement(m.Link,{to:(0,y.nn)((null==e?void 0:e.fullyQualifiedName)||""),onClick:function(e){return e.stopPropagation()}},(0,b.C_)(e))}},{title:S("label.table"),dataIndex:"entityLink",key:"table",render:function(e){var t=(0,C.lW)(e),n=(0,b.AY)(t);return c.createElement(m.Link,{to:(0,f.DV)(t,"profiler"),onClick:function(e){return e.stopPropagation()}},n)}},{title:S("label.column"),dataIndex:"entityLink",key:"column",render:function(e){var t=e.includes("::columns::");return t?(0,b.AY)((0,h.p2)((0,C.lW)(e,t),!0)):"--"}},{title:S("label.actions"),dataIndex:"actions",key:"actions",width:100,render:function(e,t){return c.createElement(i.Z,{align:"middle"},!w&&c.createElement(l.Z,{placement:"bottomRight",title:B?"Edit":v.oH},c.createElement(o.Z,{className:"flex-center","data-testid":"edit-"+t.name,disabled:!B,icon:c.createElement(g.ZP,{alt:"edit",className:"h-4",icon:g.PJ.EDIT,title:"Edit"}),type:"text",onClick:function(e){e.stopPropagation(),P(t)}})),c.createElement(l.Z,{placement:"bottomLeft",title:B?S("label.delete"):v.oH},c.createElement(o.Z,{className:"flex-center","data-testid":"delete-"+t.name,disabled:!B,icon:c.createElement(g.ZP,{alt:S("label.delete"),className:"h-4",icon:g.PJ.DELETE}),type:"text",onClick:function(e){e.stopPropagation(),x(t)}})))}}]}),[B,w]);return c.createElement(c.Fragment,null,c.createElement(u.Z,{bordered:!0,className:"table-shadow",columns:G,dataSource:N.map((function(e){return(0,a.pi)((0,a.pi)({},e),{key:e.name})})),expandable:(0,a.pi)((0,a.pi)({},(0,C.Bn)()),{expandRowByClick:!0,rowExpandable:function(){return!0},expandedRowRender:function(e){return c.createElement(te,{data:e})}}),loading:{indicator:c.createElement(k.Z,{size:"small"}),spinning:n},pagination:!1,rowKey:"id",size:"small"}),c.createElement(O,{testCase:R,visible:!(0,s.isUndefined)(R),onCancel:function(){return P(void 0)},onUpdate:A}),c.createElement(F.Z,{afterDeleteAction:A,allowSoftDelete:!w,entityId:(null==I?void 0:I.id)||"",entityName:(null==I?void 0:I.name)||"",entityType:"testCase",prepareType:!1,visible:!(0,s.isUndefined)(I),onCancel:function(){x(void 0)}}))}},56275:function(e,t,n){n.d(t,{DM:function(){return m},US:function(){return h},GR:function(){return C},Fh:function(){return p},kK:function(){return v},Wi:function(){return y},dO:function(){return f},U4:function(){return b},H9:function(){return E},V:function(){return g},SX:function(){return w},gj:function(){return A},CF:function(){return d},T3:function(){return c},wG:function(){return S},pq:function(){return N},Yk:function(){return Z},Dj:function(){return T}});var a,r,i=n(67800),l=n(27914);!function(e){e.Delete="DELETE",e.Insert="INSERT",e.Update="UPDATE"}(a||(a={})),function(e){e.Percentage="PERCENTAGE",e.Rows="ROWS"}(r||(r={}));var o=n(80307),u=n(98809),s=n(62761),c=["valuesCount","valuesPercentage","validCount","duplicateCount","nullCount","nullProportion","missingPercentage","missingCount","uniqueCount","uniqueProportion","distinctCount","distinctProportion","min","max","minLength","maxLength","mean","sum","stddev","variance","median","histogram","customMetricsProfile"],d={last3days:{days:3,title:"Last 3 days"},last7days:{days:7,title:"Last 7 days"},last14days:{days:14,title:"Last 14 days"},last30days:{days:30,title:"Last 30 days"},last60days:{days:60,title:"Last 60 days"}},m=["#54C5D0","#2ab0a0","#2ab069","#18ffec","#008376"],p={information:[{title:"Distinct Count",dataKey:"distinctCount",color:"#1890FF"},{title:"Null Count",dataKey:"nullCount",color:"#54C5D0"},{title:"Unique Count",dataKey:"uniqueCount",color:"#008376"},{title:"Values Count",dataKey:"valuesCount",color:"#B02AAC"}],data:[]},f={information:[{title:"Distinct Proportion",dataKey:"distinctProportion",color:"#1890FF"},{title:"Null Proportion",dataKey:"nullProportion",color:"#54C5D0"},{title:"Unique Proportion",dataKey:"uniqueProportion",color:"#008376"}],data:[]},v={information:[{title:"Median",dataKey:"median",color:"#1890FF"},{title:"Max",dataKey:"max",color:"#54C5D0"},{title:"Mean",dataKey:"mean",color:"#008376"},{title:"Min",dataKey:"min",color:"#B02AAC"}],data:[]},E={information:[{title:"Sum",dataKey:"sum",color:"#1890FF"}],data:[]},b={information:[{title:(0,i.t)("label.row-count"),dataKey:"rowCount",color:"#008376"}],data:[]},y={information:[{title:(0,i.t)("label.insert"),dataKey:a.Insert,color:"#008376"},{title:(0,i.t)("label.update"),dataKey:a.Update,color:"#1890FF"},{title:(0,i.t)("label.delete"),dataKey:a.Delete,color:"#54C5D0"}],data:[]},h=[{columnName:void 0,metrics:["all"]}],g={success:0,aborted:0,failed:0},C=[{value:0,type:u.M.Success},{value:0,type:u.M.Aborted},{value:0,type:u.M.Failed}],T={tabSize:s.Wb,indentUnit:s.Wb,indentWithTabs:!0,lineNumbers:!0,lineWrapping:!0,styleActiveLine:!0,matchBrackets:!0,autoCloseBrackets:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],mode:{name:l.Q.SQL}},N=[{name:"Select/Add Test Suite",step:1},{name:"Configure Test Case",step:2}],Z=[o.g.Timestamp,o.g.Date,o.g.Datetime,o.g.Timestampz],w=Object.values(o.Af).map((function(e){return{value:e,label:e}})),A=Object.values(o.Gv).map((function(e){return{value:e,label:e}})),S=[{label:(0,i.t)("label.percentage"),key:o.KF.Percentage,value:o.KF.Percentage},{label:(0,i.t)("label.row-count"),key:o.KF.Rows,value:o.KF.Rows}]},99017:function(e,t,n){var a,r,i,l;n.d(t,{py:function(){return a},QP:function(){return r},EN:function(){return l}}),function(e){e.Column="COLUMN",e.Table="TABLE"}(a||(a={})),function(e){e.Array="ARRAY",e.Boolean="BOOLEAN",e.Date="DATE",e.Datetime="DATETIME",e.Decimal="DECIMAL",e.Double="DOUBLE",e.Float="FLOAT",e.Int="INT",e.Map="MAP",e.Number="NUMBER",e.Set="SET",e.String="STRING",e.Time="TIME",e.Timestamp="TIMESTAMP"}(r||(r={})),function(e){e.Aggregatefunction="AGGREGATEFUNCTION",e.Array="ARRAY",e.Bigint="BIGINT",e.Binary="BINARY",e.Blob="BLOB",e.Boolean="BOOLEAN",e.Bytea="BYTEA",e.Byteint="BYTEINT",e.Bytes="BYTES",e.Char="CHAR",e.Date="DATE",e.Datetime="DATETIME",e.Decimal="DECIMAL",e.Double="DOUBLE",e.Enum="ENUM",e.Float="FLOAT",e.Geography="GEOGRAPHY",e.Geometry="GEOMETRY",e.Int="INT",e.Interval="INTERVAL",e.JSON="JSON",e.Long="LONG",e.Longblob="LONGBLOB",e.Map="MAP",e.Mediumblob="MEDIUMBLOB",e.Mediumtext="MEDIUMTEXT",e.Number="NUMBER",e.Numeric="NUMERIC",e.Point="POINT",e.Polygon="POLYGON",e.Set="SET",e.Smallint="SMALLINT",e.String="STRING",e.Struct="STRUCT",e.Text="TEXT",e.Time="TIME",e.Timestamp="TIMESTAMP",e.Timestampz="TIMESTAMPZ",e.Tinyint="TINYINT",e.UUID="UUID",e.Union="UNION",e.Varbinary="VARBINARY",e.Varchar="VARCHAR",e.Variant="VARIANT"}(i||(i={})),function(e){e.Dbt="DBT",e.Deequ="Deequ",e.GreatExpectations="GreatExpectations",e.OpenMetadata="OpenMetadata",e.Other="Other",e.Soda="Soda"}(l||(l={}))},6776:function(e,t,n){n.d(t,{CX:function(){return o},qS:function(){return u},Ss:function(){return s}});var a=n(70655),r=n(96486),i=n(67294),l=n(48132),o=function(e,t){var n=Number(e);return i.createElement(i.Fragment,null,t?""+n.toFixed(2)+t:(0,l.FX)(n))},u=function(e,t){return t?""+e+t:(0,r.toString)((0,l.FX)(e))},s=function(e,t){var n=(0,a.ev)((0,a.ev)([],(0,a.CR)(t)),[e]);return t.length&&t.includes(e)?t.filter((function(t){return t!==e})):n}}}]);