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
            <li v-for="(features, index) in features" :key="index">
              {{ features }}
            </li>
          </ol>
        </b-col>
        <b-col cols="12" md="4" class="visionImg">
          <div
            v-for="(vision, index) in imgVision"
            :key="index"
            :class="vision.style"
          >
            <b-img :src="vision.img"></b-img>
            <div v-html="vision.desc"></div>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="visionImg fixRight">
          <div
            v-for="(vision, index) in imgRight"
            :key="index"
            :class="vision.style"
          >
            <b-img :src="vision.img"></b-img>
            <div v-html="vision.desc"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Mold",
  data() {
    return {
      systemName: "模具管理系統",
      features: [
        "模具保養",
        "模具維修",
        "生產履歷",
        "找尋模具",
        "警示"
      ],
      imgVision:[
          {
              img:require('@/assets/product/mold/img_s01.png'),
              desc:'模具保養系統頁面',
              style:'imgMold01'
          },
          {
              img:require('@/assets/product/mold/img_s03.jpg'),
              desc:'模具找尋',
              style:'imgMold03'
          }
      ],
      imgRight:[
          {
              img:require('@/assets/product/mold/img_s02.png'),
              desc:'模具保養系統頁面',
              style:'imgMold02'
          }
      ]

    }
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
  width: 3.6em;
  height: 1px;
  margin-left: -1.8em;
}
.Intro{
    margin-top: 6rem;
    padding-left: 5rem;
}

.features li{
    padding: .8em 0;
    font-size: 1.5rem;
}
.visionImg img{
  width:100%;
}
.fixRight{
  margin-top: 5rem;
}
.imgMold01{
  text-align: center;
}
.imgMold02{
  text-align: center;
}
.imgMold03{
  margin-top: 5rem;
  text-align: center;
}
</style>
