(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[22],{599:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(121),r=n.n(c),a=function(){var e=r.a.get("TokenID");return{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}};t.b="http://localhost:8080"},609:function(e,t,n){"use strict";var c=n(603),r=n(121),a=n.n(r),s=n(435);t.a={UserTypeDecryption:function(){var e=a.a.get("userType");return s.AES.decrypt(e,"OnnSeguros").toString(s.enc.Utf8)},userPermissionsDescription:function(){var e,t,n=[],r=a.a.get("permissions").split(","),i=Object(c.a)(r);try{for(i.s();!(t=i.n()).done;){e=t.value;var o=s.AES.decrypt(e,"OnnSeguros");n.push(o.toString(s.enc.Utf8))}}catch(l){i.e(l)}finally{i.f()}return n}}},673:function(e,t){},756:function(e,t,n){},762:function(e,t){},763:function(e,t){},789:function(e,t,n){"use strict";n.r(t);var c=n(34),r=n(0),a=n(600),s=n.n(a),i=(n(756),n(7)),o=(n(27),n(615)),l=n(598),j=n(626),b=n(757),u=(n(121),n(599)),d=n(2),h=function(e){var t=function(){return p(!1)},n=Object(r.useState)(!1),a=Object(c.a)(n,2),h=(a[0],a[1],Object(r.useState)(!1)),O=Object(c.a)(h,2),x=O[0],p=O[1],f=function(){console.log(w);var e=new FileReader;e.onload=function(e){var t=e.target.result,n=b.read(t,{type:"binary"}),c=n.SheetNames[0],r=n.Sheets[c],a=b.utils.sheet_to_csv(r,{header:1});g(a)},e.readAsBinaryString(w)},g=function(t){for(var n=t.split(/\r\n|\n/),c=n[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/),r=[],a=1;a<n.length;a++){var i=n[a].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);if(c&&i.length==c.length){for(var o={},l=0;l<c.length;l++){var j=i[l];j.length>0&&('"'==j[0]&&(j=j.substring(1,j.length-1)),'"'==j[j.length-1]&&(j=j.substring(j.length-2,1))),c[l]&&(o[c[l]]=j)}Object.values(o).filter((function(e){return e})).length>0&&r.push(o)}}var b=c.map((function(e){return{name:e,selector:e}}));y(r),S(b),function(t){z(!0);var n=[];t.forEach((function(e){var t=e[" to"].replace(/[^0-9,]/g,""),c=e[" until"].replace(/[^0-9,]/g,"");n.push({to:Number(t.replace(",",".")),until:Number(c.replace(",",".")),kRisk:Number(e.kRisk.replace(",",".")),exposition:Number(e.exposition.replace(",","."))})})),console.log("valores atts",n);var c=Object(u.a)();s.a.post("".concat(u.b,"/risks"),n,c).then((function(t){console.log("Enviado...",t),R(),z(!1),e.parentCallback(!0),p(!1)})).catch((function(e){console.log("erro na api....",e)}))}(r)};var v=Object(r.useState)([]),m=Object(c.a)(v,2),S=(m[0],m[1]),N=Object(r.useState)([]),k=Object(c.a)(N,2),y=(k[0],k[1]),C=Object(r.useState)(),A=Object(c.a)(C,2),w=A[0],R=A[1],T=Object(r.useState)(!1),D=Object(c.a)(T,2),U=D[0],z=D[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.c,{onClick:function(){return p(!0)},color:"dark",children:"Atualizar valores"}),Object(d.jsxs)(l.a,{show:x,onHide:t,size:"xl",className:"container-btn-risc",children:[Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)("h3",{children:"Atualizar planilha "}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"Atualizar valores de risco por meio de uma planilha .CSV."}),Object(d.jsx)(i.C,{className:"mb-3",children:Object(d.jsx)(i.t,{type:"file",accept:".csv",required:!0,onChange:function(e){R(e.target.files[0])}})}),null==w?Object(d.jsx)(j.a,{variant:"secondary",onClick:f,children:"Salvar"}):null,null!=w&&0==U?Object(d.jsx)(j.a,{variant:"secondary",onClick:f,children:"Salvar"}):null,null!=w&&0!=U?Object(d.jsxs)("h4",{children:[" ",Object(d.jsx)(o.a,{animation:"grow",variant:"info"}),"  "]}):null]}),Object(d.jsx)(l.a.Footer,{children:Object(d.jsx)(j.a,{variant:"secondary",onClick:t,children:"Sair"})})]})]})},O=n(609);n(435),t.default=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)([]),j=Object(c.a)(l,2),b=(j[0],j[1]),x=Object(r.useState)([]),p=Object(c.a)(x,2),f=p[0],g=p[1];return Object(r.useEffect)((function(){b(O.a.userPermissionsDescription()),g(O.a.UserTypeDecryption);var e=Object(u.a)();s.a.get("".concat(u.b,"/risks"),e).then((function(e){a(e.data)})).catch((function(e){}))}),[]),console.log(n),""==n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h4",{children:[" ",Object(d.jsx)(o.a,{animation:"grow",variant:"info"}),"  "]}),Object(d.jsx)("br",{})]}):Object(d.jsx)("div",{children:Object(d.jsx)(i.f,{className:"container-risco",children:Object(d.jsxs)(i.g,{children:[Object(d.jsx)(i.L,{expand:"lg",className:"menuUser",children:Object(d.jsxs)(i.l,{fluid:!0,children:[Object(d.jsx)(i.O,{"aria-label":"Toggle navigation"}),Object(d.jsxs)(i.k,{className:"navbar-collapse",children:[Object(d.jsxs)(i.M,{children:[" ",Object(d.jsx)("h4",{children:" Riscos "}),"   "]}),Object(d.jsx)(i.N,{className:"me-auto mb-2 mb-lg-0"}),"ADMIN"==f?Object(d.jsx)(h,{parentCallback:function(){a([]);var e=Object(u.a)();s.a.get("".concat(u.b,"/risks"),e).then((function(e){a(e.data)})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))}}):null]})]})}),Object(d.jsxs)(i.Z,{align:"middle",className:" container-table-risc ",bordered:!0,hover:!0,responsive:!0,children:[Object(d.jsx)(i.cb,{children:Object(d.jsxs)(i.eb,{active:!0,children:[Object(d.jsx)(i.db,{className:"text-center",children:"Valor Min\xedmo do ve\xedculo"}),Object(d.jsx)(i.db,{className:"text-center",children:"Valor m\xe1ximo  do Ve\xedculo"}),Object(d.jsx)(i.db,{className:"text-center",children:"Constante de Risco"}),Object(d.jsx)(i.db,{className:"text-center",children:" Var\xedavel de exposi\xe7\xe3o "})]})}),Object(d.jsx)(i.ab,{children:n.map((function(e,t){return Object(d.jsxs)(i.eb,{children:[Object(d.jsx)(i.bb,{className:"valorMin",children:Object(d.jsxs)("p",{children:[" R$ ",e.to," "]})}),Object(d.jsx)(i.bb,{color:"secondary",className:"text-center",children:Object(d.jsxs)("p",{children:[" R$ ",e.until," "]})}),Object(d.jsx)(i.bb,{className:"text-center",children:Object(d.jsxs)("p",{children:[" ",e.krisk," "]})}),Object(d.jsx)(i.bb,{color:"secondary",className:"text-center",children:Object(d.jsxs)("p",{children:[" ",e.exposition," "]})})]},t.toString())}))})]}),Object(d.jsx)("br",{})]})})})}}}]);
//# sourceMappingURL=22.c848b9d2.chunk.js.map