(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6019],{61489:(e,t,r)=>{"use strict";function n(){return"undefined"!=typeof window}function i(){return(n()?window.vam:"production")||"production"}function o(){return"production"===i()}function u(e,t,r){var u,a;if(!n()){let e="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(o())console.warn(e);else throw Error(e);return}if(!t){null==(u=window.va)||u.call(window,"event",{name:e,options:r});return}try{let n=function(e,t){if(!e)return;let r=e,n=[];for(let[i,o]of Object.entries(e))"object"==typeof o&&null!==o&&(t.strip?r=function(e,{[e]:t,...r}){return r}(i,r):n.push(i));if(n.length>0&&!t.strip)throw Error(`The following properties are not valid: ${n.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return r}(t,{strip:o()});null==(a=window.va)||a.call(window,"event",{name:e,data:n,options:r})}catch(e){e instanceof Error&&"development"===i()&&console.error(e)}}r.d(t,{j:()=>u})},18341:e=>{function t(e){return e&&e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return e}function n(e,n){let i=(n=n||{}).delimiter||".",o=n.maxDepth,u=n.transformKey||r,a={};return!function e(r,l,s){s=s||1,Object.keys(r).forEach(function(c){let f=r[c],d=n.safe&&Array.isArray(f),p=Object.prototype.toString.call(f),g=t(f),w=l?l+i+u(c):u(c);if(!d&&!g&&("[object Object]"===p||"[object Array]"===p)&&Object.keys(f).length&&(!n.maxDepth||s<o))return e(f,w,s+1);a[w]=f})}(e),a}e.exports=n,n.flatten=n,n.unflatten=function e(i,o){let u=(o=o||{}).delimiter||".",a=o.overwrite||!1,l=o.transformKey||r,s={};if(t(i)||"[object Object]"!==Object.prototype.toString.call(i))return i;function c(e){let t=Number(e);return isNaN(t)||-1!==e.indexOf(".")||o.object?e:t}return Object.keys(i=Object.keys(i).reduce(function(e,t){var r;let a=Object.prototype.toString.call(i[t]);return!("[object Object]"===a||"[object Array]"===a)||function(e){let t=Object.prototype.toString.call(e);return!e||("[object Array]"===t?!e.length:"[object Object]"===t?!Object.keys(e).length:void 0)}(i[t])?(e[t]=i[t],e):Object.keys(r=n(i[t],o)).reduce(function(e,n){return e[t+u+n]=r[n],e},e)},{})).forEach(function(t){let r=t.split(u).map(l),n=c(r.shift()),f=c(r[0]),d=s;for(;void 0!==f;){if("__proto__"===n)return;let e=Object.prototype.toString.call(d[n]),t="[object Object]"===e||"[object Array]"===e;if(!a&&!t&&void 0!==d[n])return;(!a||t)&&(a||null!=d[n])||(d[n]="number"!=typeof f||o.object?{}:[]),d=d[n],r.length>0&&(n=c(r.shift()),f=c(r[0]))}d[n]=e(i[t],o)}),s}},20420:(e,t,r)=>{"use strict";r.d(t,{default:()=>i.a});var n=r(45355),i=r.n(n)},3633:(e,t,r)=>{"use strict";r.d(t,{$l:()=>u,BN:()=>I,DY:()=>g,J$:()=>q,JN:()=>m,LI:()=>V,PM:()=>s,W6:()=>T,i_:()=>o,ko:()=>H,kw:()=>k,mf:()=>l,o8:()=>a,qC:()=>C,s6:()=>G,sj:()=>x,u3:()=>A,u_:()=>$,w6:()=>S,xD:()=>Q,y8:()=>c});var n=r(99586);let i=()=>{},o=i(),u=Object,a=e=>e===o,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),c=e=>l(e.then),f=new WeakMap,d=0,p=e=>{let t,r;let n=typeof e,i=e&&e.constructor,o=i==Date;if(u(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=f.get(e))return t;if(t=++d+"~",f.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=p(e[r])+",";f.set(e,t)}if(i==u){t="#";let n=u.keys(e).sort();for(;!a(r=n.pop());)a(e[r])||(t+=r+":"+p(e[r])+",");f.set(e,t)}}return t},g=new WeakMap,w={},v={},y="undefined",E=typeof window!=y,b=typeof document!=y,h=()=>E&&typeof window.requestAnimationFrame!=y,m=(e,t)=>{let r=g.get(e);return[()=>!a(t)&&e.get(t)||w,n=>{if(!a(t)){let i=e.get(t);t in v||(v[t]=i),r[5](t,s(i,n),i||w)}},r[6],()=>!a(t)&&t in v?v[t]:!a(t)&&e.get(t)||w]},_=!0,[O,j]=E&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],R={initFocus:e=>(b&&document.addEventListener("visibilitychange",e),O("focus",e),()=>{b&&document.removeEventListener("visibilitychange",e),j("focus",e)}),initReconnect:e=>{let t=()=>{_=!0,e()},r=()=>{_=!1};return O("online",t),O("offline",r),()=>{j("online",t),j("offline",r)}}},S=!n.useId,T=!E||"Deno"in window,k=e=>h()?window.requestAnimationFrame(e):setTimeout(e,1),V=T?n.useEffect:n.useLayoutEffect,L="undefined"!=typeof navigator&&navigator.connection,N=!T&&L&&(["slow-2g","2g"].includes(L.effectiveType)||L.saveData),C=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t]},D=0,A=()=>++D;var x={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function I(...e){let[t,r,n,i]=e,u=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),f=u.populateCache,d=u.rollbackOnError,p=u.optimisticData,w=e=>"function"==typeof d?d(e):!1!==d,v=u.throwOnError;if(l(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(y))}return y(r);async function y(r){let i;let[s]=C(r);if(!s)return;let[d,y]=m(t,s),[E,b,h,_]=g.get(t),O=()=>{let e=E[s];return(l(u.revalidate)?u.revalidate(d().data,r):!1!==u.revalidate)&&(delete h[s],delete _[s],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return O();let j=n,R=A();b[s]=[R,0];let S=!a(p),T=d(),k=T.data,V=T._c,L=a(V)?k:V;if(S&&y({data:p=l(p)?p(L,k):p,_c:L}),l(j))try{j=j(L)}catch(e){i=e}if(j&&c(j)){if(j=await j.catch(e=>{i=e}),R!==b[s][0]){if(i)throw i;return j}i&&S&&w(i)&&(f=!0,y({data:L,_c:o}))}if(f&&!i&&(l(f)?y({data:f(j,L),error:o,_c:o}):y({data:j,error:o,_c:o})),b[s][1]=A(),Promise.resolve(O()).then(()=>{y({_c:o})}),i){if(v)throw i;return}return j}}let P=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},F=(e,t)=>{if(!g.has(e)){let r=s(R,t),n={},u=I.bind(o,e),a=i,l={},c=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},f=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},d=()=>{if(!g.has(e)&&(g.set(e,[n,{},{},{},u,f,c]),!T)){let t=r.initFocus(setTimeout.bind(o,P.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,P.bind(o,n,1)));a=()=>{t&&t(),i&&i(),g.delete(e)}}};return d(),[e,u,d,a]}return[e,g.get(e)[4]]},[M,W]=F(new Map),$=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,r,n,i)=>{let o=r.errorRetryCount,u=i.retryCount,l=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(a(o)||!(u>o))&&setTimeout(n,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>p(e)==p(t),isPaused:()=>!1,cache:M,mutate:W,fallback:{}},{isOnline:()=>_,isVisible:()=>{let e=b&&document.visibilityState;return a(e)||"hidden"!==e}}),J=(e,t)=>{let r=s(e,t);if(t){let{use:n,fallback:i}=e,{use:o,fallback:u}=t;n&&o&&(r.use=n.concat(o)),i&&u&&(r.fallback=s(i,u))}return r},U=(0,n.createContext)({}),q=e=>{let{value:t}=e,r=(0,n.useContext)(U),i=l(t),u=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),a=(0,n.useMemo)(()=>i?u:J(r,u),[i,r,u]),c=u&&u.provider,f=(0,n.useRef)(o);c&&!f.current&&(f.current=F(c(a.cache||M),u));let d=f.current;return d&&(a.cache=d[0],a.mutate=d[1]),V(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,n.createElement)(U.Provider,s(e,{value:a}))},B=E&&window.__SWR_DEVTOOLS_USE__,K=B?window.__SWR_DEVTOOLS_USE__:[],Y=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Z=()=>s($,(0,n.useContext)(U)),z=K.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=C(t),[,,,i]=g.get(M);if(n.startsWith("$inf$"))return r(...e);let o=i[n];return a(o)?r(...e):(delete i[n],o)});return e(t,i,n)}),G=e=>function(...t){let r=Z(),[n,i,o]=Y(t),u=J(r,o),a=e,{use:l}=u,s=(l||[]).concat(z);for(let e=s.length;e--;)a=s[e](a);return a(n,i||u.fetcher||null,u)},H=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},Q=(e,t)=>(...r)=>{let[n,i,o]=Y(r),u=(o.use||[]).concat(t);return e(n,i,{...o,use:u})};B&&(window.__SWR_DEVTOOLS_REACT__=n)},9424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(99586),i=r(35142),o=r(3633);let u=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),a={dedupe:!0};o.$l.defineProperty(o.J$,"defaultValue",{value:o.u_});let l=(0,o.s6)((e,t,r)=>{let{cache:l,compare:s,suspense:c,fallbackData:f,revalidateOnMount:d,revalidateIfStale:p,refreshInterval:g,refreshWhenHidden:w,refreshWhenOffline:v,keepPreviousData:y}=r,[E,b,h,m]=o.DY.get(l),[_,O]=(0,o.qC)(e),j=(0,n.useRef)(!1),R=(0,n.useRef)(!1),S=(0,n.useRef)(_),T=(0,n.useRef)(t),k=(0,n.useRef)(r),V=()=>k.current,L=()=>V().isVisible()&&V().isOnline(),[N,C,D,A]=(0,o.JN)(l,_),x=(0,n.useRef)({}).current,I=(0,o.o8)(f)?r.fallback[_]:f;I&&(0,o.y8)(I)&&(I=u(I));let P=(e,t)=>{for(let r in x)if("data"===r){if(!s(e[r],t[r])&&(!(0,o.o8)(e[r])||!s(K,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},F=(0,n.useMemo)(()=>{let e=!!_&&!!t&&((0,o.o8)(d)?!V().isPaused()&&!c&&(!!(0,o.o8)(p)||p):d),r=t=>{let r=(0,o.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=A(),u=r(n),a=n===i?u:r(i),l=u;return[()=>{let e=r(N());return P(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>a]},[l,_]),M=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>D(_,(t,r)=>{P(r,t)||e()}),[l,_]),F[0],F[1]),W=!j.current,$=E[_]&&E[_].length>0,J=M.data,U=(0,o.o8)(J)?I:J,q=M.error,B=(0,n.useRef)(U),K=y?(0,o.o8)(J)?B.current:J:U,Y=(!$||!!(0,o.o8)(q))&&(W&&!(0,o.o8)(d)?d:!V().isPaused()&&(c?!(0,o.o8)(U)&&p:(0,o.o8)(U)||p)),Z=!!(_&&t&&W&&Y),z=(0,o.o8)(M.isValidating)?Z:M.isValidating,G=(0,o.o8)(M.isLoading)?Z:M.isLoading,H=(0,n.useCallback)(async e=>{let t,n;let i=T.current;if(!_||!i||R.current||V().isPaused())return!1;let u=!0,a=e||{},l=!h[_]||!a.dedupe,c=()=>o.w6?!R.current&&_===S.current&&j.current:_===S.current,f={isValidating:!1,isLoading:!1},d=()=>{C(f)},p=()=>{let e=h[_];e&&e[1]===n&&delete h[_]},g={isValidating:!0};(0,o.o8)(N().data)&&(g.isLoading=!0);try{if(l&&(C(g),r.loadingTimeout&&(0,o.o8)(N().data)&&setTimeout(()=>{u&&c()&&V().onLoadingSlow(_,r)},r.loadingTimeout),h[_]=[i(O),(0,o.u3)()]),[t,n]=h[_],t=await t,l&&setTimeout(p,r.dedupingInterval),!h[_]||h[_][1]!==n)return l&&c()&&V().onDiscarded(_),!1;f.error=o.i_;let e=b[_];if(!(0,o.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return d(),l&&c()&&V().onDiscarded(_),!1;let a=N().data;f.data=s(a,t)?a:t,l&&c()&&V().onSuccess(t,_,r)}catch(r){p();let e=V(),{shouldRetryOnError:t}=e;!e.isPaused()&&(f.error=r,l&&c()&&(e.onError(r,_,e),(!0===t||(0,o.mf)(t)&&t(r))&&(!V().revalidateOnFocus||!V().revalidateOnReconnect||L())&&e.onErrorRetry(r,_,e,e=>{let t=E[_];t&&t[0]&&t[0](o.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return u=!1,d(),!0},[_,l]),Q=(0,n.useCallback)((...e)=>(0,o.BN)(l,S.current,...e),[]);if((0,o.LI)(()=>{T.current=t,k.current=r,(0,o.o8)(J)||(B.current=J)}),(0,o.LI)(()=>{if(!_)return;let e=H.bind(o.i_,a),t=0,r=(0,o.ko)(_,E,(r,n={})=>{if(r==o.sj.FOCUS_EVENT){let r=Date.now();V().revalidateOnFocus&&r>t&&L()&&(t=r+V().focusThrottleInterval,e())}else if(r==o.sj.RECONNECT_EVENT)V().revalidateOnReconnect&&L()&&e();else if(r==o.sj.MUTATE_EVENT)return H();else if(r==o.sj.ERROR_REVALIDATE_EVENT)return H(n)});return R.current=!1,S.current=_,j.current=!0,C({_k:O}),Y&&((0,o.o8)(U)||o.W6?e():(0,o.kw)(e)),()=>{R.current=!0,r()}},[_]),(0,o.LI)(()=>{let e;function t(){let t=(0,o.mf)(g)?g(N().data):g;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(w||V().isVisible())&&(v||V().isOnline())?H(a).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,w,v,_]),(0,n.useDebugValue)(K),c&&(0,o.o8)(U)&&_){if(!o.w6&&o.W6)throw Error("Fallback data is required when using suspense in SSR.");T.current=t,k.current=r,R.current=!1;let e=m[_];if((0,o.o8)(e)||u(Q(e)),(0,o.o8)(q)){let e=H(a);(0,o.o8)(K)||(e.status="fulfilled",e.value=!0),u(e)}else throw q}return{mutate:Q,get data(){return x.data=!0,K},get error(){return x.error=!0,q},get isValidating(){return x.isValidating=!0,z},get isLoading(){return x.isLoading=!0,G}}}),s=(0,o.xD)(l,e=>(t,r,n)=>(n.revalidateOnFocus=!1,n.revalidateIfStale=!1,n.revalidateOnReconnect=!1,e(t,r,n)))},38329:(e,t,r)=>{"use strict";var n=r(99586),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,u=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return a(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},35142:(e,t,r)=>{"use strict";e.exports=r(38329)}}]);