<template>
<div v-if="Object.keys(goods).length !== 0" class="base-info">
  <div class="info-title">{{goods.title}}</div>
  <div class="info-price">
    <span class="n-price">{{goods.newPrice}}</span>
    <span class="o-price">{{goods.oldPrice}}</span>
    <span class="discount">{{goods.discount}}</span>
  </div>
  <div class="info-other">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services[goods.services.length-1].name}}</span>
  </div>
  <div class="info-service">
    <!-- v-for遍历数字 index从1开始  -->
    <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
      <img src="~assets/img/common/tick.svg" alt="">
      <span>{{goods.services[index-1].name}}</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  font-size: 20px;
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  position: relative;
  top: -8px;
  padding: 2px 5px;
  margin-left: 5px;
  background-color: var(--color-high-text);
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
}

.info-other {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  position: relative;
  top: 4px;
  width: 19px;
  height: 19px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>