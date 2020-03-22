<template>
  <div>
    <b-container fluid class="bv-example-row">
       <b-row no-gutters>
        <b-col cols="12" md="3" class="contact">{{ title }}</b-col>
        <b-col cols="12" md="9"></b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="12" md="3" class="Info">
          <div><div class="icon"><b-img :src="email.img"></b-img><div>{{email.text}}</div></div></div>
          <div><div class="icon"><b-img :src="phone.img"></b-img><div>{{phone.text}}</div></div></div>
        </b-col>
        <b-col cols="12" md="9" class="msg">
          <div id="form">
              <input name="name" :placeholder="name">
              <input name="phone" :placeholder="cphone">
              <input name="email" :placeholder="cemail">
              <!-- <input name="subject" :placeholder="subject"> -->
              <textarea name="msg" :placeholder="msg" rows="10" cols="30"></textarea>
              <div class="sendmail"><a href="/" class="send">送出</a></div>
          </div>
        </b-col>
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
  </div>
</template>

<script>
export default {
  name: "Contact",
  data(){
    let d = new Date;
    let y = d.getFullYear();
    
    return {
      copyrightYear:y,
      language:'tw-zh',
      name:'姓名',
      cemail:'Email',
      cphone:'電話',
      subject:'主旨',
      msg:'內容',
      title:'聯絡作者',
      email:{text:'lordlove@mail.com!',img:require("@/assets/mail.png")},
      phone:{text:'03-4567777',img:require("@/assets/phone.png")}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  margin: 2rem 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
}
.contact::after {
  background-color: #f39b08;
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 2.2em;
  height: 1px;
  margin-left: -1em;
}
.Info div{
  text-indent: 1em;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.icon img{
  width:25px;
}
.icon div{
  display:inline-block;
  text-indent: 1em;
}
#form{
  width: 100%;
  height: calc(100% + 4rem);
  text-align: center;
  display:flex;
  flex-direction: column;
  background-color: #eee;
  padding: 8rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
#form input,textarea{
  outline:none;
  padding: 8px 10px;
  border:0;
  background-color: transparent;
  border-bottom:1px solid rgba(0,0,0,.2)
}
#form input{
  height: 4rem;
}
.sendmail{
  position:relative;
}
.send{
  position:absolute;
  right:0;
  margin-top: 2rem;
  width: 30%;
  padding: 1rem;
  background-color: var(--website-dark-color);
}
#language{
  position:absolute;
  bottom:2rem;
  right:1rem;
}
#language+div{
  text-align:center;
}
.footer{
  margin-top: 8rem;
  margin-bottom: 2rem;
}
@media screen and (min-width:769px){
  #form{
    width: 80%;
  }
} 
</style>
