"use strict";var w=function(o,i){return function(){return i||o((i={exports:{}}).exports,i),i.exports}};var z=w(function(T,O){
var r=require('@stdlib/number-float64-base-to-float32/dist');function G(o,i,s,R,u,g,_,v){var c,h,l,a,j,e,q,n,f,t;if(c=v[0],o<=0||c===-2)return u;if(e=R,q=_,s===g&&s>0){if(c<0){for(h=v[1],l=v[3],a=v[2],j=v[4],n=0;n<o;n++)f=i[e],t=u[e],i[e]=r(r(f*h)+r(t*l)),u[e]=r(r(f*a)+r(t*j)),e+=s;return u}if(c===0){for(l=v[3],a=v[2],n=0;n<o;n++)f=i[e],t=u[e],i[e]=r(f+r(t*l)),u[e]=r(r(f*a)+t),e+=s;return u}for(h=v[1],j=v[4],n=0;n<o;n++)f=i[e],t=u[e],i[e]=r(r(f*h)+t),u[e]=r(-f+r(t*j)),e+=s;return u}if(c<0){for(h=v[1],l=v[3],a=v[2],j=v[4],n=0;n<o;n++)f=i[e],t=u[q],i[e]=r(r(f*h)+r(t*l)),u[q]=r(r(f*a)+r(t*j)),e+=s,q+=g;return u}if(c===0){for(l=v[3],a=v[2],n=0;n<o;n++)f=i[e],t=u[q],i[e]=r(f+r(t*l)),u[q]=r(r(f*a)+t),e+=s,q+=g;return u}for(h=v[1],j=v[4],n=0;n<o;n++)f=i[e],t=u[q],i[e]=r(r(f*h)+t),u[q]=r(-f+r(t*j)),e+=s,q+=g;return u}O.exports=G
});var A=w(function(U,k){
var b=require('@stdlib/strided-base-stride2offset/dist'),H=z();function I(o,i,s,R,u,g){var _,v,c;return _=g[0],o<=0||_===-2?R:(v=b(o,s),c=b(o,u),H(o,i,s,v,R,u,c,g))}k.exports=I
});var D=w(function(V,C){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),K=z();J(B,"ndarray",K);C.exports=B
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=D(),E,F=M(L(__dirname,"./native.js"));P(F)?E=Q:E=F;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
