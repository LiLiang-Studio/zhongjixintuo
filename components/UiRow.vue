<template>
  <div :class="[cls, { 'is-fixed': fixedLayout }]">
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
  isRight: Boolean,
  fixedLayout: Boolean
})
const cls = 'ui-row'
</script>

<style lang="less">
@prefix: ui-row;
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
    color: #616161;
    font-size: 1.1rem;
  }
  &_title {
    font-size: 2.4rem;
    line-height: 1.2;
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
    line-height: 1.4;
  }
  &:not(.is-fixed) {
    @media screen and (max-width: 750px) {
      margin: 1rem;
      border: 1px solid rgba(0, 0, 0, .12);
      border-radius: 6px;
      overflow: hidden;
      .@{prefix} {
        &_box {
          position: static;
          transform: none;
          padding: 1rem;
        }
      }
    }
  }
}
</style>
