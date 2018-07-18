import Vue from 'vue'
import Vuet, { mapModules, mapRules } from 'vuet'
import * as dd from 'dingtalk-jsapi'
import httpUtil from '@/utils/httpUtil'

Vue.use(Vuet)

const user_storage = function(){
    return dd.util.domainStorage.getItem({name:"loginuser"}).then(res=>{
        return JSON.parse(res.value||'{}');
    });
}

const publicModules = {
    _LOGINUSER_:{},
    checkLogin: function(){
        return new Promise(async (resolve)=>{
            let loginuser = await user_storage()
            this._LOGINUSER_ = loginuser;
            resolve(loginuser);
        })
    }

}

Vuet.options.module = publicModules;
const modules = {
    home:{
        data(){
            return {
                notice_top_ten:[]
            };
        },
        async noticeTopTen(){
            let params = {userId: this._LOGINUSER_.userid};
            httpUtil.get('api/blackboard/listtopten',{params}).then(res=>{
                this.notice_top_ten = res.data.blackboard_list || []
            })
        },

    }
}
const vuet = new Vuet({
    modules
})

export default vuet
