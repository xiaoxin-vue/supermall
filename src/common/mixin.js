import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'

// 使用混入避免编写重复代码
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      // 也就是为了防止this.$refs.scroll.refresh()函数频繁执行
      newRefresh();
    }
    // 1.使用事件总线$bus接收自定义事件并且监听item中图片加载完成，时刻刷新图片加载
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
}

// 回到顶部的混入
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000;
    }
  }
}