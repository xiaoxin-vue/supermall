<template>
  <div class="tab-goods-pants">
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(1).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(2).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(3).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(4).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(5).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(6).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(7).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(8).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(9).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/pants/(10).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGoodsItemPants',
}
</script>

<style scoped>
.tab-goods-pants {
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