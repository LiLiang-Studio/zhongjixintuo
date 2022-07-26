<template>
  <VideoCard is-right :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner5.png" alt="banner5">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-cartoon-driver'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.cartoonDriver)
</script>

<style lang="less">
.video-cartoon-driver {
  &_box {
    left: 60% !important;
  }
}
</style>
