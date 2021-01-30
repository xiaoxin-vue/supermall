<template>
  <div class="tab-content">
    <div class="item" v-for="(item, index) in subcategories.data.list" :key="index">
        <a href="javascript:;">
          <img class="item-image" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabContentCategory',
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.tab-content {
  display: flex;
  /* 开启弹性盒子自动换行 */
  flex-wrap: wrap;
  /* 盒子中的项目均等分 */
  justify-content: space-around;

  padding: 2px 10px;
}

.item {
  padding: 5px;
}

.item-image {
  width: 90px;
}

.item-text {
  text-align: center;
  font-size: 12px;
}
</style>