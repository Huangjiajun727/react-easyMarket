import axios from 'axios';

let baseUrl = '';
let imgBaseUrl = '';

//这个是node环境 业务还需要配置默认域名地址
if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '/api';
}

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true // 跨域类型时是否在请求中协带cookie
})
const getNewHeaders = () => {
  return { 'x-nideshop-token': window.localStorage.getItem('token') }
}

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, { params, headers: getNewHeaders() }).then(({ data }) => {
      if (data.errno === 0) {
        resolve(data.data)
      } else {
        resolve(data)
      }
    }).catch((err) => {
      reject({ err: JSON.stringify(err) })
    })
  })
}

export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, { ...params }, { headers: getNewHeaders() }).then(({ data }) => {
      resolve(data)
    }).catch((err) => {
      reject({ err: JSON.stringify(err) })
    })
  })
}
