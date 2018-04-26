<template lang="pug">
.page.page-work-indep.color.blue
  section.sectionHero.animated.fadeIn(:key="work.title")
    .container
      .row
        .col-sm-12
      .row
        .col-sm-12
          .cover(:style="cssbg(work.cover)")

            router-link.btn-back(to="/works") 
              i.fa.fa-angle-left
              span  返回
          
        .col-sm-5
          br
          br
          h2
            .row
              .col-3
                SvgInline.logo.animated.zoomIn.delay-ani-2(:src="work.logo")
              .col-9
                span {{work.title}}
                router-link.btn.float-right.btn-app(:to="work.appRoute" v-if="work.appRoute")
                  i.fa.fa-mobile
                  span &nbsp;APP
                span.sponsor(v-if="work.sponsor") &nbsp;&nbsp;<br>{{work.sponsor}}
          .hide-mobile
            h3 作品意涵
            p(v-html="work.description")
          .row
            .col-12
              router-link.use_data_box(:to="'/works/n/'+work.key+'/data'")
                h4 
                  i.fa.fa-database 
                  span &nbsp;使用數據 : 
                  span {{work.data}}
                //- router-link.btn.orange.float-right(:to="'/works/n/'+work.key+'/data'") 大數據說明
          br
          br
        .col-sm-7
          br
          br
          .btn-group
            router-link.btn(:class="{orange: $route.meta.type=='data'}",
                            :to="'/works/n/'+work.key+'/data'") 
              i.fa.fa-database

              span &nbsp;數據說明
            router-link.btn(:class="{orange: $route.meta.type=='description'}",
                            :to="'/works/n/'+work.key") 
              i.fa.fa-user
              span &nbsp;作品與作者
            router-link.btn(:to="work.appRoute" v-if="work.appRoute")
              i.fa.fa-mobile
              span &nbsp;APP
          div.panel-info(v-if="$route.meta.type=='description'").animated.fadeIn
            .show-mobile
              h3 作品意涵
              p(v-html="work.description")
            br
            br
            h3 藝術家 - {{work.author}}
            p(v-html="work.author_description")
            //- br
            //- h3 資料介紹 - {{work.data}}
            //- p(v-html="work.description")
          div.panel-info(v-if="$route.meta.type=='data'").animated.fadeIn
            br
            br
            h2
              //SvgInline.logo.animated.zoomIn.delay-ani-2(:src="work.logo")
              //span 〈{{work.title}}〉 
            h3 
              i.fa.fa-database
              span &nbsp;使用數據說明

              .explain(v-html="work.data_content")
  section.sub_nav
    .container
      .col-sm-12
        h3 瀏覽其他作品
        .navs
          router-link.nav-item(v-for="work in works", :to="'/works/n/'+work.key")
            img(:src="work.logo")
            .nav-title {{work.title}}
        
            
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import workbox from '@/components/Workbox'
import $ from 'jquery'
export default {
  data(){
    return {
      fullpageOpen: false
    }
  },
  mounted(){

  },
  computed:{

    ...mapState(['works']),
    work(){
      return this.works.find(w=>w.id==this.$route.params.id) ||  this.works.find(w=>w.key==this.$route.params.workname)
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

  .hide-mobile
    display: block
    +rwd_sm
      display: none
  .show-mobile
    display: none
    +rwd_sm
      display: block
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
  .panel-info
    // background-color: rgba(white,0.05)
  hr
    border: none
    border-bottom: 2px solid white
    width: 80%
    margin-left: 0
    opacity: 0.5
  .cover
    height: 50vh
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
      margin-top: -40px
      display: block
      +rwd_sm
        display: block
  h3
    margin-bottom: 10px
    font-size: 1.3rem
    margin-top: 20px

  .btn-app
    margin-top: 10px
    padding: 5px 10px
    cursor: pointer
    background-color: rgba(#fff,0.8)
    color: #222
    display: block
    float: right
    &:hover
      background-color: rgba(#fff,0.9)

  .use_data_box
    padding: 10px 15px
    border-radius: 5px
    // border: 1px solid white
    background-color: rgba(white,0.05)
    cursor: pointer
    color: white
    display: flex
    justify-content: flex-start
    align-items: center
    margin-bottom: 20px
    &:hover
        background-color: rgba(white,0.08)
    h4
      flex: 1
      margin-bottom: 0
      font-size: 1.2rem

    .btn.orange
      float: right
      // display: block
      // position: absolute
  .btn-group
    +rwd_sm
      margin-top: -100px
    color: white
    .btn
      background-color: rgba(white,0.05)
      &.orange
        background-color: $colorOrange
        color: white
      
  //底部快速導覽列
  .sub_nav

    margin-top: 150px
    cursor: pointer
    margin-bottom: -50px
    +rwd_sm
      display: none
    .navs
      display: flex
      width: 100%
      .nav-item
        border: solid 1px rgba(white,0.1)
        cursor: pointer
        flex: 1
        padding: 10px
        +trans
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        &:hover
          background-color: rgba(white,0.1)
        
      img
        width: 100%
      a
        color: inherit
        

  // .jumbotron
  //   height: 500px

</style>
