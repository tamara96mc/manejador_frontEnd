(this.webpackJsonpmanejador=this.webpackJsonpmanejador||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"id":1,"proyecto":"Entrada","tipo":"incidencia"},{"id":2,"proyecto":"Entrada","tipo":"Consulta"},{"id":3,"proyecto":"Entrada","tipo":"Servicio"},{"id":4,"proyecto":"Gestic","tipo":"incidencia"},{"id":5,"proyecto":"Gestic","tipo":"Consulta"},{"id":6,"proyecto":"Gestic","tipo":"Servicio"},{"id":4,"proyecto":"Cau","tipo":"incidencia"},{"id":5,"proyecto":"Cau","tipo":"Consulta"},{"id":6,"proyecto":"Cau","tipo":"Servicio"}]')},33:function(e){e.exports=JSON.parse('[{"id":1,"nombre":"Maria Toledo","telefono":"642 467 805"},{"id":2,"nombre":"Luis Matinez","telefono":"644 467 805"},{"id":3,"nombre":"Marta Cuenca","telefono":"612 467 805"},{"id":4,"nombre":"Claudia Sanz","telefono":"642 654 805"},{"id":5,"nombre":"Sofia Tolosa","telefono":"642 123 805"},{"id":6,"nombre":"Roberto Moreno","telefono":"642 467 353"},{"id":7,"nombre":"Hector Sevilla","telefono":"643 467 234"},{"id":8,"nombre":"Paco Leon","telefono":"634 412 405"}]')},38:function(e,c,t){},39:function(e,c,t){},42:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(18),i=t.n(s),r=(t(38),t(12)),l=t(3),o=(t(39),t(2)),j=t(0),d=function(e){var c=Object(l.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"nav-button",onClick:function(){c(e.url)},children:e.destino})})},b=t.p+"static/media/icon_logo.d093b38f.jpg";var A=function(e){var c=Object(n.useState)(!1),t=Object(o.a)(c,2),a=t[0];t[1];return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:b,className:"img-logo"}),Object(j.jsx)("div",{className:"navigation",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"Jira",url:"/jiras"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"Clientes",url:"/clientes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"Proyectos",url:"/proyectos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"Campos",url:"/campos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"LogIn",url:"/login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"SingUp",url:"/register"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d,{destino:"User",url:"/profile"})})]})}),Object(j.jsx)("style",{jsx:!0,children:"\n\n        .header{\n        background-color: rgb(204, 107, 107);;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n\n        }\n\n        .navigation{\n        background-color: rgb(204, 107, 107);;\n        width: 100%;\n        height: 4em;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        }\n\n\n        .navigation ul{\n        margin:0;\n        padding:0;\n        display: flex;\n       justify-content: space-between;\n        align-items: center;\n        overflow: hidden;\n        width: 100%;\n        }\n        .navigation ul li{\n        list-style-type: none;\n      // margin:2em;\n       \n        }\n        \n        .hamburger1{\n        display: none;\n        z-index: 6;\n    \n        } \n    // @media (max-width: 923px){\n\n    //     .hamburger1{\n    //     width: 7em;\n    //     display:flex;\n    //     z-index: 6;\n    //     }\n       \n    //     .navigation ul{\n    //     display: ".concat(a?"flex":"none",";\n    //     background-color: #008080;\n    //     height: 100%;\n    //     width: 8em;\n    //     position: fixed;\n    //     top: 0;\n    //     right: 0;\n    //     margin-top:1em;\n    //     flex-direction: column;\n    //     justify-content: center;\n    //     align-items: center;\n\n    //     }\n\n    //     .navigation ul li{\n    //     list-style-type: none;\n    //        margin:0.5em;\n    // }\n")})]})},m=function(){return Object(j.jsxs)("div",{className:"container-component",children:[Object(j.jsx)("h1",{children:"Datos Jira"}),Object(j.jsxs)("form",{className:"form-datos-jira",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Nombre"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Nombre de la instancia Jira.."})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Tipo"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsxs)("select",{className:"tipo_jira",children:[Object(j.jsx)("option",{value:"Jira Cloud",children:"Jira Cloud"}),Object(j.jsx)("option",{value:"Jira Server",children:"Jira Server"}),Object(j.jsx)("option",{value:"Jira Data Center",children:"Jira Data Center"})]})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"URL Base"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{type:"text",id:"url",name:"url",placeholder:"https://example.atlassian.net/jira"})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Usuario"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{type:"text",id:"usuario",name:"usuario",placeholder:"Usuario jira.."})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Contrase\xf1a"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{type:"text",id:"contraseya",name:"contraseya",placeholder:"Contrase\xf1a de usuario.."})})]}),Object(j.jsx)("div",{className:"mt-3 basics_row",children:Object(j.jsx)("button",{className:"send-button btn-jira",onClick:function(){},children:"Guardar"})})]})]})},u=function(){return Object(j.jsxs)("div",{className:"container-component",children:[Object(j.jsx)("h1",{children:"Vincular con WhatsApp"}),Object(j.jsxs)("div",{className:"row row-qr",children:[Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsxs)("p",{className:"p-info-manejador",children:["Para poder vincular el n\xfamero de tel\xe9fono al manejador de JIRA tienes que pulsar el bot\xf3n de ",Object(j.jsx)("b",{children:"'Generar QR'"})," y despu\xe9s escanear el c\xf3digo con tu aplicacion de WhatsApp en: ",Object(j.jsx)("br",{})," ",Object(j.jsxs)("i",{children:["Dispositivos vinculados ",">"," Vincular un dispositivo"]})," "]}),Object(j.jsxs)("div",{className:"basics_row",children:[Object(j.jsx)("label",{children:"Tel\xe9fono"}),Object(j.jsx)("input",{type:"text",id:"telefono",name:"telefono",placeholder:"645 234 567"})]})]}),Object(j.jsx)("div",{className:"col-50 card-img",children:Object(j.jsx)("img",{className:"img-qr",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAZAAQMAAAAbwhzkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURQAAAP7+/soH9D0AAAYwSURBVHja7dyxcYNAEAVQPA4UugRKoTRcGqW4BIcKNMKBcABzXu8JhIXn/UwSJ/Zt/Oea8Z+kAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAXkiyGdTn77iaHt79nLHa1oQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEJA9IC+ZVvolhHS3b88hpE+130FAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQP4AMmQK7vNpruVme80OppxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECOCeluH1PdeBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQkGND4pvaQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBADgYJE0OG+TTh0TggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QqqSgpS78TUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQF5LGRF4h2MjwoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMhGkPI0izvTP6Ju/IosLnk/b1/yBwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB+RVyz1+mdjDlEu6gW4wKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB6Scc1hp76MdjCGk3I0f5jsAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQHZBRJ348PhYkhNrb6rWTIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMi2kB8yPfTRJFKepnz07fbjdX40tT4QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEJCtICuSqtWndjDllHotCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIRpDPpj797B+umSOv08PvGcj0sQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAdkD8pJppV/mkMXRYT5VuRtf3kFXU8kHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQF5DGQoltbbImQxzYpMkMVN7SAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAeDnMZEype8p46CgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA8AeSem9pr0oKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOwJSU0zh3ynW7yvOM17ceRurAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMi2kKr00dFTZgdTrjU7AAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB2RhyvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArMkXJlylJdANIpEAAAAASUVORK5CYII="})})]}),Object(j.jsx)("div",{className:"row row-qr",children:Object(j.jsx)("div",{className:"col-100",children:Object(j.jsx)("button",{className:"send-button btn-qr",onClick:function(){},children:"Generar QR"})})})]})},O=function(e){return Object(j.jsxs)("div",{className:"container-jira",children:[Object(j.jsx)("div",{className:"row border",children:Object(j.jsx)("div",{className:"col-100",children:Object(j.jsx)(m,{})})}),Object(j.jsx)("div",{className:"row border ",children:Object(j.jsx)("div",{className:"col-100",children:Object(j.jsx)(u,{})})})]})},h=t(5),x=t.n(h),p=t(9),g=t(10),C=t(15),E=t.n(C),B=t(8),Q="...",v=function(e,c){var t=c-e+1;return Array.from({length:t},(function(c,t){return t+e}))},I=(t(42),function(e){var c=e.onPageChange,t=e.totalCount,a=e.siblingCount,s=void 0===a?1:a,i=e.currentPage,r=e.pageSize,l=e.className,o=function(e){var c=e.totalCount,t=e.pageSize,a=e.siblingCount,s=void 0===a?1:a,i=e.currentPage;return Object(n.useMemo)((function(){var e=Math.ceil(c/t);if(s+5>=e)return v(1,e);var n=Math.max(i-s,1),a=Math.min(i+s,e),r=n>2,l=a<e-2,o=1,j=e;if(!r&&l){var d=v(1,3+2*s);return[].concat(Object(B.a)(d),[Q,e])}if(r&&!l){var b=v(e-(3+2*s)+1,e);return[o,Q].concat(Object(B.a)(b))}if(r&&l){var A=v(n,a);return[o,Q].concat(Object(B.a)(A),[Q,j])}}),[c,t,s,i])}({currentPage:i,totalCount:t,siblingCount:s,pageSize:r});if(0===i||o.length<2)return null;var d=o[o.length-1];return Object(j.jsxs)("ul",{className:E()("pagination-container",Object(g.a)({},l,l)),children:[Object(j.jsx)("li",{className:E()("pagination-item",{disabled:1===i}),onClick:function(){c(i-1)},children:Object(j.jsx)("div",{className:"arrow left"})}),o.map((function(e){return e===Q?Object(j.jsx)("li",{className:"pagination-item dots",children:"\u2026"}):Object(j.jsx)("li",{className:E()("pagination-item",{selected:e===i}),onClick:function(){return c(e)},children:e})})),Object(j.jsx)("li",{className:E()("pagination-item",{disabled:i===d}),onClick:function(){c(i+1)},children:Object(j.jsx)("div",{className:"arrow right"})})]})}),f=t(31),N=function(){var e=Object(n.useState)(0),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),r=i[0],l=i[1];Object(n.useEffect)((function(){l(f),a(1)}),[]);var d=Object(n.useMemo)((function(){var e=5*(t-1),c=e+5;return r.slice(e,c)}),[t]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"mb-2",children:"Proyectos de Jira"}),d?Object(j.jsxs)("div",{className:"basics_column",children:[Object(j.jsxs)("table",{className:"table-responsive mt-1 mb-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Proyecto"}),Object(j.jsx)("th",{children:"Tipo de tarea"})]})}),Object(j.jsx)("tbody",{children:d.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.proyecto}),Object(j.jsx)("td",{children:e.tipo})]},e._id)}))})]}),Object(j.jsx)(I,{className:"pagination-bar",currentPage:t,totalCount:r.length,pageSize:5,onPageChange:function(e){return a(e)}}),Object(j.jsx)("button",{className:"send-button btn-proyectos",onClick:function(){},children:"Actualizar"})]}):Object(j.jsx)("div",{className:"img-load",children:Object(j.jsx)("p",{className:"no-pedidos",children:"A\xfan no hay proyectos"})})]})},y=function(){var e=Object(n.useState)([{name:"",email:""}]),c=Object(o.a)(e,2),t=c[0],a=c[1],s=function(e,c){var n=Object(B.a)(t);n[e][c.target.name]=c.target.value,a(n)};return Object(j.jsxs)("div",{className:"container container-campos",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"mb-4 mt-3",children:"Campos personalizados"}),Object(j.jsxs)("form",{className:"form-campos",onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(t))},children:[Object(j.jsxs)("p",{className:"p-info-campos",children:["En esta pantalla podemos configurar los campos personalidos de Jira, ",Object(j.jsx)("br",{})," los cuales pueden ser utilizados en los clientes para a\xf1adir m\xe1s informaci\xf3n al ticket en su creaci\xf3n.",Object(j.jsx)("br",{})," En la caja izquierda ponemos el indetificador del campo en Jira y en la otra el nombre del campo. "]}),t.map((function(e,c){return Object(j.jsxs)("div",{className:"row row-campos",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("input",{type:"text",id:"id",name:"id",placeholder:"ID del campo",value:e.email||"",onChange:function(e){return s(c,e)}})}),Object(j.jsx)("span",{}),Object(j.jsx)("div",{className:"col-50",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Nombre del campo",value:e.email||"",onChange:function(e){return s(c,e)}})}),Object(j.jsx)("div",{className:"col-10",children:c?Object(j.jsx)("button",{type:"button",className:"send-button btn-remove",onClick:function(){return function(e){var c=Object(B.a)(t);c.splice(e,1),a(c)}(c)},children:"X"}):null})]},c)})),Object(j.jsx)("button",{className:"send-button btn-campos",type:"button",onClick:function(){a([].concat(Object(B.a)(t),[{name:"",email:""}]))},children:"A\xf1adir campo"})]})]}),Object(j.jsx)("div",{className:"basics_row_space mt-5",children:Object(j.jsx)("button",{className:"send-button btn-campos",type:"submit",children:"Guardar"})})]})},w=t(11),S=function(e,c){var t=Object(n.useState)({email:"",password:""}),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)({}),l=Object(o.a)(r,2),j=l[0],d=l[1],b=Object(n.useState)(!1),A=Object(o.a)(b,2),m=A[0],u=A[1];return Object(n.useEffect)((function(){0===Object.keys(j).length&&m&&e()}),[j]),{handleChange:function(e){var c=e.target,t=c.name,n=c.value;i(Object(w.a)(Object(w.a)({},s),{},Object(g.a)({},t,n)))},handleSubmit:function(e){e.preventDefault(),d(c(s)),u(!0)},values:s,errors:j}};function k(e){var c={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(c.email="El correo no es valido"):c.email="Complete este campo",e.password?e.password.length<6&&(c.password="La contrese\xf1a debe de tener al menos 6 caracteres"):c.password="Complete este campo",c}function J(e){var c={};return e.name||(c.name="Complete este campo"),e.email?/\S+@\S+\.\S+/.test(e.email)||(c.email="El correo no es valido"):c.email="Complete este campo",e.password?e.password.length<8&&(c.password="La contrese\xf1a debe de tener al menos 8 caracteres"):c.password="Complete este campo",e.rol||(c.rol="Complete este campo"),c}t(30);var M=function(e){Object(l.f)();var c=Object(n.useState)(""),t=Object(o.a)(c,2),a=t[0],s=(t[1],function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),i=S(s,k),r=i.handleChange,d=i.handleSubmit,b=i.values,A=i.errors;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"form-user",children:[Object(j.jsx)("h1",{className:"mb-2",children:"Login"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Usuario"})}),Object(j.jsxs)("div",{className:"col-60",children:[Object(j.jsx)("input",{className:"".concat(A.email&&"inputError"),name:"email",type:"email",placeholder:"email",value:b.email,onChange:r}),A.email&&Object(j.jsx)("p",{className:"error",children:A.email})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Contrase\xf1a"})}),Object(j.jsxs)("div",{className:"col-60",children:[Object(j.jsx)("input",{className:"".concat(A.password&&"inputError"),name:"password",type:"password",placeholder:"password",value:b.password,onChange:r}),A.password&&Object(j.jsx)("p",{className:"error",children:A.password})]})]}),Object(j.jsxs)("div",{className:"basics_column mt-3",children:[Object(j.jsx)("div",{className:"info",children:a}),Object(j.jsx)("div",{className:"send-button",onClick:d,children:"Login"})]})]})})},P=(t(21),function(e){var c=Object(n.useState)(),t=Object(o.a)(c,2),a=t[0],s=t[1],i=(Object(l.f)(),function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),r=function(e){s(Object(w.a)(Object(w.a)({},a),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"form-user",children:[Object(j.jsx)("h1",{className:"mb-3",children:"Datos usuario"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Nombre"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{name:"nombre",type:"text",placeholder:"Nombre del usuario",value:(null===a||void 0===a?void 0:a.nombre)||"",onChange:r})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Email"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{name:"email",type:"email",placeholder:"correo",value:(null===a||void 0===a?void 0:a.email)||"",onChange:r})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Contrase\xf1a"})}),Object(j.jsx)("div",{className:"col-60",children:Object(j.jsx)("input",{name:"contraseya",type:"text",placeholder:"Contrase\xf1a del usuario",value:(null===a||void 0===a?void 0:a.contraseya)||"",onChange:r})})]}),Object(j.jsxs)("div",{className:"basics_row_space mt-5",children:[Object(j.jsx)("div",{className:"send-button",onClick:i,children:"Actualizar"}),Object(j.jsx)("div",{className:"send-button",onClick:function(){},children:"Cerrar sesi\xf3n"})]})]})})}),z=function(e,c){var t=Object(n.useState)({name:"",email:"",password:"",rol:"user"}),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)({}),l=Object(o.a)(r,2),j=l[0],d=l[1],b=Object(n.useState)(!1),A=Object(o.a)(b,2),m=A[0],u=A[1];return Object(n.useEffect)((function(){console.log("errors"+Object.keys(j)+" errores: "+Object.keys(j).length),0===Object.keys(j).length&&m&&e()}),[j]),{handleChange:function(e){var c=e.target,t=c.name,n=c.value;i(Object(w.a)(Object(w.a)({},s),{},Object(g.a)({},t,n)))},handleSubmit:function(e){e.preventDefault(),d(c(s)),u(!0)},values:s,setValues:i,errors:j}},T=function(){Object(l.f)();var e=Object(n.useState)(""),c=Object(o.a)(e,2),t=c[0],a=(c[1],function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),s=z(a,J),i=s.handleChange,r=s.handleSubmit,d=s.values,b=s.errors;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"form-user",children:[Object(j.jsx)("h1",{className:"mb-3",children:"Datos usuario"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Nombre"})}),Object(j.jsxs)("div",{className:"col-60",children:[Object(j.jsx)("input",{name:"name",type:"text",placeholder:"Nombre completo",value:d.name||"",onChange:i}),b.name&&Object(j.jsx)("p",{className:"error",children:b.name})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Email"})}),Object(j.jsxs)("div",{className:"col-60",children:[Object(j.jsx)("input",{name:"email",type:"email",placeholder:"correo",value:d.email||"",onChange:i}),b.email&&Object(j.jsx)("p",{className:"error",children:b.email})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Contrase\xf1a"})}),Object(j.jsxs)("div",{className:"col-60",children:[Object(j.jsx)("input",{name:"password",type:"password",placeholder:"contrase\xf1a",value:d.password||"",onChange:i}),b.password&&Object(j.jsx)("p",{className:"error",children:b.password})]})]}),Object(j.jsxs)("div",{className:"basics_column mt-4",children:[Object(j.jsx)("div",{className:"info",children:t}),Object(j.jsx)("div",{className:"send-button",onClick:r,children:"Crear usuario"})]})]})})},D=t(33),U=function(){var e=Object(n.useState)(0),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),r=i[0],d=i[1];Object(n.useEffect)((function(){d(D),a(1)}),[]);var b=Object(l.f)(),A=Object(n.useMemo)((function(){var e=5*(t-1),c=e+5;return r.slice(e,c)}),[t]);return Object(j.jsxs)("div",{className:"container basics_column",children:[Object(j.jsx)("h1",{className:"mb-2",children:"Clientes"}),A?Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Buscar cliente.."}),Object(j.jsx)("ul",{className:"list-group",children:A.map((function(e){return Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsxs)("p",{className:"cliente-nombre",children:[" ",e.nombre]}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"cliente-tlf",children:e.telefono})]},e._id)}))}),Object(j.jsx)(I,{className:"pagination-bar",currentPage:t,totalCount:r.length,pageSize:5,onPageChange:function(e){return a(e)}}),Object(j.jsx)("button",{className:"send-button btn-cliente mt-2",onClick:function(){b("/crearCliente")},children:"Crear"})]}):Object(j.jsx)("div",{className:"img-load",children:Object(j.jsx)("p",{className:"no-pedidos",children:"A\xfan no hay clientes"})})]})},G=function(){var e=Object(n.useState)([{name:"",email:""}]),c=Object(o.a)(e,2),t=c[0],a=c[1],s=function(e,c){var n=Object(B.a)(t);n[e][c.target.name]=c.target.value,a(n)};return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(t))},children:[Object(j.jsx)("h1",{className:"mb-1",children:"Datos Cliente"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Nombre"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Nombre del cliente..."})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Telefono"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tel\xe9fono del cliente..."})})]}),Object(j.jsxs)("div",{className:"form-campos-personalizados",children:[Object(j.jsx)("h2",{children:"Campos personalizados"}),t.map((function(e,c){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsxs)("select",{className:"select-campo-jira",value:e.name||"",onChange:function(e){return s(c,e)},children:[Object(j.jsx)("option",{value:"Jira Cloud",children:"Empresa"}),Object(j.jsx)("option",{value:"Jira Server",children:"M\xf3dulo"}),Object(j.jsx)("option",{value:"Jira Data Center",children:"Correo"})]})}),Object(j.jsx)("div",{className:"col-50",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Valor del campo",value:e.email||"",onChange:function(e){return s(c,e)}})}),Object(j.jsx)("div",{className:"col-10",children:c?Object(j.jsx)("button",{type:"button",className:"send-button btn-remove",onClick:function(){return function(e){var c=Object(B.a)(t);c.splice(e,1),a(c)}(c)},children:"X"}):null})]},c)})),Object(j.jsx)("div",{className:"basics_row mt-1",children:Object(j.jsx)("button",{className:"send-button btn-campos-personalizados",type:"button",onClick:function(){a([].concat(Object(B.a)(t),[{name:"",email:""}]))},children:"A\xf1adir campo"})})]}),Object(j.jsx)("div",{className:"basics_row mt-2",children:Object(j.jsx)("button",{className:"send-button",type:"submit",children:"Guardar"})})]})})},R=function(){var e=Object(n.useState)([{name:"",email:""}]),c=Object(o.a)(e,2),t=c[0];c[1];return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"form-user",onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(t))},children:[Object(j.jsx)("h1",{className:"mb-3",children:"Nuevo cliente"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Nombre"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Nombre del cliente..."})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-40",children:Object(j.jsx)("label",{children:"Tel\xe9fono"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tel\xe9fono del cliente..."})})]}),Object(j.jsx)("div",{className:"basics_row mt-5",children:Object(j.jsx)("button",{className:"send-button",type:"submit",children:"Crear"})})]})})},_=function(e){var c=Object(n.useState)(!1),t=Object(o.a)(c,2);t[0],t[1];return Object(j.jsxs)("div",{class:"footer-bottom",children:[Object(j.jsxs)("p",{children:["Copyright \xa9 ",Object(j.jsx)("a",{href:"#",children:"Jira with WhatsApp"}),"  "]}),Object(j.jsxs)("ul",{class:"socials",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-facebook"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-twitter"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-google-plus"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-youtube"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-linkedin-square"})})})]})]})};var L=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(A,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(O,{})}),Object(j.jsx)(l.a,{path:"/login",element:Object(j.jsx)(M,{})}),Object(j.jsx)(l.a,{path:"/register",element:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{path:"/profile",element:Object(j.jsx)(P,{})}),Object(j.jsx)(l.a,{path:"/jiras",element:Object(j.jsx)(O,{})}),Object(j.jsx)(l.a,{path:"/proyectos",element:Object(j.jsx)(N,{})}),Object(j.jsx)(l.a,{path:"/clientes",element:Object(j.jsx)(U,{})}),Object(j.jsx)(l.a,{path:"/detallesCliente",element:Object(j.jsx)(G,{})}),Object(j.jsx)(l.a,{path:"/crearCliente",element:Object(j.jsx)(R,{})}),Object(j.jsx)(l.a,{path:"/campos",element:Object(j.jsx)(y,{})})]}),Object(j.jsx)(_,{})]})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,i=c.getTTFB;t(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),V()}},[[67,1,2]]]);
//# sourceMappingURL=main.67ee172e.chunk.js.map