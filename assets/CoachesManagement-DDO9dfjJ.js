import{j as e}from"./ui-core-KiA6hiHm.js";import{r as h,f as S}from"./react-vendor-rxUfhwR6.js";import{g as D,d as k,u as F,c as B}from"./coachOperations-cvUJ2rsP.js";import{g as E,a as T}from"./teamsData-DGCCHY7v.js";import{t as j}from"./index-BPKutU3E.js";import{C as q,a as I,b as L}from"./card-CL2ZgO-Q.js";import{B as f}from"./button-DRU12jmU.js";import{D as M,y as A,l as G,C as H,E as P,z,B as R,X as W,x as Y}from"./ui-utils-DFR8Oa4B.js";import{I as u,L as o}from"./label-CLFdfYuE.js";import{T as U}from"./textarea-DFurvIRQ.js";import"./data-management-Q5I3kbSf.js";const V=({team:s,onAddNew:t})=>e.jsx(q,{className:"mb-8 bg-gradient-to-br from-white to-gray-50",children:e.jsxs(I,{className:"flex flex-row items-center justify-between",children:[e.jsx(L,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full mr-3 flex items-center justify-center",style:{backgroundColor:(s==null?void 0:s.primaryColor)||"#2e7d32"},children:e.jsx(M,{className:"h-4 w-4 text-white"})}),e.jsxs("span",{children:["Управление тренерами: ",(s==null?void 0:s.name)||"Команда"]})]})}),e.jsxs(f,{onClick:t,className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(A,{className:"mr-2 h-4 w-4"})," Добавить тренера"]})]})}),X=({searchTerm:s,onSearchChange:t})=>e.jsxs("div",{className:"relative mb-6",children:[e.jsx(G,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),e.jsx(u,{className:"pl-10",placeholder:"Поиск тренеров по имени или должности...",value:s,onChange:i=>t(i.target.value)})]}),$=({coach:s,onEdit:t,onDelete:i})=>e.jsxs("div",{className:"bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all",children:[e.jsxs("div",{className:"relative h-48",children:[e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"}),e.jsxs("div",{className:"absolute bottom-4 left-4 right-4",children:[e.jsx("div",{className:"text-xs font-medium text-white/70 mb-1",children:s.role}),e.jsx("h3",{className:"text-xl font-bold text-white",children:s.name})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("div",{className:"flex items-center space-x-2",children:e.jsxs("div",{className:"flex items-center text-gray-500",children:[e.jsx(H,{className:"h-4 w-4 mr-1"}),e.jsxs("span",{className:"text-sm",children:["С ",s.since," года"]})]})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(P,{className:"h-4 w-4 text-amber-500"}),e.jsxs("span",{className:"text-sm",children:[s.experience," лет опыта"]})]})]}),e.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-4",children:s.biography}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-auto",children:[e.jsx(f,{variant:"ghost",size:"sm",onClick:()=>t(s),className:"text-blue-600 hover:text-blue-900",children:e.jsx(z,{className:"h-4 w-4"})}),e.jsx(f,{variant:"ghost",size:"sm",onClick:()=>i(s.id),className:"text-red-600 hover:text-red-900",children:e.jsx(R,{className:"h-4 w-4"})})]})]})]}),J=({coaches:s,onEdit:t,onDelete:i})=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[s.map(a=>e.jsx($,{coach:a,onEdit:t,onDelete:i},a.id)),s.length===0&&e.jsx("div",{className:"col-span-full text-center py-12 bg-gray-50 rounded-lg",children:e.jsx("div",{className:"text-gray-500",children:"Тренеры не найдены. Добавьте первого тренера!"})})]}),K=({coach:s,onSave:t,onCancel:i})=>{const[a,m]=h.useState({...s}),p=E(),n=l=>{const{name:c,value:g}=l.target;["experience"].includes(c)?m({...a,[c]:parseInt(g,10)||0}):m({...a,[c]:g})},x=l=>{l.preventDefault(),t(a)};return e.jsxs("form",{onSubmit:x,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",children:"ФИО тренера"}),e.jsx(u,{id:"name",name:"name",value:a.name,onChange:n,required:!0})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"role",children:"Должность"}),e.jsx(u,{id:"role",name:"role",value:a.role,onChange:n,required:!0})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"since",children:"В клубе с"}),e.jsx(u,{id:"since",name:"since",value:a.since,onChange:n,placeholder:"Год",required:!0})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"experience",children:"Опыт работы (лет)"}),e.jsx(u,{id:"experience",name:"experience",type:"number",value:a.experience,onChange:n,min:"0",required:!0})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"teamId",children:"Команда"}),e.jsx("select",{id:"teamId",name:"teamId",value:a.teamId,onChange:n,className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",required:!0,children:p.map(l=>e.jsx("option",{value:l.id,children:l.name},l.id))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"image",children:"URL фото"}),e.jsx(u,{id:"image",name:"image",value:a.image,onChange:n,required:!0})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"biography",children:"Биография"}),e.jsx(U,{id:"biography",name:"biography",value:a.biography,onChange:n,rows:7,required:!0})]})]})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4 border-t border-gray-200",children:[e.jsxs(f,{variant:"outline",type:"button",onClick:i,children:[e.jsx(W,{className:"mr-2 h-4 w-4"})," Отмена"]}),e.jsxs(f,{type:"submit",className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(Y,{className:"mr-2 h-4 w-4"})," Сохранить"]})]})]})},O=({currentCoach:s,onSave:t,onCancel:i})=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mb-6",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h2",{className:"text-xl font-bold",children:s.id.includes("coach-")&&!s.id.includes("coach1")&&!s.id.includes("coach2")&&!s.id.includes("coach3")?"Добавить нового тренера":"Редактировать тренера"})}),e.jsx(K,{coach:s,onSave:t,onCancel:i})]}),ce=()=>{const[s]=S(),t=s.get("team")||"gudauta",[i,a]=h.useState([]),[m,p]=h.useState(""),[n,x]=h.useState(!1),[l,c]=h.useState(null),g=T(t);h.useEffect(()=>{const r=D(t);a(r)},[t]);const b=i.filter(r=>r.name.toLowerCase().includes(m.toLowerCase())||r.role.toLowerCase().includes(m.toLowerCase())),v=r=>{c(r),x(!0)},N=r=>{if(window.confirm("Вы уверены, что хотите удалить этого тренера?"))try{k(r),a(i.filter(d=>d.id!==r)),j({title:"Тренер удален",description:"Тренер был успешно удален из системы"})}catch{j({variant:"destructive",title:"Ошибка",description:"Не удалось удалить тренера"})}},w=()=>{const r={id:`coach-${Date.now()}`,name:"",role:"Тренер",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",since:new Date().getFullYear().toString(),experience:0,biography:"",teamId:t};c(r),x(!0)},y=r=>{try{i.some(d=>d.id===r.id)?(F(r),a(i.map(d=>d.id===r.id?r:d)),j({title:"Тренер обновлен",description:"Информация о тренере успешно обновлена"})):(B(r),a([...i,r]),j({title:"Тренер добавлен",description:"Новый тренер успешно добавлен в систему"})),x(!1),c(null)}catch{j({variant:"destructive",title:"Ошибка",description:"Не удалось сохранить изменения"})}},C=()=>{x(!1),c(null)};return e.jsxs("div",{children:[e.jsx(V,{team:g,onAddNew:w}),n&&l?e.jsx(O,{currentCoach:l,onSave:y,onCancel:C}):e.jsxs(e.Fragment,{children:[e.jsx(X,{searchTerm:m,onSearchChange:p}),e.jsx(J,{coaches:b,onEdit:v,onDelete:N})]})]})};export{ce as default};
//# sourceMappingURL=CoachesManagement-DDO9dfjJ.js.map
