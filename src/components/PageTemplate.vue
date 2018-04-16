<template lang="pug">
  .page.page-test.color.blue
    section.sectionHero
      .container
        .row
          .col-sm-12
            h1.title Page Title
    section.sectionStyle
      .container
        .row
          .col-sm-12
            h1 頁面標題<br>page style test
            h2 頁面標題<br>page style test
            h3 頁面標題<br>page style test
            h4 頁面標題<br>page style test
            h5 頁面標題<br>page style test
            p 「臺北聲音地景計畫」旨以「聲音」作為媒介連結城市生活空間，描繪出臺北城市的景觀與歷史，讓大眾能從不同的角度「聽」待環境，進而創造更深的認同。<br>第一波站體環境音樂選定了淡水、中正紀念堂、大安森林公園、小碧潭、中山國中等5個捷運站，邀請具豐富創作資歷的5位創作者，量身為每一站體打造環境音樂，為捷運站體營造不同以往的風格環境。
            .btn.color.white 按鈕樣式

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

</style>
