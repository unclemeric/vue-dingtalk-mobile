<template>
    <div class="custom-notic-container">
        <i class="iconfont icon-notice">
            <span style="font-size:.3rem;top: -0.03rem;position: relative;padding-left: .05rem;">通知：</span>
        </i>
        <p>
            <mt-swipe :show-indicators="false" :auto="time" class="notice-box">
                <mt-swipe-item v-for="(item,index) in home.notice_top_ten" :key="index"><a :href="item.url">{{item.title||''}}</a></mt-swipe-item>
            </mt-swipe>
            <!-- <ul>
                <li>containercontainercontainercontainercontainercontainercontainer</li>
                <li>containercontainercontainercontainercontainercontainercontainer</li>
                <li>containercontainercontainercontainercontainercontainercontainer</li>
                <li>containercontainercontainercontainercontainercontainercontainer</li>
            </ul> -->
        </p>
        <a>更多</a>
    </div>
</template>

<script>
import { mapRules, mapModules } from "vuet";
export default {
  mixins: [mapModules({ home: "home" })],
  data() {
    return {
      time: 6000
    };
  },
  created() {
    this.home.noticeTopTen();
  }
};
</script>

<style lang="scss" scoped>
.custom-notic-container {
  position: relative;
  height: 0.8rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.15rem;
  & > i {
    position: absolute;
    left: 0;
    top: 25%;
  }
  & > p {
    padding: 0 0.7rem 0 1.3rem;
    box-sizing: border-box;
    display: block;
    height: 100%;
    .notice-box {
      width: 100%;
      height: 0.6rem;
      overflow: hidden;
      height: 100%;
      // line-height: .6rem;
      .mint-swipe-item {
        width: 100%;
        height: 100%;
        line-height: 100%;
        a {
          width: 100%;
          color: #333;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          top: 32%;
        }
      }
    }
  }
  & > a {
    position: absolute;
    top: 35%;
    right: 0;
  }
}
</style>
