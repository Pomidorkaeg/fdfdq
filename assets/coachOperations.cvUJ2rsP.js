const t=[{id:"coach1",name:"Александр Иванов",role:"Главный тренер",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",since:"2018",experience:15,biography:"Александр Иванов - опытный тренер с богатым опытом в профессиональном футболе. Под его руководством команда добилась значительных успехов на региональных соревнованиях.",teamId:"gudauta"},{id:"coach2",name:"Сергей Петров",role:"Тренер вратарей",image:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3",since:"2019",experience:12,biography:"Сергей Петров специализируется на подготовке вратарей. Ранее выступал за профессиональные клубы России и имеет богатый опыт работы с молодыми спортсменами.",teamId:"gudauta"},{id:"coach3",name:"Дмитрий Александрович Сидоров",role:"Руководитель спортивной школы",image:"https://images.unsplash.com/photo-1571512599940-7dfed49b7e00?ixlib=rb-4.0.3",since:"2015",experience:18,biography:"Дмитрий Александрович руководит спортивной школой Гудаута с момента её основания. Под его руководством была разработана уникальная методика подготовки молодых футболистов.",teamId:"gudauta-school"}],r=()=>{try{const e=localStorage.getItem("coaches");if(e)return JSON.parse(e)}catch(e){console.error("Failed to load coaches from localStorage:",e)}try{localStorage.setItem("coaches",JSON.stringify(t))}catch(e){console.error("Failed to save initial coaches to localStorage:",e)}return t},c=e=>{try{localStorage.setItem("coaches",JSON.stringify(e))}catch(o){console.error("Failed to save coaches to localStorage:",o)}};let a=r();const s=e=>a.filter(o=>o.teamId===e),i=e=>{a=a.map(o=>o.id===e.id?e:o),c(a)},l=e=>{a.push(e),c(a)},h=e=>{a=a.filter(o=>o.id!==e),c(a)};export{l as c,h as d,s as g,i as u};
//# sourceMappingURL=coachOperations.cvUJ2rsP.js.map
