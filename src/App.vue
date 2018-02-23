<template>
  <div id="app">
    <main-top-nav v-show="handlerShowNav"></main-top-nav>

    <div class="mainWrap">
      <main-left-nav v-show="handlerShowNav"></main-left-nav>
      <div id="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import mainTopNav from './components/MainHeaderNav.vue';
  import mainLeftNav from './components/MenuLeftNav.vue';

  const navNotShowList = [
    'login',
    'signup',
  ];

  export default {
    name: 'App',
    components: {
      mainTopNav,
      mainLeftNav,
    },
    computed: {
      handlerShowNav() {
        const navName = this.$route.name;
        return navNotShowList.indexOf(navName) > -1;
      }
    },
};
</script>

<style>
  @import "assets/styles/reset.css";
  @import "assets/styles/common.css";
</style>
