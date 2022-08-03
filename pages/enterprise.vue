<template>
  <div :class="cls">
    <!-- 呼叫中心 banner -->
    <UiRowCard v-bind="obj.banner">
      <template #bg>
        <img src="/images/enterprise/banner.jpg" alt="">
      </template>
    </UiRowCard>
    <!-- 智能服务系统  提升企业效能 -->
    <UiBoxFour v-bind="obj.iss" show-dot>
      <template #img>
        <img src="/images/enterprise/call_platform_intelligent_service.png" alt="">
      </template>
    </UiBoxFour>
    <div :class="`${cls}_box`">
      <!-- 新一代客服系统平台 -->
      <EntServiceCenter v-bind="obj.serviceCenter" />
    </div>

    <!-- 大数据应用系统 banner -->
    <UiRowCard :title="obj.bigDataAppSystem.title">
      <template #bg>
        <img src="/images/enterprise/big_data_app_system.jpg" alt="">
      </template>
      <UiTagList :items="obj.bigDataAppSystem.items" />
    </UiRowCard>
    <!-- 实现联合技术创新 -->
    <EntUnitedTechnologyInnovation v-bind="obj.unitedTechnologyInnovation" />
    <!-- 一站式平台，赋能企业提高线索转化率 -->
    <UiBoxTwo v-bind="obj.dataAnalysis" style="background: #F5FAFF;padding-top: 3rem;padding-bottom: 3rem;" />

    <!-- 政企业务管理系统 banner -->
    <UiRowCard v-bind="obj.gaeBms">
      <template #bg>
        <img src="/images/enterprise/gae_bms.jpg" alt="">
      </template>
    </UiRowCard>
    <!-- 做到“事事有反馈，件件有落实” -->
    <UiBoxFour v-bind="obj.gaeSystemSummary">
      <template #img>
        <img src="/images/enterprise/government_and_enterprise_system.png" alt="">
      </template>
    </UiBoxFour>
    <!-- 事半功倍、落实到位，政企工作更轻松！ -->
    <UiBoxThree v-bind="obj.objectManage" />
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
