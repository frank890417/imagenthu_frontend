<template lang="pug">
  .page.page-plan.color.blue
    section.sectionHero
      .container
        .row
          .col-sm-12
            h1.title 策展團隊
    //section 
      .container
        .row
          .col-sm-6
          .col-sm-6
            h3.color.orange 策展人介紹
            h1 「可以放Slogan之類的東西」
            p 物聯網技術近年來在國內外已有廣大之應用，但在人文藝術之應用仍相對的闕如。我們期望我們把物聯網的資訊偵測、蒐集，透過人工智慧與大數據分析，結合戶外智慧互動公共藝術造形設計，設置於清華校園各地，期盼透過公共藝術、物聯網、與清華園大數據，溫故清華記憶，也創造清華新印象。
    //- br
    //- br
    //- br
    .jumbotron(:style="cssbg('http://techart.nthu.edu.tw/wp-content/uploads/2017/12/mainImage1229.png')")
    section 
      .container
        h4.color.orange.text-center Research Center for Technology  and  Art
        h1.text-center 清華學院 科技藝術研究中心 
      .container-fluid
        img
      .container
        .row
          .col-sm-6
            p 整合校內外科技與藝術之跨領域專業與資源，推動「數位藝術」、「數位文創」、「科技創新應用」三方面的學術研究、教育推廣、產學合作與國際交流等，並致力於數位跨域創作、數位文創促進以及科技創新激發。<br>中心任務<br>整合本校科技與藝術相關單位之跨領域資源，做為校內外跨域合作平台。<br>規劃與執行科技藝術之各項研究計畫與藝術創作。<br>規劃與支援科技藝術之跨域課程以及人才培育。<br>規劃與舉辦校內科技藝術相關活動以及推廣國際交流。<br>規劃與委製國內外科技藝術文創活動。

          .col-sm-6
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import $ from 'jquery'
export default {
  data(){
    return {

    }
  },
  mounted(){

  },
  computed:{

  },
  methods:{

  }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.page-plan
  .jumbotron
    height: 500px
    background-size: cover
    +rwd_sm
      height: 300px
</style>
