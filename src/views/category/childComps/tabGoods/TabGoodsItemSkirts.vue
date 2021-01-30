<template>
  <div class="tab-goods-skirts">
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(1).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(2).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(3).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(4).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(5).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(6).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(7).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(8).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(9).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/skirts/(10).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGoodsItemSkirts',
}
</script>

<style scoped>
.tab-goods-skirts {
  display: flex;
  /* 开启弹性盒子自动换行 */
  flex-wrap: wrap;
  /* 盒子中的项目均等分 */
  justify-content: space-around;

  padding: 10px;
}

.item {
  padding: 15px 2px;
}

.item-image {
  width: 90px;
}

.item-text {
  text-align: center;
  font-size: 12px;
}
</style>