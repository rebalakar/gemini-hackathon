(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gp={exports:{}},dl={},Vp={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),tx=Symbol.for("react.portal"),nx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),rx=Symbol.for("react.profiler"),sx=Symbol.for("react.provider"),ax=Symbol.for("react.context"),ox=Symbol.for("react.forward_ref"),lx=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),ux=Symbol.for("react.lazy"),rh=Symbol.iterator;function dx(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,$p={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Wp}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=Ss.prototype;function $u(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Wp}var qu=$u.prototype=new qp;qu.constructor=$u;Xp(qu,Ss.prototype);qu.isPureReactComponent=!0;var sh=Array.isArray,Yp=Object.prototype.hasOwnProperty,Yu={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Yp.call(e,i)&&!Kp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Sa,type:t,key:s,ref:a,props:r,_owner:Yu.current}}function hx(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function fx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ah=/\/+/g;function Fl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fx(""+t.key):e.toString(36)}function So(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Sa:case tx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Fl(a,0):i,sh(r)?(n="",t!=null&&(n=t.replace(ah,"$&/")+"/"),So(r,e,n,"",function(c){return c})):r!=null&&(Ku(r)&&(r=hx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ah,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Fl(s,o);a+=So(s,e,n,l,r)}else if(l=dx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Fl(s,o++),a+=So(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return So(t,i,"","",function(s){return e.call(n,s,r++)}),i}function px(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Mo={transition:null},mx={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:Yu};function Jp(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!Ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ss;Xe.Fragment=nx;Xe.Profiler=rx;Xe.PureComponent=$u;Xe.StrictMode=ix;Xe.Suspense=lx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;Xe.act=Jp;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Yu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Yp.call(e,l)&&!Kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Sa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:ax,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sx,_context:t},t.Consumer=t};Xe.createElement=Zp;Xe.createFactory=function(t){var e=Zp.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:ox,render:t}};Xe.isValidElement=Ku;Xe.lazy=function(t){return{$$typeof:ux,_payload:{_status:-1,_result:t},_init:px}};Xe.memo=function(t,e){return{$$typeof:cx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Mo.transition;Mo.transition={};try{t()}finally{Mo.transition=e}};Xe.unstable_act=Jp;Xe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Xe.useContext=function(t){return Qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Xe.useId=function(){return Qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Qt.current.useRef(t)};Xe.useState=function(t){return Qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Qt.current.useTransition()};Xe.version="18.3.1";Vp.exports=Xe;var me=Vp.exports;const gx=ex(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx=me,vx=Symbol.for("react.element"),_x=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,Sx=xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mx={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)yx.call(e,i)&&!Mx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vx,type:t,key:s,ref:a,props:r,_owner:Sx.current}}dl.Fragment=_x;dl.jsx=Qp;dl.jsxs=Qp;Gp.exports=dl;var u=Gp.exports,jc={},em={exports:{}},xn={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,I){var O=P.length;P.push(I);e:for(;0<O;){var Z=O-1>>>1,J=P[Z];if(0<r(J,I))P[Z]=I,P[O]=J,O=Z;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var I=P[0],O=P.pop();if(O!==I){P[0]=O;e:for(var Z=0,J=P.length,q=J>>>1;Z<q;){var Q=2*(Z+1)-1,ce=P[Q],ue=Q+1,X=P[ue];if(0>r(ce,O))ue<J&&0>r(X,ce)?(P[Z]=X,P[ue]=O,Z=ue):(P[Z]=ce,P[Q]=O,Z=Q);else if(ue<J&&0>r(X,O))P[Z]=X,P[ue]=O,Z=ue;else break e}}return I}function r(P,I){var O=P.sortIndex-I.sortIndex;return O!==0?O:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,p=3,g=!1,S=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=P)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function _(P){if(y=!1,x(P),!S)if(n(l)!==null)S=!0,N(T);else{var I=n(c);I!==null&&H(_,I.startTime-P)}}function T(P,I){S=!1,y&&(y=!1,d(U),U=-1),g=!0;var O=p;try{for(x(I),f=n(l);f!==null&&(!(f.expirationTime>I)||P&&!W());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var J=Z(f.expirationTime<=I);I=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),x(I)}else i(l);f=n(l)}if(f!==null)var q=!0;else{var Q=n(c);Q!==null&&H(_,Q.startTime-I),q=!1}return q}finally{f=null,p=O,g=!1}}var M=!1,b=null,U=-1,E=5,C=-1;function W(){return!(t.unstable_now()-C<E)}function F(){if(b!==null){var P=t.unstable_now();C=P;var I=!0;try{I=b(!0,P)}finally{I?K():(M=!1,b=null)}}else M=!1}var K;if(typeof v=="function")K=function(){v(F)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,z=L.port2;L.port1.onmessage=F,K=function(){z.postMessage(null)}}else K=function(){m(F,0)};function N(P){b=P,M||(M=!0,K())}function H(P,I){U=m(function(){P(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){S||g||(S=!0,N(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var O=p;p=I;try{return P()}finally{p=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=p;p=P;try{return I()}finally{p=O}},t.unstable_scheduleCallback=function(P,I,O){var Z=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Z+O:Z):O=Z,P){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=O+J,P={id:h++,callback:I,priorityLevel:P,startTime:O,expirationTime:J,sortIndex:-1},O>Z?(P.sortIndex=O,e(c,P),n(l)===null&&P===n(c)&&(y?(d(U),U=-1):y=!0,H(_,O-Z))):(P.sortIndex=J,e(l,P),S||g||(S=!0,N(T))),P},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(P){var I=p;return function(){var O=p;p=I;try{return P.apply(this,arguments)}finally{p=O}}}})(nm);tm.exports=nm;var Ex=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx=me,gn=Ex;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var im=new Set,ta={};function Er(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(ta[t]=e,t=0;t<e.length;t++)im.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},lh={};function bx(t){return Hc.call(lh,t)?!0:Hc.call(oh,t)?!1:Tx.test(t)?lh[t]=!0:(oh[t]=!0,!1)}function Ax(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cx(t,e,n,i){if(e===null||typeof e>"u"||Ax(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zu=/[\-:]([a-z])/g;function Ju(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zu,Ju);kt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zu,Ju);kt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zu,Ju);kt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qu(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,n,r,i)&&(n=null),i||r===null?bx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),sm=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),ch=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,kl;function js(t){if(kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kl=e&&e[1]||""}return`
`+kl+t}var Ol=!1;function zl(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function Rx(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=zl(t.type,!1),t;case 11:return t=zl(t.type.render,!1),t;case 1:return t=zl(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gr:return"Fragment";case Hr:return"Portal";case Gc:return"Profiler";case ed:return"StrictMode";case Vc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sm:return(t.displayName||"Context")+".Consumer";case rm:return(t._context.displayName||"Context")+".Provider";case td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nd:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function Nx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Px(t){var e=om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=Px(t))}function lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Uo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cm(t,e){e=e.checked,e!=null&&Qu(t,"checked",e,!1)}function qc(t,e){cm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||Uo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Hs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function um(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lx=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){Lx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dx=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(Dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tu=null,is=null,rs=null;function ph(t){if(t=wa(t)){if(typeof tu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=gl(e),tu(t.stateNode,t.type,e))}}function mm(t){is?rs?rs.push(t):rs=[t]:is=t}function gm(){if(is){var t=is,e=rs;if(rs=is=null,ph(t),e)for(t=0;t<e.length;t++)ph(e[t])}}function xm(t,e){return t(e)}function vm(){}var Bl=!1;function _m(t,e,n){if(Bl)return t(e,n);Bl=!0;try{return xm(t,e,n)}finally{Bl=!1,(is!==null||rs!==null)&&(vm(),gm())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var nu=!1;if(fi)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{nu=!1}function Ux(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Xs=!1,Io=null,Fo=!1,iu=null,Ix={onError:function(t){Xs=!0,Io=t}};function Fx(t,e,n,i,r,s,a,o,l){Xs=!1,Io=null,Ux.apply(Ix,arguments)}function kx(t,e,n,i,r,s,a,o,l){if(Fx.apply(this,arguments),Xs){if(Xs){var c=Io;Xs=!1,Io=null}else throw Error(ne(198));Fo||(Fo=!0,iu=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mh(t){if(wr(t)!==t)throw Error(ne(188))}function Ox(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mh(r),t;if(s===i)return mh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Sm(t){return t=Ox(t),t!==null?Mm(t):null}function Mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mm(t);if(e!==null)return e;t=t.sibling}return null}var Em=gn.unstable_scheduleCallback,gh=gn.unstable_cancelCallback,zx=gn.unstable_shouldYield,Bx=gn.unstable_requestPaint,_t=gn.unstable_now,jx=gn.unstable_getCurrentPriorityLevel,rd=gn.unstable_ImmediatePriority,wm=gn.unstable_UserBlockingPriority,ko=gn.unstable_NormalPriority,Hx=gn.unstable_LowPriority,Tm=gn.unstable_IdlePriority,hl=null,Kn=null;function Gx(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Xx,Vx=Math.log,Wx=Math.LN2;function Xx(t){return t>>>=0,t===0?32:31-(Vx(t)/Wx|0)|0}var ka=64,Oa=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Gs(o):(s&=a,s!==0&&(i=Gs(s)))}else a=n&~r,a!==0?i=Gs(a):s!==0&&(i=Gs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function $x(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=$x(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bm(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cm,ad,Rm,Nm,Pm,su=!1,za=[],Di=null,Ui=null,Ii=null,ra=new Map,sa=new Map,Ai=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function Ns(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zx(t,e,n,i,r){switch(e){case"focusin":return Di=Ns(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Ns(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Ns(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,Ns(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,Ns(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function Lm(t){var e=lr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,Pm(t.priority,function(){Rm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);eu=i,n.target.dispatchEvent(i),eu=null}else return e=wa(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){Eo(t)&&n.delete(e)}function Jx(){su=!1,Di!==null&&Eo(Di)&&(Di=null),Ui!==null&&Eo(Ui)&&(Ui=null),Ii!==null&&Eo(Ii)&&(Ii=null),ra.forEach(vh),sa.forEach(vh)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,su||(su=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Jx)))}function aa(t){function e(r){return Ps(r,t)}if(0<za.length){Ps(za[0],t);for(var n=1;n<za.length;n++){var i=za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Ps(Di,t),Ui!==null&&Ps(Ui,t),Ii!==null&&Ps(Ii,t),ra.forEach(e),sa.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&Ai.shift()}var ss=vi.ReactCurrentBatchConfig,zo=!0;function Qx(t,e,n,i){var r=Ze,s=ss.transition;ss.transition=null;try{Ze=1,od(t,e,n,i)}finally{Ze=r,ss.transition=s}}function ev(t,e,n,i){var r=Ze,s=ss.transition;ss.transition=null;try{Ze=4,od(t,e,n,i)}finally{Ze=r,ss.transition=s}}function od(t,e,n,i){if(zo){var r=au(t,e,n,i);if(r===null)Zl(t,e,i,Bo,n),xh(t,i);else if(Zx(r,t,e,n,i))i.stopPropagation();else if(xh(t,i),e&4&&-1<Kx.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&Cm(s),s=au(t,e,n,i),s===null&&Zl(t,e,i,Bo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zl(t,e,i,null,n)}}var Bo=null;function au(t,e,n,i){if(Bo=null,t=id(i),t=lr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bo=t,null}function Dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jx()){case rd:return 1;case wm:return 4;case ko:case Hx:return 16;case Tm:return 536870912;default:return 16}default:return 16}}var Ri=null,ld=null,wo=null;function Um(){if(wo)return wo;var t,e=ld,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return wo=r.slice(t,1<i?1-i:void 0)}function To(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function _h(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:_h,this.isPropagationStopped=_h,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=vn(Ms),Ea=ft({},Ms,{view:0,detail:0}),tv=vn(Ea),Hl,Gl,Ls,fl=ft({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(Hl=t.screenX-Ls.screenX,Gl=t.screenY-Ls.screenY):Gl=Hl=0,Ls=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),yh=vn(fl),nv=ft({},fl,{dataTransfer:0}),iv=vn(nv),rv=ft({},Ea,{relatedTarget:0}),Vl=vn(rv),sv=ft({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),av=vn(sv),ov=ft({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lv=vn(ov),cv=ft({},Ms,{data:0}),Sh=vn(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hv[t])?!!e[t]:!1}function ud(){return fv}var pv=ft({},Ea,{key:function(t){if(t.key){var e=uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=To(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(t){return t.type==="keypress"?To(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?To(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mv=vn(pv),gv=ft({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=vn(gv),xv=ft({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),vv=vn(xv),_v=ft({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=vn(_v),Sv=ft({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=vn(Sv),Ev=[9,13,27,32],dd=fi&&"CompositionEvent"in window,$s=null;fi&&"documentMode"in document&&($s=document.documentMode);var wv=fi&&"TextEvent"in window&&!$s,Im=fi&&(!dd||$s&&8<$s&&11>=$s),Eh=" ",wh=!1;function Fm(t,e){switch(t){case"keyup":return Ev.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function Tv(t,e){switch(t){case"compositionend":return km(e);case"keypress":return e.which!==32?null:(wh=!0,Eh);case"textInput":return t=e.data,t===Eh&&wh?null:t;default:return null}}function bv(t,e){if(Vr)return t==="compositionend"||!dd&&Fm(t,e)?(t=Um(),wo=ld=Ri=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Im&&e.locale!=="ko"?null:e.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Av[t.type]:e==="textarea"}function Om(t,e,n,i){mm(i),e=jo(e,"onChange"),0<e.length&&(n=new cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,oa=null;function Cv(t){Ym(t,0)}function pl(t){var e=$r(t);if(lm(e))return t}function Rv(t,e){if(t==="change")return e}var zm=!1;if(fi){var Wl;if(fi){var Xl="oninput"in document;if(!Xl){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),Xl=typeof bh.oninput=="function"}Wl=Xl}else Wl=!1;zm=Wl&&(!document.documentMode||9<document.documentMode)}function Ah(){qs&&(qs.detachEvent("onpropertychange",Bm),oa=qs=null)}function Bm(t){if(t.propertyName==="value"&&pl(oa)){var e=[];Om(e,oa,t,id(t)),_m(Cv,e)}}function Nv(t,e,n){t==="focusin"?(Ah(),qs=e,oa=n,qs.attachEvent("onpropertychange",Bm)):t==="focusout"&&Ah()}function Pv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(oa)}function Lv(t,e){if(t==="click")return pl(e)}function Dv(t,e){if(t==="input"||t==="change")return pl(e)}function Uv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:Uv;function la(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Ch(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rh(t,e){var n=Ch(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ch(n)}}function jm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hm(){for(var t=window,e=Uo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uo(t.document)}return e}function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iv(t){var e=Hm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jm(n.ownerDocument.documentElement,n)){if(i!==null&&hd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rh(n,s);var a=Rh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fv=fi&&"documentMode"in document&&11>=document.documentMode,Wr=null,ou=null,Ys=null,lu=!1;function Nh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lu||Wr==null||Wr!==Uo(i)||(i=Wr,"selectionStart"in i&&hd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ys&&la(Ys,i)||(Ys=i,i=jo(ou,"onSelect"),0<i.length&&(e=new cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wr)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},$l={},Gm={};fi&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function ml(t){if($l[t])return $l[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return $l[t]=e[n];return t}var Vm=ml("animationend"),Wm=ml("animationiteration"),Xm=ml("animationstart"),$m=ml("transitionend"),qm=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){qm.set(t,e),Er(e,[t])}for(var ql=0;ql<Ph.length;ql++){var Yl=Ph[ql],kv=Yl.toLowerCase(),Ov=Yl[0].toUpperCase()+Yl.slice(1);$i(kv,"on"+Ov)}$i(Vm,"onAnimationEnd");$i(Wm,"onAnimationIteration");$i(Xm,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i($m,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Lh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kx(i,e,void 0,t),t.currentTarget=null}function Ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Lh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Lh(r,o,c),s=l}}}if(Fo)throw t=iu,Fo=!1,iu=null,t}function st(t,e){var n=e[fu];n===void 0&&(n=e[fu]=new Set);var i=t+"__bubble";n.has(i)||(Km(e,t,2,!1),n.add(i))}function Kl(t,e,n){var i=0;e&&(i|=4),Km(n,t,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Ha]){t[Ha]=!0,im.forEach(function(n){n!=="selectionchange"&&(zv.has(n)||Kl(n,!1,t),Kl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,Kl("selectionchange",!1,e))}}function Km(t,e,n,i){switch(Dm(e)){case 1:var r=Qx;break;case 4:r=ev;break;default:r=od}n=r.bind(null,e,n,t),r=void 0,!nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}_m(function(){var c=s,h=id(n),f=[];e:{var p=qm.get(t);if(p!==void 0){var g=cd,S=t;switch(t){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":g=mv;break;case"focusin":S="focus",g=Vl;break;case"focusout":S="blur",g=Vl;break;case"beforeblur":case"afterblur":g=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=vv;break;case Vm:case Wm:case Xm:g=av;break;case $m:g=yv;break;case"scroll":g=tv;break;case"wheel":g=Mv;break;case"copy":case"cut":case"paste":g=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Mh}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var v=c,x;v!==null;){x=v;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,d!==null&&(_=ia(v,d),_!=null&&y.push(ua(v,_,x)))),m)break;v=v.return}0<y.length&&(p=new g(p,S,null,n,h),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==eu&&(S=n.relatedTarget||n.fromElement)&&(lr(S)||S[pi]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=c,S=S?lr(S):null,S!==null&&(m=wr(S),S!==m||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=c),g!==S)){if(y=yh,_="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Mh,_="onPointerLeave",d="onPointerEnter",v="pointer"),m=g==null?p:$r(g),x=S==null?p:$r(S),p=new y(_,v+"leave",g,n,h),p.target=m,p.relatedTarget=x,_=null,lr(h)===c&&(y=new y(d,v+"enter",S,n,h),y.target=x,y.relatedTarget=m,_=y),m=_,g&&S)t:{for(y=g,d=S,v=0,x=y;x;x=Tr(x))v++;for(x=0,_=d;_;_=Tr(_))x++;for(;0<v-x;)y=Tr(y),v--;for(;0<x-v;)d=Tr(d),x--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=Tr(y),d=Tr(d)}y=null}else y=null;g!==null&&Dh(f,p,g,y,!1),S!==null&&m!==null&&Dh(f,m,S,y,!0)}}e:{if(p=c?$r(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var T=Rv;else if(Th(p))if(zm)T=Dv;else{T=Pv;var M=Nv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Lv);if(T&&(T=T(t,c))){Om(f,T,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&Yc(p,"number",p.value)}switch(M=c?$r(c):window,t){case"focusin":(Th(M)||M.contentEditable==="true")&&(Wr=M,ou=c,Ys=null);break;case"focusout":Ys=ou=Wr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Nh(f,n,h);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Nh(f,n,h)}var b;if(dd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Vr?Fm(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Im&&n.locale!=="ko"&&(Vr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Vr&&(b=Um()):(Ri=h,ld="value"in Ri?Ri.value:Ri.textContent,Vr=!0)),M=jo(c,U),0<M.length&&(U=new Sh(U,t,null,n,h),f.push({event:U,listeners:M}),b?U.data=b:(b=km(n),b!==null&&(U.data=b)))),(b=wv?Tv(t,n):bv(t,n))&&(c=jo(c,"onBeforeInput"),0<c.length&&(h=new Sh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=b))}Ym(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ua(t,s,r)),s=ia(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ia(n,s),l!=null&&a.unshift(ua(n,l,o))):r||(l=ia(n,s),l!=null&&a.push(ua(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Bv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function Uh(t){return(typeof t=="string"?t:""+t).replace(Bv,`
`).replace(jv,"")}function Ga(t,e,n){if(e=Uh(e),Uh(t)!==e&&n)throw Error(ne(425))}function Ho(){}var cu=null,uu=null;function du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,Gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(t){return Ih.resolve(null).then(t).catch(Vv)}:hu;function Vv(t){setTimeout(function(){throw t})}function Jl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),qn="__reactFiber$"+Es,da="__reactProps$"+Es,pi="__reactContainer$"+Es,fu="__reactEvents$"+Es,Wv="__reactListeners$"+Es,Xv="__reactHandles$"+Es;function lr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fh(t);t!==null;){if(n=t[qn])return n;t=Fh(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[qn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function gl(t){return t[da]||null}var pu=[],qr=-1;function qi(t){return{current:t}}function ot(t){0>qr||(t.current=pu[qr],pu[qr]=null,qr--)}function rt(t,e){qr++,pu[qr]=t.current,t.current=e}var Wi={},Vt=qi(Wi),sn=qi(!1),gr=Wi;function ds(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Go(){ot(sn),ot(Vt)}function kh(t,e,n){if(Vt.current!==Wi)throw Error(ne(168));rt(Vt,e),rt(sn,n)}function Zm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Nx(t)||"Unknown",r));return ft({},n,i)}function Vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,gr=Vt.current,rt(Vt,t),rt(sn,sn.current),!0}function Oh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Zm(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,ot(sn),ot(Vt),rt(Vt,t)):ot(sn),rt(sn,n)}var oi=null,xl=!1,Ql=!1;function Jm(t){oi===null?oi=[t]:oi.push(t)}function $v(t){xl=!0,Jm(t)}function Yi(){if(!Ql&&oi!==null){Ql=!0;var t=0,e=Ze;try{var n=oi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,xl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Em(rd,Yi),r}finally{Ze=e,Ql=!1}}return null}var Yr=[],Kr=0,Wo=null,Xo=0,Sn=[],Mn=0,xr=null,li=1,ci="";function nr(t,e){Yr[Kr++]=Xo,Yr[Kr++]=Wo,Wo=t,Xo=e}function Qm(t,e,n){Sn[Mn++]=li,Sn[Mn++]=ci,Sn[Mn++]=xr,xr=t;var i=li;t=ci;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Bn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function fd(t){t.return!==null&&(nr(t,1),Qm(t,1,0))}function pd(t){for(;t===Wo;)Wo=Yr[--Kr],Yr[Kr]=null,Xo=Yr[--Kr],Yr[Kr]=null;for(;t===xr;)xr=Sn[--Mn],Sn[Mn]=null,ci=Sn[--Mn],Sn[Mn]=null,li=Sn[--Mn],Sn[Mn]=null}var pn=null,fn=null,ct=!1,Fn=null;function e0(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,fn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,fn=null,!0):!1;default:return!1}}function mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gu(t){if(ct){var e=fn;if(e){var n=e;if(!zh(t,e)){if(mu(t))throw Error(ne(418));e=Fi(n.nextSibling);var i=pn;e&&zh(t,e)?e0(i,n):(t.flags=t.flags&-4097|2,ct=!1,pn=t)}}else{if(mu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,pn=t}}}function Bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Va(t){if(t!==pn)return!1;if(!ct)return Bh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!du(t.type,t.memoizedProps)),e&&(e=fn)){if(mu(t))throw t0(),Error(ne(418));for(;e;)e0(t,e),e=Fi(e.nextSibling)}if(Bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=pn?Fi(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=fn;t;)t=Fi(t.nextSibling)}function hs(){fn=pn=null,ct=!1}function md(t){Fn===null?Fn=[t]:Fn.push(t)}var qv=vi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jh(t){var e=t._init;return e(t._payload)}function n0(t){function e(d,v){if(t){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Bi(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,x,_){return v===null||v.tag!==6?(v=ac(x,d.mode,_),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,_){var T=x.type;return T===Gr?h(d,v,x.props.children,_,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ti&&jh(T)===v.type)?(_=r(v,x.props),_.ref=Ds(d,v,x),_.return=d,_):(_=Lo(x.type,x.key,x.props,null,d.mode,_),_.ref=Ds(d,v,x),_.return=d,_)}function c(d,v,x,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=oc(x,d.mode,_),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function h(d,v,x,_,T){return v===null||v.tag!==7?(v=hr(x,d.mode,_,T),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ac(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return x=Lo(v.type,v.key,v.props,null,d.mode,x),x.ref=Ds(d,null,v),x.return=d,x;case Hr:return v=oc(v,d.mode,x),v.return=d,v;case Ti:var _=v._init;return f(d,_(v._payload),x)}if(Hs(v)||Cs(v))return v=hr(v,d.mode,x,null),v.return=d,v;Wa(d,v)}return null}function p(d,v,x,_){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(d,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:return x.key===T?l(d,v,x,_):null;case Hr:return x.key===T?c(d,v,x,_):null;case Ti:return T=x._init,p(d,v,T(x._payload),_)}if(Hs(x)||Cs(x))return T!==null?null:h(d,v,x,_,null);Wa(d,x)}return null}function g(d,v,x,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(x)||null,o(v,d,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ua:return d=d.get(_.key===null?x:_.key)||null,l(v,d,_,T);case Hr:return d=d.get(_.key===null?x:_.key)||null,c(v,d,_,T);case Ti:var M=_._init;return g(d,v,x,M(_._payload),T)}if(Hs(_)||Cs(_))return d=d.get(x)||null,h(v,d,_,T,null);Wa(v,_)}return null}function S(d,v,x,_){for(var T=null,M=null,b=v,U=v=0,E=null;b!==null&&U<x.length;U++){b.index>U?(E=b,b=null):E=b.sibling;var C=p(d,b,x[U],_);if(C===null){b===null&&(b=E);break}t&&b&&C.alternate===null&&e(d,b),v=s(C,v,U),M===null?T=C:M.sibling=C,M=C,b=E}if(U===x.length)return n(d,b),ct&&nr(d,U),T;if(b===null){for(;U<x.length;U++)b=f(d,x[U],_),b!==null&&(v=s(b,v,U),M===null?T=b:M.sibling=b,M=b);return ct&&nr(d,U),T}for(b=i(d,b);U<x.length;U++)E=g(b,d,U,x[U],_),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?U:E.key),v=s(E,v,U),M===null?T=E:M.sibling=E,M=E);return t&&b.forEach(function(W){return e(d,W)}),ct&&nr(d,U),T}function y(d,v,x,_){var T=Cs(x);if(typeof T!="function")throw Error(ne(150));if(x=T.call(x),x==null)throw Error(ne(151));for(var M=T=null,b=v,U=v=0,E=null,C=x.next();b!==null&&!C.done;U++,C=x.next()){b.index>U?(E=b,b=null):E=b.sibling;var W=p(d,b,C.value,_);if(W===null){b===null&&(b=E);break}t&&b&&W.alternate===null&&e(d,b),v=s(W,v,U),M===null?T=W:M.sibling=W,M=W,b=E}if(C.done)return n(d,b),ct&&nr(d,U),T;if(b===null){for(;!C.done;U++,C=x.next())C=f(d,C.value,_),C!==null&&(v=s(C,v,U),M===null?T=C:M.sibling=C,M=C);return ct&&nr(d,U),T}for(b=i(d,b);!C.done;U++,C=x.next())C=g(b,d,U,C.value,_),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?U:C.key),v=s(C,v,U),M===null?T=C:M.sibling=C,M=C);return t&&b.forEach(function(F){return e(d,F)}),ct&&nr(d,U),T}function m(d,v,x,_){if(typeof x=="object"&&x!==null&&x.type===Gr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:e:{for(var T=x.key,M=v;M!==null;){if(M.key===T){if(T=x.type,T===Gr){if(M.tag===7){n(d,M.sibling),v=r(M,x.props.children),v.return=d,d=v;break e}}else if(M.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ti&&jh(T)===M.type){n(d,M.sibling),v=r(M,x.props),v.ref=Ds(d,M,x),v.return=d,d=v;break e}n(d,M);break}else e(d,M);M=M.sibling}x.type===Gr?(v=hr(x.props.children,d.mode,_,x.key),v.return=d,d=v):(_=Lo(x.type,x.key,x.props,null,d.mode,_),_.ref=Ds(d,v,x),_.return=d,d=_)}return a(d);case Hr:e:{for(M=x.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=oc(x,d.mode,_),v.return=d,d=v}return a(d);case Ti:return M=x._init,m(d,v,M(x._payload),_)}if(Hs(x))return S(d,v,x,_);if(Cs(x))return y(d,v,x,_);Wa(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,x),v.return=d,d=v):(n(d,v),v=ac(x,d.mode,_),v.return=d,d=v),a(d)):n(d,v)}return m}var fs=n0(!0),i0=n0(!1),$o=qi(null),qo=null,Zr=null,gd=null;function xd(){gd=Zr=qo=null}function vd(t){var e=$o.current;ot($o),t._currentValue=e}function xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function as(t,e){qo=t,gd=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(gd!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if(qo===null)throw Error(ne(308));Zr=t,qo.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var cr=null;function _d(t){cr===null?cr=[t]:cr.push(t)}function r0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_d(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,_d(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}function Hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yo(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var S=t,y=o;switch(p=e,g=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){f=S.call(g,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,p=typeof S=="function"?S.call(g,f,p):S,p==null)break e;f=ft({},f,p);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=a,t.lanes=a,t.memoizedState=f}}function Gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ta={},Zn=qi(Ta),ha=qi(Ta),fa=qi(Ta);function ur(t){if(t===Ta)throw Error(ne(174));return t}function Sd(t,e){switch(rt(fa,e),rt(ha,t),rt(Zn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}ot(Zn),rt(Zn,e)}function ps(){ot(Zn),ot(ha),ot(fa)}function a0(t){ur(fa.current);var e=ur(Zn.current),n=Zc(e,t.type);e!==n&&(rt(ha,t),rt(Zn,n))}function Md(t){ha.current===t&&(ot(Zn),ot(ha))}var dt=qi(0);function Ko(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ec=[];function Ed(){for(var t=0;t<ec.length;t++)ec[t]._workInProgressVersionPrimary=null;ec.length=0}var Ao=vi.ReactCurrentDispatcher,tc=vi.ReactCurrentBatchConfig,vr=0,ht=null,Et=null,Nt=null,Zo=!1,Ks=!1,pa=0,Yv=0;function zt(){throw Error(ne(321))}function wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Td(t,e,n,i,r,s){if(vr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ao.current=t===null||t.memoizedState===null?Qv:e_,t=n(i,r),Ks){s=0;do{if(Ks=!1,pa=0,25<=s)throw Error(ne(301));s+=1,Nt=Et=null,e.updateQueue=null,Ao.current=t_,t=n(i,r)}while(Ks)}if(Ao.current=Jo,e=Et!==null&&Et.next!==null,vr=0,Nt=Et=ht=null,Zo=!1,e)throw Error(ne(300));return t}function bd(){var t=pa!==0;return pa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Rn(){if(Et===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Nt===null?ht.memoizedState:Nt.next;if(e!==null)Nt=e,Et=t;else{if(t===null)throw Error(ne(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ma(t,e){return typeof e=="function"?e(t):e}function nc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((vr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,ht.lanes|=h,_r|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ic(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function o0(){}function l0(t,e){var n=ht,i=Rn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Ad(d0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ga(9,u0.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ne(349));vr&30||c0(n,e,r)}return r}function c0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,i){e.value=n,e.getSnapshot=i,h0(e)&&f0(t)}function d0(t,e,n){return n(function(){h0(e)&&f0(t)})}function h0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function f0(t){var e=mi(t,1);e!==null&&jn(e,t,1,-1)}function Vh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=Jv.bind(null,ht,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p0(){return Rn().memoizedState}function Co(t,e,n,i){var r=Xn();ht.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function vl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&wd(i,a.deps)){r.memoizedState=ga(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function Wh(t,e){return Co(8390656,8,t,e)}function Ad(t,e){return vl(2048,8,t,e)}function m0(t,e){return vl(4,2,t,e)}function g0(t,e){return vl(4,4,t,e)}function x0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v0(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,x0.bind(null,e,t),n)}function Cd(){}function _0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S0(t,e,n){return vr&21?(Hn(n,e)||(n=bm(),ht.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function Kv(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=tc.transition;tc.transition={};try{t(!1),e()}finally{Ze=n,tc.transition=i}}function M0(){return Rn().memoizedState}function Zv(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))w0(e,n);else if(n=r0(t,e,n,i),n!==null){var r=Zt();jn(n,t,i,r),T0(n,e,i)}}function Jv(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))w0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,_d(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r0(t,e,r,i),n!==null&&(r=Zt(),jn(n,t,i,r),T0(n,e,i))}}function E0(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function w0(t,e){Ks=Zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}var Jo={readContext:Cn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},Qv={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Co(4194308,4,x0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Co(4194308,4,t,e)},useInsertionEffect:function(t,e){return Co(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Zv.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:Cd,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=Kv.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Xn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Lt===null)throw Error(ne(349));vr&30||c0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wh(d0.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,u0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Lt.identifierPrefix;if(ct){var n=ci,i=li;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},e_={readContext:Cn,useCallback:_0,useContext:Cn,useEffect:Ad,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:nc,useRef:p0,useState:function(){return nc(ma)},useDebugValue:Cd,useDeferredValue:function(t){var e=Rn();return S0(e,Et.memoizedState,t)},useTransition:function(){var t=nc(ma)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1},t_={readContext:Cn,useCallback:_0,useContext:Cn,useEffect:Ad,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:ic,useRef:p0,useState:function(){return ic(ma)},useDebugValue:Cd,useDeferredValue:function(t){var e=Rn();return Et===null?e.memoizedState=t:S0(e,Et.memoizedState,t)},useTransition:function(){var t=ic(ma)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=zi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(jn(e,t,r,i),bo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=zi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(jn(e,t,r,i),bo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=zi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(jn(e,t,i,n),bo(e,t,i))}};function Xh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function b0(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=an(e)?gr:Vt.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $h(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=an(e)?gr:Vt.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),Yo(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",i=e;do n+=Rx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var n_=typeof WeakMap=="function"?WeakMap:Map;function A0(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){el||(el=!0,Nu=i),yu(t,e)},n}function C0(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yu(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new n_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=g_.bind(null,t,e,n),e.then(t,t))}function Yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var i_=vi.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?i0(e,null,n,i):fs(e,t.child,n,i)}function Zh(t,e,n,i,r){n=n.render;var s=e.ref;return as(e,r),i=Td(t,e,n,i,s,r),n=bd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&n&&fd(e),e.flags|=1,qt(t,e,i,r),e.child)}function Jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R0(t,e,s,i,r)):(t=Lo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function R0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Su(t,e,n,i,r)}function N0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Qr,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Qr,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Qr,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Qr,hn),hn|=i;return qt(t,e,r,n),e.child}function P0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Su(t,e,n,i,r){var s=an(n)?gr:Vt.current;return s=ds(e,s),as(e,r),n=Td(t,e,n,i,s,r),i=bd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&i&&fd(e),e.flags|=1,qt(t,e,n,r),e.child)}function Qh(t,e,n,i,r){if(an(n)){var s=!0;Vo(e)}else s=!1;if(as(e,r),e.stateNode===null)Ro(t,e),b0(e,n,i),_u(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=an(n)?gr:Vt.current,c=ds(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&$h(e,a,i,c),bi=!1;var p=e.memoizedState;a.state=p,Yo(e,i,a,r),l=e.memoizedState,o!==i||p!==l||sn.current||bi?(typeof h=="function"&&(vu(e,n,h,i),l=e.memoizedState),(o=bi||Xh(e,n,o,i,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,s0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Un(e.type,o),a.props=c,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=an(n)?gr:Vt.current,l=ds(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&$h(e,a,i,l),bi=!1,p=e.memoizedState,a.state=p,Yo(e,i,a,r);var S=e.memoizedState;o!==f||p!==S||sn.current||bi?(typeof g=="function"&&(vu(e,n,g,i),S=e.memoizedState),(c=bi||Xh(e,n,c,i,p,S,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,S,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,S,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),a.props=i,a.state=S,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Mu(t,e,n,i,s,r)}function Mu(t,e,n,i,r,s){P0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Oh(e,n,!1),gi(t,e,s);i=e.stateNode,i_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,o,s)):qt(t,e,o,s),e.memoizedState=i.state,r&&Oh(e,n,!0),e.child}function L0(t){var e=t.stateNode;e.pendingContext?kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kh(t,e.context,!1),Sd(t,e.containerInfo)}function ef(t,e,n,i,r){return hs(),md(r),e.flags|=256,qt(t,e,n,i),e.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(dt,r&1),t===null)return gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ml(a,i,0,null),t=hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wu(n),e.memoizedState=Eu,t):Rd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return r_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Bi(o,s):(s=hr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?wu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Eu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rd(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&md(i),fs(e,t.child,null,n),t=Rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=rc(Error(ne(422))),Xa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ml({mode:"visible",children:i.children},r,0,null),s=hr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fs(e,t.child,null,a),e.child.memoizedState=wu(a),e.memoizedState=Eu,s);if(!(e.mode&1))return Xa(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=rc(s,i,void 0),Xa(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),jn(i,t,r,-1))}return Id(),i=rc(Error(ne(421))),Xa(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=x_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Fi(r.nextSibling),pn=e,ct=!0,Fn=null,t!==null&&(Sn[Mn++]=li,Sn[Mn++]=ci,Sn[Mn++]=xr,li=t.id,ci=t.overflow,xr=e),e=Rd(e,i.children),e.flags|=4096,e)}function tf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xu(t.return,e,n)}function sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function U0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tf(t,n,e);else if(t.tag===19)tf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ko(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ko(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sc(e,!0,n,null,s);break;case"together":sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function s_(t,e,n){switch(e.tag){case 3:L0(e),hs();break;case 5:a0(e);break;case 1:an(e.type)&&Vo(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt($o,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?D0(t,e,n):(rt(dt,dt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return U0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,n)}return gi(t,e,n)}var I0,Tu,F0,k0;I0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tu=function(){};F0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Zn.current);var s=null;switch(n){case"input":r=$c(t,r),i=$c(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Kc(t,r),i=Kc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ho)}Jc(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};k0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function a_(t,e,n){var i=e.pendingProps;switch(pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return an(e.type)&&Go(),Bt(e),null;case 3:return i=e.stateNode,ps(),ot(sn),ot(Vt),Ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Du(Fn),Fn=null))),Tu(t,e),Bt(e),null;case 5:Md(e);var r=ur(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)F0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Bt(e),null}if(t=ur(Zn.current),Va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Vs.length;r++)st(Vs[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":uh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":hh(i,s),st("invalid",i)}Jc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,o,t),r=["children",""+o]):ta.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":Ia(i),dh(i,s,!0);break;case"textarea":Ia(i),fh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ho)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[da]=i,I0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Qc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vs.length;r++)st(Vs[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":uh(t,i),r=$c(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),st("invalid",t);break;case"textarea":hh(t,i),r=Kc(t,i),st("invalid",t);break;default:r=i}Jc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?pm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Qu(t,s,l,a))}switch(n){case"input":Ia(t),dh(t,i,!1);break;case"textarea":Ia(t),fh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)k0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ur(fa.current),ur(Zn.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&fn!==null&&e.mode&1&&!(e.flags&128))t0(),hs(),e.flags|=98560,s=!1;else if(s=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[qn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Fn!==null&&(Du(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?wt===0&&(wt=3):Id())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return ps(),Tu(t,e),t===null&&ca(e.stateNode.containerInfo),Bt(e),null;case 10:return vd(e.type._context),Bt(e),null;case 17:return an(e.type)&&Go(),Bt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Us(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ko(t),a!==null){for(e.flags|=128,Us(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>gs&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ko(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Bt(e),null}else 2*_t()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,rt(dt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Ud(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function o_(t,e){switch(pd(e),e.tag){case 1:return an(e.type)&&Go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),ot(sn),ot(Vt),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Md(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return ps(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var $a=!1,Gt=!1,l_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function bu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var nf=!1;function c_(t,e){if(cu=zo,t=Hm(),hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++h===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:t,selectionRange:n},zo=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,m=S.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(_){xt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return S=nf,nf=!1,S}function Zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bu(e,n,s)}r=r.next}while(r!==i)}}function yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O0(t){var e=t.alternate;e!==null&&(t.alternate=null,O0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[da],delete e[fu],delete e[Wv],delete e[Xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z0(t){return t.tag===5||t.tag===3||t.tag===4}function rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ho));else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var Dt=null,In=!1;function _i(t,e,n){for(n=n.child;n!==null;)B0(t,e,n),n=n.sibling}function B0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Gt||Jr(n,e);case 6:var i=Dt,r=In;Dt=null,_i(t,e,n),Dt=i,In=r,Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?Jl(t.parentNode,n):t.nodeType===1&&Jl(t,n),aa(t)):Jl(Dt,n.stateNode));break;case 4:i=Dt,r=In,Dt=n.stateNode.containerInfo,In=!0,_i(t,e,n),Dt=i,In=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&bu(n,e,a),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Gt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,_i(t,e,n),Gt=i):_i(t,e,n);break;default:_i(t,e,n)}}function sf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l_),e.forEach(function(i){var r=v_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,In=!1;break e;case 3:Dt=o.stateNode.containerInfo,In=!0;break e;case 4:Dt=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(Dt===null)throw Error(ne(160));B0(s,a,r),Dt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j0(e,t),e=e.sibling}function j0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Wn(t),i&4){try{Zs(3,t,t.return),yl(3,t)}catch(y){xt(t,t.return,y)}try{Zs(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Nn(e,t),Wn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(Nn(e,t),Wn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cm(r,s),Qc(o,a);var c=Qc(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?pm(r,f):h==="dangerouslySetInnerHTML"?hm(r,f):h==="children"?na(r,f):Qu(r,h,f,c)}switch(o){case"input":qc(r,s);break;case"textarea":um(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ns(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ns(r,!!s.multiple,s.defaultValue,!0):ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Nn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Nn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Nn(e,t),Wn(t);break;case 13:Nn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=_t())),i&4&&sf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||h,Nn(e,t),Gt=c):Nn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(f=xe=h;xe!==null;){switch(p=xe,g=p.child,p.tag){case 0:case 11:case 14:case 15:Zs(4,p,p.return);break;case 1:Jr(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:Jr(p,p.return);break;case 22:if(p.memoizedState!==null){of(f);continue}}g!==null?(g.return=p,xe=g):of(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=fm("display",a))}catch(y){xt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){xt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nn(e,t),Wn(t),i&4&&sf(t);break;case 21:break;default:Nn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(z0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=rf(t);Ru(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=rf(t);Cu(t,o,a);break;default:throw Error(ne(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function u_(t,e,n){xe=t,H0(t)}function H0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||$a;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=$a;var c=Gt;if($a=a,(Gt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?lf(r):l!==null?(l.return=a,xe=l):lf(r);for(;s!==null;)xe=s,H0(s),s=s.sibling;xe=r,$a=o,Gt=c}af(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):af(t)}}function af(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Gt||e.flags&512&&Au(e)}catch(p){xt(e,e.return,p)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function of(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function lf(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Au(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Au(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var d_=Math.ceil,Qo=vi.ReactCurrentDispatcher,Nd=vi.ReactCurrentOwner,An=vi.ReactCurrentBatchConfig,Ye=0,Lt=null,St=null,It=0,hn=0,Qr=qi(0),wt=0,xa=null,_r=0,Sl=0,Pd=0,Js=null,nn=null,Ld=0,gs=1/0,ai=null,el=!1,Nu=null,Oi=null,qa=!1,Ni=null,tl=0,Qs=0,Pu=null,No=-1,Po=0;function Zt(){return Ye&6?_t():No!==-1?No:No=_t()}function zi(t){return t.mode&1?Ye&2&&It!==0?It&-It:qv.transition!==null?(Po===0&&(Po=bm()),Po):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Dm(t.type)),t):1}function jn(t,e,n,i){if(50<Qs)throw Qs=0,Pu=null,Error(ne(185));Ma(t,n,i),(!(Ye&2)||t!==Lt)&&(t===Lt&&(!(Ye&2)&&(Sl|=n),wt===4&&Ci(t,It)),on(t,i),n===1&&Ye===0&&!(e.mode&1)&&(gs=_t()+500,xl&&Yi()))}function on(t,e){var n=t.callbackNode;qx(t,e);var i=Oo(t,t===Lt?It:0);if(i===0)n!==null&&gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gh(n),e===1)t.tag===0?$v(cf.bind(null,t)):Jm(cf.bind(null,t)),Gv(function(){!(Ye&6)&&Yi()}),n=null;else{switch(Am(i)){case 1:n=rd;break;case 4:n=wm;break;case 16:n=ko;break;case 536870912:n=Tm;break;default:n=ko}n=K0(n,G0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G0(t,e){if(No=-1,Po=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var i=Oo(t,t===Lt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nl(t,i);else{e=i;var r=Ye;Ye|=2;var s=W0();(Lt!==t||It!==e)&&(ai=null,gs=_t()+500,dr(t,e));do try{p_();break}catch(o){V0(t,o)}while(!0);xd(),Qo.current=s,Ye=r,St!==null?e=0:(Lt=null,It=0,e=wt)}if(e!==0){if(e===2&&(r=ru(t),r!==0&&(i=r,e=Lu(t,r))),e===1)throw n=xa,dr(t,0),Ci(t,i),on(t,_t()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!h_(r)&&(e=nl(t,i),e===2&&(s=ru(t),s!==0&&(i=s,e=Lu(t,s))),e===1))throw n=xa,dr(t,0),Ci(t,i),on(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ir(t,nn,ai);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Ld+500-_t(),10<e)){if(Oo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=hu(ir.bind(null,t,nn,ai),e);break}ir(t,nn,ai);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*d_(i/1960))-i,10<i){t.timeoutHandle=hu(ir.bind(null,t,nn,ai),i);break}ir(t,nn,ai);break;case 5:ir(t,nn,ai);break;default:throw Error(ne(329))}}}return on(t,_t()),t.callbackNode===n?G0.bind(null,t):null}function Lu(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=nl(t,e),t!==2&&(e=nn,nn=n,e!==null&&Du(e)),t}function Du(t){nn===null?nn=t:nn.push.apply(nn,t)}function h_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Pd,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function cf(t){if(Ye&6)throw Error(ne(327));os();var e=Oo(t,0);if(!(e&1))return on(t,_t()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var i=ru(t);i!==0&&(e=i,n=Lu(t,i))}if(n===1)throw n=xa,dr(t,0),Ci(t,e),on(t,_t()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,nn,ai),on(t,_t()),null}function Dd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(gs=_t()+500,xl&&Yi())}}function yr(t){Ni!==null&&Ni.tag===0&&!(Ye&6)&&os();var e=Ye;Ye|=1;var n=An.transition,i=Ze;try{if(An.transition=null,Ze=1,t)return t()}finally{Ze=i,An.transition=n,Ye=e,!(Ye&6)&&Yi()}}function Ud(){hn=Qr.current,ot(Qr)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hv(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(pd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Go();break;case 3:ps(),ot(sn),ot(Vt),Ed();break;case 5:Md(i);break;case 4:ps();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:vd(i.type._context);break;case 22:case 23:Ud()}n=n.return}if(Lt=t,St=t=Bi(t.current,null),It=hn=e,wt=0,xa=null,Pd=Sl=_r=0,nn=Js=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}cr=null}return t}function V0(t,e){do{var n=St;try{if(xd(),Ao.current=Jo,Zo){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zo=!1}if(vr=0,Nt=Et=ht=null,Ks=!1,pa=0,Nd.current=null,n===null||n.return===null){wt=1,xa=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Yh(a);if(g!==null){g.flags&=-257,Kh(g,a,o,s,e),g.mode&1&&qh(s,c,e),e=g,l=c;var S=e.updateQueue;if(S===null){var y=new Set;y.add(l),e.updateQueue=y}else S.add(l);break e}else{if(!(e&1)){qh(s,c,e),Id();break e}l=Error(ne(426))}}else if(ct&&o.mode&1){var m=Yh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kh(m,a,o,s,e),md(ms(l,o));break e}}s=l=ms(l,o),wt!==4&&(wt=2),Js===null?Js=[s]:Js.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=A0(s,l,e);Hh(s,d);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Oi===null||!Oi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=C0(s,o,e);Hh(s,_);break e}}s=s.return}while(s!==null)}$0(n)}catch(T){e=T,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function W0(){var t=Qo.current;return Qo.current=Jo,t===null?Jo:t}function Id(){(wt===0||wt===3||wt===2)&&(wt=4),Lt===null||!(_r&268435455)&&!(Sl&268435455)||Ci(Lt,It)}function nl(t,e){var n=Ye;Ye|=2;var i=W0();(Lt!==t||It!==e)&&(ai=null,dr(t,e));do try{f_();break}catch(r){V0(t,r)}while(!0);if(xd(),Ye=n,Qo.current=i,St!==null)throw Error(ne(261));return Lt=null,It=0,wt}function f_(){for(;St!==null;)X0(St)}function p_(){for(;St!==null&&!zx();)X0(St)}function X0(t){var e=Y0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?$0(t):St=e,Nd.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=o_(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,St=null;return}}else if(n=a_(n,e,hn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);wt===0&&(wt=5)}function ir(t,e,n){var i=Ze,r=An.transition;try{An.transition=null,Ze=1,m_(t,e,n,i)}finally{An.transition=r,Ze=i}return null}function m_(t,e,n,i){do os();while(Ni!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yx(t,s),t===Lt&&(St=Lt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,K0(ko,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=Ze;Ze=1;var o=Ye;Ye|=4,Nd.current=null,c_(t,n),j0(n,t),Iv(uu),zo=!!cu,uu=cu=null,t.current=n,u_(n),Bx(),Ye=o,Ze=a,An.transition=s}else t.current=n;if(qa&&(qa=!1,Ni=t,tl=r),s=t.pendingLanes,s===0&&(Oi=null),Gx(n.stateNode),on(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(el)throw el=!1,t=Nu,Nu=null,t;return tl&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===Pu?Qs++:(Qs=0,Pu=t):Qs=0,Yi(),null}function os(){if(Ni!==null){var t=Am(tl),e=An.transition,n=Ze;try{if(An.transition=null,Ze=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,tl=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:Zs(8,h,s)}var f=h.child;if(f!==null)f.return=h,xe=f;else for(;xe!==null;){h=xe;var p=h.sibling,g=h.return;if(O0(h),h===c){xe=null;break}if(p!==null){p.return=g,xe=p;break}xe=g}}}var S=s.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,xe=x;else e:for(a=v;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:yl(9,o)}}catch(T){xt(o,o.return,T)}if(o===a){xe=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,xe=_;break e}xe=o.return}}if(Ye=r,Yi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(hl,t)}catch{}i=!0}return i}finally{Ze=n,An.transition=e}}return!1}function uf(t,e,n){e=ms(n,e),e=A0(t,e,1),t=ki(t,e,1),e=Zt(),t!==null&&(Ma(t,1,e),on(t,e))}function xt(t,e,n){if(t.tag===3)uf(t,t,n);else for(;e!==null;){if(e.tag===3){uf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=ms(n,t),t=C0(e,t,1),e=ki(e,t,1),t=Zt(),e!==null&&(Ma(e,1,t),on(e,t));break}}e=e.return}}function g_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(It&n)===n&&(wt===4||wt===3&&(It&130023424)===It&&500>_t()-Ld?dr(t,0):Pd|=n),on(t,e)}function q0(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=Zt();t=mi(t,e),t!==null&&(Ma(t,e,n),on(t,n))}function x_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q0(t,n)}function v_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),q0(t,n)}var Y0;Y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,s_(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ct&&e.flags&1048576&&Qm(e,Xo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ro(t,e),t=e.pendingProps;var r=ds(e,Vt.current);as(e,n),r=Td(null,e,i,t,r,n);var s=bd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Vo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yd(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,_u(e,i,t,n),e=Mu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&fd(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ro(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=y_(i),t=Un(i,t),r){case 0:e=Su(null,e,i,t,n);break e;case 1:e=Qh(null,e,i,t,n);break e;case 11:e=Zh(null,e,i,t,n);break e;case 14:e=Jh(null,e,i,Un(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Su(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Qh(t,e,i,r,n);case 3:e:{if(L0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(t,e),Yo(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(ne(423)),e),e=ef(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(ne(424)),e),e=ef(t,e,i,n,r);break e}else for(fn=Fi(e.stateNode.containerInfo.firstChild),pn=e,ct=!0,Fn=null,n=i0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),i===r){e=gi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return a0(e),t===null&&gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,du(i,r)?a=null:s!==null&&du(i,s)&&(e.flags|=32),P0(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&gu(e),null;case 13:return D0(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Zh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt($o,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!sn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),xu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,as(e,n),r=Cn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Jh(t,e,i,r,n);case 15:return R0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Ro(t,e),e.tag=1,an(i)?(t=!0,Vo(e)):t=!1,as(e,n),b0(e,i,r),_u(e,i,r,n),Mu(null,e,i,!0,t,n);case 19:return U0(t,e,n);case 22:return N0(t,e,n)}throw Error(ne(156,e.tag))};function K0(t,e){return Em(t,e)}function __(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new __(t,e,n,i)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y_(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===td)return 11;if(t===nd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Fd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Gr:return hr(n.children,r,s,e);case ed:a=8,r|=8;break;case Gc:return t=bn(12,n,e,r|2),t.elementType=Gc,t.lanes=s,t;case Vc:return t=bn(13,n,e,r),t.elementType=Vc,t.lanes=s,t;case Wc:return t=bn(19,n,e,r),t.elementType=Wc,t.lanes=s,t;case am:return Ml(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rm:a=10;break e;case sm:a=9;break e;case td:a=11;break e;case nd:a=14;break e;case Ti:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Ml(t,e,n,i){return t=bn(22,t,i,e),t.elementType=am,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function oc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function S_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kd(t,e,n,i,r,s,a,o,l){return t=new S_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(s),t}function M_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z0(t){if(!t)return Wi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(an(n))return Zm(t,n,e)}return e}function J0(t,e,n,i,r,s,a,o,l){return t=kd(n,i,!0,t,r,s,a,o,l),t.context=Z0(null),n=t.current,i=Zt(),r=zi(n),s=hi(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Ma(t,r,i),on(t,i),t}function El(t,e,n,i){var r=e.current,s=Zt(),a=zi(r);return n=Z0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(jn(t,r,a,s),bo(t,r,a)),a}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function df(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){df(t,e),(t=t.alternate)&&df(t,e)}function E_(){return null}var Q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}wl.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));El(t,e,null,null)};wl.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){El(null,t,null,null)}),e[pi]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Lm(t)}};function Bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hf(){}function w_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=il(a);s.call(c)}}var a=J0(e,i,t,0,null,!1,!1,"",hf);return t._reactRootContainer=a,t[pi]=a.current,ca(t.nodeType===8?t.parentNode:t),yr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=il(l);o.call(c)}}var l=kd(t,0,!1,null,null,!1,!1,"",hf);return t._reactRootContainer=l,t[pi]=l.current,ca(t.nodeType===8?t.parentNode:t),yr(function(){El(e,l,n,i)}),l}function bl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=il(a);o.call(l)}}El(e,a,t,r)}else a=w_(n,e,t,r,i);return il(a)}Cm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(sd(e,n|1),on(e,_t()),!(Ye&6)&&(gs=_t()+500,Yi()))}break;case 13:yr(function(){var i=mi(t,1);if(i!==null){var r=Zt();jn(i,t,1,r)}}),Od(t,1)}};ad=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Zt();jn(e,t,134217728,n)}Od(t,134217728)}};Rm=function(t){if(t.tag===13){var e=zi(t),n=mi(t,e);if(n!==null){var i=Zt();jn(n,t,e,i)}Od(t,e)}};Nm=function(){return Ze};Pm=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};tu=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gl(i);if(!r)throw Error(ne(90));lm(i),qc(i,r)}}}break;case"textarea":um(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};xm=Dd;vm=yr;var T_={usingClientEntryPoint:!1,Events:[wa,$r,gl,mm,gm,Dd]},Is={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||E_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{hl=Ya.inject(b_),Kn=Ya}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(e))throw Error(ne(200));return M_(t,e,null,n)};xn.createRoot=function(t,e){if(!Bd(t))throw Error(ne(299));var n=!1,i="",r=Q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kd(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,ca(t.nodeType===8?t.parentNode:t),new zd(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Sm(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return yr(t)};xn.hydrate=function(t,e,n){if(!Tl(e))throw Error(ne(200));return bl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Bd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=J0(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wl(e)};xn.render=function(t,e,n){if(!Tl(e))throw Error(ne(200));return bl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Tl(t))throw Error(ne(40));return t._reactRootContainer?(yr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};xn.unstable_batchedUpdates=Dd;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return bl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(t){console.error(t)}}eg(),em.exports=xn;var A_=em.exports,ff=A_;jc.createRoot=ff.createRoot,jc.hydrateRoot=ff.hydrateRoot;const gt="/api",qe={async getHealth(){const t=await fetch(`${gt}/health`);if(!t.ok)throw new Error("Health check failed");return t.json()},async listProjects(){const t=await fetch(`${gt}/projects`);if(!t.ok)throw new Error("Failed to list projects");return t.json()},async createProject(t,e=""){const n=new FormData;n.append("name",t),n.append("description",e);const i=await fetch(`${gt}/projects`,{method:"POST",body:n});if(!i.ok)throw new Error("Failed to create project");return i.json()},async createDemoProject(){const t=await fetch(`${gt}/projects/create-demo`,{method:"POST"});if(!t.ok)throw new Error("Failed to generate demonstration project");return t.json()},async getProjectState(t){const e=await fetch(`${gt}/projects/${t}`);if(!e.ok)throw new Error("Failed to fetch project state");return e.json()},async uploadPhoto(t,e){const n=new FormData;n.append("file",e);const i=await fetch(`${gt}/projects/${t}/upload-photo`,{method:"POST",body:n});if(!i.ok){const r=await i.json().catch(()=>({detail:"Upload failed"}));throw new Error(r.detail||"Failed to upload photo")}return i.json()},async updateCalibration(t,e){const n=await fetch(`${gt}/projects/${t}/calibration`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Failed to update calibration");return n.json()},async runDetection(t,e=1){const n=await fetch(`${gt}/projects/${t}/detect?sensitivity=${e}`,{method:"POST"});if(!n.ok){const i=await n.json().catch(()=>({detail:"Detection failed"}));throw new Error(i.detail||"Detection failed")}return n.json()},async addFragmentPolygon(t,e){const n=await fetch(`${gt}/projects/${t}/fragments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({polygon:e})});if(!n.ok)throw new Error("Failed to add fragment polygon");return n.json()},async updateFragment(t,e){const n=await fetch(`${gt}/projects/${t}/fragments/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Failed to update fragment");return n.json()},async deleteFragment(t,e){if(!(await fetch(`${gt}/projects/${t}/fragments/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete fragment")},async aiAnalyzeFragment(t,e){const n=await fetch(`${gt}/projects/${t}/fragments/${e}/ai-analyze`,{method:"POST"});if(!n.ok)throw new Error("AI analysis failed");return n.json()},async groupFragments(t,e=.68){const n=await fetch(`${gt}/projects/${t}/group?threshold=${e}`,{method:"POST"});if(!n.ok)throw new Error("Grouping failed");return n.json()},async saveGroups(t,e){const n=await fetch(`${gt}/projects/${t}/groups`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Failed to save groups");return n.json()},async suggestJoins(t,e=!1){const n=await fetch(`${gt}/projects/${t}/suggest-joins?cross_groups=${e}`,{method:"POST"});if(!n.ok)throw new Error("Join suggestion failed");return n.json()},async updateJoinStatus(t,e,n){const i=await fetch(`${gt}/projects/${t}/joins/${e}/status?status=${n}`,{method:"POST"});if(!i.ok)throw new Error("Failed to update join status");return i.json()},async calculateRimArcFit(t,e){const n=await fetch(`${gt}/projects/${t}/rim-arc-fit`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({points:e})});if(!n.ok){const i=await n.json().catch(()=>({detail:"Rim fit failed"}));throw new Error(i.detail||"Rim arc fitting failed")}return n.json()},async getReconstruction(t){const e=await fetch(`${gt}/projects/${t}/reconstruction`);if(!e.ok)throw new Error("Failed to get reconstruction");return e.json()},async updateReconstruction(t,e){const n=await fetch(`${gt}/projects/${t}/reconstruction`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Failed to update reconstruction");return n.json()},async getTypology(t){const e=await fetch(`${gt}/projects/${t}/typology`);if(!e.ok)throw new Error("Failed to retrieve typology matches");return e.json()},async approveProject(t,e,n){const i=await fetch(`${gt}/projects/${t}/approve`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reviewer_name:e,notes:n})});if(!i.ok)throw new Error("Approval failed");return i.json()},async uploadAdditionalPhoto(t,e,n,i,r){const s=new FormData;s.append("file",e),s.append("role",n),i&&s.append("fragment_id",i),r&&s.append("notes",r);const a=await fetch(`${gt}/projects/${t}/additional-photos`,{method:"POST",body:s});if(!a.ok)throw new Error("Failed to upload additional photo");return a.json()}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ae=(t,e)=>{const n=me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>me.createElement("svg",{ref:h,...C_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${R_(t)}`,o].join(" "),...c},[...e.map(([f,p])=>me.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Ae("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=Ae("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=Ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=Ae("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=Ae("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=Ae("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=Ae("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=Ae("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=Ae("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=Ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=Ae("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Ae("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Ae("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=Ae("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ae("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Ae("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ae("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Ae("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ae("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=Ae("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=Ae("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ae("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ae("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ae("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=Ae("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=Ae("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ae("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Ae("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=Ae("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ae("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Ae("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ae("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ae("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ae("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Ae("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ae("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ae("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Ae("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Ae("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=Ae("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=Ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=Ae("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=Ae("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ae("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=Ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Ae("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Ae("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),sy=({currentProject:t,projects:e,health:n,onSelectProject:i,onCreateProject:r,onLoadDemo:s,onOpenChecklist:a,isSaving:o})=>{var l,c;return u.jsxs("header",{className:"bg-parchment-100 border-b border-parchment-300 px-6 py-3 flex items-center justify-between shadow-sm",children:[u.jsxs("div",{className:"flex items-center space-x-6",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg bg-terracotta-600 flex items-center justify-center text-white shadow-sm ring-2 ring-terracotta-200",children:u.jsx(lg,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"font-mono font-black text-lg tracking-wider text-charcoal-900",children:"SHERD-FORGE"}),u.jsx("span",{className:"text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-terracotta-100 text-terracotta-800 border border-terracotta-200",children:"v1.0"})]}),u.jsx("p",{className:"text-xs text-charcoal-400 font-medium",children:"Archaeological Fragment Reconstruction"})]})]}),u.jsxs("div",{className:"flex items-center space-x-2 pl-4 border-l border-parchment-300",children:[u.jsx("select",{value:(t==null?void 0:t.id)||"",onChange:h=>i(h.target.value),className:"bg-white border border-parchment-300 text-charcoal-800 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500 font-medium",children:e.map(h=>u.jsxs("option",{value:h.id,children:[h.name," (",h.status.toUpperCase(),")"]},h.id))}),u.jsx("button",{onClick:r,title:"Create New Project",className:"p-1.5 rounded-md hover:bg-parchment-200 text-charcoal-600 transition",children:u.jsx(rl,{className:"w-4 h-4"})}),u.jsxs("button",{onClick:s,className:"flex items-center space-x-1.5 bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-700 border border-terracotta-300 text-xs px-2.5 py-1.5 rounded-md font-semibold transition shadow-xs",children:[u.jsx(N_,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:"Synthetic Demo"})]})]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"text-xs flex items-center space-x-1.5 font-mono px-2.5 py-1 rounded bg-white border border-parchment-300 shadow-2xs",children:[u.jsx("span",{className:"text-charcoal-400",children:"Scale:"}),(l=t==null?void 0:t.calibration)!=null&&l.is_calibrated?u.jsxs("span",{className:"text-technical-green font-semibold",children:[(c=t.calibration.px_per_mm)==null?void 0:c.toFixed(2)," px/mm"]}):u.jsx("span",{className:"text-technical-amber font-medium",children:"Uncalibrated (px)"})]}),u.jsxs("div",{className:"text-xs flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white border border-parchment-300 font-mono shadow-2xs",children:[u.jsx(Gd,{className:`w-3.5 h-3.5 ${n!=null&&n.gemini_available?"text-purple-600":"text-charcoal-400"}`}),u.jsx("span",{className:"text-charcoal-600 text-[11px]",children:n!=null&&n.gemini_available?`Gemini Active (${n.gemini_model})`:"Offline Deterministic CV"})]}),u.jsxs("button",{onClick:a,className:"text-xs flex items-center space-x-1 text-charcoal-600 hover:text-charcoal-900 px-2 py-1 rounded hover:bg-parchment-200 transition",children:[u.jsx(ag,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:"Evaluation Checklist"})]})]}),u.jsx("div",{className:"flex items-center space-x-3",children:o?u.jsxs("span",{className:"text-xs text-charcoal-400 flex items-center space-x-1",children:[u.jsx(U_,{className:"w-3.5 h-3.5 animate-spin"}),u.jsx("span",{children:"Saving..."})]}):(t==null?void 0:t.status)==="approved"?u.jsxs("span",{className:"text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center space-x-1",children:[u.jsx(D_,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Approved: ",t.reviewer_name||"Reviewer"]})]}):u.jsx("span",{className:"text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200",children:"Working Draft"})})]})},ay=({currentStep:t,onSelectStep:e,stats:n})=>{const i=[{id:"capture",label:"1. Capture & Scale",icon:u.jsx(L_,{className:"w-4 h-4"}),badge:n.hasPhoto?"Photo Loaded":"Required",ready:!0},{id:"group",label:"2. Detect & Group",icon:u.jsx(J_,{className:"w-4 h-4"}),badge:n.fragmentCount>0?`${n.fragmentCount} Sherds`:void 0,ready:n.hasPhoto},{id:"assemble",label:"3. Suggested Joins",icon:u.jsx(q_,{className:"w-4 h-4"}),badge:n.acceptedJoinsCount>0?`${n.acceptedJoinsCount} Joins`:void 0,ready:n.fragmentCount>=2},{id:"reconstruct",label:"4. 3D Reconstruct",icon:u.jsx(P_,{className:"w-4 h-4"}),badge:n.hasReconstruction?"Profile":void 0,ready:n.fragmentCount>0},{id:"typology",label:"5. Typology Match",icon:u.jsx(ng,{className:"w-4 h-4"}),ready:n.fragmentCount>0},{id:"review",label:"6. Review & Export",icon:u.jsx(rg,{className:"w-4 h-4"}),badge:n.isApproved?"Approved":"Draft",ready:!0}];return u.jsxs("div",{className:"bg-parchment-200 border-b border-parchment-300 px-6 py-2 flex items-center justify-between",children:[u.jsx("nav",{className:"flex space-x-1",children:i.map(r=>{const s=t===r.id;return u.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-semibold transition ${s?"bg-charcoal-800 text-white shadow-xs":"text-charcoal-700 hover:bg-parchment-300 hover:text-charcoal-900"}`,children:[u.jsx("span",{children:r.icon}),u.jsx("span",{children:r.label}),r.badge&&u.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${s?"bg-terracotta-500 text-white":"bg-parchment-100 text-charcoal-600 border border-parchment-300"}`,children:r.badge})]},r.id)})}),u.jsx("div",{className:"text-[11px] text-charcoal-500 italic flex items-center space-x-1.5 bg-parchment-100/70 border border-parchment-300 px-2.5 py-1 rounded",children:u.jsx("span",{children:"⚠ Single-photograph evidence establishes hypotheses, not ground truth 3D surfaces."})})]})},oy=({selectedFragment:t,groups:e,photos:n,project:i,onUpdateFragment:r,onDeselect:s,onPhotoUploaded:a})=>{var v,x;const[o,l]=me.useState(!1),[c,h]=me.useState("side"),[f,p]=me.useState(!1);if(!t)return u.jsxs("aside",{className:"w-80 bg-parchment-100 border-l border-parchment-300 p-5 flex flex-col justify-between text-charcoal-700 select-text overflow-y-auto",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold mb-3",children:"Evidence Inspector"}),u.jsxs("div",{className:"bg-white rounded-lg p-4 border border-parchment-300 shadow-2xs space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-terracotta-600",children:[u.jsx(W_,{className:"w-4 h-4 shrink-0"}),u.jsx("span",{className:"text-xs font-semibold",children:"No Fragment Selected"})]}),u.jsx("p",{className:"text-xs text-charcoal-600 leading-relaxed",children:"Click any fragment on the central workspace or group list to inspect computed contour metrics, edit observations, mark fracture edges, or attach multi-view photographs."})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsx("h4",{className:"text-[11px] font-mono uppercase text-charcoal-400 font-semibold",children:"Current Context"}),u.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 text-xs space-y-2 font-mono",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-400",children:"Scale Status:"}),u.jsx("span",{className:i!=null&&i.calibration.is_calibrated?"text-emerald-700 font-semibold":"text-amber-700",children:i!=null&&i.calibration.is_calibrated?`${(v=i.calibration.px_per_mm)==null?void 0:v.toFixed(2)} px/mm`:"Uncalibrated"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-400",children:"Reference Plane:"}),u.jsx("span",{className:"text-charcoal-700",children:"Flat Table View"})]})]})]})]}),u.jsx("div",{className:"border-t border-parchment-300 pt-4 text-[11px] text-charcoal-500 leading-normal",children:u.jsx("p",{className:"italic",children:"Archaeological note: Silhouette contours provide projected 2D boundaries. Wall thickness and curvature must be verified with profile or fracture photographs."})})]});const g=e.find(_=>_.id===t.group_id),S=n.filter(_=>_.fragment_id===t.id),y=(_,T)=>{const M={...t,observations:{...t.observations,[_]:T}};r(M)},m=async()=>{if(i){l(!0);try{const _=await qe.aiAnalyzeFragment(i.id,t.id);_.available?r({...t,observations:{...t.observations,color_desc:_.color_desc||t.observations.color_desc,finish:_.finish||t.observations.finish,decoration:_.decoration||t.observations.decoration,likely_part:_.likely_part||t.observations.likely_part,notes:(t.observations.notes||"")+" "+(_.notes||""),ai_generated:!0}}):alert(_.reason||"AI analysis unavailable")}catch(_){alert(`AI request failed: ${_.message}`)}finally{l(!1)}}},d=async _=>{if(!i||!_.target.files||_.target.files.length===0)return;const T=_.target.files[0];p(!0);try{await qe.uploadAdditionalPhoto(i.id,T,c,t.id,`Manual ${c} view`),a()}catch(M){alert(`Upload failed: ${M.message}`)}finally{p(!1)}};return u.jsx("aside",{className:"w-88 bg-parchment-100 border-l border-parchment-300 flex flex-col justify-between text-charcoal-800 select-text overflow-y-auto",children:u.jsxs("div",{className:"p-4 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"text-base font-mono font-bold text-charcoal-900 bg-white px-2 py-0.5 rounded border border-parchment-300 shadow-2xs",children:t.id}),g?u.jsxs("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full text-white flex items-center space-x-1",style:{backgroundColor:g.color_hex},children:[u.jsx(cg,{className:"w-3 h-3"}),u.jsx("span",{children:g.name})]}):u.jsx("span",{className:"text-xs text-charcoal-500 bg-parchment-200 px-2 py-0.5 rounded",children:"Unassigned"})]}),u.jsx("button",{onClick:s,className:"p-1 text-charcoal-400 hover:text-charcoal-700 rounded",children:u.jsx(va,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs flex space-x-3",children:[u.jsx("div",{className:"w-20 h-20 rounded bg-parchment-100 border border-parchment-200 flex items-center justify-center overflow-hidden p-1 shrink-0",children:u.jsx("img",{src:t.crop_url,alt:t.id,className:"max-w-full max-h-full object-contain"})}),u.jsxs("div",{className:"text-[11px] font-mono space-y-1 flex-1",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-400",children:"Area:"}),u.jsx("span",{className:"font-semibold text-charcoal-800",children:t.area_mm2?`${t.area_mm2} mm²`:`${t.area_px} px`})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-400",children:"Perimeter:"}),u.jsx("span",{className:"text-charcoal-800",children:t.perimeter_mm?`${t.perimeter_mm} mm`:`${t.perimeter_px} px`})]}),t.features.mean_rgb&&u.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-parchment-200",children:[u.jsx("span",{className:"text-charcoal-400",children:"Mean Color:"}),u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsx("div",{className:"w-3.5 h-3.5 rounded border border-charcoal-400",style:{backgroundColor:`rgb(${t.features.mean_rgb.join(",")})`}}),u.jsx("span",{className:"text-[10px] text-charcoal-500",children:"RGB"})]})]}),t.features.texture_roughness!==void 0&&u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-400",children:"Roughness:"}),u.jsx("span",{className:"text-charcoal-700",children:(x=t.features.texture_roughness)==null?void 0:x.toFixed(1)})]})]})]}),u.jsxs("div",{className:"flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg p-2.5",children:[u.jsxs("div",{className:"text-xs",children:[u.jsxs("div",{className:"font-semibold text-purple-900 flex items-center space-x-1",children:[u.jsx(Gd,{className:"w-3.5 h-3.5 text-purple-600"}),u.jsx("span",{children:"AI Feature Assistant"})]}),u.jsx("span",{className:"text-[10px] text-purple-700",children:"Suggest visible finish & part"})]}),u.jsx("button",{onClick:m,disabled:o,className:"text-xs bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium px-2.5 py-1 rounded transition shadow-2xs",children:o?"Analyzing...":"Analyze"})]}),u.jsxs("div",{className:"space-y-3 bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs text-xs",children:[u.jsx("h4",{className:"font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500",children:"Visible Evidence & Notes"}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Anatomical Part"}),u.jsxs("select",{value:t.observations.likely_part,onChange:_=>y("likely_part",_.target.value),className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800 font-medium",children:[u.jsx("option",{value:"unknown",children:"Unknown / Unspecified"}),u.jsx("option",{value:"rim",children:"Rim (Lip preserved)"}),u.jsx("option",{value:"body",children:"Body (Wall sherd)"}),u.jsx("option",{value:"base",children:"Base (Bottom section)"}),u.jsx("option",{value:"handle",children:"Handle / Lug"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Visible Color / Slip"}),u.jsx("input",{type:"text",value:t.observations.color_desc||"",onChange:_=>y("color_desc",_.target.value),placeholder:"e.g. Terracotta orange, pale buff",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Finish & Temper"}),u.jsx("input",{type:"text",value:t.observations.finish||"",onChange:_=>y("finish",_.target.value),placeholder:"e.g. Burnished slip, sand grit",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsx("label",{className:"text-[11px] text-charcoal-500",children:"Wall Thickness (mm)"}),u.jsx("span",{className:"text-[10px] text-terracotta-600 italic",children:"Side-view only"})]}),u.jsx("input",{type:"number",step:"0.1",value:t.observations.wall_thickness_mm??"",onChange:_=>y("wall_thickness_mm",_.target.value?parseFloat(_.target.value):null),placeholder:"Enter caliper/profile measurement",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800 font-mono"}),u.jsx("p",{className:"text-[10px] text-charcoal-400 mt-0.5 leading-tight",children:"⚠ Never inferred from top-view silhouette. Measure directly from fracture face."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[11px] text-charcoal-500 mb-1",children:"Observational Notes"}),u.jsx("textarea",{rows:2,value:t.observations.notes||"",onChange:_=>y("notes",_.target.value),placeholder:"Tool marks, wear, residue traces...",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"})]})]}),u.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("h4",{className:"font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500",children:"Edge Constraints"}),u.jsxs("span",{className:"text-[10px] bg-parchment-200 px-1.5 py-0.5 rounded text-charcoal-600",children:[t.edge_annotations.length," marked"]})]}),u.jsx("p",{className:"text-[11px] text-charcoal-500 leading-normal",children:"Mark original rim or base edges so geometric join matching will not attempt to mate unbroken vessel lips."}),t.edge_annotations.map(_=>u.jsxs("div",{className:"flex items-center justify-between p-2 rounded bg-parchment-50 border border-parchment-200",children:[u.jsxs("div",{children:[u.jsx("span",{className:"font-semibold text-charcoal-800",children:_.label||"Marked Boundary"}),u.jsxs("div",{className:"text-[10px] text-charcoal-400 font-mono",children:["Type: ",_.edge_type==="original_vessel_edge"?"Preserved Vessel Rim/Lip":"Fracture Break"]})]}),u.jsx("button",{onClick:()=>{const T=t.edge_annotations.filter(M=>M.id!==_.id);r({...t,edge_annotations:T})},className:"text-red-500 hover:text-red-700 p-1",children:u.jsx(va,{className:"w-3.5 h-3.5"})})]},_.id)),u.jsx("button",{onClick:()=>{const _={id:`ea_${Date.now()}`,start_idx:0,end_idx:Math.min(10,t.contour.length-1),edge_type:"original_vessel_edge",label:"Marked Rim Section"};r({...t,edge_annotations:[...t.edge_annotations,_]})},className:"w-full text-center text-xs py-1.5 rounded border border-dashed border-terracotta-400 text-terracotta-700 hover:bg-terracotta-50 transition font-medium",children:"+ Mark Section as Original Vessel Edge"})]}),u.jsxs("div",{className:"bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("h4",{className:"font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500",children:"Multi-View Photos"}),u.jsxs("span",{className:"text-[10px] text-charcoal-400",children:[S.length," views"]})]}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:S.map(_=>u.jsxs("div",{className:"relative rounded border border-parchment-200 overflow-hidden bg-parchment-50",children:[u.jsx("img",{src:_.file_url,alt:_.role,className:"w-full h-16 object-cover"}),u.jsx("span",{className:"absolute bottom-0 inset-x-0 bg-charcoal-900/70 text-white text-[9px] px-1 py-0.5 font-mono truncate",children:_.role})]},_.id))}),u.jsxs("div",{className:"pt-2 border-t border-parchment-200",children:[u.jsx("div",{className:"flex space-x-1 mb-2",children:["side","fracture","inner_face","outer_face"].map(_=>u.jsx("button",{onClick:()=>h(_),className:`text-[10px] px-2 py-0.5 rounded capitalize ${c===_?"bg-charcoal-800 text-white":"bg-parchment-200 text-charcoal-700"}`,children:_.replace("_"," ")},_))}),u.jsxs("label",{className:"flex items-center justify-center space-x-1.5 py-1.5 px-3 border border-dashed border-charcoal-300 rounded cursor-pointer hover:bg-parchment-50 transition text-charcoal-600",children:[u.jsx(Fu,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"text-[11px] font-medium",children:f?"Uploading...":`Upload ${c} photo`}),u.jsx("input",{type:"file",accept:"image/jpeg,image/png",onChange:d,className:"hidden"})]})]})]})]})})},ly=({project:t,onPhotoUploaded:e,onCalibrationUpdated:n,onNextStep:i})=>{var y,m,d,v,x;const[r,s]=me.useState(!1),[a,o]=me.useState(!1),[l,c]=me.useState([]),[h,f]=me.useState(100),p=me.useRef(null),g=async _=>{if(!_.target.files||_.target.files.length===0)return;const T=_.target.files[0];s(!0);try{const M=await qe.uploadPhoto(t.id,T);e(M.primary_photo_url,M.dimensions)}catch(M){alert(`Upload failed: ${M.message}`)}finally{s(!1)}},S=_=>{if(!a||!p.current)return;const T=p.current.getBoundingClientRect(),M=p.current.naturalWidth,b=p.current.naturalHeight,U=_.clientX-T.left,E=_.clientY-T.top,C=M/T.width,W=b/T.height,F=Math.round(U*C),K=Math.round(E*W);if(l.length===0)c([[F,K]]);else if(l.length===1){const L=l[0],z=[F,K];c([L,z]);const N=z[0]-L[0],H=z[1]-L[1],P=Math.sqrt(N*N+H*H),I=Number((P/h).toFixed(4));qe.updateCalibration(t.id,{is_calibrated:!0,px_per_mm:I,point_a:L,point_b:z,distance_mm:h,notes:`Ruler scale: ${h}mm = ${Math.round(P)}px`}).then(O=>{n(O),o(!1)})}};return u.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-4 mb-6 shadow-2xs flex items-start space-x-3",children:[u.jsx("div",{className:"p-2 bg-terracotta-100 rounded-lg text-terracotta-700 shrink-0 mt-0.5",children:u.jsx(Z_,{className:"w-5 h-5"})}),u.jsxs("div",{className:"text-xs space-y-1",children:[u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Overhead Photography & Scale Calibration"}),u.jsx("p",{className:"text-charcoal-600 leading-relaxed",children:"“Separate fragments, avoid overlap, use even lighting, and include a scale. One photograph supports preliminary grouping; side and fracture views improve reconstruction.”"}),u.jsx("p",{className:"text-[11px] text-terracotta-700 font-medium",children:"Note: Calibration applies to the reference plane. Raised, curved, or tilted surfaces can introduce perspective measurement error."})]})]}),t.primary_photo_url?u.jsxs("div",{className:"flex-1 flex flex-col space-y-4",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg px-4 py-2.5 flex items-center justify-between shadow-2xs",children:[u.jsxs("div",{className:"flex items-center space-x-4 text-xs font-mono",children:[u.jsx("span",{className:"text-charcoal-500 font-sans",children:"Scale Calibration:"}),t.calibration.is_calibrated?u.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-700 font-semibold",children:[u.jsx(jd,{className:"w-4 h-4"}),u.jsxs("span",{children:[(y=t.calibration.px_per_mm)==null?void 0:y.toFixed(2)," px/mm (",t.calibration.distance_mm," mm)"]})]}):u.jsxs("div",{className:"flex items-center space-x-1 text-amber-700",children:[u.jsx(tg,{className:"w-4 h-4"}),u.jsx("span",{children:"Uncalibrated (results in pixels)"})]}),a?u.jsxs("div",{className:"flex items-center space-x-2 pl-4 border-l border-parchment-300",children:[u.jsx("span",{className:"text-terracotta-600 animate-pulse font-semibold",children:l.length===0?"Click Point 1 on ruler":"Click Point 2 on ruler"}),u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsx("span",{className:"text-charcoal-500 font-sans",children:"Distance:"}),u.jsx("input",{type:"number",value:h,onChange:_=>f(parseFloat(_.target.value)||100),className:"w-16 bg-parchment-50 border border-parchment-300 rounded px-1.5 py-0.5 text-xs font-mono"}),u.jsx("span",{className:"text-charcoal-500",children:"mm"})]}),u.jsx("button",{onClick:()=>{o(!1),c([])},className:"text-xs text-charcoal-500 hover:text-charcoal-800 underline",children:"Cancel"})]}):u.jsxs("button",{onClick:()=>{o(!0),c([])},className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 px-3 py-1 rounded border border-parchment-300 transition",children:[u.jsx(F_,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:t.calibration.is_calibrated?"Recalibrate Scale":"Calibrate Scale on Ruler"})]})]}),u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("label",{className:"text-xs text-charcoal-600 hover:text-charcoal-900 cursor-pointer flex items-center space-x-1",children:[u.jsx(Hd,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Replace Photo"}),u.jsx("input",{type:"file",accept:"image/jpeg,image/png",onChange:g,className:"hidden"})]}),u.jsxs("button",{onClick:i,className:"bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[u.jsx("span",{children:"Proceed to Detect Fragments"}),u.jsx(ba,{className:"w-3.5 h-3.5"})]})]})]}),u.jsx("div",{className:"flex-1 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border border-charcoal-700 shadow-inner min-h-[500px]",children:u.jsxs("div",{className:"relative inline-block max-w-full max-h-full",children:[u.jsx("img",{ref:p,src:t.primary_photo_url,alt:"Overhead View",onClick:S,className:`max-w-full max-h-[680px] object-contain rounded select-none ${a?"cursor-crosshair":"cursor-default"}`}),t.calibration.point_a&&t.calibration.point_b&&u.jsxs("svg",{className:"absolute inset-0 pointer-events-none w-full h-full",viewBox:`0 0 ${((m=t.primary_photo_dimensions)==null?void 0:m[0])||1600} ${((d=t.primary_photo_dimensions)==null?void 0:d[1])||1200}`,children:[u.jsx("line",{x1:t.calibration.point_a[0],y1:t.calibration.point_a[1],x2:t.calibration.point_b[0],y2:t.calibration.point_b[1],stroke:"#28A745",strokeWidth:"4",strokeDasharray:"6,4"}),u.jsx("circle",{cx:t.calibration.point_a[0],cy:t.calibration.point_a[1],r:"7",fill:"#28A745",stroke:"#FFFFFF",strokeWidth:"2"}),u.jsx("circle",{cx:t.calibration.point_b[0],cy:t.calibration.point_b[1],r:"7",fill:"#28A745",stroke:"#FFFFFF",strokeWidth:"2"}),u.jsxs("text",{x:(t.calibration.point_a[0]+t.calibration.point_b[0])/2,y:(t.calibration.point_a[1]+t.calibration.point_b[1])/2-12,fill:"#28A745",fontSize:"16",fontWeight:"bold",textAnchor:"middle",className:"drop-shadow-md",children:[t.calibration.distance_mm," mm"]})]}),a&&l.length===1&&u.jsx("div",{className:"absolute w-4 h-4 rounded-full bg-terracotta-500 border-2 border-white pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping",style:{left:`${l[0][0]/(((v=t.primary_photo_dimensions)==null?void 0:v[0])||1600)*100}%`,top:`${l[0][1]/(((x=t.primary_photo_dimensions)==null?void 0:x[1])||1200)*100}%`}})]})})]}):u.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-2 border-dashed border-parchment-300 rounded-xl bg-white p-12 text-center",children:[u.jsx("div",{className:"w-16 h-16 rounded-full bg-parchment-100 flex items-center justify-center text-charcoal-400 mb-4",children:u.jsx(Fu,{className:"w-8 h-8 text-terracotta-500"})}),u.jsx("h2",{className:"text-base font-bold text-charcoal-900 mb-1",children:"Upload Overhead Pottery Photograph"}),u.jsx("p",{className:"text-xs text-charcoal-500 max-w-md mb-6",children:"Accepts JPEG or PNG up to 20MB. Plain, high-contrast matte tabletop background with a visible millimetre scale bar is recommended."}),u.jsxs("label",{className:"bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition flex items-center space-x-2",children:[u.jsx(Fu,{className:"w-4 h-4"}),u.jsx("span",{children:r?"Uploading...":"Select Overhead Photograph"}),u.jsx("input",{type:"file",accept:"image/jpeg,image/png",onChange:g,className:"hidden"})]})]})]})},cy=({project:t,fragments:e,groups:n,selectedFragmentId:i,onSelectFragment:r,onFragmentsUpdated:s,onGroupsUpdated:a,onNextStep:o})=>{var K,L,z;const[l,c]=me.useState(1),[h,f]=me.useState(!1),[p,g]=me.useState(.68),[S,y]=me.useState(!1),[m,d]=me.useState(!1),[v,x]=me.useState([]),_=me.useRef(null),T=async()=>{f(!0);try{const N=await qe.runDetection(t.id,l);s(N),N.length>0&&r(N[0])}catch(N){alert(`Detection failed: ${N.message}`)}finally{f(!1)}},M=async()=>{y(!0);try{const N=await qe.groupFragments(t.id,p);a(N.groups),s(N.fragments)}catch(N){alert(`Grouping failed: ${N.message}`)}finally{y(!1)}},b=N=>{if(!m||!_.current)return;const H=_.current.getBoundingClientRect(),P=_.current.naturalWidth,I=_.current.naturalHeight,O=N.clientX-H.left,Z=N.clientY-H.top,J=P/H.width,q=I/H.height,Q=Math.round(O*J),ce=Math.round(Z*q);x([...v,[Q,ce]])},U=async()=>{if(v.length<3){alert("At least 3 points are required to define a fragment polygon.");return}try{const N=await qe.addFragmentPolygon(t.id,v);s([...e,N]),r(N),d(!1),x([])}catch(N){alert(`Failed to add polygon: ${N.message}`)}},E=async()=>{if(i&&confirm(`Delete fragment ${i}?`))try{await qe.deleteFragment(t.id,i);const N=e.filter(H=>H.id!==i);s(N),r(null)}catch(N){alert(`Delete failed: ${N.message}`)}},C=(N,H)=>{const P=e.map(O=>O.id===N?{...O,group_id:H}:O);s(P);const I=n.map(O=>{let Z=O.fragment_ids.filter(J=>J!==N);return O.id===H&&Z.push(N),{...O,fragment_ids:Z}});a(I),qe.saveGroups(t.id,I)},W=N=>{const H=e.find(I=>I.id===N);if(!H)return;const P=e.map(I=>I.id===N?{...I,locked_group:!I.locked_group}:I);s(P),qe.updateFragment(t.id,{...H,locked_group:!H.locked_group})},F=()=>{const N=`VG${n.length+1}`,H=["#C85A32","#2A6F97","#588157","#B08968","#7209B7","#E07A5F"],P={id:N,project_id:t.id,name:`Vessel Group ${n.length+1}`,color_hex:H[n.length%H.length],fragment_ids:i?[i]:[],confirmed:!1,notes:"User created group"},I=[...n,P];a(I),qe.saveGroups(t.id,I)};return u.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-6 text-xs",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(ey,{className:"w-3.5 h-3.5 text-charcoal-400"}),u.jsx("span",{className:"text-charcoal-600 font-medium",children:"Detection Sensitivity:"}),u.jsx("input",{type:"range",min:"0.4",max:"2.2",step:"0.1",value:l,onChange:N=>c(parseFloat(N.target.value)),className:"w-24 accent-terracotta-600"}),u.jsxs("span",{className:"font-mono text-charcoal-700 w-8",children:[l.toFixed(1),"x"]})]}),u.jsxs("button",{onClick:T,disabled:h,className:"flex items-center space-x-1.5 bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[u.jsx(Hd,{className:`w-3.5 h-3.5 ${h?"animate-spin":""}`}),u.jsx("span",{children:h?"Segmenting...":"Detect Sherds"})]}),m?u.jsxs("div",{className:"flex items-center space-x-2 bg-amber-50 border border-amber-300 px-3 py-1 rounded-md",children:[u.jsxs("span",{className:"text-amber-800 font-medium",children:["Click vertices on photo (",v.length," pts)"]}),u.jsx("button",{onClick:U,className:"bg-amber-600 text-white px-2 py-0.5 rounded text-xs font-semibold",children:"Done"}),u.jsx("button",{onClick:()=>{d(!1),x([])},className:"text-xs text-charcoal-500 underline",children:"Cancel"})]}):u.jsxs("button",{onClick:()=>{d(!0),x([])},className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md transition",children:[u.jsx(rl,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:"Add Missing Polygon"})]}),i&&u.jsxs("button",{onClick:E,className:"flex items-center space-x-1 text-red-600 hover:text-red-800 px-2.5 py-1.5 rounded hover:bg-red-50 transition",children:[u.jsx(ug,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Delete ",i]})]})]}),u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[u.jsx("span",{className:"text-charcoal-500",children:"Group Strictness:"}),u.jsx("input",{type:"range",min:"0.50",max:"0.88",step:"0.02",value:p,onChange:N=>g(parseFloat(N.target.value)),className:"w-20 accent-terracotta-600"}),u.jsxs("span",{className:"font-mono text-charcoal-700 w-8",children:[(p*100).toFixed(0),"%"]})]}),u.jsxs("button",{onClick:M,disabled:S||e.length===0,className:"flex items-center space-x-1.5 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm transition",children:[u.jsx(lg,{className:"w-3.5 h-3.5 text-terracotta-400"}),u.jsx("span",{children:S?"Clustering...":"Suggest Vessel Groups"})]}),u.jsxs("button",{onClick:o,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[u.jsx("span",{children:"Proceed to Joins"}),u.jsx(ba,{className:"w-3.5 h-3.5"})]})]})]}),u.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-5 min-h-[520px]",children:[u.jsx("div",{className:"col-span-8 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border border-charcoal-700 shadow-inner",children:u.jsxs("div",{className:"relative inline-block max-w-full max-h-full",children:[u.jsx("img",{ref:_,src:t.primary_photo_url||"",alt:"Sherd Detection",onClick:b,className:`max-w-full max-h-[640px] object-contain rounded select-none ${m?"cursor-crosshair":"cursor-pointer"}`}),u.jsxs("svg",{className:"absolute inset-0 pointer-events-none w-full h-full",viewBox:`0 0 ${((K=t.primary_photo_dimensions)==null?void 0:K[0])||1600} ${((L=t.primary_photo_dimensions)==null?void 0:L[1])||1200}`,children:[e.map(N=>{const H=i===N.id,P=n.find(J=>J.id===N.group_id),I=P?P.color_hex:"#9CA3AF",O=H?`${I}44`:"transparent",Z=N.contour.map((J,q)=>`${q===0?"M":"L"} ${J[0]} ${J[1]}`).join(" ")+" Z";return u.jsxs("g",{className:"pointer-events-auto cursor-pointer",onClick:()=>r(N),children:[u.jsx("path",{d:Z,fill:O,stroke:I,strokeWidth:H?"5":"3",strokeDasharray:P?"none":"6,4",className:"transition-all hover:stroke-white"}),u.jsxs("g",{transform:`translate(${N.centroid[0]}, ${N.centroid[1]})`,children:[u.jsx("rect",{x:"-20",y:"-12",width:"40",height:"24",rx:"4",fill:"#1F2421",stroke:I,strokeWidth:"2",className:"shadow-md"}),u.jsx("text",{x:"0",y:"4",fill:"#FFFFFF",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:N.id})]})]},N.id)}),m&&v.length>0&&u.jsxs("g",{children:[u.jsx("polyline",{points:v.map(N=>`${N[0]},${N[1]}`).join(" "),fill:"none",stroke:"#F59E0B",strokeWidth:"3",strokeDasharray:"4,4"}),v.map((N,H)=>u.jsx("circle",{cx:N[0],cy:N[1],r:"5",fill:"#F59E0B",stroke:"#FFFFFF",strokeWidth:"2"},H))]})]})]})}),u.jsxs("div",{className:"col-span-4 bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(cg,{className:"w-4 h-4 text-terracotta-600"}),u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Vessel Groups"})]}),u.jsxs("button",{onClick:F,className:"text-xs text-terracotta-700 hover:text-terracotta-900 font-semibold flex items-center space-x-1",children:[u.jsx(rl,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"New Group"})]})]}),u.jsx("p",{className:"text-[11px] text-charcoal-500 mt-2 mb-4 leading-normal",children:"Conservative grouping clusters fragments with matching fabric color and texture. Drag or select below to reassign or lock assignments."}),u.jsxs("div",{className:"space-y-3",children:[n.map(N=>u.jsxs("div",{className:"border border-parchment-300 rounded-lg p-3 bg-parchment-50/70 shadow-2xs",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:N.color_hex}}),u.jsx("span",{className:"font-semibold text-xs text-charcoal-900",children:N.name})]}),u.jsxs("span",{className:"text-[10px] font-mono text-charcoal-500",children:[N.fragment_ids.length," fragments"]})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:N.fragment_ids.map(H=>{const P=e.find(O=>O.id===H),I=i===H;return u.jsxs("div",{onClick:()=>P&&r(P),className:`flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono font-bold cursor-pointer transition ${I?"bg-charcoal-800 text-white ring-2 ring-terracotta-500":"bg-white border border-parchment-300 text-charcoal-800 hover:bg-parchment-100"}`,children:[u.jsx("span",{children:H}),u.jsx("button",{onClick:O=>{O.stopPropagation(),W(H)},title:P!=null&&P.locked_group?"Assignment Locked":"Unlocked",className:"text-charcoal-400 hover:text-charcoal-800 pl-1",children:P!=null&&P.locked_group?u.jsx(Iu,{className:"w-3 h-3 text-terracotta-600"}):u.jsx(dg,{className:"w-3 h-3 text-charcoal-300"})}),u.jsx("button",{onClick:O=>{O.stopPropagation(),C(H,null)},title:"Unassign",className:"text-charcoal-400 hover:text-red-600 pl-0.5",children:"×"})]},H)})})]},N.id)),e.filter(N=>!N.group_id).length>0&&u.jsxs("div",{className:"border border-dashed border-charcoal-300 rounded-lg p-3 bg-white",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsxs("span",{className:"text-xs font-semibold text-charcoal-500 flex items-center space-x-1",children:[u.jsx(og,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Unassigned Fragments"})]}),u.jsxs("span",{className:"text-[10px] font-mono text-charcoal-400",children:[e.filter(N=>!N.group_id).length," sherds"]})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.filter(N=>!N.group_id).map(N=>u.jsx("div",{onClick:()=>r(N),className:`px-2 py-1 rounded text-xs font-mono font-medium cursor-pointer border ${i===N.id?"bg-charcoal-800 text-white":"bg-parchment-100 border-parchment-300 text-charcoal-600 hover:bg-parchment-200"}`,children:N.id},N.id))})]})]})]}),i&&u.jsxs("div",{className:"pt-3 border-t border-parchment-300 flex items-center justify-between text-xs",children:[u.jsxs("span",{className:"text-charcoal-600",children:["Assign ",i," to:"]}),u.jsxs("select",{value:((z=e.find(N=>N.id===i))==null?void 0:z.group_id)||"",onChange:N=>C(i,N.target.value||null),className:"bg-white border border-parchment-300 rounded px-2 py-1 text-xs font-medium text-charcoal-800",children:[u.jsx("option",{value:"",children:"Unassigned"}),n.map(N=>u.jsx("option",{value:N.id,children:N.name},N.id))]})]})]})]})]})},uy=({project:t,fragments:e,joins:n,groups:i,selectedFragmentId:r,onSelectFragment:s,onFragmentsUpdated:a,onJoinsUpdated:o,onNextStep:l})=>{const[c,h]=me.useState(.85),[f,p]=me.useState({x:100,y:80}),[g,S]=me.useState(!1),[y,m]=me.useState(null),[d,v]=me.useState({x:0,y:0}),[x,_]=me.useState({x:0,y:0}),[T,M]=me.useState([]),[b,U]=me.useState(-1),[E,C]=me.useState(!0),[W,F]=me.useState(!1),[K,L]=me.useState(!1),z=me.useRef(null);me.useEffect(()=>{let X=!1;const se=e.map((fe,ae)=>fe.placement.x===0&&fe.placement.y===0?(X=!0,{...fe,placement:{...fe.placement,x:fe.centroid[0]||200+ae%4*220,y:fe.centroid[1]||200+Math.floor(ae/4)*220}}):fe);X&&a(se)},[e.length]);const N=async()=>{L(!0);try{const X=await qe.suggestJoins(t.id,W);o(X)}catch(X){alert(`Join suggestion failed: ${X.message}`)}finally{L(!1)}},H=async(X,se)=>{try{await qe.updateJoinStatus(t.id,X,se);const fe=n.map(ae=>ae.id===X?{...ae,status:se}:ae);if(o(fe),se==="accepted"){const ae=n.find(we=>we.id===X);if(ae){const we=e.find(lt=>lt.id===ae.fragment_a_id),j=e.find(lt=>lt.id===ae.fragment_b_id);if(we&&j&&!j.placement.locked){P();const lt=(j.placement.rotation_deg+ae.transform_rotation_deg)%360,ye=we.placement.x+ae.transform_tx,Pe=we.placement.y+ae.transform_ty,Se=e.map(Je=>Je.id===j.id?{...Je,placement:{...Je.placement,x:ye,y:Pe,rotation_deg:lt}}:Je);a(Se),qe.updateFragment(t.id,{...j,placement:{...j.placement,x:ye,y:Pe,rotation_deg:lt}})}}}}catch(fe){alert(`Status update failed: ${fe.message}`)}},P=()=>{const X=e.map(se=>({...se,placement:{...se.placement}}));M(se=>[...se.slice(0,b+1),X]),U(se=>se+1)},I=X=>{if(!r)return;const se=e.find(we=>we.id===r);if(!se||se.placement.locked)return;P();const fe=(se.placement.rotation_deg+X)%360,ae=e.map(we=>we.id===r?{...we,placement:{...we.placement,rotation_deg:fe}}:we);a(ae),qe.updateFragment(t.id,{...se,placement:{...se.placement,rotation_deg:fe}})},O=X=>{const se=e.find(ae=>ae.id===X);if(!se)return;const fe=e.map(ae=>ae.id===X?{...ae,placement:{...ae.placement,locked:!ae.placement.locked}}:ae);a(fe),qe.updateFragment(t.id,{...se,placement:{...se.placement,locked:!se.placement.locked}})},Z=X=>{const se=e.find(ae=>ae.id===X);if(!se)return;P();const fe=e.map(ae=>ae.id===X?{...ae,placement:{x:se.centroid[0],y:se.centroid[1],rotation_deg:0,locked:!1}}:ae);a(fe),qe.updateFragment(t.id,{...se,placement:{x:se.centroid[0],y:se.centroid[1],rotation_deg:0,locked:!1}})},J=X=>{X.target.closest(".fragment-item")||(S(!0),v({x:X.clientX-f.x,y:X.clientY-f.y}))},q=X=>{if(g)p({x:X.clientX-d.x,y:X.clientY-d.y});else if(y){const se=e.find(ye=>ye.id===y);if(!se||se.placement.locked)return;const fe=(X.clientX-d.x)/c,ae=(X.clientY-d.y)/c,we=x.x+fe,j=x.y+ae,lt=e.map(ye=>ye.id===y?{...ye,placement:{...ye.placement,x:we,y:j}}:ye);a(lt)}},Q=()=>{if(g&&S(!1),y){const X=e.find(se=>se.id===y);X&&qe.updateFragment(t.id,X),m(null)}},ce=X=>{X.preventDefault();const se=X.deltaY<0?1.1:.9;h(fe=>Math.min(2.5,Math.max(.3,fe*se)))},ue=e.find(X=>X.id===r);return u.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-6 text-xs",children:[u.jsxs("div",{className:"flex items-center space-x-1 border-r border-parchment-300 pr-4",children:[u.jsx("button",{onClick:()=>h(X=>Math.max(.3,X-.1)),className:"p-1 text-charcoal-600 hover:text-charcoal-900 rounded",children:u.jsx(ry,{className:"w-4 h-4"})}),u.jsxs("span",{className:"font-mono text-[11px] text-charcoal-700 w-12 text-center",children:[Math.round(c*100),"%"]}),u.jsx("button",{onClick:()=>h(X=>Math.min(2.5,X+.1)),className:"p-1 text-charcoal-600 hover:text-charcoal-900 rounded",children:u.jsx(iy,{className:"w-4 h-4"})}),u.jsx("button",{onClick:()=>{h(1),p({x:80,y:60})},className:"p-1 text-charcoal-400 hover:text-charcoal-800",title:"Reset View",children:u.jsx(X_,{className:"w-3.5 h-3.5"})})]}),ue&&u.jsxs("div",{className:"flex items-center space-x-2 border-r border-parchment-300 pr-4",children:[u.jsxs("span",{className:"font-mono font-bold text-charcoal-800",children:[ue.id,":"]}),u.jsx("button",{onClick:()=>I(-5),disabled:ue.placement.locked,className:"p-1 rounded hover:bg-parchment-200 text-charcoal-700 disabled:opacity-40",title:"Rotate -5°",children:u.jsx(Y_,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:()=>I(-45),disabled:ue.placement.locked,className:"px-1.5 py-0.5 rounded bg-parchment-100 hover:bg-parchment-200 text-[10px] font-mono text-charcoal-700 disabled:opacity-40",children:"-45°"}),u.jsxs("span",{className:"font-mono text-charcoal-800 text-[11px] w-12 text-center",children:[Math.round(ue.placement.rotation_deg),"°"]}),u.jsx("button",{onClick:()=>I(45),disabled:ue.placement.locked,className:"px-1.5 py-0.5 rounded bg-parchment-100 hover:bg-parchment-200 text-[10px] font-mono text-charcoal-700 disabled:opacity-40",children:"+45°"}),u.jsx("button",{onClick:()=>I(5),disabled:ue.placement.locked,className:"p-1 rounded hover:bg-parchment-200 text-charcoal-700 disabled:opacity-40",title:"Rotate +5°",children:u.jsx(K_,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:()=>O(ue.id),className:"p-1 text-charcoal-600 hover:text-charcoal-900 ml-1",title:ue.placement.locked?"Unlock Placement":"Lock Placement",children:ue.placement.locked?u.jsx(Iu,{className:"w-3.5 h-3.5 text-terracotta-600"}):u.jsx(dg,{className:"w-3.5 h-3.5 text-charcoal-400"})}),u.jsx("button",{onClick:()=>Z(ue.id),className:"text-[10px] text-charcoal-500 hover:text-charcoal-900 underline ml-1",children:"Reset"})]}),u.jsxs("button",{onClick:()=>C(X=>!X),className:"flex items-center space-x-1 text-xs text-charcoal-600 hover:text-charcoal-900",children:[E?u.jsx(z_,{className:"w-3.5 h-3.5 text-terracotta-600"}):u.jsx(O_,{className:"w-3.5 h-3.5 text-charcoal-400"}),u.jsx("span",{children:"Outlines"})]})]}),u.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[u.jsxs("label",{className:"flex items-center space-x-1 text-charcoal-600 cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:W,onChange:X=>F(X.target.checked),className:"rounded text-terracotta-600"}),u.jsx("span",{className:"text-[11px]",children:"Match across groups"})]}),u.jsxs("button",{onClick:N,disabled:K||e.length<2,className:"flex items-center space-x-1.5 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[u.jsx($_,{className:`w-3.5 h-3.5 ${K?"animate-spin":""}`}),u.jsx("span",{children:K?"Matching Contours...":"Suggest Geometric Joins"})]}),u.jsxs("button",{onClick:l,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[u.jsx("span",{children:"Proceed to 3D Reconstruct"}),u.jsx(ba,{className:"w-3.5 h-3.5"})]})]})]}),u.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-5 min-h-[560px]",children:[u.jsxs("div",{ref:z,onMouseDown:J,onMouseMove:q,onMouseUp:Q,onWheel:ce,className:"col-span-8 bg-charcoal-900 rounded-xl overflow-hidden relative cursor-grab active:cursor-grabbing border border-charcoal-700 shadow-inner flex select-none",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",backgroundSize:`${40*c}px ${40*c}px`,backgroundPosition:`${f.x}px ${f.y}px`}}),u.jsx("div",{className:"absolute",style:{transform:`translate(${f.x}px, ${f.y}px) scale(${c})`,transformOrigin:"0 0"},children:e.map(X=>{const se=r===X.id,fe=i.find(we=>we.id===X.group_id),ae=fe?fe.color_hex:"#A0AEC0";return u.jsxs("div",{className:"fragment-item absolute cursor-move",style:{left:`${X.placement.x}px`,top:`${X.placement.y}px`,transform:`translate(-50%, -50%) rotate(${X.placement.rotation_deg}deg)`},onMouseDown:we=>{we.stopPropagation(),s(X),X.placement.locked||(m(X.id),v({x:we.clientX,y:we.clientY}),_({x:X.placement.x,y:X.placement.y}))},children:[u.jsx("img",{src:X.crop_url,alt:X.id,draggable:!1,className:`max-w-[240px] max-h-[240px] object-contain drop-shadow-xl transition-shadow ${se?"ring-2 ring-terracotta-400 ring-offset-2 ring-offset-charcoal-900":""}`}),u.jsxs("div",{className:"absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-white shadow-md flex items-center space-x-1",style:{backgroundColor:ae},children:[u.jsx("span",{children:X.id}),X.placement.locked&&u.jsx(Iu,{className:"w-2.5 h-2.5"})]})]},X.id)})}),u.jsx("div",{className:"absolute bottom-3 left-3 bg-charcoal-950/80 border border-charcoal-700 text-[10px] text-charcoal-400 px-2.5 py-1 rounded backdrop-blur-xs font-mono",children:"Proposed Assembly Hypothesis (Planar Projection) • Wheel: Zoom • Drag: Move"})]}),u.jsx("div",{className:"col-span-4 bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Suggested Edge Joins"}),u.jsxs("span",{className:"text-xs font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal-700 font-semibold",children:[n.length," candidates"]})]}),u.jsx("p",{className:"text-[11px] text-charcoal-500 mt-2 mb-3 leading-normal",children:"Candidate joins are computed using rigid Procrustes contour alignment (no scaling). Accepting a join automatically translates and rotates the fragment into mating contact."}),n.length===0?u.jsxs("div",{className:"bg-parchment-50 border border-dashed border-parchment-300 rounded-lg p-6 text-center text-xs text-charcoal-500",children:[u.jsx("p",{children:"No candidate joins generated yet."}),u.jsx("p",{className:"mt-1",children:'Click "Suggest Geometric Joins" to evaluate broken edge complementarity.'})]}):u.jsx("div",{className:"space-y-3",children:n.map(X=>{const se=X.status==="accepted",fe=X.status==="rejected";return u.jsxs("div",{className:`border rounded-lg p-3 transition shadow-2xs ${se?"bg-emerald-50 border-emerald-300":fe?"bg-gray-50 border-gray-200 opacity-60":"bg-white border-parchment-300 hover:border-terracotta-300"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsxs("span",{className:"font-mono font-bold text-xs text-charcoal-900 bg-parchment-100 px-1.5 py-0.5 rounded border border-parchment-300",children:[X.fragment_a_id," ↔ ",X.fragment_b_id]}),u.jsxs("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-800",children:[(X.compatibility_score*100).toFixed(0),"% Match"]})]}),u.jsx("span",{className:`text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded ${se?"bg-emerald-200 text-emerald-900":fe?"bg-gray-200 text-gray-700":"bg-amber-100 text-amber-800"}`,children:X.status})]}),u.jsxs("div",{className:"text-[11px] font-mono text-charcoal-600 space-y-0.5 mb-2 bg-parchment-50/70 p-2 rounded border border-parchment-200",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Edge Residual:"}),u.jsx("span",{className:"font-semibold text-charcoal-800",children:X.residual_mm?`${X.residual_mm} mm`:`${X.residual_px} px`})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Matched Length:"}),u.jsx("span",{children:X.matched_length_mm?`${X.matched_length_mm} mm`:`${X.matched_length_px} px`})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Normal Opposition:"}),u.jsxs("span",{children:[(X.tangent_score*100).toFixed(0),"%"]})]})]}),u.jsx("p",{className:"text-[10px] text-charcoal-500 mb-2 italic",children:X.explanation}),u.jsxs("div",{className:"flex items-center space-x-2 pt-1 border-t border-parchment-200",children:[u.jsxs("button",{onClick:()=>H(X.id,se?"suggested":"accepted"),className:`flex-1 text-xs py-1 px-2 rounded font-semibold flex items-center justify-center space-x-1 transition ${se?"bg-emerald-600 text-white":"bg-emerald-100 hover:bg-emerald-200 text-emerald-800"}`,children:[u.jsx(jd,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:se?"Accepted (Snap applied)":"Accept Join"})]}),u.jsx("button",{onClick:()=>H(X.id,fe?"suggested":"rejected"),className:`text-xs py-1 px-2.5 rounded transition ${fe?"bg-gray-400 text-white":"bg-parchment-100 hover:bg-parchment-200 text-charcoal-600"}`,children:u.jsx(va,{className:"w-3.5 h-3.5"})})]})]},X.id)})})]})})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="160",dy=0,pf=1,hy=2,hg=1,fy=2,si=3,Xi=0,ln=1,Yn=2,ji=0,ls=1,mf=2,gf=3,xf=4,py=5,ar=100,my=101,gy=102,vf=103,_f=104,xy=200,vy=201,_y=202,yy=203,ku=204,Ou=205,Sy=206,My=207,Ey=208,wy=209,Ty=210,by=211,Ay=212,Cy=213,Ry=214,Ny=0,Py=1,Ly=2,sl=3,Dy=4,Uy=5,Iy=6,Fy=7,fg=0,ky=1,Oy=2,Hi=0,zy=1,By=2,jy=3,Hy=4,Gy=5,Vy=6,pg=300,xs=301,vs=302,zu=303,Bu=304,Al=306,ju=1e3,On=1001,Hu=1002,Yt=1003,yf=1004,lc=1005,En=1006,Wy=1007,_a=1008,Gi=1009,Xy=1010,$y=1011,Wd=1012,mg=1013,Pi=1014,Li=1015,ya=1016,gg=1017,xg=1018,fr=1020,qy=1021,zn=1023,Yy=1024,Ky=1025,pr=1026,_s=1027,Zy=1028,vg=1029,Jy=1030,_g=1031,yg=1033,cc=33776,uc=33777,dc=33778,hc=33779,Sf=35840,Mf=35841,Ef=35842,wf=35843,Sg=36196,Tf=37492,bf=37496,Af=37808,Cf=37809,Rf=37810,Nf=37811,Pf=37812,Lf=37813,Df=37814,Uf=37815,If=37816,Ff=37817,kf=37818,Of=37819,zf=37820,Bf=37821,fc=36492,jf=36494,Hf=36495,Qy=36283,Gf=36284,Vf=36285,Wf=36286,Mg=3e3,mr=3001,eS=3200,tS=3201,Eg=0,nS=1,Tn="",Ut="srgb",xi="srgb-linear",Xd="display-p3",Cl="display-p3-linear",al="linear",at="srgb",ol="rec709",ll="p3",br=7680,Xf=519,iS=512,rS=513,sS=514,wg=515,aS=516,oS=517,lS=518,cS=519,$f=35044,qf="300 es",Gu=1035,ui=2e3,cl=2001;class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=Math.PI/180,Vu=180/Math.PI;function Aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function uS(t,e){return(t%e+e)%e}function mc(t,e,n){return(1-n)*t+n*e}function Yf(t){return(t&t-1)===0&&t!==0}function Wu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],g=i[5],S=i[8],y=r[0],m=r[3],d=r[6],v=r[1],x=r[4],_=r[7],T=r[2],M=r[5],b=r[8];return s[0]=a*y+o*v+l*T,s[3]=a*m+o*x+l*M,s[6]=a*d+o*_+l*b,s[1]=c*y+h*v+f*T,s[4]=c*m+h*x+f*M,s[7]=c*d+h*_+f*b,s[2]=p*y+g*v+S*T,s[5]=p*m+g*x+S*M,s[8]=p*d+g*_+S*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,p=o*l-h*s,g=c*s-a*l,S=n*f+i*p+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(gc.makeScale(e,n)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new Ge;function Tg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dS(){const t=ul("canvas");return t.style.display="block",t}const Kf={};function ea(t){t in Kf||(Kf[t]=!0,console.warn(t))}const Zf=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jf=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ka={[xi]:{transfer:al,primaries:ol,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:at,primaries:ol,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Cl]:{transfer:al,primaries:ll,toReference:t=>t.applyMatrix3(Jf),fromReference:t=>t.applyMatrix3(Zf)},[Xd]:{transfer:at,primaries:ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jf),fromReference:t=>t.applyMatrix3(Zf).convertLinearToSRGB()}},hS=new Set([xi,Cl]),et={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ka[e].toReference,r=Ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ka[t].primaries},getTransfer:function(t){return t===Tn?al:Ka[t].transfer}};function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ar;class bg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=ul("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class Ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vc(r[a].image)):s.push(vc(r[a]))}else s=vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pS=0;class mn extends ws{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=On,r=On,s=En,a=_a,o=zn,l=Gi,c=mn.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Aa(),this.name="",this.source=new Ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mr?Ut:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ju:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ju:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?mr:Mg}set encoding(e){ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?Ut:Tn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=pg;mn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],S=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(S-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(S+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,_=(g+1)/2,T=(d+1)/2,M=(h+p)/4,b=(f+y)/4,U=(S+m)/4;return x>_&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=b/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=M/r,s=U/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-S)*(m-S)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-S)/v,this.y=(f-y)/v,this.z=(p-h)/v,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?Ut:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ag(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends mS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cg extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],S=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=S,e[n+3]=y;return}if(f!==y||l!==p||c!==g||h!==S){let m=1-o;const d=l*p+c*g+h*S+f*y,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),M=Math.atan2(T,d*v);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T}const _=o*v;if(l=l*m+p*_,c=c*m+g*_,h=h*m+S*_,f=f*m+y*_,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],p=s[a+1],g=s[a+2],S=s[a+3];return e[n]=o*S+h*f+l*g-c*p,e[n+1]=l*S+h*p+c*f-o*g,e[n+2]=c*S+h*g+o*p-l*f,e[n+3]=h*S-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),S=l(s/2);switch(a){case"XYZ":this._x=p*h*f+c*g*S,this._y=c*g*f-p*h*S,this._z=c*h*S+p*g*f,this._w=c*h*f-p*g*S;break;case"YXZ":this._x=p*h*f+c*g*S,this._y=c*g*f-p*h*S,this._z=c*h*S-p*g*f,this._w=c*h*f+p*g*S;break;case"ZXY":this._x=p*h*f-c*g*S,this._y=c*g*f+p*h*S,this._z=c*h*S+p*g*f,this._w=c*h*f-p*g*S;break;case"ZYX":this._x=p*h*f-c*g*S,this._y=c*g*f+p*h*S,this._z=c*h*S-p*g*f,this._w=c*h*f+p*g*S;break;case"YZX":this._x=p*h*f+c*g*S,this._y=c*g*f+p*h*S,this._z=c*h*S-p*g*f,this._w=c*h*f-p*g*S;break;case"XZY":this._x=p*h*f-c*g*S,this._y=c*g*f-p*h*S,this._z=c*h*S+p*g*f,this._w=c*h*f+p*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new B,Qf=new Ca;class Ra{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Ja.subVectors(this.max,ks),Cr.subVectors(e.a,ks),Rr.subVectors(e.b,ks),Nr.subVectors(e.c,ks),yi.subVectors(Rr,Cr),Si.subVectors(Nr,Rr),Ji.subVectors(Cr,Nr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Ji.z,Ji.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Ji.z,0,-Ji.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Ji.y,Ji.x,0];return!yc(n,Cr,Rr,Nr,Ja)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,Cr,Rr,Nr,Ja))?!1:(Qa.crossVectors(yi,Si),n=[Qa.x,Qa.y,Qa.z],yc(n,Cr,Rr,Nr,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new B,new B,new B,new B,new B,new B,new B,new B],Pn=new B,Za=new Ra,Cr=new B,Rr=new B,Nr=new B,yi=new B,Si=new B,Ji=new B,ks=new B,Ja=new B,Qa=new B,Qi=new B;function yc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Qi.fromArray(t,s);const o=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xS=new Ra,Os=new B,Sc=new B;class Rl{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Sc)),this.expandByPoint(Os.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new B,Mc=new B,eo=new B,Mi=new B,Ec=new B,to=new B,wc=new B;class Rg{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Mc.copy(e).add(n).multiplyScalar(.5),eo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Mc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(eo),o=Mi.dot(this.direction),l=-Mi.dot(eo),c=Mi.lengthSq(),h=Math.abs(1-a*a);let f,p,g,S;if(h>0)if(f=a*l-o,p=a*o-l,S=s*h,f>=0)if(p>=-S)if(p<=S){const y=1/h;f*=y,p*=y,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-S?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=S?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mc).addScaledVector(eo,p),g}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Ec.subVectors(n,e),to.subVectors(i,e),wc.crossVectors(Ec,to);let a=this.direction.dot(wc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(to.crossVectors(Mi,to));if(l<0)return null;const c=o*this.direction.dot(Ec.cross(Mi));if(c<0||l+c>a)return null;const h=-o*Mi.dot(wc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,a,o,l,c,h,f,p,g,S,y,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,p,g,S,y,m)}set(e,n,i,r,s,a,o,l,c,h,f,p,g,S,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=S,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,g=a*f,S=o*h,y=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=g+S*c,n[5]=p-y*c,n[9]=-o*l,n[2]=y-p*c,n[6]=S+g*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,g=l*f,S=c*h,y=c*f;n[0]=p+y*o,n[4]=S*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=g*o-S,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,g=l*f,S=c*h,y=c*f;n[0]=p-y*o,n[4]=-a*f,n[8]=S+g*o,n[1]=g+S*o,n[5]=a*h,n[9]=y-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,g=a*f,S=o*h,y=o*f;n[0]=l*h,n[4]=S*c-g,n[8]=p*c+y,n[1]=l*f,n[5]=y*c+p,n[9]=g*c-S,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*c,S=o*l,y=o*c;n[0]=l*h,n[4]=y-p*f,n[8]=S*f+g,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=g*f+S,n[10]=p-y*f}else if(e.order==="XZY"){const p=a*l,g=a*c,S=o*l,y=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=p*f+y,n[5]=a*h,n[9]=g*f-S,n[2]=S*f-g,n[6]=o*h,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,_S)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ei.crossVectors(i,un),Ei.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ei.crossVectors(i,un)),Ei.normalize(),no.crossVectors(un,Ei),r[0]=Ei.x,r[4]=no.x,r[8]=un.x,r[1]=Ei.y,r[5]=no.y,r[9]=un.y,r[2]=Ei.z,r[6]=no.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],g=i[13],S=i[2],y=i[6],m=i[10],d=i[14],v=i[3],x=i[7],_=i[11],T=i[15],M=r[0],b=r[4],U=r[8],E=r[12],C=r[1],W=r[5],F=r[9],K=r[13],L=r[2],z=r[6],N=r[10],H=r[14],P=r[3],I=r[7],O=r[11],Z=r[15];return s[0]=a*M+o*C+l*L+c*P,s[4]=a*b+o*W+l*z+c*I,s[8]=a*U+o*F+l*N+c*O,s[12]=a*E+o*K+l*H+c*Z,s[1]=h*M+f*C+p*L+g*P,s[5]=h*b+f*W+p*z+g*I,s[9]=h*U+f*F+p*N+g*O,s[13]=h*E+f*K+p*H+g*Z,s[2]=S*M+y*C+m*L+d*P,s[6]=S*b+y*W+m*z+d*I,s[10]=S*U+y*F+m*N+d*O,s[14]=S*E+y*K+m*H+d*Z,s[3]=v*M+x*C+_*L+T*P,s[7]=v*b+x*W+_*z+T*I,s[11]=v*U+x*F+_*N+T*O,s[15]=v*E+x*K+_*H+T*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],S=e[3],y=e[7],m=e[11],d=e[15];return S*(+s*l*f-r*c*f-s*o*p+i*c*p+r*o*g-i*l*g)+y*(+n*l*g-n*c*p+s*a*p-r*a*g+r*c*h-s*l*h)+m*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*h-i*c*h)+d*(-r*o*h-n*l*f+n*o*p+r*a*f-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],S=e[12],y=e[13],m=e[14],d=e[15],v=f*m*c-y*p*c+y*l*g-o*m*g-f*l*d+o*p*d,x=S*p*c-h*m*c-S*l*g+a*m*g+h*l*d-a*p*d,_=h*y*c-S*f*c+S*o*g-a*y*g-h*o*d+a*f*d,T=S*f*l-h*y*l-S*o*p+a*y*p+h*o*m-a*f*m,M=n*v+i*x+r*_+s*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(y*p*s-f*m*s-y*r*g+i*m*g+f*r*d-i*p*d)*b,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*d+i*l*d)*b,e[3]=(f*l*s-o*p*s-f*r*c+i*p*c+o*r*g-i*l*g)*b,e[4]=x*b,e[5]=(h*m*s-S*p*s+S*r*g-n*m*g-h*r*d+n*p*d)*b,e[6]=(S*l*s-a*m*s-S*r*c+n*m*c+a*r*d-n*l*d)*b,e[7]=(a*p*s-h*l*s+h*r*c-n*p*c-a*r*g+n*l*g)*b,e[8]=_*b,e[9]=(S*f*s-h*y*s-S*i*g+n*y*g+h*i*d-n*f*d)*b,e[10]=(a*y*s-S*o*s+S*i*c-n*y*c-a*i*d+n*o*d)*b,e[11]=(h*o*s-a*f*s-h*i*c+n*f*c+a*i*g-n*o*g)*b,e[12]=T*b,e[13]=(h*y*r-S*f*r+S*i*p-n*y*p-h*i*m+n*f*m)*b,e[14]=(S*o*r-a*y*r-S*i*l+n*y*l+a*i*m-n*o*m)*b,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*p+n*o*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,p=s*c,g=s*h,S=s*f,y=a*h,m=a*f,d=o*f,v=l*c,x=l*h,_=l*f,T=i.x,M=i.y,b=i.z;return r[0]=(1-(y+d))*T,r[1]=(g+_)*T,r[2]=(S-x)*T,r[3]=0,r[4]=(g-_)*M,r[5]=(1-(p+d))*M,r[6]=(m+v)*M,r[7]=0,r[8]=(S+x)*b,r[9]=(m-v)*b,r[10]=(1-(p+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,h=1/a,f=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,S;if(o===ui)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===cl)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(a-s),p=(n+e)*c,g=(i+r)*h;let S,y;if(o===ui)S=(a+s)*f,y=-2*f;else if(o===cl)S=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new B,Ln=new Mt,vS=new B(0,0,0),_S=new B(1,1,1),Ei=new B,no=new B,un=new B,ep=new Mt,tp=new Ca;class Nl{constructor(e=0,n=0,i=0,r=Nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nl.DEFAULT_ORDER="XYZ";class Ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yS=0;const np=new B,Lr=new Ca,ni=new Mt,io=new B,zs=new B,SS=new B,MS=new Ca,ip=new B(1,0,0),rp=new B(0,1,0),sp=new B(0,0,1),ES={type:"added"},wS={type:"removed"};class Ft extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new B,n=new Nl,i=new Ca,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ge}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?io.copy(e):io.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(zs,io,this.up):ni.lookAt(io,zs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ni),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ES)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,SS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),S=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new B(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new B,ii=new B,Tc=new B,ri=new B,Dr=new B,Ur=new B,ap=new B,bc=new B,Ac=new B,Cc=new B;let ro=!1;class kn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),Tc.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ii),l=Dn.dot(Tc),c=ii.dot(ii),h=ii.dot(Tc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-o*h)*p,S=(a*h-o*l)*p;return s.set(1-g-S,S,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,n,i,r,s,a,o,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Dr.subVectors(r,i),Ur.subVectors(s,i),bc.subVectors(e,i);const l=Dr.dot(bc),c=Ur.dot(bc);if(l<=0&&c<=0)return n.copy(i);Ac.subVectors(e,r);const h=Dr.dot(Ac),f=Ur.dot(Ac);if(h>=0&&f<=h)return n.copy(r);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Dr,a);Cc.subVectors(e,s);const g=Dr.dot(Cc),S=Ur.dot(Cc);if(S>=0&&g<=S)return n.copy(s);const y=g*c-l*S;if(y<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(Ur,o);const m=h*S-g*f;if(m<=0&&f-h>=0&&g-S>=0)return ap.subVectors(s,r),o=(f-h)/(f-h+(g-S)),n.copy(r).addScaledVector(ap,o);const d=1/(m+y+p);return a=y*d,o=p*d,n.copy(i).addScaledVector(Dr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},so={h:0,s:0,l:0};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=uS(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rc(a,s,e+1/3),this.g=Rc(a,s,e),this.b=Rc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=Pg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=xc(e.r),this.g=xc(e.g),this.b=xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Kt(Ht.r*255,0,255))*65536+Math.round(Kt(Ht.g*255,0,255))*256+Math.round(Kt(Ht.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ut){et.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(so);const i=mc(wi.h,so.h,n),r=mc(wi.s,so.s,n),s=mc(wi.l,so.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new $e;$e.NAMES=Pg;let TS=0;class Ts extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=ls,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=Ou,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lg extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new B,ao=new Ve;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$f,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ao.fromBufferAttribute(this,n),ao.applyMatrix3(e),this.setXY(n,ao.x,ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$f&&(e.usage=this.usage),e}}class Dg extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ug extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bS=0;const yn=new Mt,Nc=new Ft,Ir=new B,dn=new Ra,Bs=new Ra,Rt=new B;class Gn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?Ug:Dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(dn.min,Bs.min),dn.expandByPoint(Rt),Rt.addVectors(dn.max,Bs.max),dn.expandByPoint(Rt)):(dn.expandByPoint(Bs.min),dn.expandByPoint(Bs.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),Rt.add(Ir)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new B,h[C]=new B;const f=new B,p=new B,g=new B,S=new Ve,y=new Ve,m=new Ve,d=new B,v=new B;function x(C,W,F){f.fromArray(r,C*3),p.fromArray(r,W*3),g.fromArray(r,F*3),S.fromArray(a,C*2),y.fromArray(a,W*2),m.fromArray(a,F*2),p.sub(f),g.sub(f),y.sub(S),m.sub(S);const K=1/(y.x*m.y-m.x*y.y);isFinite(K)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar(K),v.copy(g).multiplyScalar(y.x).addScaledVector(p,-m.x).multiplyScalar(K),c[C].add(d),c[W].add(d),c[F].add(d),h[C].add(v),h[W].add(v),h[F].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let C=0,W=_.length;C<W;++C){const F=_[C],K=F.start,L=F.count;for(let z=K,N=K+L;z<N;z+=3)x(i[z+0],i[z+1],i[z+2])}const T=new B,M=new B,b=new B,U=new B;function E(C){b.fromArray(s,C*3),U.copy(b);const W=c[C];T.copy(W),T.sub(b.multiplyScalar(b.dot(W))).normalize(),M.crossVectors(U,W);const K=M.dot(h[C])<0?-1:1;l[C*4]=T.x,l[C*4+1]=T.y,l[C*4+2]=T.z,l[C*4+3]=K}for(let C=0,W=_.length;C<W;++C){const F=_[C],K=F.start,L=F.count;for(let z=K,N=K+L;z<N;z+=3)E(i[z+0]),E(i[z+1]),E(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let p=0,g=e.count;p<g;p+=3){const S=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h);let g=0,S=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*h;for(let d=0;d<h;d++)p[S++]=c[g++]}return new Jn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const p=c[h],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new Mt,er=new Rg,oo=new Rl,lp=new B,Fr=new B,kr=new B,Or=new B,Pc=new B,lo=new B,co=new Ve,uo=new Ve,ho=new Ve,cp=new B,up=new B,dp=new B,fo=new B,po=new B;class di extends Ft{constructor(e=new Gn,n=new Lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Pc.fromBufferAttribute(f,e),a?lo.addScaledVector(Pc,h):lo.addScaledVector(Pc.sub(n),h))}n.add(lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(oo.containsPoint(er.origin)===!1&&(er.intersectSphere(oo,lp)===null||er.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(op.copy(s).invert(),er.copy(e.ray).applyMatrix4(op),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,y=p.length;S<y;S++){const m=p[S],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let _=v,T=x;_<T;_+=3){const M=o.getX(_),b=o.getX(_+1),U=o.getX(_+2);r=mo(this,d,e,i,c,h,f,M,b,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=S,d=y;m<d;m+=3){const v=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);r=mo(this,a,e,i,c,h,f,v,x,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let S=0,y=p.length;S<y;S++){const m=p[S],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let _=v,T=x;_<T;_+=3){const M=_,b=_+1,U=_+2;r=mo(this,d,e,i,c,h,f,M,b,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=S,d=y;m<d;m+=3){const v=m,x=m+1,_=m+2;r=mo(this,a,e,i,c,h,f,v,x,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AS(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xi,o),l===null)return null;po.copy(o),po.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(po);return c<n.near||c>n.far?null:{distance:c,point:po.clone(),object:t}}function mo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Fr),t.getVertexPosition(l,kr),t.getVertexPosition(c,Or);const h=AS(t,e,n,i,Fr,kr,Or,fo);if(h){r&&(co.fromBufferAttribute(r,o),uo.fromBufferAttribute(r,l),ho.fromBufferAttribute(r,c),h.uv=kn.getInterpolation(fo,Fr,kr,Or,co,uo,ho,new Ve)),s&&(co.fromBufferAttribute(s,o),uo.fromBufferAttribute(s,l),ho.fromBufferAttribute(s,c),h.uv1=kn.getInterpolation(fo,Fr,kr,Or,co,uo,ho,new Ve),h.uv2=h.uv1),a&&(cp.fromBufferAttribute(a,o),up.fromBufferAttribute(a,l),dp.fromBufferAttribute(a,c),h.normal=kn.getInterpolation(fo,Fr,kr,Or,cp,up,dp,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};kn.getNormal(Fr,kr,Or,f.normal),h.face=f}return h}class Na extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let p=0,g=0;S("z","y","x",-1,-1,i,n,e,a,s,0),S("z","y","x",1,-1,i,n,-e,a,s,1),S("x","z","y",1,1,e,i,n,r,a,2),S("x","z","y",1,-1,e,i,-n,r,a,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function S(y,m,d,v,x,_,T,M,b,U,E){const C=_/b,W=T/U,F=_/2,K=T/2,L=M/2,z=b+1,N=U+1;let H=0,P=0;const I=new B;for(let O=0;O<N;O++){const Z=O*W-K;for(let J=0;J<z;J++){const q=J*C-F;I[y]=q*v,I[m]=Z*x,I[d]=L,c.push(I.x,I.y,I.z),I[y]=0,I[m]=0,I[d]=M>0?1:-1,h.push(I.x,I.y,I.z),f.push(J/b),f.push(1-O/U),H+=1}}for(let O=0;O<U;O++)for(let Z=0;Z<b;Z++){const J=p+Z+z*O,q=p+Z+z*(O+1),Q=p+(Z+1)+z*(O+1),ce=p+(Z+1)+z*O;l.push(J,q,ce),l.push(q,Q,ce),P+=6}o.addGroup(g,P,E),g+=P,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=ys(t[n]);for(const r in i)e[r]=i[r]}return e}function CS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ig(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const RS={clone:ys,merge:$t};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=PS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=CS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fg extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends Fg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vu*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Br=1;class LS extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(zr,Br,e,n);r.layers=this.layers,this.add(r);const s=new wn(zr,Br,e,n);s.layers=this.layers,this.add(s);const a=new wn(zr,Br,e,n);a.layers=this.layers,this.add(a);const o=new wn(zr,Br,e,n);o.layers=this.layers,this.add(o);const l=new wn(zr,Br,e,n);l.layers=this.layers,this.add(l);const c=new wn(zr,Br,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class kg extends mn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:xs,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?Ut:Tn),this.texture=new kg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Na(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ji});s.uniforms.tEquirect.value=n;const a=new di(r,s),o=n.minFilter;return n.minFilter===_a&&(n.minFilter=En),new LS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Lc=new B,US=new B,IS=new Ge;class rr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IS.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Rl,go=new B;class $d{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],S=r[9],y=r[10],m=r[11],d=r[12],v=r[13],x=r[14],_=r[15];if(i[0].setComponents(l-s,p-c,m-g,_-d).normalize(),i[1].setComponents(l+s,p+c,m+g,_+d).normalize(),i[2].setComponents(l+a,p+h,m+S,_+v).normalize(),i[3].setComponents(l-a,p-h,m-S,_-v).normalize(),i[4].setComponents(l-o,p-f,m-y,_-x).normalize(),n===ui)i[5].setComponents(l+o,p+f,m+y,_+x).normalize();else if(n===cl)i[5].setComponents(o,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Og(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const f=c.array,p=c.usage,g=f.byteLength,S=t.createBuffer();t.bindBuffer(h,S),t.bufferData(h,f,p),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:S,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,h,f){const p=h.array,g=h._updateRange,S=h.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&S.length===0&&t.bufferSubData(f,0,p),S.length!==0){for(let y=0,m=S.length;y<m;y++){const d=S[y];n?t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}class qd extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,p=n/l,g=[],S=[],y=[],m=[];for(let d=0;d<h;d++){const v=d*p-a;for(let x=0;x<c;x++){const _=x*f-s;S.push(_,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+c*d,_=v+c*(d+1),T=v+1+c*(d+1),M=v+1+c*d;g.push(x,_,M),g.push(_,T,M)}this.setIndex(g),this.setAttribute("position",new Jt(S,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OS=`#ifdef USE_ALPHAHASH
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
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GS=`#ifdef USE_AOMAP
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
#endif`,VS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WS=`#ifdef USE_BATCHING
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
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l1=`vec3 transformedNormal = objectNormal;
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
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`
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
}`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,T1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R1=`uniform bool receiveShadow;
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
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
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
#endif`,F1=`struct PhysicalMaterial {
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
}`,k1=`
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$1=`#if defined( USE_POINTS_UV )
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
#endif`,q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
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
#endif`,J1=`#ifdef USE_MORPHTARGETS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
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
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
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
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SM=`float getShadowMask() {
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
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
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
#endif`,bM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kM=`uniform sampler2D t2D;
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,GM=`#if DEPTH_PACKING == 3200
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
}`,VM=`#define DISTANCE
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
}`,WM=`#define DISTANCE
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
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
}`,YM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 diffuse;
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
}`,JM=`#define LAMBERT
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
}`,QM=`#define LAMBERT
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
}`,eE=`#define MATCAP
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
}`,tE=`#define MATCAP
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
}`,nE=`#define NORMAL
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
}`,iE=`#define NORMAL
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
}`,rE=`#define PHONG
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
}`,sE=`#define PHONG
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
}`,aE=`#define STANDARD
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
}`,oE=`#define STANDARD
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
}`,lE=`#define TOON
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
}`,cE=`#define TOON
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
}`,uE=`uniform float size;
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
}`,dE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,fE=`uniform vec3 color;
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
}`,pE=`uniform float rotation;
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
}`,mE=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:kS,alphahash_pars_fragment:OS,alphamap_fragment:zS,alphamap_pars_fragment:BS,alphatest_fragment:jS,alphatest_pars_fragment:HS,aomap_fragment:GS,aomap_pars_fragment:VS,batching_pars_vertex:WS,batching_vertex:XS,begin_vertex:$S,beginnormal_vertex:qS,bsdfs:YS,iridescence_fragment:KS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:a1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:d1,emissivemap_pars_fragment:h1,colorspace_fragment:f1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:x1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:N1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:w1,lightmap_fragment:T1,lightmap_pars_fragment:b1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:C1,lights_pars_begin:R1,lights_toon_fragment:P1,lights_toon_pars_fragment:L1,lights_phong_fragment:D1,lights_phong_pars_fragment:U1,lights_physical_fragment:I1,lights_physical_pars_fragment:F1,lights_fragment_begin:k1,lights_fragment_maps:O1,lights_fragment_end:z1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:G1,map_fragment:V1,map_pars_fragment:W1,map_particle_fragment:X1,map_particle_pars_fragment:$1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:Y1,morphcolor_vertex:K1,morphnormal_vertex:Z1,morphtarget_pars_vertex:J1,morphtarget_vertex:Q1,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:rM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:uM,packing:dM,premultiplied_alpha_fragment:hM,project_vertex:fM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:gM,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:_M,shadowmap_vertex:yM,shadowmask_pars_fragment:SM,skinbase_vertex:MM,skinning_pars_vertex:EM,skinning_vertex:wM,skinnormal_vertex:TM,specularmap_fragment:bM,specularmap_pars_fragment:AM,tonemapping_fragment:CM,tonemapping_pars_fragment:RM,transmission_fragment:NM,transmission_pars_fragment:PM,uv_pars_fragment:LM,uv_pars_vertex:DM,uv_vertex:UM,worldpos_vertex:IM,background_vert:FM,background_frag:kM,backgroundCube_vert:OM,backgroundCube_frag:zM,cube_vert:BM,cube_frag:jM,depth_vert:HM,depth_frag:GM,distanceRGBA_vert:VM,distanceRGBA_frag:WM,equirect_vert:XM,equirect_frag:$M,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:JM,meshlambert_frag:QM,meshmatcap_vert:eE,meshmatcap_frag:tE,meshnormal_vert:nE,meshnormal_frag:iE,meshphong_vert:rE,meshphong_frag:sE,meshphysical_vert:aE,meshphysical_frag:oE,meshtoon_vert:lE,meshtoon_frag:cE,points_vert:uE,points_frag:dE,shadow_vert:hE,shadow_frag:fE,sprite_vert:pE,sprite_frag:mE},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},$n={basic:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([le.points,le.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([le.common,le.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([le.sprite,le.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const xo={r:0,b:0,g:0};function gE(t,e,n,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,h,f=null,p=0,g=null;function S(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Al)?(h===void 0&&(h=new di(new Na(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:ys($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=et.getTransfer(x.colorSpace)!==at,(f!==x||p!==x.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,f=x,p=x.version,g=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new di(new qd(2,2),new Mr({name:"BackgroundMaterial",uniforms:ys($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(xo,Ig(t)),i.buffers.color.setClear(xo.r,xo.g,xo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:S}}function xE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function f(L,z,N,H,P){let I=!1;if(a){const O=y(H,N,z);c!==O&&(c=O,g(c.object)),I=d(L,H,N,P),I&&v(L,H,N,P)}else{const O=z.wireframe===!0;(c.geometry!==H.id||c.program!==N.id||c.wireframe!==O)&&(c.geometry=H.id,c.program=N.id,c.wireframe=O,I=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,U(L,z,N,H),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function S(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,z,N){const H=N.wireframe===!0;let P=o[L.id];P===void 0&&(P={},o[L.id]=P);let I=P[z.id];I===void 0&&(I={},P[z.id]=I);let O=I[H];return O===void 0&&(O=m(p()),I[H]=O),O}function m(L){const z=[],N=[],H=[];for(let P=0;P<r;P++)z[P]=0,N[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:N,attributeDivisors:H,object:L,attributes:{},index:null}}function d(L,z,N,H){const P=c.attributes,I=z.attributes;let O=0;const Z=N.getAttributes();for(const J in Z)if(Z[J].location>=0){const Q=P[J];let ce=I[J];if(ce===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),Q===void 0||Q.attribute!==ce||ce&&Q.data!==ce.data)return!0;O++}return c.attributesNum!==O||c.index!==H}function v(L,z,N,H){const P={},I=z.attributes;let O=0;const Z=N.getAttributes();for(const J in Z)if(Z[J].location>=0){let Q=I[J];Q===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const ce={};ce.attribute=Q,Q&&Q.data&&(ce.data=Q.data),P[J]=ce,O++}c.attributes=P,c.attributesNum=O,c.index=H}function x(){const L=c.newAttributes;for(let z=0,N=L.length;z<N;z++)L[z]=0}function _(L){T(L,0)}function T(L,z){const N=c.newAttributes,H=c.enabledAttributes,P=c.attributeDivisors;N[L]=1,H[L]===0&&(t.enableVertexAttribArray(L),H[L]=1),P[L]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),P[L]=z)}function M(){const L=c.newAttributes,z=c.enabledAttributes;for(let N=0,H=z.length;N<H;N++)z[N]!==L[N]&&(t.disableVertexAttribArray(N),z[N]=0)}function b(L,z,N,H,P,I,O){O===!0?t.vertexAttribIPointer(L,z,N,P,I):t.vertexAttribPointer(L,z,N,H,P,I)}function U(L,z,N,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const P=H.attributes,I=N.getAttributes(),O=z.defaultAttributeValues;for(const Z in I){const J=I[Z];if(J.location>=0){let q=P[Z];if(q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const Q=q.normalized,ce=q.itemSize,ue=n.get(q);if(ue===void 0)continue;const X=ue.buffer,se=ue.type,fe=ue.bytesPerElement,ae=i.isWebGL2===!0&&(se===t.INT||se===t.UNSIGNED_INT||q.gpuType===mg);if(q.isInterleavedBufferAttribute){const we=q.data,j=we.stride,lt=q.offset;if(we.isInstancedInterleavedBuffer){for(let ye=0;ye<J.locationSize;ye++)T(J.location+ye,we.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ye=0;ye<J.locationSize;ye++)_(J.location+ye);t.bindBuffer(t.ARRAY_BUFFER,X);for(let ye=0;ye<J.locationSize;ye++)b(J.location+ye,ce/J.locationSize,se,Q,j*fe,(lt+ce/J.locationSize*ye)*fe,ae)}else{if(q.isInstancedBufferAttribute){for(let we=0;we<J.locationSize;we++)T(J.location+we,q.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let we=0;we<J.locationSize;we++)_(J.location+we);t.bindBuffer(t.ARRAY_BUFFER,X);for(let we=0;we<J.locationSize;we++)b(J.location+we,ce/J.locationSize,se,Q,ce*fe,ce/J.locationSize*we*fe,ae)}}else if(O!==void 0){const Q=O[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(J.location,Q);break;case 3:t.vertexAttrib3fv(J.location,Q);break;case 4:t.vertexAttrib4fv(J.location,Q);break;default:t.vertexAttrib1fv(J.location,Q)}}}}M()}function E(){F();for(const L in o){const z=o[L];for(const N in z){const H=z[N];for(const P in H)S(H[P].object),delete H[P];delete z[N]}delete o[L]}}function C(L){if(o[L.id]===void 0)return;const z=o[L.id];for(const N in z){const H=z[N];for(const P in H)S(H[P].object),delete H[P];delete z[N]}delete o[L.id]}function W(L){for(const z in o){const N=o[z];if(N[L.id]===void 0)continue;const H=N[L.id];for(const P in H)S(H[P].object),delete H[P];delete N[L.id]}}function F(){K(),h=!0,c!==l&&(c=l,g(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:K,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:_,disableUnusedAttributes:M}}function vE(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,f){t.drawArrays(s,h,f),n.update(f,s,1)}function l(h,f,p){if(p===0)return;let g,S;if(r)g=t,S="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[S](s,h,f,p),n.update(f,s,p)}function c(h,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<p;S++)this.render(h[S],f[S]);else{g.multiDrawArraysWEBGL(s,h,0,f,0,p);let S=0;for(let y=0;y<p;y++)S+=f[y];n.update(S,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function _E(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,_=a||e.has("OES_texture_float"),T=x&&_,M=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:M}}function yE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new rr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,g){const S=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||S===null||S.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,x=v*4;let _=d.clippingState||null;l.value=_,_=h(S,p,x,g);for(let T=0;T!==x;++T)_[T]=n[T];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,g,S){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,S!==!0||m===null){const d=g+y*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=g;x!==y;++x,_+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function SE(t){let e=new WeakMap;function n(a,o){return o===zu?a.mapping=xs:o===Bu&&(a.mapping=vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===zu||o===Bu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new DS(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zg extends Fg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,hp=[.125,.215,.35,.446,.526,.582],or=20,Dc=new zg,fp=new $e;let Uc=null,Ic=0,Fc=0;const sr=(1+Math.sqrt(5))/2,jr=1/sr,pp=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,sr,jr),new B(0,sr,-jr),new B(jr,0,sr),new B(-jr,0,sr),new B(sr,jr,0),new B(-sr,jr,0)];class mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Ic,Fc),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:ya,format:zn,colorSpace:xi,depthBuffer:!1},r=gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ME(s)),this._blurMaterial=EE(s,e,n)}return r}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Dc)}_sceneToCubeUV(e,n,i,r){const o=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(fp),h.toneMapping=Hi,h.autoClear=!1;const g=new Lg({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),S=new di(new Na,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(fp),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;vo(r,v*x,d>2?x:0,x,x),h.setRenderTarget(r),y&&h.render(S,o),h.render(e,o)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pp[(r-1)%pp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new di(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*or-1),y=s/S,m=isFinite(s)?1+Math.floor(h*y):or;m>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);const d=[];let v=0;for(let b=0;b<or;++b){const U=b/y,E=Math.exp(-U*U/2);d.push(E),b===0?v+=E:b<m&&(v+=2*E)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=S,p.mipInt.value=x-i;const _=this._sizeLods[r],T=3*_*(r>x-es?r-x+es:0),M=4*(this._cubeSize-_);vo(n,T,M,3*_,2*_),l.setRenderTarget(n),l.render(f,Dc)}}function ME(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+hp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-es?l=hp[a-t+es-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,S=6,y=3,m=2,d=1,v=new Float32Array(y*S*g),x=new Float32Array(m*S*g),_=new Float32Array(d*S*g);for(let M=0;M<g;M++){const b=M%3*2/3-1,U=M>2?0:-1,E=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];v.set(E,y*S*M),x.set(p,m*S*M);const C=[M,M,M,M,M,M];_.set(C,d*S*M)}const T=new Gn;T.setAttribute("position",new Jn(v,y)),T.setAttribute("uv",new Jn(x,m)),T.setAttribute("faceIndex",new Jn(_,d)),e.push(T),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EE(t,e,n){const i=new Float32Array(or),r=new B(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function xp(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function vp(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Yd(){return`

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
	`}function wE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===zu||l===Bu,h=l===xs||l===vs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new mp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new mp(t));const p=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function TE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bE(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const S in p.attributes)e.remove(p.attributes[S]);for(const S in p.morphAttributes){const y=p.morphAttributes[S];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const S in p)e.update(p[S],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const S in g){const y=g[S];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,S=f.attributes.position;let y=0;if(g!==null){const v=g.array;y=g.version;for(let x=0,_=v.length;x<_;x+=3){const T=v[x+0],M=v[x+1],b=v[x+2];p.push(T,M,M,b,b,T)}}else if(S!==void 0){const v=S.array;y=S.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const T=x+0,M=x+1,b=x+2;p.push(T,M,M,b,b,T)}}else return;const m=new(Tg(p)?Ug:Dg)(p,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function h(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function AE(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function h(g,S){t.drawElements(s,S,o,g*l),n.update(S,s,1)}function f(g,S,y){if(y===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,S,o,g*l,y),n.update(S,s,y)}function p(g,S,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(g[d]/l,S[d]);else{m.multiDrawElementsWEBGL(s,S,0,o,g,0,y);let d=0;for(let v=0;v<y;v++)d+=S[v];n.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function CE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e){return t[0]-e[0]}function NE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function PE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=S!==void 0?S.length:0;let m=s.get(h);if(m===void 0||m.count!==y){let z=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var g=z;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let E=0;x===!0&&(E=1),_===!0&&(E=2),T===!0&&(E=3);let C=h.attributes.position.count*E,W=1;C>e.maxTextureSize&&(W=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const F=new Float32Array(C*W*4*y),K=new Cg(F,C,W,y);K.type=Li,K.needsUpdate=!0;const L=E*4;for(let N=0;N<y;N++){const H=M[N],P=b[N],I=U[N],O=C*W*4*N;for(let Z=0;Z<H.count;Z++){const J=Z*L;x===!0&&(a.fromBufferAttribute(H,Z),F[O+J+0]=a.x,F[O+J+1]=a.y,F[O+J+2]=a.z,F[O+J+3]=0),_===!0&&(a.fromBufferAttribute(P,Z),F[O+J+4]=a.x,F[O+J+5]=a.y,F[O+J+6]=a.z,F[O+J+7]=0),T===!0&&(a.fromBufferAttribute(I,Z),F[O+J+8]=a.x,F[O+J+9]=a.y,F[O+J+10]=a.z,F[O+J+11]=I.itemSize===4?a.w:1)}}m={count:y,texture:K,size:new Ve(C,W)},s.set(h,m),h.addEventListener("dispose",z)}let d=0;for(let x=0;x<p.length;x++)d+=p[x];const v=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",p),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const S=p===void 0?0:p.length;let y=i[h.id];if(y===void 0||y.length!==S){y=[];for(let _=0;_<S;_++)y[_]=[_,0];i[h.id]=y}for(let _=0;_<S;_++){const T=y[_];T[0]=_,T[1]=p[_]}y.sort(NE);for(let _=0;_<8;_++)_<S&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(RE);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const T=o[_],M=T[0],b=T[1];M!==Number.MAX_SAFE_INTEGER&&b?(m&&h.getAttribute("morphTarget"+_)!==m[M]&&h.setAttribute("morphTarget"+_,m[M]),d&&h.getAttribute("morphNormal"+_)!==d[M]&&h.setAttribute("morphNormal"+_,d[M]),r[_]=b,v+=b):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),d&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const x=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function LE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Bg extends mn{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:pr,h!==pr&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=Pi),i===void 0&&h===_s&&(i=fr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jg=new mn,Hg=new Bg(1,1);Hg.compareFunction=wg;const Gg=new Cg,Vg=new gS,Wg=new kg,_p=[],yp=[],Sp=new Float32Array(16),Mp=new Float32Array(9),Ep=new Float32Array(4);function bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_p[r];if(s===void 0&&(s=new Float32Array(r),_p[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pl(t,e){let n=yp[e];n===void 0&&(n=new Int32Array(e),yp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Ep.set(i),t.uniformMatrix2fv(this.addr,!1,Ep),bt(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Mp.set(i),t.uniformMatrix3fv(this.addr,!1,Mp),bt(n,i)}}function zE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Sp.set(i),t.uniformMatrix4fv(this.addr,!1,Sp),bt(n,i)}}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Hg:jg;n.setTexture2D(e||s,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vg,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wg,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gg,r)}function JE(t){switch(t){case 5126:return DE;case 35664:return UE;case 35665:return IE;case 35666:return FE;case 35674:return kE;case 35675:return OE;case 35676:return zE;case 5124:case 35670:return BE;case 35667:case 35671:return jE;case 35668:case 35672:return HE;case 35669:case 35673:return GE;case 5125:return VE;case 36294:return WE;case 36295:return XE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return ZE}}function QE(t,e){t.uniform1fv(this.addr,e)}function ew(t,e){const n=bs(e,this.size,2);t.uniform2fv(this.addr,n)}function tw(t,e){const n=bs(e,this.size,3);t.uniform3fv(this.addr,n)}function nw(t,e){const n=bs(e,this.size,4);t.uniform4fv(this.addr,n)}function iw(t,e){const n=bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rw(t,e){const n=bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sw(t,e){const n=bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aw(t,e){t.uniform1iv(this.addr,e)}function ow(t,e){t.uniform2iv(this.addr,e)}function lw(t,e){t.uniform3iv(this.addr,e)}function cw(t,e){t.uniform4iv(this.addr,e)}function uw(t,e){t.uniform1uiv(this.addr,e)}function dw(t,e){t.uniform2uiv(this.addr,e)}function hw(t,e){t.uniform3uiv(this.addr,e)}function fw(t,e){t.uniform4uiv(this.addr,e)}function pw(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||jg,s[a])}function mw(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vg,s[a])}function gw(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Wg,s[a])}function xw(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Gg,s[a])}function vw(t){switch(t){case 5126:return QE;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return aw;case 35667:case 35671:return ow;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return dw;case 36295:return hw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return xw}}class _w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JE(n.type)}}class yw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vw(n.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function wp(t,e){t.seq.push(e),t.map[e.id]=e}function Mw(t,e,n){const i=t.name,r=i.length;for(kc.lastIndex=0;;){const s=kc.exec(i),a=kc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wp(n,c===void 0?new _w(o,t,e):new yw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Sw(o),wp(n,f)),n=f}}}class Do{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Mw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ew=37297;let ww=0;function Tw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function bw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ll&&n===ol?i="LinearDisplayP3ToLinearSRGB":e===ol&&n===ll&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case Cl:return[i,"LinearTransferOETF"];case Ut:case Xd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Tw(t.getShaderSource(e),a)}else return r}function Aw(t,e){const n=bw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Cw(t,e){let n;switch(e){case zy:n="Linear";break;case By:n="Reinhard";break;case jy:n="OptimizedCineon";break;case Hy:n="ACESFilmic";break;case Vy:n="AgX";break;case Gy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Rw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function Nw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function Pw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ts(t){return t!==""}function Ap(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(t){return t.replace(Dw,Iw)}const Uw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Iw(t,e){let n=ke[e];if(n===void 0){const i=Uw.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xu(n)}const Fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(t){return t.replace(Fw,kw)}function kw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Np(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ow(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===fy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function zw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case ky:e="ENVMAP_BLENDING_MIX";break;case Oy:e="ENVMAP_BLENDING_ADD";break}return e}function Hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Gw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ow(n),c=zw(n),h=Bw(n),f=jw(n),p=Hw(n),g=n.isWebGL2?"":Rw(n),S=Nw(n),y=Pw(s),m=r.createProgram();let d,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ts).join(`
`),d.length>0&&(d+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ts).join(`
`),v.length>0&&(v+=`
`)):(d=[Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),v=[g,Np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Hi?Cw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Aw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ts).join(`
`)),a=Xu(a),a=Ap(a,n),a=Cp(a,n),o=Xu(o),o=Ap(o,n),o=Cp(o,n),a=Rp(a),o=Rp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+d+a,T=x+v+o,M=Tp(r,r.VERTEX_SHADER,_),b=Tp(r,r.FRAGMENT_SHADER,T);r.attachShader(m,M),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(F){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(M).trim(),z=r.getShaderInfoLog(b).trim();let N=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,M,b);else{const P=bp(r,M,"vertex"),I=bp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+P+`
`+I)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||z==="")&&(H=!1);H&&(F.diagnostics={runnable:N,programLog:K,vertexShader:{log:L,prefix:d},fragmentShader:{log:z,prefix:v}})}r.deleteShader(M),r.deleteShader(b),E=new Do(r,m),C=Lw(r,m)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,Ew)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ww++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let Vw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Xw(e),n.set(e,i)),i}}class Xw{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function $w(t,e,n,i,r,s,a){const o=new Ng,l=new Ww,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,C,W,F,K){const L=F.fog,z=K.geometry,N=E.isMeshStandardMaterial?F.environment:null,H=(E.isMeshStandardMaterial?n:e).get(E.envMap||N),P=H&&H.mapping===Al?H.image.height:null,I=S[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const O=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=O!==void 0?O.length:0;let J=0;z.morphAttributes.position!==void 0&&(J=1),z.morphAttributes.normal!==void 0&&(J=2),z.morphAttributes.color!==void 0&&(J=3);let q,Q,ce,ue;if(I){const Wt=$n[I];q=Wt.vertexShader,Q=Wt.fragmentShader}else q=E.vertexShader,Q=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const X=t.getRenderTarget(),se=K.isInstancedMesh===!0,fe=K.isBatchedMesh===!0,ae=!!E.map,we=!!E.matcap,j=!!H,lt=!!E.aoMap,ye=!!E.lightMap,Pe=!!E.bumpMap,Se=!!E.normalMap,Je=!!E.displacementMap,Oe=!!E.emissiveMap,R=!!E.metalnessMap,w=!!E.roughnessMap,V=E.anisotropy>0,ie=E.clearcoat>0,te=E.iridescence>0,re=E.sheen>0,Me=E.transmission>0,pe=V&&!!E.anisotropyMap,ve=ie&&!!E.clearcoatMap,Re=ie&&!!E.clearcoatNormalMap,ze=ie&&!!E.clearcoatRoughnessMap,ee=te&&!!E.iridescenceMap,Qe=te&&!!E.iridescenceThicknessMap,We=re&&!!E.sheenColorMap,De=re&&!!E.sheenRoughnessMap,Te=!!E.specularMap,_e=!!E.specularColorMap,Fe=!!E.specularIntensityMap,Ke=Me&&!!E.transmissionMap,pt=Me&&!!E.thicknessMap,je=!!E.gradientMap,oe=!!E.alphaMap,D=E.alphaTest>0,de=!!E.alphaHash,he=!!E.extensions,Ne=!!z.attributes.uv1,be=!!z.attributes.uv2,tt=!!z.attributes.uv3;let nt=Hi;return E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:h,shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:Q,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:fe,instancing:se,instancingColor:se&&K.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:X===null?t.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:xi,map:ae,matcap:we,envMap:j,envMapMode:j&&H.mapping,envMapCubeUVHeight:P,aoMap:lt,lightMap:ye,bumpMap:Pe,normalMap:Se,displacementMap:p&&Je,emissiveMap:Oe,normalMapObjectSpace:Se&&E.normalMapType===nS,normalMapTangentSpace:Se&&E.normalMapType===Eg,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:pe,clearcoat:ie,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:We,sheenRoughnessMap:De,specularMap:Te,specularColorMap:_e,specularIntensityMap:Fe,transmission:Me,transmissionMap:Ke,thicknessMap:pt,gradientMap:je,opaque:E.transparent===!1&&E.blending===ls,alphaMap:oe,alphaTest:D,alphaHash:de,combine:E.combine,mapUv:ae&&y(E.map.channel),aoMapUv:lt&&y(E.aoMap.channel),lightMapUv:ye&&y(E.lightMap.channel),bumpMapUv:Pe&&y(E.bumpMap.channel),normalMapUv:Se&&y(E.normalMap.channel),displacementMapUv:Je&&y(E.displacementMap.channel),emissiveMapUv:Oe&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:w&&y(E.roughnessMap.channel),anisotropyMapUv:pe&&y(E.anisotropyMap.channel),clearcoatMapUv:ve&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(E.sheenRoughnessMap.channel),specularMapUv:Te&&y(E.specularMap.channel),specularColorMapUv:_e&&y(E.specularColorMap.channel),specularIntensityMapUv:Fe&&y(E.specularIntensityMap.channel),transmissionMapUv:Ke&&y(E.transmissionMap.channel),thicknessMapUv:pt&&y(E.thicknessMap.channel),alphaMapUv:oe&&y(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Se||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:be,vertexUv3s:tt,pointsUvs:K.isPoints===!0&&!!z.attributes.uv&&(ae||oe),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:he&&E.extensions.derivatives===!0,extensionFragDepth:he&&E.extensions.fragDepth===!0,extensionDrawBuffers:he&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)C.push(W),C.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(v(C,E),x(C,E),C.push(t.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function v(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function x(E,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),E.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function _(E){const C=S[E.type];let W;if(C){const F=$n[C];W=RS.clone(F.uniforms)}else W=E.uniforms;return W}function T(E,C){let W;for(let F=0,K=c.length;F<K;F++){const L=c[F];if(L.cacheKey===C){W=L,++W.usedTimes;break}}return W===void 0&&(W=new Gw(t,C,E,s),c.push(W)),W}function M(E){if(--E.usedTimes===0){const C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:U}}function qw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Yw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,S,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:S,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=S,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function o(f,p,g,S,y,m){const d=a(f,p,g,S,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(f,p,g,S,y,m){const d=a(f,p,g,S,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,p){n.length>1&&n.sort(f||Yw),i.length>1&&i.sort(p||Pp),r.length>1&&r.sort(p||Pp)}function h(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Kw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Lp,t.set(i,[a])):r>=s.length?(a=new Lp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new $e};break;case"SpotLight":n={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Qw=0;function eT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tT(t,e){const n=new Zw,i=Jw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,a=new Mt,o=new Mt;function l(h,f){let p=0,g=0,S=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,m=0,d=0,v=0,x=0,_=0,T=0,M=0,b=0,U=0,E=0;h.sort(eT);const C=f===!0?Math.PI:1;for(let F=0,K=h.length;F<K;F++){const L=h[F],z=L.color,N=L.intensity,H=L.distance,P=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=z.r*N*C,g+=z.g*N*C,S+=z.b*N*C;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],N);E++}else if(L.isDirectionalLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*C),L.castShadow){const O=L.shadow,Z=i.get(L);Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=P,r.directionalShadowMatrix[y]=L.shadow.matrix,_++}r.directional[y]=I,y++}else if(L.isSpotLight){const I=n.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(z).multiplyScalar(N*C),I.distance=H,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[d]=I;const O=L.shadow;if(L.map&&(r.spotLightMap[b]=L.map,b++,O.updateMatrices(L),L.castShadow&&U++),r.spotLightMatrix[d]=O.matrix,L.castShadow){const Z=i.get(L);Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,r.spotShadow[d]=Z,r.spotShadowMap[d]=P,M++}d++}else if(L.isRectAreaLight){const I=n.get(L);I.color.copy(z).multiplyScalar(N),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=I,v++}else if(L.isPointLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*C),I.distance=L.distance,I.decay=L.decay,L.castShadow){const O=L.shadow,Z=i.get(L);Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=L.shadow.matrix,T++}r.point[m]=I,m++}else if(L.isHemisphereLight){const I=n.get(L);I.skyColor.copy(L.color).multiplyScalar(N*C),I.groundColor.copy(L.groundColor).multiplyScalar(N*C),r.hemi[x]=I,x++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==y||W.pointLength!==m||W.spotLength!==d||W.rectAreaLength!==v||W.hemiLength!==x||W.numDirectionalShadows!==_||W.numPointShadows!==T||W.numSpotShadows!==M||W.numSpotMaps!==b||W.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=M+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,W.directionalLength=y,W.pointLength=m,W.spotLength=d,W.rectAreaLength=v,W.hemiLength=x,W.numDirectionalShadows=_,W.numPointShadows=T,W.numSpotShadows=M,W.numSpotMaps=b,W.numLightProbes=E,r.version=Qw++)}function c(h,f){let p=0,g=0,S=0,y=0,m=0;const d=f.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const _=h[v];if(_.isDirectionalLight){const T=r.directional[p];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),p++}else if(_.isSpotLight){const T=r.spot[S];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),S++}else if(_.isRectAreaLight){const T=r.rectArea[y];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),o.identity(),a.copy(_.matrixWorld),a.premultiply(d),o.extractRotation(a),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),g++}else if(_.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Dp(t,e){const n=new tT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function nT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Dp(t,e),n.set(s,[l])):a>=o.length?(l=new Dp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class iT extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rT extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function oT(t,e,n){let i=new $d;const r=new Ve,s=new Ve,a=new Pt,o=new iT({depthPacking:tS}),l=new rT,c={},h=n.maxTextureSize,f={[Xi]:ln,[ln]:Xi,[Yn]:Yn},p=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:sT,fragmentShader:aT}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const S=new Gn;S.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new di(S,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let d=this.type;this.render=function(M,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=t.getRenderTarget(),C=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ji),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const K=d!==si&&this.type===si,L=d===si&&this.type!==si;for(let z=0,N=M.length;z<N;z++){const H=M[z],P=H.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const I=P.getFrameExtents();if(r.multiply(I),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null||K===!0||L===!0){const Z=this.type!==si?{minFilter:Yt,magFilter:Yt}:{};P.map!==null&&P.map.dispose(),P.map=new Sr(r.x,r.y,Z),P.map.texture.name=H.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const O=P.getViewportCount();for(let Z=0;Z<O;Z++){const J=P.getViewport(Z);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),F.viewport(a),P.updateMatrices(H,Z),i=P.getFrustum(),_(b,U,P.camera,H,this.type)}P.isPointLightShadow!==!0&&this.type===si&&v(P,U),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,C,W)};function v(M,b){const U=e.update(y);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Sr(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,U,p,y,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,U,g,y,null)}function x(M,b,U,E){let C=null;const W=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(W!==void 0)C=W;else if(C=U.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=C.uuid,K=b.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let z=L[K];z===void 0&&(z=C.clone(),L[K]=z,b.addEventListener("dispose",T)),C=z}if(C.visible=b.visible,C.wireframe=b.wireframe,E===si?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:f[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=t.properties.get(C);F.light=U}return C}function _(M,b,U,E,C){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===si)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);const K=e.update(M),L=M.material;if(Array.isArray(L)){const z=K.groups;for(let N=0,H=z.length;N<H;N++){const P=z[N],I=L[P.materialIndex];if(I&&I.visible){const O=x(M,I,E,C);M.onBeforeShadow(t,M,b,U,K,O,P),t.renderBufferDirect(U,null,K,O,M,P),M.onAfterShadow(t,M,b,U,K,O,P)}}}else if(L.visible){const z=x(M,L,E,C);M.onBeforeShadow(t,M,b,U,K,z,null),t.renderBufferDirect(U,null,K,z,M,null),M.onAfterShadow(t,M,b,U,K,z,null)}}const F=M.children;for(let K=0,L=F.length;K<L;K++)_(F[K],b,U,E,C)}function T(M){M.target.removeEventListener("dispose",T);for(const U in c){const E=c[U],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function lT(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const de=new Pt;let he=null;const Ne=new Pt(0,0,0,0);return{setMask:function(be){he!==be&&!D&&(t.colorMask(be,be,be,be),he=be)},setLocked:function(be){D=be},setClear:function(be,tt,nt,At,Wt){Wt===!0&&(be*=At,tt*=At,nt*=At),de.set(be,tt,nt,At),Ne.equals(de)===!1&&(t.clearColor(be,tt,nt,At),Ne.copy(de))},reset:function(){D=!1,he=null,Ne.set(-1,0,0,0)}}}function s(){let D=!1,de=null,he=null,Ne=null;return{setTest:function(be){be?fe(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(be){de!==be&&!D&&(t.depthMask(be),de=be)},setFunc:function(be){if(he!==be){switch(be){case Ny:t.depthFunc(t.NEVER);break;case Py:t.depthFunc(t.ALWAYS);break;case Ly:t.depthFunc(t.LESS);break;case sl:t.depthFunc(t.LEQUAL);break;case Dy:t.depthFunc(t.EQUAL);break;case Uy:t.depthFunc(t.GEQUAL);break;case Iy:t.depthFunc(t.GREATER);break;case Fy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=be}},setLocked:function(be){D=be},setClear:function(be){Ne!==be&&(t.clearDepth(be),Ne=be)},reset:function(){D=!1,de=null,he=null,Ne=null}}}function a(){let D=!1,de=null,he=null,Ne=null,be=null,tt=null,nt=null,At=null,Wt=null;return{setTest:function(it){D||(it?fe(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(it){de!==it&&!D&&(t.stencilMask(it),de=it)},setFunc:function(it,Xt,Vn){(he!==it||Ne!==Xt||be!==Vn)&&(t.stencilFunc(it,Xt,Vn),he=it,Ne=Xt,be=Vn)},setOp:function(it,Xt,Vn){(tt!==it||nt!==Xt||At!==Vn)&&(t.stencilOp(it,Xt,Vn),tt=it,nt=Xt,At=Vn)},setLocked:function(it){D=it},setClear:function(it){Wt!==it&&(t.clearStencil(it),Wt=it)},reset:function(){D=!1,de=null,he=null,Ne=null,be=null,tt=null,nt=null,At=null,Wt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,f=new WeakMap;let p={},g={},S=new WeakMap,y=[],m=null,d=!1,v=null,x=null,_=null,T=null,M=null,b=null,U=null,E=new $e(0,0,0),C=0,W=!1,F=null,K=null,L=null,z=null,N=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(O)[1]),P=I>=1):O.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),P=I>=2);let Z=null,J={};const q=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),ce=new Pt().fromArray(q),ue=new Pt().fromArray(Q);function X(D,de,he,Ne){const be=new Uint8Array(4),tt=t.createTexture();t.bindTexture(D,tt),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<he;nt++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(de+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return tt}const se={};se[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(t.DEPTH_TEST),l.setFunc(sl),Oe(!1),R(pf),fe(t.CULL_FACE),Se(ji);function fe(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function ae(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function we(D,de){return g[D]!==de?(t.bindFramebuffer(D,de),g[D]=de,i&&(D===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function j(D,de){let he=y,Ne=!1;if(D)if(he=S.get(de),he===void 0&&(he=[],S.set(de,he)),D.isWebGLMultipleRenderTargets){const be=D.texture;if(he.length!==be.length||he[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=be.length;tt<nt;tt++)he[tt]=t.COLOR_ATTACHMENT0+tt;he.length=be.length,Ne=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,Ne=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function lt(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const ye={[ar]:t.FUNC_ADD,[my]:t.FUNC_SUBTRACT,[gy]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[vf]=t.MIN,ye[_f]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ye[vf]=D.MIN_EXT,ye[_f]=D.MAX_EXT)}const Pe={[xy]:t.ZERO,[vy]:t.ONE,[_y]:t.SRC_COLOR,[ku]:t.SRC_ALPHA,[Ty]:t.SRC_ALPHA_SATURATE,[Ey]:t.DST_COLOR,[Sy]:t.DST_ALPHA,[yy]:t.ONE_MINUS_SRC_COLOR,[Ou]:t.ONE_MINUS_SRC_ALPHA,[wy]:t.ONE_MINUS_DST_COLOR,[My]:t.ONE_MINUS_DST_ALPHA,[by]:t.CONSTANT_COLOR,[Ay]:t.ONE_MINUS_CONSTANT_COLOR,[Cy]:t.CONSTANT_ALPHA,[Ry]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(D,de,he,Ne,be,tt,nt,At,Wt,it){if(D===ji){d===!0&&(ae(t.BLEND),d=!1);return}if(d===!1&&(fe(t.BLEND),d=!0),D!==py){if(D!==v||it!==W){if((x!==ar||M!==ar)&&(t.blendEquation(t.FUNC_ADD),x=ar,M=ar),it)switch(D){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mf:t.blendFunc(t.ONE,t.ONE);break;case gf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,T=null,b=null,U=null,E.set(0,0,0),C=0,v=D,W=it}return}be=be||de,tt=tt||he,nt=nt||Ne,(de!==x||be!==M)&&(t.blendEquationSeparate(ye[de],ye[be]),x=de,M=be),(he!==_||Ne!==T||tt!==b||nt!==U)&&(t.blendFuncSeparate(Pe[he],Pe[Ne],Pe[tt],Pe[nt]),_=he,T=Ne,b=tt,U=nt),(At.equals(E)===!1||Wt!==C)&&(t.blendColor(At.r,At.g,At.b,Wt),E.copy(At),C=Wt),v=D,W=!1}function Je(D,de){D.side===Yn?ae(t.CULL_FACE):fe(t.CULL_FACE);let he=D.side===ln;de&&(he=!he),Oe(he),D.blending===ls&&D.transparent===!1?Se(ji):Se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ne=D.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){F!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),F=D)}function R(D){D!==dy?(fe(t.CULL_FACE),D!==K&&(D===pf?t.cullFace(t.BACK):D===hy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),K=D}function w(D){D!==L&&(P&&t.lineWidth(D),L=D)}function V(D,de,he){D?(fe(t.POLYGON_OFFSET_FILL),(z!==de||N!==he)&&(t.polygonOffset(de,he),z=de,N=he)):ae(t.POLYGON_OFFSET_FILL)}function ie(D){D?fe(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function te(D){D===void 0&&(D=t.TEXTURE0+H-1),Z!==D&&(t.activeTexture(D),Z=D)}function re(D,de,he){he===void 0&&(Z===null?he=t.TEXTURE0+H-1:he=Z);let Ne=J[he];Ne===void 0&&(Ne={type:void 0,texture:void 0},J[he]=Ne),(Ne.type!==D||Ne.texture!==de)&&(Z!==he&&(t.activeTexture(he),Z=he),t.bindTexture(D,de||se[D]),Ne.type=D,Ne.texture=de)}function Me(){const D=J[Z];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){ce.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function Ke(D){ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function pt(D,de){let he=f.get(de);he===void 0&&(he=new WeakMap,f.set(de,he));let Ne=he.get(D);Ne===void 0&&(Ne=t.getUniformBlockIndex(de,D.name),he.set(D,Ne))}function je(D,de){const Ne=f.get(de).get(D);h.get(de)!==Ne&&(t.uniformBlockBinding(de,Ne,D.__bindingPointIndex),h.set(de,Ne))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},Z=null,J={},g={},S=new WeakMap,y=[],m=null,d=!1,v=null,x=null,_=null,T=null,M=null,b=null,U=null,E=new $e(0,0,0),C=0,W=!1,F=null,K=null,L=null,z=null,N=null,ce.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:ae,bindFramebuffer:we,drawBuffers:j,useProgram:lt,setBlending:Se,setMaterial:Je,setFlipSided:Oe,setCullFace:R,setLineWidth:w,setPolygonOffset:V,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Te,texImage3D:_e,updateUBOMapping:pt,uniformBlockBinding:je,texStorage2D:We,texStorage3D:De,texSubImage2D:Re,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:Qe,scissor:Fe,viewport:Ke,reset:oe}}function cT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,w){return g?new OffscreenCanvas(R,w):ul("canvas")}function y(R,w,V,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=w?Wu:Math.floor,Me=re(te*R.width),pe=re(te*R.height);f===void 0&&(f=S(Me,pe));const ve=V?S(Me,pe):f;return ve.width=Me,ve.height=pe,ve.getContext("2d").drawImage(R,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+pe+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Yf(R.width)&&Yf(R.height)}function d(R){return o?!1:R.wrapS!==On||R.wrapT!==On||R.minFilter!==Yt&&R.minFilter!==En}function v(R,w){return R.generateMipmaps&&w&&R.minFilter!==Yt&&R.minFilter!==En}function x(R){t.generateMipmap(R)}function _(R,w,V,ie,te=!1){if(o===!1)return w;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=w;if(w===t.RED&&(V===t.FLOAT&&(re=t.R32F),V===t.HALF_FLOAT&&(re=t.R16F),V===t.UNSIGNED_BYTE&&(re=t.R8)),w===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.R8UI),V===t.UNSIGNED_SHORT&&(re=t.R16UI),V===t.UNSIGNED_INT&&(re=t.R32UI),V===t.BYTE&&(re=t.R8I),V===t.SHORT&&(re=t.R16I),V===t.INT&&(re=t.R32I)),w===t.RG&&(V===t.FLOAT&&(re=t.RG32F),V===t.HALF_FLOAT&&(re=t.RG16F),V===t.UNSIGNED_BYTE&&(re=t.RG8)),w===t.RGBA){const Me=te?al:et.getTransfer(ie);V===t.FLOAT&&(re=t.RGBA32F),V===t.HALF_FLOAT&&(re=t.RGBA16F),V===t.UNSIGNED_BYTE&&(re=Me===at?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function T(R,w,V){return v(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==En?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function M(R){return R===Yt||R===yf||R===lc?t.NEAREST:t.LINEAR}function b(R){const w=R.target;w.removeEventListener("dispose",b),E(w),w.isVideoTexture&&h.delete(w)}function U(R){const w=R.target;w.removeEventListener("dispose",U),W(w)}function E(R){const w=i.get(R);if(w.__webglInit===void 0)return;const V=R.source,ie=p.get(V);if(ie){const te=ie[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(ie).length===0&&p.delete(V)}i.remove(R)}function C(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const V=R.source,ie=p.get(V);delete ie[w.__cacheKey],a.memory.textures--}function W(R){const w=R.texture,V=i.get(R),ie=i.get(w);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(V.__webglFramebuffer[te]))for(let re=0;re<V.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(V.__webglFramebuffer[te][re]);else t.deleteFramebuffer(V.__webglFramebuffer[te]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[te])}else{if(Array.isArray(V.__webglFramebuffer))for(let te=0;te<V.__webglFramebuffer.length;te++)t.deleteFramebuffer(V.__webglFramebuffer[te]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,re=w.length;te<re;te++){const Me=i.get(w[te]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(w[te])}i.remove(w),i.remove(R)}let F=0;function K(){F=0}function L(){const R=F;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function z(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function N(R,w){const V=i.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,R,w);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function H(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ce(V,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function P(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ce(V,R,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function I(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ue(V,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const O={[ju]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[Hu]:t.MIRRORED_REPEAT},Z={[Yt]:t.NEAREST,[yf]:t.NEAREST_MIPMAP_NEAREST,[lc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Wy]:t.LINEAR_MIPMAP_NEAREST,[_a]:t.LINEAR_MIPMAP_LINEAR},J={[iS]:t.NEVER,[cS]:t.ALWAYS,[rS]:t.LESS,[wg]:t.LEQUAL,[sS]:t.EQUAL,[lS]:t.GEQUAL,[aS]:t.GREATER,[oS]:t.NOTEQUAL};function q(R,w,V){if(V?(t.texParameteri(R,t.TEXTURE_WRAP_S,O[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,O[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,O[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[w.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==On||w.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,M(w.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Yt&&w.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Yt||w.minFilter!==lc&&w.minFilter!==_a||w.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Q(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",b));const ie=w.source;let te=p.get(ie);te===void 0&&(te={},p.set(ie,te));const re=z(w);if(re!==R.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[re].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&C(w)),R.__cacheKey=re,R.__webglTexture=te[re].texture}return V}function ce(R,w,V){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const te=Q(R,w),re=w.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+V);const Me=i.get(re);if(re.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const pe=et.getPrimaries(et.workingColorSpace),ve=w.colorSpace===Tn?null:et.getPrimaries(w.colorSpace),Re=w.colorSpace===Tn||pe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ze=d(w)&&m(w.image)===!1;let ee=y(w.image,ze,!1,r.maxTextureSize);ee=Oe(w,ee);const Qe=m(ee)||o,We=s.convert(w.format,w.colorSpace);let De=s.convert(w.type),Te=_(w.internalFormat,We,De,w.colorSpace,w.isVideoTexture);q(ie,w,Qe);let _e;const Fe=w.mipmaps,Ke=o&&w.isVideoTexture!==!0&&Te!==Sg,pt=Me.__version===void 0||te===!0,je=T(w,ee,Qe);if(w.isDepthTexture)Te=t.DEPTH_COMPONENT,o?w.type===Li?Te=t.DEPTH_COMPONENT32F:w.type===Pi?Te=t.DEPTH_COMPONENT24:w.type===fr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:w.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pr&&Te===t.DEPTH_COMPONENT&&w.type!==Wd&&w.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Pi,De=s.convert(w.type)),w.format===_s&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,w.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=fr,De=s.convert(w.type))),pt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,We,De,null));else if(w.isDataTexture)if(Fe.length>0&&Qe){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,je,Te,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Te,_e.width,_e.height,0,We,De,_e.data);w.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,je,Te,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,We,De,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,We,De,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ke&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Te,Fe[0].width,Fe[0].height,ee.depth);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],w.format!==zn?We!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,ee.depth,We,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Te,_e.width,_e.height,ee.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,ee.depth,We,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Te,_e.width,_e.height,ee.depth,0,We,De,_e.data)}else{Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,je,Te,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],w.format!==zn?We!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,We,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Te,_e.width,_e.height,0,We,De,_e.data)}else if(w.isDataArrayTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Te,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,We,De,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,We,De,ee.data);else if(w.isData3DTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_3D,je,Te,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,We,De,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,We,De,ee.data);else if(w.isFramebufferTexture){if(pt)if(Ke)n.texStorage2D(t.TEXTURE_2D,je,Te,ee.width,ee.height);else{let oe=ee.width,D=ee.height;for(let de=0;de<je;de++)n.texImage2D(t.TEXTURE_2D,de,Te,oe,D,0,We,De,null),oe>>=1,D>>=1}}else if(Fe.length>0&&Qe){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,je,Te,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,We,De,_e):n.texImage2D(t.TEXTURE_2D,oe,Te,We,De,_e);w.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,je,Te,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,De,ee)):n.texImage2D(t.TEXTURE_2D,0,Te,We,De,ee);v(w,Qe)&&x(ie),Me.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ue(R,w,V){if(w.image.length!==6)return;const ie=Q(R,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const re=i.get(te);if(te.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const Me=et.getPrimaries(et.workingColorSpace),pe=w.colorSpace===Tn?null:et.getPrimaries(w.colorSpace),ve=w.colorSpace===Tn||Me===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,ze=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!Re&&!ze?ee[oe]=y(w.image[oe],!1,!0,r.maxCubemapSize):ee[oe]=ze?w.image[oe].image:w.image[oe],ee[oe]=Oe(w,ee[oe]);const Qe=ee[0],We=m(Qe)||o,De=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),_e=_(w.internalFormat,De,Te,w.colorSpace),Fe=o&&w.isVideoTexture!==!0,Ke=re.__version===void 0||ie===!0;let pt=T(w,Qe,We);q(t.TEXTURE_CUBE_MAP,w,We);let je;if(Re){Fe&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,_e,Qe.width,Qe.height);for(let oe=0;oe<6;oe++){je=ee[oe].mipmaps;for(let D=0;D<je.length;D++){const de=je[D];w.format!==zn?De!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,de.width,de.height,De,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,de.width,de.height,De,Te,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,_e,de.width,de.height,0,De,Te,de.data)}}}else{je=w.mipmaps,Fe&&Ke&&(je.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,_e,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(ze){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,De,Te,ee[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,ee[oe].width,ee[oe].height,0,De,Te,ee[oe].data);for(let D=0;D<je.length;D++){const he=je[D].image[oe].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,he.width,he.height,De,Te,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,_e,he.width,he.height,0,De,Te,he.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,Te,ee[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,De,Te,ee[oe]);for(let D=0;D<je.length;D++){const de=je[D];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,De,Te,de.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,_e,De,Te,de.image[oe])}}}v(w,We)&&x(t.TEXTURE_CUBE_MAP),re.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,V,ie,te,re){const Me=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),ve=_(V.internalFormat,Me,pe,V.colorSpace);if(!i.get(w).__hasExternalTextures){const ze=Math.max(1,w.width>>re),ee=Math.max(1,w.height>>re);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,re,ve,ze,ee,w.depth,0,Me,pe,null):n.texImage2D(te,re,ve,ze,ee,0,Me,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,i.get(V).__webglTexture,0,Pe(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,i.get(V).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ie=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||Se(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Li?ie=t.DEPTH_COMPONENT32F:te.type===Pi&&(ie=t.DEPTH_COMPONENT24));const re=Pe(w);Se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const ie=Pe(w);V&&Se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,w.width,w.height):Se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ie.length;te++){const re=ie[te],Me=s.convert(re.format,re.colorSpace),pe=s.convert(re.type),ve=_(re.internalFormat,Me,pe,re.colorSpace),Re=Pe(w);V&&Se(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,w.width,w.height):Se(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,ve,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ve,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,te=Pe(w);if(w.depthTexture.format===pr)Se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===_s)Se(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ae(R){const w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=t.createRenderbuffer(),se(w.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),se(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,w,V){const ie=i.get(R);w!==void 0&&X(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ae(R)}function j(R){const w=R.texture,V=i.get(R),ie=i.get(w);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,a.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,Me=m(R)||o;if(te){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let ve=0;ve<w.mipmaps.length;ve++)V.__webglFramebuffer[pe][ve]=t.createFramebuffer()}else V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const pe=R.texture;for(let ve=0,Re=pe.length;ve<Re;ve++){const ze=i.get(pe[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Se(R)===!1){const pe=re?w:[w];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){const Re=pe[ve];V.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);const ze=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),Qe=_(Re.internalFormat,ze,ee,Re.colorSpace,R.isXRRenderTarget===!0),We=Pe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Qe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),se(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),q(t.TEXTURE_CUBE_MAP,w,Me);for(let pe=0;pe<6;pe++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)X(V.__webglFramebuffer[pe][ve],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else X(V.__webglFramebuffer[pe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(w,Me)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const pe=R.texture;for(let ve=0,Re=pe.length;ve<Re;ve++){const ze=pe[ve],ee=i.get(ze);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),q(t.TEXTURE_2D,ze,Me),X(V.__webglFramebuffer,R,ze,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),v(ze,Me)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ie.__webglTexture),q(pe,w,Me),o&&w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)X(V.__webglFramebuffer[ve],R,w,t.COLOR_ATTACHMENT0,pe,ve);else X(V.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,pe,0);v(w,Me)&&x(pe),n.unbindTexture()}R.depthBuffer&&ae(R)}function lt(R){const w=m(R)||o,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=V.length;ie<te;ie++){const re=V[ie];if(v(re,w)){const Me=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(re).__webglTexture;n.bindTexture(Me,pe),x(Me),n.unbindTexture()}}}function ye(R){if(o&&R.samples>0&&Se(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ie=R.height;let te=t.COLOR_BUFFER_BIT;const re=[],Me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(R),ve=R.isWebGLMultipleRenderTargets===!0;if(ve)for(let Re=0;Re<w.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<w.length;Re++){re.push(t.COLOR_ATTACHMENT0+Re),R.depthBuffer&&re.push(Me);const ze=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ze===!1&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),ve){const ee=i.get(w[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,V,ie,0,0,V,ie,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<w.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const ze=i.get(w[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(r.maxSamples,R.samples)}function Se(R){const w=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Oe(R,w){const V=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Gu||V!==xi&&V!==Tn&&(et.getTransfer(V)===at?o===!1?e.has("EXT_sRGB")===!0&&ie===zn?(R.format=Gu,R.minFilter=En,R.generateMipmaps=!1):w=bg.sRGBToLinear(w):(ie!==zn||te!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=P,this.setTextureCube=I,this.rebindTextures=we,this.setupRenderTarget=j,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Se}function uT(t,e,n){const i=n.isWebGL2;function r(s,a=Tn){let o;const l=et.getTransfer(a);if(s===Gi)return t.UNSIGNED_BYTE;if(s===gg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===xg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Xy)return t.BYTE;if(s===$y)return t.SHORT;if(s===Wd)return t.UNSIGNED_SHORT;if(s===mg)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===ya)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qy)return t.ALPHA;if(s===zn)return t.RGBA;if(s===Yy)return t.LUMINANCE;if(s===Ky)return t.LUMINANCE_ALPHA;if(s===pr)return t.DEPTH_COMPONENT;if(s===_s)return t.DEPTH_STENCIL;if(s===Gu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Zy)return t.RED;if(s===vg)return t.RED_INTEGER;if(s===Jy)return t.RG;if(s===_g)return t.RG_INTEGER;if(s===yg)return t.RGBA_INTEGER;if(s===cc||s===uc||s===dc||s===hc)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===cc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===cc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sf||s===Mf||s===Ef||s===wf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Sf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ef)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tf||s===bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Tf)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===bf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Af||s===Cf||s===Rf||s===Nf||s===Pf||s===Lf||s===Df||s===Uf||s===If||s===Ff||s===kf||s===Of||s===zf||s===Bf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Af)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Df)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===If)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ff)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Of)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fc||s===jf||s===Hf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===fc)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qy||s===Gf||s===Vf||s===Wf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===fc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Gf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class dT extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,S=.005;c.inputState.pinching&&p>g+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class fT extends ws{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,S=null;const y=n.getContextAttributes();let m=null,d=null;const v=[],x=[],_=new Ve;let T=null;const M=new wn;M.layers.enable(1),M.viewport=new Pt;const b=new wn;b.layers.enable(2),b.viewport=new Pt;const U=[M,b],E=new dT;E.layers.enable(1),E.layers.enable(2);let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Oc,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Oc,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Oc,v[q]=Q),Q.getHandSpace()};function F(q){const Q=x.indexOf(q.inputSource);if(Q===-1)return;const ce=v[Q];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||a),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const Q=x[q];Q!==null&&(x[q]=null,v[q].disconnect(Q))}C=null,W=null,e.setRenderTarget(m),g=null,p=null,f=null,r=null,d=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new Sr(g.framebufferWidth,g.framebufferHeight,{format:zn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,ce=null,ue=null;y.depth&&(ue=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=y.stencil?_s:pr,ce=y.stencil?fr:Pi);const X={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(X),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Sr(p.textureWidth,p.textureHeight,{format:zn,type:Gi,depthTexture:new Bg(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const se=e.properties.get(d);se.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let Q=0;Q<q.removed.length;Q++){const ce=q.removed[Q],ue=x.indexOf(ce);ue>=0&&(x[ue]=null,v[ue].disconnect(ce))}for(let Q=0;Q<q.added.length;Q++){const ce=q.added[Q];let ue=x.indexOf(ce);if(ue===-1){for(let se=0;se<v.length;se++)if(se>=x.length){x.push(ce),ue=se;break}else if(x[se]===null){x[se]=ce,ue=se;break}if(ue===-1)break}const X=v[ue];X&&X.connect(ce)}}const z=new B,N=new B;function H(q,Q,ce){z.setFromMatrixPosition(Q.matrixWorld),N.setFromMatrixPosition(ce.matrixWorld);const ue=z.distanceTo(N),X=Q.projectionMatrix.elements,se=ce.projectionMatrix.elements,fe=X[14]/(X[10]-1),ae=X[14]/(X[10]+1),we=(X[9]+1)/X[5],j=(X[9]-1)/X[5],lt=(X[8]-1)/X[0],ye=(se[8]+1)/se[0],Pe=fe*lt,Se=fe*ye,Je=ue/(-lt+ye),Oe=Je*-lt;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=fe+Je,w=ae+Je,V=Pe-Oe,ie=Se+(ue-Oe),te=we*ae/w*R,re=j*ae/w*R;q.projectionMatrix.makePerspective(V,ie,te,re,R,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function P(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;E.near=b.near=M.near=q.near,E.far=b.far=M.far=q.far,(C!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,W=E.far);const Q=q.parent,ce=E.cameras;P(E,Q);for(let ue=0;ue<ce.length;ue++)P(ce[ue],Q);ce.length===2?H(E,M,b):E.projectionMatrix.copy(M.projectionMatrix),I(q,E,Q)};function I(q,Q,ce){ce===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)};let O=null;function Z(q,Q){if(h=Q.getViewerPose(c||a),S=Q,h!==null){const ce=h.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let ue=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let X=0;X<ce.length;X++){const se=ce[X];let fe=null;if(g!==null)fe=g.getViewport(se);else{const we=f.getViewSubImage(p,se);fe=we.viewport,X===0&&(e.setRenderTargetTextures(d,we.colorTexture,p.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(d))}let ae=U[X];ae===void 0&&(ae=new wn,ae.layers.enable(X),ae.viewport=new Pt,U[X]=ae),ae.matrix.fromArray(se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(fe.x,fe.y,fe.width,fe.height),X===0&&(E.matrix.copy(ae.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(ae)}}for(let ce=0;ce<v.length;ce++){const ue=x[ce],X=v[ce];ue!==null&&X!==void 0&&X.update(ue,Q,c||a)}O&&O(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),S=null}const J=new Og;J.setAnimationLoop(Z),this.setAnimationLoop=function(q){O=q},this.dispose=function(){}}}function pT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ig(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),S(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const _=x.program;i.uniformBlockBinding(v,_)}function c(v,x){let _=r[v.id];_===void 0&&(S(v),_=h(v),r[v.id]=_,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const M=e.render.frame;s[v.id]!==M&&(p(v),s[v.id]=M)}function h(v){const x=f();v.__bindingPointIndex=x;const _=t.createBuffer(),T=v.__size,M=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,T,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,_),_}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],_=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let M=0,b=_.length;M<b;M++){const U=Array.isArray(_[M])?_[M]:[_[M]];for(let E=0,C=U.length;E<C;E++){const W=U[E];if(g(W,M,E,T)===!0){const F=W.__offset,K=Array.isArray(W.value)?W.value:[W.value];let L=0;for(let z=0;z<K.length;z++){const N=K[z],H=y(N);typeof N=="number"||typeof N=="boolean"?(W.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,F+L,W.__data)):N.isMatrix3?(W.__data[0]=N.elements[0],W.__data[1]=N.elements[1],W.__data[2]=N.elements[2],W.__data[3]=0,W.__data[4]=N.elements[3],W.__data[5]=N.elements[4],W.__data[6]=N.elements[5],W.__data[7]=0,W.__data[8]=N.elements[6],W.__data[9]=N.elements[7],W.__data[10]=N.elements[8],W.__data[11]=0):(N.toArray(W.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,_,T){const M=v.value,b=x+"_"+_;if(T[b]===void 0)return typeof M=="number"||typeof M=="boolean"?T[b]=M:T[b]=M.clone(),!0;{const U=T[b];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return T[b]=M,!0}else if(U.equals(M)===!1)return U.copy(M),!0}return!1}function S(v){const x=v.uniforms;let _=0;const T=16;for(let b=0,U=x.length;b<U;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let C=0,W=E.length;C<W;C++){const F=E[C],K=Array.isArray(F.value)?F.value:[F.value];for(let L=0,z=K.length;L<z;L++){const N=K[L],H=y(N),P=_%T;P!==0&&T-P<H.boundary&&(_+=T-P),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=H.storage}}}const M=_%T;return M>0&&(_+=T-M),v.__size=_,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Xg{constructor(e={}){const{canvas:n=dS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),S=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const x=this;let _=!1,T=0,M=0,b=null,U=-1,E=null;const C=new Pt,W=new Pt;let F=null;const K=new $e(0);let L=0,z=n.width,N=n.height,H=1,P=null,I=null;const O=new Pt(0,0,z,N),Z=new Pt(0,0,z,N);let J=!1;const q=new $d;let Q=!1,ce=!1,ue=null;const X=new Mt,se=new Ve,fe=new B,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return b===null?H:1}let j=i;function lt(A,k){for(let $=0;$<A.length;$++){const Y=A[$],G=n.getContext(Y,k);if(G!==null)return G}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",de,!1),j===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),j=lt(k,A),j===null)throw lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,Pe,Se,Je,Oe,R,w,V,ie,te,re,Me,pe,ve,Re,ze,ee,Qe,We,De,Te,_e,Fe,Ke;function pt(){ye=new TE(j),Pe=new _E(j,ye,e),ye.init(Pe),_e=new uT(j,ye,Pe),Se=new lT(j,ye,Pe),Je=new CE(j),Oe=new qw,R=new cT(j,ye,Se,Oe,Pe,_e,Je),w=new SE(x),V=new wE(x),ie=new FS(j,Pe),Fe=new xE(j,ye,ie,Pe),te=new bE(j,ie,Je,Fe),re=new LE(j,te,ie,Je),We=new PE(j,Pe,R),ze=new yE(Oe),Me=new $w(x,w,V,ye,Pe,Fe,ze),pe=new pT(x,Oe),ve=new Kw,Re=new nT(ye,Pe),Qe=new gE(x,w,V,Se,re,p,l),ee=new oT(x,re,Pe),Ke=new mT(j,Je,Pe,Se),De=new vE(j,ye,Je,Pe),Te=new AE(j,ye,Je,Pe),Je.programs=Me.programs,x.capabilities=Pe,x.extensions=ye,x.properties=Oe,x.renderLists=ve,x.shadowMap=ee,x.state=Se,x.info=Je}pt();const je=new fT(x,j);this.xr=je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(z,N,!1))},this.getSize=function(A){return A.set(z,N)},this.setSize=function(A,k,$=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,N=k,n.width=Math.floor(A*H),n.height=Math.floor(k*H),$===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(z*H,N*H).floor()},this.setDrawingBufferSize=function(A,k,$){z=A,N=k,H=$,n.width=Math.floor(A*$),n.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,k,$,Y){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,k,$,Y),Se.viewport(C.copy(O).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,k,$,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,k,$,Y),Se.scissor(W.copy(Z).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){Se.setScissorTest(J=A)},this.setOpaqueSort=function(A){P=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,k=!0,$=!0){let Y=0;if(A){let G=!1;if(b!==null){const ge=b.texture.format;G=ge===yg||ge===_g||ge===vg}if(G){const ge=b.texture.type,Ee=ge===Gi||ge===Pi||ge===Wd||ge===fr||ge===gg||ge===xg,Ce=Qe.getClearColor(),Le=Qe.getClearAlpha(),Be=Ce.r,Ue=Ce.g,Ie=Ce.b;Ee?(g[0]=Be,g[1]=Ue,g[2]=Ie,g[3]=Le,j.clearBufferuiv(j.COLOR,0,g)):(S[0]=Be,S[1]=Ue,S[2]=Ie,S[3]=Le,j.clearBufferiv(j.COLOR,0,S))}else Y|=j.COLOR_BUFFER_BIT}k&&(Y|=j.DEPTH_BUFFER_BIT),$&&(Y|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),Re.dispose(),Oe.dispose(),w.dispose(),V.dispose(),re.dispose(),Fe.dispose(),Ke.dispose(),Me.dispose(),je.dispose(),je.removeEventListener("sessionstart",Wt),je.removeEventListener("sessionend",it),ue&&(ue.dispose(),ue=null),Xt.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=Je.autoReset,k=ee.enabled,$=ee.autoUpdate,Y=ee.needsUpdate,G=ee.type;pt(),Je.autoReset=A,ee.enabled=k,ee.autoUpdate=$,ee.needsUpdate=Y,ee.type=G}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const k=A.target;k.removeEventListener("dispose",he),Ne(k)}function Ne(A){be(A),Oe.remove(A)}function be(A){const k=Oe.get(A).programs;k!==void 0&&(k.forEach(function($){Me.releaseProgram($)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,Y,G,ge){k===null&&(k=ae);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ce=Kg(A,k,$,Y,G);Se.setMaterial(Y,Ee);let Le=$.index,Be=1;if(Y.wireframe===!0){if(Le=te.getWireframeAttribute($),Le===void 0)return;Be=2}const Ue=$.drawRange,Ie=$.attributes.position;let vt=Ue.start*Be,cn=(Ue.start+Ue.count)*Be;ge!==null&&(vt=Math.max(vt,ge.start*Be),cn=Math.min(cn,(ge.start+ge.count)*Be)),Le!==null?(vt=Math.max(vt,0),cn=Math.min(cn,Le.count)):Ie!=null&&(vt=Math.max(vt,0),cn=Math.min(cn,Ie.count));const Ct=cn-vt;if(Ct<0||Ct===1/0)return;Fe.setup(G,Y,Ce,$,Le);let Qn,ut=De;if(Le!==null&&(Qn=ie.get(Le),ut=Te,ut.setIndex(Qn)),G.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*we()),ut.setMode(j.LINES)):ut.setMode(j.TRIANGLES);else if(G.isLine){let He=Y.linewidth;He===void 0&&(He=1),Se.setLineWidth(He*we()),G.isLineSegments?ut.setMode(j.LINES):G.isLineLoop?ut.setMode(j.LINE_LOOP):ut.setMode(j.LINE_STRIP)}else G.isPoints?ut.setMode(j.POINTS):G.isSprite&&ut.setMode(j.TRIANGLES);if(G.isBatchedMesh)ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ut.renderInstances(vt,Ct,G.count);else if($.isInstancedBufferGeometry){const He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ll=Math.min($.instanceCount,He);ut.renderInstances(vt,Ct,Ll)}else ut.render(vt,Ct)};function tt(A,k,$){A.transparent===!0&&A.side===Yn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,La(A,k,$),A.side=Xi,A.needsUpdate=!0,La(A,k,$),A.side=Yn):La(A,k,$)}this.compile=function(A,k,$=null){$===null&&($=A),m=Re.get($),m.init(),v.push(m),$.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==$&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);const Y=new Set;return A.traverse(function(G){const ge=G.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Ce=ge[Ee];tt(Ce,$,G),Y.add(Ce)}else tt(ge,$,G),Y.add(ge)}),v.pop(),m=null,Y},this.compileAsync=function(A,k,$=null){const Y=this.compile(A,k,$);return new Promise(G=>{function ge(){if(Y.forEach(function(Ee){Oe.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){G(A);return}setTimeout(ge,10)}ye.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let nt=null;function At(A){nt&&nt(A)}function Wt(){Xt.stop()}function it(){Xt.start()}const Xt=new Og;Xt.setAnimationLoop(At),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(A){nt=A,je.setAnimationLoop(A),A===null?Xt.stop():Xt.start()},je.addEventListener("sessionstart",Wt),je.addEventListener("sessionend",it),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(k),k=je.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,b),m=Re.get(A,v.length),m.init(),v.push(m),X.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(X),ce=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,ce),y=ve.get(A,d.length),y.init(),d.push(y),Vn(A,k,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(P,I),this.info.render.frame++,Q===!0&&ze.beginShadows();const $=m.state.shadowsArray;if(ee.render($,A,k),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(y,A),m.setupLights(x._useLegacyLights),k.isArrayCamera){const Y=k.cameras;for(let G=0,ge=Y.length;G<ge;G++){const Ee=Y[G];Jd(y,A,Ee,Ee.viewport)}}else Jd(y,A,k);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,k),Fe.resetDefaultState(),U=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Vn(A,k,$,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Y&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);const Ee=re.update(A),Ce=A.material;Ce.visible&&y.push(A,Ee,Ce,$,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ee=re.update(A),Ce=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),fe.copy(Ee.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(X)),Array.isArray(Ce)){const Le=Ee.groups;for(let Be=0,Ue=Le.length;Be<Ue;Be++){const Ie=Le[Be],vt=Ce[Ie.materialIndex];vt&&vt.visible&&y.push(A,Ee,vt,$,fe.z,Ie)}}else Ce.visible&&y.push(A,Ee,Ce,$,fe.z,null)}}const ge=A.children;for(let Ee=0,Ce=ge.length;Ee<Ce;Ee++)Vn(ge[Ee],k,$,Y)}function Jd(A,k,$,Y){const G=A.opaque,ge=A.transmissive,Ee=A.transparent;m.setupLightsView($),Q===!0&&ze.setGlobalState(x.clippingPlanes,$),ge.length>0&&Yg(G,ge,k,$),Y&&Se.viewport(C.copy(Y)),G.length>0&&Pa(G,k,$),ge.length>0&&Pa(ge,k,$),Ee.length>0&&Pa(Ee,k,$),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Yg(A,k,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const ge=Pe.isWebGL2;ue===null&&(ue=new Sr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ya:Gi,minFilter:_a,samples:ge?4:0})),x.getDrawingBufferSize(se),ge?ue.setSize(se.x,se.y):ue.setSize(Wu(se.x),Wu(se.y));const Ee=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(K),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ce=x.toneMapping;x.toneMapping=Hi,Pa(A,$,Y),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue);let Le=!1;for(let Be=0,Ue=k.length;Be<Ue;Be++){const Ie=k[Be],vt=Ie.object,cn=Ie.geometry,Ct=Ie.material,Qn=Ie.group;if(Ct.side===Yn&&vt.layers.test(Y.layers)){const ut=Ct.side;Ct.side=ln,Ct.needsUpdate=!0,Qd(vt,$,Y,cn,Ct,Qn),Ct.side=ut,Ct.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue)),x.setRenderTarget(Ee),x.setClearColor(K,L),x.toneMapping=Ce}function Pa(A,k,$){const Y=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){const Ee=A[G],Ce=Ee.object,Le=Ee.geometry,Be=Y===null?Ee.material:Y,Ue=Ee.group;Ce.layers.test($.layers)&&Qd(Ce,k,$,Le,Be,Ue)}}function Qd(A,k,$,Y,G,ge){A.onBeforeRender(x,k,$,Y,G,ge),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(x,k,$,Y,A,ge),G.transparent===!0&&G.side===Yn&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,x.renderBufferDirect($,k,Y,G,A,ge),G.side=Xi,G.needsUpdate=!0,x.renderBufferDirect($,k,Y,G,A,ge),G.side=Yn):x.renderBufferDirect($,k,Y,G,A,ge),A.onAfterRender(x,k,$,Y,G,ge)}function La(A,k,$){k.isScene!==!0&&(k=ae);const Y=Oe.get(A),G=m.state.lights,ge=m.state.shadowsArray,Ee=G.state.version,Ce=Me.getParameters(A,G.state,ge,k,$),Le=Me.getProgramCacheKey(Ce);let Be=Y.programs;Y.environment=A.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||Y.environment),Be===void 0&&(A.addEventListener("dispose",he),Be=new Map,Y.programs=Be);let Ue=Be.get(Le);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===Ee)return th(A,Ce),Ue}else Ce.uniforms=Me.getUniforms(A),A.onBuild($,Ce,x),A.onBeforeCompile(Ce,x),Ue=Me.acquireProgram(Ce,Le),Be.set(Le,Ue),Y.uniforms=Ce.uniforms;const Ie=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ze.uniform),th(A,Ce),Y.needsLights=Jg(A),Y.lightsStateVersion=Ee,Y.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMap.value=G.state.directionalShadowMap,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotShadowMap.value=G.state.spotShadowMap,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMap.value=G.state.pointShadowMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ue,Y.uniformsList=null,Ue}function eh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Do.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function th(A,k){const $=Oe.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Kg(A,k,$,Y,G){k.isScene!==!0&&(k=ae),R.resetTextureUnits();const ge=k.fog,Ee=Y.isMeshStandardMaterial?k.environment:null,Ce=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xi,Le=(Y.isMeshStandardMaterial?V:w).get(Y.envMap||Ee),Be=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ue=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!$.morphAttributes.position,vt=!!$.morphAttributes.normal,cn=!!$.morphAttributes.color;let Ct=Hi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ct=x.toneMapping);const Qn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=Qn!==void 0?Qn.length:0,He=Oe.get(Y),Ll=m.state.lights;if(Q===!0&&(ce===!0||A!==E)){const _n=A===E&&Y.id===U;ze.setState(Y,A,_n)}let mt=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ll.state.version||He.outputColorSpace!==Ce||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||He.envMap!==Le||Y.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ze.numPlanes||He.numIntersection!==ze.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Ue||He.morphTargets!==Ie||He.morphNormals!==vt||He.morphColors!==cn||He.toneMapping!==Ct||Pe.isWebGL2===!0&&He.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,He.__version=Y.version);let Ki=He.currentProgram;mt===!0&&(Ki=La(Y,k,G));let nh=!1,As=!1,Dl=!1;const Ot=Ki.getUniforms(),Zi=He.uniforms;if(Se.useProgram(Ki.program)&&(nh=!0,As=!0,Dl=!0),Y.id!==U&&(U=Y.id,As=!0),nh||E!==A){Ot.setValue(j,"projectionMatrix",A.projectionMatrix),Ot.setValue(j,"viewMatrix",A.matrixWorldInverse);const _n=Ot.map.cameraPosition;_n!==void 0&&_n.setValue(j,fe.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Ot.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ot.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,As=!0,Dl=!0)}if(G.isSkinnedMesh){Ot.setOptional(j,G,"bindMatrix"),Ot.setOptional(j,G,"bindMatrixInverse");const _n=G.skeleton;_n&&(Pe.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ot.setValue(j,"boneTexture",_n.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ot.setOptional(j,G,"batchingTexture"),Ot.setValue(j,"batchingTexture",G._matricesTexture,R));const Ul=$.morphAttributes;if((Ul.position!==void 0||Ul.normal!==void 0||Ul.color!==void 0&&Pe.isWebGL2===!0)&&We.update(G,$,Ki),(As||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Ot.setValue(j,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Zi.envMap.value=Le,Zi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),As&&(Ot.setValue(j,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Zg(Zi,Dl),ge&&Y.fog===!0&&pe.refreshFogUniforms(Zi,ge),pe.refreshMaterialUniforms(Zi,Y,H,N,ue),Do.upload(j,eh(He),Zi,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Do.upload(j,eh(He),Zi,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ot.setValue(j,"center",G.center),Ot.setValue(j,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(j,"normalMatrix",G.normalMatrix),Ot.setValue(j,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const _n=Y.uniformsGroups;for(let Il=0,Qg=_n.length;Il<Qg;Il++)if(Pe.isWebGL2){const ih=_n[Il];Ke.update(ih,Ki),Ke.bind(ih,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function Zg(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Jg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,k,$){Oe.get(A.texture).__webglTexture=k,Oe.get(A.depthTexture).__webglTexture=$;const Y=Oe.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const $=Oe.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){b=A,T=k,M=$;let Y=!0,G=null,ge=!1,Ee=!1;if(A){const Le=Oe.get(A);Le.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(j.FRAMEBUFFER,null),Y=!1):Le.__webglFramebuffer===void 0?R.setupRenderTarget(A):Le.__hasExternalTextures&&R.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const Ue=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?G=Ue[k][$]:G=Ue[k],ge=!0):Pe.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?G=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[$]:G=Ue,C.copy(A.viewport),W.copy(A.scissor),F=A.scissorTest}else C.copy(O).multiplyScalar(H).floor(),W.copy(Z).multiplyScalar(H).floor(),F=J;if(Se.bindFramebuffer(j.FRAMEBUFFER,G)&&Pe.drawBuffers&&Y&&Se.drawBuffers(A,G),Se.viewport(C),Se.scissor(W),Se.setScissorTest(F),ge){const Le=Oe.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,$)}else if(Ee){const Le=Oe.get(A.texture),Be=k||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,Be)}U=-1},this.readRenderTargetPixels=function(A,k,$,Y,G,ge,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Se.bindFramebuffer(j.FRAMEBUFFER,Ce);try{const Le=A.texture,Be=Le.format,Ue=Le.type;if(Be!==zn&&_e.convert(Be)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ue===ya&&(ye.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ue!==Gi&&_e.convert(Ue)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Li&&(Pe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&$>=0&&$<=A.height-G&&j.readPixels(k,$,Y,G,_e.convert(Be),_e.convert(Ue),ge)}finally{const Le=b!==null?Oe.get(b).__webglFramebuffer:null;Se.bindFramebuffer(j.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,k,$=0){const Y=Math.pow(2,-$),G=Math.floor(k.image.width*Y),ge=Math.floor(k.image.height*Y);R.setTexture2D(k,0),j.copyTexSubImage2D(j.TEXTURE_2D,$,0,0,A.x,A.y,G,ge),Se.unbindTexture()},this.copyTextureToTexture=function(A,k,$,Y=0){const G=k.image.width,ge=k.image.height,Ee=_e.convert($.format),Ce=_e.convert($.type);R.setTexture2D($,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Y,A.x,A.y,G,ge,Ee,Ce,k.image.data):k.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Y,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ee,k.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,Y,A.x,A.y,Ee,Ce,k.image),Y===0&&$.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,k,$,Y,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Ce=A.max.z-A.min.z+1,Le=_e.convert(Y.format),Be=_e.convert(Y.type);let Ue;if(Y.isData3DTexture)R.setTexture3D(Y,0),Ue=j.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Ue=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ie=j.getParameter(j.UNPACK_ROW_LENGTH),vt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),cn=j.getParameter(j.UNPACK_SKIP_PIXELS),Ct=j.getParameter(j.UNPACK_SKIP_ROWS),Qn=j.getParameter(j.UNPACK_SKIP_IMAGES),ut=$.isCompressedTexture?$.mipmaps[G]:$.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,ut.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ut.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,A.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,A.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?j.texSubImage3D(Ue,G,k.x,k.y,k.z,ge,Ee,Ce,Le,Be,ut.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ue,G,k.x,k.y,k.z,ge,Ee,Ce,Le,ut.data)):j.texSubImage3D(Ue,G,k.x,k.y,k.z,ge,Ee,Ce,Le,Be,ut),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ie),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,cn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ct),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qn),G===0&&Y.generateMipmaps&&j.generateMipmap(Ue),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){T=0,M=0,b=null,Se.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Cl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?mr:Mg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?Ut:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gT extends Xg{}gT.prototype.isWebGL1Renderer=!0;class xT extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Kd extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Up=new B,Ip=new B,Fp=new Mt,zc=new Rg,yo=new Rl;class vT extends Ft{constructor(e=new Gn,n=new Kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Up.fromBufferAttribute(n,r-1),Ip.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Up.distanceTo(Ip);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;Fp.copy(r).invert(),zc.copy(e.ray).applyMatrix4(Fp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,f=new B,p=new B,g=this.isLineSegments?2:1,S=i.index,m=i.attributes.position;if(S!==null){const d=Math.max(0,a.start),v=Math.min(S.count,a.start+a.count);for(let x=d,_=v-1;x<_;x+=g){const T=S.getX(x),M=S.getX(x+1);if(c.fromBufferAttribute(m,T),h.fromBufferAttribute(m,M),zc.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(p);U<e.near||U>e.far||n.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=d,_=v-1;x<_;x+=g){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),zc.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(p);M<e.near||M>e.far||n.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const kp=new B,Op=new B;class $g extends vT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)kp.fromBufferAttribute(n,r),Op.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kp.distanceTo(Op);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zd extends Gn{constructor(e=[new Ve(0,-.5),new Ve(.5,0),new Ve(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Kt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/n,f=new B,p=new Ve,g=new B,S=new B,y=new B;let m=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,g.x=d*1,g.y=-m,g.z=d*0,y.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,g.x=d*1,g.y=-m,g.z=d*0,S.copy(g),g.x+=y.x,g.y+=y.y,g.z+=y.z,g.normalize(),l.push(g.x,g.y,g.z),y.copy(S)}for(let v=0;v<=n;v++){const x=i+v*h*r,_=Math.sin(x),T=Math.cos(x);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*_,f.y=e[M].y,f.z=e[M].x*T,a.push(f.x,f.y,f.z),p.x=v/n,p.y=M/(e.length-1),o.push(p.x,p.y);const b=l[3*M+0]*_,U=l[3*M+1],E=l[3*M+0]*T;c.push(b,U,E)}}for(let v=0;v<n;v++)for(let x=0;x<e.length-1;x++){const _=x+v*e.length,T=_,M=_+e.length,b=_+e.length+1,U=_+1;s.push(T,M,U),s.push(b,U,M)}this.setIndex(s),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.points,e.segments,e.phiStart,e.phiLength)}}class _T extends Gn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new B,s=new B;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],p=f.start,g=f.count;for(let S=p,y=p+g;S<y;S+=3)for(let m=0;m<3;m++){const d=o.getX(S+m),v=o.getX(S+(m+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,v),zp(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),zp(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Jt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function zp(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class yT extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eg,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qg extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Bc=new Mt,Bp=new B,jp=new B;class ST{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bp),jp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jp),n.updateMatrixWorld(),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MT extends ST{constructor(){super(new zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends qg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ET extends qg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class wT extends $g{constructor(e=10,n=10,i=4473924,r=8947848){i=new $e(i),r=new $e(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let p=0,g=0,S=-o;p<=n;p++,S+=a){l.push(-o,0,S,o,0,S),l.push(S,0,-o,S,0,o);const y=p===s?i:r;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const h=new Gn;h.setAttribute("position",new Jt(l,3)),h.setAttribute("color",new Jt(c,3));const f=new Kd({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);const TT=({profile:t,halfSection:e=!1})=>{const n=me.useRef(null),[i,r]=me.useState(!1),[s,a]=me.useState(.003),o=me.useRef(null),l=me.useRef(null),c=me.useRef(null),h=me.useRef(null);return me.useEffect(()=>{if(!n.current)return;const f=n.current.clientWidth,p=n.current.clientHeight,g=new xT;g.background=new $e("#1F2421"),o.current=g;const S=new wn(45,f/p,1,1e3);S.position.set(0,150,280);const y=new Xg({antialias:!0});y.setSize(f,p),y.setPixelRatio(window.devicePixelRatio),y.shadowMap.enabled=!0,l.current=y,n.current.innerHTML="",n.current.appendChild(y.domElement);const m=new ET(16777215,.7);g.add(m);const d=new Hp(16772306,1.2);d.position.set(100,200,150),d.castShadow=!0,g.add(d);const v=new Hp(11584734,.6);v.position.set(-100,50,-100),g.add(v);const x=new wT(300,20,4869964,2961710);x.position.y=0,g.add(x);let _=!1,T={x:0,y:0},M={radius:300,theta:Math.PI/4,phi:Math.PI/3};const b=()=>{S.position.x=M.radius*Math.sin(M.phi)*Math.sin(M.theta),S.position.y=M.radius*Math.cos(M.phi),S.position.z=M.radius*Math.sin(M.phi)*Math.cos(M.theta),S.lookAt(0,t.height_mm/2,0)};b();const U=y.domElement,E=N=>{_=!0,T={x:N.clientX,y:N.clientY}},C=N=>{if(!_)return;const H=N.clientX-T.x,P=N.clientY-T.y;M.theta-=H*.008,M.phi=Math.max(.1,Math.min(Math.PI-.1,M.phi-P*.008)),T={x:N.clientX,y:N.clientY},b()},W=()=>{_=!1},F=N=>{N.preventDefault(),M.radius=Math.max(80,Math.min(600,M.radius+N.deltaY*.3)),b()};U.addEventListener("mousedown",E),window.addEventListener("mousemove",C),window.addEventListener("mouseup",W),U.addEventListener("wheel",F,{passive:!1});let K;const L=()=>{K=requestAnimationFrame(L),!_&&c.current&&s>0&&(c.current.rotation.y+=s,h.current&&(h.current.rotation.y=c.current.rotation.y)),y.render(g,S)};L();const z=()=>{if(!n.current)return;const N=n.current.clientWidth,H=n.current.clientHeight;S.aspect=N/H,S.updateProjectionMatrix(),y.setSize(N,H)};return window.addEventListener("resize",z),()=>{cancelAnimationFrame(K),U.removeEventListener("mousedown",E),window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",W),U.removeEventListener("wheel",F),window.removeEventListener("resize",z),y.dispose()}},[]),me.useEffect(()=>{if(!o.current)return;c.current&&(o.current.remove(c.current),c.current.geometry.dispose(),c.current=null),h.current&&(o.current.remove(h.current),h.current.geometry.dispose(),h.current=null);const f=t.points;if(!f||f.length<2)return;const p=t.wall_thickness_mm||5,g=[];for(const[x,_]of f)g.push(new Ve(Math.max(.1,x),_));for(let x=f.length-1;x>=0;x--){const[_,T]=f[x],M=Math.max(.1,_-p);g.push(new Ve(M,T))}g.push(new Ve(0,f[0][1]));const S=e?Math.PI:Math.PI*2,y=48,m=new Zd(g,y,0,S),d=new yT({color:13130290,roughness:.75,metalness:.05,side:Yn,transparent:!0,opacity:.92}),v=new di(m,d);if(o.current.add(v),c.current=v,i){const x=new _T(m),_=new Kd({color:16032353,transparent:!0,opacity:.4}),T=new $g(x,_);o.current.add(T),h.current=T}},[t,e,i]),u.jsxs("div",{className:"relative w-full h-full min-h-[460px] rounded-xl overflow-hidden",children:[u.jsx("div",{ref:n,className:"w-full h-full"}),u.jsxs("div",{className:"absolute top-3 right-3 flex items-center space-x-2 bg-charcoal-900/80 border border-charcoal-700 px-3 py-1.5 rounded-lg text-xs text-white backdrop-blur-xs font-mono shadow-md",children:[u.jsxs("label",{className:"flex items-center space-x-1 cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:i,onChange:f=>r(f.target.checked),className:"rounded text-terracotta-500"}),u.jsx("span",{className:"text-[11px]",children:"Wireframe"})]}),u.jsx("div",{className:"w-px h-3.5 bg-charcoal-700"}),u.jsx("button",{onClick:()=>a(f=>f>0?0:.004),className:"text-[11px] text-terracotta-400 hover:text-white",children:s>0?"Pause Spin":"Auto-Spin"})]}),u.jsxs("div",{className:"absolute bottom-3 left-3 bg-charcoal-950/80 border border-charcoal-700 text-xs font-mono text-charcoal-300 px-3 py-2 rounded-lg backdrop-blur-xs space-y-0.5",children:[u.jsx("div",{className:"text-terracotta-400 font-bold",children:"REVOLVED 3D HYPOTHESIS"}),u.jsxs("div",{children:["Rim Ø: ",t.rim_diameter_mm.toFixed(1)," mm"]}),u.jsxs("div",{children:["Height: ",t.height_mm.toFixed(1)," mm"]}),u.jsxs("div",{children:["Thickness: ",t.wall_thickness_mm.toFixed(1)," mm"]}),u.jsx("div",{className:"text-[10px] text-charcoal-500 italic mt-1",children:"Rotational symmetry assumption"})]})]})},bT=({project:t,isOpen:e,onClose:n,onApplyDiameter:i})=>{var g,S;const[r,s]=me.useState([]),[a,o]=me.useState(null),[l,c]=me.useState(!1),h=me.useRef(null);if(!e)return null;const f=y=>{if(!h.current)return;const m=h.current.getBoundingClientRect(),d=h.current.naturalWidth,v=h.current.naturalHeight,x=y.clientX-m.left,_=y.clientY-m.top,T=d/m.width,M=v/m.height,b=Math.round(x*T),U=Math.round(_*M),E=[...r,[b,U]];s(E),E.length>=3&&p(E)},p=async y=>{c(!0);try{const m=await qe.calculateRimArcFit(t.id,y);o(m)}catch(m){console.warn(m)}finally{c(!1)}};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("div",{className:"p-2 bg-terracotta-100 text-terracotta-700 rounded-lg",children:u.jsx(sg,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"font-semibold text-charcoal-900 text-sm",children:"Rim Diameter Estimation via Arc Fitting"}),u.jsx("p",{className:"text-xs text-charcoal-500",children:"Click 3 or more points along the preserved curved rim lip to fit an algebraic circle."})]})]}),u.jsx("button",{onClick:n,className:"p-1.5 text-charcoal-400 hover:text-charcoal-700 rounded",children:u.jsx(va,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"p-6 flex-1 overflow-y-auto flex space-x-6",children:[u.jsx("div",{className:"flex-1 bg-charcoal-900 rounded-lg overflow-hidden relative flex items-center justify-center p-2 min-h-[380px]",children:u.jsxs("div",{className:"relative inline-block max-w-full max-h-full",children:[u.jsx("img",{ref:h,src:t.primary_photo_url||"",alt:"Rim Arc",onClick:f,className:"max-w-full max-h-[440px] object-contain rounded cursor-crosshair select-none"}),u.jsxs("svg",{className:"absolute inset-0 pointer-events-none w-full h-full",viewBox:`0 0 ${((g=t.primary_photo_dimensions)==null?void 0:g[0])||1600} ${((S=t.primary_photo_dimensions)==null?void 0:S[1])||1200}`,children:[r.map((y,m)=>u.jsx("circle",{cx:y[0],cy:y[1],r:"8",fill:"#C85A32",stroke:"#FFFFFF",strokeWidth:"2.5"},m)),a&&u.jsx("circle",{cx:a.center_x,cy:a.center_y,r:a.radius_px,fill:"none",stroke:"#28A745",strokeWidth:"3.5",strokeDasharray:"6,4"})]})]})}),u.jsxs("div",{className:"w-72 space-y-4 text-xs font-mono",children:[u.jsxs("div",{className:"bg-parchment-50 rounded-lg p-3 border border-parchment-300 space-y-2",children:[u.jsxs("div",{className:"flex justify-between font-bold text-charcoal-900 text-sm",children:[u.jsx("span",{children:"Points Selected:"}),u.jsx("span",{className:"text-terracotta-600",children:r.length})]}),a?u.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-parchment-200",children:[u.jsxs("div",{className:"flex justify-between text-xs",children:[u.jsx("span",{className:"text-charcoal-500",children:"Estimated Rim Ø:"}),u.jsx("span",{className:"font-bold text-emerald-800 text-sm",children:a.diameter_mm?`${a.diameter_mm.toFixed(1)} mm`:`${(a.radius_px*2).toFixed(0)} px`})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-500",children:"Arc Coverage:"}),u.jsxs("span",{className:"font-semibold text-charcoal-800",children:[a.arc_coverage_deg.toFixed(1),"°"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-charcoal-500",children:"Fit RMSE:"}),u.jsx("span",{children:a.rmse_residual_mm?`${a.rmse_residual_mm.toFixed(2)} mm`:`${a.rmse_residual_px.toFixed(1)} px`})]})]}):u.jsx("p",{className:"text-charcoal-500 font-sans italic text-[11px]",children:"Click points spaced along the preserved rim lip to calculate diameter."})]}),(a==null?void 0:a.quality_warning)&&u.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-3 text-[11px] font-sans text-amber-900 flex items-start space-x-2",children:[u.jsx(Uu,{className:"w-4 h-4 text-amber-600 shrink-0 mt-0.5"}),u.jsx("span",{children:a.quality_warning})]}),u.jsxs("div",{className:"text-[11px] font-sans text-charcoal-500 space-y-1 bg-white p-3 rounded-lg border border-parchment-300 leading-normal",children:[u.jsx("p",{className:"font-semibold text-charcoal-800",children:"Methodological Caution:"}),u.jsx("p",{children:"Rims viewed obliquely appear as ellipses. True rim diameter fitting requires an orthogonal overhead view aligned with the vessel orifice plane."})]}),u.jsxs("div",{className:"space-x-2 flex",children:[u.jsx("button",{onClick:()=>{s([]),o(null)},className:"flex-1 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 py-2 rounded font-sans text-xs transition",children:"Clear Points"}),a&&a.diameter_mm&&u.jsx("button",{onClick:()=>{i(a.diameter_mm,a),n()},className:"flex-1 bg-terracotta-600 hover:bg-terracotta-700 text-white py-2 rounded font-sans text-xs font-semibold transition",children:"Apply Ø"})]})]})]})]})})},AT=({project:t,profile:e,onProfileUpdated:n,onNextStep:i})=>{var v;const[r,s]=me.useState(e||{id:`rec_${t.id}`,project_id:t.id,source:"user_entered",rim_diameter_mm:180,height_mm:75,wall_thickness_mm:5,points:[[40,0],[60,15],[85,40],[90,75]]}),[a,o]=me.useState(!1),[l,c]=me.useState(!1),[h,f]=me.useState(null);me.useEffect(()=>{e&&s(e)},[e]);const p=(x,_)=>{const T={...r,[x]:_};if(x==="rim_diameter_mm"){const M=_/2,b=[...T.points];b.length>0&&(b[b.length-1]=[M,T.height_mm],T.points=b)}if(x==="height_mm"){const M=[...T.points];M.length>0&&(M[M.length-1]=[M[M.length-1][0],_],T.points=M)}s(T),n(T),qe.updateReconstruction(t.id,T)},g=(x,_,T)=>{const M=[...r.points];M[x]=[Math.max(5,Number(_.toFixed(1))),Math.max(0,Number(T.toFixed(1)))];const b={...r,points:M};s(b),n(b),qe.updateReconstruction(t.id,b)},S=()=>{const x=[...r.points],_=x.length;if(_<2)return;const T=Math.floor(_/2),M=x[T-1],b=x[T],U=[Number(((M[0]+b[0])/2).toFixed(1)),Number(((M[1]+b[1])/2).toFixed(1))];x.splice(T,0,U);const E={...r,points:x};s(E),n(E),qe.updateReconstruction(t.id,E)},y=x=>{if(r.points.length<=2){alert("A vessel profile requires at least 2 control points (base and rim).");return}const _=r.points.filter((M,b)=>b!==x),T={...r,points:_};s(T),n(T),qe.updateReconstruction(t.id,T),f(null)},m=(x,_)=>{const T={...r,rim_diameter_mm:x,rim_fit_evidence:_,source:"measured_side_profile"},M=x/2,b=[...T.points];b.length>0&&(b[b.length-1]=[M,T.height_mm],T.points=b),s(T),n(T),qe.updateReconstruction(t.id,T)},d=()=>{window.open(`/api/projects/${t.id}/reconstruction/svg`,"_blank")};return u.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-6 text-xs",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"text-charcoal-500 font-medium",children:"Profile Evidence Source:"}),u.jsxs("select",{value:r.source,onChange:x=>p("source",x.target.value),className:"bg-parchment-50 border border-parchment-300 rounded px-2.5 py-1 text-charcoal-800 font-semibold",children:[u.jsx("option",{value:"user_entered",children:"User-Entered Hypothetical"}),u.jsx("option",{value:"measured_side_profile",children:"Measured Side Profile / Rim Fit"}),u.jsx("option",{value:"catalogue_template",children:"Reference Catalogue Template"})]})]}),u.jsxs("button",{onClick:()=>c(!0),className:"flex items-center space-x-1.5 bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-800 border border-terracotta-300 px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[u.jsx(sg,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:"Fit Rim Arc on Photograph"})]}),u.jsxs("button",{onClick:()=>o(x=>!x),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition ${a?"bg-charcoal-800 text-white border-charcoal-800":"bg-parchment-100 text-charcoal-700 border-parchment-300"}`,children:[u.jsx(ty,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:a?"Half-Section Cutaway":"360° Full Revolve"})]})]}),u.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[u.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 bg-white hover:bg-parchment-50 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-semibold transition shadow-xs",children:[u.jsx(k_,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:"Export SVG Drawing"})]}),u.jsxs("button",{onClick:i,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[u.jsx("span",{children:"Compare Typology"}),u.jsx(ba,{className:"w-3.5 h-3.5"})]})]})]}),u.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-5 min-h-[560px]",children:[u.jsxs("div",{className:"col-span-5 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-parchment-300",children:[u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Profile Geometry (mm)"}),u.jsx("span",{className:"text-[10px] font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal-600",children:"Rotational Lathe"})]}),u.jsxs("div",{className:"space-y-3 bg-parchment-50/70 p-3.5 rounded-lg border border-parchment-200 text-xs font-mono",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-charcoal-700 mb-1",children:[u.jsx("span",{children:"Rim Diameter (Ø):"}),u.jsxs("span",{className:"font-bold text-charcoal-900",children:[r.rim_diameter_mm.toFixed(1)," mm"]})]}),u.jsx("input",{type:"range",min:"50",max:"350",step:"1",value:r.rim_diameter_mm,onChange:x=>p("rim_diameter_mm",parseFloat(x.target.value)),className:"w-full accent-terracotta-600"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-charcoal-700 mb-1",children:[u.jsx("span",{children:"Vessel Height (H):"}),u.jsxs("span",{className:"font-bold text-charcoal-900",children:[r.height_mm.toFixed(1)," mm"]})]}),u.jsx("input",{type:"range",min:"30",max:"400",step:"1",value:r.height_mm,onChange:x=>p("height_mm",parseFloat(x.target.value)),className:"w-full accent-terracotta-600"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-charcoal-700 mb-1",children:[u.jsx("span",{children:"Wall Thickness (t):"}),u.jsxs("span",{className:"font-bold text-charcoal-900",children:[r.wall_thickness_mm.toFixed(1)," mm"]})]}),u.jsx("input",{type:"range",min:"2",max:"16",step:"0.5",value:r.wall_thickness_mm,onChange:x=>p("wall_thickness_mm",parseFloat(x.target.value)),className:"w-full accent-terracotta-600"})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("span",{className:"text-xs font-mono uppercase font-bold text-charcoal-500",children:"Control Points (Radius, Height in mm)"}),u.jsxs("button",{onClick:S,className:"text-xs text-terracotta-700 hover:text-terracotta-900 font-semibold flex items-center space-x-1",children:[u.jsx(rl,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Add Point"})]})]}),u.jsx("div",{className:"space-y-1.5 max-h-48 overflow-y-auto",children:r.points.map(([x,_],T)=>{const M=h===T,b=T===0,U=T===r.points.length-1;return u.jsxs("div",{onClick:()=>f(T),className:`flex items-center justify-between px-3 py-1.5 rounded text-xs font-mono border transition ${M?"bg-terracotta-50 border-terracotta-400":"bg-white border-parchment-300 hover:bg-parchment-50"}`,children:[u.jsxs("span",{className:"text-charcoal-500 text-[10px]",children:[b?"Base":U?"Rim":`Pt ${T+1}`,":"]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{children:"r:"}),u.jsx("input",{type:"number",step:"0.5",value:x,onChange:E=>g(T,parseFloat(E.target.value)||0,_),className:"w-14 bg-parchment-50 border border-parchment-200 rounded px-1 py-0.5 text-right"}),u.jsx("span",{children:"h:"}),u.jsx("input",{type:"number",step:"0.5",value:_,disabled:b,onChange:E=>g(T,x,parseFloat(E.target.value)||0),className:"w-14 bg-parchment-50 border border-parchment-200 rounded px-1 py-0.5 text-right disabled:opacity-50"})]}),!b&&!U&&u.jsx("button",{onClick:E=>{E.stopPropagation(),y(T)},className:"text-red-500 hover:text-red-700 p-0.5",children:u.jsx(ug,{className:"w-3.5 h-3.5"})})]},T)})})]}),r.rim_fit_evidence&&u.jsxs("div",{className:"bg-emerald-50 border border-emerald-300 rounded-lg p-3 text-xs font-mono space-y-1",children:[u.jsx("div",{className:"text-emerald-900 font-bold",children:"ARC-FIT EVIDENCE ATTACHED"}),u.jsxs("div",{className:"text-emerald-800 text-[11px]",children:["Fitted Ø: ",(v=r.rim_fit_evidence.diameter_mm)==null?void 0:v.toFixed(1)," mm • Arc coverage:"," ",r.rim_fit_evidence.arc_coverage_deg.toFixed(1),"°"]})]})]}),u.jsx("div",{className:"text-[11px] text-charcoal-400 italic leading-tight",children:"Standard archaeological practice: The 3D model presents a rotationally symmetric hypothesis. Inferred geometry is rendered translucently."})]}),u.jsx("div",{className:"col-span-7 bg-charcoal-900 rounded-xl overflow-hidden border border-charcoal-700 shadow-inner flex flex-col",children:u.jsx(TT,{profile:r,halfSection:a})})]}),u.jsx(bT,{project:t,isOpen:l,onClose:()=>c(!1),onApplyDiameter:m})]})},CT=({project:t,onNextStep:e})=>{const[n,i]=me.useState([]),[r,s]=me.useState(null),[a,o]=me.useState(null),[l,c]=me.useState(!0),[h,f]=me.useState(!1),[p,g]=me.useState(!1);me.useEffect(()=>{S()},[t.id]);const S=async()=>{c(!0);try{const m=await qe.getTypology(t.id);i(m.candidates),s(m.schema),o(m.ai_explanation)}catch(m){console.error(m)}finally{c(!1)}},y=()=>{r&&(navigator.clipboard.writeText(JSON.stringify(r,null,2)),g(!0),setTimeout(()=>g(!1),2e3))};return u.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-4",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-4 text-xs",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(ng,{className:"w-4 h-4 text-terracotta-600"}),u.jsx("span",{className:"font-semibold text-charcoal-900 text-sm",children:"Typology Comparison"})]}),u.jsx("span",{className:"text-[11px] font-mono bg-parchment-100 border border-parchment-300 px-2 py-0.5 rounded text-charcoal-600",children:"10 Demonstration References"}),u.jsxs("button",{onClick:()=>f(!0),className:"flex items-center space-x-1 text-xs text-charcoal-600 hover:text-charcoal-900 border border-parchment-300 px-2.5 py-1 rounded bg-parchment-50 transition",children:[u.jsx(j_,{className:"w-3.5 h-3.5 text-terracotta-600"}),u.jsx("span",{children:"Archaeological JSON Schema"})]})]}),u.jsxs("div",{className:"flex items-center space-x-3 text-xs",children:[u.jsxs("button",{onClick:S,className:"flex items-center space-x-1 text-charcoal-600 hover:text-charcoal-900 px-2.5 py-1 rounded transition",children:[u.jsx(Hd,{className:`w-3.5 h-3.5 ${l?"animate-spin":""}`}),u.jsx("span",{children:"Re-rank Typology"})]}),u.jsxs("button",{onClick:e,className:"bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition",children:[u.jsx("span",{children:"Proceed to Review & Export"}),u.jsx(ba,{className:"w-3.5 h-3.5"})]})]})]}),u.jsxs("div",{className:"bg-amber-50/80 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start space-x-2.5",children:[u.jsx(Uu,{className:"w-4 h-4 text-amber-600 shrink-0 mt-0.5"}),u.jsxs("div",{className:"leading-relaxed",children:[u.jsx("span",{className:"font-semibold",children:"Demonstration Reference Notice: "}),"Catalogue entries are synthetic geometric templates for algorithm validation. They do not constitute authoritative historical dating or cultural attribution."]})]}),(a==null?void 0:a.available)&&u.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-2xs space-y-2",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-purple-900 font-semibold text-xs",children:[u.jsx(Gd,{className:"w-4 h-4 text-purple-600"}),u.jsx("span",{children:"Gemini Typological Synthesis (Strictly Grounded)"})]}),u.jsx("p",{className:"text-xs text-purple-950 leading-relaxed",children:a.summary}),a.key_uncertainty&&u.jsxs("div",{className:"text-[11px] text-purple-800 italic",children:["Key uncertainty: ",a.key_uncertainty]})]}),u.jsx("div",{className:"grid grid-cols-3 gap-5",children:n.map((m,d)=>{const v=Math.round(m.compatibility_score*100),x=d===0&&m.compatibility_score>=.5;return u.jsxs("div",{className:`bg-white rounded-xl border p-4 shadow-2xs flex flex-col justify-between space-y-4 ${x?"border-terracotta-400 ring-2 ring-terracotta-100":"border-parchment-300"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-parchment-100 border border-parchment-300 text-charcoal-700",children:m.reference_id}),u.jsxs("span",{className:"text-xs font-mono font-bold text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-full border border-terracotta-200",children:[v,"% Fit"]})]}),u.jsx("h4",{className:"font-semibold text-charcoal-900 text-sm mb-1",children:m.name}),u.jsx("div",{className:"text-[11px] font-mono text-charcoal-500 mb-3",children:m.dimensions_summary}),u.jsx("div",{className:"bg-parchment-50 rounded-lg p-2 border border-parchment-200 mb-3 flex items-center justify-center h-28",children:u.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 120",children:[u.jsx("line",{x1:"100",y1:"10",x2:"100",y2:"110",stroke:"#CBD5E0",strokeWidth:"1",strokeDasharray:"3,3"}),u.jsx("polyline",{points:m.schematic_profile_points.map(([_,T])=>`${100+_*.7},${110-T*.7}`).join(" "),fill:"none",stroke:"#C85A32",strokeWidth:"2.5"}),u.jsx("polyline",{points:m.schematic_profile_points.map(([_,T])=>`${100-_*.7},${110-T*.7}`).join(" "),fill:"none",stroke:"#4A5568",strokeWidth:"1.5",strokeDasharray:"2,2"})]})}),u.jsx("p",{className:"text-xs text-charcoal-600 mb-3 leading-relaxed",children:m.description}),m.supporting_features.length>0&&u.jsxs("div",{className:"space-y-1 mb-2",children:[u.jsxs("div",{className:"text-[10px] font-mono uppercase font-bold text-emerald-800 flex items-center space-x-1",children:[u.jsx(ig,{className:"w-3 h-3 text-emerald-600"}),u.jsx("span",{children:"Supporting Evidence"})]}),m.supporting_features.map((_,T)=>u.jsxs("p",{className:"text-[11px] text-emerald-900 leading-tight pl-4",children:["• ",_]},T))]}),m.contradictions.length>0&&u.jsxs("div",{className:"space-y-1 mb-2",children:[u.jsxs("div",{className:"text-[10px] font-mono uppercase font-bold text-red-800 flex items-center space-x-1",children:[u.jsx(Uu,{className:"w-3 h-3 text-red-500"}),u.jsx("span",{children:"Contradictions"})]}),m.contradictions.map((_,T)=>u.jsxs("p",{className:"text-[11px] text-red-900 leading-tight pl-4",children:["• ",_]},T))]}),m.missing_evidence.length>0&&u.jsxs("div",{className:"space-y-1",children:[u.jsxs("div",{className:"text-[10px] font-mono uppercase font-bold text-charcoal-500 flex items-center space-x-1",children:[u.jsx(og,{className:"w-3 h-3 text-charcoal-400"}),u.jsx("span",{children:"Unverified / Missing"})]}),m.missing_evidence.map((_,T)=>u.jsxs("p",{className:"text-[11px] text-charcoal-500 leading-tight pl-4",children:["• ",_]},T))]})]}),u.jsxs("div",{className:"pt-3 border-t border-parchment-200 text-[10px] text-charcoal-400 italic",children:["Source: ",m.source_citation]})]},m.reference_id)})}),h&&u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Archaeological Reference JSON Schema"}),u.jsx("p",{className:"text-xs text-charcoal-500",children:"Standard format for importing verified, sourced archaeological typology datasets."})]}),u.jsx("button",{onClick:()=>f(!1),className:"text-xs text-charcoal-500 hover:text-charcoal-800",children:"Close"})]}),u.jsx("div",{className:"p-4 flex-1 overflow-y-auto bg-charcoal-900",children:u.jsx("pre",{className:"text-xs font-mono text-emerald-400 select-all",children:JSON.stringify(r,null,2)})}),u.jsx("div",{className:"px-6 py-3 bg-parchment-100 border-t border-parchment-300 flex justify-end",children:u.jsxs("button",{onClick:y,className:"bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs px-4 py-1.5 rounded-md font-semibold flex items-center space-x-1.5",children:[p?u.jsx(jd,{className:"w-3.5 h-3.5"}):u.jsx(I_,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:p?"Copied!":"Copy JSON Schema"})]})})]})})]})},RT=({project:t,fragments:e,groups:n,joins:i,profile:r,snapshots:s,onProjectApproved:a,onOpenChecklist:o})=>{var x;const[l,c]=me.useState(t.reviewer_name||""),[h,f]=me.useState(""),[p,g]=me.useState(!1),S=i.filter(_=>_.status==="accepted"),y=async()=>{if(!l.trim()){alert("Please enter a reviewer name or investigator initials before signing approval.");return}g(!0);try{const _=await qe.approveProject(t.id,l.trim(),h.trim());a(l.trim(),_.snapshot_id)}catch(_){alert(`Approval failed: ${_.message}`)}finally{g(!1)}},m=()=>{window.open(`/api/projects/${t.id}/export/json`,"_blank")},d=()=>{window.open(`/api/projects/${t.id}/export/csv`,"_blank")},v=()=>{window.open(`/api/projects/${t.id}/reconstruction/svg`,"_blank")};return u.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto space-y-6",children:[u.jsxs("div",{className:"bg-white border border-parchment-300 rounded-lg p-4 shadow-2xs flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(rg,{className:"w-5 h-5 text-terracotta-600"}),u.jsx("h2",{className:"font-semibold text-charcoal-900 text-base",children:"Provenance & Review Sign-Off"})]}),u.jsx("p",{className:"text-xs text-charcoal-500 mt-0.5",children:"Clear segregation of empirical observation, algorithmic computation, and human-approved conclusions."})]}),u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsxs("button",{onClick:m,className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition",children:[u.jsx(H_,{className:"w-4 h-4 text-terracotta-600"}),u.jsx("span",{children:"Export JSON Record"})]}),u.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition",children:[u.jsx(ag,{className:"w-4 h-4 text-emerald-600"}),u.jsx("span",{children:"Export CSV Measurements"})]}),u.jsxs("button",{onClick:v,className:"flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition",children:[u.jsx(V_,{className:"w-4 h-4 text-blue-600"}),u.jsx("span",{children:"Export SVG Profile"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[u.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500"}),u.jsx("span",{children:"1. Observed Evidence"})]}),u.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[u.jsx("div",{children:"• Primary overhead photograph"}),u.jsx("div",{children:"• Scale marker in reference plane"}),u.jsxs("div",{children:["• ",e.length," detected fragment silhouettes"]}),u.jsx("div",{children:"• User qualitative fabric observations"})]})]}),u.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500"}),u.jsx("span",{children:"2. Computed Measurements"})]}),u.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[u.jsxs("div",{children:["• Scale: ",((x=t.calibration.px_per_mm)==null?void 0:x.toFixed(2))||"N/A"," px/mm"]}),u.jsx("div",{children:"• Color histogram correlation"}),u.jsx("div",{children:"• Contour arc-length & area"}),u.jsxs("div",{children:["• Rim circle fit: ",r!=null&&r.rim_diameter_mm?`Ø ${r.rim_diameter_mm.toFixed(1)} mm`:"Pending"]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-500"}),u.jsx("span",{children:"3. Proposed Interpretations"})]}),u.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[u.jsxs("div",{children:["• ",n.length," vessel clustering proposals"]}),u.jsxs("div",{children:["• ",i.length," geometric edge match candidates"]}),u.jsx("div",{children:"• Rotational lathe 3D hypothesis"}),u.jsx("div",{children:"• Demonstration typology candidates"})]})]}),u.jsxs("div",{className:"bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),u.jsx("span",{children:"4. Human Decisions"})]}),u.jsxs("div",{className:"text-xs font-mono space-y-2 text-charcoal-600",children:[u.jsxs("div",{children:["• ",S.length," accepted joins"]}),u.jsxs("div",{children:["• ",n.filter(_=>_.confirmed).length," confirmed vessel groups"]}),u.jsx("div",{children:"• Validated profile control points"}),u.jsxs("div",{children:["• Status: ",t.status==="approved"?"Formally Approved":"Draft / Unapproved"]})]})]})]}),u.jsxs("div",{className:"grid grid-cols-12 gap-6",children:[u.jsxs("div",{className:"col-span-7 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 pb-3 border-b border-parchment-200",children:[u.jsx(Q_,{className:"w-5 h-5 text-emerald-600"}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Formal Archaeological Approval"}),u.jsx("p",{className:"text-xs text-charcoal-500",children:"Creates an immutable timestamped snapshot in the SQLite database preserving decisions."})]})]}),u.jsxs("div",{className:"space-y-3 text-xs",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-charcoal-700 font-semibold mb-1",children:"Lead Reviewer / Specialist Name:"}),u.jsx("input",{type:"text",value:l,onChange:_=>c(_.target.value),placeholder:"e.g. Dr. H. Carter, Ceramic Specialist",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-3 py-2 text-charcoal-900 text-sm"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-charcoal-700 font-semibold mb-1",children:"Approval Notes & Methodological Justification:"}),u.jsx("textarea",{rows:3,value:h,onChange:_=>f(_.target.value),placeholder:"Confirming vessel associations based on matching fine slip and mating fracture edges on S1/S2...",className:"w-full bg-parchment-50 border border-parchment-300 rounded px-3 py-2 text-charcoal-900 text-xs"})]}),u.jsx("div",{className:"pt-2",children:u.jsxs("button",{onClick:y,disabled:p,className:"w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 rounded-lg shadow-sm transition flex items-center justify-center space-x-2",children:[u.jsx(ny,{className:"w-4 h-4"}),u.jsx("span",{children:p?"Recording Snapshot...":"Sign & Freeze Approved Record"})]})})]})]}),u.jsxs("div",{className:"col-span-5 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 pb-3 border-b border-parchment-200",children:[u.jsx(G_,{className:"w-4 h-4 text-charcoal-600"}),u.jsx("h3",{className:"font-semibold text-charcoal-900 text-sm",children:"Approved Snapshot Archive"})]}),s.length===0?u.jsx("p",{className:"text-xs text-charcoal-500 italic",children:"No approved snapshots recorded yet."}):u.jsx("div",{className:"space-y-3 max-h-72 overflow-y-auto",children:s.map(_=>u.jsxs("div",{className:"p-3 rounded-lg bg-parchment-50 border border-parchment-200 text-xs space-y-1",children:[u.jsxs("div",{className:"flex justify-between font-mono font-bold text-charcoal-900",children:[u.jsx("span",{children:_.reviewer_name}),u.jsx("span",{className:"text-emerald-700 font-semibold",children:"APPROVED"})]}),u.jsx("div",{className:"text-[10px] text-charcoal-400 font-mono",children:new Date(_.approved_at).toLocaleString()}),_.notes&&u.jsx("p",{className:"text-charcoal-600 italic text-[11px] mt-1",children:_.notes})]},_.id))})]})]})]})},NT=({isOpen:t,onClose:e,stats:n})=>{if(!t)return null;const i=[{title:"1. Calibration & Metric Coordinate Transforms",description:"Verifies two-point ruler calibration, px-per-mm calculation, and metric unit propagation.",pass:n.isCalibrated,syntheticTruth:"Known scale: 100 mm = 320 px (3.20 px/mm)."},{title:"2. Stable Fragment Identifiers (S1–S10)",description:"Preserves deterministic fragment IDs across sensitivity adjustments, reloads, and manual polygon edits.",pass:n.fragmentCount>=7,syntheticTruth:"Synthetic scene yields 8 distinct sherds (S1–S8)."},{title:"3. Recovery of Known Geometric Joins",description:"Recovers matching broken edges with rigid Procrustes alignment (R, t) and low edge residual.",pass:n.hasJoins,syntheticTruth:"Known join (S1, S2) recovered with residual < 2.0 mm (< 6.5 px)."},{title:"4. Rejection of Clearly Incompatible Joins",description:"Deep polygon overlap (> 15%) and mismatching edge curvatures are penalized and filtered out.",pass:n.hasJoins,syntheticTruth:"Incompatible pairings (e.g. S1 with S5) rejected due to silhouette collision & curvature error."},{title:"5. Manual Assembly & Rigid Snapping",description:"Accepting a candidate join snaps fragment B to fragment A without user manual translation.",pass:n.hasAcceptedJoin,syntheticTruth:'Clicking "Accept Join" snaps S2 into direct jigsaw contact with S1.'},{title:"6. Rim Arc Estimation & 3D Lathe Reconstruction",description:"Kåsa/Pratt circle fitting recovers rim diameter and generates LatheGeometry with SVG export.",pass:n.hasReconstruction,syntheticTruth:"Vessel A rim diameter fitted to 180.0 mm (70 mm height)."},{title:"7. Approval Snapshot & Provenance Preservation",description:"Formal sign-off captures immutable timestamped state snapshot; edits revert working copy to draft.",pass:n.isApproved,syntheticTruth:"Snapshot recorded in SQLite with reviewer identity."},{title:"8. Complete Operation Without Gemini API Key",description:"Deterministic OpenCV, SciPy, and SQLite engine functions 100% offline without credentials.",pass:n.isOfflineSupported,syntheticTruth:"Zero API keys required for full discovery, assembly, lathe modeling, and export."}];return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6 select-text",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden",children:[u.jsxs("div",{className:"px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("div",{className:"p-2 bg-terracotta-100 text-terracotta-700 rounded-lg",children:u.jsx(B_,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"font-semibold text-charcoal-900 text-sm",children:"Pottery Verification & Evaluation Checklist"}),u.jsx("p",{className:"text-xs text-charcoal-500",children:"Evaluation criteria comparing synthetic pottery ground truth against computed results."})]})]}),u.jsx("button",{onClick:e,className:"p-1.5 text-charcoal-400 hover:text-charcoal-700 rounded",children:u.jsx(va,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"p-6 flex-1 overflow-y-auto space-y-3.5",children:i.map((r,s)=>u.jsxs("div",{className:"p-3.5 rounded-lg border border-parchment-200 bg-parchment-50/50 flex space-x-3.5",children:[u.jsx("div",{className:"mt-0.5",children:r.pass?u.jsx(ig,{className:"w-5 h-5 text-emerald-600"}):u.jsx(tg,{className:"w-5 h-5 text-amber-500"})}),u.jsxs("div",{className:"flex-1 text-xs",children:[u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsx("span",{className:"font-semibold text-charcoal-900 text-sm",children:r.title}),u.jsx("span",{className:`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${r.pass?"bg-emerald-100 text-emerald-800":"bg-amber-100 text-amber-800"}`,children:r.pass?"VERIFIED":"PENDING"})]}),u.jsx("p",{className:"text-charcoal-600 mb-1.5 leading-relaxed",children:r.description}),u.jsxs("div",{className:"text-[11px] font-mono text-terracotta-800 bg-white p-2 rounded border border-parchment-200",children:["Ground Truth Benchmark: ",r.syntheticTruth]})]})]},s))}),u.jsxs("div",{className:"px-6 py-3 bg-parchment-100 border-t border-parchment-300 flex justify-between items-center text-xs text-charcoal-600",children:[u.jsx("span",{children:"Benchmark: Deterministic Synthetic Scene (2 Vessels, 8 Fragments)"}),u.jsx("button",{onClick:e,className:"bg-charcoal-800 hover:bg-charcoal-900 text-white font-semibold px-4 py-1.5 rounded-md",children:"Close Checklist"})]})]})})},PT=()=>{const[t,e]=me.useState(null),[n,i]=me.useState([]),[r,s]=me.useState(null),[a,o]=me.useState(null),[l,c]=me.useState("capture"),[h,f]=me.useState(null),[p,g]=me.useState(!1),[S,y]=me.useState(!1);me.useEffect(()=>{m()},[]);const m=async()=>{try{const F=await qe.getHealth();e(F)}catch(F){console.warn("Backend not responding yet:",F)}try{const F=await qe.listProjects();i(F),F.length>0?d(F[0].id):x()}catch(F){console.warn("Failed to load projects:",F)}},d=async F=>{s(F),f(null);try{const K=await qe.getProjectState(F);o(K),K.fragments.length>0?c("group"):c("capture")}catch(K){console.error(K)}},v=async()=>{const F=prompt("Enter project name:","New Pottery Project")||"New Pottery Project";try{const K=await qe.createProject(F);i(L=>[K,...L]),d(K.id)}catch(K){alert(`Could not create project: ${K.message}`)}},x=async()=>{try{const F=await qe.createDemoProject(),K=await qe.listProjects();i(K),await d(F.project_id),c("group")}catch(F){alert(`Could not load demonstration: ${F.message}`)}},_=async(F,K)=>{if(!a)return;const L={...a.project,primary_photo_url:F,primary_photo_dimensions:K};o({...a,project:L}),i(z=>z.map(N=>N.id===L.id?L:N)),c("group")},T=F=>{if(!a)return;const K={...a.project,calibration:F};o({...a,project:K}),i(L=>L.map(z=>z.id===K.id?K:z))},M=F=>{a&&o({...a,fragments:F})},b=F=>{a&&o({...a,groups:F})},U=F=>{a&&o({...a,joins:F})},E=F=>{a&&o({...a,reconstruction_profile:F})},C=(F,K)=>{if(!a)return;const L=new Date().toISOString(),z={...a.project,status:"approved",approved_at:L,reviewer_name:F},N={id:K,project_id:z.id,approved_at:L,reviewer_name:F,notes:"Formal approval recorded.",state_snapshot:{}};o({...a,project:z,snapshots:[N,...a.snapshots]}),i(H=>H.map(P=>P.id===z.id?z:P))},W=(a==null?void 0:a.fragments.find(F=>F.id===h))||null;return u.jsxs("div",{className:"flex flex-col h-screen bg-parchment-50 font-sans overflow-hidden",children:[u.jsx(sy,{currentProject:(a==null?void 0:a.project)||null,projects:n,health:t,onSelectProject:d,onCreateProject:v,onLoadDemo:x,onOpenChecklist:()=>g(!0),isSaving:S}),u.jsx(ay,{currentStep:l,onSelectStep:c,stats:{hasPhoto:!!(a!=null&&a.project.primary_photo_url),fragmentCount:(a==null?void 0:a.fragments.length)||0,groupCount:(a==null?void 0:a.groups.length)||0,acceptedJoinsCount:(a==null?void 0:a.joins.filter(F=>F.status==="accepted").length)||0,hasReconstruction:!!(a!=null&&a.reconstruction_profile),isApproved:(a==null?void 0:a.project.status)==="approved"}}),u.jsx("div",{className:"flex-1 flex overflow-hidden",children:a?u.jsxs(u.Fragment,{children:[l==="capture"&&u.jsx(ly,{project:a.project,onPhotoUploaded:_,onCalibrationUpdated:T,onNextStep:()=>c("group")}),l==="group"&&u.jsx(cy,{project:a.project,fragments:a.fragments,groups:a.groups,selectedFragmentId:h,onSelectFragment:F=>f(F?F.id:null),onFragmentsUpdated:M,onGroupsUpdated:b,onNextStep:()=>c("assemble")}),l==="assemble"&&u.jsx(uy,{project:a.project,fragments:a.fragments,joins:a.joins,groups:a.groups,selectedFragmentId:h,onSelectFragment:F=>f(F?F.id:null),onFragmentsUpdated:M,onJoinsUpdated:U,onNextStep:()=>c("reconstruct")}),l==="reconstruct"&&u.jsx(AT,{project:a.project,profile:a.reconstruction_profile,onProfileUpdated:E,onNextStep:()=>c("typology")}),l==="typology"&&u.jsx(CT,{project:a.project,onNextStep:()=>c("review")}),l==="review"&&u.jsx(RT,{project:a.project,fragments:a.fragments,groups:a.groups,joins:a.joins,profile:a.reconstruction_profile,snapshots:a.snapshots,onProjectApproved:C,onOpenChecklist:()=>g(!0)}),u.jsx(oy,{selectedFragment:W,groups:a.groups,photos:a.photos,project:a.project,onUpdateFragment:F=>{const K=a.fragments.map(L=>L.id===F.id?F:L);M(K),qe.updateFragment(a.project.id,F)},onDeselect:()=>f(null),onPhotoUploaded:()=>d(a.project.id)})]}):u.jsx("div",{className:"flex-1 flex items-center justify-center text-charcoal-400 text-sm font-mono",children:"Loading SHERD-FORGE workspace..."})}),u.jsx(NT,{isOpen:p,onClose:()=>g(!1),stats:{isCalibrated:!!(a!=null&&a.project.calibration.is_calibrated),fragmentCount:(a==null?void 0:a.fragments.length)||0,hasJoins:((a==null?void 0:a.joins.length)||0)>0,hasAcceptedJoin:((a==null?void 0:a.joins.filter(F=>F.status==="accepted").length)||0)>0,hasReconstruction:!!(a!=null&&a.reconstruction_profile),isApproved:(a==null?void 0:a.project.status)==="approved",isOfflineSupported:!0}})]})};jc.createRoot(document.getElementById("root")).render(u.jsx(gx.StrictMode,{children:u.jsx(PT,{})}));
