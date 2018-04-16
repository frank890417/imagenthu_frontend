<template lang="pug">
  .page.page-map.color.blue
    section 
      .container
        br
        br
        h4.color.orange.text-center Research Center for Technology  and  Art
        h1.text-center 展覽地圖
      .container
        .row
          .col-sm-5
            //- p 整合校內外科技與藝術之跨領域專業與資源，推動「數位藝術」、「數位文創」、「科技創新應用」三方面的學術研究、教育推廣、產學合作與國際交流等，並致力於數位跨域創作、數位文創促進以及科技創新激發。<br>中心任務<br>整合本校科技與藝術相關單位之跨領域資源，做為校內外跨域合作平台。<br>規劃與執行科技藝術之各項研究計畫與藝術創作。<br>規劃與支援科技藝術之跨域課程以及人才培育。<br>規劃與舉辦校內科技藝術相關活動以及推廣國際交流。<br>規劃與委製國內外科技藝術文創活動。
            ul
              li(v-for="(work) in works")
                .tag {{work.id+1}}
                h3 {{work.title}}
                p {{work.data}}
          .col-sm-7
            img(src="static/img/nthumap.svg")
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
    ...mapState(['works']),
  },
  methods:{

  }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.page-map
  background: linear-gradient(45deg, transparent 0% ,transparent 30% ,rgba(255,255,255,0.05) 31%, rgba(255,255,255,0.05) 33% ,transparent 34%)
  background-size: 15px 15px
  .tag
    background-color: $colorOrange
    padding: 2px 10px
    display: inline-block
    border-radius: 3px
    margin-right: 10px
    font-size: 18px
  li
    margin-bottom: 20px
    list-style: none
    padding: 10px
    cursor: pointer
    +trans
    &:hover
      background-color: rgba(white,0.1)
  p
    opacity: 0.5
    margin: 0

  h3
    display: inline-block
  .jumbotron
    height: 600px
    background-repeat: no-repeat
    background-size: cover
    mix-blend-mode: screen

    background-color: transparent
</style>
