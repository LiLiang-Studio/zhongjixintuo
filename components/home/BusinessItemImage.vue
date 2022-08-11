<template>
  <div :class="cls">
    <img :class="`${cls}_bg`" :src="background">
    <div :class="`${cls}_box`">
      <iframe v-if="video" ref="myVideo" :src='video' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe>
      <img v-else :class="`${cls}_image`" :src="image">
      <img :class="`${cls}_icon`" :src="icon">
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  background: String,
  image: String,
  video: String
})
const cls = 'home-business-item-image'
const myVideo = ref()
const onWinResize = async () => {
  await nextTick()
  /** @type {HTMLIFrameElement} */
  const iframe = myVideo.value
  if (iframe) {
    iframe.style.height = (iframe.offsetWidth * 1080 / 1920) + 'px'
  }
}
onMounted(() => {
  setTimeout(onWinResize, 100)
  window.addEventListener('resize', onWinResize)
})
onUnmounted(() => {
  window.addEventListener('resize', onWinResize)
})
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
    justify-content: center;
  }
  iframe {
    width: 520px;
    max-width: 85%;
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
