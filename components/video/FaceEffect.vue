<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner4.png" alt="banner4">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-face-effect'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.faceEffect)
</script>

<style lang="less">
.video-face-effect {
  &_box {
    left: 12.2%;
    right: 50%;
  }
}
</style>
