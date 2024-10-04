(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{45691:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn-pages-router/basics/create-nextjs-app",function(){return a(96633)}])},96633:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,meta:()=>s}),a(10628);var r=a(16942),n=a(18590);let s={title:"Create a Next.js App",courseId:"basics",lessonId:"create-nextjs-app"},o={meta:s},i=e=>{let{children:t}=e;return(0,r.kt)(n.Z,{meta:s},t)};function l(e){let{components:t,...a}=e;return(0,r.kt)(i,{...o,...a,components:t,mdxType:"MDXLayout"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"New App Router Course"),": You're currently viewing the Pages Router course. ",(0,r.kt)("a",{parentName:"p",href:"/learn"},"View the new App Router course here"),".")),(0,r.kt)("p",null,"To build a complete web application with React from scratch, there are many important details you need to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel."),(0,r.kt)("li",{parentName:"ul"},"You need to do production optimizations such as code splitting."),(0,r.kt)("li",{parentName:"ul"},"You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering."),(0,r.kt)("li",{parentName:"ul"},"You might have to write some server-side code to connect your React app to your data store.")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"framework"),` can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great "Developer Experience", ensuring you and your team have an amazing experience while writing code.`),(0,r.kt)("h3",null,"Next.js: The React Framework"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("strong",{parentName:"p"},"Next.js"),", the React Framework. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.codinghorror.com/falling-into-the-pit-of-success/"},"pit of success")," when building React applications."),(0,r.kt)("p",null,"Next.js aims to have best-in-class developer experience and many built-in features, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An intuitive ",(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/pages"},"page-based")," routing system (with support for ",(0,r.kt)("a",{parentName:"li",href:"/docs/routing/dynamic-routes"},"dynamic routes"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/pages#pre-rendering"},"Pre-rendering"),", both ",(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/pages#static-generation-recommended"},"static generation")," (SSG) and ",(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/pages#server-side-rendering"},"server-side rendering")," (SSR) are supported on a per-page basis"),(0,r.kt)("li",{parentName:"ul"},"Automatic code splitting for faster page loads"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/routing/introduction#linking-between-pages"},"Client-side routing")," with optimized prefetching"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/built-in-css-support"},"Built-in CSS")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/built-in-css-support#sass-support"},"Sass support"),", and support for any ",(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/built-in-css-support#css-in-js"},"CSS-in-JS")," library"),(0,r.kt)("li",{parentName:"ul"},"Development environment with ",(0,r.kt)("a",{parentName:"li",href:"/docs/basic-features/fast-refresh"},"Fast Refresh")," support"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-routes/introduction"},"API routes")," to build API endpoints with Serverless Functions"),(0,r.kt)("li",{parentName:"ul"},"Fully extendable")),(0,r.kt)("p",null,"Next.js is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands."),(0,r.kt)("h3",null,"About This Tutorial"),(0,r.kt)("p",null,"This free interactive course will guide you through how to get started with Next.js."),(0,r.kt)("p",null,`In this tutorial, you’ll learn Next.js basics by creating a very simple `,(0,r.kt)("strong",{parentName:"p"},"blog app"),`. Here’s an example of the final result:`),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://next-learn-starter.vercel.app/"},"https://next-learn-starter.vercel.app"))," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next-learn/tree/main/basics/demo"},"source"),")"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},`This tutorial assumes basic knowledge of JavaScript and React. If you’ve never written React code, you should go through `,(0,r.kt)("a",{parentName:"p",href:"https://react.dev/learn/tutorial-tic-tac-toe"},"the official React tutorial")," first."),(0,r.kt)("p",{parentName:"blockquote"},`If you’re looking for documentation instead, `,(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},"visit the Next.js documentation"),".")),(0,r.kt)("h3",null,"Join the Conversation"),(0,r.kt)("p",null,"If you have questions about anything related to Next.js or this course, you're welcome to ask our community on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Q3AsD4efFC"},"Discord"),"."),(0,r.kt)("p",null,`Let’s get started!`))}l.isMDXComponent=!0}},e=>{var t=t=>e(e.s=t);e.O(0,[27,8746,4371,2878,4730,1067,8590,2888,9774,179],()=>t(45691)),_N_E=e.O()}]);