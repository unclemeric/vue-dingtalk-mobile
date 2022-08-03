import axios from 'axios'
import * as DingTalkApi from 'dingtalk-jsapi'
import { API } from '@/api'
import vuet from '@/vuet'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '',
  timeOut: 5000
  // onUploadProgress: p=> {
  //     console.log(p)
  //     if (progressEvent.lengthComputable){
  //         return Math.round((p.loaded * 100) / p.total)
  //     }
  // }
})
request.interceptors.request.use(
  config => {
    if (config.url !== API.DINGTALK_USERID) {
      config.headers.common['Authorization'] = vuet.modules.home.token || vuet.modules.home._LOGINUSER_.token
    }
    return config
  },
  error => {}
)

request.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.response) {
      let errMsg = (error.response && error.response.data && error.response.data.msg) || ''
      switch (error.response.status) {
        case 500:
          errMsg = errMsg || '系统异常: errorCode = 500'
          break
        case 503:
          errMsg = errMsg || '系统异常: 503,后台服务未启动'
          break
        case 400:
          errMsg = errMsg || '提交参数异常'
          break
        case 401:
          errMsg = '登录失效，将重新获取用户信息'
          DingTalkApi.util.domainStorage.removeItem({ name: 'loginuser' })
          break
        case 404:
          errMsg = errMsg || '访问接口不存在'
          break
      }
      if (error.response.status === 401) {
        window.location.reload()
      } else if (errMsg) {
        dd.device.notification.alert({
          message: (error.response.data ? error.response.data.msg : '') || errMsg || '',
          title: '系统提示',
          buttonName: '确定',
          onSuccess: function () {}
        })
      }
    }
    return Promise.reject(error.response)
  }
)

window.$request = request
export default request
