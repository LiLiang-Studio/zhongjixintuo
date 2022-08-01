<template>
  <div>
    <UiRowCard v-bind="obj.banner">
      <template #bg>
        <img src="/images/enterprise/banner.jpg" alt="">
      </template>
    </UiRowCard>
    <div :class="`${cls}_box`">
      <EntServiceCenter v-bind="obj.serviceCenter" />
      <EntCallCenter v-bind="obj.callCenter" />
      <EntIntelligentPlatformService v-bind="obj.intelligentPlatformServiceValue" />
    </div>
    <UiRowCard :title="obj.bigDataAppSystem.title">
      <template #bg>
        <img src="/images/enterprise/big_data_app_system.jpg" alt="">
      </template>
      <UiTagList :items="obj.bigDataAppSystem.items" />
    </UiRowCard>
    <UiRowCard v-bind="obj.gaeBms">
      <template #bg>
        <img src="/images/enterprise/gae_bms.png" alt="">
      </template>
    </UiRowCard>
  </div>
</template>

<script setup>
const cls = 'page-enterprise'
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.enterprisePage)
</script>

<style lang="less">
@prefix: page-enterprise;
.@{prefix} {
  &_box {
    padding: 0 10%;
    @media screen and (max-width: 1024px) {
      padding: 0 1rem;
    }
  }
}
</style>
