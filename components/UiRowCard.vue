<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="[`${cls}_box`, boxClass]" :style="boxStyle">
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
      <div :class="`${cls}_bg`">
        <slot name="bg" />
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
const cls = 'ui-row-card'
</script>

<style lang="less">
@prefix: ui-row-card;
.@{prefix} {
  padding: 4rem 1rem;
  &:nth-child(odd) {
    background-color: #F8F8F8;
    .@{prefix} {
      &_box {
        order: 1;
        margin-right: 0;
        margin-left: 3rem;
      }
    }
  }
  &_inner {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &_bg img {
    width: 100%;
  }
  &_bg {
    width: 35%;
    text-align: center;
    iframe {
      width: 100%;
      max-width: 520px;
    }
  }
  &_box {
    flex: 1;
    width: 0;
    margin-right: 3rem;
  }
  &_content {
    margin-top: 2rem;
    color: #616161;
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
    line-height: 1.6;
  }
  @media screen and (max-width: 600px) {
    .@{prefix} {
      &_bg, &_box {
        width: 100%;
      }
      &_box {
        padding: 1rem;
        order: 1;
        margin: 0 !important;
      }
    }
  }
}
</style>
