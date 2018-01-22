import BrochureService from '../../services/BrochureService'
import * as types from '../mutation-types'

const state = {
  trashes: [],
  isloaded: false,
  trashCount: 0
}

const getters = {
  getTrashes: state => state.trashes,
  getTrashCount: state => state.trashCount

}

const actions = {
  loadTrashes ({commit}, {page, perPage}) {
    const service = new BrochureService()

    return service.getTrash(page, perPage).then(data => {
      const trashes = data.content.data
      // resolveConsultant(brochures, consultants)
      commit(types.LOAD_TRASHES, trashes)
      commit(types.LOAD_TRASHES_COUNT, data.content.total)
    })
  }
}

const mutations = {
  [types.LOAD_TRASHES] (state, trashes) {
    state.trashes = trashes
  },
  [types.LOAD_TRASHES_COUNT] (state, count) {
    state.trashCount = count
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
