<template>
  <div id="app">
    <main-top-nav></main-top-nav>

    <div class="mainWrap">
      <main-left-nav></main-left-nav>
      <div id="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import mainTopNav from './components/MainHeaderNav.vue';
  import mainLeftNav from './components/MenuLeftNav.vue';

  export default {
    name: 'App',
    components: {
      mainTopNav,
      mainLeftNav,
    },
};
</script>

<style>
  @import "assets/styles/reset.css";
  @import "assets/styles/common.css";


</style>
