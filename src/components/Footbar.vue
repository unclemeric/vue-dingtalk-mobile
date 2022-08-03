<template>
  <div>
    <div class="footer">
      <slot></slot>
    </div>
    <div style="height: 60px"></div>
  </div>
</template>

<script>
export default {
  name: 'Footbar'
}
</script>

<style scoped>
  .footer{
    position:fixed;
    bottom: 0;
    min-height: 40px;
    width: 100%;
    background-color: #ffffff;
    text-align: center;
  }
</style>
