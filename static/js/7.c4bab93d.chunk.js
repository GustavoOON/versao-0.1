(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[7],{605:function(e,a,t){"use strict";var c=function(){};e.exports=c},613:function(e,a,t){e.exports=t(437)},615:function(e,a,t){"use strict";var c=t(8),i=t(29),s=t(38),r=t.n(s),n=t(0),o=t(65),l=t(2),d=["bsPrefix","variant","animation","size","as","className"],b=n.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,n=e.animation,b=e.size,f=e.as,j=void 0===f?"div":f,u=e.className,v=Object(i.a)(e,d);t=Object(o.a)(t,"spinner");var m="".concat(t,"-").concat(n);return Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:a},v),{},{className:r()(u,m,b&&"".concat(m,"-").concat(b),s&&"text-".concat(s))}))}));b.displayName="Spinner",a.a=b},626:function(e,a,t){"use strict";var c=t(8),i=t(34),s=t(29),r=t(38),n=t.n(r),o=t(0),l=t(2),d=["as","disabled"];function b(e){var a=e.tagName,t=e.disabled,c=e.href,i=e.target,s=e.rel,r=e.onClick,n=e.tabIndex,o=void 0===n?0:n,l=e.type;a||(a=null!=c||null!=i||null!=s?"a":"button");var d={tagName:a};if("button"===a)return[{type:l||"button",disabled:t},d];var b=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(c))&&e.preventDefault(),t?e.stopPropagation():null==r||r(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:o,href:"a"===a&&t?void 0:c,target:"a"===a?i:void 0,"aria-disabled":t||void 0,rel:"a"===a?s:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},d]}var f=o.forwardRef((function(e,a){var t=e.as,c=e.disabled,s=function(e,a){if(null==e)return{};var t,c,i={},s=Object.keys(e);for(c=0;c<s.length;c++)t=s[c],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,d),r=b(Object.assign({tagName:t,disabled:c},s)),n=Object(i.a)(r,2),o=n[0],f=n[1].tagName;return Object(l.jsx)(f,Object.assign({},s,o,{ref:a}))}));f.displayName="Button";var j=t(65),u=["as","bsPrefix","variant","size","active","className"],v=o.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,o=e.variant,d=e.size,f=e.active,v=e.className,m=Object(s.a)(e,u),O=Object(j.a)(r,"btn"),p=b(Object(c.a)({tagName:t},m)),x=Object(i.a)(p,2),N=x[0],y=x[1].tagName;return Object(l.jsx)(y,Object(c.a)(Object(c.a)(Object(c.a)({},m),N),{},{ref:a,className:n()(v,O,f&&"active",o&&"".concat(O,"-").concat(o),d&&"".concat(O,"-").concat(d),m.href&&m.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};a.a=v},627:function(e,a,t){"use strict";function c(e,a,t,c,i,s,r){try{var n=e[s](r),o=n.value}catch(l){return void t(l)}n.done?a(o):Promise.resolve(o).then(c,i)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(i,s){var r=e.apply(a,t);function n(e){c(r,i,s,n,o,"next",e)}function o(e){c(r,i,s,n,o,"throw",e)}n(void 0)}))}}t.d(a,"a",(function(){return i}))},674:function(e,a,t){"use strict";var c=t(8),i=t(29),s=t(38),r=t.n(s),n=t(37),o=t.n(n),l=t(0),d=t(2),b=["as","className","type","tooltip"],f={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},j=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,o=e.type,l=void 0===o?"valid":o,f=e.tooltip,j=void 0!==f&&f,u=Object(i.a)(e,b);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:r()(n,"".concat(l,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=f;var u=j,v=l.createContext({}),m=t(65),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=l.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.className,o=e.type,b=void 0===o?"checkbox":o,f=e.isValid,j=void 0!==f&&f,u=e.isInvalid,p=void 0!==u&&u,x=e.as,N=void 0===x?"input":x,y=Object(i.a)(e,O),h=Object(l.useContext)(v).controlId;return s=Object(m.a)(s,"form-check-input"),Object(d.jsx)(N,Object(c.a)(Object(c.a)({},y),{},{ref:a,type:b,id:t||h,className:r()(n,s,j&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,N=["bsPrefix","className","htmlFor"],y=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.htmlFor,o=Object(i.a)(e,N),b=Object(l.useContext)(v).controlId;return t=Object(m.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:n||b,className:r()(s,t)}))}));y.displayName="FormCheckLabel";var h=y;var P=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],g=l.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,f=e.disabled,j=void 0!==f&&f,O=e.isValid,p=void 0!==O&&O,N=e.isInvalid,y=void 0!==N&&N,g=e.feedbackTooltip,w=void 0!==g&&g,I=e.feedback,k=e.feedbackType,F=e.className,R=e.style,C=e.title,z=void 0===C?"":C,S=e.type,T=void 0===S?"checkbox":S,V=e.label,L=e.children,D=e.as,H=void 0===D?"input":D,B=Object(i.a)(e,P);s=Object(m.a)(s,"form-check"),n=Object(m.a)(n,"form-switch");var E=Object(l.useContext)(v).controlId,G=Object(l.useMemo)((function(){return{controlId:t||E}}),[E,t]),J=!L&&null!=V&&!1!==V||function(e,a){return l.Children.toArray(e).some((function(e){return l.isValidElement(e)&&e.type===a}))}(L,h),M=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},B),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:p,isInvalid:y,disabled:j,as:H}));return Object(d.jsx)(v.Provider,{value:G,children:Object(d.jsx)("div",{style:R,className:r()(F,J&&s,b&&"".concat(s,"-inline"),"switch"===T&&n),children:L||Object(d.jsxs)(d.Fragment,{children:[M,J&&Object(d.jsx)(h,{title:z,children:V}),I&&Object(d.jsx)(u,{type:k,tooltip:w,children:I})]})})})}));g.displayName="FormCheck";var w=Object.assign(g,{Input:x,Label:h}),I=t(64),k=(t(605),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=l.forwardRef((function(e,a){var t,s,n=e.bsPrefix,o=e.type,b=e.size,f=e.htmlSize,j=e.id,u=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,N=void 0!==x&&x,y=e.plaintext,h=e.readOnly,P=e.as,g=void 0===P?"input":P,w=Object(i.a)(e,k),F=Object(l.useContext)(v).controlId;(n=Object(m.a)(n,"form-control"),y)?t=Object(I.a)({},"".concat(n,"-plaintext"),!0):(s={},Object(I.a)(s,n,!0),Object(I.a)(s,"".concat(n,"-").concat(b),b),t=s);return Object(d.jsx)(g,Object(c.a)(Object(c.a)({},w),{},{type:o,size:f,ref:a,readOnly:h,id:j||F,className:r()(u,t,p&&"is-valid",N&&"is-invalid","color"===o&&"".concat(n,"-color"))}))}));F.displayName="FormControl";var R=Object.assign(F,{Feedback:u}),C=t(98),z=Object(C.a)("form-floating"),S=["controlId","as"],T=l.forwardRef((function(e,a){var t=e.controlId,s=e.as,r=void 0===s?"div":s,n=Object(i.a)(e,S),o=Object(l.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(v.Provider,{value:o,children:Object(d.jsx)(r,Object(c.a)(Object(c.a)({},n),{},{ref:a}))})}));T.displayName="FormGroup";var V=T,L=t(34),D=["as","bsPrefix","className"],H=["className"],B=["xxl","xl","lg","md","sm","xs"];var E=l.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,s=e.className,n=Object(i.a)(e,D);t=Object(m.a)(t,"col");var o=[],l=[];return B.forEach((function(e){var a,c,i,s=n[e];delete n[e],"object"===typeof s&&null!=s?(a=s.span,c=s.offset,i=s.order):a=s;var r="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(r):"".concat(t).concat(r,"-").concat(a)),null!=i&&l.push("order".concat(r,"-").concat(i)),null!=c&&l.push("offset".concat(r,"-").concat(c))})),[Object(c.a)(Object(c.a)({},n),{},{className:r.a.apply(void 0,[s].concat(o,l))}),{as:a,bsPrefix:t,spans:o}]}(e),s=Object(L.a)(t,2),n=s[0],o=n.className,l=Object(i.a)(n,H),b=s[1],f=b.as,j=void 0===f?"div":f,u=b.bsPrefix,v=b.spans;return Object(d.jsx)(j,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:r()(o,!v.length&&u)}))}));E.displayName="Col";var G=E,J=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],M=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,n=e.bsPrefix,o=e.column,b=e.visuallyHidden,f=e.className,j=e.htmlFor,u=Object(i.a)(e,J),O=Object(l.useContext)(v).controlId;n=Object(m.a)(n,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=r()(f,n,b&&"visually-hidden",o&&p);return j=j||O,o?Object(d.jsx)(G,Object(c.a)({ref:a,as:"label",className:x,htmlFor:j},u)):Object(d.jsx)(s,Object(c.a)({ref:a,className:x,htmlFor:j},u))}));M.displayName="FormLabel",M.defaultProps={column:!1,visuallyHidden:!1};var A=M,K=["bsPrefix","className","id"],_=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.id,o=Object(i.a)(e,K),b=Object(l.useContext)(v).controlId;return t=Object(m.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:r()(s,t),id:n||b}))}));_.displayName="FormRange";var q=_,Q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,n=e.htmlSize,o=e.className,b=e.isValid,f=void 0!==b&&b,j=e.isInvalid,u=void 0!==j&&j,O=e.id,p=Object(i.a)(e,Q),x=Object(l.useContext)(v).controlId;return t=Object(m.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:n,ref:a,className:r()(o,t,s&&"".concat(t,"-").concat(s),f&&"is-valid",u&&"is-invalid"),id:O||x}))}));U.displayName="FormSelect";var W=U,X=["bsPrefix","className","as","muted"],Y=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,o=void 0===n?"small":n,l=e.muted,b=Object(i.a)(e,X);return t=Object(m.a)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:r()(s,t,l&&"text-muted")}))}));Y.displayName="FormText";var Z=Y,$=l.forwardRef((function(e,a){return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));$.displayName="Switch";var ee=Object.assign($,{Input:w.Input,Label:w.Label}),ae=["bsPrefix","className","children","controlId","label"],te=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.children,o=e.controlId,l=e.label,b=Object(i.a)(e,ae);return t=Object(m.a)(t,"form-floating"),Object(d.jsxs)(V,Object(c.a)(Object(c.a)({ref:a,className:r()(s,t),controlId:o},b),{},{children:[n,Object(d.jsx)("label",{htmlFor:o,children:l})]}))}));te.displayName="FloatingLabel";var ce=te,ie=["className","validated","as"],se={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},re=l.forwardRef((function(e,a){var t=e.className,s=e.validated,n=e.as,o=void 0===n?"form":n,l=Object(i.a)(e,ie);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:r()(t,s&&"was-validated")}))}));re.displayName="Form",re.propTypes=se;a.a=Object.assign(re,{Group:V,Control:R,Floating:z,Check:w,Switch:ee,Label:A,Text:Z,Range:q,Select:W,FloatingLabel:ce})}}]);
//# sourceMappingURL=7.c4bab93d.chunk.js.map