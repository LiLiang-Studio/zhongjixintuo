<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" src="~~/assets/video/banner3.png" alt="banner3">
    <div :class="`${cls}_box`">
      <h2 :class="`${cls}_title`">{{ $t.value.videoPage.videoFilter.title }}</h2>
      <ul :class="`${cls}_list`">
        <li v-for="_ in $t.value.videoPage.videoFilter.items" :key="_">{{ _ }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const cls = 'video-filter'
</script>

<style lang="less">
.video-filter {
  position: relative;
  &_bg {
    display: block;
    width: 100%;
  }
  &_box {
    position: absolute;
    top: 50%;
    left: 59%;
    transform: translateY(-50%);
  }
  &_title {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
  &_list {
    width: 330px;
    li {
      display: inline-block;
      padding: .5rem .8rem;
      border: 1px solid currentColor;
      border-radius: 2em;
      text-align: center;
      margin: 0 1rem 1rem 0;
    }
  }
}
</style>
