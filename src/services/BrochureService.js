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
  saveBrochuresv2 (brochure) {
    // http://awf-carlocardenas.c9users.io/api/v1/enquiries/815
    console.log(brochure)
    return fetch.put(`enquiries/${brochure.id}?$client_id=vue.app`, brochure, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resolve) => {
        return resolve
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
