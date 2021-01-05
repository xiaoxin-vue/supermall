<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: {
				type: String,
        required: true
      },
    activeColor: String
  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive(){
      // 获取处于活跃路由的路径
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor || 'red'} : {};
    }
  },
  methods: {
    itemclick(){
      this.$router.push(this.link);
    }
  },
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>