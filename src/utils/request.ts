import axios, { AxiosError } from 'axios'
import { showLoadingToast, closeToast, showFailToast } from 'vant'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API ?? '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: '处理中...'
    })

    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    closeToast()
    return response?.data
  },
  (error: AxiosError) => {
    closeToast()
    const { data } = error.response as any
    const message = (data as any).message

    showFailToast(message)

    return Promise.reject(error)
  }
)

export default service
