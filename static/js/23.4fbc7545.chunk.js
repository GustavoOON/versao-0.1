(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[23],{588:function(e,t,a){"use strict";a(0);var c=a(7),s=a(599),n=(a(590),a(2));t.a=function(e){var t=e.numberOfPages,a=e.page,i=e.previousPage,l=e.setPreviousPage,r=e.currentPage,o=e.setCurrentPage,j=e.nextPage,b=e.setNextPage,d=e.qtdElements,u=e.name;function O(e,t){1==r?(l(""),b(2)):e==t?(b(2),o(1),l("")):(b(r),o(r-1),l(r-2)),a(e-1)}function x(e,c){1==r&&2==c?(b(""),o(r+1),l(1)):e==c?(b(""),o(e),l(t-1)):1==r&&2!=c?(b(3),o(r+1),l(1)):r<c-1&&(b(r+2),o(r+1),l(r)),a(e-1)}return Object(n.jsxs)(c.W,{className:"container-devices-pagination","aria-label":"Page navigation example",children:[d?Object(n.jsxs)("label",{className:"container-qtd-employeer",children:["H\xe1 ",d," ",u]}):null,Object(n.jsxs)("div",{className:"container-pagination-align justify-content-end",children:[""!=i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){O(i,t)},variant:"outline",children:Object(n.jsx)(s.a,{})}),r>2?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return O(1,1)},variant:"outline",children:"1"}),Object(n.jsx)("span",{children:"..."})]}):null,Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){O(i,t)},variant:"outline",children:i})]}):null,0==r?Object(n.jsx)(c.g,{className:"btn-user-pagination",defaultChecked:!0,active:!0,children:r+1}):Object(n.jsx)(c.g,{className:"btn-user-pagination",defaultChecked:!0,active:!0,children:r}),r===t-1?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:j}),Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:Object(n.jsx)(s.b,{})})]}):null,j<t&&""!==j?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:j}),Object(n.jsx)("span",{children:"..."}),Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(t,t)},variant:"outline",children:t}),Object(n.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:Object(n.jsx)(s.b,{})})]}):null]})]})}},590:function(e,t,a){},594:function(e,t,a){"use strict";a(0);var c=a(2);t.a=function(){var e=new Date,t={0:"Domingo",1:"Segunda-feira",2:"Ter\xe7a-feira",3:"Quarta-feira",4:"Quinta-feira",5:"Sexta-feira",6:"S\xe1bado"}[e.getDay()],a=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),s={0:"Janeiro",1:"Fevereiro",2:"Mar\xe7o",3:"Abril",4:"Maio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outubro",10:"Novembro",11:"Dezembro"}[e.getMonth()],n=e.getFullYear(),i=e.getHours()<10?"0".concat(e.getHours()):e.getHours(),l=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes();return Object(c.jsx)("span",{style:{color:"#C4C4C4",fontSize:"14px"},children:"".concat(t," - ").concat(a," de ").concat(s," ").concat(n," - ").concat(i,":").concat(l)})}},707:function(e,t,a){},709:function(e,t,a){},710:function(e,t,a){},787:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(7),n=a(584);var i=function(){var e=new Date,t=e.getMonth(),a=e.getFullYear();return"".concat({0:"Janeiro",1:"Fevereiro",2:"Mar\xe7o",3:"Abril",4:"Maio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outubro",10:"Novembro",11:"Dezembro"}[t]," de ").concat(a)},l=a(53),r=a(49),o=a(26),j=a(2);var b=function(e){var t=e.filter,a=e.setFilter,n=e.name,i=e.saveFilter,r=Object(c.useState)(""),o=Object(l.a)(r,2),b=o[0],d=o[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),x=O[0],h=O[1],m=Object(c.useState)(""),g=Object(l.a)(m,2),p=g[0],v=g[1],f=Object(c.useState)(""),N=Object(l.a)(f,2),C=N[0],S=N[1];return Object(c.useEffect)((function(){return function(){d(""),h(""),v(""),S("")}}),[]),Object(j.jsxs)(s.K,{visible:t,onClose:function(){return a(!1)},size:"lg",alignment:"center",children:[Object(j.jsx)(s.N,{children:Object(j.jsx)(s.O,{className:"title-modal",children:"Filtrar - Gr\xe1fico ".concat(n)})}),Object(j.jsxs)(s.L,{children:[Object(j.jsxs)(s.ab,{className:"mb-4",children:[Object(j.jsx)("div",{className:"title-filter",children:"Escolha os filtros"}),Object(j.jsxs)(s.m,{xs:4,children:[Object(j.jsx)("h6",{children:"Cidade dos usu\xe1rios"}),Object(j.jsx)(s.y,{onChange:function(e){var t=e.target;return d(t.value)},options:["Cidade",{label:"Belo Horizonte",value:"Belo Horizonte"},{label:"S\xe3o Paulo",value:"S\xe3o Paulo"},{label:"Rio de Janeiro",value:"Rio de Janeiro"}]})]}),Object(j.jsxs)(s.m,{xs:4,children:[Object(j.jsx)("h6",{children:"Tipo de usu\xe1rios"}),Object(j.jsx)(s.y,{onChange:function(e){var t=e.target;return v(t.value)},options:["Tipos",{label:"Todos usu\xe1rios",value:"1"},{label:"Usu\xe1rios novos",value:"2"},{label:"Usu\xe1rios recorrentes",value:"3"}]})]})]}),Object(j.jsxs)(s.ab,{children:[Object(j.jsx)("div",{className:"title-filter",children:"Escolha o intervalo de tempo"}),Object(j.jsxs)(s.m,{xs:3,children:[Object(j.jsx)("h6",{children:"Data de in\xedcio"}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)(s.w,{onChange:function(e){var t=e.target;return v(t.value)},className:"me-2",type:"date"})})]}),Object(j.jsxs)(s.m,{xs:3,children:[Object(j.jsx)("h6",{children:"Data de fim"}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)(s.w,{onChange:function(e){var t=e.target;return S(t.value)},className:"me-2",type:"date"})})]})]})]}),Object(j.jsxs)(s.M,{children:[Object(j.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return a(!1)},children:"Cancelar"}),Object(j.jsx)(s.g,{className:"btn-save-global",onClick:function(){i(b,x,p,C),a(!1)},children:"Salvar"})]})]})},d=a(594);var u=function(e){var t=e.report,a=e.setReport,n=e.name,i=e.saveReport,r=Object(c.useState)(""),o=Object(l.a)(r,2),b=o[0],u=o[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),h=x[0],m=x[1],g=Object(c.useState)(""),p=Object(l.a)(g,2),v=p[0],f=p[1],N=Object(c.useState)(""),C=Object(l.a)(N,2),S=C[0],F=C[1],P=Object(c.useState)(!1),k=Object(l.a)(P,2),K=k[0],w=k[1],y=Object(c.useState)(""),D=Object(l.a)(y,2),U=(D[0],D[1]),H=Object(c.useState)(""),R=Object(l.a)(H,2),z=R[0],J=R[1],M=Object(c.useState)(""),V=Object(l.a)(M,2),B=V[0],T=V[1];return Object(c.useEffect)((function(){return function(){u(""),m(""),f(""),F("")}}),[]),K?Object(j.jsxs)(s.K,{visible:t,onClose:function(){return w(!1)},size:"lg",alignment:"center",children:[Object(j.jsxs)(s.N,{className:"d-block",closeButton:!1,children:[Object(j.jsx)(s.O,{className:"title-modal",children:"Relat\xf3rio - Gr\xe1fico ".concat(n)}),Object(j.jsxs)(s.O,{className:"title-modal",children:[Object(j.jsx)("span",{className:"fs-6 color-text me-5",children:z}),Object(j.jsx)(d.a,{})]})]}),Object(j.jsx)(s.L,{children:Object(j.jsx)("label",{children:B})}),Object(j.jsxs)(s.M,{children:[Object(j.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return a(!1)},children:"Cancelar"}),Object(j.jsx)(s.g,{className:"btn-save-global",onClick:function(){i(b,h,v,S)},children:"Baixar relat\xf3rio"})]})]}):Object(j.jsxs)(s.K,{visible:t,onClose:function(){return a(!1)},size:"lg",alignment:"center",children:[Object(j.jsx)(s.N,{children:Object(j.jsx)(s.O,{className:"title-modal",children:"Relat\xf3rio"})}),Object(j.jsxs)(s.L,{children:[Object(j.jsxs)(s.ab,{className:"mb-4",children:[Object(j.jsx)("div",{className:"title-filter",children:"Escolha os filtros"}),Object(j.jsxs)(s.m,{xs:4,children:[Object(j.jsx)("h6",{children:"Cidade dos usu\xe1rios"}),Object(j.jsx)(s.y,{onChange:function(e){var t=e.target;return u(t.value)},options:["Cidade",{label:"Belo Horizonte",value:"Belo Horizonte"},{label:"S\xe3o Paulo",value:"S\xe3o Paulo"},{label:"Rio de Janeiro",value:"Rio de Janeiro"}]})]}),Object(j.jsxs)(s.m,{xs:4,children:[Object(j.jsx)("h6",{children:"Tipo dos usu\xe1rios"}),Object(j.jsx)(s.y,{onChange:function(e){var t=e.target;return m(t.value)},options:["Tipos",{label:"Todos usu\xe1rios",value:"Todos usu\xe1rios"},{label:"Usu\xe1rios novos",value:"Usu\xe1rios novos"},{label:"Usu\xe1rios recorrentes",value:"Usu\xe1rios recorrentes"}]})]})]}),Object(j.jsxs)(s.ab,{children:[Object(j.jsx)("div",{className:"title-filter",children:"Escolha o intervalo de tempo"}),Object(j.jsxs)(s.m,{xs:3,children:[Object(j.jsx)("h6",{children:"Data de in\xedcio"}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)(s.w,{onChange:function(e){var t=e.target;return f(t.value)},className:"me-2",type:"date"})})]}),Object(j.jsxs)(s.m,{xs:3,children:[Object(j.jsx)("h6",{children:"Data de fim"}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)(s.w,{onChange:function(e){var t=e.target;return F(t.value)},className:"me-2",type:"date"})})]})]})]}),Object(j.jsxs)(s.M,{children:[Object(j.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return a(!1)},children:"Cancelar"}),Object(j.jsx)(s.g,{className:"btn-save-global",onClick:function(){w(!0),function(e,t,a,c){var s=a.split("-").splice(1).reverse().join("/"),n=c.split("-").reverse().join("/");U(e),T(t),J("Per\xedodo: ".concat(s," - ").concat(n))}(b,h,v,S)},children:"Salvar"})]})]})},O=(a(707),function(e){var t=e.name,a=e.saveFilter,n=e.saveReport,i=Object(c.useState)(!1),d=Object(l.a)(i,2),O=d[0],x=d[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),g=m[0],p=m[1],v=Object(c.useState)(!1),f=Object(l.a)(v,2),N=(f[0],f[1]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.p,{direction:"dropstart",children:[Object(j.jsx)(s.s,{caret:!1,variant:"ghost",color:"link",className:"p-0",children:Object(j.jsx)(r.a,{icon:o.s,size:"lg"})}),Object(j.jsxs)(s.r,{children:[Object(j.jsx)(s.q,{onClick:function(){x(!0),N(!0)},children:"Filtrar..."}),Object(j.jsx)(s.q,{onClick:function(){return p(!0)},children:"Gerar relat\xf3rio..."}),Object(j.jsx)(s.q,{children:"Fazer download..."})]})]}),Object(j.jsx)(b,{name:t,filter:O,setFilter:x,saveFilter:a}),Object(j.jsx)(u,{name:t,report:g,setReport:p,saveReport:n})]})}),x=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(s.i,{className:"cards",children:Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsxs)(s.m,{children:[Object(j.jsx)("label",{className:"finc-title",children:"Planos"}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:"finc-sub",children:[" ",Object(j.jsx)(i,{})]})]}),Object(j.jsx)(s.m,{className:"btn-filter",children:Object(j.jsx)(O,{name:"dos planos",saveFilter:function(e,t,a,c){}})})]}),Object(j.jsx)(n.a,{type:"bar",options:{plugins:{legend:{display:!1}}},data:{datasets:[{backgroundColor:["#00F781","#FF6711","#FF2828"],barPercentage:.7,data:[40,20,10]}],labels:["Ativos","Em an\xe1lise","Cancelado"]},width:5,height:5})]})})})},h=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),d=b[0],u=b[1],x=Object(c.useState)(""),h=Object(l.a)(x,2),m=h[0],g=h[1],p=Object(c.useState)(""),v=Object(l.a)(p,2),f=(v[0],v[1]),N={labels:["Sem 1","Sem 2","Sem 3","Sem 4","Sem 5"],newUsers:[40,10,20,60,20],recurringUsers:[30,30,10,10,63]},C=function(e,t,a,c){var s=a.split("-").splice(1).reverse().join("/"),n=c.split("-").splice(1).reverse().join("/");r(!0),u(e),f(t),g("Per\xedodo: ".concat(s," - ").concat(n))},S=function(e,t,a,c){};return a?Object(j.jsx)(s.i,{className:"cards",children:Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsxs)(s.m,{sm:"auto pe-0",children:[Object(j.jsxs)("label",{className:"finc-title",children:["Total de usu\xe1rios - ",Object(j.jsx)("span",{className:"fs-6 color-text",children:d})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:"finc-sub",children:[Object(j.jsx)(i,{})," - ",Object(j.jsxs)("span",{className:"color-text",children:[" ",m]})," "]})]}),Object(j.jsx)(s.m,{className:"btn-filter ps-0",children:Object(j.jsx)(O,{name:"dos usu\xe1rios",saveFilter:C,saveReport:S})})]}),Object(j.jsx)(n.a,{labels:"week",type:"bar",options:{plugins:{legend:{position:"bottom",labels:{padding:8,boxWidth:30}}}},data:{labels:N.labels,datasets:[{label:"Usu\xe1rios novos",barPercentage:.6,backgroundColor:"#00F781",data:N.newUsers},{label:"Usu\xe1rios recorrentes",barPercentage:.6,backgroundColor:"#216CFF",data:N.recurringUsers}]},width:100,height:100})]})}):Object(j.jsx)(s.i,{className:"cards",children:Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsxs)(s.m,{sm:"auto",children:[Object(j.jsx)("label",{className:"finc-title",children:"Total de usu\xe1rios"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"finc-sub",children:Object(j.jsx)(i,{})})]}),Object(j.jsx)(s.m,{className:"btn-filter",children:Object(j.jsx)(O,{name:"dos usu\xe1rios",saveFilter:C,saveReport:S})})]}),Object(j.jsx)(n.a,{labels:"week",type:"bar",options:{plugins:{legend:{position:"bottom",labels:{padding:8,boxWidth:30}}}},data:{labels:N.labels,datasets:[{label:"Usu\xe1rios novos",barPercentage:.6,backgroundColor:"#00F781",data:N.newUsers},{label:"Usu\xe1rios recorrentes",barPercentage:.6,backgroundColor:"#216CFF",data:N.recurringUsers}]},width:100,height:100})]})})},m=a(619),g=(a(615),function(){var e=Object(c.useState)(new Date),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(22),i=Object(l.a)(n,2),r=i[0];i[1];return""==r?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h5",{children:"Loading ... "})}):Object(j.jsx)(m.a,{onChange:s,value:a,className:"calendario"})}),p=a(588),v=(a(709),a(587)),f=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),b=o[0],d=o[1],u=Object(c.useState)(1),O=Object(l.a)(u,2),x=O[0],h=O[1],m=Object(c.useState)(""),g=Object(l.a)(m,2),f=g[0],N=g[1],C=Object(c.useState)(0),S=Object(l.a)(C,2),F=S[0],P=S[1],k=Object(c.useState)([]),K=Object(l.a)(k,2),w=K[0],y=K[1],D=Object(c.useState)([]),U=Object(l.a)(D,2),H=U[0],R=U[1];var z=Object(c.useState)([{"adimpl\xeancia":"adimplentes",nContrato:1,funcionario:"GUstavo Alcantara",valor:22.2,pagamento:"10/02/2022",placaVeiculo:"KKK-345"},{"adimpl\xeancia":"inadimplentes",nContrato:2,funcionario:"Pedro da",valor:12.2,pagamento:"10/02/2022",placaVeiculo:"HHH-111"},{"adimpl\xeancia":"inadimplentes",nContrato:3,funcionario:"Gislene a",valor:122.2,pagamento:"10/02/2022",placaVeiculo:"KKK-345"},{"adimpl\xeancia":"inadimplentes",nContrato:4,funcionario:"Yuri Almeida",valor:20.2,pagamento:"10/02/2022",placaVeiculo:"KKK-123"},{"adimpl\xeancia":"inadimplentes",nContrato:5,funcionario:"GUstavo Alcantara",valor:22.2,pagamento:"10/02/2022",placaVeiculo:"KKK-345"},{"adimpl\xeancia":"inadimplentes",nContrato:6,funcionario:"Pedro d",valor:12.2,pagamento:"10/02/2022",placaVeiculo:"HHH-111"},{"adimpl\xeancia":"inadimplentes",nContrato:7,funcionario:"Gislene w",valor:122.2,pagamento:"10/02/2022",placaVeiculo:"KKK-345"},{"adimpl\xeancia":"adimplentes",nContrato:8,funcionario:"Yuri Almeida",valor:20.2,pagamento:"10/02/2022",placaVeiculo:"KKK-123"},{"adimpl\xeancia":"adimplentes",nContrato:9,funcionario:"GUstavo a",valor:22.2,pagamento:"10/02/2022",placaVeiculo:"KKK-345"},{"adimpl\xeancia":"adimplentes",nContrato:10,funcionario:"Pedro a",valor:12.2,pagamento:"10/02/2022",placaVeiculo:"HHH-111"}]),J=Object(l.a)(z,2),M=J[0];J[1];Object(c.useEffect)((function(){V(),{data:{totalPages:10}}.data.totalPages>1&&(h(1),N(2),d("")),P(4)}),[]);var V=function(){n(!0);var e=M.filter((function(e){return"adimplentes"==e.adimpl\u00eancia}));R(e)};return Object(j.jsxs)(s.i,{className:"cards-customers",children:[Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsxs)(s.m,{children:[Object(j.jsx)("label",{className:"finc-title",children:"Clientes inadimplentes e adimplentes"}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:"finc-sub",children:[" ",Object(j.jsx)(i,{})]})]}),Object(j.jsx)(s.m,{className:"d-md-flex justify-content-md-end",children:Object(j.jsxs)(s.u,{className:"row g-3",children:[Object(j.jsxs)(s.m,{className:"d-flex  justify-content-end",children:[Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("i",{className:"icon-search-global i-absolute-global",children:Object(j.jsx)(v.b,{color:"#6D6D6D"})}),Object(j.jsx)(s.w,{className:"input-search-global",type:"search",placeholder:"Pesquisar"})]}),Object(j.jsx)(s.g,{variant:"outline",className:"btn-search-global",children:"Buscar"})]}),Object(j.jsx)("div",{className:"text-end",children:Object(j.jsx)(s.g,{className:"btn-save-global px-2",children:"Baixar planilha"})})]})})]}),Object(j.jsxs)(s.ab,{className:"pt-3",children:[Object(j.jsx)(s.m,{className:!0===a?"nav-non-defaulters-active":"nav-non-defaulters",onClick:V,children:Object(j.jsx)("label",{children:"Adimplentes"})}),Object(j.jsx)(s.m,{className:!1===a?"nav-defaulters-active":"nav-defaulters",onClick:function(){n(!1);var e=M.filter((function(e){return"inadimplentes"==e.adimpl\u00eancia}));y(e)},children:Object(j.jsx)("label",{children:"Inadimplentes"})}),Object(j.jsx)(s.m,{}),Object(j.jsx)(s.m,{}),Object(j.jsx)("hr",{})]}),Object(j.jsxs)(s.gb,{striped:!0,hover:!0,children:[Object(j.jsx)(s.jb,{children:Object(j.jsxs)(s.lb,{children:[Object(j.jsx)(s.kb,{scope:"col",children:"Nome do usu\xe1rio"}),Object(j.jsx)(s.kb,{scope:"col",children:"Placa do ve\xedculo"}),Object(j.jsx)(s.kb,{scope:"col",children:"N\xba do contrato"}),Object(j.jsx)(s.kb,{scope:"col",children:"\xdaltimo pagamento"}),Object(j.jsx)(s.kb,{scope:"col",children:"Valor"})]})}),Object(j.jsx)(s.hb,{children:!0===a?H.map((function(e,t){return Object(j.jsxs)(s.lb,{children:[Object(j.jsx)(s.ib,{children:e.funcionario}),Object(j.jsx)(s.ib,{children:e.placaVeiculo}),Object(j.jsx)(s.ib,{children:e.nContrato}),Object(j.jsx)(s.ib,{children:e.pagamento}),Object(j.jsx)(s.ib,{children:" R$ ".concat(e.valor.toFixed(2).replace(".",","))})]},t.toString())})):w.map((function(e,t){return Object(j.jsxs)(s.lb,{children:[Object(j.jsx)(s.ib,{children:e.funcionario}),Object(j.jsx)(s.ib,{}),Object(j.jsx)(s.ib,{children:e.nContrato}),Object(j.jsx)(s.ib,{children:e.pagamento}),Object(j.jsx)(s.ib,{children:" R$ ".concat(e.valor.toFixed(2).replace(".",","))})]},t.toString())}))})]})]}),Object(j.jsx)(p.a,{page:function(e){},numberOfPages:F,previousPage:b,setPreviousPage:d,currentPage:x,setCurrentPage:h,nextPage:f,setNextPage:N,name:"funcion\xe1rios"})]})};var N=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.i,{className:"cards-toppings-and-devices mb-2",children:Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsxs)(s.m,{children:[Object(j.jsx)("label",{className:"finc-title",children:"Coberturas"}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:" finc-sub",children:[" ",Object(j.jsx)(i,{})]})]}),Object(j.jsx)(s.m,{className:"btn-filter",children:Object(j.jsx)(O,{name:"das coberturas",saveFilter:function(e,t,a,c){}})})]}),Object(j.jsx)(n.a,{type:"doughnut",options:{plugins:{legend:{position:"bottom"}}},data:{labels:["Prote\xe7\xe3o de danos materiais","Chaveiro","Colis\xe3o de Perda Total","Colis\xe3o de Danos Parciais","Cobertura de vidros"],datasets:[{backgroundColor:["#216CFF","#FF6711","#00F781","#FE3F61","#14142B"],data:[40,20,80,10,30]}]}})]})}),Object(j.jsx)(s.i,{className:"cards-toppings-and-devices",children:Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsxs)(s.m,{children:[Object(j.jsx)("label",{className:"finc-title",children:"Dispositivos"}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:" finc-sub",children:[" ",Object(j.jsx)(i,{})]})]}),Object(j.jsx)(s.m,{className:"btn-filter",children:Object(j.jsx)(O,{name:"dos dispositivos",saveFilter:function(e,t,a,c){}})})]}),Object(j.jsx)(n.a,{className:"devices-width",type:"doughnut",options:{layout:{padding:40},plugins:{legend:{position:"bottom"}}},data:{labels:["Sincronizados","Inativos"],datasets:[{backgroundColor:["#00F781","#1B54BD"],data:[40,20]}]}})]})})]})};a(710),t.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.ab,{children:[Object(j.jsx)(s.m,{xs:4,children:Object(j.jsx)(h,{})}),Object(j.jsx)(s.m,{xs:4,children:Object(j.jsx)(x,{})}),Object(j.jsx)(s.m,{xs:4,children:Object(j.jsx)(g,{})})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(s.ab,{children:[Object(j.jsx)(s.m,{xs:8,children:Object(j.jsx)(f,{})}),Object(j.jsx)(s.m,{xs:4,children:Object(j.jsx)(N,{})})]})]})}}}]);
//# sourceMappingURL=23.4fbc7545.chunk.js.map