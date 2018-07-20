<template>
    <div>
        <mt-button type="primary" @click="startPosition">开始定位</mt-button>
        <mt-button type="default" @click="stopPosition">结束定位</mt-button>
        <div>
            当前位置信息：{{result}}
        </div>
    </div>
</template>

<script>
// import * as DingTalkApi from 'dingtalk-jsapi';
import Ding from '@/dings/index.js'
export default {
    data(){
        return {
            result:{},
        }
    },
    watch:{
        result(result){
            if(result.resultCode == 0){
                dd.biz.map.locate({
                    latitude: result.latitude, // 纬度，非必须
                    longitude: result.longitude, // 经度，非必须
                    onSuccess: function (result) {
                        /* result 结构 */
                        that.result = result;
                        that.flag = false;
                    },
                    onFail: function (err) {
                        that.result = {error:'失败'}
                    }
                });
            }
        }
    },
    methods:{
        async startPosition(){
            let that = this;
            await Ding.ddConfig(); 
            // dd.biz.map.locate({
            //     latitude: 39.903578, // 纬度，非必须
            //     longitude: 116.473565, // 经度，非必须
            //     onSuccess: function (result) {
            //         /* result 结构 */
            //         // {
            //         //     province: 'xxx', // POI所在省会，可能为空
            //         //     provinceCode: 'xxx', // POI所在省会编码，可能为空
            //         //     city: 'xxx', // POI所在城市，可能为空
            //         //     cityCode: 'xxx', // POI所在城市，可能为空
            //         //     adName: 'xxx', // POI所在区名称，可能为空
            //         //     adCode: 'xxx', // POI所在区编码，可能为空
            //         //     distance: 'xxx', // POI与设备位置的距离
            //         //     postCode: 'xxx', // POI的邮编，可能为空
            //         //     snippet: 'xxx', // POI的街道地址，可能为空
            //         //     title: 'xxx', // POI的名称
            //         //     latitude: 39.903578, // POI的纬度
            //         //     longitude: 116.473565, // POI的经度
            //         // }
            //     },
            //     onFail: function (err) {
            //         alert(JSON.stringify(err))
            //     }
            // });
            // ... 业务代码
            dd.device.geolocation.start({
                targetAccuracy : 1, // 期望精确度
                iOSDistanceFilter: 1, // 变更感知精度(iOS端参数)
                withReGeocode : true, // 是否返回逆地理信息,默认否
                callBackInterval : 300, //回传时间间隔，ms
                sceneId: "home", // 定位场景id,
                onSuccess : function(result) {
                    that.result = result;
                    alert(JSON.stringify(result))
                    
                },
                onFail : function(err) {
                    alert(JSON.stringify(err),'onFail')
                }
            });
        },
        async stopPosition(){
            // ... 业务代码
            let that = this;
            await Ding.ddConfig(); 
            dd.device.geolocation.stop({
                sceneId: 'home', // 需要停止定位场景id
                onSuccess : function(result) {
                    alert(JSON.stringify(result))
                    that.result = result;
                },
                onFail : function(err) {
                    alert(JSON.stringify(err))
                }
            });
        }
    }
}
</script>

<style>

</style>
