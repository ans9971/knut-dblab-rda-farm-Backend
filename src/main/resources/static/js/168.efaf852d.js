"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[168],{4217:function(a,s,e){e.d(s,{Z:function(){return g}});var t=e(3396),d=e(7139);const i=a=>((0,t.dD)("data-v-1d63df00"),a=a(),(0,t.Cn)(),a),n={class:"main_nav_t_div"},l={class:"main_t_nav"},r={class:"main_t_nav_list"},c=i((()=>(0,t._)("li",{class:"nav__btn"},[(0,t._)("a",{class:"nav__link",href:"alert"},[(0,t._)("i",{class:"fas fa-bell fa-2x","aria-hidden":"true"})])],-1))),o={class:"main_m_li_list"},m={class:"nav_m_link",href:"workout.html"},p={class:"nav__btn"},_=i((()=>(0,t._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"},null,-1))),u=[_];function f(a,s,e,i,_,f){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("nav",l,[(0,t._)("ul",r,[c,(0,t._)("li",o,[(0,t._)("p",m,(0,d.zw)(e.headerProps),1)]),(0,t._)("li",p,[(0,t._)("a",{class:"nav__link",onClick:s[0]||(s[0]=s=>a.$router.go(-1))},u)])])])])}var v={props:{headerProps:String}},h=e(89);const k=(0,h.Z)(v,[["render",f],["__scopeId","data-v-1d63df00"]]);var g=k},168:function(a,s,e){e.r(s),e.d(s,{default:function(){return M}});var t=e(3396),d=e(7139);const i=a=>((0,t.dD)("data-v-03c30763"),a=a(),(0,t.Cn)(),a),n={class:"farm-contain"},l=i((()=>(0,t._)("div",{class:"farm-information"},[(0,t._)("img",{class:"farm-image",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVGCXTRUebkmD2Yi3Zd4sRGWCryxfM4wdI8jZuPBqqA&s",alt:"농가 사진"})],-1))),r={class:"farm-name-tel"},c={class:"farm-userName"},o=i((()=>(0,t._)("h3",{class:"userName"},"이름",-1))),m={class:"farm-tel"},p=i((()=>(0,t._)("h3",{class:"tel"},"연락처",-1))),_={class:"farm-description"},u=i((()=>(0,t._)("h3",{class:"description"},"농가설명",-1))),f={class:"buttons"},v={class:"farm-best"},h={key:0,class:"best-detail"},k={class:"farm-address"},g={class:"address-detail"},b={key:0,id:"map",class:"map",style:{width:"600px",height:"600px"}},w=i((()=>(0,t._)("div",{id:"map",class:"map"},"123",-1))),y=i((()=>(0,t._)("div",{id:"map"},"456",-1))),C={key:0,id:"map"};function S(a,s,e,i,S,D){const x=(0,t.up)("Header");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(x,{headerProps:S.test.farmName},null,8,["headerProps"]),l,(0,t._)("div",r,[(0,t._)("div",c,[o,(0,t._)("p",null,(0,d.zw)(S.test.name),1)]),(0,t._)("div",m,[p,(0,t._)("p",null,(0,d.zw)(S.test.tel),1)])]),(0,t._)("div",_,[u,(0,t._)("p",null,(0,d.zw)(S.test.description),1)]),(0,t._)("div",f,[(0,t._)("div",v,[(0,t._)("button",{class:"best",onClick:s[0]||(s[0]=a=>D.bestToggle())},"주요 농작물"),!0===S.bestState?((0,t.wg)(),(0,t.iD)("div",h,[(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(S.test.bestFarm.length,((a,s)=>((0,t.wg)(),(0,t.iD)("li",{key:s},(0,d.zw)(s+1)+". "+(0,d.zw)(S.test.bestFarm[s]),1)))),128))])])):(0,t.kq)("",!0)]),(0,t._)("div",k,[(0,t._)("button",{onClick:s[1]||(s[1]=a=>D.addressToggle()),class:"address"},"농가 주소"),(0,t._)("div",g,[!0===this.addressState?((0,t.wg)(),(0,t.iD)("div",b,"지도 생길 부분")):(0,t.kq)("",!0)])])]),w,y,!0===this.addressState?((0,t.wg)(),(0,t.iD)("div",C,"789")):(0,t.kq)("",!0)])}var D=e(4217),x={components:{Header:D.Z},data(){return{headerName:"",map:null,test:{farmName:"따과의 즐거운 농장",name:"김따과",tel:"010-1234-1234",description:"이 세상에서 농사짓는게 제일 행복한 김따과 입니다 ^~^",address:{x:0,y:0},bestFarm:["사과","오렌지","망고","수박"]},bestState:!1,addressState:!1}},mounted(){if(window.kakao&&window.kakao.maps)this.initMap();else{const a=document.createElement("script");a.style.width="300px",a.style.height="300px",a.onload=()=>kakao.maps.load(this.initMap),a.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e912469aedfe46c334cf869f731be1fa",document.head.appendChild(a)}},methods:{initMap(){const a=document.getElementById("map"),s={center:new kakao.maps.LatLng(33.450701,126.570667),level:5};console.log("sdfsdfsd"),this.map=new kakao.maps.Map(a,s)},addScript(){const a=document.createElement("script");a.onload=()=>kakao.maps.load(this.initMap()),a.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e912469aedfe46c334cf869f731be1fa",document.head.appendChild(a)},bestToggle(){this.bestState=!this.bestState},addressToggle(){this.addressState=!this.addressState}}},q=e(89);const z=(0,q.Z)(x,[["render",S],["__scopeId","data-v-03c30763"]]);var M=z}}]);
//# sourceMappingURL=168.efaf852d.js.map