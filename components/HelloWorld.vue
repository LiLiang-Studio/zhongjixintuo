<template>
  <div>Hello {{ title }}</div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
