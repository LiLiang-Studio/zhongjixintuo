<template>
  <VideoCard :title="obj.title" :desc="obj.desc">
    <template #bg>
      <img src="~~/assets/video/banner4.png" alt="banner4">
    </template>
  </VideoCard>
</template>

<script setup>
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.faceEffect)
</script>
