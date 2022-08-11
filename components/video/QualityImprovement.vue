<template>
  <div :class="cls">
    <div :class="`${cls}_inner`">
      <div class="titlebox">
        <h2 class="title">{{ title }}</h2>
        <h3 class="subtitle">{{ subTitle }}</h3>
      </div>
      <div class="video">
        <iframe ref="myVideo" src='//player.bilibili.com/player.html?bvid=BV1Ed4y1K7cq&cid=800149506&page=1&share_source=copy_web' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe>
      </div>
      <p class="desc" v-html="desc"></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
  desc: String
})
const cls = 'video-quality-improvement'
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
  onWinResize()
  window.addEventListener('resize', onWinResize)
})
onUnmounted(() => {
  window.addEventListener('resize', onWinResize)
})
</script>

<style lang="less">
.video-quality-improvement {
  padding: 3rem 1rem;
  text-align: center;
  background: #f8f8f8;
  &_inner {
    max-width: 1200px;
    margin: auto;
  }
  .titlebox {
    margin-bottom: 3rem;
  }
  .title {
    font-size: 2.4rem;
    text-transform: capitalize;
    margin-bottom: .3rem;
  }
  .subtitle {
    font-size: 1.8rem;
    font-weight: normal;
    color: #565656;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
  }
  .desc {
    line-height: 1.6;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  iframe {
    width: 100%;
    max-width: 520px;
  }
}
</style>
