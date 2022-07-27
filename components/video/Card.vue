<template>
  <div :class="cls">
    <div :class="`${cls}_bg`">
      <slot name="bg" />
    </div>
    <div :class="[`${cls}_box`, { isRight }, boxClass]" :style="boxStyle">
      <div :class="`${cls}_titlebox`">
        <h2 v-if="title" :class="`${cls}_title`" v-html="title"></h2>
        <h3 v-if="subTitle" :class="`${cls}_subtitle`">{{ subTitle }}</h3>
      </div>
      <div v-if="$slots.default || desc" :class="`${cls}_content`">
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
  boxStyle: {},
  isRight: Boolean
})
const cls = 'video-card'
</script>

<style lang="less">
@prefix: video-card;
.@{prefix} {
  position: relative;
  &_bg img {
    width: 100%;
    display: block;
  }
  &_box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 55%;
    left: 10%;
    &.isRight {
      left: 55%;
      right: 10%;
    }
  }
  &_content {
    margin-top: 2rem;
  }
  &_title {
    font-size: 2.4rem;
    line-height: 1;
    text-transform: capitalize;
  }
  &_subtitle {
    font-size: 1.6rem;
    color: #565656;
    font-weight: normal;
    margin-top: .3rem;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
  }
  &_desc {
    color: #616161;
    line-height: 1.4;
  }
  @media screen and (max-width: 1080px) {
    .@{prefix}_title {
      font-size: 2rem;
    }
    .@{prefix}_content {
      margin-top: 1.6rem;
    }
  }
  @media screen and (max-width: 930px) {
    .@{prefix}_title {
      font-size: 1.6rem;
    }
    .@{prefix}_subtitle {
      font-size: 1.2rem;
    }
    .@{prefix}_content {
      margin-top: 1.2rem;
    }
  }
}
</style>
