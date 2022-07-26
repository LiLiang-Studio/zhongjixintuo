<template>
  <VideoCard :title="obj.title" :sub-title="obj.subTitle" :desc="obj.desc">
    <template #bg>
      <img src="~~/assets/video/banner2.png" alt="banner2">
    </template>
  </VideoCard>
</template>

<script setup>
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.portraitBeauty)
</script>
