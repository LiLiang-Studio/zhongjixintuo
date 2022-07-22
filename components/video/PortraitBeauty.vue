<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" src="~~/assets/video/banner2.png" alt="banner2">
    <div :class="`${cls}_box`">
      <h2 :class="`${cls}_title`">{{ $t.value.videoPage.portraitBeauty.title }}</h2>
      <h3 :class="`${cls}_subtitle`">{{ $t.value.videoPage.portraitBeauty.subTitle }}</h3>
      <p :class="`${cls}_desc`" v-html="$t.value.videoPage.portraitBeauty.desc"></p>
    </div>
  </div>
</template>

<script setup>
const cls = 'video-Portrait-beauty'
</script>

<style lang="less">
.video-Portrait-beauty {
  position: relative;
  &_bg {
    display: block;
    width: 100%;
  }
  &_box {
    position: absolute;
    top: 50%;
    left: 11.7%;
    width: 31.6%;
    min-width: 360px;
    transform: translateY(-50%);
  }
  &_title {
    font-size: 3.5rem;
    font-weight: normal;
  }
  &_subtitle {
    font-size: 2em;
    color: #565656;
    font-weight: normal;
    margin: .5rem 0 2rem;
  }
  &_desc {
    color: #323232;
    line-height: 1.6;
  }
}
</style>
