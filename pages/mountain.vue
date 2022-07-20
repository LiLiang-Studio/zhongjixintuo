<template>
  <div>
    <h1>{{ data.title }}</h1>
    <p>{{ data.description }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/mountains/everest', {
  pick: ['title', 'description']
})
</script>
