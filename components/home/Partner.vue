<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="i in 10" :key="i"></li>
    </ul>
    <div :class="`${cls}_btn-group`">
      <a :class="`${cls}_btn-more`">MORE +</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
const cls = 'home-parter'
</script>

<style lang="less">
.home-parter {
  &_title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  &_list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
      width: 200px;
      height: 50px;
      border: 1px solid #707070;
      margin: 0 1.5rem 2rem;
    }
  }
  &_btn-group {
    text-align: center;
  }
  &_btn-more {
    display: inline-block;
    border: 1px solid #707070;
    padding: .3rem;
    border-radius: 6px;
    &:hover {
      border-color: currentColor;
    }
  }
}
</style>
