/* https://bitbucket.org/codsen/color-shorthand-hex-to-six-digit/src/master/ */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.colorShorthandHexToSixDigit=e()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t){return(t=t&&"object"===(void 0===t?"undefined":e(t))?t:{}).strict?/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i:/#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var n,r,t=Function.prototype,i=Object.prototype,c=t.toString,f=i.hasOwnProperty,a=c.call(Object),l=i.toString,s=(n=Object.getPrototypeOf,r=Object,function(t){return n(r(t))});var p=function(t){if(!(e=t)||"object"!=(void 0===e?"undefined":o(e))||"[object Object]"!=l.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e,n=s(t);if(null===n)return!0;var r=f.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==a},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=Object.prototype.toString,_=Array.isArray;var h=function(t){return"string"==typeof t||!_(t)&&!!(e=t)&&"object"==(void 0===e?"undefined":y(e))&&"[object String]"==d.call(t);var e},wt="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var b,$t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=(function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,S="[object Arguments]",O="[object Function]",w="[object GeneratorFunction]",o="[object Map]",$="[object Object]",u="[object Promise]",i="[object Set]",c="[object WeakMap]",f="[object DataView]",a=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,s="object"==$t(wt)&&wt&&wt.Object===Object&&wt,p="object"==("undefined"==typeof self?"undefined":$t(self))&&self&&self.Object===Object&&self,y=s||p||Function("return this")(),d=e&&!e.nodeType&&e,_=d&&t&&!t.nodeType&&t,h=_&&_.exports===d;function A(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function b(e,n){return function(t){return e(n(t))}}var v,g=Array.prototype,m=Function.prototype,j=Object.prototype,x=y["__core-js_shared__"],P=(v=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+v:"",k=m.toString,F=j.hasOwnProperty,E=j.toString,M=RegExp("^"+k.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=h?y.Buffer:undefined$4,B=y.Symbol,D=(y.Uint8Array,b(Object.getPrototypeOf,Object)),C=Object.create,I=j.propertyIsEnumerable,R=g.splice,V=Object.getOwnPropertySymbols,W=T?T.isBuffer:undefined$4,G=b(Object.keys,Object),H=st(y,"DataView"),L=st(y,"Map"),U=st(y,"Promise"),q=st(y,"Set"),z=st(y,"WeakMap"),J=st(Object,"create"),K=ht(H),N=ht(L),Q=ht(U),X=ht(q),Y=ht(z),Z=B?B.prototype:undefined$4;Z?Z.valueOf:undefined$4;function tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){this.__data__=new et(t)}function ot(t,e){var n,r,o,u=vt(t)||(o=r=n=t)&&"object"==(void 0===o?"undefined":$t(o))&&gt(r)&&F.call(n,"callee")&&(!I.call(n,"callee")||E.call(n)==S)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],i=u.length,c=!!i;for(var f in t)!e&&!F.call(t,f)||c&&dt(f,i)||u.push(f);return u}function ut(t,e,n){var r=t[e];F.call(t,e)&&bt(r,n)&&(n!==undefined$4||e in t)||(t[e]=n)}function it(t,e){for(var n=t.length;n--;)if(bt(t[n][0],e))return n;return-1}function ct(n,r,o,u,t,e,i){var c;if(u&&(c=e?u(n,t,e,i):u(n)),c!==undefined$4)return c;if(!St(n))return n;var f,a,l,s,p,y,d=vt(n);if(d){if(c=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&F.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(n),!r)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(n,c)}else{var _=yt(n),h=_==O||_==w;if(mt(n))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(n,r);if(_!=$&&_!=S&&(!h||e))return e?n:{};if(A(n))return e?n:{};if(c="function"!=typeof(p=h?{}:n).constructor||_t(p)?{}:St(y=D(p))?C(y):{},!r)return s=f=n,a=(l=c)&&at(s,Ot(s),l),at(f,pt(f),a)}i||(i=new rt);var b,v,g,m=i.get(n);if(m)return m;if(i.set(n,c),!d)var j=o?(v=pt,g=Ot(b=n),vt(b)?g:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(g,v(b))):Ot(n);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(j||n,function(t,e){j&&(t=n[e=t]),ut(c,e,ct(t,r,o,u,e,n,i))}),c}function ft(t){return!(!St(t)||(e=t,P&&P in e))&&(jt(t)||A(t)?M:a).test(ht(t));var e}function at(t,e,n,r){n||(n={});for(var o=-1,u=e.length;++o<u;){var i=e[o],c=r?r(n[i],t[i],i,n,t):undefined$4;ut(n,i,c===undefined$4?t[i]:c)}return n}function lt(t,e){var n,r,o=t.__data__;return("string"==(r=void 0===(n=e)?"undefined":$t(n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function st(t,e){var n,r,o=(r=e,null==(n=t)?undefined$4:n[r]);return ft(o)?o:undefined$4}tt.prototype.clear=function(){this.__data__=J?J(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(J){var n=e[t];return n===r?undefined$4:n}return F.call(e,t)?e[t]:undefined$4},tt.prototype.has=function(t){var e=this.__data__;return J?e[t]!==undefined$4:F.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=J&&e===undefined$4?r:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,n=it(e,t);return!(n<0||(n==e.length-1?e.pop():R.call(e,n,1),0))},et.prototype.get=function(t){var e=this.__data__,n=it(e,t);return n<0?undefined$4:e[n][1]},et.prototype.has=function(t){return-1<it(this.__data__,t)},et.prototype.set=function(t,e){var n=this.__data__,r=it(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},nt.prototype.clear=function(){this.__data__={hash:new tt,map:new(L||et),string:new tt}},nt.prototype.delete=function(t){return lt(this,t).delete(t)},nt.prototype.get=function(t){return lt(this,t).get(t)},nt.prototype.has=function(t){return lt(this,t).has(t)},nt.prototype.set=function(t,e){return lt(this,t).set(t,e),this},rt.prototype.clear=function(){this.__data__=new et},rt.prototype.delete=function(t){return this.__data__.delete(t)},rt.prototype.get=function(t){return this.__data__.get(t)},rt.prototype.has=function(t){return this.__data__.has(t)},rt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof et){var r=n.__data__;if(!L||r.length<199)return r.push([t,e]),this;n=this.__data__=new nt(r)}return n.set(t,e),this};var pt=V?b(V,Object):function(){return[]},yt=function(t){return E.call(t)};function dt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||l.test(t))&&-1<t&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||j)}function ht(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function bt(t,e){return t===e||t!=t&&e!=e}(H&&yt(new H(new ArrayBuffer(1)))!=f||L&&yt(new L)!=o||U&&yt(U.resolve())!=u||q&&yt(new q)!=i||z&&yt(new z)!=c)&&(yt=function(t){var e=E.call(t),n=e==$?t.constructor:undefined$4,r=n?ht(n):undefined$4;if(r)switch(r){case K:return f;case N:return o;case Q:return u;case X:return i;case Y:return c}return e});var vt=Array.isArray;function gt(t){return null!=t&&("number"==typeof(e=t.length)&&-1<e&&e%1==0&&e<=n)&&!jt(t);var e}var mt=W||function(){return!1};function jt(t){var e=St(t)?E.call(t):"";return e==O||e==w}function St(t){var e=void 0===t?"undefined":$t(t);return!!t&&("object"==e||"function"==e)}function Ot(t){return gt(t)?ot(t):function(t){if(!_t(t))return G(t);var e=[];for(var n in Object(t))F.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return ct(t,!0,!0)}}(b={exports:{}},b.exports),b.exports),g=Array.isArray;return function e(t){var n=v(t);if(h(t))n=n.replace(u(),function(t,e,n,r){return"&"!==r[n-1]&&4===t.length&&"#"===t.charAt(0)&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t.toLowerCase()});else if(g(n))for(var r=0,o=n.length;r<o;r++)n[r]=e(n[r]);else{if(!p(t))return t;Object.keys(n).forEach(function(t){n[t]=e(n[t])})}return n}});