<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for='(slides,index) in slideDatas' 
        :caption='slides.imgtitle'
        :key='index'
        :text='slides.imgtext'
        :img-src="slides.imgpath"
      >
      </b-carousel-slide>
    </b-carousel>
    <div v-for="(block,index) in blockDatas" :key="index" class="blockStyle">
          <div :class="block.style" :style="{backgroundImage:'url('+block.bgimg+')',height:bgHeight+'px'}">
            <div class="item blockTitle">{{block.title}}</div>
            <div class="item blockText">{{block.text}}</div>
            <div class="item blockMore"><router-link :to="block.href" class="blockEnter">{{block.btnText}}</router-link></div>
          </div>
    </div>
    <b-container fluid class="bv-example-row">
      <b-row no-gutters class="Intro newsType">
        <b-col class="introtitle">{{newsTitle}}</b-col>
      </b-row>
      <b-row no-gutters class="newsPadding">
        <b-col cols="12" md="6" lg="4" v-for="(news,index) in newsDatas" :key="index">
          <div class="newsExample">
            <div>
              <div class="newsHeader">
                <b-img :src="news.img"></b-img>
              </div>
              <div class="newsBody">
                <div class="newsDate">{{news.date}}</div>
                <div class="newsTitle">{{news.title}}</div>
                <div class="newsText">{{news.text}}</div>
                <div class="newsMore"><router-link class="newsLink" :to="news.href">View More</router-link></div>
              </div>
              
             </div>
          </div>
        </b-col>
      </b-row>
      <b-row no-gutters class="Intro customerType">
        <b-col cols="12">
          <hr>
        </b-col>
        <b-col>
          <b-col class="introtitle">{{customerTitle}}</b-col>
        </b-col>
      </b-row>
      
      <b-row no-gutters class="customerArea">
        <b-col md="6" lg="3" v-for="(customer,index) in customerImgOne" :key="index">
          <img :src="customer.img" :alt="customer.alt"/>
        </b-col>
      </b-row>
      <!-- <b-row no-gutters class="customerArea">
        <b-col md="6" lg="3" v-for="(customer,index) in customerImgTwo" :key="index">
          <img :src="customer.img" :alt="customer.alt"/>
        </b-col>
      </b-row>
      <b-row no-gutters class="customerArea heightImg">
        <b-col md="6" lg="3" v-for="(customer,index) in customerImgThree" :key="index">
          <img :src="customer.img" :alt="customer.alt"/>
        </b-col>
      </b-row> -->
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
import slide01 from '../../assets/slide/slide00.jpg';
import slide02 from '../../assets/slide/slide01.jpg';
import slide03 from '../../assets/slide/slide02.jpg';
import bgimg01 from '../../assets/landing/bg01.jpeg';
import bgimg02 from '../../assets/landing/bg02.jpeg';

export default {
  name: "Landing",
  data(){
    /* 768 ~ 992 newsDatas 4筆資料 >= 992 3筆資料 */
    /* 最新消息圖片4x3 */
    let d = new Date;
    let y = d.getFullYear();
    /*block背景圖片 750x1000 */
    return {
      bgHeight:Math.ceil((document.body.clientWidth)*(1.6)/3),
      copyrightYear:y,
      language:"tw-zh",
      newsTitle:'健身資訊',
      customerTitle:'素材來源',
      slideDatas:[
        {
          imgpath:slide01,
          imgtext:'使用JS、jQuery、Vue.js開發',
          imgtitle:'前端工程師'
        },
        {
          imgpath:slide02,
          imgtext:"有資料庫、資料結構、演算法專業訓練",
          imgtitle:'資工系背景'
        },
        {
          imgpath:slide03,
          imgtext:"做過三年php後端工程師",
          imgtitle:'後端工程開發背景'
        }
      ],
      blockDatas:[
        {
          style:'blockBG leftStyle',
          title:'工業物聯網',
          text:'感測器應用、設備資料採集，可視化生產資訊，分析採集資料改善製程，達到品質控管。',
          btnText:'瞭解更多...',
          href:'IQA',
          bgimg:bgimg01
        },
        {
          style:'blockBG rightStyle',
          title:'模具管理系統',
          text:'工廠管理方案，串聯工單列表上線模具，方便工廠按照生產計畫規劃模具保養時程。後台提供完整模具保養紀錄，平板操作使用簡易。',
          btnText:'瞭解更多...',
          href:'MOLD',
          bgimg:bgimg02
        }
      ],
      newsDatas:[
        {
          title:'TDEE是什麼？',
          img:require('@/assets/news/news20200215_view.jpg'),
          date:'2020-02-15',
          text:'',
          href:'news/20200215'
        },
        {
          title:'BMR是什麼？',
          img:require('@/assets/news/news20191121_view.jpg'),
          date:'2019-11-21',
          text:'',
          href:'news/20191121'
        },
        {
          title:'健身新手必看，RM是什麼？',
          img:require('@/assets/news/news20190916.jpg'),
          date:'2019-09-16',
          text:'',
          href:'news/20190916'
        }
      ],
      customerImgOne:[
        { img:require('@/assets/customer/customer01.png'), alt:'Pexels'},
        { img:require('@/assets/customer/customer02.png'), alt:'FLATICON'}
      ],
      // customerImgTwo:[
      //   { img:require('@/assets/customer/customer05.png'), alt:''},
      //   { img:require('@/assets/customer/customer06.jpg'), alt:''},
      //   { img:require('@/assets/customer/customer07.gif'), alt:''},
      //   { img:require('@/assets/customer/customer08.jpg'), alt:''}
      // ],
      // customerImgThree:[
      //   { img:require('@/assets/customer/customer09.gif'), alt:''},
      //   { img:require('@/assets/customer/customer10.png'), alt:''},
      //   { img:require('@/assets/customer/customer11.jpg'), alt:''},
      //   { img:require('@/assets/customer/customer12.jpg'), alt:''}
      // ],
      winWidth: document.body.clientWidth
    }
  },
  created(){
    /* block文字字數處理 */
    if(this.winWidth<=480){
      this.blockDatas.forEach(function(ele){
        let wordEtc = (ele.text.length > 20)? '...':'';
        ele.text = ele.text.substr(0, 20)+wordEtc;
      });
    }else if((this.winWidth >480) && (this.winWidth < 1080)){
      this.blockDatas.forEach(function(ele){
        let wordEtc = (ele.text.length > 40)? '...':'';
        ele.text = ele.text.substr(0, 40)+wordEtc;
      });
    }else{
      this.blockDatas.forEach(function(ele){
        let wordEtc = (ele.text.length > 450)? '...':'';
        ele.text = ele.text.substr(0, 450)+wordEtc;
      });
    }
    this.bgHeight = Math.ceil((document.body.clientWidth)*(1.6)/3);
  },
  watch:{
    language:function(){
      console.log(this.language);
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Intro{
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
.introtitle::after{
  background-color: var(--title-line-color);
  content:"";
  position:absolute;
  left:50%;
  bottom:0;
  width:1.4em;
  height:1px;
  margin-left:-0.7em;
}
.newsType{
  margin-top: 40px;
}
.customerType{
  margin-bottom: 40px;
}
.customerType hr{
  margin-top: 20px;
  margin-bottom: 60px;
  border:0;
  border-top: 1px solid #eee;
}
.customerArea{
  text-align: center;
}
.customerArea div{
  padding-bottom: 3em;
}
.customerArea img{
  max-width: 100%;
  height: 35px;
}

.customerArea.heightImg img{
  height: 60px;
}
#language{
  position:absolute;
  bottom:2rem;
  right:1rem;
}
#language+div{
  text-align:center;
}
/* block style */


.blockBG{
  background-repeat: no-repeat;
  background-size: 40% auto;
  
  display:flex;
  flex-direction: column;
  justify-content: center;
}

.leftStyle{
  background-position: 100% 0%;
  background-color: #eff5f4;
  padding-left:3rem;
}
.rightStyle{
  background-position: 0% 0%;
  background-color: #f5f8fb;
  padding-right:3rem;
  align-items:flex-end;
  
}
.item{
  width: calc(60% - 6rem);
  height: 30%;
  
}
.blockTitle{
  padding-top: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
}

.blockText{
  font-size:1.5rem;
}
.blockMore{
  position:relative;
}

.blockEnter{
  margin-top: 25px;
  position:absolute;
  right: 0;
  font-size: 1rem;
  background-color:var(--blockbtn-ori-color);
  padding:1rem;
  border-radius:1.25rem;
  text-align: center;
  /* 根據螢幕調整寬度 */
  width: 25%;
  color:white;
  text-decoration: none;
}
.blockEnter:hover{
  background-color:var(--blockbtn-hover-color)
  
}
/* News */
.newsExample{
  position:relative;
  padding: 3rem;
  height: 100%;
  margin-bottom:5vh;
  
}
.newsHeader img{
  border-radius: 0.70rem 0.70rem 0 0;
  width:100%;
}
.newsDate{
  font-size: 1rem;
  padding: 1.25rem 0;
  color:#86868b;
}
.newsTitle{
  margin-left:-2px;
  font-size:1.2rem;
  width: 100%;
}
.newsBody{
  position: relative;
  width:100%;
  height: 150px;
  padding: 0 1rem 1rem 1rem;
  margin-top: -1px;
  border-left: 1px solid #86868b;
  border-bottom: 1px solid #86868b;
  border-right: 1px solid #86868b;
}

.newsMore{
  position:absolute;
  right:0;
  bottom:0;
  width:100%;
  padding-bottom:1rem;
}
.newsLink{
  margin-left:70%;
  color:var(--website-dark-color);
}
.footer{
  margin-top: 2rem;
  margin-bottom: 2rem;
}
@media (min-width: 480px) and (max-width:1080px) {
  *{
    font-size: 12px;
  }
  
  /* 根據螢幕寬度調整寬度 */
  .blockEnter{
    width: 30%;
  }
  .item{
    width: 50%;
    height: 30%;
    
  }
  .blockTitle{
    padding-bottom:0;
  }
  .blockText{
    word-wrap:break-word;
  }
}
@media (max-width: 480px){
  *{
    font-size: 11px;
  }
  html{
    font-size: 11px;
  }
  
  /* 根據寬度調整block div寬度*/
  .leftStyle{
    padding-left:1rem;
  }
  .rightStyle{
    padding-right:1rem;
  }
  .item{
    width: 55%;
    height: 30%;
  }
  .blockTitle{
    padding-top:0;
  }
  /* 根據螢幕寬度調整寬度 */
  .blockEnter{
    margin-top:25px;
    padding: 0.45rem;
    width: 45%;
  }
  .blockTitle{
    padding-bottom:0;
  }
  .newsPadding{
    padding-top: 2rem;
  }
  .newsExample{
    padding:0 0.75rem;
  }
  
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
