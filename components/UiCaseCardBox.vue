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
@prefix: ui-case-card-box;
.@{prefix} {
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
      margin-right: 3%;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 3rem 0;
    .@{prefix} {
      &_list {
        flex-wrap: wrap;
      }
      &_item {
        width: 100%;
        flex: auto;
        margin: .5rem 0 !important;
      }
    }
  }
}
</style>
