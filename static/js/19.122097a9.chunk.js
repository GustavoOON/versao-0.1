(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[19,20],{592:function(e,n,t){},593:function(e,n,t){},595:function(e,n,t){},596:function(e,n,t){},752:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),a=t(70),s=t(23),i=t(551),r=o.a.lazy((function(){return Promise.all([t.e(2),t.e(33)]).then(t.bind(null,767))})),m=o.a.lazy((function(){return Promise.all([t.e(0),t.e(28),t.e(17)]).then(t.bind(null,765))})),l=o.a.lazy((function(){return Promise.all([t.e(0),t.e(5),t.e(18)]).then(t.bind(null,766))})),j=o.a.lazy((function(){return Promise.all([t.e(0),t.e(8),t.e(22)]).then(t.bind(null,769))})),b=o.a.lazy((function(){return Promise.all([t.e(2),t.e(4),t.e(30)]).then(t.bind(null,764))})),u=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:r},{path:"/Users",name:"Usuarios",component:m},{path:"/devices",name:"Ve\xedculos",component:l},{path:"/rastreamento",name:"Rastreamento",component:j},{path:"/mapbox",name:"Rastreamento",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(5),t.e(12),t.e(15)]).then(t.bind(null,768))}))},{path:"/financeiro",name:"Financeiro",component:b},{path:"/planos",name:"Planos",component:o.a.lazy((function(){return Promise.all([t.e(23),t.e(32)]).then(t.bind(null,772))}))},{path:"/coberturas",name:"Coberturas",component:o.a.lazy((function(){return Promise.all([t.e(29),t.e(31)]).then(t.bind(null,770))}))},{path:"/chamados",name:"Chamados",component:o.a.lazy((function(){return Promise.all([t.e(2),t.e(4),t.e(38),t.e(35)]).then(t.bind(null,762))}))},{path:"/configuracoes",name:"Configura\xe7\xf5es",component:o.a.lazy((function(){return t.e(36).then(t.bind(null,771))}))},{path:"/sinistro",name:"Sinistro",component:o.a.lazy((function(){return Promise.all([t.e(2),t.e(4),t.e(16)]).then(t.bind(null,761))}))},{path:"/riscos",name:"Riscos",component:o.a.lazy((function(){return Promise.all([t.e(21),t.e(25)]).then(t.bind(null,775))}))},{path:"/home",name:"Home2",component:o.a.lazy((function(){return t.e(34).then(t.bind(null,774))}))},{path:"/assistencia",name:"Assistencia",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(8),t.e(26),t.e(14)]).then(t.bind(null,763))}))}],d=t(27),x=function(){return Object(d.jsx)(i.l,{fluid:!0,className:"teste",children:Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(i.W,{color:"primary"}),children:Object(d.jsxs)(s.d,{children:[u.map((function(e,n){return e.component&&Object(d.jsx)(s.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(e.component,Object(a.a)({},n))})}},n)})),Object(d.jsx)(s.a,{from:"/",to:"/home"})]})})})},O=o.a.memo(x),h=function(){return Object(d.jsx)(i.s,{children:Object(d.jsx)("div",{className:"ms-auto",children:Object(d.jsx)("span",{className:"ms-1",children:"\xa9 OON PAYPER USE"})})})},p=o.a.memo(h),f=t(165),N=t(554),v=t(555),g=(t(592),t(158)),C=t(760),H=(t(593),function(e){return Object(d.jsx)(d.Fragment,{children:e.notificacoes.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{className:"Titulo-notificacao",children:[" ",e.titulo]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"texto-notificacao",children:[" ",e.text]}),Object(d.jsx)("hr",{})]})}))})}),y=function(){var e=0,n=Object(c.useState)(1),t=Object(g.a)(n,2),o=t[0],a=t[1],s=function(){return u(!1)},r=Object(c.useState)(!1),m=Object(g.a)(r,2),l=(m[0],m[1],Object(c.useState)(!1)),j=Object(g.a)(l,2),b=j[0],u=j[1],x=function(){return u(!0)},O=Object(c.useState)([{titulo:"Notificacao 1",text:"texto notificacao1"},{titulo:"Notificacao 2",text:"texto notificacao2"},{titulo:"Notificacao 3",text:"texto notificacao3"},{titulo:"Notificacao 1",text:"texto notificacao1"},{titulo:"Notificacao 2",text:"texto notificacao2"},{titulo:"Notificacao 3",text:"texto notificacao3"},{titulo:"Notificacao 1",text:"texto notificacao1"},{titulo:"Notificacao 2",text:"texto notificacao2"}]),h=Object(g.a)(O,2),p=h[0],f=(h[1],p.length),y=f-5,S=function(){a(0)};return o>0?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.O,{content:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"container-lixeira",children:Object(d.jsx)(i.c,{variant:"outline",size:"sm",color:"danger",className:"position-lixeira-relative",onClick:S,children:Object(d.jsx)(N.a,{icon:v.bb,size:"xl"})})}),Object(d.jsx)("hr",{}),p.map((function(n,t){return t<5?Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{className:"Titulo-notificacao",children:[" ",n.titulo]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"texto-notificacao",children:[" ",n.text]}),Object(d.jsx)("hr",{})]}):e<1?(e=1,Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(i.c,{onClick:x,className:"btn-notificacao-modal",color:"dark",variant:"ghost",children:[" Mais ",y," notifica\xe7\xf5es "]}),Object(d.jsx)(C.a,{show:b,onHide:s,size:"xl",children:Object(d.jsx)(C.a.Body,{className:"container-body",children:Object(d.jsx)(H,{notificacoes:p})})})]})):void 0}))]}),placement:"bottom",className:"notificacao-popover",children:Object(d.jsxs)(i.c,{variant:"ghost",size:"xl",color:"danger",onClick:S,className:"position-relative",children:[Object(d.jsx)(N.a,{icon:v.r,size:"xl"}),Object(d.jsx)(i.b,{color:"danger",position:"top-end",shape:"rounded-pill",children:f})]})})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.O,{content:Object(d.jsx)("h6",{children:"N\xe3o h\xe1 notifica\xe7\xf5es"}),placement:"bottom",className:"notificacao-popover",children:Object(d.jsx)(i.c,{variant:"ghost",color:"dark",children:Object(d.jsx)(N.a,{icon:v.q,size:"xl"})})})})},S=t(558),z=t.n(S),P=(t(595),t.p+"static/media/2.0c06e43d.jpg"),w=t(125),F=function(){var e=Object(c.useState)(!1),n=Object(g.a)(e,2);n[0],n[1];return Object(d.jsxs)(i.m,{variant:"nav-item",children:[Object(d.jsx)(i.r,{placement:"bottom-end",className:"py-0",caret:!1,children:Object(d.jsx)(i.a,{src:P,size:"md"})}),Object(d.jsxs)(i.q,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(i.o,{className:"bg-light fw-semibold py-2",children:"Configura\xe7\xf5es"}),Object(d.jsx)(i.p,{children:Object(d.jsxs)(w.b,{to:"/configuracoes",className:"btn-config-screen",children:[Object(d.jsx)(N.a,{icon:v.fb,className:"me-2"}),"Perfil"]})}),Object(d.jsx)(i.p,{children:Object(d.jsxs)(w.b,{to:"/configuracoes",className:"btn-config-screen",children:[Object(d.jsx)(N.a,{icon:v.kb,className:"me-2"}),"Configura\xe7\xf5es"]})}),Object(d.jsx)(i.n,{}),Object(d.jsxs)(i.p,{onClick:function(){z.a.remove("TokenID",{path:""}),window.location.reload()},children:[Object(d.jsx)(N.a,{icon:v.H,className:"me-2 btn-config-screen"}),Object(d.jsx)("label",{className:"btn-config-screen",children:" Sair "})]})]})]})},k=t.p+"static/media/oon.d7899877.png",A=function(){var e=Object(f.b)(),n=Object(f.c)((function(e){return e.sidebarShow})),t=new Date,c=new Array("  domingo ","  segunda-feira ","  ter\xe7a-feira ","  quarta-feira ","  quinta-feira ","  sexta-feira ","  s\xe1bado ")[t.getDay()],o=new Array("Janeiro ","Fevereiro ","Mar\xe7o ","Abril ","Maio ","Junho ","Julho ","Agosto ","Setembro ","Outubro ","Novembro ","Dezembro ")[t.getMonth()],a=t.getFullYear(),s=t.getDate();return Object(d.jsx)(i.A,{position:"sticky",className:"mb-4 headerContainer",children:Object(d.jsxs)(i.l,{fluid:!0,children:[Object(d.jsx)(i.D,{className:"ps-1",onClick:function(){return e({type:"set",sidebarShow:!n})},children:Object(d.jsx)(N.a,{icon:v.S,size:"lg"})}),Object(d.jsx)(i.B,{className:"mx-auto d-md-none",to:"/",children:Object(d.jsx)(i.E,{fluid:!0,src:k,width:180,height:180})}),Object(d.jsx)(i.C,{className:"d-none d-md-flex me-auto",children:Object(d.jsxs)(i.H,{className:"container-data",children:[Object(d.jsxs)("label",{className:"text-ano-mes",children:[" ",o," ",a]}),Object(d.jsxs)("label",{className:"text-dia",children:[" ","    ","  ",c,", ",s," "]})]})}),Object(d.jsx)(i.C,{children:Object(d.jsx)(i.H,{children:Object(d.jsx)(y,{})})}),Object(d.jsx)(i.C,{className:"ms-3",children:Object(d.jsx)(F,{})}),Object(d.jsx)(i.C,{className:"ms-3",children:Object(d.jsxs)("div",{className:"container-header-name",children:[Object(d.jsx)("label",{className:"name-header",children:" Gustavo Alcantara"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{className:"funcao-header",children:" Administrador "})]})})]})})},B=t(159),I=["component","name","badge","icon"],U=["component","name","icon","to"],M=function(e){var n=e.items,t=Object(s.g)(),r=function(e,n,t){return Object(d.jsxs)(d.Fragment,{children:[n&&n,e&&e,t&&Object(d.jsx)(i.b,{color:t.color,className:"ms-auto",children:t.text})]})},m=function(e,n){var t=e.component,o=e.name,s=e.badge,i=e.icon,m=Object(B.a)(e,I),l=t;return Object(c.createElement)(l,Object(a.a)(Object(a.a)({},m.to&&!m.items&&{component:w.c,activeClassName:"active"}),{},{key:n},m),r(o,i,s))},l=function e(n,c){var o,s=n.component,i=n.name,l=n.icon,j=n.to,b=Object(B.a)(n,U),u=s;return Object(d.jsx)(u,Object(a.a)(Object(a.a)({idx:String(c),toggler:r(i,l),visible:t.pathname.startsWith(j)},b),{},{children:null===(o=n.items)||void 0===o?void 0:o.map((function(n,t){return n.items?e(n,t):m(n,t)}))}),c)};return Object(d.jsx)(o.a.Fragment,{children:n&&n.map((function(e,n){return e.items?l(e,n):m(e,n)}))})},R=t(631),D=(t(613),t(596),[{component:i.H,name:"Home",to:"/home",icon:Object(d.jsx)(N.a,{icon:v.M,customClassName:"nav-icon"})},{component:i.I,name:"Setores"},{component:i.H,name:"Ve\xedculos",to:"/devices",icon:Object(d.jsx)(N.a,{icon:v.v,customClassName:"nav-icon"})},{component:i.H,name:"Rastreamento",to:"/rastreamento",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})},{component:i.H,name:"Financeiro",to:"/financeiro",icon:Object(d.jsx)(N.a,{icon:v.U,customClassName:"nav-icon"})},{component:i.H,name:"Painel",to:"/dashboard",icon:Object(d.jsx)(N.a,{icon:v.gb,customClassName:"nav-icon"})},{component:i.H,name:"Sinistro",to:"/sinistro",icon:Object(d.jsx)(N.a,{icon:v.mb,customClassName:"nav-icon"})},{component:i.H,name:"Assist\xeancia",to:"/assistencia",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})},{component:i.H,name:"Riscos",to:"/riscos",icon:Object(d.jsx)(N.a,{icon:v.K,customClassName:"nav-icon"})},{component:i.H,name:"Funcion\xe1rios",to:"/Users",icon:Object(d.jsx)(N.a,{icon:v.X,customClassName:"nav-icon"})},{component:i.I,name:"Servi\xe7os"},{component:i.H,name:"Planos",to:"/planos",icon:Object(d.jsx)(N.a,{icon:v.F,customClassName:"nav-icon"})},{component:i.H,name:"Coberturas",to:"/coberturas",icon:Object(d.jsx)(N.a,{icon:v.hb,customClassName:"nav-icon"})},{component:i.I,name:"Outros"},{component:i.H,name:"Chamados",to:"/chamados",icon:Object(d.jsx)(N.a,{icon:v.Y,customClassName:"nav-icon"})},{component:i.H,name:"Configura\xe7\xf5es",to:"/configuracoes",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})}]),E=[{component:i.H,name:"Home",to:"/home",icon:Object(d.jsx)(N.a,{icon:v.M,customClassName:"nav-icon"})},{component:i.I,name:"Setores"},{component:i.H,name:"Sinistro",to:"/sinistro",icon:Object(d.jsx)(N.a,{icon:v.mb,customClassName:"nav-icon"})},{component:i.H,name:"Assist\xeancia",to:"/assistencia",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})},{component:i.H,name:"Riscos",to:"/riscos",icon:Object(d.jsx)(N.a,{icon:v.K,customClassName:"nav-icon"})},{component:i.H,name:"Funcion\xe1rios",to:"/Users",icon:Object(d.jsx)(N.a,{icon:v.X,customClassName:"nav-icon"})},{component:i.I,name:"Servi\xe7os"},{component:i.H,name:"Planos",to:"/planos",icon:Object(d.jsx)(N.a,{icon:v.F,customClassName:"nav-icon"})},{component:i.H,name:"Coberturas",to:"/coberturas",icon:Object(d.jsx)(N.a,{icon:v.hb,customClassName:"nav-icon"})},{component:i.H,name:"Chamados",to:"/chamados",icon:Object(d.jsx)(N.a,{icon:v.Y,customClassName:"nav-icon"})},{component:i.I,name:"Outros"},{component:i.H,name:"Configura\xe7\xf5es",to:"/configuracoes",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})}],J=[{component:i.H,name:"Home",to:"/home",icon:Object(d.jsx)(N.a,{icon:v.M,customClassName:"nav-icon"})},{component:i.I,name:"Setores"},{component:i.H,name:"Ve\xedculos",to:"/devices",icon:Object(d.jsx)(N.a,{icon:v.v,customClassName:"nav-icon"})},{component:i.H,name:"Sinistro",to:"/sinistro",icon:Object(d.jsx)(N.a,{icon:v.mb,customClassName:"nav-icon"})},{component:i.H,name:"Assist\xeancia",to:"/assistencia",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})},{component:i.H,name:"Riscos",to:"/riscos",icon:Object(d.jsx)(N.a,{icon:v.K,customClassName:"nav-icon"})},{component:i.H,name:"Funcion\xe1rios",to:"/Users",icon:Object(d.jsx)(N.a,{icon:v.X,customClassName:"nav-icon"})},{component:i.I,name:"Outros"},{component:i.H,name:"Configura\xe7\xf5es",to:"/configuracoes",icon:Object(d.jsx)(N.a,{icon:v.B,customClassName:"nav-icon"})}];var T=function(){var e=z.a.get("userType");return"ADMIN"===e?D:"MANAGER"===e?E:J}(),V=function(){var e=Object(f.b)(),n=Object(f.c)((function(e){return e.sidebarUnfoldable})),t=Object(f.c)((function(e){return e.sidebarShow}));return Object(d.jsxs)(i.S,{position:"fixed",className:"sideBarContainer",unfoldable:n,visible:t,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},children:[Object(d.jsx)(i.T,{className:"d-none d-md-flex logoContainer",to:"/",children:Object(d.jsx)(i.E,{fluid:!0,src:k,width:180,height:180})}),Object(d.jsx)(i.U,{children:Object(d.jsxs)(R.a,{className:"fontItemNav",children:[Object(d.jsx)(M,{items:T}),Object(d.jsx)(i.V,{className:"d-none d-lg-flex controlerSideBar",onClick:function(){return e({type:"set",sidebarUnfoldable:!n})}})]})})]})},q=o.a.memo(V);n.default=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(q,{}),Object(d.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[Object(d.jsx)(A,{}),Object(d.jsx)("div",{className:"body flex-grow-1  px-1 ",children:Object(d.jsx)(O,{})}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=19.122097a9.chunk.js.map