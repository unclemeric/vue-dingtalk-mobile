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
import start from 'dingtalk-jsapi/api/device/geolocation/start';
import stop from 'dingtalk-jsapi/api/device/geolocation/stop';
export default {
    data(){
        return {
            result:{}
        }
    },
    methods:{
        startPosition(){
            // ... 业务代码
            start({
                targetAccuracy : 10, // 期望精确度
                iOSDistanceFilter: 2, // 变更感知精度(iOS端参数)
                useCache: false, // 是否使用缓存(Android端参数)
                withRegeocode : false, // 是否返回逆地理信息,默认否
                callBackInterval : 1000, //回传时间间隔，ms
                sceneId: "home" // 定位场景id,
            }).then((res) => {
                console.log(res);
                this.result = res;
                /* 高德坐标 result 结构
                {
                    longitude : Number,
                    latitude : Number,
                    accuracy : Number,
                    address : String,
                    province : String,
                    city : String,
                    district : String,
                    road : String,
                    netType : String,
                    operatorType : String,
                    errorMessage : String,
                    errorCode : Number,
                    isWifiEnabled : Boolean,
                    isGpsEnabled : Boolean,
                    isFromMock : Boolean,
                    provider : wifi|lbs|gps,
                    accuracy : Number,
                    isMobileEnabled : Boolean
                }
                */
            }).catch((err) => {})
        },
        stopPosition(){
            // ... 业务代码
            stop({
                sceneId: 'home', // 需要停止定位场景id
            }).then((res) => {
                console.log(res);
                this.result = res;
            }).catch((err) => {})
        }
    }
}
</script>

<style>

</style>
