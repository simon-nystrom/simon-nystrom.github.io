import{_ as t,a as e,b as n,c as a,i as s,d as o,S as r,s as i,e as c,f as u,t as f,g as l,q as m,h,j as p,k as d,l as g,m as y,n as w,o as v,p as b,r as $,u as I,v as k,w as j,x,y as R}from"./client.15544e84.js";import{H as S,B as T}from"./H3.dd154393.js";import"./Tag.1c770565.js";function E(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=e(t);if(a){var r=e(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return n(this,s)}}function H(t){var e,n,a,s,o,r,i,E,H,M,N,P,q,z,B;return P=new S({props:{text:"Recent"}}),z=new T({props:{posts:t[0]}}),{c:function(){e=c("meta"),n=u(),a=c("h2"),s=f("Hi! 👋"),o=u(),r=c("p"),i=f("Welcome to my personal site. My name is Simon Nyström and I work as a software\n  engineer with a primary focus on backend Java development."),E=u(),H=c("p"),M=f("This site is a place for me to drop notes and write about things that I find\n  interesting and want to learn more about. This means I won't always be writing\n  about topics that I feel like I know everything (or even a lot) about, I may\n  even sometimes write about things that aren't directly related to software\n  engineering. I am likely just learning in public, thus, you are unlikely to\n  find some sort of source of truth on this site. I hope my thoughts can offer\n  you some assistance and/or entertainment 🙂."),N=u(),l(P.$$.fragment),q=u(),l(z.$$.fragment),this.h()},l:function(t){var c=m('[data-svelte="svelte-1xwobm5"]',document.head);e=h(c,"META",{name:!0,content:!0}),c.forEach(p),n=d(t),a=h(t,"H2",{});var u=g(a);s=y(u,"Hi! 👋"),u.forEach(p),o=d(t),r=h(t,"P",{class:!0});var f=g(r);i=y(f,"Welcome to my personal site. My name is Simon Nyström and I work as a software\n  engineer with a primary focus on backend Java development."),f.forEach(p),E=d(t),H=h(t,"P",{class:!0});var l=g(H);M=y(l,"This site is a place for me to drop notes and write about things that I find\n  interesting and want to learn more about. This means I won't always be writing\n  about topics that I feel like I know everything (or even a lot) about, I may\n  even sometimes write about things that aren't directly related to software\n  engineering. I am likely just learning in public, thus, you are unlikely to\n  find some sort of source of truth on this site. I hope my thoughts can offer\n  you some assistance and/or entertainment 🙂."),l.forEach(p),N=d(t),w(P.$$.fragment,t),q=d(t),w(z.$$.fragment,t),this.h()},h:function(){document.title="Simon Nyström's Space",v(e,"name","description"),v(e,"content","Blog posts and notes from a software engineer with an interest in always learning new skills and technologies and to share my knowledge."),v(r,"class","svelte-56scz7"),v(H,"class","intro2 svelte-56scz7")},m:function(t,c){b(document.head,e),$(t,n,c),$(t,a,c),b(a,s),$(t,o,c),$(t,r,c),b(r,i),$(t,E,c),$(t,H,c),b(H,M),$(t,N,c),I(P,t,c),$(t,q,c),I(z,t,c),B=!0},p:function(t,e){var n={};1&k(e,1)[0]&&(n.posts=t[0]),z.$set(n)},i:function(t){B||(j(P.$$.fragment,t),j(z.$$.fragment,t),B=!0)},o:function(t){x(P.$$.fragment,t),x(z.$$.fragment,t),B=!1},d:function(t){p(e),t&&p(n),t&&p(a),t&&p(o),t&&p(r),t&&p(E),t&&p(H),t&&p(N),R(P,t),t&&p(q),R(z,t)}}}function M(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function N(t,e,n){var a=e.posts;return t.$$set=function(t){"posts"in t&&n(0,a=t.posts)},[a]}var P=function(e){t(c,r);var n=E(c);function c(t){var e;return a(this,c),e=n.call(this),s(o(e),t,N,H,i,{posts:0}),e}return c}();export default P;export{M as preload};