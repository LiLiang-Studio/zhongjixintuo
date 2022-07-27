<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ obj.title }}</h2>
    <UiCaseCardList :items="obj.items" />
  </div>
</template>

<script setup>
const cls = 'video-use-case'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.useCase)
</script>

<style lang="less">
.video-use-case {
  padding: 3rem 10%;
  &_title {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
}
</style>
