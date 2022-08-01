<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <template v-for="_ in items" :key="_.title">
        <EntFuncBox v-if="_" :class="itemClass" v-bind="_" />
        <div v-else :class="`${cls}_br`"></div>
      </template>
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
  padding: 3rem 0;
  &_title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &_br {
    width: 100%;
  }
}
</style>
