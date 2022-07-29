<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" :src="background">
    <div :class="`${cls}_box`">
      <img :class="`${cls}_image`" :src="image">
      <img :class="`${cls}_icon`" :src="icon">
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  background: String,
  image: String,
  isVideo: Boolean
})
const cls = 'home-business-item-image'
</script>

<style lang="less">
@prefix: home-business-item-image;
.@{prefix} {
  position: relative;
  &_box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 1em;
    display: flex;
    align-items: center;
  }
  &_image, &_bg {
    display: block;
    width: 100%;
  }
  &_icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    transform: translateY(-30%);
  }
  @media screen and (max-width: 750px) {
    .@{prefix} {
      &_bg {
        visibility: hidden;
      }
    }
  }
}
</style>
