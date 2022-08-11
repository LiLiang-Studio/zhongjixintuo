<template>
  <div :class="cls">
    <img src="/images/about/banner.jpg" style="width:100%;">
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
  &_about {
    max-width: 1200px;
    margin: auto;
    padding: 3rem 1rem;
    overflow: hidden;
    .img {
      float: left;
      width: 40%;
      margin-right: 3%;
    }
    .title {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
    .desc {
      line-height: 1.6;
      font-size: 1.1rem;
    }
  }
}
</style>
