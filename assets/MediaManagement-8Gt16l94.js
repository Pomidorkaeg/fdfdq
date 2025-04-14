import{j as e,X as s,E as a,s as l,H as i,Z as t,J as r,K as n}from"./ui-dsA3UTJJ.js";import{r as c}from"./vendor-VrRidEet.js";import{C as d,a as m,b as h}from"./card-DTOVq60Q.js";import{B as o}from"./button-DhUj6jFD.js";import{t as x}from"./index-C5T_0QIt.js";import{D as j,a as u,b as v,c as g,d as p,e as f}from"./dialog-aqK-hrSm.js";import{L as N,I as b}from"./label-5gP1uu55.js";import{S as y,a as w,b as C,c as k,d as S}from"./select-BllBYXzh.js";import{g as F,d as D,u as q,c as L}from"./mediaOperations-CzKeZFWW.js";const z=({media:l,onSave:i,onCancel:t})=>{const[r,n]=c.useState(l),m=e=>{const{name:s,value:a}="target"in e?e.target:e;n((e=>({...e,[s]:a})))};return e.jsx("form",{onSubmit:e=>{e.preventDefault(),i(r)},children:e.jsxs(d,{className:"p-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(N,{htmlFor:"title",children:"Заголовок"}),e.jsx(b,{id:"title",name:"title",value:r.title,onChange:m,required:!0})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"type",children:"Тип медиа"}),e.jsxs(y,{value:r.type,onValueChange:e=>m({name:"type",value:e}),children:[e.jsx(w,{children:e.jsx(C,{})}),e.jsxs(k,{children:[e.jsx(S,{value:"image",children:"Фото"}),e.jsx(S,{value:"video",children:"Видео"})]})]})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"category",children:"Категория"}),e.jsxs(y,{value:r.category,onValueChange:e=>m({name:"category",value:e}),children:[e.jsx(w,{children:e.jsx(C,{})}),e.jsxs(k,{children:[e.jsx(S,{value:"match",children:"Матчи"}),e.jsx(S,{value:"training",children:"Тренировки"}),e.jsx(S,{value:"interview",children:"Интервью"}),e.jsx(S,{value:"stadium",children:"Стадион"}),e.jsx(S,{value:"academy",children:"Академия"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(N,{htmlFor:"thumbnail",children:"URL миниатюры"}),e.jsx(b,{id:"thumbnail",name:"thumbnail",value:r.thumbnail,onChange:m,required:!0}),r.thumbnail&&e.jsx("div",{className:"mt-2 rounded-lg overflow-hidden aspect-video",children:e.jsx("img",{src:r.thumbnail,alt:"Preview",className:"w-full h-full object-cover"})})]}),e.jsxs("div",{children:[e.jsxs(N,{htmlFor:"url",children:["URL ","video"===r.type?"видео":"изображения"]}),e.jsx(b,{id:"url",name:"url",value:r.url,onChange:m,required:!0})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:"date",children:"Дата"}),e.jsx(b,{id:"date",name:"date",type:"text",value:r.date,onChange:m,required:!0})]})]})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-6 pt-4 border-t",children:[e.jsxs(o,{variant:"outline",type:"button",onClick:t,children:[e.jsx(s,{className:"mr-2 h-4 w-4"})," Отмена"]}),e.jsxs(o,{type:"submit",className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(a,{className:"mr-2 h-4 w-4"})," Сохранить"]})]})]})})},R=()=>{const[s,a]=c.useState([]),[N,b]=c.useState(!1),[y,w]=c.useState(null),[C,k]=c.useState(null);c.useEffect((()=>{a(F())}),[]);const S=()=>{const e={id:`media-${Date.now()}`,type:"image",title:"",date:(new Date).toLocaleDateString("ru-RU"),thumbnail:"",url:"",category:"match"};w(e),b(!0)};return e.jsxs("div",{children:[e.jsx(d,{className:"mb-8 bg-gradient-to-br from-white to-gray-50",children:e.jsxs(m,{className:"flex flex-row items-center justify-between",children:[e.jsx(h,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-fc-green mr-3 flex items-center justify-center",children:e.jsx(l,{className:"h-4 w-4 text-white"})}),e.jsx("span",{children:"Медиагалерея"})]})}),e.jsxs(o,{onClick:S,className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(i,{className:"mr-2 h-4 w-4"})," Добавить медиафайл"]})]})}),N&&y?e.jsx(z,{media:y,onSave:e=>{try{s.some((s=>s.id===e.id))?(q(e),x({title:"Медиафайл обновлен",description:"Медиафайл успешно обновлен"})):(L(e),x({title:"Медиафайл добавлен",description:"Новый медиафайл успешно добавлен"})),a(F()),b(!1),w(null)}catch(l){x({variant:"destructive",title:"Ошибка",description:"Не удалось сохранить медиафайл"})}},onCancel:()=>{b(!1),w(null)}}):e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[s.map((s=>e.jsxs(d,{className:"relative group",children:[e.jsxs("div",{className:"relative aspect-video",children:[e.jsx("img",{src:s.thumbnail,alt:s.title,className:"w-full h-full object-cover rounded-t-lg"}),"video"===s.type&&e.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center",children:e.jsx(t,{className:"h-12 w-12 text-white"})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-medium mb-1 line-clamp-1",children:s.title}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[e.jsx("span",{className:"px-2 py-1 rounded-full bg-gray-100 text-xs",children:s.category}),e.jsx("span",{className:"ml-2",children:s.date})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{variant:"ghost",size:"icon",onClick:()=>(w(s),void b(!0)),className:"text-gray-500 hover:text-gray-700",children:e.jsx(r,{className:"h-4 w-4"})}),e.jsx(o,{variant:"ghost",size:"icon",onClick:()=>{return e=s.id,void k(e);var e},className:"text-red-500 hover:text-red-700",children:e.jsx(n,{className:"h-4 w-4"})})]})]})]})]},s.id))),0===s.length&&e.jsxs(d,{className:"col-span-full p-12 text-center",children:[e.jsx("div",{className:"text-gray-500 mb-4",children:"Медиафайлы не найдены"}),e.jsxs(o,{onClick:S,variant:"outline",children:[e.jsx(i,{className:"mr-2 h-4 w-4"})," Добавить первый медиафайл"]})]})]}),e.jsx(j,{open:!!C,onOpenChange:()=>k(null),children:e.jsxs(u,{children:[e.jsxs(v,{children:[e.jsx(g,{children:"Подтверждение удаления"}),e.jsx(p,{children:"Вы уверены, что хотите удалить этот медиафайл? Это действие нельзя будет отменить."})]}),e.jsxs(f,{children:[e.jsx(o,{variant:"outline",onClick:()=>{k(null)},children:"Отмена"}),e.jsx(o,{variant:"destructive",onClick:()=>{if(C){try{D(C),a(F()),x({title:"Медиафайл удален",description:"Медиафайл был успешно удален"})}catch(e){x({variant:"destructive",title:"Ошибка",description:"Не удалось удалить медиафайл"})}k(null)}},children:"Удалить"})]})]})})]})};export{R as default};
