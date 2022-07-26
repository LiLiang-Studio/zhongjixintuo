<template>
  <VideoCard is-right :title="obj.title" :desc="obj.desc">
    <template #bg>
      <img src="~~/assets/video/banner9.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.fullPlatformSupport)
</script>
