<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ $t.value.partner.title }}</h2>
  </div>
</template>

<script setup>
const cls = 'home-parter'
</script>

<style lang="less">
.home-parter {
  &_title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
