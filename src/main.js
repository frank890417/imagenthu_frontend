// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import SvgInline from './components/SvgInline.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

window.MediaRecorder = require('audio-recorder-polyfill')


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.component("SvgInline", SvgInline)
import "slick-carousel/slick/slick.css"

import SectionFooter from './components/sectionFooter'
Vue.component("SectionFooter", SectionFooter)

import FullPage from './components/FullPage'
Vue.component("FullPage", FullPage)

import Navbar from './components/Navbar'
Vue.component("Navbar", Navbar)


Vue.config.productionTip = false

Vue.mixin({
  methods: {
    cssbg(url) {
      let use_url = (url || "").replace("http://dschool.ntu.edu.tw/assets/", "/dschool_old_assets/")
      let result = {
        'background-image': `url("${use_url}")`
      }
      // console.log(result)
      return result
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
