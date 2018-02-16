<template>
  <div class="index-content">
    <div class="title">
      <ul class="fl">
        <li class="trans"
            v-for="(tab, index) in ovnav.data"
            :class="{'active':ovnav.curindex === index}"
            @click="selnav(tab, index)"
            :key="index">{{tab}}
        </li>
      </ul>
    </div>
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
  }
</script>

<style scoped>
  .index-content {
    margin-top: 100px;
    margin-left: 150px;
  }
  .title {
    padding: 0 20px 0 10px;
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
    margin-right: 10px;
    color: #697179;
    cursor: pointer;
    position: relative;
  }
  .title ul li:hover,  .title ul li:active {
    border-color: #679fef;
    color: #679fef;
  }
</style>
