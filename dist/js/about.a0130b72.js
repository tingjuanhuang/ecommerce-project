"use strict";(self["webpackChunkecommerce_project"]=self["webpackChunkecommerce_project"]||[]).push([[443],{2291:function(e,s,t){t.r(s),t.d(s,{default:function(){return y}});var n=t(3396);const r={class:"about"},a=(0,n._)("h1",null,"This is an about page",-1);function o(e,s,t,o,c,l){const i=(0,n.up)("cardBox");return(0,n.wg)(),(0,n.iD)("div",r,[a,(0,n.Wm)(i)])}var c=t(7139);const l={class:"card",style:{width:"18rem"}},i={class:"card-body"},d={class:"card-title"},u=(0,n._)("h6",{class:"card-subtitle mb-2 text-body-secondary"},"Card subtitle",-1),m=(0,n._)("p",{class:"card-text"},[(0,n.Uk)("Some quick example text to build "),(0,n._)("br"),(0,n.Uk)(" on the card title and make up the bulk of the card's content.")],-1),p=(0,n._)("a",{href:"#",class:"card-link"},"Card link",-1),h=(0,n._)("a",{href:"#",class:"card-link"},"Another link",-1);function b(e,s,t,r,a,o){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",i,[(0,n._)("h5",d,(0,c.zw)(a.title),1),u,m,p,h])])}var f={data(){return{title:"這是一段標題"}}},_=t(89);const w=(0,_.Z)(f,[["render",b]]);var v=w,k={components:{cardBox:v}};const g=(0,_.Z)(k,[["render",o]]);var y=g},4667:function(e,s,t){t.r(s),t.d(s,{default:function(){return _}});var n=t(3396),r=t(9242);const a={class:"container mt-5"},o={class:"col-md-6"},c=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},i=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},u=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),m=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function p(e,s,t,p,h,b){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("form",{class:"row justify-content-center",onSubmit:s[2]||(s[2]=(0,r.iM)(((...e)=>b.signIn&&b.signIn(...e)),["prevent"]))},[(0,n._)("div",o,[c,(0,n._)("div",l,[i,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=e=>h.user.username=e)},null,512),[[r.nr,h.user.username]])]),(0,n._)("div",d,[u,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=e=>h.user.password=e)},null,512),[[r.nr,h.user.password]])]),m])],32)])}var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then((e=>{const{token:s,expired:t}=e.data;console.log(s,t),document.cookie=`loginToken=${s}; expires=${new Date(t)}`,console.log(e)}))}}},b=t(89);const f=(0,b.Z)(h,[["render",p]]);var _=f}}]);
//# sourceMappingURL=about.a0130b72.js.map