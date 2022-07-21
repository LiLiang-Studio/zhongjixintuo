<template>
  <div :class="cls">
    <home-banner />
    <div :class="`${cls}_main`">
      <home-business-introduction />
      <home-why-choose-us />
    </div>
  </div>
</template>

<script setup>
const cls = 'page-home'
</script>

<style lang="less">
.page-home {
  &_main {
    padding: 0 11.7%;
  }
}
</style>
