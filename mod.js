// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+i(n):i(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=a(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=a(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):n.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,i,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);a=r.arg}switch(r.specifier){case"e":case"E":i=a.toExponential(r.precision);break;case"f":case"F":i=a.toFixed(r.precision);break;case"g":case"G":s(a)<1e-4?((e=r.precision)>0&&(e-=1),i=a.toExponential(e)):i=a.toPrecision(r.precision),r.alternate||(i=f.call(i,b,"$1e"),i=f.call(i,v,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,u,"e+0$1"),i=f.call(i,g,"e-0$1"),r.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,h,"$1.e")),a>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):l.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,i,n,o,s,l,p,f,u,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,p=0;p<r.length;p++)if(i=r[p],"string"==typeof i)s+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+m(h):m(h)+u)),s+=i.arg||"",l+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,i,a;for(t=[],a=0,i=F.exec(r);i;)(e=r.slice(a,F.lastIndex-i[0].length)).length&&t.push(e),t.push(A(i)),a=F.lastIndex,i=F.exec(r);return(e=r.slice(a)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var T,V=Object.prototype,$=V.toString,O=V.__defineGetter__,C=V.__defineSetter__,P=V.__lookupGetter__,R=V.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,a,n,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(P.call(r,e)||R.call(r,e)?(i=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};var N=T;var Z="function"==typeof Math.fround?Math.fround:null;var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var W=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var M,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";M=G&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i,a,n;if(null==r)return W.call(r);t=r[X],n=X,e=null!=(a=r)&&L.call(a,n);try{r[X]=void 0}catch(e){return W.call(r)}return i=W.call(r),e?r[X]=t:delete r[X],i}:function(r){return W.call(r)};var z=M,Y="function"==typeof Float32Array;var q=Number.POSITIVE_INFINITY,B="function"==typeof Float32Array?Float32Array:null;var D,H="function"==typeof Float32Array?Float32Array:void 0;D=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B([1,3.14,-3.14,5e40]),t=e,r=(Y&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===q}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")};var J=new D(1);var K="function"==typeof Z?Z:function(r){return J[0]=r,J[0]};function Q(r,e,t,i,a,n){var o,c,s,l,p,f,u,g,d,h;if(o=n[0],r<=0||-2===o)return i;if(t===a&&t>0){if(f=0,o<0){for(c=n[1],s=n[3],l=n[2],p=n[4],g=0;g<r;g++)d=e[f],h=i[f],e[f]=K(K(d*c)+K(h*s)),i[f]=K(K(d*l)+K(h*p)),f+=t;return i}if(0===o){for(s=n[3],l=n[2],g=0;g<r;g++)d=e[f],h=i[f],e[f]=K(d+K(h*s)),i[f]=K(K(d*l)+h),f+=t;return i}for(c=n[1],p=n[4],g=0;g<r;g++)d=e[f],h=i[f],e[f]=K(K(d*c)+h),i[f]=K(-d+K(h*p)),f+=t;return i}if(f=t<0?(1-r)*t:0,u=a<0?(1-r)*a:0,o<0){for(c=n[1],s=n[3],l=n[2],p=n[4],g=0;g<r;g++)d=e[f],h=i[u],e[f]=K(K(d*c)+K(h*s)),i[u]=K(K(d*l)+K(h*p)),f+=t,u+=a;return i}if(0===o){for(s=n[3],l=n[2],g=0;g<r;g++)d=e[f],h=i[u],e[f]=K(d+K(h*s)),i[u]=K(K(d*l)+h),f+=t,u+=a;return i}for(c=n[1],p=n[4],g=0;g<r;g++)d=e[f],h=i[u],e[f]=K(K(d*c)+h),i[u]=K(-d+K(h*p)),f+=t,u+=a;return i}function rr(r,e,t,i,a,n,o,c){var s,l,p,f,u,g,d,h,y,v;if(s=c[0],r<=0||-2===s)return a;if(g=i,d=o,t===n&&t>0){if(s<0){for(l=c[1],p=c[3],f=c[2],u=c[4],h=0;h<r;h++)y=e[g],v=a[g],e[g]=K(K(y*l)+K(v*p)),a[g]=K(K(y*f)+K(v*u)),g+=t;return a}if(0===s){for(p=c[3],f=c[2],h=0;h<r;h++)y=e[g],v=a[g],e[g]=K(y+K(v*p)),a[g]=K(K(y*f)+v),g+=t;return a}for(l=c[1],u=c[4],h=0;h<r;h++)y=e[g],v=a[g],e[g]=K(K(y*l)+v),a[g]=K(-y+K(v*u)),g+=t;return a}if(s<0){for(l=c[1],p=c[3],f=c[2],u=c[4],h=0;h<r;h++)y=e[g],v=a[d],e[g]=K(K(y*l)+K(v*p)),a[d]=K(K(y*f)+K(v*u)),g+=t,d+=n;return a}if(0===s){for(p=c[3],f=c[2],h=0;h<r;h++)y=e[g],v=a[d],e[g]=K(y+K(v*p)),a[d]=K(K(y*f)+v),g+=t,d+=n;return a}for(l=c[1],u=c[4],h=0;h<r;h++)y=e[g],v=a[d],e[g]=K(K(y*l)+v),a[d]=K(-y+K(v*u)),g+=t,d+=n;return a}N(Q,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:rr});export{Q as default,rr as ndarray};
//# sourceMappingURL=mod.js.map