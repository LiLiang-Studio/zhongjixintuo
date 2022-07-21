<template>
<div>
  <div>{{ data }}</div>
  <div>{{ $hello('test') }}</div>
  <div>{{ $t.value.navMenu.video }}</div>
  <button @click="$switchLang">切换语言</button>
</div>
</template>

<script setup>
const data = await $fetch('/api/submit', {
  method: 'post',
  body: { test: 123 }
})
</script>
