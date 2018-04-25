<template lang="pug">
.section-hohoho
  .container.text-center
    .row
      .col-sm-12
        h1 侯王淑昭與清華園的邂逅
        br

      .col-sm-12
        .blocks-panel
          .blockrow(v-for="(chunk,cid) in blockChunk")
            .block.bounceIn.animated(v-for="(block,blockId) in chunk",
                  :style="bgcss(block.img)",
                  @click="openFull(block)",
                  :class="'delay-'+(cid*5+blockId)")
              
  transition(name="fade")
    .fullpageInput(v-if="panelAskOpen",
                  :class="{active: panelAskOpen}")
      .close(@click="panelAskOpen=false")
      .form 
        .container
          .row
            .col-sm-4
              img.img(:src="nowBlock.img")
            .col-sm-8.fadeIn.animated.delay-3.text-left
              h2 {{nowBlock.id}}
              h3 請問這圖案你聯想到清華的什麼呢？
              h5 {{statusText}}
              textarea(v-model="nowBlock.comment")
              br
              button.btn.btn-primary(@click="submit(nowBlock)") 送出聯想
              span &nbsp;
              button.btn.btn-secondary(@click="panelAskOpen=false") 關閉

</template>

<script>
import _ from 'lodash'
// var connectionOptions =  {
//     "force new connection" : true,
//     "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
//     "timeout" : 10000, //before connect_error and connect_timeout are emitted.
//     "transports" : ["websocket"]
// };
var socket = io("https://awiclass.monoame.com:3030");
export default {
    data() {
      return {
        blocks: Array.from({length: 25},(d,i)=>{
          return {
            id: i+1,
            img: "static/img/hohoho/"+ ("0"+(i+1)).slice(-2)+".png"
          }
        }),
        panelAskOpen: false,
        nowBlock: null,
        statusText: ""
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
        socket.emit('comment',block)
        this.statusText="送出回覆中..."
        setTimeout(()=>{
          this.statusText=""
          this.panelAskOpen=false;
        },1500)
      }
    
    },
    watch:{
      panelAskOpen(){
        
        socket.emit(this.panelAskOpen?'edit_start':'edit_end',this.nowBlock)
      }
    }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.section-hohoho
  color: white
  padding-top: 50px
  .blocks-panel
    +flexCenter
    border: solid 20px rgba(white,0.05)
    flex-direction: column
    display: inline-block
    +trans
    &:hover
      border: solid 20px rgba(white,0.2)
      
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
    transform-rogin: center center
    &:hover
      transform: scale(1.02)
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
      +trans
      transform-origin: center center
      &:hover
        transform: scale(1.02)
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


  @for $i from 1 through 100
    .delay-#{$i}
      animation-delay: #{$i*.1}s
</style>
