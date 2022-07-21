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

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff;
  font-size: 14px;
  color: #232323;
}

li {
  list-style: none;
}
</style>
