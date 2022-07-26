<template>
  <VideoCard is-right :title="obj.title" :desc="obj.desc" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner10.png" alt="">
    </template>
  </VideoCard>
</template>

<script setup>
const cls = 'video-quality-mms'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.qualityMms)
</script>

<style lang="less">
.video-quality-mms {
  &_box {
    h2, p {
      color: #fff;
    }
    h2 {
      font-style: italic;
    }
  }
}
</style>
