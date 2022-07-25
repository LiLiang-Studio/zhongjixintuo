<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner7.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-face-recognition'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.faceRecognition)
</script>

<style lang="less">
.video-face-recognition {
  &_box {
    left: 56.2%;
    right: 11.6%;
  }
}
</style>
