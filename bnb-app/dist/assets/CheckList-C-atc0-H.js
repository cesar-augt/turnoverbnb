import{C as m}from"./ListCards-DBzZiFRi.js";import{i as u,V as p,a as _,b as h}from"./VForm-B8xUtlbz.js";import{_ as f,r as C,o as r,c as n,w as t,a,V as k,b as V,d as b,j as g,k as x,F as T}from"./index-Dlz9iadY.js";import"./VRow-C4T0et24.js";const D={components:{Card:m},data(){return{tab:"tab-2",check:null}},mounted(){this.getData()},methods:{async getData(){try{const e=await u.get("http://127.0.0.1:8000/api/control");this.check=e.data}catch(e){console.error(e)}},openDetails(e){try{this.$store.commit("setDeposit",{id:e.id,amount:e.amount,description:e.description,name_image:e.name_image}),this.$router.push("/check/details")}catch(o){console.error(o)}}}};function $(e,o,y,v,c,l){const i=C("Card");return r(),n(p,{class:"elevation-12"},{default:t(()=>[a(b,{color:"blue-lighten-3",dark:"",flat:""},{default:t(()=>[a(k,null,{default:t(()=>[V("CHECK CONTROL")]),_:1})]),_:1}),a(h,null,{default:t(()=>[a(_,null,{default:t(()=>[(r(!0),g(T,null,x(c.check,(s,d)=>(r(),n(i,{key:d,card:s,onClick:w=>l.openDetails(s)},null,8,["card","onClick"]))),128))]),_:1})]),_:1})]),_:1})}const E=f(D,[["render",$]]);export{E as default};
