<template>
  <div>
    <p>Current color: {{ color }}</p>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
  const counter = useCounter()
  const color = useColor()
</script>
