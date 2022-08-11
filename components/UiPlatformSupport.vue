<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <h2 :class="`${cls}_title`">{{ title }}</h2>
      <p :class="`${cls}_desc`" v-html="desc"></p>
      <ul :class="`${cls}_list`">
        <li>
          <img src="/images/ai/windows.png" alt="">
          <div>Windows</div>
        </li>
        <li>
          <img src="/images/ai/ios.png" alt="">
          <div>IOS</div>
        </li>
        <li>
          <img src="/images/ai/android.png" alt="">
          <div>Android</div>
        </li>
        <li>
          <img src="/images/ai/linux.png" alt="">
          <div>Linux</div>
        </li>
      </ul>
    </div>
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
  padding: 4rem 1rem;
  text-align: center;
  background: #F8F8F8;
  &_inner {
    max-width: 800px;
    margin: auto;
  }
  &_title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  &_desc {
    line-height: 1.6;
    color: #616161;
  }
  &_list {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
