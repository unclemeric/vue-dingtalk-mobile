// import router from '@/modules/index/router'
import vuet from '@/vuet'
import { checkAuth } from '@/ding'
import * as DingTalkApi from 'dingtalk-jsapi'

const notificationMsg = function(msg, cb) {
  DingTalkApi.device.notification.alert({
    message: msg,
    title: '提示',
    buttonName: '确定',
    onSuccess: function() {
      cb && cb()
    },
    onFail: function(err) {}
  })
}

export const routerFilter = async function(next) {
  // DingTalkApi.util.domainStorage.removeItem({name:'loginuser'});
  if (!DingTalkApi.other) {
    let loginResult = {}
    if (vuet.modules.home._LOGINUSER_.userid && vuet.modules.home._LOGINUSER_.token) {
      loginResult = vuet.modules.home._LOGINUSER_
    } else {
      loginResult = await vuet.modules.home.checkLogin()
    }
    if (!loginResult.userid) {
      const auth = await checkAuth()

      if (auth && auth.success) {
        next()
      } else {
        notificationMsg(auth.msg, function() {
          return null
        })
      }
    } else {
      next()
    }
  } else {
    // alert('请在钉钉客户端打开本系统');
    // return
    next()
  }
}

export default routerFilter
