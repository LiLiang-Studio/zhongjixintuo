<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <div :class="`${cls}_list`">
      <img v-for="_ in parters" :key="_.src" :src="_.src" alt="">
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
const cls = 'home-parter'
const parters = ref([])
</script>

<style lang="less">
.home-parter {
  text-align: center;
  &_title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  &_list {
    img {
      margin: 0 1rem 2rem;
    }
  }
}
</style>
