(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=(a(41),a(9),a(20)),s=a(1),m=a(21),i=a(12),u=a(13),p=a(16),d=a(14),b=a(17),v=a(33),h=(a(61),v.initializeApp({apiKey:"AIzaSyANc65OPWZfZXT39U0-MdBc46lQ_YeI1v0",authDomain:"converterapps.firebaseapp.com",databaseURL:"https://converterapps.firebaseio.com",projectId:"converterapps",storageBucket:"converterapps.appspot.com",messagingSenderId:"817492330284"})),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currencies:["USD","AUD","SGD","PHP","EUR","RUB"],base:"USD",amount:"",convertTo:"RUB",result:"",date:""},a.handleSelect=function(e){var t;a.setState((t={},Object(m.a)(t,e.target.name,e.target.value),Object(m.a)(t,"result",null),t),a.calculate)},a.handleInput=function(e){a.setState({amount:e.target.value,result:null,date:null},a.calculate)},a.calculate=function(){var e=a.state.amount;e!==isNaN&&fetch("https://api.exchangeratesapi.io/latest?base=".concat(a.state.base)).then(function(e){return e.json()}).then(function(t){var n=t.date,r=(t.rates[a.state.convertTo]*e).toFixed(4);a.setState({result:r,date:n})})},a.handleSwap=function(e){var t=a.state.base,n=a.state.convertTo;e.preventDefault(),a.setState({convertTo:t,base:n,result:null},a.calculate)},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.base,n=e.amount,l=e.convertTo,c=e.result,o=e.date;return r.a.createElement("div",null,r.a.createElement("div",{class:"SignOutHome"},r.a.createElement("button",{className:"btn btn-outline-light",onClick:function(){return h.auth().signOut()}},"Sign out")),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",{className:"pl-3"},n," ",a," ="," "===n?"0":null===c?"Calculating...":c," ",l),r.a.createElement("p",{className:"pl-3"},""===n?"":null===o?"":o),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("form",{className:"form-inline mb-4"},r.a.createElement("input",{type:"number",value:n,onChange:this.handleInput,className:"form-control form-control-lg mx-3"}),r.a.createElement("select",{name:"base",value:a,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("form",{className:"form-inline mb-4"},r.a.createElement("input",{disabled:!0,value:""===n?"0":null===c?"Calculating...":c,className:"form-control form-control-lg mx-3"}),r.a.createElement("select",{name:"convertTo",value:l,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))))))))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={curses:0},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=RUB").then(function(e){return e.json()}).then(function(t){console.log(t.rates),e.setState({curses:t.rates})})}},{key:"render",value:function(){var e=this.state.curses;return r.a.createElement("div",null,r.a.createElement("div",{class:"SignOutWelcome convErter"},r.a.createElement("div",{class:"converterWord"},"Converter"),r.a.createElement("div",null,r.a.createElement("a",{href:"/login",className:"btn btn-outline-light",role:"button","aria-pressed":"true"},"Log In"),r.a.createElement("a",{href:"/signup",className:"btn btn-outline-light",role:"button","aria-pressed":"true"},"Sign Up"))," "),r.a.createElement("div",{className:"cursesBlock container me-5"},r.a.createElement("div",{className:"col-lg-4 mx-auto card card-body marginTop"},r.a.createElement("h2",{className:"pl-2"},"Currency rate RUB:"),r.a.createElement("div",{className:"pl-2 textRub"},"1 EUR = ",(1/e.EUR).toFixed(4)," RUB"),r.a.createElement("div",{className:"pl-2 textRub"},"1 USD = ",(1/e.USD).toFixed(4)," RUB"),r.a.createElement("div",{className:"pl-2 textRub"},"1 GBP = ",(1/e.GBP).toFixed(4)," RUB"),r.a.createElement("div",{className:"pl-2 textRub"},"1 CNY = ",(1/e.CNY).toFixed(4)," RUB"),r.a.createElement("div",{className:"pl-2 textRub"},"1 JPY = ",(1/e.JPY).toFixed(6)," RUB"))))}}]),t}(n.Component),g=Object(s.f)(f),N=a(8),y=a.n(N),x=a(15),O=a(24),j=r.a.createContext(),w=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(O.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(!0),m=Object(O.a)(s,2),i=m[0],u=m[1];return Object(n.useEffect)(function(){h.auth().onAuthStateChanged(function(e){o(e),u(!1)})},[]),i?r.a.createElement(r.a.Fragment,null,"Loading..."):r.a.createElement(j.Provider,{value:{currentUser:c}},t)},S=Object(s.f)(function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(x.a)(y.a.mark(function e(a){var n,r,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,l=n.password,e.prev=2,e.next=5,h.auth().signInWithEmailAndPassword(r.value,l.value);case 5:t.push("/home"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(j).currentUser?r.a.createElement(s.a,{to:"/home"}):r.a.createElement("div",null,r.a.createElement("div",{className:"SignOutHome"},r.a.createElement("a",{href:"/",className:"btn btn-outline-light",role:"button","aria-pressed":"true"},"Back")),r.a.createElement("div",{className:"card card-body col-3 mx-auto marginTop"},r.a.createElement("h2",{className:"pl-2"},"Log in"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",{className:"pr-4"},r.a.createElement("input",{className:"form-control",name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",{className:"pr-4"},r.a.createElement("input",{className:"form-control",name:"password",type:"password",placeholder:"Password"})),r.a.createElement("div",{class:"buttons"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Log in"),r.a.createElement("a",{href:"/signup",className:"btn btn-outline-secondary",role:"button","aria-pressed":"true"},"Go to SignUp")))))}),U=Object(s.f)(function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(x.a)(y.a.mark(function e(a){var n,r,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,l=n.password,e.prev=2,e.next=5,h.auth().createUserWithEmailAndPassword(r.value,l.value);case 5:t.push("/home"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",null," ",r.a.createElement("div",{className:"SignOutHome"},r.a.createElement("a",{href:"/",className:"btn btn-outline-light",role:"button","aria-pressed":"true"},"Back")),r.a.createElement("div",{className:"card card-body col-3 mx-auto marginTop"},r.a.createElement("h2",{className:"pl-2"},"Sign up"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",{className:"pr-4"},r.a.createElement("input",{className:"form-control",name:"Name",type:"text",placeholder:"Name"})),r.a.createElement("label",{className:"pr-4"},r.a.createElement("input",{className:"form-control",name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",{className:"pr-4"},r.a.createElement("input",{className:"form-control",name:"password",type:"password",placeholder:"Password"})),r.a.createElement("label",{className:"PaddingFile"},r.a.createElement("input",{type:"file",class:"fileInHidden",id:"fileAdd"}),r.a.createElement("div",{class:"addFile"},r.a.createElement("label",{for:"fileAdd",className:"btn btn-light card card-body AddFileFat"},"Choose file"))),r.a.createElement("div",{class:"buttons"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Sign Up"),r.a.createElement("a",{href:"/login",className:"btn btn-outline-secondary",role:"button","aria-pressed":"true"},"Go to LogIn")))))}),k=a(35),C=function(e){var t=e.component,a=Object(k.a)(e,["component"]),l=Object(n.useContext)(j).currentUser;return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))},B=function(){return r.a.createElement(w,null,r.a.createElement(o.a,{basename:"/lab5/build"},r.a.createElement("div",null,r.a.createElement(s.b,{exact:!0,path:"/",component:g}),r.a.createElement(s.b,{exact:!0,path:"/login",component:S}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:U}),r.a.createElement(C,{exact:!0,path:"/home",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.41b35b91.chunk.js.map