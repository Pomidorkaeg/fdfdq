const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Index-DqCooOte.js","assets/ui-core-KiA6hiHm.js","assets/react-vendor-rxUfhwR6.js","assets/assetUtils-B40k6WJT.js","assets/button-DRU12jmU.js","assets/ui-utils-DFR8Oa4B.js","assets/index-BPKutU3E.js","assets/data-management-Q5I3kbSf.js","assets/index-DwuAhDtX.css","assets/api-DhbPeuHL.js","assets/Team-CgGqD1m9.js","assets/teamsData-DGCCHY7v.js","assets/playerOperations-mDttqfWy.js","assets/coachOperations-cvUJ2rsP.js","assets/News-Rwt8DdVE.js","assets/newsOperations-Yq9_nnMg.js","assets/Matches-b4blo2VZ.js","assets/Tournaments-BdpKejWd.js","assets/Media-D34M_wVP.js","assets/mediaOperations-BoV-6Pja.js","assets/Contacts-C0QOf1WP.js"])))=>i.map(i=>d[i]);
import{c as r,_ as a}from"./index-BPKutU3E.js";import{j as e}from"./ui-core-KiA6hiHm.js";import{r as m,u as p,L as s}from"./react-vendor-rxUfhwR6.js";import{X as j,u,I as f,F as w,d as N,M as v,P as _,q as b}from"./ui-utils-DFR8Oa4B.js";const P=()=>{const[i,n]=m.useState(!1),l=p(),d=()=>n(!i),o=t=>l.pathname===t,c=t=>{if(t===l.pathname)return;const h={"/":()=>a(()=>import("./Index-DqCooOte.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),"/team":()=>a(()=>import("./Team-CgGqD1m9.js"),__vite__mapDeps([10,1,2,4,5,6,7,8,11,12,13,3])),"/news":()=>a(()=>import("./News-Rwt8DdVE.js"),__vite__mapDeps([14,1,2,4,5,6,7,8,15])),"/matches":()=>a(()=>import("./Matches-b4blo2VZ.js"),__vite__mapDeps([16,1,2,6,5,7,8])),"/tournaments":()=>a(()=>import("./Tournaments-BdpKejWd.js"),__vite__mapDeps([17,1,2,9,6,5,7,8])),"/media":()=>a(()=>import("./Media-D34M_wVP.js"),__vite__mapDeps([18,1,2,6,5,7,8,19])),"/contacts":()=>a(()=>import("./Contacts-C0QOf1WP.js"),__vite__mapDeps([20,1,2,6,5,7,8]))};t in h&&h[t]().catch(console.error)},x=[{name:"Главная",path:"/"},{name:"Команда",path:"/team"},{name:"Новости",path:"/news"},{name:"Матчи",path:"/matches"},{name:"Соревнования",path:"/tournaments"},{name:"Медиа",path:"/media"},{name:"Контакты",path:"/contacts"}];return e.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-fc-darkGreen shadow-md",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(s,{to:"/",className:"flex items-center space-x-2",onClick:()=>n(!1),children:e.jsx("span",{className:"text-fc-yellow font-bold text-xl",children:"ФК ГУДАУТА"})})}),e.jsx("nav",{className:"hidden md:flex space-x-1",children:x.map(t=>e.jsx(s,{to:t.path,onMouseEnter:()=>c(t.path),className:r("nav-link px-4 py-2 rounded-md text-base font-medium transition-all duration-200",o(t.path)?"text-fc-yellow bg-fc-darkGreen/50":"text-white hover:text-fc-yellow hover:bg-fc-darkGreen/30"),children:t.name},t.path))}),e.jsxs("button",{onClick:d,className:"md:hidden rounded-md p-2 inline-flex items-center justify-center text-white hover:text-fc-yellow focus:outline-none",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),i?e.jsx(j,{className:"h-6 w-6"}):e.jsx(u,{className:"h-6 w-6"})]})]})}),e.jsx("div",{className:r("md:hidden fixed inset-x-0 top-[4rem] bg-fc-darkGreen/95 backdrop-blur-md transition-all duration-300 ease-in-out transform origin-top",i?"opacity-100 scale-y-100 shadow-lg":"opacity-0 scale-y-0 pointer-events-none"),children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:x.map(t=>e.jsx(s,{to:t.path,className:r("block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150",o(t.path)?"text-fc-yellow bg-fc-green/70":"text-white hover:text-fc-yellow hover:bg-fc-green/50"),onClick:()=>n(!1),onMouseEnter:()=>c(t.path),children:t.name},t.path))})})]})},I=()=>e.jsx("footer",{className:"bg-fc-green text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"ФК ГУДАУТА"}),e.jsx("p",{className:"text-white/80 mb-4",children:"Футбольный клуб с богатой историей и традициями, стремящийся к новым победам и достижениям."}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(f,{size:20})}),e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(w,{size:20})}),e.jsx("a",{href:"#",className:"text-white hover:text-fc-yellow transition-colors duration-300",children:e.jsx(N,{size:20})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Страницы"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx(s,{to:"/",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Главная"})}),e.jsx("li",{children:e.jsx(s,{to:"/team",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Команда"})}),e.jsx("li",{children:e.jsx(s,{to:"/news",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Новости"})}),e.jsx("li",{children:e.jsx(s,{to:"/matches",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Матчи"})}),e.jsx("li",{children:e.jsx(s,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Соревнования"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Соревнования"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx(s,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"3 Лига ПФЛ"})}),e.jsx("li",{children:e.jsx(s,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок России"})}),e.jsx("li",{children:e.jsx(s,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Чемпионат Абхазии"})}),e.jsx("li",{children:e.jsx(s,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок победы"})}),e.jsx("li",{children:e.jsx(s,{to:"/tournaments",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Кубок Абхазии"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Контакты"}),e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{className:"flex items-start space-x-3",children:[e.jsx(v,{size:20,className:"shrink-0 mt-1"}),e.jsx("span",{className:"text-white/80",children:"Гудаута, ул. Спортивная, 20"})]}),e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx(_,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-white/80",children:"+7 (940) 123-45-67"})]}),e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx(b,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-white/80",children:"info@fcgudauta.com"})]})]})]})]}),e.jsxs("div",{className:"border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",children:[e.jsxs("p",{className:"text-white/80",children:["© ",new Date().getFullYear()," ФК Гудаута. Все права защищены."]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs("ul",{className:"flex space-x-6",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Политика конфиденциальности"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-white/80 hover:text-white transition-colors duration-300",children:"Условия использования"})})]})})]})]})});export{I as F,P as N};
//# sourceMappingURL=Footer-D7K7O6F1.js.map
