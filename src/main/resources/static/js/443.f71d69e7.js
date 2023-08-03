"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[443,791],{4217:function(t,e,s){s.d(e,{Z:function(){return k}});var i=s(3396),n=s(7139);const o=t=>((0,i.dD)("data-v-1d63df00"),t=t(),(0,i.Cn)(),t),a={class:"main_nav_t_div"},l={class:"main_t_nav"},r={class:"main_t_nav_list"},c=o((()=>(0,i._)("li",{class:"nav__btn"},[(0,i._)("a",{class:"nav__link",href:"alert"},[(0,i._)("i",{class:"fas fa-bell fa-2x","aria-hidden":"true"})])],-1))),d={class:"main_m_li_list"},u={class:"nav_m_link",href:"workout.html"},_={class:"nav__btn"},h=o((()=>(0,i._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"},null,-1))),m=[h];function p(t,e,s,o,h,p){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("nav",l,[(0,i._)("ul",r,[c,(0,i._)("li",d,[(0,i._)("p",u,(0,n.zw)(s.headerProps),1)]),(0,i._)("li",_,[(0,i._)("a",{class:"nav__link",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},m)])])])])}var g={props:{headerProps:String}},v=s(89);const f=(0,v.Z)(g,[["render",p],["__scopeId","data-v-1d63df00"]]);var k=f},6719:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(3396),n=s(7139);function o(t,e,s,o,a,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("i",{onClick:e[0]||(e[0]=t=>l.likeClick()),class:"fa fa-heart like-icon",style:(0,n.j5)([1===a.like.state?{color:"#FFC1AA"}:{color:"lightgrey"}])},null,4)])}var a=s(6265),l=s.n(a),r={data(){return{like:{users:[],count:0,state:0,auction_id:0,consumer_id:0}}},async mounted(){this.like.auction_id=parseInt(this.$route.params.id),this.like.consumer_id=this.$store.state.login.userInfo.consumer_id,await l().get(`/api/checkWish/${this.like.auction_id}/${this.like.consumer_id}`).then((t=>{console.log(t.data),this.like.state=t.data})).catch((t=>{alert(t)}))},methods:{likeClick(){let t={auction_id:this.like.auction_id,consumer_id:this.like.consumer_id};0===this.like.state?l().post("/api/registWish",t).then((()=>{alert("좋아요를 클릭했습니다!")})).catch((t=>{console.log(t)})):1===this.like.state&&l()["delete"](`/api/deleteWish/${this.like.auction_id}/${this.like.consumer_id}`).then((()=>{alert("좋아요를 취소하였습니다!")})).catch((t=>console.log(t)))}}},c=s(89);const d=(0,c.Z)(r,[["render",o],["__scopeId","data-v-894e6602"]]);var u=d},1896:function(t,e,s){s.r(e),s.d(e,{default:function(){return j}});var i=s(3396);const n={class:"auction-contain"};function o(t,e,s,o,a,l){const r=(0,i.up)("Header"),c=(0,i.up)("Slide"),d=(0,i.up)("AuctionList"),u=(0,i.up)("bottom-nav");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(r,{headerProps:a.headerProps},null,8,["headerProps"]),(0,i.Wm)(c),(0,i.Wm)(d),(0,i.Wm)(u)])}var a=s(4217),l=s(438),r=s(7139);const c=t=>((0,i.dD)("data-v-be0d6578"),t=t(),(0,i.Cn)(),t),d={class:"white_div"},u={class:"goods_pay_section"},_={class:"goods_group"},h={class:"goods_group_list"},m=["onClick"],p={class:"goods_item"},g={class:"goods_thumb"},v=["src"],f={class:"goods_info"},k={class:"goods"},b={class:"name"},w={class:"info"},D=c((()=>(0,i._)("span",{class:"blind"},"상품금액",-1))),$={class:"date"},C=c((()=>(0,i._)("span",{class:"blind"},"등록일",-1))),N={class:"state _statusName value_color_green _click(nmp.front.order.timeline.home.list.openDeliveryPopup(/o/orderStatus/deliveryTracking/2022020394386781/ORDER_DELIVERY/api)) _stopDefault"},I={class:"guide"},P={class:"seller_item"},y={class:"inner"},O={class:"seller"},T={class:"tel"},z=c((()=>(0,i._)("br",null,null,-1))),M=c((()=>(0,i._)("br",null,null,-1))),E={style:{display:"none"}};function S(t,e,s,n,o,a){const l=(0,i.up)("InfiniteLoading");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("fieldset",null,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",_,[(0,i._)("ul",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.$store.state.auctionList,(t=>((0,i.wg)(),(0,i.iD)("li",{onClick:e=>a.navigateProduct(t),key:t.auction_Id,id:"_rowLi20220203162708CHK2022020394386781",class:"goods_pay_item _interlockNo20220211200904406814"},[(0,i._)("div",p,[(0,i._)("div",g,[(0,i._)("img",{src:`/product_images/${t.productDTO.product_img_name}.png`,alt:"",width:"90",height:"90"},null,8,v)]),(0,i._)("div",f,[(0,i._)("div",k,[(0,i._)("p",b,(0,r.zw)(t.auction_name),1),(0,i._)("ul",w,[(0,i._)("li",null,[D,(0,i.Uk)((0,r.zw)(t.bid_price)+"원",1)]),(0,i._)("li",$,[C,(0,i.Uk)(" "+(0,r.zw)(t.productDTO.p_reg_date),1)])])]),(0,i._)("div",N,(0,r.zw)(t.bid_status)+" ("+(0,r.zw)(a.updateDeadlineDate(t.deadline_date))+" 경매 종료)",1),(0,i._)("p",I,(0,r.zw)(t.productDTO.p_explanation),1)])]),(0,i._)("div",P,[(0,i._)("div",y,[(0,i._)("span",O,(0,r.zw)(t.f_farm_name),1),(0,i._)("span",T,(0,r.zw)(t.f_phonenum),1),z,M])])],8,m)))),128))])])])])]),(0,i._)("div",null,[(0,i._)("button",{class:"more-data",onClick:e[0]||(e[0]=t=>a.moreProduct())},"더보기")]),(0,i._)("p",E,(0,r.zw)(o.now),1),(0,i.Wm)(l,{comments:t.auction,onInfinite:e[1]||(e[1]=t=>a.moreProduct())},null,8,["comments"])])}var L=s(6719),W=s(3266),Z=s.n(W),A=s(4029),H=s.n(A),K={components:{Like:L.Z},data(){return{limit:0,infiniteId:+new Date,now:0}},mounted(){this.updateNow(),setInterval(this.updateNow.bind(this),1e3)},created(){this.connect()},methods:{updateNow(){this.now=Math.round(Date.now()/1e3)},updateDeadlineDate(t){let e=new Date;console.log("date",e),console.log("auction",this.auction),console.log("deadline",t),e.setFullYear(Number(t.substr(0,4))),e.setMonth(Number(t.substr(5,2))-1),e.setDate(Number(t.substr(8,2))),e.setHours(Number(t.substr(11,2))),e.setMinutes(Number(t.substr(14,2))),e.setSeconds(Number(t.substr(17,2)));let s=Math.round(e.getTime()/1e3)-this.now;if(s<0)return"";let i=Math.floor(s/86400),n=Math.floor(s%86400),o=Math.floor(n/3600),a=Math.floor(n%3600/60),l=Math.floor(n%3600%60);return`${i}일 ${o}시간 ${a}분 ${l}초 후`},navigateProduct(t){this.$router.push({name:"auction_detail",params:{id:t.auction_Id,auction:JSON.stringify(t)}})},navigategoback(){console.log("!!"),this.$router.go(-1)},moreProduct(){this.send()},send(){this.stompClient&&this.stompClient.connected&&this.stompClient.send("/receive_limit/"+this.$store.state.config.headers.TOKEN,this.$store.state.limit,{})},connect(){const t="/socket";let e=new(H())(t);this.stompClient=Z().over(e),console.log(`소켓 연결을 시도합니다. 서버 주소: ${t}`);let s={TOKEN:this.$store.state.config.headers.TOKEN};this.stompClient.connect(s,(t=>{this.connected=!0,console.log("소켓 연결 성공",t),this.stompClient.subscribe("/send_auction_data/"+this.$store.state.config.headers.TOKEN,(t=>{const e=JSON.parse(t.body);if(console.log("response_data.length: "+e.length),e.length){for(let t=0;t<e.length;t++)this.$store.commit("PUSH_AUCTION",e[t]);this.$store.commit("UP_LIMIT",2)}console.log("2131231limit:"+this.$store.state.limit)})),this.stompClient.subscribe("/send_bidding",(t=>{const e=JSON.parse(t.body);console.log(e),void 0!=e&&this.$store.commit("UPDATE_BID_PRICE",e)}))}),(t=>{console.log("소켓 연결 실패",t),this.connected=!1}))}}},U=s(89);const R=(0,U.Z)(K,[["render",S],["__scopeId","data-v-be0d6578"]]);var x=R,F=s(5483),J={components:{bottomNav:F["default"],Header:a.Z,AuctionList:x,Slide:l["default"]},data(){return{headerProps:"경매 알림"}}};const Y=(0,U.Z)(J,[["render",o]]);var j=Y}}]);
//# sourceMappingURL=443.f71d69e7.js.map