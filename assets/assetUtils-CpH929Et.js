const r=t=>{if(t.startsWith("http")||t.startsWith("data:"))return t;if(!t)return console.warn("Empty asset path provided to getAssetUrl"),"";const s="/bds",e=t.replace(/^\/+/,"").replace(/^dist\//,"");return`${s}/${e}`};export{r as g};
