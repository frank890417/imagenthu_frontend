<template lang="pug">
.sectionFooter
  canvas.lines
  p.legal 
    br
    br
    br
    br
    br
    span 活動洽詢：03-5715131 ＃78803
    br
    span 國立清華大學 科技藝術研究中心 ｜30014 新竹市東區南大路521號
    //- span 活動網站：http://techart.nthu.edu.tw/THE2018/
    span <br>粉絲頁：
      a(href="https://www.facebook.com/%E9%9D%A0%E5%8D%97%E6%B8%85%E5%A4%A7-1944000092504903/" target="_blank") 靠南清大
    
  footer
    .container
      .row
        .col-sm-12
          hr
      .row
        .col-sm-3
          //- h1 印象清華
          img.title(src="static/img/title.svg")
        .col-sm-3
          //ul
            li
              router-link(to="/about") 展覽介紹
            li
              router-link(to="/map") 展覽地圖
            li
              router-link(to="/plan") 策展團隊
            li
              router-link(to="/contact") 聯絡與交通
        .col-sm-3
          
</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    var canvas = document.querySelector("canvas.lines")
    var ctx = canvas.getContext("2d")
    var ww = $(window).width()
    var wh = 300
    canvas.width = ww
    canvas.height = wh
     window.addEventListener("resize",()=>{

      ww = $(window).width()
      wh = 300
      canvas.width = ww
      canvas.height = wh
    })
    // var value2d = simplex.noise2D(x, y)
    
    var time=  0
    var simplex = new SimplexNoise(Math.random)
    function draw(){
      time++
      ctx.fillStyle="black"
      ctx.clearRect(0,0,ww,wh)

     
     function drawWave(color,tt,ypan){
      ctx.beginPath()
        for(var i=0;i<ww;i++){
          let yy = simplex.noise3D(i/800,0,tt)
          // console.log(yy)
          ctx.lineTo( i, 100-50*yy +ypan) 
          
        }
        ctx.lineTo(ww,wh)
        ctx.lineTo(0,wh)
        ctx.closePath()
      ctx.fillStyle=color
      ctx.fill()
     }
     let speed = 250
     drawWave("white",time/speed,0)
     drawWave("#FB3C04",time/speed+0.1,10)
     drawWave("white",time/speed+0.35,25)
     drawWave("#FB3C04",time/speed+0.5,30)
     drawWave("black",time/speed+0.7,45)
     drawWave("white",time/speed+0.86,60)
     drawWave("#FB3C04",time/speed+0.92,80)
     drawWave("black",time/speed+1,100)




      // ctx.strokeStyle="white"
      // ctx.stroke()

      requestAnimationFrame(draw)
    }
    requestAnimationFrame(draw)


  }
}
</script>

<style lang="sass">
.sectionFooter
  padding: 30px
  color: white
  position: relative
  padding-bottom: 300px
  ul
    list-style: none
    a
      color: white
  canvas
    position: absolute
    bottom: 0
    left: 0
    // transform: scaleY(-1)
  .legal
    position: absolute
    left: 50%
    transform: translate(-50%)
    bottom: 10px
    color: white
    opacity: 0.5
</style>
