"use strict";(self["webpackChunkrealvue"]=self["webpackChunkrealvue"]||[]).push([[615],{8099:function(){},2635:function(e,t,l){l.d(t,{Z:function(){return h}});var n=l(3396),o=l(8521);const a=e=>((0,n.dD)("data-v-595c3961"),e=e(),(0,n.Cn)(),e),s={class:"auth-contain"},r={class:"auth-box"},_=a((()=>(0,n._)("input",{type:"text",id:"postcode",class:"information-form__input",placeholder:"우편번호"},null,-1))),i=a((()=>(0,n._)("input",{type:"text",id:"roadAddress",class:"information-form__input2",placeholder:"도로명 주소"},null,-1))),u=a((()=>(0,n._)("br",null,null,-1)));function d(e,t,l,a,d,m){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(o.D,{cols:"12"},{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n._)("button",{class:"auth-complete-btn",onClick:t[0]||(t[0]=e=>m.search())},"주소 검색"),_,i,u]),(0,n._)("button",{class:"auth-button",onClick:t[1]||(t[1]=t=>e.$emit("searchAddressRes",{zipcode:this.zipcode,address:this.address}))},"주소 확인")])),_:1})])}var m={props:{addressInfo:{zipcode:String,address:String}},data(){return{zipcode:"",address:""}},mounted(){console.log("addressInfo: "+this.addressInfo.zipcode),0!=this.addressInfo.zipcode&&(document.getElementById("postcode").value="우편번호 "+this.addressInfo.zipcode,document.getElementById("roadAddress").value="주소 "+this.addressInfo.address)},methods:{search(){new window.daum.Postcode({oncomplete:e=>{var t=e.roadAddress,l="";""!==e.bname&&/[동|로|가]$/g.test(e.bname)&&(l+=e.bname),""!==e.buildingName&&"Y"===e.apartment&&(l+=""!==l?", "+e.buildingName:e.buildingName),""!==l&&(l=" ("+l+")"),document.getElementById("postcode").value="우편번호 "+e.zonecode,document.getElementById("roadAddress").value="주소 "+t,this.zipcode=e.zonecode,this.address=t}}).open()}}},c=l(89);const f=(0,c.Z)(m,[["render",d],["__scopeId","data-v-595c3961"]]);var h=f},3615:function(e,t,l){l.r(t),l.d(t,{default:function(){return ke}});var n=l(3396),o=l(9242),a=l(7139),s=l(6422),r=l(1991);const _=(0,n._)("div",{class:"main_nav_t_div"},[(0,n._)("nav",{class:"main_t_nav"},[(0,n._)("ul",{class:"main_t_nav_list"},[(0,n._)("li",{class:"nav__btn"},[(0,n._)("div",{class:"nav__notification-dot"}),(0,n._)("a",{class:"nav__link"},[(0,n._)("i",{class:"fas fa-bars fa-2x","aria-hidden":"true"})])]),(0,n._)("li",{class:"main_m_li_list"},[(0,n._)("a",{class:"nav_m_link",href:"workout.html"},[(0,n._)("h4",{class:"user-component__title"},"회원 정보"),(0,n._)("i",{class:"fa-2x","aria-hidden":"true",image:"",src:"../image/123.jpg"})])]),(0,n._)("li",{class:"nav__btn"},[(0,n._)("a",{class:"nav__link",onclick:"goBack()"},[(0,n._)("i",{class:"fas fa-chevron-left fa-2x","aria-hidden":"true"})])])])])],-1),i=(0,n._)("header",{class:"n-section-title first info_views-area"},[(0,n._)("h1",{class:"tit"},"기본 회원정보")],-1),u={class:"n-table table-row my-info-modify"},d=(0,n._)("colgroup",null,[(0,n._)("col",{style:{width:"25%"}}),(0,n._)("col",{style:{width:"40%"}}),(0,n._)("col",{style:{width:"35%"}})],-1),m=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"이메일")],-1),c=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"비밀번호")],-1),f=(0,n._)("td",null," ******** ",-1),h={key:0},p=(0,n._)("td",null,null,-1),b=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"휴대폰번호")],-1),g={key:1},w=(0,n._)("td",null,null,-1),k=(0,n._)("header",{class:"n-section-title first info_views-area"},[(0,n._)("h1",{class:"tit"},"농가 회원정보")],-1),S={class:"n-table table-row my-info-modify"},y=(0,n._)("colgroup",null,[(0,n._)("col",{style:{width:"25%"}}),(0,n._)("col",{style:{width:"40%"}}),(0,n._)("col",{style:{width:"35%"}})],-1),v=(0,n._)("tr",null,null,-1),I={class:"my-info-img",id:"profile-image-area"},N=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"프로필 사진")],-1),z=(0,n._)("td",null,[(0,n._)("div",null,[(0,n._)("div",{class:"img",style:{"background-image":"url(https://image.msscdn.net/mfile_s01/_simbols/_basic/d.png)"}})])],-1),C=(0,n._)("br",null,null,-1),V={class:"va-b"},O=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"농가회원 이름")],-1),U={key:0},q=(0,n._)("td",null,null,-1),D=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"농가 전화번호")],-1),E={key:1},x=(0,n._)("td",null,null,-1),F=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"사업자 이름")],-1),T=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"사업자 등록번호")],-1),W=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"우편번호")],-1),j={key:2},J=(0,n._)("td",null,null,-1),K=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"농가 주소")],-1),A={key:3},B=(0,n._)("td",null,null,-1),P=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"입급 은행")],-1),$={key:4},R=(0,n._)("td",null,[(0,n._)("strong",null,"입금 은행")],-1),M={key:5},L=(0,n._)("td",null,[(0,n._)("strong",null,"입금자 명")],-1),Z={key:6},H=(0,n._)("td",null,[(0,n._)("strong",null,"계좌 번호")],-1),Y=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"입금자 명")],-1),Q=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"계좌 번호")],-1),G=(0,n._)("tr",null,[(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"농가 URL")]),(0,n._)("td",null," 농가 URL "),(0,n._)("td",null,[(0,n._)("button",{type:"button",class:"n-btn w100 btn-sm btn-default"},"농가 이동")])],-1),X={class:"n-section-title first info_views-area"},ee={class:"tit"},te={class:"n-table table-row my-info-modify"},le=(0,n._)("colgroup",null,[(0,n._)("col",{style:{width:"25%"}}),(0,n._)("col",{style:{width:"40%"}}),(0,n._)("col",{style:{width:"35%"}})],-1),ne=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"농가 설명")],-1),oe={key:0},ae=(0,n._)("td",null,null,-1),se=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"주요 농작물")],-1),re={key:1},_e=(0,n._)("td",null,null,-1),ie=(0,n._)("th",{scope:"row"},[(0,n._)("strong",null,"농가 사진")],-1),ue={key:2},de=(0,n._)("br",null,null,-1);function me(e,t,l,me,ce,fe){const he=(0,n.up)("SearchAddress"),pe=(0,n.up)("bottom-nav");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[_,i,(0,n.Wm)(s.O,{ref:"form",modelValue:e.profile,"onUpdate:modelValue":t[6]||(t[6]=t=>e.profile=t),"lazy-validation":"",onSubmit:t[7]||(t[7]=(0,o.iM)((()=>{}),["prevent"]))},{default:(0,n.w5)((()=>[(0,n._)("table",u,[d,(0,n._)("tbody",null,[(0,n._)("tr",null,[m,(0,n._)("td",null,(0,a.zw)(ce.user.f_email),1)]),(0,n._)("tr",null,[c,f,(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>fe.f_passwd_show&&fe.f_passwd_show(...e)),class:"n-btn w100 btn-sm btn-default"},"비밀번호 수정")])]),ce.isShow1?((0,n.wg)(),(0,n.iD)("tr",h,[p,(0,n.Wm)(r.h,{modelValue:ce.f_passwd,"onUpdate:modelValue":t[1]||(t[1]=e=>ce.f_passwd=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[2]||(t[2]=e=>fe.update_consumer_member_f_passwd()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[b,(0,n._)("td",null,(0,a.zw)(ce.user.f_phonenum),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[3]||(t[3]=(...e)=>fe.f_phonenum_show&&fe.f_phonenum_show(...e)),class:"n-btn w100 btn-sm btn-default"},"휴대폰번호 수정")])]),ce.isShow2?((0,n.wg)(),(0,n.iD)("tr",g,[w,(0,n.Wm)(r.h,{modelValue:ce.f_phonenum,"onUpdate:modelValue":t[4]||(t[4]=e=>ce.f_phonenum=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[5]||(t[5]=e=>fe.update_consumer_member_f_phonenum()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0)])]),(0,n.Wm)(he,{addressInfo:ce.addressInfo,onSearchAddressRes:fe.searchAddressResult},null,8,["addressInfo","onSearchAddressRes"])])),_:1},8,["modelValue"]),k,(0,n._)("table",S,[y,(0,n._)("tbody",null,[v,(0,n._)("tr",I,[N,z,(0,n._)("input",{multiple:"multiple",onChange:t[8]||(t[8]=e=>fe.uploadFarmProfileImages()),type:"file",id:"farm_porfile_img_file",name:"farm_porfile_img_file",accept:"image/*"},null,32),C,(0,n._)("td",V,[(0,n._)("button",{type:"button",class:"n-btn w100 btn-sm btn-default cert-hidden",id:"change-profile-image-btn",onClick:t[9]||(t[9]=e=>fe.updateFarmProfileImages())},"사진 변경")])]),(0,n._)("tr",null,[O,(0,n._)("td",null,(0,a.zw)(ce.f_name),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[10]||(t[10]=(...e)=>fe.f_farm_name_show&&fe.f_farm_name_show(...e)),class:"n-btn w100 btn-sm btn-default"},"농가명 수정")])]),ce.isShow3?((0,n.wg)(),(0,n.iD)("tr",U,[q,(0,n.Wm)(r.h,{modelValue:ce.f_name,"onUpdate:modelValue":t[11]||(t[11]=e=>ce.f_name=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[12]||(t[12]=e=>fe.update_consumer_member_f_name()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[D,(0,n._)("td",null,(0,a.zw)(ce.f_num),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[13]||(t[13]=(...e)=>fe.f_num_show&&fe.f_num_show(...e)),class:"n-btn w100 btn-sm btn-default"},"농가 전화번호 수정")])]),ce.isShow4?((0,n.wg)(),(0,n.iD)("tr",E,[x,(0,n.Wm)(r.h,{modelValue:ce.f_num,"onUpdate:modelValue":t[14]||(t[14]=e=>ce.f_num=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[15]||(t[15]=e=>fe.update_consumer_member_f_num()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[F,(0,n._)("td",null,(0,a.zw)(e.f_representative),1)]),(0,n._)("tr",null,[T,(0,n._)("td",null,(0,a.zw)(e.f_BRN),1)]),(0,n._)("tr",null,[W,(0,n._)("td",null,(0,a.zw)(ce.f_zipcode),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[16]||(t[16]=(...e)=>fe.f_zipcode_show&&fe.f_zipcode_show(...e)),class:"n-btn w100 btn-sm btn-default"},"우편번호 수정")])]),ce.isShow5?((0,n.wg)(),(0,n.iD)("tr",j,[J,(0,n.Wm)(r.h,{modelValue:ce.f_zipcode,"onUpdate:modelValue":t[17]||(t[17]=e=>ce.f_zipcode=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[18]||(t[18]=(...e)=>fe.navigatecheck_farm_loc&&fe.navigatecheck_farm_loc(...e)),class:"n-btn w100 btn-sm btn-default"},"농가 우편번호 수정")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[K,(0,n._)("td",null,(0,a.zw)(ce.f_location),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[19]||(t[19]=(...e)=>fe.navigatecheck_farm_loc&&fe.navigatecheck_farm_loc(...e)),class:"n-btn w100 btn-sm btn-default"},"농가 주소 수정")])]),ce.isShow6?((0,n.wg)(),(0,n.iD)("tr",A,[B,(0,n.Wm)(r.h,{modelValue:ce.f_location,"onUpdate:modelValue":t[20]||(t[20]=e=>ce.f_location=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[21]||(t[21]=t=>e.update_Farm_member()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[P,(0,n._)("td",null,(0,a.zw)(ce.f_bank),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[22]||(t[22]=(...e)=>fe.updatebank_show&&fe.updatebank_show(...e)),class:"n-btn w100 btn-sm btn-default"},"계좌 수정")])]),ce.isShow7?((0,n.wg)(),(0,n.iD)("tr",$,[R,(0,n.Wm)(r.h,{modelValue:ce.f_bank,"onUpdate:modelValue":t[23]||(t[23]=e=>ce.f_bank=e),label:"",required:""},null,8,["modelValue"])])):(0,n.kq)("",!0),ce.isShow7?((0,n.wg)(),(0,n.iD)("tr",M,[L,(0,n.Wm)(r.h,{modelValue:ce.f_bank_name,"onUpdate:modelValue":t[24]||(t[24]=e=>ce.f_bank_name=e),label:"",required:""},null,8,["modelValue"])])):(0,n.kq)("",!0),ce.isShow7?((0,n.wg)(),(0,n.iD)("tr",Z,[H,(0,n.Wm)(r.h,{modelValue:ce.f_bank_num,"onUpdate:modelValue":t[25]||(t[25]=e=>ce.f_bank_num=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[26]||(t[26]=e=>fe.update_consumer_member_f_bank()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[Y,(0,n._)("td",null,(0,a.zw)(ce.f_bank_name),1)]),(0,n._)("tr",null,[Q,(0,n._)("td",null,(0,a.zw)(ce.f_bank_num),1)]),G])]),(0,n._)("header",X,[(0,n._)("h1",ee,"농가명 "+(0,a.zw)(ce.f_farm_name),1)]),(0,n._)("table",te,[le,(0,n._)("tbody",null,[(0,n._)("tr",null,[ne,(0,n._)("td",null,(0,a.zw)(ce.f_explanation),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[27]||(t[27]=(...e)=>fe.f_explanation_show&&fe.f_explanation_show(...e)),class:"n-btn w100 btn-sm btn-default"},"농가 설명 수정")])]),ce.isShow9?((0,n.wg)(),(0,n.iD)("tr",oe,[ae,(0,n.Wm)(r.h,{modelValue:ce.f_explanation,"onUpdate:modelValue":t[28]||(t[28]=e=>ce.f_explanation=e),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[29]||(t[29]=e=>fe.update_consumer_member_f_explanation()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[se,(0,n._)("td",null,(0,a.zw)(ce.f_major_crop),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[30]||(t[30]=(...e)=>fe.f_major_crop_show&&fe.f_major_crop_show(...e)),class:"n-btn w100 btn-sm btn-default"},"주요 농작물 수정")])]),ce.isShow10?((0,n.wg)(),(0,n.iD)("tr",re,[_e,(0,n.Wm)(r.h,{modelValue:e.updatebank,"onUpdate:modelValue":t[31]||(t[31]=t=>e.updatebank=t),label:"",required:""},null,8,["modelValue"]),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[32]||(t[32]=e=>fe.update_consumer_member_f_major_crop()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0),(0,n._)("tr",null,[ie,(0,n._)("td",null,(0,a.zw)(ce.f_img),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[33]||(t[33]=(...e)=>fe.f_img_show&&fe.f_img_show(...e)),class:"n-btn w100 btn-sm btn-default"},"농가 사진 수정")])]),ce.isShow11?((0,n.wg)(),(0,n.iD)("tr",ue,[(0,n._)("input",{multiple:"multiple",onChange:t[34]||(t[34]=e=>fe.uploadFarmImages()),type:"file",id:"farm_img_files",name:"farm_img_files",accept:"image/*"},null,32),de,(0,n._)("td",null,[(0,n._)("button",{type:"button",onClick:t[35]||(t[35]=e=>fe.updateFarmImage()),class:"n-btn w100 btn-sm btn-default"},"수정하기")])])):(0,n.kq)("",!0)])])]),(0,n.Wm)(pe)],64)}var ce=l(5483),fe=l(2635),he=l(6265),pe=l.n(he),be={components:{bottomNav:ce["default"],SearchAddress:fe.Z},data(){return{pro_test:JSON.parse(localStorage.getItem("pro_test"))||"",user:JSON.parse(localStorage.getItem("user"))||"",addressInfo:{zipcode:JSON.parse(localStorage.getItem("user")).f_zipcode,address:JSON.parse(localStorage.getItem("user")).f_location},checkUser:"farm",isShow1:!1,isShow2:!1,isShow3:!1,isShow4:!1,isShow5:!1,isShow6:!1,isShow7:!1,isShow9:!1,isShow10:!1,isShow11:!1,farm_id:this.farm_id,f_passwd:this.f_passwd,f_phonenum:this.f_phonenum,f_name:this.f_name,f_num:this.f_num,f_zipcode:this.f_zipcode,f_location:this.f_location,f_bank:this.f_bank,f_bank_name:this.f_bank_name,f_bank_num:this.f_bank_num,f_farm_name:this.f_farm_name,f_explanation:this.f_explanation,f_major_crop:this.f_major_crop,f_img:null,f_profile_img:null}},methods:{searchAddressResult(e){console.log("event: ",e),this.addressInfo.zipcode=e.zipcode,this.addressInfo.location=e.address,pe().patch("api/memberAddress",{checkUser:"farm",id:this.user.farm_id,zipcode:e.zipcode,location:e.address},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e.data),alert("주소 변경이 완료되었습니다!")})).catch((e=>{console.log(e)}))},uploadFarmProfileImages(){this.f_profile_img=document.getElementById("farm_porfile_img_file")},updateFarmProfileImages(){console.log(this.user);let e=new FormData;for(let t of this.f_profile_img.files)e.append("new_profile_img",t);e.append("checkUser","farm"),e.append("id",this.user.farm_id),e.append("new_profile_img",this.user.f_profile_img),this.f_profile_img.length<1?alert("이미지 파일이 없습니다."):this.f_profile_img.length>1?alert("이미지 파일은 1개만 넣어주세요!"):"/farm_profile"==this.$route.path?pe().patch("/api/memberProfileImage",e,{headers:{TOKEN:this.user.token,"Content-Type":"multipart/form-data"}}).then((e=>{console.log("res.data",e.data),alert("등록 완료!")})).catch((e=>{console.log(e)})):alert("잘못된 접근입니다!")},uploadFarmImages(){this.f_img=document.getElementById("farm_img_files")},updateFarmImage(){console.log(this.user);let e=new FormData;for(let t of this.f_img.files)e.append("new_farm_img",t);e.append("farm_id",this.user.farm_id),e.append("f_img",this.user.f_img),this.f_img.length<1?alert("이미지 파일이 없습니다."):this.f_img.length>1?alert("이미지 파일은 1개만 넣어주세요!"):"/farm_profile"==this.$route.path?pe().patch("/api/farmImages",e,{headers:{TOKEN:this.user.token,"Content-Type":"multipart/form-data"}}).then((e=>{console.log("res.data",e.data),alert("등록 완료!")})).catch((e=>{console.log(e)})):alert("잘못된 접근입니다!")},f_passwd_show(){this.isShow1=!this.isShow1,console.log("나 눌렸다고")},f_phonenum_show(){this.isShow2=!this.isShow2},f_farm_name_show(){this.isShow3=!this.isShow3,console.log(3)},f_num_show(){this.isShow4=!this.isShow4},f_zipcode_show(){this.isShow5=!this.isShow5},updatebank_show(){this.isShow7=!this.isShow7},f_explanation_show(){this.isShow9=!this.isShow9},f_major_crop_show(){this.isShow10=!this.isShow10},f_img_show(){this.isShow11=!this.isShow11},navigatecheck_farm_loc(){this.$router.push("../myPage/farm_loc")},update_consumer_member_f_passwd(){console.log(this.checkUser),pe().patch("api/memberPassword",{checkUser:this.checkUser,id:JSON.parse(localStorage.getItem("user")).farm_id,passwd:this.f_passwd},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_phonenum(){pe().patch("api/memberPhoneNumber",{checkUser:this.checkUser,id:JSON.parse(localStorage.getItem("user")).farm_id,phonenum:this.f_phonenum},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_name(){pe().patch("api/memberName",{checkUser:this.checkUser,id:JSON.parse(localStorage.getItem("user")).farm_id,name:this.f_name},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_num(){pe().patch("api/farmMemberNumber",{farm_id:JSON.parse(localStorage.getItem("user")).farm_id,f_num:this.f_num},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_zipcode(){pe().patch("api/memberAddress",{checkUser:this.checkUser,id:JSON.parse(localStorage.getItem("user")).farm_id,zipcode:this.zipcode,location:this.location},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_location(){pe().patch("api/updateFarmMember/location",{checkUser:this.checkUser,farm_id:this.farm_id,f_location:this.f_location},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_bank(){console.log(typeof this.f_bank_num),console.log(this.f_bank,this.f_bank_name,this.f_bank_num),pe().patch("api/farmMemberBank",{f_bank:this.f_bank,f_bank_name:this.f_bank_name,f_bank_num:parseInt(this.f_bank_num),farm_id:JSON.parse(localStorage.getItem("user")).farm_id},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_farm_name(){pe().patch("api/farmMemberFarmName",{farm_id:JSON.parse(localStorage.getItem("user")).farm_id,f_farm_name:this.f_farm_name},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_explanation(){pe().patch("api/farmMemberExplanation",{farm_id:JSON.parse(localStorage.getItem("user")).farm_id,f_explanation:this.f_explanation},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_consumer_member_f_major_crop(){pe().patch("api/farmMemberMajorCrop",{farm_id:JSON.parse(localStorage.getItem("user")).farm_id,f_major_crop:this.f_major_crop},{headers:{TOKEN:this.user.token}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_Farm_member_f_img(){let e=new FormData;e.append("checkUser",this.checkUser),e.append("id",JSON.parse(localStorage.getItem("user")).farm_id),e.append("img",this.f_img),e.append("new_img",this.new_img),pe().patch("/api/farmImages",e,{headers:{TOKEN:this.user.token,"Content-Type":"multipart/form-data"}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},update_Farm_member_f_profile_img(){let e=new FormData;e.append("id",JSON.parse(localStorage.getItem("user")).farm_id),e.append("profile_img"),e.append("new_profile_img",this.new_profile_img),pe().patch("/api/memberProfileImage",e,{headers:{TOKEN:this.user.token,"Content-Type":"multipart/form-data"}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},ge=l(89);const we=(0,ge.Z)(be,[["render",me]]);var ke=we},6422:function(e,t,l){l.d(t,{O:function(){return i}});var n=l(3396),o=l(4357),a=l(4870),s=l(1107),r=l(9888),_=l(6199);const i=(0,s.a)({name:"VForm",props:{...(0,o.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:l,emit:s}=t;const i=(0,o.Np)(e),u=(0,a.iH)();function d(e){e.preventDefault(),i.reset()}function m(e){const t=e,l=i.validate();t.then=l.then.bind(l),t.catch=l.catch.bind(l),t.finally=l.finally.bind(l),s("submit",t),t.defaultPrevented||l.then((e=>{let{valid:t}=e;var l;t&&(null==(l=u.value)||l.submit())})),t.preventDefault()}return(0,r.L)((()=>{var e;return(0,n.Wm)("form",{ref:u,class:"v-form",novalidate:!0,onReset:d,onSubmit:m},[null==(e=l.default)?void 0:e.call(l,i)])})),(0,_.Z)(i,u)}})},8521:function(e,t,l){l.d(t,{D:function(){return c}});l(6699),l(8099);var n=l(1138),o=l(7139),a=l(3396),s=l(1107);const r=["sm","md","lg","xl","xxl"],_=(()=>r.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),i=(()=>r.reduce(((e,t)=>(e["offset"+(0,o.kC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>r.reduce(((e,t)=>(e["order"+(0,o.kC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(_),offset:Object.keys(i),order:Object.keys(u)};function m(e,t,l){let n=e;if(null!=l&&!1!==l){if(t){const l=t.replace(e,"");n+=`-${l}`}return"col"===e&&(n="v-"+n),"col"!==e||""!==l&&!0!==l?(n+=`-${l}`,n.toLowerCase()):n.toLowerCase()}}const c=(0,s.a)({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},..._,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},...(0,n.Q)()},setup(e,t){let{slots:l}=t;const n=(0,a.Fl)((()=>{const t=[];let l;for(l in d)d[l].forEach((n=>{const o=e[n],a=m(l,n,o);a&&t.push(a)}));const n=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!n||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return(0,a.h)(e.tag,{class:n.value},null==(t=l.default)?void 0:t.call(l))}}})}}]);
//# sourceMappingURL=615.7a4af3e1.js.map