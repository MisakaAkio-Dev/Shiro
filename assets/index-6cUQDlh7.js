import{r as a,j as r,R as v}from"./index-vtFYCCwT.js";import{a as R}from"./main-Z3YxFZA4.js";import{u as z}from"./useQuery-3Brhejs9.js";import{p as N}from"./index-LAI3pait.js";import{u as L}from"./viewport-DNjV6eYB.js";import{E as S,M as T}from"./owner-CGzhp8Ob.js";import{u as O}from"./use-is-dark-CnCmKQ4d.js";import{s as y}from"./dom-BowoBODo.js";import{s as E,c as I,M as A}from"./StyledButton-D_mDAIdz.js";import{c as B}from"./use-ref-value-Dhs9XOWF.js";import{u as U}from"./provider-ym3ko2yE.js";const b=a.forwardRef((i,s)=>{const{data:o,...l}=i,c=a.useMemo(()=>{if(!o)return{};const f=E(o);if(f)return{data:f};{const m=o.split(`
`),n=m[0],d=m.slice(1).join(`
`),t={};return n.startsWith("http")?t.refUrl=n:n.startsWith("ref:")&&(t.refUrl=`${S}/objects/${n.slice(4)}`),d.trim().length>0&&(t.patchDiffDelta=E(d)),t}},[o]),u=a.useRef(null);return a.useImperativeHandle(s,()=>({getRefData(){return u.current?.getRemoteData()},getDiffDelta(){return c.patchDiffDelta}})),r.jsx(w,{ref:u,...l,...c})});b.displayName="Excalidraw";const w=a.forwardRef(({data:i,refUrl:s,patchDiffDelta:o,viewModeEnabled:l=!0,zenModeEnabled:c=!0,onChange:u,className:f,showExtendButton:m=!0,onReady:n},d)=>{const t=v.useRef(),M=U(),P=L(),{data:p,isLoading:x}=z({queryKey:["excalidraw",s],queryFn:async({queryKey:e})=>{const[g,h]=e;return await(await fetch(h)).json()},enabled:!!s});a.useImperativeHandle(d,()=>({getRemoteData(){return p}}));const D=a.useMemo(()=>p?N(B(p),o):null,[p,s]),_=O(),k=a.useMemo(()=>{const e=i||D;return!e&&!x&&console.error("Excalidraw: data not exist"),e},[i,D,x]);return r.jsxs("div",{onKeyDown:y,onKeyUp:y,className:I("relative h-[500px] w-full",f),children:[x&&r.jsx("div",{className:"center absolute inset-0 z-10 flex",children:r.jsx("div",{className:"loading loading-spinner"})}),r.jsx(R.Excalidraw,{theme:_?"dark":"light",initialData:k,detectScroll:!1,zenModeEnabled:c,onChange:u,viewModeEnabled:l,excalidrawAPI:e=>{t.current=e,setTimeout(()=>{e.scrollToContent(void 0,{fitToContent:!0})},300),n?.(e)}},s?`excalidraw-refData-loading-${x}`:"excalidraw"),l&&m&&r.jsx(A,{onClick:()=>{if(!t.current){T.error("Excalidraw API not ready");return}const e=t.current.getSceneElements();if(P){const g=window.open();R.exportToBlob({elements:e,files:null}).then(j=>{g?.location.replace(URL.createObjectURL(j))})}else M.present({title:"Preview",content:()=>r.jsx(w,{data:i,className:"h-full",showExtendButton:!1,refUrl:s}),clickOutsideToDismiss:!0,max:!0})},className:I("absolute bottom-2 right-2 z-10 box-content flex size-5 rounded-md border p-2 center","border-zinc-200 bg-base-100 text-zinc-600","dark:border-neutral-800 dark:text-zinc-500"),children:r.jsx("i",{className:"i-mingcute-external-link-line"})})]})});w.displayName="ExcalidrawImpl";const X=Object.freeze(Object.defineProperty({__proto__:null,Excalidraw:b},Symbol.toStringTag,{value:"Module"})),Y=Object.freeze(Object.defineProperty({__proto__:null,Excalidraw:b},Symbol.toStringTag,{value:"Module"}));export{b as E,X as a,Y as i};
