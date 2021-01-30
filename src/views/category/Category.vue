<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-content">
      <tab-menu :categories="categories" @itemClick="itemClick"/>
      <div class="menu-content">
        <scroll ref="menuScroll" class="content-scroll">
          <tab-content-category :subcategories="subcategories" v-show="!menuTitle"/>
          <tab-content-category :subcategories="subcategories" v-if="'正在流行' === menuTitle"/>
          <tab-goods-item-jackets v-else-if="'上衣' === menuTitle"/>
          <tab-goods-item-pants v-else-if="'裤子' === menuTitle"/>
          <tab-goods-item-skirts v-else-if="'裙子' === menuTitle"/>
          <tab-goods-item-underclothes v-else-if="'内衣' === menuTitle"/>
          <tab-goods-item-shoes v-else-if="'女鞋' === menuTitle"/>
          <tab-goods-item-bags v-else-if="'包包' === menuTitle"/>
          <tab-goods-item-sports v-else-if="'运动' === menuTitle"/>
          <tab-goods-item-ornaments v-else-if="'配饰' === menuTitle"/>
          <tab-goods-item-makeups v-else-if="'美妆' === menuTitle"/>
          <tab-goods-item-personal-care v-else-if="'个护' === menuTitle"/>
          <tab-goods-item-residences v-else-if="'家居' === menuTitle"/>
          <tab-goods-item-store v-else-if="'百货' === menuTitle"/>
          <tab-goods-item-baby v-else-if="'母婴' === menuTitle"/>
          <tab-goods-item-snacks v-else="'食品' === menuTitle"/>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'
import TabGoodsItemJackets from './childComps/tabGoods/TabGoodsItemJackets'
import TabGoodsItemPants from './childComps/tabGoods/TabGoodsItemPants'
import TabGoodsItemSkirts from './childComps/tabGoods/TabGoodsItemSkirts'
import TabGoodsItemUnderclothes from './childComps/tabGoods/TabGoodsItemUnderclothes'
import TabGoodsItemShoes from './childComps/tabGoods/TabGoodsItemShoes'
import TabGoodsItemBags from './childComps/tabGoods/TabGoodsItemBags'
import TabGoodsItemSports from './childComps/tabGoods/TabGoodsItemSports'
import TabGoodsItemOrnaments from './childComps/tabGoods/TabGoodsItemOrnaments'
import TabGoodsItemMakeups from './childComps/tabGoods/TabGoodsItemMakeups'
import TabGoodsItemPersonalCare from './childComps/tabGoods/TabGoodsItemPersonalCare'
import TabGoodsItemResidences from './childComps/tabGoods/TabGoodsItemResidences'
import TabGoodsItemStore from './childComps/tabGoods/TabGoodsItemStore'
import TabGoodsItemBaby from './childComps/tabGoods/TabGoodsItemBaby'
import TabGoodsItemSnacks from './childComps/tabGoods/TabGoodsItemSnacks'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'

export default {
  name: 'Category',
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      subcategories: {},
      menuTitle: ''
    }
  },
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
    TabGoodsItemJackets,
    Scroll,
    TabGoodsItemPants,
    TabGoodsItemSkirts,
    TabGoodsItemUnderclothes,
    TabGoodsItemShoes,
    TabGoodsItemBags,
    TabGoodsItemSports,
    TabGoodsItemOrnaments,
    TabGoodsItemMakeups,
    TabGoodsItemPersonalCare,
    TabGoodsItemResidences,
    TabGoodsItemStore,
    TabGoodsItemBaby,
    TabGoodsItemSnacks
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
  },
  updated() {
    this.$refs.menuScroll.refresh();
  },
  muonted() {
    this.$refs.menuScroll.refresh();
  },
  computed: {
    // showSubcategory() {
    //   if (this.currentIndex === -1) return {}
    //   return this.categoryData[this.currentIndex].subcategories
    // }
  },
  methods: {
    itemClick(title) {
      this.menuTitle = title;
      console.log(this.menuTitle);
    },
    /*
    获取数据相关的方法
    */
    _getCategory() {
      getCategory().then(res => {
        console.log(res);
        // 1.获取分类数据
        this.categories = res.data.data.category.list;
        this.categories.splice(6, 1);
        // 2.初始化每个类别的子数据
        for(let i = 0; i< this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }

        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      // 1.获取请求的maitkey
      const maitKey = this.categories[index].maitKey;
      // 2.发送请求
      getSubcategory(maitKey).then(res => {
        // 3.将获取的数据保存到categoryData的subcategories属性中
        this.categoryData[index].subcategories = res.data;
        this.categoryData = {...this.categoryData};

        this.subcategories = this.categoryData[this.currentIndex].subcategories;

        // 4.请求miniWallkey里面的数据，保存到categoryData的categoryDetail属性
        this._getCategoryDetail('pop')
        this._getCategoryDetail('new')
        this._getCategoryDetail('sell')
      })
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求，传入miniWallkey
      getCategoryDetail(miniWallkey).then(res => {
        // 3.将获取的数据保存到categoryData的categoryDetail属性中
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = {...this.categoryData}
      })
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}

.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.category-content {
  display: flex;
  height: 576px;
}

.menu-content {
  height: 100%;
  flex: 1;
}
.content-scroll {
  height: 100%;
  overflow: hidden;
}
</style>