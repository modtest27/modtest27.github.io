(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5804],{57857:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn-pages-router/basics/create-nextjs-app/setup",function(){return s(74717)}])},76988:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(58589),r=s(51853),n=s.n(r);s(10628);let o=function(e){let{color:t}=e;return(0,a.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,a.jsx)("g",{fill:t||"#111111",children:(0,a.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:t||"#111111"})})})};var l=s(39313),i=s(2072),c=s(24230);function d(e){return(0,a.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[e.children,(0,a.jsx)(n(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function p(e){let{value:t,onChange:s,selected:r,readOnly:o,children:l}=e;return(0,a.jsxs)("label",{className:n().dynamic([["8b254666bc533ef1",[o?"":"cursor: pointer;"]]])+" "+`f5${o?" disabled":""}`,children:[(0,a.jsx)("input",{defaultChecked:r,disabled:o,name:"answer",onChange:s,type:"radio",value:t,className:n().dynamic([["8b254666bc533ef1",[o?"":"cursor: pointer;"]]])}),(0,a.jsx)("span",{className:n().dynamic([["8b254666bc533ef1",[o?"":"cursor: pointer;"]]]),children:l}),(0,a.jsx)(n(),{id:"8b254666bc533ef1",dynamic:[o?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${o?"":"cursor: pointer;"}}label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function m(e){let{correct:t,selected:s}=e;return t||s?(0,a.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[t?(0,a.jsx)(l.Z,{color:"#0070f3"}):(0,a.jsx)(o,{color:"#e00"}),(0,a.jsx)(n(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function u(e){let{answer:t,correctAnswer:s}=e;return(0,a.jsxs)(a.Fragment,{children:[void 0!==t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{correct:t===s,selected:!0})," "]}),void 0===t?(0,a.jsxs)(a.Fragment,{children:["The correct answer is: ",(0,a.jsx)("strong",{className:"jsx-df362a97111b04e9",children:s})]}):t===s?(0,a.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,a.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,a.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,a.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,a.jsx)(n(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}let h=function(e){let{meta:t,answers:s,correctAnswer:r,children:o}=e,[l,h]=(0,i.a)(t);return(0,a.jsxs)(d,{children:[o,s.map(e=>(0,a.jsxs)(p,{onChange:e=>h({type:"answer",answer:e.target.value}),readOnly:l.submitted,selected:e===l.answer,value:e,children:[e," ",l.submitted?(0,a.jsx)(m,{correct:e===r,selected:e===l.answer}):null]},e)),(0,a.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[l.submitted?(0,a.jsx)(u,{answer:l.answer,correctAnswer:r}):(0,a.jsx)(c.Z,{invert:!0,onClick:()=>{h({type:"submit"}),l.answer===r&&h({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,a.jsx)(n(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},74717:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,meta:()=>o}),s(10628);var a=s(16942),r=s(18590),n=s(76988);let o={title:"Create a Next.js App",courseId:"basics",lessonId:"create-nextjs-app",stepId:"setup",subtitle:"Setup"},l={meta:o},i=e=>{let{children:t}=e;return(0,a.kt)(r.Z,{meta:o},t)};function c(e){let{components:t,...s}=e;return(0,a.kt)(i,{...l,...s,components:t,mdxType:"MDXLayout"},(0,a.kt)("p",null,`First, let’s make sure that your development environment is ready.`),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},`If you don’t have `,(0,a.kt)("strong",{parentName:"li"},"Node.js")," installed, ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"install it from here"),`. You’ll need Node.js version `,(0,a.kt)("strong",{parentName:"li"},"18")," or higher."),(0,a.kt)("li",{parentName:"ul"},`You’ll be using your own text editor and terminal app for this tutorial.`)),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are on Windows, we recommend ",(0,a.kt)("a",{parentName:"p",href:"https://gitforwindows.org/"},"downloading Git for Windows")," and use Git Bash that comes with it, which supports the UNIX-specific commands in this tutorial. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Windows Subsystem for Linux (WSL)")," is another option.")),(0,a.kt)("h3",null,"Create a Next.js app"),(0,a.kt)("p",null,"To create a Next.js app, open your terminal, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd"),` into the directory you’d like to create the app in, and run the following command:`),(0,a.kt)("pre",{className:"language-shell"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-next-app@latest nextjs-blog --use-npm --example ",(0,a.kt)("span",{parentName:"code",className:"token string"},'"https://github.com/vercel/next-learn/tree/main/basics/learn-starter"'),`
`)),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Under the hood, this uses the tool called ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/create-next-app"},(0,a.kt)("inlineCode",{parentName:"a"},"create-next-app")),", which bootstraps a Next.js app for you. It uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next-learn/tree/main/basics/learn-starter"},"this template")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"--example")," flag."),(0,a.kt)("p",{parentName:"blockquote"},`If it doesn’t work, please take a look at `,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next-learn/blob/main/basics/errors/install.md"},"this page"),".")),(0,a.kt)("h3",null,"Run the development server"),(0,a.kt)("p",null,"You now have a new directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"nextjs-blog"),`. Let’s `,(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into it:"),(0,a.kt)("pre",{className:"language-shell"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},(0,a.kt)("span",{parentName:"code",className:"token builtin class-name"},"cd"),` nextjs-blog
`)),(0,a.kt)("p",null,"Then, run the following command:"),(0,a.kt)("pre",{className:"language-shell"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},(0,a.kt)("span",{parentName:"code",className:"token function"},"npm"),` run dev
`)),(0,a.kt)("p",null,`This starts your Next.js app’s "development server" (more on this later) on port `,(0,a.kt)("strong",{parentName:"p"},"3000"),"."),(0,a.kt)("p",null,`Let’s check to see if it’s working. Open `,(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," from your browser."),(0,a.kt)(n.Z,{meta:o,answers:["Welcome to Next.js!","Hello Next.js!"],correctAnswer:"Welcome to Next.js!",mdxType:"AnswerBox"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quick Review"),": What text do you see on the page?")))}c.isMDXComponent=!0}},e=>{var t=t=>e(e.s=t);e.O(0,[27,8746,4371,2878,4730,1067,8590,2888,9774,179],()=>t(57857)),_N_E=e.O()}]);