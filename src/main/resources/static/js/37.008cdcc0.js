"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[37],{9123:function(a,s,e){e.d(s,{Z:function(){return b}});var t=e(3396),n=e(7139);const d=a=>((0,t.dD)("data-v-29d81906"),a=a(),(0,t.Cn)(),a),l={class:"main_nav_t_div"},i={class:"main_t_nav"},r={class:"main_t_nav_list"},c=d((()=>(0,t._)("li",{class:"nav__btn"},[(0,t._)("a",{class:"nav__link",href:"alert"},[(0,t._)("i",{class:"fas fa-bell fa-2x","aria-hidden":"true"})])],-1))),o={class:"main_m_li_list"},m={class:"nav_m_link",href:"workout.html"},p={class:"nav__btn"},_=d((()=>(0,t._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"},null,-1))),u=[_];function f(a,s,e,d,_,f){return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("nav",i,[(0,t._)("ul",r,[c,(0,t._)("li",o,[(0,t._)("p",m,(0,n.zw)(e.headerProps),1)]),(0,t._)("li",p,[(0,t._)("a",{class:"nav__link",onClick:s[0]||(s[0]=s=>a.$router.go(-1))},u)])])])])}var v={props:{headerProps:String}},k=e(89);const h=(0,k.Z)(v,[["render",f],["__scopeId","data-v-29d81906"]]);var b=h},3037:function(a,s,e){e.r(s),e.d(s,{default:function(){return x}});var t=e(3396),n=e(7139);const d=a=>((0,t.dD)("data-v-377db912"),a=a(),(0,t.Cn)(),a),l={class:"farm-contain"},i=d((()=>(0,t._)("div",{class:"farm-information"},[(0,t._)("img",{class:"farm-image",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVGCXTRUebkmD2Yi3Zd4sRGWCryxfM4wdI8jZuPBqqA&s",alt:"농가 사진"})],-1))),r={class:"farm-name-tel"},c={class:"farm-userName"},o=d((()=>(0,t._)("h3",{class:"userName"},"이름",-1))),m={class:"farm-tel"},p=d((()=>(0,t._)("h3",{class:"tel"},"연락처",-1))),_={class:"farm-description"},u=d((()=>(0,t._)("h3",{class:"description"},"농가설명",-1))),f={class:"buttons"},v={class:"farm-best"},k={key:0,class:"best-detail"},h={class:"farm-address"},b={class:"address-detail"},g=d((()=>(0,t._)("div",{id:"map"},null,-1))),w={key:0,id:"map",class:"map",style:{width:"300px",height:"300px"}};function C(a,s,e,d,C,y){const S=(0,t.up)("Header");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t.Wm)(S,{headerProps:C.test.farmName},null,8,["headerProps"]),i,(0,t._)("div",r,[(0,t._)("div",c,[o,(0,t._)("p",null,(0,n.zw)(C.test.name),1)]),(0,t._)("div",m,[p,(0,t._)("p",null,(0,n.zw)(C.test.tel),1)])]),(0,t._)("div",_,[u,(0,t._)("p",null,(0,n.zw)(C.test.description),1)]),(0,t._)("div",f,[(0,t._)("div",v,[(0,t._)("button",{class:"best",onClick:s[0]||(s[0]=a=>y.bestToggle())},"주요 농작물"),!0===C.bestState?((0,t.wg)(),(0,t.iD)("div",k,[(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(C.test.bestFarm.length,((a,s)=>((0,t.wg)(),(0,t.iD)("li",{key:s},(0,n.zw)(s+1)+". "+(0,n.zw)(C.test.bestFarm[s]),1)))),128))])])):(0,t.kq)("",!0)]),(0,t._)("div",h,[(0,t._)("button",{onClick:s[1]||(s[1]=a=>y.addressToggle()),class:"address"},"농가 주소"),(0,t._)("div",b,[g,!0===C.addressState?((0,t.wg)(),(0,t.iD)("div",w,"지도 생길 부분")):(0,t.kq)("",!0)])])])])}var y=e(9123),S={components:{Header:y.Z},data(){return{headerName:"",map:null,test:{farmName:"따과의 즐거운 농장",name:"김따과",tel:"010-1234-1234",description:"이 세상에서 농사짓는게 제일 행복한 김따과 입니다 ^~^",address:{x:0,y:0},bestFarm:["사과","오렌지","망고","수박"]},bestState:!1,addressState:!1}},mounted(){if(window.kakao&&window.kakao.maps)this.initMap();else{const a=document.createElement("script");a.onload=()=>kakao.maps.load(this.initMap),a.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e912469aedfe46c334cf869f731be1fa",document.head.appendChild(a)}},methods:{initMap(){const a=document.getElementById("map"),s={center:new kakao.maps.LatLng(33.450701,126.570667),level:5};this.map=new kakao.maps.Map(a,s)},addScript(){const a=document.createElement("script");a.onload=()=>kakao.maps.load(this.initMap()),a.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e912469aedfe46c334cf869f731be1fa",document.head.appendChild(a)},bestToggle(){this.bestState=!this.bestState},addressToggle(){this.addressState=!this.addressState}}},D=e(89);const q=(0,D.Z)(S,[["render",C],["__scopeId","data-v-377db912"]]);var x=q}}]);
//# sourceMappingURL=37.008cdcc0.js.map