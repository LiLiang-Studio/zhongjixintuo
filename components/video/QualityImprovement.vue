<template>
  <div :class="cls">
    <div class="titlebox">
      <h2 class="title">{{ title }}</h2>
      <h3 class="subtitle">{{ subTitle }}</h3>
    </div>
    <div class="video">
      <video preload="metadata" controls src="/videos/blur_to_clear.mp4"></video>
    </div>
    <p class="desc" v-html="desc"></p>
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
  margin: 3rem 10%;
  text-align: center;
  .titlebox {
    margin-bottom: 3rem;
  }
  .title {
    font-size: 2.4rem;
    text-transform: capitalize;
  }
  .subtitle {
    font-size: 1.6rem;
    font-weight: normal;
    color: #565656;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
  }
  .desc {
    line-height: 1.8;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  video {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 1080px) {
    .title {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 930px) {
    .title {
      font-size: 1.6rem;
    }
    .subtitle {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 750px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
