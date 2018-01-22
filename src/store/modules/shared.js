const state = {
  consultants: window.Consultants,
  user: window.User,
  brochureStatus: window.Statuses['inbox'].description,
  countries: window.Countries,
  statuses: window.Statuses
}

const getters = {
  getCountries: state => state.countries,
  getStatuses: state => state.statuses,
  getConsultants: state => state.consultants,
  getbrochureStatus: state => state.brochureStatus,
  getUser: state => state.user
}

const actions = {

}

export default {
  state,
  getters,
  actions
}
