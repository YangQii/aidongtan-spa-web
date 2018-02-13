<template>
  <div class="content">
    <div class="content_info">
      <div>
        <span>总盈利金额:</span>
        <span class="content_info-span">健身房点击量: 8955000 次</span>
      </div>
      <div style="border-bottom: 1px solid #DEDEDE;padding-bottom: 50px">
        <span class="content_info-span-m">54886000<i>元</i></span>
        <span class="content_info-span">健身房点击量: 8955000 次</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "page-overview"
  }
</script>

<style scoped>
  .content {
    height: 800px;
    margin: 120px 31px 150px 150px;
    background: #FFFFFF;
    padding-top: 42px;
    padding-left: 55px;
    padding-right: 75px;
  }
  .content_info {
    font-size:24px;
    color: #333333;
    font-family:MicrosoftYaHei;
  }
  .content_info-span-m {
    font-size:36px;
    color: #FF4D55;
  }
  .content_info-span-m i {
    font-size: 14px;
  }
  .content_info-span {
    font-size: 18px;
    float: right;
  }
</style>
