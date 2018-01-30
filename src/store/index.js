import Vue from 'vue'
import Vuex from 'vuex'
import makeBrochureModel from './modules/brochure'
import trash from './modules/trash'
import shared from './modules/shared'

import BrochureService from '../services/BrochureService'

const service = new BrochureService()

Vue.use(Vuex)

const brochure = makeBrochureModel(service)

export default new Vuex.Store({
  modules: {
    brochure,
    trash,
    shared
  }
})
