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
      <div class="title_content">
        <span>会所可容纳人数：1.8万人</span>
        <span>当前会所人数：123123ren</span>
      </div>
    </div>
    <!--todo-->
    <!--<Tabs value="name1">-->
      <!--<TabPane label="标签一" name="name1">标签一的内容</TabPane>-->
      <!--<TabPane label="标签二" name="name2">标签二的内容</TabPane>-->
      <!--<TabPane label="标签三" name="name3">标签三的内容</TabPane>-->
    <!--</Tabs>-->
    <div class="index-content_info">
      <div style="padding-bottom: 50px;border-bottom: 1px solid #c7ccd3">
        <div class="main-title">
          <div style="width:182px;height: 44px;border-radius: 22px;background:rgba(255,77,85,1);line-height: 44px;display: inline-block">
            <i style="margin-left: 50px">一卡通审核</i>
          </div>
          <div style="float: right">
            <span>团购卡审核</span>
            <span>今日已审核：330</span>
            <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
          </div>
        </div>
      </div>
      <div class="index-content_info_card">
        <ul>
          <li>
            <i style="float: left;margin-right: 18px">1</i>
            <div style="width: 376px;height: 120px;background: #FBF9FE;display: inline-block"></div>
          </li>
          <li>
            <i style="float: left;margin-right: 18px">1</i>
            <div style="width: 376px;height: 120px;background: #FBF9FE;display: inline-block"></div>
          </li>
          <li>
            <i style="float: left;margin-right: 18px">1</i>
            <div style="width: 376px;height: 120px;background: #FBF9FE;display: inline-block"></div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <Page :total="40" size="small"></Page>
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
  .title ul li:hover,  .title ul li:active {
    border-color: #FE424A;
    color: #FE424A;
  }
  .title_content {
    float: right;
    line-height: 49px;
    font-size: 14px;
  }
  .index-content_info {
    padding: 53px 57px 0 55px;
    background: #FFFFFF;
  }
  .main-title {
    height: 44px;
    line-height: 44px;
  }
  .index-content_info_card {
    margin-bottom: 100px;
  }
  .index-content_info_card ul li {
    margin-top: 20px;
    margin-right: 120px;
    float: left;
  }
</style>
