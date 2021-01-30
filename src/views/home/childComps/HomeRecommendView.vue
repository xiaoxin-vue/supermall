<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a href="#">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  text-align: center;
  font-size: 12px;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  widows: 70px;
  height: 70px;
}
</style>