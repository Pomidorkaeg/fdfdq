import{j as e}from"./ui-core-ZvML9v_n.js";import{r as s,L as a}from"./react-vendor-CINg3o4D.js";import{g as l}from"./assetUtils-3m7sA7ty.js";import{B as t}from"./button-Brqg8rra.js";import{A as r,T as i,U as c,S as d}from"./ui-utils-BhdqeX4Z.js";import{N as x,F as n}from"./Footer-z1r_Ks_0.js";import{L as m,T as o,g as h}from"./api-DOsZ9SRl.js";import"./index-GlEzmhib.js";import"./data-management-BYY_grA7.js";const f=()=>(s.useEffect((()=>{["lovable-uploads/10641be5-36c7-4f6d-a5b4-ee39048e40ac.png","lovable-uploads/382be63e-ead7-422c-b229-31831c415198.png"].forEach((e=>{(new Image).src=l(e)}))}),[]),e.jsxs("div",{className:"relative h-screen w-full flex items-center justify-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 z-0 bg-fc-darkGreen/50",style:{backgroundImage:`url(${l("lovable-uploads/e711e51e-481c-438c-987e-2aa5f999290a.png")})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",willChange:"transform",transform:"translateZ(0)"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-fc-darkGreen/80 to-fc-green/75 z-10",style:{willChange:"opacity"}}),e.jsxs("div",{className:"relative z-20 container mx-auto px-4 text-center",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-6",style:{willChange:"transform, opacity",transform:"translateZ(0)"},children:'Футбольный клуб "Гудаута"'}),e.jsx("p",{className:"text-xl text-white/90 mb-8 max-w-2xl mx-auto",children:"Присоединяйтесь к нашему футбольному сообществу"}),e.jsx(a,{to:"/team",children:e.jsxs(t,{size:"lg",className:"bg-fc-yellow text-fc-darkGreen hover:bg-fc-yellow/90 transition-colors",children:["Наша команда ",e.jsx(r,{className:"ml-2"})]})})]})]})),j=()=>{const[l,j]=s.useState([]),[g,b]=s.useState(!0),[u,p]=s.useState(null);return s.useEffect((()=>{(async()=>{try{const e=await h();j(e);const s=e.find((e=>e.featured))||e[0];p(s),b(!1)}catch(e){b(!1)}})()}),[]),e.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50",children:[e.jsx(x,{}),e.jsxs("main",{className:"flex-grow page-transition",children:[e.jsx(f,{}),e.jsx("section",{className:"pt-32 px-4 sm:px-6 lg:px-8 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"ТЕКУЩЕЕ ПОЛОЖЕНИЕ В ТАБЛИЦЕ"}),e.jsx("div",{className:"w-24 h-1 bg-fc-yellow mx-auto mb-6"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:"Актуальные данные о положении команд в турнирной таблице"}),u&&!g&&e.jsxs("div",{className:"inline-flex items-center text-fc-darkGreen font-medium",children:[e.jsx(i,{size:18,className:"mr-2"}),u.title]})]}),e.jsx("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100",children:u&&!g?e.jsx(m,{tournamentId:u.id,source:u.source}):e.jsx("div",{className:"min-h-[400px] flex items-center justify-center",children:e.jsx("div",{className:"h-10 w-10 animate-spin rounded-full border-4 border-amber-500 border-t-transparent"})})}),e.jsx("div",{className:"mt-10 text-center",children:e.jsx(t,{asChild:!0,variant:"subtle",size:"lg",children:e.jsxs(a,{to:"/tournaments",className:"inline-flex items-center",children:["Все турнирные таблицы",e.jsx(r,{className:"ml-2"})]})})})]})}),e.jsx("section",{className:"bg-fc-darkGreen text-white py-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-fc-yellow mb-6 drop-shadow-md",children:"ФУТБОЛ — ЭТО БОЛЬШЕ ЧЕМ ИГРА"}),e.jsx("div",{className:"w-24 h-1 bg-fc-yellow mx-auto mb-6"}),e.jsx("p",{className:"text-xl text-white/90 max-w-3xl mx-auto",children:"Наш клуб воспитывает характер, дисциплину и командный дух"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"bg-fc-green/30 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(i,{className:"text-fc-yellow mr-4 h-10 w-10"}),e.jsx("h3",{className:"text-2xl font-bold",children:"Традиции"})]}),e.jsx("p",{className:"text-white/80 text-lg",children:"Богатая история и традиции нашего клуба — основа нашего развития и достижений на футбольном поле."})]}),e.jsxs("div",{className:"bg-fc-green/30 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(c,{className:"text-fc-yellow mr-4 h-10 w-10"}),e.jsx("h3",{className:"text-2xl font-bold",children:"Команда"})]}),e.jsx("p",{className:"text-white/80 text-lg",children:"Наши игроки — это единая команда профессионалов, нацеленных на результат и постоянное совершенствование."})]}),e.jsxs("div",{className:"bg-fc-green/30 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300",children:[e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(d,{className:"text-fc-yellow mr-4 h-10 w-10"}),e.jsx("h3",{className:"text-2xl font-bold",children:"Развитие"})]}),e.jsx("p",{className:"text-white/80 text-lg",children:"Мы постоянно развиваемся, ставим амбициозные цели и достигаем новых высот в мире футбола."})]})]})]})}),e.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4 border-l-4 border-fc-yellow pl-4",children:"ТУРНИРЫ И СОРЕВНОВАНИЯ"}),e.jsx("p",{className:"text-gray-600 max-w-2xl",children:"Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба"})]}),e.jsx(t,{asChild:!0,variant:"default",size:"lg",className:"mt-4 md:mt-0",children:e.jsxs(a,{to:"/tournaments",className:"inline-flex items-center",children:["Все соревнования",e.jsx(r,{className:"ml-2"})]})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:g?Array(3).fill(0).map(((s,a)=>e.jsx("div",{className:"h-72 rounded-xl bg-gray-100 animate-pulse shadow"},a))):l.filter((e=>e.featured||"регулярный"===e.type)).slice(0,3).map((s=>e.jsx(o,{id:s.id,title:s.title,type:s.type,season:s.season,teams:s.teams,source:s.source,featured:s.featured},s.id)))})]})})]}),e.jsx(n,{})]})};export{j as default};
