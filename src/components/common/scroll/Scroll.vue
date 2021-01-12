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
      // 当类型时对象和数组时必须把default写成一个函数并且返回
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
    if(this.probeTypeNum === 2 || this.probeTypeNum === 3) {
      this.scroll.on('scroll', (position) => {
      // console.log(position);
      // 通过发射自定义事件，将position传递给父组件
      this.$emit('scroll', position);
      });
    }

    // 3.监听上拉事件
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');

      this.$emit('pullingUp');

      // setTimeout(() => {
      //   this.scroll.finishPullUp();
      // }, 2000);
      });
    }

    // 重新计算 BetterScroll
    // this.scroll.refresh();
    
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    geScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>

<style>

</style>