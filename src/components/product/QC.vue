<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row no-gutters>
        <b-col cols="12" md="3" class="introtitle">{{ systemName }}</b-col>
        <b-col cols="12" md="9"></b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="12" md="6" class="Intro">
          <ol class="features">
            <li v-for="(features, index) in features" :key="index">
              {{ features }}
            </li>
          </ol>
        </b-col>
        <b-col cols="12" md="6" class="visionImg">
          <div
            v-for="(vision, index) in imgVision"
            :key="index"
            :class="vision.style"
          >
            <b-img :src="vision.img"></b-img>
          </div>
         
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "QC",
  data() {
    return {
      systemName: "品質管理系統",
      features: [
        "QC(巡)檢測表",
        "異常單紀錄",
        "客訴單紀錄",
        "eSOP",
        "SPC"
      ],
      imgVision:[
          {
              img:require('@/assets/product/qc/img_qc1.png'),
              desc:'',
              style:'imgQC01'
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
  width: 4.2em;
  height: 1px;
  margin-left: -2.1em;
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
  width:60%;
}

</style>
