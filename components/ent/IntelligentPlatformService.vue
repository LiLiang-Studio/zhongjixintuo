<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in items" :key="_.title">
        <img class="img" :src="_.img" alt="">
        <h3 class="title">{{ _.title }}</h3>
        <p class="desc">{{ _.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'intelligent-platform-service'
</script>

<style lang="less">
@prefix: intelligent-platform-service;
.@{prefix} {
  padding: 0 10% 3rem;
  &_title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  &_list {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    li {
      margin: 0 1rem;
      width: calc(33.33% - 2rem);
    }
  }
  .img {
    width: 100%;
  }
  .title {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.1rem;
  }
  .desc {
    line-height: 1.6;
    color: #616161;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
    .@{prefix}_list {
      li {
        margin: 0 .5rem 1rem;
        width: calc(33.33% - 1em);
      }
    }
  }
  @media screen and (max-width: 450px) {
    .@{prefix}_list {
      li {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
