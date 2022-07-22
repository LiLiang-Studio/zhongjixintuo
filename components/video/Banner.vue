<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" src="~~/assets/video/banner1.png" alt="banner1">
    <h2 :class="`${cls}_title`" v-html="$t.value.videoPage.bannerTitle"></h2>
  </div>
</template>

<script setup>
const cls = 'video-banner'
</script>

<style lang="less">
.video-banner {
  position: relative;
  &_bg {
    display: block;
    width: 100%;
  }
  &_title {
    position: absolute;
    top: 35.8%;
    left: 25.5%;
    font-size: 2rem;
    font-weight: normal;
    color: #fff;
    line-height: 1.3;
  }
}
</style>
