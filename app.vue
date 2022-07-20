<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
})
</script>
