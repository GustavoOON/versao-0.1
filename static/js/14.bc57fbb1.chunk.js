(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[14],{599:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(121),s=a.n(c),l=function(){var e=s.a.get("TokenID");return{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}};t.b="http://localhost:8080"},641:function(e,t,a){},642:function(e,t,a){},643:function(e,t,a){},644:function(e,t,a){"use strict";t.a=a.p+"static/media/carro01.33222a01.jpeg"},651:function(e,t,a){"use strict";var c=a(34),s=a(0),l=a(600),i=a.n(l),r=(a(121),a(7)),n=a(612),o=a(598),j=a(626),b=a(616),d=(a(639),a(640),a(641),a(2)),u=function(e){var t=e.desc;return"ADDRESS"==t?Object(d.jsx)("p",{className:"text",children:"Endere\xe7o"}):"CAR_DOCUMENT"==t?Object(d.jsx)("p",{className:"text",children:"Documento do carro"}):"CNH"==t?Object(d.jsx)("p",{className:"text",children:"CNH"}):"BACK"==t?Object(d.jsx)("p",{className:"text",children:"Atr\xe1s"}):"BACK_LEFT"==t?Object(d.jsx)("p",{className:"text",children:"Traseira esquerda"}):"BACK_RIGHT"==t?Object(d.jsx)("p",{className:"text",children:"Traseira direita"}):"CHASSIS"==t?Object(d.jsx)("p",{className:"text",children:"Chassi"}):"FRONT"==t?Object(d.jsx)("p",{className:"text",children:"Frente"}):"LEFT"==t?Object(d.jsx)("p",{className:"text",children:"Lat. Esquerda"}):"PANEL"==t?Object(d.jsx)("p",{className:"text",children:"Painel"}):"RIGHT"==t?Object(d.jsx)("p",{className:"text",children:"Lat. Direita"}):"MOTOR"==t?Object(d.jsx)("p",{className:"text",children:"Motor"}):void 0},x=(a(642),function(e){var t=e.midia;return Object(d.jsx)("div",{className:"container-menu",children:Object(d.jsx)(b.Gallery,{children:t.map((function(e,t){return Object(d.jsx)(b.Item,{original:e.url,thumbnail:e.url,width:"1024",height:"768",children:function(t){var a=t.ref,c=t.open;return Object(d.jsxs)("div",{className:"container-carrocel",children:[Object(d.jsx)("img",{ref:a,onClick:c,width:"256",height:"192",src:e.url}),Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(u,{desc:e.description})})]})}},t.toString())}))})})}),m=a(599);a(643),t.a=function(e){var t=e.midia,a=Object(s.useState)(!1),l=Object(c.a)(a,2),b=l[0],u=l[1],p=function(){return u(!1)},O=Object(s.useState)(),h=Object(c.a)(O,2),f=h[0],y=h[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"container-device-midia-actions",children:Object(d.jsx)(r.c,{onClick:function(){return function(){var e=Object(m.a)();i.a.get("".concat(m.b,"/images/vehicle/").concat(t),e).then((function(e){y(e.data),u(!0)})).catch((function(e){console.log("error",e),alert("Login expirado"),window.location.reload()}))}()},size:"sm",className:"icon-css-midia",color:"black",children:Object(d.jsx)(n.f,{size:24,color:"black"})})}),Object(d.jsxs)(o.a,{show:b,onHide:p,size:"xl",children:[Object(d.jsx)(o.a.Header,{closeButton:!0,children:Object(d.jsx)(o.a.Title,{children:"Fotos do Ve\xedculo "})}),Object(d.jsx)(o.a.Body,{children:Object(d.jsx)(x,{midia:f})}),Object(d.jsx)(o.a.Footer,{children:Object(d.jsx)(j.a,{variant:"secondary",onClick:p,children:"Sair"})})]})]})}},736:function(e,t,a){},737:function(e){e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')},738:function(e,t,a){},739:function(e,t,a){},740:function(e,t,a){},782:function(e,t,a){"use strict";a.r(t);var c=a(8),s=a(34),l=a(0),i=a.n(l),r=a(649),n=(a(736),a(737)),o=a.p+"static/media/car_enable.c9f3153b.png",j=a.p+"static/media/car_disable.4efdbbe1.png",b=(a(738),a(7)),d=a(598),u=a(2),x=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(l.useState)(!1)),c=Object(s.a)(a,2),i=c[0],r=c[1],n=function(){return r(!1)},o=Object(l.useState)(!0),j=Object(s.a)(o,2),x=j[0],m=j[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.c,{onClick:function(e){m(e),r(!0)},children:" Gerar relat\xf3rio "}),Object(u.jsxs)(d.a,{show:i,onHide:n,fullscreen:x,children:[Object(u.jsx)(d.a.Header,{closeButton:!0,children:Object(u.jsx)(d.a.Title,{children:"Resumo da opera\xe7\xe3o "})}),Object(u.jsx)(d.a.Body,{className:"container-body",children:Object(u.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat suscipit consequatur dignissimos veritatis! Dolores, voluptates iure quasi laboriosam aperiam, tempore praesentium est rerum itaque commodi, quos dignissimos magnam excepturi?"})}),Object(u.jsx)(d.a.Footer,{children:Object(u.jsx)(b.c,{onClick:n,children:"Sair"})})]})]})},m=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(l.useState)(!1)),c=Object(s.a)(a,2),i=c[0],r=c[1],n=function(){return r(!1)},o=Object(l.useState)(!0),j=Object(s.a)(o,2),x=j[0],m=j[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.c,{onClick:function(e){m(e),r(!0)},children:" Gerar relat\xf3rio "}),Object(u.jsxs)(d.a,{show:i,onHide:n,fullscreen:x,children:[Object(u.jsx)(d.a.Header,{closeButton:!0,children:Object(u.jsx)(d.a.Title,{children:"Resumo da opera\xe7\xe3o "})}),Object(u.jsx)(d.a.Body,{className:"container-body",children:Object(u.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat suscipit consequatur dignissimos veritatis! Dolores, voluptates iure quasi laboriosam aperiam, tempore praesentium est rerum itaque commodi, quos dignissimos magnam excepturi?"})}),Object(u.jsx)(d.a.Footer,{children:Object(u.jsx)(b.c,{onClick:n,children:"Sair"})})]})]})},p=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(l.useState)(!1)),c=Object(s.a)(a,2),i=c[0],r=c[1],n=function(){return r(!1)},o=Object(l.useState)(!0),j=Object(s.a)(o,2),x=j[0],m=j[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.c,{onClick:function(e){m(e),r(!0)},children:" Gerar relat\xf3rio "}),Object(u.jsxs)(d.a,{show:i,onHide:n,fullscreen:x,children:[Object(u.jsx)(d.a.Header,{closeButton:!0,children:Object(u.jsx)(d.a.Title,{children:"Resumo da opera\xe7\xe3o "})}),Object(u.jsx)(d.a.Body,{className:"container-body",children:Object(u.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat suscipit consequatur dignissimos veritatis! Dolores, voluptates iure quasi laboriosam aperiam, tempore praesentium est rerum itaque commodi, quos dignissimos magnam excepturi?"})}),Object(u.jsx)(d.a.Footer,{children:Object(u.jsx)(b.c,{onClick:n,children:"Sair"})})]})]})},O=new Date,h=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(l.useState)()),c=Object(s.a)(a,2),i=(c[0],c[1]),r=Object(l.useState)(),n=Object(s.a)(r,2),o=(n[0],n[1]),j=Object(l.useState)(),d=Object(s.a)(j,2),h=(d[0],d[1]),f=Object(l.useState)(),y=Object(s.a)(f,2),g=y[0],v=y[1],N=Object(l.useState)(),S=Object(s.a)(N,2),k=S[0],w=S[1],C=Object(l.useState)(),_=Object(s.a)(C,2),B=_[0],F=_[1],A=Object(l.useState)(),z=Object(s.a)(A,2),T=z[0],R=z[1],L=Object(l.useState)(),M=Object(s.a)(L,2),H=M[0],D=M[1];Object(l.useEffect)((function(){i(O.getDate()),o(O.getMonth()+1),h(O.getFullYear());var e=O.getHours()-1;e<10&&(e="0"+e),console.log("aux",e),v(e+":00"),w(O.getHours()+":00"),F(O.getFullYear()+"-"+(O.getMonth()+1)+"-"+O.getDate()),R(O.getFullYear()+"-"+(O.getMonth()+1)+"-"+O.getDate()),D(O.getFullYear()+"-"+(O.getMonth()+1)+"-"+O.getDate())}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h5",{children:"Filtrar Relat\xf3rios"}),Object(u.jsxs)(b.l,{fluid:!0,className:"menu-report",children:[Object(u.jsxs)(b.T,{className:"align-items-start",children:[Object(u.jsx)(b.j,{children:Object(u.jsx)(b.v,{disabled:!0,"aria-label":"Selecione o Local",options:["Selecione o Local",{label:"BH",value:"1"},{label:"SP",value:"2"},{label:"RJ",value:"3"}]})}),Object(u.jsx)(b.j,{children:Object(u.jsx)(b.v,{"aria-label":"Selecione o Grupo",options:["Selecione o Grupo",{label:"A",value:"1"},{label:"B",value:"2"},{label:"C",value:"3"}]})}),Object(u.jsx)(b.j,{children:Object(u.jsx)(b.C,{className:"mb-3",children:Object(u.jsx)(b.t,{"aria-label":"Sizing example input",placeholder:"Digite a placa","aria-describedby":"inputGroup-sizing-default"})})})]}),Object(u.jsxs)(b.T,{className:"align-items-start",children:[Object(u.jsxs)(b.j,{children:[Object(u.jsx)("h6",{children:" In\xedcio "}),Object(u.jsx)("input",{id:"date",type:"date",onChange:function(e){F(e.target.value)},value:B,max:H,min:"2018-01-01"}),Object(u.jsx)("input",{type:"time",id:"inicio",onChange:function(e){v(e.target.value)},value:g})]}),Object(u.jsxs)(b.j,{children:[Object(u.jsx)("h6",{children:" Fim "}),Object(u.jsx)("input",{id:"date",type:"date",onChange:function(e){R(e.target.value)},value:T,max:H,min:"2018-01-01"}),Object(u.jsx)("input",{type:"time",id:"fim",onChange:function(e){w(e.target.value)},value:k})]})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(b.T,{children:[Object(u.jsx)(b.f,{style:{width:"18rem"},className:"container-card",children:Object(u.jsxs)(b.g,{children:[Object(u.jsx)(b.i,{children:"Resumo"}),Object(u.jsx)(b.h,{children:"Informa\xe7\xf5es sobre a placa do ve\xedculo selecionada."}),Object(u.jsx)(x,{})]})}),Object(u.jsx)(b.f,{style:{width:"18rem"},className:"container-card",children:Object(u.jsxs)(b.g,{children:[Object(u.jsx)(b.i,{children:"Viagens"}),Object(u.jsx)(b.h,{children:"Relat\xf3rios de viagens do dispositivo."}),Object(u.jsx)(m,{})]})}),Object(u.jsx)(b.f,{style:{width:"18rem"},className:"container-card",children:Object(u.jsxs)(b.g,{children:[Object(u.jsx)(b.i,{children:"Rotas"}),Object(u.jsx)(b.h,{children:"Relat\xf3rio de rotas do dispositivo"}),Object(u.jsx)(p,{})]})})]}),Object(u.jsx)("br",{})]})},f=a(644),y=a(651),g=a(674),v=(a(739),function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)(b.T,{children:[Object(u.jsx)(b.j,{children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(g.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)("label",{className:"font-sub2",children:" Grupo "}),Object(u.jsx)("p",{className:"font-text2",children:" A "}),Object(u.jsx)("label",{className:"font-sub2",children:" N\xfamero SIM"}),Object(u.jsx)("p",{className:"font-text2",children:" 8938u329823 "}),Object(u.jsx)("label",{className:"font-sub2",children:" Model"}),Object(u.jsx)("p",{className:"font-text2",children:" C63 - AMG esportivo "}),Object(u.jsx)("label",{className:"font-sub2",children:" Contato  "}),Object(u.jsx)("p",{className:"font-text2",children:" 34 99800989"}),Object(u.jsx)("label",{className:"font-sub2",children:" Categoria "}),Object(u.jsx)("p",{className:"font-text2",children:" Esportivo "}),Object(u.jsx)("label",{className:"font-sub2",children:" Status Pagamento"}),Object(u.jsx)("p",{className:"font-text2",children:" Ativo ou desativo etc "}),Object(u.jsx)("label",{className:"font-sub2",children:" valor "}),Object(u.jsx)("p",{className:"font-text2",children:" R$ 510000 "}),Object(u.jsx)("label",{className:"font-sub2",children:" Marca do ve\xedculo"}),Object(u.jsx)("p",{className:"font-text2",children:" Mercedes Benz"}),Object(u.jsx)("label",{className:"font-sub2",children:" Chassi do Ve\xedculo "}),Object(u.jsx)("p",{className:"font-text2",children:" jjhdS23ds-23"})]})})}),Object(u.jsx)(b.j,{children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(g.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)("label",{className:"font-sub2",children:" Cidade do usu\xe1rio "}),Object(u.jsx)("p",{className:"font-text2",children:" Belo Horizonte "}),Object(u.jsx)("label",{className:"font-sub2",children:" Cor do ve\xedculo"}),Object(u.jsx)("p",{className:"font-text2",children:" Preto "}),Object(u.jsx)("label",{className:"font-sub2",children:" Fipe code "}),Object(u.jsx)("p",{className:"font-text2",children:" xxxssssddd "}),Object(u.jsx)("label",{className:"font-sub2",children:" Tipos Combust\xedveis "}),Object(u.jsx)("p",{className:"font-text2",children:" Gasolina "}),Object(u.jsx)("label",{className:"font-sub2",children:" Modelo do Carro "}),Object(u.jsx)("p",{className:"font-text2",children:" AMG - 2020"}),Object(u.jsx)("label",{className:"font-sub2",children:" Placa do Ve\xedculo "}),Object(u.jsx)("p",{className:"font-text2",children:" XXXX-4334 "}),Object(u.jsx)("label",{className:"font-sub2",children:" Usu\xe1rio Status "}),Object(u.jsx)("p",{className:"font-text2",children:" Ativo "}),Object(u.jsx)("label",{className:"font-sub2",children:" Zip Code"}),Object(u.jsx)("p",{className:"font-text2",children:" 34788-89 "}),Object(u.jsx)("label",{className:"font-sub2",children:" Estado "}),Object(u.jsx)("p",{className:"font-text2",children:" MG "})]})})})]})})}),N=(a(740),function(e){var t=Object(l.useState)(!1),a=Object(s.a)(t,2),c=(a[0],a[1],Object(l.useState)(!1)),i=Object(s.a)(c,2),n=i[0],o=i[1],j=function(){return o(!1)};var x=Object(l.useState)(!1),m=Object(s.a)(x,2),p=(m[0],m[1],Object(l.useState)(!1)),O=Object(s.a)(p,2),g=O[0],N=O[1],S=function(){return N(!1)};var k=Object(l.useState)(!0),w=Object(s.a)(k,2),C=w[0],_=(w[1],Object(l.useState)(!1)),B=Object(s.a)(_,2),F=(B[0],B[1],Object(l.useState)()),A=Object(s.a)(F,2),z=A[0],T=A[1];Object(l.useEffect)((function(){null!=e.posicao&&T(e.posicao)}),[]);return null==z?Object(u.jsx)(u.Fragment,{children:" "}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.e,{latitude:e.posicao.lat,longitude:e.posicao.lng,onClose:function(){console.log("aqui mostra ",z.lng),console.log("tipo da ","number"),e.parentCallback(null)},closeButton:!1,children:[Object(u.jsxs)(b.T,{className:"align-items-start colunas-popup ",children:[Object(u.jsx)(b.j,{className:"andar1-col-esq",sm:"auto",children:Object(u.jsx)(b.B,{fluid:!0,src:f.a,className:"img-pop"})}),Object(u.jsxs)(b.j,{className:"andar1-col-dir",sm:"auto",children:[Object(u.jsx)("label",{className:"font-sub",children:" Placa "}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-text",children:"XXX-1234"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-text",children:e.posicao.name}),Object(u.jsx)("br",{})]})]}),Object(u.jsxs)(b.T,{className:"justify-content-around colunas-popup2",children:[Object(u.jsxs)(b.j,{className:"andar2-col-esq",sm:"auto",children:[Object(u.jsx)("label",{className:"font-sub",children:" Status "}),Object(u.jsx)("br",{}),1==C?Object(u.jsx)("label",{className:"font-text",children:"Em Movimento "}):Object(u.jsx)("label",{className:"font-text",children:"Parado"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-sub",children:" Velocidade "}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-text",children:" 60 km/h"})]}),Object(u.jsxs)(b.j,{className:"andar2-col-meio",sm:"auto",children:[Object(u.jsx)("label",{className:"font-sub",children:" Motorista "}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-text",children:" Gustavo Alcantara "}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-sub",children:" Pagamento "}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"font-text",children:" R$ 450,20"}),Object(u.jsx)("br",{})]}),Object(u.jsxs)(b.j,{className:"andar2-col-dir",sm:"auto",children:[Object(u.jsx)(b.c,{className:"btn-relatorio",size:"sm",color:"secondary",shape:"rounded-pill",onClick:function(){o(!0)},children:Object(u.jsx)("label",{className:"font-sub",children:" Relat\xf3rio Completo "})}),Object(u.jsx)("br",{}),Object(u.jsx)(b.c,{className:"btn-carro",size:"sm",color:"secondary",shape:"rounded-pill",onClick:function(){N(!0)},children:Object(u.jsx)("label",{className:"font-sub",children:" Informa\xe7\xf5es Ve\xedculo  "})})]})]}),Object(u.jsxs)(d.a,{show:n,onHide:j,size:"xl",children:[Object(u.jsx)(d.a.Header,{closeButton:!0,children:Object(u.jsx)(d.a.Title,{children:"Relat\xf3rios"})}),Object(u.jsx)(d.a.Body,{className:"container-body",children:Object(u.jsx)(h,{})}),Object(u.jsx)(d.a.Footer,{children:Object(u.jsx)(b.c,{onClick:j,children:"Sair"})})]}),Object(u.jsxs)(d.a,{show:g,onHide:S,size:"xl",children:[Object(u.jsx)(d.a.Header,{closeButton2:!0,children:Object(u.jsx)(d.a.Title,{children:"Informa\xe7\xf5es Carro"})}),Object(u.jsx)(d.a.Body,{className:"container-body",children:Object(u.jsx)(v,{})}),Object(u.jsxs)(d.a.Footer,{children:[Object(u.jsx)(y.a,{}),Object(u.jsx)(b.c,{onClick:S,children:"Sair"})]})]})]})})}),S=a(27),k=a(28);t.default=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(l.useState)(!1)),x=Object(s.a)(a,2),m=x[0],p=x[1],O=function(){return p(!1)};var f=i.a.useState(!1),y=Object(s.a)(f,2),g=(y[0],y[1],i.a.useState({latitude:-19.91912,longitude:-43.9387852,zoom:10})),v=Object(s.a)(g,2),w=v[0],C=v[1],_=Object(l.useState)(null),B=Object(s.a)(_,2),F=B[0],A=B[1],z=function(){A(null)},T=function(e){A(e)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.c.Provider,{children:Object(u.jsxs)(r.g,Object(c.a)(Object(c.a)({},w),{},{width:"100%",height:"80vh",className:"mapBoxContainer",mapStyle:n,mapboxApiAccessToken:"pk.eyJ1IjoiZ3VzdGF2b2FsY3QiLCJhIjoiY2t4ZzZ3YzVpMmExaDMwb2N1eG9iaWkyeSJ9.NmvzyFhoDboy3y8f0uAtvg",onViewportChange:function(e){return C(e)},children:[Object(u.jsx)(r.a,{style:{right:10,top:10}}),[{id:1,name:"Celta",lat:-19.9191912,lng:-43.9387852,status:0,title:"Uluru (Ayers Rock)"},{id:2,name:"Gol bola",lat:-19.8127,lng:-43.9512,status:1,title:"Uluru (Ayers Rock)"},{id:3,name:"pegeout 207",lat:-19.813,lng:-43.9238,status:1,title:"Uluru (Ayers Rock)222"},{id:4,name:"Camaro",lat:-19.8132,lng:-43.9238,status:1,title:"Uluru (Ayers Rock)222"},{id:5,name:"Mustang",lat:-19.964512,lng:-43.962461,status:0,title:"Uluru (Ayers Rock)22"}].map((function(e,t){return 1==e.status?Object(u.jsxs)("div",{children:[Object(u.jsx)(r.d,{latitude:e.lat,longitude:e.lng,offsetLeft:-20,offsetTop:-10,children:Object(u.jsx)(b.B,{fluid:!0,onClick:function(){T(e)},src:o,width:30,height:30})}),null!==F?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(N,{parentCallback:z})}):null]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.d,{latitude:e.lat,longitude:e.lng,offsetLeft:-20,offsetTop:-10,children:Object(u.jsx)(b.B,{onClick:function(){T(e)},fluid:!0,src:j,width:25,height:25})}),null!==F?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(N,{parentCallback:z,posicao:F})}):null]})})),Object(u.jsxs)("div",{children:[Object(u.jsx)(b.c,{className:"button-css",onClick:function(){p(!0)},color:"light",children:Object(u.jsx)(S.a,{icon:k.i,size:"xl"})}),Object(u.jsxs)(d.a,{show:m,onHide:O,size:"xl",children:[Object(u.jsx)(d.a.Header,{closeButton:!0,children:Object(u.jsx)(d.a.Title,{children:"Relat\xf3rios"})}),Object(u.jsx)(d.a.Body,{className:"container-body",children:Object(u.jsx)(h,{})}),Object(u.jsx)(d.a.Footer,{children:Object(u.jsx)(b.c,{onClick:O,children:"Sair"})})]})]})]}))})})}}}]);
//# sourceMappingURL=14.bc57fbb1.chunk.js.map