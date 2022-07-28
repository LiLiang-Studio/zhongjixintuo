<template>
  <div v-show="visible">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToTop />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - 中玑信拓` : '中玑信拓'
})
const visible = ref(false)
onMounted(() => {
  visible.value = true
})
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  color: #424242;
  background-color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
}
</style>
