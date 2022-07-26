<template>
  <VideoCard :title="obj.title" :desc="obj.desc">
    <template #bg>
      <img src="~~/assets/video/banner6.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.faceDetectionAlignment)
</script>
