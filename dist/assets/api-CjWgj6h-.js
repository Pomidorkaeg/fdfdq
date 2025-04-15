const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TournamentTable-DMeqJBmG.js","assets/ui-core-ZvML9v_n.js","assets/react-vendor-CINg3o4D.js","assets/index-kwvxnu__.js","assets/ui-utils-BhdqeX4Z.js","assets/data-management-BYY_grA7.js","assets/index-BNmLJwf-.css"])))=>i.map(i=>d[i]);
import{j as e}from"./ui-core-ZvML9v_n.js";import{L as s,r as a}from"./react-vendor-CINg3o4D.js";import{c as o,_ as n}from"./index-kwvxnu__.js";import{T as t,k as i}from"./ui-utils-BhdqeX4Z.js";const r=({id:a,title:n,type:r,season:l,teams:m,source:p,featured:g=!1})=>e.jsx(s,{to:`/tournaments/${a}`,className:o("block rounded-xl overflow-hidden card-hover border transition-all duration-300",g?"bg-gradient-to-br from-fc-green/5 to-fc-green/20 border-fc-green":"bg-white border-gray-200 hover:border-fc-green/50"),children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("div",{className:o("flex items-center justify-center w-12 h-12 rounded-full",g?"bg-fc-green text-white":"bg-fc-green/10 text-fc-green"),children:e.jsx(t,{size:20})}),e.jsx("span",{className:o("text-sm font-medium px-3 py-1 rounded-full",g?"bg-fc-yellow/20 text-fc-yellow":"bg-gray-100 text-gray-600"),children:l})]}),e.jsx("h3",{className:o("text-xl font-bold mb-2 line-clamp-2",g?"text-fc-green":"text-gray-800"),children:n}),e.jsx("p",{className:"text-gray-500 mb-4",children:r}),e.jsxs("div",{className:"flex justify-between items-center pt-4 border-t border-gray-100",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:[m," команд"]}),e.jsxs("div",{className:o("flex items-center text-sm font-medium",g?"text-fc-green":"text-gray-600"),children:["Источник: ",p,e.jsx(i,{size:16,className:"ml-1"})]})]})]})}),l=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),m=a.lazy((()=>{const e=n((()=>import("./TournamentTable-DMeqJBmG.js")),__vite__mapDeps([0,1,2,3,4,5,6]));return e.then((()=>{n((()=>Promise.resolve().then((()=>l))),void 0)})),e})),p=()=>e.jsxs("div",{className:"space-y-4 animate-pulse",style:{animationDuration:"1s"},children:[e.jsx("div",{className:"h-8 bg-gray-100 rounded w-1/3"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"h-10 bg-gray-100 rounded"}),[...Array(5)].map(((s,a)=>e.jsx("div",{className:"h-12 bg-gray-50 rounded",style:{animationDelay:100*a+"ms"}},a)))]})]}),g=({tournamentId:s,source:o})=>e.jsx(a.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(m,{tournamentId:s,source:o})}),d=new Map;const c=async(e,s)=>{try{if("sff-siberia.ru"===s)return await(async()=>new Promise((e=>{setTimeout((()=>{e({title:"Кубок МОО СФФ «Сибирь» сезона 2024 года",season:"2024",lastUpdated:(new Date).toLocaleDateString("ru-RU"),teams:[{position:1,name:"«Енисей» (Красноярск)",played:7,won:6,drawn:1,lost:0,goalsFor:18,goalsAgainst:4,goalDifference:14,points:19},{position:2,name:"«Бурятия» (Улан-Удэ)",played:7,won:5,drawn:1,lost:1,goalsFor:15,goalsAgainst:8,goalDifference:7,points:16},{position:3,name:"«Распадская» (Междуреченск)",played:7,won:4,drawn:0,lost:3,goalsFor:9,goalsAgainst:5,goalDifference:4,points:12},{position:4,name:"«Темп» (Барнаул)",played:7,won:3,drawn:2,lost:2,goalsFor:11,goalsAgainst:8,goalDifference:3,points:11},{position:5,name:"«Рассвет» (Красноярск)",played:7,won:2,drawn:3,lost:2,goalsFor:9,goalsAgainst:7,goalDifference:2,points:9},{position:6,name:"«Енисей-М» (Красноярск)",played:7,won:1,drawn:3,lost:3,goalsFor:7,goalsAgainst:9,goalDifference:-2,points:6},{position:7,name:"«Байкал» (Иркутск)",played:7,won:1,drawn:0,lost:6,goalsFor:5,goalsAgainst:16,goalDifference:-11,points:3},{position:8,name:"«Новокузнецк» (Новокузнецк)",played:7,won:0,drawn:2,lost:5,goalsFor:4,goalsAgainst:15,goalDifference:-11,points:2}],topScorers:[{position:1,name:"Исаев Максим",team:"Енисей",goals:6},{position:2,name:"Рыбованов Алексей",team:"Бурятия",goals:5},{position:3,name:"Бекеровский Андрей",team:"Темп",goals:4},{position:4,name:"Винтер Даниил",team:"Рассвет",goals:3},{position:5,name:"Савченко Борис",team:"Енисей-М",goals:3}],warnings:[{position:1,name:"Рыбованов Алексей",team:"Бурятия",warnings:4},{position:2,name:"Голополобов Евгений",team:"Распадская",warnings:4},{position:3,name:"Чуриков Даниил",team:"Енисей-М",warnings:3},{position:4,name:"Жариков Роман",team:"Темп",warnings:2},{position:5,name:"Голышев Александр",team:"Новокузнецк",warnings:2}],expulsions:[{position:1,name:"Абдуллаев Степан",team:"Енисей-М",expulsions:1},{position:2,name:"Воропаев Кирилл",team:"Распадская",expulsions:1},{position:3,name:"Яковлев Егор",team:"Темп",expulsions:1},{position:4,name:"Пальму Ян",team:"Байкал",expulsions:1},{position:5,name:"Шориков Даниил",team:"Новокузнецк",expulsions:1}]})}),1e3)})))();if("ffnso.ru"===s)return await(async()=>new Promise((e=>{setTimeout((()=>{e({title:"Чемпионат города Новосибирска",season:"2024",lastUpdated:(new Date).toLocaleDateString("ru-RU"),teams:[{position:1,name:"«Спартак» (Новосибирск)",played:8,won:7,drawn:1,lost:0,goalsFor:22,goalsAgainst:5,goalDifference:17,points:22},{position:2,name:"«Локомотив» (Новосибирск)",played:8,won:6,drawn:0,lost:2,goalsFor:18,goalsAgainst:7,goalDifference:11,points:18},{position:3,name:"«НГТУ» (Новосибирск)",played:8,won:5,drawn:2,lost:1,goalsFor:15,goalsAgainst:8,goalDifference:7,points:17},{position:4,name:"«Сибирь-М» (Новосибирск)",played:8,won:4,drawn:1,lost:3,goalsFor:14,goalsAgainst:10,goalDifference:4,points:13},{position:5,name:"«Заря» (Новосибирск)",played:8,won:3,drawn:2,lost:3,goalsFor:12,goalsAgainst:11,goalDifference:1,points:11},{position:6,name:"«Академия» (Новосибирск)",played:8,won:3,drawn:1,lost:4,goalsFor:10,goalsAgainst:13,goalDifference:-3,points:10},{position:7,name:"«Динамо» (Новосибирск)",played:8,won:2,drawn:1,lost:5,goalsFor:8,goalsAgainst:15,goalDifference:-7,points:7},{position:8,name:"«Металлург» (Новосибирск)",played:8,won:0,drawn:2,lost:6,goalsFor:4,goalsAgainst:19,goalDifference:-15,points:2},{position:9,name:"«Новосибирск-М» (Новосибирск)",played:8,won:0,drawn:0,lost:8,goalsFor:3,goalsAgainst:18,goalDifference:-15,points:0}],topScorers:[{position:1,name:"Смирнов Илья",team:"Спартак",goals:8},{position:2,name:"Кузнецов Дмитрий",team:"Локомотив",goals:7},{position:3,name:"Соколов Артем",team:"НГТУ",goals:6},{position:4,name:"Новиков Кирилл",team:"Сибирь-М",goals:5},{position:5,name:"Морозов Александр",team:"Заря",goals:4}],warnings:[{position:1,name:"Попов Сергей",team:"Локомотив",warnings:5},{position:2,name:"Лебедев Андрей",team:"Динамо",warnings:4},{position:3,name:"Козлов Максим",team:"Металлург",warnings:4},{position:4,name:"Новиков Кирилл",team:"Сибирь-М",warnings:3},{position:5,name:"Смирнов Илья",team:"Спартак",warnings:3}],expulsions:[{position:1,name:"Козлов Максим",team:"Металлург",expulsions:2},{position:2,name:"Кузнецов Дмитрий",team:"Локомотив",expulsions:1},{position:3,name:"Соколов Артем",team:"НГТУ",expulsions:1},{position:4,name:"Лебедев Андрей",team:"Динамо",expulsions:1},{position:5,name:"Новиков Кирилл",team:"Сибирь-М",expulsions:1}]})}),1e3)})))();throw new Error(`Unknown data source: ${s}`)}catch(a){throw a}};async function f(){const e="tournaments",s=d.get(e);if(s&&(a=s,Date.now()-a.timestamp<3e5))return s.data;var a;try{const s=await async function(){return new Promise((e=>{setTimeout((()=>{e([{id:"siberia-cup-2024",title:"Кубок МОО СФФ «Сибирь» 2024",type:"Кубковый турнир",season:"2024",teams:16,source:"sff-siberia.ru",featured:!0},{id:"siberia-league-2024",title:"Первенство МОО СФФ «Сибирь»",type:"Регулярный чемпионат",season:"2024",teams:8,source:"sff-siberia.ru",featured:!1},{id:"novosibirsk-championship-2024",title:"Чемпионат города Новосибирска",type:"Городской чемпионат",season:"2024",teams:12,source:"ffnso.ru",featured:!0},{id:"novosibirsk-cup-2024",title:"Кубок города Новосибирска",type:"Кубковый турнир",season:"2024",teams:16,source:"ffnso.ru",featured:!1},{id:"novosibirsk-region-cup-2024",title:"Кубок Новосибирской области",type:"Региональный кубок",season:"2024",teams:18,source:"ffnso.ru",featured:!1}])}),1e3)}))}();return d.set(e,{data:s,timestamp:Date.now()}),s}catch(o){throw o}}f().catch(console.error);export{g as L,r as T,c as a,f as g};
