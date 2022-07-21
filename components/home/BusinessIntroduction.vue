<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ $t.value.businessIntroduction.title }}</h2>
    <ul :class="`${cls}_list`">
      <li v-for="_ in $t.value.businessIntroduction.items" :key="_.title">
        <div class="image">
          <img class="bg" :src="_.background" alt="">
          <img class="img" :src="_.image" alt="">
          <img class="icon" :src="_.icon" alt="">
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
      position: relative;
      margin-right: 50px;
      img {
        max-width: 100%;
      }
      .img, .icon {
        position: absolute;
      }
      .img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .icon {
        width: 100px;
        top: 0;
        left: 0;
        transform: translate(-10%, -10%);
      }
    }
  }
}
</style>
