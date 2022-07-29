<template>
  <div :class="cls">
    <ui-row-card fixed-layout>
      <template #bg>
        <img :class="`${cls}_banner`" src="~~/assets/home/banner1.png" alt="">
      </template>
    </ui-row-card>
    <div :class="`${cls}_main`">
      <home-business-introduction v-bind="langPkg.businessIntroduction" />
      <home-partner v-bind="langPkg.partner" />
      <home-why-choose-us v-bind="langPkg.whyChooseUs" />
    </div>
  </div>
</template>

<script setup>
const cls = 'page-home'
const { langPkg } = useLangPkg()
</script>

<style lang="less">
.page-home {
  &_main {
    padding: 0 10%;
  }
}
</style>
