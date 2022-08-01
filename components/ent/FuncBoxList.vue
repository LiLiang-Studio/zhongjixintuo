<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <EntFuncBox v-for="_ in items" :key="_.title" :class="itemClass" v-bind="_" />
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] },
  itemClass: String
})
const cls = 'ent-func-box-list'
</script>

<style lang="less">
.ent-func-box-list {
  padding-bottom: 3rem;
  &_title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  &_list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
