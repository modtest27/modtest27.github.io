(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7411],{74513:(e,n,t)=>{"use strict";t.d(n,{J:()=>o});var r=t(34513);let l=(0,t(18449).H)('<circle cx="12" cy="12" r="10" fill="var(--geist-fill)"></circle><path d="M15 9L9 15" stroke="var(--geist-stroke)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L15 15" stroke="var(--geist-stroke)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>',!0,{color:"var(--geist-warning)",secondary:"#fff"});var i=t(80123);function o(e){let{id:n,error:t,withIcon:o,className:a}=e;return(0,r.jsxs)("div",{className:(0,i.W)("flex items-center gap-x-2 text-[12px]/[1.1] text-red-400 translate-y-[110%]",{invisible:"string"!=typeof t},a),children:[o?(0,r.jsx)(l,{className:"flex-shrink-0 inline-block",color:"currentColor",size:16}):null,(0,r.jsx)("p",{"aria-live":"polite",className:"overflow-hidden text-[12px]/[1.1] font-medium text-red-400",id:n,title:"string"==typeof t?t:"",children:"string"==typeof t?t:(0,r.jsx)(r.Fragment,{children:"\xa0"})})]})}},67411:(e,n,t)=>{"use strict";t.d(n,{Wh:()=>b,XO:()=>y,oV:()=>h,qg:()=>x,jZ:()=>g,uO:()=>f,WT:()=>k,UG:()=>w});var r=t(34513),l=t(39133);t(81372);var i=t(20236),o=t(52995),a=t(75925),s=t(80123),c=t(55741),u=t(74513),d=t(17426),p=t.n(d),m=t(89305);let v=(0,l.forwardRef)(function(e,n){let{className:t,textareaClassName:i,errorClassName:o,renderCustomElement:a,autoComplete:d="off",prefix:v,suffix:x,label:f,disabled:h,invalid:b,...g}=e,{focusProps:y,isFocusVisible:k}=(0,c.Fx)({isTextInput:!0}),w=f?m._:"div",j={...f?{label:f,id:g.id,required:g.required}:{},className:(0,s.W)("relative",t,{"opacity-50":h})},I=(0,s.W)(p()["text-input"],"rounded-none text-black block h-10 w-full bg-white font-mono text-[16px] md:text-[13px]/[20px] lg:text-[13px]/[20px] placeholder-black outline-none border border-black dark:text-[white] dark:bg-[rgba(255,255,255,0.05)] dark:border-[rgba(255,255,255,0.30)]",{"pl-10":v,"pl-4":!v,"pr-10":x,"pr-4":!x,"keyboard-focus":k,[p().error]:!!b},i);return(0,l.useEffect)(()=>{if(h&&k){var e;null===(e=y.onBlur)||void 0===e||e.call(y,new FocusEvent("blur"))}},[h,k,y.onBlur]),(0,r.jsx)(w,{...j,children:(0,r.jsxs)("div",{className:"relative w-full h-max",children:[(0,r.jsxs)("div",{className:"relative w-full h-max",children:[v?(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:v}):null,a?a({...g,disabled:h,className:I,autoComplete:d,onBlur:e=>{var n,t;null===(n=y.onBlur)||void 0===n||n.call(y,e),null===(t=g.onBlur)||void 0===t||t.call(g,e)},onFocus:e=>{var n,t;null===(n=y.onFocus)||void 0===n||n.call(y,e),null===(t=g.onFocus)||void 0===t||t.call(g,e)},ref:n}):(0,r.jsx)("textarea",{...g,autoComplete:d,className:(0,s.W)(I,"scroll-py-3 py-[10px]"),disabled:h,onBlur:e=>{var n,t;null===(n=y.onBlur)||void 0===n||n.call(y,e),null===(t=g.onBlur)||void 0===t||t.call(g,e)},onFocus:e=>{var n,t;null===(n=y.onFocus)||void 0===n||n.call(y,e),null===(t=g.onFocus)||void 0===t||t.call(g,e)},ref:n}),x?(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:x}):null]}),(0,r.jsx)(u.J,{className:(0,s.W)("absolute bottom-0 left-0 w-full",o),error:b})]})})}),x=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(o.o,{autoComplete:"given-name",id:"firstName",label:"First name",maxLength:40,name:"firstName",placeholder:"Jane",required:!0,...e,ref:n})}),f=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(o.o,{autoComplete:"family-name",id:"lastName",label:"Last name",maxLength:40,name:"lastName",placeholder:"Doe",required:!0,...e,ref:n})}),h=(0,l.forwardRef)(function(e,n){let{...t}=e;return(0,r.jsx)(o.o,{...t,autoCapitalize:"none",autoComplete:"email",id:"email",label:"Work Email",name:"email",onChange:e=>{var n;null===(n=t.onChange)||void 0===n||n.call(t,e)},placeholder:"janedoe@acme.com",ref:n,required:!0,type:"email"})}),b=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(o.o,{autoCapitalize:"none",autoComplete:"organization",id:"company",label:"Company name",maxLength:40,name:"company",placeholder:"Acme",required:!0,...e,ref:n})}),g=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(a.l,{autoComplete:"organization-title",id:"jobTitle",label:"Job title",name:"jobTitle",options:i.cy.map(e=>({label:e,value:e})),placeholder:"What's your job title?",required:!0,...e,ref:n})}),y=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(o.o,{autoCapitalize:"none",id:"companyWebsite",label:"Company website",maxLength:100,name:"companyWebsite",pattern:"^(https?:\\/\\/)?([a-zA-Z0-9\\-]+.)?[a-zA-Z0-9\\-]{1,}(\\.[a-zA-Z0-9\\-]{2,})(\\/[a-zA-Z0-9\\-]*)*$",placeholder:"acme.com",required:!0,...e,ref:n})}),k=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(v,{className:"h-full",id:"learningNextJS",label:"what are you looking forward to learning about Next.JS?",name:"learningNextJS",textareaClassName:"h-[max-content]",...e,ref:n})}),w=(0,l.forwardRef)(function(e,n){return(0,r.jsx)(a.l,{id:"nextJSJourneyStage",label:(0,r.jsxs)(r.Fragment,{children:["Where are you in your ",(0,r.jsx)("br",{})," Next.js experience?"]}),name:"nextJSJourneyStage",options:i.qh.map(e=>({label:e,value:e})),placeholder:"Experience with Next.js",...e,ref:n})})},89305:(e,n,t)=>{"use strict";t.d(n,{_:()=>l});var r=t(34513);function l(e){let{children:n,label:t,required:l,...i}=e;return(0,r.jsxs)("label",{...i,children:[(0,r.jsxs)("div",{className:"text-black-default mb-3 block font-mono text-[13px]/[normal] font-medium uppercase tracking-[0.04em] dark:text-[white]",children:[t,l?(0,r.jsx)("span",{"aria-hidden":!0,children:"*"}):null]}),n]})}},75925:(e,n,t)=>{"use strict";t.d(n,{l:()=>d});var r=t(34513),l=t(80123),i=t(39133),o=t(55741);function a(e){let{...n}=e;return(0,r.jsx)("svg",{"aria-hidden":!0,fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})})}var s=t(17426),c=t.n(s),u=t(89305);let d=(0,i.forwardRef)(function(e,n){let{label:t,className:s,selectClassName:d,defaultValue:p,options:m,onChange:v,placeholder:x,addon:f,...h}=e,{focusProps:b,isFocusVisible:g}=(0,o.Fx)(),y=(0,l.W)("rounded-none text-[13px]/[20px] lg:text-[13px]/[20px] text-black-50 border border-black-default appearance-none block h-10 w-full bg-white dark:bg-[rgba(255,255,255,0.05)] dark:border-[rgba(255,255,255,0.30)] pr-4 font-mono overflow-ellipsis placeholder-black-50 dark:text-[rgba(255,255,255,0.30)]",{"pl-9":f,"pl-4":!f,"keyboard-focus":g},d),k=t?u._:"div",w={...t?{label:t,id:h.id,required:h.required}:{},className:(0,l.W)("relative",s,{"opacity-50":h.disabled})},[j,I]=(0,i.useState)(!!p);return(0,r.jsxs)(k,{...w,children:[f?(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:f}):null,(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("select",{onChange:e=>{I(!0),null==v||v(e)},...h,...b,className:(0,l.W)(c()["select-input"],"outline-none",{"!text-[var(--color-black)]":j},y),defaultValue:null!=p?p:"",ref:n,children:[(0,r.jsx)("option",{disabled:!0,value:"",children:x}),null==m?void 0:m.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value))]}),(0,r.jsx)("div",{className:"text-black-default pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 dark:text-[rgba(255,255,255,0.40)]",children:(0,r.jsx)(a,{})})]})]})})},52995:(e,n,t)=>{"use strict";t.d(n,{n:()=>v,o:()=>m});var r=t(34513),l=t(80123),i=t(39133),o=t(55741),a=t(6192),s=t(34498),c=t(74513),u=t(17426),d=t.n(u),p=t(89305);let m=(0,i.forwardRef)(function(e,n){let{className:t,inputClassName:a,errorClassName:s,renderCustomElement:u,autoComplete:m="off",prefix:v,suffix:x,label:f,disabled:h,invalid:b,...g}=e,{focusProps:y,isFocusVisible:k}=(0,o.Fx)({isTextInput:!0}),w=f?p._:"div",j={...f?{label:f,id:g.id,required:g.required}:{},className:(0,l.W)("relative",t,{"opacity-50":h})},I=(0,l.W)(d()["text-input"],"rounded-none text-black-default dark:text-white dark:bg-[rgba(255,255,255,0.05)] dark:border-[rgba(255,255,255,0.30)] block h-10 w-full bg-white font-mono text-[16px] md:text-[13px]/[20px] lg:text-[13px]/[20px] placeholder-black-50 dark:placeholder-[rgba(255,255,255,0.30)] outline-none border light:border-black-default",{"pl-10":v,"pl-4":!v,"pr-10":x,"pr-4":!x,"keyboard-focus":k,[d().error]:!!b},a);return(0,i.useEffect)(()=>{if(h&&k){var e;null===(e=y.onBlur)||void 0===e||e.call(y,new FocusEvent("blur"))}},[h,k,y.onBlur]),(0,r.jsx)(w,{...j,children:(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsxs)("div",{className:"relative w-full",children:[v?(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:v}):null,u?u({...g,disabled:h,className:I,autoComplete:m,onBlur:e=>{var n,t;null===(n=y.onBlur)||void 0===n||n.call(y,e),null===(t=g.onBlur)||void 0===t||t.call(g,e)},onFocus:e=>{var n,t;null===(n=y.onFocus)||void 0===n||n.call(y,e),null===(t=g.onFocus)||void 0===t||t.call(g,e)},ref:n}):(0,r.jsx)("input",{...g,autoComplete:m,className:I,disabled:h,onBlur:e=>{var n,t;null===(n=y.onBlur)||void 0===n||n.call(y,e),null===(t=g.onBlur)||void 0===t||t.call(g,e)},onFocus:e=>{var n,t;null===(n=y.onFocus)||void 0===n||n.call(y,e),null===(t=g.onFocus)||void 0===t||t.call(g,e)},ref:n}),x?(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:x}):null]}),(0,r.jsx)(c.J,{className:(0,l.W)("absolute bottom-0 left-0 w-full",s),error:b})]})})});function v(e){let{children:n,className:t,onBlur:r,onFocus:o,disabled:c}=e;(0,a.useMediaQuery)(960);let{resolvedTheme:u}=(0,s.F)(),[p,m]=(0,i.useState)(null);return((0,i.useEffect)(()=>{if(!p)return;let e=p.querySelector("input"),n=p.querySelector("iframe");e&&n&&(c?(n.style.pointerEvents="none",e.setAttribute("disabled","true")):(n.style.pointerEvents="auto",e.removeAttribute("disabled")))},[p,c]),n)?n({className:(0,l.W)("flex items-center [&>*]:w-full [&>*]:!text-black-default dark:[&>*]:!text-white",d().stripe,{[d()["stripe-disabled"]]:c},t),onReady:e=>{m(e._component)},onFocus:()=>{null==o||o(new FocusEvent("focus"))},onBlur:()=>{null==r||r(new FocusEvent("blur"))},options:{disabled:c,style:{base:{fontFamily:"Geist Mono, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",fontSmoothing:"antialiased",color:"dark"===u?"#fff":"#000",fontSize:"13px",lineHeight:"20px","::placeholder":{color:"var(--color-black-50, rgba(0, 0, 0, 0.5))",fontSize:"13px"}}}}}):null}},20236:(e,n,t)=>{"use strict";t.d(n,{Ih:()=>p,K$:()=>f,Rf:()=>v,TB:()=>a,bc:()=>x,cy:()=>c,dk:()=>r,hO:()=>d,qh:()=>u,vB:()=>s,yj:()=>m});var r,l=t(34879),i=t(63713),o=t(31224);let a=500,s=null,c=o.qz.map(e=>e.name),u=o.Iy.map(e=>e.name);l.ou.fromISO("2024-10-24T08:00:00-07:00").setLocale("en-US").setZone("UTC-7");let d="https://vercel.com/legal/privacy-policy",p="https://vercel.com/legal/event-terms-conditions";!function(e){e.InPersonGeneral="in-person-general",e.Virtual="virtual",e.InPersonVIP1="in-person-vip-1",e.InPersonVIP2="in-person-vip-2",e.InPersonVIP3="in-person-vip-3",e.InPersonVIP4="in-person-vip-4",e.InPersonVIP5="in-person-vip-5",e.InPersonVIP6="in-person-vip-6",e.InPersonVIP7="in-person-vip-7"}(r||(r={}));let m={"in-person-general":{type:"in-person-general",name:"In person",price:a},"in-person-vip-1":{type:"in-person-vip-1",name:"In-person VIP"},"in-person-vip-2":{type:"in-person-vip-2",name:"In-person VIP"},"in-person-vip-3":{type:"in-person-vip-3",name:"In-person VIP"},"in-person-vip-4":{type:"in-person-vip-4",name:"In-person VIP"},"in-person-vip-5":{type:"in-person-vip-5",name:"In-person VIP"},"in-person-vip-6":{type:"in-person-vip-6",name:"In-person VIP"},"in-person-vip-7":{type:"in-person-vip-7",name:"In-person VIP"},virtual:{type:"virtual",name:"Virtual"}},v=[{name:"TWITTER / X",url:"https://x.com/nextjs"},{name:"GITHUB",url:"https://github.com/vercel/next.js"}],x=[{id:"get-a-demo",name:"Get a Demo",href:"https://vercel.com/contact/sales/nextjs?utm_source=next_site&utm_medium=web&utm_campaign=get_a_demo_footer",external:!1,intent:i.S.PreviewValue},{id:"privacy-policy",name:"Privacy Policy",href:d,external:!0,intent:i.S.Legal},{id:"terms-and-conditions",name:"Event Terms & Cond.",href:p,external:!0,intent:i.S.Legal}],f=2024},31224:(e,n,t)=>{"use strict";t.d(n,{Iy:()=>i,i7:()=>r,qz:()=>l});let r={id:2396603,name:"Executive Meetings",displayTime:"8:30-6:00pm"},l=[{id:24318785,name:"Engineering Leader"},{id:24905358,name:"Engineering Director"},{id:24318786,name:"Software Engineer"},{id:24982692,name:"Design Engineer"},{id:24318787,name:"Product Leader"},{id:24318788,name:"Product Manager"},{id:24318789,name:"Designer"},{id:24801006,name:"Investor"},{id:24801007,name:"Executive"},{id:24318784,name:"C-level"},{id:24318792,name:"Other"}],i=[{id:24318829,name:"I have never used Next.js"},{id:24318830,name:"I have some experience using Next.js"},{id:24318831,name:"I use Next.js every day"}]},6192:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useIsMobile:()=>o,useIsTablet:()=>a,useMediaQuery:()=>i});var r=t(39133);let l=!1,i=(e,n)=>{let t=["(max-width: ".concat(e,"px)").concat(null!=n?",":""),null!=n?"(max-height: ".concat(n,"px)"):null].filter(Boolean).join(" "),[i,o]=(0,r.useState)(()=>l?window.innerWidth<=e||void 0!==n&&window.innerHeight<=n:void 0),a=(0,r.useRef)(i);return(0,r.useEffect)(()=>{a.current=i},[i]),(0,r.useEffect)(()=>{let r=()=>{o(i.matches)};void 0===a.current&&o(window.innerWidth<=e||void 0!==n&&window.innerHeight<=n),l=!0;let i=window.matchMedia(t);return i.addEventListener("change",r),i.matches&&o(!0),()=>{i.removeEventListener("change",r)}},[e,n,t]),i},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:600;return i(e)},a=()=>i(960)},18449:(e,n,t)=>{"use strict";t.d(n,{H:()=>p});var r=t(34513),l=t(64485),i=t(66197),o=t.n(i);let a="0 0 ".concat(l.EA," ").concat(l.EA),s="round",c="round",u={bold:2,light:1,none:0,normal:1.5,initial:1.5},d={top:"text-top",bottom:"text-bottom",middle:"middle",initial:null},p=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{color:i,secondary:p,size:m,fill:v,weight:x="initial",viewBox:f=a}=t;function h(t){let{size:a,color:h=i||"currentColor",secondary:b=p||"var(--geist-background)",fill:g=v,align:y="initial",weight:k=x,...w}=t,j=u[k],I=d[y],N=m||l.EA;return g&&n?(0,r.jsx)("svg",{className:o().icon,"data-testid":"geist-icon",height:N,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:s,strokeLinejoin:c,strokeWidth:j,viewBox:f,width:N,...w,dangerouslySetInnerHTML:{__html:!0===n?e:n},style:{...w.style,color:h,"--geist-fill":"currentColor","--geist-stroke":b,verticalAlign:I||void 0,width:a,height:a}}):(0,r.jsx)("svg",{className:o().icon,"data-testid":"geist-icon",fill:"none",height:N,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:s,strokeLinejoin:c,strokeWidth:j,viewBox:f,width:N,...w,dangerouslySetInnerHTML:{__html:e},style:{...w.style,color:h,verticalAlign:I||void 0,width:a,height:a}})}return h.hasFill=!!n,h}},17426:e=>{e.exports={stripe:"inputs_stripe__SqWPh","select-input":"inputs_select-input__kb8Ha","text-input":"inputs_text-input__oZySA","keyboard-focus":"inputs_keyboard-focus__Fic2L","checkbox-input":"inputs_checkbox-input__YmuOO","stripe-disabled":"inputs_stripe-disabled__iEplN",error:"inputs_error__Qz4Ja"}},66197:e=>{e.exports={icon:"with-icon_icon__MHUeb"}}}]);