"use strict";(self["webpackChunkecommerce_project"]=self["webpackChunkecommerce_project"]||[]).push([[691],{1691:function(a,t,s){s.r(t),s.d(t,{default:function(){return N}});var e=s(6252);const r={class:"container-fluid"};function o(a,t,s,o,n,c){const l=(0,e.up)("NavBar"),i=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),(0,e._)("div",r,[(0,e.Wm)(i)])],64)}s(7658);var n=s(9963);const c={class:"navbar navbar-expand-lg navbar-dark bg-dark border-bottom"},l={class:"container-fluid"},i=(0,e._)("a",{class:"navbar-brand",href:"#"},"範例作品",-1),u=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},p={class:"navbar-nav"},h=(0,e._)("a",{class:"nav-link active","aria-current":"page",href:"#/dashboard/products"},"產品",-1),d=(0,e._)("a",{class:"nav-link",href:"#"},"訂單",-1),b=(0,e._)("a",{class:"nav-link",href:"#"},"優惠券",-1);function g(a,t,s,r,o,g){return(0,e.wg)(),(0,e.iD)("nav",c,[(0,e._)("div",l,[i,u,(0,e._)("div",v,[(0,e._)("div",p,[h,d,b,(0,e._)("a",{class:"nav-link",href:"#",onClick:t[0]||(t[0]=(0,n.iM)(((...a)=>g.logout&&g.logout(...a)),["prevent"]))},"登出")])])])])}var k={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then((a=>{console.log(a),a.data.success&&this.$router.push("/login")}))}}},f=s(3744);const _=(0,f.Z)(k,[["render",g]]);var m=_,$={components:{NavBar:m},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((a=>{a.data.success||this.$router.push("/login")}))}};const w=(0,f.Z)($,[["render",o]]);var N=w}}]);
//# sourceMappingURL=691.d7b265d2.js.map