(this["webpackJsonpapp-1"]=this["webpackJsonpapp-1"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(15),a=n.n(r),o=(n(21),n(5)),i=(n(22),n(16)),u=n.n(i),j=(n(41),n(42),n(0)),h=function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(j.jsx)("h1",{children:e.monster.name}),Object(j.jsx)("p",{children:e.monster.email})]})},l=function(e){return Object(j.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(j.jsx)(h,{monster:e},e.id)}))})},d=(n(44),function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(o.a)(r,2),i=a[0],h=a[1],b=Object(c.useState)(""),p=Object(o.a)(b,2),f=p[0],m=p[1];return u.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return s(e.data)})),Object(c.useEffect)((function(){n&&h(n.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())})))}),[n,f]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Monsters Rolodex"}),Object(j.jsx)(d,{placeholder:"search monsters",handleChange:function(e){return m(e.target.value)}}),i&&Object(j.jsx)(l,{monsters:i,search:f})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[45,1,2]]]);
//# sourceMappingURL=main.54148195.chunk.js.map