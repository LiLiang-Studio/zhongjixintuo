<template>
  <span class="ui-tag">
    {{ label }}
  </span>
</template>

<script setup>
defineProps({ label: String })
</script>

<style lang="less">
.ui-tag {
  display: inline-block;
  padding: .5rem .8rem;
  margin: 0 1rem 1rem 0;
  border: 1px solid currentColor;
  border-radius: 2rem;
  text-align: center;
  background-color: #fff;
}
</style>
