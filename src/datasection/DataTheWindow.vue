<template lang="pug">
div
  h3 {{ nowdata.title }}
  p {{ nowdata.explain }} ( {{  nowdata.start_date}}-{{nowdata.end_date}} )
  br
  br
  .window
    .col-6(v-for="block in blocks", :class="{active: isWindowActive(block) }") {{  transformBlock(block) }}
  br
  br
  img(:src="nowdata.table", style="max-width:100%")
  br
  br
  p(v-html="nowdata.source")

//- p(v-for="d in alldata") {{d.start_date}}  {{d.end_date}} :{{dateInRange(d.start_date,d.end_date)}}
</template>

<script>
export default {
  data(){
    return {
        blocks: [
          "理學院","工學院",
          "電機資訊學院","人文社會學院",
          "原子科學院","科技管理學院",
          "清華學院","生命科學院"
        ],
        alldata:[
          {
            start_date: "4/28",
            end_date: "5/2",
            title: "問題 ① ：106學年度清華大學學生人數（學士+碩+博）最多的前三個學院？",
            explain: "106 學年度下學期在學總人數統計人多氣勢強！清華前三大學院！",
            table: "static/img/tables/table1.png",
            active: ["理學院","工學院","電機資訊學院"],
            source: "資料來源：清華大學註冊組  http://registra.web.nthu.edu.tw/files/11-1086-1811.php"
          },
          {
            start_date: "5/2",
            end_date: "5/4",
            title: "問題 ②：106學年度清華大學學士班報到率高的人氣學院？",
            explain: "(註冊率高於校註冊率的學院)",
            table: "static/img/tables/table2.png",
            active: [
              "理學院",
              "工學院",
              "電機資訊學院",
              "人文社會學院",
              "原子科學院",
              "科技管理學院]",
            ],
            source: "資料來源：統計處大專校院系所特色及新生註冊率查詢網站<br>https://stats.moe.gov.tw/enrollweb/Default.aspx"
          },
          {
            start_date: "5/4",
            end_date: "5/6",
            title: "問題 ③：106學年度清華大學具多管齊下的入學管道的學院？",
            explain: "（入學管道多元的學院，學生組成包含繁星推薦、個人申請、考試分發與特殊選才等四個管道）",
            table: "static/img/tables/table3.png",
            active: [
              "理學院",
              "工學院",
              "電機資訊學院",
              "人文社會學院",
              "科技管理學院",
            ],
            source: "資料來源：清華學生學習表現數據分析平台"
          },
    
          {
            start_date: "5/6",
            end_date: "5/9",
            title: "問題 ④：105學年度清華大學各學院學生最能呈現全臺區域人口縮影的學院？",
            explain: "（學生組成最接近臺灣人口分布的學院）",
            table: "static/img/tables/table4.png",
            active: [
              "理學院","電機資訊學院"

            ],
            source: "資料來源：清華學生學習表現數據分析平台",
            label_all: true
          },
    
          {
            start_date: "5/9",
            end_date: "5/11",
            title: "問題 ⑤：105 學年度學生來源高中數最廣泛的前三個學院？",
            explain: "",
            table: "static/img/tables/table5.png",
            active: [
              "理學院","原子科學院","生命科學院"
            ],
            source: "資料來源：招生原始數據分析",
            label_all: true
          },
    
          {
            start_date: "5/11",
            end_date: "5/14",
            title: "問題 ⑥：106 學年度下學期僑外生在學人數統計最國際化的五個學院？",
            explain: "（全校僑外生比例約5.99%）",
            table: "static/img/tables/table6.png",
            active: [
              "理學院","人文社會學院","科技管理學院","清華學院","生命科學院"
            ],
            source: "資料來源：清華大學註冊組 http://registra.web.nthu.edu.tw/files/11-1086-1811.php"
          },
          {
            start_date: "5/14",
            end_date: "5/16",
            title: "問題 ⑦：106 學年度女多男少的學院？",
            explain: "（女生人數比男生多的學院）",
            table: "static/img/tables/table7.png",
            active: [
              "人文社會學院","科技管理學院","清華學院"
            ],
            source: "資料來源：大學男女比（教育部統計處）<br>https://university-tw.ldkrsi.men/FemaleRatio/#gsc.tab=0"
          },
          {
            start_date: "5/16",
            end_date: "5/19",
            title: "問題 ⑧：101-105 學年度女學霸橫行的學院？",
            explain: "（女生學業表現優於男生）",
            table: "static/img/tables/table8.png",
            active: [],
            source: "",
            allactive: true,
            label_all: true
          },
          {
            start_date: "5/19",
            end_date: "5/20",
            title: "問題 ⑨：101-105 學年度會念書、更會玩！培養最多社團社長的四個學院？",
            explain: "",
            table: "static/img/tables/table9.png",
            active: [
              "工學院","人文社會學院","原子科學院","科技管理學院"
            ],
            source: "資料來源：清華學生學習表現數據分析平台"
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
      if (new Date("2018/"+st) <= new Date()  && new Date() <= new Date("2018/"+ed) ){
        return true
      }
      return false
    },
    isWindowActive(name){
      return this.nowdata.active.indexOf(name)!=-1 || this.nowdata.allactive
    },
    transformBlock(text){
      if (!this.nowdata.label_all){
        return text
      }else{
        if (text=="清華學院"){
          return "全校概況"
        }
      }
      return text
    },
  }
}
</script>

<style lang="sass">
.window
  width: 100%
  max-width: 300px
  border: solid 5px rgba(white,0.3)

  .col-6
    border: solid 1px rgba(white,0.3)
    padding: 20px
    width: 50%
    display: inline-block
    
    &.active
      background-color: rgba(white,0.9)
      color: black

</style>
