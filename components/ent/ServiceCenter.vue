<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in items" :key="_.title">
        <img class="icon" :src="_.icon" alt="">
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
const cls = 'ent-service-center'
</script>

<style lang="less">
@prefix: ent-service-center;
.@{prefix} {
  padding: 3rem 0 2rem;
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
      padding: 1rem;
      margin: 0 .5rem 1rem;
      width: calc(25% - 1rem);
      border-radius: 6px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, .12);
    }
  }
  .icon {
    height: 1.5rem;
  }
  .title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .desc {
    text-align: left;
    color: #616161;
    line-height: 1.6;
  }
  @media screen and (max-width: 750px) {
    .@{prefix}_list {
      li {
        width: calc(50% - 1rem);
      }
    }
  }
  @media screen and (max-width: 480px) {
    .@{prefix}_list {
      li {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}
</style>
