import{j as e}from"./ui-core-ZvML9v_n.js";import{r as s}from"./react-vendor-CINg3o4D.js";import{u as t,c as a}from"./index-GlEzmhib.js";import{a as n}from"./api-DOsZ9SRl.js";import{R as r,Q as i,C as o,T as l,S as c}from"./ui-utils-BhdqeX4Z.js";import"./data-management-BYY_grA7.js";const d=({tournamentId:d,source:x})=>{const[m,p]=s.useState(null),[h,g]=s.useState(!0),[f,y]=s.useState(null),[j,u]=s.useState("teams"),{toast:b}=t(),N=async()=>{g(!0),y(null);try{const e=await n(d,x);p(e),g(!1)}catch(e){y("Не удалось загрузить данные турнирной таблицы"),g(!1),b({variant:"destructive",title:"Ошибка загрузки",description:"Не удалось загрузить данные турнирной таблицы"})}};s.useEffect((()=>{N()}),[d,x]);const w=()=>{N(),b({title:"Обновление данных",description:"Данные турнирной таблицы обновляются"})};if(h)return e.jsxs("div",{className:"min-h-[400px] flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white/50",children:[e.jsx("div",{className:"animate-spin mb-4",children:e.jsx(r,{size:32,className:"text-fc-green"})}),e.jsx("p",{className:"text-gray-500",children:"Загрузка турнирной таблицы..."})]});if(f)return e.jsxs("div",{className:"min-h-[200px] flex flex-col items-center justify-center p-6 rounded-xl border border-red-200 bg-red-50",children:[e.jsx(i,{size:32,className:"text-fc-red mb-4"}),e.jsx("p",{className:"text-fc-red font-medium mb-2",children:"Ошибка загрузки данных"}),e.jsx("p",{className:"text-gray-500 mb-4 text-center",children:f}),e.jsxs("button",{onClick:w,className:"px-4 py-2 bg-fc-green text-white rounded-md flex items-center gap-2 hover:bg-fc-darkGreen transition-colors duration-300",children:[e.jsx(r,{size:16}),"Повторить попытку"]})]});const v=m||{title:"Кубок среди любительских команд МОО СФФ «Сибирь» сезона 2024 года",season:"2024",lastUpdated:"15.03.2024",teams:[{position:1,name:"«Бурятия» (Улан-Удэ)",played:7,won:5,drawn:2,lost:0,goalsFor:15,goalsAgainst:6,goalDifference:9,points:17},{position:2,name:"«Распадская» (Междуреченск)",played:7,won:4,drawn:0,lost:3,goalsFor:9,goalsAgainst:4,goalDifference:5,points:12},{position:3,name:"«Темп» (Барнаул)",played:6,won:3,drawn:2,lost:1,goalsFor:9,goalsAgainst:4,goalDifference:5,points:11},{position:4,name:"«Рассвет» (Красноярск)",played:4,won:1,drawn:3,lost:0,goalsFor:6,goalsAgainst:3,goalDifference:3,points:6},{position:5,name:"«Енисей-М» (Красноярск)",played:6,won:1,drawn:3,lost:2,goalsFor:7,goalsAgainst:7,goalDifference:0,points:6},{position:6,name:"«Байкал» (Иркутск)",played:4,won:2,drawn:0,lost:2,goalsFor:5,goalsAgainst:6,goalDifference:-1,points:6},{position:7,name:"«ТОЦ-Хайра» (Барнаул)",played:4,won:1,drawn:2,lost:1,goalsFor:5,goalsAgainst:6,goalDifference:-1,points:5},{position:8,name:"«Восход» Ден-СРФ (Томск)",played:2,won:1,drawn:0,lost:1,goalsFor:2,goalsAgainst:3,goalDifference:-1,points:3}],topScorers:[{position:1,name:"Рыбованов Алексей",team:"Бурятия",goals:5},{position:2,name:"Бекеровский Андрей",team:"Темп",goals:4},{position:3,name:"Винтер Даниил",team:"Рассвет",goals:3},{position:4,name:"Савченко Борис",team:"Енисей-М",goals:3},{position:5,name:"Бенедиктов Владимир",team:"Байкал",goals:2}],warnings:[{position:1,name:"Рыбованов Алексей",team:"Бурятия",warnings:4},{position:2,name:"Голополобов Евгений",team:"Распадская",warnings:4},{position:3,name:"Чуриков Даниил",team:"Енисей-М",warnings:3},{position:4,name:"Жариков Роман",team:"Темп",warnings:2},{position:5,name:"Голышев Александр",team:"Восход",warnings:2}],expulsions:[{position:1,name:"Абдуллаев Степан",team:"Енисей-М",expulsions:1},{position:2,name:"Воропаев Кирилл",team:"Распадская",expulsions:1},{position:3,name:"Яковлев Егор",team:"Темп",expulsions:1},{position:4,name:"Пальму Ян",team:"Байкал",expulsions:1},{position:5,name:"Шориков Даниил",team:"Восход",expulsions:1}]};return e.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:v.title}),e.jsxs("div",{className:"flex items-center gap-2 mt-2 text-gray-500",children:[e.jsx(o,{size:16}),e.jsxs("span",{children:["Сезон ",v.season]}),e.jsx("span",{className:"text-gray-300 mx-2",children:"|"}),e.jsxs("span",{children:["Обновлено: ",v.lastUpdated]})]})]}),e.jsxs("button",{onClick:w,className:"px-4 py-2 bg-fc-green/10 text-fc-green rounded-md flex items-center gap-2 hover:bg-fc-green hover:text-white transition-colors duration-300 ml-auto",children:[e.jsx(r,{size:16}),"Обновить"]})]}),e.jsx("div",{className:"border-b border-gray-100",children:e.jsxs("div",{className:"flex",children:[e.jsxs("button",{onClick:()=>u("teams"),className:a("px-4 py-3 text-sm font-medium flex items-center gap-2 transition-colors duration-300","teams"===j?"text-fc-green border-b-2 border-fc-green":"text-gray-500 hover:text-fc-green"),children:[e.jsx(l,{size:16}),"Таблица команд"]}),e.jsxs("button",{onClick:()=>u("scorers"),className:a("px-4 py-3 text-sm font-medium flex items-center gap-2 transition-colors duration-300","scorers"===j?"text-fc-green border-b-2 border-fc-green":"text-gray-500 hover:text-fc-green"),children:[e.jsx(c,{size:16}),"Бомбардиры"]}),e.jsxs("button",{onClick:()=>u("disciplinary"),className:a("px-4 py-3 text-sm font-medium flex items-center gap-2 transition-colors duration-300","disciplinary"===j?"text-fc-green border-b-2 border-fc-green":"text-gray-500 hover:text-fc-green"),children:[e.jsx(i,{size:16}),"Дисциплина"]})]})}),e.jsxs("div",{className:"overflow-x-auto",children:["teams"===j&&e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 text-gray-500 text-xs uppercase",children:[e.jsx("th",{className:"py-3 px-4 font-medium",children:"№"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Команда"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"И"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"В"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"Н"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"П"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"Мячи"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"О"})]})}),e.jsx("tbody",{children:v.teams.map((s=>e.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",children:[e.jsx("td",{className:"py-3 px-4 text-center font-medium",children:s.position<=3?e.jsx("span",{className:a("flex items-center justify-center w-6 h-6 rounded-full text-white font-bold text-xs",1===s.position?"bg-fc-yellow":2===s.position?"bg-gray-400":"bg-[#cd7f32]"),children:s.position}):s.position}),e.jsx("td",{className:"py-3 px-4 font-medium",children:s.name}),e.jsx("td",{className:"py-3 px-4 text-center",children:s.played}),e.jsx("td",{className:"py-3 px-4 text-center",children:s.won}),e.jsx("td",{className:"py-3 px-4 text-center",children:s.drawn}),e.jsx("td",{className:"py-3 px-4 text-center",children:s.lost}),e.jsxs("td",{className:"py-3 px-4 text-center",children:[s.goalsFor,"-",s.goalsAgainst]}),e.jsx("td",{className:"py-3 px-4 text-center font-bold",children:s.points})]},`${s.position}-${s.name}`)))})]}),"scorers"===j&&e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 text-gray-500 text-xs uppercase",children:[e.jsx("th",{className:"py-3 px-4 font-medium",children:"№"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Игрок"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Команда"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"Голов"})]})}),e.jsx("tbody",{children:v.topScorers.map((s=>e.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",children:[e.jsx("td",{className:"py-3 px-4 text-center font-medium",children:s.position}),e.jsx("td",{className:"py-3 px-4 font-medium",children:s.name}),e.jsx("td",{className:"py-3 px-4",children:s.team}),e.jsx("td",{className:"py-3 px-4 text-center font-bold",children:s.goals})]},`${s.position}-${s.name}`)))})]}),"disciplinary"===j&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold px-6 py-4 border-b border-gray-100",children:"Предупреждения"}),e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 text-gray-500 text-xs uppercase",children:[e.jsx("th",{className:"py-3 px-4 font-medium",children:"№"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Игрок"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Команда"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"Предупреждений"})]})}),e.jsx("tbody",{children:v.warnings.map((s=>e.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",children:[e.jsx("td",{className:"py-3 px-4 text-center font-medium",children:s.position}),e.jsx("td",{className:"py-3 px-4 font-medium",children:s.name}),e.jsx("td",{className:"py-3 px-4",children:s.team}),e.jsx("td",{className:"py-3 px-4 text-center",children:e.jsx("span",{className:"px-2 py-1 bg-fc-yellow/10 text-fc-yellow rounded-full text-xs font-medium",children:s.warnings})})]},`warning-${s.position}-${s.name}`)))})]}),e.jsx("h3",{className:"text-lg font-semibold px-6 py-4 border-t border-b border-gray-100 mt-4",children:"Удаления"}),e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 text-gray-500 text-xs uppercase",children:[e.jsx("th",{className:"py-3 px-4 font-medium",children:"№"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Игрок"}),e.jsx("th",{className:"py-3 px-4 font-medium",children:"Команда"}),e.jsx("th",{className:"py-3 px-4 font-medium text-center",children:"Удалений"})]})}),e.jsx("tbody",{children:v.expulsions.map((s=>e.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",children:[e.jsx("td",{className:"py-3 px-4 text-center font-medium",children:s.position}),e.jsx("td",{className:"py-3 px-4 font-medium",children:s.name}),e.jsx("td",{className:"py-3 px-4",children:s.team}),e.jsx("td",{className:"py-3 px-4 text-center",children:e.jsx("span",{className:"px-2 py-1 bg-fc-red/10 text-fc-red rounded-full text-xs font-medium",children:s.expulsions})})]},`expulsion-${s.position}-${s.name}`)))})]})]})]}),e.jsxs("div",{className:"px-6 py-4 bg-gray-50 text-xs text-gray-500 border-t border-gray-100",children:["Источник данных: ",x," | Данные могут обновляться с задержкой"]})]})};export{d as default};
