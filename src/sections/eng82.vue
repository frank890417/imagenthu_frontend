<template lang="pug">
.section-eng82
  .container
    .col-sm-12(v-if="playing==false")
      h2.mt-4 英文8-2 APP
      h3.mt-2 請選擇你的學院
      ui.list
        li(v-for="sd in schooldatas", @click="start(sd)")
          | {{sd.name}}
    .col-sm-12(v-if="playing==true")
      h2.mt-4 英文8-2
      .time 時間: {{time}}
      .score Score: {{score}}
      h4 {{school.name}} 同學
      h4.status {{   status    }}
      //- .btn.btn-primary(v-on:click="pick") 出題
      div(v-if="question", style="width: 100%")
        h1.animated.fadeIn(:key="roundCount") Q{{roundCount}}:  {{question.trans}}
        ul.list
          li.animated.zoomIn.delay-ani-5(v-for="(option,opid) in options",
            @click='checkAnswer(option,opid)',
            :class="{correct: status=='yes'&& option.correct, error: status=='nooo' && opid==selectedId}",
            :key="roundCount",
            :style="{animationDelay: opid/5+'s'}") {{option.word}}
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

var list = require("../data/engdata.js").default.split("\n")
list = list.filter(item=>item.indexOf(".")!=-1)
list =list.map(item=>item.split(" "))
list = list.map(item=>({
  word: item[0],
  cata: item[1],
  trans: item[2]
}))

export default {
    props: {
      mode: {
        default: "page",
      }
    },
    data() {
      return {
        number: 100,
        name: "Frank",
        lista: list,
        question: null,
        options: [],
        time: 0,
        score: 0,
        status: "",
        selectedId: -1,
        roundCount: 0,
        school: null,
        playing: false,
        users: [
          {
            name:"aaa",
            themes: ["1",'222','333']
          },
          {
            name: "bbbb",
            themes: ["444",'55']
          }
          
          
        ],
        schooldatas: [{"id":0,"name":"理學院"},{"id":1,"name":"工學院"},{"id":2,"name":"原子科學院"},{"id":3,"name":"人文社會學院"},{"id":4,"name":"生命科學院"},{"id":5,"name":"電機資訊學院"},{"id":6,"name":"科技管理學院"},{"id":7,"name":"清華學院"},{"id":8,"name":"南大校區"}]
      }
    },
    computed: {
      blockChunk(){
        return _.chunk(this.blocks,5)
      }
    },
    methods: {
      showCard(item){
        console.log(item)
      },
      getRelated(obj){
        //取得字首
        var start = obj.word[0]
        var cata = obj.cata
        var result = this.lista.filter(item=>item.cata==cata)
                        .filter(item=>item.word.indexOf(start)==0)
                        .filter(item=>item.word!=obj.word)
                        .slice()
                        .sort((a,b)=>Math.random()>0.5 )
                        .slice(0,4)

        var objcopy = JSON.parse(JSON.stringify(obj))
        objcopy.correct=true

        return [objcopy].concat(result).slice().sort((a,b)=>Math.random()>0.5 )
      },
      start(sd){
        this.roundCount=0
        this.school=sd
        this.playing=true
        this.pick()
        this.time=60
        let _this = this

        this.socket.emit("selectEngSchool", this.school)


        let ff = function(){
          if (_this.time>0){
            _this.time--        
            _this.socket.emit("setCounter", _this.time)
            setTimeout(ff,1000)
          }else{
            _this.socket.emit("setCounter", -1) 
            _this.socket.emit("playEng");
            _this.playing=false
          }
        }
        ff()
      },
      pick(){
        this.roundCount++
        this.question = this.lista[parseInt(Math.random()*this.lista.length)]
        console.log(this.question)
        this.options= this.getRelated(this.question)
        console.log(this.options)
      },
      checkAnswer(option,opid){
        this.selectedId=opid
        if (option.correct){
          this.status="yes"
          this.score++
          this.socket.emit("addEng", this.school)
        }else{
          this.status="nooo"
        }
        setTimeout(()=>{
          this.status=""
          this.pick()
        },1000)
      }
    },

    mounted(){
      this.socket = io("https://awiclass.monoame.com:3030"); 
      this.socket.emit("playEng");
      // axios.get("http://monoame.com:3000/prismatic").then(res=>{
      //   Vue.set(this,"crystals",JSON.parse(res.data))
      // })
      // this.socket.on("set_libcount",(all)=>{
      //   // console.log(all)
      //   this.libcount=all

      // })
      // @active-change="(color)=>{cry.color=color;updateColor(cry)}", 
    }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.section-eng82
  color: white
  padding-top: 30px
  h1
    font-size: 32px
  h2
    font-size: 24px

  .container .col-sm-12
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  .btn
    width: 100%
    background-color: #ff5805
    outline: none
  h1
    margin-bottom: 10px
  ul.list
    list-style: none
    margin-top: 30px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding: 0
    width: 100%
  li
    list-style: none
    border: solid 1px rgba(white,0.2) 
    background-color: rgba(white,0.05)
    animation-duration: 0.5s
    border-radius: 100px
    max-width: 600px
    width: 100%
    padding:  5px
    cursor: pointer
    margin: 10px
    margin-bottom: 10px
    transition: 0.5s
    font-size: 24px
    width: 100%

    
    &:hover
      background-color: #333
    &.correct
      background-color: #54d363
    &.error
      background-color: #ff5151

  .status
    color: $colorOrange
    position: absolute
    right: 20px
    top: 40px
    display: none
  .time
    position: absolute
    left: 15px
    top: 15px
    font-size: 24px
    opacity: 0.5
  .score
    position: absolute
    right: 15px
    top: 15px
    font-size: 24px
    color: $colorOrange
      // top: 50px
      // right: 10px
    
      
</style>
