<template>
  <div class="cart-list">
    <scroll ref="scroll" class="content">
      <cart-list-item v-for="(item, index) in cartList" 
                      :key="index" 
                      :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.cart-list {
  position: relative;
  height: calc(100% - 135px);
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

</style>