import{S as t,i as a,s,a as e,e as r,t as o,q as c,f as n,g as i,c as l,b as h,d as u,h as f,j as d,k as g,l as m,n as y}from"./client.1da4facb.js";function p(t){let a,s,p,j,v,b;return document.title=a=t[0],{c(){s=e(),p=r("h1"),j=o(t[0]),v=e(),b=r("div"),this.h()},l(a){c('[data-svelte="svelte-ol8ml5"]',document.head).forEach(n),s=i(a),p=l(a,"H1",{});var e=h(p);j=u(e,t[0]),e.forEach(n),v=i(a),b=l(a,"DIV",{class:!0}),h(b).forEach(n),this.h()},h(){f(b,"class","content")},m(a,e){d(a,s,e),d(a,p,e),g(p,j),d(a,v,e),d(a,b,e),b.innerHTML=t[0]},p(t,[s]){1&s&&a!==(a=t[0])&&(document.title=a),1&s&&m(j,t[0]),1&s&&(b.innerHTML=t[0])},i:y,o:y,d(t){t&&n(s),t&&n(p),t&&n(v),t&&n(b)}}}async function j({params:t,query:a}){const s=await this.fetch(`blog/category/${t.category}.json`),e=await s.json();if(200===s.status)return{category:e};this.error(s.status,e.message)}function v(t,a,s){let{category:e}=a;return t.$$set=t=>{"category"in t&&s(0,e=t.category)},[e]}export default class extends t{constructor(t){super(),a(this,t,v,p,s,{category:0})}}export{j as preload};