<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="navBar"/>
    <scroll class="content" ref="scroll" :probe-type-num="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" @swiperImageLoad="swiperImageLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @goodsImageLoad="goodsImageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommendInfo"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-button-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailButtonBar from "./childComps/DetailButtonBar"

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, getRecommend, Goods, Shop, GoodsParams} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin'

// 从vuex中导入actions方法
import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTopYs: [],
      positionY: 0,
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailButtonBar
  },
  created() {
    this.iid = this.$route.params.iid; 
    // 一、根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      const data = res.data.result;
      // 1.获取顶部图片数据
      this.topImages = res.data.result.itemInfo.topImages;
      // 限制四张图片轮播
      this.topImages.splice(4, this.topImages.length - 4);
      // console.log(this.topImages);

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);

      // 4.获取商品详细信息
      this.detailInfo = data.detailInfo;

      // 5.获取参数信息
      this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);

      // 6.获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    })
    // 二、获取详情页推荐数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.data.list;
    })
  },
  destroyed() {
    // 销毁时关闭事件总线上的itemImageLoad事件上的itemImgListener
    this.$bus.$off('itemImageLoad', this.itemImgListener);
  },
  methods: {
    ...mapActions([
      'addCart'
    ]),
    swiperImageLoad() {
      this.$refs.scroll.refresh();
    },
    goodsImageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      this.positionY = -(position.y);
      // if(this.themeTopYs[0] <= this.positionY && this.positionY < this.themeTopYs[1]) {
      //   this.currentIndex = 0;
      // } else if(this.themeTopYs[1] <= this.positionY && this.positionY < this.themeTopYs[2]) {
      //   this.currentIndex = 1;
      // } else if(this.themeTopYs[2] <= this.positionY && this.positionY < this.themeTopYs[3]) {
      //   this.currentIndex = 2;
      // } else if(this.positionY >= this.themeTopYs[3]) {
      //   this.currentIndex = 3;
      // }
      // this.$refs.navBar.currentIndex = this.currentIndex;

      let length = this.themeTopYs.length;
      // for(let i = 0; i < length; i++) {
      //   if(this.currentIndex !== i && ((i < length - 1 && this.positionY >= this.themeTopYs[i] && this.positionY < this.themeTopYs[i+1]) || (i === length -1 && this.positionY > this.themeTopYs[i]))) {
      //     this.currentIndex = i;
      //     this.$refs.navBar.currentIndex = this.currentIndex;
      //   }
      // }

      for(let i = 0; i< length; i++) {
        if(this.currentIndex !== i && (this.positionY >= this.themeTopYs[i] && this.positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i;
          this.$refs.navBar.currentIndex = this.currentIndex;
        }
      }
      // 监听回到顶部的点击
      this.listenShowBackTop(position);
    },
    addToCart() {
      // 1.获取购物车需要展示的信息
      let product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车,同时获取Promise返回的的信息
      this.addCart(product).then(res =>{
        // 使用toast组件
        this.$toast.show(res);
      })

      /*
      this.$store.dispatch('addCart', product).then(res => {
        console.log(res);
      })
      */
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  /* height: calc(100% - 44px); */
}
</style>