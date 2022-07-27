<template>
  <div>
    <UiTag v-for="_ in items" :key="_" :label="_"></UiTag>
  </div>
</template>

<script setup>
import { UiTag } from '#components'
defineProps({
  items: { type: Array, default: () => [] }
})
</script>
