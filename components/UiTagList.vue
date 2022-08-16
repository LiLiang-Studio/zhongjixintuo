<template>
  <ul>
    <li class="ui-tag" v-for="_ in items" :key="_">{{ _ }}</li>
  </ul>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
})
</script>

<style lang="less">
.ui-tag {
  display: inline-block;
  padding: .5rem .8rem;
  margin: 0 1rem 1rem 0;
  border: 1px solid currentColor;
  border-radius: 2rem;
  text-align: center;
}
</style>
