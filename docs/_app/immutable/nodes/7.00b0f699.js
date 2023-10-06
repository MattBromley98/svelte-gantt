import{s as C,a as v,f as M,F as I,d as h,c as $,g as w,h as y,j as _,i as k,r as D,D as x,E as A,o as H}from"../chunks/scheduler.bd64f757.js";import{S as L,i as T,b as W,d as z,m as P,a as R,t as V,e as q}from"../chunks/index.86590fdc.js";import{M as B,S as F,a as J,g as K}from"../chunks/index.6d5bdc64.js";import{t as l,h as N,o as S}from"../chunks/utils.1c822e9e.js";import{G as Q}from"../chunks/GanttOptions.42da2f86.js";const{document:j}=K;function U(n){let o,a,t,c,s,m;return s=new Q({props:{options:n[0]}}),s.$on("change",n[1]),{c(){o=v(),a=M("div"),t=M("div"),c=v(),W(s.$$.fragment),this.h()},l(e){I("svelte-167zng3",j.head).forEach(h),o=$(e),a=w(e,"DIV",{class:!0});var i=y(a);t=w(i,"DIV",{id:!0,class:!0}),y(t).forEach(h),c=$(i),z(s.$$.fragment,i),i.forEach(h),this.h()},h(){j.title="Large dataset - svelte-gantt",_(t,"id","example-gantt"),_(t,"class","svelte-1toa21o"),_(a,"class","container svelte-1toa21o")},m(e,r){k(e,o,r),k(e,a,r),D(a,t),D(a,c),P(s,a,null),m=!0},p(e,[r]){const i={};r&1&&(i.options=e[0]),s.$set(i)},i(e){m||(R(s.$$.fragment,e),m=!0)},o(e){V(s.$$.fragment,e),m=!1},d(e){e&&(h(o),h(a)),q(s)}}}let E=100;function X(n){for(let o=n.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1)),t=n[o];n[o]=n[a],n[a]=t}}function Y(n,o,a){let t;x(n,S,p=>a(0,t=p));let c=0;const s=["blue","green","orange"],m=[{id:0,from:l("10:00"),to:l("12:00"),classes:"time-range-lunch",label:"Lunch",resizable:!1},{id:1,from:l("15:00"),to:l("17:00"),classes:null,label:"Dinner"}],e=i();A(S,t={dateAdapter:new B(N),rows:e.rows,tasks:e.tasks,timeRanges:m,columnOffset:15,magnetOffset:15,rowHeight:52,rowPadding:6,headers:[{unit:"day",format:"MMMM Do"},{unit:"hour",format:"H:mm"}],fitWidth:!0,minWidth:800,from:l("06:00"),to:l("18:00"),tableHeaders:[{title:"Label",property:"label",width:140,type:"tree"}],tableWidth:240,ganttTableModules:[F]},t);let r;H(()=>{window.gantt=a(2,r=new J({target:document.getElementById("example-gantt"),props:t}))});function i(){const p=[],g=[],u=[...Array(E).keys()];X(u);for(let d=0;d<E;d++){let f=Math.random()<.2;p.push({id:d,label:"Row #"+d,age:Math.random()*80|0,imageSrc:"Content/joe.jpg",classes:f?["row-disabled"]:void 0,enableDragging:!f,generation:c}),f=Math.random()>.5;const b=Math.random()*10|0,O=Math.random()*5|0+1;g.push({type:"task",id:u[d],resourceId:d,label:"Task #"+u[d],from:l(`${7+b}:00`),to:l(`${7+b+O}:00`),classes:s[Math.random()*s.length|0],generation:c})}return c+=1,{rows:p,tasks:g}}function G(p){const g=p.detail;Object.assign(t,g),r.$set(t)}return n.$$.update=()=>{n.$$.dirty&5&&(console.log("options changed",t),r&&r.$set(t))},[t,G,r]}class ot extends L{constructor(o){super(),T(this,o,Y,U,C,{})}}export{ot as component};
