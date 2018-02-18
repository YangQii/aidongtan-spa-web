<template>
  <div class="index-content">
    <div class="title">
      <ul class="fl">
        <router-link :to="{name: 'activitymember'}">
          <li class="trans" :class="{ 'active': $route.name === 'activitymember' }">团购信息</li>
        </router-link>
        <router-link :to="{name: 'activityyi'}">
          <li class="trans" :class="{ 'active': $route.name === 'activityyi' }">一卡通管理</li>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "page-activity"
  }
</script>

<style scoped>
  .index-content {
    margin-top: 100px;
    margin-left: 150px;
    margin-right: 31px;
  }
  .title {
    padding: 0 20px 0 30px;
    height: 49px;
    border-radius: 4px 4px 0 0;
  }
  .fl {
    float: left;
  }
  .title ul li {
    display: inline-block;
    padding: 0 12px;
    line-height: 46px;
    border-bottom: 3px solid transparent;
    margin-right: 30px;
    color: #697179;
    cursor: pointer;
    position: relative;
    font-size: 18px;
  }
  .title ul li:hover,  .title ul li.active {
    border-color: #FE424A;
    color: #FE424A;
  }
</style>
