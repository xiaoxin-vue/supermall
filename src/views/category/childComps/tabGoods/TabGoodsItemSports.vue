<template>
  <div class="tab-goods-sports">
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(1).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(2).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(3).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(4).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(5).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(6).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(7).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(8).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(9).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/sports/(10).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGoodsItemSports',
}
</script>

<style scoped>
.tab-goods-sports {
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