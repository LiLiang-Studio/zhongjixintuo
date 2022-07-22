<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" src="~~/assets/video/banner5.png" alt="banner5">
    <div :class="`${cls}_box`">
      <h2 :class="`${cls}_title`">{{ obj.title }}</h2>
      <p :class="`${cls}_desc`" v-html="obj.desc"></p>
    </div>
  </div>
</template>

<script setup>
const cls = 'video-cartoon-driver'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.cartoonDriver)
</script>

<style lang="less">
.video-cartoon-driver {
  position: relative;
  &_bg {
    display: block;
    width: 100%;
  }
  &_box {
    position: absolute;
    top: 50%;
    right: 11%;
    left: 61%;
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
