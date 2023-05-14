import{b as p,r as ee,u as E,ad as ie,x as le,c as I,X as te,f as se,n as ce,O as fe,v as T,g as de}from"./runtime-core.esm-bundler-b2c41dc4.js";var D;const R=typeof window<"u",B=e=>typeof e=="function",z=e=>typeof e=="number",ne=e=>typeof e=="string",ve=(e,n,t)=>Math.min(t,Math.max(n,e)),A=()=>{};R&&((D=window==null?void 0:window.navigator)!=null&&D.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function F(e){return typeof e=="function"?e():E(e)}function me(e,n){function t(...r){return new Promise((o,c)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(o).catch(c)})}return t}function pe(e,n={}){let t,r,o=A;const c=u=>{clearTimeout(u),o(),o=A};return u=>{const i=F(e),s=F(n.maxWait);return t&&c(t),i<=0||s!==void 0&&s<=0?(r&&(c(r),r=null),Promise.resolve(u())):new Promise((a,l)=>{o=n.rejectOnCancel?l:a,s&&!r&&(r=setTimeout(()=>{t&&c(t),r=null,a(u())},s)),t=setTimeout(()=>{r&&c(r),r=null,a(u())},i)})}}function re(e){return e}function he(e,n){var t;if(typeof e=="number")return e+n;const r=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",o=e.slice(r.length),c=parseFloat(r)+n;return Number.isNaN(c)?e:c+o}function $(e){return ie()?(le(e),!0):!1}function ze(e,n=200,t={}){return me(pe(n,t),e)}function ue(e){return typeof e=="function"?I(e):p(e)}function V(e,n=!0){te()?se(e):n?e():ce(e)}function we(e){te()&&fe(e)}function oe(e,n,t={}){const{immediate:r=!0}=t,o=p(!1);let c=null;function f(){c&&(clearTimeout(c),c=null)}function u(){o.value=!1,f()}function i(...s){f(),o.value=!0,c=setTimeout(()=>{o.value=!1,c=null,e(...s)},F(n))}return r&&(o.value=!0,R&&i()),$(u),{isPending:ee(o),start:i,stop:u}}function S(e){var n;const t=F(e);return(n=t==null?void 0:t.$el)!=null?n:t}const x=R?window:void 0,W=R?window.document:void 0,be=R?window.navigator:void 0;R&&window.location;function C(...e){let n,t,r,o;if(ne(e[0])||Array.isArray(e[0])?([t,r,o]=e,n=x):[n,t,r,o]=e,!n)return A;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const c=[],f=()=>{c.forEach(a=>a()),c.length=0},u=(a,l,d)=>(a.addEventListener(l,d,o),()=>a.removeEventListener(l,d,o)),i=T(()=>S(n),a=>{f(),a&&c.push(...t.flatMap(l=>r.map(d=>u(a,l,d))))},{immediate:!0,flush:"post"}),s=()=>{i(),f()};return $(s),s}const ye=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function Be(...e){let n,t,r={};e.length===3?(n=e[0],t=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],r=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:o=x,eventName:c="keydown",passive:f=!1}=r,u=ye(n);return C(o,c,s=>{u(s)&&t(s)},f)}function L(e,n=!1){const t=p(),r=()=>t.value=Boolean(e());return r(),V(r,n),t}function j(e,n={}){const{window:t=x}=n,r=L(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let o;const c=p(!1),f=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",u):o.removeListener(u))},u=()=>{r.value&&(f(),o=t.matchMedia(ue(e).value),c.value=o.matches,"addEventListener"in o?o.addEventListener("change",u):o.addListener(u))};return de(u),$(()=>f()),c}const ke={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Oe=Object.defineProperty,U=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,G=(e,n,t)=>n in e?Oe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ee=(e,n)=>{for(var t in n||(n={}))ge.call(n,t)&&G(e,t,n[t]);if(U)for(var t of U(n))_e.call(n,t)&&G(e,t,n[t]);return e};function Qe(e,n={}){function t(u,i){let s=e[u];return i!=null&&(s=he(s,i)),typeof s=="number"&&(s=`${s}px`),s}const{window:r=x}=n;function o(u){return r?r.matchMedia(u).matches:!1}const c=u=>j(`(min-width: ${t(u)})`,n),f=Object.keys(e).reduce((u,i)=>(Object.defineProperty(u,i,{get:()=>c(i),enumerable:!0,configurable:!0}),u),{});return Ee({greater(u){return j(`(min-width: ${t(u,.1)})`,n)},greaterOrEqual:c,smaller(u){return j(`(max-width: ${t(u,-.1)})`,n)},smallerOrEqual(u){return j(`(max-width: ${t(u)})`,n)},between(u,i){return j(`(min-width: ${t(u)}) and (max-width: ${t(i,-.1)})`,n)},isGreater(u){return o(`(min-width: ${t(u,.1)})`)},isGreaterOrEqual(u){return o(`(min-width: ${t(u)})`)},isSmaller(u){return o(`(max-width: ${t(u,-.1)})`)},isSmallerOrEqual(u){return o(`(max-width: ${t(u)})`)},isInBetween(u,i){return o(`(min-width: ${t(u)}) and (max-width: ${t(i,-.1)})`)}},f)}function Ve(e={}){const{navigator:n=be,read:t=!1,source:r,copiedDuring:o=1500,legacy:c=!1}=e,f=["copy","cut"],u=L(()=>n&&"clipboard"in n),i=I(()=>u.value||c),s=p(""),a=p(!1),l=oe(()=>a.value=!1,o);function d(){u.value?n.clipboard.readText().then(v=>{s.value=v}):s.value=y()}if(i.value&&t)for(const v of f)C(v,d);async function w(v=F(r)){i.value&&v!=null&&(u.value?await n.clipboard.writeText(v):h(v),s.value=v,a.value=!0,l.start())}function h(v){const O=document.createElement("textarea");O.value=v??"",O.style.position="absolute",O.style.opacity="0",document.body.appendChild(O),O.select(),document.execCommand("copy"),O.remove()}function y(){var v,O,_;return(_=(O=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:O.toString())!=null?_:""}return{isSupported:i,text:s,copied:a,copy:w}}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";k[Q]=k[Q]||{};k[Q];var X=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,Pe=(e,n)=>{var t={};for(var r in e)Se.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&X)for(var r of X(e))n.indexOf(r)<0&&xe.call(e,r)&&(t[r]=e[r]);return t};function ae(e,n,t={}){const r=t,{window:o=x}=r,c=Pe(r,["window"]);let f;const u=L(()=>o&&"ResizeObserver"in o),i=()=>{f&&(f.disconnect(),f=void 0)},s=T(()=>S(e),l=>{i(),u.value&&o&&l&&(f=new ResizeObserver(n),f.observe(l,c))},{immediate:!0,flush:"post"}),a=()=>{i(),s()};return $(a),{isSupported:u,stop:a}}function We(e,n={}){const{reset:t=!0,windowResize:r=!0,windowScroll:o=!0,immediate:c=!0}=n,f=p(0),u=p(0),i=p(0),s=p(0),a=p(0),l=p(0),d=p(0),w=p(0);function h(){const y=S(e);if(!y){t&&(f.value=0,u.value=0,i.value=0,s.value=0,a.value=0,l.value=0,d.value=0,w.value=0);return}const v=y.getBoundingClientRect();f.value=v.height,u.value=v.bottom,i.value=v.left,s.value=v.right,a.value=v.top,l.value=v.width,d.value=v.x,w.value=v.y}return ae(e,h),T(()=>S(e),y=>!y&&h()),o&&C("scroll",h,{capture:!0,passive:!0}),r&&C("resize",h,{passive:!0}),V(()=>{c&&h()}),{height:f,bottom:u,left:i,right:s,top:a,width:l,x:d,y:w,update:h}}function Fe(e,n={}){const{immediate:t=!0,window:r=x}=n,o=p(!1);let c=0,f=null;function u(a){if(!o.value||!r)return;const l=a-c;e({delta:l,timestamp:a}),c=a,f=r.requestAnimationFrame(u)}function i(){!o.value&&r&&(o.value=!0,f=r.requestAnimationFrame(u))}function s(){o.value=!1,f!=null&&r&&(r.cancelAnimationFrame(f),f=null)}return t&&i(),$(s),{isActive:ee(o),pause:s,resume:i}}function De(e,n={width:0,height:0},t={}){const{window:r=x,box:o="content-box"}=t,c=I(()=>{var i,s;return(s=(i=S(e))==null?void 0:i.namespaceURI)==null?void 0:s.includes("svg")}),f=p(n.width),u=p(n.height);return ae(e,([i])=>{const s=o==="border-box"?i.borderBoxSize:o==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(r&&c.value){const a=S(e);if(a){const l=r.getComputedStyle(a);f.value=parseFloat(l.width),u.value=parseFloat(l.height)}}else if(s){const a=Array.isArray(s)?s:[s];f.value=a.reduce((l,{inlineSize:d})=>l+d,0),u.value=a.reduce((l,{blockSize:d})=>l+d,0)}else f.value=i.contentRect.width,u.value=i.contentRect.height},t),T(()=>S(e),i=>{f.value=i?n.width:0,u.value=i?n.height:0}),{width:f,height:u}}const K=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ue(e,n={}){const{document:t=W,autoExit:r=!1}=n,o=e||(t==null?void 0:t.querySelector("html")),c=p(!1);let f=K[0];const u=L(()=>{if(t){for(const y of K)if(y[1]in t)return f=y,!0}else return!1;return!1}),[i,s,a,,l]=f;async function d(){u.value&&(t!=null&&t[a]&&await t[s](),c.value=!1)}async function w(){if(!u.value)return;await d();const y=S(o);y&&(await y[i](),c.value=!0)}async function h(){c.value?await d():await w()}return t&&C(t,l,()=>{c.value=!!(t!=null&&t[a])},!1),r&&$(d),{isSupported:u,isFullscreen:c,enter:w,exit:d,toggle:h}}var H=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,$e=(e,n)=>{var t={};for(var r in e)Te.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&H)for(var r of H(e))n.indexOf(r)<0&&Ie.call(e,r)&&(t[r]=e[r]);return t};function Ae(e,n,t={}){const r=t,{window:o=x}=r,c=$e(r,["window"]);let f;const u=L(()=>o&&"MutationObserver"in o),i=()=>{f&&(f.disconnect(),f=void 0)},s=T(()=>S(e),l=>{i(),u.value&&o&&l&&(f=new MutationObserver(n),f.observe(l,c))},{immediate:!0}),a=()=>{i(),s()};return $(a),{isSupported:u,stop:a}}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));function Ge(e,n=A,t={}){const{immediate:r=!0,manual:o=!1,type:c="text/javascript",async:f=!0,crossOrigin:u,referrerPolicy:i,noModule:s,defer:a,document:l=W,attrs:d={}}=t,w=p(null);let h=null;const y=_=>new Promise((M,N)=>{const b=g=>(w.value=g,M(g),g);if(!l){M(!1);return}let P=!1,m=l.querySelector(`script[src="${F(e)}"]`);m?m.hasAttribute("data-loaded")&&b(m):(m=l.createElement("script"),m.type=c,m.async=f,m.src=F(e),a&&(m.defer=a),u&&(m.crossOrigin=u),s&&(m.noModule=s),i&&(m.referrerPolicy=i),Object.entries(d).forEach(([g,q])=>m==null?void 0:m.setAttribute(g,q)),P=!0),m.addEventListener("error",g=>N(g)),m.addEventListener("abort",g=>N(g)),m.addEventListener("load",()=>{m.setAttribute("data-loaded","true"),n(m),b(m)}),P&&(m=l.head.appendChild(m)),_||b(m)}),v=(_=!0)=>(h||(h=y(_)),h),O=()=>{if(!l)return;h=null,w.value&&(w.value=null);const _=l.querySelector(`script[src="${F(e)}"]`);_&&l.head.removeChild(_)};return r&&!o&&V(v),o||we(O),{scriptTag:w,load:v,unload:O}}function Xe(e=null,n={}){var t,r;const{document:o=W}=n,c=ue((t=e??(o==null?void 0:o.title))!=null?t:null),f=e&&B(e);function u(i){if(!("titleTemplate"in n))return i;const s=n.titleTemplate||"%s";return B(s)?s(i):E(s).replace(/%s/g,i)}return T(c,(i,s)=>{i!==s&&o&&(o.title=u(ne(i)?i:""))},{immediate:!0}),n.observe&&!n.titleTemplate&&o&&!f&&Ae((r=o.head)==null?void 0:r.querySelector("title"),()=>{o&&o.title!==c.value&&(c.value=u(o.title))},{childList:!0}),c}var Ce=Object.defineProperty,J=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Z=(e,n,t)=>n in e?Ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,je=(e,n)=>{for(var t in n||(n={}))Re.call(n,t)&&Z(e,t,n[t]);if(J)for(var t of J(n))Me.call(n,t)&&Z(e,t,n[t]);return e};const Le={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]},Ke=je({linear:re},Le);function Ne([e,n,t,r]){const o=(a,l)=>1-3*l+3*a,c=(a,l)=>3*l-6*a,f=a=>3*a,u=(a,l,d)=>((o(l,d)*a+c(l,d))*a+f(l))*a,i=(a,l,d)=>3*o(l,d)*a*a+2*c(l,d)*a+f(l),s=a=>{let l=a;for(let d=0;d<4;++d){const w=i(l,e,t);if(w===0)return l;const h=u(l,e,t)-a;l-=h/w}return l};return a=>e===n&&t===r?a:u(s(a),n,r)}function He(e,n={}){const{delay:t=0,disabled:r=!1,duration:o=1e3,onFinished:c=A,onStarted:f=A,transition:u=re}=n,i=I(()=>{const b=E(u);return B(b)?b:Ne(b)}),s=I(()=>{const b=E(e);return z(b)?b:b.map(E)}),a=I(()=>z(s.value)?[s.value]:s.value),l=p(a.value.slice(0));let d,w,h,y,v;const{resume:O,pause:_}=Fe(()=>{const b=Date.now(),P=ve(1-(h-b)/d,0,1);l.value=v.map((m,g)=>{var q;return m+((q=w[g])!=null?q:0)*i.value(P)}),P>=1&&(_(),c())},{immediate:!1}),M=()=>{_(),d=E(o),w=l.value.map((b,P)=>{var m,g;return((m=a.value[P])!=null?m:0)-((g=l.value[P])!=null?g:0)}),v=l.value.slice(0),y=Date.now(),h=y+d,O(),f()},N=oe(M,t,{immediate:!1});return T(a,()=>{E(r)||(E(t)<=0?M():N.start())},{deep:!0}),T(()=>E(r),b=>{b&&(l.value=a.value.slice(0),_())}),I(()=>{const b=E(r)?a:l;return z(s.value)?b.value[0]:b.value})}function Ye({window:e=x}={}){if(!e)return{x:p(0),y:p(0)};const n=p(e.pageXOffset),t=p(e.pageYOffset);return C(e,"scroll",()=>{n.value=e.pageXOffset,t.value=e.pageYOffset},{capture:!1,passive:!0}),{x:n,y:t}}export{Ke as T,De as a,Xe as b,Qe as c,ke as d,ze as e,Ue as f,We as g,Ye as h,He as i,Ve as j,Ge as k,Be as o,C as u};