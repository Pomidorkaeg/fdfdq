import{j as e}from"./ui-core-ZvML9v_n.js";import{r as s}from"./react-vendor-CINg3o4D.js";import{N as a,F as l}from"./Footer-TNdcSzvt.js";import{B as t}from"./button-DIyk5peT.js";import{g as r}from"./newsOperations-g-nqFIYu.js";import{C as c}from"./ui-utils-BhdqeX4Z.js";import"./index-kwvxnu__.js";import"./data-management-BYY_grA7.js";const i=()=>{const[i,o]=s.useState("all"),[x,m]=s.useState([]);s.useEffect((()=>{m(r())}),[]);const n=x.filter((e=>"all"===i||e.category===i));return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(a,{}),e.jsxs("main",{className:"flex-grow pt-16",children:[e.jsxs("div",{className:"relative bg-fc-darkGreen text-white py-12",children:[e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3')",backgroundSize:"cover",backgroundPosition:"center",opacity:.1}}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Новости клуба"}),e.jsx("p",{className:"text-lg text-white/80 max-w-2xl mx-auto",children:"Актуальные новости о матчах, событиях и жизни клуба"})]})]}),e.jsx("div",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex space-x-4 py-4",children:[e.jsx(t,{variant:"all"===i?"default":"ghost",onClick:()=>o("all"),className:"all"===i?"bg-fc-green hover:bg-fc-darkGreen":"",children:"Все новости"}),e.jsx(t,{variant:"matches"===i?"default":"ghost",onClick:()=>o("matches"),className:"matches"===i?"bg-fc-green hover:bg-fc-darkGreen":"",children:"Матчи"}),e.jsx(t,{variant:"club"===i?"default":"ghost",onClick:()=>o("club"),className:"club"===i?"bg-fc-green hover:bg-fc-darkGreen":"",children:"Клуб"})]})})}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.length>0?n.map((s=>e.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow",children:[e.jsxs("div",{className:"h-48 relative",children:[e.jsx("img",{src:s.image||"/placeholder.svg",alt:s.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"}),e.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:e.jsx("span",{className:"px-2 py-1 bg-fc-green text-white text-xs rounded-full",children:"matches"===s.category?"Матчи":"Клуб"})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"font-bold text-xl mb-2 line-clamp-2",children:s.title}),e.jsx("p",{className:"text-gray-600 text-sm mb-4 line-clamp-2",children:s.excerpt}),e.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[e.jsx(c,{size:16,className:"mr-1"}),e.jsxs("span",{children:[s.date," ",s.time]})]})]})]},s.id))):e.jsx("div",{className:"col-span-full py-12 text-center text-gray-500",children:e.jsx("p",{children:"Новости не найдены"})})})})]}),e.jsx(l,{})]})};export{i as default};
