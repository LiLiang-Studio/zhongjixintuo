<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <div :class="`${cls}_list`">
      <UiCaseCard v-for="_ in items" :key="_.title" :class="`${cls}_item`" v-bind="_" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'ui-case-card-box'
</script>

<style lang="less">
.ui-case-card-box {
  padding: 3rem 10%;
  &_title {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
  &_list {
    display: flex;
  }
  &_item {
    flex: 1;
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
}
</style>
