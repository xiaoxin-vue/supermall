<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration=1000) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.message = '';
        this.isShow = false;
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -80px);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 8px;
  z-index: 999;
}
</style>