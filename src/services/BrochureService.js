import axios from 'axios'
axios.defaults.baseURL = 'http://awf-carlocardenas.c9users.io/api/v1/'
// axios.defaults.headers = {
//   'X-CSRF-TOKEN': window.Laravel.csrfToken
// }

export default class BrochureService {
  getBrochures (page, perPage, status = 'inbox') {
    return new Promise((resolve) => {
      axios.get(`enquiries?page=${page}&per_page=${perPage}&status=${status}&$client_id=vue.app`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
  saveBrochures (brochure) {
    return axios.put(`enquiries/${brochure.id}?$client_id=vue.app`, brochure)
      .then((resolve) => {
        return resolve
      })
  }

  getTrash (page, perPage, status = 'trash') {
    return new Promise((resolve) => {
      axios.get(`enquiries?page=${page}&per_page=${perPage}&status=${status}&$client_id=vue.app`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}
