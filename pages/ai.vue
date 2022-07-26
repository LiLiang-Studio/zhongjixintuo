<template>
  <div>
    <!-- banner -->
    <VideoCard>
      <template #bg>
        <img src="~~/assets/ai/banner1.png" alt="">
      </template>
    </VideoCard>
    <!-- 图像视频分类 -->
    <VideoCard is-right v-bind="obj.mediaClassification">
      <template #bg>
        <img src="~~/assets/ai/banner3.png" alt="">
      </template>
    </VideoCard>
    <VideoCard v-bind="obj.AudioAndVideoEnhancement">
      <template #bg>
        <img src="~~/assets/ai/banner4.png" alt="">
      </template>
    </VideoCard>
  </div>
</template>

<script setup>
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.aiPage)
</script>

<style lang="less">

</style>
