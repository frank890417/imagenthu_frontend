import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import workdata from '@/data/works'

const store = new Vuex.Store({
  state: {
    works: workdata
  }
})
export default store