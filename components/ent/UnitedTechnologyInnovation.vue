<template>
  <UiBoxOne :class="cls" :title="title" :desc="desc">
    <template v-for="(_, i) in items" :key="i">
      <div v-if="_.length" class="box-wrap">
        <div v-for="item in _" :key="item.title" class="box">
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc" v-html="item.desc"></p>
        </div>
      </div>
      <div v-else class="box box-wrap">
        <h3 class="title">{{ _.title }}</h3>
        <p class="desc" v-html="_.desc"></p>
      </div>
    </template>
  </UiBoxOne>
</template>

<script setup>
import { UiBoxOne } from '#components'

defineProps({
  title: String,
  desc: String,
  items: { type: Array, default: () => [] }
})
const cls = 'ent-united-technology-tnnovation'
</script>

<style lang="less">
@prefix: ent-united-technology-tnnovation;
.@{prefix} {
  .box-wrap {
    &:not(:last-child) {
      margin-right: 2rem;
    }
    .box:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  .box {
    border: 1px dashed #417CFF;
    padding: 0 .5rem;
    border-radius: 6px;
    text-align: center;
    line-height: 1.8;
  }
  .title {
    padding: .3rem 0;
    border-bottom: 1px dashed #417CFF;
    color: #417CFF;
    font-size: 1.1rem;
    font-weight: normal;
  }
  .desc {
    padding: .5rem 0;
    font-size: .8rem;
  }
  @media screen and (max-width: 750px) {
    .box-wrap {
      &:not(:last-child) {
        margin-right: 1rem;
      }
      .box:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
