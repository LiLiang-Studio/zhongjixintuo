<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ obj.title }}</h2>
    <ul>
      <li v-for="_ in obj.items" :key="_.title">
        <img class="img" :src="_.img" alt="">
        <h3 class="title">{{ _.title }}</h3>
        <p class="desc">{{ _.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const cls = 'video-use-case'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage.useCase)
</script>

<style lang="less">
.video-use-case {
  padding: 3rem 10%;
  &_title {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
  ul {
    display: flex;
  }
  li {
    width: 33.33%;
    padding: 0 2rem;
    color: #242424;
  }
  .img {
    display: block;
    width: 100%;
  }
  .title {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
}
</style>
