"use strict";var w=function(f,v){return function(){return v||f((v={exports:{}}).exports,v),v.exports}};var z=w(function(T,O){
var r=require('@stdlib/number-float64-base-to-float32/dist');function G(f,v,s,_,u,l,g,i){var R,c,h,a,j,e,q,n,o,t;if(R=i[0],f<=0||R===-2)return u;if(e=_,q=g,s===l&&s>0){if(R<0){for(c=i[1],h=i[3],a=i[2],j=i[4],n=0;n<f;n++)o=v[e],t=u[e],v[e]=r(r(o*c)+r(t*h)),u[e]=r(r(o*a)+r(t*j)),e+=s;return u}if(R===0){for(h=i[3],a=i[2],n=0;n<f;n++)o=v[e],t=u[e],v[e]=r(o+r(t*h)),u[e]=r(r(o*a)+t),e+=s;return u}for(c=i[1],j=i[4],n=0;n<f;n++)o=v[e],t=u[e],v[e]=r(r(o*c)+t),u[e]=r(-o+r(t*j)),e+=s;return u}if(R<0){for(c=i[1],h=i[3],a=i[2],j=i[4],n=0;n<f;n++)o=v[e],t=u[q],v[e]=r(r(o*c)+r(t*h)),u[q]=r(r(o*a)+r(t*j)),e+=s,q+=l;return u}if(R===0){for(h=i[3],a=i[2],n=0;n<f;n++)o=v[e],t=u[q],v[e]=r(o+r(t*h)),u[q]=r(r(o*a)+t),e+=s,q+=l;return u}for(c=i[1],j=i[4],n=0;n<f;n++)o=v[e],t=u[q],v[e]=r(r(o*c)+t),u[q]=r(-o+r(t*j)),e+=s,q+=l;return u}O.exports=G
});var A=w(function(U,k){
var b=require('@stdlib/strided-base-stride2offset/dist'),H=z();function I(f,v,s,_,u,l){var g=b(f,s),i=b(f,u);return H(f,v,s,g,_,u,i,l)}k.exports=I
});var D=w(function(V,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),K=z();J(B,"ndarray",K);C.exports=B
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=D(),E,F=M(L(__dirname,"./native.js"));P(F)?E=Q:E=F;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
