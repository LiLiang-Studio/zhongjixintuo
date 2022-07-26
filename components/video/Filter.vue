<template>
  <VideoCard is-right :title="obj.title" :box-class="`${cls}_box`">
    <template #bg>
      <img src="~~/assets/video/banner3.png" alt="banner3">
    </template>
    <ul :class="`${cls}_list`">
      <li v-for="_ in obj.items" :key="_">{{ _ }}</li>
    </ul>
  </VideoCard>
</template>

<script setup>
const cls = 'video-filter'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.videoFilter)
</script>

<style lang="less">
.video-filter {
  &_box {
    left: 60% !important;
  }
  &_list {
    li {
      display: inline-block;
      padding: .5rem .8rem;
      margin: 0 1rem 1rem 0;
      border: 1px solid currentColor;
      border-radius: 2em;
      text-align: center;
    }
  }
}
</style>
