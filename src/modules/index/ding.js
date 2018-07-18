import * as dd from 'dingtalk-jsapi'
import Ding from '@/dings/index.js'
import vuet from '@/vuet'
import axios from 'axios'

const { DINTALK_API, AUTH_URL } = require(`@/config/develop.json`);

function cacheLoginInfo(loginuser){
    dd.util.domainStorage.setItem({name:"loginuser",value:JSON.stringify(loginuser || {})})
}

export const checkAuth = function() {
    if (DINTALK_API == true) {
        return new Promise(async (resolve, reject) => {
            const authResult = await Ding.ddConfig();  /* 配置钉钉api鉴权 */
            if (authResult.success) {
                dd.runtime.permission.requestAuthCode({
                    corpId: authResult.data.corpId,
                    onSuccess: async function (result) {
                        const userInfo = await axios.get(AUTH_URL + "api/user/userinfo?authCode=" + result.code).then(res => res.data || {});//获取当前登录人userid
                        const userObj = await axios.get(AUTH_URL + "api/user/get?userId="+userInfo.userid).then(res => res.data || {});//获取当前登录人
                        if (userObj && userObj.userid) {
                            cacheLoginInfo(userObj);//设置登录信息localStorage
                            resolve({ success: true });
                        }else{
                            resolve({ success: false, msg:userObj.error.errmsg});
                        }
                    },
                    onFail: function (err) {
                        resolve({ success: false, msg:err.errorMessage});
                    }
                })
            } else {
                resolve({success:false,msg:authResult.msg});
            }
        })
    } else {
        resolve({success:false,msg:' Dingtalk jsApi 服务: 没有配置启用 (如何使用请查看文档) '});
    }
}
