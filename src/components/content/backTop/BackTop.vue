<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
    <h5>返回顶部</h5>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 50px;
}

.back-top img {
  width: 43px;
  height: 43px;
}

.back-top h5 {
  color: rgba(255, 48, 48, 0.6);
}
</style>