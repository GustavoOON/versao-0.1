/*! For license information please see 21.5c08bc26.chunk.js.LICENSE.txt */
(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[21],{576:function(e,t,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var s=typeof c;if("string"===s||"number"===s)e.push(c);else if(Array.isArray(c)){if(c.length){var i=a.apply(null,c);i&&e.push(i)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var r in c)n.call(c,r)&&c[r]&&e.push(r);else e.push(c.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(t,[]))||(e.exports=c)}()},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(37);var c=n(0),a=(n(2),c.createContext({prefixes:{}}));a.Consumer,a.Provider;function s(e,t){var n=Object(c.useContext)(a).prefixes;return e||n[t]||t}},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(111),a=n.n(c),s=function(){var e=a.a.get("TokenID");return{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}};t.b="http://dashboardbff.oonpayperuse.com.br"},588:function(e,t,n){"use strict";n(0);var c=n(7),a=n(599),s=(n(590),n(2));t.a=function(e){var t=e.numberOfPages,n=e.page,i=e.previousPage,r=e.setPreviousPage,l=e.currentPage,o=e.setCurrentPage,j=e.nextPage,b=e.setNextPage,u=e.qtdElements,d=e.name;function O(e,t){1==l?(r(""),b(2)):e==t?(b(2),o(1),r("")):(b(l),o(l-1),r(l-2)),n(e-1)}function x(e,c){1==l&&2==c?(b(""),o(l+1),r(1)):e==c?(b(""),o(e),r(t-1)):1==l&&2!=c?(b(3),o(l+1),r(1)):l<c-1&&(b(l+2),o(l+1),r(l)),n(e-1)}return Object(s.jsxs)(c.W,{className:"container-devices-pagination","aria-label":"Page navigation example",children:[u?Object(s.jsxs)("label",{className:"container-qtd-employeer",children:["H\xe1 ",u," ",d]}):null,Object(s.jsxs)("div",{className:"container-pagination-align justify-content-end",children:[""!=i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){O(i,t)},variant:"outline",children:Object(s.jsx)(a.a,{})}),l>2?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return O(1,1)},variant:"outline",children:"1"}),Object(s.jsx)("span",{children:"..."})]}):null,Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){O(i,t)},variant:"outline",children:i})]}):null,0==l?Object(s.jsx)(c.g,{className:"btn-user-pagination",defaultChecked:!0,active:!0,children:l+1}):Object(s.jsx)(c.g,{className:"btn-user-pagination",defaultChecked:!0,active:!0,children:l}),l===t-1?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:j}),Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:Object(s.jsx)(a.b,{})})]}):null,j<t&&""!==j?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:j}),Object(s.jsx)("span",{children:"..."}),Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(t,t)},variant:"outline",children:t}),Object(s.jsx)(c.g,{className:"btn-user-pagination",onClick:function(){return x(j,t)},variant:"outline",children:Object(s.jsx)(a.b,{})})]}):null]})]})}},590:function(e,t,n){},593:function(e,t,n){e.exports=n(412)},600:function(e,t,n){"use strict";var c=n(37),a=n(110),s=n(576),i=n.n(s),r=n(0),l=n(577),o=n(2),j=["bsPrefix","variant","animation","size","as","className"],b=r.forwardRef((function(e,t){var n=e.bsPrefix,s=e.variant,r=e.animation,b=e.size,u=e.as,d=void 0===u?"div":u,O=e.className,x=Object(a.a)(e,j);n=Object(l.a)(n,"spinner");var h="".concat(n,"-").concat(r);return Object(o.jsx)(d,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(O,h,b&&"".concat(h,"-").concat(b),s&&"text-".concat(s))}))}));b.displayName="Spinner",t.a=b},613:function(e,t,n){"use strict";function c(e,t,n,c,a,s,i){try{var r=e[s](i),l=r.value}catch(o){return void n(o)}r.done?t(l):Promise.resolve(l).then(c,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function r(e){c(i,a,s,r,l,"next",e)}function l(e){c(i,a,s,r,l,"throw",e)}r(void 0)}))}}n.d(t,"a",(function(){return a}))},744:function(e,t,n){},795:function(e,t,n){"use strict";n.r(t);var c=n(53),a=n(0),s=(n(579),n(7)),i=n(111),r=n.n(i),l=n(600),o=n(587),j=n(589),b=n(593),u=n.n(b),d=n(613),O=n(2),x=n(411),h=function(e){var t=Object(a.useState)(["Roubo e furto","Chaveiro","Capotamento"]),n=Object(c.a)(t,2),i=n[0],l=(n[1],r.a.get("userType")),o=(x.AES.decrypt(l,"OnnSeguros"),Object(a.useState)(!1)),j=Object(c.a)(o,2),b=j[0],h=j[1],m=Object(a.useState)(!1),f=Object(c.a)(m,2),g=f[0],p=f[1],v=Object(a.useState)(e.item.description),N=Object(c.a)(v,2),C=N[0],k=N[1],S=Object(a.useState)("Campo ainda n\xe3o aplicado...."),y=Object(c.a)(S,2),P=(y[0],y[1],Object(a.useState)(parseFloat(e.item.valuePerKm))),w=Object(c.a)(P,2),A=w[0],z=w[1],F=Object(a.useState)(!1),R=Object(c.a)(F,2);R[0],R[1];function D(){return(D=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return g?Object(O.jsx)(s.K,{alignment:"center",visible:g,children:Object(O.jsxs)(s.L,{children:[Object(O.jsx)("p",{className:"text-center m-5 text-delete",children:"Voc\xea tem certeza que deseja deletar esse servi\xe7o?"}),Object(O.jsxs)("div",{className:"mb-3 d-flex justify-content-around",children:[Object(O.jsx)(s.g,{className:"btn-save-global",size:"lg",children:"Sim, deletar"}),Object(O.jsx)(s.g,{size:"lg",className:"btn-cancel-global",variant:"outline",onClick:function(){return p(!1)},children:"Cancelar"})]})]})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return h(!0)},children:"Editar"}),Object(O.jsxs)(s.K,{visible:b,onClose:function(){return h(!1)},size:"xl",children:[Object(O.jsx)(s.N,{children:Object(O.jsx)(s.O,{className:"title-modal",children:"Editar"})}),Object(O.jsx)(s.L,{children:Object(O.jsxs)(s.ab,{children:[Object(O.jsx)(s.m,{children:Object(O.jsxs)(s.u,{children:[Object(O.jsx)(s.x,{children:"Nome do Servi\xe7o"}),Object(O.jsx)(s.y,{value:C,onChange:function(e){k(e.target.value)},options:i.map((function(e,t){return{label:e,value:t}}))}),Object(O.jsx)("br",{}),Object(O.jsx)(s.x,{children:"Descri\xe7\xe3o"}),Object(O.jsx)(s.A,{rows:"5"})]})}),Object(O.jsxs)(s.m,{children:[Object(O.jsxs)(s.u,{children:[Object(O.jsx)(s.x,{children:"Tipo de servi\xe7o"}),Object(O.jsx)(s.y,{options:[{label:"Sinistro",value:0},{label:"Assist\xeancia",value:0}]}),Object(O.jsx)("br",{}),Object(O.jsx)(s.x,{children:"Valor por km (R$)"}),Object(O.jsxs)("div",{className:"container-icon-input",children:[Object(O.jsx)("label",{className:"icon-search-global  i-absolute-global",children:"R$"}),Object(O.jsx)(s.w,{className:"input-km",value:A,type:"number",required:!0,min:"0.00",step:".01",onChange:function(e){z(e.target.value)}})]}),Object(O.jsx)("br",{}),Object(O.jsx)(s.x,{children:"Fluxo de assist\xeancia"}),Object(O.jsx)(s.y,{options:[{label:"Fluxo de Alagamentos",value:0}]})]}),Object(O.jsx)("br",{})]})]})}),Object(O.jsxs)(s.M,{children:[Object(O.jsx)("div",{className:"flex-grow-1",children:Object(O.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return p(!0)},children:"Deletar servi\xe7o"})}),Object(O.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return h(!1)},children:"Cancelar"}),Object(O.jsx)(s.g,{className:"btn-save-global",onClick:function(){return D.apply(this,arguments)},children:"Salvar"})]})]})]})},m=(n(578),function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],r=n[1],l=Object(a.useState)(),o=Object(c.a)(l,2),j=(o[0],o[1],Object(a.useState)(["Roubo e furto","Chaveiro","Capotamento"])),b=Object(c.a)(j,2),u=b[0],d=b[1],x=Object(a.useState)(),h=Object(c.a)(x,2);h[0],h[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.g,{className:"btn-save-global",onClick:function(){return r(!i)},children:"Adicionar cobertura"}),Object(O.jsxs)(s.K,{visible:i,onClose:function(){return r(!1)},size:"xl",children:[Object(O.jsx)(s.N,{children:Object(O.jsx)(s.O,{className:"title-modal",children:"Adicionar"})}),Object(O.jsx)(s.L,{className:"container-body",children:Object(O.jsxs)(s.ab,{children:[Object(O.jsx)(s.m,{children:Object(O.jsxs)(s.u,{children:[Object(O.jsx)(s.x,{children:"Nome do Servi\xe7o"}),Object(O.jsx)(s.y,{onChange:function(e){d(e.target.value)},options:u.map((function(e,t){return{label:e,value:t}}))}),Object(O.jsx)("br",{}),Object(O.jsx)(s.x,{children:"Descri\xe7\xe3o"}),Object(O.jsx)(s.A,{rows:"5"})]})}),Object(O.jsx)(s.m,{children:Object(O.jsxs)(s.u,{children:[Object(O.jsx)(s.x,{children:"Tipo de servi\xe7o"}),Object(O.jsx)(s.y,{options:[{label:"Sinistro",value:0},{label:"Assist\xeancia",value:0}]}),Object(O.jsx)("br",{}),Object(O.jsx)(s.x,{children:"Valor por km (R$)"}),Object(O.jsxs)("div",{className:"container-icon-input",children:[Object(O.jsx)("label",{className:"icon-search-global  i-absolute-global",children:"R$"}),Object(O.jsx)(s.w,{className:"input-km",type:"number",required:!0,min:"0.00",step:".01",placeholder:"0,00"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(s.x,{children:"Fluxo de assist\xeancia"}),Object(O.jsx)(s.y,{options:[{label:"Fluxo de Roubo e Furto",value:0}]})]})})]})}),Object(O.jsxs)(s.M,{children:[Object(O.jsx)(s.g,{className:"btn-cancel-global",variant:"outline",onClick:function(){return r(!1)},children:"Cancelar"}),Object(O.jsx)(s.g,{className:"btn-save-global",onClick:function(){},children:"Salvar"})]})]})]})}),f=function(e){return 1==e.status?Object(O.jsx)(s.u,{className:"d-flex justify-content-center",children:Object(O.jsx)(s.z,{defaultChecked:!0})}):Object(O.jsx)(s.u,{className:"d-flex justify-content-center",children:Object(O.jsx)(s.z,{valid:!0,defaultChecked:!0})})},g=n(588),p=(n(744),n(411));t.default=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],b=Object(a.useState)(1),u=Object(c.a)(b,2),d=u[0],x=u[1],v=Object(a.useState)(""),N=Object(c.a)(v,2),C=N[0],k=N[1],S=Object(a.useState)(0),y=Object(c.a)(S,2),P=y[0],w=y[1],A=Object(a.useState)(1),z=Object(c.a)(A,2),F=z[0];z[1];Object(a.useEffect)((function(){({data:{totalPages:10}}).data.totalPages>1&&(x(1),k(2),i("")),w(4)}),[]);var R,D=r.a.get("userType"),T=p.AES.decrypt(D,"OnnSeguros").toString(p.enc.Utf8),q=Object(a.useState)([]),E=Object(c.a)(q,2),L=E[0],K=(E[1],T),$=Object(a.useState)(""),I=Object(c.a)($,2),M=I[0],V=I[1],B=[],J=[{id:"93af6e15-438e-42f5-b33f-2e9fcb454d97",eventId:"1",name:"Pane seca APAGAR",valuePerKm:0,description:"Pane por falta de combust\xedvel",icon:"sdsd",type:"Sinistro"}],U=function(){var e=R.toLocaleLowerCase();L.map((function(t){t.description.toLocaleLowerCase().includes(e)&&(B.push(t),setDados(B))}))},G=function(){};return""==J?Object(O.jsx)(l.a,{animation:"grow",variant:"info"}):Object(O.jsxs)(s.i,{children:[Object(O.jsxs)(s.j,{children:[Object(O.jsxs)(s.S,{className:"justify-content-between",children:[Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("div",{className:"container-icon-input",children:[Object(O.jsx)("i",{className:"icon-search-global i-absolute-global",children:Object(O.jsx)(o.b,{color:"#6D6D6D"})}),Object(O.jsx)(s.w,{className:"input-search-global",type:"search",onChange:function(e){V(e.target.value),R=e.target.value,U()},value:M,placeholder:"Pesquisar"})]}),Object(O.jsx)(s.g,{className:"ms-2 btn-search-global",variant:"outline",onClick:G,children:"Buscar"})]}),Object(O.jsx)("div",{children:"ADMIN"==K?Object(O.jsx)(m,{attPage:G}):null})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(s.gb,{striped:!0,align:"middle",className:"mb-0",hover:!0,responsive:!0,children:[Object(O.jsx)(s.jb,{children:Object(O.jsxs)(s.lb,{children:[Object(O.jsxs)(s.kb,{className:"p-1",children:["Servi\xe7os",Object(O.jsx)(s.g,{onClick:function(){return console.log("ordenar lista")},size:"sm",color:"link",children:Object(O.jsx)(j.d,{size:24,color:"black"})})]}),Object(O.jsxs)(s.kb,{className:"p-1",children:["Tipo",Object(O.jsx)(s.g,{onClick:function(){return console.log("ordenar lista")},size:"sm",color:"link",children:Object(O.jsx)(j.d,{size:24,color:"black"})})]}),Object(O.jsx)(s.kb,{className:"text-center",children:"Status"}),Object(O.jsx)(s.kb,{className:"text-center",children:"Valor por km (R$)"}),Object(O.jsx)(s.kb,{})]})}),Object(O.jsx)(s.hb,{children:J.map((function(e,t){return Object(O.jsxs)(s.lb,{children:[Object(O.jsx)(s.ib,{children:e.description}),Object(O.jsx)(s.ib,{children:e.type}),Object(O.jsx)(s.ib,{children:Object(O.jsx)(f,{status:e.disabled})}),Object(O.jsxs)(s.ib,{className:"text-center",children:["R$ ",e.valuePerKm]}),Object(O.jsx)(s.ib,{className:"text-center",children:"ADMIN"==K?Object(O.jsx)(h,{item:e,parentCallback:G}):null})]},t)}))})]})]}),Object(O.jsx)(g.a,{page:function(e){},numberOfPages:P,previousPage:n,setPreviousPage:i,currentPage:d,setCurrentPage:x,nextPage:C,setNextPage:k,name:"coberturas",qtdElements:F})]})}}}]);
//# sourceMappingURL=21.5c08bc26.chunk.js.map