"use strict";(self.webpackChunkopen_metadata=self.webpackChunkopen_metadata||[]).push([[6501],{96501:function(e,t,a){a.r(t);var l=a(70655),n=a(71230),i=a(15746),r=a(91894),s=a(56256),c=a(9242),m=a(4107),o=a(27049),u=a(19650),d=a(71577),p=a(67800),f=a(96486),b=a(67294),y=a(59293),E=a(63153),h=a(97809),Z=a(84419),g=a(96162),w=a(85303),x=a(96840),v=a(50168),C=a(87684),k=(0,x.DW)(g.lx.POLICIES),N=[{name:(0,p.t)("label.settings"),url:(0,x.si)()},{name:(0,p.t)("label.policies"),url:k},{name:(0,p.t)("label.add-new-policy"),url:""}];t.default=function(){var e=(0,y.k6)(),t=(0,l.CR)((0,b.useState)(""),2),a=t[0],g=t[1],T=(0,l.CR)((0,b.useState)(""),2),I=T[0],R=T[1],S=(0,l.CR)((0,b.useState)({name:"",description:"",resources:[],operations:[],condition:"",effect:w.Q.Allow}),2),D=S[0],P=S[1];return b.createElement(n.Z,{className:"tw-bg-body-main tw-h-auto","data-testid":"add-policy-container",gutter:[16,16]},b.createElement(i.Z,{offset:4,span:12},b.createElement(Z.Z,{className:"m-y-md",titleLinks:N}),b.createElement(r.Z,null,b.createElement(s.Z.Paragraph,{className:"tw-text-base","data-testid":"form-title"},(0,p.t)("label.add-new-policy")),b.createElement(c.Z,{"data-testid":"policy-form",id:"policy-form",initialValues:{ruleEffect:D.effect},layout:"vertical",onFinish:function(){return(0,l.mG)(void 0,void 0,void 0,(function(){var t,n,i,r,s,c;return(0,l.Jh)(this,(function(m){switch(m.label){case 0:t=(0,l.pi)((0,l.pi)({},D),{name:(0,f.trim)(D.name)}),n=t.condition,i=(0,l._T)(t,["condition"]),r={name:(0,f.trim)(a),description:I,rules:[n?(0,l.pi)((0,l.pi)({},i),{condition:n}):i]},m.label=1;case 1:return m.trys.push([1,3,,4]),[4,(0,E.u$)(r)];case 2:return(s=m.sent())&&e.push((0,x.Hr)(s.fullyQualifiedName||"")),[3,4];case 3:return c=m.sent(),(0,v.Eo)(c),[3,4];case 4:return[2]}}))}))}},b.createElement(c.Z.Item,{label:(0,p.t)("label.name")+":",name:"name",rules:[{required:!0,max:128,min:1,message:(0,p.t)("message.field-text-is-required",{fieldText:(0,p.t)("label.name")})}]},b.createElement(m.Z,{"data-testid":"policy-name",placeholder:(0,p.t)("label.policy-name"),type:"text",value:a,onChange:function(e){return g(e.target.value)}})),b.createElement(c.Z.Item,{label:(0,p.t)("label.description")+":",name:"description"},b.createElement(h.Z,{height:"200px",initialValue:I,placeHolder:(0,p.t)("label.write-your-description"),style:{margin:0},onTextChange:function(e){return R(e)}})),b.createElement(o.Z,{"data-testid":"add-rule-divider"},(0,p.t)("label.add-rule")),b.createElement(C.Z,{ruleData:D,setRuleData:P}),b.createElement(u.Z,{align:"center",className:"tw-w-full tw-justify-end"},b.createElement(d.Z,{"data-testid":"cancel-btn",type:"link",onClick:function(){e.push(k)}},(0,p.t)("label.cancel")),b.createElement(d.Z,{"data-testid":"submit-btn",form:"policy-form",htmlType:"submit",type:"primary"},(0,p.t)("label.submit")))))),b.createElement(i.Z,{className:"m-t-xlg",span:4},b.createElement(s.Z.Paragraph,{className:"tw-text-base tw-font-medium"},(0,p.t)("label.add-policy")),b.createElement(s.Z.Text,null,(0,p.t)("message.add-policy-message"))))}}}]);