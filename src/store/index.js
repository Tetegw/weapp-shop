import Vue from 'vue'
import Vuex from 'vuex'
import TYPES from './types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [TYPES.ADD] (state) {
      state.count++
    }
  }
})
