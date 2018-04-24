<template lang="pug">
  .page.page-plan.color.blue
    section.sectionHero
      //.container
        .row
          .col-sm-12
            //h1.title 策展團隊
      .container
        .row
          .col-sm-6.offset-sm-3
            h4.color.orange.text-center Research Center for Technology and Art
            h1.text-center 清華學院 科技藝術研究中心
        .row
          .col-sm-6.offset-sm-3
            br
            h3
              i.text-center 〝ART & TECHNOLOGY - When Artists And Engineers Work Together, The Result is Something Neither Can Expect.〞
            br
            p.text-left 這是 1998年 7月 IEEE Spectrum 雜誌封面上的一句話，該期雜誌一刊出，宣告了藝術與科技整合時代里程碑來臨了，而且已成了全球共同重視的課題。清華大學是國際知名以科學、科技稱著的大學，科學與科技的硬實力在臺灣學術與產業界早已奠定深厚根基，但在發展橫向的跨域整合研究與創作人才培育上仍闕如。<br>為推動本校科技與藝術的結合，以及創造清華「科技藝術跨域的新 DNA」與「科技藝術跨域的新文化」，清華大學藝術學院成立院學士班培養科技藝術跨域人才，清華學院也成立「科技藝術研究中心」，主要目的整合校內外跨領域專業與資源，推動「數位藝術」、「數位文創」、「科技創新應用」三方面的學術研究、教育推廣、產學合作與國際交流等，並致力於數位跨域轉繹創作、數位文創促進以及科技創新激發。<br>
            br
            .row.mt-5
              .col-sm-12
                h3 科技藝術研究中心 策展團隊
              .col-sm-6
                p 策展人：許素朱(小牛)<br>
                  | 執行策展人：林雅芳<br>
                  | 策展執行：蔡宜婷<br>
                  | 技術總監：劉士達<br>
                  | 設計總監：蔡奇宏<br>
              .col-sm-6
                p <br>
                  | 網站開發：吳哲宇<br>
                  | 硬體執行：李冠賢<br>
                  | 製作助理：何勇威<br>
                  | 設計助理：林芝羽<br>


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
    //- .jumbotron(:style="cssbg('http://techart.nthu.edu.tw/wp-content/uploads/2017/12/mainImage1229.png')") 
    //- img(src="http://techart.nthu.edu.tw/wp-content/uploads/2018/04/THE2018-460x270.jpg")


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
  h4
    font-size: 2rem
    letter-spacing: 2px
  h3
    font-size: 1.4rem
  h1
    font-size: 3.2rem
    white-space: nowrap
  .jumbotron
    height: 500px
    background-size: cover
    +rwd_sm
      height: 300px
  .sectionHero
    min-height: 100vh
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    +rwd_sm
      display: block
      height: auto 
      h1
        white-space: initial

</style>
