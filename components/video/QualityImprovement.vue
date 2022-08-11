<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <div class="titlebox">
        <h2 class="title">{{ title }}</h2>
        <h3 class="subtitle">{{ subTitle }}</h3>
      </div>
      <div class="video">
        <video preload="metadata" controls src="/videos/blur_to_clear.mp4"></video>
      </div>
      <p class="desc" v-html="desc"></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
  desc: String
})
const cls = 'video-quality-improvement'
</script>

<style lang="less">
.video-quality-improvement {
  padding: 3rem 1rem;
  text-align: center;
  background: #f8f8f8;
  &_inner {
    max-width: 1200px;
    margin: auto;
  }
  .titlebox {
    margin-bottom: 3rem;
  }
  .title {
    font-size: 2.4rem;
    text-transform: capitalize;
    margin-bottom: .3rem;
  }
  .subtitle {
    font-size: 1.8rem;
    font-weight: normal;
    color: #565656;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
  }
  .desc {
    line-height: 1.6;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  video {
    width: 100%;
    max-width: 1000px;
  }
}
</style>
