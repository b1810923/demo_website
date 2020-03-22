<template>
  <div>
      <b-container fluid class="bv-example-row">
      <b-row no-gutters id="sunstigeNews">
        <b-col cols="12" md="3">
            <ul id="newsMenu">
                <li :class="{active:news.selected}" v-for="(news,index) in newsdatas" :key="index" @click.prevent="selectNews(news.title)"><div v-html="news.title"></div><div class="newsDate">{{news.date}}</div></li>
            </ul>
        </b-col>
        <b-col cols="12" md="9" >
            <div :class="{show:news.selected,hide:!news.selected}" v-for="(news,index) in newsdatas" :key="index">
                <div class="newsImg"><b-img :src="news.img"></b-img></div>
                <div class="newsContent" v-html="news.htmltext"></div>
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
  name: 'News',
  data(){
    let d = new Date;
    let y = d.getFullYear();
    return {
      copyrightYear:y,
      language:"tw-zh",
      newsdatas:[
          {
              selected:false,
              date:'2020-02-15',
              title:'TDEE是什麼？',
              htmltext:'<h2>TDEE = 每日總熱量消耗</h2><p>身體在活動的狀況下，一整天總共消耗掉的熱量。</p><p></p><p>TDEE 每日熱量需求 = 基礎代謝率 + 總活動量 + 食物產熱效應</p><div class="four"><p>來源：網路</p></div>',
              img:require('@/assets/news/news20200215.jpg'),
              imgtext:''
          },
          {
              selected:false,
              date:'2019-11-21',
              title:'BMR是什麼？',
              htmltext:'<h2>BMR 為基礎代謝率</h2><p>靜態狀態下，人體一天所消耗的能量。</p><p>一整天什麼事情也不做也不想，維持身體運作身體需要消耗的能量。</p><p>男生BMR公式：66.5 + (13.7 * 體重) + (5 * 身高) - (6.8 * 年齡)</p><p>女生BMR公式：65.5 + (9.6 * 體重) + (1.8 * 身高) - (4.7 * 年齡)</p><div class="four"><p>來源：網路</p></div>',
              img:require('@/assets/news/news20191121.jpg'),
              imgtext:''
          },
          {
              selected:false,
              date:'2019-09-16',
              title:'健身新手必看<br>增肌原理',
              htmltext:'<h2>增肌原理</h2><p>增加肌肉質量，包含兩件事情：</p><div class="four"><p>1.肌肉力量的增加，提升肌力</p><p>2.肌肉總量的增加</p></div><p>從「一般適應症侯群(General Adaptation Syndrome, GAS)」來切入，當身體遇到壓力並花時間適應它時，身體會經歷正向的改變，讓我們具備處理壓力源的能力，這個適應過程稱為「超補償（Supercompensation）」。人體在征服壓力源後，會變得愈來愈強壯。</p><p>刺激→疲勞→補償→超補償→退化回正常，整個過程大約是一週的時間。</p><p>從訓練的角度來看，原理就是－機械張力、代謝壓力、肌肉損傷－所以沒有負荷、沒有強度、沒有持續時間，就不會有相對的肌肥大效應，通常會採用6–12RM的強度進行5–8組的訓練量。</p><p>在飲食上，很多人可能會記得增肌就是要吃到蛋白質2g x 自身體重(kg)的份量，雖然不能說這觀唸錯誤，但確實忽略了能量平衡的要素，當補充足夠的醣類、好的脂肪酸，讓身體能量飽滿，才會進行增肌的修補，醣類搭配蛋白質，才能幫助肌肉生長。最後當然是需要良好的睡眠與休息，休息期間應該要避免長距離的有氧運動，防止訓練干擾效應的產生，身體會傾向強度低的去適應，所以重訓完要避免大量的有氧運動，才不會破壞重訓的增肌效果。</p>',
              img:require('@/assets/news/news20190916.jpg'),
              imgtext:''
          },
          {
              selected:false,
              date:'2019-07-17',
              title:'健身新手必看<br>RM是什麼？',
              htmltext:'<h2>為什麼訓練量很大，但體態仍舊不符預期？</h2><p>內容的「量」多不代表「質」好</p><p>要讓體態改變，最重要的點在於給予身體重量上的「刺激」，讓肌肉被破壞並重新增長，才能達到我們的雕塑目的。</p><p>例如：練二頭彎舉，2.5公斤啞鈴舉100下與25公斤舉10下是否達到一樣效果？答案顯然是不的。</p><p>能舉到100下表示2.5公斤的重量無法讓你的身體達到刺激、無法促使肌肉被破壞，當然無法令肌肉肥大；相對只能10下的25公斤，表示這種訓練量能給予身體一定疲勞才能只舉10下，那麼這便會是能讓肌肉有機會重建的重量刺激。</p><h2>重量加重了，但體態沒有改變？</h2><p>重量增加了，但次數若還是很大，肌肉一直被過度使用與加強刺激，一直被破壞卻來不及修復，可能會造成肌肉損傷反而與我們訓練目的背道而馳。因此在訓練的安排，我們得要注意重量與次數的搭配。</p><h2>什麼是RM？</h2><p>RM全稱為 “repetition maximum”，意思是在此重量之下的最大反覆次數。因此1RM的重量代表的就是自己的極限。</p><h2>重量與次數搭配</h2><ul><li>學生Toro 自身體重60公斤，第一次訓練負重先抓20公斤可以很輕鬆深蹲20下，表示Toro 20RM為20公斤，20公斤無法達到肌肉破壞的刺激度</li><li>第二組，Toro 負重40公斤可以深蹲8下開始疲勞，表示Toro深蹲8RM為40公斤</li><li>第三組，Toro 負重50公斤，深蹲一下便達到極限，那麼50公斤為Toro的1RM</li></ul><p>利用這樣的方式，我們可以抓出20公斤的訓練對Toro 沒有太大幫助</p><p>40公斤為可以達到刺激但受傷風險低的重量</p><p>50公斤則會讓Toro 燃燒生命只為蹲一下的極限重量</p><h2>瞭解如何抓重量與RM後，訓練目的如何選擇</h2><p>不同的重量次數，都是為了達到目標，但大家目標各自不同，理所當然不能只用相同的RM程度的刺激去進行。<h4>簡易的判斷準則：</h4></p><ul><li>目標訂在力量增長時，抓 6RM 以下</li><li>肌肥大時，設定為 6 – 12RM</li><li>增加肌肉耐力時，挑選 12RM 以上的輕重量</li></ul><p>一般採用8-12RM值對應的重量來進行肌耐力訓練並達到力竭，12RM較為均衡，對耐力、力量、圍度都有所幫助；8RM會比較偏向力量和肌肥大多一些；再以上的重量較為力量表現與神經徵招能力。新手建議從12RM開始鍛鍊，要突破訓練可以採取8RM左右的重量。</p><div class="four"><p><a href="https://superfit.com.tw/workout/repetition-maximum/">出處「RM是什麼？重訓時的訓練量又該如何安排？」</a></p></div>',
              img:require('@/assets/news/news20190717.jpg'),
              imgtext:''
          }
      ]
    }
    
  },
  created(){
    let newsDate = this.$route.params.date;
    this.newsdatas.forEach(function(ele){
      let date =  ele.date.replace('-','').replace('-','');
      ele.selected = false;
      if(date == newsDate){
        ele.selected = true;
      }
    });
  },
  methods:{
      selectNews(title){
          this.newsdatas.forEach(function(ele){
              ele.selected = false;
              if (ele.title == title){
                  ele.selected = true;
              }
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  padding: 2rem 1rem;
  font-size: 1.5rem;
  line-height: 3rem;
}
.show{
    display:block;
}
.hide{
    display:none;
}
.active{
    text-shadow: 2px 2px 3px rgba(0,0,0,0.3);
}


#newsMenu li{
    cursor:pointer;
    font-size: 2rem;
    padding: 1em ;
    color: #353d42;
    border-bottom: 0.5px solid #eee;
}
#newsMenu li:last-child{
    border-bottom: 0;
}
.newsDate{
    position:absolute;
    font-size: 0.8rem;
}
.newsContent{
    line-height: 2rem;
    text-indent:2em;
}
/*內縮排4格*/
.newsContent>>>.four{
    text-indent:4em;
    height:100%;
    width:100%;
    border:1xp solid red;
}
.newsContent>>>ul {
  list-style: disc none inside;
}
.newsImg img{
    width: 100%;
}
#language{
  position:absolute;
  bottom:0;
  right:1rem;
}
#language+div{
  text-align:center;
}
.footer{
  margin-top: 3rem;
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
