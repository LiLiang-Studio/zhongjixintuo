<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner8.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-face-detection-alignment'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.virtualBackground)
</script>

<style lang="less">
.video-face-detection-alignment {
  &_box {
    left: 11.5%;
    right: 56%;
  }
}
</style>
