<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <div :class="`${cls}_box`">
      <div :class="`${cls}_img`">
        <slot name="img" />
      </div>
      <ul :class="`${cls}_list`">
        <li v-for="_ in items" :key="_" :class="[`${cls}_item`, { 'show-dot': showDot }]">{{ _ }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] },
  showDot: Boolean
})
const cls = 'ui-box-four'
</script>

<style lang="less">
@prefix: ui-box-four;
.@{prefix} {
  padding: 3rem 10% 0;
  &_title {
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  &_box {
    display: flex;
    align-items: center;
  }
  &_img {
    width: 36%;
    margin-right: 3rem;
    img {
      width: 100%;
    }
  }
  &_list {
    flex: 1;
    width: 0;
  }
  &_item {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #616161;
    position: relative;
    &.show-dot {
      padding-left: 1em;
      &::before {
        content: "";
        position: absolute;
        top: .6em;
        left: 0;
        width: .4em;
        height: .4em;
        border-radius: .4em;
        background: #1E64FF;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 500px) {
    .@{prefix} {
      &_box {
        display: block;
      }
      &_img, &_list {
        width: 100%;
      }
      &_img {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
