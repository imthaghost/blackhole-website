"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{97439:function(e,t,n){var r,o,i,a,l,s;n.d(t,{GW:function(){return o},oK:function(){return r}}),(a=r||(r={})).Prompt="PROMPT",a.Camera="CAMERA",a.Photos="PHOTOS",(l=o||(o={})).Rear="REAR",l.Front="FRONT",(s=i||(i={})).Uri="uri",s.Base64="base64",s.DataUrl="dataUrl"},96826:function(e,t,n){n.d(t,{V1:function(){return o}});var r=n(29895);n(97439);let o=(0,r.fo)("Camera",{web:()=>n.e(6806).then(n.bind(n,66806)).then(e=>new e.CameraWeb)})},64406:function(e,t,n){n.d(t,{fy:function(){return s}});var r,o,i,a,l=n(29895);(r=i||(i={})).Documents="DOCUMENTS",r.Data="DATA",r.Library="LIBRARY",r.Cache="CACHE",r.External="EXTERNAL",r.ExternalStorage="EXTERNAL_STORAGE",(o=a||(a={})).UTF8="utf8",o.ASCII="ascii",o.UTF16="utf16";let s=(0,l.fo)("Filesystem",{web:()=>n.e(3176).then(n.bind(n,33176)).then(e=>new e.FilesystemWeb)})},50842:function(e,t,n){n.d(t,{N1:function(){return s}});var r,o,i,a,l=n(29895);(r=i||(i={})).Dark="DARK",r.Light="LIGHT",r.Default="DEFAULT",(o=a||(a={})).Body="body",o.Ionic="ionic",o.Native="native",o.None="none";let s=(0,l.fo)("Keyboard")},70256:function(e,t,n){var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))});t.Z=o},46063:function(e,t,n){let r;n.d(t,{I0:function(){return v},XB:function(){return f},fC:function(){return h}});var o=n(87462),i=n(67294),a=n(36206),l=n(75320),s=n(28771),d=n(79698);let c="dismissableLayer.update",u=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:v,onInteractOutside:g,onDismiss:b,...m}=e,w=(0,i.useContext)(u),[y,E]=(0,i.useState)(null),x=null!==(n=null==y?void 0:y.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,C]=(0,i.useState)({}),$=(0,s.e)(t,e=>E(e)),T=Array.from(w.layers),[P]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),D=T.indexOf(P),A=y?T.indexOf(y):-1,L=w.layersWithOutsidePointerEventsDisabled.size>0,O=A>=D,R=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let handlePointerDown=e=>{if(e.target&&!r.current){let r={originalEvent:e};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=handleAndDispatchPointerDownOutsideEvent,t.addEventListener("click",o.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}else t.removeEventListener("click",o.current);r.current=!1},e=window.setTimeout(()=>{t.addEventListener("pointerdown",handlePointerDown)},0);return()=>{window.clearTimeout(e),t.removeEventListener("pointerdown",handlePointerDown),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!O||n||(null==h||h(e),null==g||g(e),e.defaultPrevented||null==b||b())},x),k=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let handleFocus=e=>{e.target&&!r.current&&$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",handleFocus),()=>t.removeEventListener("focusin",handleFocus)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));n||(null==v||v(e),null==g||g(e),e.defaultPrevented||null==b||b())},x);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e);(0,i.useEffect)(()=>{let handleKeyDown=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",handleKeyDown),()=>t.removeEventListener("keydown",handleKeyDown)},[n,t])}(e=>{let t=A===w.layers.size-1;t&&(null==p||p(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},x),(0,i.useEffect)(()=>{if(y)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(y)),w.layers.add(y),$5cb92bef7577960e$var$dispatchUpdate(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=r)}},[y,x,f,w]),(0,i.useEffect)(()=>()=>{y&&(w.layers.delete(y),w.layersWithOutsidePointerEventsDisabled.delete(y),$5cb92bef7577960e$var$dispatchUpdate())},[y,w]),(0,i.useEffect)(()=>{let handleUpdate=()=>C({});return document.addEventListener(c,handleUpdate),()=>document.removeEventListener(c,handleUpdate)},[]),(0,i.createElement)(l.WV.div,(0,o.Z)({},m,{ref:$,style:{pointerEvents:L?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,R.onPointerDownCapture)}))}),p=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(u),r=(0,i.useRef)(null),a=(0,s.e)(t,r);return(0,i.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,i.createElement)(l.WV.div,(0,o.Z)({},e,{ref:a}))});function $5cb92bef7577960e$var$dispatchUpdate(){let e=new CustomEvent(c);document.dispatchEvent(e)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,l.jH)(o,i):o.dispatchEvent(i)}let h=f,v=p},73990:function(e,t,n){n.d(t,{ee:function(){return P},Eh:function(){return A},VY:function(){return D},fC:function(){return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9},D7:function(){return g}});var r=n(87462),o=n(67294),i=n(1371),a=n(66037),l=n(85983),s=n(75320);let d=(0,o.forwardRef)((e,t)=>{let{children:n,width:i=10,height:a=5,...l}=e;return(0,o.createElement)(s.WV.svg,(0,r.Z)({},l,{ref:t,width:i,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,o.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var c=n(28771),u=n(25360),f=n(79698),p=n(9981);let h="Popper",[v,g]=(0,u.b)(h),[b,m]=v(h),w=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:i,...a}=e,l=m("PopperAnchor",n),d=(0,o.useRef)(null),u=(0,c.e)(t,d);return(0,o.useEffect)(()=>{l.onAnchorChange((null==i?void 0:i.current)||d.current)}),i?null:(0,o.createElement)(s.WV.div,(0,r.Z)({},a,{ref:u}))}),y="PopperContent",[E,x]=v(y),C=(0,o.forwardRef)((e,t)=>{var n,d,u,h,v,g,b,w;let{__scopePopper:x,side:C="bottom",sideOffset:$=0,align:T="center",alignOffset:P=0,arrowPadding:D=0,avoidCollisions:A=!0,collisionBoundary:L=[],collisionPadding:O=0,sticky:R="partial",hideWhenDetached:k=!1,updatePositionStrategy:S="optimized",onPlaced:_,...W}=e,M=m(y,x),[F,B]=(0,o.useState)(null),H=(0,c.e)(t,e=>B(e)),[z,I]=(0,o.useState)(null),Z=function(e){let[t,n]=(0,o.useState)(void 0);return(0,p.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(z),N=null!==(n=null==Z?void 0:Z.width)&&void 0!==n?n:0,U=null!==(d=null==Z?void 0:Z.height)&&void 0!==d?d:0,Y="number"==typeof O?O:{top:0,right:0,bottom:0,left:0,...O},V=Array.isArray(L)?L:[L],X=V.length>0,K={padding:Y,boundary:V.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:X},{refs:G,floatingStyles:j,placement:q,isPositioned:J,middlewareData:Q}=(0,i.YF)({strategy:"fixed",placement:C+("center"!==T?"-"+T:""),whileElementsMounted:(...e)=>{let t=(0,a.Me)(...e,{animationFrame:"always"===S});return t},elements:{reference:M.anchor},middleware:[(0,l.cv)({mainAxis:$+U,alignmentAxis:P}),A&&(0,l.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?(0,l.dr)():void 0,...K}),A&&(0,l.RR)({...K}),(0,l.dp)({...K,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width",`${n}px`),a.setProperty("--radix-popper-available-height",`${r}px`),a.setProperty("--radix-popper-anchor-width",`${o}px`),a.setProperty("--radix-popper-anchor-height",`${i}px`)}}),z&&(0,i.x7)({element:z,padding:D}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth:N,arrowHeight:U}),k&&(0,l.Cp)({strategy:"referenceHidden",...K})]}),[ee,et]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(q),en=(0,f.W)(_);(0,p.b)(()=>{J&&(null==en||en())},[J,en]);let er=null===(u=Q.arrow)||void 0===u?void 0:u.x,eo=null===(h=Q.arrow)||void 0===h?void 0:h.y,ei=(null===(v=Q.arrow)||void 0===v?void 0:v.centerOffset)!==0,[ea,el]=(0,o.useState)();return(0,p.b)(()=>{F&&el(window.getComputedStyle(F).zIndex)},[F]),(0,o.createElement)("div",{ref:G.setFloating,"data-radix-popper-content-wrapper":"",style:{...j,transform:J?j.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ea,"--radix-popper-transform-origin":[null===(g=Q.transformOrigin)||void 0===g?void 0:g.x,null===(b=Q.transformOrigin)||void 0===b?void 0:b.y].join(" ")},dir:e.dir},(0,o.createElement)(E,{scope:x,placedSide:ee,onArrowChange:I,arrowX:er,arrowY:eo,shouldHideArrow:ei},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-side":ee,"data-align":et},W,{ref:H,style:{...W.style,animation:J?void 0:"none",opacity:null!==(w=Q.hide)&&void 0!==w&&w.referenceHidden?0:void 0}}))))}),$={top:"bottom",right:"left",bottom:"top",left:"right"},T=(0,o.forwardRef)(function(e,t){let{__scopePopper:n,...i}=e,a=x("PopperArrow",n),l=$[a.placedSide];return(0,o.createElement)("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(d,(0,r.Z)({},i,{ref:t,style:{...i.style,display:"block"}})))});function $cf1ac5d9fe0e8206$var$isNotNull(e){return null!==e}let $cf1ac5d9fe0e8206$var$transformOrigin=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,a;let{placement:l,rects:s,middlewareData:d}=t,c=(null===(n=d.arrow)||void 0===n?void 0:n.centerOffset)!==0,u=c?0:e.arrowWidth,f=c?0:e.arrowHeight,[p,h]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(l),v={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(o=d.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+u/2,b=(null!==(i=null===(a=d.arrow)||void 0===a?void 0:a.y)&&void 0!==i?i:0)+f/2,m="",w="";return"bottom"===p?(m=c?v:`${g}px`,w=`${-f}px`):"top"===p?(m=c?v:`${g}px`,w=`${s.floating.height+f}px`):"right"===p?(m=`${-f}px`,w=c?v:`${b}px`):"left"===p&&(m=`${s.floating.width+f}px`,w=c?v:`${b}px`),{data:{x:m,y:w}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(e){let[t,n="center"]=e.split("-");return[t,n]}let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=e=>{let{__scopePopper:t,children:n}=e,[r,i]=(0,o.useState)(null);return(0,o.createElement)(b,{scope:t,anchor:r,onAnchorChange:i},n)},P=w,D=C,A=T},42651:function(e,t,n){n.d(t,{h:function(){return l}});var r=n(87462),o=n(67294),i=n(73935),a=n(75320);let l=(0,o.forwardRef)((e,t)=>{var n;let{container:l=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return l?i.createPortal((0,o.createElement)(a.WV.div,(0,r.Z)({},s,{ref:t})),l):null})},66908:function(e,t,n){n.d(t,{VY:function(){return B},fC:function(){return $a093c7e1ec25a057$export$be92b6f5f03c0fe9},h_:function(){return $a093c7e1ec25a057$export$602eac185826482c},xz:function(){return F},zt:function(){return $a093c7e1ec25a057$export$2881499e37b75b9a}});var r=n(87462),o=n(67294),i=n(36206),a=n(28771),l=n(25360),s=n(46063),d=n(91276),c=n(73990),u=n(42651),f=n(29115),p=n(75320),h=n(88426),v=n(77342),g=n(96219);let[b,m]=(0,l.b)("Tooltip",[c.D7]),w=(0,c.D7)(),y="tooltip.open",[E,x]=b("TooltipProvider"),C="Tooltip",[$,T]=b(C),P="TooltipTrigger",D=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...l}=e,s=T(P,n),d=x(P,n),u=w(n),f=(0,o.useRef)(null),h=(0,a.e)(t,f,s.onTriggerChange),v=(0,o.useRef)(!1),g=(0,o.useRef)(!1),b=(0,o.useCallback)(()=>v.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",b),[b]),(0,o.createElement)(c.ee,(0,r.Z)({asChild:!0},u),(0,o.createElement)(p.WV.button,(0,r.Z)({"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute},l,{ref:h,onPointerMove:(0,i.M)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||d.isPointerInTransitRef.current||(s.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,i.M)(e.onPointerLeave,()=>{s.onTriggerLeave(),g.current=!1}),onPointerDown:(0,i.M)(e.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",b,{once:!0})}),onFocus:(0,i.M)(e.onFocus,()=>{v.current||s.onOpen()}),onBlur:(0,i.M)(e.onBlur,s.onClose),onClick:(0,i.M)(e.onClick,s.onClose)})))}),A="TooltipPortal",[L,O]=b(A,{forceMount:void 0}),R="TooltipContent",k=(0,o.forwardRef)((e,t)=>{let n=O(R,e.__scopeTooltip),{forceMount:i=n.forceMount,side:a="top",...l}=e,s=T(R,e.__scopeTooltip);return(0,o.createElement)(f.z,{present:i||s.open},s.disableHoverableContent?(0,o.createElement)(M,(0,r.Z)({side:a},l,{ref:t})):(0,o.createElement)(S,(0,r.Z)({side:a},l,{ref:t})))}),S=(0,o.forwardRef)((e,t)=>{let n=T(R,e.__scopeTooltip),i=x(R,e.__scopeTooltip),l=(0,o.useRef)(null),s=(0,a.e)(t,l),[d,c]=(0,o.useState)(null),{trigger:u,onClose:f}=n,p=l.current,{onPointerInTransitChange:h}=i,v=(0,o.useCallback)(()=>{c(null),h(!1)},[h]),g=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect()),i=function(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),a=function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect()),l=function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...i,...a]);c(l),h(!0)},[h]);return(0,o.useEffect)(()=>()=>v(),[v]),(0,o.useEffect)(()=>{if(u&&p){let handleTriggerLeave=e=>g(e,p),handleContentLeave=e=>g(e,u);return u.addEventListener("pointerleave",handleTriggerLeave),p.addEventListener("pointerleave",handleContentLeave),()=>{u.removeEventListener("pointerleave",handleTriggerLeave),p.removeEventListener("pointerleave",handleContentLeave)}}},[u,p,g,v]),(0,o.useEffect)(()=>{if(d){let handleTrackPointerGrace=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==u?void 0:u.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let a=t[e].x,l=t[e].y,s=t[i].x,d=t[i].y,c=l>r!=d>r&&n<(s-a)*(r-l)/(d-l)+a;c&&(o=!o)}return o}(n,d);r?v():o&&(v(),f())};return document.addEventListener("pointermove",handleTrackPointerGrace),()=>document.removeEventListener("pointermove",handleTrackPointerGrace)}},[u,p,d,f,v]),(0,o.createElement)(M,(0,r.Z)({},e,{ref:s}))}),[_,W]=b(C,{isInside:!1}),M=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:i,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:d,...u}=e,f=T(R,n),p=w(n),{onClose:v}=f;return(0,o.useEffect)(()=>(document.addEventListener(y,v),()=>document.removeEventListener(y,v)),[v]),(0,o.useEffect)(()=>{if(f.trigger){let handleScroll=e=>{let t=e.target;null!=t&&t.contains(f.trigger)&&v()};return window.addEventListener("scroll",handleScroll,{capture:!0}),()=>window.removeEventListener("scroll",handleScroll,{capture:!0})}},[f.trigger,v]),(0,o.createElement)(s.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:v},(0,o.createElement)(c.VY,(0,r.Z)({"data-state":f.stateAttribute},p,u,{ref:t,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(h.A4,null,i),(0,o.createElement)(_,{scope:n,isInside:!0},(0,o.createElement)(g.f,{id:f.contentId,role:"tooltip"},a||i))))}),$a093c7e1ec25a057$export$2881499e37b75b9a=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,[l,s]=(0,o.useState)(!0),d=(0,o.useRef)(!1),c=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(E,{scope:t,isOpenDelayed:l,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),r)},[r]),isPointerInTransitRef:d,onPointerInTransitChange:(0,o.useCallback)(e=>{d.current=e},[]),disableHoverableContent:i},a)},$a093c7e1ec25a057$export$be92b6f5f03c0fe9=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i=!1,onOpenChange:a,disableHoverableContent:l,delayDuration:s}=e,u=x(C,e.__scopeTooltip),f=w(t),[p,h]=(0,o.useState)(null),g=(0,d.M)(),b=(0,o.useRef)(0),m=null!=l?l:u.disableHoverableContent,E=null!=s?s:u.delayDuration,T=(0,o.useRef)(!1),[P=!1,D]=(0,v.T)({prop:r,defaultProp:i,onChange:e=>{e?(u.onOpen(),document.dispatchEvent(new CustomEvent(y))):u.onClose(),null==a||a(e)}}),A=(0,o.useMemo)(()=>P?T.current?"delayed-open":"instant-open":"closed",[P]),L=(0,o.useCallback)(()=>{window.clearTimeout(b.current),T.current=!1,D(!0)},[D]),O=(0,o.useCallback)(()=>{window.clearTimeout(b.current),D(!1)},[D]),R=(0,o.useCallback)(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{T.current=!0,D(!0)},E)},[E,D]);return(0,o.useEffect)(()=>()=>window.clearTimeout(b.current),[]),(0,o.createElement)(c.fC,f,(0,o.createElement)($,{scope:t,contentId:g,open:P,stateAttribute:A,trigger:p,onTriggerChange:h,onTriggerEnter:(0,o.useCallback)(()=>{u.isOpenDelayed?R():L()},[u.isOpenDelayed,R,L]),onTriggerLeave:(0,o.useCallback)(()=>{m?O():window.clearTimeout(b.current)},[O,m]),onOpen:L,onClose:O,disableHoverableContent:m},n))},F=D,$a093c7e1ec25a057$export$602eac185826482c=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:i}=e,a=T(A,t);return(0,o.createElement)(L,{scope:t,forceMount:n},(0,o.createElement)(f.z,{present:n||a.open},(0,o.createElement)(u.h,{asChild:!0,container:i},r)))},B=k},96219:function(e,t,n){n.d(t,{T:function(){return a},f:function(){return l}});var r=n(87462),o=n(67294),i=n(75320);let a=(0,o.forwardRef)((e,t)=>(0,o.createElement)(i.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),l=a}}]);