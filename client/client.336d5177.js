function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}function f(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function v(){return g("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function S(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function w(t){return S(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function A(t){N=t}function R(){if(!N)throw new Error("Function called outside component initialization");return N}const C=[],I=[],L=[],O=[],T=Promise.resolve();let k=!1;function U(t){L.push(t)}let q=!1;const J=new Set;function B(){if(!q){q=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];A(e),V(e.$$)}for(A(null),C.length=0;I.length;)I.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];J.has(e)||(J.add(e),e())}L.length=0}while(C.length);for(;O.length;)O.pop()();k=!1,q=!1,J.clear()}}function V(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const D=new Set;let K;function M(){K={r:0,c:[],p:K}}function F(){K.r||o(K.c),K=K.p}function z(t,e){t&&t.i&&(D.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),K.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(C.push(t),k||(k=!0,T.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,a,c,i,l=[-1]){const f=N;A(e);const u=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,u,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&tt(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=b(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&z(e.$$.fragment),Q(e,n.target,n.anchor),B()}A(f)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={};function at(e){let n,r,o;return{c(){n=m("footer"),r=m("div"),o=g("Simon Nyström © 2020"),this.h()},l(t){n=E(t,"FOOTER",{class:!0});var e=b(n);r=E(e,"DIV",{class:!0});var s=b(r);o=S(s,"Simon Nyström © 2020"),s.forEach(d),e.forEach(d),this.h()},h(){_(r,"class","copyright svelte-shi9bu"),_(n,"class","svelte-shi9bu")},m(t,e){p(t,n,e),u(n,r),u(r,o)},p:t,i:t,o:t,d(t){t&&d(n)}}}class ct extends nt{constructor(t){super(),et(this,t,null,at,a,{})}}function it(e){let n,r,o,s,a,c,i,l,f,h,v,y,x,j,P,N;return{c(){n=m("nav"),r=m("ul"),o=m("li"),s=m("a"),a=g("home"),i=$(),l=m("li"),f=m("a"),h=g("blog"),y=$(),x=m("li"),j=m("a"),P=g("contact"),this.h()},l(t){n=E(t,"NAV",{class:!0});var e=b(n);r=E(e,"UL",{class:!0});var c=b(r);o=E(c,"LI",{class:!0});var u=b(o);s=E(u,"A",{"aria-current":!0,href:!0,class:!0});var p=b(s);a=S(p,"home"),p.forEach(d),u.forEach(d),i=w(c),l=E(c,"LI",{class:!0});var m=b(l);f=E(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var g=b(f);h=S(g,"blog"),g.forEach(d),m.forEach(d),y=w(c),x=E(c,"LI",{class:!0});var $=b(x);j=E($,"A",{"aria-current":!0,href:!0,class:!0});var v=b(j);P=S(v,"contact"),v.forEach(d),$.forEach(d),c.forEach(d),e.forEach(d),this.h()},h(){_(s,"aria-current",c=void 0===e[0]?"page":void 0),_(s,"href","."),_(s,"class","svelte-14jrcwg"),_(o,"class","svelte-14jrcwg"),_(f,"rel","prefetch"),_(f,"aria-current",v="blog"===e[0]?"page":void 0),_(f,"href","blog"),_(f,"class","svelte-14jrcwg"),_(l,"class","svelte-14jrcwg"),_(j,"aria-current",N="contact"===e[0]?"page":void 0),_(j,"href","contact"),_(j,"class","svelte-14jrcwg"),_(x,"class","svelte-14jrcwg"),_(r,"class","svelte-14jrcwg"),_(n,"class","svelte-14jrcwg")},m(t,e){p(t,n,e),u(n,r),u(r,o),u(o,s),u(s,a),u(r,i),u(r,l),u(l,f),u(f,h),u(r,y),u(r,x),u(x,j),u(j,P)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&_(s,"aria-current",c),1&e&&v!==(v="blog"===t[0]?"page":void 0)&&_(f,"aria-current",v),1&e&&N!==(N="contact"===t[0]?"page":void 0)&&_(j,"aria-current",N)},i:t,o:t,d(t){t&&d(n)}}}function lt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ft extends nt{constructor(t){super(),et(this,t,lt,it,a,{segment:0})}}function ut(t){let e,n,r,o,s,a;e=new ft({props:{segment:t[0]}});const i=t[2].default,f=c(i,t,t[1],null);return s=new ct({}),{c(){W(e.$$.fragment),n=$(),r=m("main"),f&&f.c(),o=$(),W(s.$$.fragment),this.h()},l(t){X(e.$$.fragment,t),n=w(t),r=E(t,"MAIN",{class:!0});var a=b(r);f&&f.l(a),a.forEach(d),o=w(t),X(s.$$.fragment,t),this.h()},h(){_(r,"class","svelte-1jrhn38")},m(t,c){Q(e,t,c),p(t,n,c),p(t,r,c),f&&f.m(r,null),p(t,o,c),Q(s,t,c),a=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),f&&f.p&&2&n&&l(f,i,t,t[1],n,null,null)},i(t){a||(z(e.$$.fragment,t),z(f,t),z(s.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),H(f,t),H(s.$$.fragment,t),a=!1},d(t){Z(e,t),t&&d(n),t&&d(r),f&&f.d(t),t&&d(o),Z(s,t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class dt extends nt{constructor(t){super(),et(this,t,pt,ut,a,{segment:0})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=g(r)},l(t){e=E(t,"PRE",{});var o=b(e);n=S(o,r),o.forEach(d)},m(t,r){p(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&d(e)}}}function mt(e){let n,r,o,s,a,c,i,l,f,h=e[1].message+"";document.title=n=e[0];let y=e[2]&&e[1].stack&&ht(e);return{c(){r=$(),o=m("h1"),s=g(e[0]),a=$(),c=m("p"),i=g(h),l=$(),y&&y.c(),f=v(),this.h()},l(t){P('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=w(t),o=E(t,"H1",{class:!0});var n=b(o);s=S(n,e[0]),n.forEach(d),a=w(t),c=E(t,"P",{class:!0});var u=b(c);i=S(u,h),u.forEach(d),l=w(t),y&&y.l(t),f=v(),this.h()},h(){_(o,"class","svelte-8od9u6"),_(c,"class","svelte-8od9u6")},m(t,e){p(t,r,e),p(t,o,e),u(o,s),p(t,a,e),p(t,c,e),u(c,i),p(t,l,e),y&&y.m(t,e),p(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&h!==(h=t[1].message+"")&&x(i,h),t[2]&&t[1].stack?y?y.p(t,e):(y=ht(t),y.c(),y.m(f.parentNode,f)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(a),t&&d(c),t&&d(l),y&&y.d(t),t&&d(f)}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class $t extends nt{constructor(t){super(),et(this,t,gt,mt,a,{status:0,error:1})}}function vt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&W(n.$$.fragment),r=v()},l(t){n&&X(n.$$.fragment,t),r=v()},m(t,e){n&&Q(n,t,e),p(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[G(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){M();const t=n;H(t.$$.fragment,1,0,()=>{Z(t,1)}),F()}a?(n=new a(c()),W(n.$$.fragment),z(n.$$.fragment,1),Q(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&H(n.$$.fragment,t),o=!1},d(t){t&&d(r),n&&Z(n,t)}}}function yt(t){let e,n;return e=new $t({props:{error:t[0],status:t[1]}}),{c(){W(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Q(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function _t(t){let e,n,r,o;const s=[yt,vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){a[e].m(t,n),p(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(M(),H(a[i],1,1,()=>{a[i]=null}),F(),n=a[e],n||(n=a[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){H(n),o=!1},d(t){a[e].d(t),t&&d(r)}}}function bt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new dt({props:s}),{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,e){Q(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function Et(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var f,u,p;return f=l,R().$$.after_update.push(f),u=st,p=r,R().$$.context.set(u,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class St extends nt{constructor(t){super(),et(this,t,Et,bt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[/^\/blog\.json$/,/^\/blog\/category\.json$/,/^\/blog\/category\/([^/]+?)\.json$/,/^\/blog\/([^/]+?)\.json$/],xt=[{js:()=>Promise.all([import("./index.8696416f.js"),__inject_styles(["client-02a1cfb5.css","index-29929e9b.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./about.37b41b5c.js"),__inject_styles(["client-02a1cfb5.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.bde3f40b.js"),__inject_styles(["client-02a1cfb5.css","index-5c3fdc1e.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.28a96c7f.js"),__inject_styles(["client-02a1cfb5.css","index-1acd4f59.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./[category].4b4ae80f.js"),__inject_styles(["client-02a1cfb5.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./[slug].38fc5deb.js"),__inject_styles(["client-02a1cfb5.css","[slug]-f5476aab.css"])]).then(t=>t[0])}],jt=(Pt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/category\/?$/,parts:[null,{i:3}]},{pattern:/^\/blog\/category\/([^/]+?)\/?$/,parts:[null,null,{i:4,params:t=>({category:Pt(t[1])})}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:Pt(t[1])})}]}]);var Pt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Nt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{i(r.next(t))}catch(t){s(t)}}function c(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function At(t,e={noscroll:!1,replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Dt},"",t),Gt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Rt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ct,It,Lt,Ot=!1,Tt=[],kt="{}";const Ut={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ot(null),session:ot(Rt&&Rt.session)};let qt,Jt;Ut.session.subscribe(t=>Nt(void 0,void 0,void 0,(function*(){if(qt=t,!Ot)return;Jt=!0;const e=Ht(new URL(location.href)),n=It={},{redirect:r,props:o,branch:s}=yield Xt(e);n===It&&(r?yield At(r.location,{replaceState:!0}):yield Wt(s,o,e.page))})));let Bt,Vt=null;let Dt,Kt=1;const Mt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ft={};function zt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Rt.baseUrl))return null;let e=t.pathname.slice(Rt.baseUrl.length);if(""===e&&(e="/"),!wt.some(t=>t.test(e)))for(let n=0;n<jt.length;n+=1){const r=jt[n],o=r.pattern.exec(e);if(o){const n=zt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Yt(){return{x:pageXOffset,y:pageYOffset}}function Gt(t,e,n,r){return Nt(this,void 0,void 0,(function*(){if(e)Dt=e;else{const t=Yt();Ft[Dt]=t,e=Dt=++Kt,Ft[Dt]=n?t:{x:0,y:0}}Dt=e,Ct&&Ut.preloading.set(!0);const o=Vt&&Vt.href===t.href?Vt.promise:Xt(t);Vt=null;const s=It={},a=yield o,{redirect:c}=a;if(s===It){if(c)yield At(c.location,{replaceState:!0});else{const{props:e,branch:n}=a;yield Wt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Ft[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ft[Dt]=t,t&&(c?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Wt(t,e,n){return Nt(this,void 0,void 0,(function*(){Ut.page.set(n),Ut.preloading.set(!1),Ct?Ct.$set(e):(e.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},e.level0={props:yield Lt},e.notify=Ut.page.notify,Ct=new St({target:Bt,props:e,hydrate:!0})),Tt=t,kt=JSON.stringify(n.query),Ot=!0,Jt=!1}))}function Xt(t){return Nt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Lt){const t=()=>{};Lt=Rt.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;c=yield Promise.all(e.parts.map((e,c)=>Nt(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==kt)return!0;const o=Tt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,l,o)&&(f=!0),s.segments[i]=r[c+1],!e)return{segment:u};const p=i++;if(!Jt&&!f&&Tt[c]&&Tt[c].part===e.i)return Tt[c];f=!1;const{default:d,preload:h}=yield function(t){const e=[t.js()];return Promise.all(e).then(t=>t[0])}(xt[e.i]);let m;return m=Ot||!Rt.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:Rt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:u,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}function Qt(t){const e=Ht(new URL(t,document.baseURI));if(e)return Vt&&t===Vt.href||function(t,e){Vt={href:t,promise:e}}(t,Xt(e)),Vt.promise}let Zt;function te(t){clearTimeout(Zt),Zt=setTimeout(()=>{ee(t)},20)}function ee(t){const e=re(t.target);e&&"prefetch"===e.rel&&Qt(e.href)}function ne(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=re(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ht(o);if(s){Gt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Mt.pushState({id:Dt},"",o.href)}}function re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function oe(t){if(Ft[Dt]=Yt(),t.state){const e=Ht(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Kt=Kt+1,function(t){Dt=t}(Kt),Mt.replaceState({id:Dt},"",location.href)}var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Mt.scrollRestoration="auto"}),addEventListener("load",()=>{Mt.scrollRestoration="manual"}),function(t){Bt=t}(se.target),addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",ee),addEventListener("mousemove",te),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Kt},"",e);const n=new URL(location.href);if(Rt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Rt;Lt||(Lt=s&&s[0]),Wt([],{error:c,status:a,session:o,level0:{props:Lt},level1:{props:{status:a,error:c},component:$t},segments:s},{host:e,path:n,query:zt(r),params:{}})}();const r=Ht(n);return r?Gt(r,Kt,!0,t):void 0});export{o as A,v as B,P as C,c as D,j as E,l as F,nt as S,_ as a,p as b,E as c,t as d,m as e,d as f,b as g,S as h,et as i,u as j,x as k,W as l,X as m,f as n,Q as o,z as p,H as q,Z as r,a as s,g as t,$ as u,w as v,y as w,M as x,F as y,h as z};

import __inject_styles from './inject_styles.js';