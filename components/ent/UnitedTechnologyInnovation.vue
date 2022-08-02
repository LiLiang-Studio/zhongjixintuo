<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
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
      </div>
      <div :class="`${cls}_right`">
        <div>
          <h2 :class="`${cls}_title`">{{ title }}</h2>
          <p :class="`${cls}_desc`" v-html="desc"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  padding: 3rem 0;
  &_inner {
    display: flex;
    background-color: #417CFF;
  }
  &_left {
    flex: 1;
    width: 0;
    background-color: #F5FAFF;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 12rem;
  }
  &_right {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: #fff;
  }
  &_title {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  &_desc {
    line-height: 1.6;
  }
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
    .@{prefix} {
      &_inner {
        display: block;
      }
      &_left {
        width: auto;
        border-radius: 0;
      }
      &_right {
        display: block;
        width: auto;
      }
    }
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
