<template>
  <VideoCard box-class="video-banner_box" :title="$t.value.videoPage.bannerTitle">
    <template #bg>
      <img src="~~/assets/video/banner1.png" alt="">
    </template>
  </VideoCard>
</template>

<style lang="less">
.video-banner_box {
  left: 25% !important;
  right: auto !important;
  h2 {
    font-size: 2rem;
    color: #fff;
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }
  }
}
</style>
