import{j as e,c as s,e as r,M as a,f as l,G as t,I as i,F as o,g as d,h as n,U as c,i as m,k as x,l as h,m as p}from"./ui-dsA3UTJJ.js";import{r as g,e as j}from"./vendor-VrRidEet.js";import b from"./Navbar-BEczughb.js";import u from"./Footer-Dm3WWPfo.js";import{B as y}from"./button-DhUj6jFD.js";import{g as f}from"./teamsData-CbQgeqDZ.js";import{g as v}from"./playerOperations-CaNZQc2x.js";import{g as N}from"./coachOperations-B_r1WGSx.js";import{g as w}from"./assetUtils-Cvs1NCmj.js";import{c as C}from"./index-C5T_0QIt.js";const k=({team:s})=>e.jsxs("div",{className:"relative h-[400px] w-full overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${w(s.backgroundImage)})`},children:e.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(to right, ${s.primaryColor}cc, ${s.secondaryColor}cc)`}})}),e.jsx("div",{className:"relative container mx-auto h-full px-4 py-8 flex items-center",children:e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("img",{src:w(s.logo),alt:s.name,className:"w-32 h-32 object-contain filter drop-shadow-lg"}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:s.name}),e.jsxs("p",{className:"text-white/80 text-lg",children:[s.foundedYear," год основания"]})]})]})})]}),$=({teamName:e})=>null,z=({team:s})=>e.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border-t-4",style:{borderTopColor:s.primaryColor},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",style:{color:s.primaryColor},children:"О команде"}),e.jsx("p",{className:"text-gray-700 leading-relaxed mb-6",children:s.description}),e.jsx("h3",{className:"text-xl font-bold mb-3",style:{color:s.primaryColor},children:"История"}),e.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:"Команда «Гудаута» Новосибирск создана в 2008 г.р. За годы своего существования клуб добился множества значимых успехов на региональном и городском уровнях, став одним из заметных участников футбольной жизни Новосибирска."})]}),P=({team:r})=>e.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",style:{color:r.primaryColor},children:"Достижения"}),e.jsx("ul",{className:"space-y-4",children:r.achievements.map(((a,l)=>e.jsxs("li",{className:"flex items-start p-3 border-l-4 rounded bg-gray-50",style:{borderLeftColor:r.primaryColor},children:[e.jsx(s,{className:"h-6 w-6 mr-3 flex-shrink-0 mt-0.5",style:{color:r.primaryColor}}),e.jsx("span",{className:"text-gray-700",children:a})]},l)))})]}),S=({team:t})=>e.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",style:{color:t.primaryColor},children:"Информация"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${t.primaryColor}15`},children:e.jsx(r,{className:"h-5 w-5",style:{color:t.primaryColor}})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Год основания"}),e.jsx("p",{className:"font-medium",children:t.foundedYear})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${t.primaryColor}15`},children:e.jsx(s,{className:"h-5 w-5",style:{color:t.primaryColor}})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Стадион"}),e.jsx("p",{className:"font-medium",children:t.stadium})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${t.primaryColor}15`},children:e.jsx(a,{className:"h-5 w-5",style:{color:t.primaryColor}})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Адрес"}),e.jsx("p",{className:"font-medium",children:t.address})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${t.primaryColor}15`},children:e.jsx(l,{className:"h-5 w-5",style:{color:t.primaryColor}})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Главный тренер"}),e.jsx("p",{className:"font-medium",children:t.coach})]})]})]})]}),D=({links:s})=>e.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-100",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500 mb-3",children:"Социальные сети"}),e.jsxs("div",{className:"flex space-x-3",children:[s.website&&e.jsx("a",{href:s.website,target:"_blank",rel:"noopener noreferrer",className:C("p-2 rounded-full transition-colors duration-200","bg-gray-100 hover:bg-gray-200"),children:e.jsx(t,{className:"h-5 w-5 text-gray-700"})}),s.instagram&&e.jsx("a",{href:s.instagram,target:"_blank",rel:"noopener noreferrer",className:C("p-2 rounded-full transition-colors duration-200","bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"),children:e.jsx(i,{className:"h-5 w-5 text-white"})}),s.facebook&&e.jsx("a",{href:s.facebook,target:"_blank",rel:"noopener noreferrer",className:C("p-2 rounded-full transition-colors duration-200","bg-amber-600 hover:bg-amber-700"),children:e.jsx(o,{className:"h-5 w-5 text-white"})}),s.twitter&&e.jsx("a",{href:s.twitter,target:"_blank",rel:"noopener noreferrer",className:C("p-2 rounded-full transition-colors duration-200","bg-amber-400 hover:bg-amber-500"),children:e.jsx(d,{className:"h-5 w-5 text-white"})})]})]}),T=({team:s})=>e.jsxs("div",{className:"animate-fade-in",children:[e.jsx(k,{team:s}),e.jsx($,{teamName:s.name}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"md:col-span-2 space-y-6",children:[e.jsx(z,{team:s}),e.jsx(P,{team:s})]}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md",children:[e.jsx(S,{team:s}),e.jsx(D,{links:s.socialLinks})]})})]})]}),M=({teams:s,activeTeam:r,onTeamChange:a,primaryColor:l})=>{var t;return e.jsxs("div",{className:"relative text-white py-10",style:{backgroundColor:l,background:`linear-gradient(135deg, ${l}, ${(null==(t=s.find((e=>e.id===r)))?void 0:t.secondaryColor)||"#ffeb3b"})`},children:[e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay",opacity:.3}}),e.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6",children:e.jsx(n,{className:"w-8 h-8"})}),e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Наши команды"}),e.jsx("div",{className:"mt-6 mb-8",children:e.jsx("div",{className:"inline-flex p-1 bg-white/10 backdrop-blur-sm rounded-full shadow-lg",children:s.map((s=>e.jsx("button",{onClick:()=>a(s.id),className:C("px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",r===s.id?`bg-white text-[${s.primaryColor}] shadow-md`:"text-white hover:bg-white/20"),style:{color:r===s.id?s.primaryColor:""},children:s.name},s.id)))})})]})})]})},L=({activeTab:r,onTabChange:a,primaryColor:l})=>e.jsx("div",{className:"bg-white shadow-md sticky top-16 z-20",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex overflow-x-auto no-scrollbar",children:[e.jsx("button",{onClick:()=>a("players"),className:C("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","players"===r?`border-[${l}] text-[${l}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"players"===r?l:"transparent",color:"players"===r?l:""},children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{size:16}),"Игроки"]})}),e.jsx("button",{onClick:()=>a("staff"),className:C("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","staff"===r?`border-[${l}] text-[${l}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"staff"===r?l:"transparent",color:"staff"===r?l:""},children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{size:16}),"Тренерский штаб"]})}),e.jsx("button",{onClick:()=>a("details"),className:C("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","details"===r?`border-[${l}] text-[${l}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"details"===r?l:"transparent",color:"details"===r?l:""},children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:16}),"О команде"]})}),e.jsx("button",{onClick:()=>a("statistics"),className:C("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","statistics"===r?`border-[${l}] text-[${l}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"statistics"===r?l:"transparent",color:"statistics"===r?l:""},children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{size:16}),"Статистика"]})})]})})}),q=({player:s,onClick:r,primaryColor:a="#2E7D32",small:l=!1})=>{const[t,i]=g.useState(!1);return e.jsxs("div",{className:C("group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer",l?"h-[280px]":"h-[360px]"),onClick:()=>null==r?void 0:r(s),children:[e.jsxs("div",{className:C("relative w-full overflow-hidden",l?"h-[200px]":"h-[280px]"),children:[e.jsx("img",{src:w(t?"placeholder.svg":s.image),alt:s.name,className:"w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105",onError:()=>{i(!0)}}),e.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(to top, ${a}cc, transparent)`}})]}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 text-white",children:e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold leading-tight mb-1",children:s.name}),e.jsx("p",{className:"text-sm text-white/80",children:s.position})]}),e.jsx("div",{className:"text-right",children:e.jsx("span",{className:"text-3xl font-bold",children:s.number})})]})})]})},B=({player:s,primaryColor:a,secondaryColor:l})=>e.jsxs("div",{className:"mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in",children:[e.jsx("div",{className:"p-6 border-b",style:{borderColor:`${a}30`},children:e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Информация об игроке"})}),e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("div",{className:"md:w-1/3 relative",children:[e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover aspect-square md:aspect-auto"}),e.jsx("div",{className:"absolute top-4 left-4 w-16 h-16 flex items-center justify-center rounded-full font-bold text-3xl text-white shadow-lg",style:{background:`linear-gradient(135deg, ${a}, ${l})`},children:s.number})]}),e.jsxs("div",{className:"md:w-2/3 p-6",children:[e.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6",children:e.jsxs("div",{children:[e.jsx("div",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",style:{backgroundColor:`${a}10`,color:a},children:s.position}),e.jsx("h3",{className:"text-2xl font-bold mb-1",children:s.name}),e.jsxs("div",{className:"flex items-center text-gray-500",children:[e.jsx(h,{size:16,className:"mr-1"}),e.jsx("span",{children:s.nationality})]})]})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Возраст"}),e.jsxs("div",{className:"font-medium",children:[(e=>{const[s,r,a]=e.split(".").map(Number),l=new Date(a,r-1,s),t=Date.now()-l.getTime(),i=new Date(t);return Math.abs(i.getUTCFullYear()-1970)})(s.birthDate)," лет"]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Дата рождения"}),e.jsxs("div",{className:"font-medium flex items-center",children:[e.jsx(r,{size:16,className:"mr-1",style:{color:a}}),s.birthDate]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Рост"}),e.jsxs("div",{className:"font-medium",children:[s.height," см"]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Вес"}),e.jsxs("div",{className:"font-medium",children:[s.weight," кг"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg mb-8",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Матчи"}),e.jsx("div",{className:"font-medium",children:s.matches})]}),e.jsx("h4",{className:"text-lg font-bold mb-4",children:"Статистика"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:`linear-gradient(135deg, ${a}20, ${a}05)`,borderLeft:`4px solid ${a}`},children:e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"text-3xl font-bold mb-1",style:{color:a},children:s.goals}),e.jsx("div",{className:"text-xs text-gray-500",children:"Голы"})]})}),e.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:`linear-gradient(135deg, ${a}20, ${a}05)`,borderLeft:`4px solid ${a}`},children:e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"text-3xl font-bold mb-1",style:{color:a},children:s.assists}),e.jsx("div",{className:"text-xs text-gray-500",children:"Передачи"})]})}),e.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.05))",borderLeft:"4px solid #f59e0b"},children:e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"text-3xl font-bold mb-1 text-amber-500",children:s.yellowCards}),e.jsx("div",{className:"text-xs text-gray-500",children:"Жёлтые карточки"})]})}),e.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05))",borderLeft:"4px solid #ef4444"},children:e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"text-3xl font-bold mb-1 text-red-500",children:s.redCards}),e.jsx("div",{className:"text-xs text-gray-500",children:"Красные карточки"})]})})]})]})]})]}),E=({activePosition:s,onPositionChange:r,primaryColor:a})=>e.jsx("div",{className:"mb-8 flex justify-center",children:e.jsxs("div",{className:"inline-flex p-1 bg-gray-100 rounded-full",children:[e.jsx("button",{onClick:()=>r("all"),className:C("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","all"===s?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"all"===s?a:""},children:"Все"}),e.jsx("button",{onClick:()=>r("Вратарь"),className:C("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Вратарь"===s?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Вратарь"===s?a:""},children:"Вратари"}),e.jsx("button",{onClick:()=>r("Защитник"),className:C("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Защитник"===s?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Защитник"===s?a:""},children:"Защитники"}),e.jsx("button",{onClick:()=>r("Полузащитник"),className:C("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Полузащитник"===s?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Полузащитник"===s?a:""},children:"Полузащитники"}),e.jsx("button",{onClick:()=>r("Нападающий"),className:C("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Нападающий"===s?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Нападающий"===s?a:""},children:"Нападающие"})]})}),F=({players:s,activePosition:r,selectedPlayer:a,primaryColor:l,secondaryColor:t,onPositionChange:i,onPlayerSelect:o})=>{const d=g.useMemo((()=>"all"===r?s:s.filter((e=>e.position===r))),[s,r]);return e.jsxs("div",{children:[e.jsx(E,{activePosition:r,onPositionChange:i,primaryColor:l}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:d.length>0?d.map((s=>e.jsx(q,{player:s,isSelected:(null==a?void 0:a.id)===s.id,primaryColor:l,onSelect:o},s.id))):e.jsx("div",{className:"col-span-3 text-center py-10 text-gray-500",children:"Игроки не найдены для выбранной позиции"})}),a&&e.jsx(B,{player:a,primaryColor:l,secondaryColor:t})]})},I=({players:s,primaryColor:r})=>{const a=[...s].sort(((e,s)=>s.goals-e.goals||s.matches-e.matches));return e.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden",children:[e.jsx("div",{className:"px-6 py-4 border-b border-gray-100",children:e.jsx("h3",{className:"text-lg font-bold",style:{color:r},children:"Статистика игроков"})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 text-gray-500 text-xs uppercase",children:[e.jsx("th",{className:"py-3 px-4 text-left font-medium",children:"Игрок"}),e.jsx("th",{className:"py-3 px-4 text-center font-medium",children:"Матчи"}),e.jsx("th",{className:"py-3 px-4 text-center font-medium",children:"Голы"}),e.jsx("th",{className:"py-3 px-4 text-center font-medium w-20",children:"ЖК"}),e.jsx("th",{className:"py-3 px-4 text-center font-medium w-20",children:"КК"})]})}),e.jsx("tbody",{children:a.map((s=>e.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[e.jsx("td",{className:"py-3 px-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full mr-3 overflow-hidden",children:e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:s.name}),e.jsx("div",{className:"text-xs text-gray-500",children:s.position})]})]})}),e.jsx("td",{className:"py-3 px-4 text-center",children:s.matches}),e.jsx("td",{className:"py-3 px-4 text-center font-medium",style:{color:r},children:s.goals}),e.jsx("td",{className:"py-3 px-4 text-center",children:e.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium",children:s.yellowCards})}),e.jsx("td",{className:"py-3 px-4 text-center",children:e.jsx("span",{className:"px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium",children:s.redCards})})]},s.id)))})]})})]})},Y=({member:s,primaryColor:a})=>e.jsxs("div",{className:"bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex card-hover animate-fade-in",children:[e.jsxs("div",{className:"w-1/3 relative",children:[e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover aspect-square"}),e.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(to right, ${a}90, transparent)`}})]}),e.jsxs("div",{className:"w-2/3 p-6",children:[e.jsx("div",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",style:{backgroundColor:`${a}10`,color:a},children:s.role}),e.jsx("h3",{className:"text-xl font-bold mb-4",children:s.name}),e.jsx("p",{className:"text-gray-600 mb-4 text-sm",children:s.biography}),e.jsxs("div",{className:"flex items-center text-gray-500",children:[e.jsx(r,{size:16,className:"mr-1"}),e.jsxs("span",{children:["В клубе с ",s.since," года"]})]})]})]}),_=({staff:s,primaryColor:r})=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:s.map((s=>e.jsx(Y,{member:s,primaryColor:r},s.id)))}),G=()=>{const s=j(),[r,a]=g.useState("details"),[l,t]=g.useState("all"),[i,o]=g.useState(null),[d,n]=g.useState("gudauta"),[c,m]=g.useState([]),[x,h]=g.useState([]),[w,C]=g.useState([]);g.useEffect((()=>{const e=f();m(e)}),[]),g.useEffect((()=>{if(d){const e=v(d),s=N(d);h(e),C(s),o(null),t("all")}}),[d]);const k=c.find((e=>e.id===d)),$=(null==k?void 0:k.primaryColor)||"#2e7d32",z=(null==k?void 0:k.secondaryColor)||"#ffeb3b";return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(b,{}),e.jsxs("main",{className:"flex-grow pt-16 page-transition",children:[e.jsx(M,{teams:c,activeTeam:d,onTeamChange:e=>{n(e),a("details")},primaryColor:$}),e.jsx(L,{activeTab:r,onTabChange:a,primaryColor:$}),e.jsxs("div",{className:"py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:["details"===r&&k&&e.jsx(T,{team:k}),"players"===r&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-end mb-4",children:e.jsxs(y,{variant:"outline",onClick:()=>{s(`/admin/players?team=${d}`)},className:"flex items-center gap-2",children:[e.jsx(p,{className:"h-4 w-4"}),"Управление игроками"]})}),e.jsx(F,{players:x,activePosition:l,selectedPlayer:i,primaryColor:$,secondaryColor:z,onPositionChange:t,onPlayerSelect:e=>{o(e)}})]}),"statistics"===r&&e.jsx(I,{players:x,primaryColor:$}),"staff"===r&&e.jsx(_,{staff:w,primaryColor:$})]})]}),e.jsx(u,{})]})};export{G as default};
