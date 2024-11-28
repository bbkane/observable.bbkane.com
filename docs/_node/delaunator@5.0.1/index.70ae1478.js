import{orient2d as N}from"../robust-predicates@3.0.2/index.bdc459cc.js";const G=Math.pow(2,-52),j=new Uint32Array(512);class D{static from(t,s=X,n=W){const a=t.length,e=new Float64Array(a*2);for(let i=0;i<a;i++){const l=t[i];e[2*i]=s(l),e[2*i+1]=n(l)}return new D(e)}constructor(t){const s=t.length>>1;if(s>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const n=Math.max(2*s-5,0);this._triangles=new Uint32Array(n*3),this._halfedges=new Int32Array(n*3),this._hashSize=Math.ceil(Math.sqrt(s)),this._hullPrev=new Uint32Array(s),this._hullNext=new Uint32Array(s),this._hullTri=new Uint32Array(s),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(s),this._dists=new Float64Array(s),this.update()}update(){const{coords:t,_hullPrev:s,_hullNext:n,_hullTri:a,_hullHash:e}=this,i=t.length>>1;let l=1/0,u=1/0,g=-1/0,A=-1/0;for(let r=0;r<i;r++){const f=t[2*r],_=t[2*r+1];f<l&&(l=f),_<u&&(u=_),f>g&&(g=f),_>A&&(A=_),this._ids[r]=r}const b=(l+g)/2,k=(u+A)/2;let o,d,y;for(let r=0,f=1/0;r<i;r++){const _=C(b,k,t[2*r],t[2*r+1]);_<f&&(o=r,f=_)}const U=t[2*o],p=t[2*o+1];for(let r=0,f=1/0;r<i;r++){if(r===o)continue;const _=C(U,p,t[2*r],t[2*r+1]);_<f&&_>0&&(d=r,f=_)}let x=t[2*d],L=t[2*d+1],q=1/0;for(let r=0;r<i;r++){if(r===o||r===d)continue;const f=R(U,p,x,L,t[2*r],t[2*r+1]);f<q&&(y=r,q=f)}let P=t[2*y],E=t[2*y+1];if(q===1/0){for(let _=0;_<i;_++)this._dists[_]=t[2*_]-t[0]||t[2*_+1]-t[1];v(this._ids,this._dists,0,i-1);const r=new Uint32Array(i);let f=0;for(let _=0,w=-1/0;_<i;_++){const m=this._ids[_],z=this._dists[m];z>w&&(r[f++]=m,w=z)}this.hull=r.subarray(0,f),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(N(U,p,x,L,P,E)<0){const r=d,f=x,_=L;d=y,x=P,L=E,y=r,P=f,E=_}const I=V(U,p,x,L,P,E);this._cx=I.x,this._cy=I.y;for(let r=0;r<i;r++)this._dists[r]=C(t[2*r],t[2*r+1],I.x,I.y);v(this._ids,this._dists,0,i-1),this._hullStart=o;let F=3;n[o]=s[y]=d,n[d]=s[o]=y,n[y]=s[d]=o,a[o]=0,a[d]=1,a[y]=2,e.fill(-1),e[this._hashKey(U,p)]=o,e[this._hashKey(x,L)]=d,e[this._hashKey(P,E)]=y,this.trianglesLen=0,this._addTriangle(o,d,y,-1,-1,-1);for(let r=0,f,_;r<this._ids.length;r++){const w=this._ids[r],m=t[2*w],z=t[2*w+1];if(r>0&&Math.abs(m-f)<=G&&Math.abs(z-_)<=G||(f=m,_=z,w===o||w===d||w===y))continue;let T=0;for(let B=0,J=this._hashKey(m,z);B<this._hashSize&&(T=e[(J+B)%this._hashSize],!(T!==-1&&T!==n[T]));B++);T=s[T];let c=T,S;for(;S=n[c],N(m,z,t[2*c],t[2*c+1],t[2*S],t[2*S+1])>=0;)if(c=S,c===T){c=-1;break}if(c===-1)continue;let K=this._addTriangle(c,w,n[c],-1,-1,a[c]);a[w]=this._legalize(K+2),a[c]=K,F++;let M=n[c];for(;S=n[M],N(m,z,t[2*M],t[2*M+1],t[2*S],t[2*S+1])<0;)K=this._addTriangle(M,w,S,a[w],-1,a[M]),a[w]=this._legalize(K+2),n[M]=M,F--,M=S;if(c===T)for(;S=s[c],N(m,z,t[2*S],t[2*S+1],t[2*c],t[2*c+1])<0;)K=this._addTriangle(S,w,c,-1,a[c],a[S]),this._legalize(K+2),a[S]=K,n[c]=c,F--,c=S;this._hullStart=s[w]=c,n[c]=s[M]=w,n[w]=M,e[this._hashKey(m,z)]=w,e[this._hashKey(t[2*c],t[2*c+1])]=c}this.hull=new Uint32Array(F);for(let r=0,f=this._hullStart;r<F;r++)this.hull[r]=f,f=n[f];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,s){return Math.floor(O(t-this._cx,s-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:s,_halfedges:n,coords:a}=this;let e=0,i=0;for(;;){const l=n[t],u=t-t%3;if(i=u+(t+2)%3,l===-1){if(e===0)break;t=j[--e];continue}const g=l-l%3,A=u+(t+1)%3,b=g+(l+2)%3,k=s[i],o=s[t],d=s[A],y=s[b];if(Q(a[2*k],a[2*k+1],a[2*o],a[2*o+1],a[2*d],a[2*d+1],a[2*y],a[2*y+1])){s[t]=y,s[l]=k;const U=n[b];if(U===-1){let x=this._hullStart;do{if(this._hullTri[x]===b){this._hullTri[x]=t;break}x=this._hullPrev[x]}while(x!==this._hullStart)}this._link(t,U),this._link(l,n[i]),this._link(i,b);const p=g+(l+1)%3;e<j.length&&(j[e++]=p)}else{if(e===0)break;t=j[--e]}}return i}_link(t,s){this._halfedges[t]=s,s!==-1&&(this._halfedges[s]=t)}_addTriangle(t,s,n,a,e,i){const l=this.trianglesLen;return this._triangles[l]=t,this._triangles[l+1]=s,this._triangles[l+2]=n,this._link(l,a),this._link(l+1,e),this._link(l+2,i),this.trianglesLen+=3,l}}function O(h,t){const s=h/(Math.abs(h)+Math.abs(t));return(t>0?3-s:1+s)/4}function C(h,t,s,n){const a=h-s,e=t-n;return a*a+e*e}function Q(h,t,s,n,a,e,i,l){const u=h-i,g=t-l,A=s-i,b=n-l,k=a-i,o=e-l,d=u*u+g*g,y=A*A+b*b,U=k*k+o*o;return u*(b*U-y*o)-g*(A*U-y*k)+d*(A*o-b*k)<0}function R(h,t,s,n,a,e){const i=s-h,l=n-t,u=a-h,g=e-t,A=i*i+l*l,b=u*u+g*g,k=.5/(i*g-l*u),o=(g*A-l*b)*k,d=(i*b-u*A)*k;return o*o+d*d}function V(h,t,s,n,a,e){const i=s-h,l=n-t,u=a-h,g=e-t,A=i*i+l*l,b=u*u+g*g,k=.5/(i*g-l*u),o=h+(g*A-l*b)*k,d=t+(i*b-u*A)*k;return{x:o,y:d}}function v(h,t,s,n){if(n-s<=20)for(let a=s+1;a<=n;a++){const e=h[a],i=t[e];let l=a-1;for(;l>=s&&t[h[l]]>i;)h[l+1]=h[l--];h[l+1]=e}else{const a=s+n>>1;let e=s+1,i=n;H(h,a,e),t[h[s]]>t[h[n]]&&H(h,s,n),t[h[e]]>t[h[n]]&&H(h,e,n),t[h[s]]>t[h[e]]&&H(h,s,e);const l=h[e],u=t[l];for(;;){do e++;while(t[h[e]]<u);do i--;while(t[h[i]]>u);if(i<e)break;H(h,e,i)}h[s+1]=h[i],h[i]=l,n-e+1>=i-s?(v(h,t,e,n),v(h,t,s,i-1)):(v(h,t,s,i-1),v(h,t,e,n))}}function H(h,t,s){const n=h[t];h[t]=h[s],h[s]=n}function X(h){return h[0]}function W(h){return h[1]}export{D as default};