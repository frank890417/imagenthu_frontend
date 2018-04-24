<template lang="pug">
.page.page-works.color.blue
  section.container-fluid.slides-area.animated.fadeIn.delay-ani-2
    .row
      .col-sm-12
        .slick
          router-link.slick-cover(
              v-for="slide in works",
              :style="cssbg(slide.cover)",
              :to="`/works/n/${currentSlide.key}`")
        i.fa.fa-angle-left.slide-nav(@click="prev")
        i.fa.fa-angle-right.slide-nav.right(@click="next")
  .container
    .row
      .col-sm-12
        h1.work-title 
          span {{currentSlide.title}}
        .work-description(:key="currentSlide.title")
          .ovh
            h4.use-data-title.animated.fadeInUp.delay-1  
              i.fa.fa-database
              | &nbsp;使用數據：
              br
              | {{currentSlide.data}}
          br
          br
          //- p.animated.fadeIn.delay-5 {{currentSlide.description}}
        .det {{("0"+currentSlide.id).slice(-2)}} 
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
  .slide-nav
    position: absolute
    top: 50%
    left: 30px
    font-size: 100px
    color: white
    z-index: 100
    transform: translateY(-50%)
    opacity: 0.5
    cursor: pointer
    +trans
    &:hover
      transform: translateY(-50%) scale(1.1)
      opacity: 1
    &.right
      left: initial
      right: 30px
      
    
  .slides-area
    height: 500px
    margin-bottom: 00px
    margin-left: -15px
    margin-right: -15px
    .col-sm-12
      padding: 0
    +rwd_sm
      height: 300px
  .slick-cover
    height: 550px
    background-size: cover
    background-position: center center
    cursor: pointer
    +rwd_sm
      height: 300px
  .use-data-title
    font-weight: bold
    font-size: 1.2em
    // margin-top: -20px
    // margin-bottom: -20px
    display: block
    letter-spacing: 1px
    line-height: 2
    opacity: 0.8
  .det
    font-size: 320px
    color: $colorOrange
    position: absolute
    right: 0
    bottom: -50px
    font-weight: 900
    +rwd_sm
      font-size: 100px
      bottom: 0px
      top: 0px
  path,polypath
    stroke-dasharray: 800
    stroke-dashoffset: 800
    animation: dash 4s linear both
  @keyframes dash
    to 
      stroke-dashoffset: 0
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
    margin-bottom: 40px

    z-index: 100
  .work-description
    max-width: 700px
    margin-bottom: 20px
    min-height: 8rem
</style>
