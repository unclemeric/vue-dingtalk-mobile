<template>
  <div id="app">
    <!--<transition  mode="out-in" :enter-active-class="inClass" :leave-active-class="outClass">-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      inClass: '',
      outClass: ''
    }
  },
  updated() {
    // window.scroll(0, 0);
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path === '/' ? 0 : to.path.split('/').length
      const fromDepth = from.path === '/' ? 0 : from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // if(toDepth > fromDepth){
      //   this.inClass = 'animated slideInRight faster'
      //   this.outClass='animated slideOutLeft faster'
      // }else if(toDepth < fromDepth){
      //   this.inClass = 'animated slideInLeft faster'
      //   this.outClass='animated slideOutRight faster'
      // }
    }
  }
}
</script>

<style>
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.42, 0, 1, 1);
}

.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-right-leave-active {
  opacity: 0;
}

.slide-right-enter {
  /*opacity: 0;*/
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.slide-left-leave-active {
  opacity: 0;
}
</style>
