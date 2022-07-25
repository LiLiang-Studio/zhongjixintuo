<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner12.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-conference-system'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.conferenceSystem)
</script>

<style lang="less">
.video-conference-system {
  &_box {
    left: 59.8%;
    right: 11.2%;
  }
}
</style>
