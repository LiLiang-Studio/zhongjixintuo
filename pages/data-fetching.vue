<template>
  <div>
    Page visits: {{ data }}
    <button @click="refresh">刷新</button>
  </div>
</template>

<script setup>
  const { data, refresh } = await useFetch('/api/count')
  // const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>
