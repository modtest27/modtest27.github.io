(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{19671:(e,t,r)=>{"use strict";r.d(t,{b:()=>d});var o=r(99586),n=r(60373),i=r(24812);function a(e){let t=["h1","h2","h3","h4","h5","h6","b","strong"].map(e=>document.querySelectorAll(e)),r=[];t.forEach(t=>{t.forEach(t=>{let o=function(e,t){function r(e){let t=[],r=e;for(;r;)t.push(r),r=r.parentNode;return t}let o=r(e),n=r(t),i=null;for(let e=0;e<o.length&&!i;e++)n.includes(o[e])&&(i=o[e]);let a=0,s=e;for(;s!==i&&s;)s=s.parentNode,a++;let c=0;for(s=t;s!==i&&s;)s=s.parentNode,c++;return a+c}(e,t),n=function(e,t){let r=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=r.left+r.width/2,i=r.top+r.height/2,a=Math.sqrt((o.left+o.width/2-n)**2+(o.top+o.height/2-i)**2);return 0===a?1:a}(e,t),i=Number.parseInt(window.getComputedStyle(t).fontSize);r.push({tag:t.tagName,text:t.textContent,fontSize:i,domDistance:o,physicalDistance:n,score:0})})}),r.forEach(e=>{let t=1/(e.domDistance+1),r=1/(e.physicalDistance+1);e.score=2*t+1*r}),r.sort((e,t)=>t.score-e.score);let o=r[0];return l(o?.text??"Unknown")}function s(e){return e.includes("rgb")?function(e){let[t,r,o]=e.replace("rgb(","").replace(")","").split(",").map(e=>Number(e).toString(16).padStart(2,"0"));return`#${t?.toUpperCase()}${r?.toUpperCase()}${o?.toUpperCase()}`}(e):e}function c(e){let t=e.textContent;if(""!==t&&t||(t=e.ariaLabel??void 0),!t)return;let r="";for(let e=0;e<t.length;e++){let o=t[e]??"",n=t[e+1]??"";if(!/[a-z]/i.exec(o)||!/[a-z]/i.exec(n)){r+=o;continue}if(o===o.toLowerCase()&&n===n.toUpperCase()){r+=`${t[e]}, `;continue}r+=t[e]}return l(t=r)}function l(e){let t=e.replace(/\s+/g," ").trim();return t.length>100?`${t.slice(0,100)}...`:t}function d(e){let{analytics:t,active:r=!0,events:l=["click","hover","focus"]}=e,d=(0,n.usePathname)(),[u,p]=(0,o.useState)(new Set);(0,o.useEffect)(()=>{let e=setTimeout(()=>{"undefined"!=typeof document&&p(new Set([...document.querySelectorAll("[data-track]"),...document.querySelectorAll("[data-track-intent]")]))},200);return()=>{clearTimeout(e)}},[d]),(0,o.useEffect)(()=>{if("undefined"==typeof document)return;async function e(e,o){if(await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})}),!r||!o.target)return;let n=o.target.closest("[data-track], [data-track-intent]");if(!n)return;let l=n.getAttribute("data-track-context")??a(n);n.setAttribute("data-track-context",l);let d=n.getAttribute("data-track-intent")??void 0,u=window.getComputedStyle(n),p=Number.parseInt(u.fontSize),g=n.getAttribute("data-track-click-name")||l,f=n.getAttribute("data-track-click-value")||d,h={text:n.getAttribute("data-track-text")||c(n),tag:n.tagName,intent:d,fontSize:p,context:l,width:n.clientWidth,height:n.clientHeight,color:s(u.color),ctaSize:function(e){let t=e.clientHeight;return t<=24?"tiny":t<=32?"small":t<=40?"medium":"large"}(n),backgroundColor:s(u.backgroundColor),...n instanceof HTMLAnchorElement&&n.href&&{href:n.href},..."Click"===e&&g&&{click_name:g},..."Click"===e&&f&&{click_value:f}},v={Hover:i.n.HOVER_ELEMENT,Click:i.n.CLICK_ELEMENT,Focus:i.n.FOCUS_ELEMENT}[e];t.track(v,h)}let o=t=>{e("Click",t)},n=t=>{e("Hover",t)},d=t=>{e("Focus",t)};return u.forEach(e=>{l.includes("click")&&e.addEventListener("click",o),l.includes("hover")&&e.addEventListener("mouseenter",n),l.includes("focus")&&e.addEventListener("focus",d,!0)}),()=>{u.forEach(e=>{l.includes("click")&&e.removeEventListener("click",o),l.includes("hover")&&e.removeEventListener("mouseenter",n),l.includes("focus")&&e.removeEventListener("focus",d,!0)})}},[r,t,u,l]);let[g,f]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if("undefined"==typeof document)return;let e=e=>{e.ctrlKey&&e.shiftKey&&"a"===e.key.toLowerCase()&&f(e=>!e)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[u]),(0,o.useEffect)(()=>{g?(u.forEach(e=>{let t=e.getAttribute("data-track-intent"),r=e.getAttribute("data-track-context")||a(e),o=e.getAttribute("data-track-text")||c(e);e.setAttribute("data-track-debug",`Intent: ${t}
Context: ${r}
Text: ${o}`)}),document.documentElement.classList.add("view-analytics")):document.documentElement.classList.remove("view-analytics")},[g,u])}r(12446)},60808:(e,t,r)=>{"use strict";r.d(t,{s6:()=>L.XP,co:()=>O,bs:()=>N.b});var o,n,i,a=r(57448);!function(e){e.Heap="Heap",e.Koala="Koala",e.Vercel="Vercel",e.GoogleAnalytics="Google Analytics",e.GoogleAnalytics4="Google Analytics 4",e.GoogleTagManager="Google Tag Manager",e.Algolia="Algolia",e.Test="Test"}(o||(o={}));let s=!!r(32608).env.CI,c=e=>!!l(e)&&(e instanceof Error||function e(t){if("[object Error]"===Object.prototype.toString.call(t))return!0;let r=Object.getPrototypeOf(t);return null!==r&&e(r)}(e)),l=e=>"object"==typeof e&&null!==e&&!Array.isArray(e);r(32608);!function(e){e.Service="Service",e.Providers="Providers"}(n||(n={}));let d={error:function(e,t,r){if(!s){console.error(`analytics error: ${t}`);return}},warn:function(e,t,r){},debug:function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n]}};!function(e){e.Vercel="vercel",e.Next="next",e.Turbo="turbo",e.AIStudio="ai-studio",e.V0="v0"}(i||(i={}));class u{#e;#t;constructor(e){this.#e=new Map,this.#t=e,this.logCreation()}track(e,t){let r={};for(let[e,t]of this.#e.entries())r[e]=t.id;this.executeOnProviders("track",{event:e,properties:{...t,...r}})}addScope(e){let{managedByHook:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=u.scopeName(e),o=this.#e.get(r);u.guardAgainstBadScopeManagement({scope:o,managedByHook:t,action:"add"}),this.#e.set(r,{id:crypto.randomUUID(),managedByHook:t})}removeScope(e){let{managedByHook:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=u.scopeName(e),o=this.#e.get(r);return u.guardAgainstBadScopeManagement({scope:o,managedByHook:t,action:"remove"}),this.#e.delete(r)}resetScope(e){let t=u.scopeName(e);this.#e.set(t,{id:crypto.randomUUID(),managedByHook:this.#e.get(t)?.managedByHook??!1})}executeOnProvider(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];let a=this.#t.find(t=>t.id===e);if(!a)return d.warn(n.Service,`'${e}' not found when attempting to execute '${t}'. To execute '${t}', you will need to supply the '${e}' with '${t}' implemented. Returning null.`,{}),null;let s=a.actions[t];if(!s)return d.warn(n.Service,`'${t}' not found implemented by '${a.id}', but was called. Returning null`,{}),null;try{return d.debug(n.Service,`Executed '${t}' on '${a.id}' with args:`,o),s(...o)}catch(e){return d.error(`Failed to run '${t}' on ${a.id} provider`,`Action failed to run on ${a.id}`,e),null}}executeOnProviders(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];let i=[];if(this.#t.forEach(t=>{let o=t.actions[e];if(o){try{o(...r)}catch(o){d.error(`Failed to run '${e}' on ${t.id} provider with args ${JSON.stringify(r)}`,`Action failed to run on ${t.id}`,o)}i.push(t.id)}}),0===i.length){d.warn(n.Service,`NO OP, No providers found when executing '${e}'. To execute '${e}', you will need to supply a provider with '${e}' implemented.`);return}d.debug(n.Service,`Executed '${e}' for provider${i.length>1?"s":""}: ${i.join(", ")} with args`,r)}identify(e,t){this.executeOnProviders("identify",e,t)}reset(){this.executeOnProviders("reset")}setPersistedGlobalProperties(e){this.executeOnProviders("setPersistedGlobalProperties",e)}clearPersistedGlobalProperties(){this.executeOnProviders("clearPersistedGlobalProperties")}setGlobalProperties(e){this.executeOnProviders("setGlobalProperties",e)}setTraits(e){this.executeOnProviders("setTraits",e)}enabled(e){if(!e)return this.#t.every(e=>e.enabled);let t=this.#t.find(t=>t.id===e);return!!t&&t.enabled}getDisabledProviders(){return this.#t.filter(e=>!e.enabled)}setKoalaAutocapture(e){this.executeOnProvider(o.Koala,"setKoalaAutocapture",e)}getAlgoliaClient(){let e=this.executeOnProvider(o.Algolia,"getAlgoliaClient");if(!e)throw Error("Algolia client not found. If you wish to use algolia please provide an Algolia provider when creating your analytics service.");return e}getAnonymousId(){return this.executeOnProvider(o.Heap,"getAnonymousId")}getScripts(e,t){let r=this.getDisabledProviders();if(d.debug(n.Service,"Loading analytics scripts..."),r.length>0){let e=r.map(e=>e.id).join(", ");d.debug(n.Service,`Found disabled providers when creating analytics scripts: ${e}. Read the README.md in @vercel/site-analytics for more information on why these providers may be disabled.`)}return(0,a.jsx)(a.Fragment,{children:this.#t.map(r=>{let o=`Excluding provider '${r.id}' from 'getScripts' function`;return r.Script?r.enabled?e.includes(r.category)?t&&t.includes(r.id)?(d.debug(n.Service,`${o} because it was explicitly excluded from the 'getScripts' function.`),null):r.Script:(d.debug(n.Service,`${o} because it's category '${r.category}' is not included in the categories provided to 'getScripts' function.`),null):(d.debug(n.Service,`${o} because it not enabled.`),null):null})})}getAllCookies(){let e=[];return this.#t.forEach(t=>{t.cookies&&e.push(...t.cookies)}),e}getAllCookiesMappedToConsentCategory(){let e=new Map;return this.#t.forEach(t=>{t.cookies&&t.cookies.forEach(r=>{e.set(r,t.category)})}),e}getProvidersDebugInfo(){return Object.fromEntries(this.#t.map(e=>[["enabled",e.enabled],["actions",Object.keys(e.actions)]]))}logCreation(){d.debug(n.Service,`Analytics service created with providers: ${this.#t.map(e=>`'${e.id}'`).join(", ")}. Of those, the following are disabled: ${this.getDisabledProviders().length?this.getDisabledProviders().map(e=>`'${e.id}'`).join(", "):"All providers are enabled"}.
        `,{providers:this.getProvidersDebugInfo()})}static scopeName(e){return`scope-${e}`}static guardAgainstBadScopeManagement(e){let{scope:t,managedByHook:r,action:o}=e;t&&t.managedByHook}}var p=r(20420);function g(e){let{appId:t}=e,r=`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="/_stream/external/cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])}; heap.load("${t}");`;return(0,a.jsx)(p.default,{dangerouslySetInnerHTML:{__html:r},id:"script-heap-analytics",strategy:"lazyOnload"},"script-heap-analytics")}r(32608);let f=["_hp2_props\\.\\d+","_hp2_ses_props\\.\\d+","_hp2_id\\.\\d+"],h=["email","ip","phone"],v={},m=[],y=null,w=null,k={},E={addEventProperties:e=>{k={...e},d.debug(n.Providers,"Heap Mock: heap.addEventProperties",{...e,...k})},clearEventProperties:()=>{k={},d.debug(n.Providers,"Heap Mock: heap.clearEventProperties")},identify:e=>d.debug(n.Providers,"Heap Mock: heap.identify",e),resetIdentity:()=>{k={},d.debug(n.Providers,"Heap Mock: heap.resetIdentity")},track:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return d.debug(n.Providers,"Heap Mock: heap.track",...t)}};function b(e){let{tagManagerId:t}=e,r=`'/_stream/external/e/' +
    encodeURIComponent(
      btoa('https://www.googletagmanager.com/gtm.js?id=' + i + dl),
    );`,o=`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=${r};f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${t}');`;return(0,a.jsx)(p.default,{dangerouslySetInnerHTML:{__html:o},id:"google-tag-manager",strategy:"lazyOnload"})}r(32608);let P=["_ga_\\w+","_gac_gb_\\w+","_gac_\\w+","_gat_gtag_\\w+","_gcl_au"];async function A(e){let{condition:t,onConditionMet:r,onTimeout:o,interval:n=250,maxAttempts:i=32}=e;return new Promise(e=>{let a=0,s=async()=>{await t()?(r&&await r(),e()):++a>=i?(o&&o(),e()):setTimeout(()=>{s()},n)};s()})}function _(e){let{slug:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.default,{dangerouslySetInnerHTML:{__html:'!function(t){if(window.ko)return;window.ko=[],["identify","track", "removeListeners", "open", "on", "off", "qualify", "ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});}();'},id:"script-koala-placeholder"},"script-koala-placeholder"),(0,a.jsx)(p.default,{id:"script-koala-cdn",onReady:()=>{let e=window.ko;e.ready(S),e.on("profile-update",S)},src:`/_stream/external/cdn.koala.live/v1/${t}/sdk.js`},"script-koala-cdn")]})}function S(){A({condition:()=>!!(window.heap&&(window.ko?.profile?.user.id||window.ko?.profile?.qualification?.account_score?.fit_grade_letter)),onConditionMet:()=>{let e=window.ko.profile.user.id,t=window.ko.profile.qualification?.account_score?.fit_grade_letter;window.heap.addUserProperties({...e?{koala_user_id:e}:{},...t?{koala_fit_grade_letter:t}:{}})}})}function T(e){if(!e||Array.isArray(e))return;let t="Koala `identify` call in `setTraits` failed for an unknown reason.";"string"==typeof e?t=e:c(e)&&(t=e.message),d.warn(n.Service,t)}r(32608);let C=["ko_sid","ko_id"],x={initialized:!1,identify:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return d.debug(n.Providers,"Koala Mock: koala.identify",...t),Promise.resolve(void 0)},track:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return d.debug(n.Providers,"Koala Mock: koala.track",...t),Promise.resolve(void 0)},ready:e=>e(),startAutocapture:()=>{d.debug(n.Providers,"Koala Mock: koala.startAutocapture")},stopAutocapture:()=>{d.debug(n.Providers,"Koala Mock: koala.stopAutocapture")},profile:void 0};var I=r(18341),M=r.n(I),$=r(61489),L=r(8611),N=r(19671);let O=new u([function(e){let{appId:t}=e;function r(){return window.heap?window.heap:E}return{id:o.Heap,enabled:!0,cookies:f,category:"analytics",actions:{identify:function(e){r().identity!==e&&r().identify(e)},track:function(e){let{event:t,properties:o}=e,n={...o,...o?h.reduce((e,t)=>(t in o&&(e[t]="REDACTED"),e),{}):{}};r().track(t,n),function(e){let{event:t,properties:o}=e;window.heap||(m.push({event:t,properties:o}),y&&clearInterval(y),y=setInterval(()=>{if(window.heap){for(let e of(y&&clearInterval(y),m))r().track(e.event,e.properties);m.length,m.splice(0,m.length)}},250))}({event:t,properties:n})},setPersistedGlobalProperties:function(e){v={...e.experimentParameters},r().addEventProperties({...v})},clearPersistedGlobalProperties:function(){v={}},setGlobalProperties:function(e){w&&clearInterval(w),w=setInterval(()=>{window.heap&&(w&&clearInterval(w),r().clearEventProperties(),r().addEventProperties({...v,isLoggedIn:e.isLoggedIn,isVercelian:e.isVercelian,isVercelianEncoded:e.isVercelian.toString(),...e.plan&&{"Subscription Plan":e.plan},...e.role&&{Role:e.role},...e.teamId&&{"Team Id":e.teamId},...e.isTrial&&{"Is Trial":e.isTrial},userVersion:e.userVersion,userDefaultTeamId:e.userDefaultTeamId,...e.firmographicScore&&{firmographicScore:e.firmographicScore}}))},250)},getAnonymousId:function(){return r().userId},reset:()=>{r().resetIdentity()}},Script:(0,a.jsx)(g,{appId:t.prod},"script-heap-analytics")}}({appId:{prod:"3987253934",dev:"624982907"}}),function(e){let{tagManagerId:t}=e;if("undefined"!=typeof navigator&&navigator?.sendBeacon){let e=navigator.sendBeacon;navigator.sendBeacon=function(t,r){let o=t instanceof URL?t:new URL(t,location.href),n=o;if(/www\.google-analytics\.com|region\d+\.google-analytics\.com|region\d+\.analytics\.google\.com|analytics\.google\.com/.test(o.hostname)){var i;i=o.toString(),n=`/_stream/external/e/${encodeURIComponent(btoa(i))}`}return e?e.call(this,n,r):(fetch(n,{method:"POST",keepalive:!0,body:r,mode:"no-cors"}),!0)}}return{id:o.GoogleTagManager,enabled:!0,actions:{track:function(e){let{event:t,properties:r}=e;window.dataLayer?.push({event:t,...r})}},cookies:P,category:"marketing",Script:(0,a.jsx)(b,{tagManagerId:t.prod},"script-google-tag-manager-script-group")}}({tagManagerId:{dev:"GTM-5ZJQN2L",prod:"GTM-5ZJQN2L"}}),function(e){let{slug:t}=e;function r(){return window.ko??x}function n(e){try{Promise.resolve("string"==typeof e?function(e){if(!r().profile||r().profile?.user.id!==e)return r().identify({id:e})}(e):function(e){let{userId:t,...o}=e;return r().identify({...o,id:t})}(e)).catch(T)}catch(e){T(e)}}return{id:o.Koala,enabled:!0,cookies:C,category:"analytics",actions:{identify:(e,t)=>{if(t)return n(t)},track:function(e){let{event:t,properties:o}=e;r().track(t,o)},setTraits:function(e){return n(e)},setKoalaAutocapture:function e(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!(o>5)){if(!r().initialized){setTimeout(()=>{e(t,o+1)},2e3);return}t?r().startAutocapture():r().stopAutocapture()}}},Script:(0,a.jsx)(_,{slug:t.prod},"script-koala-analytics-group")}}({slug:{dev:"vercel-dev",prod:"vercel"}}),{id:o.Vercel,enabled:!0,category:"essential",actions:{track:function(e){let{event:t,properties:r}=e;(0,$.j)(t,r?M()(r):void 0)}}}])},24812:(e,t,r)=>{"use strict";var o;r.d(t,{n:()=>o}),function(e){e.CLICK_EVENT="Clicked a button or link",e.EXPERIMENT_VIEWED="Experiment Viewed",e.FEEDBACK_SUBMITTED="Feedback Submitted",e.CLICK_ELEMENT="Click Element",e.HOVER_ELEMENT="Hover Element",e.FOCUS_ELEMENT="Focus Element"}(o||(o={}))},8611:(e,t,r)=>{"use strict";r.d(t,{XP:()=>a});var o,n,i=r(24812);o||(o={}),function(e){e.GAME_STARTED="Game started",e.GAME_CATEGORY_COMPLETE="Game category complete",e.GAME_WON="Game won",e.REGISTRATION_COMPLETE="Registration complete",e.COMMAND_RABBIT="Command Rabbit",e.COMMAND_VERCEL="Command Vercel",e.COMMAND_SANITY="Command Sanity"}(n||(n={}));let a={...i.n,...o,...n}},12446:()=>{}}]);