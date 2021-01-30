<template>
  <scroll class="tab-menu" ref="tabMenuScroll">
    <div class="menu-list">
      <div class="menu-list-item"
           v-for="(item, index) in categories"
           :key="index"
           @click="itemClick(item.title)"
           :class="{active: currentTitle === item.title}">{{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'TabMenu',
  data() {
    return {
      currentTitle: '正在流行'
    }
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { 
    Scroll 
  },
  updated() {
    this.$refs.tabMenuScroll.refresh();
  },
  methods: {
    itemClick(title) {
      this.currentTitle = title;
      this.$emit('itemClick', title)
    }
  }
}
</script>

<style scoped>
.tab-menu {
  background-color: #f6f6f6;
  width: 100px; 
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  /* position: absolute;
  top: 44px;
  left: 0;
  bottom: 49px; */
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  text-align: center;
}

.active {
  background-color: rgb(255, 132, 0);
  color: #fff;
}
</style>