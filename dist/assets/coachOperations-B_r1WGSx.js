const e=[{id:"coach1",name:"Александр Иванов",role:"Главный тренер",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",since:"2018",experience:15,biography:"Александр Иванов - опытный тренер с богатым опытом в профессиональном футболе. Под его руководством команда добилась значительных успехов на региональных соревнованиях.",teamId:"gudauta"},{id:"coach2",name:"Сергей Петров",role:"Тренер вратарей",image:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3",since:"2019",experience:12,biography:"Сергей Петров специализируется на подготовке вратарей. Ранее выступал за профессиональные клубы России и имеет богатый опыт работы с молодыми спортсменами.",teamId:"gudauta"},{id:"coach3",name:"Дмитрий Александрович Сидоров",role:"Руководитель спортивной школы",image:"https://images.unsplash.com/photo-1571512599940-7dfed49b7e00?ixlib=rb-4.0.3",since:"2015",experience:18,biography:"Дмитрий Александрович руководит спортивной школой Гудаута с момента её основания. Под его руководством была разработана уникальная методика подготовки молодых футболистов.",teamId:"gudauta-school"}],a=e=>{try{localStorage.setItem("coaches",JSON.stringify(e))}catch(a){}};let t=(()=>{try{const e=localStorage.getItem("coaches");if(e)return JSON.parse(e)}catch(a){}try{localStorage.setItem("coaches",JSON.stringify(e))}catch(a){}return e})();const c=e=>t.filter((a=>a.teamId===e)),i=e=>{t=t.map((a=>a.id===e.id?e:a)),a(t)},o=e=>{t.push(e),a(t)},s=e=>{t=t.filter((a=>a.id!==e)),a(t)};export{o as c,s as d,c as g,i as u};
