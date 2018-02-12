<template>
  <div class="left-menu">
    <ul>
      <li class="trans"
          v-for="item in navList"
          :class="{'active': $route.path.split('/')[1] === item.name}"
          @click="$router.push(item.target)">
        <a href="javascript:void(0);">
          {{item.title}}
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
