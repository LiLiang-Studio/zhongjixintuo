<template>
  <div class="ui-case-card-list">
    <UiCaseCard v-for="_ in items" :key="_.title" v-bind="_" />
  </div>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>

<style lang="less">
.ui-case-card-list {
  display: flex;
  > * {
    flex: 1;
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
}
</style>
