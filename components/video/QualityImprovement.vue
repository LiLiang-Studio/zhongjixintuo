<template>
  <div :class="cls">
    <h2 class="title">{{ title }}</h2>
    <h3 class="subtitle">{{ subTitle }}</h3>
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
  margin: 3rem 0;
  text-align: center;
  .title {
    font-size: 3rem;
  }
  .subtitle {
    font-size: 3rem;
    font-weight: normal;
    color: #565656;
    font-family: 'Times New Roman', Times, serif;
  }
  .desc {
    line-height: 1.8;
  }
}
</style>
