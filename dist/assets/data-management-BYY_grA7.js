var t,e,s,i,n,r,a,o,h,u,c,l,d,f,p,y,v,m,g,b,w,O,P,M,q,S,F,k,E,A,C,D,Q,x,R,K,W,j,T,U=t=>{throw TypeError(t)},H=(t,e,s)=>e.has(t)||U("Cannot "+s),G=(t,e,s)=>(H(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),I=(t,e,s,i)=>(H(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),_=(t,e,s)=>(H(t,e,"access private method"),s),N=(t,e,s,i)=>({set _(i){I(t,e,i,s)},get _(){return G(t,e,i)}});import{r as B}from"./react-vendor-CINg3o4D.js";import{j as $}from"./ui-core-ZvML9v_n.js";var z=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},J="undefined"==typeof window||"Deno"in globalThis;function V(){}function X(t,e){return"function"==typeof t?t(e):t}function Y(t,e){const{type:s="all",exact:i,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(a)if(i){if(e.queryHash!==tt(a,e.options))return!1}else if(!st(e.queryKey,a))return!1;if("all"!==s){const t=e.isActive();if("active"===s&&!t)return!1;if("inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&((!n||n===e.state.fetchStatus)&&!(r&&!r(e)))}function Z(t,e){const{exact:s,status:i,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(s){if(et(e.options.mutationKey)!==et(r))return!1}else if(!st(e.options.mutationKey,r))return!1}return(!i||e.state.status===i)&&!(n&&!n(e))}function tt(t,e){return(e?.queryKeyHashFn||et)(t)}function et(t){return JSON.stringify(t,((t,e)=>rt(e)?Object.keys(e).sort().reduce(((t,s)=>(t[s]=e[s],t)),{}):e))}function st(t,e){return t===e||typeof t==typeof e&&(!(!t||!e||"object"!=typeof t||"object"!=typeof e)&&!Object.keys(e).some((s=>!st(t[s],e[s]))))}function it(t,e){if(t===e)return t;const s=nt(t)&&nt(e);if(s||rt(t)&&rt(e)){const i=s?t:Object.keys(t),n=i.length,r=s?e:Object.keys(e),a=r.length,o=s?[]:{};let h=0;for(let u=0;u<a;u++){const n=s?u:r[u];(!s&&i.includes(n)||s)&&void 0===t[n]&&void 0===e[n]?(o[n]=void 0,h++):(o[n]=it(t[n],e[n]),o[n]===t[n]&&void 0!==t[n]&&h++)}return n===a&&h===n?t:o}return e}function nt(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function rt(t){if(!at(t))return!1;const e=t.constructor;if(void 0===e)return!0;const s=e.prototype;return!!at(s)&&(!!s.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(t)===Object.prototype)}function at(t){return"[object Object]"===Object.prototype.toString.call(t)}function ot(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?it(t,e):e}function ht(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function ut(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var ct=Symbol();function lt(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==ct?t.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))}var dt=new(i=class extends z{constructor(){super(),L(this,t),L(this,e),L(this,s),I(this,s,(t=>{if(!J&&window.addEventListener){const e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}))}onSubscribe(){G(this,e)||this.setEventListener(G(this,s))}onUnsubscribe(){var t;this.hasListeners()||(null==(t=G(this,e))||t.call(this),I(this,e,void 0))}setEventListener(t){var i;I(this,s,t),null==(i=G(this,e))||i.call(this),I(this,e,t((t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})))}setFocused(e){G(this,t)!==e&&(I(this,t,e),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach((e=>{e(t)}))}isFocused(){return"boolean"==typeof G(this,t)?G(this,t):"hidden"!==globalThis.document?.visibilityState}},t=new WeakMap,e=new WeakMap,s=new WeakMap,i),ft=new(o=class extends z{constructor(){super(),L(this,n,!0),L(this,r),L(this,a),I(this,a,(t=>{if(!J&&window.addEventListener){const e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}))}onSubscribe(){G(this,r)||this.setEventListener(G(this,a))}onUnsubscribe(){var t;this.hasListeners()||(null==(t=G(this,r))||t.call(this),I(this,r,void 0))}setEventListener(t){var e;I(this,a,t),null==(e=G(this,r))||e.call(this),I(this,r,t(this.setOnline.bind(this)))}setOnline(t){G(this,n)!==t&&(I(this,n,t),this.listeners.forEach((e=>{e(t)})))}isOnline(){return G(this,n)}},n=new WeakMap,r=new WeakMap,a=new WeakMap,o);function pt(t){return Math.min(1e3*2**t,3e4)}function yt(t){return"online"!==(t??"online")||ft.isOnline()}var vt=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function mt(t){return t instanceof vt}function gt(t){let e,s=!1,i=0,n=!1;const r=function(){let t,e;const s=new Promise(((s,i)=>{t=s,e=i}));function i(t){Object.assign(s,t),delete s.resolve,delete s.reject}return s.status="pending",s.catch((()=>{})),s.resolve=e=>{i({status:"fulfilled",value:e}),t(e)},s.reject=t=>{i({status:"rejected",reason:t}),e(t)},s}(),a=()=>dt.isFocused()&&("always"===t.networkMode||ft.isOnline())&&t.canRun(),o=()=>yt(t.networkMode)&&t.canRun(),h=s=>{n||(n=!0,t.onSuccess?.(s),e?.(),r.resolve(s))},u=s=>{n||(n=!0,t.onError?.(s),e?.(),r.reject(s))},c=()=>new Promise((s=>{e=t=>{(n||a())&&s(t)},t.onPause?.()})).then((()=>{e=void 0,n||t.onContinue?.()})),l=()=>{if(n)return;let e;const r=0===i?t.initialPromise:void 0;try{e=r??t.fn()}catch(o){e=Promise.reject(o)}Promise.resolve(e).then(h).catch((e=>{if(n)return;const r=t.retry??(J?0:3),o=t.retryDelay??pt,h="function"==typeof o?o(i,e):o,d=!0===r||"number"==typeof r&&i<r||"function"==typeof r&&r(i,e);var f;!s&&d?(i++,t.onFail?.(i,e),(f=h,new Promise((t=>{setTimeout(t,f)}))).then((()=>a()?void 0:c())).then((()=>{s?u(e):l()}))):u(e)}))};return{promise:r,cancel:e=>{n||(u(new vt(e)),t.abort?.())},continue:()=>(e?.(),r),cancelRetry:()=>{s=!0},continueRetry:()=>{s=!1},canStart:o,start:()=>(o()?l():c().then(l),r)}}var bt=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},n=t=>setTimeout(t,0);const r=i=>{e?t.push(i):n((()=>{s(i)}))};return{batch:r=>{let a;e++;try{a=r()}finally{e--,e||(()=>{const e=t;t=[],e.length&&n((()=>{i((()=>{e.forEach((t=>{s(t)}))}))}))})()}return a},batchCalls:t=>(...e)=>{r((()=>{t(...e)}))},schedule:r,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{n=t}}}(),wt=(u=class{constructor(){L(this,h)}destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&I(this,h,setTimeout((()=>{this.optionalRemove()}),this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(J?1/0:3e5))}clearGcTimeout(){G(this,h)&&(clearTimeout(G(this,h)),I(this,h,void 0))}},h=new WeakMap,u),Ot=(g=class extends wt{constructor(t){super(),L(this,v),L(this,c),L(this,l),L(this,d),L(this,f),L(this,p),L(this,y),I(this,y,!1),I(this,p,t.defaultOptions),this.setOptions(t.options),this.observers=[],I(this,d,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,I(this,c,function(t){const e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options)),this.state=t.state??G(this,c),this.scheduleGc()}get meta(){return this.options.meta}get promise(){return G(this,f)?.promise}setOptions(t){this.options={...G(this,p),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||G(this,d).remove(this)}setData(t,e){const s=ot(this.state.data,t,this.options);return _(this,v,m).call(this,{data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){_(this,v,m).call(this,{type:"setState",state:t,setStateOptions:e})}cancel(t){const e=G(this,f)?.promise;return G(this,f)?.cancel(t),e?e.then(V).catch(V):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(G(this,c))}isActive(){return this.observers.some((t=>{return!1!==(e=t.options.enabled,s=this,"function"==typeof e?e(s):e);var e,s}))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ct||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some((t=>t.getCurrentResult().isStale)):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!function(t,e){return Math.max(t+(e||0)-Date.now(),0)}(this.state.dataUpdatedAt,t)}onFocus(){const t=this.observers.find((t=>t.shouldFetchOnWindowFocus()));t?.refetch({cancelRefetch:!1}),G(this,f)?.continue()}onOnline(){const t=this.observers.find((t=>t.shouldFetchOnReconnect()));t?.refetch({cancelRefetch:!1}),G(this,f)?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),G(this,d).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter((e=>e!==t)),this.observers.length||(G(this,f)&&(G(this,y)?G(this,f).cancel({revert:!0}):G(this,f).cancelRetry()),this.scheduleGc()),G(this,d).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||_(this,v,m).call(this,{type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus)if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(G(this,f))return G(this,f).continueRetry(),G(this,f).promise;if(t&&this.setOptions(t),!this.options.queryFn){const t=this.observers.find((t=>t.options.queryFn));t&&this.setOptions(t.options)}const s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(I(this,y,!0),s.signal)})},n={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{const t=lt(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return i(s),I(this,y,!1),this.options.persister?this.options.persister(t,s,this):t(s)}};i(n),this.options.behavior?.onFetch(n,this),I(this,l,this.state),"idle"!==this.state.fetchStatus&&this.state.fetchMeta===n.fetchOptions?.meta||_(this,v,m).call(this,{type:"fetch",meta:n.fetchOptions?.meta});const r=t=>{mt(t)&&t.silent||_(this,v,m).call(this,{type:"error",error:t}),mt(t)||(G(this,d).config.onError?.(t,this),G(this,d).config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return I(this,f,gt({initialPromise:e?.initialPromise,fn:n.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0!==t){try{this.setData(t)}catch(e){return void r(e)}G(this,d).config.onSuccess?.(t,this),G(this,d).config.onSettled?.(t,this.state.error,this),this.scheduleGc()}else r(new Error(`${this.queryHash} data is undefined`))},onError:r,onFail:(t,e)=>{_(this,v,m).call(this,{type:"failed",failureCount:t,error:e})},onPause:()=>{_(this,v,m).call(this,{type:"pause"})},onContinue:()=>{_(this,v,m).call(this,{type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode,canRun:()=>!0})),G(this,f).start()}},c=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,y=new WeakMap,v=new WeakSet,m=function(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...(s=e.data,i=this.options,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:yt(i.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return mt(n)&&n.revert&&G(this,l)?{...G(this,l),fetchStatus:"idle"}:{...e,error:n,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}var s,i})(this.state),bt.batch((()=>{this.observers.forEach((t=>{t.onQueryUpdate()})),G(this,d).notify({query:this,type:"updated",action:t})}))},g);var Pt=(w=class extends z{constructor(t={}){super(),L(this,b),this.config=t,I(this,b,new Map)}build(t,e,s){const i=e.queryKey,n=e.queryHash??tt(i,e);let r=this.get(n);return r||(r=new Ot({cache:this,queryKey:i,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(r)),r}add(t){G(this,b).has(t.queryHash)||(G(this,b).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const e=G(this,b).get(t.queryHash);e&&(t.destroy(),e===t&&G(this,b).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){bt.batch((()=>{this.getAll().forEach((t=>{this.remove(t)}))}))}get(t){return G(this,b).get(t)}getAll(){return[...G(this,b).values()]}find(t){const e={exact:!0,...t};return this.getAll().find((t=>Y(e,t)))}findAll(t={}){const e=this.getAll();return Object.keys(t).length>0?e.filter((e=>Y(t,e))):e}notify(t){bt.batch((()=>{this.listeners.forEach((e=>{e(t)}))}))}onFocus(){bt.batch((()=>{this.getAll().forEach((t=>{t.onFocus()}))}))}onOnline(){bt.batch((()=>{this.getAll().forEach((t=>{t.onOnline()}))}))}},b=new WeakMap,w),Mt=(F=class extends wt{constructor(t){super(),L(this,q),L(this,O),L(this,P),L(this,M),this.mutationId=t.mutationId,I(this,P,t.mutationCache),I(this,O,[]),this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){G(this,O).includes(t)||(G(this,O).push(t),this.clearGcTimeout(),G(this,P).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){I(this,O,G(this,O).filter((e=>e!==t))),this.scheduleGc(),G(this,P).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){G(this,O).length||("pending"===this.state.status?this.scheduleGc():G(this,P).remove(this))}continue(){return G(this,M)?.continue()??this.execute(this.state.variables)}async execute(t){I(this,M,gt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(t,e)=>{_(this,q,S).call(this,{type:"failed",failureCount:t,error:e})},onPause:()=>{_(this,q,S).call(this,{type:"pause"})},onContinue:()=>{_(this,q,S).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>G(this,P).canRun(this)}));const e="pending"===this.state.status,s=!G(this,M).canStart();try{if(!e){_(this,q,S).call(this,{type:"pending",variables:t,isPaused:s}),await(G(this,P).config.onMutate?.(t,this));const e=await(this.options.onMutate?.(t));e!==this.state.context&&_(this,q,S).call(this,{type:"pending",context:e,variables:t,isPaused:s})}const i=await G(this,M).start();return await(G(this,P).config.onSuccess?.(i,t,this.state.context,this)),await(this.options.onSuccess?.(i,t,this.state.context)),await(G(this,P).config.onSettled?.(i,null,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(i,null,t,this.state.context)),_(this,q,S).call(this,{type:"success",data:i}),i}catch(i){try{throw await(G(this,P).config.onError?.(i,t,this.state.context,this)),await(this.options.onError?.(i,t,this.state.context)),await(G(this,P).config.onSettled?.(void 0,i,this.state.variables,this.state.context,this)),await(this.options.onSettled?.(void 0,i,t,this.state.context)),i}finally{_(this,q,S).call(this,{type:"error",error:i})}}finally{G(this,P).runNext(this)}}},O=new WeakMap,P=new WeakMap,M=new WeakMap,q=new WeakSet,S=function(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),bt.batch((()=>{G(this,O).forEach((e=>{e.onMutationUpdate(t)})),G(this,P).notify({mutation:this,type:"updated",action:t})}))},F);var qt=(A=class extends z{constructor(t={}){super(),L(this,k),L(this,E),this.config=t,I(this,k,new Map),I(this,E,Date.now())}build(t,e,s){const i=new Mt({mutationCache:this,mutationId:++N(this,E)._,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){const e=St(t),s=G(this,k).get(e)??[];s.push(t),G(this,k).set(e,s),this.notify({type:"added",mutation:t})}remove(t){const e=St(t);if(G(this,k).has(e)){const s=G(this,k).get(e)?.filter((e=>e!==t));s&&(0===s.length?G(this,k).delete(e):G(this,k).set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){const e=G(this,k).get(St(t))?.find((t=>"pending"===t.state.status));return!e||e===t}runNext(t){const e=G(this,k).get(St(t))?.find((e=>e!==t&&e.state.isPaused));return e?.continue()??Promise.resolve()}clear(){bt.batch((()=>{this.getAll().forEach((t=>{this.remove(t)}))}))}getAll(){return[...G(this,k).values()].flat()}find(t){const e={exact:!0,...t};return this.getAll().find((t=>Z(e,t)))}findAll(t={}){return this.getAll().filter((e=>Z(t,e)))}notify(t){bt.batch((()=>{this.listeners.forEach((e=>{e(t)}))}))}resumePausedMutations(){const t=this.getAll().filter((t=>t.state.isPaused));return bt.batch((()=>Promise.all(t.map((t=>t.continue().catch(V))))))}},k=new WeakMap,E=new WeakMap,A);function St(t){return t.options.scope?.id??String(t.mutationId)}function Ft(t){return{onFetch:(e,s)=>{const i=e.options,n=e.fetchOptions?.meta?.fetchMore?.direction,r=e.state.data?.pages||[],a=e.state.data?.pageParams||[];let o={pages:[],pageParams:[]},h=0;const u=async()=>{let s=!1;const u=lt(e.options,e.fetchOptions),c=async(t,i,n)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);const r={queryKey:e.queryKey,pageParam:i,direction:n?"backward":"forward",meta:e.options.meta};var a;a=r,Object.defineProperty(a,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",(()=>{s=!0})),e.signal)});const o=await u(r),{maxPages:h}=e.options,c=n?ut:ht;return{pages:c(t.pages,o,h),pageParams:c(t.pageParams,i,h)}};if(n&&r.length){const t="backward"===n,e={pages:r,pageParams:a},s=(t?Et:kt)(i,e);o=await c(e,s,t)}else{const e=t??r.length;do{const t=0===h?a[0]??i.initialPageParam:kt(i,o);if(h>0&&null==t)break;o=await c(o,t),h++}while(h<e)}return o};e.options.persister?e.fetchFn=()=>e.options.persister?.(u,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=u}}}function kt(t,{pages:e,pageParams:s}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function Et(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}var At=(T=class{constructor(t={}){L(this,C),L(this,D),L(this,Q),L(this,x),L(this,R),L(this,K),L(this,W),L(this,j),I(this,C,t.queryCache||new Pt),I(this,D,t.mutationCache||new qt),I(this,Q,t.defaultOptions||{}),I(this,x,new Map),I(this,R,new Map),I(this,K,0)}mount(){N(this,K)._++,1===G(this,K)&&(I(this,W,dt.subscribe((async t=>{t&&(await this.resumePausedMutations(),G(this,C).onFocus())}))),I(this,j,ft.subscribe((async t=>{t&&(await this.resumePausedMutations(),G(this,C).onOnline())}))))}unmount(){var t,e;N(this,K)._--,0===G(this,K)&&(null==(t=G(this,W))||t.call(this),I(this,W,void 0),null==(e=G(this,j))||e.call(this),I(this,j,void 0))}isFetching(t){return G(this,C).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return G(this,D).findAll({...t,status:"pending"}).length}getQueryData(t){const e=this.defaultQueryOptions({queryKey:t});return G(this,C).get(e.queryHash)?.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{const s=this.defaultQueryOptions(t),i=G(this,C).build(this,s);return t.revalidateIfStale&&i.isStaleByTime(X(s.staleTime,i))&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return G(this,C).findAll(t).map((({queryKey:t,state:e})=>[t,e.data]))}setQueryData(t,e,s){const i=this.defaultQueryOptions({queryKey:t}),n=G(this,C).get(i.queryHash),r=n?.state.data,a=function(t,e){return"function"==typeof t?t(e):t}(e,r);if(void 0!==a)return G(this,C).build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return bt.batch((()=>G(this,C).findAll(t).map((({queryKey:t})=>[t,this.setQueryData(t,e,s)]))))}getQueryState(t){const e=this.defaultQueryOptions({queryKey:t});return G(this,C).get(e.queryHash)?.state}removeQueries(t){const e=G(this,C);bt.batch((()=>{e.findAll(t).forEach((t=>{e.remove(t)}))}))}resetQueries(t,e){const s=G(this,C),i={type:"active",...t};return bt.batch((()=>(s.findAll(t).forEach((t=>{t.reset()})),this.refetchQueries(i,e))))}cancelQueries(t={},e={}){const s={revert:!0,...e},i=bt.batch((()=>G(this,C).findAll(t).map((t=>t.cancel(s)))));return Promise.all(i).then(V).catch(V)}invalidateQueries(t={},e={}){return bt.batch((()=>{if(G(this,C).findAll(t).forEach((t=>{t.invalidate()})),"none"===t.refetchType)return Promise.resolve();const s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)}))}refetchQueries(t={},e){const s={...e,cancelRefetch:e?.cancelRefetch??!0},i=bt.batch((()=>G(this,C).findAll(t).filter((t=>!t.isDisabled())).map((t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(V)),"paused"===t.state.fetchStatus?Promise.resolve():e}))));return Promise.all(i).then(V)}fetchQuery(t){const e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);const s=G(this,C).build(this,e);return s.isStaleByTime(X(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(V).catch(V)}fetchInfiniteQuery(t){return t.behavior=Ft(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(V).catch(V)}ensureInfiniteQueryData(t){return t.behavior=Ft(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return ft.isOnline()?G(this,D).resumePausedMutations():Promise.resolve()}getQueryCache(){return G(this,C)}getMutationCache(){return G(this,D)}getDefaultOptions(){return G(this,Q)}setDefaultOptions(t){I(this,Q,t)}setQueryDefaults(t,e){G(this,x).set(et(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...G(this,x).values()];let s={};return e.forEach((e=>{st(t,e.queryKey)&&(s={...s,...e.defaultOptions})})),s}setMutationDefaults(t,e){G(this,R).set(et(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...G(this,R).values()];let s={};return e.forEach((e=>{st(t,e.mutationKey)&&(s={...s,...e.defaultOptions})})),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...G(this,Q).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=tt(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===ct&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...G(this,Q).mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){G(this,C).clear(),G(this,D).clear()}},C=new WeakMap,D=new WeakMap,Q=new WeakMap,x=new WeakMap,R=new WeakMap,K=new WeakMap,W=new WeakMap,j=new WeakMap,T),Ct=B.createContext(void 0),Dt=({client:t,children:e})=>(B.useEffect((()=>(t.mount(),()=>{t.unmount()})),[t]),$.jsx(Ct.Provider,{value:t,children:e}));export{At as Q,Dt as a};
