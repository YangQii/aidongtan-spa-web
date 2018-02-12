<template>
  <div class="top">
    <div class="top_index"></div>
    <span class="top_info">浩沙健身-浩沙健身</span>
    <span class="top_time">2017-98-90 12:23</span>
    <span class="top_logo"></span>
    <span class="top_user">hello,zhangxinag</span>
    <span class="top_setting"></span>
    <span class="top_sginout"></span>
  </div>
</template>

<script>
  export default {
    name: "main-header-nav"
  }
</script>

<style>
  .top {
    height: 90px;
    width: 100%;
    background: #FFFFFF;
  }
  .top_index {
    width: 120px;
    height: 100%;
    background: #0A0A0D;
  }
  .top_info {
    color: #333333;
    font-size: 18px;
    position: absolute;
    top: 30px;
    left: 149px;
  }
  .top_time {
    position: absolute;
    top: 34px;
    left: 377px;
    font-size: 14px;
    color: #999999;
  }
  .top_logo {
    position: absolute;
    right: 248px;
    top: 20px;
    width: 50px;
    height: 50px;
    background: #679fef;
  }
  .top_user {
    position: absolute;
    right: 139px;
    top: 34px;
    font-size: 14px;
    color: #999999;
  }
  .top_setting {
    position: absolute;
    right: 83px;
    width: 26px;
    height: 26px;
    top: 35px;
    background: #679fef;
  }
  .top_sginout {
    position: absolute;
    right: 31px;
    width: 26px;
    height: 26px;
    top: 35px;
    background: #679fef;
  }
</style>
