(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var td={exports:{}},Oo={};var Pg;function Oy(){if(Pg)return Oo;Pg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Ig;function Py(){return Ig||(Ig=1,td.exports=Oy()),td.exports}var U=Py(),nd={exports:{}},ot={};var zg;function Iy(){if(zg)return ot;zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(z,Q,xe){this.props=z,this.context=Q,this.refs=S,this.updater=xe||T}y.prototype.isReactComponent={},y.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=y.prototype;function I(z,Q,xe){this.props=z,this.context=Q,this.refs=S,this.updater=xe||T}var N=I.prototype=new D;N.constructor=I,C(N,y.prototype),N.isPureReactComponent=!0;var V=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(z,Q,xe){var Te=xe.ref;return{$$typeof:o,type:z,key:Q,ref:Te!==void 0?Te:null,props:xe}}function Z(z,Q){return L(z.type,Q,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function q(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(xe){return Q[xe]})}var le=/\/+/g;function ue(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):Q.toString(36)}function j(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,Q,xe,Te,Ce){var ae=typeof z;(ae==="undefined"||ae==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(ae){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case o:case e:ye=!0;break;case x:return ye=z._init,P(ye(z._payload),Q,xe,Te,Ce)}}if(ye)return Ce=Ce(z),ye=Te===""?"."+ue(z,0):Te,V(Ce)?(xe="",ye!=null&&(xe=ye.replace(le,"$&/")+"/"),P(Ce,Q,xe,"",function($e){return $e})):Ce!=null&&(G(Ce)&&(Ce=Z(Ce,xe+(Ce.key==null||z&&z.key===Ce.key?"":(""+Ce.key).replace(le,"$&/")+"/")+ye)),Q.push(Ce)),1;ye=0;var be=Te===""?".":Te+":";if(V(z))for(var ze=0;ze<z.length;ze++)Te=z[ze],ae=be+ue(Te,ze),ye+=P(Te,Q,xe,ae,Ce);else if(ze=M(z),typeof ze=="function")for(z=ze.call(z),ze=0;!(Te=z.next()).done;)Te=Te.value,ae=be+ue(Te,ze++),ye+=P(Te,Q,xe,ae,Ce);else if(ae==="object"){if(typeof z.then=="function")return P(j(z),Q,xe,Te,Ce);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ye}function B(z,Q,xe){if(z==null)return z;var Te=[],Ce=0;return P(z,Te,"","",function(ae){return Q.call(xe,ae,Ce++)}),Te}function oe(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(xe){(z._status===0||z._status===-1)&&(z._status=1,z._result=xe)},function(xe){(z._status===0||z._status===-1)&&(z._status=2,z._result=xe)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var me=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Se={map:B,forEach:function(z,Q,xe){B(z,function(){Q.apply(this,arguments)},xe)},count:function(z){var Q=0;return B(z,function(){Q++}),Q},toArray:function(z){return B(z,function(Q){return Q})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ot.Activity=_,ot.Children=Se,ot.Component=y,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=I,ot.StrictMode=s,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ot.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},ot.cache=function(z){return function(){return z.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(z,Q,xe){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Te=C({},z.props),Ce=z.key;if(Q!=null)for(ae in Q.key!==void 0&&(Ce=""+Q.key),Q)!b.call(Q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Q.ref===void 0||(Te[ae]=Q[ae]);var ae=arguments.length-2;if(ae===1)Te.children=xe;else if(1<ae){for(var ye=Array(ae),be=0;be<ae;be++)ye[be]=arguments[be+2];Te.children=ye}return L(z.type,Ce,Te)},ot.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ot.createElement=function(z,Q,xe){var Te,Ce={},ae=null;if(Q!=null)for(Te in Q.key!==void 0&&(ae=""+Q.key),Q)b.call(Q,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ce[Te]=Q[Te]);var ye=arguments.length-2;if(ye===1)Ce.children=xe;else if(1<ye){for(var be=Array(ye),ze=0;ze<ye;ze++)be[ze]=arguments[ze+2];Ce.children=be}if(z&&z.defaultProps)for(Te in ye=z.defaultProps,ye)Ce[Te]===void 0&&(Ce[Te]=ye[Te]);return L(z,ae,Ce)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(z){return{$$typeof:h,render:z}},ot.isValidElement=G,ot.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:oe}},ot.memo=function(z,Q){return{$$typeof:m,type:z,compare:Q===void 0?null:Q}},ot.startTransition=function(z){var Q=F.T,xe={};F.T=xe;try{var Te=z(),Ce=F.S;Ce!==null&&Ce(xe,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(O,me)}catch(ae){me(ae)}finally{Q!==null&&xe.types!==null&&(Q.types=xe.types),F.T=Q}},ot.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ot.use=function(z){return F.H.use(z)},ot.useActionState=function(z,Q,xe){return F.H.useActionState(z,Q,xe)},ot.useCallback=function(z,Q){return F.H.useCallback(z,Q)},ot.useContext=function(z){return F.H.useContext(z)},ot.useDebugValue=function(){},ot.useDeferredValue=function(z,Q){return F.H.useDeferredValue(z,Q)},ot.useEffect=function(z,Q){return F.H.useEffect(z,Q)},ot.useEffectEvent=function(z){return F.H.useEffectEvent(z)},ot.useId=function(){return F.H.useId()},ot.useImperativeHandle=function(z,Q,xe){return F.H.useImperativeHandle(z,Q,xe)},ot.useInsertionEffect=function(z,Q){return F.H.useInsertionEffect(z,Q)},ot.useLayoutEffect=function(z,Q){return F.H.useLayoutEffect(z,Q)},ot.useMemo=function(z,Q){return F.H.useMemo(z,Q)},ot.useOptimistic=function(z,Q){return F.H.useOptimistic(z,Q)},ot.useReducer=function(z,Q,xe){return F.H.useReducer(z,Q,xe)},ot.useRef=function(z){return F.H.useRef(z)},ot.useState=function(z){return F.H.useState(z)},ot.useSyncExternalStore=function(z,Q,xe){return F.H.useSyncExternalStore(z,Q,xe)},ot.useTransition=function(){return F.H.useTransition()},ot.version="19.2.6",ot}var Fg;function Ih(){return Fg||(Fg=1,nd.exports=Iy()),nd.exports}var Xe=Ih(),id={exports:{}},Po={},ad={exports:{}},sd={};var Bg;function zy(){return Bg||(Bg=1,(function(o){function e(P,B){var oe=P.length;P.push(B);e:for(;0<oe;){var me=oe-1>>>1,Se=P[me];if(0<l(Se,B))P[me]=B,P[oe]=Se,oe=me;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var B=P[0],oe=P.pop();if(oe!==B){P[0]=oe;e:for(var me=0,Se=P.length,z=Se>>>1;me<z;){var Q=2*(me+1)-1,xe=P[Q],Te=Q+1,Ce=P[Te];if(0>l(xe,oe))Te<Se&&0>l(Ce,xe)?(P[me]=Ce,P[Te]=oe,me=Te):(P[me]=xe,P[Q]=oe,me=Q);else if(Te<Se&&0>l(Ce,oe))P[me]=Ce,P[Te]=oe,me=Te;else break e}}return B}function l(P,B){var oe=P.sortIndex-B.sortIndex;return oe!==0?oe:P.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],x=1,_=null,g=3,M=!1,T=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var B=i(m);B!==null;){if(B.callback===null)s(m);else if(B.startTime<=P)s(m),B.sortIndex=B.expirationTime,e(p,B);else break;B=i(m)}}function V(P){if(C=!1,N(P),!T)if(i(p)!==null)T=!0,O||(O=!0,q());else{var B=i(m);B!==null&&j(V,B.startTime-P)}}var O=!1,F=-1,b=5,L=-1;function Z(){return S?!0:!(o.unstable_now()-L<b)}function G(){if(S=!1,O){var P=o.unstable_now();L=P;var B=!0;try{e:{T=!1,C&&(C=!1,D(F),F=-1),M=!0;var oe=g;try{t:{for(N(P),_=i(p);_!==null&&!(_.expirationTime>P&&Z());){var me=_.callback;if(typeof me=="function"){_.callback=null,g=_.priorityLevel;var Se=me(_.expirationTime<=P);if(P=o.unstable_now(),typeof Se=="function"){_.callback=Se,N(P),B=!0;break t}_===i(p)&&s(p),N(P)}else s(p);_=i(p)}if(_!==null)B=!0;else{var z=i(m);z!==null&&j(V,z.startTime-P),B=!1}}break e}finally{_=null,g=oe,M=!1}B=void 0}}finally{B?q():O=!1}}}var q;if(typeof I=="function")q=function(){I(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=G,q=function(){ue.postMessage(null)}}else q=function(){y(G,0)};function j(P,B){F=y(function(){P(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var oe=g;g=B;try{return P()}finally{g=oe}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var oe=g;g=P;try{return B()}finally{g=oe}},o.unstable_scheduleCallback=function(P,B,oe){var me=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?me+oe:me):oe=me,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=oe+Se,P={id:x++,callback:B,priorityLevel:P,startTime:oe,expirationTime:Se,sortIndex:-1},oe>me?(P.sortIndex=oe,e(m,P),i(p)===null&&P===i(m)&&(C?(D(F),F=-1):C=!0,j(V,oe-me))):(P.sortIndex=Se,e(p,P),T||M||(T=!0,O||(O=!0,q()))),P},o.unstable_shouldYield=Z,o.unstable_wrapCallback=function(P){var B=g;return function(){var oe=g;g=B;try{return P.apply(this,arguments)}finally{g=oe}}}})(sd)),sd}var Hg;function Fy(){return Hg||(Hg=1,ad.exports=zy()),ad.exports}var rd={exports:{}},On={};var Gg;function By(){if(Gg)return On;Gg=1;var o=Ih();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(p,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,x)},On.flushSync=function(p){var m=d.T,x=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=x,s.d.f()}},On.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},On.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},On.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var x=m.as,_=h(x,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):x==="script"&&s.d.X(p,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},On.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},On.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,_=h(x,m.crossOrigin);s.d.L(p,x,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},On.preloadModule=function(p,m){if(typeof p=="string")if(m){var x=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},On.requestFormReset=function(p){s.d.r(p)},On.unstable_batchedUpdates=function(p,m){return p(m)},On.useFormState=function(p,m,x){return d.H.useFormState(p,m,x)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.6",On}var Vg;function Hy(){if(Vg)return rd.exports;Vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=By(),rd.exports}var kg;function Gy(){if(kg)return Po;kg=1;var o=Fy(),e=Ih(),i=Hy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===r)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,r=f;break}if(R===r){v=!0,r=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,r=u;break}if(R===r){v=!0,r=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),I=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case I:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var j=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},me=[],Se=-1;function z(t){return{current:t}}function Q(t){0>Se||(t.current=me[Se],me[Se]=null,Se--)}function xe(t,n){Se++,me[Se]=t.current,t.current=n}var Te=z(null),Ce=z(null),ae=z(null),ye=z(null);function be(t,n){switch(xe(ae,n),xe(Ce,t),xe(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ag(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ag(n),t=sg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Te),xe(Te,t)}function ze(){Q(Te),Q(Ce),Q(ae)}function $e(t){t.memoizedState!==null&&xe(ye,t);var n=Te.current,a=sg(n,t.type);n!==a&&(xe(Ce,t),xe(Te,a))}function Ke(t){Ce.current===t&&(Q(Te),Q(Ce)),ye.current===t&&(Q(ye),Do._currentValue=oe)}var It,ct;function gt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+ct}var pt=!1;function at(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var re=ce}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ce){re=ce}t.call(_e.prototype)}}else{try{throw Error()}catch(ce){re=ce}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var H=v.split(`
`),ee=R.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===ee.length)for(r=H.length-1,u=ee.length-1;1<=r&&0<=u&&H[r]!==ee[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==ee[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==ee[u]){var he=`
`+H[r].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=r&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return gt("Activity");default:return""}}function Ft(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var nt=Object.prototype.hasOwnProperty,k=o.unstable_scheduleCallback,Rt=o.unstable_cancelCallback,dt=o.unstable_shouldYield,Dt=o.unstable_requestPaint,Re=o.unstable_now,$t=o.unstable_getCurrentPriorityLevel,w=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,ve=o.unstable_LowPriority,Ee=o.unstable_IdlePriority,we=o.log,Ne=o.unstable_setDisableYieldValue,fe=null,de=null;function Oe(t){if(typeof we=="function"&&Ne(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,t)}catch{}}var Pe=Math.clz32?Math.clz32:st,Ue=Math.log,De=Math.LN2;function st(t){return t>>>=0,t===0?32:31-(Ue(t)/De|0)|0}var rt=256,vt=262144,X=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Ae(r):(v&=R,v!==0?u=Ae(v):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=r&~f,R!==0?u=Ae(R):v!==0?u=Ae(v):a||(a=r&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Be(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,a,r,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(a=v&~a;0<a;){var he=31-Pe(a),_e=1<<he;R[he]=0,H[he]=-1;var re=ee[he];if(re!==null)for(ee[he]=null,he=0;he<re.length;he++){var ce=re[he];ce!==null&&(ce.lane&=-536870913)}a&=~_e}r!==0&&Ot(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ot(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function di(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pe(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:ls(a),(a&(t.suspendedLanes|n))!==0?0:a}function ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vr(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Cg(t.type))}function kr(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ln,Tn="__reactProps$"+Ln,Yi="__reactContainer$"+Ln,Ma="__reactEvents$"+Ln,el="__reactListeners$"+Ln,Bs="__reactHandles$"+Ln,Xr="__reactResources$"+Ln,Ea="__reactMarker$"+Ln;function Wr(t){delete t[cn],delete t[Tn],delete t[Ma],delete t[el],delete t[Bs]}function ba(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Yi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=dg(t);t!==null;){if(a=t[cn])return a;t=dg(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[cn]||t[Yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Aa(t){var n=t[Xr];return n||(n=t[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ea]=!0}var tl=new Set,A={};function Y(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)tl.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Fe={};function Ve(t){return nt.call(Fe,t)?!0:nt.call(ie,t)?!1:ne.test(t)?Fe[t]=!0:(ie[t]=!0,!1)}function Ie(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=ut(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ut(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function Ht(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,r,u,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qe(n)):t.value!==""+Qe(n)&&(t.value=""+Qe(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?_t(t,v,Qe(n)):a!=null?_t(t,v,Qe(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Qe(R):t.removeAttribute("name")}function Nn(t,n,a,r,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+Qe(a):"",n=n!=null?""+Qe(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Ut(t)}function _t(t,n,a){n==="number"&&Yt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Qe(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $n(t,n,a){if(n!=null&&(n=""+Qe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Qe(a):""}function Ei(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(j(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Qe(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ut(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&tn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&tn(t,f,n[f])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(t){return Ra.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var Qc=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function ip(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Tn]||null;if(!u)throw Error(s(90));Ge(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&en(r)}break e;case"textarea":$n(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var $c=!1;function ap(t,n,a){if($c)return t(n,a);$c=!0;try{var r=t(n);return r}finally{if($c=!1,(Hs!==null||Gs!==null)&&(Vl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,ip(n),t)))for(n=0;n<t.length;n++)ip(t[n])}}function jr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Tn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Ki)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{eu=!1}var Ca=null,tu=null,nl=null;function sp(){if(nl)return nl;var t,n=tu,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return nl=u.slice(t,1<r?1-r:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function rp(){return!1}function Vn(t){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:rp,this.isPropagationStopped=rp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Vn(fs),Yr=_({},fs,{view:0,detail:0}),L_=Vn(Yr),nu,iu,Zr,rl=_({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(nu=t.screenX-Zr.screenX,iu=t.screenY-Zr.screenY):iu=nu=0,Zr=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),op=Vn(rl),N_=_({},rl,{dataTransfer:0}),O_=Vn(N_),P_=_({},Yr,{relatedTarget:0}),au=Vn(P_),I_=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Vn(I_),F_=_({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B_=Vn(F_),H_=_({},fs,{data:0}),lp=Vn(H_),G_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=k_[t])?!!n[t]:!1}function su(){return X_}var W_=_({},Yr,{key:function(t){if(t.key){var n=G_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j_=Vn(W_),q_=_({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Vn(q_),Y_=_({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Z_=Vn(Y_),K_=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=Vn(K_),J_=_({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=Vn(J_),ex=_({},fs,{newState:0,oldState:0}),tx=Vn(ex),nx=[9,13,27,32],ru=Ki&&"CompositionEvent"in window,Kr=null;Ki&&"documentMode"in document&&(Kr=document.documentMode);var ix=Ki&&"TextEvent"in window&&!Kr,up=Ki&&(!ru||Kr&&8<Kr&&11>=Kr),fp=" ",dp=!1;function hp(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function ax(t,n){switch(t){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(dp=!0,fp);case"textInput":return t=n.data,t===fp&&dp?null:t;default:return null}}function sx(t,n){if(Vs)return t==="compositionend"||!ru&&hp(t,n)?(t=sp(),nl=tu=Ca=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rx[t.type]:n==="textarea"}function gp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Zl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Qr=null,Jr=null;function ox(t){J0(t,0)}function ol(t){var n=cs(t);if(en(n))return t}function vp(t,n){if(t==="change")return n}var _p=!1;if(Ki){var ou;if(Ki){var lu="oninput"in document;if(!lu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),lu=typeof xp.oninput=="function"}ou=lu}else ou=!1;_p=ou&&(!document.documentMode||9<document.documentMode)}function yp(){Qr&&(Qr.detachEvent("onpropertychange",Sp),Jr=Qr=null)}function Sp(t){if(t.propertyName==="value"&&ol(Jr)){var n=[];gp(n,Jr,t,Jc(t)),ap(ox,n)}}function lx(t,n,a){t==="focusin"?(yp(),Qr=n,Jr=a,Qr.attachEvent("onpropertychange",Sp)):t==="focusout"&&yp()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Jr)}function ux(t,n){if(t==="click")return ol(n)}function fx(t,n){if(t==="input"||t==="change")return ol(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:dx;function $r(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!nt.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,n){var a=Mp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mp(a)}}function bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Yt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Yt(t.document)}return n}function cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hx=Ki&&"documentMode"in document&&11>=document.documentMode,ks=null,uu=null,eo=null,fu=!1;function Ap(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||ks==null||ks!==Yt(r)||(r=ks,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&$r(eo,r)||(eo=r,r=Zl(uu,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function ds(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},du={},Rp={};Ki&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function hs(t){if(du[t])return du[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return du[t]=n[a];return t}var Cp=hs("animationend"),wp=hs("animationiteration"),Dp=hs("animationstart"),px=hs("transitionrun"),mx=hs("transitionstart"),gx=hs("transitioncancel"),Up=hs("transitionend"),Lp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function Ti(t,n){Lp.set(t,n),Y(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],Ws=0,pu=0;function cl(){for(var t=Ws,n=pu=Ws=0;n<t;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Np(a,u,f)}}function ul(t,n,a,r){hi[Ws++]=t,hi[Ws++]=n,hi[Ws++]=a,hi[Ws++]=r,pu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function mu(t,n,a,r){return ul(t,n,a,r),fl(t)}function ps(t,n){return ul(t,null,null,n),fl(t)}function Np(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<Eo)throw Eo=0,Tf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var js={};function vx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,r){return new vx(t,n,a,r)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Op(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,u,f){var v=0;if(r=t,typeof t=="function")gu(t)&&(v=1);else if(typeof t=="string")v=My(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ni(31,a,n,u),t.elementType=L,t.lanes=f,t;case C:return ms(a.children,u,f,n);case S:v=8,u|=24;break;case y:return t=ni(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case V:return t=ni(13,a,n,u),t.elementType=V,t.lanes=f,t;case O:return t=ni(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:v=10;break e;case D:v=9;break e;case N:v=11;break e;case F:v=14;break e;case b:v=16,r=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ni(v,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ms(t,n,a,r){return t=ni(7,t,r,n),t.lanes=a,t}function vu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Pp(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function _u(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ip=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ft(n)},Ip.set(t,n),n)}return{value:t,source:n,stack:Ft(n)}}var qs=[],Ys=0,hl=null,to=0,mi=[],gi=0,wa=null,Pi=1,Ii="";function Ji(t,n){qs[Ys++]=to,qs[Ys++]=hl,hl=t,to=n}function zp(t,n,a){mi[gi++]=Pi,mi[gi++]=Ii,mi[gi++]=wa,wa=t;var r=Pi;t=Ii;var u=32-Pe(r)-1;r&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Pi=1<<32-Pe(n)+u|a<<u|r,Ii=f+t}else Pi=1<<f|a<<u|r,Ii=t}function xu(t){t.return!==null&&(Ji(t,1),zp(t,1,0))}function yu(t){for(;t===hl;)hl=qs[--Ys],qs[Ys]=null,to=qs[--Ys],qs[Ys]=null;for(;t===wa;)wa=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null,Pi=mi[--gi],mi[gi]=null}function Fp(t,n){mi[gi++]=Pi,mi[gi++]=Ii,mi[gi++]=wa,Pi=n.id,Ii=n.overflow,wa=t}var An=null,Kt=null,bt=!1,Da=null,vi=!1,Su=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(pi(n,t)),Su}function Bp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[cn]=t,n[Tn]=r,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)yt(To[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Nn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Ei(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ng(n.textContent,a)?(r.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),r.onScroll!=null&&yt("scroll",n),r.onScrollEnd!=null&&yt("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ua(t,!0)}function Hp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:An=An.return}}function Zs(t){if(t!==An)return!1;if(!bt)return Hp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ua(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=fg(t)}else n===27?(n=Kt,Wa(t.type)?(t=Wf,Wf=null,Kt=t):Kt=n):Kt=An?xi(t.stateNode.nextSibling):null;return!0}function gs(){Kt=An=null,bt=!1}function Mu(){var t=Da;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Da=null),t}function no(t){Da===null?Da=[t]:Da.push(t)}var Eu=z(null),vs=null,$i=null;function La(t,n,a){xe(Eu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Eu.current,Q(Eu)}function bu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Tu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,t),r||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),bu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;ti(u.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Tu(n,t,a,r),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){vs=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Gp(vs,t)}function ml(t,n){return vs===null&&_s(t),Gp(t,n)}function Gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xx=o.unstable_scheduleCallback,yx=o.unstable_NormalPriority,hn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new _x,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&xx(yx,function(){t.controller.abort()})}var ao=null,Ru=0,Qs=0,Js=null;function Sx(t,n){if(ao===null){var a=ao=[];Ru=0,Qs=Uf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(Vp,Vp),n}function Vp(){if(--Ru===0&&ao!==null){Js!==null&&(Js.status="fulfilled");var t=ao;ao=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var kp=P.S;P.S=function(t,n){A0=Re(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(t,n),kp!==null&&kp(t,n)};var xs=z(null);function Cu(){var t=xs.current;return t!==null?t:Zt.pooledCache}function gl(t,n){n===null?xe(xs,xs.current):xe(xs,n.pool)}function Xp(){var t=Cu();return t===null?null:{parent:hn._currentValue,pool:t}}var $s=Error(s(460)),wu=Error(s(474)),vl=Error(s(542)),_l={then:function(){}};function Wp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t}throw Ss=n,$s}}function ys(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,$s):a}}var Ss=null;function qp(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function Yp(t){if(t===$s||t===vl)throw Error(s(483))}var er=null,so=0;function xl(t){var n=so;return so+=1,er===null&&(er=[]),jp(er,t,n)}function ro(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zp(t){function n(K,W){if(t){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function r(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=Qi(K,W),K.index=0,K.sibling=null,K}function f(K,W,$){return K.index=$,t?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=67108866,W):$):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function v(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,W,$,ge){return W===null||W.tag!==6?(W=vu($,K.mode,ge),W.return=K,W):(W=u(W,$),W.return=K,W)}function H(K,W,$,ge){var Je=$.type;return Je===C?he(K,W,$.props.children,ge,$.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===b&&ys(Je)===W.type)?(W=u(W,$.props),ro(W,$),W.return=K,W):(W=dl($.type,$.key,$.props,null,K.mode,ge),ro(W,$),W.return=K,W)}function ee(K,W,$,ge){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=_u($,K.mode,ge),W.return=K,W):(W=u(W,$.children||[]),W.return=K,W)}function he(K,W,$,ge,Je){return W===null||W.tag!==7?(W=ms($,K.mode,ge,Je),W.return=K,W):(W=u(W,$),W.return=K,W)}function _e(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=vu(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return $=dl(W.type,W.key,W.props,null,K.mode,$),ro($,W),$.return=K,$;case T:return W=_u(W,K.mode,$),W.return=K,W;case b:return W=ys(W),_e(K,W,$)}if(j(W)||q(W))return W=ms(W,K.mode,$,null),W.return=K,W;if(typeof W.then=="function")return _e(K,xl(W),$);if(W.$$typeof===I)return _e(K,ml(K,W),$);yl(K,W)}return null}function re(K,W,$,ge){var Je=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Je!==null?null:R(K,W,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Je?H(K,W,$,ge):null;case T:return $.key===Je?ee(K,W,$,ge):null;case b:return $=ys($),re(K,W,$,ge)}if(j($)||q($))return Je!==null?null:he(K,W,$,ge,null);if(typeof $.then=="function")return re(K,W,xl($),ge);if($.$$typeof===I)return re(K,W,ml(K,$),ge);yl(K,$)}return null}function ce(K,W,$,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return K=K.get($)||null,R(W,K,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return K=K.get(ge.key===null?$:ge.key)||null,H(W,K,ge,Je);case T:return K=K.get(ge.key===null?$:ge.key)||null,ee(W,K,ge,Je);case b:return ge=ys(ge),ce(K,W,$,ge,Je)}if(j(ge)||q(ge))return K=K.get($)||null,he(W,K,ge,Je,null);if(typeof ge.then=="function")return ce(K,W,$,xl(ge),Je);if(ge.$$typeof===I)return ce(K,W,$,ml(W,ge),Je);yl(W,ge)}return null}function je(K,W,$,ge){for(var Je=null,Lt=null,Ye=W,ht=W=0,Mt=null;Ye!==null&&ht<$.length;ht++){Ye.index>ht?(Mt=Ye,Ye=null):Mt=Ye.sibling;var Nt=re(K,Ye,$[ht],ge);if(Nt===null){Ye===null&&(Ye=Mt);break}t&&Ye&&Nt.alternate===null&&n(K,Ye),W=f(Nt,W,ht),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt,Ye=Mt}if(ht===$.length)return a(K,Ye),bt&&Ji(K,ht),Je;if(Ye===null){for(;ht<$.length;ht++)Ye=_e(K,$[ht],ge),Ye!==null&&(W=f(Ye,W,ht),Lt===null?Je=Ye:Lt.sibling=Ye,Lt=Ye);return bt&&Ji(K,ht),Je}for(Ye=r(Ye);ht<$.length;ht++)Mt=ce(Ye,K,ht,$[ht],ge),Mt!==null&&(t&&Mt.alternate!==null&&Ye.delete(Mt.key===null?ht:Mt.key),W=f(Mt,W,ht),Lt===null?Je=Mt:Lt.sibling=Mt,Lt=Mt);return t&&Ye.forEach(function(Ka){return n(K,Ka)}),bt&&Ji(K,ht),Je}function et(K,W,$,ge){if($==null)throw Error(s(151));for(var Je=null,Lt=null,Ye=W,ht=W=0,Mt=null,Nt=$.next();Ye!==null&&!Nt.done;ht++,Nt=$.next()){Ye.index>ht?(Mt=Ye,Ye=null):Mt=Ye.sibling;var Ka=re(K,Ye,Nt.value,ge);if(Ka===null){Ye===null&&(Ye=Mt);break}t&&Ye&&Ka.alternate===null&&n(K,Ye),W=f(Ka,W,ht),Lt===null?Je=Ka:Lt.sibling=Ka,Lt=Ka,Ye=Mt}if(Nt.done)return a(K,Ye),bt&&Ji(K,ht),Je;if(Ye===null){for(;!Nt.done;ht++,Nt=$.next())Nt=_e(K,Nt.value,ge),Nt!==null&&(W=f(Nt,W,ht),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt);return bt&&Ji(K,ht),Je}for(Ye=r(Ye);!Nt.done;ht++,Nt=$.next())Nt=ce(Ye,K,ht,Nt.value,ge),Nt!==null&&(t&&Nt.alternate!==null&&Ye.delete(Nt.key===null?ht:Nt.key),W=f(Nt,W,ht),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt);return t&&Ye.forEach(function(Ny){return n(K,Ny)}),bt&&Ji(K,ht),Je}function qt(K,W,$,ge){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var Je=$.key;W!==null;){if(W.key===Je){if(Je=$.type,Je===C){if(W.tag===7){a(K,W.sibling),ge=u(W,$.props.children),ge.return=K,K=ge;break e}}else if(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===b&&ys(Je)===W.type){a(K,W.sibling),ge=u(W,$.props),ro(ge,$),ge.return=K,K=ge;break e}a(K,W);break}else n(K,W);W=W.sibling}$.type===C?(ge=ms($.props.children,K.mode,ge,$.key),ge.return=K,K=ge):(ge=dl($.type,$.key,$.props,null,K.mode,ge),ro(ge,$),ge.return=K,K=ge)}return v(K);case T:e:{for(Je=$.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(K,W.sibling),ge=u(W,$.children||[]),ge.return=K,K=ge;break e}else{a(K,W);break}else n(K,W);W=W.sibling}ge=_u($,K.mode,ge),ge.return=K,K=ge}return v(K);case b:return $=ys($),qt(K,W,$,ge)}if(j($))return je(K,W,$,ge);if(q($)){if(Je=q($),typeof Je!="function")throw Error(s(150));return $=Je.call($),et(K,W,$,ge)}if(typeof $.then=="function")return qt(K,W,xl($),ge);if($.$$typeof===I)return qt(K,W,ml(K,$),ge);yl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(a(K,W.sibling),ge=u(W,$),ge.return=K,K=ge):(a(K,W),ge=vu($,K.mode,ge),ge.return=K,K=ge),v(K)):a(K,W)}return function(K,W,$,ge){try{so=0;var Je=qt(K,W,$,ge);return er=null,Je}catch(Ye){if(Ye===$s||Ye===vl)throw Ye;var Lt=ni(29,Ye,null,K.mode);return Lt.lanes=ge,Lt.return=K,Lt}}}var Ms=Zp(!0),Kp=Zp(!1),Na=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Pt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(t),Np(t,null,a),n}return ul(t,r,n,a),fl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,di(t,a)}}function Lu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nu=!1;function lo(){if(Nu){var t=Js;if(t!==null)throw t}}function co(t,n,a,r){Nu=!1;var u=t.updateQueue;Na=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ee=H.next;H.next=null,v===null?f=ee:v.next=ee,v=H;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==v&&(R===null?he.firstBaseUpdate=ee:R.next=ee,he.lastBaseUpdate=H))}if(f!==null){var _e=u.baseState;v=0,he=ee=H=null,R=f;do{var re=R.lane&-536870913,ce=re!==R.lane;if(ce?(St&re)===re:(r&re)===re){re!==0&&re===Qs&&(Nu=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=t,et=R;re=n;var qt=a;switch(et.tag){case 1:if(je=et.payload,typeof je=="function"){_e=je.call(qt,_e,re);break e}_e=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=et.payload,re=typeof je=="function"?je.call(qt,_e,re):je,re==null)break e;_e=_({},_e,re);break e;case 2:Na=!0}}re=R.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ee=he=ce,H=_e):he=he.next=ce,v|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);he===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=ee,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),Ha|=v,t.lanes=v,t.memoizedState=_e}}function Qp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var tr=z(null),Sl=z(0);function $p(t,n){t=ca,xe(Sl,t),xe(tr,n),ca=t|n.baseLanes}function Ou(){xe(Sl,ca),xe(tr,tr.current)}function Pu(){ca=Sl.current,Q(tr),Q(Sl)}var ii=z(null),_i=null;function Ia(t){var n=t.alternate;xe(un,un.current&1),xe(ii,t),_i===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(_i=t)}function Iu(t){xe(un,un.current),xe(ii,t),_i===null&&(_i=t)}function em(t){t.tag===22?(xe(un,un.current),xe(ii,t),_i===null&&(_i=t)):za()}function za(){xe(un,un.current),xe(ii,ii.current)}function ai(t){Q(ii),_i===t&&(_i=null),Q(un)}var un=z(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ft=null,Wt=null,pn=null,El=!1,nr=!1,Es=!1,bl=0,uo=0,ir=null,Ex=0;function sn(){throw Error(s(321))}function zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Fu(t,n,a,r,u,f){return ta=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?zm:$u,Es=!1,f=a(r,u),Es=!1,nr&&(f=nm(n,a,r,u)),tm(t),f}function tm(t){P.H=po;var n=Wt!==null&&Wt.next!==null;if(ta=0,pn=Wt=ft=null,El=!1,uo=0,ir=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&pl(t)&&(mn=!0))}function nm(t,n,a,r){ft=t;var u=0;do{if(nr&&(ir=null),uo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,pn=Wt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Fm,f=n(a,r)}while(nr);return f}function bx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Bu(){var t=bl!==0;return bl=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}ta=0,pn=Wt=ft=null,nr=!1,uo=bl=0,ir=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ft.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(Wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=pn===null?ft.memoizedState:pn.next;if(n!==null)pn=n,Wt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},pn===null?ft.memoizedState=pn=t:pn=pn.next=t}return pn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ir===null&&(ir=[]),t=jp(ir,t,n),n=ft,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?zm:$u),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===I)return Rn(t)}throw Error(s(438,String(t)))}function Vu(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Z;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=fn();return ku(n,Wt,t)}function ku(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=v=null,H=null,ee=n,he=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(St&_e)===_e:(ta&_e)===_e){var re=ee.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===Qs&&(he=!0);else if((ta&re)===re){ee=ee.next,re===Qs&&(he=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=_e,v=f):H=H.next=_e,ft.lanes|=re,Ha|=re;_e=ee.action,Es&&a(f,_e),f=ee.hasEagerState?ee.eagerState:a(f,_e)}else re={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=re,v=f):H=H.next=re,ft.lanes|=_e,Ha|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?v=f:H.next=R,!ti(f,t.memoizedState)&&(mn=!0,he&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Xu(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ti(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function im(t,n,a){var r=ft,u=fn(),f=bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ti((Wt||u).memoizedState,a);if(v&&(u.memoizedState=a,mn=!0),u=u.queue,qu(rm.bind(null,r,u,t),[t]),u.getSnapshot!==n||v||pn!==null&&pn.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},sm.bind(null,r,u,a,n),null),Zt===null)throw Error(s(349));f||(ta&127)!==0||am(r,n,a)}return a}function am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Tl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sm(t,n,a,r){n.value=a,n.getSnapshot=r,om(n)&&lm(t)}function rm(t,n,a){return a(function(){om(n)&&lm(t)})}function om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function lm(t){var n=ps(t,2);n!==null&&qn(n,t,2)}function Wu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Es){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function cm(t,n,a,r){return t.baseState=a,ku(t,Wt,typeof r=="function"?r:na)}function Tx(t,n,a,r,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function um(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var R=a(u,r),H=P.S;H!==null&&H(v,R),fm(t,n,R)}catch(ee){ju(t,n,ee)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,r),fm(t,n,f)}catch(ee){ju(t,n,ee)}}function fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){dm(t,n,r)},function(r){return ju(t,n,r)}):dm(t,n,a)}function dm(t,n,a){n.status="fulfilled",n.value=a,hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function ju(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,hm(n),n=n.next;while(n!==r)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pm(t,n){return n}function mm(t,n){if(bt){var a=Zt.formState;if(a!==null){e:{var r=ft;if(bt){if(Kt){t:{for(var u=Kt,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=xi(u.nextSibling),r=u.data==="F!";break e}}Ua(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:n},a.queue=r,a=Om.bind(null,ft,r),r.dispatch=a,r=Wu(!1),f=Ju.bind(null,ft,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Tx.bind(null,ft,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function gm(t){var n=fn();return vm(n,Wt,t)}function vm(t,n,a){if(n=ku(t,n,pm)[0],t=Rl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=fo(n)}catch(v){throw v===$s?vl:v}else r=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,ar(9,{destroy:void 0},Ax.bind(null,u,a),null)),[r,f,t]}function Ax(t,n){t.action=n}function _m(t){var n=fn(),a=Wt;if(a!==null)return vm(n,a,t);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Tl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function xm(){return fn().memoizedState}function Cl(t,n,a,r){var u=Fn();ft.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(t,n,a,r){var u=fn();r=r===void 0?null:r;var f=u.memoizedState.inst;Wt!==null&&r!==null&&zu(r,Wt.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(ft.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function ym(t,n){Cl(8390656,8,t,n)}function qu(t,n){wl(2048,8,t,n)}function Rx(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Tl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Sm(t){var n=fn().memoizedState;return Rx({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Mm(t,n){return wl(4,2,t,n)}function Em(t,n){return wl(4,4,t,n)}function bm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,bm.bind(null,n,t),a)}function Yu(){}function Am(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&zu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Rm(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&zu(n,r[1]))return r[0];if(r=t(),Es){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[r,n],r}function Zu(t,n,a){return a===void 0||(ta&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=C0(),ft.lanes|=t,Ha|=t,a)}function Cm(t,n,a,r){return ti(a,n)?a:tr.current!==null?(t=Zu(t,a,r),ti(t,n)||(mn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(St&261930)===0?(mn=!0,t.memoizedState=a):(t=C0(),ft.lanes|=t,Ha|=t,n)}function wm(t,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var v=P.T,R={};P.T=R,Ju(t,!1,n,a);try{var H=u(),ee=P.S;if(ee!==null&&ee(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=Mx(H,r);ho(t,n,he,oi(t))}else ho(t,n,r,oi(t))}catch(_e){ho(t,n,{then:function(){},status:"rejected",reason:_e},oi())}finally{B.p=f,v!==null&&R.types!==null&&(v.types=R.types),P.T=v}}function Cx(){}function Ku(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Dm(t).queue;wm(t,u,n,oe,a===null?Cx:function(){return Um(t),a(r)})}function Dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Um(t){var n=Dm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},oi())}function Qu(){return Rn(Do)}function Lm(){return fn().memoizedState}function Nm(){return fn().memoizedState}function wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Oa(a);var r=Pa(n,t,a);r!==null&&(qn(r,n,a),oo(r,n,a)),n={cache:Au()},t.payload=n;return}n=n.return}}function Dx(t,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Pm(n,a):(a=mu(t,n,a,r),a!==null&&(qn(a,t,r),Im(a,n,r)))}function Om(t,n,a){var r=oi();ho(t,n,a,r)}function ho(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Pm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,ti(R,v))return ul(t,n,u,0),Zt===null&&cl(),!1}catch{}if(a=mu(t,n,u,r),a!==null)return qn(a,t,r),Im(a,n,r),!0}return!1}function Ju(t,n,a,r){if(r={lane:2,revertLane:Uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=mu(t,a,r,2),n!==null&&qn(n,t,2)}function Dl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Pm(t,n){nr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Im(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,di(t,a)}}var po={readContext:Rn,use:Al,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};po.useEffectEvent=sn;var zm={readContext:Rn,use:Al,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,bm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Es){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(Es){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Dx.bind(null,ft,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,a=Om.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(t,n){var a=Fn();return Zu(a,t,n)},useTransition:function(){var t=Wu(!1);return t=wm.bind(null,ft,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ft,u=Fn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(St&127)!==0||am(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(rm.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},sm.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=Zt.identifierPrefix;if(bt){var a=Ii,r=Pi;a=(r&~(1<<32-Pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ex++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qu,useFormState:mm,useActionState:mm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vu,useCacheRefresh:function(){return Fn().memoizedState=wx.bind(null,ft)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Rn,use:Al,useCallback:Am,useContext:Rn,useEffect:qu,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Rl,useRef:xm,useState:function(){return Rl(na)},useDebugValue:Yu,useDeferredValue:function(t,n){var a=fn();return Cm(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Rl(na)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:im,useId:Lm,useHostTransitionStatus:Qu,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=fn();return cm(a,Wt,t,n)},useMemoCache:Vu,useCacheRefresh:Nm};$u.useEffectEvent=Sm;var Fm={readContext:Rn,use:Al,useCallback:Am,useContext:Rn,useEffect:qu,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Xu,useRef:xm,useState:function(){return Xu(na)},useDebugValue:Yu,useDeferredValue:function(t,n){var a=fn();return Wt===null?Zu(a,t,n):Cm(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Xu(na)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:im,useId:Lm,useHostTransitionStatus:Qu,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=fn();return Wt!==null?cm(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Nm};Fm.useEffectEvent=Sm;function ef(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=oi(),u=Oa(r);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,r),n!==null&&(qn(n,t,r),oo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=oi(),u=Oa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,r),n!==null&&(qn(n,t,r),oo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),r=Oa(a);r.tag=2,n!=null&&(r.callback=n),n=Pa(t,r,a),n!==null&&(qn(n,t,a),oo(n,t,a))}};function Bm(t,n,a,r,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!$r(a,r)||!$r(u,f):!0}function Hm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&tf.enqueueReplaceState(n,n.state,null)}function bs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Gm(t){ll(t)}function Vm(t){console.error(t)}function km(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Xm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Wm(t){return t=Oa(t),t.tag=3,t}function jm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Xm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Xm(n,a,r),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Ux(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?kl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(t,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(t,r,u)),!1}throw Error(s(435,a.tag))}return Cf(t,r,u),kl(),!1}if(bt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Su&&(t=Error(s(422),{cause:r}),no(pi(t,a)))):(r!==Su&&(n=Error(s(423),{cause:r}),no(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=pi(r,a),u=nf(t.stateNode,r,u),Lu(t,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:r});if(f=pi(f,a),Mo===null?Mo=[f]:Mo.push(f),rn!==4&&(rn=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=nf(a.stateNode,r,t),Lu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Wm(u),jm(u,t,a,r),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),mn=!1;function Cn(t,n,a,r){n.child=t===null?Kp(n,null,a,r):Ms(n,t.child,a,r)}function qm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var R in r)R!=="ref"&&(v[R]=r[R])}else v=r;return _s(n),r=Fu(t,n,a,v,f,u),R=Bu(),t!==null&&!mn?(Hu(t,n,u),ia(t,n,u)):(bt&&R&&xu(n),n.flags|=1,Cn(t,n,r,u),n.child)}function Ym(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Zm(t,n,f,r,u)):(t=dl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!df(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:$r,a(v,r)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Zm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if($r(f,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=f,df(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return sf(t,n,a,r,u)}function Km(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Qm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?$p(n,f):Ou(),em(n);else return r=n.lanes=536870912,Qm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),$p(n,f),za(),n.memoizedState=null):(t!==null&&gl(n,null),Ou(),za());return Cn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qm(t,n,a,r,u){var f=Cu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Ou(),em(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Ll(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Jm(t,n,a){return Ms(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function Lx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(r.mode==="hidden")return t=Ll(n,r),n.lanes=536870912,mo(null,t);if(Iu(n),(t=Kt)?(t=ug(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Pp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Ll(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=Jm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(r=Zt,r!==null&&(v=Jn(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ps(t,v),qn(r,t,v),af;kl(),n=Jm(t,n,a)}else t=f.treeContext,Kt=xi(v.nextSibling),An=n,bt=!0,Da=null,vi=!1,t!==null&&Fp(n,t),n=Ll(n,r),n.flags|=4096;return n}return t=Qi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sf(t,n,a,r,u){return _s(n),a=Fu(t,n,a,r,void 0,u),r=Bu(),t!==null&&!mn?(Hu(t,n,u),ia(t,n,u)):(bt&&r&&xu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function $m(t,n,a,r,u,f){return _s(n),n.updateQueue=null,a=nm(n,r,a,u),tm(t),r=Bu(),t!==null&&!mn?(Hu(t,n,f),ia(t,n,f)):(bt&&r&&xu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function e0(t,n,a,r,u){if(_s(n),n.stateNode===null){var f=js,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Du(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):js,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ef(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&tf.enqueueReplaceState(f,f.state,null),co(n,r,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=bs(a,R);f.props=H;var ee=f.context,he=a.contextType;v=js,typeof he=="object"&&he!==null&&(v=Rn(he));var _e=a.getDerivedStateFromProps;he=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ee!==v)&&Hm(n,f,r,v),Na=!1;var re=n.memoizedState;f.state=re,co(n,r,f,u),lo(),ee=n.memoizedState,R||re!==ee||Na?(typeof _e=="function"&&(ef(n,a,_e,r),ee=n.memoizedState),(H=Na||Bm(n,a,H,r,re,ee,v))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ee),f.props=r,f.state=ee,f.context=v,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Uu(t,n),v=n.memoizedProps,he=bs(a,v),f.props=he,_e=n.pendingProps,re=f.context,ee=a.contextType,H=js,typeof ee=="object"&&ee!==null&&(H=Rn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_e||re!==H)&&Hm(n,f,r,H),Na=!1,re=n.memoizedState,f.state=re,co(n,r,f,u),lo();var ce=n.memoizedState;v!==_e||re!==ce||Na||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof R=="function"&&(ef(n,a,R,r),ce=n.memoizedState),(he=Na||Bm(n,a,he,r,re,ce,H)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=H,r=he):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Ms(n,t.child,null,u),n.child=Ms(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function t0(t,n,a,r){return gs(),n.flags|=256,Cn(t,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(t){return{baseLanes:t,cachePool:Xp()}}function lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function n0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ia(n):za(),(t=Kt)?(t=ug(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Pp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Ua(n);return Xf(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(za(),u=n.mode,R=Ol({mode:"hidden",children:R},u),r=ms(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=of(a),r.childLanes=lf(t,v,a),n.memoizedState=rf,mo(null,r)):(Ia(n),cf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=uf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),R=ms(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Ms(n,t.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(t,v,a),n.memoizedState=rf,n=mo(null,r));else if(Ia(n),Xf(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ee=v.dgst;v=ee,r=Error(s(419)),r.stack="",r.digest=v,no({value:r,source:null,stack:null}),n=uf(t,n,a)}else if(mn||Ks(t,n,a,!1),v=(a&t.childLanes)!==0,mn||v){if(v=Zt,v!==null&&(r=Jn(v,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,ps(t,r),qn(v,t,r),af;kf(R)||kl(),n=uf(t,n,a)}else kf(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Kt=xi(R.nextSibling),An=n,bt=!0,Da=null,vi=!1,t!==null&&Fp(n,t),n=cf(n,r.children),n.flags|=4096);return n}return u?(za(),R=r.fallback,u=n.mode,H=t.child,ee=H.sibling,r=Qi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,ee!==null?R=Qi(ee,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,mo(null,r),r=n.child,R=t.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Xp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=lf(t,v,a),n.memoizedState=rf,mo(t.child,r)):(Ia(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function cf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function uf(t,n,a){return Ms(n,t.child,null,a),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function i0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),bu(t.return,n,a)}function ff(t,n,a,r,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function a0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=un.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,xe(un,v),Cn(t,n,r,a),r=bt?to:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i0(t,a,n);else if(t.tag===19)i0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Nx(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),La(n,hn,t.memoizedState.cache),gs();break;case 27:case 5:$e(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?n0(t,n,a):(Ia(n),t=ia(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return a0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(un,un.current),r)break;return null;case 22:return n.lanes=0,Km(t,n,a,n.pendingProps);case 24:La(n,hn,t.memoizedState.cache)}return ia(t,n,a)}function s0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!df(t,a)&&(n.flags&128)===0)return mn=!1,Nx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,bt&&(n.flags&1048576)!==0&&zp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=ys(n.elementType),n.type=t,typeof t=="function")gu(t)?(r=bs(t,r),n.tag=1,n=e0(null,n,t,r,a)):(n.tag=0,n=sf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=qm(null,n,t,r,a);break e}else if(u===F){n.tag=14,n=Ym(null,n,t,r,a);break e}}throw n=ue(t)||t,Error(s(306,n,""))}}return n;case 0:return sf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=bs(r,n.pendingProps),e0(t,n,r,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(t,n),co(n,r,null,a);var v=n.memoizedState;if(r=v.cache,La(n,hn,r),r!==f.cache&&Tu(n,[hn],a,!0),lo(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=t0(t,n,r,a);break e}else if(r!==u){u=pi(Error(s(424)),n),no(u),n=t0(t,n,r,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=xi(t.firstChild),An=n,bt=!0,Da=null,vi=!0,a=Kp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),r===u){n=ia(t,n,a);break e}Cn(t,n,r,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,r=Kl(ae.current).createElement(a),r[cn]=n,r[Tn]=t,wn(r,a,t),dn(r),n.stateNode=r):n.memoizedState=gg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&bt&&(r=n.stateNode=hg(n.type,n.pendingProps,ae.current),An=n,vi=!0,u=Kt,Wa(n.type)?(Wf=u,Kt=xi(r.firstChild)):Kt=u),Cn(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=r=Kt)&&(r=cy(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,An=n,Kt=xi(r.firstChild),vi=!1,u=!0):u=!1),u||Ua(n)),$e(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Hf(u,f)?r=null:v!==null&&Hf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(t,n,bx,null,null,a),Do._currentValue=u),Nl(t,n),Cn(t,n,r,a),n.child;case 6:return t===null&&bt&&((t=a=Kt)&&(a=uy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,An=n,Kt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return n0(t,n,a);case 4:return be(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ms(n,null,r,a):Cn(t,n,r,a),n.child;case 11:return qm(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),Cn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,_s(n),u=Rn(u),r=r(u),n.flags|=1,Cn(t,n,r,a),n.child;case 14:return Ym(t,n,n.type,n.pendingProps,a);case 15:return Zm(t,n,n.type,n.pendingProps,a);case 19:return a0(t,n,a);case 31:return Lx(t,n,a);case 22:return Km(t,n,a,n.pendingProps);case 24:return _s(n),r=Rn(hn),t===null?(u=Cu(),u===null&&(u=Zt,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Du(n),La(n,hn,u)):((t.lanes&a)!==0&&(Uu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,hn,r)):(r=f.cache,La(n,hn,r),r!==u.cache&&Tu(n,[hn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function hf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(L0())t.flags|=8192;else throw Ss=_l,wu}else t.flags&=-16777217}function r0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sg(n))if(L0())t.flags|=8192;else throw Ss=_l,wu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,lr|=n)}function go(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Ox(t,n,a){var r=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ea(hn),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Qt(n),r0(n,f)):(Qt(n),hf(n,u,null,r,a))):f?f!==t.memoizedState?(aa(n),Qt(n),r0(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&aa(n),Qt(n),hf(n,u,t,r,a)),null;case 27:if(Ke(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Te.current,Zs(n)?Bp(n):(t=hg(u,r,a),n.stateNode=t,aa(n))}return Qt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=Te.current,Zs(n))Bp(n);else{var v=Kl(ae.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[cn]=n,f[Tn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(wn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&aa(n)}}return Qt(n),hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ae.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ng(t.nodeValue,a)),t||Ua(n,!0)}else t=Kl(t).createTextNode(r),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Qt(n),null);case 4:return ze(),t===null&&Pf(n.stateNode.containerInfo),Qt(n),null;case 10:return ea(n.type),Qt(n),null;case 19:if(Q(un),r=n.memoizedState,r===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,go(r,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Op(a,t),a=a.sibling;return xe(un,un.current&1|2),bt&&Ji(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Re()>Hl&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*Re()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Re(),t.sibling=null,a=un.current,xe(un,u?a&1|2:a&1),bt&&Ji(n,r.treeForkCount),t):(Qt(n),null);case 22:case 23:return ai(n),Pu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Q(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(hn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Px(t,n){switch(yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(hn),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(un),null;case 4:return ze(),null;case 10:return ea(n.type),null;case 22:case 23:return ai(n),Pu(),t!==null&&Q(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(hn),null;case 25:return null;default:return null}}function o0(t,n){switch(yu(n),n.tag){case 3:ea(hn),ze();break;case 26:case 27:case 5:Ke(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Q(un);break;case 10:ea(n.type);break;case 22:case 23:ai(n),Pu(),t!==null&&Q(xs);break;case 24:ea(hn)}}function vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Fa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var v=r.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var H=a,ee=R;try{ee()}catch(he){kt(u,H,he)}}}r=r.next}while(r!==f)}}catch(he){kt(n,n.return,he)}}function l0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(r){kt(t,t.return,r)}}}function c0(t,n,a){a.props=bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){kt(t,n,r)}}function _o(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){kt(t,n,u)}}function zi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function u0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function pf(t,n,a){try{var r=t.stateNode;iy(r,t.type,a,n),r[Tn]=n}catch(u){kt(t,t.return,u)}}function f0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(r!==4&&(r===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gf(t,n,a),t=t.sibling;t!==null;)gf(t,n,a),t=t.sibling}function Il(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function d0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,r,a),n[cn]=t,n[Tn]=a}catch(f){kt(t,t.return,f)}}var sa=!1,gn=!1,vf=!1,h0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Ix(t,n){if(t=t.containerInfo,Ff=ic,t=Tp(t),cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,H=-1,ee=0,he=0,_e=t,re=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(R=v+u),_e!==f||r!==0&&_e.nodeType!==3||(H=v+r),_e.nodeType===3&&(v+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)re=_e,_e=ce;for(;;){if(_e===t)break t;if(re===a&&++ee===u&&(R=v),re===f&&++he===r&&(H=v),(ce=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:t,selectionRange:a},ic=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var je=bs(a.type,u);t=r.getSnapshotBeforeUpdate(je,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(et){kt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function p0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),r&4&&vo(5,a);break;case 1:if(oa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){kt(a,a.return,v)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){kt(a,a.return,v)}}r&64&&l0(a),r&512&&_o(a,a.return);break;case 3:if(oa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(v){kt(a,a.return,v)}}break;case 27:n===null&&r&4&&d0(a);case 26:case 5:oa(t,a),n===null&&r&4&&u0(a),r&512&&_o(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),r&4&&v0(t,a);break;case 13:oa(t,a),r&4&&_0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Wx.bind(null,a),fy(t,a))));break;case 22:if(r=a.memoizedState!==null||sa,!r){n=n!==null&&n.memoizedState!==null||gn,u=sa;var f=gn;sa=r,(gn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),sa=u,gn=f}break;case 30:break;default:oa(t,a)}}function m0(t){var n=t.alternate;n!==null&&(t.alternate=null,m0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,kn=!1;function ra(t,n,a){for(a=a.child;a!==null;)g0(t,n,a),a=a.sibling}function g0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var r=nn,u=kn;Wa(a.type)&&(nn=a.stateNode,kn=!1),ra(t,n,a),Ro(a.stateNode),nn=r,kn=u;break;case 5:gn||zi(a,n);case 6:if(r=nn,u=kn,nn=null,ra(t,n,a),nn=r,kn=u,nn!==null)if(kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:nn!==null&&(kn?(t=nn,lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):lg(nn,a.stateNode));break;case 4:r=nn,u=kn,nn=a.stateNode.containerInfo,kn=!0,ra(t,n,a),nn=r,kn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),gn||Fa(4,a,n),ra(t,n,a);break;case 1:gn||(zi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&c0(a,n,r)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:gn=(r=gn)||a.memoizedState!==null,ra(t,n,a),gn=r;break;default:ra(t,n,a)}}function v0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){kt(n,n.return,a)}}}function _0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){kt(n,n.return,a)}}function zx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new h0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new h0),n;default:throw Error(s(435,t.tag))}}function zl(t,n){var a=zx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=jx.bind(null,t,r);r.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){nn=R.stateNode,kn=!1;break e}break;case 5:nn=R.stateNode,kn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(nn===null)throw Error(s(160));g0(f,v,u),nn=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)x0(n,t),n=n.sibling}var Ai=null;function x0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),r&4&&(Fa(3,t,t.return),vo(3,t),Fa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),r&512&&(gn||a===null||zi(a,a.return)),r&64&&sa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ai;if(Xn(n,t),Wn(t),r&512&&(gn||a===null||zi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ea]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,r,a),f[cn]=t,dn(f),r=f;break e;case"link":var v=xg("link","href",u).get(r+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=xg("meta","content",u).get(r+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[cn]=t,dn(f),r=f}t.stateNode=r}else yg(u,t.type,t.stateNode);else t.stateNode=_g(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?yg(u,t.type,t.stateNode):_g(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),r&512&&(gn||a===null||zi(a,a.return)),a!==null&&r&4&&pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),r&512&&(gn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{ei(u,"")}catch(je){kt(t,t.return,je)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,pf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(vf=!0);break;case 6:if(Xn(n,t),Wn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(je){kt(t,t.return,je)}}break;case 3:if($l=null,u=Ai,Ai=Ql(n.containerInfo),Xn(n,t),Ai=u,Wn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(je){kt(t,t.return,je)}vf&&(vf=!1,y0(t));break;case 4:r=Ai,Ai=Ql(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ai=r;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=Re()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=sa,he=gn;if(sa=ee||u,gn=he||H,Xn(n,t),gn=he,sa=ee,Wn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||sa||gn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=H.stateNode;var _e=H.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(je){kt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){kt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?cg(ce,!0):cg(H.stateNode,!1)}catch(je){kt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zl(t,a))));break;case 19:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(f0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(t);Il(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ei(v,""),a.flags&=-33);var R=mf(t);Il(t,R,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=mf(t);gf(t,ee,H);break;default:throw Error(s(161))}}catch(he){kt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function y0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;y0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)p0(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ts(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&c0(n,n.return,a),Ts(n);break;case 27:Ro(n.stateNode);case 26:case 5:zi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),vo(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){kt(r,r.return,ee)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Qp(H[u],R)}catch(ee){kt(r,r.return,ee)}}a&&v&64&&l0(f),_o(f,f.return);break;case 27:d0(f);case 26:case 5:la(u,f,a),a&&r===null&&v&4&&u0(f),_o(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&v&4&&v0(u,f);break;case 13:la(u,f,a),a&&v&4&&_0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),_o(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function _f(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ri(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)S0(t,n,a,r),n=n.sibling}function S0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,r),u&2048&&vo(9,n);break;case 1:Ri(t,n,a,r);break;case 3:Ri(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ri(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){kt(n,n.return,H)}}else Ri(t,n,a,r);break;case 31:Ri(t,n,a,r);break;case 13:Ri(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,r):xo(t,n):f._visibility&2?Ri(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&_f(v,n);break;case 24:Ri(t,n,a,r),u&2048&&xf(n.alternate,n);break;default:Ri(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,H=r,ee=v.flags;switch(v.tag){case 0:case 11:case 15:sr(f,v,R,H,u),vo(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?sr(f,v,R,H,u):xo(f,v):(he._visibility|=2,sr(f,v,R,H,u)),u&&ee&2048&&_f(v.alternate,v);break;case 24:sr(f,v,R,H,u),u&&ee&2048&&xf(v.alternate,v);break;default:sr(f,v,R,H,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:xo(a,r),u&2048&&_f(r.alternate,r);break;case 24:xo(a,r),u&2048&&xf(r.alternate,r);break;default:xo(a,r)}n=n.sibling}}var yo=8192;function rr(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)M0(t,n,a),t=t.sibling}function M0(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&yo&&t.memoizedState!==null&&Ey(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=Ai;Ai=Ql(t.stateNode.containerInfo),rr(t,n,a),Ai=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=yo,yo=16777216,rr(t,n,a),yo=r):rr(t,n,a));break;default:rr(t,n,a)}}function E0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,T0(r,t)}E0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)b0(t),t=t.sibling}function b0(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):So(t);break;default:So(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,T0(r,t)}E0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function T0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:io(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else e:for(a=t;Mn!==null;){r=Mn;var u=r.sibling,f=r.return;if(m0(r),r===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var Fx={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(hn).controller.signal}},Bx=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Zt=null,xt=null,St=0,Vt=0,si=null,Ba=!1,or=!1,yf=!1,ca=0,rn=0,Ha=0,As=0,Sf=0,ri=0,lr=0,Mo=null,jn=null,Mf=!1,Bl=0,A0=0,Hl=1/0,Gl=null,Ga=null,xn=0,Va=null,cr=null,ua=0,Ef=0,bf=null,R0=null,Eo=0,Tf=null;function oi(){return(Pt&2)!==0&&St!==0?St&-St:P.T!==null?Uf():Vr()}function C0(){if(ri===0)if((St&536870912)===0||bt){var t=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function qn(t,n,a){(t===Zt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(ur(t,0),ka(t,St,ri,!1)),tt(t,a),((Pt&2)===0||t!==Zt)&&(t===Zt&&((Pt&2)===0&&(As|=a),rn===4&&ka(t,St,ri,!1)),Fi(t))}function w0(t,n,a){if((Pt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Be(t,n),u=r?Vx(t,n):Rf(t,n,!0),f=r;do{if(u===0){or&&!r&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Hx(a)){u=Rf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=t;u=Mo;var H=R.current.memoizedState.isDehydrated;if(H&&(ur(R,v).flags|=256),v=Rf(R,v,!1),v!==2){if(yf&&!H){R.errorRecoveryDisabledLanes|=f,As|=f,u=4;break e}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),ka(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(r,n,ri,!Ba);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-Re(),10<u)){if(ka(r,n,ri,!Ba),pe(r,0,!0)!==0)break e;ua=n,r.timeoutHandle=rg(D0.bind(null,r,a,jn,Gl,Mf,n,ri,As,lr,Ba,f,"Throttled",-0,0),u);break e}D0(r,a,jn,Gl,Mf,n,ri,As,lr,Ba,f,null,-0,0)}}break}while(!0);Fi(t)}function D0(t,n,a,r,u,f,v,R,H,ee,he,_e,re,ce){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},M0(n,f,_e);var je=(f&62914560)===f?Bl-Re():(f&4194048)===f?A0-Re():0;if(je=by(_e,je),je!==null){ua=f,t.cancelPendingCommit=je(F0.bind(null,t,n,f,a,r,u,v,R,H,he,_e,null,re,ce)),ka(t,f,v,!ee);return}}F0(t,n,f,a,r,u,v,R,H)}function Hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,r){n&=~Sf,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Ot(t,a,n)}function Vl(){return(Pt&6)===0?(bo(0),!1):!0}function Af(){if(xt!==null){if(Vt===0)var t=xt.return;else t=xt,$i=vs=null,Gu(t),er=null,so=0,t=xt;for(;t!==null;)o0(t.alternate,t),t=t.return;xt=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ry(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Af(),Zt=t,xt=a=Qi(t.current,null),St=n,Vt=0,si=null,Ba=!1,or=Be(t,n),yf=!1,lr=ri=Sf=As=Ha=rn=0,jn=Mo=null,Mf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Pe(r),f=1<<u;n|=t[u],r&=~f}return ca=n,cl(),a}function U0(t,n){ft=null,P.H=po,n===$s||n===vl?(n=qp(),Vt=3):n===wu?(n=qp(),Vt=4):Vt=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,xt===null&&(rn=1,Ul(t,pi(n,t.current)))}function L0(){var t=ii.current;return t===null?!0:(St&4194048)===St?_i===null:(St&62914560)===St||(St&536870912)!==0?t===_i:!1}function N0(){var t=P.H;return P.H=po,t===null?po:t}function O0(){var t=P.A;return P.A=Fx,t}function kl(){rn=4,Ba||(St&4194048)!==St&&ii.current!==null||(or=!0),(Ha&134217727)===0&&(As&134217727)===0||Zt===null||ka(Zt,St,ri,!1)}function Rf(t,n,a){var r=Pt;Pt|=2;var u=N0(),f=O0();(Zt!==t||St!==n)&&(Gl=null,ur(t,n)),n=!1;var v=rn;e:do try{if(Vt!==0&&xt!==null){var R=xt,H=si;switch(Vt){case 8:Af(),v=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ee=Vt;if(Vt=0,si=null,fr(t,R,H,ee),a&&or){v=0;break e}break;default:ee=Vt,Vt=0,si=null,fr(t,R,H,ee)}}Gx(),v=rn;break}catch(he){U0(t,he)}while(!0);return n&&t.shellSuspendCounter++,$i=vs=null,Pt=r,P.H=u,P.A=f,xt===null&&(Zt=null,St=0,cl()),v}function Gx(){for(;xt!==null;)P0(xt)}function Vx(t,n){var a=Pt;Pt|=2;var r=N0(),u=O0();Zt!==t||St!==n?(Gl=null,Hl=Re()+500,ur(t,n)):or=Be(t,n);e:do try{if(Vt!==0&&xt!==null){n=xt;var f=si;t:switch(Vt){case 1:Vt=0,si=null,fr(t,n,f,1);break;case 2:case 9:if(Wp(f)){Vt=0,si=null,I0(n);break}n=function(){Vt!==2&&Vt!==9||Zt!==t||(Vt=7),Fi(t)},f.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Wp(f)?(Vt=0,si=null,I0(n)):(Vt=0,si=null,fr(t,n,f,7));break;case 5:var v=null;switch(xt.tag){case 26:v=xt.memoizedState;case 5:case 27:var R=xt;if(v?Sg(v):R.stateNode.complete){Vt=0,si=null;var H=R.sibling;if(H!==null)xt=H;else{var ee=R.return;ee!==null?(xt=ee,Xl(ee)):xt=null}break t}}Vt=0,si=null,fr(t,n,f,5);break;case 6:Vt=0,si=null,fr(t,n,f,6);break;case 8:Af(),rn=6;break e;default:throw Error(s(462))}}kx();break}catch(he){U0(t,he)}while(!0);return $i=vs=null,P.H=r,P.A=u,Pt=a,xt!==null?0:(Zt=null,St=0,cl(),rn)}function kx(){for(;xt!==null&&!dt();)P0(xt)}function P0(t){var n=s0(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Xl(t):xt=n}function I0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=$m(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=$m(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Gu(n);default:o0(a,n),n=xt=Op(n,ca),n=s0(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Xl(t):xt=n}function fr(t,n,a,r){$i=vs=null,Gu(n),er=null,so=0;var u=n.return;try{if(Ux(t,u,n,a,St)){rn=1,Ul(t,pi(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;rn=1,Ul(t,pi(a,t.current)),xt=null;return}n.flags&32768?(bt||r===1?t=!0:or||(St&536870912)!==0?t=!1:(Ba=t=!0,(r===2||r===9||r===3||r===6)&&(r=ii.current,r!==null&&r.tag===13&&(r.flags|=16384))),z0(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){z0(n,Ba);return}t=n.return;var a=Ox(n.alternate,n,ca);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);rn===0&&(rn=5)}function z0(t,n){do{var a=Px(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);rn=6,xt=null}function F0(t,n,a,r,u,f,v,R,H){t.cancelPendingCommit=null;do Wl();while(xn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,an(t,a,f,v,R,H),t===Zt&&(xt=Zt=null,St=0),cr=n,Va=t,ua=a,Ef=f,bf=u,R0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(J,function(){return k0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=B.p,B.p=2,v=Pt,Pt|=4;try{Ix(t,n,a)}finally{Pt=v,B.p=u,P.T=r}}xn=1,B0(),H0(),G0()}}function B0(){if(xn===1){xn=0;var t=Va,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=B.p;B.p=2;var u=Pt;Pt|=4;try{x0(n,t);var f=Bf,v=Tp(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&bp(R.ownerDocument.documentElement,R)){if(H!==null&&cu(R)){var ee=H.start,he=H.end;if(he===void 0&&(he=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(he,R.value.length);else{var _e=R.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var ce=re.getSelection(),je=R.textContent.length,et=Math.min(H.start,je),qt=H.end===void 0?et:Math.min(H.end,je);!ce.extend&&et>qt&&(v=qt,qt=et,et=v);var K=Ep(R,et),W=Ep(R,qt);if(K&&W&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==W.node||ce.focusOffset!==W.offset)){var $=_e.createRange();$.setStart(K.node,K.offset),ce.removeAllRanges(),et>qt?(ce.addRange($),ce.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),ce.addRange($))}}}}for(_e=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ge=_e[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ic=!!Ff,Bf=Ff=null}finally{Pt=u,B.p=r,P.T=a}}t.current=n,xn=2}}function H0(){if(xn===2){xn=0;var t=Va,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=B.p;B.p=2;var u=Pt;Pt|=4;try{p0(t,n.alternate,n)}finally{Pt=u,B.p=r,P.T=a}}xn=3}}function G0(){if(xn===4||xn===3){xn=0,Dt();var t=Va,n=cr,a=ua,r=R0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,cr=Va=null,V0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Gr(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=B.p,B.p=2,P.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var R=r[v];f(R.value,{componentStack:R.stack})}}finally{P.T=n,B.p=u}}(ua&3)!==0&&Wl(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Tf?Eo++:(Eo=0,Tf=t):Eo=0,bo(0)}}function V0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Wl(){return B0(),H0(),G0(),k0()}function k0(){if(xn!==5)return!1;var t=Va,n=Ef;Ef=0;var a=Gr(ua),r=P.T,u=B.p;try{B.p=32>a?32:a,P.T=null,a=bf,bf=null;var f=Va,v=ua;if(xn=0,cr=Va=null,ua=0,(Pt&6)!==0)throw Error(s(331));var R=Pt;if(Pt|=4,b0(f.current),S0(f,f.current,v,a),Pt=R,bo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{B.p=u,P.T=r,V0(t,n)}}function X0(t,n,a){n=pi(a,n),n=nf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(tt(t,2),Fi(t))}function kt(t,n,a){if(t.tag===3)X0(t,t,a);else for(;n!==null;){if(n.tag===3){X0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){t=pi(a,t),a=Wm(2),r=Pa(n,a,2),r!==null&&(jm(a,r,n,t),tt(r,2),Fi(r));break}}n=n.return}}function Cf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Bx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(yf=!0,u.add(a),t=Xx.bind(null,t,n,a),n.then(t,t))}function Xx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Zt===t&&(St&a)===a&&(rn===4||rn===3&&(St&62914560)===St&&300>Re()-Bl?(Pt&2)===0&&ur(t,0):Sf|=a,lr===St&&(lr=0)),Fi(t)}function W0(t,n){n===0&&(n=Me()),t=ps(t,n),t!==null&&(tt(t,n),Fi(t))}function Wx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),W0(t,a)}function jx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),W0(t,a)}function qx(t,n){return k(t,n)}var jl=null,dr=null,wf=!1,ql=!1,Df=!1,Xa=0;function Fi(t){t!==dr&&t.next===null&&(dr===null?jl=dr=t:dr=dr.next=t),ql=!0,wf||(wf=!0,Zx())}function bo(t,n){if(!Df&&ql){Df=!0;do for(var a=!1,r=jl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Z0(r,f))}else f=St,f=pe(r,r===Zt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Be(r,f)||(a=!0,Z0(r,f));r=r.next}while(a);Df=!1}}function Yx(){j0()}function j0(){ql=wf=!1;var t=0;Xa!==0&&sy()&&(t=Xa);for(var n=Re(),a=null,r=jl;r!==null;){var u=r.next,f=q0(r,n);f===0?(r.next=null,a===null?jl=u:a.next=u,u===null&&(dr=a)):(a=r,(t!==0||(f&3)!==0)&&(ql=!0)),r=u}xn!==0&&xn!==5||bo(t),Xa!==0&&(Xa=0)}function q0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Pe(f),R=1<<v,H=u[v];H===-1?((R&a)===0||(R&r)!==0)&&(u[v]=Le(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=Zt,a=St,a=pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Rt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Be(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Rt(r),Gr(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=Ee;break;default:a=J}return r=Y0.bind(null,t),a=k(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Rt(r),t.callbackPriority=2,t.callbackNode=null,2}function Y0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var r=St;return r=pe(t,t===Zt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(w0(t,r,n),q0(t,Re()),t.callbackNode!=null&&t.callbackNode===a?Y0.bind(null,t):null)}function Z0(t,n){if(Wl())return null;w0(t,n,!0)}function Zx(){oy(function(){(Pt&6)!==0?k(w,Yx):j0()})}function Uf(){if(Xa===0){var t=Qs;t===0&&(t=rt,rt<<=1,(rt&261888)===0&&(rt=256)),Xa=t}return Xa}function K0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:us(""+t)}function Q0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Kx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=K0((u[Tn]||null).action),v=r.submitter;v&&(n=(n=v[Tn]||null)?K0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new sl("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var H=v?Q0(u,v):new FormData(u);Ku(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=v?Q0(u,v):new FormData(u),Ku(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Lf=0;Lf<hu.length;Lf++){var Nf=hu[Lf],Qx=Nf.toLowerCase(),Jx=Nf[0].toUpperCase()+Nf.slice(1);Ti(Qx,"on"+Jx)}Ti(Cp,"onAnimationEnd"),Ti(wp,"onAnimationIteration"),Ti(Dp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(px,"onTransitionRun"),Ti(mx,"onTransitionStart"),Ti(gx,"onTransitionCancel"),Ti(Up,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function J0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var R=r[v],H=R.instance,ee=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ee;try{f(u)}catch(he){ll(he)}u.currentTarget=null,f=H}else for(v=0;v<r.length;v++){if(R=r[v],H=R.instance,ee=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ee;try{f(u)}catch(he){ll(he)}u.currentTarget=null,f=H}}}}function yt(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var r=t+"__bubble";a.has(r)||($0(n,t,2,!1),a.add(r))}function Of(t,n,a){var r=0;n&&(r|=4),$0(a,t,r,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Pf(t){if(!t[Yl]){t[Yl]=!0,tl.forEach(function(a){a!=="selectionchange"&&($x.has(a)||Of(a,!1,t),Of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Of("selectionchange",!1,n))}}function $0(t,n,a,r){switch(Cg(n)){case 2:var u=Ry;break;case 8:u=Cy;break;default:u=Kf}a=u.bind(null,n,a,t),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function If(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var R=r.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=r.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=ba(R),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){r=f=v;continue e}R=R.parentNode}}r=r.return}ap(function(){var ee=f,he=Jc(a),_e=[];e:{var re=Lp.get(t);if(re!==void 0){var ce=sl,je=t;switch(t){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":ce=j_;break;case"focusin":je="focus",ce=au;break;case"focusout":je="blur",ce=au;break;case"beforeblur":case"afterblur":ce=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Z_;break;case Cp:case wp:case Dp:ce=z_;break;case Up:ce=Q_;break;case"scroll":case"scrollend":ce=L_;break;case"wheel":ce=$_;break;case"copy":case"cut":case"paste":ce=B_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=cp;break;case"toggle":case"beforetoggle":ce=tx}var et=(n&4)!==0,qt=!et&&(t==="scroll"||t==="scrollend"),K=et?re!==null?re+"Capture":null:re;et=[];for(var W=ee,$;W!==null;){var ge=W;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||K===null||(ge=jr(W,K),ge!=null&&et.push(Ao(W,ge,$))),qt)break;W=W.return}0<et.length&&(re=new ce(re,je,null,a,he),_e.push({event:re,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==Qc&&(je=a.relatedTarget||a.fromElement)&&(ba(je)||je[Yi]))break e;if((ce||re)&&(re=he.window===he?he:(re=he.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(je=a.relatedTarget||a.toElement,ce=ee,je=je?ba(je):null,je!==null&&(qt=c(je),et=je.tag,je!==qt||et!==5&&et!==27&&et!==6)&&(je=null)):(ce=null,je=ee),ce!==je)){if(et=op,ge="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(et=cp,ge="onPointerLeave",K="onPointerEnter",W="pointer"),qt=ce==null?re:cs(ce),$=je==null?re:cs(je),re=new et(ge,W+"leave",ce,a,he),re.target=qt,re.relatedTarget=$,ge=null,ba(he)===ee&&(et=new et(K,W+"enter",je,a,he),et.target=$,et.relatedTarget=qt,ge=et),qt=ge,ce&&je)t:{for(et=ey,K=ce,W=je,$=0,ge=K;ge;ge=et(ge))$++;ge=0;for(var Je=W;Je;Je=et(Je))ge++;for(;0<$-ge;)K=et(K),$--;for(;0<ge-$;)W=et(W),ge--;for(;$--;){if(K===W||W!==null&&K===W.alternate){et=K;break t}K=et(K),W=et(W)}et=null}else et=null;ce!==null&&eg(_e,re,ce,et,!1),je!==null&&qt!==null&&eg(_e,qt,je,et,!0)}}e:{if(re=ee?cs(ee):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Lt=vp;else if(mp(re))if(_p)Lt=fx;else{Lt=cx;var Ye=lx}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&zt(ee.elementType)&&(Lt=vp):Lt=ux;if(Lt&&(Lt=Lt(t,ee))){gp(_e,Lt,a,he);break e}Ye&&Ye(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&_t(re,"number",re.value)}switch(Ye=ee?cs(ee):window,t){case"focusin":(mp(Ye)||Ye.contentEditable==="true")&&(ks=Ye,uu=ee,eo=null);break;case"focusout":eo=uu=ks=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Ap(_e,a,he);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":Ap(_e,a,he)}var ht;if(ru)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Vs?hp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(up&&a.locale!=="ko"&&(Vs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Vs&&(ht=sp()):(Ca=he,tu="value"in Ca?Ca.value:Ca.textContent,Vs=!0)),Ye=Zl(ee,Mt),0<Ye.length&&(Mt=new lp(Mt,t,null,a,he),_e.push({event:Mt,listeners:Ye}),ht?Mt.data=ht:(ht=pp(a),ht!==null&&(Mt.data=ht)))),(ht=ix?ax(t,a):sx(t,a))&&(Mt=Zl(ee,"onBeforeInput"),0<Mt.length&&(Ye=new lp("onBeforeInput","beforeinput",null,a,he),_e.push({event:Ye,listeners:Mt}),Ye.data=ht)),Kx(_e,t,ee,a,he)}J0(_e,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jr(t,a),u!=null&&r.unshift(Ao(t,u,f)),u=jr(t,n),u!=null&&r.push(Ao(t,u,f))),t.tag===3)return r;t=t.return}return[]}function ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function eg(t,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var R=a,H=R.alternate,ee=R.stateNode;if(R=R.tag,H!==null&&H===r)break;R!==5&&R!==26&&R!==27||ee===null||(H=ee,u?(ee=jr(a,f),ee!=null&&v.unshift(Ao(a,ee,H))):u||(ee=jr(a,f),ee!=null&&v.push(Ao(a,ee,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(ty,`
`).replace(ny,"")}function ng(t,n){return n=tg(n),tg(t)===n}function jt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ei(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ei(t,""+r);break;case"className":We(t,"class",r);break;case"tabIndex":We(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,r);break;case"style":bi(t,r,f);break;case"data":if(n!=="object"){We(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Zi);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=us(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ie(t,"popover",r);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ie(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Ie(t,a,r))}}function zf(t,n,a,r,u,f){switch(a){case"style":bi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ei(t,r):(typeof r=="number"||typeof r=="bigint")&&ei(t,""+r);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ie(t,a,r)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,f,v,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),r&&jt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=f=v=u=null,H=null,ee=null;for(r in a)if(a.hasOwnProperty(r)){var he=a[r];if(he!=null)switch(r){case"name":u=he;break;case"type":v=he;break;case"checked":H=he;break;case"defaultChecked":ee=he;break;case"value":f=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:jt(t,n,r,he,a,null)}}Nn(t,f,R,H,ee,v,u,!1);return;case"select":yt("invalid",t),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":r=R;default:jt(t,n,u,R,a,null)}n=f,a=v,t.multiple=!!r,n!=null?_n(t,!!r,n,!1):a!=null&&_n(t,!!r,a,!0);return;case"textarea":yt("invalid",t),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:jt(t,n,v,R,a,null)}Ei(t,r,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!=null)&&(H==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":jt(t,n,H,r,a,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(r=0;r<To.length;r++)yt(To[r],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(r=a[ee],r!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,ee,r,a,null)}return;default:if(zt(n)){for(he in a)a.hasOwnProperty(he)&&(r=a[he],r!==void 0&&zf(t,n,he,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&jt(t,n,R,r,a,null))}function iy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,H=null,ee=null,he=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=_e;default:r.hasOwnProperty(ce)||jt(t,n,ce,null,r,_e)}}for(var re in r){var ce=r[re];if(_e=a[re],r.hasOwnProperty(re)&&(ce!=null||_e!=null))switch(re){case"type":f=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":he=ce;break;case"value":v=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==_e&&jt(t,n,re,ce,r,_e)}}Ge(t,v,R,H,ee,he,f,u);return;case"select":ce=v=R=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:r.hasOwnProperty(f)||jt(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==H&&jt(t,n,u,f,r,H)}n=R,a=v,r=ce,re!=null?_n(t,!!a,re,!1):!!r!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:jt(t,n,R,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&jt(t,n,v,u,r,f)}$n(t,re,ce);return;case"option":for(var je in a)re=a[je],a.hasOwnProperty(je)&&re!=null&&!r.hasOwnProperty(je)&&(je==="selected"?t.selected=!1:jt(t,n,je,null,r,re));for(H in r)re=r[H],ce=a[H],r.hasOwnProperty(H)&&re!==ce&&(re!=null||ce!=null)&&(H==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":jt(t,n,H,re,r,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)re=a[et],a.hasOwnProperty(et)&&re!=null&&!r.hasOwnProperty(et)&&jt(t,n,et,null,r,re);for(ee in r)if(re=r[ee],ce=a[ee],r.hasOwnProperty(ee)&&re!==ce&&(re!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:jt(t,n,ee,re,r,ce)}return;default:if(zt(n)){for(var qt in a)re=a[qt],a.hasOwnProperty(qt)&&re!==void 0&&!r.hasOwnProperty(qt)&&zf(t,n,qt,void 0,r,re);for(he in r)re=r[he],ce=a[he],!r.hasOwnProperty(he)||re===ce||re===void 0&&ce===void 0||zf(t,n,he,re,r,ce);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!r.hasOwnProperty(K)&&jt(t,n,K,null,r,re);for(_e in r)re=r[_e],ce=a[_e],!r.hasOwnProperty(_e)||re===ce||re==null&&ce==null||jt(t,n,_e,re,r,ce)}function ig(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ay(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&ig(v)){for(v=0,R=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],ee=H.startTime;if(ee>R)break;var he=H.transferSize,_e=H.initiatorType;he&&ig(_e)&&(H=H.responseEnd,v+=he*(H<R?1:(R-ee)/(H-ee)))}if(--r,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ff=null,Bf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function ag(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function sy(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var rg=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(ly)}:rg;function ly(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function lg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ea]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);gr(n)}function cg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cy(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ea])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function uy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function ug(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$?"||t.data==="$~"}function Xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wf=null;function fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function dg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function hg(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Wr(t)}var yi=new Map,pg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=B.d;B.d={f:dy,r:hy,D:py,C:my,L:gy,m:vy,X:xy,S:_y,M:yy};function dy(){var t=fa.f(),n=Vl();return t||n}function hy(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?Um(n):fa.r(t)}var hr=typeof document>"u"?null:document;function mg(t,n,a){var r=hr;if(r&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),pg.has(u)||(pg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),wn(n,"link",t),dn(n),r.head.appendChild(n)))}}function py(t){fa.D(t),mg("dns-prefetch",t,null)}function my(t,n){fa.C(t,n),mg("preconnect",t,n)}function gy(t,n,a){fa.L(t,n,a);var r=hr;if(r&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}yi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(wo(f))||(n=r.createElement("link"),wn(n,"link",t),dn(n),r.head.appendChild(n)))}}function vy(t,n){fa.m(t,n);var a=hr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(r)+'"][href="'+Ht(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!yi.has(f)&&(t=_({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}r=a.createElement("link"),wn(r,"link",t),dn(r),a.head.appendChild(r)}}}function _y(t,n,a){fa.S(t,n,a);var r=hr;if(r&&t){var u=Aa(r).hoistableStyles,f=pr(t);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=r.querySelector(Co(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&jf(t,a);var H=v=r.createElement("link");dn(H),wn(H,"link",t),H._p=new Promise(function(ee,he){H.onload=ee,H.onerror=he}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Jl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function xy(t,n){fa.X(t,n);var a=hr;if(a&&t){var r=Aa(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(t=_({src:t,async:!0},n),(n=yi.get(u))&&qf(t,n),f=a.createElement("script"),dn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function yy(t,n){fa.M(t,n);var a=hr;if(a&&t){var r=Aa(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&qf(t,n),f=a.createElement("script"),dn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function gg(t,n,a,r){var u=(u=ae.current)?Ql(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Aa(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Aa(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Co(t)))&&!f._p&&(v.instance=f,v.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||Sy(u,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Aa(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Ht(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function vg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Sy(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),dn(n),t.head.appendChild(n))}function mr(t){return'[src="'+Ht(t)+'"]'}function wo(t){return"script[async]"+t}function _g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(r)return n.instance=r,dn(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),dn(r),wn(r,"style",u),Jl(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;r=vg(a),(u=yi.get(u))&&jf(r,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var v=f;return v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),wn(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(wo(f)))?(n.instance=u,dn(u),u):(r=a,(u=yi.get(f))&&(r=_({},a),qf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),wn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,t));return n.instance}function Jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var R=r[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function xg(t,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ea]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=r.get(v);R?R.push(f):r.set(v,[f])}}return r}function yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function My(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ey(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,r=vg(r),(u=yi.get(u))&&jf(r,u),f=f.createElement("link"),dn(f);var v=f;v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),wn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function by(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Yf===0&&(Yf=62500*ay());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Yf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tc=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(Ty,t),tc=null,ec.call(t))}function Ty(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var r=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=ec.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:I,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Ay(t,n,a,r,u,f,v,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Mg(t,n,a,r,u,f,v,R,H,ee,he,_e){return t=new Ay(t,n,a,v,H,ee,he,_e,R),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=Au(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Du(f),t}function Eg(t){return t?(t=js,t):js}function bg(t,n,a,r,u,f){u=Eg(u),r.context===null?r.context=u:r.pendingContext=u,r=Oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Pa(t,r,n),a!==null&&(qn(a,t,n),oo(a,t,n))}function Tg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){Tg(t,n),(t=t.alternate)&&Tg(t,n)}function Ag(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&qn(n,t,67108864),Zf(t,67108864)}}function Rg(t){if(t.tag===13||t.tag===31){var n=oi();n=ls(n);var a=ps(t,n);a!==null&&qn(a,t,n),Zf(t,n)}}var ic=!0;function Ry(t,n,a,r){var u=P.T;P.T=null;var f=B.p;try{B.p=2,Kf(t,n,a,r)}finally{B.p=f,P.T=u}}function Cy(t,n,a,r){var u=P.T;P.T=null;var f=B.p;try{B.p=8,Kf(t,n,a,r)}finally{B.p=f,P.T=u}}function Kf(t,n,a,r){if(ic){var u=Qf(r);if(u===null)If(t,n,r,ac,a),wg(t,r);else if(Dy(u,t,n,a,r))r.stopPropagation();else if(wg(t,r),n&4&&-1<wy.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ae(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var H=1<<31-Pe(v);R.entanglements[1]|=H,v&=~H}Fi(f),(Pt&6)===0&&(Hl=Re()+500,bo(0))}}break;case 31:case 13:R=ps(f,2),R!==null&&qn(R,f,2),Vl(),Zf(f,2)}if(f=Qf(r),f===null&&If(t,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else If(t,n,r,null,a)}}function Qf(t){return t=Jc(t),Jf(t)}var ac=null;function Jf(t){if(ac=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Cg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($t()){case w:return 2;case E:return 8;case J:case ve:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var $f=!1,ja=null,qa=null,Ya=null,Uo=new Map,Lo=new Map,Za=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&Ag(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Dy(t,n,a,r,u){switch(n){case"focusin":return ja=No(ja,t,n,a,r,u),!0;case"dragenter":return qa=No(qa,t,n,a,r,u),!0;case"mouseover":return Ya=No(Ya,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,t,n,a,r,u)),!0}return!1}function Dg(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,kr(t.priority,function(){Rg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,kr(t.priority,function(){Rg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=Ta(a),n!==null&&Ag(n),t.blockedOn=a,!1;n.shift()}return!0}function Ug(t,n,a){sc(t)&&a.delete(n)}function Uy(){$f=!1,ja!==null&&sc(ja)&&(ja=null),qa!==null&&sc(qa)&&(qa=null),Ya!==null&&sc(Ya)&&(Ya=null),Uo.forEach(Ug),Lo.forEach(Ug)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Uy)))}var oc=null;function Lg(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(H){return rc(H,t)}ja!==null&&rc(ja,t),qa!==null&&rc(qa,t),Ya!==null&&rc(Ya,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[Tn]||null;if(typeof f=="function")v||Lg(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Tn]||null)R=v.formAction;else if(Jf(u)!==null)continue}else R=v.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Lg(a)}}}function Ng(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(t){this._internalRoot=t}lc.prototype.render=ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();bg(a,r,t,n,null,null)},lc.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;bg(t.current,2,null,t,null,null),Vl(),n[Yi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&Dg(t)}};var Og=e.version;if(Og!=="19.2.6")throw Error(s(527,Og,"19.2.6"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Ly={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{fe=cc.inject(Ly),de=cc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Gm,f=Vm,v=km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Mg(t,1,!1,null,null,a,r,null,u,f,v,Ng),t[Yi]=n.current,Pf(t),new ed(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Gm,v=Vm,R=km,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Mg(t,1,!0,n,a??null,r,u,H,f,v,R,Ng),n.context=Eg(null),a=n.current,r=oi(),r=ls(r),u=Oa(r),u.callback=null,Pa(a,u,r),a=r,n.current.lanes=a,tt(n,a),Fi(n),t[Yi]=n.current,Pf(t),new lc(n)},Po.version="19.2.6",Po}var Xg;function Vy(){if(Xg)return id.exports;Xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=Gy(),id.exports}var ky=Vy();function Xy({onComplete:o}){const e=Xe.useRef(null),i=Xe.useRef(null),s=Xe.useRef(null),l=Xe.useRef(null),c=Xe.useRef(null),d=Xe.useRef(null),h=Xe.useRef(null),p=Xe.useRef(null),[m,x]=Xe.useState(0);return Xe.useEffect(()=>{const _=e.current,g=_.getContext("2d");let M,T=[],C=0;_.width=window.innerWidth,_.height=window.innerHeight;const S=_.width/2,y=_.height/2;class D{x;y;tx;ty;vx;vy;size;alpha;color;gathered;constructor(){this.x=Math.random()*_.width,this.y=Math.random()*_.height,this.tx=S+(Math.random()-.5)*300,this.ty=y+(Math.random()-.5)*100,this.vx=0,this.vy=0,this.size=Math.random()*2.5+.5,this.alpha=Math.random()*.8+.2;const L=Math.floor(Math.random()*30+60);this.color=`hsl(42, ${Math.floor(Math.random()*30+50)}%, ${L}%)`,this.gathered=!1}update(L,Z){const G=L/100,q=Math.sin(Z*.02+this.x*.01)*2,le=this.tx-this.x,ue=this.ty-this.y;this.vx=this.vx*.85+le*G*.05,this.vy=this.vy*.85+ue*G*.05,L<70?(this.x+=this.vx+q,this.y+=this.vy+q):(this.x+=this.vx,this.y+=this.vy);const j=Math.hypot(le,ue);this.gathered=j<8}draw(L){L.save(),L.globalAlpha=this.alpha,L.fillStyle=this.color,L.shadowBlur=6,L.shadowColor="#D4B06A",L.beginPath(),L.arc(this.x,this.y,this.size,0,Math.PI*2),L.fill(),L.restore()}}for(let b=0;b<600;b++)T.push(new D);const I=[];for(let b=0;b<200;b++){const L=b/200*Math.PI*2,Z=80+Math.random()*60;I.push({x:S+Math.cos(L)*Z*2.5,y:y+Math.sin(L)*Z*.6})}const N=()=>{g.clearRect(0,0,_.width,_.height),C++,T.forEach((b,L)=>{I[L]&&(b.tx=I[L].x,b.ty=I[L].y),b.update(m,C),b.draw(g)}),M=requestAnimationFrame(N)};N();let V=0;const O=setInterval(()=>{V+=Math.random()*3+1,V>=100&&(V=100),x(Math.floor(V)),i.current&&(i.current.style.width=V+"%"),s.current&&(s.current.textContent=Math.floor(V)+"%"),V>=100&&(clearInterval(O),setTimeout(()=>{l.current&&(l.current.style.transition="opacity 0.8s ease",l.current.style.opacity="1"),c.current&&(c.current.style.transition="opacity 0.8s ease 0.4s",c.current.style.opacity="1")},200),setTimeout(()=>{cancelAnimationFrame(M),d.current&&(d.current.style.transition="opacity 0.5s ease",d.current.style.opacity="0"),h.current&&p.current&&(h.current.style.transition="transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)",h.current.style.transform="translateX(-100%)",p.current.style.transition="transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)",p.current.style.transform="translateX(100%)"),setTimeout(()=>{d.current&&(d.current.style.display="none"),o()},1300)},2e3))},60),F=()=>{_.width=window.innerWidth,_.height=window.innerHeight};return window.addEventListener("resize",F),()=>{cancelAnimationFrame(M),clearInterval(O),window.removeEventListener("resize",F)}},[]),U.jsxs(U.Fragment,{children:[U.jsxs("div",{id:"fly-loader",ref:d,children:[U.jsx("canvas",{id:"loader-canvas",ref:e}),U.jsx("div",{id:"loader-logo",ref:l,children:"FLY"}),U.jsx("div",{id:"loader-tagline",ref:c,children:"HAUTE PARFUMERIE"}),U.jsxs("div",{id:"loader-progress-wrap",children:[U.jsx("div",{id:"loader-progress-bar",children:U.jsx("div",{id:"loader-progress-fill",ref:i})}),U.jsx("span",{id:"loader-progress-num",ref:s,children:"0%"})]})]}),U.jsx("div",{id:"curtain-left",ref:h}),U.jsx("div",{id:"curtain-right",ref:p})]})}function Wy(){const o=Xe.useRef(null),e=Xe.useRef(null),i=Xe.useRef(null);return Xe.useEffect(()=>{const s=o.current,l=e.current,c=i.current;let d=-100,h=-100,p=-100,m=-100,x;const _=C=>{d=C.clientX,h=C.clientY},g=()=>{s.style.left=d+"px",s.style.top=h+"px",p+=(d-p)*.12,m+=(h-m)*.12,l.style.left=p+"px",l.style.top=m+"px",c.style.left=p+"px",c.style.top=m+"px",x=requestAnimationFrame(g)};g(),window.addEventListener("mousemove",_);const M=()=>{const C=document.querySelectorAll("button, .btn-luxury, .btn-watch, .newsletter-btn, .nav-icon, #mute-btn, .footer-social"),S=document.querySelectorAll(".perfume-card"),y=document.querySelectorAll(".gallery-item, .story-image-wrap"),D=document.querySelectorAll("a"),I=()=>l.classList.add("cursor-hover"),N=()=>l.classList.remove("cursor-hover"),V=()=>{l.classList.add("cursor-view"),c.textContent="VIEW",c.classList.add("visible")},O=()=>{l.classList.remove("cursor-view"),c.classList.remove("visible")};C.forEach(F=>{F.addEventListener("mouseenter",I),F.addEventListener("mouseleave",N)}),S.forEach(F=>{F.addEventListener("mouseenter",V),F.addEventListener("mouseleave",O)}),y.forEach(F=>{F.addEventListener("mouseenter",I),F.addEventListener("mouseleave",N)}),D.forEach(F=>{F.addEventListener("mouseenter",I),F.addEventListener("mouseleave",N)})};setTimeout(M,1500);const T=new MutationObserver(()=>setTimeout(M,100));return T.observe(document.body,{childList:!0,subtree:!0}),()=>{window.removeEventListener("mousemove",_),cancelAnimationFrame(x),T.disconnect()}},[]),U.jsxs(U.Fragment,{children:[U.jsx("div",{id:"cursor-dot",ref:o}),U.jsx("div",{id:"cursor-ring",ref:e}),U.jsx("div",{id:"cursor-label",ref:i})]})}function jy(){const o=Xe.useRef(null);return Xe.useEffect(()=>{let e=0,i=0,s=0,l=0,c;const d=p=>{s=p.clientX,l=p.clientY},h=()=>{c=requestAnimationFrame(h),e+=(s-e)*.08,i+=(l-i)*.08,o.current&&(o.current.style.left=e+"px",o.current.style.top=i+"px")};return h(),window.addEventListener("mousemove",d),()=>{cancelAnimationFrame(c),window.removeEventListener("mousemove",d)}},[]),U.jsx("div",{id:"spotlight",ref:o,style:{position:"fixed",pointerEvents:"none",zIndex:1,width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(212,176,106,0.04) 0%, transparent 70%)",transform:"translate(-50%, -50%)",mixBlendMode:"screen"}})}function qy(){const[o,e]=Xe.useState(!1),[i]=Xe.useState(0),[s,l]=Xe.useState(!1);Xe.useEffect(()=>{const h=()=>e(window.scrollY>60);return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const c=["Collection","Story","Craftsmanship","Gallery","Contact"],d=h=>{const p=document.getElementById(h.toLowerCase());p&&p.scrollIntoView({behavior:"smooth"}),l(!1)};return U.jsxs(U.Fragment,{children:[U.jsxs("nav",{id:"navbar",className:o?"scrolled":"",children:[U.jsx("a",{href:"#hero",className:"nav-logo",onClick:h=>{h.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),l(!1)},children:"FLY"}),U.jsxs("ul",{className:"nav-links",children:[U.jsx("li",{children:U.jsx("a",{href:"#hero",onClick:h=>{h.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"Home"})}),c.map(h=>U.jsx("li",{children:U.jsx("a",{href:`#${h.toLowerCase()}`,onClick:p=>{p.preventDefault(),d(h)},children:h})},h))]}),U.jsxs("div",{className:"nav-actions",children:[U.jsx("button",{className:"nav-icon","aria-label":"Search",style:{background:"none",border:"none",cursor:"none",padding:0},children:U.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[U.jsx("circle",{cx:"11",cy:"11",r:"8"}),U.jsx("path",{d:"m21 21-4.35-4.35"})]})}),U.jsxs("button",{className:"nav-icon","aria-label":"Cart",style:{background:"none",border:"none",cursor:"none",padding:0,position:"relative"},children:[U.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[U.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),U.jsx("line",{x1:"3",x2:"21",y1:"6",y2:"6"}),U.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),i>0&&U.jsx("span",{style:{position:"absolute",top:"-6px",right:"-6px",width:"16px",height:"16px",borderRadius:"50%",background:"var(--gold)",color:"var(--black)",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i})]}),U.jsxs("button",{onClick:()=>l(!s),style:{display:"none",background:"none",border:"none",padding:"8px",cursor:"pointer",flexDirection:"column",gap:"5px"},className:"mobile-menu-btn","aria-label":"Menu",children:[U.jsx("span",{style:{width:"20px",height:"2px",background:s?"var(--gold)":"var(--white)",transition:"all 0.3s ease",transform:s?"rotate(45deg) translate(5px, 5px)":"none"}}),U.jsx("span",{style:{width:"20px",height:"2px",background:s?"transparent":"var(--white)",transition:"all 0.3s ease"}}),U.jsx("span",{style:{width:"20px",height:"2px",background:s?"var(--gold)":"var(--white)",transition:"all 0.3s ease",transform:s?"rotate(-45deg) translate(5px, -5px)":"none"}})]})]})]}),U.jsxs("div",{style:{position:"fixed",inset:0,background:"rgba(8, 8, 8, 0.98)",zIndex:8999,display:s?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"24px"},children:[U.jsx("a",{href:"#hero",onClick:h=>{h.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),l(!1)},style:{fontFamily:"var(--font-serif)",fontSize:"28px",color:"var(--gold)",textDecoration:"none",letterSpacing:"0.05em"},children:"Home"}),c.map(h=>U.jsx("a",{href:`#${h.toLowerCase()}`,onClick:p=>{p.preventDefault(),d(h)},style:{fontFamily:"var(--font-serif)",fontSize:"28px",color:"rgba(245, 245, 240, 0.7)",textDecoration:"none",letterSpacing:"0.05em",transition:"color 0.3s ease"},onMouseEnter:p=>p.target.style.color="var(--gold)",onMouseLeave:p=>p.target.style.color="rgba(245, 245, 240, 0.7)",children:h},h))]}),U.jsx("style",{children:`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `})]})}const zh="184",Yy=0,Wg=1,Zy=2,Pc=1,Ky=2,Xo=3,rs=0,Kn=1,Ui=2,_a=0,Ur=1,qo=2,jg=3,qg=4,Qy=5,Ls=100,Jy=101,$y=102,eS=103,tS=104,nS=200,iS=201,aS=202,sS=203,Vd=204,kd=205,rS=206,oS=207,lS=208,cS=209,uS=210,fS=211,dS=212,hS=213,pS=214,Xd=0,Wd=1,jd=2,Nr=3,qd=4,Yd=5,Zd=6,Kd=7,Kv=0,mS=1,gS=2,Xi=0,Qv=1,Jv=2,$v=3,e_=4,t_=5,n_=6,i_=7,a_=300,Is=301,Or=302,od=303,ld=304,qc=306,Qd=1e3,va=1001,Jd=1002,Dn=1003,vS=1004,uc=1005,zn=1006,cd=1007,Os=1008,fi=1009,s_=1010,r_=1011,Yo=1012,Fh=1013,ji=1014,Vi=1015,ya=1016,Bh=1017,Hh=1018,Zo=1020,o_=35902,l_=35899,c_=1021,u_=1022,Ni=1023,Sa=1026,Ps=1027,f_=1028,Gh=1029,zs=1030,Vh=1031,kh=1033,Ic=33776,zc=33777,Fc=33778,Bc=33779,$d=35840,eh=35841,th=35842,nh=35843,ih=36196,ah=37492,sh=37496,rh=37488,oh=37489,Gc=37490,lh=37491,ch=37808,uh=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,vh=37816,_h=37817,xh=37818,yh=37819,Sh=37820,Mh=37821,Eh=36492,bh=36494,Th=36495,Ah=36283,Rh=36284,Vc=36285,Ch=36286,_S=3200,wh=0,xS=1,as="",Mi="srgb",kc="srgb-linear",Xc="linear",Xt="srgb",vr=7680,Yg=519,yS=512,SS=513,MS=514,Xh=515,ES=516,bS=517,Wh=518,TS=519,Zg=35044,Kg="300 es",ki=2e3,Ko=2001;function AS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function RS(){const o=Wc("canvas");return o.style.display="block",o}const Qg={};function Jg(...o){const e="THREE."+o.shift();console.log(e,...o)}function d_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function it(...o){o=d_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ct(...o){o=d_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Dh(...o){const e=o.join(" ");e in Qg||(Qg[e]=!0,it(...o))}function CS(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const wS={[Xd]:Wd,[jd]:Zd,[qd]:Kd,[Nr]:Yd,[Wd]:Xd,[Zd]:jd,[Kd]:qd,[Yd]:Nr};class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Uh=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Et(o,e,i){return Math.max(e,Math.min(i,o))}function DS(o,e){return(o%e+e)%e}function fd(o,e,i){return(1-i)*o+i*e}function Io(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Jh=class Jh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jh.prototype.isVector2=!0;let wt=Jh;class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let p=s[l+0],m=s[l+1],x=s[l+2],_=s[l+3],g=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(_!==C||p!==g||m!==M||x!==T){let S=p*g+m*M+x*T+_*C;S<0&&(g=-g,M=-M,T=-T,C=-C,S=-S);let y=1-h;if(S<.9995){const D=Math.acos(S),I=Math.sin(D);y=Math.sin(y*D)/I,h=Math.sin(h*D)/I,p=p*y+g*h,m=m*y+M*h,x=x*y+T*h,_=_*y+C*h}else{p=p*y+g*h,m=m*y+M*h,x=x*y+T*h,_=_*y+C*h;const D=1/Math.sqrt(p*p+m*m+x*x+_*_);p*=D,m*=D,x*=D,_*=D}}e[i]=p,e[i+1]=m,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],p=s[l+1],m=s[l+2],x=s[l+3],_=c[d],g=c[d+1],M=c[d+2],T=c[d+3];return e[i]=h*T+x*_+p*M-m*g,e[i+1]=p*T+x*g+m*_-h*M,e[i+2]=m*T+x*M+h*g-p*_,e[i+3]=x*T-h*_-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),x=h(l/2),_=h(c/2),g=p(s/2),M=p(l/2),T=p(c/2);switch(d){case"XYZ":this._x=g*x*_+m*M*T,this._y=m*M*_-g*x*T,this._z=m*x*T+g*M*_,this._w=m*x*_-g*M*T;break;case"YXZ":this._x=g*x*_+m*M*T,this._y=m*M*_-g*x*T,this._z=m*x*T-g*M*_,this._w=m*x*_+g*M*T;break;case"ZXY":this._x=g*x*_-m*M*T,this._y=m*M*_+g*x*T,this._z=m*x*T+g*M*_,this._w=m*x*_-g*M*T;break;case"ZYX":this._x=g*x*_-m*M*T,this._y=m*M*_+g*x*T,this._z=m*x*T-g*M*_,this._w=m*x*_+g*M*T;break;case"YZX":this._x=g*x*_+m*M*T,this._y=m*M*_+g*x*T,this._z=m*x*T-g*M*_,this._w=m*x*_-g*M*T;break;case"XZY":this._x=g*x*_-m*M*T,this._y=m*M*_-g*x*T,this._z=m*x*T+g*M*_,this._w=m*x*_+g*M*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],x=i[6],_=i[10],g=s+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-p)*M,this._y=(c-m)*M,this._z=(d-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(x-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(d-l)/M,this._x=(c+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,x=i._w;return this._x=s*x+d*h+l*m-c*p,this._y=l*x+d*p+c*h-s*m,this._z=c*x+d*m+s*p-l*h,this._w=d*x-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),x=Math.sin(m);p=Math.sin(p*m)/x,i=Math.sin(i*m)/x,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $h=class $h{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($g.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),x=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+p*m+d*_-h*x,this.y=s+p*x+h*m-c*_,this.z=l+p*_+c*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$h.prototype.isVector3=!0;let te=$h;const dd=new te,$g=new Fr,ep=class ep{constructor(e,i,s,l,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,p,m)}set(e,i,s,l,c,d,h,p,m){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=p,x[6]=s,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],x=s[4],_=s[7],g=s[2],M=s[5],T=s[8],C=l[0],S=l[3],y=l[6],D=l[1],I=l[4],N=l[7],V=l[2],O=l[5],F=l[8];return c[0]=d*C+h*D+p*V,c[3]=d*S+h*I+p*O,c[6]=d*y+h*N+p*F,c[1]=m*C+x*D+_*V,c[4]=m*S+x*I+_*O,c[7]=m*y+x*N+_*F,c[2]=g*C+M*D+T*V,c[5]=g*S+M*I+T*O,c[8]=g*y+M*N+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8];return i*d*x-i*h*m-s*c*x+s*h*p+l*c*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=x*d-h*m,g=h*p-x*c,M=m*c-d*p,T=i*_+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(l*m-x*s)*C,e[2]=(h*s-l*d)*C,e[3]=g*C,e[4]=(x*i-l*p)*C,e[5]=(l*c-h*i)*C,e[6]=M*C,e[7]=(s*p-m*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(hd.makeScale(e,i)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ep.prototype.isMatrix3=!0;let lt=ep;const hd=new lt,ev=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const o={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Dh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Dh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[kc]:{primaries:e,whitePoint:s,transfer:Xc,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Tt=US();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _r;class LS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{_r===void 0&&(_r=Wc("canvas")),_r.width=e.width,_r.height=e.height;const l=_r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=_r}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NS=0;class jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function pd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?LS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let OS=0;const md=new te;class Hn extends Fs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=va,l=va,c=zn,d=Os,h=Ni,p=fi,m=Hn.DEFAULT_ANISOTROPY,x=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Qo(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qd:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qd:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=a_;Hn.DEFAULT_ANISOTROPY=1;const tp=class tp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],x=p[4],_=p[8],g=p[1],M=p[5],T=p[9],C=p[2],S=p[6],y=p[10];if(Math.abs(x-g)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,N=(M+1)/2,V=(y+1)/2,O=(x+g)/4,F=(_+C)/4,b=(T+S)/4;return I>N&&I>V?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=O/s,c=F/s):N>V?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=O/l,c=b/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=F/c,l=b/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(g-x)*(g-x));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(_-C)/D,this.z=(g-x)/D,this.w=Math.acos((m+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tp.prototype.isVector4=!0;let on=tp;class PS extends Fs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Hn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends PS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class h_ extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,i,s,l,c,d,h,p,m,x,_,g,M,T,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,p,m,x,_,g,M,T,C,S)}set(e,i,s,l,c,d,h,p,m,x,_,g,M,T,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=h,y[13]=p,y[2]=m,y[6]=x,y[10]=_,y[14]=g,y[3]=M,y[7]=T,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),d=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*x,M=d*_,T=h*x,C=h*_;i[0]=p*x,i[4]=-p*_,i[8]=m,i[1]=M+T*m,i[5]=g-C*m,i[9]=-h*p,i[2]=C-g*m,i[6]=T+M*m,i[10]=d*p}else if(e.order==="YXZ"){const g=p*x,M=p*_,T=m*x,C=m*_;i[0]=g+C*h,i[4]=T*h-M,i[8]=d*m,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=M*h-T,i[6]=C+g*h,i[10]=d*p}else if(e.order==="ZXY"){const g=p*x,M=p*_,T=m*x,C=m*_;i[0]=g-C*h,i[4]=-d*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*x,i[9]=C-g*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const g=d*x,M=d*_,T=h*x,C=h*_;i[0]=p*x,i[4]=T*m-M,i[8]=g*m+C,i[1]=p*_,i[5]=C*m+g,i[9]=M*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const g=d*p,M=d*m,T=h*p,C=h*m;i[0]=p*x,i[4]=C-g*_,i[8]=T*_+M,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-m*x,i[6]=M*_+T,i[10]=g-C*_}else if(e.order==="XZY"){const g=d*p,M=d*m,T=h*p,C=h*m;i[0]=p*x,i[4]=-_,i[8]=m*x,i[1]=g*_+C,i[5]=d*x,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*x,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,FS)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),Qa.crossVectors(s,li),Qa.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Qa.crossVectors(s,li)),Qa.normalize(),fc.crossVectors(li,Qa),l[0]=Qa.x,l[4]=fc.x,l[8]=li.x,l[1]=Qa.y,l[5]=fc.y,l[9]=li.y,l[2]=Qa.z,l[6]=fc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],x=s[1],_=s[5],g=s[9],M=s[13],T=s[2],C=s[6],S=s[10],y=s[14],D=s[3],I=s[7],N=s[11],V=s[15],O=l[0],F=l[4],b=l[8],L=l[12],Z=l[1],G=l[5],q=l[9],le=l[13],ue=l[2],j=l[6],P=l[10],B=l[14],oe=l[3],me=l[7],Se=l[11],z=l[15];return c[0]=d*O+h*Z+p*ue+m*oe,c[4]=d*F+h*G+p*j+m*me,c[8]=d*b+h*q+p*P+m*Se,c[12]=d*L+h*le+p*B+m*z,c[1]=x*O+_*Z+g*ue+M*oe,c[5]=x*F+_*G+g*j+M*me,c[9]=x*b+_*q+g*P+M*Se,c[13]=x*L+_*le+g*B+M*z,c[2]=T*O+C*Z+S*ue+y*oe,c[6]=T*F+C*G+S*j+y*me,c[10]=T*b+C*q+S*P+y*Se,c[14]=T*L+C*le+S*B+y*z,c[3]=D*O+I*Z+N*ue+V*oe,c[7]=D*F+I*G+N*j+V*me,c[11]=D*b+I*q+N*P+V*Se,c[15]=D*L+I*le+N*B+V*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],x=e[2],_=e[6],g=e[10],M=e[14],T=e[3],C=e[7],S=e[11],y=e[15],D=p*M-m*g,I=h*M-m*_,N=h*g-p*_,V=d*M-m*x,O=d*g-p*x,F=d*_-h*x;return i*(C*D-S*I+y*N)-s*(T*D-S*V+y*O)+l*(T*I-C*V+y*F)-c*(T*N-C*O+S*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=e[9],g=e[10],M=e[11],T=e[12],C=e[13],S=e[14],y=e[15],D=i*h-s*d,I=i*p-l*d,N=i*m-c*d,V=s*p-l*h,O=s*m-c*h,F=l*m-c*p,b=x*C-_*T,L=x*S-g*T,Z=x*y-M*T,G=_*S-g*C,q=_*y-M*C,le=g*y-M*S,ue=D*le-I*q+N*G+V*Z-O*L+F*b;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ue;return e[0]=(h*le-p*q+m*G)*j,e[1]=(l*q-s*le-c*G)*j,e[2]=(C*F-S*O+y*V)*j,e[3]=(g*O-_*F-M*V)*j,e[4]=(p*Z-d*le-m*L)*j,e[5]=(i*le-l*Z+c*L)*j,e[6]=(S*N-T*F-y*I)*j,e[7]=(x*F-g*N+M*I)*j,e[8]=(d*q-h*Z+m*b)*j,e[9]=(s*Z-i*q-c*b)*j,e[10]=(T*O-C*N+y*D)*j,e[11]=(_*N-x*O-M*D)*j,e[12]=(h*L-d*G-p*b)*j,e[13]=(i*G-s*L+l*b)*j,e[14]=(C*I-T*V-S*D)*j,e[15]=(x*V-_*I+g*D)*j,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,p=e.z,m=c*d,x=c*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,x*h+s,x*p-l*d,0,m*p-l*h,x*p+l*d,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,x=d+d,_=h+h,g=c*m,M=c*x,T=c*_,C=d*x,S=d*_,y=h*_,D=p*m,I=p*x,N=p*_,V=s.x,O=s.y,F=s.z;return l[0]=(1-(C+y))*V,l[1]=(M+N)*V,l[2]=(T-I)*V,l[3]=0,l[4]=(M-N)*O,l[5]=(1-(g+y))*O,l[6]=(S+D)*O,l[7]=0,l[8]=(T+I)*F,l[9]=(S-D)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=xr.set(l[0],l[1],l[2]).length();const h=xr.set(l[4],l[5],l[6]).length(),p=xr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ci.copy(this);const m=1/d,x=1/h,_=1/p;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=x,Ci.elements[5]*=x,Ci.elements[6]*=x,Ci.elements[8]*=_,Ci.elements[9]*=_,Ci.elements[10]*=_,i.setFromRotationMatrix(Ci),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,l,c,d,h=ki,p=!1){const m=this.elements,x=2*c/(i-e),_=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(p)T=c/(d-c),C=d*c/(d-c);else if(h===ki)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Ko)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=ki,p=!1){const m=this.elements,x=2/(i-e),_=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(p)T=1/(d-c),C=d/(d-c);else if(h===ki)T=-2/(d-c),C=-(d+c)/(d-c);else if(h===Ko)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};jc.prototype.isMatrix4=!0;let ln=jc;const xr=new te,Ci=new ln,zS=new te(0,0,0),FS=new te(1,1,1),Qa=new te,fc=new te,li=new te,nv=new ln,iv=new Fr;class os{constructor(e=0,i=0,s=0,l=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],x=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BS=0;const av=new te,yr=new Fr,da=new ln,dc=new te,zo=new te,HS=new te,GS=new Fr,sv=new te(1,0,0),rv=new te(0,1,0),ov=new te(0,0,1),lv={type:"added"},VS={type:"removed"},Sr={type:"childadded",child:null},gd={type:"childremoved",child:null};class Un extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new te,i=new os,s=new Fr,l=new te(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new lt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(rv,e)}rotateZ(e){return this.rotateOnAxis(ov,e)}translateOnAxis(e,i){return av.copy(e).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(rv,e)}translateZ(e){return this.translateOnAxis(ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(zo,dc,this.up):da.lookAt(dc,zo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(da),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VS),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,HS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,GS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),_=d(e.shapes),g=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const p=[];for(const m in h){const x=h[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new te(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kS={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),y=this._getHandJoint(m,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=x.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&g>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kS)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Wo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},hc={h:0,s:0,l:0};function _d(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class At{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=DS(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=_d(d,c,e+1/3),this.g=_d(d,c,e),this.b=_d(d,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const s=m_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Tt.workingToColorSpace(In.copy(this),e),Math.round(Et(In.r*255,0,255))*65536+Math.round(Et(In.g*255,0,255))*256+Math.round(Et(In.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const x=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=x<=.5?_/(d+h):_/(2-d-h),d){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Mi){Tt.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(hc);const s=fd(Ja.h,hc.h,i),l=fd(Ja.s,hc.s,i),c=fd(Ja.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new At;At.NAMES=m_;class XS extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new te,ha=new te,xd=new te,pa=new te,Mr=new te,Er=new te,cv=new te,yd=new te,Sd=new te,Md=new te,Ed=new on,bd=new on,Td=new on;class Li{constructor(e=new te,i=new te,s=new te){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),ha.subVectors(s,i),xd.subVectors(e,i);const d=wi.dot(wi),h=wi.dot(ha),p=wi.dot(xd),m=ha.dot(ha),x=ha.dot(xd),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(m*p-h*x)*g,T=(d*x-h*p)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,d,h,p){return this.getBarycoord(e,i,s,l,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,pa.x),p.addScaledVector(d,pa.y),p.addScaledVector(h,pa.z),p)}static getInterpolatedAttribute(e,i,s,l,c,d){return Ed.setScalar(0),bd.setScalar(0),Td.setScalar(0),Ed.fromBufferAttribute(e,i),bd.fromBufferAttribute(e,s),Td.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ed,c.x),d.addScaledVector(bd,c.y),d.addScaledVector(Td,c.z),d}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),ha.subVectors(e,i),wi.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),wi.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Mr.subVectors(l,s),Er.subVectors(c,s),yd.subVectors(e,s);const p=Mr.dot(yd),m=Er.dot(yd);if(p<=0&&m<=0)return i.copy(s);Sd.subVectors(e,l);const x=Mr.dot(Sd),_=Er.dot(Sd);if(x>=0&&_<=x)return i.copy(l);const g=p*_-x*m;if(g<=0&&p>=0&&x<=0)return d=p/(p-x),i.copy(s).addScaledVector(Mr,d);Md.subVectors(e,c);const M=Mr.dot(Md),T=Er.dot(Md);if(T>=0&&M<=T)return i.copy(c);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(s).addScaledVector(Er,h);const S=x*T-M*_;if(S<=0&&_-x>=0&&M-T>=0)return cv.subVectors(c,l),h=(_-x)/(_-x+(M-T)),i.copy(l).addScaledVector(cv,h);const y=1/(S+C+g);return d=C*y,h=g*y,i.copy(s).addScaledVector(Mr,d).addScaledVector(Er,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jo{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),mc.subVectors(this.max,Fo),br.subVectors(e.a,Fo),Tr.subVectors(e.b,Fo),Ar.subVectors(e.c,Fo),$a.subVectors(Tr,br),es.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Rs.z,Rs.y,$a.z,0,-$a.x,es.z,0,-es.x,Rs.z,0,-Rs.x,-$a.y,$a.x,0,-es.y,es.x,0,-Rs.y,Rs.x,0];return!Ad(i,br,Tr,Ar,mc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,br,Tr,Ar,mc))?!1:(gc.crossVectors($a,es),i=[gc.x,gc.y,gc.z],Ad(i,br,Tr,Ar,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new te,new te,new te,new te,new te,new te,new te,new te],Di=new te,pc=new Jo,br=new te,Tr=new te,Ar=new te,$a=new te,es=new te,Rs=new te,Fo=new te,mc=new te,gc=new te,Cs=new te;function Ad(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Cs.fromArray(o,c);const h=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),p=e.dot(Cs),m=i.dot(Cs),x=s.dot(Cs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>h)return!1}return!0}const vn=new te,vc=new wt;let WS=0;class Zn extends Fs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Zg,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class g_ extends Zn{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class v_ extends Zn{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Gn extends Zn{constructor(e,i,s){super(new Float32Array(e),i,s)}}const jS=new Jo,Bo=new te,Rd=new te;class Yc{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):jS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Rd)),this.expandByPoint(Bo.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qS=0;const Si=new ln,Cd=new Un,Rr=new te,ci=new Jo,Ho=new Jo,En=new te;class Qn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AS(e)?v_:g_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new lt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Gn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ci.min,Ho.min),ci.expandByPoint(En),En.addVectors(ci.max,Ho.max),ci.expandByPoint(En)):(ci.expandByPoint(Ho.min),ci.expandByPoint(Ho.max))}ci.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,x=h.count;m<x;m++)En.fromBufferAttribute(h,m),p&&(Rr.fromBufferAttribute(e,m),En.add(Rr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let b=0;b<s.count;b++)h[b]=new te,p[b]=new te;const m=new te,x=new te,_=new te,g=new wt,M=new wt,T=new wt,C=new te,S=new te;function y(b,L,Z){m.fromBufferAttribute(s,b),x.fromBufferAttribute(s,L),_.fromBufferAttribute(s,Z),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,L),T.fromBufferAttribute(c,Z),x.sub(m),_.sub(m),M.sub(g),T.sub(g);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(G),S.copy(_).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(G),h[b].add(C),h[L].add(C),h[Z].add(C),p[b].add(S),p[L].add(S),p[Z].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let b=0,L=D.length;b<L;++b){const Z=D[b],G=Z.start,q=Z.count;for(let le=G,ue=G+q;le<ue;le+=3)y(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const I=new te,N=new te,V=new te,O=new te;function F(b){V.fromBufferAttribute(l,b),O.copy(V);const L=h[b];I.copy(L),I.sub(V.multiplyScalar(V.dot(L))).normalize(),N.crossVectors(O,L);const G=N.dot(p[b])<0?-1:1;d.setXYZW(b,I.x,I.y,I.z,G)}for(let b=0,L=D.length;b<L;++b){const Z=D[b],G=Z.start,q=Z.count;for(let le=G,ue=G+q;le<ue;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Zn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new te,c=new te,d=new te,h=new te,p=new te,m=new te,x=new te,_=new te;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),h.add(x),p.add(x),m.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,p){const m=h.array,x=h.itemSize,_=h.normalized,g=new m.constructor(p.length*x);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*x;for(let y=0;y<x;y++)g[T++]=m[M++]}return new Zn(g,x,_)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qn,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let x=0,_=m.length;x<_;x++){const g=m[x],M=e(g,s);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let _=0,g=m.length;_<g;_++){const M=m[_];x.push(M.toJSON(e.data))}x.length>0&&(l[p]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const x=l[m];this.setAttribute(m,x.clone(i))}const c=e.morphAttributes;for(const m in c){const x=[],_=c[m];for(let g=0,M=_.length;g<M;g++)x.push(_[g].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let YS=0;class Br extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Ur,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=kd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vd&&(s.blendSrc=this.blendSrc),this.blendDst!==kd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ga=new te,wd=new te,_c=new te,ts=new te,Dd=new te,xc=new te,Ud=new te;class __{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){wd.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(wd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(_c),h=ts.dot(this.direction),p=-ts.dot(_c),m=ts.lengthSq(),x=Math.abs(1-d*d);let _,g,M,T;if(x>0)if(_=d*p-h,g=d*h-p,T=c*x,_>=0)if(g>=-T)if(g<=T){const C=1/x;_*=C,g*=C,M=_*(_+d*g+2*h)+g*(d*_+g+2*p)+m}else g=c,_=Math.max(0,-(d*g+h)),M=-_*_+g*(g+2*p)+m;else g=-c,_=Math.max(0,-(d*g+h)),M=-_*_+g*(g+2*p)+m;else g<=-T?(_=Math.max(0,-(-d*c+h)),g=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+g*(g+2*p)+m):g<=T?(_=0,g=Math.min(Math.max(-c,-p),c),M=g*(g+2*p)+m):(_=Math.max(0,-(d*c+h)),g=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+g*(g+2*p)+m);else g=d>0?-c:c,_=Math.max(0,-(d*g+h)),M=-_*_+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(wd).addScaledVector(_c,g),M}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,p;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,l=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,l=(e.min.x-g.x)*m),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,s,l,c){Dd.subVectors(i,e),xc.subVectors(s,e),Ud.crossVectors(Dd,xc);let d=this.direction.dot(Ud),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ts.subVectors(this.origin,e);const p=h*this.direction.dot(xc.crossVectors(ts,xc));if(p<0)return null;const m=h*this.direction.dot(Dd.cross(ts));if(m<0||p+m>d)return null;const x=-h*ts.dot(Ud);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qh extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uv=new ln,ws=new __,yc=new Yc,fv=new te,Sc=new te,Mc=new te,Ec=new te,Ld=new te,bc=new te,dv=new te,Tc=new te;class bn extends Un{constructor(e=new Qn,i=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){bc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=h[p],_=c[p];x!==0&&(Ld.fromBufferAttribute(_,e),d?bc.addScaledVector(Ld,x):bc.addScaledVector(Ld.sub(i),x))}i.add(bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(yc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(yc,fv)===null||ws.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(uv.copy(c).invert(),ws.copy(e.ray).applyMatrix4(uv),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const S=g[T],y=d[S.materialIndex],D=Math.max(S.start,M.start),I=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=D,V=I;N<V;N+=3){const O=h.getX(N),F=h.getX(N+1),b=h.getX(N+2);l=Ac(this,y,e,s,m,x,_,O,F,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const D=h.getX(S),I=h.getX(S+1),N=h.getX(S+2);l=Ac(this,d,e,s,m,x,_,D,I,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const S=g[T],y=d[S.materialIndex],D=Math.max(S.start,M.start),I=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let N=D,V=I;N<V;N+=3){const O=N,F=N+1,b=N+2;l=Ac(this,y,e,s,m,x,_,O,F,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const D=S,I=S+1,N=S+2;l=Ac(this,d,e,s,m,x,_,D,I,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function ZS(o,e,i,s,l,c,d,h){let p;if(e.side===Kn?p=s.intersectTriangle(d,c,l,!0,h):p=s.intersectTriangle(l,c,d,e.side===rs,h),p===null)return null;Tc.copy(h),Tc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Tc);return m<i.near||m>i.far?null:{distance:m,point:Tc.clone(),object:o}}function Ac(o,e,i,s,l,c,d,h,p,m){o.getVertexPosition(h,Sc),o.getVertexPosition(p,Mc),o.getVertexPosition(m,Ec);const x=ZS(o,e,i,s,Sc,Mc,Ec,dv);if(x){const _=new te;Li.getBarycoord(dv,Sc,Mc,Ec,_),l&&(x.uv=Li.getInterpolatedAttribute(l,h,p,m,_,new wt)),c&&(x.uv1=Li.getInterpolatedAttribute(c,h,p,m,_,new wt)),d&&(x.normal=Li.getInterpolatedAttribute(d,h,p,m,_,new te),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new te,materialIndex:0};Li.getNormal(Sc,Mc,Ec,g.normal),x.face=g,x.barycoord=_}return x}class KS extends Hn{constructor(e=null,i=1,s=1,l,c,d,h,p,m=Dn,x=Dn,_,g){super(null,d,h,p,m,x,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new te,QS=new te,JS=new lt;class Us{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Nd.subVectors(s,i).cross(QS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Nd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||JS.getNormalMatrix(e),l=this.coplanarPoint(Nd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Yc,$S=new wt(.5,.5),Rc=new te;class Yh{constructor(e=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ki,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],x=c[4],_=c[5],g=c[6],M=c[7],T=c[8],C=c[9],S=c[10],y=c[11],D=c[12],I=c[13],N=c[14],V=c[15];if(l[0].setComponents(m-d,M-x,y-T,V-D).normalize(),l[1].setComponents(m+d,M+x,y+T,V+D).normalize(),l[2].setComponents(m+h,M+_,y+C,V+I).normalize(),l[3].setComponents(m-h,M-_,y-C,V-I).normalize(),s)l[4].setComponents(p,g,S,N).normalize(),l[5].setComponents(m-p,M-g,y-S,V-N).normalize();else if(l[4].setComponents(m-p,M-g,y-S,V-N).normalize(),i===ki)l[5].setComponents(m+p,M+g,y+S,V+N).normalize();else if(i===Ko)l[5].setComponents(p,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const i=$S.distanceTo(e.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lh extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hv=new ln,Nh=new __,Cc=new Yc,wc=new te;class pv extends Un{constructor(e=new Qn,i=new Lh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;hv.copy(l).invert(),Nh.copy(e.ray).applyMatrix4(hv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,_=s.attributes.position;if(m!==null){const g=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let T=g,C=M;T<C;T++){const S=m.getX(T);wc.fromBufferAttribute(_,S),mv(wc,S,p,l,e,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let T=g,C=M;T<C;T++)wc.fromBufferAttribute(_,T),mv(wc,T,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function mv(o,e,i,s,l,c,d){const h=Nh.distanceSqToPoint(o);if(h<i){const p=new te;Nh.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class x_ extends Hn{constructor(e=[],i=Is,s,l,c,d,h,p,m,x){super(e,i,s,l,c,d,h,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pr extends Hn{constructor(e,i,s=ji,l,c,d,h=Dn,p=Dn,m,x=Sa,_=1){if(x!==Sa&&x!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,d,h,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eM extends Pr{constructor(e,i=ji,s=Is,l,c,d=Dn,h=Dn,p,m=Sa){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class y_ extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends Qn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],x=[],_=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(_,2));function T(C,S,y,D,I,N,V,O,F,b,L){const Z=N/F,G=V/b,q=N/2,le=V/2,ue=O/2,j=F+1,P=b+1;let B=0,oe=0;const me=new te;for(let Se=0;Se<P;Se++){const z=Se*G-le;for(let Q=0;Q<j;Q++){const xe=Q*Z-q;me[C]=xe*D,me[S]=z*I,me[y]=ue,m.push(me.x,me.y,me.z),me[C]=0,me[S]=0,me[y]=O>0?1:-1,x.push(me.x,me.y,me.z),_.push(Q/F),_.push(1-Se/b),B+=1}}for(let Se=0;Se<b;Se++)for(let z=0;z<F;z++){const Q=g+z+j*Se,xe=g+z+j*(Se+1),Te=g+(z+1)+j*(Se+1),Ce=g+(z+1)+j*Se;p.push(Q,xe,Ce),p.push(xe,Te,Ce),oe+=6}h.addGroup(M,oe,L),M+=oe,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class is extends Qn{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const x=[],_=[],g=[],M=[];let T=0;const C=[],S=s/2;let y=0;D(),d===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(M,2));function D(){const N=new te,V=new te;let O=0;const F=(i-e)/s;for(let b=0;b<=c;b++){const L=[],Z=b/c,G=Z*(i-e)+e;for(let q=0;q<=l;q++){const le=q/l,ue=le*p+h,j=Math.sin(ue),P=Math.cos(ue);V.x=G*j,V.y=-Z*s+S,V.z=G*P,_.push(V.x,V.y,V.z),N.set(j,F,P).normalize(),g.push(N.x,N.y,N.z),M.push(le,1-Z),L.push(T++)}C.push(L)}for(let b=0;b<l;b++)for(let L=0;L<c;L++){const Z=C[L][b],G=C[L+1][b],q=C[L+1][b+1],le=C[L][b+1];(e>0||L!==0)&&(x.push(Z,G,le),O+=3),(i>0||L!==c-1)&&(x.push(G,q,le),O+=3)}m.addGroup(y,O,0),y+=O}function I(N){const V=T,O=new wt,F=new te;let b=0;const L=N===!0?e:i,Z=N===!0?1:-1;for(let q=1;q<=l;q++)_.push(0,S*Z,0),g.push(0,Z,0),M.push(.5,.5),T++;const G=T;for(let q=0;q<=l;q++){const ue=q/l*p+h,j=Math.cos(ue),P=Math.sin(ue);F.x=L*P,F.y=S*Z,F.z=L*j,_.push(F.x,F.y,F.z),g.push(0,Z,0),O.x=j*.5+.5,O.y=P*.5*Z+.5,M.push(O.x,O.y),T++}for(let q=0;q<l;q++){const le=V+q,ue=G+q;N===!0?x.push(ue,ue+1,le):x.push(ue+1,ue,le),b+=3}m.addGroup(y,b,N===!0?1:2),y+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ir extends Qn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,x=p+1,_=e/h,g=i/p,M=[],T=[],C=[],S=[];for(let y=0;y<x;y++){const D=y*g-d;for(let I=0;I<m;I++){const N=I*_-c;T.push(N,-D,0),C.push(0,0,1),S.push(I/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<h;D++){const I=D+m*y,N=D+m*(y+1),V=D+1+m*(y+1),O=D+1+m*y;M.push(I,N,O),M.push(N,V,O)}this.setIndex(M),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zh extends Qn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+h,Math.PI);let m=0;const x=[],_=new te,g=new te,M=[],T=[],C=[],S=[];for(let y=0;y<=s;y++){const D=[],I=y/s;let N=0;y===0&&d===0?N=.5/i:y===s&&p===Math.PI&&(N=-.5/i);for(let V=0;V<=i;V++){const O=V/i;_.x=-e*Math.cos(l+O*c)*Math.sin(d+I*h),_.y=e*Math.cos(d+I*h),_.z=e*Math.sin(l+O*c)*Math.sin(d+I*h),T.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),S.push(O+N,1-I),D.push(m++)}x.push(D)}for(let y=0;y<s;y++)for(let D=0;D<i;D++){const I=x[y][D+1],N=x[y][D],V=x[y+1][D],O=x[y+1][D+1];(y!==0||d>0)&&M.push(I,N,O),(y!==s-1||p<Math.PI)&&M.push(N,V,O)}this.setIndex(M),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function zr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(gv(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(gv(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const s=zr(o[i]);for(const l in s)e[l]=s[l]}return e}function gv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function tM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function S_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const nM={clone:zr,merge:Bn};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sM extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rM extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Go extends rM{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oM extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kh extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Od=new ln,vv=new te,_v=new te;class M_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;vv.setFromMatrixPosition(e.matrixWorld),i.position.copy(vv),_v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(_v),i.updateMatrixWorld(),Od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ko||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dc=new te,Uc=new Fr,Bi=new te;class E_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dc,Uc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Dc,Uc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new te,xv=new wt,yv=new wt;class ui extends E_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,xv,yv),i.subVectors(yv,xv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cM extends M_{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}}class Sv extends Kh{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new cM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Qh extends E_{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uM extends M_{constructor(){super(new Qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pd extends Kh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new uM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class fM extends Kh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cr=-90,wr=1;class dM extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Cr,wr,e,i);l.layers=this.layers,this.add(l);const c=new ui(Cr,wr,e,i);c.layers=this.layers,this.add(c);const d=new ui(Cr,wr,e,i);d.layers=this.layers,this.add(d);const h=new ui(Cr,wr,e,i);h.layers=this.layers,this.add(h);const p=new ui(Cr,wr,e,i);p.layers=this.layers,this.add(p);const m=new ui(Cr,wr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ko)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,x]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(_,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class hM extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const np=class np{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};np.prototype.isMatrix2=!0;let Mv=np;function Ev(o,e,i,s){const l=pM(s);switch(i){case c_:return o*e;case f_:return o*e/l.components*l.byteLength;case Gh:return o*e/l.components*l.byteLength;case zs:return o*e*2/l.components*l.byteLength;case Vh:return o*e*2/l.components*l.byteLength;case u_:return o*e*3/l.components*l.byteLength;case Ni:return o*e*4/l.components*l.byteLength;case kh:return o*e*4/l.components*l.byteLength;case Ic:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(o,16)*Math.max(e,8)/4;case $d:case th:return Math.max(o,8)*Math.max(e,8)/2;case ih:case ah:case rh:case oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case sh:case Gc:case lh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eh:case bh:case Th:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vc:case Ch:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pM(o){switch(o){case fi:case s_:return{byteLength:1,components:1};case Yo:case r_:case ya:return{byteLength:2,components:1};case Bh:case Hh:return{byteLength:2,components:4};case ji:case Fh:case Vi:return{byteLength:4,components:1};case o_:case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);function b_(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function mM(o){const e=new WeakMap;function i(h,p){const m=h.array,x=h.usage,_=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,x),h.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const x=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,x);else{_.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<_.length;M++){const T=_[g],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];o.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ub=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:gM,alphahash_pars_fragment:vM,alphamap_fragment:_M,alphamap_pars_fragment:xM,alphatest_fragment:yM,alphatest_pars_fragment:SM,aomap_fragment:MM,aomap_pars_fragment:EM,batching_pars_vertex:bM,batching_vertex:TM,begin_vertex:AM,beginnormal_vertex:RM,bsdfs:CM,iridescence_fragment:wM,bumpmap_pars_fragment:DM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:OM,color_fragment:PM,color_pars_fragment:IM,color_pars_vertex:zM,color_vertex:FM,common:BM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:GM,displacementmap_pars_vertex:VM,displacementmap_vertex:kM,emissivemap_fragment:XM,emissivemap_pars_fragment:WM,colorspace_fragment:jM,colorspace_pars_fragment:qM,envmap_fragment:YM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:KM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:lE,envmap_vertex:JM,fog_vertex:$M,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:aE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:rE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:fE,lights_phong_pars_fragment:dE,lights_physical_fragment:hE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:vE,lightprobes_pars_fragment:_E,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:bE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:CE,morphinstance_vertex:wE,morphcolor_vertex:DE,morphnormal_vertex:UE,morphtarget_pars_vertex:LE,morphtarget_vertex:NE,normal_fragment_begin:OE,normal_fragment_maps:PE,normal_pars_fragment:IE,normal_pars_vertex:zE,normal_vertex:FE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:kE,opaque_fragment:XE,packing:WE,premultiplied_alpha_fragment:jE,project_vertex:qE,dithering_fragment:YE,dithering_pars_fragment:ZE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:$E,shadowmap_vertex:eb,shadowmask_pars_fragment:tb,skinbase_vertex:nb,skinning_pars_vertex:ib,skinning_vertex:ab,skinnormal_vertex:sb,specularmap_fragment:rb,specularmap_pars_fragment:ob,tonemapping_fragment:lb,tonemapping_pars_fragment:cb,transmission_fragment:ub,transmission_pars_fragment:fb,uv_pars_fragment:db,uv_pars_vertex:hb,uv_vertex:pb,worldpos_vertex:mb,background_vert:gb,background_frag:vb,backgroundCube_vert:_b,backgroundCube_frag:xb,cube_vert:yb,cube_frag:Sb,depth_vert:Mb,depth_frag:Eb,distance_vert:bb,distance_frag:Tb,equirect_vert:Ab,equirect_frag:Rb,linedashed_vert:Cb,linedashed_frag:wb,meshbasic_vert:Db,meshbasic_frag:Ub,meshlambert_vert:Lb,meshlambert_frag:Nb,meshmatcap_vert:Ob,meshmatcap_frag:Pb,meshnormal_vert:Ib,meshnormal_frag:zb,meshphong_vert:Fb,meshphong_frag:Bb,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Vb,meshtoon_frag:kb,points_vert:Xb,points_frag:Wb,shadow_vert:jb,shadow_frag:qb,sprite_vert:Yb,sprite_frag:Zb},He={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Gi={basic:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Bn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Bn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Bn([He.points,He.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Bn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Bn([He.common,He.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Bn([He.sprite,He.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Bn([He.common,He.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Bn([He.lights,He.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Gi.physical={uniforms:Bn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Lc={r:0,b:0,g:0},Kb=new ln,T_=new lt;T_.set(-1,0,0,0,1,0,0,0,1);function Qb(o,e,i,s,l,c){const d=new At(0);let h=l===!0?0:1,p,m,x=null,_=0,g=null;function M(D){let I=D.isScene===!0?D.background:null;if(I&&I.isTexture){const N=D.backgroundBlurriness>0;I=e.get(I,N)}return I}function T(D){let I=!1;const N=M(D);N===null?S(d,h):N&&N.isColor&&(S(N,1),I=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,I){const N=M(I);N&&(N.isCubeTexture||N.mapping===qc)?(m===void 0&&(m=new bn(new $o(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:zr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(I.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(T_),m.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Xt,(x!==N||_!==N.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,x=N,_=N.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new bn(new Ir(2,2),new qi({name:"BackgroundMaterial",uniforms:zr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Xt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||_!==N.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,x=N,_=N.version,g=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,I){D.getRGB(Lc,S_(o)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,I,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,I=1){d.set(D),h=I,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,S(d,h)},render:T,addToRenderList:C,dispose:y}}function Jb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(G,q,le,ue,j){let P=!1;const B=_(G,ue,le,q);c!==B&&(c=B,m(c.object)),P=M(G,ue,le,j),P&&T(G,ue,le,j),j!==null&&e.update(j,o.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,N(G,q,le,ue),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function p(){return o.createVertexArray()}function m(G){return o.bindVertexArray(G)}function x(G){return o.deleteVertexArray(G)}function _(G,q,le,ue){const j=ue.wireframe===!0;let P=s[q.id];P===void 0&&(P={},s[q.id]=P);const B=G.isInstancedMesh===!0?G.id:0;let oe=P[B];oe===void 0&&(oe={},P[B]=oe);let me=oe[le.id];me===void 0&&(me={},oe[le.id]=me);let Se=me[j];return Se===void 0&&(Se=g(p()),me[j]=Se),Se}function g(G){const q=[],le=[],ue=[];for(let j=0;j<i;j++)q[j]=0,le[j]=0,ue[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:ue,object:G,attributes:{},index:null}}function M(G,q,le,ue){const j=c.attributes,P=q.attributes;let B=0;const oe=le.getAttributes();for(const me in oe)if(oe[me].location>=0){const z=j[me];let Q=P[me];if(Q===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),z===void 0||z.attribute!==Q||Q&&z.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==ue}function T(G,q,le,ue){const j={},P=q.attributes;let B=0;const oe=le.getAttributes();for(const me in oe)if(oe[me].location>=0){let z=P[me];z===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(z=G.instanceColor));const Q={};Q.attribute=z,z&&z.data&&(Q.data=z.data),j[me]=Q,B++}c.attributes=j,c.attributesNum=B,c.index=ue}function C(){const G=c.newAttributes;for(let q=0,le=G.length;q<le;q++)G[q]=0}function S(G){y(G,0)}function y(G,q){const le=c.newAttributes,ue=c.enabledAttributes,j=c.attributeDivisors;le[G]=1,ue[G]===0&&(o.enableVertexAttribArray(G),ue[G]=1),j[G]!==q&&(o.vertexAttribDivisor(G,q),j[G]=q)}function D(){const G=c.newAttributes,q=c.enabledAttributes;for(let le=0,ue=q.length;le<ue;le++)q[le]!==G[le]&&(o.disableVertexAttribArray(le),q[le]=0)}function I(G,q,le,ue,j,P,B){B===!0?o.vertexAttribIPointer(G,q,le,j,P):o.vertexAttribPointer(G,q,le,ue,j,P)}function N(G,q,le,ue){C();const j=ue.attributes,P=le.getAttributes(),B=q.defaultAttributeValues;for(const oe in P){const me=P[oe];if(me.location>=0){let Se=j[oe];if(Se===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const z=Se.normalized,Q=Se.itemSize,xe=e.get(Se);if(xe===void 0)continue;const Te=xe.buffer,Ce=xe.type,ae=xe.bytesPerElement,ye=Ce===o.INT||Ce===o.UNSIGNED_INT||Se.gpuType===Fh;if(Se.isInterleavedBufferAttribute){const be=Se.data,ze=be.stride,$e=Se.offset;if(be.isInstancedInterleavedBuffer){for(let Ke=0;Ke<me.locationSize;Ke++)y(me.location+Ke,be.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ke=0;Ke<me.locationSize;Ke++)S(me.location+Ke);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let Ke=0;Ke<me.locationSize;Ke++)I(me.location+Ke,Q/me.locationSize,Ce,z,ze*ae,($e+Q/me.locationSize*Ke)*ae,ye)}else{if(Se.isInstancedBufferAttribute){for(let be=0;be<me.locationSize;be++)y(me.location+be,Se.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let be=0;be<me.locationSize;be++)S(me.location+be);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let be=0;be<me.locationSize;be++)I(me.location+be,Q/me.locationSize,Ce,z,Q*ae,Q/me.locationSize*be*ae,ye)}}else if(B!==void 0){const z=B[oe];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(me.location,z);break;case 3:o.vertexAttrib3fv(me.location,z);break;case 4:o.vertexAttrib4fv(me.location,z);break;default:o.vertexAttrib1fv(me.location,z)}}}}D()}function V(){L();for(const G in s){const q=s[G];for(const le in q){const ue=q[le];for(const j in ue){const P=ue[j];for(const B in P)x(P[B].object),delete P[B];delete ue[j]}}delete s[G]}}function O(G){if(s[G.id]===void 0)return;const q=s[G.id];for(const le in q){const ue=q[le];for(const j in ue){const P=ue[j];for(const B in P)x(P[B].object),delete P[B];delete ue[j]}}delete s[G.id]}function F(G){for(const q in s){const le=s[q];for(const ue in le){const j=le[ue];if(j[G.id]===void 0)continue;const P=j[G.id];for(const B in P)x(P[B].object),delete P[B];delete j[G.id]}}}function b(G){for(const q in s){const le=s[q],ue=G.isInstancedMesh===!0?G.id:0,j=le[ue];if(j!==void 0){for(const P in j){const B=j[P];for(const oe in B)x(B[oe].object),delete B[oe];delete j[P]}delete le[ue],Object.keys(le).length===0&&delete s[q]}}}function L(){Z(),d=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:Z,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:D}}function $b(o,e,i){let s;function l(p){s=p}function c(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,x){x!==0&&(o.drawArraysInstanced(s,p,m,x),i.update(m,s,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let g=0;for(let M=0;M<x;M++)g+=m[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function e1(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ni&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const b=F===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==fi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!b)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=p(m);x!==m&&(it("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:N,maxSamples:V,samples:O}}function t1(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Us,h=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||s!==0||l;return l=g,s=_.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,M){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!l||T===null||T.length===0||c&&!S)c?x(null):m();else{const D=c?0:s,I=D*4;let N=y.clippingState||null;p.value=N,N=x(T,g,I,M);for(let V=0;V!==I;++V)N[V]=i[V];y.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(_,g,M,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const y=M+C*4,D=g.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let I=0,N=M;I!==C;++I,N+=4)d.copy(_[I]).applyMatrix4(D,h),d.normal.toArray(S,N),S[N+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const ss=4,bv=[.125,.215,.35,.446,.526,.582],Ns=20,n1=256,Vo=new Qh,Tv=new At;let Id=null,zd=0,Fd=0,Bd=!1;const i1=new te;class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=i1}=c;Id=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,zd,Fd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ya,format:Ni,colorSpace:kc,depthBuffer:!1},l=Rv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a1(c)),this._blurMaterial=r1(c,e,i),this._ggxMaterial=s1(c,e,i)}return l}_compileMaterial(e){const i=new bn(new Qn,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,s,l,c){const p=new ui(90,1,i,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(Tv),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new $o,new qh({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,y=!0):(S.color.copy(Tv),y=!0);for(let I=0;I<6;I++){const N=I%3;N===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[I],c.y,c.z)):N===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[I]));const V=this._cubeSize;Dr(l,N*V,I>2?V:0,V,V),_.setRenderTarget(l),y&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=g,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Dr(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Vo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-x*x),g=0+m*1.25,M=_*g,{_lodMax:T}=this,C=this._sizeLods[s],S=3*C*(s>T-ss?s-T+ss:0),y=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-i,Dr(c,S,y,3*C,2*C),l.setRenderTarget(c),l.render(h,Vo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-s,Dr(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(h,Vo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=m;const g=m.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ns-1),C=c/T,S=isFinite(c)?1+Math.floor(x*C):Ns;S>Ns&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ns}`);const y=[];let D=0;for(let F=0;F<Ns;++F){const b=F/C,L=Math.exp(-b*b/2);y.push(L),F===0?D+=L:F<S&&(D+=2*L)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:I}=this;g.dTheta.value=T,g.mipInt.value=I-s;const N=this._sizeLods[l],V=3*N*(l>I-ss?l-I+ss:0),O=4*(this._cubeSize-N);Dr(i,V,O,3*N,2*N),p.setRenderTarget(i),p.render(_,Vo)}}function a1(o){const e=[],i=[],s=[];let l=o;const c=o-ss+1+bv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let p=1/h;d>o-ss?p=bv[d-o+ss-1]:d===0&&(p=0),i.push(p);const m=1/(h-2),x=-m,_=1+m,g=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,T=6,C=3,S=2,y=1,D=new Float32Array(C*T*M),I=new Float32Array(S*T*M),N=new Float32Array(y*T*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,b=O>2?0:-1,L=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];D.set(L,C*T*O),I.set(g,S*T*O);const Z=[O,O,O,O,O,O];N.set(Z,y*T*O)}const V=new Qn;V.setAttribute("position",new Zn(D,C)),V.setAttribute("uv",new Zn(I,S)),V.setAttribute("faceIndex",new Zn(N,y)),s.push(new bn(V,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Rv(o,e,i){const s=new Wi(o,e,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function s1(o,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function r1(o,e,i){const s=new Float32Array(Ns),l=new te(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Cv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function wv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class A_ extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new x_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $o(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:_a});c.uniforms.tEquirect.value=i;const d=new bn(l,c),h=i.minFilter;return i.minFilter===Os&&(i.minFilter=zn),new dM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function o1(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===od||M===ld)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new A_(T.height);return C.fromEquirectangularTexture(o,g),e.set(g,C),g.addEventListener("dispose",m),h(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,T=M===od||M===ld,C=M===Is||M===Or;if(T||C){let S=i.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new Av(o)),S=T?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return T&&D&&D.height>0||C&&D&&p(D)?(s===null&&(s=new Av(o)),S=T?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",x),S.texture):null}}}return g}function h(g,M){return M===od?g.mapping=Is:M===ld&&(g.mapping=Or),g}function p(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function m(g){const M=g.target;M.removeEventListener("dispose",m);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function l1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Dh("WebGLRenderer: "+s+" extension not supported."),l}}}function c1(o,e,i,s){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function p(_){const g=_.attributes;for(const M in g)e.update(g[M],o.ARRAY_BUFFER)}function m(_){const g=[],M=_.index,T=_.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let I=0,N=D.length;I<N;I+=3){const V=D[I+0],O=D[I+1],F=D[I+2];g.push(V,O,O,F,F,V)}}else{const D=T.array;C=T.version;for(let I=0,N=D.length/3-1;I<N;I+=3){const V=I+0,O=I+1,F=I+2;g.push(V,O,O,F,F,V)}}const S=new(T.count>=65535?v_:g_)(g,1);S.version=C;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function x(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:x}}function u1(o,e,i){let s;function l(_){s=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function p(_,g){o.drawElements(s,g,c,_*d),i.update(g,s,1)}function m(_,g,M){M!==0&&(o.drawElementsInstanced(s,g,c,_*d,M),i.update(g,s,M))}function x(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function f1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Ct("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function d1(o,e,i){const s=new WeakMap,l=new on;function c(d,h,p){const m=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let Z=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",Z)};var M=Z;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),S===!0&&(N=3);let V=h.attributes.position.count*N,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*O*4*_),b=new h_(F,V,O,_);b.type=Vi,b.needsUpdate=!0;const L=N*4;for(let G=0;G<_;G++){const q=y[G],le=D[G],ue=I[G],j=V*O*4*G;for(let P=0;P<q.count;P++){const B=P*L;T===!0&&(l.fromBufferAttribute(q,P),F[j+B+0]=l.x,F[j+B+1]=l.y,F[j+B+2]=l.z,F[j+B+3]=0),C===!0&&(l.fromBufferAttribute(le,P),F[j+B+4]=l.x,F[j+B+5]=l.y,F[j+B+6]=l.z,F[j+B+7]=0),S===!0&&(l.fromBufferAttribute(ue,P),F[j+B+8]=l.x,F[j+B+9]=l.y,F[j+B+10]=l.z,F[j+B+11]=ue.itemSize===4?l.w:1)}}g={count:_,texture:b,size:new wt(V,O)},s.set(h,g),h.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function h1(o,e,i,s,l){let c=new WeakMap;function d(m){const x=l.render.frame,_=m.geometry,g=e.get(m,_);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==x&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,x))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return g}function h(){c=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const p1={[Qv]:"LINEAR_TONE_MAPPING",[Jv]:"REINHARD_TONE_MAPPING",[$v]:"CINEON_TONE_MAPPING",[e_]:"ACES_FILMIC_TONE_MAPPING",[n_]:"AGX_TONE_MAPPING",[i_]:"NEUTRAL_TONE_MAPPING",[t_]:"CUSTOM_TONE_MAPPING"};function m1(o,e,i,s,l){const c=new Wi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Pr(e,i):void 0}),d=new Wi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),h=new Qn;h.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const p=new sM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new bn(h,p),x=new Qh(-1,1,1,-1,0,1);let _=null,g=null,M=!1,T,C=null,S=[],y=!1;this.setSize=function(D,I){c.setSize(D,I),d.setSize(D,I);for(let N=0;N<S.length;N++){const V=S[N];V.setSize&&V.setSize(D,I)}},this.setEffects=function(D){S=D,y=S.length>0&&S[0].isRenderPass===!0;const I=c.width,N=c.height;for(let V=0;V<S.length;V++){const O=S[V];O.setSize&&O.setSize(I,N)}},this.begin=function(D,I){if(M||D.toneMapping===Xi&&S.length===0)return!1;if(C=I,I!==null){const N=I.width,V=I.height;(c.width!==N||c.height!==V)&&this.setSize(N,V)}return y===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(D,I){D.toneMapping=T,M=!0;let N=c,V=d;for(let O=0;O<S.length;O++){const F=S[O];if(F.enabled!==!1&&(F.render(D,V,N,I),F.needsSwap!==!1)){const b=N;N=V,V=b}}if(_!==D.outputColorSpace||g!==D.toneMapping){_=D.outputColorSpace,g=D.toneMapping,p.defines={},Tt.getTransfer(_)===Xt&&(p.defines.SRGB_TRANSFER="");const O=p1[g];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(m,x),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),p.dispose()}}const R_=new Hn,Oh=new Pr(1,1),C_=new h_,w_=new IS,D_=new x_,Dv=[],Uv=[],Lv=new Float32Array(16),Nv=new Float32Array(9),Ov=new Float32Array(4);function Hr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=Dv[l];if(c===void 0&&(c=new Float32Array(l),Dv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function yn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Kc(o,e){let i=Uv[e];i===void 0&&(i=new Int32Array(e),Uv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function g1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function v1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function y1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;Ov.set(s),o.uniformMatrix2fv(this.addr,!1,Ov),Sn(i,s)}}function S1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;Nv.set(s),o.uniformMatrix3fv(this.addr,!1,Nv),Sn(i,s)}}function M1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(yn(i,s))return;Lv.set(s),o.uniformMatrix4fv(this.addr,!1,Lv),Sn(i,s)}}function E1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function R1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function C1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function w1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function D1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function U1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Oh.compareFunction=i.isReversedDepthBuffer()?Wh:Xh,c=Oh):c=R_,i.setTexture2D(e||c,l)}function L1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||w_,l)}function N1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||D_,l)}function O1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||C_,l)}function P1(o){switch(o){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return x1;case 35674:return y1;case 35675:return S1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return w1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return O1}}function I1(o,e){o.uniform1fv(this.addr,e)}function z1(o,e){const i=Hr(e,this.size,2);o.uniform2fv(this.addr,i)}function F1(o,e){const i=Hr(e,this.size,3);o.uniform3fv(this.addr,i)}function B1(o,e){const i=Hr(e,this.size,4);o.uniform4fv(this.addr,i)}function H1(o,e){const i=Hr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function G1(o,e){const i=Hr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function V1(o,e){const i=Hr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function k1(o,e){o.uniform1iv(this.addr,e)}function X1(o,e){o.uniform2iv(this.addr,e)}function W1(o,e){o.uniform3iv(this.addr,e)}function j1(o,e){o.uniform4iv(this.addr,e)}function q1(o,e){o.uniform1uiv(this.addr,e)}function Y1(o,e){o.uniform2uiv(this.addr,e)}function Z1(o,e){o.uniform3uiv(this.addr,e)}function K1(o,e){o.uniform4uiv(this.addr,e)}function Q1(o,e,i){const s=this.cache,l=e.length,c=Kc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Oh:d=R_;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function J1(o,e,i){const s=this.cache,l=e.length,c=Kc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||w_,c[d])}function $1(o,e,i){const s=this.cache,l=e.length,c=Kc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||D_,c[d])}function eT(o,e,i){const s=this.cache,l=e.length,c=Kc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||C_,c[d])}function tT(o){switch(o){case 5126:return I1;case 35664:return z1;case 35665:return F1;case 35666:return B1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return X1;case 35668:case 35672:return W1;case 35669:case 35673:return j1;case 5125:return q1;case 36294:return Y1;case 36295:return Z1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return eT}}class nT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=P1(i.type)}}class iT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tT(i.type)}}class aT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function Pv(o,e){o.seq.push(e),o.map[e.id]=e}function sT(o,e,i){const s=o.name,l=s.length;for(Hd.lastIndex=0;;){const c=Hd.exec(s),d=Hd.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){Pv(i,m===void 0?new nT(h,o,e):new iT(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new aT(h),Pv(i,_)),i=_}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);sT(h,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Iv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const rT=37297;let oT=0;function lT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const zv=new lt;function cT(o){Tt._getMatrix(zv,Tt.workingColorSpace,o);const e=`mat3( ${zv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Xc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Fv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+lT(o.getShaderSource(e),h)}else return c}function uT(o,e){const i=cT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fT={[Qv]:"Linear",[Jv]:"Reinhard",[$v]:"Cineon",[e_]:"ACESFilmic",[n_]:"AgX",[i_]:"Neutral",[t_]:"Custom"};function dT(o,e){const i=fT[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new te;function hT(){Tt.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function mT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function gT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function jo(o){return o!==""}function Bv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(o){return o.replace(vT,xT)}const _T=new Map;function xT(o,e){let i=mt[e];if(i===void 0){const s=_T.get(e);if(s!==void 0)i=mt[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ph(i)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(o){return o.replace(yT,ST)}function ST(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Vv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const MT={[Pc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function ET(o){return MT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bT={[Is]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function TT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":bT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const AT={[Or]:"ENVMAP_MODE_REFRACTION"};function RT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":AT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CT={[Kv]:"ENVMAP_BLENDING_MULTIPLY",[mS]:"ENVMAP_BLENDING_MIX",[gS]:"ENVMAP_BLENDING_ADD"};function wT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":CT[o.combine]||"ENVMAP_BLENDING_NONE"}function DT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function UT(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=ET(i),m=TT(i),x=RT(i),_=wT(i),g=DT(i),M=pT(i),T=mT(c),C=l.createProgram();let S,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),y.length>0&&(y+=`
`)):(S=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),y=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?mt.tonemapping_pars_fragment:"",i.toneMapping!==Xi?dT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,uT("linearToOutputTexel",i.outputColorSpace),hT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Ph(d),d=Bv(d,i),d=Hv(d,i),h=Ph(h),h=Bv(h,i),h=Hv(h,i),d=Gv(d),h=Gv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=D+S+d,N=D+y+h,V=Iv(l,l.VERTEX_SHADER,I),O=Iv(l,l.FRAGMENT_SHADER,N);l.attachShader(C,V),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(G){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",le=l.getShaderInfoLog(V)||"",ue=l.getShaderInfoLog(O)||"",j=q.trim(),P=le.trim(),B=ue.trim();let oe=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(oe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,O);else{const Se=Fv(l,V,"vertex"),z=Fv(l,O,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+Se+`
`+z)}else j!==""?it("WebGLProgram: Program Info Log:",j):(P===""||B==="")&&(me=!1);me&&(G.diagnostics={runnable:oe,programLog:j,vertexShader:{log:P,prefix:S},fragmentShader:{log:B,prefix:y}})}l.deleteShader(V),l.deleteShader(O),b=new Hc(l,C),L=gT(l,C)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(C,rT)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=O,this}let LT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new OT(e),i.set(e,s)),s}}class OT{constructor(e){this.id=LT++,this.code=e,this.usedTimes=0}}function PT(o){return o===zs||o===Gc||o===Vc}function IT(o,e,i,s,l,c){const d=new p_,h=new NT,p=new Set,m=[],x=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function C(b,L,Z,G,q,le){const ue=G.fog,j=q.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,oe=e.get(b.envMap||P,B),me=oe&&oe.mapping===qc?oe.image.height:null,Se=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&it("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const z=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Q=z!==void 0?z.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let Te,Ce,ae,ye;if(Se){const tt=Gi[Se];Te=tt.vertexShader,Ce=tt.fragmentShader}else Te=b.vertexShader,Ce=b.fragmentShader,h.update(b),ae=h.getVertexShaderID(b),ye=h.getFragmentShaderID(b);const be=o.getRenderTarget(),ze=o.state.buffers.depth.getReversed(),$e=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,It=!!b.map,ct=!!b.matcap,gt=!!oe,pt=!!b.aoMap,at=!!b.lightMap,Jt=!!b.bumpMap,Ft=!!b.normalMap,nt=!!b.displacementMap,k=!!b.emissiveMap,Rt=!!b.metalnessMap,dt=!!b.roughnessMap,Dt=b.anisotropy>0,Re=b.clearcoat>0,$t=b.dispersion>0,w=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,ve=Dt&&!!b.anisotropyMap,Ee=Re&&!!b.clearcoatMap,we=Re&&!!b.clearcoatNormalMap,Ne=Re&&!!b.clearcoatRoughnessMap,fe=w&&!!b.iridescenceMap,de=w&&!!b.iridescenceThicknessMap,Oe=E&&!!b.sheenColorMap,Pe=E&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,De=!!b.specularColorMap,st=!!b.specularIntensityMap,rt=J&&!!b.transmissionMap,vt=J&&!!b.thicknessMap,X=!!b.gradientMap,Ae=!!b.alphaMap,pe=b.alphaTest>0,Be=!!b.alphaHash,Le=!!b.extensions;let Me=Xi;b.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=o.toneMapping);const qe={shaderID:Se,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:Ce,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:$e,instancingColor:$e&&q.instanceColor!==null,instancingMorph:$e&&q.morphTexture!==null,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:ct,envMap:gt,envMapMode:gt&&oe.mapping,envMapCubeUVHeight:me,aoMap:pt,lightMap:at,bumpMap:Jt,normalMap:Ft,displacementMap:nt,emissiveMap:k,normalMapObjectSpace:Ft&&b.normalMapType===xS,normalMapTangentSpace:Ft&&b.normalMapType===wh,packedNormalMap:Ft&&b.normalMapType===wh&&PT(b.normalMap.format),metalnessMap:Rt,roughnessMap:dt,anisotropy:Dt,anisotropyMap:ve,clearcoat:Re,clearcoatMap:Ee,clearcoatNormalMap:we,clearcoatRoughnessMap:Ne,dispersion:$t,iridescence:w,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:De,specularIntensityMap:st,transmission:J,transmissionMap:rt,thicknessMap:vt,gradientMap:X,opaque:b.transparent===!1&&b.blending===Ur&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:Be,combine:b.combine,mapUv:It&&T(b.map.channel),aoMapUv:pt&&T(b.aoMap.channel),lightMapUv:at&&T(b.lightMap.channel),bumpMapUv:Jt&&T(b.bumpMap.channel),normalMapUv:Ft&&T(b.normalMap.channel),displacementMapUv:nt&&T(b.displacementMap.channel),emissiveMapUv:k&&T(b.emissiveMap.channel),metalnessMapUv:Rt&&T(b.metalnessMap.channel),roughnessMapUv:dt&&T(b.roughnessMap.channel),anisotropyMapUv:ve&&T(b.anisotropyMap.channel),clearcoatMapUv:Ee&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(b.sheenRoughnessMap.channel),specularMapUv:Ue&&T(b.specularMap.channel),specularColorMapUv:De&&T(b.specularColorMap.channel),specularIntensityMapUv:st&&T(b.specularIntensityMap.channel),transmissionMapUv:rt&&T(b.transmissionMap.channel),thicknessMapUv:vt&&T(b.thicknessMap.channel),alphaMapUv:Ae&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ft||Dt),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(It||Ae),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&Ft===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ze,skinning:q.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Me,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:k&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ui,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qe.vertexUv1s=p.has(1),qe.vertexUv2s=p.has(2),qe.vertexUv3s=p.has(3),p.clear(),qe}function S(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Z in b.defines)L.push(Z),L.push(b.defines[Z]);return b.isRawShaderMaterial===!1&&(y(L,b),D(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function D(b,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),b.push(d.mask)}function I(b){const L=M[b.type];let Z;if(L){const G=Gi[L];Z=nM.clone(G.uniforms)}else Z=b.uniforms;return Z}function N(b,L){let Z=x.get(L);return Z!==void 0?++Z.usedTimes:(Z=new UT(o,L,b,l),m.push(Z),x.set(L,Z)),Z}function V(b){if(--b.usedTimes===0){const L=m.indexOf(b);m[L]=m[m.length-1],m.pop(),x.delete(b.cacheKey),b.destroy()}}function O(b){h.remove(b)}function F(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:N,releaseProgram:V,releaseShaderCache:O,programs:m,dispose:F}}function zT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function FT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function kv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Xv(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,T,C,S,y){let D=o[e];return D===void 0?(D={id:g.id,object:g,geometry:M,material:T,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:y},o[e]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=T,D.materialVariant=d(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=S,D.group=y),e++,D}function p(g,M,T,C,S,y){const D=h(g,M,T,C,S,y);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function m(g,M,T,C,S,y){const D=h(g,M,T,C,S,y);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function x(g,M){i.length>1&&i.sort(g||FT),s.length>1&&s.sort(M||kv),l.length>1&&l.sort(M||kv)}function _(){for(let g=e,M=o.length;g<M;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:_,sort:x}}function BT(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new Xv,o.set(s,[d])):l>=c.length?(d=new Xv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function HT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new At};break;case"SpotLight":i={position:new te,direction:new te,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new te,halfWidth:new te,halfHeight:new te};break}return o[e.id]=i,i}}}function GT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let VT=0;function kT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function XT(o){const e=new HT,i=GT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new te);const l=new te,c=new ln,d=new ln;function h(m){let x=0,_=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,T=0,C=0,S=0,y=0,D=0,I=0,N=0,V=0,O=0,F=0;m.sort(kT);for(let L=0,Z=m.length;L<Z;L++){const G=m[L],q=G.color,le=G.intensity,ue=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===zs?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=q.r*le,_+=q.g*le,g+=q.b*le;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],le);F++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,oe=i.get(G);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,s.directionalShadow[M]=oe,s.directionalShadowMap[M]=j,s.directionalShadowMatrix[M]=G.shadow.matrix,D++}s.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(q).multiplyScalar(le),P.distance=ue,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[C]=P;const B=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,B.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[C]=B.matrix,G.castShadow){const oe=i.get(G);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,s.spotShadow[C]=oe,s.spotShadowMap[C]=j,N++}C++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(q).multiplyScalar(le),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=P,S++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const B=G.shadow,oe=i.get(G);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,oe.shadowCameraNear=B.camera.near,oe.shadowCameraFar=B.camera.far,s.pointShadow[T]=oe,s.pointShadowMap[T]=j,s.pointShadowMatrix[T]=G.shadow.matrix,I++}s.point[T]=P,T++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(le),P.groundColor.copy(G.groundColor).multiplyScalar(le),s.hemi[y]=P,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==S||b.hemiLength!==y||b.numDirectionalShadows!==D||b.numPointShadows!==I||b.numSpotShadows!==N||b.numSpotMaps!==V||b.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=S,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=N+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=S,b.hemiLength=y,b.numDirectionalShadows=D,b.numPointShadows=I,b.numSpotShadows=N,b.numSpotMaps=V,b.numLightProbes=F,s.version=VT++)}function p(m,x){let _=0,g=0,M=0,T=0,C=0;const S=x.matrixWorldInverse;for(let y=0,D=m.length;y<D;y++){const I=m[y];if(I.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),_++}else if(I.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(S),C++}}}return{setup:h,setupView:p,state:s}}function Wv(o){const e=new XT(o),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function p(g){l.push(g)}function m(){e.setup(i)}function x(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function WT(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Wv(o),e.set(l,[h])):c>=d.length?(h=new Wv(o),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YT=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],ZT=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],jv=new ln,ko=new te,Gd=new te;function KT(o,e,i){let s=new Yh;const l=new wt,c=new wt,d=new on,h=new oM,p=new lM,m={},x=i.maxTextureSize,_={[rs]:Kn,[Kn]:rs,[Ui]:Ui},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:jT,fragmentShader:qT}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Qn;T.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new bn(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let y=this.type;this.render=function(O,F,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===Ky&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const L=o.getRenderTarget(),Z=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),q=o.state;q.setBlending(_a),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const le=y!==this.type;le&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(j=>j.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,j=O.length;ue<j;ue++){const P=O[ue],B=P.shadow;if(B===void 0){it("WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const oe=B.getFrameExtents();l.multiply(oe),c.copy(B.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/oe.x),l.x=c.x*oe.x,B.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/oe.y),l.y=c.y*oe.y,B.mapSize.y=c.y));const me=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||le===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Xo){if(P.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Wi(l.x,l.y,{format:zs,type:ya,minFilter:zn,magFilter:zn,generateMipmaps:!1}),B.map.texture.name=P.name+".shadowMap",B.map.depthTexture=new Pr(l.x,l.y,Vi),B.map.depthTexture.name=P.name+".shadowMapDepth",B.map.depthTexture.format=Sa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn}else P.isPointLight?(B.map=new A_(l.x),B.map.depthTexture=new eM(l.x,ji)):(B.map=new Wi(l.x,l.y),B.map.depthTexture=new Pr(l.x,l.y,ji)),B.map.depthTexture.name=P.name+".shadowMap",B.map.depthTexture.format=Sa,this.type===Pc?(B.map.depthTexture.compareFunction=me?Wh:Xh,B.map.depthTexture.minFilter=zn,B.map.depthTexture.magFilter=zn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn);B.camera.updateProjectionMatrix()}const Se=B.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Se;z++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,z),o.clear();else{z===0&&(o.setRenderTarget(B.map),o.clear());const Q=B.getViewport(z);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),q.viewport(d)}if(P.isPointLight){const Q=B.camera,xe=B.matrix,Te=P.distance||Q.far;Te!==Q.far&&(Q.far=Te,Q.updateProjectionMatrix()),ko.setFromMatrixPosition(P.matrixWorld),Q.position.copy(ko),Gd.copy(Q.position),Gd.add(YT[z]),Q.up.copy(ZT[z]),Q.lookAt(Gd),Q.updateMatrixWorld(),xe.makeTranslation(-ko.x,-ko.y,-ko.z),jv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(jv,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(P);s=B.getFrustum(),N(F,b,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===Xo&&D(B,b),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(L,Z,G)};function D(O,F){const b=e.update(C);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Wi(l.x,l.y,{format:zs,type:ya})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(F,null,b,g,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(F,null,b,M,C,null)}function I(O,F,b,L){let Z=null;const G=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)Z=G;else if(Z=b.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=Z.uuid,le=F.uuid;let ue=m[q];ue===void 0&&(ue={},m[q]=ue);let j=ue[le];j===void 0&&(j=Z.clone(),ue[le]=j,F.addEventListener("dispose",V)),Z=j}if(Z.visible=F.visible,Z.wireframe=F.wireframe,L===Xo?Z.side=F.shadowSide!==null?F.shadowSide:F.side:Z.side=F.shadowSide!==null?F.shadowSide:_[F.side],Z.alphaMap=F.alphaMap,Z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Z.map=F.map,Z.clipShadows=F.clipShadows,Z.clippingPlanes=F.clippingPlanes,Z.clipIntersection=F.clipIntersection,Z.displacementMap=F.displacementMap,Z.displacementScale=F.displacementScale,Z.displacementBias=F.displacementBias,Z.wireframeLinewidth=F.wireframeLinewidth,Z.linewidth=F.linewidth,b.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const q=o.properties.get(Z);q.light=b}return Z}function N(O,F,b,L,Z){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Z===Xo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const le=e.update(O),ue=O.material;if(Array.isArray(ue)){const j=le.groups;for(let P=0,B=j.length;P<B;P++){const oe=j[P],me=ue[oe.materialIndex];if(me&&me.visible){const Se=I(O,me,L,Z);O.onBeforeShadow(o,O,F,b,le,Se,oe),o.renderBufferDirect(b,null,le,Se,O,oe),O.onAfterShadow(o,O,F,b,le,Se,oe)}}}else if(ue.visible){const j=I(O,ue,L,Z);O.onBeforeShadow(o,O,F,b,le,j,null),o.renderBufferDirect(b,null,le,j,O,null),O.onAfterShadow(o,O,F,b,le,j,null)}}const q=O.children;for(let le=0,ue=q.length;le<ue;le++)N(q[le],F,b,L,Z)}function V(O){O.target.removeEventListener("dispose",V);for(const b in m){const L=m[b],Z=O.target.uuid;Z in L&&(L[Z].dispose(),delete L[Z])}}}function QT(o,e){function i(){let X=!1;const Ae=new on;let pe=null;const Be=new on(0,0,0,0);return{setMask:function(Le){pe!==Le&&!X&&(o.colorMask(Le,Le,Le,Le),pe=Le)},setLocked:function(Le){X=Le},setClear:function(Le,Me,qe,tt,an){an===!0&&(Le*=tt,Me*=tt,qe*=tt),Ae.set(Le,Me,qe,tt),Be.equals(Ae)===!1&&(o.clearColor(Le,Me,qe,tt),Be.copy(Ae))},reset:function(){X=!1,pe=null,Be.set(-1,0,0,0)}}}function s(){let X=!1,Ae=!1,pe=null,Be=null,Le=null;return{setReversed:function(Me){if(Ae!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const tt=Le;Le=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(Me){Me?be(o.DEPTH_TEST):ze(o.DEPTH_TEST)},setMask:function(Me){pe!==Me&&!X&&(o.depthMask(Me),pe=Me)},setFunc:function(Me){if(Ae&&(Me=wS[Me]),Be!==Me){switch(Me){case Xd:o.depthFunc(o.NEVER);break;case Wd:o.depthFunc(o.ALWAYS);break;case jd:o.depthFunc(o.LESS);break;case Nr:o.depthFunc(o.LEQUAL);break;case qd:o.depthFunc(o.EQUAL);break;case Yd:o.depthFunc(o.GEQUAL);break;case Zd:o.depthFunc(o.GREATER);break;case Kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Le!==Me&&(Le=Me,Ae&&(Me=1-Me),o.clearDepth(Me))},reset:function(){X=!1,pe=null,Be=null,Le=null,Ae=!1}}}function l(){let X=!1,Ae=null,pe=null,Be=null,Le=null,Me=null,qe=null,tt=null,an=null;return{setTest:function(Ot){X||(Ot?be(o.STENCIL_TEST):ze(o.STENCIL_TEST))},setMask:function(Ot){Ae!==Ot&&!X&&(o.stencilMask(Ot),Ae=Ot)},setFunc:function(Ot,di,Jn){(pe!==Ot||Be!==di||Le!==Jn)&&(o.stencilFunc(Ot,di,Jn),pe=Ot,Be=di,Le=Jn)},setOp:function(Ot,di,Jn){(Me!==Ot||qe!==di||tt!==Jn)&&(o.stencilOp(Ot,di,Jn),Me=Ot,qe=di,tt=Jn)},setLocked:function(Ot){X=Ot},setClear:function(Ot){an!==Ot&&(o.clearStencil(Ot),an=Ot)},reset:function(){X=!1,Ae=null,pe=null,Be=null,Le=null,Me=null,qe=null,tt=null,an=null}}}const c=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let x={},_={},g={},M=new WeakMap,T=[],C=null,S=!1,y=null,D=null,I=null,N=null,V=null,O=null,F=null,b=new At(0,0,0),L=0,Z=!1,G=null,q=null,le=null,ue=null,j=null;const P=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,oe=0;const me=o.getParameter(o.VERSION);me.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(me)[1]),B=oe>=1):me.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),B=oe>=2);let Se=null,z={};const Q=o.getParameter(o.SCISSOR_BOX),xe=o.getParameter(o.VIEWPORT),Te=new on().fromArray(Q),Ce=new on().fromArray(xe);function ae(X,Ae,pe,Be){const Le=new Uint8Array(4),Me=o.createTexture();o.bindTexture(X,Me),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qe=0;qe<pe;qe++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Ae+qe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Me}const ye={};ye[o.TEXTURE_2D]=ae(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=ae(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=ae(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=ae(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),be(o.DEPTH_TEST),d.setFunc(Nr),Jt(!1),Ft(Wg),be(o.CULL_FACE),pt(_a);function be(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function ze(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function $e(X,Ae){return g[X]!==Ae?(o.bindFramebuffer(X,Ae),g[X]=Ae,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ae),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(X,Ae){let pe=T,Be=!1;if(X){pe=M.get(Ae),pe===void 0&&(pe=[],M.set(Ae,pe));const Le=X.textures;if(pe.length!==Le.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,qe=Le.length;Me<qe;Me++)pe[Me]=o.COLOR_ATTACHMENT0+Me;pe.length=Le.length,Be=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,Be=!0);Be&&o.drawBuffers(pe)}function It(X){return C!==X?(o.useProgram(X),C=X,!0):!1}const ct={[Ls]:o.FUNC_ADD,[Jy]:o.FUNC_SUBTRACT,[$y]:o.FUNC_REVERSE_SUBTRACT};ct[eS]=o.MIN,ct[tS]=o.MAX;const gt={[nS]:o.ZERO,[iS]:o.ONE,[aS]:o.SRC_COLOR,[Vd]:o.SRC_ALPHA,[uS]:o.SRC_ALPHA_SATURATE,[lS]:o.DST_COLOR,[rS]:o.DST_ALPHA,[sS]:o.ONE_MINUS_SRC_COLOR,[kd]:o.ONE_MINUS_SRC_ALPHA,[cS]:o.ONE_MINUS_DST_COLOR,[oS]:o.ONE_MINUS_DST_ALPHA,[fS]:o.CONSTANT_COLOR,[dS]:o.ONE_MINUS_CONSTANT_COLOR,[hS]:o.CONSTANT_ALPHA,[pS]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Ae,pe,Be,Le,Me,qe,tt,an,Ot){if(X===_a){S===!0&&(ze(o.BLEND),S=!1);return}if(S===!1&&(be(o.BLEND),S=!0),X!==Qy){if(X!==y||Ot!==Z){if((D!==Ls||V!==Ls)&&(o.blendEquation(o.FUNC_ADD),D=Ls,V=Ls),Ot)switch(X){case Ur:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qo:o.blendFunc(o.ONE,o.ONE);break;case jg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case Ur:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case jg:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}I=null,N=null,O=null,F=null,b.set(0,0,0),L=0,y=X,Z=Ot}return}Le=Le||Ae,Me=Me||pe,qe=qe||Be,(Ae!==D||Le!==V)&&(o.blendEquationSeparate(ct[Ae],ct[Le]),D=Ae,V=Le),(pe!==I||Be!==N||Me!==O||qe!==F)&&(o.blendFuncSeparate(gt[pe],gt[Be],gt[Me],gt[qe]),I=pe,N=Be,O=Me,F=qe),(tt.equals(b)===!1||an!==L)&&(o.blendColor(tt.r,tt.g,tt.b,an),b.copy(tt),L=an),y=X,Z=!1}function at(X,Ae){X.side===Ui?ze(o.CULL_FACE):be(o.CULL_FACE);let pe=X.side===Kn;Ae&&(pe=!pe),Jt(pe),X.blending===Ur&&X.transparent===!1?pt(_a):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Be=X.stencilWrite;h.setTest(Be),Be&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),k(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?be(o.SAMPLE_ALPHA_TO_COVERAGE):ze(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(X){G!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),G=X)}function Ft(X){X!==Yy?(be(o.CULL_FACE),X!==q&&(X===Wg?o.cullFace(o.BACK):X===Zy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ze(o.CULL_FACE),q=X}function nt(X){X!==le&&(B&&o.lineWidth(X),le=X)}function k(X,Ae,pe){X?(be(o.POLYGON_OFFSET_FILL),(ue!==Ae||j!==pe)&&(ue=Ae,j=pe,d.getReversed()&&(Ae=-Ae),o.polygonOffset(Ae,pe))):ze(o.POLYGON_OFFSET_FILL)}function Rt(X){X?be(o.SCISSOR_TEST):ze(o.SCISSOR_TEST)}function dt(X){X===void 0&&(X=o.TEXTURE0+P-1),Se!==X&&(o.activeTexture(X),Se=X)}function Dt(X,Ae,pe){pe===void 0&&(Se===null?pe=o.TEXTURE0+P-1:pe=Se);let Be=z[pe];Be===void 0&&(Be={type:void 0,texture:void 0},z[pe]=Be),(Be.type!==X||Be.texture!==Ae)&&(Se!==pe&&(o.activeTexture(pe),Se=pe),o.bindTexture(X,Ae||ye[X]),Be.type=X,Be.texture=Ae)}function Re(){const X=z[Se];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $t(){try{o.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function w(){try{o.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function E(){try{o.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function J(){try{o.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ve(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ee(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function we(){try{o.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ne(){try{o.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function fe(){try{o.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function de(){try{o.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Oe(X){return _[X]!==void 0?_[X]:o.getParameter(X)}function Pe(X,Ae){_[X]!==Ae&&(o.pixelStorei(X,Ae),_[X]=Ae)}function Ue(X){Te.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function De(X){Ce.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function st(X,Ae){let pe=m.get(Ae);pe===void 0&&(pe=new WeakMap,m.set(Ae,pe));let Be=pe.get(X);Be===void 0&&(Be=o.getUniformBlockIndex(Ae,X.name),pe.set(X,Be))}function rt(X,Ae){const Be=m.get(Ae).get(X);p.get(Ae)!==Be&&(o.uniformBlockBinding(Ae,Be,X.__bindingPointIndex),p.set(Ae,Be))}function vt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},_={},Se=null,z={},g={},M=new WeakMap,T=[],C=null,S=!1,y=null,D=null,I=null,N=null,V=null,O=null,F=null,b=new At(0,0,0),L=0,Z=!1,G=null,q=null,le=null,ue=null,j=null,Te.set(0,0,o.canvas.width,o.canvas.height),Ce.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:be,disable:ze,bindFramebuffer:$e,drawBuffers:Ke,useProgram:It,setBlending:pt,setMaterial:at,setFlipSided:Jt,setCullFace:Ft,setLineWidth:nt,setPolygonOffset:k,setScissorTest:Rt,activeTexture:dt,bindTexture:Dt,unbindTexture:Re,compressedTexImage2D:$t,compressedTexImage3D:w,texImage2D:fe,texImage3D:de,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:st,uniformBlockBinding:rt,texStorage2D:we,texStorage3D:Ne,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ee,scissor:Ue,viewport:De,reset:vt}}function JT(o,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,x=new WeakMap,_=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,E){return T?new OffscreenCanvas(w,E):Wc("canvas")}function S(w,E,J){let ve=1;const Ee=$t(w);if((Ee.width>J||Ee.height>J)&&(ve=J/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const we=Math.floor(ve*Ee.width),Ne=Math.floor(ve*Ee.height);g===void 0&&(g=C(we,Ne));const fe=E?C(we,Ne):g;return fe.width=we,fe.height=Ne,fe.getContext("2d").drawImage(w,0,0,we,Ne),it("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+we+"x"+Ne+")."),fe}else return"data"in w&&it("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),w;return w}function y(w){return w.generateMipmaps}function D(w){o.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(w,E,J,ve,Ee,we=!1){if(w!==null){if(o[w]!==void 0)return o[w];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Ne;ve&&(Ne=e.get("EXT_texture_norm16"),Ne||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===o.RED&&(J===o.FLOAT&&(fe=o.R32F),J===o.HALF_FLOAT&&(fe=o.R16F),J===o.UNSIGNED_BYTE&&(fe=o.R8),J===o.UNSIGNED_SHORT&&Ne&&(fe=Ne.R16_EXT),J===o.SHORT&&Ne&&(fe=Ne.R16_SNORM_EXT)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.R8UI),J===o.UNSIGNED_SHORT&&(fe=o.R16UI),J===o.UNSIGNED_INT&&(fe=o.R32UI),J===o.BYTE&&(fe=o.R8I),J===o.SHORT&&(fe=o.R16I),J===o.INT&&(fe=o.R32I)),E===o.RG&&(J===o.FLOAT&&(fe=o.RG32F),J===o.HALF_FLOAT&&(fe=o.RG16F),J===o.UNSIGNED_BYTE&&(fe=o.RG8),J===o.UNSIGNED_SHORT&&Ne&&(fe=Ne.RG16_EXT),J===o.SHORT&&Ne&&(fe=Ne.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.RG8UI),J===o.UNSIGNED_SHORT&&(fe=o.RG16UI),J===o.UNSIGNED_INT&&(fe=o.RG32UI),J===o.BYTE&&(fe=o.RG8I),J===o.SHORT&&(fe=o.RG16I),J===o.INT&&(fe=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),J===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),J===o.UNSIGNED_INT&&(fe=o.RGB32UI),J===o.BYTE&&(fe=o.RGB8I),J===o.SHORT&&(fe=o.RGB16I),J===o.INT&&(fe=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),J===o.UNSIGNED_INT&&(fe=o.RGBA32UI),J===o.BYTE&&(fe=o.RGBA8I),J===o.SHORT&&(fe=o.RGBA16I),J===o.INT&&(fe=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGB16_EXT),J===o.SHORT&&Ne&&(fe=Ne.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),E===o.RGBA){const de=we?Xc:Tt.getTransfer(Ee);J===o.FLOAT&&(fe=o.RGBA32F),J===o.HALF_FLOAT&&(fe=o.RGBA16F),J===o.UNSIGNED_BYTE&&(fe=de===Xt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGBA16_EXT),J===o.SHORT&&Ne&&(fe=Ne.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function V(w,E){let J;return w?E===null||E===ji||E===Zo?J=o.DEPTH24_STENCIL8:E===Vi?J=o.DEPTH32F_STENCIL8:E===Yo&&(J=o.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===Zo?J=o.DEPTH_COMPONENT24:E===Vi?J=o.DEPTH_COMPONENT32F:E===Yo&&(J=o.DEPTH_COMPONENT16),J}function O(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dn&&w.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function F(w){const E=w.target;E.removeEventListener("dispose",F),L(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&_.delete(E)}function b(w){const E=w.target;E.removeEventListener("dispose",b),G(E)}function L(w){const E=s.get(w);if(E.__webglInit===void 0)return;const J=w.source,ve=M.get(J);if(ve){const Ee=ve[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Z(w),Object.keys(ve).length===0&&M.delete(J)}s.remove(w)}function Z(w){const E=s.get(w);o.deleteTexture(E.__webglTexture);const J=w.source,ve=M.get(J);delete ve[E.__cacheKey],d.memory.textures--}function G(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Ee=0;Ee<E.__webglFramebuffer[ve].length;Ee++)o.deleteFramebuffer(E.__webglFramebuffer[ve][Ee]);else o.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[ve]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=w.textures;for(let ve=0,Ee=J.length;ve<Ee;ve++){const we=s.get(J[ve]);we.__webglTexture&&(o.deleteTexture(we.__webglTexture),d.memory.textures--),s.remove(J[ve])}s.remove(w)}let q=0;function le(){q=0}function ue(){return q}function j(w){q=w}function P(){const w=q;return w>=l.maxTextures&&it("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),q+=1,w}function B(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function oe(w,E){const J=s.get(w);if(w.isVideoTexture&&Dt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&J.__version!==w.version){const ve=w.image;if(ve===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(J,w,E);return}}else w.isExternalTexture&&(J.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function me(w,E){const J=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){ze(J,w,E);return}else w.isExternalTexture&&(J.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function Se(w,E){const J=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){ze(J,w,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function z(w,E){const J=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&J.__version!==w.version){$e(J,w,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const Q={[Qd]:o.REPEAT,[va]:o.CLAMP_TO_EDGE,[Jd]:o.MIRRORED_REPEAT},xe={[Dn]:o.NEAREST,[vS]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[cd]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},Te={[yS]:o.NEVER,[TS]:o.ALWAYS,[SS]:o.LESS,[Xh]:o.LEQUAL,[MS]:o.EQUAL,[Wh]:o.GEQUAL,[ES]:o.GREATER,[bS]:o.NOTEQUAL};function Ce(w,E){if(E.type===Vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===cd||E.magFilter===uc||E.magFilter===Os||E.minFilter===zn||E.minFilter===cd||E.minFilter===uc||E.minFilter===Os)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Q[E.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Q[E.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Q[E.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,xe[E.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==uc&&E.minFilter!==Os||E.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ae(w,E){let J=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",F));const ve=E.source;let Ee=M.get(ve);Ee===void 0&&(Ee={},M.set(ve,Ee));const we=B(E);if(we!==w.__cacheKey){Ee[we]===void 0&&(Ee[we]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),Ee[we].usedTimes++;const Ne=Ee[w.__cacheKey];Ne!==void 0&&(Ee[w.__cacheKey].usedTimes--,Ne.usedTimes===0&&Z(E)),w.__cacheKey=we,w.__webglTexture=Ee[we].texture}return J}function ye(w,E,J){return Math.floor(Math.floor(w/J)/E)}function be(w,E,J,ve){const we=w.updateRanges;if(we.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,ve,E.data);else{we.sort((Pe,Ue)=>Pe.start-Ue.start);let Ne=0;for(let Pe=1;Pe<we.length;Pe++){const Ue=we[Ne],De=we[Pe],st=Ue.start+Ue.count,rt=ye(De.start,E.width,4),vt=ye(Ue.start,E.width,4);De.start<=st+1&&rt===vt&&ye(De.start+De.count-1,E.width,4)===rt?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Ne,we[Ne]=De)}we.length=Ne+1;const fe=i.getParameter(o.UNPACK_ROW_LENGTH),de=i.getParameter(o.UNPACK_SKIP_PIXELS),Oe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,Ue=we.length;Pe<Ue;Pe++){const De=we[Pe],st=Math.floor(De.start/4),rt=Math.ceil(De.count/4),vt=st%E.width,X=Math.floor(st/E.width),Ae=rt,pe=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,vt,X,Ae,pe,J,ve,E.data)}w.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,fe),i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function ze(w,E,J){let ve=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=o.TEXTURE_3D);const Ee=ae(w,E),we=E.source;i.bindTexture(ve,w.__webglTexture,o.TEXTURE0+J);const Ne=s.get(we);if(we.version!==Ne.__version||Ee===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=Tt.getPrimaries(Tt.workingColorSpace),Be=E.colorSpace===as?null:Tt.getPrimaries(E.colorSpace),Le=E.colorSpace===as||pe===Be?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let de=S(E.image,!1,l.maxTextureSize);de=Re(E,de);const Oe=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let Ue=N(E.internalFormat,Oe,Pe,E.normalized,E.colorSpace,E.isVideoTexture);Ce(ve,E);let De;const st=E.mipmaps,rt=E.isVideoTexture!==!0,vt=Ne.__version===void 0||Ee===!0,X=we.dataReady,Ae=O(E,de);if(E.isDepthTexture)Ue=V(E.format===Ps,E.type),vt&&(rt?i.texStorage2D(o.TEXTURE_2D,1,Ue,de.width,de.height):i.texImage2D(o.TEXTURE_2D,0,Ue,de.width,de.height,0,Oe,Pe,null));else if(E.isDataTexture)if(st.length>0){rt&&vt&&i.texStorage2D(o.TEXTURE_2D,Ae,Ue,st[0].width,st[0].height);for(let pe=0,Be=st.length;pe<Be;pe++)De=st[pe],rt?X&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,De.width,De.height,Oe,Pe,De.data):i.texImage2D(o.TEXTURE_2D,pe,Ue,De.width,De.height,0,Oe,Pe,De.data);E.generateMipmaps=!1}else rt?(vt&&i.texStorage2D(o.TEXTURE_2D,Ae,Ue,de.width,de.height),X&&be(E,de,Oe,Pe)):i.texImage2D(o.TEXTURE_2D,0,Ue,de.width,de.height,0,Oe,Pe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&vt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Ue,st[0].width,st[0].height,de.depth);for(let pe=0,Be=st.length;pe<Be;pe++)if(De=st[pe],E.format!==Ni)if(Oe!==null)if(rt){if(X)if(E.layerUpdates.size>0){const Le=Ev(De.width,De.height,E.format,E.type);for(const Me of E.layerUpdates){const qe=De.data.subarray(Me*Le/De.data.BYTES_PER_ELEMENT,(Me+1)*Le/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Me,De.width,De.height,1,Oe,qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,de.depth,Oe,De.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,Ue,De.width,De.height,de.depth,0,De.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,de.depth,Oe,Pe,De.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pe,Ue,De.width,De.height,de.depth,0,Oe,Pe,De.data)}else{rt&&vt&&i.texStorage2D(o.TEXTURE_2D,Ae,Ue,st[0].width,st[0].height);for(let pe=0,Be=st.length;pe<Be;pe++)De=st[pe],E.format!==Ni?Oe!==null?rt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,De.width,De.height,Oe,De.data):i.compressedTexImage2D(o.TEXTURE_2D,pe,Ue,De.width,De.height,0,De.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,De.width,De.height,Oe,Pe,De.data):i.texImage2D(o.TEXTURE_2D,pe,Ue,De.width,De.height,0,Oe,Pe,De.data)}else if(E.isDataArrayTexture)if(rt){if(vt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Ue,de.width,de.height,de.depth),X)if(E.layerUpdates.size>0){const pe=Ev(de.width,de.height,E.format,E.type);for(const Be of E.layerUpdates){const Le=de.data.subarray(Be*pe/de.data.BYTES_PER_ELEMENT,(Be+1)*pe/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Be,de.width,de.height,1,Oe,Pe,Le)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(E.isData3DTexture)rt?(vt&&i.texStorage3D(o.TEXTURE_3D,Ae,Ue,de.width,de.height,de.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)):i.texImage3D(o.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(E.isFramebufferTexture){if(vt)if(rt)i.texStorage2D(o.TEXTURE_2D,Ae,Ue,de.width,de.height);else{let pe=de.width,Be=de.height;for(let Le=0;Le<Ae;Le++)i.texImage2D(o.TEXTURE_2D,Le,Ue,pe,Be,0,Oe,Pe,null),pe>>=1,Be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const pe=o.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),de.parentNode!==pe){pe.appendChild(de),_.add(E),pe.onpaint=tt=>{const an=tt.changedElements;for(const Ot of _)an.includes(Ot.image)&&(Ot.needsUpdate=!0)},pe.requestPaint();return}const Be=0,Le=o.RGBA,Me=o.RGBA,qe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Be,Le,Me,qe,de),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(st.length>0){if(rt&&vt){const pe=$t(st[0]);i.texStorage2D(o.TEXTURE_2D,Ae,Ue,pe.width,pe.height)}for(let pe=0,Be=st.length;pe<Be;pe++)De=st[pe],rt?X&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Oe,Pe,De):i.texImage2D(o.TEXTURE_2D,pe,Ue,Oe,Pe,De);E.generateMipmaps=!1}else if(rt){if(vt){const pe=$t(de);i.texStorage2D(o.TEXTURE_2D,Ae,Ue,pe.width,pe.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Pe,de)}else i.texImage2D(o.TEXTURE_2D,0,Ue,Oe,Pe,de);y(E)&&D(ve),Ne.__version=we.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function $e(w,E,J){if(E.image.length!==6)return;const ve=ae(w,E),Ee=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+J);const we=s.get(Ee);if(Ee.version!==we.__version||ve===!0){i.activeTexture(o.TEXTURE0+J);const Ne=Tt.getPrimaries(Tt.workingColorSpace),fe=E.colorSpace===as?null:Tt.getPrimaries(E.colorSpace),de=E.colorSpace===as||Ne===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ue[Me]=S(E.image[Me],!0,l.maxCubemapSize):Ue[Me]=Pe?E.image[Me].image:E.image[Me],Ue[Me]=Re(E,Ue[Me]);const De=Ue[0],st=c.convert(E.format,E.colorSpace),rt=c.convert(E.type),vt=N(E.internalFormat,st,rt,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ae=we.__version===void 0||ve===!0,pe=Ee.dataReady;let Be=O(E,De);Ce(o.TEXTURE_CUBE_MAP,E);let Le;if(Oe){X&&Ae&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,vt,De.width,De.height);for(let Me=0;Me<6;Me++){Le=Ue[Me].mipmaps;for(let qe=0;qe<Le.length;qe++){const tt=Le[qe];E.format!==Ni?st!==null?X?pe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,tt.width,tt.height,st,tt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,vt,tt.width,tt.height,0,tt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,tt.width,tt.height,st,rt,tt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,vt,tt.width,tt.height,0,st,rt,tt.data)}}}else{if(Le=E.mipmaps,X&&Ae){Le.length>0&&Be++;const Me=$t(Ue[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,vt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){X?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,st,rt,Ue[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,vt,Ue[Me].width,Ue[Me].height,0,st,rt,Ue[Me].data);for(let qe=0;qe<Le.length;qe++){const an=Le[qe].image[Me].image;X?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,an.width,an.height,st,rt,an.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,vt,an.width,an.height,0,st,rt,an.data)}}else{X?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,st,rt,Ue[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,vt,st,rt,Ue[Me]);for(let qe=0;qe<Le.length;qe++){const tt=Le[qe];X?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,st,rt,tt.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,vt,st,rt,tt.image[Me])}}}y(E)&&D(o.TEXTURE_CUBE_MAP),we.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Ke(w,E,J,ve,Ee,we){const Ne=c.convert(J.format,J.colorSpace),fe=c.convert(J.type),de=N(J.internalFormat,Ne,fe,J.normalized,J.colorSpace),Oe=s.get(E),Pe=s.get(J);if(Pe.__renderTarget=E,!Oe.__hasExternalTextures){const Ue=Math.max(1,E.width>>we),De=Math.max(1,E.height>>we);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,we,de,Ue,De,E.depth,0,Ne,fe,null):i.texImage2D(Ee,we,de,Ue,De,0,Ne,fe,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),dt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,Ee,Pe.__webglTexture,0,Rt(E)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,Ee,Pe.__webglTexture,we),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(w,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,w),E.depthBuffer){const ve=E.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,we=V(E.stencilBuffer,Ee),Ne=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;dt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt(E),we,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt(E),we,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,we,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ne,o.RENDERBUFFER,w)}else{const ve=E.textures;for(let Ee=0;Ee<ve.length;Ee++){const we=ve[Ee],Ne=c.convert(we.format,we.colorSpace),fe=c.convert(we.type),de=N(we.internalFormat,Ne,fe,we.normalized,we.colorSpace);dt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt(E),de,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt(E),de,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,de,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ct(w,E,J){const ve=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ve){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Ee.__webglTexture===void 0){Ee.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),Pe=c.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Sa?Ue=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Ue=o.DEPTH24_STENCIL8);for(let De=0;De<6;De++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,E.width,E.height,0,Oe,Pe,null)}}else oe(E.depthTexture,0);const we=Ee.__webglTexture,Ne=Rt(E),fe=ve?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,de=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)dt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,fe,we,0,Ne):o.framebufferTexture2D(o.FRAMEBUFFER,de,fe,we,0);else if(E.depthTexture.format===Ps)dt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,fe,we,0,Ne):o.framebufferTexture2D(o.FRAMEBUFFER,de,fe,we,0);else throw new Error("Unknown depthTexture format")}function gt(w){const E=s.get(w),J=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const ve=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=ve}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let ve=0;ve<6;ve++)ct(E.__webglFramebuffer[ve],w,ve);else{const ve=w.texture.mipmaps;ve&&ve.length>0?ct(E.__webglFramebuffer[0],w,0):ct(E.__webglFramebuffer,w,0)}else if(J){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=o.createRenderbuffer(),It(E.__webglDepthbuffer[ve],w,!1);else{const Ee=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,we),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,we)}}else{const ve=w.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,w,!1);else{const Ee=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,we),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,we)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function pt(w,E,J){const ve=s.get(w);E!==void 0&&Ke(ve.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&gt(w)}function at(w){const E=w.texture,J=s.get(w),ve=s.get(E);w.addEventListener("dispose",b);const Ee=w.textures,we=w.isWebGLCubeRenderTarget===!0,Ne=Ee.length>1;if(Ne||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=E.version,d.memory.textures++),we){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let de=0;de<E.mipmaps.length;de++)J.__webglFramebuffer[fe][de]=o.createFramebuffer()}else J.__webglFramebuffer[fe]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)J.__webglFramebuffer[fe]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Ne)for(let fe=0,de=Ee.length;fe<de;fe++){const Oe=s.get(Ee[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&dt(w)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let fe=0;fe<Ee.length;fe++){const de=Ee[fe];J.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Oe=c.convert(de.format,de.colorSpace),Pe=c.convert(de.type),Ue=N(de.internalFormat,Oe,Pe,de.normalized,de.colorSpace,w.isXRRenderTarget===!0),De=Rt(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,De,Ue,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,J.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),It(J.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(we){i.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Ke(J.__webglFramebuffer[fe][de],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Ke(J.__webglFramebuffer[fe],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(E)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let fe=0,de=Ee.length;fe<de;fe++){const Oe=Ee[fe],Pe=s.get(Oe);let Ue=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ue=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Pe.__webglTexture),Ce(Ue,Oe),Ke(J.__webglFramebuffer,w,Oe,o.COLOR_ATTACHMENT0+fe,Ue,0),y(Oe)&&D(Ue)}i.unbindTexture()}else{let fe=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(fe,ve.__webglTexture),Ce(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Ke(J.__webglFramebuffer[de],w,E,o.COLOR_ATTACHMENT0,fe,de);else Ke(J.__webglFramebuffer,w,E,o.COLOR_ATTACHMENT0,fe,0);y(E)&&D(fe),i.unbindTexture()}w.depthBuffer&&gt(w)}function Jt(w){const E=w.textures;for(let J=0,ve=E.length;J<ve;J++){const Ee=E[J];if(y(Ee)){const we=I(w),Ne=s.get(Ee).__webglTexture;i.bindTexture(we,Ne),D(we),i.unbindTexture()}}}const Ft=[],nt=[];function k(w){if(w.samples>0){if(dt(w)===!1){const E=w.textures,J=w.width,ve=w.height;let Ee=o.COLOR_BUFFER_BIT;const we=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=s.get(w),fe=E.length>1;if(fe)for(let Oe=0;Oe<E.length;Oe++)i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const de=w.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),fe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pe,0)}o.blitFramebuffer(0,0,J,ve,0,0,J,ve,Ee,o.NEAREST),p===!0&&(Ft.length=0,nt.length=0,Ft.push(o.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ft.push(we),nt.push(we),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,nt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let Oe=0;Oe<E.length;Oe++){i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,Pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&p){const E=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Rt(w){return Math.min(l.maxSamples,w.samples)}function dt(w){const E=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Dt(w){const E=d.render.frame;x.get(w)!==E&&(x.set(w,E),w.update())}function Re(w,E){const J=w.colorSpace,ve=w.format,Ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||J!==kc&&J!==as&&(Tt.getTransfer(J)===Xt?(ve!==Ni||Ee!==fi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",J)),E}function $t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(m.width=w.naturalWidth||w.width,m.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(m.width=w.displayWidth,m.height=w.displayHeight):(m.width=w.width,m.height=w.height),m}this.allocateTextureUnit=P,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=j,this.setTexture2D=oe,this.setTexture2DArray=me,this.setTexture3D=Se,this.setTextureCube=z,this.rebindTextures=pt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $T(o,e){function i(s,l=as){let c;const d=Tt.getTransfer(l);if(s===fi)return o.UNSIGNED_BYTE;if(s===Bh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Hh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===o_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===l_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===s_)return o.BYTE;if(s===r_)return o.SHORT;if(s===Yo)return o.UNSIGNED_SHORT;if(s===Fh)return o.INT;if(s===ji)return o.UNSIGNED_INT;if(s===Vi)return o.FLOAT;if(s===ya)return o.HALF_FLOAT;if(s===c_)return o.ALPHA;if(s===u_)return o.RGB;if(s===Ni)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===f_)return o.RED;if(s===Gh)return o.RED_INTEGER;if(s===zs)return o.RG;if(s===Vh)return o.RG_INTEGER;if(s===kh)return o.RGBA_INTEGER;if(s===Ic||s===zc||s===Fc||s===Bc)if(d===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===eh||s===th||s===nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===Gc||s===lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ih||s===ah)return d===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rh)return c.COMPRESSED_R11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Gc)return c.COMPRESSED_RG11_EAC;if(s===lh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===vh||s===_h||s===xh||s===yh||s===Sh||s===Mh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ch)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ph)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_h)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eh||s===bh||s===Th)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Eh)return d===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ah||s===Rh||s===Vc||s===Ch)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ah)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Rh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const eA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new y_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qi({vertexShader:eA,fragmentShader:tA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new Ir(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends Fs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,x=null,_=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new nA,y={},D=i.getContextAttributes();let I=null,N=null;const V=[],O=[],F=new wt;let b=null;const L=new ui;L.viewport=new on;const Z=new ui;Z.viewport=new on;const G=[L,Z],q=new hM;let le=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=V[ae];return ye===void 0&&(ye=new vd,V[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=V[ae];return ye===void 0&&(ye=new vd,V[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=V[ae];return ye===void 0&&(ye=new vd,V[ae]=ye),ye.getHandSpace()};function j(ae){const ye=O.indexOf(ae.inputSource);if(ye===-1)return;const be=V[ye];be!==void 0&&(be.update(ae.inputSource,ae.frame,m||d),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",B);for(let ae=0;ae<V.length;ae++){const ye=O[ae];ye!==null&&(O[ae]=null,V[ae].disconnect(ye))}le=null,ue=null,S.reset();for(const ae in y)delete y[ae];e.setRenderTarget(I),M=null,g=null,_=null,l=null,N=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",P),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ze=null,$e=null;D.depth&&($e=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=D.stencil?Ps:Sa,ze=D.stencil?Zo:ji);const Ke={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Wi(g.textureWidth,g.textureHeight,{format:Ni,type:fi,depthTexture:new Pr(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(ae){for(let ye=0;ye<ae.removed.length;ye++){const be=ae.removed[ye],ze=O.indexOf(be);ze>=0&&(O[ze]=null,V[ze].disconnect(be))}for(let ye=0;ye<ae.added.length;ye++){const be=ae.added[ye];let ze=O.indexOf(be);if(ze===-1){for(let Ke=0;Ke<V.length;Ke++)if(Ke>=O.length){O.push(be),ze=Ke;break}else if(O[Ke]===null){O[Ke]=be,ze=Ke;break}if(ze===-1)break}const $e=V[ze];$e&&$e.connect(be)}}const oe=new te,me=new te;function Se(ae,ye,be){oe.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(be.matrixWorld);const ze=oe.distanceTo(me),$e=ye.projectionMatrix.elements,Ke=be.projectionMatrix.elements,It=$e[14]/($e[10]-1),ct=$e[14]/($e[10]+1),gt=($e[9]+1)/$e[5],pt=($e[9]-1)/$e[5],at=($e[8]-1)/$e[0],Jt=(Ke[8]+1)/Ke[0],Ft=It*at,nt=It*Jt,k=ze/(-at+Jt),Rt=k*-at;if(ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Rt),ae.translateZ(k),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),$e[10]===-1)ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const dt=It+k,Dt=ct+k,Re=Ft-Rt,$t=nt+(ze-Rt),w=gt*ct/Dt*dt,E=pt*ct/Dt*dt;ae.projectionMatrix.makePerspective(Re,$t,w,E,dt,Dt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function z(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ye=ae.near,be=ae.far;S.texture!==null&&(S.depthNear>0&&(ye=S.depthNear),S.depthFar>0&&(be=S.depthFar)),q.near=Z.near=L.near=ye,q.far=Z.far=L.far=be,(le!==q.near||ue!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),le=q.near,ue=q.far),q.layers.mask=ae.layers.mask|6,L.layers.mask=q.layers.mask&-5,Z.layers.mask=q.layers.mask&-3;const ze=ae.parent,$e=q.cameras;z(q,ze);for(let Ke=0;Ke<$e.length;Ke++)z($e[Ke],ze);$e.length===2?Se(q,L,Z):q.projectionMatrix.copy(L.projectionMatrix),Q(ae,q,ze)};function Q(ae,ye,be){be===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Uh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(ae){return y[ae]};let xe=null;function Te(ae,ye){if(x=ye.getViewerPose(m||d),T=ye,x!==null){const be=x.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let ze=!1;be.length!==q.cameras.length&&(q.cameras.length=0,ze=!0);for(let ct=0;ct<be.length;ct++){const gt=be[ct];let pt=null;if(M!==null)pt=M.getViewport(gt);else{const Jt=_.getViewSubImage(g,gt);pt=Jt.viewport,ct===0&&(e.setRenderTargetTextures(N,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(N))}let at=G[ct];at===void 0&&(at=new ui,at.layers.enable(ct),at.viewport=new on,G[ct]=at),at.matrix.fromArray(gt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(gt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(pt.x,pt.y,pt.width,pt.height),ct===0&&(q.matrix.copy(at.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ze===!0&&q.cameras.push(at)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const ct=_.getDepthInformation(be[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,l.renderState)}if($e&&$e.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let ct=0;ct<be.length;ct++){const gt=be[ct].camera;if(gt){let pt=y[gt];pt||(pt=new y_,y[gt]=pt);const at=_.getCameraImage(gt);pt.sourceTexture=at}}}}for(let be=0;be<V.length;be++){const ze=O[be],$e=V[be];ze!==null&&$e!==void 0&&$e.update(ze,ye,m||d)}xe&&xe(ae,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Ce=new b_;Ce.setAnimationLoop(Te),this.setAnimationLoop=function(ae){xe=ae},this.dispose=function(){}}}const aA=new ln,U_=new lt;U_.set(-1,0,0,0,1,0,0,0,1);function sA(o,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,S_(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,D,I,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),x(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&M(S,y,N)):y.isMeshMatcapMaterial?(c(S,y),T(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),C(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,D,I):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Kn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Kn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),I=D.envMap,N=D.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(N)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(U_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,D,I){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=I*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function rA(o,e,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,I){const N=I.program;s.uniformBlockBinding(D,N)}function m(D,I){let N=l[D.id];N===void 0&&(T(D),N=x(D),l[D.id]=N,D.addEventListener("dispose",S));const V=I.program;s.updateUBOMapping(D,V);const O=e.render.frame;c[D.id]!==O&&(g(D),c[D.id]=O)}function x(D){const I=_();D.__bindingPointIndex=I;const N=o.createBuffer(),V=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,N),N}function _(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const I=l[D.id],N=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let O=0,F=N.length;O<F;O++){const b=Array.isArray(N[O])?N[O]:[N[O]];for(let L=0,Z=b.length;L<Z;L++){const G=b[L];if(M(G,O,L,V)===!0){const q=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let j=0;j<le.length;j++){const P=le[j],B=C(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,q+ue,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):ArrayBuffer.isView(P)?G.__data.set(new P.constructor(P.buffer,P.byteOffset,G.__data.length)):(P.toArray(G.__data,ue),ue+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(D,I,N,V){const O=D.value,F=I+"_"+N;if(V[F]===void 0)return typeof O=="number"||typeof O=="boolean"?V[F]=O:ArrayBuffer.isView(O)?V[F]=O.slice():V[F]=O.clone(),!0;{const b=V[F];if(typeof O=="number"||typeof O=="boolean"){if(b!==O)return V[F]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(b.equals(O)===!1)return b.copy(O),!0}}return!1}function T(D){const I=D.uniforms;let N=0;const V=16;for(let F=0,b=I.length;F<b;F++){const L=Array.isArray(I[F])?I[F]:[I[F]];for(let Z=0,G=L.length;Z<G;Z++){const q=L[Z],le=Array.isArray(q.value)?q.value:[q.value];for(let ue=0,j=le.length;ue<j;ue++){const P=le[ue],B=C(P),oe=N%V,me=oe%B.boundary,Se=oe+me;N+=me,Se!==0&&V-Se<B.storage&&(N+=V-Se),q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=B.storage}}}const O=N%V;return O>0&&(N+=V-O),D.__size=N,D.__cache={},this}function C(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(I.boundary=16,I.storage=D.byteLength):it("WebGLRenderer: Unsupported uniform value type.",D),I}function S(D){const I=D.target;I.removeEventListener("dispose",S);const N=d.indexOf(I.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function y(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:p,update:m,dispose:y}}const oA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function lA(){return Hi===null&&(Hi=new KS(oA,16,16,zs,ya),Hi.name="DFG_LUT",Hi.minFilter=zn,Hi.magFilter=zn,Hi.wrapS=va,Hi.wrapT=va,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class cA{constructor(e={}){const{canvas:i=RS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=fi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const C=M,S=new Set([kh,Vh,Gh]),y=new Set([fi,ji,Yo,Zo,Bh,Hh]),D=new Uint32Array(4),I=new Int32Array(4),N=new te;let V=null,O=null;const F=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let G=!1,q=null;this._outputColorSpace=Mi;let le=0,ue=0,j=null,P=-1,B=null;const oe=new on,me=new on;let Se=null;const z=new At(0);let Q=0,xe=i.width,Te=i.height,Ce=1,ae=null,ye=null;const be=new on(0,0,xe,Te),ze=new on(0,0,xe,Te);let $e=!1;const Ke=new Yh;let It=!1,ct=!1;const gt=new ln,pt=new te,at=new on,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function nt(){return j===null?Ce:1}let k=s;function Rt(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",tt,!1),k===null){const Y="webgl2";if(k=Rt(Y,A),k===null)throw Rt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let dt,Dt,Re,$t,w,E,J,ve,Ee,we,Ne,fe,de,Oe,Pe,Ue,De,st,rt,vt,X,Ae,pe;function Be(){dt=new l1(k),dt.init(),X=new $T(k,dt),Dt=new e1(k,dt,e,X),Re=new QT(k,dt),Dt.reversedDepthBuffer&&g&&Re.buffers.depth.setReversed(!0),$t=new f1(k),w=new zT,E=new JT(k,dt,Re,w,Dt,X,$t),J=new o1(Z),ve=new mM(k),Ae=new Jb(k,ve),Ee=new c1(k,ve,$t,Ae),we=new h1(k,Ee,ve,Ae,$t),st=new d1(k,Dt,E),Pe=new t1(w),Ne=new IT(Z,J,dt,Dt,Ae,Pe),fe=new sA(Z,w),de=new BT,Oe=new WT(dt),De=new Qb(Z,J,Re,we,T,p),Ue=new KT(Z,we,Dt),pe=new rA(k,$t,Dt,Re),rt=new $b(k,dt,$t),vt=new u1(k,dt,$t),$t.programs=Ne.programs,Z.capabilities=Dt,Z.extensions=dt,Z.properties=w,Z.renderLists=de,Z.shadowMap=Ue,Z.state=Re,Z.info=$t}Be(),C!==fi&&(L=new m1(C,i.width,i.height,l,c));const Le=new iA(Z,k);this.xr=Le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(xe,Te,!1))},this.getSize=function(A){return A.set(xe,Te)},this.setSize=function(A,Y,se=!0){if(Le.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Te=Y,i.width=Math.floor(A*Ce),i.height=Math.floor(Y*Ce),se===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(xe*Ce,Te*Ce).floor()},this.setDrawingBufferSize=function(A,Y,se){xe=A,Te=Y,Ce=se,i.width=Math.floor(A*se),i.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(C===fi){Ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,Y,se,ne){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,Y,se,ne),Re.viewport(oe.copy(be).multiplyScalar(Ce).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,Y,se,ne){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,Y,se,ne),Re.scissor(me.copy(ze).multiplyScalar(Ce).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){Re.setScissorTest($e=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let ne=0;if(A){let ie=!1;if(j!==null){const Fe=j.texture.format;ie=S.has(Fe)}if(ie){const Fe=j.texture.type,Ve=y.has(Fe),Ie=De.getClearColor(),We=De.getClearAlpha(),ke=Ie.r,Qe=Ie.g,ut=Ie.b;Ve?(D[0]=ke,D[1]=Qe,D[2]=ut,D[3]=We,k.clearBufferuiv(k.COLOR,0,D)):(I[0]=ke,I[1]=Qe,I[2]=ut,I[3]=We,k.clearBufferiv(k.COLOR,0,I))}else ne|=k.COLOR_BUFFER_BIT}Y&&(ne|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),De.dispose(),de.dispose(),Oe.dispose(),w.dispose(),J.dispose(),we.dispose(),Ae.dispose(),pe.dispose(),Ne.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Vr),Le.removeEventListener("sessionend",kr),Ln.stop()};function Me(A){A.preventDefault(),Jg("WebGLRenderer: Context Lost."),G=!0}function qe(){Jg("WebGLRenderer: Context Restored."),G=!1;const A=$t.autoReset,Y=Ue.enabled,se=Ue.autoUpdate,ne=Ue.needsUpdate,ie=Ue.type;Be(),$t.autoReset=A,Ue.enabled=Y,Ue.autoUpdate=se,Ue.needsUpdate=ne,Ue.type=ie}function tt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){const Y=A.target;Y.removeEventListener("dispose",an),Ot(Y)}function Ot(A){di(A),w.remove(A)}function di(A){const Y=w.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Ne.releaseProgram(se)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,ne,ie,Fe){Y===null&&(Y=Jt);const Ve=ie.isMesh&&ie.matrixWorld.determinant()<0,Ie=ba(A,Y,se,ne,ie);Re.setMaterial(ne,Ve);let We=se.index,ke=1;if(ne.wireframe===!0){if(We=Ee.getWireframeAttribute(se),We===void 0)return;ke=2}const Qe=se.drawRange,ut=se.attributes.position;let Ze=Qe.start*ke,Ut=(Qe.start+Qe.count)*ke;Fe!==null&&(Ze=Math.max(Ze,Fe.start*ke),Ut=Math.min(Ut,(Fe.start+Fe.count)*ke)),We!==null?(Ze=Math.max(Ze,0),Ut=Math.min(Ut,We.count)):ut!=null&&(Ze=Math.max(Ze,0),Ut=Math.min(Ut,ut.count));const en=Ut-Ze;if(en<0||en===1/0)return;Ae.setup(ie,ne,Ie,se,We);let Yt,Bt=rt;if(We!==null&&(Yt=ve.get(We),Bt=vt,Bt.setIndex(Yt)),ie.isMesh)ne.wireframe===!0?(Re.setLineWidth(ne.wireframeLinewidth*nt()),Bt.setMode(k.LINES)):Bt.setMode(k.TRIANGLES);else if(ie.isLine){let Ht=ne.linewidth;Ht===void 0&&(Ht=1),Re.setLineWidth(Ht*nt()),ie.isLineSegments?Bt.setMode(k.LINES):ie.isLineLoop?Bt.setMode(k.LINE_LOOP):Bt.setMode(k.LINE_STRIP)}else ie.isPoints?Bt.setMode(k.POINTS):ie.isSprite&&Bt.setMode(k.TRIANGLES);if(ie.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ht=ie._multiDrawStarts,Ge=ie._multiDrawCounts,Nn=ie._multiDrawCount,_t=We?ve.get(We).bytesPerElement:1,_n=w.get(ne).currentProgram.getUniforms();for(let $n=0;$n<Nn;$n++)_n.setValue(k,"_gl_DrawID",$n),Bt.render(Ht[$n]/_t,Ge[$n])}else if(ie.isInstancedMesh)Bt.renderInstances(Ze,en,ie.count);else if(se.isInstancedBufferGeometry){const Ht=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,Ht);Bt.renderInstances(Ze,en,Ge)}else Bt.render(Ze,en)};function Jn(A,Y,se){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,Bs(A,Y,se),A.side=rs,A.needsUpdate=!0,Bs(A,Y,se),A.side=Ui):Bs(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),O=Oe.get(se),O.init(Y),b.push(O),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),A!==se&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),O.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Fe=ie.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Ie=Fe[Ve];Jn(Ie,se,ie),ne.add(Ie)}else Jn(Fe,se,ie),ne.add(Fe)}),O=b.pop(),ne},this.compileAsync=function(A,Y,se=null){const ne=this.compile(A,Y,se);return new Promise(ie=>{function Fe(){if(ne.forEach(function(Ve){w.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){ie(A);return}setTimeout(Fe,10)}dt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ls=null;function Gr(A){ls&&ls(A)}function Vr(){Ln.stop()}function kr(){Ln.start()}const Ln=new b_;Ln.setAnimationLoop(Gr),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){ls=A,Le.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},Le.addEventListener("sessionstart",Vr),Le.addEventListener("sessionend",kr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(A,Y);const se=Le.enabled===!0&&Le.isPresenting===!0,ne=L!==null&&(j===null||se)&&L.begin(Z,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,Y,j),O=Oe.get(A,b.length),O.init(Y),O.state.textureUnits=E.getTextureUnits(),b.push(O),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ke.setFromProjectionMatrix(gt,ki,Y.reversedDepth),ct=this.localClippingEnabled,It=Pe.init(this.clippingPlanes,ct),V=de.get(A,F.length),V.init(),F.push(V),Le.enabled===!0&&Le.isPresenting===!0){const Ve=Z.xr.getDepthSensingMesh();Ve!==null&&cn(Ve,Y,-1/0,Z.sortObjects)}cn(A,Y,0,Z.sortObjects),V.finish(),Z.sortObjects===!0&&V.sort(ae,ye),Ft=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Ft&&De.addToRenderList(V,A),this.info.render.frame++,It===!0&&Pe.beginShadows();const ie=O.state.shadowsArray;if(Ue.render(ie,A,Y),It===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&L.hasRenderPass())===!1){const Ve=V.opaque,Ie=V.transmissive;if(O.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Ie.length>0)for(let ke=0,Qe=We.length;ke<Qe;ke++){const ut=We[ke];Yi(Ve,Ie,A,ut)}Ft&&De.render(A);for(let ke=0,Qe=We.length;ke<Qe;ke++){const ut=We[ke];Tn(V,A,ut,ut.viewport)}}else Ie.length>0&&Yi(Ve,Ie,A,Y),Ft&&De.render(A),Tn(V,A,Y)}j!==null&&ue===0&&(E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j)),ne&&L.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,Y),Ae.resetDefaultState(),P=-1,B=null,b.pop(),b.length>0?(O=b[b.length-1],E.setTextureUnits(O.state.textureUnits),It===!0&&Pe.setGlobalState(Z.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?V=F[F.length-1]:V=null,q!==null&&q.renderEnd()};function cn(A,Y,se,ne){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ke.intersectsSprite(A)){ne&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const Ve=we.update(A),Ie=A.material;Ie.visible&&V.push(A,Ve,Ie,se,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ke.intersectsObject(A))){const Ve=we.update(A),Ie=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),at.copy(Ve.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(Ie)){const We=Ve.groups;for(let ke=0,Qe=We.length;ke<Qe;ke++){const ut=We[ke],Ze=Ie[ut.materialIndex];Ze&&Ze.visible&&V.push(A,Ve,Ze,se,at.z,ut)}}else Ie.visible&&V.push(A,Ve,Ie,se,at.z,null)}}const Fe=A.children;for(let Ve=0,Ie=Fe.length;Ve<Ie;Ve++)cn(Fe[Ve],Y,se,ne)}function Tn(A,Y,se,ne){const{opaque:ie,transmissive:Fe,transparent:Ve}=A;O.setupLightsView(se),It===!0&&Pe.setGlobalState(Z.clippingPlanes,se),ne&&Re.viewport(oe.copy(ne)),ie.length>0&&Ma(ie,Y,se),Fe.length>0&&Ma(Fe,Y,se),Ve.length>0&&Ma(Ve,Y,se),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Yi(A,Y,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ne.id]===void 0){const Ze=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:Ze?ya:fi,minFilter:Os,samples:Math.max(4,Dt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Fe=O.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||oe;Fe.setSize(Ve.z*Z.transmissionResolutionScale,Ve.w*Z.transmissionResolutionScale);const Ie=Z.getRenderTarget(),We=Z.getActiveCubeFace(),ke=Z.getActiveMipmapLevel();Z.setRenderTarget(Fe),Z.getClearColor(z),Q=Z.getClearAlpha(),Q<1&&Z.setClearColor(16777215,.5),Z.clear(),Ft&&De.render(se);const Qe=Z.toneMapping;Z.toneMapping=Xi;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),O.setupLightsView(ne),It===!0&&Pe.setGlobalState(Z.clippingPlanes,ne),Ma(A,se,ne),E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ut=0,en=Y.length;Ut<en;Ut++){const Yt=Y[Ut],{object:Bt,geometry:Ht,material:Ge,group:Nn}=Yt;if(Ge.side===Ui&&Bt.layers.test(ne.layers)){const _t=Ge.side;Ge.side=Kn,Ge.needsUpdate=!0,el(Bt,se,ne,Ht,Ge,Nn),Ge.side=_t,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe))}Z.setRenderTarget(Ie,We,ke),Z.setClearColor(z,Q),ut!==void 0&&(ne.viewport=ut),Z.toneMapping=Qe}function Ma(A,Y,se){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Fe=A.length;ie<Fe;ie++){const Ve=A[ie],{object:Ie,geometry:We,group:ke}=Ve;let Qe=Ve.material;Qe.allowOverride===!0&&ne!==null&&(Qe=ne),Ie.layers.test(se.layers)&&el(Ie,Y,se,We,Qe,ke)}}function el(A,Y,se,ne,ie,Fe){A.onBeforeRender(Z,Y,se,ne,ie,Fe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(Z,Y,se,ne,A,Fe),ie.transparent===!0&&ie.side===Ui&&ie.forceSinglePass===!1?(ie.side=Kn,ie.needsUpdate=!0,Z.renderBufferDirect(se,Y,ne,ie,A,Fe),ie.side=rs,ie.needsUpdate=!0,Z.renderBufferDirect(se,Y,ne,ie,A,Fe),ie.side=Ui):Z.renderBufferDirect(se,Y,ne,ie,A,Fe),A.onAfterRender(Z,Y,se,ne,ie,Fe)}function Bs(A,Y,se){Y.isScene!==!0&&(Y=Jt);const ne=w.get(A),ie=O.state.lights,Fe=O.state.shadowsArray,Ve=ie.state.version,Ie=Ne.getParameters(A,ie.state,Fe,Y,se,O.state.lightProbeGridArray),We=Ne.getProgramCacheKey(Ie);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=J.get(A.envMap||ne.environment,Qe),ne.envMapRotation=ne.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",an),ke=new Map,ne.programs=ke);let ut=ke.get(We);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Ve)return Ea(A,Ie),ut}else Ie.uniforms=Ne.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,se,Ie),A.onBeforeCompile(Ie,Z),ut=Ne.acquireProgram(Ie,We),ke.set(We,ut),ne.uniforms=Ie.uniforms;const Ze=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Pe.uniform),Ea(A,Ie),ne.needsLights=cs(A),ne.lightsStateVersion=Ve,ne.needsLights&&(Ze.ambientLightColor.value=ie.state.ambient,Ze.lightProbe.value=ie.state.probe,Ze.directionalLights.value=ie.state.directional,Ze.directionalLightShadows.value=ie.state.directionalShadow,Ze.spotLights.value=ie.state.spot,Ze.spotLightShadows.value=ie.state.spotShadow,Ze.rectAreaLights.value=ie.state.rectArea,Ze.ltc_1.value=ie.state.rectAreaLTC1,Ze.ltc_2.value=ie.state.rectAreaLTC2,Ze.pointLights.value=ie.state.point,Ze.pointLightShadows.value=ie.state.pointShadow,Ze.hemisphereLights.value=ie.state.hemi,Ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ie.state.spotLightMatrix,Ze.spotLightMap.value=ie.state.spotLightMap,Ze.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=O.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function Xr(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Hc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ea(A,Y){const se=w.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Wr(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition(Y.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const ie=A[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(N))return ie}return null}function ba(A,Y,se,ne,ie){Y.isScene!==!0&&(Y=Jt),E.resetTextureUnits();const Fe=Y.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Ie=j===null?Z.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Tt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=J.get(ne.envMap||Ve,We),Qe=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!se.morphAttributes.position,Ut=!!se.morphAttributes.normal,en=!!se.morphAttributes.color;let Yt=Xi;ne.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Yt=Z.toneMapping);const Bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ht=Bt!==void 0?Bt.length:0,Ge=w.get(ne),Nn=O.state.lights;if(It===!0&&(ct===!0||A!==B)){const zt=A===B&&ne.id===P;Pe.setState(ne,A,zt)}let _t=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Nn.state.version||Ge.outputColorSpace!==Ie||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==ke||ne.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Qe||Ge.vertexTangents!==ut||Ge.morphTargets!==Ze||Ge.morphNormals!==Ut||Ge.morphColors!==en||Ge.toneMapping!==Yt||Ge.morphTargetsCount!==Ht||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ge.__version=ne.version);let _n=Ge.currentProgram;_t===!0&&(_n=Bs(ne,Y,ie),q&&ne.isNodeMaterial&&q.onUpdateProgram(ne,_n,Ge));let $n=!1,Ei=!1,ei=!1;const Gt=_n.getUniforms(),tn=Ge.uniforms;if(Re.useProgram(_n.program)&&($n=!0,Ei=!0,ei=!0),ne.id!==P&&(P=ne.id,Ei=!0),Ge.needsLights){const zt=Wr(O.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==zt&&(Ge.lightProbeGrid=zt,Ei=!0)}if($n||B!==A){Re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(k,"projectionMatrix",A.projectionMatrix),Gt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Oi=Gt.map.cameraPosition;Oi!==void 0&&Oi.setValue(k,pt.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Ei=!0,ei=!0)}if(Ge.needsLights&&(Nn.state.directionalShadowMap.length>0&&Gt.setValue(k,"directionalShadowMap",Nn.state.directionalShadowMap,E),Nn.state.spotShadowMap.length>0&&Gt.setValue(k,"spotShadowMap",Nn.state.spotShadowMap,E),Nn.state.pointShadowMap.length>0&&Gt.setValue(k,"pointShadowMap",Nn.state.pointShadowMap,E)),ie.isSkinnedMesh){Gt.setOptional(k,ie,"bindMatrix"),Gt.setOptional(k,ie,"bindMatrixInverse");const zt=ie.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Gt.setValue(k,"boneTexture",zt.boneTexture,E))}ie.isBatchedMesh&&(Gt.setOptional(k,ie,"batchingTexture"),Gt.setValue(k,"batchingTexture",ie._matricesTexture,E),Gt.setOptional(k,ie,"batchingIdTexture"),Gt.setValue(k,"batchingIdTexture",ie._indirectTexture,E),Gt.setOptional(k,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Gt.setValue(k,"batchingColorTexture",ie._colorsTexture,E));const bi=se.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&st.update(ie,se,_n),(Ei||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,Gt.setValue(k,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(tn.envMapIntensity.value=Y.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=lA()),Ei){if(Gt.setValue(k,"toneMappingExposure",Z.toneMappingExposure),Ge.needsLights&&Ta(tn,ei),Fe&&ne.fog===!0&&fe.refreshFogUniforms(tn,Fe),fe.refreshMaterialUniforms(tn,ne,Ce,Te,O.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const zt=Ge.lightProbeGrid;tn.probesSH.value=zt.texture,tn.probesMin.value.copy(zt.boundingBox.min),tn.probesMax.value.copy(zt.boundingBox.max),tn.probesResolution.value.copy(zt.resolution)}Hc.upload(k,Xr(Ge),tn,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hc.upload(k,Xr(Ge),tn,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Gt.setValue(k,"center",ie.center),Gt.setValue(k,"modelViewMatrix",ie.modelViewMatrix),Gt.setValue(k,"normalMatrix",ie.normalMatrix),Gt.setValue(k,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const zt=ne.uniformsGroups;for(let Oi=0,Ra=zt.length;Oi<Ra;Oi++){const us=zt[Oi];pe.update(us,_n),pe.bind(us,_n)}}return _n}function Ta(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function cs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,Y,se){const ne=w.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=Y,w.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=w.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Aa=k.createFramebuffer();this.setRenderTarget=function(A,Y=0,se=0){j=A,le=Y,ue=se;let ne=null,ie=!1,Fe=!1;if(A){const Ie=w.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(k.FRAMEBUFFER,Ie.__webglFramebuffer),oe.copy(A.viewport),me.copy(A.scissor),Se=A.scissorTest,Re.viewport(oe),Re.scissor(me),Re.setScissorTest(Se),P=-1;return}else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ie.__hasExternalTextures)E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&w.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const ke=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[Y])?ne=ke[Y][se]:ne=ke[Y],ie=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?ne=w.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[se]:ne=ke,oe.copy(A.viewport),me.copy(A.scissor),Se=A.scissorTest}else oe.copy(be).multiplyScalar(Ce).floor(),me.copy(ze).multiplyScalar(Ce).floor(),Se=$e;if(se!==0&&(ne=Aa),Re.bindFramebuffer(k.FRAMEBUFFER,ne)&&Re.drawBuffers(A,ne),Re.viewport(oe),Re.scissor(me),Re.setScissorTest(Se),ie){const Ie=w.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,se)}else if(Fe){const Ie=Y;for(let We=0;We<A.textures.length;We++){const ke=w.get(A.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,ke.__webglTexture,se,Ie)}}else if(A!==null&&se!==0){const Ie=w.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(A,Y,se,ne,ie,Fe,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){Re.bindFramebuffer(k.FRAMEBUFFER,We);try{const ke=A.textures[Ie],Qe=ke.format,ut=ke.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ie),!Dt.textureFormatReadable(Qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ut)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ne&&se>=0&&se<=A.height-ie&&k.readPixels(Y,se,ne,ie,X.convert(Qe),X.convert(ut),Fe)}finally{const ke=j!==null?w.get(j).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,ne,ie,Fe,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(Y>=0&&Y<=A.width-ne&&se>=0&&se<=A.height-ie){Re.bindFramebuffer(k.FRAMEBUFFER,We);const ke=A.textures[Ie],Qe=ke.format,ut=ke.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ie),!Dt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.bufferData(k.PIXEL_PACK_BUFFER,Fe.byteLength,k.STREAM_READ),k.readPixels(Y,se,ne,ie,X.convert(Qe),X.convert(ut),0);const Ut=j!==null?w.get(j).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Ut);const en=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await CS(k,en,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Fe),k.deleteBuffer(Ze),k.deleteSync(en),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(A.image.width*ne),Fe=Math.floor(A.image.height*ne),Ve=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;E.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Ve,Ie,ie,Fe),Re.unbindTexture()};const dn=k.createFramebuffer(),tl=k.createFramebuffer();this.copyTextureToTexture=function(A,Y,se=null,ne=null,ie=0,Fe=0){let Ve,Ie,We,ke,Qe,ut,Ze,Ut,en;const Yt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(se!==null)Ve=se.max.x-se.min.x,Ie=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Qe=se.min.y,ut=se.isBox3?se.min.z:0;else{const tn=Math.pow(2,-ie);Ve=Math.floor(Yt.width*tn),Ie=Math.floor(Yt.height*tn),A.isDataArrayTexture?We=Yt.depth:A.isData3DTexture?We=Math.floor(Yt.depth*tn):We=1,ke=0,Qe=0,ut=0}ne!==null?(Ze=ne.x,Ut=ne.y,en=ne.z):(Ze=0,Ut=0,en=0);const Bt=X.convert(Y.format),Ht=X.convert(Y.type);let Ge;Y.isData3DTexture?(E.setTexture3D(Y,0),Ge=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(E.setTexture2DArray(Y,0),Ge=k.TEXTURE_2D_ARRAY):(E.setTexture2D(Y,0),Ge=k.TEXTURE_2D),Re.activeTexture(k.TEXTURE0),Re.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),Re.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Re.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Nn=Re.getParameter(k.UNPACK_ROW_LENGTH),_t=Re.getParameter(k.UNPACK_IMAGE_HEIGHT),_n=Re.getParameter(k.UNPACK_SKIP_PIXELS),$n=Re.getParameter(k.UNPACK_SKIP_ROWS),Ei=Re.getParameter(k.UNPACK_SKIP_IMAGES);Re.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),Re.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),Re.pixelStorei(k.UNPACK_SKIP_PIXELS,ke),Re.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),Re.pixelStorei(k.UNPACK_SKIP_IMAGES,ut);const ei=A.isDataArrayTexture||A.isData3DTexture,Gt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const tn=w.get(A),bi=w.get(Y),zt=w.get(tn.__renderTarget),Oi=w.get(bi.__renderTarget);Re.bindFramebuffer(k.READ_FRAMEBUFFER,zt.__webglFramebuffer),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ra=0;Ra<We;Ra++)ei&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,w.get(A).__webglTexture,ie,ut+Ra),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,w.get(Y).__webglTexture,Fe,en+Ra)),k.blitFramebuffer(ke,Qe,Ve,Ie,Ze,Ut,Ve,Ie,k.DEPTH_BUFFER_BIT,k.NEAREST);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||w.has(A)){const tn=w.get(A),bi=w.get(Y);Re.bindFramebuffer(k.READ_FRAMEBUFFER,dn),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,tl);for(let zt=0;zt<We;zt++)ei?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,ie,ut+zt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,ie),Gt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bi.__webglTexture,Fe,en+zt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bi.__webglTexture,Fe),ie!==0?k.blitFramebuffer(ke,Qe,Ve,Ie,Ze,Ut,Ve,Ie,k.COLOR_BUFFER_BIT,k.NEAREST):Gt?k.copyTexSubImage3D(Ge,Fe,Ze,Ut,en+zt,ke,Qe,Ve,Ie):k.copyTexSubImage2D(Ge,Fe,Ze,Ut,ke,Qe,Ve,Ie);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ge,Fe,Ze,Ut,en,Ve,Ie,We,Bt,Ht,Yt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,Fe,Ze,Ut,en,Ve,Ie,We,Bt,Yt.data):k.texSubImage3D(Ge,Fe,Ze,Ut,en,Ve,Ie,We,Bt,Ht,Yt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Fe,Ze,Ut,Ve,Ie,Bt,Ht,Yt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Fe,Ze,Ut,Yt.width,Yt.height,Bt,Yt.data):k.texSubImage2D(k.TEXTURE_2D,Fe,Ze,Ut,Ve,Ie,Bt,Ht,Yt);Re.pixelStorei(k.UNPACK_ROW_LENGTH,Nn),Re.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),Re.pixelStorei(k.UNPACK_SKIP_PIXELS,_n),Re.pixelStorei(k.UNPACK_SKIP_ROWS,$n),Re.pixelStorei(k.UNPACK_SKIP_IMAGES,Ei),Fe===0&&Y.generateMipmaps&&k.generateMipmap(Ge),Re.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){le=0,ue=0,j=null,Re.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function uA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current,i=e.clientWidth,s=e.clientHeight,l=new XS,c=new ui(60,i/s,.1,100);c.position.set(0,0,5);const d=new cA({antialias:!0,alpha:!0});d.setSize(i,s),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setClearColor(0,0),e.appendChild(d.domElement);const h=new Wo;l.add(h);const p=new is(.55,.65,1.8,64,1,!1),m=new Go({color:1708040,metalness:.1,roughness:.05,transmission:.85,thickness:1.2,ior:1.5,reflectivity:.9,transparent:!0,opacity:.92,side:Ui}),x=new bn(p,m);h.add(x);const _=new is(.3,.55,.4,64),g=new bn(_,m);g.position.y=1.1,h.add(g);const M=new is(.22,.3,.5,32),T=new bn(M,m);T.position.y=1.55,h.add(T);const C=new is(.28,.26,.6,32),S=new Go({color:13938794,metalness:.95,roughness:.1,reflectivity:1}),y=new bn(C,S);y.position.y=2.1,h.add(y);const D=new Zh(.28,32,16,0,Math.PI*2,0,Math.PI/2),I=new bn(D,S);I.position.y=2.4,h.add(I);const N=new is(.48,.58,1.4,32),V=new Go({color:11035658,metalness:0,roughness:.1,transparent:!0,opacity:.6,transmission:.3}),O=new bn(N,V);O.position.y=-.15,h.add(O);const F=new Ir(.8,.5),b=new Go({color:13938794,metalness:.9,roughness:.2,transparent:!0,opacity:.85}),L=new bn(F,b);L.position.set(0,0,.56),h.add(L);const Z=new is(.65,.62,.12,32),G=new Go({color:13938794,metalness:.9,roughness:.15}),q=new bn(Z,G);q.position.y=-.96,h.add(q),h.position.set(2.5,-.3,0),h.scale.setScalar(1.2);const le=800,ue=new Float32Array(le*3),j=new Float32Array(le*3),P=new Float32Array(le);for(let nt=0;nt<le;nt++){const k=3+Math.random()*6,Rt=Math.random()*Math.PI*2,dt=Math.random()*Math.PI;ue[nt*3]=k*Math.sin(dt)*Math.cos(Rt),ue[nt*3+1]=(Math.random()-.5)*8,ue[nt*3+2]=k*Math.sin(dt)*Math.sin(Rt)-2;const Dt=.4+Math.random()*.6;j[nt*3]=Dt*.83,j[nt*3+1]=Dt*.69,j[nt*3+2]=Dt*.42,P[nt]=Math.random()*3+.5}const B=new Qn;B.setAttribute("position",new Zn(ue,3)),B.setAttribute("color",new Zn(j,3)),B.setAttribute("size",new Zn(P,1));const oe=new Lh({size:.04,vertexColors:!0,transparent:!0,opacity:.7,blending:qo,depthWrite:!1}),me=new pv(B,oe);l.add(me);const Se=[],z=new qh({color:13938794,transparent:!0,opacity:.02,side:Ui,blending:qo,depthWrite:!1});for(let nt=0;nt<8;nt++){const k=new Ir(4+Math.random()*4,4+Math.random()*4),Rt=new bn(k,z.clone());Rt.position.set((Math.random()-.5)*6,(Math.random()-.5)*4,-1-Math.random()*2),Rt.rotation.z=Math.random()*Math.PI,l.add(Rt),Se.push(Rt)}const Q=new fM(16777215,.3);l.add(Q);const xe=new Pd(13938794,3);xe.position.set(3,5,3),l.add(xe);const Te=new Pd(16777215,1);Te.position.set(-3,0,2),l.add(Te);const Ce=new Pd(13938794,2);Ce.position.set(-2,3,-3),l.add(Ce);const ae=new Sv(13938794,4,8);ae.position.set(2,2,3),l.add(ae);const ye=new Sv(8413439,1.5,6);ye.position.set(-3,-1,2),l.add(ye);const be=300,ze=new Float32Array(be*3);for(let nt=0;nt<be;nt++)ze[nt*3]=(Math.random()-.5)*30,ze[nt*3+1]=(Math.random()-.5)*20,ze[nt*3+2]=-5-Math.random()*10;const $e=new Qn;$e.setAttribute("position",new Zn(ze,3));const Ke=new Lh({color:16777215,size:.02,transparent:!0,opacity:.4,blending:qo});l.add(new pv($e,Ke));let It=0,ct=0;const gt=nt=>{It=(nt.clientX/window.innerWidth-.5)*2,ct=-(nt.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",gt);let pt=0;const at=()=>{const nt=requestAnimationFrame(at);at._raf=nt,pt+=.008,h.rotation.y=Math.sin(pt*.4)*.25+It*.15,h.rotation.x=ct*.08,h.position.y=-.3+Math.sin(pt*.5)*.08,O.rotation.y=pt*.3,me.rotation.y=pt*.05,me.rotation.x=pt*.02,Se.forEach((k,Rt)=>{k.material.opacity=.015+Math.sin(pt+Rt)*.008,k.rotation.z+=.001*(Rt%2===0?1:-1),k.position.y+=.001,k.position.y>5&&(k.position.y=-5)}),ae.intensity=3.5+Math.sin(pt*1.5)*.8,ae.position.x=Math.sin(pt)*3,ae.position.z=Math.cos(pt)*3,d.render(l,c)};at();const Jt=()=>{const nt=e.clientWidth,k=e.clientHeight;c.aspect=nt/k,c.updateProjectionMatrix(),d.setSize(nt,k)};window.addEventListener("resize",Jt);const Ft=()=>{const nt=window.scrollY/(window.innerHeight*.8);h.scale.setScalar(1.2+nt*.4),c.position.z=5-nt*1.5};return window.addEventListener("scroll",Ft,{passive:!0}),()=>{window.removeEventListener("mousemove",gt),window.removeEventListener("resize",Jt),window.removeEventListener("scroll",Ft),cancelAnimationFrame(at._raf),e.removeChild(d.domElement),d.dispose()}},[]),U.jsx("div",{ref:o,style:{position:"absolute",inset:0,backgroundImage:"url(/images/hero-bg.jpg)",backgroundSize:"cover",backgroundPosition:"center"}})}function fA(){const o=Xe.useRef(null),e=Xe.useRef(null),i=Xe.useRef(null),s=Xe.useRef(null),l=Xe.useRef(null),c=Xe.useRef(null);return Xe.useEffect(()=>{[{el:o.current,delay:200},{el:e.current,delay:400},{el:i.current,delay:600},{el:s.current,delay:800},{el:l.current,delay:1e3},{el:c.current,delay:1400}].forEach(({el:p,delay:m})=>{p&&setTimeout(()=>{p.style.transition="opacity 1.2s ease, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",p.style.transform="translateY(0)",p.style.opacity="1"},m+1600)});const h=()=>{const p=window.scrollY/window.innerHeight,m=document.querySelector(".hero-content");m&&(m.style.transform=`translateY(${p*80}px)`,m.style.opacity=String(Math.max(0,1-p*2)))};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]),U.jsxs("section",{id:"hero",children:[U.jsx(uA,{}),U.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,background:"linear-gradient(90deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.1) 100%)",pointerEvents:"none"}}),U.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,background:"radial-gradient(ellipse at 70% 50%, rgba(212,176,106,0.06) 0%, transparent 60%)",pointerEvents:"none"}}),U.jsxs("div",{className:"hero-content",style:{position:"relative",zIndex:10},children:[U.jsx("div",{ref:o,className:"hero-eyebrow",style:{transform:"translateY(20px)"},children:"— Haute Parfumerie —"}),U.jsx("h1",{ref:e,className:"hero-title",style:{transform:"translateY(40px)"},children:"FLY"}),U.jsx("div",{ref:i,className:"hero-subtitle",style:{transform:"translateY(30px)"},children:"Beyond Fragrance"}),U.jsx("p",{ref:s,className:"hero-desc",style:{transform:"translateY(24px)"},children:"Where ancient alchemy meets modern luxury. Each bottle holds a universe of rare ingredients, crafted by master perfumers for those who dare to transcend."}),U.jsxs("a",{ref:l,href:"#collection",className:"btn-luxury",style:{transform:"translateY(20px)"},onClick:d=>{d.preventDefault(),document.getElementById("collection")?.scrollIntoView({behavior:"smooth"})},children:[U.jsx("div",{className:"btn-shine"}),U.jsx("span",{children:"Explore Collection"}),U.jsx("span",{style:{fontSize:"16px",lineHeight:1},children:"→"})]})]}),U.jsxs("div",{ref:c,className:"hero-scroll-indicator",style:{opacity:0},children:[U.jsx("span",{className:"hero-scroll-text",children:"Scroll"}),U.jsx("div",{className:"hero-scroll-line"})]})]})}const dA=[{id:"01",name:"Noir Essence",desc:"A hypnotic darkness. Black orchid, smoked oud, and liquid velvet whispered into existence.",price:"€380",gradient:"linear-gradient(145deg, #0D0A06 0%, #1A0F05 40%, #0A0808 100%)",accent:"#D4B06A",notes:"Oud · Black Orchid · Vetiver",image:"https://images.pexels.com/photos/11517300/pexels-photo-11517300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{id:"02",name:"Amber Gold",desc:"Liquid sun captured. Raw amber, warm saffron, and honeyed benzoin from ancient bazaars.",price:"€420",gradient:"linear-gradient(145deg, #150A02 0%, #2A1506 40%, #0F0C06 100%)",accent:"#E8CC8A",notes:"Saffron · Amber · Benzoin",image:"https://images.pexels.com/photos/10924522/pexels-photo-10924522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{id:"03",name:"Midnight Oud",desc:"The hour between dusk and dawn. Vietnamese oud, rose absolue, and crystalline musk.",price:"€560",gradient:"linear-gradient(145deg, #060810 0%, #0A0D1A 40%, #060608 100%)",accent:"#A090D4",notes:"Vietnamese Oud · Rose · Musk",image:"https://images.pexels.com/photos/29986521/pexels-photo-29986521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{id:"04",name:"Royal Elixir",desc:"The crowning jewel. Grasse jasmine, Taif rose, and a heart of precious agarwood.",price:"€680",gradient:"linear-gradient(145deg, #100808 0%, #200D0A 40%, #100808 100%)",accent:"#D48A6A",notes:"Jasmine · Taif Rose · Agarwood",image:"https://images.pexels.com/photos/28664171/pexels-photo-28664171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}];function hA(){const o=Xe.useRef(null),e=Xe.useRef(null),i=Xe.useRef(!1),s=Xe.useRef(0),l=Xe.useRef(0);return Xe.useEffect(()=>{const c=new IntersectionObserver(M=>{M.forEach(T=>{T.isIntersecting&&T.target.classList.add("visible")})},{threshold:.2});e.current&&c.observe(e.current);const d=document.querySelectorAll(".perfume-card"),h=new IntersectionObserver(M=>{M.forEach((T,C)=>{T.isIntersecting&&setTimeout(()=>{T.target.style.opacity="1",T.target.style.transform="translateY(0)"},C*120)})},{threshold:.1});d.forEach(M=>{M.style.opacity="0",M.style.transform="translateY(60px)",M.style.transition="opacity 0.9s ease, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",h.observe(M)});const p=o.current,m=M=>{i.current=!0,p.classList.add("active"),s.current=M.pageX-p.offsetLeft,l.current=p.scrollLeft},x=()=>{i.current=!1,p.classList.remove("active")},_=()=>{i.current=!1,p.classList.remove("active")},g=M=>{if(!i.current)return;M.preventDefault();const C=(M.pageX-p.offsetLeft-s.current)*1.5;p.scrollLeft=l.current-C};return p.addEventListener("mousedown",m),p.addEventListener("mouseleave",x),p.addEventListener("mouseup",_),p.addEventListener("mousemove",g),()=>{c.disconnect(),h.disconnect(),p.removeEventListener("mousedown",m),p.removeEventListener("mouseleave",x),p.removeEventListener("mouseup",_),p.removeEventListener("mousemove",g)}},[]),U.jsxs("section",{id:"collection",style:{padding:"clamp(80px, 10vw, 160px) 0",background:"var(--black)",overflow:"hidden"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsxs("div",{ref:e,className:"collection-header fade-up",style:{padding:"0 clamp(20px, 6vw, 120px)"},children:[U.jsx("div",{className:"section-label",children:"— Our Signature Collection —"}),U.jsxs("h2",{className:"section-title",children:["Rare. ",U.jsx("em",{children:"Eternal."}),U.jsx("br",{}),"Unmistakable."]})]}),U.jsx("div",{ref:o,className:"collection-track",children:dA.map(c=>U.jsxs("div",{className:"perfume-card glass-card",children:[U.jsx("div",{className:"perfume-card-bg",style:{backgroundImage:`url(${c.image})`}}),U.jsx("div",{className:"perfume-card-overlay"}),U.jsx("div",{className:"perfume-card-glow"}),U.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg, transparent, ${c.accent}, transparent)`,opacity:.6,zIndex:3}}),U.jsxs("div",{className:"perfume-card-content",style:{position:"relative",zIndex:4},children:[U.jsx("div",{className:"perfume-card-number",children:c.id}),U.jsx("div",{className:"perfume-card-name",children:c.name}),U.jsx("div",{className:"perfume-card-desc",children:c.desc}),U.jsx("div",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"rgba(212,176,106,0.6)",textTransform:"uppercase",marginBottom:"20px"},children:c.notes}),U.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[U.jsx("div",{className:"perfume-card-price",children:c.price}),U.jsx("button",{style:{background:"none",border:"1px solid rgba(212,176,106,0.4)",color:"var(--gold)",fontSize:"10px",letterSpacing:"0.3em",padding:"8px 16px",textTransform:"uppercase",cursor:"none",transition:"all 0.3s ease"},onMouseEnter:d=>{d.target.style.background="var(--gold)",d.target.style.color="var(--black)"},onMouseLeave:d=>{d.target.style.background="none",d.target.style.color="var(--gold)"},children:"Add"})]})]})]},c.id))}),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"28px clamp(32px, 8vw, 120px) 0",color:"rgba(245,245,240,0.25)",fontSize:"11px",letterSpacing:"0.3em"},children:[U.jsx("span",{children:"←"}),U.jsx("span",{children:"Drag to explore"}),U.jsx("span",{children:"→"})]})]})}function pA(){const o=Xe.useRef(null),e=Xe.useRef(null),i=Xe.useRef(null),s=Xe.useRef([]);Xe.useEffect(()=>{const c=()=>{if(!o.current||!e.current)return;const p=o.current.getBoundingClientRect(),m=-p.top/(p.height-window.innerHeight),x=Math.max(0,Math.min(1,m));e.current.style.transform=`translateY(${x*60-30}px) scale(1.12)`},d=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(m.target.classList.add("visible"),m.target.querySelectorAll(".line").forEach((_,g)=>{setTimeout(()=>{_.style.transform="translateY(0)"},g*120)}))})},{threshold:.15}),h=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&i.current&&(i.current.style.opacity="1",i.current.style.transform="translateY(0)")})},{threshold:.2});return i.current&&h.observe(i.current),s.current.forEach(p=>{p&&d.observe(p)}),window.addEventListener("scroll",c,{passive:!0}),()=>{d.disconnect(),h.disconnect(),window.removeEventListener("scroll",c)}},[]);const l=["Born from the whispers of ancient perfumers and the vision of tomorrow, FLY is not merely a fragrance house. It is an institution — a living archive of the world's most extraordinary scents.","Our master perfumer, after thirty years traversing the rose valleys of Taif, the oud forests of Borneo, and the jasmine fields of Grasse, distilled a single truth: the most powerful perfumes don't just smell — they remember.","Each FLY creation begins with a story. Then a silence. Then a single note that captures the soul of a moment frozen in time, translated into liquid form for those who understand the language of scent."];return U.jsxs("section",{id:"story",ref:o,style:{display:"grid",gridTemplateColumns:"1fr 1fr",overflow:"hidden",position:"relative"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsxs("div",{className:"story-left",children:[U.jsx("div",{className:"section-label",style:{marginBottom:"24px"},children:"— The Story —"}),U.jsxs("h2",{ref:i,style:{fontFamily:"var(--font-serif)",fontSize:"clamp(52px, 7vw, 100px)",fontWeight:600,lineHeight:.95,marginBottom:"60px",opacity:0,transform:"translateY(40px)",transition:"opacity 1.2s ease, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},children:["The Art of",U.jsx("br",{}),U.jsx("em",{style:{fontStyle:"italic",color:"var(--gold)"},children:"Invisible"}),U.jsx("br",{}),"Architecture"]}),l.map((c,d)=>U.jsx("p",{ref:h=>{s.current[d]=h},className:"story-paragraph",style:{fontSize:"15px",lineHeight:1.9,color:"rgba(245,245,240,0.55)",marginBottom:"28px",overflow:"hidden"},children:c.split(". ").map((h,p)=>U.jsxs("span",{className:"line",style:{display:"block",transform:"translateY(100%)",transition:`transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p*.15}s`},children:[h,p<c.split(". ").length-1?". ":""]},p))},d)),U.jsx("div",{style:{marginTop:"48px"},children:U.jsxs("a",{href:"#notes",className:"btn-luxury",onClick:c=>{c.preventDefault(),document.getElementById("notes")?.scrollIntoView({behavior:"smooth"})},style:{opacity:1},children:[U.jsx("div",{className:"btn-shine"}),U.jsx("span",{children:"Discover Our Notes"})]})}),U.jsx("div",{style:{width:"60px",height:"1px",background:"var(--gold)",marginTop:"60px",opacity:.4}}),U.jsx("div",{style:{marginTop:"20px",fontFamily:"var(--font-serif)",fontStyle:"italic",fontSize:"14px",color:"var(--gray)",letterSpacing:"0.05em"},children:'"Perfume is the art that makes memory speak."'})]}),U.jsxs("div",{className:"story-right",style:{position:"relative",overflow:"hidden"},children:[U.jsx("div",{ref:e,style:{position:"absolute",inset:"-10%",backgroundImage:"url(/images/story-bg.jpg)",backgroundSize:"cover",backgroundPosition:"center",transform:"scale(1.12)",transition:"transform 0.05s ease-out",filter:"brightness(0.6) saturate(0.8)"}}),U.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.1) 100%)",zIndex:1}}),U.jsx("div",{style:{position:"absolute",left:0,top:"10%",bottom:"10%",width:"1px",background:"linear-gradient(180deg, transparent, var(--gold), transparent)",opacity:.3,zIndex:2}}),U.jsxs("div",{style:{position:"absolute",bottom:"60px",right:"48px",zIndex:2,textAlign:"right"},children:[U.jsx("div",{style:{fontFamily:"var(--font-serif)",fontSize:"clamp(60px, 8vw, 100px)",fontWeight:700,color:"transparent",WebkitTextStroke:"1px rgba(212,176,106,0.2)",lineHeight:1},children:"1993"}),U.jsx("div",{style:{fontSize:"11px",letterSpacing:"0.3em",color:"var(--gold)",textTransform:"uppercase"},children:"Est. Paris"})]})]})]})}const qv=[{type:"Top Notes",className:"sphere-top",ingredients:["Bergamot","Mandarin","Pink Pepper"],emoji:"✦",desc:"The opening whisper",particleColor:"rgba(255, 220, 150,"},{type:"Heart Notes",className:"sphere-heart",ingredients:["Rose","Saffron","Jasmine"],emoji:"◈",desc:"The soul of the fragrance",particleColor:"rgba(255, 160, 160,"},{type:"Base Notes",className:"sphere-base",ingredients:["Vanilla","Amber","Musk"],emoji:"◉",desc:"The eternal signature",particleColor:"rgba(180, 120, 60,"}];function mA(){const o=Xe.useRef(null),e=Xe.useRef([]),i=Xe.useRef([]),s=Xe.useRef([]);return Xe.useEffect(()=>{const l=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&h.target.classList.add("visible")})},{threshold:.1});o.current&&o.current.querySelectorAll(".fade-up").forEach(h=>l.observe(h));const c=new IntersectionObserver(([d])=>{d.isIntersecting||(s.current.forEach(h=>cancelAnimationFrame(h)),s.current=[])},{rootMargin:"100px"});return o.current&&c.observe(o.current),i.current.forEach((d,h)=>{if(!d)return;const p=d.getContext("2d");d.width=240,d.height=240;const m=qv[h].particleColor,x=[],_=()=>{const T=Math.random()*Math.PI*2,C=65+Math.random()*15;x.push({x:120+Math.cos(T)*C,y:120+Math.sin(T)*C,vx:Math.cos(T)*.4+(Math.random()-.5)*.5,vy:Math.sin(T)*.4-Math.random()*.8,life:0,maxLife:80+Math.random()*60,size:Math.random()*2.5+.5})};let g=0;const M=()=>{const T=requestAnimationFrame(M);s.current[h]=T,g++,g%3===0&&_(),p.clearRect(0,0,240,240);for(let C=x.length-1;C>=0;C--){const S=x[C];if(S.x+=S.vx,S.y+=S.vy,S.vy-=.01,S.life++,S.life>=S.maxLife){x.splice(C,1);continue}const y=(1-S.life/S.maxLife)*.7;p.beginPath(),p.arc(S.x,S.y,S.size,0,Math.PI*2),p.fillStyle=`${m}${y})`,p.fill()}};M()}),e.current.forEach(d=>{if(!d)return;const h=m=>{const x=d.getBoundingClientRect(),_=x.left+x.width/2,g=x.top+x.height/2,M=(m.clientX-_)/x.width,T=(m.clientY-g)/x.height;d.style.transform=`perspective(400px) rotateX(${-T*15}deg) rotateY(${M*15}deg) scale(1.1) translateY(-8px)`},p=()=>{d.style.transform="",d.style.transition="transform 0.5s ease"};d.addEventListener("mousemove",h),d.addEventListener("mouseleave",p)}),()=>{l.disconnect(),s.current.forEach(d=>cancelAnimationFrame(d)),c.disconnect()}},[]),U.jsxs("section",{id:"notes",ref:o,style:{padding:"clamp(80px, 10vw, 160px) clamp(20px, 8vw, 120px)",background:"radial-gradient(ellipse at center, rgba(212,176,106,0.04) 0%, transparent 70%)",textAlign:"center",overflow:"hidden",position:"relative"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsx("div",{className:"fade-up",style:{marginBottom:"16px"},children:U.jsx("div",{className:"section-label",children:"— Olfactory Pyramid —"})}),U.jsxs("h2",{className:"section-title fade-up",style:{marginBottom:"24px"},children:["The Fragrance ",U.jsx("em",{children:"Architecture"})]}),U.jsx("p",{className:"fade-up",style:{fontSize:"15px",color:"rgba(245,245,240,0.4)",maxWidth:"480px",margin:"0 auto 80px",lineHeight:1.8},children:"Every FLY creation unfolds in three acts — a symphony of rare ingredients that reveal themselves across hours, days, and memories."}),U.jsx("div",{className:"notes-spheres",children:qv.map((l,c)=>U.jsxs("div",{className:"sphere-wrap fade-up",style:{transitionDelay:`${c*.15}s`},children:[U.jsxs("div",{style:{position:"relative",width:"clamp(140px, 16vw, 200px)",height:"clamp(140px, 16vw, 200px)"},children:[U.jsx("canvas",{ref:d=>{i.current[c]=d},style:{position:"absolute",inset:"-20%",width:"140%",height:"140%",pointerEvents:"none",zIndex:3},width:240,height:240}),U.jsxs("div",{ref:d=>{e.current[c]=d},className:`sphere ${l.className}`,style:{width:"100%",height:"100%",transition:"transform 0.3s ease"},children:[U.jsx("div",{className:"sphere-inner"}),U.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center"},children:[U.jsx("div",{style:{fontSize:"28px",color:"var(--gold)",marginBottom:"8px",display:"block"},children:l.emoji}),U.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:"9px",letterSpacing:"0.4em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"4px"},children:l.type})]})]})]}),U.jsxs("div",{style:{textAlign:"center"},children:[U.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:"10px",letterSpacing:"0.3em",color:"var(--gray)",textTransform:"uppercase",marginBottom:"12px"},children:l.desc}),U.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:l.ingredients.map(d=>U.jsx("div",{className:"ingredient",children:d},d))})]})]},c))}),U.jsx("div",{style:{width:"100%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(212,176,106,0.2), transparent)",marginTop:"100px"}})]})}const gA=[{num:"01",icon:"✦",name:"Sketching",desc:"Every creation begins as a vision. Our master perfumers sketch the olfactory map — charting the emotional journey a fragrance will take its wearer on across hours.",detail:"Paris Atelier"},{num:"02",icon:"◈",name:"Ingredients",desc:"Rare botanicals are sourced from the four corners of the earth. Bulgarian rose. Indonesian patchouli. Taif oud. Each ingredient chosen for its singular, irreplaceable character.",detail:"Global Sourcing"},{num:"03",icon:"◉",name:"Extraction",desc:"Ancient steam distillation, cold-press extraction, and solvent maceration coax the soul from each material. No shortcuts. No compromises. Pure essence, captured.",detail:"Grasse Method"},{num:"04",icon:"⬡",name:"Blending",desc:"In a temperature-controlled sanctuary, our perfumer composes. Hundreds of iterations. Years of refinement. Until a single formula feels like it has always existed.",detail:"Master Perfumer"},{num:"05",icon:"◇",name:"Packaging",desc:"Each bottle is hand-blown by Venetian artisans. Gold fittings cast to specification. Every component assembled by hand in our Paris maison. Art you hold.",detail:"Venice Crafted"}];function vA(){const o=Xe.useRef(null),e=Xe.useRef(null);return Xe.useEffect(()=>{const i=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&d.target.querySelectorAll(".timeline-stage").forEach((p,m)=>{setTimeout(()=>{p.style.opacity="1",p.style.transform="translateY(0)"},m*150)})})},{threshold:.1}),s=document.querySelectorAll("#craftsmanship .fade-up"),l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")})},{threshold:.2});return s.forEach(c=>l.observe(c)),e.current&&(e.current.querySelectorAll(".timeline-stage").forEach(d=>{d.style.opacity="0",d.style.transform="translateY(40px)",d.style.transition="opacity 0.8s ease, transform 0.8s ease"}),i.observe(e.current)),()=>{i.disconnect(),l.disconnect()}},[]),U.jsxs("section",{id:"craftsmanship",ref:o,style:{padding:"clamp(80px, 10vw, 160px) 0",overflow:"hidden",background:"linear-gradient(180deg, var(--black) 0%, #0A0A08 50%, var(--black) 100%)",position:"relative"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsx("div",{style:{position:"absolute",top:"50%",left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, rgba(212,176,106,0.1), transparent)",pointerEvents:"none"}}),U.jsxs("div",{className:"craftsmanship-header",children:[U.jsx("div",{className:"section-label fade-up",children:"— The Art of Making —"}),U.jsxs("h2",{className:"section-title fade-up",children:["Five Acts of ",U.jsx("em",{children:"Creation"})]}),U.jsx("p",{className:"fade-up",style:{fontSize:"15px",color:"rgba(245,245,240,0.4)",maxWidth:"480px",lineHeight:1.8,marginTop:"24px"},children:"From the first pencil stroke to the final fitting — every FLY creation passes through five sacred stages of meticulous craftsmanship."})]}),U.jsx("div",{ref:e,className:"timeline-track",style:{overflowX:"auto",display:"flex"},children:gA.map(i=>U.jsxs("div",{className:"timeline-stage",children:[U.jsx("div",{className:"timeline-num",children:i.num}),U.jsx("div",{className:"timeline-icon",children:i.icon}),U.jsx("div",{style:{fontFamily:"var(--font-sans)",fontSize:"10px",letterSpacing:"0.4em",color:"var(--gold)",textTransform:"uppercase",marginBottom:"12px"},children:i.detail}),U.jsx("div",{className:"timeline-name",children:i.name}),U.jsx("p",{className:"timeline-desc",children:i.desc}),U.jsxs("div",{style:{position:"absolute",bottom:"32px",left:"48px",display:"flex",alignItems:"center",gap:"12px"},children:[U.jsx("div",{style:{width:"24px",height:"1px",background:"var(--gold)",opacity:.4}}),U.jsxs("span",{style:{fontSize:"10px",letterSpacing:"0.3em",color:"var(--gray)"},children:["Stage ",i.num]})]}),U.jsx("div",{className:"timeline-line"})]},i.num))})]})}function _A(){const o=Xe.useRef(null),e=Xe.useRef(null),i=Xe.useRef(null),s=Xe.useRef(null);return Xe.useEffect(()=>{const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&(setTimeout(()=>{i.current&&(i.current.style.opacity="1",i.current.style.transform="translateY(0)")},100),setTimeout(()=>{e.current&&(e.current.style.opacity="1",e.current.style.transform="translateY(0)")},300),setTimeout(()=>{s.current&&(s.current.style.opacity="1",s.current.style.transform="translateY(0)")},600))})},{threshold:.3});return o.current&&l.observe(o.current),()=>l.disconnect()},[]),U.jsxs("section",{id:"video-section",ref:o,style:{position:"relative",height:"clamp(60vh, 100vh, 100vh)",minHeight:"500px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:[U.jsx("div",{style:{position:"absolute",inset:0,background:`
          radial-gradient(ellipse at 30% 50%, rgba(212,176,106,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 50%, rgba(180,100,40,0.06) 0%, transparent 50%),
          linear-gradient(180deg, #080808 0%, #0D0A04 50%, #080808 100%)
        `,zIndex:0}}),[...Array(5)].map((l,c)=>U.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"2px",height:"60vh",background:`linear-gradient(180deg, rgba(212,176,106,${.06-c*.01}), transparent)`,transformOrigin:"top center",transform:`translate(-50%, -5%) rotate(${(c-2)*15}deg)`,zIndex:1,animation:`beamPulse ${3+c}s ease infinite`,animationDelay:`${c*.5}s`}},c)),U.jsx("div",{className:"noise-overlay",style:{zIndex:2}}),U.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(8,8,8,0.4)",zIndex:3}}),U.jsxs("div",{className:"video-content",style:{position:"relative",zIndex:10,textAlign:"center",padding:"0 32px"},children:[U.jsx("div",{ref:i,style:{fontFamily:"var(--font-sans)",fontSize:"10px",letterSpacing:"0.6em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"28px",opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s ease, transform 0.8s ease"},children:"— Behind the Veil —"}),U.jsxs("h2",{ref:e,style:{fontFamily:"var(--font-serif)",fontSize:"clamp(48px, 8vw, 120px)",fontWeight:600,lineHeight:1,color:"var(--white)",marginBottom:"48px",opacity:0,transform:"translateY(40px)",transition:"opacity 1s ease, transform 1s ease"},children:["Crafted",U.jsx("br",{}),U.jsx("em",{style:{fontStyle:"italic",color:"var(--gold)"},children:"Beyond Time"})]}),U.jsxs("button",{ref:s,className:"btn-watch",style:{display:"inline-flex",alignItems:"center",gap:"16px",padding:"20px 48px",background:"rgba(212,176,106,0.1)",border:"1px solid var(--gold)",color:"var(--gold)",fontSize:"11px",letterSpacing:"0.3em",textTransform:"uppercase",cursor:"none",backdropFilter:"blur(10px)",opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s ease, transform 0.8s ease, background 0.3s ease, color 0.3s ease"},onMouseEnter:l=>{l.currentTarget.style.background="var(--gold)",l.currentTarget.style.color="var(--black)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(212,176,106,0.1)",l.currentTarget.style.color="var(--gold)"},children:[U.jsx("span",{style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid currentColor",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"},children:"▶"}),"Watch Story"]}),U.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"8px",marginTop:"60px"},children:[...Array(3)].map((l,c)=>U.jsx("div",{style:{width:c===1?"24px":"6px",height:"2px",background:c===1?"var(--gold)":"rgba(212,176,106,0.3)",transition:"width 0.3s ease"}},c))})]}),U.jsx("style",{children:`
        @keyframes beamPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `})]})}const Oc=[{initial:"V",name:"Victoria Laurent",location:"Paris, France",quote:"Noir Essence transported me to another dimension. I have worn Dior, Tom Ford, MFK — but nothing has ever felt like this. FLY is in a league of its own."},{initial:"R",name:"Rafael Monteiro",location:"Sao Paulo, Brazil",quote:"The Amber Gold is liquid fire. It opens with saffron that feels warm on skin, then settles into the most hypnotic base I have ever encountered. Masterwork."},{initial:"S",name:"Sofia Andersen",location:"Copenhagen, Denmark",quote:"I ordered Midnight Oud on a whim. Three bottles later, I cannot imagine my life without it. The longevity is extraordinary — 18 hours on skin."},{initial:"A",name:"Amara Chen",location:"Hong Kong",quote:"Royal Elixir is the most beautiful fragrance I have ever smelled. The Taif rose heart is astonishing. I received more compliments in one evening than in years."},{initial:"L",name:"Luca Rossi",location:"Milan, Italy",quote:"FLY understands what luxury truly means. Not just the scent, but the ritual — the bottle, the unboxing, the entire experience. Perfection."},{initial:"N",name:"Nadia Volkov",location:"Moscow, Russia",quote:"I gifted Noir Essence to my partner and he has never let me forget it. The reactions he receives wherever he goes are remarkable. Pure class."}];function Yv({t:o}){return U.jsxs("div",{className:"glass-card",onMouseEnter:e=>{const i=e.currentTarget;i.style.transform="translateY(-8px)",i.style.boxShadow="0 20px 60px rgba(212,176,106,0.1)",i.style.borderColor="rgba(212,176,106,0.3)"},onMouseLeave:e=>{const i=e.currentTarget;i.style.transform="",i.style.boxShadow="",i.style.borderColor=""},style:{flex:"0 0 380px",padding:"40px 36px",cursor:"none",transition:"transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease"},children:[U.jsx("div",{style:{display:"flex",gap:"4px",marginBottom:"20px"},children:[...Array(5)].map((e,i)=>U.jsx("span",{style:{color:"var(--gold)",fontSize:"12px"},children:"★"},i))}),U.jsxs("p",{style:{fontFamily:"Cormorant Garamond, serif",fontSize:"17px",fontStyle:"italic",lineHeight:1.7,color:"rgba(245,245,240,0.75)",marginBottom:"28px"},children:["“",o.quote,"”"]}),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[U.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"linear-gradient(135deg, #A8862A, #D4B06A)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-serif)",fontSize:"18px",color:"var(--black)",fontWeight:700},children:o.initial}),U.jsxs("div",{children:[U.jsx("div",{style:{fontSize:"13px",fontWeight:500,color:"var(--white)",letterSpacing:"0.05em"},children:o.name}),U.jsx("div",{style:{fontSize:"11px",color:"var(--gray)",letterSpacing:"0.1em"},children:o.location})]})]})]})}function xA(){return U.jsxs("section",{id:"testimonials",style:{padding:"clamp(80px, 10vw, 160px) 0",overflow:"hidden",background:"var(--black)",position:"relative"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsxs("div",{style:{textAlign:"center",padding:"0 32px",marginBottom:"80px"},children:[U.jsx("div",{className:"section-label fade-up",children:"— Our Clients —"}),U.jsxs("h2",{className:"section-title fade-up",children:["Words of the ",U.jsx("em",{children:"House"})]})]}),U.jsx("div",{style:{overflow:"hidden",marginBottom:"24px"},children:U.jsx("div",{style:{display:"flex",gap:"24px",animation:"marqueeScroll 50s linear infinite",width:"max-content"},children:[...Oc,...Oc].map((o,e)=>U.jsx(Yv,{t:o},`r1-${e}`))})}),U.jsx("div",{style:{overflow:"hidden"},children:U.jsx("div",{style:{display:"flex",gap:"24px",animation:"marqueeScrollReverse 55s linear infinite",width:"max-content"},children:[...Oc.slice().reverse(),...Oc.slice().reverse()].map((o,e)=>U.jsx(Yv,{t:o},`r2-${e}`))})}),U.jsx("style",{children:`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `})]})}const yA=[{src:"https://images.pexels.com/photos/11517300/pexels-photo-11517300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Noir perfume bottle"},{src:"https://images.pexels.com/photos/8450107/pexels-photo-8450107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Perfume crafting"},{src:"https://images.pexels.com/photos/29986521/pexels-photo-29986521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Elegant bottle design"},{src:"https://images.pexels.com/photos/8450399/pexels-photo-8450399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Aromatherapy ingredients"},{src:"https://images.pexels.com/photos/10924522/pexels-photo-10924522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Luxury perfume display"},{src:"https://images.pexels.com/photos/33179453/pexels-photo-33179453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Saffron flowers"},{src:"https://images.pexels.com/photos/28664171/pexels-photo-28664171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Perfume collection display"}],Zv=[{col:"1 / 6",row:"1 / 3"},{col:"6 / 9",row:"1 / 2"},{col:"9 / 13",row:"1 / 3"},{col:"6 / 9",row:"2 / 3"},{col:"1 / 5",row:"3 / 4"},{col:"5 / 9",row:"3 / 4"},{col:"9 / 13",row:"3 / 4"}];function SA(){return Xe.useEffect(()=>{const o=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll("#gallery .fade-up, #gallery .fade-in").forEach(e=>o.observe(e)),()=>o.disconnect()},[]),U.jsxs("section",{id:"gallery",style:{padding:"clamp(80px, 10vw, 160px) clamp(20px, 6vw, 80px)",background:"var(--black)",position:"relative"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsxs("div",{style:{textAlign:"center",marginBottom:"80px"},children:[U.jsx("div",{className:"section-label fade-up",children:"— Visual Journey —"}),U.jsxs("h2",{className:"section-title fade-up",children:["The ",U.jsx("em",{children:"Gallery"})]})]}),U.jsx("div",{className:"gallery-grid",style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"repeat(3, 220px)",gap:"16px"},children:yA.map((o,e)=>U.jsxs("div",{className:"gallery-item fade-in",style:{gridColumn:Zv[e].col,gridRow:Zv[e].row,overflow:"hidden",position:"relative",cursor:"none"},onMouseEnter:i=>{const s=i.currentTarget,l=s.querySelector(".gallery-img"),c=s.querySelector(".gallery-item-overlay");l&&(l.style.transform="scale(1.08)",l.style.filter="brightness(1) saturate(1.1)"),c&&(c.style.borderColor="rgba(212,176,106,0.5)")},onMouseLeave:i=>{const s=i.currentTarget,l=s.querySelector(".gallery-img"),c=s.querySelector(".gallery-item-overlay");l&&(l.style.transform="",l.style.filter="brightness(0.8) saturate(0.9)"),c&&(c.style.borderColor="rgba(212,176,106,0)")},children:[U.jsx("img",{src:o.src,alt:o.alt,className:"gallery-img",loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease",filter:"brightness(0.8) saturate(0.9)"}}),U.jsx("div",{className:"gallery-item-overlay",style:{position:"absolute",inset:0,border:"1px solid rgba(212,176,106,0)",transition:"border-color 0.4s ease",zIndex:1}}),U.jsx("div",{style:{position:"absolute",bottom:"16px",right:"16px",fontFamily:"var(--font-serif)",fontSize:"11px",letterSpacing:"0.3em",color:"rgba(212,176,106,0.6)",zIndex:2},children:String(e+1).padStart(2,"0")})]},e))}),U.jsx("div",{style:{textAlign:"center",marginTop:"60px"},children:U.jsxs("a",{href:"#",className:"btn-luxury",style:{opacity:1},onClick:o=>o.preventDefault(),children:[U.jsx("div",{className:"btn-shine"}),U.jsx("span",{children:"View Full Gallery"})]})})]})}function MA(){const o=Xe.useRef(null),[e,i]=Xe.useState(""),[s,l]=Xe.useState(!1);Xe.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(p=>{p.isIntersecting&&o.current&&(o.current.style.opacity="1",o.current.style.transform="translateY(0)")})},{threshold:.2});return o.current&&d.observe(o.current),()=>d.disconnect()},[]);const c=d=>{d.preventDefault(),e&&(l(!0),setTimeout(()=>l(!1),4e3),i(""))};return U.jsxs("section",{id:"newsletter",style:{padding:"clamp(80px, 10vw, 160px) clamp(20px, 8vw, 120px)",position:"relative"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(212,176,106,0.04) 0%, transparent 60%)",pointerEvents:"none"}}),U.jsxs("div",{ref:o,className:"glass-card newsletter-card",style:{maxWidth:"720px",margin:"0 auto",padding:"clamp(48px, 8vw, 80px) clamp(32px, 6vw, 80px)",textAlign:"center",opacity:0,transform:"translateY(40px)",transition:"opacity 1s ease, transform 1s ease",position:"relative"},children:[["top-left","top-right","bottom-left","bottom-right"].map(d=>{const h=d.includes("top"),p=d.includes("left");return U.jsx("div",{style:{position:"absolute",top:h?0:"auto",bottom:h?"auto":0,left:p?0:"auto",right:p?"auto":0,width:"20px",height:"20px",borderTop:h?"1px solid var(--gold)":"none",borderBottom:h?"none":"1px solid var(--gold)",borderLeft:p?"1px solid var(--gold)":"none",borderRight:p?"none":"1px solid var(--gold)",opacity:.5}},d)}),U.jsx("div",{className:"section-label",style:{marginBottom:"24px"},children:"— Stay Connected —"}),U.jsxs("h2",{style:{fontFamily:"var(--font-serif)",fontSize:"clamp(36px, 5vw, 64px)",fontWeight:600,color:"var(--white)",lineHeight:1.1,marginBottom:"20px"},children:["Join The",U.jsx("br",{}),U.jsx("em",{style:{fontStyle:"italic",color:"var(--gold)"},children:"House of FLY"})]}),U.jsx("p",{style:{fontSize:"14px",color:"rgba(245,245,240,0.45)",lineHeight:1.7,marginBottom:"48px",maxWidth:"400px",margin:"0 auto 48px"},children:"Receive exclusive access to new collections, private events, and the intimate stories behind each creation."}),s?U.jsx("div",{style:{padding:"20px",border:"1px solid rgba(212,176,106,0.4)",color:"var(--gold)",fontFamily:"var(--font-serif)",fontStyle:"italic",fontSize:"18px",animation:"fadeIn 0.5s ease"},children:"Welcome to the House of FLY"}):U.jsxs("form",{onSubmit:c,style:{display:"flex",gap:0,maxWidth:"480px",margin:"0 auto"},children:[U.jsx("input",{type:"email",value:e,onChange:d=>i(d.target.value),placeholder:"Your email address",className:"newsletter-input",required:!0,style:{flex:1,padding:"16px 24px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(212,176,106,0.2)",borderRight:"none",color:"var(--white)",fontSize:"13px",letterSpacing:"0.05em",outline:"none",fontFamily:"var(--font-sans)",transition:"border-color 0.3s ease"},onFocus:d=>d.target.style.borderColor="rgba(212,176,106,0.5)",onBlur:d=>d.target.style.borderColor="rgba(212,176,106,0.2)"}),U.jsxs("button",{type:"submit",className:"newsletter-btn",style:{padding:"16px 32px",background:"var(--gold)",border:"1px solid var(--gold)",color:"var(--black)",fontSize:"11px",letterSpacing:"0.3em",textTransform:"uppercase",fontWeight:600,cursor:"none",position:"relative",overflow:"hidden"},children:[U.jsx("div",{className:"btn-shine"}),"Subscribe"]})]}),U.jsx("p",{style:{fontSize:"11px",color:"rgba(245,245,240,0.2)",marginTop:"20px",letterSpacing:"0.1em"},children:"No spam. Unsubscribe anytime. Your privacy is sacred."}),U.jsx("style",{children:`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `})]})]})}function EA(){const o=[{title:"Collection",links:["Noir Essence","Amber Gold","Midnight Oud","Royal Elixir","Limited Editions"]},{title:"Story",links:["About FLY","Master Perfumer","Philosophy","Awards","Press"]},{title:"Journal",links:["The Art of Scent","Ingredient Diaries","Behind the Bottle","Events","Collaborations"]},{title:"Contact",links:["Our Boutiques","Online Boutique","Concierge","Wholesale","Careers"]}];return U.jsxs("footer",{id:"footer",style:{padding:"clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px) 40px",position:"relative",borderTop:"1px solid rgba(212,176,106,0.1)",overflow:"hidden",background:"var(--black)"},children:[U.jsx("div",{className:"noise-overlay"}),U.jsx("div",{style:{position:"absolute",bottom:"-40px",left:"50%",transform:"translateX(-50%)",fontFamily:"var(--font-serif)",fontSize:"clamp(120px, 20vw, 280px)",fontWeight:700,letterSpacing:"0.15em",color:"transparent",WebkitTextStroke:"1px rgba(212,176,106,0.04)",pointerEvents:"none",userSelect:"none",whiteSpace:"nowrap"},children:"FLY"}),U.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:"60px",marginBottom:"80px",position:"relative",zIndex:1},children:[U.jsxs("div",{children:[U.jsx("div",{style:{fontFamily:"var(--font-serif)",fontSize:"40px",fontWeight:700,letterSpacing:"0.3em",color:"var(--gold)",marginBottom:"20px"},children:"FLY"}),U.jsx("p",{style:{fontSize:"13px",lineHeight:1.8,color:"rgba(245,245,240,0.35)",maxWidth:"260px"},children:"Haute Parfumerie since 1993. Crafting extraordinary fragrances for those who understand that the most powerful art is invisible."}),U.jsx("div",{style:{marginTop:"32px",display:"flex",gap:"16px",flexWrap:"wrap"},children:["Best Niche House 2024","Fragrance Icon Award"].map(e=>U.jsx("div",{style:{fontSize:"10px",letterSpacing:"0.2em",color:"rgba(212,176,106,0.5)",border:"1px solid rgba(212,176,106,0.2)",padding:"4px 12px",textTransform:"uppercase"},children:e},e))})]}),o.map(e=>U.jsxs("div",{children:[U.jsx("div",{style:{fontSize:"10px",letterSpacing:"0.4em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"24px"},children:e.title}),U.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"12px"},children:e.links.map(i=>U.jsx("li",{children:U.jsx("a",{href:"#",onClick:s=>s.preventDefault(),style:{fontSize:"13px",color:"rgba(245,245,240,0.45)",textDecoration:"none",letterSpacing:"0.05em",transition:"color 0.3s ease"},onMouseEnter:s=>s.target.style.color="var(--gold)",onMouseLeave:s=>s.target.style.color="rgba(245,245,240,0.45)",children:i})},i))})]},e.title))]}),U.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, transparent, rgba(212,176,106,0.2), transparent)",marginBottom:"40px",position:"relative",zIndex:1}}),U.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"20px",position:"relative",zIndex:1},children:[U.jsxs("div",{style:{fontSize:"12px",color:"rgba(245,245,240,0.25)",letterSpacing:"0.1em"},children:["© ",new Date().getFullYear()," FLY Haute Parfumerie. All rights reserved. Paris, France."]}),U.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[{label:"IG",href:"#"},{label:"FB",href:"#"},{label:"X",href:"#"}].map(e=>U.jsx("a",{href:e.href,onClick:i=>i.preventDefault(),style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid rgba(212,176,106,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(245,245,240,0.45)",fontSize:"11px",textDecoration:"none",letterSpacing:"0.05em",transition:"border-color 0.3s ease, color 0.3s ease"},onMouseEnter:i=>{const s=i.currentTarget;s.style.borderColor="var(--gold)",s.style.color="var(--gold)"},onMouseLeave:i=>{const s=i.currentTarget;s.style.borderColor="rgba(212,176,106,0.2)",s.style.color="rgba(245,245,240,0.45)"},children:e.label},e.label))}),U.jsx("div",{style:{display:"flex",gap:"24px"},children:["Privacy Policy","Terms","Cookies"].map(e=>U.jsx("a",{href:"#",onClick:i=>i.preventDefault(),style:{fontSize:"11px",color:"rgba(245,245,240,0.2)",textDecoration:"none",letterSpacing:"0.1em",transition:"color 0.3s ease"},onMouseEnter:i=>i.target.style.color="rgba(212,176,106,0.6)",onMouseLeave:i=>i.target.style.color="rgba(245,245,240,0.2)",children:e},e))})]})]})}function bA(){const[o,e]=Xe.useState(!0);return U.jsx("button",{id:"mute-btn",onClick:()=>e(i=>!i),title:o?"Unmute ambient sound":"Mute",style:{position:"fixed",bottom:"32px",right:"32px",zIndex:9e3,width:"48px",height:"48px",borderRadius:"50%",background:"rgba(8,8,8,0.8)",border:"1px solid rgba(212,176,106,0.3)",color:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"none",backdropFilter:"blur(10px)",transition:"border-color 0.3s ease",fontSize:"16px"},onMouseEnter:i=>i.currentTarget.style.borderColor="var(--gold)",onMouseLeave:i=>i.currentTarget.style.borderColor="rgba(212,176,106,0.3)",children:o?U.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[U.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),U.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),U.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):U.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[U.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),U.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),U.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})})}function TA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=()=>{const i=window.scrollY,s=document.documentElement.scrollHeight-window.innerHeight,l=i/s*100;o.current&&(o.current.style.width=l+"%")};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),U.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,height:"2px",background:"rgba(255,255,255,0.05)",zIndex:99999,pointerEvents:"none"},children:U.jsx("div",{ref:o,style:{height:"100%",background:"linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))",width:"0%",boxShadow:"0 0 8px var(--gold)",transition:"width 0.05s linear"}})})}function AA(){const o=Xe.useRef(null);return Xe.useEffect(()=>{const e=o.current,i=e.getContext("2d"),s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};s(),window.addEventListener("resize",s);const l=[],c=60;for(let p=0;p<c;p++)l.push({x:Math.random()*e.width,y:Math.random()*e.height,size:Math.random()*1.5+.2,speedX:(Math.random()-.5)*.2,speedY:-Math.random()*.15-.05,opacity:Math.random()*.4,opacitySpeed:(Math.random()-.5)*.003});let d;const h=()=>{d=requestAnimationFrame(h),i.clearRect(0,0,e.width,e.height),l.forEach(p=>{p.x+=p.speedX,p.y+=p.speedY,p.opacity+=p.opacitySpeed,p.opacity<=0&&(p.opacitySpeed=Math.abs(p.opacitySpeed)),p.opacity>=.4&&(p.opacitySpeed=-Math.abs(p.opacitySpeed)),p.y<-10&&(p.y=e.height+10),p.x<-10&&(p.x=e.width+10),p.x>e.width+10&&(p.x=-10),i.beginPath(),i.arc(p.x,p.y,p.size,0,Math.PI*2),i.fillStyle=`rgba(212, 176, 106, ${Math.max(0,p.opacity)})`,i.fill()})};return h(),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",s)}},[]),U.jsx("canvas",{ref:o,style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.6}})}function RA(){const[o,e]=Xe.useState(!1);return Xe.useEffect(()=>{const i=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"}),s=setTimeout(()=>{document.querySelectorAll(".fade-up, .fade-in").forEach(l=>{i.observe(l)})},2e3);return()=>{clearTimeout(s),i.disconnect()}},[o]),Xe.useEffect(()=>{o&&(document.documentElement.style.scrollBehavior="smooth")},[o]),U.jsxs(U.Fragment,{children:[U.jsx("div",{className:"grain-overlay"}),U.jsx(TA,{}),U.jsx(AA,{}),U.jsx(Wy,{}),U.jsx(jy,{}),U.jsx(Xy,{onComplete:()=>e(!0)}),U.jsxs("div",{style:{opacity:o?1:0,transition:"opacity 0.5s ease"},children:[U.jsx(qy,{}),U.jsxs("main",{children:[U.jsx(fA,{}),U.jsx(hA,{}),U.jsx(pA,{}),U.jsx(mA,{}),U.jsx(vA,{}),U.jsx(_A,{}),U.jsx(xA,{}),U.jsx(SA,{}),U.jsx(MA,{})]}),U.jsx(EA,{}),U.jsx(bA,{})]})]})}ky.createRoot(document.getElementById("root")).render(U.jsx(Xe.StrictMode,{children:U.jsx(RA,{})}));
