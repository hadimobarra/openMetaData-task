"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[6804],{63153:function(e,t,n){n.d(t,{F3:function(){return o},Ko:function(){return l},n5:function(){return s},u7:function(){return u},_d:function(){return c},u$:function(){return d},sZ:function(){return m},$j:function(){return f},cN:function(){return h},QW:function(){return p},dV:function(){return v}});var a=n(70655),r=n(97451),i={headers:{"Content-type":"application/json-patch+json"}},o=function(e,t,n,i,o){return void 0===i&&(i=!1),void 0===o&&(o=10),(0,a.mG)(void 0,void 0,void 0,(function(){var l;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return l={default:i,limit:o,fields:e,after:t,before:n},[4,r.Z.get("/roles",{params:l})];case 1:return[2,a.sent().data]}}))}))},l=function(e,t,n,i){return void 0===i&&(i=10),(0,a.mG)(void 0,void 0,void 0,(function(){var o;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return o={limit:i,fields:e,after:t,before:n},[4,r.Z.get("/policies",{params:o})];case 1:return[2,a.sent().data]}}))}))},s=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,r.Z.get("/roles/name/"+e,{params:{fields:t}})];case 1:return[2,n.sent().data]}}))}))},u=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,r.Z.get("/policies/name/"+e,{params:{fields:t}})];case 1:return[2,n.sent().data]}}))}))},c=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.post("/roles",e)];case 1:return[2,t.sent().data]}}))}))},d=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.post("/policies",e)];case 1:return[2,t.sent().data]}}))}))},m=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,r.Z.patch("/roles/"+t,e,i)];case 1:return[2,n.sent().data]}}))}))},f=function(e,t){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,r.Z.patch("/policies/"+t,e,i)];case 1:return[2,n.sent().data]}}))}))},h=function(){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(e){switch(e.label){case 0:return[4,r.Z.get("/policies/resources")];case 1:return[2,e.sent().data]}}))}))},p=function(){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(e){switch(e.label){case 0:return[4,r.Z.get("/policies/functions")];case 1:return[2,e.sent().data]}}))}))},v=function(e){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,r.Z.get("/policies/validation/condition/"+e)];case 1:return[2,t.sent()]}}))}))}},26804:function(e,t,n){n.r(t);var a=n(70655),r=n(34041),i=n(71230),o=n(15746),l=n(91894),s=n(56256),u=n(9242),c=n(4107),d=n(19650),m=n(71577),f=n(67800),h=n(96486),p=n(67294),v=n(59293),b=n(63153),Z=n(97809),w=n(84419),g=n(96162),y=n(96840),E=n(50168),G=r.Z.Option,J=(0,y.DW)(g.lx.ROLES),C=[{name:(0,f.t)("label.settings"),url:(0,y.si)()},{name:(0,f.t)("label.roles"),url:J},{name:(0,f.t)("label.add-new-role"),url:""}];t.default=function(){var e=(0,v.k6)(),t=(0,a.CR)((0,p.useState)([]),2),n=t[0],g=t[1],x=(0,a.CR)((0,p.useState)(""),2),k=x[0],N=x[1],R=(0,a.CR)((0,p.useState)(""),2),S=R[0],j=R[1],T=(0,a.CR)((0,p.useState)([]),2),_=T[0],q=T[1];return(0,p.useEffect)((function(){(0,a.mG)(void 0,void 0,void 0,(function(){var e,t;return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,b.Ko)("owner,location,roles,teams",void 0,void 0,100)];case 1:return e=n.sent(),g(e.data||[]),[3,3];case 2:return t=n.sent(),(0,E.Eo)(t),[3,3];case 3:return[2]}}))}))}),[]),p.createElement(i.Z,{className:"tw-bg-body-main tw-h-full","data-testid":"add-role-container",gutter:[16,16]},p.createElement(o.Z,{offset:4,span:12},p.createElement(w.Z,{className:"m-y-md",titleLinks:C}),p.createElement(l.Z,null,p.createElement(s.Z.Paragraph,{className:"tw-text-base","data-testid":"form-title"},(0,f.t)("label.add-new-role")),p.createElement(u.Z,{"data-testid":"role-form",id:"role-form",layout:"vertical",onFinish:function(){return(0,a.mG)(void 0,void 0,void 0,(function(){var t,n,r;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:t={name:(0,h.trim)(k),description:S,policies:_.map((function(e){return{id:e,type:"policy"}}))},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,(0,b._d)(t)];case 2:return(n=a.sent())&&e.push((0,y.Uy)(n.fullyQualifiedName||"")),[3,4];case 3:return r=a.sent(),(0,E.Eo)(r),[3,4];case 4:return[2]}}))}))}},p.createElement(u.Z.Item,{label:(0,f.t)("label.name")+":",name:"name",rules:[{required:!0,max:128,min:1,message:(0,f.t)("label.invalid-name")}]},p.createElement(c.Z,{"data-testid":"name",placeholder:(0,f.t)("label.role-name"),type:"text",value:k,onChange:function(e){return N(e.target.value)}})),p.createElement(u.Z.Item,{label:(0,f.t)("label.description")+":",name:"description"},p.createElement(Z.Z,{height:"200px",initialValue:S,placeHolder:(0,f.t)("label.write-your-description"),style:{margin:0},onTextChange:function(e){return j(e)}})),p.createElement(u.Z.Item,{label:(0,f.t)("label.select-a-policy")+":",name:"policies",rules:[{required:!0,message:(0,f.t)("message.field-text-is-required",{fieldText:(0,f.t)("label.at-least-one-policy")})}]},p.createElement(r.Z,{"data-testid":"policies",mode:"multiple",placeholder:(0,f.t)("label.select-a-policy"),value:_,onChange:function(e){return q(e)}},n.map((function(e){return p.createElement(G,{key:e.id},e.displayName||e.name)})))),p.createElement(d.Z,{align:"center",className:"tw-w-full tw-justify-end"},p.createElement(m.Z,{"data-testid":"cancel-btn",type:"link",onClick:function(){e.push(J)}},(0,f.t)("label.cancel")),p.createElement(m.Z,{"data-testid":"submit-btn",form:"role-form",htmlType:"submit",type:"primary"},(0,f.t)("label.submit")))))),p.createElement(o.Z,{className:"tw-mt-4",span:4},p.createElement(s.Z.Paragraph,{className:"tw-text-base tw-font-medium"},(0,f.t)("label.add-role")),p.createElement(s.Z.Text,null,(0,f.t)("message.add-role-message"))))}}}]);