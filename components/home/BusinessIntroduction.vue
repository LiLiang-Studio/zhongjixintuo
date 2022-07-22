<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ $t.value.businessIntroduction.title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in $t.value.businessIntroduction.items" :key="_.title">
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
const cls = 'home-Business-introduction'
</script>

<style lang="less">
.home-Business-introduction {
  padding: 50px 0;
  &_title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 1em;
  }
  &_list {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      > div {
        width: 50%;
      }
      &:nth-child(2n) .image {
        order: 1;
        margin-right: 0;
        margin-left: 50px;
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
