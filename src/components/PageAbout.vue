<template lang="pug">
.page.page-about.color.blue
  section.sectionHero
    .container
      .row
        .col-sm-6.animated.floatInUp.delay-ani-2
          img(src="http://techart.nthu.edu.tw/wp-content/uploads/2018/04/THE2018-poster.jpg")
        .col-sm-6.col-content
          br
          br
          br
          div.delay-ani-4.animated.floatInUp
            h1.seciton-title 2018印象清華<br> – 物聯網科技藝術節
            h4 Tsing Hua Effects 2018 – IoT Technology and Art Festival
            br
            br
            .btn(@click="change") button
          p.delay-ani-5.animated.floatInUp
            span 物聯網技術近年來在國內外已有廣大應用，但在人文藝術應用仍然闕如。本次展覽將物聯網的資訊偵測與蒐集，結合戶外互動藝術設計設置於清華校園，透過公共藝術、物聯網與清華園大數據，盼能溫故清華記憶，也創造清華新印象。
            br
            span 大數據存於雲端，若沒主動檢索一般不易感受。透過「印象清華」公共藝術作品，讓清華園裡的數據變成可以被觀視、賞析、討論與記憶，甚至成為藝術作品的一部份。
            br
            span 這次展覽邀請台灣從事科技藝術創作的新銳藝術家一起共襄盛舉，共展出10件作品有〈窗〉、〈針線作品〉、〈植光計畫〉、〈蘑菇總動員〉、〈光譜原色〉、〈幾何空隙〉、〈力光見影〉、〈英文8-2〉、〈草原座標〉、〈風極體〉等，作品除了反應作者的創作理念外，也在定點時間讓清華園數據如學院學習數據（如創校重要數字記憶、對清華印象的語彙、互動行為數據、進圖書館人數、走出戶外愉悅指數、英文學習成績、穿梭南門流動量、新竹風…等），透過作品展現「印象清華」數據雕塑概念。
            br
            span 這是台灣第一次以物聯網結合大數據的大型戶外科技藝術展，同時也反映清華科技與藝術跨域結合的開始。
            br
            br
          ul.delay-ani-7.animated.floatInUp
            li 開幕時間：2018.4.27（五）10:00AM
            li 展覽時間：2018.4.28（六）～5.20（日）
            li 開幕地點：名人堂
            li 指導單位：國立清華大學 清華學院
            li 主辦單位：科技藝術研究中心、藝術學院
            li 特別感謝：國立清華大學校友會
            li 策 展 人：許素朱
            li 執行策展人：林雅芳
  //section.sectionIntro
    .container
      .row
        .col-sm-6
          h2.seciton-title 物聯網介紹
          
        .col-sm-6
          h2
</template>

<script>
export default {
  data(){

  },
  methods:{

  }
}
</script>

<style lang="sass">
.page-about
  img
    width: 100%
  .col-expo-img
    height: 500px
    background: url(http://techart.nthu.edu.tw/wp-content/uploads/2018/01/mainImage0130.png)
    background-size: cover
    background-position: center center
  .col-content
    padding-left: 50px
</style>
