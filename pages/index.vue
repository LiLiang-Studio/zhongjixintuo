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
</script>

<style lang="less">
.page-home {
  &_main {
    padding: 0 10%;
    @media screen and (max-width: 750px) {
      padding: 0 1rem;
    }
  }
}
</style>
