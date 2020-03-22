<template>
  <div>
    
      <b-container fluid class="bv-example-row">
        <b-row>
           <b-col cols="12" md="6">
             <b-carousel
            id="consultant"
            :interval="4000"
            fade
            indicator
            background="#ababab"
            img-width="911"
            img-height="683"
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
           </b-col>
           <b-col cols="12" md="6">
             <div class="about">
              <header>聖經箴言</header>
              <p v-for="(us,index) in us" :key="index">{{us.paragraph}}</p>
            </div>
           </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="consultant">
            <div class="hr left"></div><div>自我介紹</div><div class="hr right"></div>
            </b-col>
        </b-row>
        <b-row class="partners">
          <b-col cols="6" sm="4" md="3" lg="2" class="partner" v-for="(consultant,index) in consultant" :key="index">
            <div class="photo" ref="photo">
              <a class="LinkConsultant" :href="consultant.href"><b-img rounded="circle" :src="consultant.img" :alt="consultant.position+' '+consultant.name" name="photo" :style="{height:photoHeight+'px'}">
              </b-img></a>
            </div>
            <div class="position">{{consultant.position}}</div>
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
  name: 'About',
  mounted(){
    window.onresize = ()=>{
      this.photoHeight = this.$refs.photo[0].offsetWidth;
    }
  },
  data(){
    /* slide pic 911*683 &  1:1 */
    let d = new Date;
    let y = d.getFullYear();
    return{
      photoHeight:'150px',
      copyrightYear:y,
      language:"tw-zh",
      us:[
        {paragraph:'　　心中貪婪的，挑起爭端；倚靠耶和華的，必得豐裕。心中自是的，便是愚昧人；憑智慧行事的，必蒙拯救。'},
        {paragraph:'　　賙濟貧窮的，不致缺乏；佯為不見的，必多受咒詛。惡人興起，人就躲藏；惡人敗亡，義人增多。'}
      ],
      slideDatas:[
        {
          imgpath:require('@/assets/consultant/pic00.jpg'),
          imgtext:'一句話說得合宜，就如金蘋果在銀網子裡。',
          imgtitle:'A word fitly spoken is like apples of gold in pictures of silver.'
        },
        {
          imgpath:require('@/assets/consultant/pic01.jpg'),
          imgtext:'遮掩自己罪過的，必不亨通；離棄罪過的，必蒙憐恤。',
          imgtitle:'He who keeps his sins secret will not do well; but one who is open about them, and gives them up, will get mercy.'
        }
      ],
      consultant:[
        {
          img:require('@/assets/consultant/susan.jpg'),
          position:'前端工程師',
          name:'Susan',
          href:'/consultant/susan'
        },
      ]
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo{
  position:relative;
}
.LinkConsultant:hover{
  opacity: 0.7;
}

.about header{
  text-align: center;
  font-size: 2rem;
  margin-top: 0.2rem;
  padding: 2rem 0;
  color:var( --title-line-color)
}
.about p{
  margin-bottom: 3rem;
  line-height: 2.8rem;
  font-size: 1.5rem;
}
.hr{
  position:absolute;
  height: 1px;
  width: calc(50% - 100px);
  border-bottom: 0.5px solid #eee;
}
.hr.left{
  top:50px;
}
.hr.right{
  top:50px;
  right:20px;
}
.hr+div{
  text-align: center;
  font-size: 2rem;
  padding:2rem 0;
  color:var(--title-line-color);
}
.consultant{
  position:relative;
  height:97px;
}
.partners div{
  margin-bottom:1em;
}
.partner{
  position:relative;
}
.photo{
  width: 100%;
}
.photo img{
  width: 100%;
}
.position{
  text-align: center;
  color: #6e6e73;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
}
@media (max-width: 480px){
  .hr{
    border:0;
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
