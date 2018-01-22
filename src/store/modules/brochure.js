import BrochureService from '../../services/BrochureService'
import * as types from '../mutation-types'

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
  loadBrochures ({commit, rootState}, {page, perPage}) {
    const service = new BrochureService()
    return service.getBrochures(page, perPage).then(data => {
      const brochures = data.content.data
      const consultants = rootState.shared.consultants

      resolveConsultant(brochures, consultants)

      commit(types.LOAD_BROCHURES, brochures)
      commit(types.LOAD_BROCHURES_COUNT, data.content.total)
    })
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
  [types.LOAD_BROCHURES] (state, brochures) {
    state.brochures = brochures
  },
  [types.LOAD_BROCHURES_COUNT] (state, count) {
    state.brochuresCount = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
