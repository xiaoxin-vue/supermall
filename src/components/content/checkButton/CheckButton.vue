<template>
  <div class="check-button" :class="{selectorActive: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="" >
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return true
      }
    }
  }
}
</script>

<style scoped>
.check-button {
  width: 18px;
  height: 18px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.check-button img {
  width: 18px;
  height: 18px;
}

.selectorActive {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>