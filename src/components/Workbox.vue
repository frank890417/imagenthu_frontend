<template lang="pug">
router-link.workbox(:to="'/works/'+work.id")
  .cover(:style="cssbg(work.cover)")
  .container-fluid
    h2 {{work.title}}
    h4 {{work.author}}
    h4 {{work.place}}

</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import $ from 'jquery'

export default {
  props: ['work'],
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

<style lang="sass"  scoped>
@import "../assets/_mixins.sass"
.workbox
  color: white
  padding: 20px
  margin-bottom: 100px
  .titleSpot
    fill: $colorOrange
    margin-top: -200px
    transition: 0.5s
    height: 80px
    margin-left: -15px
  svg
    overflow: hidden
  #Path-4
    fill: white
    transform: scale(0.7)
  #Path-5
    fill: black
    transform: scale(0.75)

  &:hover 
    color: white
    text-decoration: none
    .titleSpot
      margin-top: -100px
    .cover
      box-shadow: 0px 10px 0px $colorOrange
      background-size: 115% auto
      

  .cover
    width: 100%
    min-height: 220px
    background-color: rgba(white,0.2)
    background-size: 110% auto
    background-repeat: no-repeat
    box-shadow: 0px 2px 0px $colorOrange 
    transition: 0.5s
    background-position: center center
    
  h2
    font-size: 26px
    font-weight: 500
    margin-top: 40px
    letter-spacing: 2px
  h4
    font-size: 15px
    opacity: 0.6
    letter-spacing: 2px

   
 
</style>
