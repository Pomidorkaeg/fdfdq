import{j as e,X as m,y as d}from"./ui-D5DV2d8E.js";import{r as x,e as p,L as n}from"./vendor-D6ndfC6E.js";import{c as o}from"./index-B7Yoo_GN.js";const j=()=>{const[a,s]=x.useState(!1),l=p(),i=()=>s(!a),c=t=>l.pathname===t,r=[{name:"Главная",path:"/"},{name:"Команда",path:"/team"},{name:"Новости",path:"/news"},{name:"Матчи",path:"/matches"},{name:"Соревнования",path:"/tournaments"},{name:"Медиа",path:"/media"},{name:"Контакты",path:"/contacts"}];return e.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-fc-darkGreen shadow-md",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(n,{to:"/",className:"flex items-center space-x-2",onClick:()=>s(!1),children:e.jsx("span",{className:"text-fc-yellow font-bold text-xl",children:"ФК ГУДАУТА"})})}),e.jsx("nav",{className:"hidden md:flex space-x-1",children:r.map(t=>e.jsx(n,{to:t.path,className:o("nav-link px-4 py-2 rounded-md text-base font-medium transition-all duration-200",c(t.path)?"text-fc-yellow bg-fc-darkGreen/50":"text-white hover:text-fc-yellow hover:bg-fc-darkGreen/30"),children:t.name},t.path))}),e.jsxs("button",{onClick:i,className:"md:hidden rounded-md p-2 inline-flex items-center justify-center text-white hover:text-fc-yellow focus:outline-none",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),a?e.jsx(m,{className:"h-6 w-6"}):e.jsx(d,{className:"h-6 w-6"})]})]})}),e.jsx("div",{className:o("md:hidden fixed inset-x-0 top-[4rem] bg-fc-darkGreen/95 backdrop-blur-md transition-all duration-300 ease-in-out transform origin-top",a?"opacity-100 scale-y-100 shadow-lg":"opacity-0 scale-y-0 pointer-events-none"),children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:r.map(t=>e.jsx(n,{to:t.path,className:o("block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150",c(t.path)?"text-fc-yellow bg-fc-green/70":"text-white hover:text-fc-yellow hover:bg-fc-green/50"),onClick:()=>s(!1),children:t.name},t.path))})})]})};export{j as default};
