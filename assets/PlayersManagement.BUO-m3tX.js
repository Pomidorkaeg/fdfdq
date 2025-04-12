var B=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var k=(t,s,r)=>s in t?B(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,y=(t,s)=>{for(var r in s||(s={}))H.call(s,r)&&k(t,r,s[r]);if(C)for(var r of C(s))T.call(s,r)&&k(t,r,s[r]);return t},w=(t,s)=>L(t,M(s));import{j as e,X as F,E as A,f as G,H as z,p as R,J as U,K as J}from"./ui-vendor.DWGyxuWi.js";import{r as p,f as K}from"./react-vendor.CH4rSmuv.js";import{B as u}from"./button.DuKhB4LP.js";import{L as l,I as d}from"./label.CvpdL827.js";import{g as O,a as V}from"./teamsData.D1BE5CGF.js";import{t as h}from"./index.D3-Zy1sx.js";import{g as W,d as X,u as Y,c as $}from"./playerOperations.mDttqfWy.js";import{D as Q,a as Z,b as _,c as ee,d as se,e as te}from"./dialog.uGaaAFJy.js";import{C as re,a as ie,b as ae}from"./card.hd0HJqtR.js";import"./query.BAnY0AdF.js";const ne=({formData:t,handleChange:s})=>{const r=O();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",children:"ФИО игрока"}),e.jsx(d,{id:"name",name:"name",value:t.name,onChange:s,required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"position",children:"Позиция"}),e.jsxs("select",{id:"position",name:"position",value:t.position,onChange:s,className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",required:!0,children:[e.jsx("option",{value:"Вратарь",children:"Вратарь"}),e.jsx("option",{value:"Защитник",children:"Защитник"}),e.jsx("option",{value:"Полузащитник",children:"Полузащитник"}),e.jsx("option",{value:"Нападающий",children:"Нападающий"})]})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"number",children:"Номер"}),e.jsx(d,{id:"number",name:"number",type:"number",value:t.number,onChange:s,min:"1",max:"99",required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"nationality",children:"Национальность"}),e.jsx(d,{id:"nationality",name:"nationality",value:t.nationality,onChange:s,required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"birthDate",children:"Дата рождения"}),e.jsx(d,{id:"birthDate",name:"birthDate",value:t.birthDate,onChange:s,placeholder:"ДД.ММ.ГГГГ",required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"teamId",children:"Команда"}),e.jsx("select",{id:"teamId",name:"teamId",value:t.teamId,onChange:s,className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",required:!0,children:r.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))})]})]})},le=({formData:t,handleChange:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"image",children:"URL фото"}),e.jsx(d,{id:"image",name:"image",value:t.image,onChange:s,required:!0})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"height",children:"Рост (см)"}),e.jsx(d,{id:"height",name:"height",type:"number",value:t.height,onChange:s,min:"150",max:"220",required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"weight",children:"Вес (кг)"}),e.jsx(d,{id:"weight",name:"weight",type:"number",value:t.weight,onChange:s,min:"50",max:"120",required:!0})]})]})]}),de=({formData:t,handleChange:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"matches",children:"Матчи"}),e.jsx(d,{id:"matches",name:"matches",type:"number",value:t.matches,onChange:s,min:"0",required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"goals",children:"Голы"}),e.jsx(d,{id:"goals",name:"goals",type:"number",value:t.goals,onChange:s,min:"0",required:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"assists",children:"Передачи"}),e.jsx(d,{id:"assists",name:"assists",type:"number",value:t.assists,onChange:s,min:"0",required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"yellowCards",children:"Жёлтые карточки"}),e.jsx(d,{id:"yellowCards",name:"yellowCards",type:"number",value:t.yellowCards,onChange:s,min:"0",required:!0})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"redCards",children:"Красные карточки"}),e.jsx(d,{id:"redCards",name:"redCards",type:"number",value:t.redCards,onChange:s,min:"0",required:!0})]})]})]}),ce=({player:t,onSave:s,onCancel:r})=>{const[a,g]=p.useState(y({},t)),m=x=>{const{name:c,value:j}=x.target;["number","height","weight","matches","goals","assists","yellowCards","redCards"].includes(c)?g(w(y({},a),{[c]:parseInt(j,10)||0})):g(w(y({},a),{[c]:j}))},n=x=>{x.preventDefault();try{if(!a.name.trim()){h({variant:"destructive",title:"Ошибка",description:"Имя игрока не может быть пустым"});return}if(a.number<1||a.number>99){h({variant:"destructive",title:"Ошибка",description:"Номер игрока должен быть от 1 до 99"});return}s(a)}catch(c){h({variant:"destructive",title:"Ошибка при сохранении",description:"Произошла ошибка при сохранении игрока"})}};return e.jsxs("form",{onSubmit:n,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(ne,{formData:a,handleChange:m}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(le,{formData:a,handleChange:m}),e.jsx(de,{formData:a,handleChange:m})]})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4 border-t border-gray-200",children:[e.jsxs(u,{variant:"outline",type:"button",onClick:r,children:[e.jsx(F,{className:"mr-2 h-4 w-4"})," Отмена"]}),e.jsxs(u,{type:"submit",className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(A,{className:"mr-2 h-4 w-4"})," Сохранить"]})]})]})},oe=({player:t,onSave:s,onCancel:r})=>e.jsx(ce,{player:t,onSave:s,onCancel:r}),me=({teamName:t,primaryColor:s,onAddNew:r})=>e.jsx(re,{className:"mb-8 bg-gradient-to-br from-white to-gray-50",children:e.jsxs(ie,{className:"flex flex-row items-center justify-between",children:[e.jsx(ae,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full mr-3 flex items-center justify-center",style:{backgroundColor:s||"#2e7d32"},children:e.jsx(G,{className:"h-4 w-4 text-white"})}),e.jsxs("span",{children:["Управление игроками: ",t]})]})}),e.jsxs(u,{onClick:r,className:"bg-fc-green hover:bg-fc-darkGreen",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Добавить игрока"]})]})}),xe=({searchTerm:t,setSearchTerm:s})=>e.jsxs("div",{className:"relative mb-6",children:[e.jsx(R,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),e.jsx(d,{className:"pl-10",placeholder:"Поиск игроков по имени или позиции...",value:t,onChange:r=>s(r.target.value)})]}),he=({players:t,searchTerm:s,primaryColor:r,onEdit:a,onDelete:g})=>{const m=t.filter(n=>n.name.toLowerCase().includes(s.toLowerCase())||n.position.toLowerCase().includes(s.toLowerCase()));return e.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"№"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Игрок"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Позиция"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Характеристики"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Статистика"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Действия"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[m.map(n=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full text-white font-medium text-sm",style:{backgroundColor:r||"#2e7d32"},children:n.number})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex-shrink-0 h-10 w-10",children:e.jsx("img",{className:"h-10 w-10 rounded-full object-cover",src:n.image,alt:n.name})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:n.name}),e.jsx("div",{className:"text-sm text-gray-500",children:n.nationality})]})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:n.position})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:[n.height," см, ",n.weight," кг"]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("span",{className:"px-2 py-1 text-xs rounded bg-blue-100 text-blue-800",children:[n.matches," матчей"]}),e.jsxs("span",{className:"px-2 py-1 text-xs rounded bg-green-100 text-green-800",children:[n.goals," голов"]})]})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:[e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>a(n),className:"text-blue-600 hover:text-blue-900 mr-2",children:e.jsx(U,{className:"h-4 w-4"})}),e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>g(n.id),className:"text-red-600 hover:text-red-900",children:e.jsx(J,{className:"h-4 w-4"})})]})]},n.id)),m.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"px-6 py-10 text-center text-gray-500",children:"Игроки не найдены. Добавьте первого игрока!"})})]})]})})},ke=()=>{const[t]=K(),s=t.get("team")||"gudauta",[r,a]=p.useState([]),[g,m]=p.useState(""),[n,x]=p.useState(!1),[c,j]=p.useState(null),[v,b]=p.useState(null),o=V(s);p.useEffect(()=>{const i=W(s);a(i)},[s]);const P=i=>{j(i),x(!0)},S=i=>{b(i)},D=()=>{if(v)try{X(v),a(r.filter(i=>i.id!==v)),h({title:"Игрок удален",description:"Игрок был успешно удален из системы"}),b(null)}catch(i){h({variant:"destructive",title:"Ошибка",description:"Не удалось удалить игрока"})}},q=()=>{b(null)},I=()=>{const i={id:`player-${Date.now()}`,name:"",position:"Нападающий",number:r.length+1,birthDate:"",height:180,weight:75,nationality:"Россия",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",matches:0,goals:0,assists:0,yellowCards:0,redCards:0,teamId:s};j(i),x(!0)},E=i=>{try{r.some(f=>f.id===i.id)?(Y(i),a(r.map(f=>f.id===i.id?i:f)),h({title:"Игрок обновлен",description:"Информация об игроке успешно обновлена"})):($(i),a([...r,i]),h({title:"Игрок добавлен",description:"Новый игрок успешно добавлен в систему"})),x(!1),j(null)}catch(f){h({variant:"destructive",title:"Ошибка",description:"Не удалось сохранить изменения"})}},N=()=>{x(!1),j(null)};return e.jsxs("div",{children:[e.jsx(me,{teamName:(o==null?void 0:o.name)||"Команда",primaryColor:(o==null?void 0:o.primaryColor)||"#2e7d32",onAddNew:I}),n&&c?e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:c.id.includes("player-")&&!r.some(i=>i.id===c.id)?"Добавить нового игрока":"Редактировать игрока"}),e.jsx("div",{className:"flex space-x-2",children:e.jsxs(u,{variant:"outline",size:"sm",onClick:N,children:[e.jsx(F,{className:"mr-2 h-4 w-4"})," Отмена"]})})]}),e.jsx(oe,{player:c,onSave:E,onCancel:N})]}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{searchTerm:g,setSearchTerm:m}),e.jsx(he,{players:r,searchTerm:g,primaryColor:(o==null?void 0:o.primaryColor)||"#2e7d32",onEdit:P,onDelete:S})]}),e.jsx(Q,{open:!!v,onOpenChange:i=>!i&&b(null),children:e.jsxs(Z,{children:[e.jsxs(_,{children:[e.jsx(ee,{children:"Подтверждение удаления"}),e.jsx(se,{children:"Вы уверены, что хотите удалить этого игрока? Это действие нельзя будет отменить."})]}),e.jsxs(te,{children:[e.jsx(u,{variant:"outline",onClick:q,children:"Отмена"}),e.jsx(u,{variant:"destructive",onClick:D,children:"Удалить"})]})]})})]})};export{ke as default};
//# sourceMappingURL=PlayersManagement.BUO-m3tX.js.map
