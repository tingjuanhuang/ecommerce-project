"use strict";(self["webpackChunkecommerce_project"]=self["webpackChunkecommerce_project"]||[]).push([[791],{791:function(a,s,t){t.r(s),t.d(s,{default:function(){return N}});var e=t(6252);const r={class:"container-fluid"};function n(a,s,t,n,o,c){const l=(0,e.up)("NavBar"),i=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),(0,e._)("div",r,[(0,e.Wm)(i)])],64)}t(7658);var o=t(9963);const c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},l={class:"container-fluid"},i=(0,e._)("a",{class:"navbar-brand",href:"#"},"範例作品",-1),u=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},p={class:"navbar-nav"},h=(0,e._)("a",{class:"nav-link active","aria-current":"page",href:"#/dashboard/products"},"產品",-1),d=(0,e._)("a",{class:"nav-link",href:"#"},"訂單",-1),g=(0,e._)("a",{class:"nav-link",href:"#"},"優惠券",-1);function b(a,s,t,r,n,b){return(0,e.wg)(),(0,e.iD)("nav",c,[(0,e._)("div",l,[i,u,(0,e._)("div",v,[(0,e._)("div",p,[h,d,g,(0,e._)("a",{class:"nav-link",href:"#",onClick:s[0]||(s[0]=(0,o.iM)(((...a)=>b.logout&&b.logout(...a)),["prevent"]))},"登出")])])])])}var k={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then((a=>{console.log(a),a.data.success&&this.$router.push("/login")}))}}},f=t(3744);const _=(0,f.Z)(k,[["render",b]]);var m=_,$={components:{NavBar:m},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const s="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(s,this.user).then((a=>{a.data.success||this.$router.push("/login")}))}};const w=(0,f.Z)($,[["render",n]]);var N=w}}]);
//# sourceMappingURL=791.9da2e4b7.js.map