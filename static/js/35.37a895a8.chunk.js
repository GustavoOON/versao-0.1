(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[35],{781:function(e,n,o){"use strict";o.r(n);var s=o(53),t=o(0),c=o(767),r=o.n(c),a=o(2);n.default=function(){var e=Object(t.useState)(0),n=Object(s.a)(e,2),o=n[0],c=n[1],u=Object(t.useState)(),l=Object(s.a)(u,2),i=l[0],b=l[1],p=r()("ws://localhost:40510",{onOpen:function(){return console.log("Connected to App WS")},onMessage:function(){d&&(console.log(d),b(d),c(d.n))},onError:function(e){console.error(e)},shouldReconnect:function(e){return!0},reconnectInterval:1e3}),d=p.lastJsonMessage;p.sendMessage;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("h2",{children:["Testando socket web ",o," depois  ",i," "]})})}}}]);
//# sourceMappingURL=35.37a895a8.chunk.js.map