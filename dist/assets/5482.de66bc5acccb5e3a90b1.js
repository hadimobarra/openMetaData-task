"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[5482],{34797:function(t,e,n){n.d(e,{Cz:function(){return o},xf:function(){return s},rO:function(){return c},no:function(){return l},ch:function(){return d},AJ:function(){return f},eL:function(){return h},H6:function(){return v},zz:function(){return p},pQ:function(){return m}});var r=n(70655),u=n(97451),i="/testCase",a="/testSuite",o=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.Z.get(i,{params:t})];case 1:return[2,e.sent().data]}}))}))},s=function(t,e){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n="/testCase/"+t+"/testCaseResult",[4,u.Z.get(n,{params:e})];case 1:return[2,r.sent().data]}}))}))},c=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.Z.post(i,t)];case 1:return[2,e.sent().data]}}))}))},l=function(t,e){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n={headers:{"Content-type":"application/json-patch+json"}},[4,u.Z.patch("/testCase/"+t,e,n)];case 1:return[2,r.sent().data]}}))}))},d=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.Z.get("/testDefinition",{params:t})];case 1:return[2,e.sent().data]}}))}))},f=function(t,e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return[4,u.Z.get("/testDefinition/"+t,{params:e})];case 1:return[2,n.sent().data]}}))}))},h=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.Z.get(a,{params:t})];case 1:return[2,e.sent().data]}}))}))},v=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,u.Z.post(a,t)];case 1:return[2,e.sent().data]}}))}))},p=function(t,e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return[4,u.Z.get("/testSuite/name/"+t,{params:e})];case 1:return[2,n.sent().data]}}))}))},m=function(t,e){return(0,r.mG)(void 0,void 0,void 0,(function(){var n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return n={headers:{"Content-type":"application/json-patch+json"}},[4,u.Z.patch("/testSuite/"+t,e,n)];case 1:return[2,r.sent().data]}}))}))}},92693:function(t,e,n){n.d(e,{dF:function(){return r},cK:function(){return u},lS:function(){return i},tf:function(){return a},Kb:function(){return o},E6:function(){return s},y9:function(){return c},BM:function(){return l},ck:function(){return d},_F:function(){return f}});var r="/about-us",u="/about-us",i="/about-us",a="/about-us",o="/about-us",s="/about-us",c="/about-us",l="/about-us",d="/about-us",f="/about-us"},56275:function(t,e,n){n.d(e,{DM:function(){return f},US:function(){return C},GR:function(){return S},Fh:function(){return h},kK:function(){return p},Wi:function(){return y},dO:function(){return v},U4:function(){return b},H9:function(){return m},V:function(){return g},SX:function(){return M},gj:function(){return P},CF:function(){return d},T3:function(){return l},wG:function(){return E},pq:function(){return D},Yk:function(){return F},Dj:function(){return w}});var r,u,i=n(67800),a=n(27914);!function(t){t.Delete="DELETE",t.Insert="INSERT",t.Update="UPDATE"}(r||(r={})),function(t){t.Percentage="PERCENTAGE",t.Rows="ROWS"}(u||(u={}));var o=n(80307),s=n(98809),c=n(62761),l=["valuesCount","valuesPercentage","validCount","duplicateCount","nullCount","nullProportion","missingPercentage","missingCount","uniqueCount","uniqueProportion","distinctCount","distinctProportion","min","max","minLength","maxLength","mean","sum","stddev","variance","median","histogram","customMetricsProfile"],d={last3days:{days:3,title:"Last 3 days"},last7days:{days:7,title:"Last 7 days"},last14days:{days:14,title:"Last 14 days"},last30days:{days:30,title:"Last 30 days"},last60days:{days:60,title:"Last 60 days"}},f=["#54C5D0","#2ab0a0","#2ab069","#18ffec","#008376"],h={information:[{title:"Distinct Count",dataKey:"distinctCount",color:"#1890FF"},{title:"Null Count",dataKey:"nullCount",color:"#54C5D0"},{title:"Unique Count",dataKey:"uniqueCount",color:"#008376"},{title:"Values Count",dataKey:"valuesCount",color:"#B02AAC"}],data:[]},v={information:[{title:"Distinct Proportion",dataKey:"distinctProportion",color:"#1890FF"},{title:"Null Proportion",dataKey:"nullProportion",color:"#54C5D0"},{title:"Unique Proportion",dataKey:"uniqueProportion",color:"#008376"}],data:[]},p={information:[{title:"Median",dataKey:"median",color:"#1890FF"},{title:"Max",dataKey:"max",color:"#54C5D0"},{title:"Mean",dataKey:"mean",color:"#008376"},{title:"Min",dataKey:"min",color:"#B02AAC"}],data:[]},m={information:[{title:"Sum",dataKey:"sum",color:"#1890FF"}],data:[]},b={information:[{title:(0,i.t)("label.row-count"),dataKey:"rowCount",color:"#008376"}],data:[]},y={information:[{title:(0,i.t)("label.insert"),dataKey:r.Insert,color:"#008376"},{title:(0,i.t)("label.update"),dataKey:r.Update,color:"#1890FF"},{title:(0,i.t)("label.delete"),dataKey:r.Delete,color:"#54C5D0"}],data:[]},C=[{columnName:void 0,metrics:["all"]}],g={success:0,aborted:0,failed:0},S=[{value:0,type:s.M.Success},{value:0,type:s.M.Aborted},{value:0,type:s.M.Failed}],w={tabSize:c.Wb,indentUnit:c.Wb,indentWithTabs:!0,lineNumbers:!0,lineWrapping:!0,styleActiveLine:!0,matchBrackets:!0,autoCloseBrackets:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],mode:{name:a.Q.SQL}},D=[{name:"Select/Add Test Suite",step:1},{name:"Configure Test Case",step:2}],F=[o.g.Timestamp,o.g.Date,o.g.Datetime,o.g.Timestampz],M=Object.values(o.Af).map((function(t){return{value:t,label:t}})),P=Object.values(o.Gv).map((function(t){return{value:t,label:t}})),E=[{label:(0,i.t)("label.percentage"),key:o.KF.Percentage,value:o.KF.Percentage},{label:(0,i.t)("label.row-count"),key:o.KF.Rows,value:o.KF.Rows}]},94715:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(70655),u=n(96486),i=n(80129),a=n.n(i),o=n(67294),s=n(59293),c=n(52046),l=n(48442),d=n(74380),f=n(30270),h=n(22653),v=n(59684),p=n(46691),m=n(62761),b=n(34669),y=n(7502),C=function(t){return(0,u.isUndefined)(t)?[]:t},g=function(t,e,n){var u,i,a,o,s,c,l,d;switch(t){case y.w.SHOULD:return(0,r.ev)((0,r.ev)([],(0,r.CR)(C(null===(i=null===(u=null==e?void 0:e.query)||void 0===u?void 0:u.bool)||void 0===i?void 0:i.should))),(0,r.CR)(C(null===(o=null===(a=null==n?void 0:n.query)||void 0===a?void 0:a.bool)||void 0===o?void 0:o.should)));case y.w.MUST:return(0,r.ev)((0,r.ev)([],(0,r.CR)(C(null===(c=null===(s=null==e?void 0:e.query)||void 0===s?void 0:s.bool)||void 0===c?void 0:c.must))),(0,r.CR)(C(null===(d=null===(l=null==n?void 0:n.query)||void 0===l?void 0:l.bool)||void 0===d?void 0:d.must)))}},S=n(50168),w=function(){var t=(0,s.TH)(),e=(0,s.k6)(),n=(0,s.UO)(),i=n.searchQuery,C=void 0===i?"":i,w=n.tab,D=(0,r.CR)((0,o.useState)(),2),F=D[0],M=D[1],P=(0,r.CR)((0,o.useState)(),2),E=P[0],R=P[1],O=(0,r.CR)((0,o.useState)(b.dM),2),T=O[0],K=O[1],q=(0,r.CR)((0,o.useState)(b.yf),2),A=q[0],L=q[1],N=(0,r.CR)((0,o.useState)(),2),W=N[0],J=N[1],I=(0,r.CR)((0,o.useState)(!0),2),k=I[0],G=I[1],U=(0,o.useMemo)((function(){return a().parse(t.search.startsWith("?")?t.search.substr(1):t.search)}),[t.search]),Z=(0,o.useMemo)((function(){return t=U.postFilter,(0,u.isObject)(t)&&Object.entries(t).every((function(t){var e=(0,r.CR)(t,2),n=e[0],i=e[1];return(0,u.isString)(n)&&(0,u.isArray)(i)&&i.every((function(t){return(0,u.isString)(t)}))}))?U.postFilter:void 0;var t}),[t.search]),j=(0,o.useMemo)((function(){return t=Z,(0,u.isNil)(t)?{}:Object.entries(t).length?{query:{bool:{must:Object.entries(t).map((function(t){var e=(0,r.CR)(t,2),n=e[0];return{bool:{should:e[1].map((function(t){var e;return{term:(e={},e[n]=t,e)}}))}}}))}}}:void 0;var t}),[Z]),x=function(t){e.push({search:a().stringify((0,r.pi)((0,r.pi)({},U),{page:t}))})},B=function(t){e.push({pathname:"/explore/"+b.qJ[t].path+"/"+C,search:a().stringify({page:1})}),R(void 0)},H=function(t){e.push({pathname:e.location.pathname,search:a().stringify((0,r.pi)((0,r.pi)({},U),{queryFilter:t?JSON.stringify(t):void 0,page:1}))})},z=(0,o.useMemo)((function(){if((0,u.isString)(U.queryFilter))try{var t=JSON.parse(U.queryFilter),e=v.cQ.loadTree(t);if(v.cQ.isValidTree(e))return t}catch(t){return}}),[t.search]);(0,o.useEffect)((function(){H(z)}),[z]);var Q=(0,o.useMemo)((function(){var t=Object.entries(b.qJ).find((function(t){return(0,r.CR)(t,2)[1].path===w}));return(0,u.isNil)(t)?h.W.TABLE:t[0]}),[w]);(0,o.useEffect)((function(){B(Q)}),[Q,C]);var V=(0,o.useMemo)((function(){var t=U.page;return!(0,u.isString)(t)||isNaN(Number.parseInt(t))?1:Number.parseInt(t)}),[U.page]);(0,o.useEffect)((function(){x(V)}),[V]);var _=(0,o.useMemo)((function(){return"true"===U.showDeleted}),[U.showDeleted]),X=(0,o.useMemo)((function(){return function(t,e){var n=g(y.w.MUST,t,e),i=g(y.w.SHOULD,t,e);return{query:{bool:(0,r.pi)((0,r.pi)({},(0,u.isEmpty)(n)?{}:{must:n}),(0,u.isEmpty)(i)?{}:{should:i})}}}(j,E)}),[j,E]);return(0,p.ZP)((function(){G(!0),Promise.all([(0,l.w4)({query:C,searchIndex:Q,queryFilter:X,sortField:T,sortOrder:A,pageNumber:V,pageSize:m.IV,includeDeleted:_}).then((function(t){return t})).then((function(t){return M(t)})),Promise.all([h.W.TABLE,h.W.TOPIC,h.W.DASHBOARD,h.W.PIPELINE,h.W.MLMODEL].map((function(t){return(0,l.w4)({query:C,pageNumber:0,pageSize:0,queryFilter:X,searchIndex:t,includeDeleted:_,trackTotalHits:!0,fetchSource:!1})}))).then((function(t){var e,n=(0,r.CR)(t,5),u=n[0],i=n[1],a=n[2],o=n[3],s=n[4];J(((e={})[h.W.TABLE]=u.hits.total.value,e[h.W.TOPIC]=i.hits.total.value,e[h.W.DASHBOARD]=a.hits.total.value,e[h.W.PIPELINE]=o.hits.total.value,e[h.W.MLMODEL]=s.hits.total.value,e))}))]).catch((function(t){return(0,S.Eo)(t)})).finally((function(){return G(!1)}))}),[Q,C,T,A,_,E,j,V]),(0,o.useEffect)((function(){c.Z.updateExplorePageTab(w)}),[w]),o.createElement(d.Z,null,o.createElement(f.Z,{advancedSearchJsonTree:z,loading:k,page:V,postFilter:Z,searchIndex:Q,searchResults:F,showDeleted:_,sortOrder:A,sortValue:T,tabCounts:W,onChangeAdvancedSearchJsonTree:H,onChangeAdvancedSearchQueryFilter:function(t){x(1),R(t)},onChangePage:x,onChangePostFilter:function(t){e.push({pathname:e.location.pathname,search:a().stringify((0,r.pi)((0,r.pi)({},U),{postFilter:t,page:1}))})},onChangeSearchIndex:B,onChangeShowDeleted:function(t){e.push({pathname:e.location.pathname,search:a().stringify((0,r.pi)((0,r.pi)({},U),{showDeleted:t,page:1}))})},onChangeSortOder:function(t){x(1),L(t)},onChangeSortValue:function(t){x(1),K(t)}}))}},95431:function(t,e,n){n.d(e,{i:function(){return u}});var r=n(98809),u=function(t,e){switch(e){case r.M.Success:t.success+=1;break;case r.M.Failed:t.failed+=1;break;case r.M.Aborted:t.aborted+=1}}}}]);