<template>
  <VideoCard :title="obj.title" :sub-title="obj.subTitle" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner2.png" alt="banner2">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-Portrait-beauty'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.portraitBeauty)
</script>

<style lang="less">
.video-Portrait-beauty {
  &_box {
    left: 11.7%;
    width: 31.6%;
    min-width: 360px;
  }
}
</style>
