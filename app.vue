<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToTop />
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
  color: #232323;
}

li {
  list-style: none;
}

a {
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #1857FF;
  }
}

html {
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
}
</style>
