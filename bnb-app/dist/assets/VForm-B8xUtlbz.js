import{v as H,n as M,z as ct,B as q,a as w,aQ as ue,p as z,I as U,G as ke,F as Ee,a3 as Se,i as Re,a1 as re,D as ut,aR as dt,H as ft,aA as pt,aS as ht,aT as mt,K as yt,L as bt,s as wt,t as Et,u as St,R as Rt,x as gt,O as At,P as Ot,Q as vt,aU as Tt,S as Pt,aB as Ct,aV as xt,aW as Nt,T as Ft,Y as _t,Z as j,h as kt,g as Bt,aw as Dt,aD as Lt,$ as It,W as Ut,aj as jt,a5 as se,a6 as Vt,ak as Ht,A as Mt,al as qt}from"./index-Dlz9iadY.js";function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:zt}=Object.prototype,{getPrototypeOf:de}=Object,W=(e=>t=>{const n=zt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>W(t)===e),$=e=>t=>typeof t===e,{isArray:N}=Array,_=$("undefined");function Wt(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=T("ArrayBuffer");function $t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const Jt=$("string"),A=$("function"),Le=$("number"),J=e=>e!==null&&typeof e=="object",Kt=e=>e===!0||e===!1,D=e=>{if(W(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Gt=T("Date"),Xt=T("File"),Qt=T("Blob"),Zt=T("FileList"),Yt=e=>J(e)&&A(e.pipe),en=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=W(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},tn=T("URLSearchParams"),nn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let c;for(r=0;r<o;r++)c=s[r],t.call(null,e[c],c,e)}}function Ie(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Ue=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,je=e=>!_(e)&&e!==Ue;function ie(){const{caseless:e}=je(this)&&this||{},t={},n=(r,i)=>{const s=e&&Ie(t,i)||i;D(t[s])&&D(r)?t[s]=ie(t[s],r):D(r)?t[s]=ie({},r):N(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&k(arguments[r],n);return t}const rn=(e,t,n,{allOwnKeys:r}={})=>(k(t,(i,s)=>{n&&A(i)?e[s]=Be(i,n):e[s]=i},{allOwnKeys:r}),e),sn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),on=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},an=(e,t,n,r)=>{let i,s,o;const c={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ln=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},cn=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},un=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),dn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},fn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pn=T("HTMLFormElement"),hn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mn=T("RegExp"),Ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},yn=e=>{Ve(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bn=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return N(e)?r(e):r(String(e).split(t)),n},wn=()=>{},En=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",Ae="0123456789",He={DIGIT:Ae,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+Ae},Sn=(e=16,t=He.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Rn(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const gn=e=>{const t=new Array(10),n=(r,i)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=N(r)?[]:{};return k(r,(o,c)=>{const d=n(o,i+1);!_(d)&&(s[c]=d)}),t[i]=void 0,s}}return r};return n(e,0)},An=T("AsyncFunction"),On=e=>e&&(J(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:N,isArrayBuffer:De,isBuffer:Wt,isFormData:en,isArrayBufferView:$t,isString:Jt,isNumber:Le,isBoolean:Kt,isObject:J,isPlainObject:D,isUndefined:_,isDate:Gt,isFile:Xt,isBlob:Qt,isRegExp:mn,isFunction:A,isStream:Yt,isURLSearchParams:tn,isTypedArray:un,isFileList:Zt,forEach:k,merge:ie,extend:rn,trim:nn,stripBOM:sn,inherits:on,toFlatObject:an,kindOf:W,kindOfTest:T,endsWith:ln,toArray:cn,forEachEntry:dn,matchAll:fn,isHTMLForm:pn,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Ve,freezeMethods:yn,toObjectSet:bn,toCamelCase:hn,noop:wn,toFiniteNumber:En,findKey:Ie,global:Ue,isContextDefined:je,ALPHABET:He,generateString:Sn,isSpecCompliantForm:Rn,toJSONObject:gn,isAsyncFn:An,isThenable:On};function b(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Me=b.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(b,qe);Object.defineProperty(Me,"isAxiosError",{value:!0});b.from=(e,t,n,r,i,s)=>{const o=Object.create(Me);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),b.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const vn=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(i,s){return i=ze(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function Tn(e){return a.isArray(e)&&!e.some(oe)}const Pn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function K(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,E){return!a.isUndefined(E[h])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(i))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,h,E){let R=p;if(p&&!E&&typeof p=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Tn(p)||(a.isFileList(p)||a.endsWith(h,"[]"))&&(R=a.toArray(p)))return h=ze(h),R.forEach(function(O,X){!(a.isUndefined(O)||O===null)&&t.append(o===!0?Oe([h],X,s):o===null?h:h+"[]",f(O))}),!1}return oe(p)?!0:(t.append(Oe(E,h,s),f(p)),!1)}const l=[],m=Object.assign(Pn,{defaultVisitor:u,convertValue:f,isVisitable:oe});function y(p,h){if(!a.isUndefined(p)){if(l.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));l.push(p),a.forEach(p,function(R,g){(!(a.isUndefined(R)||R===null)&&i.call(t,R,a.isString(g)?g.trim():g,h,m))===!0&&y(R,h?h.concat(g):[g])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fe(e,t){this._pairs=[],e&&K(e,this,t)}const We=fe.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(r){return t.call(this,r,ve)}:ve;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Cn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||Cn,i=n&&n.serialize;let s;if(i?s=i(t,n):s=a.isURLSearchParams(t)?t.toString():new fe(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xn=typeof URLSearchParams<"u"?URLSearchParams:fe,Nn=typeof FormData<"u"?FormData:null,Fn=typeof Blob<"u"?Blob:null,_n={isBrowser:!0,classes:{URLSearchParams:xn,FormData:Nn,Blob:Fn},protocols:["http","https","file","blob","url","data"]},Ke=typeof window<"u"&&typeof document<"u",kn=(e=>Ke&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Bn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ke,hasStandardBrowserEnv:kn,hasStandardBrowserWebWorkerEnv:Bn},Symbol.toStringTag,{value:"Module"})),v={...Dn,..._n};function Ln(e,t){return K(e,new v.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return v.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function In(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Un(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Ge(e){function t(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),d=s>=n.length;return o=!o&&a.isArray(i)?i.length:o,d?(a.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!c):((!i[o]||!a.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&a.isArray(i[o])&&(i[o]=Un(i[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,i)=>{t(In(r),i,n,0)}),n}return null}function jn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const pe={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return i?JSON.stringify(Ge(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ln(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return K(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),jn(t)):t}],transformResponse:[function(t){const n=this.transitional||pe.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?b.from(c,b.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:v.classes.FormData,Blob:v.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{pe.headers[e]={}});const he=pe,Vn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hn=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Vn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Pe=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function L(e){return e===!1||e==null?e:a.isArray(e)?e.map(L):String(e)}function Mn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,i){if(a.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function zn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(c,d,f){const u=F(d);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(i,u);(!l||i[l]===void 0||f===!0||f===void 0&&i[l]!==!1)&&(i[l||d]=L(c))}const o=(c,d)=>a.forEach(c,(f,u)=>s(f,u,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!qn(t)?o(Hn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Mn(i);if(a.isFunction(n))return n.call(this,i,r);if(a.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=F(o),o){const c=a.findKey(r,o);c&&(!n||Z(r,r[c],c,n))&&(delete r[c],i=!0)}}return a.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Z(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return a.forEach(this,(i,s)=>{const o=a.findKey(r,s);if(o){n[o]=L(i),delete n[s];return}const c=t?zn(s):String(s).trim();c!==s&&delete n[s],n[c]=L(i),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Pe]=this[Pe]={accessors:{}}).accessors,i=this.prototype;function s(o){const c=F(o);r[c]||(Wn(i,o),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(G.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(G);const P=G;function Y(e,t){const n=this||he,r=t||n,i=P.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function Xe(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,b,{__CANCEL__:!0});function $n(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jn=v.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Kn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Qe(e,t){return e&&!Kn(t)?Gn(e,t):t}const Xn=v.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const c=a.isString(o)?i(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Qn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),u=r[s];o||(o=f),n[i]=d,r[i]=f;let l=s,m=0;for(;l!==i;)m+=n[l++],l=l%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),f-o<t)return;const y=u&&f-u;return y?Math.round(m*1e3/y):void 0}}function Ce(e,t){let n=0;const r=Zn(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,c=s-n,d=r(c),f=s<=o;n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&f?(o-s)/d:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const Yn=typeof XMLHttpRequest<"u",er=Yn&&function(e){return new Promise(function(n,r){let i=e.data;const s=P.from(e.headers).normalize();let{responseType:o,withXSRFToken:c}=e,d;function f(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}let u;if(a.isFormData(i)){if(v.hasStandardBrowserEnv||v.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((u=s.getContentType())!==!1){const[h,...E]=u?u.split(";").map(R=>R.trim()).filter(Boolean):[];s.setContentType([h||"multipart/form-data",...E].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(h+":"+E))}const m=Qe(e.baseURL,e.url);l.open(e.method.toUpperCase(),$e(m,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function y(){if(!l)return;const h=P.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),R={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:h,config:e,request:l};$n(function(O){n(O),f()},function(O){r(O),f()},R),l=null}if("onloadend"in l?l.onloadend=y:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(y)},l.onabort=function(){l&&(r(new b("Request aborted",b.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||Je;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new b(E,R.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,l)),l=null},v.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Xn(m))){const h=e.xsrfHeaderName&&e.xsrfCookieName&&Jn.read(e.xsrfCookieName);h&&s.set(e.xsrfHeaderName,h)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(E,R){l.setRequestHeader(R,E)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=h=>{l&&(r(!h||h.type?new B(null,e,l):h),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const p=Qn(m);if(p&&v.protocols.indexOf(p)===-1){r(new b("Unsupported protocol "+p+":",b.ERR_BAD_REQUEST,e));return}l.send(i||null)})},ae={http:vn,xhr:er};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xe=e=>`- ${e}`,tr=e=>a.isFunction(e)||e===null||e===!1,Ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){n=e[s];let o;if(r=n,!tr(n)&&(r=ae[(o=String(n)).toLowerCase()],r===void 0))throw new b(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(xe).join(`
`):" "+xe(s[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ae};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Ne(e){return ee(e),e.headers=P.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze.getAdapter(e.adapter||he.adapter)(e).then(function(r){return ee(e),r.data=Y.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return Xe(r)||(ee(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Fe=e=>e instanceof P?{...e}:e;function x(e,t){t=t||{};const n={};function r(f,u,l){return a.isPlainObject(f)&&a.isPlainObject(u)?a.merge.call({caseless:l},f,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function i(f,u,l){if(a.isUndefined(u)){if(!a.isUndefined(f))return r(void 0,f,l)}else return r(f,u,l)}function s(f,u){if(!a.isUndefined(u))return r(void 0,u)}function o(f,u){if(a.isUndefined(u)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,u)}function c(f,u,l){if(l in t)return r(f,u);if(l in e)return r(void 0,f)}const d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(f,u)=>i(Fe(f),Fe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=d[u]||i,m=l(e[u],t[u],u);a.isUndefined(m)&&l!==c||(n[u]=m)}),n}const Ye="1.6.8",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _e={};me.transitional=function(t,n,r){function i(s,o){return"[Axios v"+Ye+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,c)=>{if(t===!1)throw new b(i(o," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!_e[o]&&(_e[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,c):!0}};function nr(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const c=e[s],d=c===void 0||o(c,s,e);if(d!==!0)throw new b("option "+s+" must be "+d,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}const le={assertOptions:nr,validators:me},C=le.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),i!=null&&(a.isFunction(i)?n.paramsSerializer={serialize:i}:le.assertOptions(i,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=P.concat(o,s);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let u,l=0,m;if(!d){const p=[Ne.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,f),m=p.length,u=Promise.resolve(n);l<m;)u=u.then(p[l++],p[l++]);return u}m=c.length;let y=n;for(l=0;l<m;){const p=c[l++],h=c[l++];try{y=p(y)}catch(E){h.call(this,E);break}}try{u=Ne.call(this,y)}catch(p){return Promise.reject(p)}for(l=0,m=f.length;l<m;)u=u.then(f[l++],f[l++]);return u}getUri(t){t=x(this.defaults,t);const n=Qe(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const I=V;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(c=>{r.subscribe(c),s=c}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,c){r.reason||(r.reason=new B(s,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(i){t=i}),cancel:t}}}const rr=ye;function sr(e){return function(n){return e.apply(null,n)}}function ir(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});const or=ce;function et(e){const t=new I(e),n=Be(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return et(x(e,i))},n}const S=et(he);S.Axios=I;S.CanceledError=B;S.CancelToken=rr;S.isCancel=Xe;S.VERSION=Ye;S.toFormData=K;S.AxiosError=b;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=sr;S.isAxiosError=ir;S.mergeConfig=x;S.AxiosHeaders=P;S.formToJSON=e=>Ge(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=Ze.getAdapter;S.HttpStatusCode=or;S.default=S;const ar=S.create({baseURL:"http://127.0.0.1:8000/api"});ar.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));const lr=H()({name:"VCardActions",props:M(),setup(e,t){let{slots:n}=t;return ct({VBtn:{slim:!0,variant:"text"}}),q(()=>{var r;return w("div",{class:["v-card-actions",e.class],style:e.style},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),cr=ue("v-card-subtitle"),ur=ue("v-card-title"),dr=z({appendAvatar:String,appendIcon:U,prependAvatar:String,prependIcon:U,subtitle:[String,Number],title:[String,Number],...M(),...ke()},"VCardItem"),fr=H()({name:"VCardItem",props:dr(),setup(e,t){let{slots:n}=t;return q(()=>{var f;const r=!!(e.prependAvatar||e.prependIcon),i=!!(r||n.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||n.append),c=!!(e.title!=null||n.title),d=!!(e.subtitle!=null||n.subtitle);return w("div",{class:["v-card-item",e.class],style:e.style},[i&&w("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?w(re,{key:"prepend-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):w(Ee,null,[e.prependAvatar&&w(Se,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&w(Re,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),w("div",{class:"v-card-item__content"},[c&&w(ur,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??e.title]}}),d&&w(cr,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??e.subtitle]}}),(f=n.default)==null?void 0:f.call(n)]),o&&w("div",{key:"append",class:"v-card-item__append"},[n.append?w(re,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):w(Ee,null,[e.appendIcon&&w(Re,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&w(Se,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),pr=ue("v-card-text"),hr=z({appendAvatar:String,appendIcon:U,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ut(),...M(),...ke(),...dt(),...ft(),...pt(),...ht(),...mt(),...yt(),...bt(),...wt(),...Et(),...St({variant:"elevated"})},"VCard"),Sr=H()({name:"VCard",directives:{Ripple:Rt},props:hr(),setup(e,t){let{attrs:n,slots:r}=t;const{themeClasses:i}=gt(e),{borderClasses:s}=At(e),{colorClasses:o,colorStyles:c,variantClasses:d}=Ot(e),{densityClasses:f}=vt(e),{dimensionStyles:u}=Tt(e),{elevationClasses:l}=Pt(e),{loaderClasses:m}=Ct(e),{locationStyles:y}=xt(e),{positionClasses:p}=Nt(e),{roundedClasses:h}=Ft(e),E=_t(e,n),R=j(()=>e.link!==!1&&E.isLink.value),g=j(()=>!e.disabled&&e.link!==!1&&(e.link||E.isClickable.value));return q(()=>{const O=R.value?"a":e.tag,X=!!(r.title||e.title!=null),nt=!!(r.subtitle||e.subtitle!=null),rt=X||nt,st=!!(r.append||e.appendAvatar||e.appendIcon),it=!!(r.prepend||e.prependAvatar||e.prependIcon),ot=!!(r.image||e.image),at=rt||it||st,lt=!!(r.text||e.text!=null);return kt(w(O,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},i.value,s.value,o.value,f.value,l.value,m.value,p.value,h.value,d.value,e.class],style:[c.value,u.value,y.value,e.style],href:E.href.value,onClick:g.value&&E.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var be;return[ot&&w("div",{key:"image",class:"v-card__image"},[r.image?w(re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},r.image):w(Dt,{key:"image-img",cover:!0,src:e.image},null)]),w(Lt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:r.loader}),at&&w(fr,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:r.item,prepend:r.prepend,title:r.title,subtitle:r.subtitle,append:r.append}),lt&&w(pr,{key:"text"},{default:()=>{var we;return[((we=r.text)==null?void 0:we.call(r))??e.text]}}),(be=r.default)==null?void 0:be.call(r),r.actions&&w(lr,null,{default:r.actions}),It(g.value,"v-card")]}}),[[Bt("ripple"),g.value&&e.ripple]])}),{}}}),tt=Symbol.for("vuetify:form"),mr=z({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function yr(e){const t=Ut(e,"modelValue"),n=j(()=>e.disabled),r=j(()=>e.readonly),i=jt(!1),s=se([]),o=se([]);async function c(){const u=[];let l=!0;o.value=[],i.value=!0;for(const m of s.value){const y=await m.validate();if(y.length>0&&(l=!1,u.push({id:m.id,errorMessages:y})),!l&&e.fastFail)break}return o.value=u,i.value=!1,{valid:l,errors:o.value}}function d(){s.value.forEach(u=>u.reset())}function f(){s.value.forEach(u=>u.resetValidation())}return Vt(s,()=>{let u=0,l=0;const m=[];for(const y of s.value)y.isValid===!1?(l++,m.push({id:y.id,errorMessages:y.errorMessages})):y.isValid===!0&&u++;o.value=m,t.value=l>0?!1:u===s.value.length?!0:null},{deep:!0,flush:"post"}),Ht(tt,{register:u=>{let{id:l,validate:m,reset:y,resetValidation:p}=u;s.value.some(h=>h.id===l),s.value.push({id:l,validate:m,reset:y,resetValidation:p,isValid:null,errorMessages:[]})},unregister:u=>{s.value=s.value.filter(l=>l.id!==u)},update:(u,l,m)=>{const y=s.value.find(p=>p.id===u);y&&(y.isValid=l,y.errorMessages=m)},isDisabled:n,isReadonly:r,isValidating:i,isValid:t,items:s,validateOn:Mt(e,"validateOn")}),{errors:o,isDisabled:n,isReadonly:r,isValidating:i,isValid:t,items:s,validate:c,reset:d,resetValidation:f}}function Rr(){return qt(tt,null)}const te=Symbol("Forwarded refs");function ne(e,t){let n=e;for(;n;){const r=Reflect.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function br(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e[te]=n,new Proxy(e,{get(i,s){if(Reflect.has(i,s))return Reflect.get(i,s);if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,s)){const c=Reflect.get(o.value,s);return typeof c=="function"?c.bind(o.value):c}}},has(i,s){if(Reflect.has(i,s))return!0;if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,s))return!0;return!1},set(i,s,o){if(Reflect.has(i,s))return Reflect.set(i,s,o);if(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))return!1;for(const c of n)if(c.value&&Reflect.has(c.value,s))return Reflect.set(c.value,s,o);return!1},getOwnPropertyDescriptor(i,s){var c;const o=Reflect.getOwnPropertyDescriptor(i,s);if(o)return o;if(!(typeof s=="symbol"||s.startsWith("$")||s.startsWith("__"))){for(const d of n){if(!d.value)continue;const f=ne(d.value,s)??("_"in d.value?ne((c=d.value._)==null?void 0:c.setupState,s):void 0);if(f)return f}for(const d of n){const f=d.value&&d.value[te];if(!f)continue;const u=f.slice();for(;u.length;){const l=u.shift(),m=ne(l.value,s);if(m)return m;const y=l.value&&l.value[te];y&&u.push(...y)}}}}})}const wr=z({...M(),...mr()},"VForm"),gr=H()({name:"VForm",props:wr(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:r}=t;const i=yr(e),s=se();function o(d){d.preventDefault(),i.reset()}function c(d){const f=d,u=i.validate();f.then=u.then.bind(u),f.catch=u.catch.bind(u),f.finally=u.finally.bind(u),r("submit",f),f.defaultPrevented||u.then(l=>{var y;let{valid:m}=l;m&&((y=s.value)==null||y.submit())}),f.preventDefault()}return q(()=>{var d;return w("form",{ref:s,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:o,onSubmit:c},[(d=n.default)==null?void 0:d.call(n,i)])}),br(i,s)}});export{Sr as V,gr as a,pr as b,ur as c,br as f,ar as i,Rr as u};