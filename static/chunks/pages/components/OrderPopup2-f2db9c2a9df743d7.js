(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117],{7526:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/OrderPopup2",function(){return t(8173)}])},8173:function(e,n,t){"use strict";t.r(n);var a=t(7568),r=t(7582),i=t(5893),s=t(7294),o=t(3253),u=t.n(o);u().setAppElement("#__next");var c=function(e){var n,t=e.isOpen,o=e.onRequestClose,c=(0,s.useState)(!1),l=c[0],d=c[1],p=(0,s.useState)(null),m=p[0],h=p[1],f=(0,s.useState)([]),x=f[0],v=f[1],j=(0,s.useState)(""),b=j[0],g=j[1],_=(0,s.useState)([]),y=_[0],C=_[1];(0,s.useEffect)(function(){fetch("/departamentos_y_ciudades.json").then(function(e){return e.json()}).then(function(e){return v(e.Colombia)}).catch(function(e){return console.error("Error al cargar los departamentos y ciudades:",e)})},[]);var N=(n=(0,a.Z)(function(e){var n;return(0,r.__generator)(this,function(t){return e.preventDefault(),d(!0),h(null),n={name:e.target.elements.name.value,apellido:e.target.elements.apellido.value,phone:e.target.elements.phone.value,email:e.target.elements.email.value,departamento:b,ciudad:e.target.elements.ciudad.value},fetch("http://195.35.36.80:3003/api/submit-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){if(d(!1),e.success)h({success:!0,message:"Felicitaciones te has inscrito en la capacitaci\xf3n exitosamente!"});else throw Error(e.message)}).catch(function(e){d(!1),h({success:!1,message:e.message||"Lo siento, hubo un error creando tu pedido, por favor int\xe9ntalo nuevamente."})}),[2]})}),function(e){return n.apply(this,arguments)}),S=function(e){var n=x.find(function(n){return n.departamento===e.target.value});g(e.target.value),C(n?n.ciudades:[])};return(0,i.jsxs)(u(),{isOpen:t,onRequestClose:o,contentLabel:"Realizar Pedido",className:"modal",overlayClassName:"overlay",children:[(0,i.jsx)("h2",{children:"Inscr\xedbase totalmente GRATIS"}),l?(0,i.jsx)("p",{children:"Cargando..."}):m?(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:m.message}),(0,i.jsx)("p",{children:"Nos comunicaremos contigo en los siguientes dias para confirmar el dia de la capacitaci\xf3n"})]}):(0,i.jsxs)("form",{onSubmit:N,children:[(0,i.jsxs)("label",{children:["Nombre:",(0,i.jsx)("input",{type:"text",name:"name",required:!0})]}),(0,i.jsxs)("label",{children:["Apellido:",(0,i.jsx)("input",{type:"text",name:"apellido",required:!0})]}),(0,i.jsxs)("label",{children:["Celular:",(0,i.jsx)("input",{type:"text",name:"phone",required:!0})]}),(0,i.jsxs)("label",{children:["Correo electronico:",(0,i.jsx)("input",{type:"text",name:"email",required:!0})]}),(0,i.jsxs)("label",{children:["Departamento:",(0,i.jsxs)("select",{name:"departamento",value:b,onChange:S,children:[(0,i.jsx)("option",{value:"",children:"Seleccione un departamento"}),x.map(function(e,n){return(0,i.jsx)("option",{value:e.departamento,children:e.departamento},n)})]})]}),(0,i.jsxs)("label",{children:["Ciudad:",(0,i.jsxs)("select",{name:"ciudad",children:[(0,i.jsx)("option",{value:"",children:"Seleccione una ciudad"}),y.map(function(e,n){return(0,i.jsx)("option",{value:e,children:e},n)})]})]}),(0,i.jsx)("button",{className:"button-form",type:"submit",children:"\xa1Inscribirme!"})]})]})};n.default=c},7568:function(e,n,t){"use strict";function a(e,n,t,a,r,i,s){try{var o=e[i](s),u=o.value}catch(c){t(c);return}o.done?n(u):Promise.resolve(u).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var s=e.apply(n,t);function o(e){a(s,r,i,o,u,"next",e)}function u(e){a(s,r,i,o,u,"throw",e)}o(void 0)})}}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[253,774,888,179],function(){return e(e.s=7526)}),_N_E=e.O()}]);