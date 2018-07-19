
// import * as dd from 'dingtalk-jsapi'
import jsapi from './jsapi.json';
import Logger from '@/utils/logger'
// import fetch from '@/utils/httpUtil'
import axios from 'axios'
const { CORP_ID, AUTH_URL, APP_URL } = require(`@/config/develop.json`);

class DingClient {

    sync(dingtalkFunciton, parameter) {
        return new Promise((resolve, reject) => {
            parameter = {
                ...parameter, ...CORP_ID,
                onSuccess: res => { resolve(res) },
                onFail: err => { reject(err) }
            };

            dingtalkFunciton(parameter);
        })
    }

    ddConfig() {
        return new Promise((resolve, reject) => {
            let jsapiArr = new Array();
            for (var i in jsapi) {
                jsapi[i]
                ? jsapiArr.push(i)
                : ""
            };
            (async () => {

                let nonceStr = 'hwagain'
                let timeStamp = new Date().getTime()
                let params = {
                    nonceStr,
                    timeStamp,
                    url: location.origin + "/"
                }
                const res = await axios.get(AUTH_URL + "sign", { params });
                const data = res.data || {};
                const config = {
                    agentId: data.agentId || '',
                    corpId: data.corpId || '',
                    timeStamp: data.timeStamp || '',
                    nonceStr: data.nonceStr || '',
                    signature: data.signature || '',
                    jsApiList: jsapiArr
                }
                dd.config(config)
                dd.error(function (error) {
                    console.log(err)
                    reject({ msg: "DingTalk jsApi concent : " + JSON.stringify(error), success: false })
                });
                dd.ready(function () {
                    resolve({ msg: 'DingTalk jsApi concent  ok: ', data, success: true })
                });

            })();
        });
    };
};

export default new DingClient();
