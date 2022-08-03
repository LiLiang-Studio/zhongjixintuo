<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in items" :key="_.title" :class="`${cls}_item`">
        <div :class="`${cls}_item_img`">
          <img :src="_.img" alt="">
        </div>
        <h3 :class="`${cls}_item_title`">{{ _.title }}</h3>
        <p :class="`${cls}_item_desc`">{{ _.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'ui-box-two'
</script>

<style lang="less">
@prefix: ui-box-two;
.@{prefix} {
  padding: 0 10%;
  &_title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  &_list {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  &_item {
    margin: 0 .5rem 1rem;
    width: calc(33.33% - 1rem);
    &_img {
      border-radius: 1rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    &_title {
      text-align: center;
      margin: 1rem 0;
      font-size: 1.1rem;
    }
    &_desc {
      line-height: 1.6;
      color: #616161;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 450px) {
    .@{prefix} {
      &_item {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
