<template>
  <div :class="cls">
    <!-- 呼叫中心 -->
    <UiRowCard v-bind="obj.banner">
      <template #bg>
        <img src="/images/enterprise/banner.jpg" alt="">
      </template>
    </UiRowCard>
    <div :class="`${cls}_box`">
      <!-- 新一代客服系统平台 -->
      <EntServiceCenter v-bind="obj.serviceCenter" />
      <!-- 智能呼叫中心 -->
      <UiBoxOne v-bind="obj.callCenter">
        <img src="/images/enterprise/call_center.png" alt="">
      </UiBoxOne>
      <!-- 智能化平台服务价值 -->
      <EntIntelligentPlatformService v-bind="obj.intelligentPlatformServiceValue" />
      <!-- 让企业更好的管理客户  提升企业效能 -->
      <EntFuncBoxList v-bind="obj.customerManage" />
    </div>
    <!-- 大数据应用系统 -->
    <UiRowCard :title="obj.bigDataAppSystem.title">
      <template #bg>
        <img src="/images/enterprise/big_data_app_system.jpg" alt="">
      </template>
      <UiTagList :items="obj.bigDataAppSystem.items" />
    </UiRowCard>
    <div :class="`${cls}_box`">
      <!-- 实现联合技术创新 -->
      <EntUnitedTechnologyInnovation v-bind="obj.unitedTechnologyInnovation" />
    </div>
    <!-- 一站式平台，赋能企业提高线索转化率 -->
    <EntDataAnalysis v-bind="obj.dataAnalysis" />
    <div :class="`${cls}_box`">
      <!-- 提供全方位多应用系统支撑服务 -->
      <EntFuncBoxList v-bind="obj.supportService" item-class="support-service-item" />
    </div>
    <!-- 我们的核心优势 -->
    <EntAdvantage v-bind="obj.advantage" />
    <!-- 政企业务管理系统 -->
    <UiRowCard v-bind="obj.gaeBms">
      <template #bg>
        <img src="/images/enterprise/gae_bms.png" alt="">
      </template>
    </UiRowCard>
    <div :class="`${cls}_box`">
      <!-- 企业管理系统 -->
      <UiBoxOne v-bind="obj.ems">
        <img src="/images/enterprise/gebs.png" alt="">
      </UiBoxOne>
    </div>
    <!-- 业务综合管理平台  全流程节点跟踪 -->
    <EntBmpProcessNodeTracking v-bind="obj.bmpProcessNodeTracking" />
    <div :class="`${cls}_box`">
      <!-- 中玑信拓|技术方案优势 -->
      <EntFuncBoxList v-bind="obj.advantagesOfTechnicalSolutions" item-class="advantages-of-technical-solutions-item" />
      <!-- 系统安全性与可靠性 -->
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
