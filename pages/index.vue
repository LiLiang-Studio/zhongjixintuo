<template>
  <div>this is home page</div>
  <hello-world title="world" />
  <img src="~/assets/admin.jpg" alt="">
  <div>计数：{{ count }}, double: {{ double }}</div>
  <button @click="increment">+</button>
</template>

<script setup>
  const count = ref(0)
  const double = computed(() => count.value * 2)
  const increment = () => count.value++

  definePageMeta({
    title: 'Some Page'
  })
</script>
