<template>
  <div class="button-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="changeSelect">
        <i class="icon select" :class="{select2: isSelect}"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" 
           @click="addToCart"
           :class="{active: isActive}"
           @touchstart="changeActive1" 
           @touchend="changeActive2"
           >加入购物车</div>
      <div class="buy"
           :class="{active1: isActive1}"
           @touchstart="changeActive3" 
           @touchend="changeActive4">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailButtonBar',
  data() {
    return {
      isActive: false,
      isActive1: false,
      isSelect: false
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart');
    },
    changeActive1() {
      this.isActive = true;
    },
    changeActive2() {
      this.isActive = false;
    },
    changeActive3() {
      this.isActive1 = true;
    },
    changeActive4() {
      this.isActive1 = false;
    },
    changeSelect() {
      this.isSelect = !this.isSelect;
    }
  }
}
</script>

<style scoped>
.button-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #fff;
  text-align: center;
}

.bar-item {
  display: flex;
  flex: 1;
}

.bar-item>div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 2px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}

.bar-left .select2 {
  background-position: 0 -26px;
}

.bar-left .service {
  background-position:0 -53px;
}

.bar-left .shop {
  background-position:0 -98px;
}

.bar-right {
  padding: 2px 0;
  font-size: 15px;
  line-height: 49px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
  border-radius: 24px 0 0 24px;
}

.bar-right .buy {
  background-color: #f69;
  color: #fff;
  border-radius: 0 24px 24px 0;
}

.bar-right .active {
  background-color: rgba(255, 232, 23, 0.4);
}

.bar-right .active1 {
  background-color: rgba(255, 0, 0, 0.4);
}
</style>