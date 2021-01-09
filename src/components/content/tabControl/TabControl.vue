<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" class="tab-control-item">
      <span :class="{active: index === currentIndex}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 给父组件发射自定义事件，用于传递index
      this.$emit('tabClick', index);
    }
  },
}
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>