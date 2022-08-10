<template>
  <div :class="cls">
    <div :class="`${cls}_banner`">
      <img class="img" src="/images/about/banner.jpg" alt="">
    </div>
    <div :class="`${cls}_about`">
      <img class="img" src="/images/about/about.jpg" alt="">
      <div class="box">
        <h2 class="title">{{ obj.about.title }}</h2>
        <p class="desc" v-html="obj.about.desc"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cls = 'page-about'
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.aboutPage)
</script>

<style lang="less">
.page-about {
  &_banner {
    position: relative;
    .img {
      width: 100%;
    }
  }
  &_about {
    padding: 3rem 10%;
    display: flex;
    align-items: stretch;
    .img {
      flex: 1;
      width: 0;
      object-fit: cover;
    }
    .box {
      width: 50%;
      margin-left: 3rem;
    }
    .title {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
    .desc {
      line-height: 1.6;
      font-size: 1.1rem;
    }
    @media screen and (max-width: 750px) {
      padding: 3rem 1rem;
      .img {
        display: none;
      }
      .box {
        margin-left: 0;
        width: 100%;
      }
    }
  }
}
</style>
