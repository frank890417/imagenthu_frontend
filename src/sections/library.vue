<template lang="pug">
  h2 圖書館在館人數： 
    span.fadeIn.animated(:key="libcount") {{libcount}}

</template>

<script>
import _ from 'lodash'
import $ from 'jquery'
// import axios from 'axios'
// var connectionOptions =  {
//     "force new connection" : true,
//     "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
//     "timeout" : 10000, //before connect_error and connect_timeout are emitted.
//     "transports" : ["webthis.socket"]
// };
export default {
    props: {
      mode: {
        default: "page"
      }
    },
    data() {
      return {
        libcount: 0
      }
    },
    computed: {
      blockChunk(){
        return _.chunk(this.blocks,5)
      }
    },
    methods: {
      bgcss(url){
        return {
          backgroundImage: `url(${url})`
        }
      },
      openFull(block){
        this.panelAskOpen=true
        this.nowBlock=block
      },
      submit(block){
        this.socket.emit('comment',block)
        this.statusText="送出回覆中..."
        setTimeout(()=>{
          this.statusText=""
          this.panelAskOpen=false;
        },1500)
      },
      updateColor(cry){
        this.socket.emit("setColor",cry)

      }
    },

    mounted(){
      this.socket = io("https://awiclass.monoame.com:3030"); 
      // axios.get("http://monoame.com:3000/prismatic").then(res=>{
      //   Vue.set(this,"crystals",JSON.parse(res.data))
      // })
      this.socket.on("set_libcount",(all)=>{
        console.log(all)
        this.libcount=all

      })
      // @active-change="(color)=>{cry.color=color;updateColor(cry)}", 
    }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.section-hohoho
  color: white
  &.page
    padding-top: 50px 

  .rock_container
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: relative
    &:before
      content: ''
      display: block
      position: absolute
      +size(200px)
      border-radius: 50%
      border: 1px solid rgba(white,0.05)
      +trans
    &:hover
      &:before
        +size(250px)
        border: 1px solid rgba(white,0.2)
      .rockimg
        

  .rockimg
    max-width: 300px
    width: 100%
    flex: 1
    position: relative
    z-index: 1
  .blocks-panel
    +flexCenter
    flex-direction: column
  .blockrow
    display: flex
    
  .block
    width: 120px
    height: 120px
    border: 1px solid #000
    display: flex
    justify-content: center
    align-items: center
    // background-color: rgba(white,0.6)
    opacity: 0.8
    cursor: pointer
    transition: 0.5s
    background-size: cover
    background-position: center center
    +rwd_sm
      +size(80px)
    &:hover
      opacity: 1
      background-color: white
      transition: 0s
      
  .fullpageInput
    position: fixed
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    left: 0
    top: 0
    background-color: rgba(black,0.8)
    .form
      position: relative
      z-index: 100
      color: white
      h2
        font-size: 50px
      input,textarea
        color: black
      textarea
        width: 100%
        height: 100px
        margin-top: 20px
        margin-bottom: 20px
    .img
      width: 100%
      margin-top: 30px
      +rwd_sm
        width: 60%
        margin: auto

    .close
      position: absolute
      width: 100%
      height: 100%
      cursor: pointer
    
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
    opacity: 0


  svg polygon
    transition-duration: 0.5s
    +trans


  @for $i from 1 through 100
    .delay-#{$i}
      animation-delay: #{$i*.1}s

  .cb
    +size(20px)
    display: inline-block
    // margin-right: 30px
    margin: 10px
    border: solid 1px white
</style>
