<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="" @load="imgload">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  mounted() {
  },
  methods: {
    imgload() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad');
        this.isLoad = true;
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>