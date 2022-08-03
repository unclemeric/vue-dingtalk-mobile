import Vue from 'vue'
import Vuet from 'vuet'
import * as DingTalkApi from 'dingtalk-jsapi'
import httpUtil from '@/utils/httpUtil'

Vue.use(Vuet)

const userStorage = function() {
  return DingTalkApi.util.domainStorage.getItem({ name: 'loginuser' }).then(res => {
    return JSON.parse(res.value || '{}')
  })
}

const publicModules = {
  _LOGINUSER_: {},
  checkLogin: function() {
    return new Promise(async resolve => {
      let loginuser = await userStorage()
      this._LOGINUSER_ = loginuser
      resolve(loginuser)
    })
  },
  doLogin: function(userInfo) {
    this._LOGINUSER_ = userInfo || '{}'
  }
}

Vuet.options.module = publicModules
const modules = {
  home: {
    data() {
      return {
        token: '',
        notice_top_ten: []
      }
    },
    async noticeTopTen() {
      let params = { userId: this._LOGINUSER_.userid }
      httpUtil.get('api/blackboard/listtopten', { params }).then(res => {
        this.notice_top_ten = res.data.blackboard_list || []
      })
    },
    SETTOKEN(val) {
      this.token = val
    }
  },
  annual: {
    data() {
      return {
        suggestions: []
      }
    }
  }
}
const vuet = new Vuet({
  modules
})

export default vuet
