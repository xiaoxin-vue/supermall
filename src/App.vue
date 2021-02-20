<template>
  <div id="app">
    <!-- 保存页面(移动或者滚动)位置，Detail页面不需要保存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
