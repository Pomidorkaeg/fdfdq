const t=()=>{try{const t=localStorage.getItem("media");if(t)return JSON.parse(t)}catch(t){}return[]},e=t=>{try{localStorage.setItem("media",JSON.stringify(t))}catch(e){}},a=()=>t(),s=a=>{const s=t();s.push(a),e(s)},c=a=>{const s=t(),c=s.findIndex((t=>t.id===a.id));-1!==c&&(s[c]=a,e(s))},r=a=>{const s=t().filter((t=>t.id!==a));e(s)};export{s as c,r as d,a as g,c as u};
