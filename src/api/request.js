import axios from 'axios'
import { resolve, reject } from 'core-js/fn/promise'

export function request(options) {
  return new Promise((resolve,reject) => {
    const instance = axios.create({
      headers: {
        'Content-type': 'application/json',
      },
      timeout: 10000
    });
    instance(options).then(response => {
      if(response.status == '200'){
        if(response.data.status == '200'{
          resolve(response.data)
        })else {
          reject(response.data.msg)
        }
      }
    }).
    catch(err => {
      reject(err)
    })
  })
}