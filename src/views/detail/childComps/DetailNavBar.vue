<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="titles">
      <div v-for="(item, index) in titles" 
           class="title-item" 
           :class="{active: index === currentIndex}"
           @click="titleClick(index)"
           >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      isActive: false,
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
      // this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.titles {
  display: flex;
}

.titles .title-item {
  flex: 1;
}

.active {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}

.back img {
  position: relative;
  top: 6px;
  left: 18px;
}
</style>