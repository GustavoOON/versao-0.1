(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[25],{632:function(e,t){},730:function(e,t,n){},736:function(e,t){},737:function(e,t){},772:function(e,t,n){"use strict";n.r(t);var c=n(158),a=n(2),s=n(161),r=n.n(s),o=(n(730),n(551)),i=(n(554),n(584)),l=n(162),j=n(757),b=n(577),d=n(731),h=n(558),u=n.n(h),O=n(27),p=function(e){var t,n=function(){return g(!1)},s=Object(a.useState)(!1),h=Object(c.a)(s,2),p=(h[0],h[1],Object(a.useState)(!1)),x=Object(c.a)(p,2),f=x[0],g=x[1],v=u.a.get("TokenID"),m=(u.a.get("userType"),{headers:{Authorization:v,"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}),k=function(){console.log(F);var e=new FileReader;e.onload=function(e){var t=e.target.result,n=d.read(t,{type:"binary"}),c=n.SheetNames[0],a=n.Sheets[c],s=d.utils.sheet_to_csv(a,{header:1});y(s)},e.readAsBinaryString(F)},y=function(t){for(var n=t.split(/\r\n|\n/),c=n[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/),a=[],s=1;s<n.length;s++){var o=n[s].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);if(c&&o.length==c.length){for(var i={},l=0;l<c.length;l++){var j=o[l];j.length>0&&('"'==j[0]&&(j=j.substring(1,j.length-1)),'"'==j[j.length-1]&&(j=j.substring(j.length-2,1))),c[l]&&(i[c[l]]=j)}Object.values(i).filter((function(e){return e})).length>0&&a.push(i)}}var b=c.map((function(e){return{name:e,selector:e}}));T(a),C(b),function(t){D(!0);var n=[];t.forEach((function(e){var t=e.to.replace(/[^0-9,]/g,""),c=e.until.replace(/[^0-9,]/g,"");n.push({to:t.replace(",","."),until:c.replace(",","."),kRisk:e.kRisk.replace(",","."),exposition:e.exposition.replace(",",".")})})),console.log("valores atts",n),r.a.post("http://dashboardbff.oonpayperuse.com.br/plansService/risks",n,m).then((function(t){console.log("Enviado...",t),V(),D(!1),e.parentCallback(!0),g(!1)})).catch((function(e){console.log("erro na api....",e)}))}(a)};var N=Object(a.useState)([]),S=Object(c.a)(N,2),C=(S[0],S[1]),w=Object(a.useState)([]),A=Object(c.a)(w,2),T=(A[0],A[1]),R=Object(a.useState)(),z=Object(c.a)(R,2),F=z[0],V=z[1],M=Object(a.useState)(!1),Z=Object(c.a)(M,2),$=Z[0],D=Z[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.c,{onClick:function(){return g(!0)},variant:"outline",color:"dark",children:"Atualizar valores"}),Object(O.jsxs)(j.a,{show:f,onHide:n,size:"xl",className:"container-btn-risc",children:[Object(O.jsxs)(j.a.Body,{children:[Object(O.jsx)("h3",{children:"Atualizar planilha "}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Atualizar valores de risco por meio de uma planilha .CSV."}),Object(O.jsx)(o.F,{className:"mb-3",children:Object(O.jsx)(o.v,{type:"file",accept:".csv",required:!0,onChange:function(e){V(e.target.files[0])}})}),null==F?Object(O.jsx)(b.a,(t={variant:"secondary",disabled:!0},Object(l.a)(t,"variant","ghost"),Object(l.a)(t,"onClick",k),Object(l.a)(t,"children","Salvar"),t)):null,null!=F&&0==$?Object(O.jsx)(b.a,{variant:"secondary",onClick:k,children:"Salvar"}):null,null!=F&&0!=$?Object(O.jsxs)("h4",{children:[" ",Object(O.jsx)(i.a,{animation:"grow",variant:"info"}),"  "]}):null]}),Object(O.jsx)(j.a.Footer,{children:Object(O.jsx)(b.a,{variant:"secondary",onClick:n,children:"Sair"})})]})]})};t.default=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],l=u.a.get("TokenID"),j=u.a.get("userType"),b={headers:{Authorization:l,"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}};return Object(a.useEffect)((function(){r.a.get("http://dashboardbff.oonpayperuse.com.br/plansService/risks",b).then((function(e){s(e.data)})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))}),[]),""==n?Object(O.jsxs)("h4",{children:[" ",Object(O.jsx)(i.a,{animation:"grow",variant:"info"}),"  "]}):Object(O.jsx)("div",{children:Object(O.jsx)(o.e,{className:"container-risco",children:Object(O.jsxs)(o.f,{children:[Object(O.jsx)(o.J,{expand:"lg",className:"menuUser",children:Object(O.jsxs)(o.l,{fluid:!0,children:[Object(O.jsx)(o.M,{"aria-label":"Toggle navigation"}),Object(O.jsxs)(o.k,{className:"navbar-collapse",children:[Object(O.jsxs)(o.K,{children:[" ",Object(O.jsx)("h4",{children:" Riscos "}),"   "]}),Object(O.jsx)(o.L,{className:"me-auto mb-2 mb-lg-0"}),"ADMIN"==j?Object(O.jsx)(p,{parentCallback:function(){s([]),r.a.get("http://dashboardbff.oonpayperuse.com.br/plansService/risks",b).then((function(e){s(e.data)})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))}}):null]})]})}),Object(O.jsxs)(o.X,{align:"middle",className:" container-table-risc ",bordered:!0,hover:!0,responsive:!0,children:[Object(O.jsx)(o.ab,{children:Object(O.jsxs)(o.cb,{active:!0,children:[Object(O.jsx)(o.bb,{className:"text-center",children:"Valor Min\xedmo do ve\xedculo"}),Object(O.jsx)(o.bb,{className:"text-center",children:"Valor m\xe1ximo  do Ve\xedculo"}),Object(O.jsx)(o.bb,{className:"text-center",children:"Constante de Risco"}),Object(O.jsx)(o.bb,{className:"text-center",children:" Var\xedavel de exposi\xe7\xe3o "})]})}),Object(O.jsx)(o.Y,{children:n.map((function(e,t){return Object(O.jsxs)(o.cb,{children:[Object(O.jsx)(o.Z,{className:"valorMin",children:Object(O.jsxs)("p",{children:[" R$ ",e.to," "]})}),Object(O.jsx)(o.Z,{color:"secondary",className:"text-center",children:Object(O.jsxs)("p",{children:[" R$ ",e.until," "]})}),Object(O.jsx)(o.Z,{className:"text-center",children:Object(O.jsxs)("p",{children:[" ",e.kRisk," "]})}),Object(O.jsx)(o.Z,{color:"secondary",className:"text-center",children:Object(O.jsxs)("p",{children:[" ",e.exposition," "]})})]})}))})]}),Object(O.jsx)("br",{})]})})})}}}]);
//# sourceMappingURL=25.63d44bd9.chunk.js.map