<template>
  <div>
    <mt-swipe :auto="5000" style="width:100%;height:3.6rem;">
      <mt-swipe-item v-for="(color,index) in swipeColors" :key="index" :style="{background:color,textAlign:'center',lineHeight:'3.6rem',fontSize:'1.2rem'}">{{index+1}}</mt-swipe-item>
    </mt-swipe>
    <div style="padding:0 .15rem;">
      <custom-notice></custom-notice>
      welcome <b>{{home._LOGINUSER_.name}}</b>
      <map-position></map-position>
      <v-ding></v-ding>
      <mt-button @click="QRCode">扫一扫</mt-button>
      <input type="file" name="" ref="takePic" accept="image/*" capture="camera">
    </div>
  </div>
</template>

<script>
import { mapRules, mapModules } from 'vuet'
import CustomNotice from '@/components/CustomNotice'
import MapPosition from '@/components/MapPosition'
import VDing from '@/components/Ding'
export default {
  mixins: [
    mapModules({ home: 'home' })
  ],
  data(){
    return {
      swipeColors:[
        '#0089dc','#ff2d4b','#ffd705'
      ],
    }
  },
  computed:{
    
  },
  components:{
    CustomNotice,
    MapPosition,
    VDing
  },
  methods:{
    QRCode(){
      dd.biz.util.scan({
        type: "all" , // type 为 all、qrCode、barCode，默认是all。
        onSuccess: function(data) {
          console.log(data)
          alert(JSON.stringify(data))
        },
        onFail : function(err) {
        }
      })
    },
    userName(){
      return window._LOGINNAME || ''
    },
    takePicIosFixed(){
      if(dd.ios){
        this.$refs.takePic.removeAttribute('capture');
      }
    }
  },
  mounted(){
    this.takePicIosFixed();
  }
}
</script>

<style lang="scss">
  body,html {
    margin:0;
    padding:0;
  }
</style>
