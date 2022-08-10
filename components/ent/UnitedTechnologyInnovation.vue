<template>
  <div :class="cls">
    <div :class="`${cls}_box`">
      <div :class="`${cls}_titleBox`">
        <h2 :class="`${cls}_title`">{{ title }}</h2>
        <h3 :class="`${cls}_subTitle`">{{ subTitle }}</h3>
      </div>
      <ul :class="`${cls}_list`">
        <li v-for="_ in items" :key="_.title">
          <img :src="_.icon" alt="">
          <div>{{ _.title }}</div>
        </li>
      </ul>
    </div>
    <div :class="`${cls}_flexbox`">
      <p :class="`${cls}_desc`" v-html="desc"></p>
      <img :class="`${cls}_img`" src="/images/enterprise/big_data.jpg" alt="">
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
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
  &_box {
    text-align: center;
    margin-bottom: 3rem;
  }
  &_titleBox {
    margin-bottom: 3rem;
  }
  &_title {
    font-size: 2.4rem;
  }
  &_subTitle {
    font-size: 1.2rem;
    font-weight: normal;
  }
  &_list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 800px;
    margin: auto;
    img {
      height: 30px;
    }
  }
  &_flexbox {
    display: flex;
    align-items: center;
  }
  &_desc {
    margin-right: 3rem;
    flex: 1;
    width: 0;
  }
  &_img {
    width: 35%;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 500px) {
    .@{prefix} {
      &_flexbox {
        flex-wrap: wrap;
      }
      &_img, &_desc {
        width: 100%;
      }
      &_desc {
        margin: 1rem 0 0;
        order: 1;
      }
    }
  }
}
</style>
