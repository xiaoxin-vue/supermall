<template>
  <div class="botton-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkedAll"/>
      <span class="select-all">全选</span>
    </div>
    <div class="total-price">合计:￥{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算({{checkedCartListLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'

import {mapGetters} from 'vuex'

export default {
  name: 'CartButtonBar',
  components: {
    CheckButton 
  },
  computed: {
    ...mapGetters([
      'checkedCartListLength',
      'totalPrice',
      'isSelectAll',
      'isNotSelectAll'
    ])
  },
  methods: {
    checkedAll() {
      this.$store.commit('checkedAll', this.isSelectAll);
    },
    calcClick() {
      if(this.isNotSelectAll) {
        // 使用toast组件
        this.$toast.show('请选择购买的商品');
      }
    }
  },
}
</script>

<style scoped>
.botton-bar {
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  box-shadow: 0 -2px 3px rgba(100, 100, 100, 0.2);
  background-color: pink;
  font-size: 14px;
  color: #888; 
}

.check-content {
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
}

.select-all {
  margin-left: 5px;
}

.total-price {
  flex: 1;
  margin-left: 20px;
  font-size: 17px;
  color: #666;
  line-height: 40px;
}

.calculate {
  width: 100px;
  height: 40px;
  background-color: orangered;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
</style>