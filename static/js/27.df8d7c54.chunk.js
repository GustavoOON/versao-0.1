(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[27],{603:function(e,t,r){"use strict";r(0);var n=r(2);t.a=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth();return Object(n.jsxs)("label",{children:[{0:"Janeiro",1:"Fevereiro",2:"Mar\xe7o",3:"Abril",4:"MAio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outubro",10:"Novembro",11:"Dezembro"}[t]," ",e]})}},690:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return s})),r.d(t,"getStyle",(function(){return a})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return u})),r.d(t,"makeUid",(function(){return d})),r.d(t,"omitByKeys",(function(){return b})),r.d(t,"pickByKeys",(function(){return j})),r.d(t,"rgbToHex",(function(){return f}));var n=function e(t,r){for(var n=0,o=Object.keys(r);n<o.length;n++){var c=o[n];r[c]instanceof Object&&Object.assign(r[c],e(t[c],r[c]))}return Object.assign(t||{},r),t},o=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var o=t[n].cssRules,c=o.length-1;c>-1;c--)if(".ie-custom-properties"===o[c].selectorText){r=o[c].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},a=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&c()){var n=o();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=a(r,t);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,o,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(o,", ").concat(t/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,t){for(var r={},n=Object.keys(e),o=0;o<n.length;o++)!t.includes(n[o])&&(r[n[o]]=e[n[o]]);return r},j=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},f=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(o.slice(-2))},h={deepObjectsMerge:n,getColor:s,getStyle:a,hexToRgb:l,hexToRgba:u,makeUid:d,omitByKeys:b,pickByKeys:j,rgbToHex:f};t.default=h}]))},691:function(e,t,r){},792:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(7),c=r(584),i=r(49),a=r(26),s=r(2),l=function(){return Object(s.jsxs)(o.p,{alignment:"end",children:[Object(s.jsx)(o.s,{color:"transparent",caret:!1,className:"p-0",children:Object(s.jsx)(i.a,{icon:a.s})}),Object(s.jsxs)(o.r,{children:[Object(s.jsx)(o.X,{content:Object(s.jsx)(s.Fragment,{children:["Janeiro","Fevereiro","Mar\xe7o","Abril","MAio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"].map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.g,{color:"link",variant:"outline",onClick:function(){return console.log("Funcionouuuuuuu")},children:e}),Object(s.jsx)("br",{})]},t)}))}),placement:"left",children:Object(s.jsx)(o.q,{color:"link",children:"Alterar m\xeas"})}),Object(s.jsx)(o.q,{children:"Gerar rel\xe1torio"}),Object(s.jsx)(o.q,{children:"Editar gr\xe1fico..."}),Object(s.jsx)(o.q,{disabled:!0,children:"Mais Ferramentas"})]})]})},u=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.i,{className:"cardEsquerda",children:Object(s.jsxs)(o.j,{children:[Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)(o.l,{children:"Usu\xe1rios"}),Object(s.jsx)(l,{})]}),Object(s.jsxs)("label",{children:[{0:"Janeiro",1:"Fevereiro",2:"Mar\xe7o",3:"Abril",4:"MAio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outubro",10:"Novembro",11:"Dezembro"}[t]," ",e]}),Object(s.jsx)(c.a,{type:"bar",data:{labels:["Sem 1","Sem 2","Sem 3","Sem 4"],datasets:[{label:"Usu\xe1rios novos",backgroundColor:"#2561FA",data:[40,20,12,39,10,80]},{label:"Usu\xe1rios recorrentes",backgroundColor:"#19D1FD",data:[10,45,22,19,30,40]}]},labels:"months"})]})})})},d=r(53),b=r.p+"static/media/1.34eedf58.jpg";var j=function(){return Object(s.jsxs)(o.p,{alignment:"end",children:[Object(s.jsx)(o.s,{color:"transparent",caret:!1,className:"p-0",children:Object(s.jsx)(i.a,{icon:a.s})}),Object(s.jsxs)(o.r,{children:[Object(s.jsx)(o.X,{content:Object(s.jsx)(s.Fragment,{children:["Janeiro","Fevereiro","Mar\xe7o","Abril","MAio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"].map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.g,{color:"link",variant:"outline",onClick:function(){return console.log("Funcionouuuuuuu")},children:e}),Object(s.jsx)("br",{})]},t)}))}),placement:"left",children:Object(s.jsx)(o.q,{color:"link",children:"Alterar m\xeas"})}),Object(s.jsx)(o.q,{children:"Gerar rel\xe1torio"}),Object(s.jsx)(o.q,{children:"Mostrar lista completa..."}),Object(s.jsx)(o.q,{disabled:!0,children:"Mais Ferramentas"})]})]})},f=r(603),h=function(){var e=Object(n.useState)([{img:1,nome:"Ricardo Alves",pontuacao:325},{img:2,nome:"Carla Dias",pontuacao:305},{img:3,nome:"Lucia Carmo",pontuacao:280},{img:4,nome:"Daniel Bragantino",pontuacao:250},{img:5,nome:"Gustavo Antonio",pontuacao:200}]),t=Object(d.a)(e,2),r=t[0];t[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.i,{className:"cardDirRanking",children:Object(s.jsxs)(o.j,{children:[Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)(o.l,{children:" Ranking desafio  "}),Object(s.jsx)(j,{})]}),Object(s.jsx)(f.a,{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)(o.gb,{align:"middle",className:"mb-0  ranking-render",borderless:!0,hover:!0,responsive:!0,children:Object(s.jsx)(o.hb,{children:r.map((function(e,t){return Object(s.jsxs)(o.lb,{children:[Object(s.jsx)(o.ib,{children:Object(s.jsx)(o.e,{src:b,size:"md"})}),Object(s.jsx)(o.ib,{children:Object(s.jsx)("p",{children:e.nome})}),Object(s.jsx)(o.ib,{children:Object(s.jsx)("p",{children:e.pontuacao})})]},t.toString())}))})})]})})})},m=r(184),O=r(690);var x=function(){var e,t=(new Date).getFullYear(),r=(new Date).getMonth(),i=Object(n.useState)([15,16,17,18,19,20,21]),a=Object(d.a)(i,2),u=a[0],b=(a[1],Object(n.useState)({titleAcumulado:"Acumulado mensal",dataAcumulado:[12,32,45,22,54,32,21],titleEncerrado:"Atendimentos Encerrados",dataEncerrado:[6,12,22,11,27,16,10]})),j=Object(d.a)(b,2),f=j[0];return j[1],Object(s.jsx)(o.i,{className:"cardEsquerda",children:Object(s.jsxs)(o.j,{children:[Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)(o.l,{children:"Comparativo"}),Object(s.jsx)(l,{})]}),Object(s.jsxs)("label",{children:[{0:"Janeiro",1:"Fevereiro",2:"Mar\xe7o",3:"Abril",4:"MAio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outubro",10:"Novembro",11:"Dezembro"}[r]," ",t]}),Object(s.jsx)(c.b,{style:{height:"300px",marginTop:"40px"},data:{labels:u,datasets:[{label:"Acumudddlado",backgroundColor:"transparent",borderColor:Object(O.getStyle)("--cui-info"),borderWidth:2,pointHoverBackgroundColor:"#fff",data:f.dataAcumulado,fill:!0},(e={label:"Atendimentos Encerrados",backgroundColor:"transparent",borderColor:Object(O.getStyle)("--cui-success"),pointHoverBackgroundColor:Object(O.getStyle)("--cui-success"),borderWidth:2},Object(m.a)(e,"pointHoverBackgroundColor","#fff"),Object(m.a)(e,"data",f.dataEncerrado),e)]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!0}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},point:{radius:4,hitRadius:10,hoverRadius:4}}})]})})},g=(r(691),Object(n.lazy)((function(){return Promise.all([r.e(4),r.e(5),r.e(28)]).then(r.bind(null,796))})));t.default=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(g,{}),Object(s.jsx)(x,{}),Object(s.jsx)("br",{}),Object(s.jsxs)(o.ab,{children:[Object(s.jsx)(o.m,{children:Object(s.jsx)(u,{})}),Object(s.jsx)(o.m,{children:Object(s.jsx)(h,{})})]})]})}}}]);
//# sourceMappingURL=27.df8d7c54.chunk.js.map