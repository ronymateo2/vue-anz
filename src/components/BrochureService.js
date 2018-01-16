import json from './enquiries.json'
import json2 from './enquiries2.json'
export default class BrochureService {
  getBrochures () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(json)
      }, 2000)
    })
  }

  getBrochures2 () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(json2)
      }, 2000)
    })
  }
}
