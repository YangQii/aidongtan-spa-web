<template>
  <div class="left-menu">
    <ul>
      <li class="trans"
          v-for="item in navList"
          :class="{'active': $route.path.split('/')[1] === item.name}"
          @click="$router.push(item.target)">
        <a href="javascript:void(0);">
          <i style="margin-left: 35px">{{item.title}}</i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import navListData from '../config/menu-left-nav.js';

  export default {
    data() {
      return {
        navList: navListData,
      };
    },
  };
</script>
<style>
  .left-menu {
    position: fixed;
    top: 90px;
    left: 0;
    bottom: 0;
    background: #1A1B1E;
    width: 120px;
    z-index: 5;
  }
  .left-menu ul li a {
    color: #a8adbb;
    height: 62px;
    line-height: 62px;
    display: block;
    border-left: 4px solid transparent;
  }
  .left-menu ul li.active a {
    border-left-color: #D15151;
    cursor: pointer;
    color: #fff;
    background: #0A0A0D;
  }
</style>
