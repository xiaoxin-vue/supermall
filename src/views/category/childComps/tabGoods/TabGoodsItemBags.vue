<template>
  <div class="tab-goods-bags">
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(1).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(2).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(3).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(4).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(5).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(6).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(7).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(8).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(9).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
    <div class="item">
      <a href="javascript:;">
        <img class="item-image" src="~assets/img/category/bags/(10).jpeg" alt="">
        <div class="item-text"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGoodsItemBags',
}
</script>

<style scoped>
.tab-goods-bags {
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