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
        <b-col cols="12" md="4" class="visionImg fixStyle">
          <div
            v-for="(vision, index) in imgVision"
            :key="index"
            :class="vision.style"
          >
            <b-img :src="vision.img"></b-img>
            <div v-html="vision.desc"></div>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="visionImg">
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
  name: "WMS",
  data() {
    return {
      systemName: "倉儲系統",
      features: ["物料庫存管理", "庫存水位警示", "可視化管理", "存放逾時提醒"],
      imgVision: [
        {
          img: require("@/assets/product/wms/img_s01.png"),
          desc: "庫存水位警示",
          style: "imgWMS01"
        }
      ],
      imgRight:[
        {
          img: require("@/assets/product/wms/img_s02.png"),
          desc: "可視化倉庫",
          style: "imgWMS02"
        }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bv-example-row {
  margin-top: 3rem;
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
  width: 2.2em;
  height: 1px;
  margin-left: -1.1em;
}
.Intro {
  margin-top: 6rem;
  padding-left: 6rem;
}

.features li {
  padding: 0.8em 0;
  font-size: 1.5rem;
}
.visionImg{
  text-align: center;
}
.visionImg img{
  width: 90%;
}
.fixStyle{
  margin-top: 10rem;
}
</style>
