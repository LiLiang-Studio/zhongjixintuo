<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner6.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-face-detection-alignment'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.faceDetectionAlignment)
</script>

<style lang="less">
.video-face-detection-alignment {
  &_box {
    left: 11.9%;
    right: 55.6%;
  }
}
</style>
