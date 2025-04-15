import{j as e}from"./ui-core-CQa18vHq.js";import{r as s}from"./react-vendor-CINg3o4D.js";import{C as a,a as l,b as i}from"./card-Blobujtd.js";import{B as t}from"./button-CZvKdQxA.js";import{t as r}from"./index-DXbdpNzr.js";import{D as n,a as c,b as d,c as m,d as o,e as h}from"./dialog-BqL5HooJ.js";import{L as x,I as j}from"./label-B7WbcXGG.js";import{S as u,a as v,b as g,c as p,d as f}from"./select-C9iufqZE.js";import{X as N,x as b,o as y,y as w,V as C,z as k,B as S}from"./ui-utils-DHnK_5Rc.js";import{g as F,d as D,u as q,c as z}from"./mediaOperations-CzKeZFWW.js";import"./data-management-CmGCKQt-.js";const L=({media:l,onSave:i,onCancel:r})=>{const[n,c]=s.useState(l),d=e=>{const{name:s,value:a}="target"in e?e.target:e;c((e=>({...e,[s]:a})))};return e.jsx("form",{onSubmit:e=>{e.preventDefault(),i(n)},children:e.jsxs(a,{className:"p-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(x,{htmlFor:"title",children:"Заголовок"}),e.jsx(j,{id:"title",name:"title",value:n.title,onChange:d,required:!0})]}),e.jsxs("div",{children:[e.jsx(x,{htmlFor:"type",children:"Тип медиа"}),e.jsxs(u,{value:n.type,onValueChange:e=>d({name:"type",value:e}),children:[e.jsx(v,{children:e.jsx(g,{})}),e.jsxs(p,{children:[e.jsx(f,{value:"image",children:"Фото"}),e.jsx(f,{value:"video",children:"Видео"})]})]})]}),e.jsxs("div",{children:[e.jsx(x,{htmlFor:"category",children:"Категория"}),e.jsxs(u,{value:n.category,onValueChange:e=>d({name:"category",value:e}),children:[e.jsx(v,{children:e.jsx(g,{})}),e.jsxs(p,{children:[e.jsx(f,{value:"match",children:"Матчи"}),e.jsx(f,{value:"training",children:"Тренировки"}),e.jsx(f,{value:"interview",children:"Интервью"}),e.jsx(f,{value:"stadium",children:"Стадион"}),e.jsx(f,{value:"academy",children:"Академия"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(x,{htmlFor:"thumbnail",children:"URL миниатюры"}),e.jsx(j,{id:"thumbnail",name:"thumbnail",value:n.thumbnail,onChange:d,required:!0}),n.thumbnail&&e.jsx("div",{className:"mt-2 rounded-lg overflow-hidden aspect-video",children:e.jsx("img",{src:n.thumbnail,alt:"Preview",className:"w-full h-full object-cover"})})]}),e.jsxs("div",{children:[e.jsxs(x,{htmlFor:"url",children:["URL ","video"===n.type?"видео":"изображения"]}),e.jsx(j,{id:"url",name:"url",value:n.url,onChange:d,required:!0})]}),e.jsxs("div",{children:[e.jsx(x,{htmlFor:"date",children:"Дата"}),e.jsx(j,{id:"date",name:"date",type:"text",value:n.date,onChange:d,required:!0})]})]})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-6 pt-4 border-t",children:[e.jsxs(t,{variant:"outline",type:"button",onClick:r,children:[e.jsx(N,{className:"mr-2 h-4 w-4"})," Отмена"]}),e.jsxs(t,{type:"submit",className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(b,{className:"mr-2 h-4 w-4"})," Сохранить"]})]})]})})},B=()=>{const[x,j]=s.useState([]),[u,v]=s.useState(!1),[g,p]=s.useState(null),[f,N]=s.useState(null);s.useEffect((()=>{j(F())}),[]);const b=()=>{const e={id:`media-${Date.now()}`,type:"image",title:"",date:(new Date).toLocaleDateString("ru-RU"),thumbnail:"",url:"",category:"match"};p(e),v(!0)};return e.jsxs("div",{children:[e.jsx(a,{className:"mb-8 bg-gradient-to-br from-white to-gray-50",children:e.jsxs(l,{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-fc-green mr-3 flex items-center justify-center",children:e.jsx(y,{className:"h-4 w-4 text-white"})}),e.jsx("span",{children:"Медиагалерея"})]})}),e.jsxs(t,{onClick:b,className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(w,{className:"mr-2 h-4 w-4"})," Добавить медиафайл"]})]})}),u&&g?e.jsx(L,{media:g,onSave:e=>{try{x.some((s=>s.id===e.id))?(q(e),r({title:"Медиафайл обновлен",description:"Медиафайл успешно обновлен"})):(z(e),r({title:"Медиафайл добавлен",description:"Новый медиафайл успешно добавлен"})),j(F()),v(!1),p(null)}catch(s){r({variant:"destructive",title:"Ошибка",description:"Не удалось сохранить медиафайл"})}},onCancel:()=>{v(!1),p(null)}}):e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[x.map((s=>e.jsxs(a,{className:"relative group",children:[e.jsxs("div",{className:"relative aspect-video",children:[e.jsx("img",{src:s.thumbnail,alt:s.title,className:"w-full h-full object-cover rounded-t-lg"}),"video"===s.type&&e.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center",children:e.jsx(C,{className:"h-12 w-12 text-white"})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-medium mb-1 line-clamp-1",children:s.title}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[e.jsx("span",{className:"px-2 py-1 rounded-full bg-gray-100 text-xs",children:s.category}),e.jsx("span",{className:"ml-2",children:s.date})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:"ghost",size:"icon",onClick:()=>(p(s),void v(!0)),className:"text-gray-500 hover:text-gray-700",children:e.jsx(k,{className:"h-4 w-4"})}),e.jsx(t,{variant:"ghost",size:"icon",onClick:()=>{return e=s.id,void N(e);var e},className:"text-red-500 hover:text-red-700",children:e.jsx(S,{className:"h-4 w-4"})})]})]})]})]},s.id))),0===x.length&&e.jsxs(a,{className:"col-span-full p-12 text-center",children:[e.jsx("div",{className:"text-gray-500 mb-4",children:"Медиафайлы не найдены"}),e.jsxs(t,{onClick:b,variant:"outline",children:[e.jsx(w,{className:"mr-2 h-4 w-4"})," Добавить первый медиафайл"]})]})]}),e.jsx(n,{open:!!f,onOpenChange:()=>N(null),children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(m,{children:"Подтверждение удаления"}),e.jsx(o,{children:"Вы уверены, что хотите удалить этот медиафайл? Это действие нельзя будет отменить."})]}),e.jsxs(h,{children:[e.jsx(t,{variant:"outline",onClick:()=>{N(null)},children:"Отмена"}),e.jsx(t,{variant:"destructive",onClick:()=>{if(f){try{D(f),j(F()),r({title:"Медиафайл удален",description:"Медиафайл был успешно удален"})}catch(e){r({variant:"destructive",title:"Ошибка",description:"Не удалось удалить медиафайл"})}N(null)}},children:"Удалить"})]})]})})]})};export{B as default};
