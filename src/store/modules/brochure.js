
import * as types from '../mutation-types'

export default function makeBrochureModel (brochureService) {
  const state = {
    brochures: [],
    brochuresCount: 0,
    isloaded: false,
    currentPage: 1,
    currentBrochure: {
    },
    updateStatus: null
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
      return brochureService.getBrochures(page, perPage).then(data => {
        const brochures = data.content.data
        const consultants = rootState.shared.consultants

        resolveConsultant(brochures, consultants)

        commit(types.LOAD_BROCHURES, { brochures, page, total: data.content.total })
      })
    },

    start ({commit, state, rootState, dispatch}, {page, perPage}) {
      dispatch('loadBrochures', {page, perPage})
      setInterval(() => {
        brochureService.getBrochures(state.currentPage, perPage)
          .then((data) => {
            const brochures = data.content.data
            const consultants = rootState.shared.consultants

            resolveConsultant(brochures, consultants)

            commit(types.LOAD_BROCHURES, { brochures, page: state.currentPage, total: data.content.total })
          })
      }, 1000 * 15)
    },

    updateBrohure ({commit, dispatch}, brochure) {
      return brochureService.saveBrochures(brochure).then((data) => {
        commit(types.UPDATE_BROCHURE_UPDATE, 'successful')
        return dispatch('loadBrochures', {page: 1, perPage: 10})
      }).catch(() => {
        commit(types.UPDATE_BROCHURE_UPDATE, 'fail')
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
    [types.LOAD_BROCHURES] (state, {brochures, page, total}) {
      state.brochures = brochures
      state.brochuresCount = total
      state.currentPage = page
    },
    [types.UPDATE_BROCHURE_UPDATE] (state, updateStatus) {
      state.updateStatus = updateStatus
    }
  }

  return {
    state,
    getters,
    actions,
    mutations
  }
}
