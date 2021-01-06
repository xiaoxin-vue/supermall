<template>
  <swiper>
      <swiper-item v-for="(val, key) in banners" :key="key">
        <a :href="val.link">
          <img :src="val.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>