import {debounce} from './utils'
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