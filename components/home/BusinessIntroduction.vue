<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ $t.value.businessIntroduction.title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in $t.value.businessIntroduction.items" :key="_.title">
        <div class="image">
          <img :src="_.background" alt="">
          <img :src="_.image" alt="">
          <img :src="_.icon" alt="">
        </div>
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
    font-size: 50px;
  }
  &_list {
    li {
      display: flex;
      > div {
        width: 50%;
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
  }
}
</style>
