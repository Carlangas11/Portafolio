(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(18),i=t.n(a),r=t(7),s=(t(25),t(20)),o=t(12),l=t(2),d=(t(26),t(1)),j=function(){return Object(d.jsx)("h1",{children:"Carlangas"})},b=(t(28),function(e){var n=e.min,t=e.max,c=e.name,a=e.img,i=e.onClose,s=e.id;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{id:"closeIcon",className:"row",children:Object(d.jsx)("button",{onClick:i,className:"btn btn-sm btn-danger",children:"X"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)(r.b,{to:"/ciudad/".concat(s),children:Object(d.jsx)("h5",{className:"card-title",children:c})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(d.jsx)("p",{children:"Min"}),Object(d.jsxs)("p",{children:[n,"\xb0"]})]}),Object(d.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(d.jsx)("p",{children:"Max"}),Object(d.jsxs)("p",{children:[t,"\xb0"]})]}),Object(d.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:Object(d.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+a+"@2x.png",width:"80",height:"80",alt:""})})]})]})]})}),u=(t(34),function(e){var n=e.cities,t=e.onClose;return Object(d.jsx)("div",{className:"cards",children:n.map((function(e){return Object(d.jsx)(b,{max:e.max,min:e.min,name:e.name,img:e.img,id:e.id,onClose:function(){return t(e.id)}},e.id)}))})}),m=function(e){var n=e.onSearch,t=Object(c.useState)(""),a=Object(o.a)(t,2),i=a[0],r=a[1];return Object(d.jsxs)("form",{class:"d-flex",onSubmit:function(e){return function(e){e.preventDefault(),n(i)}(e)},children:[Object(d.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:i,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("button",{type:"submit",class:"btn btn-warning",children:"Search"})]})},h=(t(35),function(e){var n=e.onSearch;return Object(d.jsx)("nav",{className:"navbar navbar-light bg-light",id:"colorNav",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("a",{class:"navbar-brand",children:"Weather App"})}),Object(d.jsx)(r.b,{to:"/About",children:" About "}),Object(d.jsx)(m,{onSearch:n})]})})}),x=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1];function i(e){a((function(n){return n.filter((function(n){return n.id!=e}))}))}function r(e){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("74e10aab71c1eb7d76331db9a40509cf","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var n={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};a((function(e){return[].concat(Object(s.a)(e),[n])}))}else alert("Ciudad no encontrada")}))}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l.a,{path:"/",render:function(){return Object(d.jsx)(h,{onSearch:r})}}),Object(d.jsx)(l.a,{path:"/About",component:j}),Object(d.jsx)("div",{children:Object(d.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(u,{cities:t,onClose:i})}})})]})};i.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d6bcf6fb.chunk.js.map