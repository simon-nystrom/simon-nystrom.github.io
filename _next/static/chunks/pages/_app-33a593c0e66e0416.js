(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(5370)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),s=t(387),c=t(7190);var l={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=s.useRouter(),f=a.default.useMemo((function(){var n=r(i.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,g=e.shallow,m=e.scroll,w=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,y=r(c.useIntersection({rootMargin:"200px"}),2),j=y[0],b=y[1],k=a.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);a.default.useEffect((function(){var e=b&&t&&i.isLocalURL(d),n="undefined"!==typeof w?w:o&&o.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(o,d,h,{locale:n})}),[h,d,b,w,t,o]);var C={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:s}))}(e,o,d,h,v,g,m,w)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof w?w:o&&o.locale,_=o&&o.isLocaleDomain&&i.getDomainLocale(h,L,o&&o.locales,o&&o.domainLocales);C.href=_||i.addBasePath(i.addLocale(h,L,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=o.useRef(),l=r(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},5370:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),o=(t(472),t(1664)),a=function(){return(0,r.jsxs)("div",{className:"flex items-center mb-8",children:[(0,r.jsx)("h1",{className:"text-xl border-r border-orange-300 pr-6",children:"newcurrent"}),(0,r.jsx)("nav",{className:"pl-6",children:(0,r.jsx)("ul",{className:"flex gap-6 justify-items-end",children:(0,r.jsx)("li",{className:"text-orange-300 font-semibold",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})})})})]})},i=t(9008),s=t(4298),c=function(){return(0,r.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[(0,r.jsx)("title",{children:"LinkedIn"}),(0,r.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})},l=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})},u=function(){return(0,r.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[(0,r.jsx)("title",{children:"GitHub"}),(0,r.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})};function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}var h=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Newcurrent | A curious software engineer"}),(0,r.jsx)("meta",{name:"description",content:"Newcurrent is the blog of a software engineer with a passion for learning and developing as a professional. I write about all kinds of topics related to software engineering / programming."})]}),(0,r.jsx)(a,{}),(0,r.jsx)(n,d({},t)),(0,r.jsxs)("div",{className:"mx-auto max-w-screen-md flex text-gray-300 items-center gap-4 justify-center",children:[(0,r.jsx)(o.default,{passHref:!0,href:"https://github.com/simon-nystrom",children:(0,r.jsx)("a",{target:"_blank",className:"w-6 hover:text-orange-400 duration-150 transition-colors",children:(0,r.jsx)(u,{})})}),(0,r.jsx)(o.default,{passHref:!0,href:"https://www.linkedin.com/in/simon-nystr%C3%B6m-192b12a5/",children:(0,r.jsx)("a",{target:"_blank",className:"w-6 hover:text-orange-400 duration-150 transition-colors",children:(0,r.jsx)(c,{})})}),(0,r.jsx)(o.default,{passHref:!0,href:"mailto:simon.nystrom90@gmail.com",children:(0,r.jsx)("a",{className:"w-8 hover:text-orange-400 duration-150 transition-colors",children:(0,r.jsx)(l,{})})})]}),(0,r.jsx)(s.default,{src:"https://www.googletagmanager.com/gtag/js?id=G-DBYBSY30B8",strategy:"afterInteractive"}),(0,r.jsx)(s.default,{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-DBYBSY30B8');\n        "})]})}},472:function(){},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},4298:function(e,n,t){e.exports=t(699)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);