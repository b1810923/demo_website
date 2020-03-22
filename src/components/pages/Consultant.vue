<template>
  <div>
      <b-container fluid class="bv-example-row">
        <b-row>
            <b-col cols="12" class="desc">
              <div v-html="text"></div>
          </b-col>
        </b-row>
      <b-row no-gutters v-for="(pic,index) in this.pics" :key="index" class="column">
          
          <b-col cols="12" xs="4" class="frame">
              <b-img :class="{imgWidth:pic.IsWidth,imgHeight:!pic.IsWidth,fixWidth:needFix}" :src="pic.img"></b-img>
              
          </b-col>
          <b-col cols="12" xs="8" class="desc">
              <div v-html="pic.desc"></div>
          </b-col>
      </b-row>
      <div class="back"><a class="link" @click.prevent="returnBack">上一頁</a></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Consultant',
  data(){
      return{
          name:'test',
          position:'position',
          text:"",
          pics:[],
          needFix:false,
          consultant:[
              {
                  name:'susan',
                  position:'前端工程師',
                  text:"",
                  pics:[
                      {img:require('@/assets/consultant/personal/susan/p03.jpg'),IsWidth:false,desc:'Hi，我是Susan。<br>健身也健心，面對困難也不會屈服。'},
                      {img:require('@/assets/consultant/personal/susan/p00.jpg'),IsWidth:false,desc:'我的辦公環境有黃金葛跟小暴龍。'},
                      
                  ]
              }
          ]
      }
  },
  created(){
      let name = this.$route.params.name.toLowerCase();
      let vm = this;
      this.consultant.forEach(function(ele){
          if(ele.name == name){
            vm.name = name;
            vm.position = ele.position;
            vm.text = ele.text;
            vm.pics = ele.pics;
          }
      });

      let winWidth = document.body.clientWidth;
      if(winWidth <= 480){
          vm.needFix = true;
      }

  },
  methods:{
      returnBack(){
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bv-example-row{
    margin-top: 6rem;
}
.column{
    margin: 5rem 0;
}

.desc{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 2rem;
}
.frame{
    text-align: center;
}
.imgWidth,.imgHeight{
     padding: 20px;
     box-shadow:inset 0 0 1rem #f5f5f7,0 0 1rem #a1a1a6;
}

.imgWidth{
    width: 50%;
}
.imgHeight{
    height: 400px;
}

.imgWidth.fixWidth{
    width: 100%;
}

.back{
    position:fixed;
    text-align: right;
    bottom: 5%;
    right: 1%;
    width: 100%;
}
.link{
    background-color:#f39b08;
    color:white;
    border-radius: 5rem;
    padding: 0.5rem 3rem;
}
a:hover{
    background-color:#f8c46a;
    color:white;
    cursor:pointer;
    border-radius: 5rem;
    padding: 0.5rem 3rem;
}
</style>
