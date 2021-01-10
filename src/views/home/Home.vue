<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <scroll class="content" 
          ref="scroll" 
          :probe-type-num="3" 
          @scroll="getPosition" 
          :pull-up-load="true"
          @pullingUp="loadMore">
    <home-swiper :banners="banners"/> 
    <home-recommend-view :recommends="recommends"/>
    <home-feature-view/>
    <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list :goods="goods[currentData].list"/>
  </scroll>
  <back-top @click.native="backClick" v-show="isShowBackTop"/>
</div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeFeatureView from './childComps/HomeFeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []}, 
        'sell': {page: 0, list: []}  
      },
      currentData: 'pop',
      isShowBackTop: false
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
      
    // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    // 事件监听相关的方法
    // 1.通过子组件TabControl发射过来的自定义事件，在父组件Home定义这个事件的方法tabClick()
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentData = 'pop';
          break;
        case 1:
          this.currentData = 'new';
          break;
        case 2:
          this.currentData = 'sell';
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    getPosition(position) {
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000;
    },
    loadMore() {
      // this.$refs.scroll是scrol组件，里面的data（scroll）包含bs的全部属性
      // console.log(this.$refs.scroll.scroll);
      this.getHomeGoods(this.currentData);
      
      this.$refs.scroll.scroll.refresh();
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        // 结束上拉加载行为，使其再次刷新数据
        this.$refs.scroll.scroll.finishPullUp();
      })  
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  /* 当页面滚动到一个位置时会自动将元素的位置设置为固定(position: fixed;)，回退到固定位置自动解除 */
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  /* bug?为什么使用betterscroll不能滚动 */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  /* height: calc(100% - 93px);*/
  /* margin-top: 44px;  */
}
</style>