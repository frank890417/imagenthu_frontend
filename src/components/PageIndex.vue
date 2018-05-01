<template lang="pug">
.page.page-index.color.blue
  canvas.index
  section.sectionHero
    .container
      .row
        .col-sm-12
          //- h3 物聯網科技藝術節
          //- h4.orange  + + + + + + +  - - - -   - - -  + +
        .col-sm-12.flex-center.animated.fadeIn.flex-direction-column
          img.title(src="static/img/siteimage_cover.svg")
          br
          h4 4/29啟動「大數據」QRCode 密碼，獎品等你拿！
            router-link.btn.red(to="/news") 查看資訊
        //.col-sm-12.flex-center.animated.fadeIn.buttons
          router-link.btn.btn-primary(to="/about") 展覽介紹
          router-link.btn.btn-primary(to="/works") 作品一覽
          //- .btn.btn-primary 展覽介紹
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
  var canvas = document.querySelector("canvas.index")
    var ctx = canvas.getContext("2d")
    var ww = $(window).width()
    var wh = $(window).height()
    canvas.width = ww
    canvas.height = wh
    window.addEventListener("resize",()=>{

      ww = $(window).width()
      wh = $(window).height()
      canvas.width = ww
      canvas.height = wh
    })
    // var value2d = simplex.noise2D(x, y)
    var mousePos = {x: 0,y: 0}
    window.addEventListener("mousemove",function(mpos){
      mousePos.x = mpos.x
      mousePos.y = mpos.y
    })
    var time=  0
    var simplex = new SimplexNoise(Math.random)
    var balls = []

    class Ball{
      constructor(){}
    }


    function draw(){
      time++
      ctx.fillStyle="black"
      ctx.clearRect(0,0,ww,wh)

     
     function drawWave(color,tt,ypan){
      ctx.beginPath()
        for(var i=0;i<ww;i++){
          let yy = simplex.noise3D(i/800,mousePos.x/400,tt+mousePos.y/450)
          // console.log(yy)
          ctx.lineTo( i, wh/2+100+60*yy +ypan) 
        }
        ctx.lineTo(ww,wh)
        ctx.lineTo(0,wh)
        ctx.closePath()
      ctx.fillStyle=color
      ctx.fill()
     }
     let speed = 250
     for(var i=0;i<20;i++){
       let color = "#F6F5F4"
       switch(i%4){
          case 0:
            color="#FB3C04"
            break;
          case 1:
            color="#F6F5F4"
            break;
          case 2:
            color="black"
            break;
          case 3:
            color="#F6F5F4"
            break;
        }
        drawWave(color,time/speed+i/10,i*20)
     }

      // ctx.beginPath()
      // ctx.arc(50,400+100*simplex.noise3D(i/800,mousePos.x/200,time/100+mousePos.y/250),50,0,Math.PI*2)
      // ctx.fill()

      // ctx.strokeStyle="white"
      // ctx.stroke()

      requestAnimationFrame(draw)
    }
    requestAnimationFrame(draw)


  },
  computed:{

  },
  methods:{

  }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.page-index
  height: 100vh
  overflow: hidden
  background-color: white
  border: solid 10px $colorOrange
  box-sizing: border-box
  background-color: white
  color: white
  .btn.red
    background-color: $colorOrange
  .flex-direction-column
    flex-direction: column
  canvas
    pointer-events: none
  .buttons
    position: relative
    z-index: 100
  .btn.btn-primary
    border: solid 1px transparent
    background-color: #222
    color: #fff
    margin: 10px
    margin-top: 30px
    border: none
    position: relative
    z-index: 100
    &:hover
      border: solid 1px white
      background-color: #fff
      color: #222
    &:active
      background-color: #eee
    &.small
      margin-top: 0px

  // .container
  //   max-width: 1600px
  .flex-center
    display: flex
    justify-content: center
    align-items: center
  .title
    height: 50vh
    max-height: 400px
    margin-top: 50px
    // width: 100%
    // max-width: 800px
    margin-left: auto
    margin-right: auto
    +rwd_sm
      margin-top: 0px
      width: 120%
      max-width: 120%
  h1
    font-size: 70px
  h4
    position: relative
    z-index: 100

  canvas.index
    position: fixed
    z-index: 10

  .orange
    color: $colorOrange
    letter-spacing: 0.5em
    font-size: 40px

</style>
