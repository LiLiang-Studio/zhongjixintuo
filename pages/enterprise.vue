<template>
  <div :class="cls">
    <UiRowCard v-bind="obj.banner">
      <template #bg>
        <img src="/images/enterprise/banner.jpg" alt="">
      </template>
    </UiRowCard>
    <div :class="`${cls}_box`">
      <EntServiceCenter v-bind="obj.serviceCenter" />
      <EntCallCenter v-bind="obj.callCenter" />
      <EntIntelligentPlatformService v-bind="obj.intelligentPlatformServiceValue" />
      <EntFuncBoxList v-bind="obj.customerManage" />
    </div>
    <UiRowCard :title="obj.bigDataAppSystem.title">
      <template #bg>
        <img src="/images/enterprise/big_data_app_system.jpg" alt="">
      </template>
      <UiTagList :items="obj.bigDataAppSystem.items" />
    </UiRowCard>
    <EntDataAnalysis v-bind="obj.dataAnalysis" />
    <div :class="`${cls}_box`">
      <EntFuncBoxList v-bind="obj.supportService" item-class="support-service-item" />
    </div>
    <EntAdvantage v-bind="obj.advantage" />
    <UiRowCard v-bind="obj.gaeBms">
      <template #bg>
        <img src="/images/enterprise/gae_bms.png" alt="">
      </template>
    </UiRowCard>
    <div :class="`${cls}_box`">
      <EntEms v-bind="obj.ems" />
    </div>
    <EntBmpProcessNodeTracking v-bind="obj.bmpProcessNodeTracking" />
    <div :class="`${cls}_box`">
      <EntFuncBoxList v-bind="obj.advantagesOfTechnicalSolutions" item-class="advantages-of-technical-solutions-item" />
      <EntSsr v-bind="obj.ssr" />
    </div>
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
  .support-service-item, .advantages-of-technical-solutions-item {
    width: calc(33.33% - 1rem);
  }
  .advantages-of-technical-solutions-item {
    p {
      text-align: left;
    }
  }
}
</style>
