<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
        <ul>
          <li v-for="_ in items" :key="_.title">
            <img :src="_.icon" alt="">
            <div class="box">
              <h3 class="sub_title">{{ _.title }}</h3>
              <p class="desc">{{ _.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div :class="`${cls}_right`">
        <img class="bg" src="/images/home/3d.png" alt="">
        <img class="logo" src="/images/logo1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'home-why-choose-us'
</script>

<style lang="less">
.home-why-choose-us {
  padding: 3rem 0;
  &_title {
    font-size: 2rem;
    margin-bottom: 1em;
  }
  &_inner {
    display: flex;
    align-items: center;
  }
  &_left {
    margin-right: 1em;
    flex: 1;
    width: 0;
    li {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 3em;
      }
      img {
        width: 60px;
        margin-right: 20px;
      }
    }
    .sub_title {
      font-size: 1.4rem;
    }
    .desc {
      font-size: 1rem;
      margin-top: 1em;
      color: #616161;
    }
  }
  &_right {
    position: relative;
    width: 40%;
    .bg {
      width: 100%;
      display: block;
    }
    .logo {
      width: 60px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
}
</style>
