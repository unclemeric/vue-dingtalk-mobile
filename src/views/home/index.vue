<template>
  <div ref="container" class style="min-height: 100vh" :class="{ 'box-loading': isLoading }">
    <vue-element-loading :active="isLoading" color="#0099ff" is-full-screen :text-style="{ fontSize: '.36rem' }" spinner="spinner" :text="loadingText" />
    <div>hello dingtalk h5</div>
  </div>
</template>

<script>
import { mapModules } from 'vuet'
import request from '@/utils/httpUtil'
import * as DingTalkApi from 'dingtalk-jsapi'
// import vuet from '@/vuet'
import { API } from '@/api'
export default {
  mixins: [
    mapModules({
      home: 'home'
    })
  ],
  data() {
    return {
      user: {}
    }
  },
  watch: {
    $router() {
      this.initPage()
    }
  },
  mounted() {
    this.initPage()
  },
  methods: {
    initPage() {
      DingTalkApi.ui.webViewBounce.disable()
      DingTalkApi.biz.navigation.setTitle({
        title: 'OA审核审批'
      })
      this.user = this.home._LOGINUSER_
    }
  }
}
</script>
<style lang="less" scoped></style>
