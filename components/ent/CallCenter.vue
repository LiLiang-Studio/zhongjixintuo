<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
        <img src="/images/enterprise/call_center.png" alt="">
      </div>
      <div :class="`${cls}_right`">
        <div>
          <h2 :class="`${cls}_title`">{{ title }}</h2>
          <p :class="`${cls}_desc`" v-html="desc"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String
})
const cls = 'ent-call-center'
</script>

<style lang="less">
@prefix: ent-call-center;
.@{prefix} {
  padding: 3rem 0;
  &_inner {
    display: flex;
    background-color: #417CFF;
    color: #fff;
  }
  &_left {
    flex: 1;
    width: 0;
    background-color: #F5FAFF;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 12rem;
    img {
      max-width: 100%;
      max-height: 90%;
    }
  }
  &_right {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  &_title {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  &_desc {
    line-height: 1.6;
  }
  @media screen and (max-width: 750px) {
    .@{prefix} {
      &_inner {
        display: block;
      }
      &_left {
        width: auto;
        border-radius: 0;
      }
      &_right {
        display: block;
        width: auto;
      }
    }
  }
}
</style>
