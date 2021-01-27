<template>
  <div class="cart">
    <!-- 1.导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>

    <!-- 2.商品列表 -->
    <cart-list/>

    <!-- 3.底部汇总 -->
    <cart-button-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartButtonBar from './childComps/CartButtonBar'

import {mapGetters} from 'vuex'


export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartButtonBar
  },
  computed: {
    ...mapGetters([
      'cartListLength'
    ])
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>