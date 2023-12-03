"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[918],{918:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var i=r(9434),t=function(e){return e.contacts.items},a=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},s=function(e){return e.filters.param},o=r(3634),d=r(824),u=r(1413),c=r(3917),m=r(5597),f=r(184),x=(0,m.G)((function(e,n){return(0,f.jsx)(c.K,(0,u.Z)((0,u.Z)({align:"center"},e),{},{direction:"column",ref:n}))}));x.displayName="VStack";var v=r(5350),p=r(7438),h=r(7236),b=r(9055),y=function(){var e=(0,i.v9)(t),n=(0,i.I0)();return(0,f.jsx)(d.xu,{as:"form",onSubmit:function(r){r.preventDefault();var i=r.currentTarget,t=i.elements.name.value,a=i.elements.number.value;if(e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("This name already exist");n((0,o.uK)({name:t,number:a})),i.reset()},children:(0,f.jsxs)(x,{spacing:4,children:[(0,f.jsxs)(v.NI,{children:[(0,f.jsx)(p.l,{htmlFor:"name",children:"Name"}),(0,f.jsx)(h.I,{type:"text",name:"name",id:"name",required:!0})]}),(0,f.jsxs)(v.NI,{children:[(0,f.jsx)(p.l,{htmlFor:"number",children:"Number"}),(0,f.jsx)(h.I,{type:"tel",name:"number",id:"number",required:!0})]}),(0,f.jsx)(b.z,{type:"submit",width:"full",colorScheme:"blue",children:"Add contact"})]})})},Z=r(4942),g=r(4925),j=r(9439),I=r(9640),N=r(9886),k=r(7200),R=r(5986),q=r(2996),C=r(5113),_=["children","styleType","stylePosition","spacing"],P=["as"],F=["as"],L=(0,N.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),T=(0,j.Z)(L,2),S=T[0],w=T[1],O=(0,m.G)((function(e,n){var r=(0,R.jC)("List",e),i=(0,q.Lr)(e),t=i.children,a=i.styleType,l=void 0===a?"none":a,s=i.stylePosition,o=i.spacing,d=(0,g.Z)(i,_),c=(0,k.W)(t),m=o?(0,Z.Z)({},"& > *:not(style) ~ *:not(style)",{mt:o}):{};return(0,f.jsx)(S,{value:r,children:(0,f.jsx)(C.m.ul,(0,u.Z)((0,u.Z)({ref:n,listStyleType:l,listStylePosition:s,role:"list",__css:(0,u.Z)((0,u.Z)({},r.container),m)},d),{},{children:c}))})}));O.displayName="List",(0,m.G)((function(e,n){e.as;var r=(0,g.Z)(e,P);return(0,f.jsx)(O,(0,u.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList";var B=(0,m.G)((function(e,n){e.as;var r=(0,g.Z)(e,F);return(0,f.jsx)(O,(0,u.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},r))}));B.displayName="UnorderedList",(0,m.G)((function(e,n){var r=w();return(0,f.jsx)(C.m.li,(0,u.Z)((0,u.Z)({ref:n},e),{},{__css:r.item}))})).displayName="ListItem",(0,m.G)((function(e,n){var r=w();return(0,f.jsx)(I.J,(0,u.Z)((0,u.Z)({ref:n,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var G,D=r(884),H=function(){var e=(0,i.v9)(t),n=(0,i.v9)(s),r=(0,i.I0)(),a=e.length?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):[];return(0,f.jsx)(B,{m:"0 0 2px 0",children:a.map((function(e){return(0,f.jsxs)(d.xu,{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,border:"1px solid #ccc",borderRadius:"md",mb:2,children:[(0,f.jsxs)(D.x,{fontWeight:"bold",children:[e.name,":"," ",(0,f.jsx)(D.x,{as:"span",fontWeight:"normal",children:e.number})]}),(0,f.jsx)(b.z,{onClick:function(){return n=e,void r((0,o.GK)(n.id));var n},variant:"outline",children:"Delete"})]},e.id)}))})},z=r(168),J=r(6487).ZP.div(G||(G=(0,z.Z)(["\n  padding: 20px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 500px;\n\n  h1, h2{\n    font-weight: bold;\n  }\n\n"]))),A=r(4808),K=function(){var e=(0,i.I0)();return(0,f.jsxs)(d.xu,{border:"1px solid #ccc",p:4,borderRadius:"md",children:[(0,f.jsx)(D.x,{mb:2,children:"Find contacts by name"}),(0,f.jsx)(h.I,{onChange:function(n){e((0,A.xi)(n.target.value))},type:"search",name:"text",border:"1px solid #ccc",borderRadius:"md",px:2,py:1})]})},M=r(2791),Q=r(2577);function W(){var e=(0,i.I0)(),n=(0,i.v9)(a),r=(0,i.v9)(l);return(0,M.useEffect)((function(){e((0,o.yF)())}),[e]),(0,f.jsxs)(J,{children:[(0,f.jsxs)(d.xu,{children:[n&&(0,f.jsx)(d.xu,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:"9999",children:(0,f.jsx)(d.xu,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",children:(0,f.jsx)(Q.$,{color:"blue.500",size:"xl",thickness:"4px",speed:"0.65s",emptyColor:"gray.200"})})}),r&&(0,f.jsx)("p",{children:r})]}),(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(y,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(K,{}),(0,f.jsx)(H,{})]})}},5350:function(e,n,r){r.d(n,{NI:function(){return k},NJ:function(){return N},e:function(){return Z}});var i=r(1413),t=r(4925),a=r(9439),l=r(9886),s=r(4591),o=r(5597),d=r(5986),u=r(2996),c=r(5113),m=r(6992),f=r(2791),x=r(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],h=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(h,2),y=b[0],Z=b[1],g=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,a.Z)(g,2),I=j[0],N=j[1];var k=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,t.Z)(e,v),c=(0,f.useId)(),x=n||"field-".concat(c),p="".concat(x,"-label"),h="".concat(x,"-feedback"),b="".concat(x,"-helptext"),y=(0,f.useState)(!1),Z=(0,a.Z)(y,2),g=Z[0],j=Z[1],I=(0,f.useState)(!1),N=(0,a.Z)(I,2),k=N[0],R=N[1],q=(0,f.useState)(!1),C=(0,a.Z)(q,2),_=C[0],P=C[1],F=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&R(!0)}))})}),[b]),L=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(_),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:x})}),[x,o,_,l,d,p]),T=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:h},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[h]),S=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group","data-focus":(0,m.PB)(_),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d)})}),[u,o,_,l,d]),w=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!_,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:g,setHasFeedbackText:j,hasHelpText:k,setHasHelpText:R,id:x,labelId:p,feedbackId:h,helpTextId:b,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:T,getRootProps:S,getLabelProps:L,getRequiredIndicatorProps:w}}((0,u.Lr)(e)),o=l.getRootProps,h=(l.htmlProps,(0,t.Z)(l,p)),b=(0,m.cx)("chakra-form-control",e.className);return(0,x.jsx)(I,{value:h,children:(0,x.jsx)(y,{value:r,children:(0,x.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:r.container}))})})}));k.displayName="FormControl",(0,o.G)((function(e,n){var r=N(),t=Z(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,x.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:t.helperText,className:a}))})).displayName="FormHelperText"},7438:function(e,n,r){r.d(n,{l:function(){return f}});var i=r(1413),t=r(4925),a=r(5350),l=r(5597),s=r(5986),o=r(2996),d=r(5113),u=r(6992),c=r(184),m=["className","children","requiredIndicator","optionalIndicator"],f=(0,l.G)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),f=(0,o.Lr)(e),v=(f.className,f.children),p=f.requiredIndicator,h=void 0===p?(0,c.jsx)(x,{}):p,b=f.optionalIndicator,y=void 0===b?null:b,Z=(0,t.Z)(f,m),g=(0,a.NJ)(),j=null!=(r=null==g?void 0:g.getLabelProps(Z,n))?r:(0,i.Z)({ref:n},Z);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},j),{},{className:(0,u.cx)("chakra-form__label",f.className),__css:(0,i.Z)({display:"block",textAlign:"start"},l),children:[v,(null==g?void 0:g.isRequired)?h:y]}))}));f.displayName="FormLabel";var x=(0,l.G)((function(e,n){var r=(0,a.NJ)(),t=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:t.requiredIndicator,className:l}))}));x.displayName="RequiredIndicator"},7236:function(e,n,r){r.d(n,{I:function(){return p}});var i=r(1413),t=r(4925),a=r(5350),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,f=e.required,x=e.isRequired,v=e.isInvalid,p=e.isReadOnly,h=e.isDisabled,b=e.onFocus,y=e.onBlur,Z=(0,t.Z)(e,o),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&g.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&g.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},Z),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:h)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:p)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=f?f:x)?s:null==d?void 0:d.isRequired,isInvalid:null!=v?v:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,y)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,t.Z)(n,s);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=r(5597),c=r(5986),m=r(2996),f=r(5113),x=r(184),v=["htmlSize"],p=(0,u.G)((function(e,n){var r=e.htmlSize,a=(0,t.Z)(e,v),s=(0,c.jC)("Input",a),o=d((0,m.Lr)(a)),u=(0,l.cx)("chakra-input",e.className);return(0,x.jsx)(f.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:s.field,ref:n,className:u}))}));p.displayName="Input",p.id="Input"},884:function(e,n,r){r.d(n,{x:function(){return f}});var i=r(1413),t=r(4925),a=r(5597),l=r(5986),s=r(2996),o=r(5113),d=r(6992),u=r(2796),c=r(184),m=["className","align","decoration","casing"],f=(0,a.G)((function(e,n){var r=(0,l.mq)("Text",e),a=(0,s.Lr)(e),f=(a.className,a.align,a.decoration,a.casing,(0,t.Z)(a,m)),x=(0,u.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(o.m.p,(0,i.Z)((0,i.Z)((0,i.Z)({ref:n,className:(0,d.cx)("chakra-text",e.className)},x),f),{},{__css:r}))}));f.displayName="Text"},2796:function(e,n,r){function i(e){var n=Object.assign({},e);for(var r in n)void 0===n[r]&&delete n[r];return n}r.d(n,{o:function(){return i}})}}]);
//# sourceMappingURL=918.6c6f5d71.chunk.js.map