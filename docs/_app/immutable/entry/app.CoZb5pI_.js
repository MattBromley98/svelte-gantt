const __vite__fileDeps=["../nodes/0.Cxm_cHXc.js","../chunks/scheduler.CnFf9BV0.js","../chunks/index._WJlIO9N.js","../chunks/Button.DDN97-5j.js","../chunks/spread.CgU5AtxT.js","../chunks/paths.DNT7NPGE.js","../chunks/store.D9NET2hp.js","../chunks/entry.XXe79qml.js","../chunks/control.CYgJF_JY.js","../chunks/stores.D0S6JAUb.js","../assets/0.D0MXDcq-.css","../nodes/1.CeRhLe0N.js","../nodes/2._w8QFBk4.js","../chunks/each.CEU_P7iD.js","../nodes/3.DLc18ezy.js","../chunks/index.C2crPun4.js","../assets/index.DV1K06M3.css","../assets/3.D4zGWEJI.css","../nodes/4.De8E7msj.js","../nodes/5.Cr6o5N6g.js","../chunks/layout.DJ7hEGt9.js","../assets/5.HrAC0il4.css","../nodes/6.BJV5Q_fl.js","../chunks/A.j9Z-Uq3G.js","../assets/6.DZf7PkB2.css","../nodes/7.rUUw0UyD.js","../assets/7.zCu19reB.css","../nodes/8.9wE0JuZd.js","../nodes/9.B5eu6p1y.js","../nodes/10.CSRQefke.js","../nodes/11.JDgvgD8b.js","../nodes/12.DfmIzCAV.js","../nodes/13.D3WSTvDo.js","../nodes/14.BTx2evGg.js","../nodes/15.DEqh5r_P.js","../nodes/16.BId6Gj_5.js","../nodes/17.BX7FXBhJ.js","../assets/17.CKKkePFl.css","../nodes/18.CbbyQDL1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as U,a as j,l as d,g as z,i as E,f as w,I as J,B as K,e as W,c as F,b as G,r as V,J as L,t as H,d as Q,j as X,C as O,K as b,L as Y}from"../chunks/scheduler.CnFf9BV0.js";import{S as Z,i as M,t as h,c as A,a as g,g as I,b as k,d as T,m as v,e as R}from"../chunks/index._WJlIO9N.js";const x="modulepreload",ee=function(a,e){return new URL(a,e).href},y={},u=function(e,n,o){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=ee(i,o),i in y)return;y[i]=!0;const f=i.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!o)for(let P=c.length-1;P>=0;P--){const D=c[P];if(D.href===i&&(!f||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":x,f||(m.as="script",m.crossOrigin=""),m.href=i,s&&m.setAttribute("nonce",s),document.head.appendChild(m),f)return new Promise((P,D)=>{m.addEventListener("load",P),m.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},ce={};function te(a){let e,n,o;var r=a[1][0];function c(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=b(r,c(a)),a[15](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),E(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){I();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=b(r,c(t)),t[15](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),a[15](null),e&&R(e,t)}}}function ne(a){let e,n,o;var r=a[1][0];function c(t,s){return{props:{data:t[3],$$slots:{default:[se]},$$scope:{ctx:t}}}}return r&&(e=b(r,c(a)),a[14](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),E(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){I();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=b(r,c(t)),t[14](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&8&&(i.data=t[3]),s&65591&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),a[14](null),e&&R(e,t)}}}function ie(a){let e,n,o;var r=a[1][1];function c(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=b(r,c(a)),a[13](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),E(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){I();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=b(r,c(t)),t[13](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),a[13](null),e&&R(e,t)}}}function re(a){let e,n,o;var r=a[1][1];function c(t,s){return{props:{data:t[4],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return r&&(e=b(r,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),E(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){I();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=b(r,c(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&16&&(i.data=t[4]),s&65575&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),a[12](null),e&&R(e,t)}}}function oe(a){let e,n,o;var r=a[1][2];function c(t,s){return{props:{data:t[5],form:t[2]}}}return r&&(e=b(r,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,s){e&&v(e,t,s),E(t,n,s),o=!0},p(t,s){if(s&2&&r!==(r=t[1][2])){if(e){I();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=b(r,c(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};s&32&&(i.data=t[5]),s&4&&(i.form=t[2]),e.$set(i)}},i(t){o||(e&&g(e.$$.fragment,t),o=!0)},o(t){e&&h(e.$$.fragment,t),o=!1},d(t){t&&w(n),a[11](null),e&&R(e,t)}}}function se(a){let e,n,o,r;const c=[re,ie],t=[];function s(i,f){return i[1][2]?0:1}return e=s(a),n=t[e]=c[e](a),{c(){n.c(),o=d()},l(i){n.l(i),o=d()},m(i,f){t[e].m(i,f),E(i,o,f),r=!0},p(i,f){let l=e;e=s(i),e===l?t[e].p(i,f):(I(),h(t[l],1,1,()=>{t[l]=null}),A(),n=t[e],n?n.p(i,f):(n=t[e]=c[e](i),n.c()),g(n,1),n.m(o.parentNode,o))},i(i){r||(g(n),r=!0)},o(i){h(n),r=!1},d(i){i&&w(o),t[e].d(i)}}}function $(a){let e,n=a[7]&&N(a);return{c(){e=W("div"),n&&n.c(),this.h()},l(o){e=F(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=G(e);n&&n.l(r),r.forEach(w),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),L(e,"position","absolute"),L(e,"left","0"),L(e,"top","0"),L(e,"clip","rect(0 0 0 0)"),L(e,"clip-path","inset(50%)"),L(e,"overflow","hidden"),L(e,"white-space","nowrap"),L(e,"width","1px"),L(e,"height","1px")},m(o,r){E(o,e,r),n&&n.m(e,null)},p(o,r){o[7]?n?n.p(o,r):(n=N(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&w(e),n&&n.d()}}}function N(a){let e;return{c(){e=H(a[8])},l(n){e=Q(n,a[8])},m(n,o){E(n,e,o)},p(n,o){o&256&&X(e,n[8])},d(n){n&&w(e)}}}function ae(a){let e,n,o,r,c;const t=[ne,te],s=[];function i(l,p){return l[1][1]?0:1}e=i(a),n=s[e]=t[e](a);let f=a[6]&&$(a);return{c(){n.c(),o=j(),f&&f.c(),r=d()},l(l){n.l(l),o=z(l),f&&f.l(l),r=d()},m(l,p){s[e].m(l,p),E(l,o,p),f&&f.m(l,p),E(l,r,p),c=!0},p(l,[p]){let m=e;e=i(l),e===m?s[e].p(l,p):(I(),h(s[m],1,1,()=>{s[m]=null}),A(),n=s[e],n?n.p(l,p):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(o.parentNode,o)),l[6]?f?f.p(l,p):(f=$(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){c||(g(n),c=!0)},o(l){h(n),c=!1},d(l){l&&(w(o),w(r)),s[e].d(l),f&&f.d(l)}}}function le(a,e,n){let{stores:o}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:s}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:l=null}=e;J(o.page.notify);let p=!1,m=!1,P=null;K(()=>{const _=o.page.subscribe(()=>{p&&(n(7,m=!0),Y().then(()=>{n(8,P=document.title||"untitled page")}))});return n(6,p=!0),_});function D(_){O[_?"unshift":"push"](()=>{t[2]=_,n(0,t)})}function S(_){O[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function C(_){O[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function B(_){O[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function q(_){O[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return a.$$set=_=>{"stores"in _&&n(9,o=_.stores),"page"in _&&n(10,r=_.page),"constructors"in _&&n(1,c=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,i=_.data_0),"data_1"in _&&n(4,f=_.data_1),"data_2"in _&&n(5,l=_.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&o.page.set(r)},[t,c,s,i,f,l,p,m,P,o,r,D,S,C,B,q]}class ue extends Z{constructor(e){super(),M(this,e,le,ae,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>u(()=>import("../nodes/0.Cxm_cHXc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>u(()=>import("../nodes/1.CeRhLe0N.js"),__vite__mapDeps([11,1,2,9,7,5,8]),import.meta.url),()=>u(()=>import("../nodes/2._w8QFBk4.js"),__vite__mapDeps([12,1,2,13,9,7,5,8,6,3,4]),import.meta.url),()=>u(()=>import("../nodes/3.DLc18ezy.js"),__vite__mapDeps([14,1,2,15,13,4,7,5,8,6,9,16,17]),import.meta.url),()=>u(()=>import("../nodes/4.De8E7msj.js"),__vite__mapDeps([18,5,8]),import.meta.url),()=>u(()=>import("../nodes/5.Cr6o5N6g.js"),__vite__mapDeps([19,1,2,4,20,5,15,13,7,8,6,9,16,21]),import.meta.url),()=>u(()=>import("../nodes/6.BJV5Q_fl.js"),__vite__mapDeps([22,1,2,4,20,5,15,13,7,8,6,9,16,23,24]),import.meta.url),()=>u(()=>import("../nodes/7.rUUw0UyD.js"),__vite__mapDeps([25,1,2,4,20,5,15,13,7,8,6,9,16,26]),import.meta.url),()=>u(()=>import("../nodes/8.9wE0JuZd.js"),__vite__mapDeps([27,1,2,4,20,5,23]),import.meta.url),()=>u(()=>import("../nodes/9.B5eu6p1y.js"),__vite__mapDeps([28,1,2,4,20,5]),import.meta.url),()=>u(()=>import("../nodes/10.CSRQefke.js"),__vite__mapDeps([29,1,2,4,20,5,15,13,7,8,6,9,16]),import.meta.url),()=>u(()=>import("../nodes/11.JDgvgD8b.js"),__vite__mapDeps([30,1,2,4,20,5]),import.meta.url),()=>u(()=>import("../nodes/12.DfmIzCAV.js"),__vite__mapDeps([31,1,2,4,20,5,15,13,7,8,6,9,16]),import.meta.url),()=>u(()=>import("../nodes/13.D3WSTvDo.js"),__vite__mapDeps([32,1,2,4,20,5,15,13,7,8,6,9,16]),import.meta.url),()=>u(()=>import("../nodes/14.BTx2evGg.js"),__vite__mapDeps([33,1,2,4,20,5]),import.meta.url),()=>u(()=>import("../nodes/15.DEqh5r_P.js"),__vite__mapDeps([34,1,2,4,20,5,23]),import.meta.url),()=>u(()=>import("../nodes/16.BId6Gj_5.js"),__vite__mapDeps([35,1,2,4,20,5]),import.meta.url),()=>u(()=>import("../nodes/17.BX7FXBhJ.js"),__vite__mapDeps([36,1,2,4,20,5,13,15,7,8,6,9,16,37]),import.meta.url),()=>u(()=>import("../nodes/18.CbbyQDL1.js"),__vite__mapDeps([38,1,2,4,20,5,13,15,7,8,6,9,16,37]),import.meta.url)],pe=[],de={"/":[3],"/docs":[4,[2]],"/docs/data/rows":[5,[2]],"/docs/data/tasks":[6,[2]],"/docs/data/time-ranges":[7,[2]],"/docs/getting-started/installation":[8,[2]],"/docs/getting-started/migrating":[9,[2]],"/docs/modules/create-tasks":[10,[2]],"/docs/modules/dependencies":[11,[2]],"/docs/modules/external":[12,[2]],"/docs/modules/table":[13,[2]],"/docs/options/columns":[14,[2]],"/docs/options/gantt":[15,[2]],"/docs/options/headers":[16,[2]],"/docs/options/layout":[17,[2]],"/docs/options/zoom":[18,[2]]},he={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{de as dictionary,he as hooks,ce as matchers,me as nodes,ue as root,pe as server_loads};