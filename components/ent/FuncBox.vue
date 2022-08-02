<template>
  <li :class="cls">
    <img v-if="icon" class="icon" :src="icon" alt="">
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ desc }}</p>
  </li>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String
})
const cls = 'ent-func-box'
</script>

<style lang="less">
.ent-func-box {
  background-color: #417CFF;
  color: #fff;
  text-align: center;
  margin: 0 .5rem 1rem;
  width: calc(25% - 1rem);
  padding: 1rem;
  border-radius: 6px;
  .icon {
    height: 1.6rem;
  }
  .title {
    margin: .3rem 0 1rem;
    font-size: 1.1rem;
  }
}
</style>
