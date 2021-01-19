<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" @swiperImageLoad="swiperImageLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @goodsImageLoad="goodsImageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommendInfo"/>
    </scroll>
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

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, getRecommend, Goods, Shop, GoodsParams} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'

export default {
  name: 'Detail',
  mixins: [itemListenerMixin],
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
    GoodsList
  },
  created() {
    this.iid = this.$route.params.iid; 
    // 一、根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      console.log(res);
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
    swiperImageLoad() {
      this.$refs.scroll.refresh();
    },
    goodsImageLoad() {
      this.$refs.scroll.refresh();
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
  bottom: 0;
  overflow: hidden;
  /* height: calc(100% - 44px); */
}
</style>