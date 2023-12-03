"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[162],{5162:function(e,i,n){n.r(i),n.d(i,{default:function(){return f}});var r=n(9434),a=n(9273),l=n(6582),s=n(1309),d=n(3917),t=n(9589),o=n(824),u=n(5350),c=n(7438),v=n(7236),m=n(9055),h=n(184);function f(){var e=(0,r.I0)();return(0,h.jsx)(l.k,{minH:"100vh",align:"center",justify:"center",bg:(0,s.ff)("gray.50","gray.800"),children:(0,h.jsxs)(d.K,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[(0,h.jsx)(d.K,{align:"center",children:(0,h.jsx)(t.X,{fontSize:"4xl",children:"Sign in to your account"})}),(0,h.jsx)(o.xu,{rounded:"lg",bg:(0,s.ff)("white","gray.700"),boxShadow:"lg",p:8,children:(0,h.jsxs)(d.K,{spacing:4,as:"form",onSubmit:function(i){i.preventDefault();var n=i.currentTarget;e((0,a.Ib)({email:n.elements.email.value,password:n.elements.password.value})),n.reset()},children:[(0,h.jsxs)(u.NI,{id:"email",children:[(0,h.jsx)(c.l,{children:"Email address"}),(0,h.jsx)(v.I,{type:"email"})]}),(0,h.jsxs)(u.NI,{id:"password",children:[(0,h.jsx)(c.l,{children:"Password"}),(0,h.jsx)(v.I,{type:"password"})]}),(0,h.jsx)(d.K,{spacing:10,children:(0,h.jsx)(m.z,{bg:"blue.400",color:"white",_hover:{bg:"blue.500"},type:"submit",children:"Sign in"})})]})})]})})}},5350:function(e,i,n){n.d(i,{NI:function(){return k},NJ:function(){return j},e:function(){return Z}});var r=n(1413),a=n(4925),l=n(9439),s=n(9886),d=n(4591),t=n(5597),o=n(5986),u=n(2996),c=n(5113),v=n(6992),m=n(2791),h=n(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,l.Z)(b,2),g=x[0],Z=x[1],y=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),N=I[0],j=I[1];var k=(0,t.G)((function(e,i){var n=(0,o.jC)("Form",e),s=function(e){var i=e.id,n=e.isRequired,s=e.isInvalid,t=e.isDisabled,o=e.isReadOnly,u=(0,a.Z)(e,f),c=(0,m.useId)(),h=i||"field-".concat(c),p="".concat(h,"-label"),b="".concat(h,"-feedback"),x="".concat(h,"-helptext"),g=(0,m.useState)(!1),Z=(0,l.Z)(g,2),y=Z[0],I=Z[1],N=(0,m.useState)(!1),j=(0,l.Z)(N,2),k=j[0],q=j[1],R=(0,m.useState)(!1),_=(0,l.Z)(R,2),P=_[0],F=_[1],C=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,d.lq)(i,(function(e){e&&q(!0)}))})}),[x]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:i,"data-focus":(0,v.PB)(P),"data-disabled":(0,v.PB)(t),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(o),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,t,P,s,o,p]),B=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,d.lq)(i,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:i,role:"group","data-focus":(0,v.PB)(P),"data-disabled":(0,v.PB)(t),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(o)})}),[u,t,P,s,o]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!s,isReadOnly:!!o,isDisabled:!!t,isFocused:!!P,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:k,setHasHelpText:q,id:h,labelId:p,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:B,getRootProps:S,getLabelProps:w,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),t=s.getRootProps,b=(s.htmlProps,(0,a.Z)(s,p)),x=(0,v.cx)("chakra-form-control",e.className);return(0,h.jsx)(N,{value:b,children:(0,h.jsx)(g,{value:n,children:(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},t({},i)),{},{className:x,__css:n.container}))})})}));k.displayName="FormControl",(0,t.G)((function(e,i){var n=j(),a=Z(),l=(0,v.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getHelpTextProps(e,i)),{},{__css:a.helperText,className:l}))})).displayName="FormHelperText"},7438:function(e,i,n){n.d(i,{l:function(){return m}});var r=n(1413),a=n(4925),l=n(5350),s=n(5597),d=n(5986),t=n(2996),o=n(5113),u=n(6992),c=n(184),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,s.G)((function(e,i){var n,s=(0,d.mq)("FormLabel",e),m=(0,t.Lr)(e),f=(m.className,m.children),p=m.requiredIndicator,b=void 0===p?(0,c.jsx)(h,{}):p,x=m.optionalIndicator,g=void 0===x?null:x,Z=(0,a.Z)(m,v),y=(0,l.NJ)(),I=null!=(n=null==y?void 0:y.getLabelProps(Z,i))?n:(0,r.Z)({ref:i},Z);return(0,c.jsxs)(o.m.label,(0,r.Z)((0,r.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,r.Z)({display:"block",textAlign:"start"},s),children:[f,(null==y?void 0:y.isRequired)?b:g]}))}));m.displayName="FormLabel";var h=(0,s.G)((function(e,i){var n=(0,l.NJ)(),a=(0,l.e)();if(!(null==n?void 0:n.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,i)),{},{__css:a.requiredIndicator,className:s}))}));h.displayName="RequiredIndicator"},7236:function(e,i,n){n.d(i,{I:function(){return p}});var r=n(1413),a=n(4925),l=n(5350),s=n(6992),d=["isDisabled","isInvalid","isReadOnly","isRequired"],t=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function o(e){var i=function(e){var i,n,d,o=(0,l.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,h=e.isRequired,f=e.isInvalid,p=e.isReadOnly,b=e.isDisabled,x=e.onFocus,g=e.onBlur,Z=(0,a.Z)(e,t),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&y.push(o.feedbackId);(null==o?void 0:o.hasHelpText)&&y.push(o.helpTextId);return(0,r.Z)((0,r.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==o?void 0:o.id,isDisabled:null!=(i=null!=c?c:b)?i:null==o?void 0:o.isDisabled,isReadOnly:null!=(n=null!=v?v:p)?n:null==o?void 0:o.isReadOnly,isRequired:null!=(d=null!=m?m:h)?d:null==o?void 0:o.isRequired,isInvalid:null!=f?f:null==o?void 0:o.isInvalid,onFocus:(0,s.v0)(null==o?void 0:o.onFocus,x),onBlur:(0,s.v0)(null==o?void 0:o.onBlur,g)})}(e),n=i.isDisabled,o=i.isInvalid,u=i.isReadOnly,c=i.isRequired,v=(0,a.Z)(i,d);return(0,r.Z)((0,r.Z)({},v),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(o),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=n(5597),c=n(5986),v=n(2996),m=n(5113),h=n(184),f=["htmlSize"],p=(0,u.G)((function(e,i){var n=e.htmlSize,l=(0,a.Z)(e,f),d=(0,c.jC)("Input",l),t=o((0,v.Lr)(l)),u=(0,s.cx)("chakra-input",e.className);return(0,h.jsx)(m.m.input,(0,r.Z)((0,r.Z)({size:n},t),{},{__css:d.field,ref:i,className:u}))}));p.displayName="Input",p.id="Input"},9589:function(e,i,n){n.d(i,{X:function(){return v}});var r=n(1413),a=n(4925),l=n(5597),s=n(5986),d=n(2996),t=n(5113),o=n(6992),u=n(184),c=["className"],v=(0,l.G)((function(e,i){var n=(0,s.mq)("Heading",e),l=(0,d.Lr)(e),v=(l.className,(0,a.Z)(l,c));return(0,u.jsx)(t.m.h2,(0,r.Z)((0,r.Z)({ref:i,className:(0,o.cx)("chakra-heading",e.className)},v),{},{__css:n}))}));v.displayName="Heading"}}]);
//# sourceMappingURL=162.63948201.chunk.js.map