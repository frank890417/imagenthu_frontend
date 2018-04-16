import Vue from 'vue'
import Vuex from 'vuex'

import workdata from '@/data/works'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    works: workdata
  }
})
export default store