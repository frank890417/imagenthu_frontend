<template lang="pug">
div
  h3(v-html="'目前資料：'+nowdata.title")
  p(v-html="process(nowdata.value)")

  //- p(v-for="d in alldata") {{d.start_date}}  {{d.end_date}} :{{dateInRange(d.start_date,d.end_date)}}
</template>

<script>
export default {
  data(){
    return {
        alldata:[
          {
            start_date: "4/28",
            end_date: "5/1",
            title: "2018.04.29 (清華校慶日)",
            value: "10閃閃0010-0000-0001-1000-0000-0100-0010-1001閃"
          },
          {
            start_date: "5/2",
            end_date: "5/6",
            title: "1973 1984 1992 1998 2000 2016 (工、理、原子科，人文社會，生命科學，電機學院，管理科技、教育、藝術等學院成立年代)",
            value: "11閃閃0001-1001-0111-0011-0001-1001-1000-0100-0001-1001-1001-0010-0001-1001-1001-1000-0010-0000-0000-0000-0001-0000-0001-0110閃",
          },
          {
            start_date: "5/7",
            end_date: "5/9",
            title: "1956.01.01 (清華在台復校)",
            value: "10閃閃0001-1001-0101-0110-0000-0001-0000-0001閃"
          },
    
          {
            start_date: "5/10",
            end_date: "5/12",
            title: "1962.05.19 (梅貽琦校長逝世)",
            value: "10閃閃0001-1001-0110-0010-0000-0101-0001-1001閃"
          },
    
          {
            start_date: "5/13",
            end_date: "5/15",
            title: "1969 1983 1982 2018 (梅竹開始年, 梅竹大輸年1:10, 梅竹大贏年8:30, 梅竹50年)",
            value: "11閃閃0001-1001-0110-1001-0001-1001-1000-0011-0001-1001-1001-0010-0010-0000-0001-1000閃"
          },
    
          {
            start_date: "5/16",
            end_date: "5/18",
            title: "2016.11.01 (兩校合校日)",
            value: "10閃閃0010-0000-0001-0110-0001-0001-0000-0001閃"
          },
    
        ]
      }
  },
  computed:{
    nowdata(){
      return this.alldata.filter(data=>this.dateInRange(data.start_date,data.end_date))[0]
    }
  },
  methods: {
    process(text){
      return text.replace(/閃/g,"<span class='bar animated fadeIn loop'></span>")
    },
    dateInRange(st,ed){
      if (new Date("2018/"+st) < new Date()  && new Date() < new Date("2018/"+ed) ){
        return true
      }
      return false
    }
  }
}
</script>

<style lang="sass">
.bar
  display: inline-block
  width: 2px
  height: 1em
  background-color: white
  margin-left: 3px
  margin-right: 3px
  position: relative
  top: 2px
  @keyframes flash
    0%,10%
      opacity: 1
    50%
      opacity: 0
    90%,100%
      opacity: 1
  animation: flash 1s infinite

</style>
