"use strict";(self["webpackChunkecommerce_project"]=self["webpackChunkecommerce_project"]||[]).push([[750],{5750:function(a,s,t){t.r(s),t.d(s,{default:function(){return N}});var r=t(6252);const e={class:"container-fluid"};function o(a,s,t,o,n,c){const l=(0,r.up)("NavBar"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("div",e,[(0,r.Wm)(i)])],64)}t(7658);var n=t(9963);const c={class:"navbar navbar-expand-lg navbar-dark bg-dark border-bottom"},l={class:"container-fluid"},i=(0,r._)("a",{class:"navbar-brand",href:"#"},"範例作品",-1),u=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},h=(0,r._)("a",{class:"nav-link active","aria-current":"page",href:"#/dashboard/products"},"產品",-1),p=(0,r._)("a",{class:"nav-link",href:"#/dashboard/orders"},"訂單",-1),b=(0,r._)("a",{class:"nav-link",href:"#/dashboard/coupons"},"優惠券",-1);function g(a,s,t,e,o,g){return(0,r.wg)(),(0,r.iD)("nav",c,[(0,r._)("div",l,[i,u,(0,r._)("div",v,[(0,r._)("div",d,[h,p,b,(0,r._)("a",{class:"nav-link",href:"#",onClick:s[0]||(s[0]=(0,n.iM)(((...a)=>g.logout&&g.logout(...a)),["prevent"]))},"登出")])])])])}var k={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then((a=>{console.log(a),a.data.success&&this.$router.push("/login")}))}}},f=t(3744);const _=(0,f.Z)(k,[["render",g]]);var m=_,$={components:{NavBar:m},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const s="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(s,this.user).then((a=>{a.data.success||this.$router.push("/login")}))}};const w=(0,f.Z)($,[["render",o]]);var N=w}}]);
//# sourceMappingURL=750.74b5f3fa.js.map