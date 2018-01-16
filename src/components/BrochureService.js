import axios from 'axios'
axios.defaults.baseURL = 'http://awf-carlocardenas.c9users.io/api/v1/'

export default class BrochureService {
  getBrochures (page, perPage, status = 'inbox') {
    return new Promise((resolve) => {
      axios.get(`enquiries?page=${page}&per_page=${perPage}&status=${status}&$client_id=vue.app`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}
