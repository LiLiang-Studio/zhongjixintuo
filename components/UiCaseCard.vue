<template>
  <div :class="cls">
    <img :class="`${cls}_img`" :src="img" alt="">
    <h3 :class="`${cls}_title`">{{ title }}</h3>
    <p :class="`${cls}_desc`">{{ desc }}</p>
  </div>
</template>

<script setup>
const cls = 'ui-case-card'
defineProps({
  img: String,
  title: String,
  desc: String
})
</script>

<style lang="less">
.ui-case-card {
  padding: .6rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  box-shadow: 0px 12px 73px 0px rgba(239, 239, 239, 0.95);
  &_img {
    display: block;
    width: 100%;
  }
  &_title {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
  &_desc {
    color: #616161;
  }
}
</style>
