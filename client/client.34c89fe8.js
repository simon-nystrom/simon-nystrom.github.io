function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function i(e,t,n,r,o,s,c){const i=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(i){const o=a(t,n,r,c);e.p(o,i)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function v(){return $(" ")}function y(){return $("")}function b(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function E(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(r,1)[0]}}return r?g(t):m(t)}function x(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return $(t)}function S(e){return x(e," ")}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function C(e,t=document.body){return Array.from(t.querySelectorAll(e))}let P;function A(e){P=e}function R(){if(!P)throw new Error("Function called outside component initialization");return P}const j=[],I=[],L=[],O=[],k=Promise.resolve();let T=!1;function V(e){L.push(e)}let z=!1;const M=new Set;function U(){if(!z){z=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];A(t),q(t.$$)}for(A(null),j.length=0;I.length;)I.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];M.has(t)||(M.add(t),t())}L.length=0}while(j.length);for(;O.length;)O.pop()();T=!1,z=!1,M.clear()}}function q(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const B=new Set;let J;function H(){J={r:0,c:[],p:J}}function D(){J.r||o(J.c),J=J.p}function K(e,t){e&&e.i&&(B.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),J.c.push((()=>{B.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function Y(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const c=e[s],a=t[s];if(a){for(const e in c)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in c)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function G(e){return"object"==typeof e&&null!==e?e:{}}function W(e){e&&e.c()}function X(e,t){e&&e.l(t)}function Q(e,t,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=e.$$;c&&c.m(t,r),V((()=>{const t=a.map(n).filter(s);i?i.push(...t):o(t),e.$$.on_mount=[]})),l.forEach(V)}function Z(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){-1===e.$$.dirty[0]&&(j.push(e),T||(T=!0,k.then(U)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(t,n,s,c,a,i,l=[-1]){const f=P;A(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(t,u,((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),h&&ee(t,e)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const e=w(n.target);d.fragment&&d.fragment.l(e),e.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&K(t.$$.fragment),Q(t,n.target,n.anchor),U()}A(f)}class ne{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const re=[];function oe(t,n=e){let r;const o=[];function s(e){if(c(t,e)&&(t=e,r)){const e=!re.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),re.push(n,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,a=e){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||e),c(t),()=>{const e=o.indexOf(i);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const se={};function ce(t){let n,r,o;return{c(){n=g("svg"),r=g("path"),this.h()},l(e){n=E(e,"svg",{"aria-hidden":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var t=w(n);r=E(t,"path",{fill:!0,d:!0},1),w(r).forEach(p),t.forEach(p),this.h()},h(){_(r,"fill","currentColor"),_(r,"d",t[0]),_(n,"aria-hidden","true"),_(n,"class",o=f(t[1])+" svelte-1d15yci"),_(n,"role","img"),_(n,"xmlns","http://www.w3.org/2000/svg"),_(n,"viewBox",t[2])},m(e,t){d(e,n,t),u(n,r)},p(e,[t]){1&t&&_(r,"d",e[0]),2&t&&o!==(o=f(e[1])+" svelte-1d15yci")&&_(n,"class",o),4&t&&_(n,"viewBox",e[2])},i:e,o:e,d(e){e&&p(n)}}}function ae(e,n,r){let{icon:o}=n,s=[],c="",a="";return e.$$set=e=>{r(4,n=t(t({},n),l(e))),"icon"in e&&r(3,o=e.icon)},e.$$.update=()=>{8&e.$$.dirty&&r(2,a="0 0 "+o.icon[0]+" "+o.icon[1]),r(1,c="fa-svelte "+(n.class?n.class:"")),8&e.$$.dirty&&r(0,s=o.icon[4])},n=l(n),[s,c,a,o]}class ie extends ne{constructor(e){super(),te(this,e,ae,ce,c,{icon:3})}}var le={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"]},fe={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ue={prefix:"far",iconName:"envelope",icon:[512,512,[],"f0e0","M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"]};function de(t){let n,r,o,s,c,a,i,l,f,h,g,y,b,N,C,P,A,R,j,I=(new Date).getFullYear()+"";return l=new ie({props:{class:"icon",icon:le}}),g=new ie({props:{icon:fe,class:"icon"}}),N=new ie({props:{icon:ue,class:"icon"}}),{c(){n=m("footer"),r=m("div"),o=$("Simon Nyström © "),s=$(I),c=v(),a=m("div"),i=m("a"),W(l.$$.fragment),f=v(),h=m("a"),W(g.$$.fragment),y=v(),b=m("a"),W(N.$$.fragment),C=v(),P=m("a"),A=m("img"),this.h()},l(e){n=E(e,"FOOTER",{class:!0});var t=w(n);r=E(t,"DIV",{class:!0});var u=w(r);o=x(u,"Simon Nyström © "),s=x(u,I),u.forEach(p),c=S(t),a=E(t,"DIV",{class:!0});var d=w(a);i=E(d,"A",{class:!0,target:!0,rel:!0,href:!0});var m=w(i);X(l.$$.fragment,m),m.forEach(p),f=S(d),h=E(d,"A",{class:!0,target:!0,rel:!0,href:!0});var $=w(h);X(g.$$.fragment,$),$.forEach(p),y=S(d),b=E(d,"A",{class:!0,href:!0,target:!0,rel:!0});var v=w(b);X(N.$$.fragment,v),v.forEach(p),C=S(d),P=E(d,"A",{class:!0,href:!0});var _=w(P);A=E(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(p),d.forEach(p),t.forEach(p),this.h()},h(){_(r,"class","copyright svelte-bn61n3"),_(i,"class","icon-wrapper"),_(i,"target","_blank"),_(i,"rel","noopener"),_(i,"href","https://www.linkedin.com/in/simon-nystr%C3%B6m-192b12a5/"),_(h,"class","icon-wrapper"),_(h,"target","_blank"),_(h,"rel","noopener"),_(h,"href","https://github.com/simon-nystrom/"),_(b,"class","icon-wrapper"),_(b,"href","mailto:simon.nystrom90@gmail.com"),_(b,"target","_blank"),_(b,"rel","noopener"),A.src!==(R="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg")&&_(A,"src","https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"),_(A,"alt","Simon Nyström's DEV Profile"),_(A,"class","svelte-bn61n3"),_(P,"class","icon-wrapper svelte-bn61n3"),_(P,"href","https://dev.to/simonnystrom"),_(a,"class","social svelte-bn61n3"),_(n,"class","svelte-bn61n3")},m(e,t){d(e,n,t),u(n,r),u(r,o),u(r,s),u(n,c),u(n,a),u(a,i),Q(l,i,null),u(a,f),u(a,h),Q(g,h,null),u(a,y),u(a,b),Q(N,b,null),u(a,C),u(a,P),u(P,A),j=!0},p:e,i(e){j||(K(l.$$.fragment,e),K(g.$$.fragment,e),K(N.$$.fragment,e),j=!0)},o(e){F(l.$$.fragment,e),F(g.$$.fragment,e),F(N.$$.fragment,e),j=!1},d(e){e&&p(n),Z(l),Z(g),Z(N)}}}class pe extends ne{constructor(e){super(),te(this,e,null,de,c,{})}}function he(t){let n,r,o,s,c,a,i,l,f,h,g;return{c(){n=m("nav"),r=m("ul"),o=m("li"),s=m("a"),c=$("home"),i=v(),l=m("li"),f=m("a"),h=$("blog"),this.h()},l(e){n=E(e,"NAV",{class:!0});var t=w(n);r=E(t,"UL",{class:!0});var a=w(r);o=E(a,"LI",{class:!0});var u=w(o);s=E(u,"A",{"aria-current":!0,href:!0,class:!0});var d=w(s);c=x(d,"home"),d.forEach(p),u.forEach(p),i=S(a),l=E(a,"LI",{class:!0});var m=w(l);f=E(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var g=w(f);h=x(g,"blog"),g.forEach(p),m.forEach(p),a.forEach(p),t.forEach(p),this.h()},h(){_(s,"aria-current",a=void 0===t[0]?"page":void 0),_(s,"href","."),_(s,"class","svelte-tlf8d1"),_(o,"class","svelte-tlf8d1"),_(f,"rel","prefetch"),_(f,"aria-current",g="blog"===t[0]?"page":void 0),_(f,"href","blog"),_(f,"class","svelte-tlf8d1"),_(l,"class","svelte-tlf8d1"),_(r,"class","svelte-tlf8d1"),_(n,"class","svelte-tlf8d1")},m(e,t){d(e,n,t),u(n,r),u(r,o),u(o,s),u(s,c),u(r,i),u(r,l),u(l,f),u(f,h)},p(e,[t]){1&t&&a!==(a=void 0===e[0]?"page":void 0)&&_(s,"aria-current",a),1&t&&g!==(g="blog"===e[0]?"page":void 0)&&_(f,"aria-current",g)},i:e,o:e,d(e){e&&p(n)}}}function me(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class ge extends ne{constructor(e){super(),te(this,e,me,he,c,{segment:0})}}function $e(e){let t,n,r,o,s,c;t=new ge({props:{segment:e[0]}});const l=e[2].default,f=function(e,t,n,r){if(e){const o=a(e,t,n,r);return e[0](o)}}(l,e,e[1],null);return s=new pe({}),{c(){W(t.$$.fragment),n=v(),r=m("main"),f&&f.c(),o=v(),W(s.$$.fragment),this.h()},l(e){X(t.$$.fragment,e),n=S(e),r=E(e,"MAIN",{class:!0});var c=w(r);f&&f.l(c),c.forEach(p),o=S(e),X(s.$$.fragment,e),this.h()},h(){_(r,"class","svelte-11hgoe0")},m(e,a){Q(t,e,a),d(e,n,a),d(e,r,a),f&&f.m(r,null),d(e,o,a),Q(s,e,a),c=!0},p(e,[n]){const r={};1&n&&(r.segment=e[0]),t.$set(r),f&&f.p&&2&n&&i(f,l,e,e[1],n,null,null)},i(e){c||(K(t.$$.fragment,e),K(f,e),K(s.$$.fragment,e),c=!0)},o(e){F(t.$$.fragment,e),F(f,e),F(s.$$.fragment,e),c=!1},d(e){Z(t,e),e&&p(n),e&&p(r),f&&f.d(e),e&&p(o),Z(s,e)}}}function ve(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;var c;return c=()=>{window.copyCode||(window.copyCode=e=>{let t=e.nextSibling,n=document.createRange();n.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(n),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.innerHTML="Copied!",e.style.color="#32e678",e.parentElement.addEventListener("mouseleave",(()=>{setTimeout((()=>{e.innerHTML="Copy",e.style.color="white"}),200)}),{once:!0})})},R().$$.on_mount.push(c),e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class ye extends ne{constructor(e){super(),te(this,e,ve,$e,c,{segment:0})}}function be(e){let t,n,r=e[1].stack+"";return{c(){t=m("pre"),n=$(r)},l(e){t=E(e,"PRE",{});var o=w(t);n=x(o,r),o.forEach(p)},m(e,r){d(e,t,r),u(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&N(n,r)},d(e){e&&p(t)}}}function _e(t){let n,r,o,s,c,a,i,l,f,h=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&be(t);return{c(){r=v(),o=m("h1"),s=$(t[0]),c=v(),a=m("p"),i=$(h),l=v(),g&&g.c(),f=y(),this.h()},l(e){C('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=S(e),o=E(e,"H1",{class:!0});var n=w(o);s=x(n,t[0]),n.forEach(p),c=S(e),a=E(e,"P",{class:!0});var u=w(a);i=x(u,h),u.forEach(p),l=S(e),g&&g.l(e),f=y(),this.h()},h(){_(o,"class","svelte-8od9u6"),_(a,"class","svelte-8od9u6")},m(e,t){d(e,r,t),d(e,o,t),u(o,s),d(e,c,t),d(e,a,t),u(a,i),d(e,l,t),g&&g.m(e,t),d(e,f,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&N(s,e[0]),2&t&&h!==(h=e[1].message+"")&&N(i,h),e[2]&&e[1].stack?g?g.p(e,t):(g=be(e),g.c(),g.m(f.parentNode,f)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&p(r),e&&p(o),e&&p(c),e&&p(a),e&&p(l),g&&g.d(e),e&&p(f)}}}function we(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Ee extends ne{constructor(e){super(),te(this,e,we,_e,c,{status:0,error:1})}}function xe(e){let n,r,o;const s=[e[4].props];var c=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return c&&(n=new c(a())),{c(){n&&W(n.$$.fragment),r=y()},l(e){n&&X(n.$$.fragment,e),r=y()},m(e,t){n&&Q(n,e,t),d(e,r,t),o=!0},p(e,t){const o=16&t?Y(s,[G(e[4].props)]):{};if(c!==(c=e[4].component)){if(n){H();const e=n;F(e.$$.fragment,1,0,(()=>{Z(e,1)})),D()}c?(n=new c(a()),W(n.$$.fragment),K(n.$$.fragment,1),Q(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(e){o||(n&&K(n.$$.fragment,e),o=!0)},o(e){n&&F(n.$$.fragment,e),o=!1},d(e){e&&p(r),n&&Z(n,e)}}}function Se(e){let t,n;return t=new Ee({props:{error:e[0],status:e[1]}}),{c(){W(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,r){Q(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function Ne(e){let t,n,r,o;const s=[Se,xe],c=[];function a(e,t){return e[0]?0:1}return t=a(e),n=c[t]=s[t](e),{c(){n.c(),r=y()},l(e){n.l(e),r=y()},m(e,n){c[t].m(e,n),d(e,r,n),o=!0},p(e,o){let i=t;t=a(e),t===i?c[t].p(e,o):(H(),F(c[i],1,1,(()=>{c[i]=null})),D(),n=c[t],n||(n=c[t]=s[t](e),n.c()),K(n,1),n.m(r.parentNode,r))},i(e){o||(K(n),o=!0)},o(e){F(n),o=!1},d(e){c[t].d(e),e&&p(r)}}}function Ce(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Ne]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new ye({props:s}),{c(){W(n.$$.fragment)},l(e){X(n.$$.fragment,e)},m(e,t){Q(n,e,t),r=!0},p(e,[t]){const r=12&t?Y(o,[4&t&&{segment:e[2][0]},8&t&&G(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(K(n.$$.fragment,e),r=!0)},o(e){F(n.$$.fragment,e),r=!1},d(e){Z(n,e)}}}function Pe(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:c}=t,{level0:a}=t,{level1:i=null}=t,{notify:l}=t;var f,u,d;return f=l,R().$$.after_update.push(f),u=se,d=r,R().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,c=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,i=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,c,a,i,r,l]}class Ae extends ne{constructor(e){super(),te(this,e,Pe,Ce,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Re=[/^\/blog\.json$/,/^\/blog\/category\.json$/,/^\/blog\/category\/([^/]+?)\.json$/,/^\/blog\/([^/]+?)\.json$/],je=[{js:()=>Promise.all([import("./index.019d591d.js"),__inject_styles(["client-01038e3c.css","Tag-401bb1aa.css","H3-cff3c2bf.css","index-da9b6541.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./about.6b132d03.js"),__inject_styles(["client-01038e3c.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./index.d6f7fc75.js"),__inject_styles(["client-01038e3c.css","Tag-401bb1aa.css","H3-cff3c2bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./index.ae852ae1.js"),__inject_styles(["client-01038e3c.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[category].d95ffab1.js"),__inject_styles(["client-01038e3c.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[slug].c2f531ec.js"),__inject_styles(["client-01038e3c.css","Tag-401bb1aa.css","[slug]-51b83dc6.css"])]).then((function(e){return e[0]}))}],Ie=(Le=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/category\/?$/,parts:[null,{i:3}]},{pattern:/^\/blog\/category\/([^/]+?)\/?$/,parts:[null,null,{i:4,params:e=>({category:Le(e[1])})}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:5,params:e=>({slug:Le(e[1])})}]}]);var Le;
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
function Oe(e,t,n,r){return new(n||(n=Promise))((function(o,s){function c(e){try{i(r.next(e))}catch(e){s(e)}}function a(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}i((r=r.apply(e,t||[])).next())}))}function ke(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Te,Ve=1;const ze="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Me={};let Ue,qe;function Be(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function Je(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ue))return null;let t=e.pathname.slice(Ue.length);if(""===t&&(t="/"),!Re.some((e=>e.test(t))))for(let n=0;n<Ie.length;n+=1){const r=Ie[n],o=r.pattern.exec(t);if(o){const n=Be(e.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:c};return{href:e.href,route:r,match:o,page:a}}}}function He(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ke(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Je(o);if(s){Fe(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),ze.pushState({id:Te},"",o.href)}}function De(){return{x:pageXOffset,y:pageYOffset}}function Ke(e){if(Me[Te]=De(),e.state){const t=Je(new URL(location.href));t?Fe(t,e.state.id):location.href=location.href}else Ve=Ve+1,function(e){Te=e}(Ve),ze.replaceState({id:Te},"",location.href)}function Fe(e,t,n,r){return Oe(this,void 0,void 0,(function*(){const o=!!t;if(o)Te=t;else{const e=De();Me[Te]=e,Te=t=++Ve,Me[Te]=n?e:{x:0,y:0}}if(yield qe(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Me[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Me[Te]=n,o||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ye(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Ge,We=null;function Xe(e){const t=ke(e.target);t&&"prefetch"===t.rel&&function(e){const t=Je(new URL(e,Ye(document)));if(t)We&&e===We.href||(We={href:e,promise:ht(t)}),We.promise}(t.href)}function Qe(e){clearTimeout(Ge),Ge=setTimeout((()=>{Xe(e)}),20)}function Ze(e,t={noscroll:!1,replaceState:!1}){const n=Je(new URL(e,Ye(document)));return n?(ze[t.replaceState?"replaceState":"pushState"]({id:Te},"",e),Fe(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const et="undefined"!=typeof __SAPPER__&&__SAPPER__;let tt,nt,rt,ot=!1,st=[],ct="{}";const at={page:function(e){const t=oe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:oe(null),session:oe(et&&et.session)};let it,lt,ft;function ut(e,t){const{error:n}=e;return Object.assign({error:n},t)}function dt(e){return Oe(this,void 0,void 0,(function*(){tt&&at.preloading.set(!0);const t=function(e){return We&&We.href===e.href?We.promise:ht(e)}(e),n=nt={},r=yield t,{redirect:o}=r;if(n===nt)if(o)yield Ze(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield pt(n,t,ut(t,e.page))}}))}function pt(e,t,n){return Oe(this,void 0,void 0,(function*(){at.page.set(n),at.preloading.set(!1),tt?tt.$set(t):(t.stores={page:{subscribe:at.page.subscribe},preloading:{subscribe:at.preloading.subscribe},session:at.session},t.level0={props:yield rt},t.notify=at.page.notify,tt=new Ae({target:ft,props:t,hydrate:!0})),st=e,ct=JSON.stringify(n.query),ot=!0,lt=!1}))}function ht(e){return Oe(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!rt){const e=()=>({});rt=et.preloaded[0]||e.call(c,{host:n.host,path:n.path,query:n.query,params:{}},it)}let a,i=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let f=!1;a=yield Promise.all(t.parts.map(((t,a)=>Oe(this,void 0,void 0,(function*(){const u=r[a];if(function(e,t,n,r){if(r!==ct)return!0;const o=st[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,u,l,o)&&(f=!0),s.segments[i]=r[a+1],!t)return{segment:u};const d=i++;if(!lt&&!f&&st[a]&&st[a].part===t.i)return st[a];f=!1;const{default:p,preload:h}=yield je[t.i].js();let m;return m=ot||!et.preloaded[a+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},it):{}:et.preloaded[a+1],s["level"+d]={component:p,props:m,segment:u,match:l,part:t.i}})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var mt,gt,$t;at.session.subscribe((e=>Oe(void 0,void 0,void 0,(function*(){if(it=e,!ot)return;lt=!0;const t=Je(new URL(location.href)),n=nt={},{redirect:r,props:o,branch:s}=yield ht(t);n===nt&&(r?yield Ze(r.location,{replaceState:!0}):yield pt(s,o,ut(o,t.page)))})))),mt={target:document.querySelector("#sapper")},gt=mt.target,ft=gt,$t=et.baseUrl,Ue=$t,qe=dt,"scrollRestoration"in ze&&(ze.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ze.scrollRestoration="auto"})),addEventListener("load",(()=>{ze.scrollRestoration="manual"})),addEventListener("click",He),addEventListener("popstate",Ke),addEventListener("touchstart",Xe),addEventListener("mousemove",Qe),et.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:c}=et;rt||(rt=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:rt},level1:{props:{status:s,error:c},component:Ee},segments:o},i=Be(n);pt([],a,{host:e,path:t,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ze.replaceState({id:Ve},"",t);const n=Je(new URL(location.href));if(n)return Fe(n,Ve,!0,e)}));export{h as A,o as B,y as C,ne as S,v as a,E as b,W as c,p as d,m as e,S as f,w as g,x as h,te as i,X as j,_ as k,u as l,d as m,Q as n,K as o,F as p,C as q,Z as r,c as s,$ as t,f as u,e as v,b as w,N as x,H as y,D as z};

import __inject_styles from './inject_styles.5607aec6.js';