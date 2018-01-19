import BrochureService from '../../services/BrochureService'

const state = {
  brochures: [],
  brochuresCount: 0,
  isloaded: false
}

// getters
const getters = {
  getbrochuresCount: (state) => state.brochuresCount,
  getbrochures: state => state.brochures
}

const actions = {
  loadBrochures ({commit}, {page, perPage}) {
    const service = new BrochureService()
    return service.getBrochures(page, perPage).then(data => {
      commit('LOAD_BROCHURES', data.content.data)
      commit('LOAD_BROCHURES_COUNT', data.content.total)
    })
  }
}

const mutations = {
  'LOAD_BROCHURES' (state, brochures) {
    state.brochures = brochures
  },
  'LOAD_BROCHURES_COUNT' (state, count) {
    state.brochuresCount = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
