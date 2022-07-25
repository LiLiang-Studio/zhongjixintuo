<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner8.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-smart-video-css'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.smartVideoCss)
</script>

<style lang="less">
.video-smart-video-css {
  &_box {
    left: 11.9%;
    right: 54%;
    h2 {
      font-style: italic;
    }
  }
}
</style>
