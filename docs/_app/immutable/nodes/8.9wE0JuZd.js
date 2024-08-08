import{s as fe,o as Rt,p as le,e as l,a as o,H as E,t as L,c as p,y as d,g as c,b as h,z as H,f as e,d as M,r,i as s,h as T}from"../chunks/scheduler.CnFf9BV0.js";import{S as ke,i as _e,b as St,d as Gt,m as It,a as zt,t as Ot,e as Dt}from"../chunks/index._WJlIO9N.js";import{g as ve,a as he}from"../chunks/spread.CgU5AtxT.js";import{L as ge}from"../chunks/layout.DJ7hEGt9.js";import{A as pe}from"../chunks/A.j9Z-Uq3G.js";function xe(k){let n;return{c(){n=L("Rollup")},l(u){n=M(u,"Rollup")},m(u,m){s(u,n,m)},d(u){u&&e(n)}}}function $e(k){let n;return{c(){n=L("localhost:5173")},l(u){n=M(u,"localhost:5173")},m(u,m){s(u,n,m)},d(u){u&&e(n)}}}function we(k){let n,u='Installation<a class="header-anchor" aria-hidden="true" href="#installation">#</a>',m,f,i,P='<code class="language-undefined">npm install svelte-gantt</code>',j,R,qt="Use ES6 imports in your code:",Z,S,tt,oe=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SvelteGantt<span class="token punctuation">,</span> SvelteGanttTable <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-gantt'</span><span class="token punctuation">;</span></code>`,et,G,At="or use the IIFE build:",at,I,st,ce='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>node_modules/svelte-gantt/index.iife.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>',nt,w,Bt="<li>Initialize svelte-gantt:</li>",lt,z,pt,ue=`<code class="language-js"><span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">/* ... */</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> gantt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SvelteGantt</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token comment">// target a DOM element</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'example-gantt'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// svelte-gantt options</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> options
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ot,O,Nt="..or run the example by opening <em>./public/index.html</em>",ct,g,Ut='Usage with svelte<a class="header-anchor" aria-hidden="true" href="#usage-with-svelte">#</a>',ut,D,Yt="To use svelte components import from <code>svelte-gantt/svelte</code>:",it,q,rt,ie=`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SvelteGantt<span class="token punctuation">,</span> SvelteGanttTable<span class="token punctuation">,</span> MomentSvelteGanttDateAdapter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-gantt/svelte'</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">//</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>SvelteGantt <span class="token punctuation">&#123;</span><span class="token operator">...</span>options<span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>SvelteGantt<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></code>`,dt,x,Ft='Development build<a class="header-anchor" aria-hidden="true" href="#development-build">#</a>',mt,A,Jt=`If you want to build from sources:
Install the dependencies…`,ft,B,kt,re=`<code class="language-bash"><span class="token builtin class-name">cd</span> svelte-gantt
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> demo
<span class="token function">npm</span> <span class="token function">install</span></code>`,_t,_,Ht,J,Kt="cd ..",Tt,b,Lt,vt,N,ht,de='<code class="language-bash"><span class="token function">npm</span> run demo:dev</code>',gt,v,Mt,C,Pt,K,Qt="src",jt,xt,$,Vt='Build the package<a class="header-anchor" aria-hidden="true" href="#build-the-package">#</a>',$t,U,Wt="To build the package yourself:",wt,Y,Xt="<li>Clone or download repository.</li> <li>Run the package build:</li>",bt,F,Ct,me=`<code class="language-undefined">npm install
npm run package</code>`,yt,y,Zt="<li>The package is built in <em>./dist</em></li>",Et;return b=new pe({props:{href:"https://rollupjs.org",rel:"nofollow",$$slots:{default:[xe]},$$scope:{ctx:k}}}),C=new pe({props:{href:"http://localhost:5173/",rel:"nofollow",$$slots:{default:[$e]},$$scope:{ctx:k}}}),{c(){n=l("h1"),n.innerHTML=u,m=o(),f=l("pre"),i=new E(!1),j=o(),R=l("p"),R.textContent=qt,Z=o(),S=l("pre"),tt=new E(!1),et=o(),G=l("p"),G.textContent=At,at=o(),I=l("pre"),st=new E(!1),nt=o(),w=l("ol"),w.innerHTML=Bt,lt=o(),z=l("pre"),pt=new E(!1),ot=o(),O=l("p"),O.innerHTML=Nt,ct=o(),g=l("h1"),g.innerHTML=Ut,ut=o(),D=l("p"),D.innerHTML=Yt,it=o(),q=l("pre"),rt=new E(!1),dt=o(),x=l("h1"),x.innerHTML=Ft,mt=o(),A=l("p"),A.textContent=Jt,ft=o(),B=l("pre"),kt=new E(!1),_t=o(),_=l("p"),Ht=L("…then in the project root ("),J=l("code"),J.textContent=Kt,Tt=L(") start "),St(b.$$.fragment),Lt=L(":"),vt=o(),N=l("pre"),ht=new E(!1),gt=o(),v=l("p"),Mt=L("Navigate to "),St(C.$$.fragment),Pt=L(". You should see your app running. Edit a component file in "),K=l("code"),K.textContent=Qt,jt=L(", save it, and reload the page to see your changes."),xt=o(),$=l("h2"),$.innerHTML=Vt,$t=o(),U=l("p"),U.textContent=Wt,wt=o(),Y=l("ol"),Y.innerHTML=Xt,bt=o(),F=l("pre"),Ct=new E(!1),yt=o(),y=l("ol"),y.innerHTML=Zt,this.h()},l(t){n=p(t,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),d(n)!=="svelte-1jis1gc"&&(n.innerHTML=u),m=c(t),f=p(t,"PRE",{class:!0});var a=h(f);i=H(a,!1),a.forEach(e),j=c(t),R=p(t,"P",{"data-svelte-h":!0}),d(R)!=="svelte-jv4cco"&&(R.textContent=qt),Z=c(t),S=p(t,"PRE",{class:!0});var W=h(S);tt=H(W,!1),W.forEach(e),et=c(t),G=p(t,"P",{"data-svelte-h":!0}),d(G)!=="svelte-qu7946"&&(G.textContent=At),at=c(t),I=p(t,"PRE",{class:!0});var X=h(I);st=H(X,!1),X.forEach(e),nt=c(t),w=p(t,"OL",{start:!0,"data-svelte-h":!0}),d(w)!=="svelte-uiw41d"&&(w.innerHTML=Bt),lt=c(t),z=p(t,"PRE",{class:!0});var te=h(z);pt=H(te,!1),te.forEach(e),ot=c(t),O=p(t,"P",{"data-svelte-h":!0}),d(O)!=="svelte-e0vh4f"&&(O.innerHTML=Nt),ct=c(t),g=p(t,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),d(g)!=="svelte-1o8atb4"&&(g.innerHTML=Ut),ut=c(t),D=p(t,"P",{"data-svelte-h":!0}),d(D)!=="svelte-1tp6tmz"&&(D.innerHTML=Yt),it=c(t),q=p(t,"PRE",{class:!0});var ee=h(q);rt=H(ee,!1),ee.forEach(e),dt=c(t),x=p(t,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),d(x)!=="svelte-vdkha5"&&(x.innerHTML=Ft),mt=c(t),A=p(t,"P",{"data-svelte-h":!0}),d(A)!=="svelte-1tz23hc"&&(A.textContent=Jt),ft=c(t),B=p(t,"PRE",{class:!0});var ae=h(B);kt=H(ae,!1),ae.forEach(e),_t=c(t),_=p(t,"P",{});var Q=h(_);Ht=M(Q,"…then in the project root ("),J=p(Q,"CODE",{"data-svelte-h":!0}),d(J)!=="svelte-c6eert"&&(J.textContent=Kt),Tt=M(Q,") start "),Gt(b.$$.fragment,Q),Lt=M(Q,":"),Q.forEach(e),vt=c(t),N=p(t,"PRE",{class:!0});var se=h(N);ht=H(se,!1),se.forEach(e),gt=c(t),v=p(t,"P",{});var V=h(v);Mt=M(V,"Navigate to "),Gt(C.$$.fragment,V),Pt=M(V,". You should see your app running. Edit a component file in "),K=p(V,"CODE",{"data-svelte-h":!0}),d(K)!=="svelte-1fkgjes"&&(K.textContent=Qt),jt=M(V,", save it, and reload the page to see your changes."),V.forEach(e),xt=c(t),$=p(t,"H2",{id:!0,tabindex:!0,"data-svelte-h":!0}),d($)!=="svelte-3d5fmz"&&($.innerHTML=Vt),$t=c(t),U=p(t,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1468c7d"&&(U.textContent=Wt),wt=c(t),Y=p(t,"OL",{"data-svelte-h":!0}),d(Y)!=="svelte-6y6xe8"&&(Y.innerHTML=Xt),bt=c(t),F=p(t,"PRE",{class:!0});var ne=h(F);Ct=H(ne,!1),ne.forEach(e),yt=c(t),y=p(t,"OL",{start:!0,"data-svelte-h":!0}),d(y)!=="svelte-16zbp9d"&&(y.innerHTML=Zt),this.h()},h(){r(n,"id","installation"),r(n,"tabindex","-1"),i.a=null,r(f,"class","language-undefined"),tt.a=null,r(S,"class","language-js"),st.a=null,r(I,"class","language-html"),r(w,"start","3"),pt.a=null,r(z,"class","language-js"),r(g,"id","usage-with-svelte"),r(g,"tabindex","-1"),rt.a=null,r(q,"class","language-js"),r(x,"id","development-build"),r(x,"tabindex","-1"),kt.a=null,r(B,"class","language-bash"),ht.a=null,r(N,"class","language-bash"),r($,"id","build-the-package"),r($,"tabindex","-1"),Ct.a=null,r(F,"class","language-undefined"),r(y,"start","3")},m(t,a){s(t,n,a),s(t,m,a),s(t,f,a),i.m(P,f),s(t,j,a),s(t,R,a),s(t,Z,a),s(t,S,a),tt.m(oe,S),s(t,et,a),s(t,G,a),s(t,at,a),s(t,I,a),st.m(ce,I),s(t,nt,a),s(t,w,a),s(t,lt,a),s(t,z,a),pt.m(ue,z),s(t,ot,a),s(t,O,a),s(t,ct,a),s(t,g,a),s(t,ut,a),s(t,D,a),s(t,it,a),s(t,q,a),rt.m(ie,q),s(t,dt,a),s(t,x,a),s(t,mt,a),s(t,A,a),s(t,ft,a),s(t,B,a),kt.m(re,B),s(t,_t,a),s(t,_,a),T(_,Ht),T(_,J),T(_,Tt),It(b,_,null),T(_,Lt),s(t,vt,a),s(t,N,a),ht.m(de,N),s(t,gt,a),s(t,v,a),T(v,Mt),It(C,v,null),T(v,Pt),T(v,K),T(v,jt),s(t,xt,a),s(t,$,a),s(t,$t,a),s(t,U,a),s(t,wt,a),s(t,Y,a),s(t,bt,a),s(t,F,a),Ct.m(me,F),s(t,yt,a),s(t,y,a),Et=!0},p(t,a){const W={};a&2&&(W.$$scope={dirty:a,ctx:t}),b.$set(W);const X={};a&2&&(X.$$scope={dirty:a,ctx:t}),C.$set(X)},i(t){Et||(zt(b.$$.fragment,t),zt(C.$$.fragment,t),Et=!0)},o(t){Ot(b.$$.fragment,t),Ot(C.$$.fragment,t),Et=!1},d(t){t&&(e(n),e(m),e(f),e(j),e(R),e(Z),e(S),e(et),e(G),e(at),e(I),e(nt),e(w),e(lt),e(z),e(ot),e(O),e(ct),e(g),e(ut),e(D),e(it),e(q),e(dt),e(x),e(mt),e(A),e(ft),e(B),e(_t),e(_),e(vt),e(N),e(gt),e(v),e(xt),e($),e($t),e(U),e(wt),e(Y),e(bt),e(F),e(yt),e(y)),Dt(b),Dt(C)}}}function be(k){let n,u;const m=[k[0]];let f={$$slots:{default:[we]},$$scope:{ctx:k}};for(let i=0;i<m.length;i+=1)f=Rt(f,m[i]);return n=new ge({props:f}),{c(){St(n.$$.fragment)},l(i){Gt(n.$$.fragment,i)},m(i,P){It(n,i,P),u=!0},p(i,[P]){const j=P&1?ve(m,[he(i[0])]):{};P&2&&(j.$$scope={dirty:P,ctx:i}),n.$set(j)},i(i){u||(zt(n.$$.fragment,i),u=!0)},o(i){Ot(n.$$.fragment,i),u=!1},d(i){Dt(n,i)}}}function Ce(k,n,u){return k.$$set=m=>{u(0,n=Rt(Rt({},n),le(m)))},n=le(n),[n]}class Me extends ke{constructor(n){super(),_e(this,n,Ce,be,fe,{})}}export{Me as component};