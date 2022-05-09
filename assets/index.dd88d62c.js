import{o as c,c as u,a as e,b as v,t as d,d as $,F as h,r as f,w as g,v as y,e as x,f as p,g as b,h as V,i as N,j as P,k as L}from"./vendor.6484b49a.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};O();var m=(t,n)=>{const a=t.__vccOpts||t;for(const[i,o]of n)a[i]=o;return a};const T={components:{},props:{url:{type:String,default(){return null}}},methods:{getPoki(){fetch(`${this.url}`).then(t=>t.json()).then(t=>{this.pokis=t,this.name=t.name,this.hpStats=t.stats[0].base_stat,this.imgurl=t.sprites.other.dream_world.front_default,this.typeOne=t.types[0].type.name,this.typeTwo=t.types[1].type.name,this.atkStats=t.stats[1].base_stat,this.defStats=t.stats[2].base_stat,this.spdStats=t.stats[3].base_stat})}},data(){return{pokis:null,data:this.url,imgurl:null}}},A={key:0,class:"container"},B={class:"card"},E={class:"hp"},W=e("span",null,"HP",-1),j=["src","alt"],q={class:"poke-name"},C={class:"types"},D={class:"stats"},H=e("p",null,"Attack",-1),R=e("p",null,"Defence",-1),F=e("p",null,"Speed",-1);function U(t,n,a,i,o,s){return c(),u(h,null,[e("input",{onClick:n[0]||(n[0]=(...r)=>s.getPoki&&s.getPoki(...r)),value:"Show Pok\xE9mon",type:"button"}),o.pokis?(c(),u("div",A,[e("div",B,[e("p",E,[W,v(" "+d(t.hpStats),1)]),e("img",{src:o.imgurl,alt:t.name},null,8,j),e("h2",q,d(t.name),1),e("div",C,[e("span",null,d(t.typeOne),1),e("span",null,d(t.typeTwo),1)]),e("div",D,[e("div",null,[e("h3",null,d(t.atkStats),1),H]),e("div",null,[e("h3",null,d(t.defStats),1),R]),e("div",null,[e("h3",null,d(t.spdStats),1),F])])])])):$("",!0)],64)}var k=m(T,[["render",U]]);const M={components:{pokemonView:k},created(){fetch("https://pokeapi.co/api/v2/pokemon").then(t=>t.json()).then(t=>{this.pokis=t.results,console.log(t)})},data(){return{pokis:null,s:""}}},I={class:"search-container"},K=e("button",{class:"btn-search",id:"search-btn"},[e("i",{class:"fa fa-search fa-3x","aria-hidden":"true"})],-1),Q=v("You have searched for: "),Y={key:0};function z(t,n,a,i,o,s){const r=f("pokemonView");return c(),u(h,null,[e("div",I,[g(e("input",{"onUpdate:modelValue":n[0]||(n[0]=l=>o.s=l),class:"form-control",id:"search_q",type:"text",placeholder:"Search for Pok\xE9mon"},null,512),[[y,o.s]]),K]),e("div",null,[Q,g(e("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=l=>o.s=l)},null,512),[[y,o.s]])]),o.pokis?(c(),u("ol",Y,[(c(!0),u(h,null,x(o.pokis,l=>(c(),u("li",{key:l.id},[e("div",null,d(l.name),1),p(r,{url:l.url},null,8,["url"])]))),128))])):$("",!0)],64)}var G=m(M,[["render",z]]),J="/assets/fox.1855b0f2.jpeg";const X={props:{msg:String}},Z=e("img",{alt:"",src:J},null,-1);function ee(t,n,a,i,o,s){return c(),u(h,null,[Z,e("p",null,d(a.msg),1)],64)}var te=m(X,[["render",ee]]);const oe={},se=e("h1",null,"About",-1),ne=e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis quisquam enim alias velit numquam odio optio delectus laborum magnam. ",-1);function ae(t,n){return c(),u(h,null,[se,ne],64)}var w=m(oe,[["render",ae]]);const re={},ie={class:"navbar navbar-expand-lg navbar-light bg-light"},le=e("a",{class:"pokibar",href:"#"},"Poki Navbar",-1),ce=e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),ue={class:"collapse navbar-collapse",id:"navbarText"},de={class:"navbar-nav mr-auto"},_e={class:"nav-item active"},pe=v("Home"),he={class:"nav-item"},me=v("About");function fe(t,n){const a=f("router-link");return c(),u("nav",ie,[le,ce,e("div",ue,[e("ul",de,[e("li",_e,[p(a,{to:"/"},{default:b(()=>[pe]),_:1})]),e("li",he,[p(a,{to:"./about"},{default:b(()=>[me]),_:1})])])])])}var ve=m(re,[["render",fe]]);const ge={components:{homeView:G,HelloWorld:te,aboutView:w,NavigationBar:ve}},ye=e("h1",null,"Pok\xE9dex",-1),be=e("p",{class:"codex"},"Can you find your favourite Pok\xE9mon?",-1);function $e(t,n,a,i,o,s){const r=f("NavigationBar"),l=f("homeView"),_=f("router-view");return c(),u(h,null,[p(r),ye,be,p(l),p(_)],64)}var ke=m(ge,[["render",$e]]),we=V({history:N(),routes:[{component:k,path:"/"},{component:w,path:"/about"}]});function Se(t={}){const{immediate:n=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:o,onRegisterError:s}=t;let r;const l=async(_=!0)=>{};return"serviceWorker"in navigator&&(r=new P("/sw.js",{scope:"/",type:"classic"}),r.addEventListener("activated",_=>{_.isUpdate?window.location.reload():i==null||i()}),r.register({immediate:n}).then(_=>{o==null||o(_)}).catch(_=>{s==null||s(_)})),l}Se();const S=L(ke);S.use(we);S.mount("#app");
