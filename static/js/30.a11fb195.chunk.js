(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[30],{577:function(e,a,t){"use strict";var o=t(70),c=t(158),n=t(159),r=t(552),s=t.n(r),i=t(2),l=t(27),d=["as","disabled"];function b(e){var a=e.tagName,t=e.disabled,o=e.href,c=e.target,n=e.rel,r=e.onClick,s=e.tabIndex,i=void 0===s?0:s,l=e.type;a||(a=null!=o||null!=c||null!=n?"a":"button");var d={tagName:a};if("button"===a)return[{type:l||"button",disabled:t},d];var b=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),t?e.stopPropagation():null==r||r(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:i,href:"a"===a&&t?void 0:o,target:"a"===a?c:void 0,"aria-disabled":t||void 0,rel:"a"===a?n:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},d]}var j=i.forwardRef((function(e,a){var t=e.as,o=e.disabled,n=function(e,a){if(null==e)return{};var t,o,c={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,d),r=b(Object.assign({tagName:t,disabled:o},n)),s=Object(c.a)(r,2),i=s[0],j=s[1].tagName;return Object(l.jsx)(j,Object.assign({},n,i,{ref:a}))}));j.displayName="Button";var u=t(553),O=["as","bsPrefix","variant","size","active","className"],v=i.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,i=e.variant,d=e.size,j=e.active,v=e.className,m=Object(n.a)(e,O),h=Object(u.a)(r,"btn"),x=b(Object(o.a)({tagName:t},m)),f=Object(c.a)(x,2),p=f[0],N=f[1].tagName;return Object(l.jsx)(N,Object(o.a)(Object(o.a)(Object(o.a)({},m),p),{},{ref:a,className:s()(v,h,j&&"active",i&&"".concat(h,"-").concat(i),d&&"".concat(h,"-").concat(d),m.href&&m.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};a.a=v},738:function(e,a,t){},770:function(e,a,t){"use strict";t.r(a);var o=t(158),c=t(2),n=(t(738),t(558)),r=t.n(n),s=t(757),i=t(577),l=t(551),d=t(27),b=function(){var e=function(){return j(!1)},a=Object(c.useState)(!1),t=Object(o.a)(a,2),n=(t[0],t[1],Object(c.useState)(!1)),r=Object(o.a)(n,2),b=r[0],j=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.c,{color:"dark",onClick:function(){return j(!0)},variant:"ghost",children:" Novo fato "}),Object(d.jsxs)(s.a,{show:b,onHide:e,size:"xl",className:"container-btn-risc",children:[Object(d.jsx)(s.a.Header,{children:Object(d.jsx)("h4",{children:"Inserir novo fato"})}),Object(d.jsx)(s.a.Body,{children:Object(d.jsxs)(l.t,{children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(l.w,{children:"T\xedtulo do novo fato"}),Object(d.jsx)(l.v,{type:"text"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(l.w,{children:"D\xedgite uma breve descri\xe7\xe3o"}),Object(d.jsx)(l.z,{rows:"3"})]})]})}),Object(d.jsxs)(s.a.Footer,{children:[Object(d.jsx)(i.a,{variant:"secondary",onClick:e,children:"Sair"}),Object(d.jsx)(i.a,{variant:"success",onClick:e,children:"Salvar"})]})]})]})},j=t.p+"static/media/mustang2.e22bb12a.png";a.default=function(){r.a.get("TokenID");var e=r.a.get("userType"),a=Object(c.useState)([{titulo:"Fun\xe7\xe3o nova adicionada a plataforma",descricao:"Agora \xe9 poss\xedvel verificar o comportamento do cliente"},{titulo:"Novo Servi\xe7o adicionado ",descricao:"O novo servi\xe7o possibilita atender os clientes em todo territ\xf3rio nacional"},{titulo:"Altera\xe7\xf5es no plano ouro",descricao:"O valor do plano ouro teve uma altera\xe7\xe3o de 5% no valor base."},{titulo:"Altera\xe7\xf5es no plano prata",descricao:"O valor do plano prata abaixo em 2% do valor base"},{titulo:"Altera\xe7\xf5es no plano bronze",descricao:"O valor do plano prata abaixo em 2% do valor base"},{titulo:"Altera\xe7\xf5es no plano diamante",descricao:"O valor do plano prata abaixo em 2% do valor base"},{titulo:"Altera\xe7\xf5es no plano diamante",descricao:"O valor do plano prata abaixo em 2% do valor base"}]),t=Object(o.a)(a,2),n=t[0];t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container-home",children:[Object(d.jsxs)("div",{className:"container-home-header",children:[Object(d.jsx)("label",{className:"font-home-titulo",children:" OON SEGUROS "}),"ADMIN"===e?Object(d.jsx)("div",{className:"container-home-newNews",children:Object(d.jsx)(b,{})}):null]}),Object(d.jsxs)(l.R,{className:"container-home-body",children:[Object(d.jsxs)(l.j,{className:"container-home-esq",children:[Object(d.jsx)("h3",{children:"Not\xedcias"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"container-news-oon",children:n.map((function(e,a){return a<6?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h6",{children:[" ",Object(d.jsxs)("b",{children:[" ",e.titulo," "]})," "]}),Object(d.jsxs)("label",{children:[" ",e.descricao]}),Object(d.jsx)("hr",{})]},a):6==a?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.c,{className:"btn-moreNews",size:"md",color:"link",children:" Mais not\xedcias "},a)}):void 0}))})]}),Object(d.jsx)(l.j,{children:Object(d.jsx)("div",{className:"container-home-dir",children:Object(d.jsx)(l.E,{fluid:!0,src:j})})})]})]}),Object(d.jsx)("br",{})]})}}}]);
//# sourceMappingURL=30.a11fb195.chunk.js.map