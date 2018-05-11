<template lang="pug">
.section-eng82-data
  h3 即時統計
  .container-fluid
    ul.row
      li.col-2(v-for="d in alldata.data")
        div.count.animated.fadeIn(:key="d.count") {{d.count}}
        div {{d.name}}
</template>

<script>
import _ from 'lodash'
import $ from 'jquery'


export default {
    props: {
      mode: {
        default: "page",
      }
    },
    data() {
      return {
        alldata: {},
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
      // this.socket.emit("playEng");
      this.socket.on("set_eng82Data",(data)=>{
        console.log("set",data)
        this.$set(this,"alldata",data)
      })
      this.socket.on("eng82data_change",(data)=>{
        console.log("set",data)
        this.$set(this,"alldata",data)
      })
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
.section-eng82-data
  ul
    padding: 0
    list-style: none
  li
    list-style: none
    padding: 0
  .count
    font-size: 30px
  .col-2
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
 
    
      
</style>
