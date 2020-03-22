<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row no-gutters>
        <b-col cols="12" md="3" class="introtitle">{{ systemName }}</b-col>
        <b-col cols="12" md="9"></b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="12" md="4" class="Intro">
            <ol class="features">
                <li v-for="(features,index) in features" :key="index">{{ features }}</li>
            </ol>
        </b-col>
        <b-col cols="12" md="4" class="visionImg">
            <div v-for="(vision,index) in imgVision" :key="index" :class="vision.style">
                <b-img :src="vision.img"></b-img>
            </div>
            <div id="visionText">{{visionText}}</div>
        </b-col>
        <b-col cols="12" md="4" class="collectionImg">
             <div v-for="(collection,index) in imgtext" :key="index" :class="collection.style">
                <b-img :src="collection.img"></b-img>
                <div>{{collection.desc}}</div>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Collection",
  data() {
    return {
      systemName: "設備資料採集系統",
      features: [
        "生產狀況可視化",
        "設備生產履歷（Recipe, 參數）",
        "SPC",
        "與機台通訊採集資料 (EAP）"
      ],
      visionText:'可視化資訊',
      imgtext:[
          {
              img:require('@/assets/product/collection/img_s1.jpg'),
              desc:'三色燈採集',
              style:'imgS1'
          },
          {
              img:require('@/assets/product/collection/img_s2.jpg'),
              desc:'採集生產動作',
              style:'imgS2'
          }

      ],
      imgVision:[
          {
              img:require('@/assets/product/collection/img_f01.png'),
              desc:'可視化設備總覽',
              style:'imgF01'
          },
          {
              img:require('@/assets/product/collection/img_f03.png'),
              desc:'生產狀況統計',
              style:'imgF03'
          },
          
          {
              img:require('@/assets/product/collection/img_f02.png'),
              desc:'可視化缺陷統計',
              style:'imgF02'
          }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bv-example-row{
    margin-top:3rem;
}
.introtitle {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
}
.introtitle::after {
  background-color: #f39b08;
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 5.2em;
  height: 1px;
  margin-left: -2.6em;
}
.Intro{
    margin-top: 6rem;
    padding-left: 5rem;
}

.features li{
    padding: .8em 0;
    font-size: 1.5rem;
}
.visionImg{
    margin-top:5rem;
}
.visionImg img{
    width:70%;
}

/*可視化設備總攬 */
.visionImg div{
    margin-top: 2rem;
}
.imgF03 img{
    float:right;
}
#visionText{
    position:absolute;
    bottom:5rem;
    font-size: 1.2rem;
    left:50%;
    margin-left: -3.5em;
}
/* 採集 */
.collectionImg{
    padding:0 5rem;
}
.imgS1,.imgS2{
    position:relative;
    text-align: center;
    margin-bottom: 5rem;
}

</style>
