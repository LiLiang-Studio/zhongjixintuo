<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ $t.value.whyChooseUs.title }}</h2>
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
        <ul>
          <li v-for="_ in $t.value.whyChooseUs.items" :key="_.title">
            <img :src="_.icon" alt="">
            <div class="box">
              <h3 class="sub_title">{{ _.title }}</h3>
              <p class="desc">{{ _.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div :class="`${cls}_right`">
        <img class="bg" src="~~/assets/home/3d.png" alt="3d">
        <img class="logo" src="~~/assets/home/logo1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const cls = 'home-why-choose-us'
</script>

<style lang="less">
.home-why-choose-us {
  padding: 50px 0;
  &_title {
    font-size: 32px;
    margin-bottom: 1em;
  }
  &_inner {
    display: flex;
    align-items: center;
  }
  &_left, &_right {
    width: 50%;
  }
  &_left {
    margin-right: 1em;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 3em;
      img {
        width: 60px;
        margin-right: 20px;
      }
    }
    .sub_title {
      font-size: 20px;
    }
    .desc {
      font-size: 14px;
      margin-top: 1em;
    }
  }
  &_right {
    position: relative;
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
  }
}
</style>
