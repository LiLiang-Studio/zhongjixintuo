<template>
  <div :class="cls">
    <ui-row-card fixed-layout>
      <template #bg>
        <img :class="`${cls}_banner`" src="/images/home/banner1.jpg" alt="">
      </template>
    </ui-row-card>
    <div :class="`${cls}_main`">
      <home-business-introduction v-bind="obj.businessIntroduction" />
      <home-partner v-bind="obj.partner" />
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
