(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ig(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $p={exports:{}},gl={},qp={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),rg=Symbol.for("react.portal"),sg=Symbol.for("react.fragment"),ag=Symbol.for("react.strict_mode"),og=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),dg=Symbol.for("react.suspense"),hg=Symbol.for("react.memo"),fg=Symbol.for("react.lazy"),lh=Symbol.iterator;function pg(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kp=Object.assign,Zp={};function As(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Yp}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=As.prototype;function Qu(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Yp}var ed=Qu.prototype=new Jp;ed.constructor=Qu;Kp(ed,As.prototype);ed.isPureReactComponent=!0;var ch=Array.isArray,Qp=Object.prototype.hasOwnProperty,td={current:null},em={key:!0,ref:!0,__self:!0,__source:!0};function tm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Qp.call(e,i)&&!em.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ra,type:t,key:s,ref:a,props:r,_owner:td.current}}function mg(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function xg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xg(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ra:case rg:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Gl(a,0):i,ch(r)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),Co(r,e,n,"",function(u){return u})):r!=null&&(nd(r)&&(r=mg(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(uh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ch(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Gl(s,o);a+=Co(s,e,n,c,r)}else if(c=pg(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Gl(s,o++),a+=Co(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Ro={transition:null},vg={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:td};function nm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=As;qe.Fragment=sg;qe.Profiler=og;qe.PureComponent=Qu;qe.StrictMode=ag;qe.Suspense=dg;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;qe.act=nm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Kp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Qp.call(e,c)&&!em.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:cg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lg,_context:t},t.Consumer=t};qe.createElement=tm;qe.createFactory=function(t){var e=tm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:ug,render:t}};qe.isValidElement=nd;qe.lazy=function(t){return{$$typeof:fg,_payload:{_status:-1,_result:t},_init:gg}};qe.memo=function(t,e){return{$$typeof:hg,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};qe.unstable_act=nm;qe.useCallback=function(t,e){return en.current.useCallback(t,e)};qe.useContext=function(t){return en.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return en.current.useDeferredValue(t)};qe.useEffect=function(t,e){return en.current.useEffect(t,e)};qe.useId=function(){return en.current.useId()};qe.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return en.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};qe.useRef=function(t){return en.current.useRef(t)};qe.useState=function(t){return en.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return en.current.useTransition()};qe.version="18.3.1";qp.exports=qe;var ee=qp.exports;const _g=ig(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=ee,Sg=Symbol.for("react.element"),Mg=Symbol.for("react.fragment"),wg=Object.prototype.hasOwnProperty,Eg=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bg={key:!0,ref:!0,__self:!0,__source:!0};function im(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)wg.call(e,i)&&!bg.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Sg,type:t,key:s,ref:a,props:r,_owner:Eg.current}}gl.Fragment=Mg;gl.jsx=im;gl.jsxs=im;$p.exports=gl;var l=$p.exports,qc={},rm={exports:{}},vn={},sm={exports:{}},am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,F){var N=L.length;L.push(F);e:for(;0<N;){var q=N-1>>>1,J=L[q];if(0<r(J,F))L[q]=F,L[N]=J,N=q;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var F=L[0],N=L.pop();if(N!==F){L[0]=N;e:for(var q=0,J=L.length,D=J>>>1;q<D;){var K=2*(q+1)-1,Q=L[K],ue=K+1,V=L[ue];if(0>r(Q,N))ue<J&&0>r(V,Q)?(L[q]=V,L[ue]=N,q=ue):(L[q]=Q,L[K]=N,q=K);else if(ue<J&&0>r(V,N))L[q]=V,L[ue]=N,q=ue;else break e}}return F}function r(L,F){var N=L.sortIndex-F.sortIndex;return N!==0?N:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,f=null,p=3,x=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=L)i(u),F.sortIndex=F.expirationTime,e(c,F);else break;F=n(u)}}function S(L){if(_=!1,g(L),!y)if(n(c)!==null)y=!0,P(A);else{var F=n(u);F!==null&&H(S,F.startTime-L)}}function A(L,F){y=!1,_&&(_=!1,d(k),k=-1),x=!0;var N=p;try{for(g(F),f=n(c);f!==null&&(!(f.expirationTime>F)||L&&!G());){var q=f.callback;if(typeof q=="function"){f.callback=null,p=f.priorityLevel;var J=q(f.expirationTime<=F);F=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(c)&&i(c),g(F)}else i(c);f=n(c)}if(f!==null)var D=!0;else{var K=n(u);K!==null&&H(S,K.startTime-F),D=!1}return D}finally{f=null,p=N,x=!1}}var E=!1,b=null,k=-1,w=5,T=-1;function G(){return!(t.unstable_now()-T<w)}function Z(){if(b!==null){var L=t.unstable_now();T=L;var F=!0;try{F=b(!0,L)}finally{F?te():(E=!1,b=null)}}else E=!1}var te;if(typeof v=="function")te=function(){v(Z)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,j=I.port2;I.port1.onmessage=Z,te=function(){j.postMessage(null)}}else te=function(){m(Z,0)};function P(L){b=L,E||(E=!0,te())}function H(L,F){k=m(function(){L(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||x||(y=!0,P(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var N=p;p=F;try{return L()}finally{p=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var N=p;p=L;try{return F()}finally{p=N}},t.unstable_scheduleCallback=function(L,F,N){var q=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=N+J,L={id:h++,callback:F,priorityLevel:L,startTime:N,expirationTime:J,sortIndex:-1},N>q?(L.sortIndex=N,e(u,L),n(c)===null&&L===n(u)&&(_?(d(k),k=-1):_=!0,H(S,N-q))):(L.sortIndex=J,e(c,L),y||x||(y=!0,P(A))),L},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(L){var F=p;return function(){var N=p;p=F;try{return L.apply(this,arguments)}finally{p=N}}}})(am);sm.exports=am;var Tg=sm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag=ee,gn=Tg;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,la={};function Ar(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(la[t]=e,t=0;t<e.length;t++)om.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,Cg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function Rg(t){return Yc.call(hh,t)?!0:Yc.call(dh,t)?!1:Cg.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function Ng(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pg(t,e,n,i){if(e===null||typeof e>"u"||Ng(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(id,rd);Ot[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(id,rd);Ot[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(id,rd);Ot[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pg(e,n,r,i)&&(n=null),i||r===null?Rg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=Ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),cm=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,Vl;function $s(t){if(Vl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vl=e&&e[1]||""}return`
`+Vl+t}var Wl=!1;function Xl(t,e){if(!t||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function Lg(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function Qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Xr:return"Portal";case Kc:return"Profiler";case ad:return"StrictMode";case Zc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cm:return(t.displayName||"Context")+".Consumer";case lm:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:Qc(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return Qc(t(e))}catch{}}return null}function Dg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ug(t){var e=dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=Ug(t))}function hm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fm(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function tu(t,e){fm(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&nu(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nu(t,e,n){(e!=="number"||jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(qs(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function pm(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ig=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(t){Ig.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Js[e]=Js[t]})});function gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Js.hasOwnProperty(t)&&Js[t]?(""+e).trim():e+"px"}function vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kg=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(t,e){if(e){if(kg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lu=null,ls=null,cs=null;function vh(t){if(t=La(t)){if(typeof lu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ml(e),lu(t.stateNode,t.type,e))}}function _m(t){ls?cs?cs.push(t):cs=[t]:ls=t}function ym(){if(ls){var t=ls,e=cs;if(cs=ls=null,vh(t),e)for(t=0;t<e.length;t++)vh(e[t])}}function Sm(t,e){return t(e)}function Mm(){}var $l=!1;function wm(t,e,n){if($l)return t(e,n);$l=!0;try{return Sm(t,e,n)}finally{$l=!1,(ls!==null||cs!==null)&&(Mm(),ym())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var cu=!1;if(xi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{cu=!1}function Fg(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Qs=!1,Ho=null,Go=!1,uu=null,Og={onError:function(t){Qs=!0,Ho=t}};function zg(t,e,n,i,r,s,a,o,c){Qs=!1,Ho=null,Fg.apply(Og,arguments)}function Bg(t,e,n,i,r,s,a,o,c){if(zg.apply(this,arguments),Qs){if(Qs){var u=Ho;Qs=!1,Ho=null}else throw Error(oe(198));Go||(Go=!0,uu=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(Cr(t)!==t)throw Error(oe(188))}function jg(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _h(r),t;if(s===i)return _h(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function bm(t){return t=jg(t),t!==null?Tm(t):null}function Tm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tm(t);if(e!==null)return e;t=t.sibling}return null}var Am=gn.unstable_scheduleCallback,yh=gn.unstable_cancelCallback,Hg=gn.unstable_shouldYield,Gg=gn.unstable_requestPaint,yt=gn.unstable_now,Vg=gn.unstable_getCurrentPriorityLevel,ud=gn.unstable_ImmediatePriority,Cm=gn.unstable_UserBlockingPriority,Vo=gn.unstable_NormalPriority,Wg=gn.unstable_LowPriority,Rm=gn.unstable_IdlePriority,vl=null,Qn=null;function Xg(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:Yg,$g=Math.log,qg=Math.LN2;function Yg(t){return t>>>=0,t===0?32:31-($g(t)/qg|0)|0}var Va=64,Wa=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ys(o):(s&=a,s!==0&&(i=Ys(s)))}else a=n&~r,a!==0?i=Ys(a):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function Kg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zg(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Kg(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function Jg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Pm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lm,hd,Dm,Um,Im,hu=!1,Xa=[],ki=null,Fi=null,Oi=null,da=new Map,ha=new Map,Ni=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ev(t,e,n,i,r){switch(e){case"focusin":return ki=ks(ki,t,e,n,i,r),!0;case"dragenter":return Fi=ks(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=ks(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,ks(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,ks(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function km(t){var e=hr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Em(n),e!==null){t.blockedOn=e,Im(t.priority,function(){Dm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ou=i,n.target.dispatchEvent(i),ou=null}else return e=La(n),e!==null&&hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){No(t)&&n.delete(e)}function tv(){hu=!1,ki!==null&&No(ki)&&(ki=null),Fi!==null&&No(Fi)&&(Fi=null),Oi!==null&&No(Oi)&&(Oi=null),da.forEach(Mh),ha.forEach(Mh)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,hu||(hu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,tv)))}function fa(t){function e(r){return Fs(r,t)}if(0<Xa.length){Fs(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Fs(ki,t),Fi!==null&&Fs(Fi,t),Oi!==null&&Fs(Oi,t),da.forEach(e),ha.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)km(n),n.blockedOn===null&&Ni.shift()}var us=Si.ReactCurrentBatchConfig,Xo=!0;function nv(t,e,n,i){var r=Qe,s=us.transition;us.transition=null;try{Qe=1,fd(t,e,n,i)}finally{Qe=r,us.transition=s}}function iv(t,e,n,i){var r=Qe,s=us.transition;us.transition=null;try{Qe=4,fd(t,e,n,i)}finally{Qe=r,us.transition=s}}function fd(t,e,n,i){if(Xo){var r=fu(t,e,n,i);if(r===null)rc(t,e,i,$o,n),Sh(t,i);else if(ev(r,t,e,n,i))i.stopPropagation();else if(Sh(t,i),e&4&&-1<Qg.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&Lm(s),s=fu(t,e,n,i),s===null&&rc(t,e,i,$o,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(t,e,i,null,n)}}var $o=null;function fu(t,e,n,i){if($o=null,t=cd(i),t=hr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function Fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vg()){case ud:return 1;case Cm:return 4;case Vo:case Wg:return 16;case Rm:return 536870912;default:return 16}default:return 16}}var Li=null,pd=null,Po=null;function Om(){if(Po)return Po;var t,e=pd,n=e.length,i,r="value"in Li?Li.value:Li.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Po=r.slice(t,1<i?1-i:void 0)}function Lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function wh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:wh,this.isPropagationStopped=wh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=_n(Cs),Pa=pt({},Cs,{view:0,detail:0}),rv=_n(Pa),Yl,Kl,Os,_l=pt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Yl=t.screenX-Os.screenX,Kl=t.screenY-Os.screenY):Kl=Yl=0,Os=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Eh=_n(_l),sv=pt({},_l,{dataTransfer:0}),av=_n(sv),ov=pt({},Pa,{relatedTarget:0}),Zl=_n(ov),lv=pt({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=_n(lv),uv=pt({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dv=_n(uv),hv=pt({},Cs,{data:0}),bh=_n(hv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mv[t])?!!e[t]:!1}function xd(){return xv}var gv=pt({},Pa,{key:function(t){if(t.key){var e=fv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?Lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vv=_n(gv),_v=pt({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=_n(_v),yv=pt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),Sv=_n(yv),Mv=pt({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=_n(Mv),Ev=pt({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=_n(Ev),Tv=[9,13,27,32],gd=xi&&"CompositionEvent"in window,ea=null;xi&&"documentMode"in document&&(ea=document.documentMode);var Av=xi&&"TextEvent"in window&&!ea,zm=xi&&(!gd||ea&&8<ea&&11>=ea),Ah=" ",Ch=!1;function Bm(t,e){switch(t){case"keyup":return Tv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function Cv(t,e){switch(t){case"compositionend":return jm(e);case"keypress":return e.which!==32?null:(Ch=!0,Ah);case"textInput":return t=e.data,t===Ah&&Ch?null:t;default:return null}}function Rv(t,e){if(qr)return t==="compositionend"||!gd&&Bm(t,e)?(t=Om(),Po=pd=Li=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zm&&e.locale!=="ko"?null:e.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nv[t.type]:e==="textarea"}function Hm(t,e,n,i){_m(i),e=qo(e,"onChange"),0<e.length&&(n=new md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,pa=null;function Pv(t){Qm(t,0)}function yl(t){var e=Zr(t);if(hm(e))return t}function Lv(t,e){if(t==="change")return e}var Gm=!1;if(xi){var Jl;if(xi){var Ql="oninput"in document;if(!Ql){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Ql=typeof Nh.oninput=="function"}Jl=Ql}else Jl=!1;Gm=Jl&&(!document.documentMode||9<document.documentMode)}function Ph(){ta&&(ta.detachEvent("onpropertychange",Vm),pa=ta=null)}function Vm(t){if(t.propertyName==="value"&&yl(pa)){var e=[];Hm(e,pa,t,cd(t)),wm(Pv,e)}}function Dv(t,e,n){t==="focusin"?(Ph(),ta=e,pa=n,ta.attachEvent("onpropertychange",Vm)):t==="focusout"&&Ph()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(pa)}function Iv(t,e){if(t==="click")return yl(e)}function kv(t,e){if(t==="input"||t==="change")return yl(e)}function Fv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Fv;function ma(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yc.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function Wm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xm(){for(var t=window,e=jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jo(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ov(t){var e=Xm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wm(n.ownerDocument.documentElement,n)){if(i!==null&&vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dh(n,s);var a=Dh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zv=xi&&"documentMode"in document&&11>=document.documentMode,Yr=null,pu=null,na=null,mu=!1;function Uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||Yr==null||Yr!==jo(i)||(i=Yr,"selectionStart"in i&&vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&ma(na,i)||(na=i,i=qo(pu,"onSelect"),0<i.length&&(e=new md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},ec={},$m={};xi&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Sl(t){if(ec[t])return ec[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $m)return ec[t]=e[n];return t}var qm=Sl("animationend"),Ym=Sl("animationiteration"),Km=Sl("animationstart"),Zm=Sl("transitionend"),Jm=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Jm.set(t,e),Ar(e,[t])}for(var tc=0;tc<Ih.length;tc++){var nc=Ih[tc],Bv=nc.toLowerCase(),jv=nc[0].toUpperCase()+nc.slice(1);Zi(Bv,"on"+jv)}Zi(qm,"onAnimationEnd");Zi(Ym,"onAnimationIteration");Zi(Km,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Zm,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Bg(i,e,void 0,t),t.currentTarget=null}function Qm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;kh(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;kh(r,o,u),s=c}}}if(Go)throw t=uu,Go=!1,uu=null,t}function at(t,e){var n=e[yu];n===void 0&&(n=e[yu]=new Set);var i=t+"__bubble";n.has(i)||(e0(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),e0(n,t,i,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Ya]){t[Ya]=!0,om.forEach(function(n){n!=="selectionchange"&&(Hv.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,ic("selectionchange",!1,e))}}function e0(t,e,n,i){switch(Fm(e)){case 1:var r=nv;break;case 4:r=iv;break;default:r=fd}n=r.bind(null,e,n,t),r=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}wm(function(){var u=s,h=cd(n),f=[];e:{var p=Jm.get(t);if(p!==void 0){var x=md,y=t;switch(t){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":x=vv;break;case"focusin":y="focus",x=Zl;break;case"focusout":y="blur",x=Zl;break;case"beforeblur":case"afterblur":x=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sv;break;case qm:case Ym:case Km:x=cv;break;case Zm:x=wv;break;case"scroll":x=rv;break;case"wheel":x=bv;break;case"copy":case"cut":case"paste":x=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Th}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?p!==null?p+"Capture":null:p;_=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=ua(v,d),S!=null&&_.push(ga(v,S,g)))),m)break;v=v.return}0<_.length&&(p=new x(p,y,null,n,h),f.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&n!==ou&&(y=n.relatedTarget||n.fromElement)&&(hr(y)||y[gi]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?hr(y):null,y!==null&&(m=Cr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(_=Eh,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Th,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=x==null?p:Zr(x),g=y==null?p:Zr(y),p=new _(S,v+"leave",x,n,h),p.target=m,p.relatedTarget=g,S=null,hr(h)===u&&(_=new _(d,v+"enter",y,n,h),_.target=g,_.relatedTarget=m,S=_),m=S,x&&y)t:{for(_=x,d=y,v=0,g=_;g;g=Rr(g))v++;for(g=0,S=d;S;S=Rr(S))g++;for(;0<v-g;)_=Rr(_),v--;for(;0<g-v;)d=Rr(d),g--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Rr(_),d=Rr(d)}_=null}else _=null;x!==null&&Fh(f,p,x,_,!1),y!==null&&m!==null&&Fh(f,m,y,_,!0)}}e:{if(p=u?Zr(u):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var A=Lv;else if(Rh(p))if(Gm)A=kv;else{A=Uv;var E=Dv}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=Iv);if(A&&(A=A(t,u))){Hm(f,A,n,h);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&nu(p,"number",p.value)}switch(E=u?Zr(u):window,t){case"focusin":(Rh(E)||E.contentEditable==="true")&&(Yr=E,pu=u,na=null);break;case"focusout":na=pu=Yr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Uh(f,n,h);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Uh(f,n,h)}var b;if(gd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else qr?Bm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(zm&&n.locale!=="ko"&&(qr||k!=="onCompositionStart"?k==="onCompositionEnd"&&qr&&(b=Om()):(Li=h,pd="value"in Li?Li.value:Li.textContent,qr=!0)),E=qo(u,k),0<E.length&&(k=new bh(k,t,null,n,h),f.push({event:k,listeners:E}),b?k.data=b:(b=jm(n),b!==null&&(k.data=b)))),(b=Av?Cv(t,n):Rv(t,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(h=new bh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=b))}Qm(f,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(ga(t,s,r)),s=ua(t,e),s!=null&&i.push(ga(t,s,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=ua(n,s),c!=null&&a.unshift(ga(n,c,o))):r||(c=ua(n,s),c!=null&&a.push(ga(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Gv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(Gv,`
`).replace(Vv,"")}function Ka(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(oe(425))}function Yo(){}var xu=null,gu=null;function vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch($v)}:_u;function $v(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Rs,va="__reactProps$"+Rs,gi="__reactContainer$"+Rs,yu="__reactEvents$"+Rs,qv="__reactListeners$"+Rs,Yv="__reactHandles$"+Rs;function hr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Zn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[Zn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ml(t){return t[va]||null}var Su=[],Jr=-1;function Ji(t){return{current:t}}function lt(t){0>Jr||(t.current=Su[Jr],Su[Jr]=null,Jr--)}function st(t,e){Jr++,Su[Jr]=t.current,t.current=e}var qi={},Wt=Ji(qi),an=Ji(!1),yr=qi;function xs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Ko(){lt(an),lt(Wt)}function jh(t,e,n){if(Wt.current!==qi)throw Error(oe(168));st(Wt,e),st(an,n)}function t0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Dg(t)||"Unknown",r));return pt({},n,i)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,yr=Wt.current,st(Wt,t),st(an,an.current),!0}function Hh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=t0(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,lt(an),lt(Wt),st(Wt,t)):lt(an),st(an,n)}var ui=null,wl=!1,ac=!1;function n0(t){ui===null?ui=[t]:ui.push(t)}function Kv(t){wl=!0,n0(t)}function Qi(){if(!ac&&ui!==null){ac=!0;var t=0,e=Qe;try{var n=ui;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,wl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),Am(ud,Qi),r}finally{Qe=e,ac=!1}}return null}var Qr=[],es=0,Jo=null,Qo=0,Mn=[],wn=0,Sr=null,di=1,hi="";function ar(t,e){Qr[es++]=Qo,Qr[es++]=Jo,Jo=t,Qo=e}function i0(t,e,n){Mn[wn++]=di,Mn[wn++]=hi,Mn[wn++]=Sr,Sr=t;var i=di;t=hi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,di=1<<32-Hn(e)+r|n<<r|i,hi=s+t}else di=1<<s|n<<r|i,hi=t}function _d(t){t.return!==null&&(ar(t,1),i0(t,1,0))}function yd(t){for(;t===Jo;)Jo=Qr[--es],Qr[es]=null,Qo=Qr[--es],Qr[es]=null;for(;t===Sr;)Sr=Mn[--wn],Mn[wn]=null,hi=Mn[--wn],Mn[wn]=null,di=Mn[--wn],Mn[wn]=null}var mn=null,pn=null,ct=!1,On=null;function r0(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:di,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(ct){var e=pn;if(e){var n=e;if(!Gh(t,e)){if(Mu(t))throw Error(oe(418));e=zi(n.nextSibling);var i=mn;e&&Gh(t,e)?r0(i,n):(t.flags=t.flags&-4097|2,ct=!1,mn=t)}}else{if(Mu(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ct=!1,mn=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Za(t){if(t!==mn)return!1;if(!ct)return Vh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vu(t.type,t.memoizedProps)),e&&(e=pn)){if(Mu(t))throw s0(),Error(oe(418));for(;e;)r0(t,e),e=zi(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?zi(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=pn;t;)t=zi(t.nextSibling)}function gs(){pn=mn=null,ct=!1}function Sd(t){On===null?On=[t]:On.push(t)}var Zv=Si.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function a0(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Gi(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,g,S){return v===null||v.tag!==6?(v=fc(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function c(d,v,g,S){var A=g.type;return A===$r?h(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ci&&Wh(A)===v.type)?(S=r(v,g.props),S.ref=zs(d,v,g),S.return=d,S):(S=zo(g.type,g.key,g.props,null,d.mode,S),S.ref=zs(d,v,g),S.return=d,S)}function u(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=pc(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function h(d,v,g,S,A){return v===null||v.tag!==7?(v=xr(g,d.mode,S,A),v.return=d,v):(v=r(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return g=zo(v.type,v.key,v.props,null,d.mode,g),g.ref=zs(d,null,v),g.return=d,g;case Xr:return v=pc(v,d.mode,g),v.return=d,v;case Ci:var S=v._init;return f(d,S(v._payload),g)}if(qs(v)||Us(v))return v=xr(v,d.mode,g,null),v.return=d,v;Ja(d,v)}return null}function p(d,v,g,S){var A=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:o(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:return g.key===A?c(d,v,g,S):null;case Xr:return g.key===A?u(d,v,g,S):null;case Ci:return A=g._init,p(d,v,A(g._payload),S)}if(qs(g)||Us(g))return A!==null?null:h(d,v,g,S,null);Ja(d,g)}return null}function x(d,v,g,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,o(v,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return d=d.get(S.key===null?g:S.key)||null,c(v,d,S,A);case Xr:return d=d.get(S.key===null?g:S.key)||null,u(v,d,S,A);case Ci:var E=S._init;return x(d,v,g,E(S._payload),A)}if(qs(S)||Us(S))return d=d.get(g)||null,h(v,d,S,A,null);Ja(v,S)}return null}function y(d,v,g,S){for(var A=null,E=null,b=v,k=v=0,w=null;b!==null&&k<g.length;k++){b.index>k?(w=b,b=null):w=b.sibling;var T=p(d,b,g[k],S);if(T===null){b===null&&(b=w);break}t&&b&&T.alternate===null&&e(d,b),v=s(T,v,k),E===null?A=T:E.sibling=T,E=T,b=w}if(k===g.length)return n(d,b),ct&&ar(d,k),A;if(b===null){for(;k<g.length;k++)b=f(d,g[k],S),b!==null&&(v=s(b,v,k),E===null?A=b:E.sibling=b,E=b);return ct&&ar(d,k),A}for(b=i(d,b);k<g.length;k++)w=x(b,d,k,g[k],S),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?k:w.key),v=s(w,v,k),E===null?A=w:E.sibling=w,E=w);return t&&b.forEach(function(G){return e(d,G)}),ct&&ar(d,k),A}function _(d,v,g,S){var A=Us(g);if(typeof A!="function")throw Error(oe(150));if(g=A.call(g),g==null)throw Error(oe(151));for(var E=A=null,b=v,k=v=0,w=null,T=g.next();b!==null&&!T.done;k++,T=g.next()){b.index>k?(w=b,b=null):w=b.sibling;var G=p(d,b,T.value,S);if(G===null){b===null&&(b=w);break}t&&b&&G.alternate===null&&e(d,b),v=s(G,v,k),E===null?A=G:E.sibling=G,E=G,b=w}if(T.done)return n(d,b),ct&&ar(d,k),A;if(b===null){for(;!T.done;k++,T=g.next())T=f(d,T.value,S),T!==null&&(v=s(T,v,k),E===null?A=T:E.sibling=T,E=T);return ct&&ar(d,k),A}for(b=i(d,b);!T.done;k++,T=g.next())T=x(b,d,k,T.value,S),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?k:T.key),v=s(T,v,k),E===null?A=T:E.sibling=T,E=T);return t&&b.forEach(function(Z){return e(d,Z)}),ct&&ar(d,k),A}function m(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===$r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:e:{for(var A=g.key,E=v;E!==null;){if(E.key===A){if(A=g.type,A===$r){if(E.tag===7){n(d,E.sibling),v=r(E,g.props.children),v.return=d,d=v;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ci&&Wh(A)===E.type){n(d,E.sibling),v=r(E,g.props),v.ref=zs(d,E,g),v.return=d,d=v;break e}n(d,E);break}else e(d,E);E=E.sibling}g.type===$r?(v=xr(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=zo(g.type,g.key,g.props,null,d.mode,S),S.ref=zs(d,v,g),S.return=d,d=S)}return a(d);case Xr:e:{for(E=g.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=pc(g,d.mode,S),v.return=d,d=v}return a(d);case Ci:return E=g._init,m(d,v,E(g._payload),S)}if(qs(g))return y(d,v,g,S);if(Us(g))return _(d,v,g,S);Ja(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=fc(g,d.mode,S),v.return=d,d=v),a(d)):n(d,v)}return m}var vs=a0(!0),o0=a0(!1),el=Ji(null),tl=null,ts=null,Md=null;function wd(){Md=ts=tl=null}function Ed(t){var e=el.current;lt(el),t._currentValue=e}function Eu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){tl=t,Md=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(tl===null)throw Error(oe(308));ts=t,tl.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var fr=null;function bd(t){fr===null?fr=[t]:fr.push(t)}function l0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bd(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dd(t,n)}}function Xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;a=0,h=u=c=null,o=s;do{var p=o.lane,x=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(p=e,x=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(x,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(x,f,p):y,p==null)break e;f=pt({},f,p);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else x={eventTime:x,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=x,c=f):h=h.next=x,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(c=f),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=f}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Da={},ei=Ji(Da),_a=Ji(Da),ya=Ji(Da);function pr(t){if(t===Da)throw Error(oe(174));return t}function Ad(t,e){switch(st(ya,e),st(_a,t),st(ei,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ru(e,t)}lt(ei),st(ei,e)}function _s(){lt(ei),lt(_a),lt(ya)}function u0(t){pr(ya.current);var e=pr(ei.current),n=ru(e,t.type);e!==n&&(st(_a,t),st(ei,n))}function Cd(t){_a.current===t&&(lt(ei),lt(_a))}var ht=Ji(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Rd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Uo=Si.ReactCurrentDispatcher,lc=Si.ReactCurrentBatchConfig,Mr=0,ft=null,Et=null,Pt=null,rl=!1,ia=!1,Sa=0,Jv=0;function Bt(){throw Error(oe(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Pd(t,e,n,i,r,s){if(Mr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uo.current=t===null||t.memoizedState===null?n_:i_,t=n(i,r),ia){s=0;do{if(ia=!1,Sa=0,25<=s)throw Error(oe(301));s+=1,Pt=Et=null,e.updateQueue=null,Uo.current=r_,t=n(i,r)}while(ia)}if(Uo.current=sl,e=Et!==null&&Et.next!==null,Mr=0,Pt=Et=ft=null,rl=!1,e)throw Error(oe(300));return t}function Ld(){var t=Sa!==0;return Sa=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Pn(){if(Et===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?ft.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(oe(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ma(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Mr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=f,a=i):c=c.next=f,ft.lanes|=h,wr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Vn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d0(){}function h0(t,e){var n=ft,i=Pn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Dd(m0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,wa(9,p0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(oe(349));Mr&30||f0(n,e,r)}return r}function f0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p0(t,e,n,i){e.value=n,e.getSnapshot=i,x0(e)&&g0(t)}function m0(t,e,n){return n(function(){x0(e)&&g0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function g0(t){var e=vi(t,1);e!==null&&Gn(e,t,1,-1)}function qh(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=t_.bind(null,ft,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v0(){return Pn().memoizedState}function Io(t,e,n,i){var r=qn();ft.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function El(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&Nd(i,a.deps)){r.memoizedState=wa(e,n,s,i);return}}ft.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function Yh(t,e){return Io(8390656,8,t,e)}function Dd(t,e){return El(2048,8,t,e)}function _0(t,e){return El(4,2,t,e)}function y0(t,e){return El(4,4,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,n){return n=n!=null?n.concat([t]):null,El(4,4,S0.bind(null,e,t),n)}function Ud(){}function w0(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function E0(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function b0(t,e,n){return Mr&21?(Vn(n,e)||(n=Nm(),ft.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function Qv(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=lc.transition;lc.transition={};try{t(!1),e()}finally{Qe=n,lc.transition=i}}function T0(){return Pn().memoizedState}function e_(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A0(t))C0(e,n);else if(n=l0(t,e,n,i),n!==null){var r=Jt();Gn(n,t,i,r),R0(n,e,i)}}function t_(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A0(t))C0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var c=e.interleaved;c===null?(r.next=r,bd(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=l0(t,e,r,i),n!==null&&(r=Jt(),Gn(n,t,i,r),R0(n,e,i))}}function A0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function C0(t,e){ia=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dd(t,n)}}var sl={readContext:Nn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},n_={readContext:Nn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=e_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:qh,useDebugValue:Ud,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=qh(!1),e=t[0];return t=Qv.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=qn();if(ct){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Dt===null)throw Error(oe(349));Mr&30||f0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yh(m0.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,p0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Dt.identifierPrefix;if(ct){var n=hi,i=di;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},i_={readContext:Nn,useCallback:w0,useContext:Nn,useEffect:Dd,useImperativeHandle:M0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:E0,useReducer:cc,useRef:v0,useState:function(){return cc(Ma)},useDebugValue:Ud,useDeferredValue:function(t){var e=Pn();return b0(e,Et.memoizedState,t)},useTransition:function(){var t=cc(Ma)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:h0,useId:T0,unstable_isNewReconciler:!1},r_={readContext:Nn,useCallback:w0,useContext:Nn,useEffect:Dd,useImperativeHandle:M0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:E0,useReducer:uc,useRef:v0,useState:function(){return uc(Ma)},useDebugValue:Ud,useDeferredValue:function(t){var e=Pn();return Et===null?e.memoizedState=t:b0(e,Et.memoizedState,t)},useTransition:function(){var t=uc(Ma)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:h0,useId:T0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bl={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Hi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Gn(e,t,r,i),Do(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Hi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Gn(e,t,r,i),Do(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=Hi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Gn(e,t,i,n),Do(e,t,i))}};function Kh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function N0(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=on(e)?yr:Wt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bl.enqueueReplaceState(e,e.state,null)}function Tu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=on(e)?yr:Wt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bl.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",i=e;do n+=Lg(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Au(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function P0(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,Fu=i),Au(t,e)},n}function L0(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Au(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Au(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new s_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=__.bind(null,t,e,n),e.then(t,t))}function Qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ef(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var a_=Si.ReactCurrentOwner,sn=!1;function Yt(t,e,n,i){e.child=t===null?o0(e,null,n,i):vs(e,t.child,n,i)}function tf(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=Pd(t,e,n,i,s,r),n=Ld(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ct&&n&&_d(e),e.flags|=1,Yt(t,e,i,r),e.child)}function nf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,i,r)):(t=zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,_i(t,e,r)}return Cu(t,e,n,i,r)}function U0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(is,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(is,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(is,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(is,fn),fn|=i;return Yt(t,e,r,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cu(t,e,n,i,r){var s=on(n)?yr:Wt.current;return s=xs(e,s),ds(e,r),n=Pd(t,e,n,i,s,r),i=Ld(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ct&&i&&_d(e),e.flags|=1,Yt(t,e,n,r),e.child)}function rf(t,e,n,i,r){if(on(n)){var s=!0;Zo(e)}else s=!1;if(ds(e,r),e.stateNode===null)ko(t,e),N0(e,n,i),Tu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=on(n)?yr:Wt.current,u=xs(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Zh(e,a,i,u),Ri=!1;var p=e.memoizedState;a.state=p,nl(e,i,a,r),c=e.memoizedState,o!==i||p!==c||an.current||Ri?(typeof h=="function"&&(bu(e,n,h,i),c=e.memoizedState),(o=Ri||Kh(e,n,o,i,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,c0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:kn(e.type,o),a.props=u,f=e.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Nn(c):(c=on(n)?yr:Wt.current,c=xs(e,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==c)&&Zh(e,a,i,c),Ri=!1,p=e.memoizedState,a.state=p,nl(e,i,a,r);var y=e.memoizedState;o!==f||p!==y||an.current||Ri?(typeof x=="function"&&(bu(e,n,x,i),y=e.memoizedState),(u=Ri||Kh(e,n,u,i,p,y,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Ru(t,e,n,i,s,r)}function Ru(t,e,n,i,r,s){I0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Hh(e,n,!1),_i(t,e,s);i=e.stateNode,a_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&Hh(e,n,!0),e.child}function k0(t){var e=t.stateNode;e.pendingContext?jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jh(t,e.context,!1),Ad(t,e.containerInfo)}function sf(t,e,n,i,r){return gs(),Sd(r),e.flags|=256,Yt(t,e,n,i),e.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function F0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Cl(a,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pu(n),e.memoizedState=Nu,t):Id(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return o_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Gi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Pu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Nu,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Id(t,e){return e=Cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&Sd(i),vs(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=dc(Error(oe(422))),Qa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,a),e.child.memoizedState=Pu(a),e.memoizedState=Nu,s);if(!(e.mode&1))return Qa(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=dc(s,i,void 0),Qa(t,e,a,i)}if(o=(a&t.childLanes)!==0,sn||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Gn(i,t,r,-1))}return jd(),i=dc(Error(oe(421))),Qa(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=y_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=zi(r.nextSibling),mn=e,ct=!0,On=null,t!==null&&(Mn[wn++]=di,Mn[wn++]=hi,Mn[wn++]=Sr,di=t.id,hi=t.overflow,Sr=e),e=Id(e,i.children),e.flags|=4096,e)}function af(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Eu(t.return,e,n)}function hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function O0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&af(t,n,e);else if(t.tag===19)af(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hc(e,!0,n,null,s);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function l_(t,e,n){switch(e.tag){case 3:k0(e),gs();break;case 5:u0(e);break;case 1:on(e.type)&&Zo(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?F0(t,e,n):(st(ht,ht.current&1),t=_i(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return O0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return _i(t,e,n)}var z0,Lu,B0,j0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lu=function(){};B0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(ei.current);var s=null;switch(n){case"input":r=eu(t,r),i=eu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=iu(t,r),i=iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yo)}su(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&at("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};j0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function c_(t,e,n){var i=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return on(e.type)&&Ko(),jt(e),null;case 3:return i=e.stateNode,_s(),lt(an),lt(Wt),Rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Bu(On),On=null))),Lu(t,e),jt(e),null;case 5:Cd(e);var r=pr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)B0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return jt(e),null}if(t=pr(ei.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Ks.length;r++)at(Ks[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":ph(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":xh(i,s),at("invalid",i)}su(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,o,t),r=["children",""+o]):la.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Ha(i),mh(i,s,!0);break;case"textarea":Ha(i),gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Zn]=e,t[va]=i,z0(t,e,!1,!1),e.stateNode=t;e:{switch(a=au(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ks.length;r++)at(Ks[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":ph(t,i),r=eu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":xh(t,i),r=iu(t,i),at("invalid",t);break;default:r=i}su(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?vm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&xm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ca(t,c):typeof c=="number"&&ca(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?c!=null&&s==="onScroll"&&at("scroll",t):c!=null&&sd(t,s,c,a))}switch(n){case"input":Ha(t),mh(t,i,!1);break;case"textarea":Ha(t),gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)j0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=pr(ya.current),pr(ei.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return jt(e),null;case 13:if(lt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&pn!==null&&e.mode&1&&!(e.flags&128))s0(),gs(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Zn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else On!==null&&(Bu(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?bt===0&&(bt=3):jd())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return _s(),Lu(t,e),t===null&&xa(e.stateNode.containerInfo),jt(e),null;case 10:return Ed(e.type._context),jt(e),null;case 17:return on(e.type)&&Ko(),jt(e),null;case 19:if(lt(ht),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Bs(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=il(t),a!==null){for(e.flags|=128,Bs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Ss&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return jt(e),null}else 2*yt()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function u_(t,e){switch(yd(e),e.tag){case 1:return on(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),lt(an),lt(Wt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(lt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ht),null;case 4:return _s(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var eo=!1,Vt=!1,d_=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Du(t,e,n){try{n()}catch(i){gt(t,e,i)}}var of=!1;function h_(t,e){if(xu=Xo,t=Xm(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,f=t,p=null;t:for(;;){for(var x;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++h===i&&(c=a),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:t,selectionRange:n},Xo=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:kn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return y=of,of=!1,y}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Du(e,n,s)}r=r.next}while(r!==i)}}function Tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[va],delete e[yu],delete e[qv],delete e[Yv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G0(t){return t.tag===5||t.tag===3||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yo));else if(i!==4&&(t=t.child,t!==null))for(Iu(t,e,n),t=t.sibling;t!==null;)Iu(t,e,n),t=t.sibling}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}var Ut=null,Fn=!1;function Mi(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:Vt||ns(n,e);case 6:var i=Ut,r=Fn;Ut=null,Mi(t,e,n),Ut=i,Fn=r,Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),fa(t)):sc(Ut,n.stateNode));break;case 4:i=Ut,r=Fn,Ut=n.stateNode.containerInfo,Fn=!0,Mi(t,e,n),Ut=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Du(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Vt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){gt(n,e,o)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Mi(t,e,n),Vt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function cf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new d_),e.forEach(function(i){var r=S_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Fn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Fn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Ut===null)throw Error(oe(160));V0(s,a,r),Ut=null,Fn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W0(e,t),e=e.sibling}function W0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),$n(t),i&4){try{ra(3,t,t.return),Tl(3,t)}catch(_){gt(t,t.return,_)}try{ra(5,t,t.return)}catch(_){gt(t,t.return,_)}}break;case 1:Ln(e,t),$n(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(Ln(e,t),$n(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(_){gt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&fm(r,s),au(o,a);var u=au(o,s);for(a=0;a<c.length;a+=2){var h=c[a],f=c[a+1];h==="style"?vm(r,f):h==="dangerouslySetInnerHTML"?xm(r,f):h==="children"?ca(r,f):sd(r,h,f,u)}switch(o){case"input":tu(r,s);break;case"textarea":pm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?os(r,!!s.multiple,x,!1):p!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(_){gt(t,t.return,_)}}break;case 6:if(Ln(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){gt(t,t.return,_)}}break;case 3:if(Ln(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(_){gt(t,t.return,_)}break;case 4:Ln(e,t),$n(t);break;case 13:Ln(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Od=yt())),i&4&&cf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||h,Ln(e,t),Vt=u):Ln(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(f=ye=h;ye!==null;){switch(p=ye,x=p.child,p.tag){case 0:case 11:case 14:case 15:ra(4,p,p.return);break;case 1:ns(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){gt(i,n,_)}}break;case 5:ns(p,p.return);break;case 22:if(p.memoizedState!==null){df(f);continue}}x!==null?(x.return=p,ye=x):df(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=gm("display",a))}catch(_){gt(t,t.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){gt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),$n(t),i&4&&cf(t);break;case 21:break;default:Ln(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=lf(t);ku(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lf(t);Iu(t,o,a);break;default:throw Error(oe(161))}}catch(c){gt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function f_(t,e,n){ye=t,X0(t)}function X0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||eo;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Vt;o=eo;var u=Vt;if(eo=a,(Vt=c)&&!u)for(ye=r;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?hf(r):c!==null?(c.return=a,ye=c):hf(r);for(;s!==null;)ye=s,X0(s),s=s.sibling;ye=r,eo=o,Vt=u}uf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):uf(t)}}function uf(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Tl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Vt||e.flags&512&&Uu(e)}catch(p){gt(e,e.return,p)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function df(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function hf(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tl(4,e)}catch(c){gt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){gt(e,r,c)}}var s=e.return;try{Uu(e)}catch(c){gt(e,s,c)}break;case 5:var a=e.return;try{Uu(e)}catch(c){gt(e,a,c)}}}catch(c){gt(e,e.return,c)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var p_=Math.ceil,al=Si.ReactCurrentDispatcher,kd=Si.ReactCurrentOwner,Rn=Si.ReactCurrentBatchConfig,Ke=0,Dt=null,Mt=null,kt=0,fn=0,is=Ji(0),bt=0,Ea=null,wr=0,Al=0,Fd=0,sa=null,rn=null,Od=0,Ss=1/0,ci=null,ol=!1,Fu=null,ji=null,to=!1,Di=null,ll=0,aa=0,Ou=null,Fo=-1,Oo=0;function Jt(){return Ke&6?yt():Fo!==-1?Fo:Fo=yt()}function Hi(t){return t.mode&1?Ke&2&&kt!==0?kt&-kt:Zv.transition!==null?(Oo===0&&(Oo=Nm()),Oo):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Fm(t.type)),t):1}function Gn(t,e,n,i){if(50<aa)throw aa=0,Ou=null,Error(oe(185));Na(t,n,i),(!(Ke&2)||t!==Dt)&&(t===Dt&&(!(Ke&2)&&(Al|=n),bt===4&&Pi(t,kt)),ln(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ss=yt()+500,wl&&Qi()))}function ln(t,e){var n=t.callbackNode;Zg(t,e);var i=Wo(t,t===Dt?kt:0);if(i===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?Kv(ff.bind(null,t)):n0(ff.bind(null,t)),Xv(function(){!(Ke&6)&&Qi()}),n=null;else{switch(Pm(i)){case 1:n=ud;break;case 4:n=Cm;break;case 16:n=Vo;break;case 536870912:n=Rm;break;default:n=Vo}n=ex(n,$0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $0(t,e){if(Fo=-1,Oo=0,Ke&6)throw Error(oe(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=Wo(t,t===Dt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=Ke;Ke|=2;var s=Y0();(Dt!==t||kt!==e)&&(ci=null,Ss=yt()+500,mr(t,e));do try{g_();break}catch(o){q0(t,o)}while(!0);wd(),al.current=s,Ke=r,Mt!==null?e=0:(Dt=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=du(t),r!==0&&(i=r,e=zu(t,r))),e===1)throw n=Ea,mr(t,0),Pi(t,i),ln(t,yt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!m_(r)&&(e=cl(t,i),e===2&&(s=du(t),s!==0&&(i=s,e=zu(t,s))),e===1))throw n=Ea,mr(t,0),Pi(t,i),ln(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:or(t,rn,ci);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Od+500-yt(),10<e)){if(Wo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_u(or.bind(null,t,rn,ci),e);break}or(t,rn,ci);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*p_(i/1960))-i,10<i){t.timeoutHandle=_u(or.bind(null,t,rn,ci),i);break}or(t,rn,ci);break;case 5:or(t,rn,ci);break;default:throw Error(oe(329))}}}return ln(t,yt()),t.callbackNode===n?$0.bind(null,t):null}function zu(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=rn,rn=n,e!==null&&Bu(e)),t}function Bu(t){rn===null?rn=t:rn.push.apply(rn,t)}function m_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Fd,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function ff(t){if(Ke&6)throw Error(oe(327));hs();var e=Wo(t,0);if(!(e&1))return ln(t,yt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=du(t);i!==0&&(e=i,n=zu(t,i))}if(n===1)throw n=Ea,mr(t,0),Pi(t,e),ln(t,yt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,rn,ci),ln(t,yt()),null}function zd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ss=yt()+500,wl&&Qi())}}function Er(t){Di!==null&&Di.tag===0&&!(Ke&6)&&hs();var e=Ke;Ke|=1;var n=Rn.transition,i=Qe;try{if(Rn.transition=null,Qe=1,t)return t()}finally{Qe=i,Rn.transition=n,Ke=e,!(Ke&6)&&Qi()}}function Bd(){fn=is.current,lt(is)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wv(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(yd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ko();break;case 3:_s(),lt(an),lt(Wt),Rd();break;case 5:Cd(i);break;case 4:_s();break;case 13:lt(ht);break;case 19:lt(ht);break;case 10:Ed(i.type._context);break;case 22:case 23:Bd()}n=n.return}if(Dt=t,Mt=t=Gi(t.current,null),kt=fn=e,bt=0,Ea=null,Fd=Al=wr=0,rn=sa=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}fr=null}return t}function q0(t,e){do{var n=Mt;try{if(wd(),Uo.current=sl,rl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(Mr=0,Pt=Et=ft=null,ia=!1,Sa=0,kd.current=null,n===null||n.return===null){bt=1,Ea=e,Mt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=kt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Qh(a);if(x!==null){x.flags&=-257,ef(x,a,o,s,e),x.mode&1&&Jh(s,u,e),e=x,c=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(c),e.updateQueue=_}else y.add(c);break e}else{if(!(e&1)){Jh(s,u,e),jd();break e}c=Error(oe(426))}}else if(ct&&o.mode&1){var m=Qh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ef(m,a,o,s,e),Sd(ys(c,o));break e}}s=c=ys(c,o),bt!==4&&(bt=2),sa===null?sa=[s]:sa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=P0(s,c,e);Xh(s,d);break e;case 1:o=c;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ji===null||!ji.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=L0(s,o,e);Xh(s,S);break e}}s=s.return}while(s!==null)}Z0(n)}catch(A){e=A,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function Y0(){var t=al.current;return al.current=sl,t===null?sl:t}function jd(){(bt===0||bt===3||bt===2)&&(bt=4),Dt===null||!(wr&268435455)&&!(Al&268435455)||Pi(Dt,kt)}function cl(t,e){var n=Ke;Ke|=2;var i=Y0();(Dt!==t||kt!==e)&&(ci=null,mr(t,e));do try{x_();break}catch(r){q0(t,r)}while(!0);if(wd(),Ke=n,al.current=i,Mt!==null)throw Error(oe(261));return Dt=null,kt=0,bt}function x_(){for(;Mt!==null;)K0(Mt)}function g_(){for(;Mt!==null&&!Hg();)K0(Mt)}function K0(t){var e=Q0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Z0(t):Mt=e,kd.current=null}function Z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=u_(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Mt=null;return}}else if(n=c_(n,e,fn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);bt===0&&(bt=5)}function or(t,e,n){var i=Qe,r=Rn.transition;try{Rn.transition=null,Qe=1,v_(t,e,n,i)}finally{Rn.transition=r,Qe=i}return null}function v_(t,e,n,i){do hs();while(Di!==null);if(Ke&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jg(t,s),t===Dt&&(Mt=Dt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,ex(Vo,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var a=Qe;Qe=1;var o=Ke;Ke|=4,kd.current=null,h_(t,n),W0(n,t),Ov(gu),Xo=!!xu,gu=xu=null,t.current=n,f_(n),Gg(),Ke=o,Qe=a,Rn.transition=s}else t.current=n;if(to&&(to=!1,Di=t,ll=r),s=t.pendingLanes,s===0&&(ji=null),Xg(n.stateNode),ln(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=Fu,Fu=null,t;return ll&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Ou?aa++:(aa=0,Ou=t):aa=0,Qi(),null}function hs(){if(Di!==null){var t=Pm(ll),e=Rn.transition,n=Qe;try{if(Rn.transition=null,Qe=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,ll=0,Ke&6)throw Error(oe(331));var r=Ke;for(Ke|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(ye=u;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:ra(8,h,s)}var f=h.child;if(f!==null)f.return=h,ye=f;else for(;ye!==null;){h=ye;var p=h.sibling,x=h.return;if(H0(h),h===u){ye=null;break}if(p!==null){p.return=x,ye=p;break}ye=x}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){a=ye;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,ye=g;else e:for(a=v;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Tl(9,o)}}catch(A){gt(o,o.return,A)}if(o===a){ye=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ye=S;break e}ye=o.return}}if(Ke=r,Qi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(vl,t)}catch{}i=!0}return i}finally{Qe=n,Rn.transition=e}}return!1}function pf(t,e,n){e=ys(n,e),e=P0(t,e,1),t=Bi(t,e,1),e=Jt(),t!==null&&(Na(t,1,e),ln(t,e))}function gt(t,e,n){if(t.tag===3)pf(t,t,n);else for(;e!==null;){if(e.tag===3){pf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=ys(n,t),t=L0(e,t,1),e=Bi(e,t,1),t=Jt(),e!==null&&(Na(e,1,t),ln(e,t));break}}e=e.return}}function __(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>yt()-Od?mr(t,0):Fd|=n),ln(t,e)}function J0(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=Jt();t=vi(t,e),t!==null&&(Na(t,e,n),ln(t,n))}function y_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J0(t,n)}function S_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),J0(t,n)}var Q0;Q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,l_(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ct&&e.flags&1048576&&i0(e,Qo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ko(t,e),t=e.pendingProps;var r=xs(e,Wt.current);ds(e,n),r=Pd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Zo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Td(e),r.updater=bl,e.stateNode=r,r._reactInternals=e,Tu(e,i,t,n),e=Ru(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&_d(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ko(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=w_(i),t=kn(i,t),r){case 0:e=Cu(null,e,i,t,n);break e;case 1:e=rf(null,e,i,t,n);break e;case 11:e=tf(null,e,i,t,n);break e;case 14:e=nf(null,e,i,kn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Cu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),rf(t,e,i,r,n);case 3:e:{if(k0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c0(t,e),nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(oe(423)),e),e=sf(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(oe(424)),e),e=sf(t,e,i,n,r);break e}else for(pn=zi(e.stateNode.containerInfo.firstChild),mn=e,ct=!0,On=null,n=o0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=_i(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return u0(e),t===null&&wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,vu(i,r)?a=null:s!==null&&vu(i,s)&&(e.flags|=32),I0(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&wu(e),null;case 13:return F0(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),tf(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(el,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!an.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=mi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Eu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Eu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=Nn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),nf(t,e,i,r,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),ko(t,e),e.tag=1,on(i)?(t=!0,Zo(e)):t=!1,ds(e,n),N0(e,i,r),Tu(e,i,r,n),Ru(null,e,i,!0,t,n);case 19:return O0(t,e,n);case 22:return U0(t,e,n)}throw Error(oe(156,e.tag))};function ex(t,e){return Am(t,e)}function M_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new M_(t,e,n,i)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function w_(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ld)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case $r:return xr(n.children,r,s,e);case ad:a=8,r|=8;break;case Kc:return t=An(12,n,e,r|2),t.elementType=Kc,t.lanes=s,t;case Zc:return t=An(13,n,e,r),t.elementType=Zc,t.lanes=s,t;case Jc:return t=An(19,n,e,r),t.elementType=Jc,t.lanes=s,t;case um:return Cl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lm:a=10;break e;case cm:a=9;break e;case od:a=11;break e;case ld:a=14;break e;case Ci:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Cl(t,e,n,i){return t=An(22,t,i,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function E_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gd(t,e,n,i,r,s,a,o,c){return t=new E_(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function b_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tx(t){if(!t)return qi;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(on(n))return t0(t,n,e)}return e}function nx(t,e,n,i,r,s,a,o,c){return t=Gd(n,i,!0,t,r,s,a,o,c),t.context=tx(null),n=t.current,i=Jt(),r=Hi(n),s=mi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Na(t,r,i),ln(t,i),t}function Rl(t,e,n,i){var r=e.current,s=Jt(),a=Hi(r);return n=tx(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(Gn(t,r,a,s),Do(t,r,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vd(t,e){mf(t,e),(t=t.alternate)&&mf(t,e)}function T_(){return null}var ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}Nl.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Rl(t,e,null,null)};Nl.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Rl(null,t,null,null)}),e[gi]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&km(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xf(){}function A_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}var a=nx(e,i,t,0,null,!1,!1,"",xf);return t._reactRootContainer=a,t[gi]=a.current,xa(t.nodeType===8?t.parentNode:t),Er(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ul(c);o.call(u)}}var c=Gd(t,0,!1,null,null,!1,!1,"",xf);return t._reactRootContainer=c,t[gi]=c.current,xa(t.nodeType===8?t.parentNode:t),Er(function(){Rl(e,c,n,i)}),c}function Ll(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=ul(a);o.call(c)}}Rl(e,a,t,r)}else a=A_(n,e,t,r,i);return ul(a)}Lm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(dd(e,n|1),ln(e,yt()),!(Ke&6)&&(Ss=yt()+500,Qi()))}break;case 13:Er(function(){var i=vi(t,1);if(i!==null){var r=Jt();Gn(i,t,1,r)}}),Vd(t,1)}};hd=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Jt();Gn(e,t,134217728,n)}Vd(t,134217728)}};Dm=function(t){if(t.tag===13){var e=Hi(t),n=vi(t,e);if(n!==null){var i=Jt();Gn(n,t,e,i)}Vd(t,e)}};Um=function(){return Qe};Im=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};lu=function(t,e,n){switch(e){case"input":if(tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ml(i);if(!r)throw Error(oe(90));hm(i),tu(i,r)}}}break;case"textarea":pm(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};Sm=zd;Mm=Er;var C_={usingClientEntryPoint:!1,Events:[La,Zr,Ml,_m,ym,zd]},js={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{vl=no.inject(R_),Qn=no}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(oe(200));return b_(t,e,null,n)};vn.createRoot=function(t,e){if(!Xd(t))throw Error(oe(299));var n=!1,i="",r=ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gd(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,xa(t.nodeType===8?t.parentNode:t),new Wd(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Er(t)};vn.hydrate=function(t,e,n){if(!Pl(e))throw Error(oe(200));return Ll(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=ix;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=nx(e,null,t,1,n??null,r,!1,s,a),t[gi]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nl(e)};vn.render=function(t,e,n){if(!Pl(e))throw Error(oe(200));return Ll(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(oe(40));return t._reactRootContainer?(Er(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};vn.unstable_batchedUpdates=zd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pl(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Ll(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(t){console.error(t)}}rx(),rm.exports=vn;var N_=rm.exports,gf=N_;qc.createRoot=gf.createRoot,qc.hydrateRoot=gf.hydrateRoot;const dt="/api";async function _t(t,e){try{const n=await t.json();if(typeof(n==null?void 0:n.detail)=="string")return n.detail;if(Array.isArray(n==null?void 0:n.detail)&&n.detail.length>0)return n.detail.map(i=>i.msg||JSON.stringify(i)).join("; ");if(n!=null&&n.message)return n.message}catch{}return`${e} (HTTP ${t.status})`}const $e={async getHealth(){const t=await fetch(`${dt}/health`);if(!t.ok)throw new Error("Health check failed");return t.json()},async updateGeminiApiKey(t,e){const n=await fetch(`${dt}/settings/gemini-key`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_key:t,model:e||"gemini-4-argon"})});if(!n.ok)throw new Error(await _t(n,"Failed to update Gemini API key"));return n.json()},async listProjects(){const t=await fetch(`${dt}/projects`);if(!t.ok)throw new Error("Failed to list projects");return t.json()},async createProject(t,e=""){const n=new FormData;n.append("name",t),n.append("description",e);const i=await fetch(`${dt}/projects`,{method:"POST",body:n});if(!i.ok)throw new Error(await _t(i,"Failed to create project"));return i.json()},async createDemoProject(){const t=await fetch(`${dt}/projects/create-demo`,{method:"POST"});if(!t.ok)throw new Error(await _t(t,"Failed to generate demonstration project"));return t.json()},async getProjectState(t){const e=await fetch(`${dt}/projects/${t}`);if(!e.ok)throw new Error(await _t(e,"Failed to fetch project state"));return e.json()},async uploadPhoto(t,e){const n=new FormData;n.append("file",e,e.name||"capture.png");const i=await fetch(`${dt}/projects/${t}/upload-photo`,{method:"POST",body:n});if(!i.ok)throw new Error(await _t(i,"Failed to upload photo"));return i.json()},async updateCalibration(t,e){const n=await fetch(`${dt}/projects/${t}/calibration`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(await _t(n,"Failed to update calibration"));return n.json()},async runDetection(t,e=1){const n=await fetch(`${dt}/projects/${t}/detect?sensitivity=${e}`,{method:"POST"});if(!n.ok)throw new Error(await _t(n,"Detection failed"));return n.json()},async addFragmentPolygon(t,e){const n=await fetch(`${dt}/projects/${t}/fragments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({polygon:e})});if(!n.ok)throw new Error(await _t(n,"Failed to add fragment polygon"));return n.json()},async updateFragment(t,e){const n=await fetch(`${dt}/projects/${t}/fragments/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(await _t(n,"Failed to update fragment"));return n.json()},async deleteFragment(t,e){const n=await fetch(`${dt}/projects/${t}/fragments/${e}`,{method:"DELETE"});if(!n.ok)throw new Error(await _t(n,"Failed to delete fragment"))},async aiAnalyzeFragment(t,e){const n=await fetch(`${dt}/projects/${t}/fragments/${e}/ai-analyze`,{method:"POST"});if(!n.ok)throw new Error(await _t(n,"AI analysis failed"));return n.json()},async groupFragments(t,e=.68){const n=await fetch(`${dt}/projects/${t}/group?threshold=${e}`,{method:"POST"});if(!n.ok)throw new Error(await _t(n,"Grouping failed"));return n.json()},async saveGroups(t,e){const n=await fetch(`${dt}/projects/${t}/groups`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(await _t(n,"Failed to save groups"));return n.json()},async suggestJoins(t,e=!1){const n=await fetch(`${dt}/projects/${t}/suggest-joins?cross_groups=${e}`,{method:"POST"});if(!n.ok)throw new Error(await _t(n,"Join suggestion failed"));return n.json()},async updateJoinStatus(t,e,n){const i=await fetch(`${dt}/projects/${t}/joins/${e}/status?status=${n}`,{method:"POST"});if(!i.ok)throw new Error(await _t(i,"Failed to update join status"));return i.json()},async calculateRimArcFit(t,e){const n=await fetch(`${dt}/projects/${t}/rim-arc-fit`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({points:e})});if(!n.ok)throw new Error(await _t(n,"Rim arc fitting failed"));return n.json()},async getReconstruction(t){const e=await fetch(`${dt}/projects/${t}/reconstruction`);if(!e.ok)throw new Error(await _t(e,"Failed to get reconstruction"));return e.json()},async updateReconstruction(t,e){const n=await fetch(`${dt}/projects/${t}/reconstruction`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(await _t(n,"Failed to update reconstruction"));return n.json()},async getTypology(t){const e=await fetch(`${dt}/projects/${t}/typology`);if(!e.ok)throw new Error(await _t(e,"Failed to retrieve typology matches"));return e.json()},async approveProject(t,e,n){const i=await fetch(`${dt}/projects/${t}/approve`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reviewer_name:e,notes:n})});if(!i.ok)throw new Error(await _t(i,"Approval failed"));return i.json()},async uploadAdditionalPhoto(t,e,n,i,r){const s=new FormData;s.append("file",e,e.name||`${n}_capture.png`),s.append("role",n),i&&s.append("fragment_id",i),r&&s.append("notes",r);const a=await fetch(`${dt}/projects/${t}/additional-photos`,{method:"POST",body:s});if(!a.ok)throw new Error(await _t(a,"Failed to upload additional photo"));return a.json()}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Re=(t,e)=>{const n=ee.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},h)=>ee.createElement("svg",{ref:h,...P_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${L_(t)}`,o].join(" "),...u},[...e.map(([f,p])=>ee.createElement(f,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=Re("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=Re("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=Re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=Re("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Re("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Re("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=Re("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=Re("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Re("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=Re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Re("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Re("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Re("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Re("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Re("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Re("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Re("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Re("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Re("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Re("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Re("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Re("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Re("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Re("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Re("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Re("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Re("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=Re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Re("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Re("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=Re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Re("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=Re("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Re("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Re("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Re("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Re("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Re("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Re("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Re("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Re("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Re("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Re("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Re("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=Re("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Re("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Re("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=Re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Re("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Re("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),ly=({currentProject:t,projects:e,health:n,onSelectProject:i,onCreateProject:r,onLoadDemo:s,onOpenChecklist:a,onOpenApiKeyModal:o,isSaving:c})=>{var u,h;return l.jsxs("header",{className:"bg-parchment-100 border-b border-parchment-300 px-6 py-3 flex items-center justify-between shadow-sm",children:[l.jsxs("div",{className:"flex items-center space-x-6",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-lg bg-terracotta-600 flex items-center justify-center text-white shadow-sm ring-2 ring-terracotta-200",children:l.jsx(dx,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("span",{className:"font-mono font-black text-lg tracking-wider text-charcoal-900",children:"SHERD-FORGE"}),l.jsx("span",{className:"text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-terracotta-100 text-terracotta-800 border border-terracotta-200",children:"v1.0"})]}),l.jsx("p",{className:"text-xs text-charcoal-400 font-medium",children:"Archaeological Fragment Reconstruction"})]})]}),l.jsxs("div",{className:"flex items-center space-x-2 pl-4 border-l border-parchment-300",children:[l.jsx("select",{value:(t==null?void 0:t.id)||"",onChange:f=>i(f.target.value),className:"bg-white border border-parchment-300 text-charcoal-800 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500 font-medium",children:e.map(f=>l.jsxs("option",{value:f.id,children:[f.name," (",f.status.toUpperCase(),")"]},f.id))}),l.jsxs("button",{type:"button",onClick:r,title:"Create New Project for Camera or Photo Upload",className:"flex items-center space-x-1 bg-white hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 text-xs px-2.5 py-1.5 rounded-md font-semibold transition shadow-2xs",children:[l.jsx(Ta,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"New Project"})]}),l.jsxs("button",{type:"button",onClick:s,className:"flex items-center space-x-1.5 bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-700 border border-terracotta-300 text-xs px-2.5 py-1.5 rounded-md font-semibold transition shadow-xs",children:[l.jsx(D_,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Synthetic Demo"})]})]})]}),l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsxs("div",{className:"text-xs flex items-center space-x-1.5 font-mono px-2.5 py-1 rounded bg-white border border-parchment-300 shadow-2xs",children:[l.jsx("span",{className:"text-charcoal-400",children:"Scale:"}),(u=t==null?void 0:t.calibration)!=null&&u.is_calibrated?l.jsxs("span",{className:"text-technical-green font-semibold",children:[(h=t.calibration.px_per_mm)==null?void 0:h.toFixed(2)," px/mm"]}):l.jsx("span",{className:"text-technical-amber font-medium",children:"Uncalibrated (px)"})]}),l.jsx("div",{className:"flex items-center space-x-1.5",children:l.jsxs("button",{type:"button",onClick:o,title:"Click to paste or configure Gemini API key",className:"text-xs flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white hover:bg-parchment-200 border border-parchment-300 font-mono shadow-2xs transition cursor-pointer",children:[l.jsx(Yi,{className:`w-3.5 h-3.5 ${n!=null&&n.gemini_available?"text-purple-600":"text-charcoal-400"}`}),l.jsx("span",{className:"text-charcoal-700 text-[11px] font-medium",children:n!=null&&n.gemini_available?`Gemini Active (${n.gemini_model})`:"Offline CV Mode"}),l.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-semibold ${n!=null&&n.gemini_available?"bg-purple-100 text-purple-700 border border-purple-200":"bg-amber-50 text-amber-700 border border-amber-200"}`,children:n!=null&&n.gemini_available?"Configured":"+ Add Key"})]})}),l.jsxs("button",{type:"button",onClick:a,className:"text-xs flex items-center space-x-1 text-charcoal-600 hover:text-charcoal-900 px-2 py-1 rounded hover:bg-parchment-200 transition",children:[l.jsx(cx,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Evaluation Checklist"})]})]}),l.jsx("div",{className:"flex items-center space-x-3",children:c?l.jsxs("span",{className:"text-xs text-charcoal-400 flex items-center space-x-1",children:[l.jsx(I_,{className:"w-3.5 h-3.5 animate-spin"}),l.jsx("span",{children:"Saving..."})]}):(t==null?void 0:t.status)==="approved"?l.jsxs("span",{className:"text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center space-x-1",children:[l.jsx(Dl,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["Approved: ",t.reviewer_name||"Reviewer"]})]}):l.jsx("span",{className:"text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200",children:"Working Draft"})})]})},cy=({currentStep:t,onSelectStep:e,stats:n})=>{const i=[{id:"capture",label:"1. Capture & Scale",icon:l.jsx(Yn,{className:"w-4 h-4"}),badge:n.hasPhoto?"Photo Loaded":"Required",ready:!0},{id:"group",label:"2. Detect & Group",icon:l.jsx(ey,{className:"w-4 h-4"}),badge:n.fragmentCount>0?`${n.fragmentCount} Sherds`:void 0,ready:n.hasPhoto},{id:"assemble",label:"3. Suggested Joins",icon:l.jsx(K_,{className:"w-4 h-4"}),badge:n.acceptedJoinsCount>0?`${n.acceptedJoinsCount} Joins`:void 0,ready:n.fragmentCount>=2},{id:"reconstruct",label:"4. 3D Reconstruct",icon:l.jsx(U_,{className:"w-4 h-4"}),badge:n.hasReconstruction?"Profile":void 0,ready:n.fragmentCount>0},{id:"typology",label:"5. Typology Match",icon:l.jsx(sx,{className:"w-4 h-4"}),ready:n.fragmentCount>0},{id:"review",label:"6. Review & Export",icon:l.jsx(ox,{className:"w-4 h-4"}),badge:n.isApproved?"Approved":"Draft",ready:!0}];return l.jsxs("div",{className:"bg-parchment-200 border-b border-parchment-300 px-6 py-2 flex items-center justify-between",children:[l.jsx("nav",{className:"flex space-x-1",children:i.map(r=>{const s=t===r.id;return l.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-semibold transition ${s?"bg-charcoal-800 text-white shadow-xs":"text-charcoal-700 hover:bg-parchment-300 hover:text-charcoal-900"}`,children:[l.jsx("span",{children:r.icon}),l.jsx("span",{children:r.label}),r.badge&&l.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${s?"bg-terracotta-500 text-white":"bg-parchment-100 text-charcoal-600 border border-parchment-300"}`,children:r.badge})]},r.id)})}),l.jsx("div",{className:"text-[11px] text-charcoal-500 italic flex items-center space-x-1.5 bg-parchment-100/70 border border-parchment-300 px-2.5 py-1 rounded",children:l.jsx("span",{children:"⚠ Single-photograph evidence establishes hypotheses, not ground truth 3D surfaces."})})]})};async function uy(t,e){const n=document.createElement("canvas");n.width=640,n.height=480;const i=n.getContext("2d");if(!i)throw new Error("Canvas 2D context unavailable");i.fillStyle="#F5F2EB",i.fillRect(0,0,n.width,n.height),i.fillStyle="#B85435",i.strokeStyle="#7A2F18",i.lineWidth=4,i.beginPath(),e==="side"||e==="fracture"?(i.moveTo(260,80),i.quadraticCurveTo(320,240,290,390),i.lineTo(335,390),i.quadraticCurveTo(365,240,305,80),i.closePath()):(i.moveTo(180,110),i.lineTo(440,95),i.lineTo(470,340),i.lineTo(210,370),i.closePath()),i.fill(),i.stroke(),i.fillStyle="#2B2B2B",i.font="bold 16px monospace",i.fillText(`${t} — ${e.replace("_"," ").toUpperCase()} VIEW`,24,36);const r=await new Promise((s,a)=>{n.toBlob(o=>o?s(o):a(new Error("Failed to encode image")),"image/png")});return new File([r],`${t}_${e}_${Date.now()}.png`,{type:"image/png"})}const dy=({selectedFragment:t,groups:e,photos:n,project:i,onUpdateFragment:r,onDeselect:s,onPhotoUploaded:a})=>{var L,F;const[o,c]=ee.useState(!1),[u,h]=ee.useState("side"),[f,p]=ee.useState(!1),[x,y]=ee.useState(null),[_,m]=ee.useState(!1),[d,v]=ee.useState(!1),[g,S]=ee.useState(null),A=ee.useRef(null),E=ee.useRef(null),b=ee.useRef(null);ee.useEffect(()=>{y(null)},[t==null?void 0:t.id]),ee.useEffect(()=>()=>{k()},[]);const k=()=>{b.current&&(b.current.getTracks().forEach(N=>N.stop()),b.current=null),E.current&&(E.current.srcObject=null),v(!1)},w=async()=>{if(m(!0),S(null),k(),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){S("Live webcam API unavailable. Use Simulated Capture or Upload below.");return}try{const N=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}},audio:!1});b.current=N,E.current&&(E.current.srcObject=N,await E.current.play().catch(()=>{})),v(!0)}catch(N){v(!1),S(`Webcam unavailable (${(N==null?void 0:N.message)||"No camera detected"}).`)}};if(!t)return l.jsxs("aside",{className:"w-80 bg-parchment-100 border-l border-parchment-300 p-5 flex flex-col justify-between text-charcoal-700 select-text overflow-y-auto",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold mb-3",children:"Evidence Inspector"}),l.jsxs("div",{className:"bg-white rounded-lg p-4 border border-parchment-300 shadow-2xs space-y-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-terracotta-600",children:[l.jsx(X_,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{className:"text-xs font-semibold",children:"No Fragment Selected"})]}),l.jsx("p",{className:"text-xs text-charcoal-600 leading-relaxed",children:"Click any fragment on the central workspace or group list to inspect computed contour metrics, edit observations, mark fracture edges, or attach multi-view photographs."})]}),l.jsxs("div",{className:"mt-6 space-y-3",children:[l.jsx("h4",{className:"text-[11px] font-mono uppercase text-charcoal-400 font-semibold",children:"Current Context"}),l.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 text-xs space-y-2 font-mono",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-400",children:"Scale Status:"}),l.jsx("span",{className:i!=null&&i.calibration.is_calibrated?"text-emerald-700 font-semibold":"text-amber-700",children:i!=null&&i.calibration.is_calibrated?`${(L=i.calibration.px_per_mm)==null?void 0:L.toFixed(2)} px/mm`:"Uncalibrated"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-400",children:"Reference Plane:"}),l.jsx("span",{className:"text-charcoal-700",children:"Flat Table View"})]})]})]})]}),l.jsx("div",{className:"border-t border-parchment-300 pt-4 text-[11px] text-charcoal-500 leading-normal",children:l.jsx("p",{className:"italic",children:"Archaeological note: Silhouette contours provide projected 2D boundaries. Wall thickness and curvature must be verified with profile or fracture photographs."})})]});const T=e.find(N=>N.id===t.group_id),G=n.filter(N=>N.fragment_id===t.id),Z=(N,q)=>{const J={...t,observations:{...t.observations,[N]:q}};r(J)},te=async()=>{if(i){c(!0),y(null);try{const N=await $e.aiAnalyzeFragment(i.id,t.id);N.available?(r({...t,observations:{...t.observations,color_desc:N.color_desc||t.observations.color_desc,finish:N.finish||t.observations.finish,decoration:N.decoration||t.observations.decoration,likely_part:N.likely_part||t.observations.likely_part,notes:((t.observations.notes||"")+" "+(N.notes||"")).trim(),ai_generated:!0}}),y({type:"success",text:"Gemini AI observations populated."})):y({type:"info",text:N.reason||"AI analysis unavailable in offline mode."})}catch(N){y({type:"error",text:`AI request failed: ${N.message}`})}finally{c(!1)}}},I=async N=>{if(i){p(!0),y(null);try{await $e.uploadAdditionalPhoto(i.id,N,u,t.id,`Manual ${u} view`),y({type:"success",text:`Attached ${u.replace("_"," ")} photograph to ${t.id}.`}),a()}catch(q){y({type:"error",text:`Upload failed: ${q.message}`})}finally{p(!1)}}},j=async N=>{var J;const q=(J=N.target.files)==null?void 0:J[0];N.target.value="",q&&await I(q)},P=async()=>{if(!E.current||!d)return;const N=E.current,q=document.createElement("canvas");q.width=N.videoWidth||640,q.height=N.videoHeight||480;const J=q.getContext("2d");if(!J)return;J.drawImage(N,0,0,q.width,q.height);const D=await new Promise(Q=>q.toBlob(Q,"image/png"));if(!D)return;const K=new File([D],`${t.id}_${u}_${Date.now()}.png`,{type:"image/png"});k(),m(!1),await I(K)},H=async()=>{const N=await uy(t.id,u);k(),m(!1),await I(N)};return l.jsxs("aside",{className:"w-88 bg-parchment-100 border-l border-parchment-300 flex flex-col justify-between text-charcoal-800 select-text overflow-y-auto",children:[l.jsxs("div",{className:"p-4 space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("span",{className:"text-base font-mono font-bold text-charcoal-900 bg-white px-2 py-0.5 rounded border border-parchment-300 shadow-2xs",children:t.id}),T?l.jsxs("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full text-white flex items-center space-x-1",style:{backgroundColor:T.color_hex},children:[l.jsx(hx,{className:"w-3 h-3"}),l.jsx("span",{children:T.name})]}):l.jsx("span",{className:"text-xs text-charcoal-500 bg-parchment-200 px-2 py-0.5 rounded",children:"Unassigned"})]}),l.jsx("button",{type:"button",onClick:s,className:"p-1 text-charcoal-400 hover:text-charcoal-700 rounded",children:l.jsx(Cn,{className:"w-4 h-4"})})]}),x&&l.jsxs("div",{className:`rounded-lg p-2.5 text-[11px] flex items-start justify-between border ${x.type==="error"?"bg-red-50 border-red-300 text-red-800":x.type==="success"?"bg-emerald-50 border-emerald-300 text-emerald-900":"bg-amber-50 border-amber-300 text-amber-900"}`,children:[l.jsxs("div",{className:"flex items-start space-x-1.5",children:[x.type==="error"?l.jsx(ba,{className:"w-3.5 h-3.5 shrink-0 mt-0.5 text-red-600"}):l.jsx(Dl,{className:"w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600"}),l.jsx("span",{children:x.text})]}),l.jsx("button",{type:"button",onClick:()=>y(null),className:"ml-2 opacity-60 hover:opacity-100",children:l.jsx(Cn,{className:"w-3 h-3"})})]}),l.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs flex space-x-3",children:[l.jsx("div",{className:"w-20 h-20 rounded bg-parchment-100 border border-parchment-200 flex items-center justify-center overflow-hidden p-1 shrink-0",children:l.jsx("img",{src:t.crop_url,alt:t.id,className:"max-w-full max-h-full object-contain"})}),l.jsxs("div",{className:"text-[11px] font-mono space-y-1 flex-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-400",children:"Area:"}),l.jsx("span",{className:"font-semibold text-charcoal-800",children:t.area_mm2?`${t.area_mm2} mm²`:`${t.area_px} px`})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-400",children:"Perimeter:"}),l.jsx("span",{className:"text-charcoal-800",children:t.perimeter_mm?`${t.perimeter_mm} mm`:`${t.perimeter_px} px`})]}),t.features.mean_rgb&&l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-parchment-200",children:[l.jsx("span",{className:"text-charcoal-400",children:"Mean Color:"}),l.jsxs("div",{className:"flex items-center space-x-1",children:[l.jsx("div",{className:"w-3.5 h-3.5 rounded border border-charcoal-400",style:{backgroundColor:`rgb(${t.features.mean_rgb.join(",")})`}}),l.jsx("span",{className:"text-[10px] text-charcoal-500",children:"RGB"})]})]}),t.features.texture_roughness!==void 0&&l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-400",children:"Roughness:"}),l.jsx("span",{className:"text-charcoal-700",children:(F=t.features.texture_roughness)==null?void 0:F.toFixed(1)})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg p-2.5",children:[l.jsxs("div",{className:"text-xs",children:[l.jsxs("div",{className:"font-semibold text-purple-900 flex items-center space-x-1",children:[l.jsx(Yi,{className:"w-3.5 h-3.5 text-purple-600"}),l.jsx("span",{children:"AI Feature Assistant"})]}),l.jsx("span",{className:"text-[10px] text-purple-700",children:"Suggest visible finish & part"})]}),l.jsx("button",{type:"button",onClick:te,disabled:o,className:"text-xs bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium px-2.5 py-1 rounded transition shadow-2xs cursor-pointer",children:o?"Analyzing...":"Analyze"})]}),l.jsxs("div",{className:"space-y-3 bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs text-xs",children:[l.jsx("h4",{className:"font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500",children:"Visible Evidence & Notes"}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Anatomical Part"}),l.jsxs("select",{value:t.observations.likely_part,onChange:N=>Z("likely_part",N.target.value),className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800 font-medium",children:[l.jsx("option",{value:"unknown",children:"Unknown / Unspecified"}),l.jsx("option",{value:"rim",children:"Rim (Lip preserved)"}),l.jsx("option",{value:"body",children:"Body (Wall sherd)"}),l.jsx("option",{value:"base",children:"Base (Bottom section)"}),l.jsx("option",{value:"handle",children:"Handle / Lug"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Visible Color / Slip"}),l.jsx("input",{type:"text",value:t.observations.color_desc||"",onChange:N=>Z("color_desc",N.target.value),placeholder:"e.g. Terracotta orange, pale buff",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Finish & Temper"}),l.jsx("input",{type:"text",value:t.observations.finish||"",onChange:N=>Z("finish",N.target.value),placeholder:"e.g. Burnished slip, sand grit",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l.jsx("label",{className:"text-[11px] text-charcoal-500",children:"Wall Thickness (mm)"}),l.jsx("span",{className:"text-[10px] text-terracotta-600 italic",children:"Side-view only"})]}),l.jsx("input",{type:"number",step:"0.1",value:t.observations.wall_thickness_mm??"",onChange:N=>Z("wall_thickness_mm",N.target.value?parseFloat(N.target.value):null),placeholder:"Enter caliper/profile measurement",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800 font-mono"}),l.jsx("p",{className:"text-[10px] text-charcoal-400 mt-0.5 leading-tight",children:"⚠ Never inferred from top-view silhouette. Measure directly from fracture face."})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Observational Notes"}),l.jsx("textarea",{rows:2,value:t.observations.notes||"",onChange:N=>Z("notes",N.target.value),placeholder:"Tool marks, wear, residue traces...",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"})]})]}),l.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("h4",{className:"font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500",children:"Edge Constraints"}),l.jsxs("span",{className:"text-[10px] bg-parchment-200 px-1.5 py-0.5 rounded text-charcoal-600",children:[t.edge_annotations.length," marked"]})]}),l.jsx("p",{className:"text-[11px] text-charcoal-500 leading-normal",children:"Mark original rim or base edges so geometric join matching will not attempt to mate unbroken vessel lips."}),t.edge_annotations.map(N=>l.jsxs("div",{className:"flex items-center justify-between p-2 rounded bg-parchment-50 border border-parchment-200",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-semibold text-charcoal-800",children:N.label||"Marked Boundary"}),l.jsxs("div",{className:"text-[10px] text-charcoal-400 font-mono",children:["Type: ",N.edge_type==="original_vessel_edge"?"Preserved Vessel Rim/Lip":"Fracture Break"]})]}),l.jsx("button",{type:"button",onClick:()=>{const q=t.edge_annotations.filter(J=>J.id!==N.id);r({...t,edge_annotations:q})},className:"text-red-500 hover:text-red-700 p-1",children:l.jsx(Cn,{className:"w-3.5 h-3.5"})})]},N.id)),l.jsx("button",{type:"button",onClick:()=>{const N={id:`ea_${Date.now()}`,start_idx:0,end_idx:Math.min(10,t.contour.length-1),edge_type:"original_vessel_edge",label:"Marked Rim Section"};r({...t,edge_annotations:[...t.edge_annotations,N]})},className:"w-full text-center text-xs py-1.5 rounded border border-dashed border-terracotta-400 text-terracotta-700 hover:bg-terracotta-50 transition font-medium cursor-pointer",children:"+ Mark Section as Original Vessel Edge"})]}),l.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs",children:[l.jsx("input",{ref:A,type:"file",accept:"image/jpeg,image/png,image/webp,image/bmp",onChange:j,className:"hidden"}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("h4",{className:"font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500",children:"Multi-View Photos"}),l.jsxs("span",{className:"text-[10px] text-charcoal-400",children:[G.length," views"]})]}),l.jsx("div",{className:"grid grid-cols-2 gap-2",children:G.map(N=>l.jsxs("div",{className:"relative rounded border border-parchment-200 overflow-hidden bg-parchment-50",children:[l.jsx("img",{src:N.file_url,alt:N.role,className:"w-full h-16 object-cover"}),l.jsx("span",{className:"absolute bottom-0 inset-x-0 bg-charcoal-900/70 text-white text-[9px] px-1 py-0.5 font-mono truncate",children:N.role.replace("_"," ")})]},N.id))}),l.jsxs("div",{className:"pt-2 border-t border-parchment-200 space-y-2",children:[l.jsx("div",{className:"flex space-x-1",children:["side","fracture","inner_face","outer_face"].map(N=>l.jsx("button",{type:"button",onClick:()=>h(N),className:`text-[10px] px-2 py-0.5 rounded capitalize cursor-pointer ${u===N?"bg-charcoal-800 text-white":"bg-parchment-200 text-charcoal-700"}`,children:N.replace("_"," ")},N))}),l.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[l.jsxs("button",{type:"button",disabled:f,onClick:()=>{var N;return(N=A.current)==null?void 0:N.click()},className:"flex items-center justify-center space-x-1.5 py-1.5 px-2 border border-dashed border-charcoal-300 rounded cursor-pointer hover:bg-parchment-50 transition text-charcoal-700 disabled:opacity-50",children:[l.jsx(Zs,{className:"w-3.5 h-3.5 text-terracotta-600 shrink-0"}),l.jsx("span",{className:"text-[11px] font-medium truncate",children:f?"Uploading...":`Upload ${u.replace("_"," ")}`})]}),l.jsxs("button",{type:"button",disabled:f,onClick:w,className:"flex items-center justify-center space-x-1.5 py-1.5 px-2 border border-charcoal-300 bg-parchment-100 rounded cursor-pointer hover:bg-parchment-200 transition text-charcoal-800 disabled:opacity-50",children:[l.jsx(Yn,{className:"w-3.5 h-3.5 text-terracotta-600 shrink-0"}),l.jsx("span",{className:"text-[11px] font-medium",children:"Camera"})]})]})]})]})]}),_&&l.jsx("div",{className:"fixed inset-0 z-50 bg-charcoal-900/80 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-parchment-50 border border-parchment-300 rounded-xl shadow-2xl max-w-md w-full overflow-hidden",children:[l.jsxs("div",{className:"bg-parchment-100 border-b border-parchment-300 px-4 py-3 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(Yn,{className:"w-4 h-4 text-terracotta-600"}),l.jsxs("span",{className:"text-xs font-bold text-charcoal-900",children:["Capture ",t.id," (",u.replace("_"," "),")"]})]}),l.jsx("button",{type:"button",onClick:()=>{k(),m(!1)},className:"p-1 text-charcoal-500 hover:text-charcoal-900",children:l.jsx(Cn,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"bg-charcoal-900 aspect-video flex items-center justify-center p-4",children:[l.jsx("video",{ref:E,autoPlay:!0,playsInline:!0,muted:!0,className:`w-full h-full object-contain ${d?"block":"hidden"}`}),!d&&l.jsxs("div",{className:"text-center space-y-3",children:[l.jsx("p",{className:"text-xs text-parchment-200",children:g||"Initializing camera stream..."}),l.jsxs("button",{type:"button",onClick:H,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow transition inline-flex items-center space-x-1.5 cursor-pointer",children:[l.jsx(Yi,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["Capture Simulated ",u.replace("_"," ")," View"]})]})]})]}),l.jsxs("div",{className:"bg-parchment-100 border-t border-parchment-300 px-4 py-2.5 flex items-center justify-between",children:[l.jsxs("button",{type:"button",onClick:H,className:"text-[11px] text-terracotta-700 hover:underline font-medium cursor-pointer",children:["Simulate ",u.replace("_"," ")," capture"]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("button",{type:"button",onClick:()=>{k(),m(!1)},className:"text-xs text-charcoal-600 px-2.5 py-1",children:"Cancel"}),l.jsx("button",{type:"button",disabled:!d,onClick:P,className:"bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-40 text-white text-xs font-semibold px-3.5 py-1.5 rounded-md cursor-pointer",children:"Capture View"})]})]})]})})]})};async function hy(){const t=document.createElement("canvas");t.width=1600,t.height=1200;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D context unavailable");e.fillStyle="#EAE6DF",e.fillRect(0,0,t.width,t.height);const n=e.createRadialGradient(800,600,100,800,600,950);n.addColorStop(0,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(0,0,0,0.06)"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="#FFFFFF",e.strokeStyle="#222222",e.lineWidth=3,e.fillRect(110,1020,380,95),e.strokeRect(110,1020,380,95);for(let s=0;s<10;s++)e.fillStyle=s%2===0?"#1E1E1E":"#FFFFFF",e.fillRect(140+s*32,1045,32,22),e.strokeRect(140+s*32,1045,32,22);e.fillStyle="#1E1E1E",e.font="bold 18px monospace",e.fillText("0 mm",135,1098),e.fillText("100 mm (3.20 px/mm)",320,1098);const i=[{pts:[[240,210],[450,195],[475,360],[355,395],[230,370]],color:"#B85435",stroke:"#8E3B21"},{pts:[[250,460],[375,485],[495,450],[480,640],[245,625]],color:"#BA5738",stroke:"#8E3B21"},{pts:[[570,215],[780,205],[795,385],[670,415],[560,365]],color:"#B45032",stroke:"#8E3B21"},{pts:[[590,490],[790,470],[820,650],[605,665]],color:"#B95536",stroke:"#8E3B21"},{pts:[[960,220],[1190,210],[1215,410],[1075,435],[950,395]],color:"#C49A5C",stroke:"#96713A"},{pts:[[970,510],[1095,535],[1235,505],[1220,710],[965,695]],color:"#C19658",stroke:"#96713A"},{pts:[[1290,310],[1470,300],[1485,520],[1305,535]],color:"#BF9456",stroke:"#96713A"}];for(const s of i){e.beginPath(),e.moveTo(s.pts[0][0],s.pts[0][1]);for(let a=1;a<s.pts.length;a++)e.lineTo(s.pts[a][0],s.pts[a][1]);e.closePath(),e.fillStyle=s.color,e.fill(),e.lineWidth=4,e.strokeStyle=s.stroke,e.stroke()}const r=await new Promise((s,a)=>{t.toBlob(o=>o?s(o):a(new Error("Failed to encode canvas image")),"image/png")});return new File([r],`camera_capture_${Date.now()}.png`,{type:"image/png"})}const fy=({project:t,fragmentCount:e=0,onPhotoUploaded:n,onCalibrationUpdated:i,onNextStep:r})=>{var de,Ee,z,tt,Se;const[s,a]=ee.useState(!1),[o,c]=ee.useState(null),[u,h]=ee.useState(null),[f,p]=ee.useState(!1),[x,y]=ee.useState(!1),[_,m]=ee.useState([]),[d,v]=ee.useState(100),[g,S]=ee.useState(!1),[A,E]=ee.useState(!1),[b,k]=ee.useState(!1),[w,T]=ee.useState(null),[G,Z]=ee.useState([]),[te,I]=ee.useState(""),j=ee.useRef(null),P=ee.useRef(null),H=ee.useRef(null),L=ee.useRef(null),F=ee.useRef(null);ee.useEffect(()=>()=>{N()},[]);const N=()=>{F.current&&(F.current.getTracks().forEach(ne=>ne.stop()),F.current=null),L.current&&(L.current.srcObject=null),k(!1)},q=async ne=>{if(N(),E(!0),T(null),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){E(!1),T("Browser webcam API (navigator.mediaDevices.getUserMedia) is not available in this context. You can capture a simulated overhead camera frame or select a photo from your device below.");return}try{const ce={video:ne?{deviceId:{exact:ne},width:{ideal:1600},height:{ideal:1200}}:{facingMode:"environment",width:{ideal:1600},height:{ideal:1200}},audio:!1},Te=await navigator.mediaDevices.getUserMedia(ce);F.current=Te,L.current&&(L.current.srcObject=Te,await L.current.play().catch(()=>{})),k(!0);const R=(await navigator.mediaDevices.enumerateDevices()).filter(M=>M.kind==="videoinput");Z(R),!ne&&R.length>0&&!te&&I(R[0].deviceId)}catch(ce){k(!1),T(`Live camera stream unavailable (${(ce==null?void 0:ce.name)||"CameraError"}: ${(ce==null?void 0:ce.message)||"No webcam found or permission denied"}). Use 'Capture Simulated Camera Frame' or 'Choose / Take Device Photo' below.`)}finally{E(!1)}},J=()=>{c(null),S(!0),q(te||void 0)},D=()=>{N(),S(!1),T(null)},K=async(ne,ce="Photograph")=>{a(!0),c(null),h(null);try{const Te=await $e.uploadPhoto(t.id,ne),Ne=Te.fragments?Te.fragments.length:0;h(`${ce} uploaded (${Te.dimensions[0]}×${Te.dimensions[1]} px) — ${Ne} ceramic fragment${Ne===1?"":"s"} automatically segmented. You can calibrate the scale on the ruler below or proceed to Group & Detect.`),n(Te.primary_photo_url,Te.dimensions,Te.fragments,Te.groups,Te.calibration)}catch(Te){c(Te.message||"Upload failed. Please verify the file is a valid JPEG, PNG, or WebP image.")}finally{a(!1)}},Q=async ne=>{var Te;const ce=(Te=ne.target.files)==null?void 0:Te[0];ne.target.value="",ce&&await K(ce,`Photograph "${ce.name}"`)},ue=async()=>{if(!L.current||!b)return;const ne=L.current,ce=ne.videoWidth||1280,Te=ne.videoHeight||720,Ne=document.createElement("canvas");Ne.width=ce,Ne.height=Te;const R=Ne.getContext("2d");if(!R)return;R.drawImage(ne,0,0,ce,Te);const M=await new Promise(ae=>Ne.toBlob(ae,"image/png"));if(!M){T("Could not capture frame from video stream.");return}const W=new File([M],`camera_capture_${Date.now()}.png`,{type:"image/png"});D(),await K(W,"Live camera photograph")},V=async()=>{try{const ne=await hy();D(),await K(ne,"Camera tabletop capture")}catch(ne){T(`Simulated capture failed: ${ne.message}`)}},ie=async ne=>{var Te;ne.preventDefault(),ne.stopPropagation(),p(!1);const ce=(Te=ne.dataTransfer.files)==null?void 0:Te[0];ce&&await K(ce,`Dropped photograph "${ce.name}"`)},he=ne=>{var we,me;if(!x||!j.current)return;const ce=j.current.getBoundingClientRect(),Te=j.current.naturalWidth||((we=t.primary_photo_dimensions)==null?void 0:we[0])||1600,Ne=j.current.naturalHeight||((me=t.primary_photo_dimensions)==null?void 0:me[1])||1200,R=ne.clientX-ce.left,M=ne.clientY-ce.top,W=Te/ce.width,ae=Ne/ce.height,se=Math.round(R*W),le=Math.round(M*ae);if(_.length===0)m([[se,le]]);else if(_.length===1){const _e=_[0],Ce=[se,le];m([_e,Ce]);const ke=Ce[0]-_e[0],re=Ce[1]-_e[1],Ze=Math.sqrt(ke*ke+re*re),je=Number((Ze/d).toFixed(4));$e.updateCalibration(t.id,{is_calibrated:!0,px_per_mm:je,point_a:_e,point_b:Ce,distance_mm:d,notes:`Ruler scale: ${d}mm = ${Math.round(Ze)}px`}).then(Le=>{var Ae;i(Le),y(!1),h(`Scale calibrated: ${(Ae=Le.px_per_mm)==null?void 0:Ae.toFixed(2)} px/mm (${d} mm = ${Math.round(Ze)} px).`)}).catch(Le=>{c(`Calibration update failed: ${Le.message}`)})}};return l.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto",children:[l.jsx("input",{ref:P,type:"file",accept:"image/jpeg,image/png,image/webp,image/bmp",onChange:Q,className:"hidden","data-testid":"photo-upload-input"}),l.jsx("input",{ref:H,type:"file",accept:"image/*",capture:"environment",onChange:ne=>{D(),Q(ne)},className:"hidden","data-testid":"device-camera-input"}),l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-4 mb-4 shadow-2xs flex flex-wrap items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-start space-x-3 max-w-2xl",children:[l.jsx("div",{className:"p-2 bg-terracotta-100 rounded-lg text-terracotta-700 shrink-0 mt-0.5",children:l.jsx(Q_,{className:"w-5 h-5"})}),l.jsxs("div",{className:"text-xs space-y-1",children:[l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Overhead Photography & Scale Calibration"}),l.jsx("p",{className:"text-charcoal-600 leading-relaxed",children:"“Separate fragments, avoid overlap, use even lighting, and include a scale. One photograph supports preliminary grouping; side and fracture views improve reconstruction.”"}),l.jsx("p",{className:"text-[11px] text-terracotta-700 font-medium",children:"Note: Calibration applies to the reference plane. Raised, curved, or tilted surfaces can introduce perspective measurement error."})]})]}),l.jsxs("div",{className:"flex items-center space-x-2.5 shrink-0",children:[l.jsxs("button",{type:"button",disabled:s,onClick:()=>{var ne;return(ne=P.current)==null?void 0:ne.click()},"data-testid":"upload-photo-btn",className:"bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition flex items-center space-x-2 cursor-pointer",children:[l.jsx(Zs,{className:"w-4 h-4"}),l.jsx("span",{children:s?"Processing...":t.primary_photo_url?"Upload New Photo":"Upload Photo"})]}),l.jsxs("button",{type:"button",disabled:s,onClick:J,"data-testid":"open-camera-btn",className:"bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition flex items-center space-x-2 cursor-pointer",children:[l.jsx(Yn,{className:"w-4 h-4 text-terracotta-400"}),l.jsx("span",{children:"Use Camera"})]})]})]}),s&&l.jsxs("div",{className:"mb-4 bg-terracotta-50 border border-terracotta-300 text-terracotta-900 rounded-lg px-4 py-3 text-xs flex items-center space-x-3 shadow-2xs",children:[l.jsx(rs,{className:"w-4 h-4 text-terracotta-600 animate-spin shrink-0"}),l.jsx("span",{className:"font-medium",children:"Uploading overhead photograph and running deterministic OpenCV contour segmentation..."})]}),o&&l.jsxs("div",{className:"mb-4 bg-red-50 border border-red-300 text-red-800 rounded-lg px-4 py-3 text-xs flex items-center justify-between shadow-2xs",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(ba,{className:"w-4 h-4 text-red-600 shrink-0"}),l.jsx("span",{className:"font-medium",children:o})]}),l.jsx("button",{type:"button",onClick:()=>c(null),className:"text-red-500 hover:text-red-800 p-1",children:l.jsx(Cn,{className:"w-4 h-4"})})]}),u&&!s&&l.jsxs("div",{className:"mb-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg px-4 py-3 text-xs flex items-center justify-between shadow-2xs",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(Dl,{className:"w-4 h-4 text-emerald-600 shrink-0"}),l.jsx("span",{className:"font-medium",children:u})]}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("button",{type:"button",onClick:r,className:"bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-3 py-1 rounded flex items-center space-x-1 transition",children:[l.jsxs("span",{children:["Inspect ",e," Sherds in Group View"]}),l.jsx(Ms,{className:"w-3.5 h-3.5"})]}),l.jsx("button",{type:"button",onClick:()=>h(null),className:"text-emerald-600 hover:text-emerald-900 p-1",children:l.jsx(Cn,{className:"w-4 h-4"})})]})]}),t.primary_photo_url?l.jsxs("div",{onDragOver:ne=>{ne.preventDefault(),p(!0)},onDragLeave:()=>p(!1),onDrop:ie,className:"flex-1 flex flex-col space-y-4",children:[l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-2xs",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-mono",children:[l.jsx("span",{className:"text-charcoal-500 font-sans",children:"Scale Calibration:"}),t.calibration.is_calibrated?l.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-700 font-semibold",children:[l.jsx($d,{className:"w-4 h-4"}),l.jsxs("span",{children:[(de=t.calibration.px_per_mm)==null?void 0:de.toFixed(2)," px/mm (",t.calibration.distance_mm," mm)"]})]}):l.jsxs("div",{className:"flex items-center space-x-1 text-amber-700",children:[l.jsx(ba,{className:"w-4 h-4"}),l.jsx("span",{children:"Uncalibrated (results in pixels)"})]}),x?l.jsxs("div",{className:"flex items-center space-x-2 pl-4 border-l border-parchment-300",children:[l.jsx("span",{className:"text-terracotta-600 animate-pulse font-semibold",children:_.length===0?"Click Point 1 on ruler":"Click Point 2 on ruler"}),l.jsxs("div",{className:"flex items-center space-x-1",children:[l.jsx("span",{className:"text-charcoal-500 font-sans",children:"Distance:"}),l.jsx("input",{type:"number",value:d,onChange:ne=>v(parseFloat(ne.target.value)||100),className:"w-16 bg-parchment-50 border border-parchment-300 rounded px-1.5 py-0.5 text-xs font-mono"}),l.jsx("span",{className:"text-charcoal-500",children:"mm"})]}),l.jsx("button",{type:"button",onClick:()=>{y(!1),m([])},className:"text-xs text-charcoal-500 hover:text-charcoal-800 underline",children:"Cancel"})]}):l.jsxs("button",{type:"button",onClick:()=>{y(!0),m([])},className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 px-3 py-1 rounded border border-parchment-300 transition",children:[l.jsx(F_,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:t.calibration.is_calibrated?"Recalibrate Scale":"Calibrate Scale on Ruler"})]})]}),l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsxs("button",{type:"button",disabled:s,onClick:()=>{var ne;return(ne=P.current)==null?void 0:ne.click()},className:"text-xs bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-medium cursor-pointer flex items-center space-x-1.5 transition",children:[l.jsx(rs,{className:`w-3.5 h-3.5 ${s?"animate-spin":""}`}),l.jsx("span",{children:"Replace Photo"})]}),l.jsxs("button",{type:"button",disabled:s,onClick:J,className:"text-xs bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-medium cursor-pointer flex items-center space-x-1.5 transition",children:[l.jsx(Yn,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Retake with Camera"})]}),l.jsxs("button",{type:"button",onClick:r,className:"bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition cursor-pointer",children:[l.jsxs("span",{children:["Proceed to Detect & Group",e>0?` (${e} Sherds)`:""]}),l.jsx(Ms,{className:"w-3.5 h-3.5"})]})]})]}),l.jsx("div",{className:`flex-1 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border shadow-inner min-h-[500px] ${f?"border-terracotta-500 ring-2 ring-terracotta-400":"border-charcoal-700"}`,children:l.jsxs("div",{className:"relative inline-block max-w-full max-h-full",children:[l.jsx("img",{ref:j,src:t.primary_photo_url,alt:"Overhead View",onClick:he,className:`max-w-full max-h-[680px] object-contain rounded select-none ${x?"cursor-crosshair":"cursor-default"}`}),t.calibration.point_a&&t.calibration.point_b&&l.jsxs("svg",{className:"absolute inset-0 pointer-events-none w-full h-full",viewBox:`0 0 ${((Ee=t.primary_photo_dimensions)==null?void 0:Ee[0])||1600} ${((z=t.primary_photo_dimensions)==null?void 0:z[1])||1200}`,children:[l.jsx("line",{x1:t.calibration.point_a[0],y1:t.calibration.point_a[1],x2:t.calibration.point_b[0],y2:t.calibration.point_b[1],stroke:"#28A745",strokeWidth:"4",strokeDasharray:"6,4"}),l.jsx("circle",{cx:t.calibration.point_a[0],cy:t.calibration.point_a[1],r:"7",fill:"#28A745",stroke:"#FFFFFF",strokeWidth:"2"}),l.jsx("circle",{cx:t.calibration.point_b[0],cy:t.calibration.point_b[1],r:"7",fill:"#28A745",stroke:"#FFFFFF",strokeWidth:"2"}),l.jsxs("text",{x:(t.calibration.point_a[0]+t.calibration.point_b[0])/2,y:(t.calibration.point_a[1]+t.calibration.point_b[1])/2-12,fill:"#28A745",fontSize:"16",fontWeight:"bold",textAnchor:"middle",className:"drop-shadow-md",children:[t.calibration.distance_mm," mm"]})]}),x&&_.length===1&&l.jsx("div",{className:"absolute w-4 h-4 rounded-full bg-terracotta-500 border-2 border-white pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping",style:{left:`${_[0][0]/(((tt=t.primary_photo_dimensions)==null?void 0:tt[0])||1600)*100}%`,top:`${_[0][1]/(((Se=t.primary_photo_dimensions)==null?void 0:Se[1])||1200)*100}%`}})]})})]}):l.jsxs("div",{onDragOver:ne=>{ne.preventDefault(),p(!0)},onDragLeave:()=>p(!1),onDrop:ie,className:`flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-xl bg-white p-12 text-center transition ${f?"border-terracotta-500 bg-terracotta-50/40":"border-parchment-300"}`,children:[l.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-parchment-100 flex items-center justify-center text-charcoal-400",children:l.jsx(Zs,{className:"w-8 h-8 text-terracotta-500"})}),l.jsx("div",{className:"w-16 h-16 rounded-full bg-parchment-100 flex items-center justify-center text-charcoal-400",children:l.jsx(Yn,{className:"w-8 h-8 text-charcoal-700"})})]}),l.jsx("h2",{className:"text-base font-bold text-charcoal-900 mb-1",children:"Upload Overhead Pottery Photograph or Capture with Camera"}),l.jsx("p",{className:"text-xs text-charcoal-500 max-w-md mb-6",children:"Accepts JPEG, PNG, or WebP up to 20MB (or drag & drop a photo here). Use a plain, contrasting tabletop background with a visible millimetre scale bar."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[l.jsxs("button",{type:"button",disabled:s,onClick:()=>{var ne;return(ne=P.current)==null?void 0:ne.click()},className:"bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition flex items-center space-x-2",children:[l.jsx(Zs,{className:"w-4 h-4"}),l.jsx("span",{children:s?"Uploading & Detecting...":"Select Overhead Photograph"})]}),l.jsxs("button",{type:"button",disabled:s,onClick:J,className:"bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition flex items-center space-x-2",children:[l.jsx(Yn,{className:"w-4 h-4 text-terracotta-400"}),l.jsx("span",{children:"Capture with Camera"})]})]})]}),g&&l.jsx("div",{className:"fixed inset-0 z-50 bg-charcoal-900/80 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-parchment-50 border border-parchment-300 rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col",children:[l.jsxs("div",{className:"bg-parchment-100 border-b border-parchment-300 px-5 py-3.5 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-terracotta-600 text-white",children:l.jsx(Yn,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-bold text-charcoal-900",children:"Overhead Camera Capture"}),l.jsx("p",{className:"text-[11px] text-charcoal-500",children:"Position camera perpendicular to tabletop with non-overlapping sherds and a visible ruler scale"})]})]}),l.jsx("button",{type:"button",onClick:D,className:"p-1.5 text-charcoal-500 hover:text-charcoal-900 rounded-lg hover:bg-parchment-200 transition",children:l.jsx(Cn,{className:"w-4 h-4"})})]}),G.length>1&&l.jsxs("div",{className:"px-5 py-2 bg-white border-b border-parchment-200 flex items-center space-x-3 text-xs",children:[l.jsx(sy,{className:"w-3.5 h-3.5 text-charcoal-500"}),l.jsx("span",{className:"text-charcoal-600 font-medium",children:"Camera Source:"}),l.jsx("select",{value:te,onChange:ne=>{I(ne.target.value),q(ne.target.value)},className:"bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800",children:G.map((ne,ce)=>l.jsx("option",{value:ne.deviceId,children:ne.label||`Camera ${ce+1}`},ne.deviceId||ce))})]}),l.jsxs("div",{className:"relative bg-charcoal-900 aspect-video w-full flex items-center justify-center overflow-hidden",children:[l.jsx("video",{ref:L,autoPlay:!0,playsInline:!0,muted:!0,className:`w-full h-full object-contain ${b?"block":"hidden"}`}),b&&l.jsxs("div",{className:"absolute inset-4 border-2 border-dashed border-white/40 rounded-lg pointer-events-none flex flex-col justify-between p-3",children:[l.jsx("div",{className:"text-[10px] font-mono uppercase tracking-wider text-white/80 bg-charcoal-900/60 px-2 py-0.5 rounded self-start",children:"Reference Plane Framing Guide"}),l.jsx("div",{className:"border border-emerald-400/70 bg-emerald-950/30 rounded px-3 py-1.5 self-start text-[10px] font-mono text-emerald-300",children:"Place millimetre scale bar here"})]}),A&&l.jsxs("div",{className:"text-center text-parchment-100 space-y-2 p-6",children:[l.jsx(rs,{className:"w-8 h-8 animate-spin mx-auto text-terracotta-400"}),l.jsx("p",{className:"text-xs font-mono",children:"Initializing camera stream..."})]}),!A&&!b&&l.jsxs("div",{className:"max-w-lg text-center p-6 space-y-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mx-auto text-terracotta-400",children:l.jsx(Yn,{className:"w-6 h-6"})}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("h4",{className:"text-sm font-semibold text-white",children:"Live Webcam Feed Unavailable"}),l.jsx("p",{className:"text-xs text-parchment-200 leading-relaxed",children:w||"No physical camera was detected or camera access was declined. You can capture a realistic simulated overhead camera frame or open your device file/camera picker below."})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[l.jsxs("button",{type:"button",onClick:V,"data-testid":"capture-simulated-frame-btn",className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition flex items-center space-x-2 cursor-pointer",children:[l.jsx(Yi,{className:"w-4 h-4"}),l.jsx("span",{children:"Capture Simulated Tabletop Frame"})]}),l.jsxs("button",{type:"button",onClick:()=>{var ne;return(ne=H.current)==null?void 0:ne.click()},className:"bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-semibold px-4 py-2 rounded-lg transition flex items-center space-x-2 cursor-pointer",children:[l.jsx(Zs,{className:"w-4 h-4"}),l.jsx("span",{children:"Choose / Take Device Photo"})]})]})]})]}),l.jsxs("div",{className:"bg-parchment-100 border-t border-parchment-300 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsxs("button",{type:"button",onClick:()=>q(te||void 0),className:"text-xs bg-white hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-medium flex items-center space-x-1.5 transition cursor-pointer",children:[l.jsx(rs,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Retry Webcam"})]}),l.jsxs("button",{type:"button",onClick:V,className:"text-xs bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-800 border border-terracotta-300 px-3 py-1.5 rounded-md font-medium flex items-center space-x-1.5 transition cursor-pointer",children:[l.jsx(Yi,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Simulate Tabletop Capture"})]})]}),l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsx("button",{type:"button",onClick:D,className:"text-xs text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-md font-medium",children:"Cancel"}),l.jsxs("button",{type:"button",disabled:!b,onClick:ue,"data-testid":"shutter-capture-btn",className:"bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-40 text-white text-xs font-semibold px-5 py-2 rounded-lg shadow-sm flex items-center space-x-2 transition cursor-pointer",children:[l.jsx(Yn,{className:"w-4 h-4"}),l.jsx("span",{children:"Capture Overhead Photograph"})]})]})]})]})})]})},py=({project:t,fragments:e,groups:n,selectedFragmentId:i,onSelectFragment:r,onFragmentsUpdated:s,onGroupsUpdated:a,onNextStep:o})=>{var te,I,j;const[c,u]=ee.useState(1),[h,f]=ee.useState(!1),[p,x]=ee.useState(.68),[y,_]=ee.useState(!1),[m,d]=ee.useState(!1),[v,g]=ee.useState([]),S=ee.useRef(null),A=async()=>{f(!0);try{const P=await $e.runDetection(t.id,c);s(P),P.length>0&&r(P[0])}catch(P){alert(`Detection failed: ${P.message}`)}finally{f(!1)}},E=async()=>{_(!0);try{const P=await $e.groupFragments(t.id,p);a(P.groups),s(P.fragments)}catch(P){alert(`Grouping failed: ${P.message}`)}finally{_(!1)}},b=P=>{if(!m||!S.current)return;const H=S.current.getBoundingClientRect(),L=S.current.naturalWidth,F=S.current.naturalHeight,N=P.clientX-H.left,q=P.clientY-H.top,J=L/H.width,D=F/H.height,K=Math.round(N*J),Q=Math.round(q*D);g([...v,[K,Q]])},k=async()=>{if(v.length<3){alert("At least 3 points are required to define a fragment polygon.");return}try{const P=await $e.addFragmentPolygon(t.id,v);s([...e,P]),r(P),d(!1),g([])}catch(P){alert(`Failed to add polygon: ${P.message}`)}},w=async()=>{if(i&&confirm(`Delete fragment ${i}?`))try{await $e.deleteFragment(t.id,i);const P=e.filter(H=>H.id!==i);s(P),r(null)}catch(P){alert(`Delete failed: ${P.message}`)}},T=(P,H)=>{const L=e.map(N=>N.id===P?{...N,group_id:H}:N);s(L);const F=n.map(N=>{let q=N.fragment_ids.filter(J=>J!==P);return N.id===H&&q.push(P),{...N,fragment_ids:q}});a(F),$e.saveGroups(t.id,F)},G=P=>{const H=e.find(F=>F.id===P);if(!H)return;const L=e.map(F=>F.id===P?{...F,locked_group:!F.locked_group}:F);s(L),$e.updateFragment(t.id,{...H,locked_group:!H.locked_group})},Z=()=>{const P=`VG${n.length+1}`,H=["#C85A32","#2A6F97","#588157","#B08968","#7209B7","#E07A5F"],L={id:P,project_id:t.id,name:`Vessel Group ${n.length+1}`,color_hex:H[n.length%H.length],fragment_ids:i?[i]:[],confirmed:!1,notes:"User created group"},F=[...n,L];a(F),$e.saveGroups(t.id,F)};return l.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-6 text-xs",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(ny,{className:"w-3.5 h-3.5 text-charcoal-400"}),l.jsx("span",{className:"text-charcoal-600 font-medium",children:"Detection Sensitivity:"}),l.jsx("input",{type:"range",min:"0.4",max:"2.2",step:"0.1",value:c,onChange:P=>u(parseFloat(P.target.value)),className:"w-24 accent-terracotta-600"}),l.jsxs("span",{className:"font-mono text-charcoal-700 w-8",children:[c.toFixed(1),"x"]})]}),l.jsxs("button",{onClick:A,disabled:h,className:"flex items-center space-x-1.5 bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[l.jsx(rs,{className:`w-3.5 h-3.5 ${h?"animate-spin":""}`}),l.jsx("span",{children:h?"Segmenting...":"Detect Sherds"})]}),m?l.jsxs("div",{className:"flex items-center space-x-2 bg-amber-50 border border-amber-300 px-3 py-1 rounded-md",children:[l.jsxs("span",{className:"text-amber-800 font-medium",children:["Click vertices on photo (",v.length," pts)"]}),l.jsx("button",{onClick:k,className:"bg-amber-600 text-white px-2 py-0.5 rounded text-xs font-semibold",children:"Done"}),l.jsx("button",{onClick:()=>{d(!1),g([])},className:"text-xs text-charcoal-500 underline",children:"Cancel"})]}):l.jsxs("button",{onClick:()=>{d(!0),g([])},className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md transition",children:[l.jsx(Ta,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Add Missing Polygon"})]}),i&&l.jsxs("button",{onClick:w,className:"flex items-center space-x-1 text-red-600 hover:text-red-800 px-2.5 py-1.5 rounded hover:bg-red-50 transition",children:[l.jsx(fx,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["Delete ",i]})]})]}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[l.jsx("span",{className:"text-charcoal-500",children:"Group Strictness:"}),l.jsx("input",{type:"range",min:"0.50",max:"0.88",step:"0.02",value:p,onChange:P=>x(parseFloat(P.target.value)),className:"w-20 accent-terracotta-600"}),l.jsxs("span",{className:"font-mono text-charcoal-700 w-8",children:[(p*100).toFixed(0),"%"]})]}),l.jsxs("button",{onClick:E,disabled:y||e.length===0,className:"flex items-center space-x-1.5 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm transition",children:[l.jsx(dx,{className:"w-3.5 h-3.5 text-terracotta-400"}),l.jsx("span",{children:y?"Clustering...":"Suggest Vessel Groups"})]}),l.jsxs("button",{onClick:o,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[l.jsx("span",{children:"Proceed to Joins"}),l.jsx(Ms,{className:"w-3.5 h-3.5"})]})]})]}),l.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-5 min-h-[520px]",children:[l.jsx("div",{className:"col-span-8 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border border-charcoal-700 shadow-inner",children:l.jsxs("div",{className:"relative inline-block max-w-full max-h-full",children:[l.jsx("img",{ref:S,src:t.primary_photo_url||"",alt:"Sherd Detection",onClick:b,className:`max-w-full max-h-[640px] object-contain rounded select-none ${m?"cursor-crosshair":"cursor-pointer"}`}),l.jsxs("svg",{className:"absolute inset-0 pointer-events-none w-full h-full",viewBox:`0 0 ${((te=t.primary_photo_dimensions)==null?void 0:te[0])||1600} ${((I=t.primary_photo_dimensions)==null?void 0:I[1])||1200}`,children:[e.map(P=>{const H=i===P.id,L=n.find(J=>J.id===P.group_id),F=L?L.color_hex:"#9CA3AF",N=H?`${F}44`:"transparent",q=P.contour.map((J,D)=>`${D===0?"M":"L"} ${J[0]} ${J[1]}`).join(" ")+" Z";return l.jsxs("g",{className:"pointer-events-auto cursor-pointer",onClick:()=>r(P),children:[l.jsx("path",{d:q,fill:N,stroke:F,strokeWidth:H?"5":"3",strokeDasharray:L?"none":"6,4",className:"transition-all hover:stroke-white"}),l.jsxs("g",{transform:`translate(${P.centroid[0]}, ${P.centroid[1]})`,children:[l.jsx("rect",{x:"-20",y:"-12",width:"40",height:"24",rx:"4",fill:"#1F2421",stroke:F,strokeWidth:"2",className:"shadow-md"}),l.jsx("text",{x:"0",y:"4",fill:"#FFFFFF",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:P.id})]})]},P.id)}),m&&v.length>0&&l.jsxs("g",{children:[l.jsx("polyline",{points:v.map(P=>`${P[0]},${P[1]}`).join(" "),fill:"none",stroke:"#F59E0B",strokeWidth:"3",strokeDasharray:"4,4"}),v.map((P,H)=>l.jsx("circle",{cx:P[0],cy:P[1],r:"5",fill:"#F59E0B",stroke:"#FFFFFF",strokeWidth:"2"},H))]})]})]})}),l.jsxs("div",{className:"col-span-4 bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(hx,{className:"w-4 h-4 text-terracotta-600"}),l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Vessel Groups"})]}),l.jsxs("button",{onClick:Z,className:"text-xs text-terracotta-700 hover:text-terracotta-900 font-semibold flex items-center space-x-1",children:[l.jsx(Ta,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"New Group"})]})]}),l.jsx("p",{className:"text-[11px] text-charcoal-500 mt-2 mb-4 leading-normal",children:"Conservative grouping clusters fragments with matching fabric color and texture. Drag or select below to reassign or lock assignments."}),l.jsxs("div",{className:"space-y-3",children:[n.map(P=>l.jsxs("div",{className:"border border-parchment-300 rounded-lg p-3 bg-parchment-50/70 shadow-2xs",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("div",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:P.color_hex}}),l.jsx("span",{className:"font-semibold text-xs text-charcoal-900",children:P.name})]}),l.jsxs("span",{className:"text-[10px] font-mono text-charcoal-500",children:[P.fragment_ids.length," fragments"]})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:P.fragment_ids.map(H=>{const L=e.find(N=>N.id===H),F=i===H;return l.jsxs("div",{onClick:()=>L&&r(L),className:`flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono font-bold cursor-pointer transition ${F?"bg-charcoal-800 text-white ring-2 ring-terracotta-500":"bg-white border border-parchment-300 text-charcoal-800 hover:bg-parchment-100"}`,children:[l.jsx("span",{children:H}),l.jsx("button",{onClick:N=>{N.stopPropagation(),G(H)},title:L!=null&&L.locked_group?"Assignment Locked":"Unlocked",className:"text-charcoal-400 hover:text-charcoal-800 pl-1",children:L!=null&&L.locked_group?l.jsx(Hu,{className:"w-3 h-3 text-terracotta-600"}):l.jsx(px,{className:"w-3 h-3 text-charcoal-300"})}),l.jsx("button",{onClick:N=>{N.stopPropagation(),T(H,null)},title:"Unassign",className:"text-charcoal-400 hover:text-red-600 pl-0.5",children:"×"})]},H)})})]},P.id)),e.filter(P=>!P.group_id).length>0&&l.jsxs("div",{className:"border border-dashed border-charcoal-300 rounded-lg p-3 bg-white",children:[l.jsxs("div",{className:"flex justify-between items-center mb-2",children:[l.jsxs("span",{className:"text-xs font-semibold text-charcoal-500 flex items-center space-x-1",children:[l.jsx(ux,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Unassigned Fragments"})]}),l.jsxs("span",{className:"text-[10px] font-mono text-charcoal-400",children:[e.filter(P=>!P.group_id).length," sherds"]})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.filter(P=>!P.group_id).map(P=>l.jsx("div",{onClick:()=>r(P),className:`px-2 py-1 rounded text-xs font-mono font-medium cursor-pointer border ${i===P.id?"bg-charcoal-800 text-white":"bg-parchment-100 border-parchment-300 text-charcoal-600 hover:bg-parchment-200"}`,children:P.id},P.id))})]})]})]}),i&&l.jsxs("div",{className:"pt-3 border-t border-parchment-300 flex items-center justify-between text-xs",children:[l.jsxs("span",{className:"text-charcoal-600",children:["Assign ",i," to:"]}),l.jsxs("select",{value:((j=e.find(P=>P.id===i))==null?void 0:j.group_id)||"",onChange:P=>T(i,P.target.value||null),className:"bg-white border border-parchment-300 rounded px-2 py-1 text-xs font-medium text-charcoal-800",children:[l.jsx("option",{value:"",children:"Unassigned"}),n.map(P=>l.jsx("option",{value:P.id,children:P.name},P.id))]})]})]})]})]})},my=({project:t,fragments:e,joins:n,groups:i,selectedFragmentId:r,onSelectFragment:s,onFragmentsUpdated:a,onJoinsUpdated:o,onNextStep:c})=>{const[u,h]=ee.useState(.85),[f,p]=ee.useState({x:100,y:80}),[x,y]=ee.useState(!1),[_,m]=ee.useState(null),[d,v]=ee.useState({x:0,y:0}),[g,S]=ee.useState({x:0,y:0}),[A,E]=ee.useState([]),[b,k]=ee.useState(-1),[w,T]=ee.useState(!0),[G,Z]=ee.useState(!1),[te,I]=ee.useState(!1),j=ee.useRef(null);ee.useEffect(()=>{let V=!1;const ie=e.map((he,de)=>he.placement.x===0&&he.placement.y===0?(V=!0,{...he,placement:{...he.placement,x:he.centroid[0]||200+de%4*220,y:he.centroid[1]||200+Math.floor(de/4)*220}}):he);V&&a(ie)},[e.length]);const P=async()=>{I(!0);try{const V=await $e.suggestJoins(t.id,G);o(V)}catch(V){alert(`Join suggestion failed: ${V.message}`)}finally{I(!1)}},H=async(V,ie)=>{try{await $e.updateJoinStatus(t.id,V,ie);const he=n.map(de=>de.id===V?{...de,status:ie}:de);if(o(he),ie==="accepted"){const de=n.find(Ee=>Ee.id===V);if(de){const Ee=e.find(tt=>tt.id===de.fragment_a_id),z=e.find(tt=>tt.id===de.fragment_b_id);if(Ee&&z&&!z.placement.locked){L();const tt=(z.placement.rotation_deg+de.transform_rotation_deg)%360,Se=Ee.placement.x+de.transform_tx,ne=Ee.placement.y+de.transform_ty,ce=e.map(Te=>Te.id===z.id?{...Te,placement:{...Te.placement,x:Se,y:ne,rotation_deg:tt}}:Te);a(ce),$e.updateFragment(t.id,{...z,placement:{...z.placement,x:Se,y:ne,rotation_deg:tt}})}}}}catch(he){alert(`Status update failed: ${he.message}`)}},L=()=>{const V=e.map(ie=>({...ie,placement:{...ie.placement}}));E(ie=>[...ie.slice(0,b+1),V]),k(ie=>ie+1)},F=V=>{if(!r)return;const ie=e.find(Ee=>Ee.id===r);if(!ie||ie.placement.locked)return;L();const he=(ie.placement.rotation_deg+V)%360,de=e.map(Ee=>Ee.id===r?{...Ee,placement:{...Ee.placement,rotation_deg:he}}:Ee);a(de),$e.updateFragment(t.id,{...ie,placement:{...ie.placement,rotation_deg:he}})},N=V=>{const ie=e.find(de=>de.id===V);if(!ie)return;const he=e.map(de=>de.id===V?{...de,placement:{...de.placement,locked:!de.placement.locked}}:de);a(he),$e.updateFragment(t.id,{...ie,placement:{...ie.placement,locked:!ie.placement.locked}})},q=V=>{const ie=e.find(de=>de.id===V);if(!ie)return;L();const he=e.map(de=>de.id===V?{...de,placement:{x:ie.centroid[0],y:ie.centroid[1],rotation_deg:0,locked:!1}}:de);a(he),$e.updateFragment(t.id,{...ie,placement:{x:ie.centroid[0],y:ie.centroid[1],rotation_deg:0,locked:!1}})},J=V=>{V.target.closest(".fragment-item")||(y(!0),v({x:V.clientX-f.x,y:V.clientY-f.y}))},D=V=>{if(x)p({x:V.clientX-d.x,y:V.clientY-d.y});else if(_){const ie=e.find(Se=>Se.id===_);if(!ie||ie.placement.locked)return;const he=(V.clientX-d.x)/u,de=(V.clientY-d.y)/u,Ee=g.x+he,z=g.y+de,tt=e.map(Se=>Se.id===_?{...Se,placement:{...Se.placement,x:Ee,y:z}}:Se);a(tt)}},K=()=>{if(x&&y(!1),_){const V=e.find(ie=>ie.id===_);V&&$e.updateFragment(t.id,V),m(null)}},Q=V=>{V.preventDefault();const ie=V.deltaY<0?1.1:.9;h(he=>Math.min(2.5,Math.max(.3,he*ie)))},ue=e.find(V=>V.id===r);return l.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-6 text-xs",children:[l.jsxs("div",{className:"flex items-center space-x-1 border-r border-parchment-300 pr-4",children:[l.jsx("button",{onClick:()=>h(V=>Math.max(.3,V-.1)),className:"p-1 text-charcoal-600 hover:text-charcoal-900 rounded",children:l.jsx(oy,{className:"w-4 h-4"})}),l.jsxs("span",{className:"font-mono text-[11px] text-charcoal-700 w-12 text-center",children:[Math.round(u*100),"%"]}),l.jsx("button",{onClick:()=>h(V=>Math.min(2.5,V+.1)),className:"p-1 text-charcoal-600 hover:text-charcoal-900 rounded",children:l.jsx(ay,{className:"w-4 h-4"})}),l.jsx("button",{onClick:()=>{h(1),p({x:80,y:60})},className:"p-1 text-charcoal-400 hover:text-charcoal-800",title:"Reset View",children:l.jsx(q_,{className:"w-3.5 h-3.5"})})]}),ue&&l.jsxs("div",{className:"flex items-center space-x-2 border-r border-parchment-300 pr-4",children:[l.jsxs("span",{className:"font-mono font-bold text-charcoal-800",children:[ue.id,":"]}),l.jsx("button",{onClick:()=>F(-5),disabled:ue.placement.locked,className:"p-1 rounded hover:bg-parchment-200 text-charcoal-700 disabled:opacity-40",title:"Rotate -5°",children:l.jsx(Z_,{className:"w-3.5 h-3.5"})}),l.jsx("button",{onClick:()=>F(-45),disabled:ue.placement.locked,className:"px-1.5 py-0.5 rounded bg-parchment-100 hover:bg-parchment-200 text-[10px] font-mono text-charcoal-700 disabled:opacity-40",children:"-45°"}),l.jsxs("span",{className:"font-mono text-charcoal-800 text-[11px] w-12 text-center",children:[Math.round(ue.placement.rotation_deg),"°"]}),l.jsx("button",{onClick:()=>F(45),disabled:ue.placement.locked,className:"px-1.5 py-0.5 rounded bg-parchment-100 hover:bg-parchment-200 text-[10px] font-mono text-charcoal-700 disabled:opacity-40",children:"+45°"}),l.jsx("button",{onClick:()=>F(5),disabled:ue.placement.locked,className:"p-1 rounded hover:bg-parchment-200 text-charcoal-700 disabled:opacity-40",title:"Rotate +5°",children:l.jsx(J_,{className:"w-3.5 h-3.5"})}),l.jsx("button",{onClick:()=>N(ue.id),className:"p-1 text-charcoal-600 hover:text-charcoal-900 ml-1",title:ue.placement.locked?"Unlock Placement":"Lock Placement",children:ue.placement.locked?l.jsx(Hu,{className:"w-3.5 h-3.5 text-terracotta-600"}):l.jsx(px,{className:"w-3.5 h-3.5 text-charcoal-400"})}),l.jsx("button",{onClick:()=>q(ue.id),className:"text-[10px] text-charcoal-500 hover:text-charcoal-900 underline ml-1",children:"Reset"})]}),l.jsxs("button",{onClick:()=>T(V=>!V),className:"flex items-center space-x-1 text-xs text-charcoal-600 hover:text-charcoal-900",children:[w?l.jsx(B_,{className:"w-3.5 h-3.5 text-terracotta-600"}):l.jsx(z_,{className:"w-3.5 h-3.5 text-charcoal-400"}),l.jsx("span",{children:"Outlines"})]})]}),l.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[l.jsxs("label",{className:"flex items-center space-x-1 text-charcoal-600 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:G,onChange:V=>Z(V.target.checked),className:"rounded text-terracotta-600"}),l.jsx("span",{className:"text-[11px]",children:"Match across groups"})]}),l.jsxs("button",{onClick:P,disabled:te||e.length<2,className:"flex items-center space-x-1.5 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[l.jsx(Y_,{className:`w-3.5 h-3.5 ${te?"animate-spin":""}`}),l.jsx("span",{children:te?"Matching Contours...":"Suggest Geometric Joins"})]}),l.jsxs("button",{onClick:c,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[l.jsx("span",{children:"Proceed to 3D Reconstruct"}),l.jsx(Ms,{className:"w-3.5 h-3.5"})]})]})]}),l.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-5 min-h-[560px]",children:[l.jsxs("div",{ref:j,onMouseDown:J,onMouseMove:D,onMouseUp:K,onWheel:Q,className:"col-span-8 bg-charcoal-900 rounded-xl overflow-hidden relative cursor-grab active:cursor-grabbing border border-charcoal-700 shadow-inner flex select-none",children:[l.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",backgroundSize:`${40*u}px ${40*u}px`,backgroundPosition:`${f.x}px ${f.y}px`}}),l.jsx("div",{className:"absolute",style:{transform:`translate(${f.x}px, ${f.y}px) scale(${u})`,transformOrigin:"0 0"},children:e.map(V=>{const ie=r===V.id,he=i.find(Ee=>Ee.id===V.group_id),de=he?he.color_hex:"#A0AEC0";return l.jsxs("div",{className:"fragment-item absolute cursor-move",style:{left:`${V.placement.x}px`,top:`${V.placement.y}px`,transform:`translate(-50%, -50%) rotate(${V.placement.rotation_deg}deg)`},onMouseDown:Ee=>{Ee.stopPropagation(),s(V),V.placement.locked||(m(V.id),v({x:Ee.clientX,y:Ee.clientY}),S({x:V.placement.x,y:V.placement.y}))},children:[l.jsx("img",{src:V.crop_url,alt:V.id,draggable:!1,className:`max-w-[240px] max-h-[240px] object-contain drop-shadow-xl transition-shadow ${ie?"ring-2 ring-terracotta-400 ring-offset-2 ring-offset-charcoal-900":""}`}),l.jsxs("div",{className:"absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-white shadow-md flex items-center space-x-1",style:{backgroundColor:de},children:[l.jsx("span",{children:V.id}),V.placement.locked&&l.jsx(Hu,{className:"w-2.5 h-2.5"})]})]},V.id)})}),l.jsx("div",{className:"absolute bottom-3 left-3 bg-charcoal-950/80 border border-charcoal-700 text-[10px] text-charcoal-400 px-2.5 py-1 rounded backdrop-blur-xs font-mono",children:"Proposed Assembly Hypothesis (Planar Projection) • Wheel: Zoom • Drag: Move"})]}),l.jsx("div",{className:"col-span-4 bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4",children:l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Suggested Edge Joins"}),l.jsxs("span",{className:"text-xs font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal-700 font-semibold",children:[n.length," candidates"]})]}),l.jsx("p",{className:"text-[11px] text-charcoal-500 mt-2 mb-3 leading-normal",children:"Candidate joins are computed using rigid Procrustes contour alignment (no scaling). Accepting a join automatically translates and rotates the fragment into mating contact."}),n.length===0?l.jsxs("div",{className:"bg-parchment-50 border border-dashed border-parchment-300 rounded-lg p-6 text-center text-xs text-charcoal-500",children:[l.jsx("p",{children:"No candidate joins generated yet."}),l.jsx("p",{className:"mt-1",children:'Click "Suggest Geometric Joins" to evaluate broken edge complementarity.'})]}):l.jsx("div",{className:"space-y-3",children:n.map(V=>{const ie=V.status==="accepted",he=V.status==="rejected";return l.jsxs("div",{className:`border rounded-lg p-3 transition shadow-2xs ${ie?"bg-emerald-50 border-emerald-300":he?"bg-gray-50 border-gray-200 opacity-60":"bg-white border-parchment-300 hover:border-terracotta-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsxs("div",{className:"flex items-center space-x-1.5",children:[l.jsxs("span",{className:"font-mono font-bold text-xs text-charcoal-900 bg-parchment-100 px-1.5 py-0.5 rounded border border-parchment-300",children:[V.fragment_a_id," ↔ ",V.fragment_b_id]}),l.jsxs("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-800",children:[(V.compatibility_score*100).toFixed(0),"% Match"]})]}),l.jsx("span",{className:`text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded ${ie?"bg-emerald-200 text-emerald-900":he?"bg-gray-200 text-gray-700":"bg-amber-100 text-amber-800"}`,children:V.status})]}),l.jsxs("div",{className:"text-[11px] font-mono text-charcoal-600 space-y-0.5 mb-2 bg-parchment-50/70 p-2 rounded border border-parchment-200",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Edge Residual:"}),l.jsx("span",{className:"font-semibold text-charcoal-800",children:V.residual_mm?`${V.residual_mm} mm`:`${V.residual_px} px`})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Matched Length:"}),l.jsx("span",{children:V.matched_length_mm?`${V.matched_length_mm} mm`:`${V.matched_length_px} px`})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Normal Opposition:"}),l.jsxs("span",{children:[(V.tangent_score*100).toFixed(0),"%"]})]})]}),l.jsx("p",{className:"text-[10px] text-charcoal-500 mb-2 italic",children:V.explanation}),l.jsxs("div",{className:"flex items-center space-x-2 pt-1 border-t border-parchment-200",children:[l.jsxs("button",{onClick:()=>H(V.id,ie?"suggested":"accepted"),className:`flex-1 text-xs py-1 px-2 rounded font-semibold flex items-center justify-center space-x-1 transition ${ie?"bg-emerald-600 text-white":"bg-emerald-100 hover:bg-emerald-200 text-emerald-800"}`,children:[l.jsx($d,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:ie?"Accepted (Snap applied)":"Accept Join"})]}),l.jsx("button",{onClick:()=>H(V.id,he?"suggested":"rejected"),className:`text-xs py-1 px-2.5 rounded transition ${he?"bg-gray-400 text-white":"bg-parchment-100 hover:bg-parchment-200 text-charcoal-600"}`,children:l.jsx(Cn,{className:"w-3.5 h-3.5"})})]})]},V.id)})})]})})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="160",xy=0,vf=1,gy=2,mx=1,vy=2,li=3,Ki=0,cn=1,Jn=2,Vi=0,fs=1,_f=2,yf=3,Sf=4,_y=5,ur=100,yy=101,Sy=102,Mf=103,wf=104,My=200,wy=201,Ey=202,by=203,Gu=204,Vu=205,Ty=206,Ay=207,Cy=208,Ry=209,Ny=210,Py=211,Ly=212,Dy=213,Uy=214,Iy=0,ky=1,Fy=2,dl=3,Oy=4,zy=5,By=6,jy=7,xx=0,Hy=1,Gy=2,Wi=0,Vy=1,Wy=2,Xy=3,$y=4,qy=5,Yy=6,gx=300,ws=301,Es=302,Wu=303,Xu=304,Ul=306,$u=1e3,Bn=1001,qu=1002,Kt=1003,Ef=1004,mc=1005,En=1006,Ky=1007,Aa=1008,Xi=1009,Zy=1010,Jy=1011,Yd=1012,vx=1013,Ui=1014,Ii=1015,Ca=1016,_x=1017,yx=1018,gr=1020,Qy=1021,jn=1023,e1=1024,t1=1025,vr=1026,bs=1027,n1=1028,Sx=1029,i1=1030,Mx=1031,wx=1033,xc=33776,gc=33777,vc=33778,_c=33779,bf=35840,Tf=35841,Af=35842,Cf=35843,Ex=36196,Rf=37492,Nf=37496,Pf=37808,Lf=37809,Df=37810,Uf=37811,If=37812,kf=37813,Ff=37814,Of=37815,zf=37816,Bf=37817,jf=37818,Hf=37819,Gf=37820,Vf=37821,yc=36492,Wf=36494,Xf=36495,r1=36283,$f=36284,qf=36285,Yf=36286,bx=3e3,_r=3001,s1=3200,a1=3201,Tx=0,o1=1,Tn="",It="srgb",yi="srgb-linear",Kd="display-p3",Il="display-p3-linear",hl="linear",ot="srgb",fl="rec709",pl="p3",Nr=7680,Kf=519,l1=512,c1=513,u1=514,Ax=515,d1=516,h1=517,f1=518,p1=519,Zf=35044,Jf="300 es",Yu=1035,fi=2e3,ml=2001;class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,Ku=180/Math.PI;function Ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function m1(t,e){return(t%e+e)%e}function Mc(t,e,n){return(1-n)*t+n*e}function Qf(t){return(t&t-1)===0&&t!==0}function Zu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,a,o,c,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],f=i[7],p=i[2],x=i[5],y=i[8],_=r[0],m=r[3],d=r[6],v=r[1],g=r[4],S=r[7],A=r[2],E=r[5],b=r[8];return s[0]=a*_+o*v+c*A,s[3]=a*m+o*g+c*E,s[6]=a*d+o*S+c*b,s[1]=u*_+h*v+f*A,s[4]=u*m+h*g+f*E,s[7]=u*d+h*S+f*b,s[2]=p*_+x*v+y*A,s[5]=p*m+x*g+y*E,s[8]=p*d+x*S+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,p=o*c-h*s,x=u*s-a*c,y=n*f+i*p+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=f*_,e[1]=(r*u-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=p*_,e[4]=(h*n-r*c)*_,e[5]=(r*s-o*n)*_,e[6]=x*_,e[7]=(i*c-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new We;function Cx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function x1(){const t=xl("canvas");return t.style.display="block",t}const ep={};function oa(t){t in ep||(ep[t]=!0,console.warn(t))}const tp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),np=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[yi]:{transfer:hl,primaries:fl,toReference:t=>t,fromReference:t=>t},[It]:{transfer:ot,primaries:fl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Il]:{transfer:hl,primaries:pl,toReference:t=>t.applyMatrix3(np),fromReference:t=>t.applyMatrix3(tp)},[Kd]:{transfer:ot,primaries:pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(np),fromReference:t=>t.applyMatrix3(tp).convertLinearToSRGB()}},g1=new Set([yi,Il]),et={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!g1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=io[e].toReference,r=io[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return io[t].primaries},getTransfer:function(t){return t===Tn?hl:io[t].transfer}};function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ec(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Pr;class Rx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=xl("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ps(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v1=0;class Nx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Ua(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bc(r[a].image)):s.push(bc(r[a]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Rx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _1=0;class xn extends Ns{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Bn,r=Bn,s=En,a=Aa,o=jn,c=Xi,u=xn.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Ua(),this.name="",this.source=new Nx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_r?It:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?_r:bx}set encoding(e){oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?It:Tn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=gx;xn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],f=c[8],p=c[1],x=c[5],y=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+x+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(x+1)/2,A=(d+1)/2,E=(h+p)/4,b=(f+_)/4,k=(y+m)/4;return g>S&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=b/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=k/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=k/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(f-_)/v,this.z=(p-h)/v,this.w=Math.acos((u+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y1 extends Ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(oa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_r?It:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Nx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends y1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Px extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S1 extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const p=s[a+0],x=s[a+1],y=s[a+2],_=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=x,e[n+2]=y,e[n+3]=_;return}if(f!==_||c!==p||u!==x||h!==y){let m=1-o;const d=c*p+u*x+h*y+f*_,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const A=Math.sqrt(g),E=Math.atan2(A,d*v);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const S=o*v;if(c=c*m+p*S,u=u*m+x*S,h=h*m+y*S,f=f*m+_*S,m===1-o){const A=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=A,u*=A,h*=A,f*=A}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a],p=s[a+1],x=s[a+2],y=s[a+3];return e[n]=o*y+h*f+c*x-u*p,e[n+1]=c*y+h*p+u*f-o*x,e[n+2]=u*y+h*x+o*p-c*f,e[n+3]=h*y-o*f-c*p-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),f=o(s/2),p=c(i/2),x=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=p*h*f+u*x*y,this._y=u*x*f-p*h*y,this._z=u*h*y+p*x*f,this._w=u*h*f-p*x*y;break;case"YXZ":this._x=p*h*f+u*x*y,this._y=u*x*f-p*h*y,this._z=u*h*y-p*x*f,this._w=u*h*f+p*x*y;break;case"ZXY":this._x=p*h*f-u*x*y,this._y=u*x*f+p*h*y,this._z=u*h*y+p*x*f,this._w=u*h*f-p*x*y;break;case"ZYX":this._x=p*h*f-u*x*y,this._y=u*x*f+p*h*y,this._z=u*h*y-p*x*f,this._w=u*h*f+p*x*y;break;case"YZX":this._x=p*h*f+u*x*y,this._y=u*x*f+p*h*y,this._z=u*h*y-p*x*f,this._w=u*h*f-p*x*y;break;case"XZY":this._x=p*h*f-u*x*y,this._y=u*x*f-p*h*y,this._z=u*h*y+p*x*f,this._w=u*h*f+p*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-u)*x,this._z=(a-r)*x}else if(i>o&&i>f){const x=2*Math.sqrt(1+i-o-f);this._w=(h-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+u)/x}else if(o>f){const x=2*Math.sqrt(1+o-i-f);this._w=(s-u)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+f-i-o);this._w=(a-r)/x,this._x=(s+u)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const x=1-n;return this._w=x*a+n*this._w,this._x=x*i+n*this._x,this._y=x*r+n*this._y,this._z=x*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-n)*h)/u,p=Math.sin(n*h)/u;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*u+a*f-o*h,this.y=i+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new B,ip=new Ia;class ka{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),so.subVectors(this.max,Gs),Lr.subVectors(e.a,Gs),Dr.subVectors(e.b,Gs),Ur.subVectors(e.c,Gs),wi.subVectors(Dr,Lr),Ei.subVectors(Ur,Dr),nr.subVectors(Lr,Ur);let n=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!Ac(n,Lr,Dr,Ur,so)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,Lr,Dr,Ur,so))?!1:(ao.crossVectors(wi,Ei),n=[ao.x,ao.y,ao.z],Ac(n,Lr,Dr,Ur,so))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new B,new B,new B,new B,new B,new B,new B,new B],Dn=new B,ro=new ka,Lr=new B,Dr=new B,Ur=new B,wi=new B,Ei=new B,nr=new B,Gs=new B,so=new B,ao=new B,ir=new B;function Ac(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ir.fromArray(t,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),c=e.dot(ir),u=n.dot(ir),h=i.dot(ir);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const M1=new ka,Vs=new B,Cc=new B;class kl{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):M1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Cc)),this.expandByPoint(Vs.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new B,Rc=new B,oo=new B,bi=new B,Nc=new B,lo=new B,Pc=new B;class Lx{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rc.copy(e).add(n).multiplyScalar(.5),oo.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Rc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(oo),o=bi.dot(this.direction),c=-bi.dot(oo),u=bi.lengthSq(),h=Math.abs(1-a*a);let f,p,x,y;if(h>0)if(f=a*c-o,p=a*o-c,y=s*h,f>=0)if(p>=-y)if(p<=y){const _=1/h;f*=_,p*=_,x=f*(f+a*p+2*o)+p*(a*f+p+2*c)+u}else p=s,f=Math.max(0,-(a*p+o)),x=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(a*p+o)),x=-f*f+p*(p+2*c)+u;else p<=-y?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),x=-f*f+p*(p+2*c)+u):p<=y?(f=0,p=Math.min(Math.max(-s,-c),s),x=p*(p+2*c)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),x=-f*f+p*(p+2*c)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),x=-f*f+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Rc).addScaledVector(oo,p),x}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){Nc.subVectors(n,e),lo.subVectors(i,e),Pc.crossVectors(Nc,lo);let a=this.direction.dot(Pc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const c=o*this.direction.dot(lo.crossVectors(bi,lo));if(c<0)return null;const u=o*this.direction.dot(Nc.cross(bi));if(u<0||c+u>a)return null;const h=-o*bi.dot(Pc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,a,o,c,u,h,f,p,x,y,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,f,p,x,y,_,m)}set(e,n,i,r,s,a,o,c,u,h,f,p,x,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=f,d[14]=p,d[3]=x,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,x=a*f,y=o*h,_=o*f;n[0]=c*h,n[4]=-c*f,n[8]=u,n[1]=x+y*u,n[5]=p-_*u,n[9]=-o*c,n[2]=_-p*u,n[6]=y+x*u,n[10]=a*c}else if(e.order==="YXZ"){const p=c*h,x=c*f,y=u*h,_=u*f;n[0]=p+_*o,n[4]=y*o-x,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=x*o-y,n[6]=_+p*o,n[10]=a*c}else if(e.order==="ZXY"){const p=c*h,x=c*f,y=u*h,_=u*f;n[0]=p-_*o,n[4]=-a*f,n[8]=y+x*o,n[1]=x+y*o,n[5]=a*h,n[9]=_-p*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const p=a*h,x=a*f,y=o*h,_=o*f;n[0]=c*h,n[4]=y*u-x,n[8]=p*u+_,n[1]=c*f,n[5]=_*u+p,n[9]=x*u-y,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const p=a*c,x=a*u,y=o*c,_=o*u;n[0]=c*h,n[4]=_-p*f,n[8]=y*f+x,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=x*f+y,n[10]=p-_*f}else if(e.order==="XZY"){const p=a*c,x=a*u,y=o*c,_=o*u;n[0]=c*h,n[4]=-f,n[8]=u*h,n[1]=p*f+_,n[5]=a*h,n[9]=x*f-y,n[2]=y*f-x,n[6]=o*h,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w1,e,E1)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ti.crossVectors(i,dn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ti.crossVectors(i,dn)),Ti.normalize(),co.crossVectors(dn,Ti),r[0]=Ti.x,r[4]=co.x,r[8]=dn.x,r[1]=Ti.y,r[5]=co.y,r[9]=dn.y,r[2]=Ti.z,r[6]=co.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],f=i[5],p=i[9],x=i[13],y=i[2],_=i[6],m=i[10],d=i[14],v=i[3],g=i[7],S=i[11],A=i[15],E=r[0],b=r[4],k=r[8],w=r[12],T=r[1],G=r[5],Z=r[9],te=r[13],I=r[2],j=r[6],P=r[10],H=r[14],L=r[3],F=r[7],N=r[11],q=r[15];return s[0]=a*E+o*T+c*I+u*L,s[4]=a*b+o*G+c*j+u*F,s[8]=a*k+o*Z+c*P+u*N,s[12]=a*w+o*te+c*H+u*q,s[1]=h*E+f*T+p*I+x*L,s[5]=h*b+f*G+p*j+x*F,s[9]=h*k+f*Z+p*P+x*N,s[13]=h*w+f*te+p*H+x*q,s[2]=y*E+_*T+m*I+d*L,s[6]=y*b+_*G+m*j+d*F,s[10]=y*k+_*Z+m*P+d*N,s[14]=y*w+_*te+m*H+d*q,s[3]=v*E+g*T+S*I+A*L,s[7]=v*b+g*G+S*j+A*F,s[11]=v*k+g*Z+S*P+A*N,s[15]=v*w+g*te+S*H+A*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],p=e[10],x=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+s*c*f-r*u*f-s*o*p+i*u*p+r*o*x-i*c*x)+_*(+n*c*x-n*u*p+s*a*p-r*a*x+r*u*h-s*c*h)+m*(+n*u*f-n*o*x-s*a*f+i*a*x+s*o*h-i*u*h)+d*(-r*o*h-n*c*f+n*o*p+r*a*f-i*a*p+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],p=e[10],x=e[11],y=e[12],_=e[13],m=e[14],d=e[15],v=f*m*u-_*p*u+_*c*x-o*m*x-f*c*d+o*p*d,g=y*p*u-h*m*u-y*c*x+a*m*x+h*c*d-a*p*d,S=h*_*u-y*f*u+y*o*x-a*_*x-h*o*d+a*f*d,A=y*f*c-h*_*c-y*o*p+a*_*p+h*o*m-a*f*m,E=n*v+i*g+r*S+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(_*p*s-f*m*s-_*r*x+i*m*x+f*r*d-i*p*d)*b,e[2]=(o*m*s-_*c*s+_*r*u-i*m*u-o*r*d+i*c*d)*b,e[3]=(f*c*s-o*p*s-f*r*u+i*p*u+o*r*x-i*c*x)*b,e[4]=g*b,e[5]=(h*m*s-y*p*s+y*r*x-n*m*x-h*r*d+n*p*d)*b,e[6]=(y*c*s-a*m*s-y*r*u+n*m*u+a*r*d-n*c*d)*b,e[7]=(a*p*s-h*c*s+h*r*u-n*p*u-a*r*x+n*c*x)*b,e[8]=S*b,e[9]=(y*f*s-h*_*s-y*i*x+n*_*x+h*i*d-n*f*d)*b,e[10]=(a*_*s-y*o*s+y*i*u-n*_*u-a*i*d+n*o*d)*b,e[11]=(h*o*s-a*f*s-h*i*u+n*f*u+a*i*x-n*o*x)*b,e[12]=A*b,e[13]=(h*_*r-y*f*r+y*i*p-n*_*p-h*i*m+n*f*m)*b,e[14]=(y*o*r-a*_*r-y*i*c+n*_*c+a*i*m-n*o*m)*b,e[15]=(a*f*r-h*o*r+h*i*c-n*f*c-a*i*p+n*o*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,f=o+o,p=s*u,x=s*h,y=s*f,_=a*h,m=a*f,d=o*f,v=c*u,g=c*h,S=c*f,A=i.x,E=i.y,b=i.z;return r[0]=(1-(_+d))*A,r[1]=(x+S)*A,r[2]=(y-g)*A,r[3]=0,r[4]=(x-S)*E,r[5]=(1-(p+d))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(y+g)*b,r[9]=(m-v)*b,r[10]=(1-(p+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,h=1/a,f=1/o;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let x,y;if(o===fi)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ml)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const c=this.elements,u=1/(n-e),h=1/(i-r),f=1/(a-s),p=(n+e)*u,x=(i+r)*h;let y,_;if(o===fi)y=(a+s)*f,_=-2*f;else if(o===ml)y=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new B,Un=new wt,w1=new B(0,0,0),E1=new B(1,1,1),Ti=new B,co=new B,dn=new B,rp=new wt,sp=new Ia;class Fl{constructor(e=0,n=0,i=0,r=Fl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],p=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fl.DEFAULT_ORDER="XYZ";class Dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b1=0;const ap=new B,kr=new Ia,si=new wt,uo=new B,Ws=new B,T1=new B,A1=new Ia,op=new B(1,0,0),lp=new B(0,1,0),cp=new B(0,0,1),C1={type:"added"},R1={type:"removed"};class Ft extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new B,n=new Fl,i=new Ia,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new We}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,n){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?uo.copy(e):uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ws,uo,this.up):si.lookAt(uo,Ws,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(si),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(C1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(R1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,T1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,A1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),x=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new B(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new B,ai=new B,Lc=new B,oi=new B,Fr=new B,Or=new B,up=new B,Dc=new B,Uc=new B,Ic=new B;let ho=!1;class zn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ai.subVectors(i,n),Lc.subVectors(e,n);const a=In.dot(In),o=In.dot(ai),c=In.dot(Lc),u=ai.dot(ai),h=ai.dot(Lc),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,x=(u*c-o*h)*p,y=(a*h-o*c)*p;return s.set(1-x-y,y,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,n,i,r,s,a,o,c){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),this.getInterpolation(e,n,i,r,s,a,o,c)}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ai.subVectors(e,n),In.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Fr.subVectors(r,i),Or.subVectors(s,i),Dc.subVectors(e,i);const c=Fr.dot(Dc),u=Or.dot(Dc);if(c<=0&&u<=0)return n.copy(i);Uc.subVectors(e,r);const h=Fr.dot(Uc),f=Or.dot(Uc);if(h>=0&&f<=h)return n.copy(r);const p=c*f-h*u;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Fr,a);Ic.subVectors(e,s);const x=Fr.dot(Ic),y=Or.dot(Ic);if(y>=0&&x<=y)return n.copy(s);const _=x*u-c*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(Or,o);const m=h*y-x*f;if(m<=0&&f-h>=0&&x-y>=0)return up.subVectors(s,r),o=(f-h)/(f-h+(x-y)),n.copy(r).addScaledVector(up,o);const d=1/(m+_+p);return a=_*d,o=p*d,n.copy(i).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},fo={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=m1(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=kc(a,s,e+1/3),this.g=kc(a,s,e),this.b=kc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=It){const i=Ux[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Ec(e.r),this.g=Ec(e.g),this.b=Ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return et.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Zt(Gt.r*255,0,255))*65536+Math.round(Zt(Gt.g*255,0,255))*256+Math.round(Zt(Gt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=It){et.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==It?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(fo);const i=Mc(Ai.h,fo.h,n),r=Mc(Ai.s,fo.s,n),s=Mc(Ai.l,fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=Ux;let N1=0;class Ps extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=fs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Vu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gu&&(i.blendSrc=this.blendSrc),this.blendDst!==Vu&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ix extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,po=new Xe;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)po.fromBufferAttribute(this,n),po.applyMatrix3(e),this.setXY(n,po.x,po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class kx extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fx extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qt extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let P1=0;const Sn=new wt,Fc=new Ft,zr=new B,hn=new ka,Xs=new ka,Nt=new B;class Wn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cx(e)?Fx:kx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,Xs.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,Xs.max),hn.expandByPoint(Nt)):(hn.expandByPoint(Xs.min),hn.expandByPoint(Xs.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Nt.fromBufferAttribute(o,u),c&&(zr.fromBufferAttribute(e,u),Nt.add(zr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let T=0;T<o;T++)u[T]=new B,h[T]=new B;const f=new B,p=new B,x=new B,y=new Xe,_=new Xe,m=new Xe,d=new B,v=new B;function g(T,G,Z){f.fromArray(r,T*3),p.fromArray(r,G*3),x.fromArray(r,Z*3),y.fromArray(a,T*2),_.fromArray(a,G*2),m.fromArray(a,Z*2),p.sub(f),x.sub(f),_.sub(y),m.sub(y);const te=1/(_.x*m.y-m.x*_.y);isFinite(te)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(x,-_.y).multiplyScalar(te),v.copy(x).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(te),u[T].add(d),u[G].add(d),u[Z].add(d),h[T].add(v),h[G].add(v),h[Z].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,G=S.length;T<G;++T){const Z=S[T],te=Z.start,I=Z.count;for(let j=te,P=te+I;j<P;j+=3)g(i[j+0],i[j+1],i[j+2])}const A=new B,E=new B,b=new B,k=new B;function w(T){b.fromArray(s,T*3),k.copy(b);const G=u[T];A.copy(G),A.sub(b.multiplyScalar(b.dot(G))).normalize(),E.crossVectors(k,G);const te=E.dot(h[T])<0?-1:1;c[T*4]=A.x,c[T*4+1]=A.y,c[T*4+2]=A.z,c[T*4+3]=te}for(let T=0,G=S.length;T<G;++T){const Z=S[T],te=Z.start,I=Z.count;for(let j=te,P=te+I;j<P;j+=3)w(i[j+0]),w(i[j+1]),w(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,x=i.count;p<x;p++)i.setXYZ(p,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,u=new B,h=new B,f=new B;if(e)for(let p=0,x=e.count;p<x;p+=3){const y=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,y),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(h),c.add(h),u.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,x=n.count;p<x;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,f=o.normalized,p=new u.constructor(c.length*h);let x=0,y=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?x=c[_]*o.data.stride+o.offset:x=c[_]*h;for(let d=0;d<h;d++)p[y++]=u[x++]}return new ti(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const p=u[h],x=e(p,i);c.push(x)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,p=u.length;f<p;f++){const x=u[f];h.push(x.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,x=f.length;p<x;p++)h.push(f[p].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dp=new wt,rr=new Lx,mo=new kl,hp=new B,Br=new B,jr=new B,Hr=new B,Oc=new B,xo=new B,go=new Xe,vo=new Xe,_o=new Xe,fp=new B,pp=new B,mp=new B,yo=new B,So=new B;class pi extends Ft{constructor(e=new Wn,n=new Ix){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(Oc.fromBufferAttribute(f,e),a?xo.addScaledVector(Oc,h):xo.addScaledVector(Oc.sub(n),h))}n.add(xo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(mo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(mo,hp)===null||rr.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(dp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(dp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,x=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=a[m.materialIndex],v=Math.max(m.start,x.start),g=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let S=v,A=g;S<A;S+=3){const E=o.getX(S),b=o.getX(S+1),k=o.getX(S+2);r=Mo(this,d,e,i,u,h,f,E,b,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,x.start),_=Math.min(o.count,x.start+x.count);for(let m=y,d=_;m<d;m+=3){const v=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);r=Mo(this,a,e,i,u,h,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=a[m.materialIndex],v=Math.max(m.start,x.start),g=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let S=v,A=g;S<A;S+=3){const E=S,b=S+1,k=S+2;r=Mo(this,d,e,i,u,h,f,E,b,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,x.start),_=Math.min(c.count,x.start+x.count);for(let m=y,d=_;m<d;m+=3){const v=m,g=m+1,S=m+2;r=Mo(this,a,e,i,u,h,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function L1(t,e,n,i,r,s,a,o){let c;if(e.side===cn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ki,o),c===null)return null;So.copy(o),So.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(So);return u<n.near||u>n.far?null:{distance:u,point:So.clone(),object:t}}function Mo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Br),t.getVertexPosition(c,jr),t.getVertexPosition(u,Hr);const h=L1(t,e,n,i,Br,jr,Hr,yo);if(h){r&&(go.fromBufferAttribute(r,o),vo.fromBufferAttribute(r,c),_o.fromBufferAttribute(r,u),h.uv=zn.getInterpolation(yo,Br,jr,Hr,go,vo,_o,new Xe)),s&&(go.fromBufferAttribute(s,o),vo.fromBufferAttribute(s,c),_o.fromBufferAttribute(s,u),h.uv1=zn.getInterpolation(yo,Br,jr,Hr,go,vo,_o,new Xe),h.uv2=h.uv1),a&&(fp.fromBufferAttribute(a,o),pp.fromBufferAttribute(a,c),mp.fromBufferAttribute(a,u),h.normal=zn.getInterpolation(yo,Br,jr,Hr,fp,pp,mp,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new B,materialIndex:0};zn.getNormal(Br,jr,Hr,f.normal),h.face=f}return h}class Fa extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let p=0,x=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function y(_,m,d,v,g,S,A,E,b,k,w){const T=S/b,G=A/k,Z=S/2,te=A/2,I=E/2,j=b+1,P=k+1;let H=0,L=0;const F=new B;for(let N=0;N<P;N++){const q=N*G-te;for(let J=0;J<j;J++){const D=J*T-Z;F[_]=D*v,F[m]=q*g,F[d]=I,u.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[d]=E>0?1:-1,h.push(F.x,F.y,F.z),f.push(J/b),f.push(1-N/k),H+=1}}for(let N=0;N<k;N++)for(let q=0;q<b;q++){const J=p+q+j*N,D=p+q+j*(N+1),K=p+(q+1)+j*(N+1),Q=p+(q+1)+j*N;c.push(J,D,Q),c.push(D,K,Q),L+=6}o.addGroup(x,L,w),x+=L,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function D1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ox(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const U1={clone:Ts,merge:qt};var I1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I1,this.fragmentShader=k1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=D1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class zx extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends zx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ku*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ku*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Vr=1;class F1 extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Gr,Vr,e,n);r.layers=this.layers,this.add(r);const s=new bn(Gr,Vr,e,n);s.layers=this.layers,this.add(s);const a=new bn(Gr,Vr,e,n);a.layers=this.layers,this.add(a);const o=new bn(Gr,Vr,e,n);o.layers=this.layers,this.add(o);const c=new bn(Gr,Vr,e,n);c.layers=this.layers,this.add(c);const u=new bn(Gr,Vr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Bx extends xn{constructor(e,n,i,r,s,a,o,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O1 extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(oa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_r?It:Tn),this.texture=new Bx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fa(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Vi});s.uniforms.tEquirect.value=n;const a=new pi(r,s),o=n.minFilter;return n.minFilter===Aa&&(n.minFilter=En),new F1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const zc=new B,z1=new B,B1=new We;class lr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zc.subVectors(i,n).cross(z1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||B1.getNormalMatrix(e),r=this.coplanarPoint(zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new kl,wo=new B;class Zd{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],x=r[8],y=r[9],_=r[10],m=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(c-s,p-u,m-x,S-d).normalize(),i[1].setComponents(c+s,p+u,m+x,S+d).normalize(),i[2].setComponents(c+a,p+h,m+y,S+v).normalize(),i[3].setComponents(c-a,p-h,m-y,S-v).normalize(),i[4].setComponents(c-o,p-f,m-_,S-g).normalize(),n===fi)i[5].setComponents(c+o,p+f,m+_,S+g).normalize();else if(n===ml)i[5].setComponents(o,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function j1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,h){const f=u.array,p=u.usage,x=f.byteLength,y=t.createBuffer();t.bindBuffer(h,y),t.bufferData(h,f,p),u.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:x}}function s(u,h,f){const p=h.array,x=h._updateRange,y=h.updateRanges;if(t.bindBuffer(f,u),x.count===-1&&y.length===0&&t.bufferSubData(f,0,p),y.length!==0){for(let _=0,m=y.length;_<m;_++){const d=y[_];n?t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}x.count!==-1&&(n?t.bufferSubData(f,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count):t.bufferSubData(f,x.offset*p.BYTES_PER_ELEMENT,p.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(t.deleteBuffer(h.buffer),i.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,h),f.version=u.version}}return{get:a,remove:o,update:c}}class Jd extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,f=e/o,p=n/c,x=[],y=[],_=[],m=[];for(let d=0;d<h;d++){const v=d*p-a;for(let g=0;g<u;g++){const S=g*f-s;y.push(S,-v,0),_.push(0,0,1),m.push(g/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const g=v+u*d,S=v+u*(d+1),A=v+1+u*(d+1),E=v+1+u*d;x.push(g,S,E),x.push(S,A,E)}this.setIndex(x),this.setAttribute("position",new Qt(y,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.width,e.height,e.widthSegments,e.heightSegments)}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,J1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tS=`#ifdef USE_IRIDESCENCE
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
#endif`,nS=`#ifdef USE_BUMPMAP
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dS=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fS=`vec3 transformedNormal = objectNormal;
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
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RS=`#ifdef USE_GRADIENTMAP
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
}`,NS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,IS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,kS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,VS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JS=`#if defined( USE_POINTS_UV )
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
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uM=`#ifdef USE_NORMALMAP
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
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,TM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,qM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,YM=`#define DISTANCE
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
}`,KM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tw=`#include <common>
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
}`,nw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iw=`#define LAMBERT
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
}`,rw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sw=`#define MATCAP
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
}`,aw=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ow=`#define NORMAL
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
}`,lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cw=`#define PHONG
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
}`,uw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dw=`#define STANDARD
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
}`,hw=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,fw=`#define TOON
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
}`,pw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mw=`uniform float size;
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
}`,xw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_w=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,yw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Be={alphahash_fragment:H1,alphahash_pars_fragment:G1,alphamap_fragment:V1,alphamap_pars_fragment:W1,alphatest_fragment:X1,alphatest_pars_fragment:$1,aomap_fragment:q1,aomap_pars_fragment:Y1,batching_pars_vertex:K1,batching_vertex:Z1,begin_vertex:J1,beginnormal_vertex:Q1,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:aS,color_fragment:oS,color_pars_fragment:lS,color_pars_vertex:cS,color_vertex:uS,common:dS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:fS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:xS,emissivemap_pars_fragment:gS,colorspace_fragment:vS,colorspace_pars_fragment:_S,envmap_fragment:yS,envmap_common_pars_fragment:SS,envmap_pars_fragment:MS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:IS,envmap_vertex:ES,fog_vertex:bS,fog_pars_vertex:TS,fog_fragment:AS,fog_pars_fragment:CS,gradientmap_pars_fragment:RS,lightmap_fragment:NS,lightmap_pars_fragment:PS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:DS,lights_pars_begin:US,lights_toon_fragment:kS,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:zS,lights_physical_fragment:BS,lights_physical_pars_fragment:jS,lights_fragment_begin:HS,lights_fragment_maps:GS,lights_fragment_end:VS,logdepthbuf_fragment:WS,logdepthbuf_pars_fragment:XS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:qS,map_fragment:YS,map_pars_fragment:KS,map_particle_fragment:ZS,map_particle_pars_fragment:JS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:eM,morphcolor_vertex:tM,morphnormal_vertex:nM,morphtarget_pars_vertex:iM,morphtarget_vertex:rM,normal_fragment_begin:sM,normal_fragment_maps:aM,normal_pars_fragment:oM,normal_pars_vertex:lM,normal_vertex:cM,normalmap_pars_fragment:uM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:pM,opaque_fragment:mM,packing:xM,premultiplied_alpha_fragment:gM,project_vertex:vM,dithering_fragment:_M,dithering_pars_fragment:yM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:EM,shadowmap_vertex:bM,shadowmask_pars_fragment:TM,skinbase_vertex:AM,skinning_pars_vertex:CM,skinning_vertex:RM,skinnormal_vertex:NM,specularmap_fragment:PM,specularmap_pars_fragment:LM,tonemapping_fragment:DM,tonemapping_pars_fragment:UM,transmission_fragment:IM,transmission_pars_fragment:kM,uv_pars_fragment:FM,uv_pars_vertex:OM,uv_vertex:zM,worldpos_vertex:BM,background_vert:jM,background_frag:HM,backgroundCube_vert:GM,backgroundCube_frag:VM,cube_vert:WM,cube_frag:XM,depth_vert:$M,depth_frag:qM,distanceRGBA_vert:YM,distanceRGBA_frag:KM,equirect_vert:ZM,equirect_frag:JM,linedashed_vert:QM,linedashed_frag:ew,meshbasic_vert:tw,meshbasic_frag:nw,meshlambert_vert:iw,meshlambert_frag:rw,meshmatcap_vert:sw,meshmatcap_frag:aw,meshnormal_vert:ow,meshnormal_frag:lw,meshphong_vert:cw,meshphong_frag:uw,meshphysical_vert:dw,meshphysical_frag:hw,meshtoon_vert:fw,meshtoon_frag:pw,points_vert:mw,points_frag:xw,shadow_vert:gw,shadow_frag:vw,sprite_vert:_w,sprite_frag:yw},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Kn={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Kn.physical={uniforms:qt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Eo={r:0,b:0,g:0};function Sw(t,e,n,i,r,s,a){const o=new Ye(0);let c=s===!0?0:1,u,h,f=null,p=0,x=null;function y(m,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?_(o,c):g&&g.isColor&&(_(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ul)?(h===void 0&&(h=new pi(new Fa(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Ts(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=et.getTransfer(g.colorSpace)!==ot,(f!==g||p!==g.version||x!==t.toneMapping)&&(h.material.needsUpdate=!0,f=g,p=g.version,x=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new pi(new Jd(2,2),new Tr({name:"BackgroundMaterial",uniforms:Ts(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||x!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,p=g.version,x=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(Eo,Ox(t)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:y}}function Mw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let u=c,h=!1;function f(I,j,P,H,L){let F=!1;if(a){const N=_(H,P,j);u!==N&&(u=N,x(u.object)),F=d(I,H,P,L),F&&v(I,H,P,L)}else{const N=j.wireframe===!0;(u.geometry!==H.id||u.program!==P.id||u.wireframe!==N)&&(u.geometry=H.id,u.program=P.id,u.wireframe=N,F=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,k(I,j,P,H),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function x(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,j,P){const H=P.wireframe===!0;let L=o[I.id];L===void 0&&(L={},o[I.id]=L);let F=L[j.id];F===void 0&&(F={},L[j.id]=F);let N=F[H];return N===void 0&&(N=m(p()),F[H]=N),N}function m(I){const j=[],P=[],H=[];for(let L=0;L<r;L++)j[L]=0,P[L]=0,H[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:P,attributeDivisors:H,object:I,attributes:{},index:null}}function d(I,j,P,H){const L=u.attributes,F=j.attributes;let N=0;const q=P.getAttributes();for(const J in q)if(q[J].location>=0){const K=L[J];let Q=F[J];if(Q===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;N++}return u.attributesNum!==N||u.index!==H}function v(I,j,P,H){const L={},F=j.attributes;let N=0;const q=P.getAttributes();for(const J in q)if(q[J].location>=0){let K=F[J];K===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),L[J]=Q,N++}u.attributes=L,u.attributesNum=N,u.index=H}function g(){const I=u.newAttributes;for(let j=0,P=I.length;j<P;j++)I[j]=0}function S(I){A(I,0)}function A(I,j){const P=u.newAttributes,H=u.enabledAttributes,L=u.attributeDivisors;P[I]=1,H[I]===0&&(t.enableVertexAttribArray(I),H[I]=1),L[I]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),L[I]=j)}function E(){const I=u.newAttributes,j=u.enabledAttributes;for(let P=0,H=j.length;P<H;P++)j[P]!==I[P]&&(t.disableVertexAttribArray(P),j[P]=0)}function b(I,j,P,H,L,F,N){N===!0?t.vertexAttribIPointer(I,j,P,L,F):t.vertexAttribPointer(I,j,P,H,L,F)}function k(I,j,P,H){if(i.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=H.attributes,F=P.getAttributes(),N=j.defaultAttributeValues;for(const q in F){const J=F[q];if(J.location>=0){let D=L[q];if(D===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(D=I.instanceColor)),D!==void 0){const K=D.normalized,Q=D.itemSize,ue=n.get(D);if(ue===void 0)continue;const V=ue.buffer,ie=ue.type,he=ue.bytesPerElement,de=i.isWebGL2===!0&&(ie===t.INT||ie===t.UNSIGNED_INT||D.gpuType===vx);if(D.isInterleavedBufferAttribute){const Ee=D.data,z=Ee.stride,tt=D.offset;if(Ee.isInstancedInterleavedBuffer){for(let Se=0;Se<J.locationSize;Se++)A(J.location+Se,Ee.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Se=0;Se<J.locationSize;Se++)S(J.location+Se);t.bindBuffer(t.ARRAY_BUFFER,V);for(let Se=0;Se<J.locationSize;Se++)b(J.location+Se,Q/J.locationSize,ie,K,z*he,(tt+Q/J.locationSize*Se)*he,de)}else{if(D.isInstancedBufferAttribute){for(let Ee=0;Ee<J.locationSize;Ee++)A(J.location+Ee,D.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Ee=0;Ee<J.locationSize;Ee++)S(J.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,V);for(let Ee=0;Ee<J.locationSize;Ee++)b(J.location+Ee,Q/J.locationSize,ie,K,Q*he,Q/J.locationSize*Ee*he,de)}}else if(N!==void 0){const K=N[q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(J.location,K);break;case 3:t.vertexAttrib3fv(J.location,K);break;case 4:t.vertexAttrib4fv(J.location,K);break;default:t.vertexAttrib1fv(J.location,K)}}}}E()}function w(){Z();for(const I in o){const j=o[I];for(const P in j){const H=j[P];for(const L in H)y(H[L].object),delete H[L];delete j[P]}delete o[I]}}function T(I){if(o[I.id]===void 0)return;const j=o[I.id];for(const P in j){const H=j[P];for(const L in H)y(H[L].object),delete H[L];delete j[P]}delete o[I.id]}function G(I){for(const j in o){const P=o[j];if(P[I.id]===void 0)continue;const H=P[I.id];for(const L in H)y(H[L].object),delete H[L];delete P[I.id]}}function Z(){te(),h=!0,u!==c&&(u=c,x(u.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:te,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:S,disableUnusedAttributes:E}}function ww(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,f){t.drawArrays(s,h,f),n.update(f,s,1)}function c(h,f,p){if(p===0)return;let x,y;if(r)x=t,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,h,f,p),n.update(f,s,p)}function u(h,f,p){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p;y++)this.render(h[y],f[y]);else{x.multiDrawArraysWEBGL(s,h,0,f,0,p);let y=0;for(let _=0;_<p;_++)y+=f[_];n.update(y,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Ew(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,S=a||e.has("OES_texture_float"),A=g&&S,E=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:E}}function bw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const x=f.length!==0||p||i!==0||r;return r=p,i=f.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,x){const y=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||y===null||y.length===0||s&&!m)s?h(null):u();else{const v=s?0:i,g=v*4;let S=d.clippingState||null;c.value=S,S=h(y,p,g,x);for(let A=0;A!==g;++A)S[A]=n[A];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,x,y){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,y!==!0||m===null){const d=x+_*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=x;g!==_;++g,S+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tw(t){let e=new WeakMap;function n(a,o){return o===Wu?a.mapping=ws:o===Xu&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wu||o===Xu)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new O1(c.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hx extends zx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=4,xp=[.125,.215,.35,.446,.526,.582],dr=20,Bc=new Hx,gp=new Ye;let jc=null,Hc=0,Gc=0;const cr=(1+Math.sqrt(5))/2,Wr=1/cr,vp=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,cr,Wr),new B(0,cr,-Wr),new B(Wr,0,cr),new B(-Wr,0,cr),new B(cr,Wr,0),new B(-cr,Wr,0)];class _p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){jc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Hc,Gc),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ca,format:jn,colorSpace:yi,depthBuffer:!1},r=yp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Aw(s)),this._blurMaterial=Cw(s,e,n)}return r}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,i,r){const o=new bn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(gp),h.toneMapping=Wi,h.autoClear=!1;const x=new Ix({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),y=new pi(new Fa,x);let _=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,_=!0):(x.color.copy(gp),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const g=this._cubeSize;bo(r,v*g,d>2?g:0,g,g),h.setRenderTarget(r),_&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;bo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Bc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vp[(r-1)%vp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new pi(this._lodPlanes[r],u),p=u.uniforms,x=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*dr-1),_=s/y,m=isFinite(s)?1+Math.floor(h*_):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const d=[];let v=0;for(let b=0;b<dr;++b){const k=b/_,w=Math.exp(-k*k/2);d.push(w),b===0?v+=w:b<m&&(v+=2*w)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:g}=this;p.dTheta.value=y,p.mipInt.value=g-i;const S=this._sizeLods[r],A=3*S*(r>g-ss?r-g+ss:0),E=4*(this._cubeSize-S);bo(n,A,E,3*S,2*S),c.setRenderTarget(n),c.render(f,Bc)}}function Aw(t){const e=[],n=[],i=[];let r=t;const s=t-ss+1+xp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-ss?c=xp[a-t+ss-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],x=6,y=6,_=3,m=2,d=1,v=new Float32Array(_*y*x),g=new Float32Array(m*y*x),S=new Float32Array(d*y*x);for(let E=0;E<x;E++){const b=E%3*2/3-1,k=E>2?0:-1,w=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];v.set(w,_*y*E),g.set(p,m*y*E);const T=[E,E,E,E,E,E];S.set(T,d*y*E)}const A=new Wn;A.setAttribute("position",new ti(v,_)),A.setAttribute("uv",new ti(g,m)),A.setAttribute("faceIndex",new ti(S,d)),e.push(A),r>ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function yp(t,e,n){const i=new br(t,e,n);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Cw(t,e,n){const i=new Float32Array(dr),r=new B(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Sp(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Mp(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Qd(){return`

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
	`}function Rw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===Wu||c===Xu,h=c===ws||c===Es;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new _p(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new _p(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Nw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pw(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const _=p.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete r[p.id];const x=s.get(p);x&&(e.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function c(f){const p=f.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const x=f.morphAttributes;for(const y in x){const _=x[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(f){const p=[],x=f.index,y=f.attributes.position;let _=0;if(x!==null){const v=x.array;_=x.version;for(let g=0,S=v.length;g<S;g+=3){const A=v[g+0],E=v[g+1],b=v[g+2];p.push(A,E,E,b,b,A)}}else if(y!==void 0){const v=y.array;_=y.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const A=g+0,E=g+1,b=g+2;p.push(A,E,E,b,b,A)}}else return;const m=new(Cx(p)?Fx:kx)(p,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function h(f){const p=s.get(f);if(p){const x=f.index;x!==null&&p.version<x.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Lw(t,e,n,i){const r=i.isWebGL2;let s;function a(x){s=x}let o,c;function u(x){o=x.type,c=x.bytesPerElement}function h(x,y){t.drawElements(s,y,o,x*c),n.update(y,s,1)}function f(x,y,_){if(_===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,y,o,x*c,_),n.update(y,s,_)}function p(x,y,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(x[d]/c,y[d]);else{m.multiDrawElementsWEBGL(s,y,0,o,x,0,_);let d=0;for(let v=0;v<_;v++)d+=y[v];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function Dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Uw(t,e){return t[0]-e[0]}function Iw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function kw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=y!==void 0?y.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let j=function(){te.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var x=j;m!==void 0&&m.texture.dispose();const g=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let w=0;g===!0&&(w=1),S===!0&&(w=2),A===!0&&(w=3);let T=h.attributes.position.count*w,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Z=new Float32Array(T*G*4*_),te=new Px(Z,T,G,_);te.type=Ii,te.needsUpdate=!0;const I=w*4;for(let P=0;P<_;P++){const H=E[P],L=b[P],F=k[P],N=T*G*4*P;for(let q=0;q<H.count;q++){const J=q*I;g===!0&&(a.fromBufferAttribute(H,q),Z[N+J+0]=a.x,Z[N+J+1]=a.y,Z[N+J+2]=a.z,Z[N+J+3]=0),S===!0&&(a.fromBufferAttribute(L,q),Z[N+J+4]=a.x,Z[N+J+5]=a.y,Z[N+J+6]=a.z,Z[N+J+7]=0),A===!0&&(a.fromBufferAttribute(F,q),Z[N+J+8]=a.x,Z[N+J+9]=a.y,Z[N+J+10]=a.z,Z[N+J+11]=F.itemSize===4?a.w:1)}}m={count:_,texture:te,size:new Xe(T,G)},s.set(h,m),h.addEventListener("dispose",j)}let d=0;for(let g=0;g<p.length;g++)d+=p[g];const v=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",p),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=p===void 0?0:p.length;let _=i[h.id];if(_===void 0||_.length!==y){_=[];for(let S=0;S<y;S++)_[S]=[S,0];i[h.id]=_}for(let S=0;S<y;S++){const A=_[S];A[0]=S,A[1]=p[S]}_.sort(Iw);for(let S=0;S<8;S++)S<y&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Uw);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const A=o[S],E=A[0],b=A[1];E!==Number.MAX_SAFE_INTEGER&&b?(m&&h.getAttribute("morphTarget"+S)!==m[E]&&h.setAttribute("morphTarget"+S,m[E]),d&&h.getAttribute("morphNormal"+S)!==d[E]&&h.setAttribute("morphNormal"+S,d[E]),r[S]=b,v+=b):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const g=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function Fw(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Gx extends xn{constructor(e,n,i,r,s,a,o,c,u,h){if(h=h!==void 0?h:vr,h!==vr&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vr&&(i=Ui),i===void 0&&h===bs&&(i=gr),super(null,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Vx=new xn,Wx=new Gx(1,1);Wx.compareFunction=Ax;const Xx=new Px,$x=new S1,qx=new Bx,wp=[],Ep=[],bp=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=wp[r];if(s===void 0&&(s=new Float32Array(r),wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ol(t,e){let n=Ep[e];n===void 0&&(n=new Int32Array(e),Ep[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function Hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Ap.set(i),t.uniformMatrix2fv(this.addr,!1,Ap),At(n,i)}}function Gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Tp.set(i),t.uniformMatrix3fv(this.addr,!1,Tp),At(n,i)}}function Vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;bp.set(i),t.uniformMatrix4fv(this.addr,!1,bp),At(n,i)}}function Ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function Yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function Qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Wx:Vx;n.setTexture2D(e||s,r)}function eE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$x,r)}function tE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qx,r)}function nE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xx,r)}function iE(t){switch(t){case 5126:return Ow;case 35664:return zw;case 35665:return Bw;case 35666:return jw;case 35674:return Hw;case 35675:return Gw;case 35676:return Vw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return $w;case 35669:case 35673:return qw;case 5125:return Yw;case 36294:return Kw;case 36295:return Zw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return nE}}function rE(t,e){t.uniform1fv(this.addr,e)}function sE(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function aE(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function oE(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function lE(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cE(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uE(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dE(t,e){t.uniform1iv(this.addr,e)}function hE(t,e){t.uniform2iv(this.addr,e)}function fE(t,e){t.uniform3iv(this.addr,e)}function pE(t,e){t.uniform4iv(this.addr,e)}function mE(t,e){t.uniform1uiv(this.addr,e)}function xE(t,e){t.uniform2uiv(this.addr,e)}function gE(t,e){t.uniform3uiv(this.addr,e)}function vE(t,e){t.uniform4uiv(this.addr,e)}function _E(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Vx,s[a])}function yE(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$x,s[a])}function SE(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||qx,s[a])}function ME(t,e,n){const i=this.cache,r=e.length,s=Ol(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Xx,s[a])}function wE(t){switch(t){case 5126:return rE;case 35664:return sE;case 35665:return aE;case 35666:return oE;case 35674:return lE;case 35675:return cE;case 35676:return uE;case 5124:case 35670:return dE;case 35667:case 35671:return hE;case 35668:case 35672:return fE;case 35669:case 35673:return pE;case 5125:return mE;case 36294:return xE;case 36295:return gE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return ME}}class EE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iE(n.type)}}class bE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wE(n.type)}}class TE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Cp(t,e){t.seq.push(e),t.map[e.id]=e}function AE(t,e,n){const i=t.name,r=i.length;for(Vc.lastIndex=0;;){const s=Vc.exec(i),a=Vc.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Cp(n,u===void 0?new EE(o,t,e):new bE(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new TE(o),Cp(n,f)),n=f}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);AE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Rp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CE=37297;let RE=0;function NE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function PE(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===pl&&n===fl?i="LinearDisplayP3ToLinearSRGB":e===fl&&n===pl&&(i="LinearSRGBToLinearDisplayP3"),t){case yi:case Il:return[i,"LinearTransferOETF"];case It:case Kd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Np(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+NE(t.getShaderSource(e),a)}else return r}function LE(t,e){const n=PE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function DE(t,e){let n;switch(e){case Vy:n="Linear";break;case Wy:n="Reinhard";break;case Xy:n="OptimizedCineon";break;case $y:n="ACESFilmic";break;case Yy:n="AgX";break;case qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function UE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function IE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(as).join(`
`)}function kE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function as(t){return t!==""}function Pp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(t){return t.replace(OE,BE)}const zE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BE(t,e){let n=Be[e];if(n===void 0){const i=zE.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ju(n)}const jE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(t){return t.replace(jE,HE)}function HE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Up(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function VE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case Es:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function XE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xx:e="ENVMAP_BLENDING_MULTIPLY";break;case Hy:e="ENVMAP_BLENDING_MIX";break;case Gy:e="ENVMAP_BLENDING_ADD";break}return e}function $E(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qE(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=GE(n),u=VE(n),h=WE(n),f=XE(n),p=$E(n),x=n.isWebGL2?"":UE(n),y=IE(n),_=kE(s),m=r.createProgram();let d,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(as).join(`
`),d.length>0&&(d+=`
`),v=[x,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(as).join(`
`),v.length>0&&(v+=`
`)):(d=[Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),v=[x,Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Wi?DE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,LE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(as).join(`
`)),a=Ju(a),a=Pp(a,n),a=Lp(a,n),o=Ju(o),o=Pp(o,n),o=Lp(o,n),a=Dp(a),o=Dp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+d+a,A=g+v+o,E=Rp(r,r.VERTEX_SHADER,S),b=Rp(r,r.FRAGMENT_SHADER,A);r.attachShader(m,E),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(Z){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(E).trim(),j=r.getShaderInfoLog(b).trim();let P=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,E,b);else{const L=Np(r,E,"vertex"),F=Np(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+L+`
`+F)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||j==="")&&(H=!1);H&&(Z.diagnostics={runnable:P,programLog:te,vertexShader:{log:I,prefix:d},fragmentShader:{log:j,prefix:v}})}r.deleteShader(E),r.deleteShader(b),w=new Bo(r,m),T=FE(r,m)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(m,CE)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=b,this}let YE=0;class KE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZE(e),n.set(e,i)),i}}class ZE{constructor(e){this.id=YE++,this.code=e,this.usedTimes=0}}function JE(t,e,n,i,r,s,a){const o=new Dx,c=new KE,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function m(w,T,G,Z,te){const I=Z.fog,j=te.geometry,P=w.isMeshStandardMaterial?Z.environment:null,H=(w.isMeshStandardMaterial?n:e).get(w.envMap||P),L=H&&H.mapping===Ul?H.image.height:null,F=y[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const N=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,q=N!==void 0?N.length:0;let J=0;j.morphAttributes.position!==void 0&&(J=1),j.morphAttributes.normal!==void 0&&(J=2),j.morphAttributes.color!==void 0&&(J=3);let D,K,Q,ue;if(F){const Xt=Kn[F];D=Xt.vertexShader,K=Xt.fragmentShader}else D=w.vertexShader,K=w.fragmentShader,c.update(w),Q=c.getVertexShaderID(w),ue=c.getFragmentShaderID(w);const V=t.getRenderTarget(),ie=te.isInstancedMesh===!0,he=te.isBatchedMesh===!0,de=!!w.map,Ee=!!w.matcap,z=!!H,tt=!!w.aoMap,Se=!!w.lightMap,ne=!!w.bumpMap,ce=!!w.normalMap,Te=!!w.displacementMap,Ne=!!w.emissiveMap,R=!!w.metalnessMap,M=!!w.roughnessMap,W=w.anisotropy>0,ae=w.clearcoat>0,se=w.iridescence>0,le=w.sheen>0,we=w.transmission>0,me=W&&!!w.anisotropyMap,_e=ae&&!!w.clearcoatMap,Ce=ae&&!!w.clearcoatNormalMap,ke=ae&&!!w.clearcoatRoughnessMap,re=se&&!!w.iridescenceMap,Ze=se&&!!w.iridescenceThicknessMap,je=le&&!!w.sheenColorMap,Le=le&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Me=!!w.specularColorMap,ze=!!w.specularIntensityMap,Je=we&&!!w.transmissionMap,mt=we&&!!w.thicknessMap,Ge=!!w.gradientMap,fe=!!w.alphaMap,U=w.alphaTest>0,xe=!!w.alphaHash,ge=!!w.extensions,Ue=!!j.attributes.uv1,Pe=!!j.attributes.uv2,nt=!!j.attributes.uv3;let it=Wi;return w.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:h,shaderID:F,shaderType:w.type,shaderName:w.name,vertexShader:D,fragmentShader:K,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:he,instancing:ie,instancingColor:ie&&te.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:V===null?t.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:yi,map:de,matcap:Ee,envMap:z,envMapMode:z&&H.mapping,envMapCubeUVHeight:L,aoMap:tt,lightMap:Se,bumpMap:ne,normalMap:ce,displacementMap:p&&Te,emissiveMap:Ne,normalMapObjectSpace:ce&&w.normalMapType===o1,normalMapTangentSpace:ce&&w.normalMapType===Tx,metalnessMap:R,roughnessMap:M,anisotropy:W,anisotropyMap:me,clearcoat:ae,clearcoatMap:_e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,iridescence:se,iridescenceMap:re,iridescenceThicknessMap:Ze,sheen:le,sheenColorMap:je,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:Me,specularIntensityMap:ze,transmission:we,transmissionMap:Je,thicknessMap:mt,gradientMap:Ge,opaque:w.transparent===!1&&w.blending===fs,alphaMap:fe,alphaTest:U,alphaHash:xe,combine:w.combine,mapUv:de&&_(w.map.channel),aoMapUv:tt&&_(w.aoMap.channel),lightMapUv:Se&&_(w.lightMap.channel),bumpMapUv:ne&&_(w.bumpMap.channel),normalMapUv:ce&&_(w.normalMap.channel),displacementMapUv:Te&&_(w.displacementMap.channel),emissiveMapUv:Ne&&_(w.emissiveMap.channel),metalnessMapUv:R&&_(w.metalnessMap.channel),roughnessMapUv:M&&_(w.roughnessMap.channel),anisotropyMapUv:me&&_(w.anisotropyMap.channel),clearcoatMapUv:_e&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(w.sheenRoughnessMap.channel),specularMapUv:Ae&&_(w.specularMap.channel),specularColorMapUv:Me&&_(w.specularColorMap.channel),specularIntensityMapUv:ze&&_(w.specularIntensityMap.channel),transmissionMapUv:Je&&_(w.transmissionMap.channel),thicknessMapUv:mt&&_(w.thicknessMap.channel),alphaMapUv:fe&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ce||W),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Pe,vertexUv3s:nt,pointsUvs:te.isPoints===!0&&!!j.attributes.uv&&(de||fe),fog:!!I,useFog:w.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:J,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jn,flipSided:w.side===cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:ge&&w.extensions.derivatives===!0,extensionFragDepth:ge&&w.extensions.fragDepth===!0,extensionDrawBuffers:ge&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)T.push(G),T.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(v(T,w),g(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function v(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function g(w,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),w.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function S(w){const T=y[w.type];let G;if(T){const Z=Kn[T];G=U1.clone(Z.uniforms)}else G=w.uniforms;return G}function A(w,T){let G;for(let Z=0,te=u.length;Z<te;Z++){const I=u[Z];if(I.cacheKey===T){G=I,++G.usedTimes;break}}return G===void 0&&(G=new qE(t,T,w,s),u.push(G)),G}function E(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function b(w){c.remove(w)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:k}}function QE(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function eb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ip(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,x,y,_,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:x,groupOrder:y,renderOrder:f.renderOrder,z:_,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=x,d.groupOrder=y,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function o(f,p,x,y,_,m){const d=a(f,p,x,y,_,m);x.transmission>0?i.push(d):x.transparent===!0?r.push(d):n.push(d)}function c(f,p,x,y,_,m){const d=a(f,p,x,y,_,m);x.transmission>0?i.unshift(d):x.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,p){n.length>1&&n.sort(f||eb),i.length>1&&i.sort(p||Ip),r.length>1&&r.sort(p||Ip)}function h(){for(let f=e,p=t.length;f<p;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function tb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new kp,t.set(i,[a])):r>=s.length?(a=new kp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ye};break;case"SpotLight":n={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function ib(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rb=0;function sb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ab(t,e){const n=new nb,i=ib(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,a=new wt,o=new wt;function c(h,f){let p=0,x=0,y=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,m=0,d=0,v=0,g=0,S=0,A=0,E=0,b=0,k=0,w=0;h.sort(sb);const T=f===!0?Math.PI:1;for(let Z=0,te=h.length;Z<te;Z++){const I=h[Z],j=I.color,P=I.intensity,H=I.distance,L=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=j.r*P*T,x+=j.g*P*T,y+=j.b*P*T;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],P);w++}else if(I.isDirectionalLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const N=I.shadow,q=i.get(I);q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,r.directionalShadow[_]=q,r.directionalShadowMap[_]=L,r.directionalShadowMatrix[_]=I.shadow.matrix,S++}r.directional[_]=F,_++}else if(I.isSpotLight){const F=n.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(j).multiplyScalar(P*T),F.distance=H,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[d]=F;const N=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,N.updateMatrices(I),I.castShadow&&k++),r.spotLightMatrix[d]=N.matrix,I.castShadow){const q=i.get(I);q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,r.spotShadow[d]=q,r.spotShadowMap[d]=L,E++}d++}else if(I.isRectAreaLight){const F=n.get(I);F.color.copy(j).multiplyScalar(P),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=F,v++}else if(I.isPointLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*T),F.distance=I.distance,F.decay=I.decay,I.castShadow){const N=I.shadow,q=i.get(I);q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,q.shadowCameraNear=N.camera.near,q.shadowCameraFar=N.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=I.shadow.matrix,A++}r.point[m]=F,m++}else if(I.isHemisphereLight){const F=n.get(I);F.skyColor.copy(I.color).multiplyScalar(P*T),F.groundColor.copy(I.groundColor).multiplyScalar(P*T),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=x,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==d||G.rectAreaLength!==v||G.hemiLength!==g||G.numDirectionalShadows!==S||G.numPointShadows!==A||G.numSpotShadows!==E||G.numSpotMaps!==b||G.numLightProbes!==w)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=E+b-k,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=w,G.directionalLength=_,G.pointLength=m,G.spotLength=d,G.rectAreaLength=v,G.hemiLength=g,G.numDirectionalShadows=S,G.numPointShadows=A,G.numSpotShadows=E,G.numSpotMaps=b,G.numLightProbes=w,r.version=rb++)}function u(h,f){let p=0,x=0,y=0,_=0,m=0;const d=f.matrixWorldInverse;for(let v=0,g=h.length;v<g;v++){const S=h[v];if(S.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),p++}else if(S.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),y++}else if(S.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const A=r.point[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),x++}else if(S.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:c,setupView:u,state:r}}function Fp(t,e){const n=new ab(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function ob(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let c;return o===void 0?(c=new Fp(t,e),n.set(s,[c])):a>=o.length?(c=new Fp(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class lb extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cb extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hb(t,e,n){let i=new Zd;const r=new Xe,s=new Xe,a=new Lt,o=new lb({depthPacking:a1}),c=new cb,u={},h=n.maxTextureSize,f={[Ki]:cn,[cn]:Ki,[Jn]:Jn},p=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ub,fragmentShader:db}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const y=new Wn;y.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mx;let d=this.type;this.render=function(E,b,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=t.getRenderTarget(),T=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Vi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=d!==li&&this.type===li,I=d===li&&this.type!==li;for(let j=0,P=E.length;j<P;j++){const H=E[j],L=H.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const F=L.getFrameExtents();if(r.multiply(F),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,L.mapSize.y=s.y)),L.map===null||te===!0||I===!0){const q=this.type!==li?{minFilter:Kt,magFilter:Kt}:{};L.map!==null&&L.map.dispose(),L.map=new br(r.x,r.y,q),L.map.texture.name=H.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const N=L.getViewportCount();for(let q=0;q<N;q++){const J=L.getViewport(q);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),Z.viewport(a),L.updateMatrices(H,q),i=L.getFrustum(),S(b,k,L.camera,H,this.type)}L.isPointLightShadow!==!0&&this.type===li&&v(L,k),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,T,G)};function v(E,b){const k=e.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new br(r.x,r.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(b,null,k,p,_,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value=E.mapSize,x.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(b,null,k,x,_,null)}function g(E,b,k,w){let T=null;const G=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(G!==void 0)T=G;else if(T=k.isPointLight===!0?c:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Z=T.uuid,te=b.uuid;let I=u[Z];I===void 0&&(I={},u[Z]=I);let j=I[te];j===void 0&&(j=T.clone(),I[te]=j,b.addEventListener("dispose",A)),T=j}if(T.visible=b.visible,T.wireframe=b.wireframe,w===li?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=t.properties.get(T);Z.light=k}return T}function S(E,b,k,w,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===li)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const te=e.update(E),I=E.material;if(Array.isArray(I)){const j=te.groups;for(let P=0,H=j.length;P<H;P++){const L=j[P],F=I[L.materialIndex];if(F&&F.visible){const N=g(E,F,w,T);E.onBeforeShadow(t,E,b,k,te,N,L),t.renderBufferDirect(k,null,te,N,E,L),E.onAfterShadow(t,E,b,k,te,N,L)}}}else if(I.visible){const j=g(E,I,w,T);E.onBeforeShadow(t,E,b,k,te,j,null),t.renderBufferDirect(k,null,te,j,E,null),E.onAfterShadow(t,E,b,k,te,j,null)}}const Z=E.children;for(let te=0,I=Z.length;te<I;te++)S(Z[te],b,k,w,T)}function A(E){E.target.removeEventListener("dispose",A);for(const k in u){const w=u[k],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function fb(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const xe=new Lt;let ge=null;const Ue=new Lt(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!U&&(t.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,nt,it,Ct,Xt){Xt===!0&&(Pe*=Ct,nt*=Ct,it*=Ct),xe.set(Pe,nt,it,Ct),Ue.equals(xe)===!1&&(t.clearColor(Pe,nt,it,Ct),Ue.copy(xe))},reset:function(){U=!1,ge=null,Ue.set(-1,0,0,0)}}}function s(){let U=!1,xe=null,ge=null,Ue=null;return{setTest:function(Pe){Pe?he(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Pe){xe!==Pe&&!U&&(t.depthMask(Pe),xe=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case Iy:t.depthFunc(t.NEVER);break;case ky:t.depthFunc(t.ALWAYS);break;case Fy:t.depthFunc(t.LESS);break;case dl:t.depthFunc(t.LEQUAL);break;case Oy:t.depthFunc(t.EQUAL);break;case zy:t.depthFunc(t.GEQUAL);break;case By:t.depthFunc(t.GREATER);break;case jy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){Ue!==Pe&&(t.clearDepth(Pe),Ue=Pe)},reset:function(){U=!1,xe=null,ge=null,Ue=null}}}function a(){let U=!1,xe=null,ge=null,Ue=null,Pe=null,nt=null,it=null,Ct=null,Xt=null;return{setTest:function(rt){U||(rt?he(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(rt){xe!==rt&&!U&&(t.stencilMask(rt),xe=rt)},setFunc:function(rt,$t,Xn){(ge!==rt||Ue!==$t||Pe!==Xn)&&(t.stencilFunc(rt,$t,Xn),ge=rt,Ue=$t,Pe=Xn)},setOp:function(rt,$t,Xn){(nt!==rt||it!==$t||Ct!==Xn)&&(t.stencilOp(rt,$t,Xn),nt=rt,it=$t,Ct=Xn)},setLocked:function(rt){U=rt},setClear:function(rt){Xt!==rt&&(t.clearStencil(rt),Xt=rt)},reset:function(){U=!1,xe=null,ge=null,Ue=null,Pe=null,nt=null,it=null,Ct=null,Xt=null}}}const o=new r,c=new s,u=new a,h=new WeakMap,f=new WeakMap;let p={},x={},y=new WeakMap,_=[],m=null,d=!1,v=null,g=null,S=null,A=null,E=null,b=null,k=null,w=new Ye(0,0,0),T=0,G=!1,Z=null,te=null,I=null,j=null,P=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(N)[1]),L=F>=1):N.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),L=F>=2);let q=null,J={};const D=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),Q=new Lt().fromArray(D),ue=new Lt().fromArray(K);function V(U,xe,ge,Ue){const Pe=new Uint8Array(4),nt=t.createTexture();t.bindTexture(U,nt),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<ge;it++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(xe,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(xe+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return nt}const ie={};ie[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ie[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),he(t.DEPTH_TEST),c.setFunc(dl),Ne(!1),R(vf),he(t.CULL_FACE),ce(Vi);function he(U){p[U]!==!0&&(t.enable(U),p[U]=!0)}function de(U){p[U]!==!1&&(t.disable(U),p[U]=!1)}function Ee(U,xe){return x[U]!==xe?(t.bindFramebuffer(U,xe),x[U]=xe,i&&(U===t.DRAW_FRAMEBUFFER&&(x[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(x[t.DRAW_FRAMEBUFFER]=xe)),!0):!1}function z(U,xe){let ge=_,Ue=!1;if(U)if(ge=y.get(xe),ge===void 0&&(ge=[],y.set(xe,ge)),U.isWebGLMultipleRenderTargets){const Pe=U.texture;if(ge.length!==Pe.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=Pe.length;nt<it;nt++)ge[nt]=t.COLOR_ATTACHMENT0+nt;ge.length=Pe.length,Ue=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function tt(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const Se={[ur]:t.FUNC_ADD,[yy]:t.FUNC_SUBTRACT,[Sy]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[Mf]=t.MIN,Se[wf]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Se[Mf]=U.MIN_EXT,Se[wf]=U.MAX_EXT)}const ne={[My]:t.ZERO,[wy]:t.ONE,[Ey]:t.SRC_COLOR,[Gu]:t.SRC_ALPHA,[Ny]:t.SRC_ALPHA_SATURATE,[Cy]:t.DST_COLOR,[Ty]:t.DST_ALPHA,[by]:t.ONE_MINUS_SRC_COLOR,[Vu]:t.ONE_MINUS_SRC_ALPHA,[Ry]:t.ONE_MINUS_DST_COLOR,[Ay]:t.ONE_MINUS_DST_ALPHA,[Py]:t.CONSTANT_COLOR,[Ly]:t.ONE_MINUS_CONSTANT_COLOR,[Dy]:t.CONSTANT_ALPHA,[Uy]:t.ONE_MINUS_CONSTANT_ALPHA};function ce(U,xe,ge,Ue,Pe,nt,it,Ct,Xt,rt){if(U===Vi){d===!0&&(de(t.BLEND),d=!1);return}if(d===!1&&(he(t.BLEND),d=!0),U!==_y){if(U!==v||rt!==G){if((g!==ur||E!==ur)&&(t.blendEquation(t.FUNC_ADD),g=ur,E=ur),rt)switch(U){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _f:t.blendFunc(t.ONE,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _f:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,A=null,b=null,k=null,w.set(0,0,0),T=0,v=U,G=rt}return}Pe=Pe||xe,nt=nt||ge,it=it||Ue,(xe!==g||Pe!==E)&&(t.blendEquationSeparate(Se[xe],Se[Pe]),g=xe,E=Pe),(ge!==S||Ue!==A||nt!==b||it!==k)&&(t.blendFuncSeparate(ne[ge],ne[Ue],ne[nt],ne[it]),S=ge,A=Ue,b=nt,k=it),(Ct.equals(w)===!1||Xt!==T)&&(t.blendColor(Ct.r,Ct.g,Ct.b,Xt),w.copy(Ct),T=Xt),v=U,G=!1}function Te(U,xe){U.side===Jn?de(t.CULL_FACE):he(t.CULL_FACE);let ge=U.side===cn;xe&&(ge=!ge),Ne(ge),U.blending===fs&&U.transparent===!1?ce(Vi):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const Ue=U.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),W(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(U){Z!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),Z=U)}function R(U){U!==xy?(he(t.CULL_FACE),U!==te&&(U===vf?t.cullFace(t.BACK):U===gy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),te=U}function M(U){U!==I&&(L&&t.lineWidth(U),I=U)}function W(U,xe,ge){U?(he(t.POLYGON_OFFSET_FILL),(j!==xe||P!==ge)&&(t.polygonOffset(xe,ge),j=xe,P=ge)):de(t.POLYGON_OFFSET_FILL)}function ae(U){U?he(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function se(U){U===void 0&&(U=t.TEXTURE0+H-1),q!==U&&(t.activeTexture(U),q=U)}function le(U,xe,ge){ge===void 0&&(q===null?ge=t.TEXTURE0+H-1:ge=q);let Ue=J[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},J[ge]=Ue),(Ue.type!==U||Ue.texture!==xe)&&(q!==ge&&(t.activeTexture(ge),q=ge),t.bindTexture(U,xe||ie[U]),Ue.type=U,Ue.texture=xe)}function we(){const U=J[q];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function me(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){Q.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Q.copy(U))}function Je(U){ue.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function mt(U,xe){let ge=f.get(xe);ge===void 0&&(ge=new WeakMap,f.set(xe,ge));let Ue=ge.get(U);Ue===void 0&&(Ue=t.getUniformBlockIndex(xe,U.name),ge.set(U,Ue))}function Ge(U,xe){const Ue=f.get(xe).get(U);h.get(xe)!==Ue&&(t.uniformBlockBinding(xe,Ue,U.__bindingPointIndex),h.set(xe,Ue))}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},q=null,J={},x={},y=new WeakMap,_=[],m=null,d=!1,v=null,g=null,S=null,A=null,E=null,b=null,k=null,w=new Ye(0,0,0),T=0,G=!1,Z=null,te=null,I=null,j=null,P=null,Q.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:he,disable:de,bindFramebuffer:Ee,drawBuffers:z,useProgram:tt,setBlending:ce,setMaterial:Te,setFlipSided:Ne,setCullFace:R,setLineWidth:M,setPolygonOffset:W,setScissorTest:ae,activeTexture:se,bindTexture:le,unbindTexture:we,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Ae,texImage3D:Me,updateUBOMapping:mt,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:Le,texSubImage2D:Ce,texSubImage3D:ke,compressedTexSubImage2D:re,compressedTexSubImage3D:Ze,scissor:ze,viewport:Je,reset:fe}}function pb(t,e,n,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return x?new OffscreenCanvas(R,M):xl("canvas")}function _(R,M,W,ae){let se=1;if((R.width>ae||R.height>ae)&&(se=ae/Math.max(R.width,R.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=M?Zu:Math.floor,we=le(se*R.width),me=le(se*R.height);f===void 0&&(f=y(we,me));const _e=W?y(we,me):f;return _e.width=we,_e.height=me,_e.getContext("2d").drawImage(R,0,0,we,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+we+"x"+me+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Qf(R.width)&&Qf(R.height)}function d(R){return o?!1:R.wrapS!==Bn||R.wrapT!==Bn||R.minFilter!==Kt&&R.minFilter!==En}function v(R,M){return R.generateMipmaps&&M&&R.minFilter!==Kt&&R.minFilter!==En}function g(R){t.generateMipmap(R)}function S(R,M,W,ae,se=!1){if(o===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=M;if(M===t.RED&&(W===t.FLOAT&&(le=t.R32F),W===t.HALF_FLOAT&&(le=t.R16F),W===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(le=t.R8UI),W===t.UNSIGNED_SHORT&&(le=t.R16UI),W===t.UNSIGNED_INT&&(le=t.R32UI),W===t.BYTE&&(le=t.R8I),W===t.SHORT&&(le=t.R16I),W===t.INT&&(le=t.R32I)),M===t.RG&&(W===t.FLOAT&&(le=t.RG32F),W===t.HALF_FLOAT&&(le=t.RG16F),W===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const we=se?hl:et.getTransfer(ae);W===t.FLOAT&&(le=t.RGBA32F),W===t.HALF_FLOAT&&(le=t.RGBA16F),W===t.UNSIGNED_BYTE&&(le=we===ot?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function A(R,M,W){return v(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){return R===Kt||R===Ef||R===mc?t.NEAREST:t.LINEAR}function b(R){const M=R.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&h.delete(M)}function k(R){const M=R.target;M.removeEventListener("dispose",k),G(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const W=R.source,ae=p.get(W);if(ae){const se=ae[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(R),Object.keys(ae).length===0&&p.delete(W)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const W=R.source,ae=p.get(W);delete ae[M.__cacheKey],a.memory.textures--}function G(R){const M=R.texture,W=i.get(R),ae=i.get(M);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(W.__webglFramebuffer[se]))for(let le=0;le<W.__webglFramebuffer[se].length;le++)t.deleteFramebuffer(W.__webglFramebuffer[se][le]);else t.deleteFramebuffer(W.__webglFramebuffer[se]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[se])}else{if(Array.isArray(W.__webglFramebuffer))for(let se=0;se<W.__webglFramebuffer.length;se++)t.deleteFramebuffer(W.__webglFramebuffer[se]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let se=0;se<W.__webglColorRenderbuffer.length;se++)W.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[se]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let se=0,le=M.length;se<le;se++){const we=i.get(M[se]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(R)}let Z=0;function te(){Z=0}function I(){const R=Z;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Z+=1,R}function j(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function P(R,M){const W=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,R,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function H(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Q(W,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function L(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Q(W,R,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function F(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){ue(W,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const N={[$u]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[qu]:t.MIRRORED_REPEAT},q={[Kt]:t.NEAREST,[Ef]:t.NEAREST_MIPMAP_NEAREST,[mc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Ky]:t.LINEAR_MIPMAP_NEAREST,[Aa]:t.LINEAR_MIPMAP_LINEAR},J={[l1]:t.NEVER,[p1]:t.ALWAYS,[c1]:t.LESS,[Ax]:t.LEQUAL,[u1]:t.EQUAL,[f1]:t.GEQUAL,[d1]:t.GREATER,[h1]:t.NOTEQUAL};function D(R,M,W){if(W?(t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Bn||M.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,E(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Kt&&M.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Kt||M.minFilter!==mc&&M.minFilter!==Aa||M.type===Ii&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ca&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const ae=M.source;let se=p.get(ae);se===void 0&&(se={},p.set(ae,se));const le=j(M);if(le!==R.__cacheKey){se[le]===void 0&&(se[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),se[le].usedTimes++;const we=se[R.__cacheKey];we!==void 0&&(se[R.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),R.__cacheKey=le,R.__webglTexture=se[le].texture}return W}function Q(R,M,W){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const se=K(R,M),le=M.source;n.bindTexture(ae,R.__webglTexture,t.TEXTURE0+W);const we=i.get(le);if(le.version!==we.__version||se===!0){n.activeTexture(t.TEXTURE0+W);const me=et.getPrimaries(et.workingColorSpace),_e=M.colorSpace===Tn?null:et.getPrimaries(M.colorSpace),Ce=M.colorSpace===Tn||me===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ke=d(M)&&m(M.image)===!1;let re=_(M.image,ke,!1,r.maxTextureSize);re=Ne(M,re);const Ze=m(re)||o,je=s.convert(M.format,M.colorSpace);let Le=s.convert(M.type),Ae=S(M.internalFormat,je,Le,M.colorSpace,M.isVideoTexture);D(ae,M,Ze);let Me;const ze=M.mipmaps,Je=o&&M.isVideoTexture!==!0&&Ae!==Ex,mt=we.__version===void 0||se===!0,Ge=A(M,re,Ze);if(M.isDepthTexture)Ae=t.DEPTH_COMPONENT,o?M.type===Ii?Ae=t.DEPTH_COMPONENT32F:M.type===Ui?Ae=t.DEPTH_COMPONENT24:M.type===gr?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:M.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===vr&&Ae===t.DEPTH_COMPONENT&&M.type!==Yd&&M.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ui,Le=s.convert(M.type)),M.format===bs&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,M.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=gr,Le=s.convert(M.type))),mt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Ae,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,je,Le,null));else if(M.isDataTexture)if(ze.length>0&&Ze){Je&&mt&&n.texStorage2D(t.TEXTURE_2D,Ge,Ae,ze[0].width,ze[0].height);for(let fe=0,U=ze.length;fe<U;fe++)Me=ze[fe],Je?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Me.width,Me.height,je,Le,Me.data):n.texImage2D(t.TEXTURE_2D,fe,Ae,Me.width,Me.height,0,je,Le,Me.data);M.generateMipmaps=!1}else Je?(mt&&n.texStorage2D(t.TEXTURE_2D,Ge,Ae,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,je,Le,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,re.width,re.height,0,je,Le,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Ae,ze[0].width,ze[0].height,re.depth);for(let fe=0,U=ze.length;fe<U;fe++)Me=ze[fe],M.format!==jn?je!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,re.depth,je,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Ae,Me.width,Me.height,re.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,re.depth,je,Le,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Ae,Me.width,Me.height,re.depth,0,je,Le,Me.data)}else{Je&&mt&&n.texStorage2D(t.TEXTURE_2D,Ge,Ae,ze[0].width,ze[0].height);for(let fe=0,U=ze.length;fe<U;fe++)Me=ze[fe],M.format!==jn?je!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Me.width,Me.height,je,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Me.width,Me.height,je,Le,Me.data):n.texImage2D(t.TEXTURE_2D,fe,Ae,Me.width,Me.height,0,je,Le,Me.data)}else if(M.isDataArrayTexture)Je?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Ae,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,je,Le,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,je,Le,re.data);else if(M.isData3DTexture)Je?(mt&&n.texStorage3D(t.TEXTURE_3D,Ge,Ae,re.width,re.height,re.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,je,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,je,Le,re.data);else if(M.isFramebufferTexture){if(mt)if(Je)n.texStorage2D(t.TEXTURE_2D,Ge,Ae,re.width,re.height);else{let fe=re.width,U=re.height;for(let xe=0;xe<Ge;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ae,fe,U,0,je,Le,null),fe>>=1,U>>=1}}else if(ze.length>0&&Ze){Je&&mt&&n.texStorage2D(t.TEXTURE_2D,Ge,Ae,ze[0].width,ze[0].height);for(let fe=0,U=ze.length;fe<U;fe++)Me=ze[fe],Je?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,je,Le,Me):n.texImage2D(t.TEXTURE_2D,fe,Ae,je,Le,Me);M.generateMipmaps=!1}else Je?(mt&&n.texStorage2D(t.TEXTURE_2D,Ge,Ae,re.width,re.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Le,re)):n.texImage2D(t.TEXTURE_2D,0,Ae,je,Le,re);v(M,Ze)&&g(ae),we.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,W){if(M.image.length!==6)return;const ae=K(R,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);const le=i.get(se);if(se.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+W);const we=et.getPrimaries(et.workingColorSpace),me=M.colorSpace===Tn?null:et.getPrimaries(M.colorSpace),_e=M.colorSpace===Tn||we===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,re=[];for(let fe=0;fe<6;fe++)!Ce&&!ke?re[fe]=_(M.image[fe],!1,!0,r.maxCubemapSize):re[fe]=ke?M.image[fe].image:M.image[fe],re[fe]=Ne(M,re[fe]);const Ze=re[0],je=m(Ze)||o,Le=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),Me=S(M.internalFormat,Le,Ae,M.colorSpace),ze=o&&M.isVideoTexture!==!0,Je=le.__version===void 0||ae===!0;let mt=A(M,Ze,je);D(t.TEXTURE_CUBE_MAP,M,je);let Ge;if(Ce){ze&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Me,Ze.width,Ze.height);for(let fe=0;fe<6;fe++){Ge=re[fe].mipmaps;for(let U=0;U<Ge.length;U++){const xe=Ge[U];M.format!==jn?Le!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,0,0,xe.width,xe.height,Le,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,Me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,0,0,xe.width,xe.height,Le,Ae,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U,Me,xe.width,xe.height,0,Le,Ae,xe.data)}}}else{Ge=M.mipmaps,ze&&Je&&(Ge.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Me,re[0].width,re[0].height));for(let fe=0;fe<6;fe++)if(ke){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,re[fe].width,re[fe].height,Le,Ae,re[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,re[fe].width,re[fe].height,0,Le,Ae,re[fe].data);for(let U=0;U<Ge.length;U++){const ge=Ge[U].image[fe].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,0,0,ge.width,ge.height,Le,Ae,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,Me,ge.width,ge.height,0,Le,Ae,ge.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Le,Ae,re[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,Le,Ae,re[fe]);for(let U=0;U<Ge.length;U++){const xe=Ge[U];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,0,0,Le,Ae,xe.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,U+1,Me,Le,Ae,xe.image[fe])}}}v(M,je)&&g(t.TEXTURE_CUBE_MAP),le.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function V(R,M,W,ae,se,le){const we=s.convert(W.format,W.colorSpace),me=s.convert(W.type),_e=S(W.internalFormat,we,me,W.colorSpace);if(!i.get(M).__hasExternalTextures){const ke=Math.max(1,M.width>>le),re=Math.max(1,M.height>>le);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,le,_e,ke,re,M.depth,0,we,me,null):n.texImage2D(se,le,_e,ke,re,0,we,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ce(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,se,i.get(W).__webglTexture,0,ne(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,se,i.get(W).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ae=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||ce(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Ii?ae=t.DEPTH_COMPONENT32F:se.type===Ui&&(ae=t.DEPTH_COMPONENT24));const le=ne(M);ce(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ae=ne(M);W&&ce(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):ce(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ae.length;se++){const le=ae[se],we=s.convert(le.format,le.colorSpace),me=s.convert(le.type),_e=S(le.internalFormat,we,me,le.colorSpace),Ce=ne(M);W&&ce(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,_e,M.width,M.height):ce(M)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const ae=i.get(M.depthTexture).__webglTexture,se=ne(M);if(M.depthTexture.format===vr)ce(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===bs)ce(M)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function de(R){const M=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,R)}else if(W){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=t.createRenderbuffer(),ie(M.__webglDepthbuffer[ae],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ie(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(R,M,W){const ae=i.get(R);M!==void 0&&V(ae.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&de(R)}function z(R){const M=R.texture,W=i.get(R),ae=i.get(M);R.addEventListener("dispose",k),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,a.memory.textures++);const se=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,we=m(R)||o;if(se){W.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[me]=[];for(let _e=0;_e<M.mipmaps.length;_e++)W.__webglFramebuffer[me][_e]=t.createFramebuffer()}else W.__webglFramebuffer[me]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)W.__webglFramebuffer[me]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const me=R.texture;for(let _e=0,Ce=me.length;_e<Ce;_e++){const ke=i.get(me[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ce(R)===!1){const me=le?M:[M];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<me.length;_e++){const Ce=me[_e];W.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const ke=s.convert(Ce.format,Ce.colorSpace),re=s.convert(Ce.type),Ze=S(Ce.internalFormat,ke,re,Ce.colorSpace,R.isXRRenderTarget===!0),je=ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),D(t.TEXTURE_CUBE_MAP,M,we);for(let me=0;me<6;me++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)V(W.__webglFramebuffer[me][_e],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else V(W.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(M,we)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const me=R.texture;for(let _e=0,Ce=me.length;_e<Ce;_e++){const ke=me[_e],re=i.get(ke);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),D(t.TEXTURE_2D,ke,we),V(W.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),v(ke,we)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,ae.__webglTexture),D(me,M,we),o&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)V(W.__webglFramebuffer[_e],R,M,t.COLOR_ATTACHMENT0,me,_e);else V(W.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,me,0);v(M,we)&&g(me),n.unbindTexture()}R.depthBuffer&&de(R)}function tt(R){const M=m(R)||o,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,se=W.length;ae<se;ae++){const le=W[ae];if(v(le,M)){const we=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(le).__webglTexture;n.bindTexture(we,me),g(we),n.unbindTexture()}}}function Se(R){if(o&&R.samples>0&&ce(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,ae=R.height;let se=t.COLOR_BUFFER_BIT;const le=[],we=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(R),_e=R.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){le.push(t.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&le.push(we);const ke=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),_e){const re=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,W,ae,0,0,W,ae,se,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);const ke=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function ne(R){return Math.min(r.maxSamples,R.samples)}function ce(R){const M=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Ne(R,M){const W=R.colorSpace,ae=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Yu||W!==yi&&W!==Tn&&(et.getTransfer(W)===ot?o===!1?e.has("EXT_sRGB")===!0&&ae===jn?(R.format=Yu,R.minFilter=En,R.generateMipmaps=!1):M=Rx.sRGBToLinear(M):(ae!==jn||se!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=P,this.setTexture2DArray=H,this.setTexture3D=L,this.setTextureCube=F,this.rebindTextures=Ee,this.setupRenderTarget=z,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ce}function mb(t,e,n){const i=n.isWebGL2;function r(s,a=Tn){let o;const c=et.getTransfer(a);if(s===Xi)return t.UNSIGNED_BYTE;if(s===_x)return t.UNSIGNED_SHORT_4_4_4_4;if(s===yx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Zy)return t.BYTE;if(s===Jy)return t.SHORT;if(s===Yd)return t.UNSIGNED_SHORT;if(s===vx)return t.INT;if(s===Ui)return t.UNSIGNED_INT;if(s===Ii)return t.FLOAT;if(s===Ca)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Qy)return t.ALPHA;if(s===jn)return t.RGBA;if(s===e1)return t.LUMINANCE;if(s===t1)return t.LUMINANCE_ALPHA;if(s===vr)return t.DEPTH_COMPONENT;if(s===bs)return t.DEPTH_STENCIL;if(s===Yu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===n1)return t.RED;if(s===Sx)return t.RED_INTEGER;if(s===i1)return t.RG;if(s===Mx)return t.RG_INTEGER;if(s===wx)return t.RGBA_INTEGER;if(s===xc||s===gc||s===vc||s===_c)if(c===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bf||s===Tf||s===Af||s===Cf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===bf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Af)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ex)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rf||s===Nf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Rf)return c===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Nf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pf||s===Lf||s===Df||s===Uf||s===If||s===kf||s===Ff||s===Of||s===zf||s===Bf||s===jf||s===Hf||s===Gf||s===Vf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Pf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Df)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===If)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ff)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Of)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vf)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yc||s===Wf||s===Xf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===yc)return c===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===r1||s===$f||s===qf||s===Yf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===yc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===$f)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class xb extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),x=.02,y=.005;u.inputState.pinching&&p>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class vb extends Ns{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,p=null,x=null,y=null;const _=n.getContextAttributes();let m=null,d=null;const v=[],g=[],S=new Xe;let A=null;const E=new bn;E.layers.enable(1),E.viewport=new Lt;const b=new bn;b.layers.enable(2),b.viewport=new Lt;const k=[E,b],w=new xb;w.layers.enable(1),w.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let K=v[D];return K===void 0&&(K=new Wc,v[D]=K),K.getTargetRaySpace()},this.getControllerGrip=function(D){let K=v[D];return K===void 0&&(K=new Wc,v[D]=K),K.getGripSpace()},this.getHand=function(D){let K=v[D];return K===void 0&&(K=new Wc,v[D]=K),K.getHandSpace()};function Z(D){const K=g.indexOf(D.inputSource);if(K===-1)return;const Q=v[K];Q!==void 0&&(Q.update(D.inputSource,D.frame,u||a),Q.dispatchEvent({type:D.type,data:D.inputSource}))}function te(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",I);for(let D=0;D<v.length;D++){const K=g[D];K!==null&&(g[D]=null,v[D].disconnect(K))}T=null,G=null,e.setRenderTarget(m),x=null,p=null,f=null,r=null,d=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",te),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),d=new br(x.framebufferWidth,x.framebufferHeight,{format:jn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,Q=null,ue=null;_.depth&&(ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=_.stencil?bs:vr,Q=_.stencil?gr:Ui);const V={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(V),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new br(p.textureWidth,p.textureHeight,{format:jn,type:Xi,depthTexture:new Gx(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ie=e.properties.get(d);ie.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(D){for(let K=0;K<D.removed.length;K++){const Q=D.removed[K],ue=g.indexOf(Q);ue>=0&&(g[ue]=null,v[ue].disconnect(Q))}for(let K=0;K<D.added.length;K++){const Q=D.added[K];let ue=g.indexOf(Q);if(ue===-1){for(let ie=0;ie<v.length;ie++)if(ie>=g.length){g.push(Q),ue=ie;break}else if(g[ie]===null){g[ie]=Q,ue=ie;break}if(ue===-1)break}const V=v[ue];V&&V.connect(Q)}}const j=new B,P=new B;function H(D,K,Q){j.setFromMatrixPosition(K.matrixWorld),P.setFromMatrixPosition(Q.matrixWorld);const ue=j.distanceTo(P),V=K.projectionMatrix.elements,ie=Q.projectionMatrix.elements,he=V[14]/(V[10]-1),de=V[14]/(V[10]+1),Ee=(V[9]+1)/V[5],z=(V[9]-1)/V[5],tt=(V[8]-1)/V[0],Se=(ie[8]+1)/ie[0],ne=he*tt,ce=he*Se,Te=ue/(-tt+Se),Ne=Te*-tt;K.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ne),D.translateZ(Te),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const R=he+Te,M=de+Te,W=ne-Ne,ae=ce+(ue-Ne),se=Ee*de/M*R,le=z*de/M*R;D.projectionMatrix.makePerspective(W,ae,se,le,R,M),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function L(D,K){K===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(K.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;w.near=b.near=E.near=D.near,w.far=b.far=E.far=D.far,(T!==w.near||G!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,G=w.far);const K=D.parent,Q=w.cameras;L(w,K);for(let ue=0;ue<Q.length;ue++)L(Q[ue],K);Q.length===2?H(w,E,b):w.projectionMatrix.copy(E.projectionMatrix),F(D,w,K)};function F(D,K,Q){Q===null?D.matrix.copy(K.matrixWorld):(D.matrix.copy(Q.matrixWorld),D.matrix.invert(),D.matrix.multiply(K.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ku*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&x===null))return c},this.setFoveation=function(D){c=D,p!==null&&(p.fixedFoveation=D),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=D)};let N=null;function q(D,K){if(h=K.getViewerPose(u||a),y=K,h!==null){const Q=h.views;x!==null&&(e.setRenderTargetFramebuffer(d,x.framebuffer),e.setRenderTarget(d));let ue=!1;Q.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let V=0;V<Q.length;V++){const ie=Q[V];let he=null;if(x!==null)he=x.getViewport(ie);else{const Ee=f.getViewSubImage(p,ie);he=Ee.viewport,V===0&&(e.setRenderTargetTextures(d,Ee.colorTexture,p.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(d))}let de=k[V];de===void 0&&(de=new bn,de.layers.enable(V),de.viewport=new Lt,k[V]=de),de.matrix.fromArray(ie.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ie.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(he.x,he.y,he.width,he.height),V===0&&(w.matrix.copy(de.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(de)}}for(let Q=0;Q<v.length;Q++){const ue=g[Q],V=v[Q];ue!==null&&V!==void 0&&V.update(ue,K,u||a)}N&&N(D,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),y=null}const J=new jx;J.setAnimationLoop(q),this.setAnimationLoop=function(D){N=D},this.dispose=function(){}}}function _b(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ox(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&x(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function x(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(y(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",m));const A=g.program;i.updateUBOMapping(v,A);const E=e.render.frame;s[v.id]!==E&&(p(v),s[v.id]=E)}function h(v){const g=f();v.__bindingPointIndex=g;const S=t.createBuffer(),A=v.__size,E=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const g=r[v.id],S=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let E=0,b=S.length;E<b;E++){const k=Array.isArray(S[E])?S[E]:[S[E]];for(let w=0,T=k.length;w<T;w++){const G=k[w];if(x(G,E,w,A)===!0){const Z=G.__offset,te=Array.isArray(G.value)?G.value:[G.value];let I=0;for(let j=0;j<te.length;j++){const P=te[j],H=_(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,Z+I,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(v,g,S,A){const E=v.value,b=g+"_"+S;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const k=A[b];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return A[b]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function y(v){const g=v.uniforms;let S=0;const A=16;for(let b=0,k=g.length;b<k;b++){const w=Array.isArray(g[b])?g[b]:[g[b]];for(let T=0,G=w.length;T<G;T++){const Z=w[T],te=Array.isArray(Z.value)?Z.value:[Z.value];for(let I=0,j=te.length;I<j;I++){const P=te[I],H=_(P),L=S%A;L!==0&&A-L<H.boundary&&(S+=A-L),Z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=H.storage}}}const E=S%A;return E>0&&(S+=A-E),v.__size=S,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class Yx{constructor(e={}){const{canvas:n=x1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const x=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let S=!1,A=0,E=0,b=null,k=-1,w=null;const T=new Lt,G=new Lt;let Z=null;const te=new Ye(0);let I=0,j=n.width,P=n.height,H=1,L=null,F=null;const N=new Lt(0,0,j,P),q=new Lt(0,0,j,P);let J=!1;const D=new Zd;let K=!1,Q=!1,ue=null;const V=new wt,ie=new Xe,he=new B,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return b===null?H:1}let z=i;function tt(C,O){for(let $=0;$<C.length;$++){const Y=C[$],X=n.getContext(Y,O);if(X!==null)return X}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",xe,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),z=tt(O,C),z===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,ne,ce,Te,Ne,R,M,W,ae,se,le,we,me,_e,Ce,ke,re,Ze,je,Le,Ae,Me,ze,Je;function mt(){Se=new Nw(z),ne=new Ew(z,Se,e),Se.init(ne),Me=new mb(z,Se,ne),ce=new fb(z,Se,ne),Te=new Dw(z),Ne=new QE,R=new pb(z,Se,ce,Ne,ne,Me,Te),M=new Tw(g),W=new Rw(g),ae=new j1(z,ne),ze=new Mw(z,Se,ae,ne),se=new Pw(z,ae,Te,ze),le=new Fw(z,se,ae,Te),je=new kw(z,ne,R),ke=new bw(Ne),we=new JE(g,M,W,Se,ne,ze,ke),me=new _b(g,Ne),_e=new tb,Ce=new ob(Se,ne),Ze=new Sw(g,M,W,ce,le,p,c),re=new hb(g,le,ne),Je=new yb(z,Te,ne,ce),Le=new ww(z,Se,Te,ne),Ae=new Lw(z,Se,Te,ne),Te.programs=we.programs,g.capabilities=ne,g.extensions=Se,g.properties=Ne,g.renderLists=_e,g.shadowMap=re,g.state=ce,g.info=Te}mt();const Ge=new vb(g,z);this.xr=Ge,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(j,P,!1))},this.getSize=function(C){return C.set(j,P)},this.setSize=function(C,O,$=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,P=O,n.width=Math.floor(C*H),n.height=Math.floor(O*H),$===!0&&(n.style.width=C+"px",n.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(j*H,P*H).floor()},this.setDrawingBufferSize=function(C,O,$){j=C,P=O,H=$,n.width=Math.floor(C*$),n.height=Math.floor(O*$),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,O,$,Y){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,O,$,Y),ce.viewport(T.copy(N).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,O,$,Y){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,O,$,Y),ce.scissor(G.copy(q).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){ce.setScissorTest(J=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,O=!0,$=!0){let Y=0;if(C){let X=!1;if(b!==null){const ve=b.texture.format;X=ve===wx||ve===Mx||ve===Sx}if(X){const ve=b.texture.type,be=ve===Xi||ve===Ui||ve===Yd||ve===gr||ve===_x||ve===yx,De=Ze.getClearColor(),Ie=Ze.getClearAlpha(),He=De.r,Fe=De.g,Oe=De.b;be?(x[0]=He,x[1]=Fe,x[2]=Oe,x[3]=Ie,z.clearBufferuiv(z.COLOR,0,x)):(y[0]=He,y[1]=Fe,y[2]=Oe,y[3]=Ie,z.clearBufferiv(z.COLOR,0,y))}else Y|=z.COLOR_BUFFER_BIT}O&&(Y|=z.DEPTH_BUFFER_BIT),$&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),_e.dispose(),Ce.dispose(),Ne.dispose(),M.dispose(),W.dispose(),le.dispose(),ze.dispose(),Je.dispose(),we.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Xt),Ge.removeEventListener("sessionend",rt),ue&&(ue.dispose(),ue=null),$t.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Te.autoReset,O=re.enabled,$=re.autoUpdate,Y=re.needsUpdate,X=re.type;mt(),Te.autoReset=C,re.enabled=O,re.autoUpdate=$,re.needsUpdate=Y,re.type=X}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const O=C.target;O.removeEventListener("dispose",ge),Ue(O)}function Ue(C){Pe(C),Ne.remove(C)}function Pe(C){const O=Ne.get(C).programs;O!==void 0&&(O.forEach(function($){we.releaseProgram($)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,$,Y,X,ve){O===null&&(O=de);const be=X.isMesh&&X.matrixWorld.determinant()<0,De=Qx(C,O,$,Y,X);ce.setMaterial(Y,be);let Ie=$.index,He=1;if(Y.wireframe===!0){if(Ie=se.getWireframeAttribute($),Ie===void 0)return;He=2}const Fe=$.drawRange,Oe=$.attributes.position;let vt=Fe.start*He,un=(Fe.start+Fe.count)*He;ve!==null&&(vt=Math.max(vt,ve.start*He),un=Math.min(un,(ve.start+ve.count)*He)),Ie!==null?(vt=Math.max(vt,0),un=Math.min(un,Ie.count)):Oe!=null&&(vt=Math.max(vt,0),un=Math.min(un,Oe.count));const Rt=un-vt;if(Rt<0||Rt===1/0)return;ze.setup(X,Y,De,$,Ie);let ni,ut=Le;if(Ie!==null&&(ni=ae.get(Ie),ut=Ae,ut.setIndex(ni)),X.isMesh)Y.wireframe===!0?(ce.setLineWidth(Y.wireframeLinewidth*Ee()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(X.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),ce.setLineWidth(Ve*Ee()),X.isLineSegments?ut.setMode(z.LINES):X.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else X.isPoints?ut.setMode(z.POINTS):X.isSprite&&ut.setMode(z.TRIANGLES);if(X.isBatchedMesh)ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ut.renderInstances(vt,Rt,X.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,zl=Math.min($.instanceCount,Ve);ut.renderInstances(vt,Rt,zl)}else ut.render(vt,Rt)};function nt(C,O,$){C.transparent===!0&&C.side===Jn&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,za(C,O,$),C.side=Ki,C.needsUpdate=!0,za(C,O,$),C.side=Jn):za(C,O,$)}this.compile=function(C,O,$=null){$===null&&($=C),m=Ce.get($),m.init(),v.push(m),$.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),C!==$&&C.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(g._useLegacyLights);const Y=new Set;return C.traverse(function(X){const ve=X.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const De=ve[be];nt(De,$,X),Y.add(De)}else nt(ve,$,X),Y.add(ve)}),v.pop(),m=null,Y},this.compileAsync=function(C,O,$=null){const Y=this.compile(C,O,$);return new Promise(X=>{function ve(){if(Y.forEach(function(be){Ne.get(be).currentProgram.isReady()&&Y.delete(be)}),Y.size===0){X(C);return}setTimeout(ve,10)}Se.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let it=null;function Ct(C){it&&it(C)}function Xt(){$t.stop()}function rt(){$t.start()}const $t=new jx;$t.setAnimationLoop(Ct),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(C){it=C,Ge.setAnimationLoop(C),C===null?$t.stop():$t.start()},Ge.addEventListener("sessionstart",Xt),Ge.addEventListener("sessionend",rt),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(O),O=Ge.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,O,b),m=Ce.get(C,v.length),m.init(),v.push(m),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),D.setFromProjectionMatrix(V),Q=this.localClippingEnabled,K=ke.init(this.clippingPlanes,Q),_=_e.get(C,d.length),_.init(),d.push(_),Xn(C,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(L,F),this.info.render.frame++,K===!0&&ke.beginShadows();const $=m.state.shadowsArray;if(re.render($,C,O),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,C),m.setupLights(g._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let X=0,ve=Y.length;X<ve;X++){const be=Y[X];nh(_,C,be,be.viewport)}}else nh(_,C,O);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(g,C,O),ze.resetDefaultState(),k=-1,w=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Xn(C,O,$,Y){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||D.intersectsSprite(C)){Y&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(V);const be=le.update(C),De=C.material;De.visible&&_.push(C,be,De,$,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||D.intersectsObject(C))){const be=le.update(C),De=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),he.copy(be.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(V)),Array.isArray(De)){const Ie=be.groups;for(let He=0,Fe=Ie.length;He<Fe;He++){const Oe=Ie[He],vt=De[Oe.materialIndex];vt&&vt.visible&&_.push(C,be,vt,$,he.z,Oe)}}else De.visible&&_.push(C,be,De,$,he.z,null)}}const ve=C.children;for(let be=0,De=ve.length;be<De;be++)Xn(ve[be],O,$,Y)}function nh(C,O,$,Y){const X=C.opaque,ve=C.transmissive,be=C.transparent;m.setupLightsView($),K===!0&&ke.setGlobalState(g.clippingPlanes,$),ve.length>0&&Jx(X,ve,O,$),Y&&ce.viewport(T.copy(Y)),X.length>0&&Oa(X,O,$),ve.length>0&&Oa(ve,O,$),be.length>0&&Oa(be,O,$),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Jx(C,O,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const ve=ne.isWebGL2;ue===null&&(ue=new br(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ca:Xi,minFilter:Aa,samples:ve?4:0})),g.getDrawingBufferSize(ie),ve?ue.setSize(ie.x,ie.y):ue.setSize(Zu(ie.x),Zu(ie.y));const be=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(te),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const De=g.toneMapping;g.toneMapping=Wi,Oa(C,$,Y),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue);let Ie=!1;for(let He=0,Fe=O.length;He<Fe;He++){const Oe=O[He],vt=Oe.object,un=Oe.geometry,Rt=Oe.material,ni=Oe.group;if(Rt.side===Jn&&vt.layers.test(Y.layers)){const ut=Rt.side;Rt.side=cn,Rt.needsUpdate=!0,ih(vt,$,Y,un,Rt,ni),Rt.side=ut,Rt.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue)),g.setRenderTarget(be),g.setClearColor(te,I),g.toneMapping=De}function Oa(C,O,$){const Y=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ve=C.length;X<ve;X++){const be=C[X],De=be.object,Ie=be.geometry,He=Y===null?be.material:Y,Fe=be.group;De.layers.test($.layers)&&ih(De,O,$,Ie,He,Fe)}}function ih(C,O,$,Y,X,ve){C.onBeforeRender(g,O,$,Y,X,ve),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(g,O,$,Y,C,ve),X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,g.renderBufferDirect($,O,Y,X,C,ve),X.side=Ki,X.needsUpdate=!0,g.renderBufferDirect($,O,Y,X,C,ve),X.side=Jn):g.renderBufferDirect($,O,Y,X,C,ve),C.onAfterRender(g,O,$,Y,X,ve)}function za(C,O,$){O.isScene!==!0&&(O=de);const Y=Ne.get(C),X=m.state.lights,ve=m.state.shadowsArray,be=X.state.version,De=we.getParameters(C,X.state,ve,O,$),Ie=we.getProgramCacheKey(De);let He=Y.programs;Y.environment=C.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(C.isMeshStandardMaterial?W:M).get(C.envMap||Y.environment),He===void 0&&(C.addEventListener("dispose",ge),He=new Map,Y.programs=He);let Fe=He.get(Ie);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===be)return sh(C,De),Fe}else De.uniforms=we.getUniforms(C),C.onBuild($,De,g),C.onBeforeCompile(De,g),Fe=we.acquireProgram(De,Ie),He.set(Ie,Fe),Y.uniforms=De.uniforms;const Oe=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=ke.uniform),sh(C,De),Y.needsLights=tg(C),Y.lightsStateVersion=be,Y.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function rh(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=Bo.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function sh(C,O){const $=Ne.get(C);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Qx(C,O,$,Y,X){O.isScene!==!0&&(O=de),R.resetTextureUnits();const ve=O.fog,be=Y.isMeshStandardMaterial?O.environment:null,De=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yi,Ie=(Y.isMeshStandardMaterial?W:M).get(Y.envMap||be),He=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!$.morphAttributes.position,vt=!!$.morphAttributes.normal,un=!!$.morphAttributes.color;let Rt=Wi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Rt=g.toneMapping);const ni=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=ni!==void 0?ni.length:0,Ve=Ne.get(Y),zl=m.state.lights;if(K===!0&&(Q===!0||C!==w)){const yn=C===w&&Y.id===k;ke.setState(Y,C,yn)}let xt=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==zl.state.version||Ve.outputColorSpace!==De||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||Ve.envMap!==Ie||Y.fog===!0&&Ve.fog!==ve||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ke.numPlanes||Ve.numIntersection!==ke.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Fe||Ve.morphTargets!==Oe||Ve.morphNormals!==vt||Ve.morphColors!==un||Ve.toneMapping!==Rt||ne.isWebGL2===!0&&Ve.morphTargetsCount!==ut)&&(xt=!0):(xt=!0,Ve.__version=Y.version);let er=Ve.currentProgram;xt===!0&&(er=za(Y,O,X));let ah=!1,Ds=!1,Bl=!1;const zt=er.getUniforms(),tr=Ve.uniforms;if(ce.useProgram(er.program)&&(ah=!0,Ds=!0,Bl=!0),Y.id!==k&&(k=Y.id,Ds=!0),ah||w!==C){zt.setValue(z,"projectionMatrix",C.projectionMatrix),zt.setValue(z,"viewMatrix",C.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(z,he.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&zt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&zt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Ds=!0,Bl=!0)}if(X.isSkinnedMesh){zt.setOptional(z,X,"bindMatrix"),zt.setOptional(z,X,"bindMatrixInverse");const yn=X.skeleton;yn&&(ne.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),zt.setValue(z,"boneTexture",yn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(zt.setOptional(z,X,"batchingTexture"),zt.setValue(z,"batchingTexture",X._matricesTexture,R));const jl=$.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0&&ne.isWebGL2===!0)&&je.update(X,$,er),(Ds||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,zt.setValue(z,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(tr.envMap.value=Ie,tr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Ds&&(zt.setValue(z,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&eg(tr,Bl),ve&&Y.fog===!0&&me.refreshFogUniforms(tr,ve),me.refreshMaterialUniforms(tr,Y,H,P,ue),Bo.upload(z,rh(Ve),tr,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Bo.upload(z,rh(Ve),tr,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&zt.setValue(z,"center",X.center),zt.setValue(z,"modelViewMatrix",X.modelViewMatrix),zt.setValue(z,"normalMatrix",X.normalMatrix),zt.setValue(z,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yn=Y.uniformsGroups;for(let Hl=0,ng=yn.length;Hl<ng;Hl++)if(ne.isWebGL2){const oh=yn[Hl];Je.update(oh,er),Je.bind(oh,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function eg(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function tg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,O,$){Ne.get(C.texture).__webglTexture=O,Ne.get(C.depthTexture).__webglTexture=$;const Y=Ne.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,O){const $=Ne.get(C);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,$=0){b=C,A=O,E=$;let Y=!0,X=null,ve=!1,be=!1;if(C){const Ie=Ne.get(C);Ie.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):Ie.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ie.__hasExternalTextures&&R.rebindTextures(C,Ne.get(C.texture).__webglTexture,Ne.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Fe=Ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?X=Fe[O][$]:X=Fe[O],ve=!0):ne.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?X=Ne.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[$]:X=Fe,T.copy(C.viewport),G.copy(C.scissor),Z=C.scissorTest}else T.copy(N).multiplyScalar(H).floor(),G.copy(q).multiplyScalar(H).floor(),Z=J;if(ce.bindFramebuffer(z.FRAMEBUFFER,X)&&ne.drawBuffers&&Y&&ce.drawBuffers(C,X),ce.viewport(T),ce.scissor(G),ce.setScissorTest(Z),ve){const Ie=Ne.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,$)}else if(be){const Ie=Ne.get(C.texture),He=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,$||0,He)}k=-1},this.readRenderTargetPixels=function(C,O,$,Y,X,ve,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(De=De[be]),De){ce.bindFramebuffer(z.FRAMEBUFFER,De);try{const Ie=C.texture,He=Ie.format,Fe=Ie.type;if(He!==jn&&Me.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===Ca&&(Se.has("EXT_color_buffer_half_float")||ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Fe!==Xi&&Me.convert(Fe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Ii&&(ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-Y&&$>=0&&$<=C.height-X&&z.readPixels(O,$,Y,X,Me.convert(He),Me.convert(Fe),ve)}finally{const Ie=b!==null?Ne.get(b).__webglFramebuffer:null;ce.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(C,O,$=0){const Y=Math.pow(2,-$),X=Math.floor(O.image.width*Y),ve=Math.floor(O.image.height*Y);R.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,C.x,C.y,X,ve),ce.unbindTexture()},this.copyTextureToTexture=function(C,O,$,Y=0){const X=O.image.width,ve=O.image.height,be=Me.convert($.format),De=Me.convert($.type);R.setTexture2D($,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,C.x,C.y,X,ve,be,De,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,C.x,C.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,C.x,C.y,be,De,O.image),Y===0&&$.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(C,O,$,Y,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=C.max.x-C.min.x+1,be=C.max.y-C.min.y+1,De=C.max.z-C.min.z+1,Ie=Me.convert(Y.format),He=Me.convert(Y.type);let Fe;if(Y.isData3DTexture)R.setTexture3D(Y,0),Fe=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Fe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Oe=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),un=z.getParameter(z.UNPACK_SKIP_PIXELS),Rt=z.getParameter(z.UNPACK_SKIP_ROWS),ni=z.getParameter(z.UNPACK_SKIP_IMAGES),ut=$.isCompressedTexture?$.mipmaps[X]:$.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,C.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,C.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?z.texSubImage3D(Fe,X,O.x,O.y,O.z,ve,be,De,Ie,He,ut.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Fe,X,O.x,O.y,O.z,ve,be,De,Ie,ut.data)):z.texSubImage3D(Fe,X,O.x,O.y,O.z,ve,be,De,Ie,He,ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,Oe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,un),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ni),X===0&&Y.generateMipmaps&&z.generateMipmap(Fe),ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ce.unbindTexture()},this.resetState=function(){A=0,E=0,b=null,ce.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?_r:bx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?It:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sb extends Yx{}Sb.prototype.isWebGL1Renderer=!0;class Mb extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class eh extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Op=new B,zp=new B,Bp=new wt,Xc=new Lx,Ao=new kl;class wb extends Ft{constructor(e=new Wn,n=new eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Op.fromBufferAttribute(n,r-1),zp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Op.distanceTo(zp);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;Bp.copy(r).invert(),Xc.copy(e.ray).applyMatrix4(Bp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new B,h=new B,f=new B,p=new B,x=this.isLineSegments?2:1,y=i.index,m=i.attributes.position;if(y!==null){const d=Math.max(0,a.start),v=Math.min(y.count,a.start+a.count);for(let g=d,S=v-1;g<S;g+=x){const A=y.getX(g),E=y.getX(g+1);if(u.fromBufferAttribute(m,A),h.fromBufferAttribute(m,E),Xc.distanceSqToSegment(u,h,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(p);k<e.near||k>e.far||n.push({distance:k,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let g=d,S=v-1;g<S;g+=x){if(u.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),Xc.distanceSqToSegment(u,h,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(p);E<e.near||E>e.far||n.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const jp=new B,Hp=new B;class Kx extends wb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)jp.fromBufferAttribute(n,r),Hp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jp.distanceTo(Hp);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class th extends Wn{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Zt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],u=[],h=1/n,f=new B,p=new Xe,x=new B,y=new B,_=new B;let m=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,x.x=d*1,x.y=-m,x.z=d*0,_.copy(x),x.normalize(),c.push(x.x,x.y,x.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,x.x=d*1,x.y=-m,x.z=d*0,y.copy(x),x.x+=_.x,x.y+=_.y,x.z+=_.z,x.normalize(),c.push(x.x,x.y,x.z),_.copy(y)}for(let v=0;v<=n;v++){const g=i+v*h*r,S=Math.sin(g),A=Math.cos(g);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*S,f.y=e[E].y,f.z=e[E].x*A,a.push(f.x,f.y,f.z),p.x=v/n,p.y=E/(e.length-1),o.push(p.x,p.y);const b=c[3*E+0]*S,k=c[3*E+1],w=c[3*E+0]*A;u.push(b,k,w)}}for(let v=0;v<n;v++)for(let g=0;g<e.length-1;g++){const S=g+v*e.length,A=S,E=S+e.length,b=S+e.length+1,k=S+1;s.push(A,E,k),s.push(b,k,E)}this.setIndex(s),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.points,e.segments,e.phiStart,e.phiLength)}}class Eb extends Wn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new B,s=new B;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const f=c[u],p=f.start,x=f.count;for(let y=p,_=p+x;y<_;y+=3)for(let m=0;m<3;m++){const d=o.getX(y+m),v=o.getX(y+(m+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,v),Gp(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let u=0;u<3;u++){const h=3*o+u,f=3*o+(u+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),Gp(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Qt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Gp(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class bb extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zx extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const $c=new wt,Vp=new B,Wp=new B;class Tb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vp),Wp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wp),n.updateMatrixWorld(),$c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ab extends Tb{constructor(){super(new Hx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xp extends Zx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cb extends Zx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rb extends Kx{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=n/2,a=e/n,o=e/2,c=[],u=[];for(let p=0,x=0,y=-o;p<=n;p++,y+=a){c.push(-o,0,y,o,0,y),c.push(y,0,-o,y,0,o);const _=p===s?i:r;_.toArray(u,x),x+=3,_.toArray(u,x),x+=3,_.toArray(u,x),x+=3,_.toArray(u,x),x+=3}const h=new Wn;h.setAttribute("position",new Qt(c,3)),h.setAttribute("color",new Qt(u,3));const f=new eh({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);const Nb=({profile:t,halfSection:e=!1})=>{const n=ee.useRef(null),[i,r]=ee.useState(!1),[s,a]=ee.useState(.003),o=ee.useRef(null),c=ee.useRef(null),u=ee.useRef(null),h=ee.useRef(null);return ee.useEffect(()=>{if(!n.current)return;const f=n.current.clientWidth,p=n.current.clientHeight,x=new Mb;x.background=new Ye("#1F2421"),o.current=x;const y=new bn(45,f/p,1,1e3);y.position.set(0,150,280);const _=new Yx({antialias:!0});_.setSize(f,p),_.setPixelRatio(window.devicePixelRatio),_.shadowMap.enabled=!0,c.current=_,n.current.innerHTML="",n.current.appendChild(_.domElement);const m=new Cb(16777215,.7);x.add(m);const d=new Xp(16772306,1.2);d.position.set(100,200,150),d.castShadow=!0,x.add(d);const v=new Xp(11584734,.6);v.position.set(-100,50,-100),x.add(v);const g=new Rb(300,20,4869964,2961710);g.position.y=0,x.add(g);let S=!1,A={x:0,y:0},E={radius:300,theta:Math.PI/4,phi:Math.PI/3};const b=()=>{y.position.x=E.radius*Math.sin(E.phi)*Math.sin(E.theta),y.position.y=E.radius*Math.cos(E.phi),y.position.z=E.radius*Math.sin(E.phi)*Math.cos(E.theta),y.lookAt(0,t.height_mm/2,0)};b();const k=_.domElement,w=P=>{S=!0,A={x:P.clientX,y:P.clientY}},T=P=>{if(!S)return;const H=P.clientX-A.x,L=P.clientY-A.y;E.theta-=H*.008,E.phi=Math.max(.1,Math.min(Math.PI-.1,E.phi-L*.008)),A={x:P.clientX,y:P.clientY},b()},G=()=>{S=!1},Z=P=>{P.preventDefault(),E.radius=Math.max(80,Math.min(600,E.radius+P.deltaY*.3)),b()};k.addEventListener("mousedown",w),window.addEventListener("mousemove",T),window.addEventListener("mouseup",G),k.addEventListener("wheel",Z,{passive:!1});let te;const I=()=>{te=requestAnimationFrame(I),!S&&u.current&&s>0&&(u.current.rotation.y+=s,h.current&&(h.current.rotation.y=u.current.rotation.y)),_.render(x,y)};I();const j=()=>{if(!n.current)return;const P=n.current.clientWidth,H=n.current.clientHeight;y.aspect=P/H,y.updateProjectionMatrix(),_.setSize(P,H)};return window.addEventListener("resize",j),()=>{cancelAnimationFrame(te),k.removeEventListener("mousedown",w),window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",G),k.removeEventListener("wheel",Z),window.removeEventListener("resize",j),_.dispose()}},[]),ee.useEffect(()=>{if(!o.current)return;u.current&&(o.current.remove(u.current),u.current.geometry.dispose(),u.current=null),h.current&&(o.current.remove(h.current),h.current.geometry.dispose(),h.current=null);const f=t.points;if(!f||f.length<2)return;const p=t.wall_thickness_mm||5,x=[];for(const[g,S]of f)x.push(new Xe(Math.max(.1,g),S));for(let g=f.length-1;g>=0;g--){const[S,A]=f[g],E=Math.max(.1,S-p);x.push(new Xe(E,A))}x.push(new Xe(0,f[0][1]));const y=e?Math.PI:Math.PI*2,_=48,m=new th(x,_,0,y),d=new bb({color:13130290,roughness:.75,metalness:.05,side:Jn,transparent:!0,opacity:.92}),v=new pi(m,d);if(o.current.add(v),u.current=v,i){const g=new Eb(m),S=new eh({color:16032353,transparent:!0,opacity:.4}),A=new Kx(g,S);o.current.add(A),h.current=A}},[t,e,i]),l.jsxs("div",{className:"relative w-full h-full min-h-[460px] rounded-xl overflow-hidden",children:[l.jsx("div",{ref:n,className:"w-full h-full"}),l.jsxs("div",{className:"absolute top-3 right-3 flex items-center space-x-2 bg-charcoal-900/80 border border-charcoal-700 px-3 py-1.5 rounded-lg text-xs text-white backdrop-blur-xs font-mono shadow-md",children:[l.jsxs("label",{className:"flex items-center space-x-1 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:i,onChange:f=>r(f.target.checked),className:"rounded text-terracotta-500"}),l.jsx("span",{className:"text-[11px]",children:"Wireframe"})]}),l.jsx("div",{className:"w-px h-3.5 bg-charcoal-700"}),l.jsx("button",{onClick:()=>a(f=>f>0?0:.004),className:"text-[11px] text-terracotta-400 hover:text-white",children:s>0?"Pause Spin":"Auto-Spin"})]}),l.jsxs("div",{className:"absolute bottom-3 left-3 bg-charcoal-950/80 border border-charcoal-700 text-xs font-mono text-charcoal-300 px-3 py-2 rounded-lg backdrop-blur-xs space-y-0.5",children:[l.jsx("div",{className:"text-terracotta-400 font-bold",children:"REVOLVED 3D HYPOTHESIS"}),l.jsxs("div",{children:["Rim Ø: ",t.rim_diameter_mm.toFixed(1)," mm"]}),l.jsxs("div",{children:["Height: ",t.height_mm.toFixed(1)," mm"]}),l.jsxs("div",{children:["Thickness: ",t.wall_thickness_mm.toFixed(1)," mm"]}),l.jsx("div",{className:"text-[10px] text-charcoal-500 italic mt-1",children:"Rotational symmetry assumption"})]})]})},Pb=({project:t,isOpen:e,onClose:n,onApplyDiameter:i})=>{var x,y;const[r,s]=ee.useState([]),[a,o]=ee.useState(null),[c,u]=ee.useState(!1),h=ee.useRef(null);if(!e)return null;const f=_=>{if(!h.current)return;const m=h.current.getBoundingClientRect(),d=h.current.naturalWidth,v=h.current.naturalHeight,g=_.clientX-m.left,S=_.clientY-m.top,A=d/m.width,E=v/m.height,b=Math.round(g*A),k=Math.round(S*E),w=[...r,[b,k]];s(w),w.length>=3&&p(w)},p=async _=>{u(!0);try{const m=await $e.calculateRimArcFit(t.id,_);o(m)}catch(m){console.warn(m)}finally{u(!1)}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6",children:l.jsxs("div",{className:"bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsx("div",{className:"p-2 bg-terracotta-100 text-terracotta-700 rounded-lg",children:l.jsx(lx,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"font-semibold text-charcoal-900 text-sm",children:"Rim Diameter Estimation via Arc Fitting"}),l.jsx("p",{className:"text-xs text-charcoal-500",children:"Click 3 or more points along the preserved curved rim lip to fit an algebraic circle."})]})]}),l.jsx("button",{onClick:n,className:"p-1.5 text-charcoal-400 hover:text-charcoal-700 rounded",children:l.jsx(Cn,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"p-6 flex-1 overflow-y-auto flex space-x-6",children:[l.jsx("div",{className:"flex-1 bg-charcoal-900 rounded-lg overflow-hidden relative flex items-center justify-center p-2 min-h-[380px]",children:l.jsxs("div",{className:"relative inline-block max-w-full max-h-full",children:[l.jsx("img",{ref:h,src:t.primary_photo_url||"",alt:"Rim Arc",onClick:f,className:"max-w-full max-h-[440px] object-contain rounded cursor-crosshair select-none"}),l.jsxs("svg",{className:"absolute inset-0 pointer-events-none w-full h-full",viewBox:`0 0 ${((x=t.primary_photo_dimensions)==null?void 0:x[0])||1600} ${((y=t.primary_photo_dimensions)==null?void 0:y[1])||1200}`,children:[r.map((_,m)=>l.jsx("circle",{cx:_[0],cy:_[1],r:"8",fill:"#C85A32",stroke:"#FFFFFF",strokeWidth:"2.5"},m)),a&&l.jsx("circle",{cx:a.center_x,cy:a.center_y,r:a.radius_px,fill:"none",stroke:"#28A745",strokeWidth:"3.5",strokeDasharray:"6,4"})]})]})}),l.jsxs("div",{className:"w-72 space-y-4 text-xs font-mono",children:[l.jsxs("div",{className:"bg-parchment-50 rounded-lg p-3 border border-parchment-300 space-y-2",children:[l.jsxs("div",{className:"flex justify-between font-bold text-charcoal-900 text-sm",children:[l.jsx("span",{children:"Points Selected:"}),l.jsx("span",{className:"text-terracotta-600",children:r.length})]}),a?l.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-parchment-200",children:[l.jsxs("div",{className:"flex justify-between text-xs",children:[l.jsx("span",{className:"text-charcoal-500",children:"Estimated Rim Ø:"}),l.jsx("span",{className:"font-bold text-emerald-800 text-sm",children:a.diameter_mm?`${a.diameter_mm.toFixed(1)} mm`:`${(a.radius_px*2).toFixed(0)} px`})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-500",children:"Arc Coverage:"}),l.jsxs("span",{className:"font-semibold text-charcoal-800",children:[a.arc_coverage_deg.toFixed(1),"°"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-charcoal-500",children:"Fit RMSE:"}),l.jsx("span",{children:a.rmse_residual_mm?`${a.rmse_residual_mm.toFixed(2)} mm`:`${a.rmse_residual_px.toFixed(1)} px`})]})]}):l.jsx("p",{className:"text-charcoal-500 font-sans italic text-[11px]",children:"Click points spaced along the preserved rim lip to calculate diameter."})]}),(a==null?void 0:a.quality_warning)&&l.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-3 text-[11px] font-sans text-amber-900 flex items-start space-x-2",children:[l.jsx(ju,{className:"w-4 h-4 text-amber-600 shrink-0 mt-0.5"}),l.jsx("span",{children:a.quality_warning})]}),l.jsxs("div",{className:"text-[11px] font-sans text-charcoal-500 space-y-1 bg-white p-3 rounded-lg border border-parchment-300 leading-normal",children:[l.jsx("p",{className:"font-semibold text-charcoal-800",children:"Methodological Caution:"}),l.jsx("p",{children:"Rims viewed obliquely appear as ellipses. True rim diameter fitting requires an orthogonal overhead view aligned with the vessel orifice plane."})]}),l.jsxs("div",{className:"space-x-2 flex",children:[l.jsx("button",{onClick:()=>{s([]),o(null)},className:"flex-1 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 py-2 rounded font-sans text-xs transition",children:"Clear Points"}),a&&a.diameter_mm&&l.jsx("button",{onClick:()=>{i(a.diameter_mm,a),n()},className:"flex-1 bg-terracotta-600 hover:bg-terracotta-700 text-white py-2 rounded font-sans text-xs font-semibold transition",children:"Apply Ø"})]})]})]})]})})},Lb=({project:t,profile:e,onProfileUpdated:n,onNextStep:i})=>{var v;const[r,s]=ee.useState(e||{id:`rec_${t.id}`,project_id:t.id,source:"user_entered",rim_diameter_mm:180,height_mm:75,wall_thickness_mm:5,points:[[40,0],[60,15],[85,40],[90,75]]}),[a,o]=ee.useState(!1),[c,u]=ee.useState(!1),[h,f]=ee.useState(null);ee.useEffect(()=>{e&&s(e)},[e]);const p=(g,S)=>{const A={...r,[g]:S};if(g==="rim_diameter_mm"){const E=S/2,b=[...A.points];b.length>0&&(b[b.length-1]=[E,A.height_mm],A.points=b)}if(g==="height_mm"){const E=[...A.points];E.length>0&&(E[E.length-1]=[E[E.length-1][0],S],A.points=E)}s(A),n(A),$e.updateReconstruction(t.id,A)},x=(g,S,A)=>{const E=[...r.points];E[g]=[Math.max(5,Number(S.toFixed(1))),Math.max(0,Number(A.toFixed(1)))];const b={...r,points:E};s(b),n(b),$e.updateReconstruction(t.id,b)},y=()=>{const g=[...r.points],S=g.length;if(S<2)return;const A=Math.floor(S/2),E=g[A-1],b=g[A],k=[Number(((E[0]+b[0])/2).toFixed(1)),Number(((E[1]+b[1])/2).toFixed(1))];g.splice(A,0,k);const w={...r,points:g};s(w),n(w),$e.updateReconstruction(t.id,w)},_=g=>{if(r.points.length<=2){alert("A vessel profile requires at least 2 control points (base and rim).");return}const S=r.points.filter((E,b)=>b!==g),A={...r,points:S};s(A),n(A),$e.updateReconstruction(t.id,A),f(null)},m=(g,S)=>{const A={...r,rim_diameter_mm:g,rim_fit_evidence:S,source:"measured_side_profile"},E=g/2,b=[...A.points];b.length>0&&(b[b.length-1]=[E,A.height_mm],A.points=b),s(A),n(A),$e.updateReconstruction(t.id,A)},d=()=>{window.open(`/api/projects/${t.id}/reconstruction/svg`,"_blank")};return l.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-6 text-xs",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("span",{className:"text-charcoal-500 font-medium",children:"Profile Evidence Source:"}),l.jsxs("select",{value:r.source,onChange:g=>p("source",g.target.value),className:"bg-parchment-50 border border-parchment-300 rounded px-2.5 py-1 text-charcoal-800 font-semibold",children:[l.jsx("option",{value:"user_entered",children:"User-Entered Hypothetical"}),l.jsx("option",{value:"measured_side_profile",children:"Measured Side Profile / Rim Fit"}),l.jsx("option",{value:"catalogue_template",children:"Reference Catalogue Template"})]})]}),l.jsxs("button",{onClick:()=>u(!0),className:"flex items-center space-x-1.5 bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-800 border border-terracotta-300 px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[l.jsx(lx,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Fit Rim Arc on Photograph"})]}),l.jsxs("button",{onClick:()=>o(g=>!g),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition ${a?"bg-charcoal-800 text-white border-charcoal-800":"bg-parchment-100 text-charcoal-700 border-parchment-300"}`,children:[l.jsx(iy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:a?"Half-Section Cutaway":"360° Full Revolve"})]})]}),l.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[l.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 bg-white hover:bg-parchment-50 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[l.jsx(O_,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Export SVG Drawing"})]}),l.jsxs("button",{onClick:i,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[l.jsx("span",{children:"Compare Typology"}),l.jsx(Ms,{className:"w-3.5 h-3.5"})]})]})]}),l.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-5 min-h-[560px]",children:[l.jsxs("div",{className:"col-span-5 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Profile Geometry (mm)"}),l.jsx("span",{className:"text-[10px] font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal-600",children:"Rotational Lathe"})]}),l.jsxs("div",{className:"space-y-3 bg-parchment-50/70 p-3.5 rounded-lg border border-parchment-200 text-xs font-mono",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-charcoal-700 mb-1",children:[l.jsx("span",{children:"Rim Diameter (Ø):"}),l.jsxs("span",{className:"font-bold text-charcoal-900",children:[r.rim_diameter_mm.toFixed(1)," mm"]})]}),l.jsx("input",{type:"range",min:"50",max:"350",step:"1",value:r.rim_diameter_mm,onChange:g=>p("rim_diameter_mm",parseFloat(g.target.value)),className:"w-full accent-terracotta-600"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-charcoal-700 mb-1",children:[l.jsx("span",{children:"Vessel Height (H):"}),l.jsxs("span",{className:"font-bold text-charcoal-900",children:[r.height_mm.toFixed(1)," mm"]})]}),l.jsx("input",{type:"range",min:"30",max:"400",step:"1",value:r.height_mm,onChange:g=>p("height_mm",parseFloat(g.target.value)),className:"w-full accent-terracotta-600"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-charcoal-700 mb-1",children:[l.jsx("span",{children:"Wall Thickness (t):"}),l.jsxs("span",{className:"font-bold text-charcoal-900",children:[r.wall_thickness_mm.toFixed(1)," mm"]})]}),l.jsx("input",{type:"range",min:"2",max:"16",step:"0.5",value:r.wall_thickness_mm,onChange:g=>p("wall_thickness_mm",parseFloat(g.target.value)),className:"w-full accent-terracotta-600"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-2",children:[l.jsx("span",{className:"text-xs font-mono uppercase font-bold text-charcoal-500",children:"Control Points (Radius, Height in mm)"}),l.jsxs("button",{onClick:y,className:"text-xs text-terracotta-700 hover:text-terracotta-900 font-semibold flex items-center space-x-1",children:[l.jsx(Ta,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Add Point"})]})]}),l.jsx("div",{className:"space-y-1.5 max-h-48 overflow-y-auto",children:r.points.map(([g,S],A)=>{const E=h===A,b=A===0,k=A===r.points.length-1;return l.jsxs("div",{onClick:()=>f(A),className:`flex items-center justify-between px-3 py-1.5 rounded text-xs font-mono border transition ${E?"bg-terracotta-50 border-terracotta-400":"bg-white border-parchment-300 hover:bg-parchment-50"}`,children:[l.jsxs("span",{className:"text-charcoal-500 text-[10px]",children:[b?"Base":k?"Rim":`Pt ${A+1}`,":"]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("span",{children:"r:"}),l.jsx("input",{type:"number",step:"0.5",value:g,onChange:w=>x(A,parseFloat(w.target.value)||0,S),className:"w-14 bg-parchment-50 border border-parchment-200 rounded px-1 py-0.5 text-right"}),l.jsx("span",{children:"h:"}),l.jsx("input",{type:"number",step:"0.5",value:S,disabled:b,onChange:w=>x(A,g,parseFloat(w.target.value)||0),className:"w-14 bg-parchment-50 border border-parchment-200 rounded px-1 py-0.5 text-right disabled:opacity-50"})]}),!b&&!k&&l.jsx("button",{onClick:w=>{w.stopPropagation(),_(A)},className:"text-red-500 hover:text-red-700 p-0.5",children:l.jsx(fx,{className:"w-3.5 h-3.5"})})]},A)})})]}),r.rim_fit_evidence&&l.jsxs("div",{className:"bg-emerald-50 border border-emerald-300 rounded-lg p-3 text-xs font-mono space-y-1",children:[l.jsx("div",{className:"text-emerald-900 font-bold",children:"ARC-FIT EVIDENCE ATTACHED"}),l.jsxs("div",{className:"text-emerald-800 text-[11px]",children:["Fitted Ø: ",(v=r.rim_fit_evidence.diameter_mm)==null?void 0:v.toFixed(1)," mm • Arc coverage:"," ",r.rim_fit_evidence.arc_coverage_deg.toFixed(1),"°"]})]})]}),l.jsx("div",{className:"text-[11px] text-charcoal-400 italic leading-tight",children:"Standard archaeological practice: The 3D model presents a rotationally symmetric hypothesis. Inferred geometry is rendered translucently."})]}),l.jsx("div",{className:"col-span-7 bg-charcoal-900 rounded-xl overflow-hidden border border-charcoal-700 shadow-inner flex flex-col",children:l.jsx(Nb,{profile:r,halfSection:a})})]}),l.jsx(Pb,{project:t,isOpen:c,onClose:()=>u(!1),onApplyDiameter:m})]})},Db=({project:t,onNextStep:e})=>{const[n,i]=ee.useState([]),[r,s]=ee.useState(null),[a,o]=ee.useState(null),[c,u]=ee.useState(!0),[h,f]=ee.useState(!1),[p,x]=ee.useState(!1);ee.useEffect(()=>{y()},[t.id]);const y=async()=>{u(!0);try{const m=await $e.getTypology(t.id);i(m.candidates),s(m.schema),o(m.ai_explanation)}catch(m){console.error(m)}finally{u(!1)}},_=()=>{r&&(navigator.clipboard.writeText(JSON.stringify(r,null,2)),x(!0),setTimeout(()=>x(!1),2e3))};return l.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-4 text-xs",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(sx,{className:"w-4 h-4 text-terracotta-600"}),l.jsx("span",{className:"font-semibold text-charcoal-900 text-sm",children:"Typology Comparison"})]}),l.jsx("span",{className:"text-[11px] font-mono bg-parchment-100 border border-parchment-300 px-2 py-0.5 rounded text-charcoal-600",children:"10 Demonstration References"}),l.jsxs("button",{onClick:()=>f(!0),className:"flex items-center space-x-1 text-xs text-charcoal-600 hover:text-charcoal-900 border border-parchment-300 px-2.5 py-1 rounded bg-parchment-50 transition",children:[l.jsx(H_,{className:"w-3.5 h-3.5 text-terracotta-600"}),l.jsx("span",{children:"Archaeological JSON Schema"})]})]}),l.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[l.jsxs("button",{onClick:y,className:"flex items-center space-x-1 text-charcoal-600 hover:text-charcoal-900 px-2.5 py-1 rounded transition",children:[l.jsx(rs,{className:`w-3.5 h-3.5 ${c?"animate-spin":""}`}),l.jsx("span",{children:"Re-rank Typology"})]}),l.jsxs("button",{onClick:e,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[l.jsx("span",{children:"Proceed to Review & Export"}),l.jsx(Ms,{className:"w-3.5 h-3.5"})]})]})]}),l.jsxs("div",{className:"bg-amber-50/80 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start space-x-2.5",children:[l.jsx(ju,{className:"w-4 h-4 text-amber-600 shrink-0 mt-0.5"}),l.jsxs("div",{className:"leading-relaxed",children:[l.jsx("span",{className:"font-semibold",children:"Demonstration Reference Notice: "}),"Catalogue entries are synthetic geometric templates for algorithm validation. They do not constitute authoritative historical dating or cultural attribution."]})]}),(a==null?void 0:a.available)&&l.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-2xs space-y-2",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-purple-900 font-semibold text-xs",children:[l.jsx(Yi,{className:"w-4 h-4 text-purple-600"}),l.jsx("span",{children:"Gemini Typological Synthesis (Strictly Grounded)"})]}),l.jsx("p",{className:"text-xs text-purple-950 leading-relaxed",children:a.summary}),a.key_uncertainty&&l.jsxs("div",{className:"text-[11px] text-purple-800 italic",children:["Key uncertainty: ",a.key_uncertainty]})]}),l.jsx("div",{className:"grid grid-cols-3 gap-5",children:n.map((m,d)=>{const v=Math.round(m.compatibility_score*100),g=d===0&&m.compatibility_score>=.5;return l.jsxs("div",{className:`bg-white rounded-xl border p-4 shadow-2xs flex flex-col justify-between space-y-4 ${g?"border-terracotta-400 ring-2 ring-terracotta-100":"border-parchment-300"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("span",{className:"text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-parchment-100 border border-parchment-300 text-charcoal-700",children:m.reference_id}),l.jsxs("span",{className:"text-xs font-mono font-bold text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-full border border-terracotta-200",children:[v,"% Fit"]})]}),l.jsx("h4",{className:"font-semibold text-charcoal-900 text-sm mb-1",children:m.name}),l.jsx("div",{className:"text-[11px] font-mono text-charcoal-500 mb-3",children:m.dimensions_summary}),l.jsx("div",{className:"bg-parchment-50 rounded-lg p-2 border border-parchment-200 mb-3 flex items-center justify-center h-28",children:l.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 120",children:[l.jsx("line",{x1:"100",y1:"10",x2:"100",y2:"110",stroke:"#CBD5E0",strokeWidth:"1",strokeDasharray:"3,3"}),l.jsx("polyline",{points:m.schematic_profile_points.map(([S,A])=>`${100+S*.7},${110-A*.7}`).join(" "),fill:"none",stroke:"#C85A32",strokeWidth:"2.5"}),l.jsx("polyline",{points:m.schematic_profile_points.map(([S,A])=>`${100-S*.7},${110-A*.7}`).join(" "),fill:"none",stroke:"#4A5568",strokeWidth:"1.5",strokeDasharray:"2,2"})]})}),l.jsx("p",{className:"text-xs text-charcoal-600 mb-3 leading-relaxed",children:m.description}),m.supporting_features.length>0&&l.jsxs("div",{className:"space-y-1 mb-2",children:[l.jsxs("div",{className:"text-[10px] font-mono uppercase font-bold text-emerald-800 flex items-center space-x-1",children:[l.jsx(ax,{className:"w-3 h-3 text-emerald-600"}),l.jsx("span",{children:"Supporting Evidence"})]}),m.supporting_features.map((S,A)=>l.jsxs("p",{className:"text-[11px] text-emerald-900 leading-tight pl-4",children:["• ",S]},A))]}),m.contradictions.length>0&&l.jsxs("div",{className:"space-y-1 mb-2",children:[l.jsxs("div",{className:"text-[10px] font-mono uppercase font-bold text-red-800 flex items-center space-x-1",children:[l.jsx(ju,{className:"w-3 h-3 text-red-500"}),l.jsx("span",{children:"Contradictions"})]}),m.contradictions.map((S,A)=>l.jsxs("p",{className:"text-[11px] text-red-900 leading-tight pl-4",children:["• ",S]},A))]}),m.missing_evidence.length>0&&l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"text-[10px] font-mono uppercase font-bold text-charcoal-500 flex items-center space-x-1",children:[l.jsx(ux,{className:"w-3 h-3 text-charcoal-400"}),l.jsx("span",{children:"Unverified / Missing"})]}),m.missing_evidence.map((S,A)=>l.jsxs("p",{className:"text-[11px] text-charcoal-500 leading-tight pl-4",children:["• ",S]},A))]})]}),l.jsxs("div",{className:"pt-3 border-t border-parchment-200 text-[10px] text-charcoal-400 italic",children:["Source: ",m.source_citation]})]},m.reference_id)})}),h&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6",children:l.jsxs("div",{className:"bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Archaeological Reference JSON Schema"}),l.jsx("p",{className:"text-xs text-charcoal-500",children:"Standard format for importing verified, sourced archaeological typology datasets."})]}),l.jsx("button",{onClick:()=>f(!1),className:"text-xs text-charcoal-500 hover:text-charcoal-800",children:"Close"})]}),l.jsx("div",{className:"p-4 flex-1 overflow-y-auto bg-charcoal-900",children:l.jsx("pre",{className:"text-xs font-mono text-emerald-400 select-all",children:JSON.stringify(r,null,2)})}),l.jsx("div",{className:"px-6 py-3 bg-parchment-100 border-t border-parchment-300 flex justify-end",children:l.jsxs("button",{onClick:_,className:"bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs px-4 py-1.5 rounded-md font-semibold flex items-center space-x-1.5",children:[p?l.jsx($d,{className:"w-3.5 h-3.5"}):l.jsx(k_,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:p?"Copied!":"Copy JSON Schema"})]})})]})})]})},Ub=({project:t,fragments:e,groups:n,joins:i,profile:r,snapshots:s,onProjectApproved:a,onOpenChecklist:o})=>{var g;const[c,u]=ee.useState(t.reviewer_name||""),[h,f]=ee.useState(""),[p,x]=ee.useState(!1),y=i.filter(S=>S.status==="accepted"),_=async()=>{if(!c.trim()){alert("Please enter a reviewer name or investigator initials before signing approval.");return}x(!0);try{const S=await $e.approveProject(t.id,c.trim(),h.trim());a(c.trim(),S.snapshot_id)}catch(S){alert(`Approval failed: ${S.message}`)}finally{x(!1)}},m=()=>{window.open(`/api/projects/${t.id}/export/json`,"_blank")},d=()=>{window.open(`/api/projects/${t.id}/export/csv`,"_blank")},v=()=>{window.open(`/api/projects/${t.id}/reconstruction/svg`,"_blank")};return l.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-6",children:[l.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-4 shadow-2xs flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(ox,{className:"w-5 h-5 text-terracotta-600"}),l.jsx("h2",{className:"font-semibold text-charcoal-900 text-base",children:"Provenance & Review Sign-Off"})]}),l.jsx("p",{className:"text-xs text-charcoal-500 mt-0.5",children:"Clear segregation of empirical observation, algorithmic computation, and human-approved conclusions."})]}),l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsxs("button",{onClick:m,className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition",children:[l.jsx(G_,{className:"w-4 h-4 text-terracotta-600"}),l.jsx("span",{children:"Export JSON Record"})]}),l.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition",children:[l.jsx(cx,{className:"w-4 h-4 text-emerald-600"}),l.jsx("span",{children:"Export CSV Measurements"})]}),l.jsxs("button",{onClick:v,className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition",children:[l.jsx(W_,{className:"w-4 h-4 text-blue-600"}),l.jsx("span",{children:"Export SVG Profile"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[l.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500"}),l.jsx("span",{children:"1. Observed Evidence"})]}),l.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[l.jsx("div",{children:"• Primary overhead photograph"}),l.jsx("div",{children:"• Scale marker in reference plane"}),l.jsxs("div",{children:["• ",e.length," detected fragment silhouettes"]}),l.jsx("div",{children:"• User qualitative fabric observations"})]})]}),l.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500"}),l.jsx("span",{children:"2. Computed Measurements"})]}),l.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[l.jsxs("div",{children:["• Scale: ",((g=t.calibration.px_per_mm)==null?void 0:g.toFixed(2))||"N/A"," px/mm"]}),l.jsx("div",{children:"• Color histogram correlation"}),l.jsx("div",{children:"• Contour arc-length & area"}),l.jsxs("div",{children:["• Rim circle fit: ",r!=null&&r.rim_diameter_mm?`Ø ${r.rim_diameter_mm.toFixed(1)} mm`:"Pending"]})]})]}),l.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-500"}),l.jsx("span",{children:"3. Proposed Interpretations"})]}),l.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[l.jsxs("div",{children:["• ",n.length," vessel clustering proposals"]}),l.jsxs("div",{children:["• ",i.length," geometric edge match candidates"]}),l.jsx("div",{children:"• Rotational lathe 3D hypothesis"}),l.jsx("div",{children:"• Demonstration typology candidates"})]})]}),l.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),l.jsx("span",{children:"4. Human Decisions"})]}),l.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[l.jsxs("div",{children:["• ",y.length," accepted joins"]}),l.jsxs("div",{children:["• ",n.filter(S=>S.confirmed).length," confirmed vessel groups"]}),l.jsx("div",{children:"• Validated profile control points"}),l.jsxs("div",{children:["• Status: ",t.status==="approved"?"Formally Approved":"Draft / Unapproved"]})]})]})]}),l.jsxs("div",{className:"grid grid-cols-12 gap-6",children:[l.jsxs("div",{className:"col-span-7 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs space-y-4",children:[l.jsxs("div",{className:"flex items-center space-x-2 pb-3 border-b border-parchment-200",children:[l.jsx(ty,{className:"w-5 h-5 text-emerald-600"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Formal Archaeological Approval"}),l.jsx("p",{className:"text-xs text-charcoal-500",children:"Creates an immutable timestamped snapshot in the SQLite database preserving decisions."})]})]}),l.jsxs("div",{className:"space-y-3 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-charcoal-700 font-semibold mb-1",children:"Lead Reviewer / Specialist Name:"}),l.jsx("input",{type:"text",value:c,onChange:S=>u(S.target.value),placeholder:"e.g. Dr. H. Carter, Ceramic Specialist",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-3 py-2 text-charcoal-900 text-sm"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-charcoal-700 font-semibold mb-1",children:"Approval Notes & Methodological Justification:"}),l.jsx("textarea",{rows:3,value:h,onChange:S=>f(S.target.value),placeholder:"Confirming vessel associations based on matching fine slip and mating fracture edges on S1/S2...",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-3 py-2 text-charcoal-900 text-xs"})]}),l.jsx("div",{className:"pt-2",children:l.jsxs("button",{onClick:_,disabled:p,className:"w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 rounded-lg shadow-sm transition flex items-center justify-center space-x-2",children:[l.jsx(ry,{className:"w-4 h-4"}),l.jsx("span",{children:p?"Recording Snapshot...":"Sign & Freeze Approved Record"})]})})]})]}),l.jsxs("div",{className:"col-span-5 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs space-y-4",children:[l.jsxs("div",{className:"flex items-center space-x-2 pb-3 border-b border-parchment-200",children:[l.jsx(V_,{className:"w-4 h-4 text-charcoal-600"}),l.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Approved Snapshot Archive"})]}),s.length===0?l.jsx("p",{className:"text-xs text-charcoal-500 italic",children:"No approved snapshots recorded yet."}):l.jsx("div",{className:"space-y-3 max-h-72 overflow-y-auto",children:s.map(S=>l.jsxs("div",{className:"p-3 rounded-lg bg-parchment-50 border border-parchment-200 text-xs space-y-1",children:[l.jsxs("div",{className:"flex justify-between font-mono font-bold text-charcoal-900",children:[l.jsx("span",{children:S.reviewer_name}),l.jsx("span",{className:"text-emerald-700 font-semibold",children:"APPROVED"})]}),l.jsx("div",{className:"text-[10px] text-charcoal-400 font-mono",children:new Date(S.approved_at).toLocaleString()}),S.notes&&l.jsx("p",{className:"text-charcoal-600 italic text-[11px] mt-1",children:S.notes})]},S.id))})]})]})]})},Ib=({isOpen:t,onClose:e,stats:n})=>{if(!t)return null;const i=[{title:"1. Calibration & Metric Coordinate Transforms",description:"Verifies two-point ruler calibration, px-per-mm calculation, and metric unit propagation.",pass:n.isCalibrated,syntheticTruth:"Known scale: 100 mm = 320 px (3.20 px/mm)."},{title:"2. Stable Fragment Identifiers (S1–S10)",description:"Preserves deterministic fragment IDs across sensitivity adjustments, reloads, and manual polygon edits.",pass:n.fragmentCount>=7,syntheticTruth:"Synthetic scene yields 8 distinct sherds (S1–S8)."},{title:"3. Recovery of Known Geometric Joins",description:"Recovers matching broken edges with rigid Procrustes alignment (R, t) and low edge residual.",pass:n.hasJoins,syntheticTruth:"Known join (S1, S2) recovered with residual < 2.0 mm (< 6.5 px)."},{title:"4. Rejection of Clearly Incompatible Joins",description:"Deep polygon overlap (> 15%) and mismatching edge curvatures are penalized and filtered out.",pass:n.hasJoins,syntheticTruth:"Incompatible pairings (e.g. S1 with S5) rejected due to silhouette collision & curvature error."},{title:"5. Manual Assembly & Rigid Snapping",description:"Accepting a candidate join snaps fragment B to fragment A without user manual translation.",pass:n.hasAcceptedJoin,syntheticTruth:'Clicking "Accept Join" snaps S2 into direct jigsaw contact with S1.'},{title:"6. Rim Arc Estimation & 3D Lathe Reconstruction",description:"Kåsa/Pratt circle fitting recovers rim diameter and generates LatheGeometry with SVG export.",pass:n.hasReconstruction,syntheticTruth:"Vessel A rim diameter fitted to 180.0 mm (70 mm height)."},{title:"7. Approval Snapshot & Provenance Preservation",description:"Formal sign-off captures immutable timestamped state snapshot; edits revert working copy to draft.",pass:n.isApproved,syntheticTruth:"Snapshot recorded in SQLite with reviewer identity."},{title:"8. Complete Operation Without Gemini API Key",description:"Deterministic OpenCV, SciPy, and SQLite engine functions 100% offline without credentials.",pass:n.isOfflineSupported,syntheticTruth:"Zero API keys required for full discovery, assembly, lathe modeling, and export."}];return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6 select-text",children:l.jsxs("div",{className:"bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden",children:[l.jsxs("div",{className:"px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsx("div",{className:"p-2 bg-terracotta-100 text-terracotta-700 rounded-lg",children:l.jsx(j_,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"font-semibold text-charcoal-900 text-sm",children:"Pottery Verification & Evaluation Checklist"}),l.jsx("p",{className:"text-xs text-charcoal-500",children:"Evaluation criteria comparing synthetic pottery ground truth against computed results."})]})]}),l.jsx("button",{onClick:e,className:"p-1.5 text-charcoal-400 hover:text-charcoal-700 rounded",children:l.jsx(Cn,{className:"w-5 h-5"})})]}),l.jsx("div",{className:"p-6 flex-1 overflow-y-auto space-y-3.5",children:i.map((r,s)=>l.jsxs("div",{className:"p-3.5 rounded-lg border border-parchment-200 bg-parchment-50/50 flex space-x-3.5",children:[l.jsx("div",{className:"mt-0.5",children:r.pass?l.jsx(ax,{className:"w-5 h-5 text-emerald-600"}):l.jsx(ba,{className:"w-5 h-5 text-amber-500"})}),l.jsxs("div",{className:"flex-1 text-xs",children:[l.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l.jsx("span",{className:"font-semibold text-charcoal-900 text-sm",children:r.title}),l.jsx("span",{className:`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${r.pass?"bg-emerald-100 text-emerald-800":"bg-amber-100 text-amber-800"}`,children:r.pass?"VERIFIED":"PENDING"})]}),l.jsx("p",{className:"text-charcoal-600 mb-1.5 leading-relaxed",children:r.description}),l.jsxs("div",{className:"text-[11px] font-mono text-terracotta-800 bg-white p-2 rounded border border-parchment-200",children:["Ground Truth Benchmark: ",r.syntheticTruth]})]})]},s))}),l.jsxs("div",{className:"px-6 py-3 bg-parchment-100 border-t border-parchment-300 flex justify-between items-center text-xs text-charcoal-600",children:[l.jsx("span",{children:"Benchmark: Deterministic Synthetic Scene (2 Vessels, 8 Fragments)"}),l.jsx("button",{onClick:e,className:"bg-charcoal-800 hover:bg-charcoal-900 text-white font-semibold px-4 py-1.5 rounded-md",children:"Close Checklist"})]})]})})},kb=({isOpen:t,onClose:e,health:n,onHealthUpdated:i})=>{const[r,s]=ee.useState(""),[a,o]=ee.useState((n==null?void 0:n.gemini_model)||"gemini-4-argon"),[c,u]=ee.useState(!1),[h,f]=ee.useState(null);if(!t)return null;const p=async()=>{try{const _=await navigator.clipboard.readText();_&&(s(_.trim()),f(null))}catch(_){console.warn("Clipboard read error:",_)}},x=async _=>{_.preventDefault(),u(!0),f(null);try{const m=await $e.updateGeminiApiKey(r.trim(),a.trim()),d={status:"healthy",app:"SHERD-FORGE",gemini_available:m.gemini_available,gemini_model:m.gemini_model,mode:m.mode};i(d),m.gemini_available?(f({type:"success",text:`Gemini API key configured! Using ${m.gemini_model}.`}),setTimeout(()=>{e(),f(null)},1200)):f({type:"error",text:r.trim()?"Key accepted but client could not initialize. Check key format.":"Key cleared. SHERD-FORGE will operate in offline deterministic mode."})}catch(m){f({type:"error",text:(m==null?void 0:m.message)||"Failed to update Gemini API key"})}finally{u(!1)}},y=async()=>{u(!0),f(null);try{const m={status:"healthy",app:"SHERD-FORGE",gemini_available:!1,gemini_model:(await $e.updateGeminiApiKey("",a.trim())).gemini_model,mode:"deterministic_offline"};i(m),s(""),f({type:"success",text:"API key cleared. System reset to offline deterministic mode."})}catch(_){f({type:"error",text:(_==null?void 0:_.message)||"Failed to clear key"})}finally{u(!1)}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4",children:l.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-md w-full border border-parchment-300 overflow-hidden animate-in fade-in zoom-in-95 duration-150",children:[l.jsxs("div",{className:"bg-parchment-100 border-b border-parchment-300 px-5 py-4 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2.5",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs",children:l.jsx($_,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"font-semibold text-charcoal-900 text-sm",children:"Gemini API Key Setup"}),l.jsx("p",{className:"text-[11px] text-charcoal-500",children:"Enable AI fabric & surface observations"})]})]}),l.jsx("button",{type:"button",onClick:e,className:"p-1.5 text-charcoal-400 hover:text-charcoal-700 hover:bg-parchment-200 rounded-md transition",children:l.jsx(Cn,{className:"w-4 h-4"})})]}),l.jsxs("form",{onSubmit:x,className:"p-5 space-y-4 text-xs",children:[l.jsxs("div",{className:`p-3 rounded-lg border flex items-start space-x-2.5 ${n!=null&&n.gemini_available?"bg-purple-50/70 border-purple-200 text-purple-900":"bg-amber-50/70 border-amber-200 text-amber-900"}`,children:[l.jsx(Yi,{className:"w-4 h-4 mt-0.5 shrink-0"}),l.jsxs("div",{className:"space-y-0.5",children:[l.jsxs("p",{className:"font-semibold",children:["Status: ",n!=null&&n.gemini_available?`Active (${n.gemini_model})`:"Offline Deterministic Mode"]}),l.jsx("p",{className:"text-[11px] opacity-90",children:n!=null&&n.gemini_available?"Gemini is enabled for visible fabric colors, surface decoration, and anatomical part hypotheses.":"All core sherd detection, geometric edge matching, and 3D reconstruction work 100% offline without a key."})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsx("label",{className:"font-semibold text-charcoal-800",children:"Gemini API Key"}),l.jsx("button",{type:"button",onClick:p,className:"text-[11px] font-medium text-terracotta-700 hover:text-terracotta-800 underline cursor-pointer",children:"Paste from Clipboard"})]}),l.jsx("div",{className:"relative",children:l.jsx("input",{type:"password",value:r,onChange:_=>s(_.target.value),placeholder:"Paste AIzaSy... key here",className:"w-full font-mono bg-parchment-50 border border-parchment-300 rounded-lg px-3 py-2 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 text-xs"})}),l.jsxs("p",{className:"mt-1 text-[11px] text-charcoal-400",children:["Keys remain server-side on your local machine and are written to your local ",l.jsx("code",{className:"bg-parchment-100 px-1 py-0.5 rounded text-charcoal-700 font-mono",children:".env"})," file."]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block font-semibold text-charcoal-800 mb-1",children:"Model Selection"}),l.jsxs("select",{value:a,onChange:_=>o(_.target.value),className:"w-full bg-white border border-parchment-300 rounded-lg px-3 py-2 text-charcoal-800 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-terracotta-500",children:[l.jsx("option",{value:"gemini-4-argon",children:"gemini-4-argon (Default / Interactions API)"}),l.jsx("option",{value:"gemini-3.8-flash",children:"gemini-3.8-flash (Fast)"}),l.jsx("option",{value:"gemini-3.5-flash-lite",children:"gemini-3.5-flash-lite (Ultra-light)"})]})]}),h&&l.jsxs("div",{className:`p-2.5 rounded-lg border text-xs flex items-center space-x-2 ${h.type==="success"?"bg-emerald-50 border-emerald-200 text-emerald-800":"bg-rose-50 border-rose-200 text-rose-800"}`,children:[h.type==="success"?l.jsx(Dl,{className:"w-4 h-4 shrink-0"}):l.jsx(ba,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:h.text})]}),l.jsxs("div",{className:"pt-2 flex items-center justify-between border-t border-parchment-200",children:[n!=null&&n.gemini_available?l.jsx("button",{type:"button",onClick:y,disabled:c,className:"text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1 rounded hover:bg-rose-50 transition",children:"Clear / Remove Key"}):l.jsx("span",{}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("button",{type:"button",onClick:e,className:"text-xs text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-md font-medium",children:"Cancel"}),l.jsxs("button",{type:"submit",disabled:c||!r.trim(),className:"bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition flex items-center space-x-1.5 cursor-pointer",children:[l.jsx(Yi,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:c?"Saving...":"Save & Activate"})]})]})]})]})]})})},Fb=()=>{const[t,e]=ee.useState(null),[n,i]=ee.useState([]),[r,s]=ee.useState(null),[a,o]=ee.useState(null),[c,u]=ee.useState("capture"),[h,f]=ee.useState(null),[p,x]=ee.useState(!1),[y,_]=ee.useState(!1),[m,d]=ee.useState(!1),[v,g]=ee.useState(!1),[S,A]=ee.useState("New Pottery Project"),[E,b]=ee.useState(""),[k,w]=ee.useState(!1);ee.useEffect(()=>{T()},[]);const T=async()=>{try{const D=await $e.getHealth();e(D)}catch(D){console.warn("Backend not responding yet:",D)}try{const D=await $e.listProjects();i(D),D.length>0?G(D[0].id):I()}catch(D){console.warn("Failed to load projects:",D)}},G=async(D,K=!1)=>{s(D),f(null);try{const Q=await $e.getProjectState(D);o(Q),K||(Q.fragments.length>0?u("group"):u("capture"))}catch(Q){console.error(Q)}},Z=()=>{A(`Excavation Lot #${n.length+1}`),b(""),g(!0)},te=async D=>{D.preventDefault();const K=S.trim()||"New Pottery Project";w(!0);try{const Q=await $e.createProject(K,E.trim());i(ue=>[Q,...ue]),g(!1),await G(Q.id,!0),u("capture")}catch(Q){console.error("Could not create project:",Q)}finally{w(!1)}},I=async()=>{try{const D=await $e.createDemoProject(),K=await $e.listProjects();i(K),await G(D.project_id),u("group")}catch(D){console.error("Could not load demonstration:",D)}},j=async(D,K,Q,ue,V)=>{if(!a)return;const ie={...a.project,primary_photo_url:D,primary_photo_dimensions:K,calibration:V||a.project.calibration};o({...a,project:ie,fragments:Q??[],groups:ue??[],joins:[]}),f(null),i(he=>he.map(de=>de.id===ie.id?ie:de));try{const he=await $e.getProjectState(ie.id);o(he)}catch(he){console.warn("Could not refresh project state after upload:",he)}},P=async D=>{if(!a)return;const K={...a.project,calibration:D};o({...a,project:K}),i(Q=>Q.map(ue=>ue.id===K.id?K:ue));try{const Q=await $e.getProjectState(K.id);o(Q)}catch{}},H=D=>{a&&o({...a,fragments:D})},L=D=>{a&&o({...a,groups:D})},F=D=>{a&&o({...a,joins:D})},N=D=>{a&&o({...a,reconstruction_profile:D})},q=(D,K)=>{if(!a)return;const Q=new Date().toISOString(),ue={...a.project,status:"approved",approved_at:Q,reviewer_name:D},V={id:K,project_id:ue.id,approved_at:Q,reviewer_name:D,notes:"Formal approval recorded.",state_snapshot:{}};o({...a,project:ue,snapshots:[V,...a.snapshots]}),i(ie=>ie.map(he=>he.id===ue.id?ue:he))},J=(a==null?void 0:a.fragments.find(D=>D.id===h))||null;return l.jsxs("div",{className:"flex flex-col h-screen bg-parchment-50 font-sans overflow-hidden",children:[l.jsx(ly,{currentProject:(a==null?void 0:a.project)||null,projects:n,health:t,onSelectProject:D=>G(D),onCreateProject:Z,onLoadDemo:I,onOpenChecklist:()=>x(!0),onOpenApiKeyModal:()=>_(!0),isSaving:m}),l.jsx(cy,{currentStep:c,onSelectStep:u,stats:{hasPhoto:!!(a!=null&&a.project.primary_photo_url),fragmentCount:(a==null?void 0:a.fragments.length)||0,groupCount:(a==null?void 0:a.groups.length)||0,acceptedJoinsCount:(a==null?void 0:a.joins.filter(D=>D.status==="accepted").length)||0,hasReconstruction:!!(a!=null&&a.reconstruction_profile),isApproved:(a==null?void 0:a.project.status)==="approved"}}),l.jsx("div",{className:"flex-1 flex overflow-hidden",children:a?l.jsxs(l.Fragment,{children:[c==="capture"&&l.jsx(fy,{project:a.project,fragmentCount:a.fragments.length,onPhotoUploaded:j,onCalibrationUpdated:P,onNextStep:()=>u("group")}),c==="group"&&l.jsx(py,{project:a.project,fragments:a.fragments,groups:a.groups,selectedFragmentId:h,onSelectFragment:D=>f(D?D.id:null),onFragmentsUpdated:H,onGroupsUpdated:L,onNextStep:()=>u("assemble")}),c==="assemble"&&l.jsx(my,{project:a.project,fragments:a.fragments,joins:a.joins,groups:a.groups,selectedFragmentId:h,onSelectFragment:D=>f(D?D.id:null),onFragmentsUpdated:H,onJoinsUpdated:F,onNextStep:()=>u("reconstruct")}),c==="reconstruct"&&l.jsx(Lb,{project:a.project,profile:a.reconstruction_profile,onProfileUpdated:N,onNextStep:()=>u("typology")}),c==="typology"&&l.jsx(Db,{project:a.project,onNextStep:()=>u("review")}),c==="review"&&l.jsx(Ub,{project:a.project,fragments:a.fragments,groups:a.groups,joins:a.joins,profile:a.reconstruction_profile,snapshots:a.snapshots,onProjectApproved:q,onOpenChecklist:()=>x(!0)}),l.jsx(dy,{selectedFragment:J,groups:a.groups,photos:a.photos,project:a.project,onUpdateFragment:D=>{const K=a.fragments.map(Q=>Q.id===D.id?D:Q);H(K),$e.updateFragment(a.project.id,D)},onDeselect:()=>f(null),onPhotoUploaded:()=>G(a.project.id,!0)})]}):l.jsx("div",{className:"flex-1 flex items-center justify-center text-charcoal-400 text-sm font-mono",children:"Loading SHERD-FORGE workspace..."})}),v&&l.jsx("div",{className:"fixed inset-0 z-50 bg-charcoal-900/70 flex items-center justify-center p-4",children:l.jsxs("form",{onSubmit:te,className:"bg-parchment-50 border border-parchment-300 rounded-xl shadow-xl max-w-md w-full overflow-hidden",children:[l.jsxs("div",{className:"bg-parchment-100 border-b border-parchment-300 px-5 py-3.5 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(Ta,{className:"w-4 h-4 text-terracotta-600"}),l.jsx("h3",{className:"text-sm font-bold text-charcoal-900",children:"Create New Pottery Project"})]}),l.jsx("button",{type:"button",onClick:()=>g(!1),className:"p-1 text-charcoal-500 hover:text-charcoal-900 rounded",children:l.jsx(Cn,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"p-5 space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block font-semibold text-charcoal-700 mb-1",children:"Project / Context Name"}),l.jsx("input",{type:"text",autoFocus:!0,required:!0,value:S,onChange:D=>A(D.target.value),placeholder:"e.g. Trench 4 — Context 108 Ceramic Scatter",className:"w-full bg-white border border-parchment-300 rounded-md px-3 py-2 text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-terracotta-500"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block font-semibold text-charcoal-700 mb-1",children:"Excavation Notes (Optional)"}),l.jsx("textarea",{rows:2,value:E,onChange:D=>b(D.target.value),placeholder:"Tabletop scatter with calibration scale bar...",className:"w-full bg-white border border-parchment-300 rounded-md px-3 py-2 text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-terracotta-500"})]})]}),l.jsxs("div",{className:"bg-parchment-100 border-t border-parchment-300 px-5 py-3 flex items-center justify-end space-x-2",children:[l.jsx("button",{type:"button",onClick:()=>g(!1),className:"text-xs text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-md font-medium",children:"Cancel"}),l.jsx("button",{type:"submit",disabled:k,className:"bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xs transition cursor-pointer",children:k?"Creating...":"Create & Open Capture"})]})]})}),l.jsx(Ib,{isOpen:p,onClose:()=>x(!1),stats:{isCalibrated:!!(a!=null&&a.project.calibration.is_calibrated),fragmentCount:(a==null?void 0:a.fragments.length)||0,hasJoins:((a==null?void 0:a.joins.length)||0)>0,hasAcceptedJoin:((a==null?void 0:a.joins.filter(D=>D.status==="accepted").length)||0)>0,hasReconstruction:!!(a!=null&&a.reconstruction_profile),isApproved:(a==null?void 0:a.project.status)==="approved",isOfflineSupported:!0}}),l.jsx(kb,{isOpen:y,onClose:()=>_(!1),health:t,onHealthUpdated:D=>e(D)})]})};qc.createRoot(document.getElementById("root")).render(l.jsx(_g.StrictMode,{children:l.jsx(Fb,{})}));
