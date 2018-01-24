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
    // http://awf-carlocardenas.c9users.io/api/v1/enquiries/815
    return axios.post(`enquiries/${brochure.id}`, brochure)
      .then((data) => {
        return data
      })
  }
  getTrash (page, perPage, status = 'trash') {
    // http://awf-carlocardenas.c9users.io/api/v1/enquiries?page=1&per_page=10&status=trash
    return new Promise((resolve) => {
      axios.get(`enquiries?page=${page}&per_page=${perPage}&status=${status}&$client_id=vue.app`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}
