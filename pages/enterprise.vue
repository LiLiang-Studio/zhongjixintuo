<template>
  <div>
    <UiRowCard v-bind="obj.banner">
      <template #bg>
        <img src="/images/enterprise/banner.jpg" alt="">
      </template>
    </UiRowCard>
    <EntServiceCenter v-bind="obj.serviceCenter" />
  </div>
</template>

<script setup>
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.enterprisePage)
</script>

<style lang="less">

</style>
