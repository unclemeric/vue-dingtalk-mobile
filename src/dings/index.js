import jsapi from './jsapi.json'
import axios from 'axios'

import { CORP_ID, API } from '@/api'

class DingClient {
  sync(dingtalkFunciton, parameter) {
    return new Promise((resolve, reject) => {
      parameter = {
        ...parameter,
        ...CORP_ID,
        onSuccess: res => {
          resolve(res)
        },
        onFail: err => {
          reject(err)
        }
      }

      dingtalkFunciton(parameter)
    })
  }

  ddConfig() {
    return new Promise((resolve, reject) => {
      let jsapiArr = []
      for (var i in jsapi) {
        if (jsapi[i]) {
          jsapiArr.push(i)
        }
      }
      ;(async () => {
        let nonceStr = 'hwagain'
        let timeStamp = new Date().getTime()
        let params = {
          nonceStr,
          timeStamp,
          url: location.href.split('#')[0]
        }
        // const res = await axios.get(process.env.VUE_APP_BASE_API + 'sign', { params });
        const res = await axios.get(process.env.VUE_APP_BASE_API + API.DINGTALK_JSAPI, { params })
        const data = res.data || {}
        const config = {
          agentId: data.agentId || '',
          corpId: data.corpId || '',
          timeStamp: data.timeStamp || '',
          nonceStr: data.nonceStr || '',
          signature: data.signature || '',
          jsApiList: jsapiArr
        }
        dd.config(config)
        dd.error(function(error) {
          console.error('鉴权出错', JSON.stringify(error))
          dAlert('鉴权出错:' + JSON.stringify(error), () => {
            reject({
              msg: 'DingTalk jsApi concent : ' + JSON.stringify(error),
              success: false
            })
          })
        })
        dd.ready(function() {
          // dd.ui.webViewBounce.disable();
          resolve({ msg: 'DingTalk jsApi concent  ok: ', data, success: true })
        })
      })()
    })
  }
}

export default new DingClient()
