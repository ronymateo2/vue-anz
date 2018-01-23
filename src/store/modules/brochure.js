import BrochureService from '../../services/BrochureService'
import * as types from '../mutation-types'

const state = {
  brochures: [],
  brochuresCount: 0,
  isloaded: false,
  currentPage: 1,
  currentBrochure: {

  },
  currentClient: {

  }
}

// getters
const getters = {
  getbrochuresCount: (state) => state.brochuresCount,
  getbrochures: state => state.brochures,
  getCurrentBrochure: state => state.currentBrochure
}
// TODO: REFACTOR
const actions = {
  loadBrochures ({commit, rootState}, {page, perPage}) {
    const service = new BrochureService()
    return service.getBrochures(page, perPage).then(data => {
      const brochures = data.content.data
      const consultants = rootState.shared.consultants

      resolveConsultant(brochures, consultants)

      commit(types.LOAD_BROCHURES, { brochures, page, total: data.content.total })
    })
  },

  start ({commit, state, rootState, dispatch}, {page, perPage}) {
    dispatch('loadBrochures', {page, perPage})
    setInterval(() => {
      const service = new BrochureService()
      service.getBrochures(state.currentPage, perPage)
        .then((data) => {
          const brochures = data.content.data
          const consultants = rootState.shared.consultants

          resolveConsultant(brochures, consultants)

          commit(types.LOAD_BROCHURES, { brochures, page: state.currentPage, total: data.content.total })
        })
    }, 1000 * 5)
  },

  updateDetails ({commit, state}, {consultantId, statusId}) {
    commit(types.UPDATE_BROCHURE_DETAILS, {consultantId, statusId})
  },

  updateClients ({commit, state}, client) {
    commit(types.UPDATE_BROCHURE_CLIENT, client)
  }
}

const resolveConsultant = (brochures, consultants) => {
  brochures.forEach((brochure) => {
    const id = brochure.enquiry_metas.find(t => t.key === 'consultant')
    if (id && id.value) {
      // eslint-disable-next-line
      const metaConsultant = consultants.find(c => c.id == id.value)
      if (metaConsultant) {
        brochure.consultant = metaConsultant.name
        brochure.consultantId = metaConsultant.id
      }
    }
  })
}

const mutations = {
  [types.LOAD_BROCHURES] (state, {brochures, page, total}) {
    state.brochures = brochures
    state.brochuresCount = total
    state.currentPage = page
  },
  [types.UPDATE_BROCHURE_DETAILS] (state, {consultantId, statusId}) {
    state.currentBrochure.consultantId = consultantId
    state.currentBrochure.statusId = statusId
  },
  [types.UPDATE_BROCHURE_CLIENT] (state, client) {
    state.currentClient = client
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
