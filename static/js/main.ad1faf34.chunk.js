(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),o=(a(10),a(1)),l=a(4);var s=function(e){var t=e.id,a=e.name,n=e.price,r=e.qty,i=e.updateQty;return c.a.createElement("li",{className:"cart-item"},c.a.createElement("span",{className:"item-name"},a),c.a.createElement("span",{className:"item-price"},"\u20ac",n),c.a.createElement("div",{className:"quantity"},c.a.createElement("button",{onClick:function(){i(t,r-1)},disabled:r<=0},"-"),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){i(t,r+1)}},"+")),c.a.createElement("span",{className:"sub-total"},"Total: \u20ac",(r*n).toFixed(2)))};var m=function(e){var t=e.initialItems,a=JSON.parse(window.localStorage.getItem("items")),r=Object(n.useState)(a||t),i=Object(l.a)(r,2),m=i[0],u=i[1];Object(n.useEffect)((function(){window.localStorage.setItem("items",JSON.stringify(m))}),[m]);var d=function(e,t){var a=m.map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{qty:t}):a}));u(a)},p=m.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2);return c.a.createElement("div",{className:"cart"},c.a.createElement("h1",{className:"cart-title"},"Shopping Cart"),c.a.createElement("ul",{className:"cart-items"},m.map((function(e){return c.a.createElement(s,Object.assign({key:e.id,updateQty:d},e))}))),c.a.createElement("h1",{className:"grand-total"},c.a.createElement("span",null,"Total: \u20ac"),c.a.createElement("span",null,p)))},u=[{id:1,name:"Salmon",price:3.99,qty:0},{id:2,name:"Oyster Sauce",price:2.49,qty:0},{id:3,name:"Noodle",price:.8,qty:0}];var d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{initialItems:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.ad1faf34.chunk.js.map