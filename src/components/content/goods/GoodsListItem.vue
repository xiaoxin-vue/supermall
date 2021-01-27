<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="imageData" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    imageData() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      // 发射自定义事件到事件总线上
      this.$bus.$emit('itemImageLoad');
      /*
      * detail里面加载图片完成后发射自定义事件到事件总线上，detail里面的刷新图片数据refresh()执行，
      * 为了防止同时使home里面的refresh()执行：
      * 采用第一种方法：每次不活跃或者销毁时关闭此事件--this.$bus.$off('itemImageLoad', itemImgListener)
      * 采用第二种方法：根据$route.path路径的不同而发射不同的自定义事件
      if(this.$route.path.indexOf('home') === 1) {
        console.log('home');
        // 发射自定义事件到事件总线上
        this.$bus.$emit('homeItemImageLoad');  
      } else if(this.$route.path.indexOf('detail') === 1) {
        console.log('detail');
        // 发射自定义事件到事件总线上
        this.$bus.$emit('detailItemImageLoad'); 
      }
      */
    },
    itemClick() {
      this.$router.push('./detail/' + this.goodsItem.iid);
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}

.goods-info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  position: absolute;
  left: -14px;
  top: -1px;
  content: '';
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>