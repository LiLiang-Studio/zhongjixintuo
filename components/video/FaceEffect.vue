<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" src="~~/assets/video/banner4.png" alt="banner4">
    <div :class="`${cls}_box`">
      <h2 :class="`${cls}_title`">{{ $t.value.videoPage.faceEffect.title }}</h2>
      <p :class="`${cls}_desc`" v-html="$t.value.videoPage.faceEffect.desc"></p>
    </div>
  </div>
</template>

<script setup>
const cls = 'video-face-effect'
</script>

<style lang="less">
.video-face-effect {
  position: relative;
  &_bg {
    display: block;
    width: 100%;
  }
  &_box {
    position: absolute;
    top: 50%;
    left: 12.2%;
    right: 50%;
    transform: translateY(-50%);
  }
  &_title {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
  &_desc {
    color: #323232;
    line-height: 1.6;
  }
}
</style>
