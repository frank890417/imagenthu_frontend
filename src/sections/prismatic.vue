<template lang="pug">
.section-hohoho
  .container.text-center
    .row
      .col-sm-12
        br
        h1 光譜原色，請大家來點燈
        h3 一次點一個！
        br
    .row
      .col-sm-4.animated.fadeIn(v-for="cry in [crystals[0],crystals[2],crystals[4]]",
                v-if="cry",
                :class="'delay_ani_'+cry.id*2")
        div.rock_container
          br
          //- h3 ID: 0{{cry.id}}
          h3 {{names[cry.id]}}
          SvgInline.rockimg.animated.zoomIn.delay-ani-10(
            :src="'static/img/prismatic_rock'+cry.id+'.svg'",
            :class="'delay_ani_'+cry.id*2")
          el-color-picker(v-model="cry.color",
            
             @change="(color)=>{cry.color=color;updateColor(cry)}",
             color-format="rgb")
      .col-sm-6.animated.fadeIn(v-for="cry in [crystals[1],crystals[3]]",
                v-if="cry",
                :class="'delay_ani_'+cry.id*2")
        div.rock_container
          br
          //- h3 ID: 0{{cry.id}}
          h3 {{names[cry.id]}}
          SvgInline.rockimg.animated.zoomIn.delay-ani-10(
            :src="'static/img/prismatic_rock'+cry.id+'.svg'",
            :class="'delay_ani_'+cry.id*2")
          el-color-picker(v-model="cry.color",
            
             @change="(color)=>{cry.color=color;updateColor(cry)}",
             color-format="rgb")
          
      //.col-sm-12
        .blocks-panel
          .blockrow(v-for="(chunk,cid) in blockChunk")
            .block.bounceIn.animated(v-for="(block,blockId) in chunk",
                  :style="bgcss(block.img)",
                  @click="openFull(block)",
                  :class="'delay-'+(cid*5+blockId)")
  //transition(name="fade")
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
              h3 覺得這塊像是清大的什麼呢？
              h5 {{statusText}}
              textarea(v-model="nowBlock.comment")
              br
              button.btn.btn-primary(@click="submit(nowBlock)") 送出感想

</template>

<script>
import _ from 'lodash'
import $ from 'jquery'
// import axios from 'axios'
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
        crystals: [],
        panelAskOpen: false,
        nowBlock: null,
        statusText: "",
        names: [
          "",
          "綠島",
          "澎湖島",
          "金門島",
          "蘭嶼島",
          "龜山島"
        ]
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
      },
      updateColor(cry){
        socket.emit("setColor",cry)

      }
    },
    watch:{
      panelAskOpen(){
        socket.emit(this.panelAskOpen?'edit_start':'edit_end',this.nowBlock)
      }
    },
    mounted(){
      // axios.get("http://monoame.com:3000/prismatic").then(res=>{
      //   Vue.set(this,"crystals",JSON.parse(res.data))
      // })
      socket.on("all_prismatic_color",(all)=>{
        this.$set(this,"crystals",all)
        setTimeout(()=>{

          all.forEach(c=>{
            $("[data-name='fill_"+c.id+"']").css("fill",c.color)
          })
        },1500)
      })
      socket.on("setColor",(cry)=>{
        this.crystals.find(c=>c.id==cry.id).color=cry.color
        $("[data-name='fill_"+cry.id+"']").css("fill",cry.color)
      })
      // @active-change="(color)=>{cry.color=color;updateColor(cry)}", 
    }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.section-hohoho
  color: white
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
</style>
