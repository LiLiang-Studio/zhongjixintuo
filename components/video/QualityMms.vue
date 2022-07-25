<template>
  <VideoCard :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner10.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-face-recognition'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.qualityMms)
</script>

<style lang="less">
.video-face-recognition {
  &_box {
    left: 55.7%;
    right: 11.3%;
    h2, p {
      color: #fff;
    }
    h2 {
      font-style: italic;
      letter-spacing: .125rem;
    }
  }
}
</style>
