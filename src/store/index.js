import Vue from 'vue'
import Vuex from 'vuex'
import brochure from './modules/brochure'
import trash from './modules/trash'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    brochure,
    trash
  }
})
