(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2740)}])},6548:function(e,t,n){"use strict";var s=n(5893),r={H1:function(e){var t=e.children;return(0,s.jsx)("h1",{className:"text-3xl mb-4 font-semibold",children:t})},H2:function(e){var t=e.children;return(0,s.jsx)("h2",{className:"text-2xl my-4",children:t})}};t.Z=r},6804:function(e,t,n){"use strict";var s=n(5893),r=["bg-green-200","bg-orange-200","bg-pink-200","bg-purple-200"];t.Z=function(e){var t=e.idx,n=e.text;return(0,s.jsx)("span",{className:"rounded-full px-2 ".concat(r[t%r.length]," text-white text-sm bg-opacity-20"),children:n})}},2740:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return u}});var s=n(5893),r=n(6548),i=n(1664),c=n(6804),a=function(e){var t=e.post;return(0,s.jsx)(i.default,{passHref:!0,href:"/posts/".concat(t.slug),children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between border px-3 py-2 rounded-md border-opacity-20 border-orange-400 transition-all hover:border-opacity-100 duration-150",children:[(0,s.jsx)("h2",{className:"text-2xl",children:t.title}),(0,s.jsxs)("div",{className:"flex flex-row md:flex-col justify-end items-end md:justify-center gap-2",children:[(0,s.jsx)("p",{className:"text-sm mt-2 text-gray-400",children:t.date}),(0,s.jsxs)("div",{className:"flex-row items-end gap-2 hidden sm:flex",children:[(0,s.jsx)(c.Z,{idx:0,text:t.series}),t.tags.map((function(e,t){return(0,s.jsx)(c.Z,{idx:t+1,text:e},e)}))]})]})]})})},o=function(e){var t=e.posts;return(0,s.jsxs)("div",{className:"mx-auto max-w-screen-md pb-20",children:[(0,s.jsx)(r.Z.H1,{children:"Posts"}),t.map((function(e){return(0,s.jsx)(a,{post:e},e.title)}))]})},l=!0,u=function(e){return(0,s.jsx)(o,{posts:e.posts})}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);