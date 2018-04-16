<template lang="pug">
  .page.page-contact.color.blue
    section.sectionHero
      .container
        .row
          .col-sm-12
            iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.098000665626!2d120.9704547795956!3d24.794614573818865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683672cd4db607%3A0x112b5d5bda760413!2z5ZyL56uL5riF6I-v5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1521791440808" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen)
          .col-sm-12
            h1.section-title 聯絡與交通
            p 有任何想法或問題歡迎寄信到<br>mymail@gmail.com<br>或來電諮詢 03-5715131
            h4 國道客運
            p 下交流道後之下車站（於交流道口或清華大學門口），請先洽詢各客運公司。
            h4 自行開車
            p 國道路線：<br>※中山高二側引道與光復路、公道五路並未直接連結南下欲由光復路下交流道者，請先由公道五出口接引道。<br>※因校內停車空間有限，如遇校內車位爆滿無處可停時，亦可將車輛停放於本校對面之「赤土崎收費停車場」。
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
