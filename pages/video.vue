<template>
  <div :class="cls">
    <img src="/images/video/benner.jpg" alt="" style="width:100%;">
    <!-- 人像美颜 -->
    <UiRowCard v-bind="obj.portraitBeauty">
      <template #bg>
        <img src="/images/video/1.png" alt="">
      </template>
    </UiRowCard>
    <!-- 视频质量提升 -->
    <UiRowCard v-bind="obj.qualityImprovement">
      <template #bg>
        <iframe ref="myVideo" src='//player.bilibili.com/player.html?bvid=BV1Ed4y1K7cq&cid=800149506&page=1&share_source=copy_web' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe>
      </template>
    </UiRowCard>
    <!-- 视频滤镜 -->
    <UiRowCard v-bind="obj.videoFilter">
      <template #bg>
        <img src="/images/video/2.png" alt="">
      </template>
      <UiTagList :items="obj.videoFilter.items" />
    </UiRowCard>
    <!-- 人脸特效 -->
    <UiRowCard v-bind="obj.faceEffect">
      <template #bg>
        <img src="/images/video/3.png" alt="">
      </template>
    </UiRowCard>
    <!-- 3D卡通驱动 -->
    <UiRowCard v-bind="obj.cartoonDriver">
      <template #bg>
        <img src="/images/video/4.png" alt="">
      </template>
    </UiRowCard>
    <!-- 人脸检测对齐 -->
    <UiRowCard v-bind="obj.faceDetectionAlignment">
      <template #bg>
        <img src="/images/video/5.png" alt="">
      </template>
    </UiRowCard>
    <!-- 视频人脸识别 -->
    <UiRowCard v-bind="obj.faceRecognition">
      <template #bg>
        <img src="/images/video/6.png" alt="">
      </template>
    </UiRowCard>
    <!-- 视频虚拟背景 -->
    <UiRowCard v-bind="obj.virtualBackground">
      <template #bg>
        <img src="/images/video/7.png" alt="">
      </template>
    </UiRowCard>
    <!-- 全平台支持 -->
    <UiPlatformSupport style="background:#fff;" v-bind="obj.fullPlatformSupport" />
    <!-- 5G视频质量监测管理系统 -->
    <UiRowCard v-bind="obj.qualityMms">
      <template #bg>
        <img src="/images/video/8.png" alt="">
      </template>
    </UiRowCard>
    <!-- 5G 智能视频客服业务系统 -->
    <UiRowCard v-bind="obj.smartVideoCss">
      <template #bg>
        <img src="/images/video/9.png" alt="">
      </template>
    </UiRowCard>
    <!-- 高清视频会议系统 -->
    <UiRowCard v-bind="obj.conferenceSystem">
      <template #bg>
        <img src="/images/video/10.png" alt="">
      </template>
    </UiRowCard>
    <!-- 使用案例 -->
    <UiCaseCardBox v-bind="obj.useCase" />
  </div>
</template>

<script setup>
const cls = 'page-video'
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.videoPage)

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
