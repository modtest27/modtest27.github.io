(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3586],{39394:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn-pages-router/basics/assets-metadata-css/css-styling",function(){return s(14554)}])},25928:(e,t,s)=>{"use strict";s.d(t,{Z:()=>f});var r=s(58589),a=s(51853),n=s.n(a),o=s(10628),i=s(14517);function l(e,t){return d(t.root,e.root)&&d(t.rootMargin,e.rootMargin)&&d(t.threshold,e.thresholds)}function c(e){if(!/^-?\d*\.?\d+(?:px|%)$/.test(e))throw Error("rootMargin must be specified as a CSS margin property")}function d(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.every((s,r)=>d(e[r],t[r])):e===t}s(81324);let p=function(){let e=new Map;function t(t){return e.has(t)?e.get(t):e.set(t,new Map).get(t)}function s(e,s){for(let r of e){let e=t(s).get(r.target);e&&e(r)}}return{getObserver:function(t){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:t.root||null,rootMargin:function(e){let t=(e||"0px").trim().split(/\s+/);return t.forEach(c),t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t.join(" ")}(t.rootMargin),threshold:Array.isArray(e=t.threshold)?e:[void 0!==e?e:0]}}(t);for(let t of e.keys())if(l(t,s))return t;return null}(t)||new IntersectionObserver(s,t)},observeTarget:function(e,s,r){t(e).set(s,r),e.observe(s)},unobserveTarget:function(e,s){t(e).delete(s),e.unobserve(s)}}}(),{getObserver:h}=p,{observeTarget:u}=p,{unobserveTarget:m}=p;class g extends o.Component{static #e=this.defaultProps={disabled:!1,once:!1};componentDidMount(){this.observer=h(x(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(e){let t=x(e);l(this.observer,t)||(this.unobserve(),this.observer=h(t),this.shouldReobserve=!0),this.props.disabled&&!e.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&e.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}observe(){this.props.disabled||u(this.observer,this.target,this.handleIntersect)}unobserve(){m(this.observer,this.target)}render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,o.cloneElement)(o.Children.only(this.props.children),{ref:this.handleTarget})}constructor(...e){super(...e),this.shouldReobserve=!1,this.handleTarget=e=>{if(null!==e&&"object"==typeof e&&!function(e){return e&&"function"==typeof e.getBoundingClientRect}(e))throw Error("Child did not forward the ref to a DOM element. Did you accidentally pass a class component?");this.target&&this.target!==e&&(this.unobserve(),this.shouldReobserve=!0),this.target=e},this.handleIntersect=e=>{this.props.onIntersect(e,this.props.value),this.props.once&&e.isIntersecting&&this.unobserve()}}}let x=e=>({root:e.root,rootMargin:e.rootMargin,threshold:e.threshold});function b(e){let{videoSrc:t,video:s,renderImage:a,src:n,alt:o}=e;return n?t||s?(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:n}):a?a(e):(0,r.jsx)("img",{alt:o,src:n||null}):null}class y extends o.Component{static #e=this.defaultProps={lazy:!0};render(){let{caption:e,width:t,height:s,margin:a=40,video:o=!1,videoSrc:l,captionSpacing:c=null,renderImage:d,oversize:p=!0,float:h,lazy:u,shadow:m,style:x,...y}=this.props,f=`${String(s/t*100)}%`;return(0,r.jsx)(g,{disabled:!u,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,r.jsxs)("figure",{className:n().dynamic([["622a55e2833827d7",[a,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,a,a,t,h,a,h]]])+" "+((0,i.W)({oversize:t>650&&p,float:h&&t<520})||""),children:[(0,r.jsxs)("div",{className:n().dynamic([["622a55e2833827d7",[a,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,a,a,t,h,a,h]]])+" container",children:[(0,r.jsx)("div",{style:{paddingBottom:f,...x},className:n().dynamic([["622a55e2833827d7",[a,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,a,a,t,h,a,h]]]),children:(0,r.jsx)(b,{alt:y.alt,height:s,renderImage:d,video:o,videoSrc:l,width:t,...y,src:this.state.src})}),e?(0,r.jsx)("figcaption",{style:c?{marginTop:c}:{},className:n().dynamic([["622a55e2833827d7",[a,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,a,a,t,h,a,h]]]),children:e}):null]}),(0,r.jsx)(n(),{id:"622a55e2833827d7",dynamic:[a,t?`width: ${t}px;`:"",m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,a,a,t,h,a,h],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${a}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${t?`width: ${t}px;`:""}                max-width: 100%}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${m?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}}figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${t}px;margin:${a}px 0 ${a}px -webkit-calc(((${t}px - 650px) / 2) * -1);margin:${a}px 0 ${a}px -moz-calc(((${t}px - 650px) / 2) * -1);margin:${a}px 0 ${a}px calc(((${t}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${h};margin:${a}px;margin-${h}:-150px}}`})]})})}constructor(...e){super(...e),this.state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src},this.handleIntersect=e=>{e.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})}}}let f=function(e){return(0,r.jsx)(y,{...e,alt:""})}},14554:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,meta:()=>n}),s(10628);var r=s(16942),a=s(18590);s(25928);let n={title:"Assets, Metadata, and CSS",courseId:"basics",lessonId:"assets-metadata-css",stepId:"css-styling",subtitle:"CSS Styling"},o={meta:n},i=e=>{let{children:t}=e;return(0,r.kt)(a.Z,{meta:n},t)};function l(e){let{components:t,...s}=e;return(0,r.kt)(i,{...o,...s,components:t,mdxType:"MDXLayout"},(0,r.kt)("p",null,`Let’s now talk about `,(0,r.kt)("strong",{parentName:"p"},"CSS styling"),"."),(0,r.kt)("p",null,"As you can see, our index page (",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),") already has some styles. If you look at your file structure, you'll see a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," with two CSS files: a global stylesheet (",(0,r.kt)("inlineCode",{parentName:"p"},"global.css"),"), and a CSS module (",(0,r.kt)("inlineCode",{parentName:"p"},"Home.module.css"),")."),(0,r.kt)("p",null,"If your project doesn't have those files, you can download the starter code here:"),(0,r.kt)("pre",{className:"language-bash"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app nextjs-blog --use-npm --example ",(0,r.kt)("span",{parentName:"code",className:"token string"},'"https://github.com/vercel/next-learn/tree/main/basics/assets-metadata-css-starter"'),`
`)),(0,r.kt)("h3",null,"CSS Modules"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/basic-features/built-in-css-support"},"CSS modules")," allow you to locally scope CSS at the component-level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions."),(0,r.kt)("p",null,"In addition to CSS modules, you can style your Next.js application in a variety of ways, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sass which allows you to import ",(0,r.kt)("inlineCode",{parentName:"li"},".css")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".scss")," files."),(0,r.kt)("li",{parentName:"ul"},"PostCSS libraries like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss"},"Tailwind CSS"),"."),(0,r.kt)("li",{parentName:"ul"},"CSS-in-JS libraries such as ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/styled-jsx"},"styled-jsx"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-styled-components"},"styled-components"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-emotion"},"emotion"))),(0,r.kt)("p",null,`In this lesson, we’ll talk about how to use `,(0,r.kt)("a",{parentName:"p",href:"/docs/basic-features/built-in-css-support#adding-component-level-css"},"CSS Modules")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/basic-features/built-in-css-support#sass-support"},"Sass"),` in Next.js. Let’s dive in!`))}l.isMDXComponent=!0}},e=>{var t=t=>e(e.s=t);e.O(0,[27,8746,4371,2878,4730,1324,1067,8590,2888,9774,179],()=>t(39394)),_N_E=e.O()}]);