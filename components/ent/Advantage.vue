<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <div :class="`${cls}_box`">
      <ul class="left">
        <li v-for="_ in frontItems" :key="_.title">
          <h3 class="title">{{ _.title }}</h3>
          <p class="desc">{{ _.desc }}</p>
        </li>
      </ul>
      <img class="img" src="/images/enterprise/advantage.png" alt="">
      <ul class="right">
        <li v-for="_ in behindItems" :key="_.title">
          <h3 class="title">{{ _.title }}</h3>
          <p class="desc">{{ _.desc }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const middleIndex = computed(() => Math.ceil(props.items.length / 2))
const frontItems = computed(() => props.items.slice(0, middleIndex.value))
const behindItems = computed(() => props.items.slice(middleIndex.value))
const cls = 'ent-advantage'
</script>

<style lang="less">
.ent-advantage {
  background-color: #417CFF;
  color: #fff;
  padding: 2rem 10%;
  &_title {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  &_box {
    display: flex;
    align-items: center;
  }
  .left {
    margin-right: 1rem;
  }
  .right {
    margin-left: 3rem;
  }
  ul {
    flex: 1;
  }
  li {
    margin-bottom: 2rem;
  }
  .img {
    width: 30%;
  }
  .title {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 650px) {
    .img {
      display: none;
    }
    .right {
      margin-left: 1rem;
    }
  }
}
</style>
