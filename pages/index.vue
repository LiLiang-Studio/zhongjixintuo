<template>
  <div :class="cls">
    <img src="/images/home/banner1.jpg" style="width:100%;">
    <div :class="`${cls}_main`">
      <home-business-introduction v-bind="obj.businessIntroduction" />
      <!-- <home-partner v-bind="obj.partner" /> -->
      <home-why-choose-us v-bind="obj.whyChooseUs" />
    </div>
  </div>
</template>

<script setup>
const cls = 'page-home'
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.homePage)

useHead({ title: '首页' })
</script>

<style lang="less">
.page-home {
  &_main {
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
  }
}
</style>
