const t=t=>{if(t.startsWith("http")||t.startsWith("data:"))return t;if(!t)return"";return`/bds/${t.replace(/^\/+/,"").replace(/^dist\//,"")}`.replace(/\/+/g,"/")};export{t as g};
