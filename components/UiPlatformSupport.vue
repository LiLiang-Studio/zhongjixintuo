<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <p :class="`${cls}_desc`" v-html="desc"></p>
    <ul :class="`${cls}_list`">
      <li>
        <img src="/images/ai/windows.png" alt="">
      </li>
      <li>
        <img src="/images/ai/ios.png" alt="">
      </li>
      <li>
        <img src="/images/ai/android.png" alt="">
      </li>
      <li>
        <img src="/images/ai/linux.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String
})
const cls = 'ui-platform-support'
</script>

<style lang="less">
.ui-platform-support {
  padding: 4rem 10%;
  text-align: center;
  background: #F8F8F8;
  &_title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  &_list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 800px;
    margin: auto;
    margin-top: 3rem;
    li:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 100%;
      max-height: 80px;
    }
  }
}
</style>
