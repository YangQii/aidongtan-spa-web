<template>
  <div>
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
  export default {
    name: "page-index-info"
  }
</script>

<style scoped>
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
