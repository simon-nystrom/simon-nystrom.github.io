import{S as s,i as t,s as e,a,c as n,q as o,d as r,f as p,j as f,m as $,n as m,o as c,p as i,r as h}from"./client.f48440de.js";import{H as l,B as u}from"./H3.164f304d.js";import"./Tag.61e013b5.js";function g(s){let t,e,g,d,j;return e=new l({props:{text:"Recent"}}),d=new u({props:{posts:s[0]}}),{c(){t=a(),n(e.$$.fragment),g=a(),n(d.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-10h7psl"]',document.head).forEach(r),t=p(s),f(e.$$.fragment,s),g=p(s),f(d.$$.fragment,s),this.h()},h(){document.title="Blog"},m(s,a){$(s,t,a),m(e,s,a),$(s,g,a),m(d,s,a),j=!0},p(s,[t]){const e={};1&t&&(e.posts=s[0]),d.$set(e)},i(s){j||(c(e.$$.fragment,s),c(d.$$.fragment,s),j=!0)},o(s){i(e.$$.fragment,s),i(d.$$.fragment,s),j=!1},d(s){s&&r(t),h(e,s),s&&r(g),h(d,s)}}}function d({params:s,query:t}){return this.fetch("blog.json").then((s=>s.json())).then((s=>({posts:s})))}function j(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,j,g,e,{posts:0})}}export{d as preload};
