<template>
  <div class="place-content">
    <div class="place-content_info">
      <div class="place-content_info_left"></div>
      <div class="place-content_info_right"></div>
    </div>
    <div class="place-content_vid"></div>
  </div>
</template>

<script>
  export default {
    name: "page-place-info"
  }
</script>

<style scoped>
  .place-content {
    padding: 43px 13px 20px 34px;
    background: #FFFFFF;
  }
  .place-content_info {
    height: 420px;
    background: #3c3f43;
    width: 100%;
    margin: -20px 0 0 -10px;
  }
  .place-content_info_left {
    width: 420px;
    height: 100%;
    background: #c7ccd3;
  }
  .place-content_info_right {
    width: 100%;
  }
  .place-content_vid {
    width: 100%;
    height: 302px;
    background: #0eb78d;
    margin: 40px 20px 0 -10px;
  }
</style>
