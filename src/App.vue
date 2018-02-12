<template>
  <div id="app">
    <div class="mainWrap">
      <main-left-nav></main-left-nav>
      <div id="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import mainLeftNav from './components/MenuLeftNav.vue';

  export default {
    name: 'App',
    components: {
      mainLeftNav,
    },
};
</script>

<style>

</style>
