(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{319:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cadastro/CadastroVideo",function(){return a(8895)}])},8360:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var l=a(5893),s=a(1664),r=a.n(s);function i(){return(0,l.jsx)("aside",{id:"sidebar-multi-level-sidebar",class:"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:(0,l.jsx)("div",{class:"h-full px-3 py-4 overflow-y-auto bg-zinc-950",children:(0,l.jsxs)("ul",{class:"space-y-2 font-medium",children:[(0,l.jsx)("li",{className:"pb-6 al",children:(0,l.jsx)("span",{class:"max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white",children:(0,l.jsx)(r(),{href:"/",children:"thur.video"})})}),(0,l.jsx)("li",{className:"pb-4",children:(0,l.jsx)("span",{class:"ml-3 text-lg",children:(0,l.jsx)(r(),{href:"/cadastro/CadastroVideo",children:"Cadastrar Videos"})})}),(0,l.jsx)("li",{className:"pb-4",children:(0,l.jsx)("span",{class:"ml-3 text-lg",children:(0,l.jsx)(r(),{href:"/listagem/ListagemVideo",children:"Listagem de V\xeddeos"})})}),(0,l.jsx)("li",{className:"pb-4",children:(0,l.jsx)("span",{class:"ml-3 text-lg",children:(0,l.jsx)(r(),{href:"/cadastro/CadastroAutor",children:"Cadastrar Autor"})})}),(0,l.jsx)("li",{className:"pb-4",children:(0,l.jsx)("span",{class:"ml-3 text-lg",children:(0,l.jsx)(r(),{href:"/listagem/ListagemAutor",children:"Listagem de Autores"})})})]})})})}},8895:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var l=a(5893),s=a(8360),r=a(7294);function i(){let[e,t]=(0,r.useState)(""),[a,s]=(0,r.useState)(""),[i,n]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[o,u]=(0,r.useState)(""),x=l=>{let r;l.preventDefault();var x=o.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);x&&11==x[2].length&&(r=x[2]);let h={id:r,titulo:e,descricao:a,linguagem:i,autor:d,url:o},m=null!=JSON.parse(localStorage.getItem("listadevideos")),g=m?JSON.parse(localStorage.getItem("listadevideos")):[];g.unshift(h),localStorage.setItem("listadevideos",JSON.stringify(g)),t(""),s(""),n(""),c(""),u("")};return(0,l.jsxs)("div",{className:"bg-rose-600 ml-72 m-6 rounded p-6",children:[(0,l.jsx)("h2",{className:"text-xl p-6 pl-0 pt-0",children:"Cadastro de V\xeddeos"}),(0,l.jsxs)("form",{className:" grid grid-cols-1 gap-2",onSubmit:x,children:[(0,l.jsx)("label",{htmlFor:"titulo",children:"T\xedtulo"}),(0,l.jsx)("input",{required:!0,className:"text-black",type:"text",value:e,onChange:e=>t(e.target.value),id:"titulo"}),(0,l.jsx)("label",{htmlFor:"descricao",children:"Descri\xe7\xe3o"}),(0,l.jsx)("input",{required:!0,className:"text-black",type:"text",value:a,onChange:e=>s(e.target.value),id:"descricao"}),(0,l.jsx)("label",{htmlFor:"linguagem",children:"Linguagem"}),(0,l.jsxs)("select",{name:"linguagem",className:"text-black",type:"text",value:i,onChange:e=>n(e.target.value),id:"linguagem",required:!0,children:[(0,l.jsx)("option",{value:""}),(0,l.jsx)("option",{value:"Javascript",children:"Javascript"}),(0,l.jsx)("option",{value:"HTML/CSS",children:"HTML/CSS"}),(0,l.jsx)("option",{value:"C#",children:"C#"}),(0,l.jsx)("option",{value:"PHP",children:"PHP"})]}),(0,l.jsx)("label",{htmlFor:"linguagem",children:"Autor"}),(0,l.jsx)("input",{required:!0,className:"text-black",type:"text",value:d,onChange:e=>c(e.target.value),id:"autor"}),(0,l.jsx)("label",{htmlFor:"linguagem",children:"URL"}),(0,l.jsx)("input",{required:!0,className:"text-black",type:"text",value:o,onChange:e=>u(e.target.value),id:"url"}),(0,l.jsx)("button",{className:"mt-6 bg-rose-500 p-6 text-xl rounded-md border-b-4 border-rose-400",children:"Cadastrar"})]})]})}function n(){return(0,l.jsxs)("main",{children:[(0,l.jsx)(s.Z,{}),(0,l.jsx)(i,{})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=319)}),_N_E=e.O()}]);