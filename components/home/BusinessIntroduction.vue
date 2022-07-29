<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in items" :key="_.title">
        <home-business-item-image
          class="image"
          :icon="_.icon"
          :image="_.image"
          :background="_.background" />
        <div class="content">
          <h3 class="sub_title">{{ _.title }}</h3>
          <p class="desc" v-html="_.desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'home-Business-introduction'
</script>

<style lang="less">
@prefix: home-Business-introduction;
.@{prefix} {
  padding: 3rem 0;
  &_title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1em;
  }
  &_list {
    li {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 4rem;
      }
      > div {
        width: 50%;
      }
      &:nth-child(2n) .image {
        order: 1;
        margin-right: 0;
        margin-left: 50px;
      }
      @media screen and (max-width: 750px) {
        display: block;
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, .12);
        > div {
          width: 100%;
          margin-left: 0 !important;
        }
        .content {
          padding: 1rem;
        }
      }
    }
    .sub_title {
      font-size: 20px;
      margin-bottom: 1em;
      color: #363636;
    }
    .desc {
      font-size: 15px;
      color: #565656;
    }
    .image {
      margin-right: 50px;
    }
  }
}
</style>
