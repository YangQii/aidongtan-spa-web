<template>
  <div class="index-content">
    <div class="title">
      <ul class="fl">
        <router-link :to="{name: 'check'}">
          <li class="trans" :class="{ 'active': $route.name === 'check' }">审核</li>
        </router-link>
        <router-link :to="{name: 'yimember'}">
          <li class="trans" :class="{ 'active': $route.name === 'yimember' }">一卡通会员</li>
        </router-link>
        <router-link :to="{name: 'tumember'}">
          <li class="trans" :class="{ 'active': $route.name === 'tumember' }">团购会员</li>
        </router-link>
        <router-link :to="{name: 'noalive'}">
          <li class="trans" :class="{ 'active': $route.name === 'noalive' }">未激活卡</li>
        </router-link>
      </ul>
      <div class="title_content">
        <span>会所可容纳人数：1.8万人</span>
        <span>当前会所人数：123123ren</span>
      </div>
    </div>
    <router-view></router-view>
    <!--todo-->
    <!--<Tabs value="name1">-->
      <!--<TabPane label="标签一" name="name1">标签一的内容</TabPane>-->
      <!--<TabPane label="标签二" name="name2">标签二的内容</TabPane>-->
      <!--<TabPane label="标签三" name="name3">标签三的内容</TabPane>-->
    <!--</Tabs>-->
  </div>
</template>

<script>
  import subRouter from '../components/SubRouter.vue';

  export default {
    name: "page-index",
    data() {
      return {
        ovnav: {
          curindex: 0,
          data: ['审核', '一卡通会员', '团购会员', '未激活卡'],
        },
      }
    },
    components: {
      subRouter
    },
    methods: {
      selnav(name, index) {

      }
    }
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
  .title_content {
    float: right;
    line-height: 49px;
    font-size: 14px;
  }
</style>
