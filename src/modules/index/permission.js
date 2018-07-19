import router from '@/modules/index/router'
import vuet from '@/vuet'
import { checkAuth } from './ding'
import * as DingTalkApi from 'dingtalk-jsapi'


// const white_list = ['/no-permission']

const notificationMsg = function(msg,cb){
    DingTalkApi.device.notification.alert({
        message: msg,
        title: "提示",//可传空
        buttonName: "确定",
        onSuccess : function() {
            cb&&cb();
        },
        onFail : function(err) {}
    });
}

router.beforeEach(async (to, from, next) => {
    // ...
    if(!DingTalkApi.other){
        let login_result = {}
        if(vuet.modules.home._LOGINUSER_.userid){
            login_result = vuet.modules.home._LOGINUSER_;
        }else{
            login_result = await vuet.modules.home.checkLogin();
        }
        if (!login_result.userid) {
            const auth = await checkAuth();
            if(auth&&auth.success){
                next();
            }else{
                notificationMsg(auth.msg,function(){
                    return;
                })
            }
        }else{
            next();
        }
    }else{
        alert('请在钉钉客户端打开本系统');
        return;
    }
})