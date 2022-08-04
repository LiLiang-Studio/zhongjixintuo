<template>
  <div :class="cls">
    <div :class="`${cls}_left`">
      <div>
        <h2 :class="`${cls}_title`">{{ title }}</h2>
        <p :class="`${cls}_desc`" v-html="desc"></p>
      </div>
    </div>
    <div :class="`${cls}_right`">
      <div>
        <div v-for="(_, i) in items" :key="_" :class="`${cls}_item_wrap`">
          <div v-html="_" :class="[`${cls}_item`, `item_${i}`]"></div>
        </div>
      </div>
      <div :class="`${cls}_app_name`">
        <img class="img" src="/images/enterprise/big_data_apply.png" alt="">
        <div :class="`${cls}_app_box`">
          <div>
            <img src="/images/enterprise/big_data.png" alt="">
            <h3 class="title">{{ appName }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  items: { type: Array, default: () => [] },
  appName: String
})
const cls = 'ent-united-technology-tnnovation'
</script>

<style lang="less">
@prefix: ent-united-technology-tnnovation;
.@{prefix} {
  padding: 3rem 10% 0;
  display: flex;
  align-items: stretch;
  &_left {
    background: #F5FAFF;
    padding: 10% 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 0;
  }
  &_right {
    background: #417CFF;
    position: relative;
    padding: 0 2rem 2rem;
    display: flex;
    align-items: center;
    width: 300px;
  }
  &_title {
    margin-bottom: 3rem;
  }
  &_item {
    background: #fff;
    color: #417CFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 4rem;
    min-height: 4rem;
    padding: .3rem;
    font-size: 1.2rem;
    border-radius: 6px;
    text-transform: capitalize;
    text-align: center;
    line-height: 1.2;
    &.item_1 {
      transform: translateX(130%);
    }
    &.item_2 {
      transform: translate(200%, 30%);
    }
    &.item_3 {
      transform: translate(130%, 60%);
    }
    &.item_4 {
      transform: translateY(60%);
    }
  }
  &_app_name {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    .img {
      height: 111px;
    }
  }
  &_app_box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: .5rem;
    text-transform: capitalize;
    img {
      height: 44px;
    }
    .title {
      font-size: .9rem;
      font-weight: normal;
      color: #417CFF;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 750px) {
    display: block;
    .@{prefix} {
      &_left {
        width: 100%;
        padding: 80px 1rem;
      }
      &_right {
        width: 100%;
        height: 210px;
        align-items: flex-start;
        justify-content: center;
        padding: 2rem 2rem 2rem 0;
      }
      &_app_name {
        top: 0;
        left: 50%;
      }
      &_item_wrap {
        display: inline-block;
      }
      &_item {
        &.item_1 {
          transform: translateY(130%);
        }
        &.item_2 {
          transform: translate(30%, 200%);
        }
        &.item_3 {
          transform: translate(60%, 130%);
        }
        &.item_4 {
          transform: translateX(60%);
        }
      }
    }
  }
}
</style>
