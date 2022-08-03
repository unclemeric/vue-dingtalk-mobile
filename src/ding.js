import * as DingTalkApi from 'dingtalk-jsapi'
import Ding from '@/dings/index.js'
import vuet from '@/vuet'
import axios from 'axios'
import { DINTALK_API, API } from '@/api'

function cacheLoginInfo(loginuser) {
  DingTalkApi.util.domainStorage.setItem({
    name: 'loginuser',
    value: JSON.stringify(loginuser || {})
  })
  vuet.modules.home.doLogin(loginuser)
}

export const checkAuth = function() {
  if (DINTALK_API === true) {
    return new Promise(async (resolve, reject) => {
      let authResult = {}
      try {
        authResult = await Ding.ddConfig() /* 配置钉钉api鉴权 */
      } catch (e) {
        authResult = { data: {} }
      }
      if (authResult.success) {
        dd.runtime.permission.requestAuthCode({
          corpId: authResult.data.corpId,
          onSuccess: async function(result) {
            const userInfo = await axios
              .get(process.env.VUE_APP_BASE_API + API.DINGTALK_USERID + '?authCode=' + result.code)
              .then(res => res.data || {}) // 获取当前登录人userid
            if (userInfo && userInfo.userid) {
              cacheLoginInfo(userInfo) // 设置登录信息localStorage
              resolve({ success: true })
            } else {
              resolve({ success: false, msg: userObj.error.errmsg })
            }
          },
          onFail: function(err) {
            resolve({ success: false, msg: err.errorMessage })
          }
        })
      } else {
        resolve({ success: false, msg: authResult.msg })
      }
    })
  } else {
    resolve({
      success: false,
      msg: ' Dingtalk jsApi 服务: 没有配置启用 (如何使用请查看文档) '
    })
  }
}
