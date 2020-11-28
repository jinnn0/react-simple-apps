(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(19),a(2)),s=a(1);var i=function(e){var t=e.id,a=e.name,n=e.price,c=e.qty,o=e.updateQty;return r.a.createElement("li",{className:"cart-item"},r.a.createElement("span",{className:"item-name"},a),r.a.createElement("span",{className:"item-price"},"\u20ac",n),r.a.createElement("div",{className:"quantity"},r.a.createElement("button",{onClick:function(){o(t,c-1)},disabled:c<=0},"-"),r.a.createElement("span",null,c),r.a.createElement("button",{onClick:function(){o(t,c+1)}},"+")),r.a.createElement("span",{className:"sub-total"},"Total: \u20ac",(c*n).toFixed(2)))},u=[{id:1,name:"Salmon",price:3.99,qty:0},{id:2,name:"Oyster Sauce",price:2.49,qty:0},{id:3,name:"Noodle",price:.8,qty:0}];var m=function(){var e=JSON.parse(window.localStorage.getItem("items")),t=Object(n.useState)(e||u),a=Object(s.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){window.localStorage.setItem("items",JSON.stringify(c))}),[c]);var m=function(e,t){var a=c.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{qty:t}):a}));o(a)},d=c.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2);return r.a.createElement("div",{className:"shoppingCart app-container"},r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"cart-title"},"Shopping Cart"),r.a.createElement("ul",{className:"cart-items"},c.map((function(e){return r.a.createElement(i,Object.assign({key:e.id,updateQty:m},e))}))),r.a.createElement("h1",{className:"grand-total"},r.a.createElement("span",null,"Total: \u20ac"),r.a.createElement("span",null,d))))};var d=function(e){var t=e.currentTime,a=t.second/60*360+90,n=t.minute/60*360+90,c=t.hour/12*360+90;return r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"hour-hand",style:{transform:"rotate(".concat(c,"deg)")}}),r.a.createElement("div",{className:"minute-hand",style:{transform:"rotate(".concat(n,"deg)")}}),r.a.createElement("div",{className:"second-hand",style:{transform:"rotate(".concat(a,"deg)")}}))};var p=function(e){var t=e.currentTime;return r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"time"},t.hour,":",t.minute<10?"0"+t.minute:t.minute),r.a.createElement("div",{className:"day"},t.day,", ",t.month,r.a.createElement("span",{className:"date"},t.date)))},f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var h=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({hour:"",minute:void 0,second:"",day:"",month:"",date:""}),i=Object(s.a)(o,2),u=i[0],m=i[1];Object(n.useEffect)((function(){setTimeout((function(){c(!0)}),1e3)})),Object(n.useEffect)((function(){var e=setInterval(h,1e3);return function(){window.clearInterval(e)}}));var h=function(){var e=new Date,t={day:f[e.getDay()].toUpperCase(),month:v[e.getMonth()].toUpperCase(),date:e.getDate(),second:e.getSeconds(),minute:Number(e.getMinutes()),hour:e.getHours()};m(Object(l.a)(Object(l.a)({},u),t))};return r.a.createElement("div",{className:"clock app-container",style:{visibility:a?"visible":"hidden"}},r.a.createElement("div",{className:"app"},r.a.createElement(d,{currentTime:u}),r.a.createElement(p,{currentTime:u})))},E=a(4),b=a.n(E),N=a(9);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("path",{d:"M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"}),y=function(e){var t=e.svgRef,a=e.title,n=g(e,["svgRef","title"]);return r.a.createElement("svg",O({fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:t},n),a?r.a.createElement("title",null,a):null,j)},k=r.a.forwardRef((function(e,t){return r.a.createElement(y,O({svgRef:t},e))}));a.p;var S=function(e){var t=e.updateSearch,a=e.getQuery;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement("input",{type:"text",placeholder:"search movie..",onChange:function(e){t(e.target.value)}}),r.a.createElement("button",null,r.a.createElement(k,null)))};var C=function(e){var t=e.updateSearch,a=e.getQuery,n=e.bodyDarkMode;return r.a.createElement("header",null,r.a.createElement(S,{updateSearch:t,getQuery:a}),r.a.createElement("div",{className:""},r.a.createElement("input",{type:"checkbox",id:"toggle",className:"toggle-mode-input",onClick:n}),r.a.createElement("label",{className:"toggle-mode",htmlFor:"toggle"})))};var T=function(e){var t=e.movie;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"poster-container"},r.a.createElement("img",{className:"poster",src:t.Poster,alt:""})),r.a.createElement("h3",{className:"title"},t.Title))};var w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)("avengers"),d=Object(s.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(!0),h=Object(s.a)(v,2),E=h[0],O=h[1],g=Object(n.useState)(!1),j=Object(s.a)(g,2),y=j[0],k=j[1];return Object(n.useEffect)((function(){(function(){var e=Object(N.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(p,"&apikey=").concat(75459931));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.Search),O(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),r.a.createElement("div",{className:"movieSearch app-container"},r.a.createElement("div",{className:"app",style:{backgroundColor:y?"#222222":""}},r.a.createElement(C,{updateSearch:function(e){u(e)},getQuery:function(){i.trim()&&(f(i),u(""))},bodyDarkMode:function(){k(!y)}}),E?r.a.createElement("div",{className:"loading"}):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(T,{key:e.imdbID,movie:e})})))))},x=a(3);var M=function(e){var t=e.addTodo,a=Object(n.useState)({id:void 0,task:"",completed:!1}),c=Object(s.a)(a,2),o=c[0],i=c[1];return r.a.createElement("form",{className:"add-todo",onSubmit:function(e){e.preventDefault(),o.task.trim()&&(t(Object(l.a)(Object(l.a)({},o),{},{id:Date.now()})),i(Object(l.a)(Object(l.a)({},o),{},{task:""})))}},r.a.createElement("input",{type:"text",placeholder:"add new todo",onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},{task:e.target.value}))},value:o.task}),r.a.createElement("button",{className:"add"},r.a.createElement("i",{className:"fas fa-plus-circle add-icon"})))};var D=function(e){var t=e.todoItem,a=e.removeTodo,n=e.toggleComplete;return r.a.createElement("li",{className:"todo-item"},r.a.createElement("span",{className:"check"},r.a.createElement("i",{className:"far fa-check-circle check-icon "+(t.completed?"completed":""),onClick:function(){n(t.id)}})),r.a.createElement("span",{className:"task"},t.task),r.a.createElement("span",{className:"trash"},r.a.createElement("i",{className:"fas fa-trash-alt trash-icon",onClick:function(){a(t.id)}})))};var A=function(e){var t=e.todoLists,a=e.removeTodo,n=e.toggleComplete;return r.a.createElement("ul",{className:"todo-items"},t.map((function(e){return r.a.createElement(D,{key:e.id,todoItem:e,removeTodo:a,toggleComplete:n})})))};var I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todo items"));e&&c(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todo items",JSON.stringify(a))}),[a]),r.a.createElement("div",{className:"todoFunctional app-container"},r.a.createElement("h1",null," Todo - Functional component"),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"title"},r.a.createElement("i",{className:"far fa-clipboard todo-icon"}),"Todo"),r.a.createElement(M,{addTodo:function(e){c([].concat(Object(x.a)(a),[e]))}}),r.a.createElement(A,{todoLists:a,removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))},toggleComplete:function(e){var t=a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));c(t)}})))},L=a(5),q=a(6),J=a(8),X=a(7);var F=function(e){var t=e.todo,a=e.completeTodo,n=e.handleComplet,c=e.removeTodo;return n=function(){a(t.id)},r.a.createElement("ul",{className:"todo-items"},r.a.createElement("li",{className:"todo-item"},r.a.createElement("span",{className:"check"},r.a.createElement("i",{className:"far fa-check-circle check-icon "+(t.completed?"completed":""),onClick:n})),r.a.createElement("span",{className:"task"},t.task),r.a.createElement("span",{className:"trash"},r.a.createElement("i",{className:"fas fa-trash-alt trash-icon",onClick:c}))))},Q=function(e){Object(J.a)(a,e);var t=Object(X.a)(a);function a(){var e;Object(L.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todo:{task:""}},e.handleChange=function(t){e.setState({todo:{task:t.target.value}})},e.handleSubmit=function(t){t.preventDefault();var a=Object(l.a)(Object(l.a)({},e.state.todo),{},{id:Date.now(),completed:!1});e.props.addTodo(a),e.setState({todo:{task:""}})},e}return Object(q.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"add-todo",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"new todo..",value:this.state.todo.task,onChange:this.handleChange}),r.a.createElement("button",{className:"add"},r.a.createElement("i",{className:"fas fa-plus-circle add-icon"})))}}]),a}(r.a.Component);var R=function(e){var t=e.todos,a=e.handleTodosToShow,n=e.handleDeleteAllCompleted;return r.a.createElement("div",{className:"controllers"},r.a.createElement("button",{className:"btn",onClick:function(){return a("all")}},"all todos"),r.a.createElement("button",{className:"btn",onClick:function(){return a("active")}},"active todos"),r.a.createElement("button",{className:"btn",onClick:function(){return a("completed")}},"completed todos"),t.some((function(e){return e.completed}))?r.a.createElement("button",{className:"btn",onClick:n},"delete all completed todos"):null,r.a.createElement("div",{className:"btn"},"todos left: ",t.filter((function(e){return!e.completed})).length))},W=function(e){Object(J.a)(a,e);var t=Object(X.a)(a);function a(){var e;Object(L.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],todosToShow:"all"},e.updateLocalStorage=function(){localStorage.setItem("todos",JSON.stringify(e.state.todos))},e.addTodo=function(){var t=Object(N.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({todos:[].concat(Object(x.a)(e.state.todos),[a])});case 2:e.updateLocalStorage();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.removeTodo=function(){var t=Object(N.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({todos:e.state.todos.filter((function(e){return e.id!==a}))});case 2:e.updateLocalStorage();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.completeTodo=function(){var t=Object(N.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.todos.map((function(e){return e.id===a?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e})),t.next=3,e.setState({todos:n});case 3:e.updateLocalStorage();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDeleteAll=function(){e.setState({todos:[]})},e.handleShowActive=function(){var t=e.state.todos.filter((function(e){return!e.cpmpleted}));e.setState({todos:t})},e.handleAllComplete=function(){var t=e.state.todos.map((function(e){return e.completed?e:Object(l.a)(Object(l.a)({},e),{},{completed:!0})}));e.setState({todos:t})},e.handleTodosToShow=function(t){e.setState({todosToShow:t})},e.handleDeleteAllCompleted=function(){e.setState({todos:e.state.todos.filter((function(e){return!e.completed}))})},e}return Object(q.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos"));e&&this.setState({todos:e})}},{key:"render",value:function(){var e=this,t=this.state.todos.filter((function(t){return"all"===e.state.todosToShow?t:"active"===e.state.todosToShow?!t.completed:"completed"===e.state.todosToShow?t.completed:t}));return r.a.createElement("div",{className:"todoClass todoFunctional app-container"},r.a.createElement("h1",{className:"app-title"},"Todo - class component"),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"title"},r.a.createElement("i",{className:"far fa-clipboard todo-icon"}),"Todo"),r.a.createElement(Q,{addTodo:this.addTodo}),t.map((function(t){return r.a.createElement(F,{todo:t,key:t.id,completeTodo:e.completeTodo,removeTodo:function(){return e.removeTodo(t.id)}})}))),r.a.createElement(R,{todos:this.state.todos,handleTodosToShow:this.handleTodosToShow,handleDeleteAllCompleted:this.handleDeleteAllCompleted})))}}]),a}(r.a.Component);var P=function(e){var t=e.value,a=e.handleClick;return r.a.createElement("button",{className:"square",onClick:function(){return a()}},t)};var V=function(e){var t=e.squares,a=e.handleClick;return r.a.createElement("div",{className:"board-grid"},t.map((function(e,n){return r.a.createElement(P,{key:n,value:t[n],handleClick:function(){return a(n)}})})))};function G(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(s.a)(t[a],3),r=n[0],c=n[1],o=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return console.log("winner.."),e[r]}return null}var z=function(e){Object(J.a)(a,e);var t=Object(X.a)(a);function a(){var e;Object(L.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={history:[Array(9).fill(null)],isXNext:!0,currentMove:0},e.handleClick=function(t){var a=e.state.history.slice(0,e.state.currentMove+1),n=a[e.state.currentMove],r=Object(x.a)(n);n[t]||G(n)||(r[t]=e.state.isXNext?"X":"O",e.setState({history:[].concat(Object(x.a)(a),[r]),isXNext:!e.state.isXNext,currentMove:a.length}))},e}return Object(q.a)(a,[{key:"render",value:function(){var e=this.state.history.slice(0,this.state.currentMove+1)[this.state.currentMove],t=G(e),a=this.state.isXNext?"X":"O",n=t?"Winner: "+t:"Next player: "+a;return r.a.createElement("div",{className:"ticTacToe app-container"},r.a.createElement("h1",{className:"game-title"},"Tic Tac Toe - Class component"),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"game-board"},r.a.createElement(V,{squares:e,handleClick:this.handleClick})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"status"},n))))}}]),a}(r.a.Component);var B=function(e){var t=e.value,a=e.isWinner,n=e.handleClick;return r.a.createElement("div",{className:"square"+(a?" winner":""),onClick:n},t)};var U=function(e){for(var t=e.board,a=e.handleClick,n=e.winners,c=function(e){return r.a.createElement(B,{key:e,value:t[e],isWinner:n.includes(e),handleClick:function(){return a(e)}})},o=[],l=0;l<3;l++){for(var s=[],i=0;i<3;i++)s.push(c(3*l+i));o.push(r.a.createElement("div",{key:l,className:"board-row"},s))}return r.a.createElement("div",{className:"game-board"},r.a.createElement("div",{className:"board-grid remove-grid"},o))};var H=function(e){var t=e.className,a=e.text,n=e.jumpTo;return r.a.createElement("li",{className:t,onClick:n}," ",a)};var K=function(e){var t,a=e.winnerValue,n=e.isXNext,c=e.history,o=e.currenMove,l=e.isAscending,s=e.jumpTo,i=e.sortMoves,u=c[c.length-1].board;t=a?"Winner: "+a:u.includes(null)?"Next player: "+(n?"X":"O"):"Game ended in draw try again!";var m=c.map((function(e,t){var a=t?"Go back to move #R".concat(c[t].location[0]," C").concat(c[t].location[1]):"Go back to start",n=t===o?"selected":"";return r.a.createElement(H,{key:t,text:a,className:n,jumpTo:function(){return s(t)}})}));return r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"status"},t),r.a.createElement("div",{className:"sort-btn"+(l?"":" up"),onClick:function(){return i()}})),r.a.createElement("ol",null,l?m:m.reverse()))};var Y=function(){var e=Object(n.useState)([{board:Array(9).fill(null),location:null}]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(s.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)(!0),d=Object(s.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(!0),h=Object(s.a)(v,2),E=h[0],b=h[1],N=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(s.a)(t[a],3),r=n[0],c=n[1],o=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return console.log("winner.."),{winnerValue:e[r],winners:[r,c,o]}}return null}(a[i].board);return r.a.createElement("div",{className:"ticTacToe app-container"},r.a.createElement("h1",{className:"game-title"},"Tic Tac Toe - Functional component"),r.a.createElement("div",{className:"app"},r.a.createElement(U,{board:a[i].board,handleClick:function(e){var t=a.slice(0,i+1),n=t[t.length-1].board,r=Object(x.a)(n);N||r[e]||(r[e]=p?"X":"O",c([].concat(Object(x.a)(t),[{board:r,location:[[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]][e]}])),f(!p),u(t.length))},winners:N?N.winners:[]}),r.a.createElement(K,{history:a,winnerValue:N?N.winnerValue:null,isXNext:p,currenMove:i,jumpTo:function(e){u(e),f(e%2===0)},isAscending:E,sortMoves:function(){b(!E)}})))};var Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(W,null),r.a.createElement(z,null),r.a.createElement(Y,null))};o.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dd0662c4.chunk.js.map