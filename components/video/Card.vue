<template>
  <div :class="cls">
    <div :class="`${cls}_bg`">
      <slot name="bg" />
    </div>
    <div :class="[`${cls}_box`, boxClass]" :style="boxStyle">
      <div :class="`${cls}_titlebox`">
        <h2 :class="`${cls}_title`" v-html="title"></h2>
        <h3 v-if="subTitle" :class="`${cls}_subtitle`">{{ subTitle }}</h3>
      </div>
      <div :class="`${cls}_content`">
        <slot>
          <p :class="`${cls}_desc`" v-html="desc"></p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
  desc: String,
  boxClass: String,
  boxStyle: {}
})
const cls = 'video-card'
</script>

<style lang="less">
.video-card {
  position: relative;
  &_bg img {
    width: 100%;
    display: block;
  }
  &_box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &_titlebox {
    margin-bottom: 2rem;
  }
  &_title {
    font-size: 3.2rem;
    font-weight: normal;
  }
  &_subtitle {
    font-size: 1.8rem;
    color: #565656;
    font-weight: normal;
    margin-top: .3rem;
  }
  &_desc {
    color: #323232;
    line-height: 1.6;
  }
}
</style>
