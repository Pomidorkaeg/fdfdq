import{j as e}from"./ui-B5VS9Rxm.js";import{r as s,e as t,L as a}from"./react-vendor-C5eXiI5f.js";import{c as i,a as l,X as n}from"./index-B8v6iQwI.js";import{I as r,F as c,T as o,M as x}from"./twitter-Cb1g7M67.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=i("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),d=i("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),m=i("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),j=()=>{const[i,r]=s.useState(!1),c=t(),o=e=>c.pathname===e,x=[{name:"Главная",path:"/"},{name:"Команда",path:"/team"},{name:"Новости",path:"/news"},{name:"Матчи",path:"/matches"},{name:"Соревнования",path:"/tournaments"},{name:"Медиа",path:"/media"},{name:"Контакты",path:"/contacts"}];return e.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-fc-darkGreen shadow-md",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(a,{to:"/",className:"flex items-center space-x-2",onClick:()=>r(!1),children:e.jsx("span",{className:"text-fc-yellow font-bold text-xl",children:"ФК ГУДАУТА"})})}),e.jsx("nav",{className:"hidden md:flex space-x-1",children:x.map((s=>e.jsx(a,{to:s.path,className:l("nav-link px-4 py-2 rounded-md text-base font-medium transition-all duration-200",o(s.path)?"text-fc-yellow bg-fc-darkGreen/50":"text-white hover:text-fc-yellow hover:bg-fc-darkGreen/30"),children:s.name},s.path)))}),e.jsxs("button",{onClick:()=>r(!i),className:"md:hidden rounded-md p-2 inline-flex items-center justify-center text-white hover:text-fc-yellow focus:outline-none",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),i?e.jsx(n,{className:"h-6 w-6"}):e.jsx(d,{className:"h-6 w-6"})]})]})}),e.jsx("div",{className:l("md:hidden fixed inset-x-0 top-[4rem] bg-fc-darkGreen/95 backdrop-blur-md transition-all duration-300 ease-in-out transform origin-top",i?"opacity-100 scale-y-100 shadow-lg":"opacity-0 scale-y-0 pointer-events-none"),children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:x.map((s=>e.jsx(a,{to:s.path,className:l("block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150",o(s.path)?"text-fc-yellow bg-fc-green/70":"text-white hover:text-fc-yellow hover:bg-fc-green/50"),onClick:()=>r(!1),children:s.name},s.path)))})})]})},p=()=>e.jsx("footer",{className:"bg-fc-green text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"ФК ГУДАУТА"}),e.jsx("p",{className:"text-white/80 mb-4",children:"Футбольный клуб с богатой историей и традициями, стремящийся к новым победам и достижениям."}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(r,{size:20})}),e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(c,{size:20})}),e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(o,{size:20})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Страницы"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx(a,{to:"/",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Главная"})}),e.jsx("li",{children:e.jsx(a,{to:"/team",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Команда"})}),e.jsx("li",{children:e.jsx(a,{to:"/news",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Новости"})}),e.jsx("li",{children:e.jsx(a,{to:"/matches",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Матчи"})}),e.jsx("li",{children:e.jsx(a,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Соревнования"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Соревнования"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx(a,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"3 Лига ПФЛ"})}),e.jsx("li",{children:e.jsx(a,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок России"})}),e.jsx("li",{children:e.jsx(a,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Чемпионат Абхазии"})}),e.jsx("li",{children:e.jsx(a,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок победы"})}),e.jsx("li",{children:e.jsx(a,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок Абхазии"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Контакты"}),e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{className:"flex items-start space-x-3",children:[e.jsx(x,{size:20,className:"shrink-0 mt-1"}),e.jsx("span",{className:"text-white/80",children:"Гудаута, ул. Спортивная, 20"})]}),e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx(m,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-white/80",children:"+7 (940) 123-45-67"})]}),e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx(h,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-white/80",children:"info@fcgudauta.com"})]})]})]})]}),e.jsxs("div",{className:"border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",children:[e.jsxs("p",{className:"text-white/80",children:["© ",(new Date).getFullYear()," ФК Гудаута. Все права защищены."]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs("ul",{className:"flex space-x-6",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Политика конфиденциальности"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Условия использования"})})]})})]})]})});
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{p as F,h as M,j as N,m as P};
