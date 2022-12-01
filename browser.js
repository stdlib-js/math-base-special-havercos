// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",i=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,i,u,f,a;if(null==r)return n.call(r);i=r[o],a=o,t=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(t){return n.call(r)}return u=n.call(r),t?r[o]=i:delete r[o],u}:function(r){return n.call(r)},u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,t,n;if("function"!=typeof f)return!1;try{t=new f(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===i(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,l=r,y="function"==typeof Float64Array,p="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,t,n;if("function"!=typeof p)return!1;try{t=new p([1,3.14,-3.14,NaN]),n=t,r=(y&&n instanceof Float64Array||"[object Float64Array]"===i(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?v:function(){throw new Error("not implemented")};var s,b=c,d="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,t,n;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),n=t,r=(d&&n instanceof Uint8Array||"[object Uint8Array]"===i(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=s,h="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,65536,65537]),n=t,r=(h&&n instanceof Uint16Array||"[object Uint16Array]"===i(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,N={uint16:_,uint8:m};(j=new N.uint16(1))[0]=4660;var I=52===new N.uint8(j.buffer)[0],O=!0===I?1:0,S=new b(1),E=new l(S.buffer);function F(r){return S[0]=r,E[O]}function T(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))}var H=-.16666666666666632;function G(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(H+o*n):r-(o*(.5*t-e*n)-t-e*H)}var P,L,V=!0===I?0:1,W=new b(1),k=new l(W.buffer);!0===I?(P=1,L=0):(P=0,L=1);var x={HIGH:P,LOW:L},M=new b(1),Y=new l(M.buffer),C=x.HIGH,q=x.LOW;function z(r,t){return Y[C]=r,Y[q]=t,M[0]}var B=Math.floor,D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r!=r}function Q(r){return r===D||r===J}var R,X,Z="function"==typeof Object.defineProperty?Object.defineProperty:null,$=Object.defineProperty,rr=Object.prototype,tr=rr.toString,nr=rr.__defineGetter__,er=rr.__defineSetter__,or=rr.__lookupGetter__,ir=rr.__lookupSetter__,ur=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===tr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===tr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(or.call(r,t)||ir.call(r,t)?(e=r.__proto__,r.__proto__=rr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&nr&&nr.call(r,t,n.get),u&&er&&er.call(r,t,n.set),r};function fr(r,t,n){ur(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===I?(R=1,X=0):(R=0,X=1);var ar={HIGH:R,LOW:X},cr=new b(1),lr=new l(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,t,n,e){return cr[0]=r,t[e]=lr[yr],t[e+n]=lr[pr],t}function sr(r){return vr(r,[0,0],1,0)}fr(sr,"assign",vr);var br=[0,0];function dr(r,t,n,e){return K(r)||Q(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}fr((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var wr=[0,0],Ar=[0,0];function _r(r,t){var n,e,o,i,u,f;return 0===t||0===r||K(r)||Q(r)?r:(dr(r,wr,1,0),t+=wr[1],t+=function(r){var t=F(r);return(t=(2146435072&t)>>>20)-1023|0}(r=wr[0]),t<-1074?(o=0,i=r,sr.assign(o,br,1,0),u=br[0],u&=2147483647,f=F(i),z(u|=f&=2147483648,br[1])):t>1023?r<0?J:D:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,sr.assign(r,Ar,1,0),n=Ar[0],n&=2148532223,e*z(n|=t+1023<<20,Ar[1])))}function mr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gr=16777216,jr=5.960464477539063e-8,Nr=mr(20),Ir=mr(20),Or=mr(20),Sr=mr(20);function Er(r,t,n,e,o,i,u,f,a){var c,l,y,p,v,s,b,d,w;for(p=i,w=e[n],d=n,v=0;d>0;v++)l=jr*w|0,Sr[v]=w-gr*l|0,w=e[d-1]+l,d-=1;if(w=_r(w,o),w-=8*B(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Sr[n-1]>>24-o,Sr[n-1]-=v<<24-o,y=Sr[n-1]>>23-o):0===o?y=Sr[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<n;v++)d=Sr[v],0===c?0!==d&&(c=1,Sr[v]=16777216-d):Sr[v]=16777215-d;if(o>0)switch(o){case 1:Sr[n-1]&=8388607;break;case 2:Sr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=_r(1,o)))}if(0===w){for(d=0,v=n-1;v>=i;v--)d|=Sr[v];if(0===d){for(s=1;0===Sr[i-s];s++);for(v=n+1;v<=n+s;v++){for(a[f+v]=hr[u+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Er(r,t,n+=s,e,o,i,u,f,a)}}if(0===w)for(n-=1,o-=24;0===Sr[n];)n-=1,o-=24;else(w=_r(w,-o))>=gr?(l=jr*w|0,Sr[n]=w-gr*l|0,o+=24,Sr[n+=1]=l):Sr[n]=0|w;for(l=_r(1,o),v=n;v>=0;v--)e[v]=l*Sr[v],l*=jr;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=Ur[s]*e[v+s];Or[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Or[v];for(t[0]=0===y?l:-l,l=Or[0]-l,v=1;v<=n;v++)l+=Or[v];return t[1]=0===y?l:-l,7&b}function Fr(r,t,n,e){var o,i,u,f,a,c,l;for((i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(u=e-1),l=u+4,a=0;a<=l;a++)Nr[a]=c<0?0:hr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*Nr[u+(a-c)];Ir[a]=o}return Er(r,t,4,Ir,f,4,i,u,Nr)}var Tr=Math.round;function Hr(r,t,n){var e,o,i,u,f;return i=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),u=6077100506506192e-26*e,f=t>>20|0,n[0]=i-u,f-(F(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),n[0]=i-u,f-(F(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),n[0]=i-u)),n[1]=i-n[0]-u,e}var Gr=1.5707963267341256,Pr=6077100506506192e-26,Lr=2*Pr,Vr=3*Pr,Wr=4*Pr,kr=[0,0,0],xr=[0,0];function Mr(r,t){var n,e,o,i,u,f,a;if((o=2147483647&F(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Hr(r,o,t):o<=1073928572?r>0?(a=r-Gr,t[0]=a-Pr,t[1]=a-t[0]-Pr,1):(a=r+Gr,t[0]=a+Pr,t[1]=a-t[0]+Pr,-1):r>0?(a=r-2*Gr,t[0]=a-Lr,t[1]=a-t[0]-Lr,2):(a=r+2*Gr,t[0]=a+Lr,t[1]=a-t[0]+Lr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Hr(r,o,t):r>0?(a=r-3*Gr,t[0]=a-Vr,t[1]=a-t[0]-Vr,3):(a=r+3*Gr,t[0]=a+Vr,t[1]=a-t[0]+Vr,-3):1075388923===o?Hr(r,o,t):r>0?(a=r-4*Gr,t[0]=a-Wr,t[1]=a-t[0]-Wr,4):(a=r+4*Gr,t[0]=a+Wr,t[1]=a-t[0]+Wr,-4);if(o<1094263291)return Hr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return W[0]=r,k[V]}(r),a=z(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)kr[u]=0|a,a=16777216*(a-kr[u]);for(kr[2]=a,i=3;0===kr[i-1];)i-=1;return f=Fr(kr,xr,e,i),r<0?(t[0]=-xr[0],t[1]=-xr[1],-f):(t[0]=xr[0],t[1]=xr[1],f)}var Yr=[0,0];return function(r){return(1+function(r){var t;if(t=F(r),(t&=2147483647)<=1072243195)return t<1044381696?1:T(r,0);if(t>=2146435072)return NaN;switch(3&Mr(r,Yr)){case 0:return T(Yr[0],Yr[1]);case 1:return-G(Yr[0],Yr[1]);case 2:return-T(Yr[0],Yr[1]);default:return G(Yr[0],Yr[1])}}(r))/2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).havercos=t();
//# sourceMappingURL=browser.js.map
