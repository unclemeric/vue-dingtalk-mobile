<template>
    <div>
        <mt-button @click="doDing">钉一下</mt-button>
    </div>
</template>

<script>
import Ding from '@/dings/index.js'
import * as DingTalkApi from 'dingtalk-jsapi'
export default {
    methods:{
        async doDing(){
            await Ding.ddConfig(); 
            DingTalkApi.biz.ding.create({
                users : ['326508002'],// 用户列表，工号
                // type: 1, // 附件类型 1：image  2：link
                alertType: 2, // 钉发送方式 0:电话, 1:短信, 2:应用内
                alertDate: {"format":"yyyy-MM-dd HH:mm","value":"2018-05-09 08:00"},
                // attachment: {
                //     images: [''],
                // }, // 附件信息
                text: '请本周末汇报现有项目进度',  // 正文
                bizType :0, // 业务类型 0：通知DING；1：任务；2：会议；
                success:function(res){
                    alert(JSON.stringify(res));
                    /*
                    {
                        "dingId": "1_1_a09f167xxx",
                        "text": "钉正文内容",
                        "result": true
                    }
                    */   
                },
                fail:function(err){
                }
            });
        }
    }
}
</script>

<style>

</style>
