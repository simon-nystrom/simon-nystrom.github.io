function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a,i,c=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function g(){}function y(){}function b(){}var $={};$[i]=function(){return this};var _=Object.getPrototypeOf,w=_&&_(_(k([])));w&&w!==r&&o.call(w,i)&&($=w);var x=b.prototype=g.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:n,done:!0}}return y.prototype=x.constructor=b,b.constructor=y,y.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),f(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(a={path:o,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&a.path)}},a.exports),a.exports);function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(y)}function _(t){return"function"==typeof t}function w(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function x(t,e,n,r){if(t){var o=E(t,e,n,r);return t[0](o)}}function E(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function S(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var f=E(n,r,o,c);e.p(f,u)}}function j(t){return null==t?"":t}function R(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function k(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function A(){return N(" ")}function I(){return N("")}function C(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t){return Array.from(t.childNodes)}function U(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var f=0;f<c.length;f++)a.removeAttribute(c[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):O(e)}function q(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return N(e)}function J(t){return q(t," ")}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function F(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function K(t){i=t}function M(){if(!i)throw new Error("Function called outside component initialization");return i}var V=[],Y=[],H=[],z=[],W=Promise.resolve(),X=!1;function Q(t){H.push(t)}var Z=!1,tt=new Set;function et(){if(!Z){Z=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];K(e),nt(e.$$)}for(K(null),V.length=0;Y.length;)Y.pop()();for(var n=0;n<H.length;n+=1){var r=H[n];tt.has(r)||(tt.add(r),r())}H.length=0}while(V.length);for(;z.length;)z.pop()();X=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}var rt,ot=new Set;function at(){rt={r:0,c:[],p:rt}}function it(){rt.r||$(rt.c),rt=rt.p}function ct(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((function(){ot.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ft(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function st(e){return"object"===t(e)&&null!==e?e:{}}function lt(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function ht(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),Q((function(){var e=a.map(y).filter(_);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(Q)}function vt(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(V.push(t),X||(X=!0,W.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,n,r,o,a){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=i;K(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&o(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),l&&dt(t,e)),n})):[],s.update(),l=!0,$(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var p=D(e.target);s.fragment&&s.fragment.l(p),p.forEach(P)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),ht(t,e.target,e.anchor),et()}K(u)}var gt=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),yt=[];function bt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(w(t,n)&&(t=n,e)){for(var o=!yt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),yt.push(i,t)}if(o){for(var c=0;c<yt.length;c+=2)yt[c][0](yt[c+1]);yt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var $t={};function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function wt(t){var e,n,r;return{c:function(){e=O("footer"),n=O("div"),r=N("Simon Nyström © 2020"),this.h()},l:function(t){var o=D(e=U(t,"FOOTER",{class:!0})),a=D(n=U(o,"DIV",{class:!0}));r=q(a,"Simon Nyström © 2020"),a.forEach(P),o.forEach(P),this.h()},h:function(){T(n,"class","copyright svelte-shi9bu"),T(e,"class","svelte-shi9bu")},m:function(t,o){L(t,e,o),R(e,n),R(n,r)},p:m,i:m,o:m,d:function(t){t&&P(e)}}}var xt=function(t){s(n,gt);var e=_t(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,null,wt,w,{}),r}return n}();function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function St(t){var e,n,o,a,i,c,u,f,s,l,p,h,v,d,g,y;return{c:function(){e=O("nav"),n=O("ul"),o=O("li"),a=O("a"),i=N("home"),u=A(),f=O("li"),s=O("a"),l=N("blog"),h=A(),v=O("li"),d=O("a"),g=N("contact"),this.h()},l:function(t){var r=D(e=U(t,"NAV",{class:!0})),c=D(n=U(r,"UL",{class:!0})),p=D(o=U(c,"LI",{class:!0})),m=D(a=U(p,"A",{"aria-current":!0,href:!0,class:!0}));i=q(m,"home"),m.forEach(P),p.forEach(P),u=J(c);var y=D(f=U(c,"LI",{class:!0})),b=D(s=U(y,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));l=q(b,"blog"),b.forEach(P),y.forEach(P),h=J(c);var $=D(v=U(c,"LI",{class:!0})),_=D(d=U($,"A",{"aria-current":!0,href:!0,class:!0}));g=q(_,"contact"),_.forEach(P),$.forEach(P),c.forEach(P),r.forEach(P),this.h()},h:function(){T(a,"aria-current",c=void 0===t[0]?"page":void 0),T(a,"href","."),T(a,"class","svelte-14jrcwg"),T(o,"class","svelte-14jrcwg"),T(s,"rel","prefetch"),T(s,"aria-current",p="blog"===t[0]?"page":void 0),T(s,"href","blog"),T(s,"class","svelte-14jrcwg"),T(f,"class","svelte-14jrcwg"),T(d,"aria-current",y="contact"===t[0]?"page":void 0),T(d,"href","contact"),T(d,"class","svelte-14jrcwg"),T(v,"class","svelte-14jrcwg"),T(n,"class","svelte-14jrcwg"),T(e,"class","svelte-14jrcwg")},m:function(t,r){L(t,e,r),R(e,n),R(n,o),R(o,a),R(a,i),R(n,u),R(n,f),R(f,s),R(s,l),R(n,h),R(n,v),R(v,d),R(d,g)},p:function(t,e){var n=r(e,1)[0];1&n&&c!==(c=void 0===t[0]?"page":void 0)&&T(a,"aria-current",c),1&n&&p!==(p="blog"===t[0]?"page":void 0)&&T(s,"aria-current",p),1&n&&y!==(y="contact"===t[0]?"page":void 0)&&T(d,"aria-current",y)},i:m,o:m,d:function(t){t&&P(e)}}}function jt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var Rt=function(t){s(n,gt);var e=Et(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,jt,St,w,{segment:0}),r}return n}();function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Pt(t){var e,n,o,a,i,c;e=new Rt({props:{segment:t[0]}});var u=t[2].default,f=x(u,t,t[1],null);return i=new xt({}),{c:function(){lt(e.$$.fragment),n=A(),o=O("main"),f&&f.c(),a=A(),lt(i.$$.fragment),this.h()},l:function(t){pt(e.$$.fragment,t),n=J(t);var r=D(o=U(t,"MAIN",{class:!0}));f&&f.l(r),r.forEach(P),a=J(t),pt(i.$$.fragment,t),this.h()},h:function(){T(o,"class","svelte-1jrhn38")},m:function(t,r){ht(e,t,r),L(t,n,r),L(t,o,r),f&&f.m(o,null),L(t,a,r),ht(i,t,r),c=!0},p:function(t,n){var o=r(n,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),f&&f.p&&2&o&&S(f,u,t,t[1],o,null,null)},i:function(t){c||(ct(e.$$.fragment,t),ct(f,t),ct(i.$$.fragment,t),c=!0)},o:function(t){ut(e.$$.fragment,t),ut(f,t),ut(i.$$.fragment,t),c=!1},d:function(t){vt(e,t),t&&P(n),t&&P(o),f&&f.d(t),t&&P(a),vt(i,t)}}}function kt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Ot=function(t){s(n,gt);var e=Lt(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,kt,Pt,w,{segment:0}),r}return n}();function Nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function At(t){var e,n,r=t[1].stack+"";return{c:function(){e=O("pre"),n=N(r)},l:function(t){var o=D(e=U(t,"PRE",{}));n=q(o,r),o.forEach(P)},m:function(t,r){L(t,e,r),R(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&G(n,r)},d:function(t){t&&P(e)}}}function It(t){var e,n,o,a,i,c,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&At(t);return{c:function(){n=A(),o=O("h1"),a=N(t[0]),i=A(),c=O("p"),u=N(l),f=A(),p&&p.c(),s=I(),this.h()},l:function(e){B('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(P),n=J(e);var r=D(o=U(e,"H1",{class:!0}));a=q(r,t[0]),r.forEach(P),i=J(e);var h=D(c=U(e,"P",{class:!0}));u=q(h,l),h.forEach(P),f=J(e),p&&p.l(e),s=I(),this.h()},h:function(){T(o,"class","svelte-8od9u6"),T(c,"class","svelte-8od9u6")},m:function(t,e){L(t,n,e),L(t,o,e),R(o,a),L(t,i,e),L(t,c,e),R(c,u),L(t,f,e),p&&p.m(t,e),L(t,s,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&G(a,t[0]),2&o&&l!==(l=t[1].message+"")&&G(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=At(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&P(n),t&&P(o),t&&P(i),t&&P(c),t&&P(f),p&&p.d(t),t&&P(s)}}}function Ct(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Tt=function(t){s(n,gt);var e=Nt(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,Ct,It,w,{status:0,error:1}),r}return n}();function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Ut(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&lt(e.$$.fragment),n=I()},l:function(t){e&&pt(e.$$.fragment,t),n=I()},m:function(t,o){e&&ht(e,t,o),L(t,n,o),r=!0},p:function(t,r){var c=16&r?ft(o,[st(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){at();var u=e;ut(u.$$.fragment,1,0,(function(){vt(u,1)})),it()}a?(lt((e=new a(i())).$$.fragment),ct(e.$$.fragment,1),ht(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&ct(e.$$.fragment,t),r=!0)},o:function(t){e&&ut(e.$$.fragment,t),r=!1},d:function(t){t&&P(n),e&&vt(e,t)}}}function qt(t){var e,n;return e=new Tt({props:{error:t[0],status:t[1]}}),{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){ut(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Jt(t){var e,n,r,o,a=[qt,Ut],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=I()},l:function(t){n.l(t),r=I()},m:function(t,n){i[e].m(t,n),L(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(at(),ut(i[u],1,1,(function(){i[u]=null})),it(),(n=i[e])||(n=i[e]=a[e](t)).c(),ct(n,1),n.m(r.parentNode,r))},i:function(t){o||(ct(n),o=!0)},o:function(t){ut(n),o=!1},d:function(t){i[e].d(t),t&&P(r)}}}function Gt(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Jt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=g(a,o[i]);return e=new Ot({props:a}),{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?ft(o,[4&a&&{segment:t[2][0]},8&a&&st(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){ut(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Ft(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,f=e.level0,s=e.level1,l=void 0===s?null:s,p=e.notify;return function(t){M().$$.after_update.push(t)}(p),r=$t,o=a,M().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,p=t.notify)},[i,c,u,f,l,a,p]}var Bt,Kt=function(t){s(n,gt);var e=Dt(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,Ft,Gt,w,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Mt=[/^\/blog\.json$/,/^\/blog\/category\.json$/,/^\/blog\/category\/([^/]+?)\.json$/,/^\/blog\/([^/]+?)\.json$/],Vt=[{js:function(){return Promise.all([import("./index.4669cc8a.js"),__inject_styles(["client-02a1cfb5.css","index-29929e9b.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./about.b2047060.js"),__inject_styles(["client-02a1cfb5.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./index.2c2ba93a.js"),__inject_styles(["client-02a1cfb5.css","index-5c3fdc1e.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./index.906c6fbc.js"),__inject_styles(["client-02a1cfb5.css","index-1acd4f59.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./[category].010bd851.js"),__inject_styles(["client-02a1cfb5.css"])]).then(t=>t[0])}},{js:function(){return Promise.all([import("./[slug].a37cdb9c.js"),__inject_styles(["client-02a1cfb5.css","[slug]-f5476aab.css"])]).then(t=>t[0])}}],Yt=(Bt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/category\/?$/,parts:[null,{i:3}]},{pattern:/^\/blog\/category\/([^/]+?)\/?$/,parts:[null,null,{i:4,params:function(t){return{category:Bt(t[1])}}}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:5,params:function(t){return{slug:Bt(t[1])}}}]}]);
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
function Ht(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=de(new URL(t,document.baseURI));return n?(pe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),ge(n,null,e.noscroll).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Wt,Xt,Qt,Zt,te,ee="undefined"!=typeof __SAPPER__&&__SAPPER__,ne=!1,re=[],oe="{}",ae={page:function(t){var e=bt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:bt(null),session:bt(ee&&ee.session)};ae.session.subscribe((function(t){return Ht(void 0,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Zt=t,ne){e.next=3;break}return e.abrupt("return");case 3:return te=!0,n=de(new URL(location.href)),r=Xt={},e.next=8,$e(n);case 8:if(o=e.sent,a=o.redirect,i=o.props,u=o.branch,r===Xt){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,zt(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,ye(u,i,n.page);case 21:case"end":return e.stop()}}),e)})))}));var ie,ce=null;var ue,fe=1;var se,le,pe="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},he={};function ve(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(c):n[a]=c})),n}function de(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ee.baseUrl))return null;var e=t.pathname.slice(ee.baseUrl.length);if(""===e&&(e="/"),!Mt.some((function(t){return t.test(e)})))for(var n=0;n<Yt.length;n+=1){var r=Yt[n],o=r.pattern.exec(e);if(o){var a=ve(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function me(){return{x:pageXOffset,y:pageYOffset}}function ge(t,e,n,r){return Ht(this,void 0,void 0,c.mark((function o(){var a,i,u,f,s,l,p,h,v;return c.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e?ue=e:(a=me(),he[ue]=a,e=ue=++fe,he[ue]=n?a:{x:0,y:0}),ue=e,Wt&&ae.preloading.set(!0),i=ce&&ce.href===t.href?ce.promise:$e(t),ce=null,u=Xt={},o.next=8,i;case 8:if(f=o.sent,s=f.redirect,u===Xt){o.next=12;break}return o.abrupt("return");case 12:if(!s){o.next=17;break}return o.next=15,zt(s.location,{replaceState:!0});case 15:o.next=20;break;case 17:return l=f.props,p=f.branch,o.next=20,ye(p,l,t.page);case 20:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(h=he[e],r&&(v=document.getElementById(r.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),he[ue]=h,h&&(s?scrollTo(0,0):scrollTo(h.x,h.y)));case 22:case"end":return o.stop()}}),o)})))}function ye(t,e,n){return Ht(this,void 0,void 0,c.mark((function r(){return c.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ae.page.set(n),ae.preloading.set(!1),!Wt){r.next=6;break}Wt.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ae.page.subscribe},preloading:{subscribe:ae.preloading.subscribe},session:ae.session},r.next=9,Qt;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ae.page.notify,Wt=new Kt({target:ie,props:e,hydrate:!0});case 13:re=t,oe=JSON.stringify(n.query),ne=!0,te=!1;case 17:case"end":return r.stop()}}),r)})))}function be(t,e,n,r){if(r!==oe)return!0;var o=re[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function $e(t){return Ht(this,void 0,void 0,c.mark((function e(){var n,r,o,a,i,u,f,s,l,p,h,v,d=this;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},Qt||(f=function(){},Qt=ee.preloaded[0]||f.call(u,{host:r.host,path:r.path,query:r.query,params:{}},Zt)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Ht(d,void 0,void 0,c.mark((function a(){var f,s,d,m,g,y;return c.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f=o[n],be(n,f,h,p)&&(v=!0),i.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:f});case 5:if(s=l++,te||v||!re[n]||re[n].part!==e.i){a.next=8;break}return a.abrupt("return",re[n]);case 8:return v=!1,a.next=11,_e(Vt[e.i]);case 11:if(d=a.sent,m=d.default,g=d.preload,!ne&&ee.preloaded[n+1]){a.next=25;break}if(!g){a.next=21;break}return a.next=18,g.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},Zt);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:y=a.t0,a.next=26;break;case 25:y=ee.preloaded[n+1];case 26:return a.abrupt("return",i["level".concat(s)]={component:m,props:y,segment:f,match:h,part:e.i});case 27:case"end":return a.stop()}}),a)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),i.error=e.t0,i.status=500,s=[];case 21:return e.abrupt("return",{redirect:a,props:i,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}function _e(t){var e=[t.js()];return Promise.all(e).then((function(t){return t[0]}))}function we(t){var e=de(new URL(t,document.baseURI));if(e)return ce&&t===ce.href||function(t,e){ce={href:t,promise:e}}(t,$e(e)),ce.promise}function xe(t){clearTimeout(se),se=setTimeout((function(){Ee(t)}),20)}function Ee(t){var e=je(t.target);e&&"prefetch"===e.rel&&we(e.href)}function Se(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=je(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=de(a);if(i)ge(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),pe.pushState({id:ue},"",a.href)}}}else location.hash||e.preventDefault()}}}function je(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Re(t){if(he[ue]=me(),t.state){var e=de(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else(function(t){ue=t})(fe=fe+1),pe.replaceState({id:ue},"",location.href)}le={target:document.querySelector("#sapper")},"scrollRestoration"in pe&&(pe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){pe.scrollRestoration="auto"})),addEventListener("load",(function(){pe.scrollRestoration="manual"})),function(t){ie=t}(le.target),addEventListener("click",Se),addEventListener("popstate",Re),addEventListener("touchstart",Ee),addEventListener("mousemove",xe),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;pe.replaceState({id:fe},"",n);var r,o,a,i,c,u,f,s,l=new URL(location.href);if(ee.error)return r=location,o=r.host,a=r.pathname,i=r.search,c=ee.session,u=ee.preloaded,f=ee.status,s=ee.error,Qt||(Qt=u&&u[0]),void ye([],{error:s,status:f,session:c,level0:{props:Qt},level1:{props:{status:f,error:s},component:Tt},segments:u},{host:o,path:a,query:ve(i),params:{}});var p=de(l);return p?ge(p,fe,!0,e):void 0}));export{J as A,C as B,at as C,it as D,k as E,$ as F,I as G,B as H,x as I,F as J,S as K,c as L,gt as S,s as _,u as a,p as b,v as c,l as d,O as e,U as f,T as g,L as h,mt as i,r as j,m as k,P as l,D as m,j as n,q as o,R as p,G as q,lt as r,w as s,N as t,pt as u,ht as v,ct as w,ut as x,vt as y,A as z};

import __inject_styles from './inject_styles.js';