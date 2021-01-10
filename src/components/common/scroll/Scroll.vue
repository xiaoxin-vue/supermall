<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

// 使用Pullup插件
BScroll.use(Pullup)

export default {
  name: "Scroll",
  props: {
    probeTypeNum: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    // 1.创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeTypeNum,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
 
    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      // 通过发射自定义事件，将position传递给父组件
      this.$emit('scroll', position);
    });

    // 3.监听上拉事件
    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');

      this.$emit('pullingUp');

      // setTimeout(() => {
      //   this.scroll.finishPullUp();
      // }, 2000);
    });

    // 重新计算 BetterScroll
    // this.scroll.refresh();
    
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(0, 0, time);
    }
  }
}
</script>

<style>

</style>