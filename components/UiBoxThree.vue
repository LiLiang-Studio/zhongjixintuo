<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_list`">
        <template v-for="(_, i) in items" :key="i">
          <div v-if="_" :class="[`${cls}_item`, itemClass]">
            <img v-if="_.icon" :class="`${cls}_item_icon`" :src="_.icon" alt="">
            <h3 :class="`${cls}_item_title`">{{ _.title }}</h3>
            <p :class="`${cls}_desc`">{{ _.desc }}</p>
          </div>
          <div v-else :class="`${cls}_br`"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] },
  itemClass: String
})
const cls = 'ui-box-three'
</script>

<style lang="less">
@prefix: ui-box-three;
.@{prefix} {
  padding: 3rem 0;
  &_title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }
  &_inner {
    padding: 0 .5rem;
  }
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
  }
  &_br {
    width: 100%;
  }
  &_item {
    background-color: #417CFF;
    color: #fff;
    margin: 0 .5rem 1rem;
    width: calc(25% - 1rem);
    padding: 1rem;
    border-radius: 6px;
    &_icon {
      height: 1.6rem;
    }
    &_title {
      margin: .3rem 0 1rem;
      font-size: 1.1rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 750px) {
    .@{prefix}_item {
      width: calc(50% - 1rem);
    }
  }
  @media screen and (max-width: 480px) {
    .@{prefix}_item {
      width: 100%;
    }
  }
}
</style>
