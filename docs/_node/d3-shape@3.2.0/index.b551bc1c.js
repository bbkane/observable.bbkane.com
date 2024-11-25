import{Path as $n}from"../d3-path@3.1.0/index.c2b3c473.js";function f(t){return function(){return t}}const Rt=Math.abs,w=Math.atan2,X=Math.cos,kn=Math.max,H=Math.min,A=Math.sin,d=Math.sqrt,S=1e-12,D=Math.PI,et=D/2,F=2*D;function wn(t){return t>1?0:t<-1?D:Math.acos(t)}function zt(t){return t>=1?et:t<=-1?-et:Math.asin(t)}function Z(t){let n=3;return t.digits=function(i){if(!arguments.length)return n;if(i==null)n=null;else{const e=Math.floor(i);if(!(e>=0))throw new RangeError(`invalid digits: ${i}`);n=e}return t},()=>new $n(n)}function Sn(t){return t.innerRadius}function Nn(t){return t.outerRadius}function En(t){return t.startAngle}function An(t){return t.endAngle}function Pn(t){return t&&t.padAngle}function Mn(t,n,i,e,h,o,a,s){var _=i-t,r=e-n,c=a-h,u=s-o,l=u*_-c*r;if(!(l*l<S))return l=(c*(n-o)-u*(t-h))/l,[t+l*_,n+l*r]}function st(t,n,i,e,h,o,a){var s=t-i,_=n-e,r=(a?o:-o)/d(s*s+_*_),c=r*_,u=-r*s,l=t+c,x=n+u,v=i+c,g=e+u,$=(l+v)/2,p=(x+g)/2,k=v-l,b=g-x,T=k*k+b*b,N=h-o,E=l*g-v*x,B=(b<0?-1:1)*d(kn(0,N*N*T-E*E)),q=(E*b-k*B)/T,Y=(-E*k-b*B)/T,R=(E*b+k*B)/T,P=(-E*k+b*B)/T,M=q-$,y=Y-p,m=R-$,L=P-p;return M*M+y*y>m*m+L*L&&(q=R,Y=P),{cx:q,cy:Y,x01:-c,y01:-u,x11:q*(h/N-1),y11:Y*(h/N-1)}}function Cn(){var t=Sn,n=Nn,i=f(0),e=null,h=En,o=An,a=Pn,s=null,_=Z(r);function r(){var c,u,l=+t.apply(this,arguments),x=+n.apply(this,arguments),v=h.apply(this,arguments)-et,g=o.apply(this,arguments)-et,$=Rt(g-v),p=g>v;if(s||(s=c=_()),x<l&&(u=x,x=l,l=u),!(x>S))s.moveTo(0,0);else if($>F-S)s.moveTo(x*X(v),x*A(v)),s.arc(0,0,x,v,g,!p),l>S&&(s.moveTo(l*X(g),l*A(g)),s.arc(0,0,l,g,v,p));else{var k=v,b=g,T=v,N=g,E=$,B=$,q=a.apply(this,arguments)/2,Y=q>S&&(e?+e.apply(this,arguments):d(l*l+x*x)),R=H(Rt(x-l)/2,+i.apply(this,arguments)),P=R,M=R,y,m;if(Y>S){var L=zt(Y/l*A(q)),K=zt(Y/x*A(q));(E-=L*2)>S?(L*=p?1:-1,T+=L,N-=L):(E=0,T=N=(v+g)/2),(B-=K*2)>S?(K*=p?1:-1,k+=K,b-=K):(B=0,k=b=(v+g)/2)}var W=x*X(k),j=x*A(k),J=l*X(N),tt=l*A(N);if(R>S){var nt=x*X(b),it=x*A(b),yt=l*X(T),xt=l*A(T),z;if($<D)if(z=Mn(W,j,yt,xt,nt,it,J,tt)){var pt=W-z[0],vt=j-z[1],mt=nt-z[0],gt=it-z[1],Ct=1/A(wn((pt*mt+vt*gt)/(d(pt*pt+vt*vt)*d(mt*mt+gt*gt)))/2),Ot=d(z[0]*z[0]+z[1]*z[1]);P=H(R,(l-Ot)/(Ct-1)),M=H(R,(x-Ot)/(Ct+1))}else P=M=0}B>S?M>S?(y=st(yt,xt,W,j,x,M,p),m=st(nt,it,J,tt,x,M,p),s.moveTo(y.cx+y.x01,y.cy+y.y01),M<R?s.arc(y.cx,y.cy,M,w(y.y01,y.x01),w(m.y01,m.x01),!p):(s.arc(y.cx,y.cy,M,w(y.y01,y.x01),w(y.y11,y.x11),!p),s.arc(0,0,x,w(y.cy+y.y11,y.cx+y.x11),w(m.cy+m.y11,m.cx+m.x11),!p),s.arc(m.cx,m.cy,M,w(m.y11,m.x11),w(m.y01,m.x01),!p))):(s.moveTo(W,j),s.arc(0,0,x,k,b,!p)):s.moveTo(W,j),!(l>S)||!(E>S)?s.lineTo(J,tt):P>S?(y=st(J,tt,nt,it,l,-P,p),m=st(W,j,yt,xt,l,-P,p),s.lineTo(y.cx+y.x01,y.cy+y.y01),P<R?s.arc(y.cx,y.cy,P,w(y.y01,y.x01),w(m.y01,m.x01),!p):(s.arc(y.cx,y.cy,P,w(y.y01,y.x01),w(y.y11,y.x11),!p),s.arc(0,0,l,w(y.cy+y.y11,y.cx+y.x11),w(m.cy+m.y11,m.cx+m.x11),p),s.arc(m.cx,m.cy,P,w(m.y11,m.x11),w(m.y01,m.x01),!p))):s.arc(0,0,l,N,T,p)}if(s.closePath(),c)return s=null,c+""||null}return r.centroid=function(){var c=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,u=(+h.apply(this,arguments)+ +o.apply(this,arguments))/2-D/2;return[X(u)*c,A(u)*c]},r.innerRadius=function(c){return arguments.length?(t=typeof c=="function"?c:f(+c),r):t},r.outerRadius=function(c){return arguments.length?(n=typeof c=="function"?c:f(+c),r):n},r.cornerRadius=function(c){return arguments.length?(i=typeof c=="function"?c:f(+c),r):i},r.padRadius=function(c){return arguments.length?(e=c==null?null:typeof c=="function"?c:f(+c),r):e},r.startAngle=function(c){return arguments.length?(h=typeof c=="function"?c:f(+c),r):h},r.endAngle=function(c){return arguments.length?(o=typeof c=="function"?c:f(+c),r):o},r.padAngle=function(c){return arguments.length?(a=typeof c=="function"?c:f(+c),r):a},r.context=function(c){return arguments.length?(s=c??null,r):s},r}var On=Array.prototype.slice;function ot(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Xt(t){this._context=t}Xt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);break}}};function ht(t){return new Xt(t)}function dt(t){return t[0]}function Tt(t){return t[1]}function bt(t,n){var i=f(!0),e=null,h=ht,o=null,a=Z(s);t=typeof t=="function"?t:t===void 0?dt:f(t),n=typeof n=="function"?n:n===void 0?Tt:f(n);function s(_){var r,c=(_=ot(_)).length,u,l=!1,x;for(e==null&&(o=h(x=a())),r=0;r<=c;++r)!(r<c&&i(u=_[r],r,_))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(u,r,_),+n(u,r,_));if(x)return o=null,x+""||null}return s.x=function(_){return arguments.length?(t=typeof _=="function"?_:f(+_),s):t},s.y=function(_){return arguments.length?(n=typeof _=="function"?_:f(+_),s):n},s.defined=function(_){return arguments.length?(i=typeof _=="function"?_:f(!!_),s):i},s.curve=function(_){return arguments.length?(h=_,e!=null&&(o=h(e)),s):h},s.context=function(_){return arguments.length?(_==null?e=o=null:o=h(e=_),s):e},s}function Bt(t,n,i){var e=null,h=f(!0),o=null,a=ht,s=null,_=Z(r);t=typeof t=="function"?t:t===void 0?dt:f(+t),n=typeof n=="function"?n:f(n===void 0?0:+n),i=typeof i=="function"?i:i===void 0?Tt:f(+i);function r(u){var l,x,v,g=(u=ot(u)).length,$,p=!1,k,b=new Array(g),T=new Array(g);for(o==null&&(s=a(k=_())),l=0;l<=g;++l){if(!(l<g&&h($=u[l],l,u))===p)if(p=!p)x=l,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),v=l-1;v>=x;--v)s.point(b[v],T[v]);s.lineEnd(),s.areaEnd()}p&&(b[l]=+t($,l,u),T[l]=+n($,l,u),s.point(e?+e($,l,u):b[l],i?+i($,l,u):T[l]))}if(k)return s=null,k+""||null}function c(){return bt().defined(h).curve(a).context(o)}return r.x=function(u){return arguments.length?(t=typeof u=="function"?u:f(+u),e=null,r):t},r.x0=function(u){return arguments.length?(t=typeof u=="function"?u:f(+u),r):t},r.x1=function(u){return arguments.length?(e=u==null?null:typeof u=="function"?u:f(+u),r):e},r.y=function(u){return arguments.length?(n=typeof u=="function"?u:f(+u),i=null,r):n},r.y0=function(u){return arguments.length?(n=typeof u=="function"?u:f(+u),r):n},r.y1=function(u){return arguments.length?(i=u==null?null:typeof u=="function"?u:f(+u),r):i},r.lineX0=r.lineY0=function(){return c().x(t).y(n)},r.lineY1=function(){return c().x(t).y(i)},r.lineX1=function(){return c().x(e).y(n)},r.defined=function(u){return arguments.length?(h=typeof u=="function"?u:f(!!u),r):h},r.curve=function(u){return arguments.length?(a=u,o!=null&&(s=a(o)),r):a},r.context=function(u){return arguments.length?(u==null?o=s=null:s=a(o=u),r):o},r}function Rn(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function zn(t){return t}function Xn(){var t=zn,n=Rn,i=null,e=f(0),h=f(F),o=f(0);function a(s){var _,r=(s=ot(s)).length,c,u,l=0,x=new Array(r),v=new Array(r),g=+e.apply(this,arguments),$=Math.min(F,Math.max(-F,h.apply(this,arguments)-g)),p,k=Math.min(Math.abs($)/r,o.apply(this,arguments)),b=k*($<0?-1:1),T;for(_=0;_<r;++_)(T=v[x[_]=_]=+t(s[_],_,s))>0&&(l+=T);for(n!=null?x.sort(function(N,E){return n(v[N],v[E])}):i!=null&&x.sort(function(N,E){return i(s[N],s[E])}),_=0,u=l?($-r*b)/l:0;_<r;++_,g=p)c=x[_],T=v[c],p=g+(T>0?T*u:0)+b,v[c]={data:s[c],index:_,value:T,startAngle:g,endAngle:p,padAngle:k};return v}return a.value=function(s){return arguments.length?(t=typeof s=="function"?s:f(+s),a):t},a.sortValues=function(s){return arguments.length?(n=s,i=null,a):n},a.sort=function(s){return arguments.length?(i=s,n=null,a):i},a.startAngle=function(s){return arguments.length?(e=typeof s=="function"?s:f(+s),a):e},a.endAngle=function(s){return arguments.length?(h=typeof s=="function"?s:f(+s),a):h},a.padAngle=function(s){return arguments.length?(o=typeof s=="function"?s:f(+s),a):o},a}var qt=$t(ht);function Yt(t){this._curve=t}Yt.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};function $t(t){function n(i){return new Yt(t(i))}return n._curve=t,n}function Q(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(i){return arguments.length?n($t(i)):n()._curve},t}function Dt(){return Q(bt().curve(qt))}function Ft(){var t=Bt().curve(qt),n=t.curve,i=t.lineX0,e=t.lineX1,h=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Q(i())},delete t.lineX0,t.lineEndAngle=function(){return Q(e())},delete t.lineX1,t.lineInnerRadius=function(){return Q(h())},delete t.lineY0,t.lineOuterRadius=function(){return Q(o())},delete t.lineY1,t.curve=function(a){return arguments.length?n($t(a)):n()._curve},t}function U(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}let It=class{constructor(n,i){this._context=n,this._x=i}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,i){switch(n=+n,i=+i,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,i):this._context.moveTo(n,i);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,i,n,i):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+i)/2,n,this._y0,n,i);break}}this._x0=n,this._y0=i}},Bn=class{constructor(n){this._context=n}lineStart(){this._point=0}lineEnd(){}point(n,i){if(n=+n,i=+i,this._point===0)this._point=1;else{const e=U(this._x0,this._y0),h=U(this._x0,this._y0=(this._y0+i)/2),o=U(n,this._y0),a=U(n,i);this._context.moveTo(...e),this._context.bezierCurveTo(...h,...o,...a)}this._x0=n,this._y0=i}};function Lt(t){return new It(t,!0)}function Wt(t){return new It(t,!1)}function qn(t){return new Bn(t)}function Yn(t){return t.source}function Dn(t){return t.target}function at(t){let n=Yn,i=Dn,e=dt,h=Tt,o=null,a=null,s=Z(_);function _(){let r;const c=On.call(arguments),u=n.apply(this,c),l=i.apply(this,c);if(o==null&&(a=t(r=s())),a.lineStart(),c[0]=u,a.point(+e.apply(this,c),+h.apply(this,c)),c[0]=l,a.point(+e.apply(this,c),+h.apply(this,c)),a.lineEnd(),r)return a=null,r+""||null}return _.source=function(r){return arguments.length?(n=r,_):n},_.target=function(r){return arguments.length?(i=r,_):i},_.x=function(r){return arguments.length?(e=typeof r=="function"?r:f(+r),_):e},_.y=function(r){return arguments.length?(h=typeof r=="function"?r:f(+r),_):h},_.context=function(r){return arguments.length?(r==null?o=a=null:a=t(o=r),_):o},_}function Fn(){return at(Lt)}function In(){return at(Wt)}function Ln(){const t=at(qn);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}const Wn=d(3);var jt={draw(t,n){const i=d(n+H(n/28,.75))*.59436,e=i/2,h=e*Wn;t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-h,-e),t.lineTo(h,e),t.moveTo(-h,e),t.lineTo(h,-e)}},rt={draw(t,n){const i=d(n/D);t.moveTo(i,0),t.arc(0,0,i,0,F)}},Ht={draw(t,n){const i=d(n/5)/2;t.moveTo(-3*i,-i),t.lineTo(-i,-i),t.lineTo(-i,-3*i),t.lineTo(i,-3*i),t.lineTo(i,-i),t.lineTo(3*i,-i),t.lineTo(3*i,i),t.lineTo(i,i),t.lineTo(i,3*i),t.lineTo(-i,3*i),t.lineTo(-i,i),t.lineTo(-3*i,i),t.closePath()}};const Vt=d(1/3),jn=Vt*2;var Gt={draw(t,n){const i=d(n/jn),e=i*Vt;t.moveTo(0,-i),t.lineTo(e,0),t.lineTo(0,i),t.lineTo(-e,0),t.closePath()}},Zt={draw(t,n){const i=d(n)*.62625;t.moveTo(0,-i),t.lineTo(i,0),t.lineTo(0,i),t.lineTo(-i,0),t.closePath()}},Qt={draw(t,n){const i=d(n-H(n/7,2))*.87559;t.moveTo(-i,0),t.lineTo(i,0),t.moveTo(0,i),t.lineTo(0,-i)}},Ut={draw(t,n){const i=d(n),e=-i/2;t.rect(e,e,i,i)}},Kt={draw(t,n){const i=d(n)*.4431;t.moveTo(i,i),t.lineTo(i,-i),t.lineTo(-i,-i),t.lineTo(-i,i),t.closePath()}};const Hn=.8908130915292852,Jt=A(D/10)/A(7*D/10),Vn=A(F/10)*Jt,Gn=-X(F/10)*Jt;var tn={draw(t,n){const i=d(n*Hn),e=Vn*i,h=Gn*i;t.moveTo(0,-i),t.lineTo(e,h);for(let o=1;o<5;++o){const a=F*o/5,s=X(a),_=A(a);t.lineTo(_*i,-s*i),t.lineTo(s*e-_*h,_*e+s*h)}t.closePath()}};const kt=d(3);var nn={draw(t,n){const i=-d(n/(kt*3));t.moveTo(0,i*2),t.lineTo(-kt*i,-i),t.lineTo(kt*i,-i),t.closePath()}};const Zn=d(3);var en={draw(t,n){const i=d(n)*.6824,e=i/2,h=i*Zn/2;t.moveTo(0,-i),t.lineTo(h,e),t.lineTo(-h,e),t.closePath()}};const C=-.5,O=d(3)/2,wt=1/d(12),Qn=(wt/2+1)*3;var sn={draw(t,n){const i=d(n/Qn),e=i/2,h=i*wt,o=e,a=i*wt+i,s=-o,_=a;t.moveTo(e,h),t.lineTo(o,a),t.lineTo(s,_),t.lineTo(C*e-O*h,O*e+C*h),t.lineTo(C*o-O*a,O*o+C*a),t.lineTo(C*s-O*_,O*s+C*_),t.lineTo(C*e+O*h,C*h-O*e),t.lineTo(C*o+O*a,C*a-O*o),t.lineTo(C*s+O*_,C*_-O*s),t.closePath()}},St={draw(t,n){const i=d(n-H(n/6,1.7))*.6189;t.moveTo(-i,-i),t.lineTo(i,i),t.moveTo(-i,i),t.lineTo(i,-i)}};const on=[rt,Ht,Gt,Ut,tn,nn,sn],Un=[rt,Qt,St,en,jt,Kt,Zt];function Kn(t,n){let i=null,e=Z(h);t=typeof t=="function"?t:f(t||rt),n=typeof n=="function"?n:f(n===void 0?64:+n);function h(){let o;if(i||(i=o=e()),t.apply(this,arguments).draw(i,+n.apply(this,arguments)),o)return i=null,o+""||null}return h.type=function(o){return arguments.length?(t=typeof o=="function"?o:f(o),h):t},h.size=function(o){return arguments.length?(n=typeof o=="function"?o:f(+o),h):n},h.context=function(o){return arguments.length?(i=o??null,h):i},h}function I(){}function _t(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function ct(t){this._context=t}ct.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:_t(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:_t(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function Jn(t){return new ct(t)}function hn(t){this._context=t}hn.prototype={areaStart:I,areaEnd:I,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:_t(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function ti(t){return new hn(t)}function an(t){this._context=t}an.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var i=(this._x0+4*this._x1+t)/6,e=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(i,e):this._context.moveTo(i,e);break;case 3:this._point=4;default:_t(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function ni(t){return new an(t)}function rn(t,n){this._basis=new ct(t),this._beta=n}rn.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,i=t.length-1;if(i>0)for(var e=t[0],h=n[0],o=t[i]-e,a=n[i]-h,s=-1,_;++s<=i;)_=s/i,this._basis.point(this._beta*t[s]+(1-this._beta)*(e+_*o),this._beta*n[s]+(1-this._beta)*(h+_*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var ii=function t(n){function i(e){return n===1?new ct(e):new rn(e,n)}return i.beta=function(e){return t(+e)},i}(.85);function ut(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function Nt(t,n){this._context=t,this._k=(1-n)/6}Nt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ut(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:ut(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ei=function t(n){function i(e){return new Nt(e,n)}return i.tension=function(e){return t(+e)},i}(0);function Et(t,n){this._context=t,this._k=(1-n)/6}Et.prototype={areaStart:I,areaEnd:I,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:ut(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var si=function t(n){function i(e){return new Et(e,n)}return i.tension=function(e){return t(+e)},i}(0);function At(t,n){this._context=t,this._k=(1-n)/6}At.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ut(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var oi=function t(n){function i(e){return new At(e,n)}return i.tension=function(e){return t(+e)},i}(0);function Pt(t,n,i){var e=t._x1,h=t._y1,o=t._x2,a=t._y2;if(t._l01_a>S){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,_=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/_,h=(h*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/_}if(t._l23_a>S){var r=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,c=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*r+t._x1*t._l23_2a-n*t._l12_2a)/c,a=(a*r+t._y1*t._l23_2a-i*t._l12_2a)/c}t._context.bezierCurveTo(e,h,o,a,t._x2,t._y2)}function _n(t,n){this._context=t,this._alpha=n}_n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:Pt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var hi=function t(n){function i(e){return n?new _n(e,n):new Nt(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function cn(t,n){this._context=t,this._alpha=n}cn.prototype={areaStart:I,areaEnd:I,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Pt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ai=function t(n){function i(e){return n?new cn(e,n):new Et(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function un(t,n){this._context=t,this._alpha=n}un.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Pt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ri=function t(n){function i(e){return n?new un(e,n):new At(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function ln(t){this._context=t}ln.prototype={areaStart:I,areaEnd:I,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};function _i(t){return new ln(t)}function fn(t){return t<0?-1:1}function yn(t,n,i){var e=t._x1-t._x0,h=n-t._x1,o=(t._y1-t._y0)/(e||h<0&&-0),a=(i-t._y1)/(h||e<0&&-0),s=(o*h+a*e)/(e+h);return(fn(o)+fn(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(s))||0}function xn(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function Mt(t,n,i){var e=t._x0,h=t._y0,o=t._x1,a=t._y1,s=(o-e)/3;t._context.bezierCurveTo(e+s,h+s*n,o-s,a-s*i,o,a)}function lt(t){this._context=t}lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Mt(this,this._t0,xn(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(t=+t,n=+n,!(t===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,Mt(this,xn(this,i=yn(this,t,n)),i);break;default:Mt(this,this._t0,i=yn(this,t,n));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}};function pn(t){this._context=new vn(t)}(pn.prototype=Object.create(lt.prototype)).point=function(t,n){lt.prototype.point.call(this,n,t)};function vn(t){this._context=t}vn.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,h,o){this._context.bezierCurveTo(n,t,e,i,o,h)}};function ci(t){return new lt(t)}function ui(t){return new pn(t)}function mn(t){this._context=t}mn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),i===2)this._context.lineTo(t[1],n[1]);else for(var e=gn(t),h=gn(n),o=0,a=1;a<i;++o,++a)this._context.bezierCurveTo(e[0][o],h[0][o],e[1][o],h[1][o],t[a],n[a]);(this._line||this._line!==0&&i===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};function gn(t){var n,i=t.length-1,e,h=new Array(i),o=new Array(i),a=new Array(i);for(h[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<i-1;++n)h[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(h[i-1]=2,o[i-1]=7,a[i-1]=8*t[i-1]+t[i],n=1;n<i;++n)e=h[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(h[i-1]=a[i-1]/o[i-1],n=i-2;n>=0;--n)h[n]=(a[n]-h[n+1])/o[n];for(o[i-1]=(t[i]+h[i-1])/2,n=0;n<i-1;++n)o[n]=2*t[n+1]-h[n+1];return[h,o]}function li(t){return new mn(t)}function ft(t,n){this._context=t,this._t=n}ft.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,n)}break}}this._x=t,this._y=n}};function fi(t){return new ft(t,.5)}function yi(t){return new ft(t,0)}function xi(t){return new ft(t,1)}function V(t,n){if((a=t.length)>1)for(var i=1,e,h,o=t[n[0]],a,s=o.length;i<a;++i)for(h=o,o=t[n[i]],e=0;e<s;++e)o[e][1]+=o[e][0]=isNaN(h[e][1])?h[e][0]:h[e][1]}function G(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n;return i}function pi(t,n){return t[n]}function vi(t){const n=[];return n.key=t,n}function mi(){var t=f([]),n=G,i=V,e=pi;function h(o){var a=Array.from(t.apply(this,arguments),vi),s,_=a.length,r=-1,c;for(const u of o)for(s=0,++r;s<_;++s)(a[s][r]=[0,+e(u,a[s].key,r,o)]).data=u;for(s=0,c=ot(n(a));s<_;++s)a[c[s]].index=s;return i(a,c),a}return h.keys=function(o){return arguments.length?(t=typeof o=="function"?o:f(Array.from(o)),h):t},h.value=function(o){return arguments.length?(e=typeof o=="function"?o:f(+o),h):e},h.order=function(o){return arguments.length?(n=o==null?G:typeof o=="function"?o:f(Array.from(o)),h):n},h.offset=function(o){return arguments.length?(i=o??V,h):i},h}function gi(t,n){if((e=t.length)>0){for(var i,e,h=0,o=t[0].length,a;h<o;++h){for(a=i=0;i<e;++i)a+=t[i][h][1]||0;if(a)for(i=0;i<e;++i)t[i][h][1]/=a}V(t,n)}}function di(t,n){if((_=t.length)>0)for(var i,e=0,h,o,a,s,_,r=t[n[0]].length;e<r;++e)for(a=s=0,i=0;i<_;++i)(o=(h=t[n[i]][e])[1]-h[0])>0?(h[0]=a,h[1]=a+=o):o<0?(h[1]=s,h[0]=s+=o):(h[0]=0,h[1]=o)}function Ti(t,n){if((h=t.length)>0){for(var i=0,e=t[n[0]],h,o=e.length;i<o;++i){for(var a=0,s=0;a<h;++a)s+=t[a][i][1]||0;e[i][1]+=e[i][0]=-s/2}V(t,n)}}function bi(t,n){if(!(!((a=t.length)>0)||!((o=(h=t[n[0]]).length)>0))){for(var i=0,e=1,h,o,a;e<o;++e){for(var s=0,_=0,r=0;s<a;++s){for(var c=t[n[s]],u=c[e][1]||0,l=c[e-1][1]||0,x=(u-l)/2,v=0;v<s;++v){var g=t[n[v]],$=g[e][1]||0,p=g[e-1][1]||0;x+=$-p}_+=u,r+=x*u}h[e-1][1]+=h[e-1][0]=i,_&&(i-=r/_)}h[e-1][1]+=h[e-1][0]=i,V(t,n)}}function dn(t){var n=t.map($i);return G(t).sort(function(i,e){return n[i]-n[e]})}function $i(t){for(var n=-1,i=0,e=t.length,h,o=-1/0;++n<e;)(h=+t[n][1])>o&&(o=h,i=n);return i}function Tn(t){var n=t.map(bn);return G(t).sort(function(i,e){return n[i]-n[e]})}function bn(t){for(var n=0,i=-1,e=t.length,h;++i<e;)(h=+t[i][1])&&(n+=h);return n}function ki(t){return Tn(t).reverse()}function wi(t){var n=t.length,i,e,h=t.map(bn),o=dn(t),a=0,s=0,_=[],r=[];for(i=0;i<n;++i)e=o[i],a<s?(a+=h[e],_.push(e)):(s+=h[e],r.push(e));return r.reverse().concat(_)}function Si(t){return G(t).reverse()}export{Cn as arc,Bt as area,Ft as areaRadial,Jn as curveBasis,ti as curveBasisClosed,ni as curveBasisOpen,Lt as curveBumpX,Wt as curveBumpY,ii as curveBundle,ei as curveCardinal,si as curveCardinalClosed,oi as curveCardinalOpen,hi as curveCatmullRom,ai as curveCatmullRomClosed,ri as curveCatmullRomOpen,ht as curveLinear,_i as curveLinearClosed,ci as curveMonotoneX,ui as curveMonotoneY,li as curveNatural,fi as curveStep,xi as curveStepAfter,yi as curveStepBefore,bt as line,Dt as lineRadial,at as link,Fn as linkHorizontal,Ln as linkRadial,In as linkVertical,Xn as pie,U as pointRadial,Ft as radialArea,Dt as radialLine,mi as stack,di as stackOffsetDiverging,gi as stackOffsetExpand,V as stackOffsetNone,Ti as stackOffsetSilhouette,bi as stackOffsetWiggle,dn as stackOrderAppearance,Tn as stackOrderAscending,ki as stackOrderDescending,wi as stackOrderInsideOut,G as stackOrderNone,Si as stackOrderReverse,Kn as symbol,jt as symbolAsterisk,rt as symbolCircle,Ht as symbolCross,Gt as symbolDiamond,Zt as symbolDiamond2,Qt as symbolPlus,Ut as symbolSquare,Kt as symbolSquare2,tn as symbolStar,St as symbolTimes,nn as symbolTriangle,en as symbolTriangle2,sn as symbolWye,St as symbolX,on as symbols,on as symbolsFill,Un as symbolsStroke};
