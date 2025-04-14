import{_ as e,$ as t,a0 as n,a1 as o,j as r,a2 as a,a3 as l,a4 as s,a5 as i,a6 as c,a7 as d,a8 as u,a9 as p,aa as f,ab as m,ac as h,ad as v,ae as g,af as x,r as w,ag as y,ah as b}from"./ui-dsA3UTJJ.js";import{r as S,a as C}from"./vendor-VrRidEet.js";import{h as j,u as N,R,F as P}from"./dialog-aqK-hrSm.js";import{c as _}from"./index-C5T_0QIt.js";function T(e,[t,n]){return Math.min(n,Math.max(t,e))}var I=S.createContext(void 0);var k=[" ","Enter","ArrowUp","ArrowDown"],D=[" ","Enter"],E="Select",[M,L,O]=e(E),[H,A]=t(E,[O,n]),V=n(),[B,K]=H(E),[F,W]=H(E),z=e=>{const{__scopeSelect:t,children:n,open:o,defaultOpen:a,onOpenChange:l,value:s,defaultValue:i,onValueChange:c,dir:d,name:u,autoComplete:f,disabled:m,required:h,form:x}=e,w=V(t),[y,b]=S.useState(null),[C,j]=S.useState(null),[N,R]=S.useState(!1),P=function(e){const t=S.useContext(I);return e||t||"ltr"}(d),[_=!1,T]=v({prop:o,defaultProp:a,onChange:l}),[k,D]=v({prop:s,defaultProp:i,onChange:c}),E=S.useRef(null),L=!y||(x||!!y.closest("form")),[O,H]=S.useState(new Set),A=Array.from(O).map((e=>e.props.value)).join(";");return r.jsx(g,{...w,children:r.jsxs(B,{required:h,scope:t,trigger:y,onTriggerChange:b,valueNode:C,onValueNodeChange:j,valueNodeHasChildren:N,onValueNodeHasChildrenChange:R,contentId:p(),value:k,onValueChange:D,open:_,onOpenChange:T,dir:P,triggerPointerDownPosRef:E,disabled:m,children:[r.jsx(M.Provider,{scope:t,children:r.jsx(F,{scope:e.__scopeSelect,onNativeOptionAdd:S.useCallback((e=>{H((t=>new Set(t).add(e)))}),[]),onNativeOptionRemove:S.useCallback((e=>{H((t=>{const n=new Set(t);return n.delete(e),n}))}),[]),children:n})}),L?r.jsxs(Ie,{"aria-hidden":!0,required:h,tabIndex:-1,name:u,autoComplete:f,value:k,onChange:e=>D(e.target.value),disabled:m,form:x,children:[void 0===k?r.jsx("option",{value:""}):null,Array.from(O)]},A):null]})})};z.displayName=E;var U="SelectTrigger",q=S.forwardRef(((e,t)=>{const{__scopeSelect:n,disabled:i=!1,...c}=e,d=V(n),u=K(U,n),p=u.disabled||i,f=o(t,u.onTriggerChange),m=L(n),h=S.useRef("touch"),[v,g,x]=ke((e=>{const t=m().filter((e=>!e.disabled)),n=t.find((e=>e.value===u.value)),o=De(t,e,n);void 0!==o&&u.onValueChange(o.value)})),w=e=>{p||(u.onOpenChange(!0),x()),e&&(u.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return r.jsx(a,{asChild:!0,...d,children:r.jsx(l.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":Te(u.value)?"":void 0,...c,ref:f,onClick:s(c.onClick,(e=>{e.currentTarget.focus(),"mouse"!==h.current&&w(e)})),onPointerDown:s(c.onPointerDown,(e=>{h.current=e.pointerType;const t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(w(e),e.preventDefault())})),onKeyDown:s(c.onKeyDown,(e=>{const t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||g(e.key),t&&" "===e.key||k.includes(e.key)&&(w(),e.preventDefault())}))})})}));q.displayName=U;var X="SelectValue",Y=S.forwardRef(((e,t)=>{const{__scopeSelect:n,className:a,style:s,children:c,placeholder:d="",...u}=e,p=K(X,n),{onValueNodeHasChildrenChange:f}=p,m=void 0!==c,h=o(t,p.onValueNodeChange);return i((()=>{f(m)}),[f,m]),r.jsx(l.span,{...u,ref:h,style:{pointerEvents:"none"},children:Te(p.value)?r.jsx(r.Fragment,{children:d}):c})}));Y.displayName=X;var $=S.forwardRef(((e,t)=>{const{__scopeSelect:n,children:o,...a}=e;return r.jsx(l.span,{"aria-hidden":!0,...a,ref:t,children:o||"▼"})}));$.displayName="SelectIcon";var G=e=>r.jsx(x,{asChild:!0,...e});G.displayName="SelectPortal";var Z="SelectContent",J=S.forwardRef(((e,t)=>{const n=K(Z,e.__scopeSelect),[o,a]=S.useState();if(i((()=>{a(new DocumentFragment)}),[]),!n.open){const t=o;return t?C.createPortal(r.jsx(ee,{scope:e.__scopeSelect,children:r.jsx(M.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),t):null}return r.jsx(ne,{...e,ref:t})}));J.displayName=Z;var Q=10,[ee,te]=H(Z),ne=S.forwardRef(((e,t)=>{const{__scopeSelect:n,position:a="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:i,onPointerDownOutside:u,side:p,sideOffset:f,align:m,alignOffset:h,arrowPadding:v,collisionBoundary:g,collisionPadding:x,sticky:w,hideWhenDetached:y,avoidCollisions:b,...C}=e,_=K(Z,n),[T,I]=S.useState(null),[k,D]=S.useState(null),E=o(t,(e=>I(e))),[M,O]=S.useState(null),[H,A]=S.useState(null),V=L(n),[B,F]=S.useState(!1),W=S.useRef(!1);S.useEffect((()=>{if(T)return j(T)}),[T]),N();const z=S.useCallback((e=>{const[t,...n]=V().map((e=>e.ref.current)),[o]=n.slice(-1),r=document.activeElement;for(const a of e){if(a===r)return;if(null==a||a.scrollIntoView({block:"nearest"}),a===t&&k&&(k.scrollTop=0),a===o&&k&&(k.scrollTop=k.scrollHeight),null==a||a.focus(),document.activeElement!==r)return}}),[V,k]),U=S.useCallback((()=>z([M,T])),[z,M,T]);S.useEffect((()=>{B&&U()}),[B,U]);const{onOpenChange:q,triggerPointerDownPosRef:X}=_;S.useEffect((()=>{if(T){let e={x:0,y:0};const t=t=>{var n,o;e={x:Math.abs(Math.round(t.pageX)-((null==(n=X.current)?void 0:n.x)??0)),y:Math.abs(Math.round(t.pageY)-((null==(o=X.current)?void 0:o.y)??0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():T.contains(n.target)||q(!1),document.removeEventListener("pointermove",t),X.current=null};return null!==X.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}}),[T,q,X]),S.useEffect((()=>{const e=()=>q(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}}),[q]);const[Y,$]=ke((e=>{const t=V().filter((e=>!e.disabled)),n=t.find((e=>e.ref.current===document.activeElement)),o=De(t,e,n);o&&setTimeout((()=>o.ref.current.focus()))})),G=S.useCallback(((e,t,n)=>{const o=!W.current&&!n;(void 0!==_.value&&_.value===t||o)&&(O(e),o&&(W.current=!0))}),[_.value]),J=S.useCallback((()=>null==T?void 0:T.focus()),[T]),Q=S.useCallback(((e,t,n)=>{const o=!W.current&&!n;(void 0!==_.value&&_.value===t||o)&&A(e)}),[_.value]),te="popper"===a?re:oe,ne=te===re?{side:p,sideOffset:f,align:m,alignOffset:h,arrowPadding:v,collisionBoundary:g,collisionPadding:x,sticky:w,hideWhenDetached:y,avoidCollisions:b}:{};return r.jsx(ee,{scope:n,content:T,viewport:k,onViewportChange:D,itemRefCallback:G,selectedItem:M,onItemLeave:J,itemTextRefCallback:Q,focusSelectedItem:U,selectedItemText:H,position:a,isPositioned:B,searchRef:Y,children:r.jsx(R,{as:c,allowPinchZoom:!0,children:r.jsx(P,{asChild:!0,trapped:_.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:s(l,(e=>{var t;null==(t=_.trigger)||t.focus({preventScroll:!0}),e.preventDefault()})),children:r.jsx(d,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>_.onOpenChange(!1),children:r.jsx(te,{role:"listbox",id:_.contentId,"data-state":_.open?"open":"closed",dir:_.dir,onContextMenu:e=>e.preventDefault(),...C,...ne,onPlaced:()=>F(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:s(C.onKeyDown,(e=>{const t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||$(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=V().filter((e=>!e.disabled)).map((e=>e.ref.current));if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){const n=e.target,o=t.indexOf(n);t=t.slice(o+1)}setTimeout((()=>z(t))),e.preventDefault()}}))})})})})})}));ne.displayName="SelectContentImpl";var oe=S.forwardRef(((e,t)=>{const{__scopeSelect:n,onPlaced:a,...s}=e,c=K(Z,n),d=te(Z,n),[u,p]=S.useState(null),[f,m]=S.useState(null),h=o(t,(e=>m(e))),v=L(n),g=S.useRef(!1),x=S.useRef(!0),{viewport:w,selectedItem:y,selectedItemText:b,focusSelectedItem:C}=d,j=S.useCallback((()=>{if(c.trigger&&c.valueNode&&u&&f&&w&&y&&b){const e=c.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=c.valueNode.getBoundingClientRect(),o=b.getBoundingClientRect();if("rtl"!==c.dir){const r=o.left-t.left,a=n.left-r,l=e.left-a,s=e.width+l,i=Math.max(s,t.width),c=window.innerWidth-Q,d=T(a,[Q,Math.max(Q,c-i)]);u.style.minWidth=s+"px",u.style.left=d+"px"}else{const r=t.right-o.right,a=window.innerWidth-n.right-r,l=window.innerWidth-e.right-a,s=e.width+l,i=Math.max(s,t.width),c=window.innerWidth-Q,d=T(a,[Q,Math.max(Q,c-i)]);u.style.minWidth=s+"px",u.style.right=d+"px"}const r=v(),l=window.innerHeight-2*Q,s=w.scrollHeight,i=window.getComputedStyle(f),d=parseInt(i.borderTopWidth,10),p=parseInt(i.paddingTop,10),m=parseInt(i.borderBottomWidth,10),h=d+p+s+parseInt(i.paddingBottom,10)+m,x=Math.min(5*y.offsetHeight,h),S=window.getComputedStyle(w),C=parseInt(S.paddingTop,10),j=parseInt(S.paddingBottom,10),N=e.top+e.height/2-Q,R=l-N,P=y.offsetHeight/2,_=d+p+(y.offsetTop+P),I=h-_;if(_<=N){const e=r.length>0&&y===r[r.length-1].ref.current;u.style.bottom="0px";const t=f.clientHeight-w.offsetTop-w.offsetHeight,n=_+Math.max(R,P+(e?j:0)+t+m);u.style.height=n+"px"}else{const e=r.length>0&&y===r[0].ref.current;u.style.top="0px";const t=Math.max(N,d+w.offsetTop+(e?C:0)+P)+I;u.style.height=t+"px",w.scrollTop=_-N+w.offsetTop}u.style.margin=`${Q}px 0`,u.style.minHeight=x+"px",u.style.maxHeight=l+"px",null==a||a(),requestAnimationFrame((()=>g.current=!0))}}),[v,c.trigger,c.valueNode,u,f,w,y,b,c.dir,a]);i((()=>j()),[j]);const[N,R]=S.useState();i((()=>{f&&R(window.getComputedStyle(f).zIndex)}),[f]);const P=S.useCallback((e=>{e&&!0===x.current&&(j(),null==C||C(),x.current=!1)}),[j,C]);return r.jsx(ae,{scope:n,contentWrapper:u,shouldExpandOnScrollRef:g,onScrollButtonChange:P,children:r.jsx("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N},children:r.jsx(l.div,{...s,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})}));oe.displayName="SelectItemAlignedPosition";var re=S.forwardRef(((e,t)=>{const{__scopeSelect:n,align:o="start",collisionPadding:a=Q,...l}=e,s=V(n);return r.jsx(u,{...s,...l,ref:t,align:o,collisionPadding:a,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})}));re.displayName="SelectPopperPosition";var[ae,le]=H(Z,{}),se="SelectViewport",ie=S.forwardRef(((e,t)=>{const{__scopeSelect:n,nonce:a,...i}=e,c=te(se,n),d=le(se,n),u=o(t,c.onViewportChange),p=S.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),r.jsx(M.Slot,{scope:n,children:r.jsx(l.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:u,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:s(i.onScroll,(e=>{const t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:o}=d;if((null==o?void 0:o.current)&&n){const e=Math.abs(p.current-t.scrollTop);if(e>0){const o=window.innerHeight-2*Q,r=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),l=Math.max(r,a);if(l<o){const r=l+e,a=Math.min(o,r),s=r-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=s>0?s:0,n.style.justifyContent="flex-end")}}}p.current=t.scrollTop}))})})]})}));ie.displayName=se;var ce="SelectGroup",[de,ue]=H(ce);S.forwardRef(((e,t)=>{const{__scopeSelect:n,...o}=e,a=p();return r.jsx(de,{scope:n,id:a,children:r.jsx(l.div,{role:"group","aria-labelledby":a,...o,ref:t})})})).displayName=ce;var pe="SelectLabel",fe=S.forwardRef(((e,t)=>{const{__scopeSelect:n,...o}=e,a=ue(pe,n);return r.jsx(l.div,{id:a.id,...o,ref:t})}));fe.displayName=pe;var me="SelectItem",[he,ve]=H(me),ge=S.forwardRef(((e,t)=>{const{__scopeSelect:n,value:a,disabled:i=!1,textValue:c,...d}=e,u=K(me,n),f=te(me,n),m=u.value===a,[h,v]=S.useState(c??""),[g,x]=S.useState(!1),w=o(t,(e=>{var t;return null==(t=f.itemRefCallback)?void 0:t.call(f,e,a,i)})),y=p(),b=S.useRef("touch"),C=()=>{i||(u.onValueChange(a),u.onOpenChange(!1))};if(""===a)throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(he,{scope:n,value:a,disabled:i,textId:y,isSelected:m,onItemTextChange:S.useCallback((e=>{v((t=>t||((null==e?void 0:e.textContent)??"").trim()))}),[]),children:r.jsx(M.ItemSlot,{scope:n,value:a,disabled:i,textValue:h,children:r.jsx(l.div,{role:"option","aria-labelledby":y,"data-highlighted":g?"":void 0,"aria-selected":m&&g,"data-state":m?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...d,ref:w,onFocus:s(d.onFocus,(()=>x(!0))),onBlur:s(d.onBlur,(()=>x(!1))),onClick:s(d.onClick,(()=>{"mouse"!==b.current&&C()})),onPointerUp:s(d.onPointerUp,(()=>{"mouse"===b.current&&C()})),onPointerDown:s(d.onPointerDown,(e=>{b.current=e.pointerType})),onPointerMove:s(d.onPointerMove,(e=>{var t;b.current=e.pointerType,i?null==(t=f.onItemLeave)||t.call(f):"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})})),onPointerLeave:s(d.onPointerLeave,(e=>{var t;e.currentTarget===document.activeElement&&(null==(t=f.onItemLeave)||t.call(f))})),onKeyDown:s(d.onKeyDown,(e=>{var t;""!==(null==(t=f.searchRef)?void 0:t.current)&&" "===e.key||(D.includes(e.key)&&C()," "===e.key&&e.preventDefault())}))})})})}));ge.displayName=me;var xe="SelectItemText",we=S.forwardRef(((e,t)=>{const{__scopeSelect:n,className:a,style:s,...c}=e,d=K(xe,n),u=te(xe,n),p=ve(xe,n),f=W(xe,n),[m,h]=S.useState(null),v=o(t,(e=>h(e)),p.onItemTextChange,(e=>{var t;return null==(t=u.itemTextRefCallback)?void 0:t.call(u,e,p.value,p.disabled)})),g=null==m?void 0:m.textContent,x=S.useMemo((()=>r.jsx("option",{value:p.value,disabled:p.disabled,children:g},p.value)),[p.disabled,p.value,g]),{onNativeOptionAdd:w,onNativeOptionRemove:y}=f;return i((()=>(w(x),()=>y(x))),[w,y,x]),r.jsxs(r.Fragment,{children:[r.jsx(l.span,{id:p.textId,...c,ref:v}),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?C.createPortal(c.children,d.valueNode):null]})}));we.displayName=xe;var ye="SelectItemIndicator",be=S.forwardRef(((e,t)=>{const{__scopeSelect:n,...o}=e;return ve(ye,n).isSelected?r.jsx(l.span,{"aria-hidden":!0,...o,ref:t}):null}));be.displayName=ye;var Se="SelectScrollUpButton",Ce=S.forwardRef(((e,t)=>{const n=te(Se,e.__scopeSelect),a=le(Se,e.__scopeSelect),[l,s]=S.useState(!1),c=o(t,a.onScrollButtonChange);return i((()=>{if(n.viewport&&n.isPositioned){let e=function(){const e=t.scrollTop>0;s(e)};const t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}}),[n.viewport,n.isPositioned]),l?r.jsx(Re,{...e,ref:c,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null}));Ce.displayName=Se;var je="SelectScrollDownButton",Ne=S.forwardRef(((e,t)=>{const n=te(je,e.__scopeSelect),a=le(je,e.__scopeSelect),[l,s]=S.useState(!1),c=o(t,a.onScrollButtonChange);return i((()=>{if(n.viewport&&n.isPositioned){let e=function(){const e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;s(n)};const t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}}),[n.viewport,n.isPositioned]),l?r.jsx(Re,{...e,ref:c,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null}));Ne.displayName=je;var Re=S.forwardRef(((e,t)=>{const{__scopeSelect:n,onAutoScroll:o,...a}=e,c=te("SelectScrollButton",n),d=S.useRef(null),u=L(n),p=S.useCallback((()=>{null!==d.current&&(window.clearInterval(d.current),d.current=null)}),[]);return S.useEffect((()=>()=>p()),[p]),i((()=>{var e;const t=u().find((e=>e.ref.current===document.activeElement));null==(e=null==t?void 0:t.ref.current)||e.scrollIntoView({block:"nearest"})}),[u]),r.jsx(l.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerDown:s(a.onPointerDown,(()=>{null===d.current&&(d.current=window.setInterval(o,50))})),onPointerMove:s(a.onPointerMove,(()=>{var e;null==(e=c.onItemLeave)||e.call(c),null===d.current&&(d.current=window.setInterval(o,50))})),onPointerLeave:s(a.onPointerLeave,(()=>{p()}))})})),Pe=S.forwardRef(((e,t)=>{const{__scopeSelect:n,...o}=e;return r.jsx(l.div,{"aria-hidden":!0,...o,ref:t})}));Pe.displayName="SelectSeparator";var _e="SelectArrow";function Te(e){return""===e||void 0===e}S.forwardRef(((e,t)=>{const{__scopeSelect:n,...o}=e,a=V(n),l=K(_e,n),s=te(_e,n);return l.open&&"popper"===s.position?r.jsx(f,{...a,...o,ref:t}):null})).displayName=_e;var Ie=S.forwardRef(((e,t)=>{const{value:n,...a}=e,l=S.useRef(null),s=o(t,l),i=function(e){const t=S.useRef({value:e,previous:e});return S.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(n);return S.useEffect((()=>{const e=l.current,t=window.HTMLSelectElement.prototype,o=Object.getOwnPropertyDescriptor(t,"value").set;if(i!==n&&o){const t=new Event("change",{bubbles:!0});o.call(e,n),e.dispatchEvent(t)}}),[i,n]),r.jsx(m,{asChild:!0,children:r.jsx("select",{...a,ref:s,defaultValue:n})})}));function ke(e){const t=h(e),n=S.useRef(""),o=S.useRef(0),r=S.useCallback((e=>{const r=n.current+e;t(r),function e(t){n.current=t,window.clearTimeout(o.current),""!==t&&(o.current=window.setTimeout((()=>e("")),1e3))}(r)}),[t]),a=S.useCallback((()=>{n.current="",window.clearTimeout(o.current)}),[]);return S.useEffect((()=>()=>window.clearTimeout(o.current)),[]),[n,r,a]}function De(e,t,n){const o=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,r=n?e.indexOf(n):-1;let a=(l=e,s=Math.max(r,0),l.map(((e,t)=>l[(s+t)%l.length])));var l,s;1===o.length&&(a=a.filter((e=>e!==n)));const i=a.find((e=>e.textValue.toLowerCase().startsWith(o.toLowerCase())));return i!==n?i:void 0}Ie.displayName="BubbleSelect";var Ee=q,Me=$,Le=G,Oe=J,He=ie,Ae=fe,Ve=ge,Be=we,Ke=be,Fe=Ce,We=Ne,ze=Pe;const Ue=z,qe=Y,Xe=S.forwardRef((({className:e,children:t,...n},o)=>r.jsxs(Ee,{ref:o,className:_("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,r.jsx(Me,{asChild:!0,children:r.jsx(w,{className:"h-4 w-4 opacity-50"})})]})));Xe.displayName=Ee.displayName;const Ye=S.forwardRef((({className:e,...t},n)=>r.jsx(Fe,{ref:n,className:_("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(y,{className:"h-4 w-4"})})));Ye.displayName=Fe.displayName;const $e=S.forwardRef((({className:e,...t},n)=>r.jsx(We,{ref:n,className:_("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(w,{className:"h-4 w-4"})})));$e.displayName=We.displayName;const Ge=S.forwardRef((({className:e,children:t,position:n="popper",...o},a)=>r.jsx(Le,{children:r.jsxs(Oe,{ref:a,className:_("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...o,children:[r.jsx(Ye,{}),r.jsx(He,{className:_("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),r.jsx($e,{})]})})));Ge.displayName=Oe.displayName;S.forwardRef((({className:e,...t},n)=>r.jsx(Ae,{ref:n,className:_("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}))).displayName=Ae.displayName;const Ze=S.forwardRef((({className:e,children:t,...n},o)=>r.jsxs(Ve,{ref:o,className:_("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(Ke,{children:r.jsx(b,{className:"h-4 w-4"})})}),r.jsx(Be,{children:t})]})));Ze.displayName=Ve.displayName;S.forwardRef((({className:e,...t},n)=>r.jsx(ze,{ref:n,className:_("-mx-1 my-1 h-px bg-muted",e),...t}))).displayName=ze.displayName;export{Ue as S,Xe as a,qe as b,Ge as c,Ze as d};
