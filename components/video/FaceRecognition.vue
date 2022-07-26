<template>
  <VideoCard is-right :title="obj.title" :desc="obj.desc">
    <template #bg>
      <img src="~~/assets/video/banner7.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.faceRecognition)
</script>
