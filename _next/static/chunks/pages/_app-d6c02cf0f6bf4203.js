(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2118)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),c=r(387),u=r(7190);var l={};function s(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=t(i.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?i.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,w=t(u.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],E=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=j&&r&&i.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(o,d,p,{locale:n})}),[p,d,j,m,r,o]);var _={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:c}))}(e,o,d,p,h,y,b,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof m?m:o&&o.locale,O=o&&o.isLocaleDomain&&i.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);_.href=O||i.addBasePath(i.addLocale(p,N,o&&o.defaultLocale))}return a.default.cloneElement(n,_)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,u=o.useRef(),l=t(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},2118:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(5893),o=(r(472),r(1664)),a=function(){return(0,t.jsxs)("div",{className:"flex items-center mb-8",children:[(0,t.jsx)("h1",{className:"text-xl border-r border-orange-300 pr-6",children:"newcurrent"}),(0,t.jsx)("nav",{className:"pl-6",children:(0,t.jsx)("ul",{className:"flex gap-6 justify-items-end",children:(0,t.jsx)("li",{className:"text-orange-300 font-semibold",children:(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})})})})]})},i=r(9008);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){c(e,n,r[n])}))}return e}var l=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Newcurrent | A curious software engineer"}),(0,t.jsx)("meta",{name:"description",content:"Newcurrent is the blog of a software engineer with a passion for learning and developing as a professional. I write about all kinds of topics related to software engineering / programming."})]}),(0,t.jsx)(a,{}),(0,t.jsx)(n,u({},r))]})}},472:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var r=e.O();_N_E=r}]);