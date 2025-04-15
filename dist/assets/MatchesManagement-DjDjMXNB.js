import{j as e}from"./ui-core-ZvML9v_n.js";import{r as s,R as a}from"./react-vendor-CINg3o4D.js";import{C as i}from"./card-B1fMa5Vj.js";import{B as t}from"./button-DIyk5peT.js";import{t as l}from"./index-kwvxnu__.js";import{D as r,a as c,b as n,c as d,e as m,d as o}from"./dialog-B1Ydvt7J.js";import{S as h,a as x,b as j,c as g,d as v}from"./select-CK1hejBS.js";import{L as u,I as p}from"./label-B_EmsMaR.js";import{y as f,C as N,T as y,z as w,B as b}from"./ui-utils-BhdqeX4Z.js";import"./data-management-BYY_grA7.js";const C=()=>{const[C,S]=s.useState([]),[T,k]=s.useState(!1),[F,I]=s.useState(null),[O,z]=s.useState(null);a.useEffect((()=>{const e=localStorage.getItem("matches");e&&S(JSON.parse(e))}),[]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Управление матчами"}),e.jsxs(t,{onClick:()=>{const e={id:Date.now().toString(),homeTeam:"",awayTeam:"",date:"",time:"",venue:"",competition:"",status:"scheduled"};I(e),k(!0)},className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(f,{className:"mr-2 h-4 w-4"})," Добавить матч"]})]}),e.jsx("div",{className:"grid gap-6",children:C.map((s=>e.jsx(i,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-medium "+("live"===s.status?"bg-fc-green text-white":"finished"===s.status?"bg-gray-200 text-gray-700":"bg-fc-yellow text-gray-900"),children:"live"===s.status?"Идет матч":"finished"===s.status?"Завершен":"Запланирован"}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsxs("span",{children:[s.date," ",s.time]})]})]}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("div",{className:"flex-1",children:e.jsx("div",{className:"text-lg font-semibold",children:s.homeTeam})}),e.jsxs("div",{className:"flex items-center gap-3",children:["scheduled"!==s.status&&e.jsxs("div",{className:"text-2xl font-bold",children:[s.score?.home," - ",s.score?.away]}),"scheduled"===s.status&&e.jsx("div",{className:"text-xl font-bold",children:"vs"})]}),e.jsx("div",{className:"flex-1 text-right",children:e.jsx("div",{className:"text-lg font-semibold",children:s.awayTeam})})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-3 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{className:"h-4 w-4"}),s.competition]}),e.jsx("div",{children:s.venue})]})]}),e.jsxs("div",{className:"flex gap-2 ml-4",children:[e.jsxs(t,{variant:"ghost",size:"sm",onClick:()=>(e=>{I(e),k(!0)})(s),children:[e.jsx(w,{className:"h-4 w-4 mr-1"})," Изменить"]}),e.jsxs(t,{variant:"ghost",size:"sm",onClick:()=>z(s.id),className:"text-fc-red hover:text-fc-red/80",children:[e.jsx(b,{className:"h-4 w-4 mr-1"})," Удалить"]})]})]})},s.id)))}),T&&F&&e.jsx(r,{open:T,onOpenChange:()=>k(!1),children:e.jsxs(c,{className:"max-w-2xl",children:[e.jsx(n,{children:e.jsx(d,{children:F.id?"Редактировать матч":"Добавить новый матч"})}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"homeTeam",children:"Домашняя команда"}),e.jsx(p,{id:"homeTeam",value:F.homeTeam,onChange:e=>I({...F,homeTeam:e.target.value})})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"awayTeam",children:"Гостевая команда"}),e.jsx(p,{id:"awayTeam",value:F.awayTeam,onChange:e=>I({...F,awayTeam:e.target.value})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"date",children:"Дата"}),e.jsx(p,{id:"date",type:"date",value:F.date,onChange:e=>I({...F,date:e.target.value})})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"time",children:"Время"}),e.jsx(p,{id:"time",type:"time",value:F.time,onChange:e=>I({...F,time:e.target.value})})]})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"venue",children:"Стадион"}),e.jsx(p,{id:"venue",value:F.venue,onChange:e=>I({...F,venue:e.target.value})})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"competition",children:"Соревнование"}),e.jsx(p,{id:"competition",value:F.competition,onChange:e=>I({...F,competition:e.target.value})})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{children:"Статус матча"}),e.jsxs(h,{value:F.status,onValueChange:e=>I({...F,status:e}),children:[e.jsx(x,{children:e.jsx(j,{})}),e.jsxs(g,{children:[e.jsx(v,{value:"scheduled",children:"Запланирован"}),e.jsx(v,{value:"live",children:"Идет матч"}),e.jsx(v,{value:"finished",children:"Завершен"})]})]})]}),"scheduled"!==F.status&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"scoreHome",children:"Голы (хозяева)"}),e.jsx(p,{id:"scoreHome",type:"number",min:"0",value:F.score?.home||0,onChange:e=>I({...F,score:{...F.score,home:parseInt(e.target.value)||0}})})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"scoreAway",children:"Голы (гости)"}),e.jsx(p,{id:"scoreAway",type:"number",min:"0",value:F.score?.away||0,onChange:e=>I({...F,score:{...F.score,away:parseInt(e.target.value)||0}})})]})]})]}),e.jsxs(m,{children:[e.jsx(t,{variant:"outline",onClick:()=>k(!1),children:"Отмена"}),e.jsx(t,{onClick:()=>{return(e=F).id?S((s=>{const a=s.map((s=>s.id===e.id?e:s));return localStorage.setItem("matches",JSON.stringify(a)),a})):S((s=>{const a=[...s,{...e,id:Date.now().toString()}];return localStorage.setItem("matches",JSON.stringify(a)),a})),k(!1),I(null),void l({title:"Успешно сохранено",description:"Матч был успешно сохранен"});var e},className:"bg-fc-green hover:bg-fc-darkGreen",children:"Сохранить"})]})]})}),e.jsx(r,{open:!!O,onOpenChange:()=>z(null),children:e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(d,{children:"Подтвердите удаление"}),e.jsx(o,{children:"Вы уверены, что хотите удалить этот матч? Это действие нельзя отменить."})]}),e.jsxs(m,{children:[e.jsx(t,{variant:"outline",onClick:()=>z(null),children:"Отмена"}),e.jsx(t,{variant:"destructive",onClick:()=>{return O&&(e=O,S((s=>{const a=s.filter((s=>s.id!==e));return localStorage.setItem("matches",JSON.stringify(a)),a})),z(null),void l({title:"Удалено",description:"Матч был успешно удален",variant:"destructive"}));var e},children:"Удалить"})]})]})})]})};export{C as default};
