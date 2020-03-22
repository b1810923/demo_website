<template>
  <div>
      <b-container fluid class="bv-example-row">
      <b-row no-gutters>
        <b-col class="header">{{text}}</b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="12" md="3" class="producttitle">{{ productTitle }}</b-col>
        <b-col cols="12" md="9"></b-col>
      </b-row>
      <b-row no-gutters>
        <b-col>
          <div class="import">
            <b-img :src="importimg"></b-img>
          </div>
          <router-view></router-view>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="12" md="3" class="customertitle">{{ customerTitle }}</b-col>
        <b-col cols="12" md="9"></b-col>
      </b-row>
     
      <b-row no-gutters>
        <b-col class="header center">{{block.text1}}</b-col>
      </b-row>

      <b-row no-gutters>
        <b-col cols="12" md="6" class="custom"><b-img :src="block.ori"></b-img></b-col>
        <b-col cols="12" md="6" class="custom"><b-img :src="block.now"></b-img></b-col>
      </b-row>
      <b-row no-gutters>
        <b-col class="header center">{{block.text2}}</b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="12" md="4" class="systemblock"><div>{{block.systemtextOne}}</div></b-col>
        <b-col cols="12" md="4" class="systemblock"><div>{{block.systemtextTwo}}</div></b-col>
        <b-col cols="12" md="4" class="systemblock"><div>{{block.systemtextThree}}</div></b-col>
      </b-row>
      
      <b-row no-gutters>
        <b-col cols="12">
          <div class="footer">
            <div id="language">語言：<select v-model="language"><option value="tw-zh">繁體中文</option><option value="en">English</option></select></div>
            <div>Copyright © 2017 - {{copyrightYear}} Susan</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="contactUs"><a class="contact" @click.prevent="sendMail" target="_blank"><div class="mail"></div>{{contact.text}}</a></div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data(){
    let d = new Date;
    let y = d.getFullYear();
    return {
      copyrightYear:y,
      language:"tw-zh",
      productTitle:'顧問階段式導入',
      customerTitle:'客製化系統',
      importimg:require('@/assets/product/productLine.png'),
      text:'挖掘問題背後真正的原因，才能用有效的方法解決它並且產生真正的回饋價值。',
      block:{
        ori:require('@/assets/product/customer_00.png'),
        now:require('@/assets/product/customer_01.png'),
        arrow:require('@/assets/product/next.svg'),
        text1:'顧問需求訪談提供您符合所需的系統方案',
        text2:'系統串接經驗，為您提升工廠現有智造系統',
        systemtextOne:'ERP串接',
        systemtextTwo:'AGV串接',
        systemtextThree:'MRP串接',
        
      },
      contact:{
        text:'聯絡我們',
        img:require('@/assets/product/contact.svg')
      }
    }
  },
  methods:{
    sendMail(){
      this.$router.push("/Contact");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  padding: 5rem 1rem;
  font-size: 1.5rem;
  line-height: 3rem;
  text-align: right;
}
.center{
  text-align: center;
}

.custom img{
  width:100%;
}
.systemblock{
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.systemblock>div{
  display:table-cell;
  vertical-align: middle;
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 2rem;
  color:black;
  text-align: center;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.3);
  border-radius: 50%;
}
.producttitle,.customertitle {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
}
.producttitle::after {
  background-color:var(--title-line-color);
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 4.6em;
  height: 1px;
  margin-left: -2.3em;
}
.customertitle{
  margin-top: 3rem;
}
.customertitle::after{
  background-color: var(--title-line-color);
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 2.6em;
  height: 1px;
  margin-left: -1.3em;
}
.import{
  width:100%;
}
.import img{
  width:100%;
}
.contactUs{
    position:fixed;
    text-align: right;
    top: 50%;
    margin-top: -4em;
    right: 0;
    width: 100%;
}
/* .contactUs img{ */
.mail{
    /* margin-left: -.5em;*/
    margin-bottom:.5em; 
    display: inline-block;
    top:0;
    width: 1em;
    height: 1em;
    background-image: url('~@/assets/product/contact.svg');
}
.contact{
  writing-mode:vertical-rl;
  font-size: 1.2rem;
  letter-spacing: .5em;
  opacity: 1;
  color: black;
  padding: 1em 1em .5em 1em;
  background: var(--contact-ori-color);
  cursor: pointer;
}
.contact:hover{
  color: white;
  background:var(--website-dark-color);
}
.contact:hover .mail, .mail:hover{
  background-image: url('~@/assets/product/contact_hover.svg');
}

#language{
  position:absolute;
  bottom:3rem;
  right:1rem;
}
#language+div{
  text-align:center;
}
.footer{
  margin-top: 3rem;
  margin-bottom: 3rem;
}
@media (max-width: 480px){
  .footer{
    position:relative;
    height:80px;
  }
  #language{
    position:absolute;
    bottom:1rem;
    right:0;
  }
}
</style>
