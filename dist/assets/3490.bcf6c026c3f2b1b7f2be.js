"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[3490],{23235:function(e,t,a){var r=a(8081),n=a.n(r),i=a(23645),s=a.n(i)()(n());s.push([e.id,'/*\n *  Copyright 2022 Collate\n *  Licensed under the Apache License, Version 2.0 (the "License");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *  http://www.apache.org/licenses/LICENSE-2.0\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an "AS IS" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n/*\n *  Copyright 2022 Collate\n *  Licensed under the Apache License, Version 2.0 (the "License");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *  http://www.apache.org/licenses/LICENSE-2.0\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an "AS IS" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n.page-header-container .heading {\n  margin-bottom: 4px;\n  color: #37352f;\n  font-size: 18px;\n}\n.page-header-container .sub-heading {\n  font-weight: 400;\n  color: #6b7280;\n  line-height: 17px;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n',""]),t.Z=s},10584:function(e,t,a){a.d(t,{z:function(){return c}});var r=a(70655),n=a(45697),i=a.n(n),s=a(67294),o={base:"button-comp tw-align-bottom tw-inline-flex tw-items-center tw-justify-center tw-cursor-pointer \n    tw-leading-5 tw-transition-colors tw-duration-150 tw-font-medium focus:tw-outline-none",block:"tw-block tw-w-full",size:{large:"tw-px-5 tw-py-3 tw-rounded-lg",regular:"tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm",small:"tw-px-2 tw-py-0.5 tw-rounded-md tw-text-sm","x-small":"tw-px-2 tw-py-px tw-rounded-md tw-text-xs",custom:""},contained:{default:{base:"tw-text-gray-600 tw-bg-gray-300 tw-border tw-border-transparent",active:"active:tw-bg-gray-400 hover:tw-bg-gray-400 focus:tw-ring focus:tw-ring-gray-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-white tw-bg-primary tw-border tw-border-transparent",active:"active:tw-bg-primary-active hover:tw-bg-primary-hover focus:tw-bg-primary-active focus:tw-ring focus:tw-ring-purple-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"}},outlined:{default:{base:"tw-text-grey-muted tw-border-gray-300 tw-border dark:tw-text-gray-400 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-border-gray-600 focus:tw-border-gray-600 \n      hover:tw-text-gray-600 active:tw-text-gray-600 focus:tw-ring focus:tw-ring-gray-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-primary tw-border-primary tw-border dark:tw-text-blue-300 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-bg-primary hover:tw-text-white focus:tw-bg-primary \n      focus:tw-text-white active:tw-bg-primary active:tw-text-white focus:tw-ring focus:tw-ring-purple-300",disabled:"tw-opacity-50 tw-cursor-not-allowed"}},link:{default:{base:"tw-text-grey dark:tw-text-gray-400 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-underline focus:tw-underline \n        hover:tw-text-gray-600 active:tw-text-gray-600",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-primary dark:tw-text-blue-300 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-underline focus:tw-underline \n        hover:tw-text-primary-hover active:tw-text-primary-active",disabled:"tw-opacity-50 tw-cursor-not-allowed"}},text:{default:{base:"tw-text-grey-muted dark:tw-text-gray-400 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-text-gray-600 active:tw-text-gray-600",disabled:"tw-opacity-50 tw-cursor-not-allowed"},primary:{base:"tw-text-primary dark:tw-text-blue-300 focus:tw-outline-none",active:"active:tw-bg-transparent hover:tw-text-primary-hover active:tw-text-primary-active",disabled:"tw-opacity-50 tw-cursor-not-allowed"}}},c=s.forwardRef((function(e,t){var a=e.block,n=void 0!==a&&a,i=e.children,c=e.className,l=void 0===c?"":c,u=e.disabled,d=void 0!==u&&u,m=e.size,w=void 0===m?"regular":m,p=e.tag,g=void 0===p?"button":p,f=e.theme,b=void 0===f?"default":f,h=e.type,E=void 0===h?"button"===g?"button":void 0:h,y=e.variant,v=void 0===y?"contained":y,S=(0,r._T)(e,["block","children","className","disabled","size","tag","theme","type","variant"]),x=o.base,A=o.block,C=o.size[w],I=o[v][b].base,N=o[v][b].active,T=o[v][b].disabled,R=[x,C,I,d?T:N,n?A:"",l].join(" ");return s.createElement(g,(0,r.pi)({className:R,ref:t,disabled:d,type:E},S),i)}));c.propTypes={block:i().bool,children:i().node,className:i().string,disabled:i().bool,tag:i().string,size:i().oneOf(["large","regular","small","x-small","custom"]),theme:i().oneOf(["default","primary"]),type:i().oneOf(["button","submit","reset"]),variant:i().oneOf(["contained","outlined","link","text"])},c.displayName="Button"},41693:function(e,t,a){a.d(t,{Z:function(){return u}});var r,n=a(70655),i=a(51436),s=a(67814),o=a(67294);!function(e){e.BEFORE="before",e.AFTER="after"}(r||(r={}));var c=a(10584),l=function(e,t){return Math.ceil(t/e)},u=function(e){var t=e.paging,a=e.pagingHandler,u=e.totalCount,d=e.pageSize,m=e.isNumberBased,w=void 0!==m&&m,p=e.currentPage,g=(0,n.CR)((0,o.useState)(1),2),f=g[0],b=g[1];return(0,o.useEffect)((function(){b(p)}),[p]),o.createElement("div",{className:"tw-my-4 tw-flex tw-justify-center tw-items-center tw-gap-2","data-testid":"pagination"},o.createElement(c.z,{className:"tw-rounded tw-w-24  tw-px-3 tw-py-1.5 tw-text-sm","data-testid":"previous",disabled:w?1===f:!t.before,size:"custom",theme:"primary",variant:"outlined",onClick:function(){b(f-1),w?a(f-1):a(r.BEFORE,f-1)}},o.createElement(s.G,{className:"tw-text-sm tw-align-middle tw-pr-1.5",icon:i.acZ})," ",o.createElement("span",null,"Previous")),o.createElement("span",{className:"tw-px-2","data-testid":"page-indicator"},f+"/"+l(d,u)+" Page"),o.createElement(c.z,{className:"tw-rounded tw-w-24 tw-px-3 tw-py-1.5 tw-text-sm","data-testid":"next",disabled:function(){if(w){var e=l(d,u);return f===e}return!t.after}(),size:"custom",theme:"primary",variant:"outlined",onClick:function(){b(f+1),w?a(f+1):a(r.AFTER,f+1)}},o.createElement("span",null," Next")," ",o.createElement(s.G,{className:"tw-text-sm tw-align-middle tw-pl-1.5",icon:i.eFW})))}},46892:function(e,t,a){a.d(t,{K:function(){return o}});var r=a(94184),n=a.n(r),i=a(67294),s=a(61637),o={border:"1px rgb(221, 227, 234) solid",borderRadius:"4px",boxShadow:"1px 1px 8px rgb(0 0 0 / 6%)"};t.Z=function(e){var t=e.leftPanel,a=e.header,r=e.children,o=e.rightPanel,c=e.layout,l=void 0===c?s.Q["3Col"]:c,u=e.classes,d=void 0===u?"":u,m=function(){return t&&i.createElement("div",{className:"tw-py-1",id:"left-panel"},t)},w=function(){return o&&i.createElement("div",{className:"tw-py-1",id:"right-panel"},o)};return function(e){switch(e){case s.Q["2ColLTR"]:return i.createElement(i.Fragment,null,a&&i.createElement("div",{className:"tw-px-6"},a),i.createElement("div",{className:n()("page-layout-container l2-ltr-col tw-gap-x-3 tw-px-6 centered-layout",d,t?"page-layout-container-left-center":"page-layout-container-center")},m(),i.createElement("div",{className:n()("tw-py-1",{"tw-pl-8":t}),id:"center"},r)));case s.Q["2ColRTL"]:return i.createElement(i.Fragment,null,a&&i.createElement("div",{className:"page-layout-container tw-gap-x-3 tw-px-6 centered-layout tw-max-w-full-hd tw-pt-4"},a),i.createElement("div",{className:n()("page-layout-container l2-rtl-col tw-gap-x-3 tw-px-6 centered-layout",d,o?"page-layout-container-center-right":"page-layout-container-center")},i.createElement("div",{className:n()("tw-py-1",{"tw-pr-10":o}),id:"center"},r),w()));case s.Q["3Col"]:default:return i.createElement(i.Fragment,null,a&&i.createElement("div",{className:"tw-px-6"},a),i.createElement("div",{className:n()("page-layout-container l3-col tw-gap-x-3 tw-px-6 centered-layout",d,{"page-layout-container-left-center-right":t&&r&&o},{"page-layout-container-left-center":!o},{"page-layout-container-center-right":!t},{"page-layout-container-center":!t&&!o})},m(),i.createElement("div",{className:t||o?"tw-py-1":"",id:"center"},r),w()))}}(l)}},41137:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(56256),n=a(67294),i=a(93379),s=a.n(i),o=a(7795),c=a.n(o),l=a(90569),u=a.n(l),d=a(3565),m=a.n(d),w=a(19216),p=a.n(w),g=a(44589),f=a.n(g),b=a(23235),h={};h.styleTagTransform=f(),h.setAttributes=m(),h.insert=u().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),s()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var E=function(e){var t=e.data,a=t.header,i=t.subHeader;return n.createElement("div",{className:"page-header-container"},n.createElement(r.Z.Title,{className:"heading"},a),n.createElement(r.Z.Paragraph,{className:"sub-heading"},i))}},43104:function(e,t,a){a.d(t,{j:function(){return r}});var r={ADVANCE_SEARCH:{header:"Advanced Search",subHeader:"Discover the right data assets quickly using the syntax editor with and/or conditions."},TABLE_PROFILE:{header:"Table Profile",subHeader:"Monitor and understand your tables structure with the profiler."},DATA_QUALITY:{header:"Data Quality",subHeader:"Build trust in your data with quality tests and build reliable data products."},COLUMN_PROFILE:{header:"Column Profile",subHeader:"Monitor and understand your columns structure with the profiler"},ADMIN:{header:"Admins",subHeader:"Know the other Admins in your organization, along with their Teams and Roles."},USERS:{header:"Users",subHeader:"Represent your entire organizational structure with hierarchical teams."},TEAMS:{header:"Teams",subHeader:"Represent your entire organizational structure with hierarchical teams."},ROLES:{header:"Roles",subHeader:"Assign comprehensive role based access to Users or Teams."},POLICIES:{header:"Policies",subHeader:"Define policies with a set of rules for fine-grained access control."},DATABASES_SERVICES:{header:"Databases",subHeader:"Ingest metadata from the most popular database services."},MESSAGING_SERVICES:{header:"Messaging",subHeader:"Ingest metadata from the most used messaging services."},DASHBOARD_SERVICES:{header:"Dashboards",subHeader:"Ingest metadata from the most popular dashboard services."},PIPELINES_SERVICES:{header:"Pipelines",subHeader:"Ingest metadata from the most used pipeline services."},ML_MODELS_SERVICES:{header:"ML Models",subHeader:"Ingest metadata from ML Model services through the UI"},METADATA_SERVICES:{header:"Metadata",subHeader:"Ingest metadata from metadata services, right from the UI."},ACTIVITY_FEED:{header:"Activity Feed",subHeader:"Monitor and understand your tables structure with the profiler."},TABLES_CUSTOM_ATTRIBUTES:{header:"Tables",subHeader:"Define additional properties for tables to serve your organizational needs."},TOPICS_CUSTOM_ATTRIBUTES:{header:"Topics",subHeader:"Define custom properties for topics to serve your organizational needs."},DASHBOARD_CUSTOM_ATTRIBUTES:{header:"Dashboards",subHeader:"Define custom attributes for dashboards to serve your organizational needs."},PIPELINES_CUSTOM_ATTRIBUTES:{header:"Pipelines",subHeader:"Define additional attributes for pipelines to serve your organizational needs."},ML_MODELS_CUSTOM_ATTRIBUTES:{header:"ML Models",subHeader:"Define custom properties for ML models to serve your organizational needs."},BOTS:{header:"Bots",subHeader:"Create well-defined bots with scoped access permissions."}}},92693:function(e,t,a){a.d(t,{dF:function(){return r},cK:function(){return n},lS:function(){return i},tf:function(){return s},Kb:function(){return o},E6:function(){return c},y9:function(){return l},BM:function(){return u},ck:function(){return d},_F:function(){return m}});var r="/about-us",n="/about-us",i="/about-us",s="/about-us",o="/about-us",c="/about-us",l="/about-us",u="/about-us",d="/about-us",m="/about-us"},61637:function(e,t,a){var r;a.d(t,{Q:function(){return r}}),function(e){e["3Col"]="3-Column",e["2ColLTR"]="2-Column-ltr",e["2ColRTL"]="2-Column-rtl"}(r||(r={}))},43490:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var r=a(70655),n=a(71230),i=a(15746),s=a(96486),o=a(67294),c=a(59293),l=a(22503),u=a(28178),d=a(53867),m=a(93389),w=a(19650),p=a(94199),g=a(91894),f=a(71577),b=a(97882),h=a(96566),E=a(62761),y=a(92693),v=a(52114),S=a(43104),x=a(22132),A=a(89204),C=a(72819),I=a(48132),N=a(39570),T=a(96840),R=a(35892),L=a(10584),_=a(41693),D=a(80131),O=a(46892),M=a(41137),H=function(e){var t=e.serviceData,a=e.serviceName,l=e.paging,d=e.currentPage,H=e.onPageChange,Z=(0,h.Eu)().isAuthDisabled,P=(0,c.k6)(),k=function(){P.push((0,T.C1)(a))},B=(0,m.BL)().permissions,z=(0,o.useMemo)((function(){return!(0,s.isEmpty)(B)&&(0,N.P_)(C.OX.Create,(0,R.rq)(a),B)}),[B,a]),V=(0,o.useCallback)((function(){switch(a){case A.u.DATABASE_SERVICES:return S.j.DATABASES_SERVICES;case A.u.DASHBOARD_SERVICES:return S.j.DASHBOARD_SERVICES;case A.u.MESSAGING_SERVICES:return S.j.MESSAGING_SERVICES;case A.u.METADATA_SERVICES:return S.j.METADATA_SERVICES;case A.u.ML_MODEL_SERVICES:return S.j.ML_MODELS_SERVICES;case A.u.PIPELINE_SERVICES:return S.j.PIPELINES_SERVICES;default:return S.j.DATABASES_SERVICES}}),[a]);return o.createElement(n.Z,{className:"tw-justify-center","data-testid":"services-container"},t.length?o.createElement(o.Fragment,null,o.createElement(i.Z,{span:24},o.createElement(w.Z,{className:"w-full justify-between m-b-lg","data-testid":"header"},o.createElement(M.Z,{data:V()}),o.createElement(p.Z,{placement:"left",title:z?"Add or Update Service":v.oH},o.createElement(L.z,{className:"tw-h-8 tw-rounded tw-mb-2","data-testid":"add-service-button",disabled:!z&&!Z,size:"small",theme:"primary",variant:"contained",onClick:k},"Add or Update Service")))),o.createElement(i.Z,{span:24},o.createElement(n.Z,{"data-testid":"data-container",gutter:[16,16]},t.map((function(e,t){return o.createElement(i.Z,{key:t,lg:8,xl:6},o.createElement(g.Z,{size:"small",style:(0,r.pi)((0,r.pi)({},O.K),{height:"100%"})},o.createElement("div",{className:"tw-flex tw-justify-between tw-text-grey-muted","data-testid":"service-card"},o.createElement("div",{className:"tw-flex tw-flex-col tw-justify-between tw-truncate"},o.createElement("div",null,o.createElement(b.Link,{to:(0,E.LE)(e.name,a)},o.createElement("button",null,o.createElement("h6",{className:"tw-text-base tw-text-grey-body tw-font-medium tw-text-left tw-truncate tw-w-48","data-testid":"service-name-"+(0,I.C_)(e),title:(0,I.C_)(e)},(0,I.C_)(e)))),o.createElement("div",{className:"tw-text-grey-body tw-pb-1 tw-break-all description-text","data-testid":"service-description"},e.description?o.createElement(D.Z,{enableSeeMoreVariant:!1,markdown:e.description}):o.createElement("span",{className:"tw-no-description"},"No description")),(0,R.NZ)(e,a)),o.createElement("div",{className:"","data-testid":"service-type"},o.createElement("label",{className:"tw-mb-0"},"Type:"),o.createElement("span",{className:" tw-ml-1 tw-font-normal tw-text-grey-body"},e.serviceType))),o.createElement("div",{className:"tw-flex tw-flex-col tw-justify-between tw-flex-none"},o.createElement("div",{className:"tw-flex tw-justify-end","data-testid":"service-icon"},(0,I.Y9)(e.serviceType||"","h-7"))))))})))),(0,I.Bs)(l)&&o.createElement(_.Z,{currentPage:d,pageSize:E.jd,paging:l,pagingHandler:H,totalCount:l.total})):o.createElement(i.Z,{span:24},o.createElement(u.Z,{buttons:o.createElement(p.Z,{placement:"left",title:z?"Add Service":v.oH},o.createElement(f.Z,{ghost:!0,"data-testid":"add-service-button",disabled:!z,size:"small",type:"primary",onClick:k},"Add new ",x.N9[a])),doc:y.lS,heading:x.N9[a],type:"ADD_DATA"})))},Z=a(6929),P=a(50168),k=function(){var e=(0,c.UO)().tab,t=(0,r.CR)((0,o.useState)(!0),2),a=t[0],w=t[1],p=(0,r.CR)((0,o.useState)([]),2),g=p[0],f=p[1],b=(0,r.CR)((0,o.useState)(E.OQ),2),h=b[0],y=b[1],S=(0,r.CR)((0,o.useState)(A.u.DATABASE_SERVICES),2),C=S[0],I=S[1],T=(0,r.CR)((0,o.useState)(1),2),L=T[0],_=T[1],D=(0,m.BL)().permissions,O=(0,o.useMemo)((function(){return!(0,s.isEmpty)(D)&&N.NE.hasViewPermissions((0,R.rq)(e),D)}),[D]),M=function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){var t,a,n,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:w(!0),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,(0,l.U2)(e,E.jd)];case 2:return t=r.sent(),a=t.data,n=t.paging,f(a),y(n),[3,5];case 3:return i=r.sent(),f([]),y(E.OQ),(0,P.Eo)(i,Z.Z["api-error-messages"]["fetch-services-error"]),[3,5];case 4:return w(!1),[7];case 5:return[2]}}))}))};return(0,o.useEffect)((function(){e&&(I(x.v0[e]),_(1),M(x.v0[e]))}),[e]),a?o.createElement(d.Z,null):O?o.createElement(H,{currentPage:L,paging:h,serviceData:g,serviceName:C,onPageChange:function(e,t){var a=C+"?"+e+"="+h[e];_(t||1),M(a)}}):o.createElement(n.Z,null,o.createElement(i.Z,{span:24},o.createElement(u.Z,null,o.createElement("p",null,v._D))))}}}]);