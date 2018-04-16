<template lang="pug">
.page.page-work-indep.color.blue
  section.sectionHero
    .container
      .row
        .col-sm-12
      .row
        .col-sm-12
          .cover(:style="cssbg(work.cover)")

            router-link.btn-back(to="/works") 
              i.fa.fa-angle-left
              span  返回
      .row
        .col-sm-5
          br
          br
          h2
            SvgInline.logo(:src="work.logo")
            span {{work.title}}
            span.sponsor(v-if="work.sponsor") {{work.sponsor}}
          hr
          p(v-html="work.description")
          br
          br
          br
        .col-sm-7
          br
          br
          h3 藝術家 - {{work.author}}
          p(v-html="work.author_description")
          br
          h3 資料介紹 - {{work.data}}
          p(v-html="work.description")

            
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import workbox from '@/components/Workbox'
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
    work(){
      return this.works[this.$route.params.id]
    }
  },
  methods:{
    
  },
  components: {
    workbox
  }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.page-work-indep
  padding-top: 50px
  .logo
    width: 80px
    display: inline-block
    vertical-align: middle
    
  .btn-back
    background-color: #fff
    padding: 5px 30px
    color: #333
    position: absolute
    left: 0 
    top: 0
    +trans
    &:hover
      background-color: $colorOrange
      color: #fff
      text-decoration: none
  hr
    border: none
    border-bottom: 2px solid white
    width: 80%
    margin-left: 0
    opacity: 0.5
  .cover
    height: 500px
    background-size: cover
    background-position: center center
    +rwd_sm
      height: 300px
    &:before
      content: ''
      display: block
      position: absolute
      left: 0
      bottom: 0
      +size(50px)
      border-radius: 50% 50% 0% 0% /  0% 50% 0% 0%
      background-color: $colorOrange

  h2
    margin-bottom: 20px
    .sponsor
      opacity: 0.5
      color: white
      font-size: 1rem
      +rwd_sm
        display: block
  h3
    margin-bottom: 10px
    font-size: 1.3rem
    margin-top: 20px
  // .jumbotron
  //   height: 500px

</style>
