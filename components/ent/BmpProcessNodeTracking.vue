<template>
  <div :class="cls">
    <h2 :class="`${cls}_title`">{{ title }}</h2>
    <ul>
      <li v-for="_ in items" :key="_.title">
        <div class="content">
          <h3 class="title">{{ _.title }}</h3>
          <p class="desc">{{ _.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: { type: Array, default: () => [] }
})
const cls = 'ent-bmp-process-node-tracking'
</script>

<style lang="less">
.ent-bmp-process-node-tracking {
  background-color: #F5FAFF;
  padding: 3rem 10%;
  &_title {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
  li {
    width: 50%;
    padding-bottom: 3rem;
    position: relative;
    &:nth-child(odd) {
      text-align: right;
      .content {
        padding-right: 1.5rem;
      }
    }
    &:nth-child(even) .content {
      position: relative;
      left: 100%;
      padding-left: 1.5rem;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: -7px;
      width: 14px;
      height: 14px;
      border-radius: 14px;
      border: 1px solid #417CFF;
      background-color: #fff;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
      width: 4px;
      background-color: #417CFF;
    }
    &:last-child {
      padding-bottom: 0;
      &::after {
        display: none;
      }
    }
  }
  .title {
    color: #417CFF;
    font-size: 1.1rem;
    font-weight: normal;
    margin-bottom: .8rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 3rem 1rem;
  }
}
</style>
