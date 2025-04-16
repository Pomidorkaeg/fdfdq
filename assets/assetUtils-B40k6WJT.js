const r=t=>{if(t.startsWith("http")||t.startsWith("data:"))return t;if(!t)return console.warn("Empty asset path provided to getAssetUrl"),"";const e="/bds/",s=t.replace(/^\/+/,"").replace(/^dist\//,"");return`${e}${s}`.replace(/([^:]\/)\/+/g,"$1")};export{r as g};
//# sourceMappingURL=assetUtils-B40k6WJT.js.map
