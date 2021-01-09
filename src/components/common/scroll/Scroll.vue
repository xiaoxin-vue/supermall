<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'

// 使用Pullup插件
// BScroll.use(Pullup)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // probeType: 3,
      // click: true,
      // pullUpLoad: true
    })
  }
}
</script>

<style>

</style>