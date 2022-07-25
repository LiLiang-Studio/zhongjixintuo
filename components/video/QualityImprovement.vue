<template>
  <div :class="cls">
    <h2 class="title">{{ obj.title }}</h2>
    <h3 class="subtitle">{{ obj.subTitle }}</h3>
    <p class="desc">{{ obj.desc }}</p>
  </div>
</template>

<script setup>
const cls = 'video-quality-improvement'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.qualityImprovement)
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
  }
}
</style>
