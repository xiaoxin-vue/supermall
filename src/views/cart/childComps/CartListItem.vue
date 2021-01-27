<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :is-checked="itemInfo.checked" @click.native="changeChecked"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">
          <span class="icon btnSub" 
                @touchstart="changeActive" 
                @touchend="changeActive2" 
                :class="{active: isActive}"
                @click="btnSub">-</span>
          <span class="icon btnCount">x{{itemInfo.count}}</span>
          <span class="icon btnAdd"
                @touchstart="changeActive3" 
                @touchend="changeActive4" 
                :class="{active: isActive2}"
                @click="btnAdd">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  data() {
    return {
      isActive: false,
      isActive2: false
    }
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    changeChecked() {
      this.$store.commit('changeChecked', this.itemInfo.iid)
      
    },
    changeActive() {
      this.isActive = true;
    },
    changeActive2() {
      this.isActive = false;
    },
    changeActive3() {
      this.isActive2 = true;
    },
    changeActive4() {
      this.isActive2 = false;
    },
    btnAdd() {
      this.$store.commit('increase', this.itemInfo.iid)
    },
    btnSub() {
      this.$store.commit('decrease', this.itemInfo.iid)
    }
  },
}
</script>

<style scoped>
.shop-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  display: flex;
  width: 18px;
  justify-content: center;
  align-items: center;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-info {
  position: relative;
  overflow: hidden;
  padding: 5px 10px;
  font-size: 17px;
  color: #333;
}

.item-info .item-desc {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  margin-top: 10px;
}

.item-bottom .item-price {
  color: orangered;
  position: relative;
  top: 3px;
}

.item-bottom .item-count {
  font-size: 14px;
}

.item-count .icon {
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 4px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: rgb(245, 247, 250);
  color: rgb(149, 152, 154);
}

.item-count .btnSub {
  border-right: 0;
  border-radius: 5px 0 0 5px;
}

.item-count .btnAdd {
  border-left: 0;
  border-radius: 0 5px 5px 0;
}

.item-count .btnCount {
  background-color: #fff;
  width: 40px;
  color: #333;
}

.item-count .active {
  color: #fff;
  background-color: rgba(255, 129, 152, 0.7);
}

.item-count .active2 {
  color: #fff;
  background-color: rgba(255, 129, 152, 0.7);
}
</style>