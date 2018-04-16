<template lang="pug">
.page.page-works.color.blue
  section.container-fluid.slides-area
    .row
      .col-sm-12
        .slick.animated.fadeIn
          router-link.slick-cover(
              v-for="slide in works",
              :style="cssbg(slide.cover)",
              :to="`/works/${currentSlide.id}`")
  .container
    .row
      .col-sm-12
        h1.work-title 
          
          span {{currentSlide.title}}
        p.work-description {{currentSlide.description}}
        .det 0{{currentSlide.id+1}} 
  //- .jumbotron(:style="cssbg(works[0].cover)") 大圖
  section.sectionHero
    .container
      .row
        .col-sm-12
          h2.title 展品一覽
  section.sectionHero
    .container
      .row
        workbox.col-md-4.col-sm-12.wow.fadeIn(v-for="w in works", :work="w")

</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import workbox from '@/components/Workbox'
import $ from 'jquery'

import slick from 'slick-carousel'
export default {
  data(){
    return {
      currentSlideId: 0,
slickOptions: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          // dots: true
          // Any other options that can be got from plugin documentation
      },
    }
  },
  mounted(){

    setTimeout(()=>{
          this.$nextTick(() => {
            this.slickEl=$(".slick").slick(
              this.slickOptions
            )
            let _this=this
            $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
              console.log(nextSlide)
              _this.progress=0

              _this.currentSlideId=nextSlide
            })

          });
        },500)
  },
  computed:{
    ...mapState(['works']),
    currentSlide(){
      return this.works &&  this.works[this.currentSlideId]
    },
  },
  methods:{
    next() {
          $(".slick").slick("next");
      },

      prev() {
          $(".slick").slick("prev");
      },
  },
  components: {
    workbox
  }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.page-works
  .slides-area
    height: 550px
    margin-bottom: 00px
    +rwd_sm
      height: 300px
  .slick-cover
    height: 550px
    background-size: cover
    background-position: center center
    cursor: pointer
    +rwd_sm
      height: 300px

  .det
    font-size: 420px
    color: $colorOrange
    position: absolute
    right: 0
    bottom: -80px
    font-weight: 900
    +rwd_sm
      font-size: 100px
      bottom: 0px
      top: 0px
  a
    position: relative
  .work-title
    background-color: #fff
    color: black
    max-width: 700px
    margin-top: -100px
    // transform: translateY(-100px)
    position: relative
    display: inline-block
    padding: 5px 20px
    margin-bottom: 50px

    z-index: 100
  .work-description
    max-width: 700px
    margin-bottom: 100px
    min-height: 8rem
</style>
