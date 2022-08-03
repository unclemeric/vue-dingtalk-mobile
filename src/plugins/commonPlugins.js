import 'lib-flexible/flexible'
import 'vant/lib/index.css'
import 'public/css/main.css'
import 'public/lib/index.css'
import Vant from 'vant'
import VueElementLoading from 'vue-element-loading'

import '@/plugins/registerServiceWorker'
import '@/errorLog'

import Footbar from '@/components/Footbar'
import { API } from '@/api'

// eslint-disable-next-line
export const initPlugins = _vue => {
  const FastClick = require('fastclick')
  FastClick.attach(document.body)

  // 全局引入vant ui
  _vue.use(Vant)
  _vue.component('footbar', Footbar)
  window.dAlert = function(msg, cb1, cb2) {
    dd.device.notification.alert({
      message: msg,
      title: '提示', // 可传空
      buttonName: '确定',
      onSuccess: function() {
        cb1 && cb1()
      },
      onFail: function(err) {
        cb2 && cb2(err)
      }
    })
  }
  window.dPrompt = function(msg, cb1, cb2, text) {
    dd.device.notification.prompt({
      message: msg || '提示信息',
      title: '提示',
      defaultText: text || '',
      buttonLabels: ['取消', '确定'],
      onSuccess: function(data) {
        if (data.buttonIndex === 1) {
          cb1 && cb1(data.value)
        } else {
          cb2 && cb2()
        }
      },
      onFail: function(err) {
        dAlert(data.message)
      }
    })
  }
  window.dConfirm = function(msg, cb1, cb2) {
    dd.device.notification.confirm({
      message: msg,
      title: '提示',
      buttonLabels: ['取消', '确定'],
      onSuccess: data => {
        if (data.buttonIndex === 1) {
          cb1 && cb1()
        } else {
          cb2 && cb2()
        }
      },
      onFail: data => {
        dAlert(data.message)
      }
    })
  }
  _vue.prototype.$dAlert = window.dAlert
  _vue.prototype.$dConfirm = window.dConfirm
  _vue.prototype.$dPrompt = window.dPrompt
  _vue.prototype.$api = API
  _vue.component('VueElementLoading', VueElementLoading)
}
