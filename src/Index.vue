<template>
  <div id="index">
      <div id="logo"></div>
      <div id="menuBar" @click="showMenu">
        <div id="showBar" :class="{'show':showBar, 'hide':hideBar}" @click.stop="hideMenu"></div>
      </div>
      <nav :class="{'navShow':showNavUl}">
      <ul :class="{'show':showNavUl,'hide':hideNavUl}" id="menu">
        <li @click="hideMenu"><router-link to="/landing">首頁</router-link></li>
        <li @click="showProductList" :class="{'showPList':showList}">系統<ul id="list">
              <li @click="hideMenu"><router-link to="/IQA">生產管理系統</router-link></li>
              <li @click="hideMenu"><router-link to="/MOLD">模具管理系統</router-link></li>
              <!-- <li @click="hideMenu"><router-link to="/WMS">倉儲系統</router-link></li> -->
              <li @click="hideMenu"><router-link to="/QC">品質管理系統</router-link></li>
              <!-- <li @click="hideMenu"><router-link to="/Collection">設備資料採集系統</router-link></li> -->
            </ul>
        </li>
        <li @click="hideMenu"><router-link to="/news/20200215">健身</router-link></li>
        <li @click="hideMenu"><router-link to="/about">關於</router-link></li>
        <li @click="hideMenu"><router-link to="/contact">聯絡</router-link></li>
      </ul>
      </nav>
      
      <div id="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data:function(){
    let d = new Date;
    let y = d.getFullYear();
    
    return {
      copyrightYear:y,
      showBar:false,
      hideBar:true,
      hideNavUl: false,
      hasBar: false,
      showList: false,
      winWidth : document.body.clientWidth,
      scrollPosition: window.scrollY
    }
  },
  created(){
    //console.log("Index.vue");
    //console.log(process.env.VUE_APP_URL);
    if (this.winWidth<=480){
      this.hasBar = true;
    }else{
      this.hasBar = false;
    }
  },
  mounted(){
    window.onresize = ()=>{
      this.winWidth = document.body.clientWidth;
    }
  },
  computed:{
    showNavUl(){
      return !(this.hideNavUl);
    }
  },
  watch:{
    winWidth(val){
      if (val<=480){
        this.hasBar = true;
      }else{
        this.hasBar = false;
      }
    },
    hasBar:function(){
      if(this.hasBar){
        if(this.showBar)
          this.hideNavUl = false;
        else
          this.hideNavUl = true;
      }else{
        this.hideNavUl = false;
      }
    },
    showBar:function(val){
      if(val)
        this.hideNavUl = false;
      else
        this.hideNavUl = true;
    }
  },
  methods:{
    showMenu(){
      this.showBar = true;
      this.hideBar = false;
    },
    hideMenu(){
      this.showBar = false;
      this.hideBar = true;
    },
    showProductList(){
      this.showList = !this.showList;
    }
  }
}
</script>

<style>
:root{
  --main-menu-height: 3.5rem;
  --menu-word-height: 17.6px;
  --website-color: #fee46f;
  --website-dark-color: #f49d14;
  --title-line-color: #f39b08;
  --contact-ori-color: rgba(243,155,8,0.3);
}
html{
  font-size: 14px;
}
#index {
  font-family: 微軟正黑體,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
a{
  color:white;
  text-decoration: none;
}
ul{
  list-style: none;
  padding:0;
  margin:0;
}
.show{
  display:block;
}
.hide{
  display:none;
}
/* Index CSS */
#logo{
  position:fixed;
  top:3px;
  left:1rem;
  z-index:2;
  background-image: url("~@/assets/logo.png");
  background-size:150px auto;
  background-repeat:no-repeat;
  height: calc(var(--main-menu-height) - 0.2rem);
  width: 150px;
  z-index:100;
}
#menuBar{
  z-index:100;
}
nav{
  position:fixed;
  top:0;
  right:0;
  height: var(--main-menu-height);
  width:100%;
  box-shadow:0 0.2rem 0.2rem rgba(0,0,0,.25),inset 0 -1px 5px rgba(0,0,0,.25);
  background-color:black;
  z-index:99;
}
nav a:visited,nav a:active{
  color: white;
}

nav ul{
  margin-top: calc((var(--main-menu-height) - var(--menu-word-height))/2);
  margin-right: 2%;
  text-align:right;
  color:white;
}
nav ul:first-child li{
  display:inline-block;
  margin-left: 3rem;
  
}

#menu{
  position: relative;
}
#menu li:hover,#menu a:hover{
  color: var(--website-color);
  cursor:pointer;
  text-decoration: none;
}
#menu>li:nth-child(2){
  padding-bottom: calc((var(--main-menu-height) - var(--menu-word-height))/2);
}
#list{
  position:absolute;
  width:110px;
  border: 1px solid rgba(88, 88, 90, 0.37);
}
#list li{
  display:block;
  text-align:left;
  font-size:0.8rem;
  margin: 0.8rem 0;
  padding-left: 0.5rem;
}
/* RWD list 變動 */
#list{
  top:1.3rem;
  background-color:white;
}


/* second ul font color */
#list li a,#list a:active,#list a:visited{
  color:black;
}
/* #list li:nth-child(2){
  padding-bottom: 0;
} */

li>ul{
  display:none;
}
li:hover>ul{
  display:block;
}
#index{
  height:100vh;
}
#content{
  word-wrap:break-word;
  margin-top: var(--main-menu-height);
}
footer{
    display:none;
    /* position:absolute;
    bottom: 0.1rem;
    right:0;
    text-align:center;
    height: 1rem;
    width:100%;
    border-top: 1px solid #d2d2d7;
    color:#86868d;
    padding: 17px 0 21px; */
}

@media (min-width: 480px) and (max-width:1080px) {
  *{
    font-size: 12px;
  }
  #logo{
    /* position: absolute; */
    position:fixed;
    top:5px;
    left:1rem;
    z-index:2;
    background-image: url("~@/assets/logo.png");
    background-size:115px auto;
    background-repeat:no-repeat;
    height: calc(var(--main-menu-height) - 0.2rem);
    width: 130px;
    z-index:100;
  }
  #menu li:nth-child(2) ul{
    display:none;
  }
  #menu li.showPList ul{
    display:block;
  }
}
@media (max-width: 480px){
  :root{
    --main-menu-height:4rem;
  }
  html{
    font-size: 11px;
  }
  #logo{
    /* position: absolute; */
    position:fixed;
    top:5px;
    left: calc(50% - 60px);
    z-index:2;
    background-image: url("~@/assets/logo.png");
    background-size:120px auto;
    background-repeat:no-repeat;
    z-index:100;
  }
  
  #menuBar{
    position:fixed;
    top:5px;
    right:0;
    z-index:100;
    background-image: url("~@/assets/menu.png");
    background-size:35px auto;
    background-repeat:no-repeat;
    height: calc(var(--main-menu-height) - 0.2rem);
    width: 50px;
  }
  #showBar{
    position:fixed;
    top:5px;
    right:0;
    z-index:100;
    background-image: url("~@/assets/close.png");
    background-size:35px auto;
    background-repeat:no-repeat;
    height: calc(var(--main-menu-height) - 0.2rem);
    width: 50px;
  }
  li.showPList>#list{
    top:0;
    background-color: black;
  }
  #content{
    word-wrap:break-word;
  }
  .navShow{
    height:100%;
  }
  nav ul{
    margin-right: 0;
  }
  #menu li>a{
    display:block;
    margin: -1rem 0 -1rem -3rem;
    padding: 1rem 0 1rem 3rem;
  }
  #menu>li{
    border-bottom: 1px solid #444;
  }
  #menu>li:last-child{
    border-bottom: 0;
  }
  nav li:first-child{
    margin-top: var(--main-menu-height);
  }
  
  nav ul:first-child li{
    display:block;
    margin-left:0;
    padding: 1rem 0 1rem 3rem;
    text-align: left;
  }
  ul li:nth-child(2){
    position: relative;
    cursor: pointer;
    padding-bottom: 0;
  }
  li>#list{
    display:none;
  }
  /* #menu.show li.showPList{
    padding-bottom:0;
  } */
  li.showPList>#list{
    display:block;
    margin-left: -3rem;
    padding:0; 
    width: calc(100% + 3rem);
  }
  li.showPList>#list li a,li.showPList>#list a:active,li.showPList>#list a:visited{
    color:white;
  }
  li.showPList>#list li{
    margin:0;
    padding-left: 5rem;
  }
  li.showPList>#list li:first-child{
    margin-top:0;
  }
  #list{
    position:relative;
    border:0;
  }
  .blockTitle{
    word-wrap:break-word;
  }
  .blockText{
    word-wrap:break-word;
  }
  
  footer{
    display:none;
    font-size:0.5rem;
  }
}
</style>
