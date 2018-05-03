<template lang="pug">
.app-mushrooom
  .container
    .row
      .col-sm-12
        div.section_text
          br
          h2 蘑菇總動員APP
          h4 留下你的清華印象
          hr
          p(style="max-width: 400px").text-left 生活在清大的你，每天猶豫著學餐要吃什麼，期中考前抱書到旺宏館或系K奮戰，你對清大有著什麼樣的回憶呢？ 
          h3.status {{status}}{{result}}
          //- i.fa.fa-spinner.animated.rotateIn.infinite
          h3(v-if="status=='轉換中請稍等(約15秒)...'")
            i.fa.fa-spinner.animated.rotateIn.infinite
          select(v-model="speaker")
            option(v-for='sp in speakers',:value="sp.name") {{sp.label}}
          textarea(v-model="temptext",placeholder="寫下你的清華印象，變成蘑菇的喃喃細語")
          button.textpostbtn(@click="sendText") 送出
          br
          h3.mt-5 語音版本印象（錄音）
          #controls
            button#record(disabled='', autocomplete='off', title='Record')
              svg(viewBox='0 0 100 100')
                circle(cx='50', cy='50', r='46')
            button#sec(disabled='', autocomplete='off', title='Record by 1 second')
              svg(viewBox='0 0 100 100')
                circle(cx='50', cy='50', r='46')
                text(x='26', y='64', font-size='45') 1s
            button#pause(disabled='', autocomplete='off', title='Pause')
              svg(viewBox='0 0 100 100')
                rect(x='14', y='10', width='25', height='80')
                rect(x='62', y='10', width='25', height='80')
            button#resume(disabled='', autocomplete='off', title='Resume')
              svg(viewBox='0 0 100 100')
                polygon(points='10,10 90,50 10,90')
            button#stop(autocomplete='off', disabled='', title='Stop')
              svg(viewBox='0 0 100 100')
                rect(x='12', y='12', width='76', height='76')
            button#request(autocomplete='off', disabled='', title='Request data')
              svg(viewBox='0 0 100 100')
                polygon(points='10,10 90,10 50,90')
          #mode
            | Native support, 
            a(href='?polyfill') force polyfill
          #formats
          #support
            | Your browser doesn’t support MediaRecorder
            | or WebRTC to be able to polyfill MediaRecorder.
          //- .status
          ul#list
</template>



<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'App',
  data(){
    return {
      status: "",
      statusText: "",
      temptext: "",
      result: "",
      speaker: "MCHEN_Joddess",
      speakers: [

{name: "MCHEN_Bruce",	label: "我是工程師的聲音"},
{name: "MCHEN_Joddess",	label: "清純洋溢的大三學姊"},
{name: "Angela",	label: "有點娃娃音的學妹"},
// {name: "MCHEN_Bruce",	label: "中英統合男生語音"},
// {name: "MCHEN_Joddess",	label: "中英統合女生語音"},
{name: "ENG_Bob",	label: "會講英文不用修外語課的學弟"},
{name: "ENG_Alice",	label: "隔壁勤奮練習英文的學妹"},
// {name: "ENG_Tracy",	label: "英文小男孩語音"},
{name: "TW_LIT_AKoan",	label: "自助餐阿姨的台語"},
// {name: "TW_SPK_AKoan",	label: "台語女生語音(白話台)"},
      ],
      socket: null
    }
  },
  methods:{
    sendText(){
      this.status="轉換中請稍等(約15秒)..."
      let _this = this
      
      
      
      var params = new URLSearchParams();
      
            
      params.append('string',  this.temptext);
      params.append('speaker',  this.speaker);
      axios.post("https://techart.cc/audiodeliver/TTSTool/TTSTOOL/func/TTSConverter.php",params).then(res=>{
        this.result="轉換成功(ID:"+res.data.split("/").slice(-1)[0].split(".")[0]+")！"
        setTimeout(()=>{this.result=""},5000)
        console.log(res.data)
        let params2 = new URLSearchParams();
        params2.append('url',  res.data);
        params2.append('name', this.temptext);



        this.socket.emit('convertMushroomAudio',{
          text:  this.temptext,
          speaker:   this.speaker,
          url: res.data,
        })


        if (res.data!=""){
          axios.post('https://techart.cc/audiodeliver/post_music.php',params2).then(e=>{
            this.status="已成功送出！"
            setTimeout(()=>{this.status=""},5000)
          // $(".status").text(e.data.slice(-1,0)[0])
          })
          _this.temptext=""

        }else{
          this.result="轉換繁忙中，請再試一次！"
          setTimeout(()=>{this.result=""},5000)
        }
        _this.status=""
      })
    }
  },

  mounted(){
      this.socket = io("https://awiclass.monoame.com:3030");

      var bytes = require('bytes')

      var EVENTS = ['start', 'stop', 'pause', 'resume']
      var TYPES = ['audio/webm', 'audio/ogg', 'audio/wav']

      var recorder, list, recordFull, recordParts, pause, resume, stop, request

      function startRecording (type) {
        list.innerHTML = ''
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          recorder = new MediaRecorder(stream)

          EVENTS.forEach(function (name) {
            recorder.addEventListener(name, changeState.bind(null, name))
          })
          recorder.addEventListener('dataavailable', saveRecord)

          if (type === 'full') {
            recorder.start()
          } else {
            recorder.start(1000)
          }
        })
        recordParts.blur()
        recordFull.blur()
      }

      function stopRecording () {
        recorder.stop()
        recorder.stream.getTracks()[0].stop()
        stop.blur()
      }

      function pauseRecording () {
        recorder.pause()
        pause.blur()
      }

      function resumeRecording () {
        recorder.resume()
        resume.blur()
      }

      function requestData () {
        recorder.requestData()
        request.blur()
      }

      function saveRecord (e) {
        var li = document.createElement('li')

        var strong = document.createElement('strong')
        strong.innerText = 'dataavailable: '
        li.appendChild(strong)

        var s = document.createElement('span')
        s.innerText = e.data.type + ', ' +
          bytes(e.data.size, { unitSeparator: ' ', decimalPlaces: 0 })
        li.appendChild(s)

        var audio = document.createElement('audio')
        audio.controls = true
        audio.src = URL.createObjectURL(e.data)
        li.appendChild(audio)

        list.appendChild(li)
        uploadAudio(e.data )
      }

      function uploadAudio(audioData){
        console.log(audioData)
        // var blob = new Blob(audioSrc, { 'type' : 'audio/wav; codecs=opus' });
        var blob = audioData
        // chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        var audio = document.createElement('audio')
        audio.src = audioURL;
        var bodyFormData = new FormData();
        bodyFormData.append("audio", blob)
        axios.post('https://awiclass.monoame.com/audiodeliver/post_music.php', bodyFormData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(e=>{
          this.status="已成功送出！"
        // $(".status").text(e.data.slice(-1,0)[0])
        })
      }

      function changeState (eventName) {
        var li = document.createElement('li')
        li.innerHTML = '<strong>' + eventName + ': </strong>' + recorder.state
        if (eventName === 'start') {
          li.innerHTML += ', ' + recorder.mimeType
        }
        list.appendChild(li)

        if (recorder.state === 'recording') {
          recordParts.disabled = true
          recordFull.disabled = true
          request.disabled = false
          resume.disabled = true
          pause.disabled = false
          stop.disabled = false
        } else if (recorder.state === 'paused') {
          recordParts.disabled = true
          recordFull.disabled = true
          request.disabled = false
          resume.disabled = false
          pause.disabled = true
          stop.disabled = false
        } else if (recorder.state === 'inactive') {
          recordParts.disabled = false
          recordFull.disabled = false
          request.disabled = true
          resume.disabled = true
          pause.disabled = true
          stop.disabled = true
        }
      }



    list = document.getElementById('list')

    recordParts = document.getElementById('sec')
    recordFull = document.getElementById('record')
    request = document.getElementById('request')
    resume = document.getElementById('resume')
    pause = document.getElementById('pause')
    stop = document.getElementById('stop')

    if (MediaRecorder.notSupported) {
      list.style.display = 'none'
      document.getElementById('controls').style.display = 'none'
      document.getElementById('formats').style.display = 'none'
      document.getElementById('mode').style.display = 'none'
      document.getElementById('support').style.display = 'block'
      return
    }

    document.getElementById('formats').innerText = 'Format: ' +
      TYPES.filter(function (i) {
        return MediaRecorder.isTypeSupported(i)
      }).join(', ')

    recordParts.addEventListener('click', startRecording.bind(null, 'parts'))
    recordFull.addEventListener('click', startRecording.bind(null, 'full'))
    request.addEventListener('click', requestData)
    resume.addEventListener('click', resumeRecording)
    pause.addEventListener('click', pauseRecording)
    stop.addEventListener('click', stopRecording)

    recordParts.disabled = false
    recordFull.disabled = false


  },
  watch(){
    if (temptext.length>50){
      temptext=temptext.slice(0,50)
    }
  }
}
</script>

<style lang="sass">
@import "../assets/_mixins.sass"
.app-mushrooom
  color: white
  padding-top: 50px
  input,select,textarea
    width: 100%
    max-width: 400px
    margin-top: 20px
  
  .textpostbtn
    padding: 3px 20px
    margin-top: 50px
    margin-left: auto
    margin-right: auto
    width: 100%
    max-width: 400px

  .section_text
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    textarea
      padding: 10px
      min-height: 200px

  a
    color: darken($colorOrange,10)
    &:visited
      color: darken($colorOrange,10)
  body
    margin: 1rem
    font-family: sans-serif

  article
    max-width: 28rem
    margin: 0 auto
    position: relative

  #controls
    display: flex
    margin-top: 2rem

  button
    flex-grow: 1
    height: 2.5rem
    min-width: 2rem
    border: none
    border-radius: 0.15rem
    background: $colorOrange
    margin-left: 2px
    box-shadow: inset 0 -0.15rem 0 rgba(0, 0, 0, 0.2)
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    &:hover, &:focus
      outline: none
      background: #00ffe9

    &::-moz-focus-inner
      border: 0

    &:active
      box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2)
      line-height: 3rem

    &:disabled
      pointer-events: none
      background: lightgray

    &:first-child
      margin-left: 0

    svg
      transform: translateY(-0.05rem)
      fill: black
      width: 1.4rem
      overflow: visible
      height: 30px

    &:active svg
      transform: translateY(0)

    &:disabled svg
      fill: #9a9a9a

    text
      fill: $colorOrange

    &:hover text, &:focus text
      fill: darken($colorOrange,10)

    &:disabled text
      fill: lightgray


  #formats
    margin-top: 0.5rem
    font-size: 80%

  #mode
    margin-top: 0.5rem
    font-size: 80%
    float: right

  #support
    display: none
    margin-top: 2rem
    color: red
    font-weight: bold

  #list
    margin-top: 1.6rem

  audio
    display: block
    width: 100%
    margin-top: 0.2rem

  li
    list-style: none
    margin-bottom: 1rem
</style>
