<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <h2 :class="`${cls}_title`">{{ title }}</h2>
      <div :class="`${cls}_list`">
        <div v-for="_ in items" :key="_.title" :class="`${cls}_item`">
          <img class="img" :src="_.img" alt="">
          <h3 class="title">{{ _.title }}</h3>
          <p class="`desc">{{ _.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'ui-case-card-box'
</script>

<style lang="less">
@prefix: ui-case-card-box;
.@{prefix} {
  padding: 3rem .5rem;
  background: #3F7AF2;
  &_inner {
    max-width: 1200px;
    margin: auto;
  }
  &_title {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    color: #fff;
  }
  &_list {
    display: flex;
    flex-wrap: wrap;
  }
  &_item {
    flex: 1;
    margin: .5rem;
    padding: .6rem;
    padding-bottom: 1rem;
    border-radius: 6px;
    background-color: #fff;
    .img {
      display: block;
      width: 100%;
    }
    .title {
      font-size: 1.2rem;
      margin: 1rem 0;
    }
    .desc {
      color: #616161;
    }
  }
  @media screen and (max-width: 750px) {
    .@{prefix} {
      &_item {
        width: calc(50% - 1rem);
        flex: auto;
      }
    }
  }
}
</style>
