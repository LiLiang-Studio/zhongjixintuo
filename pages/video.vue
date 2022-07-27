<template>
  <div :class="cls">
    <!-- 我们能做些什么？ -->
    <VideoCard :box-class="`${cls}_banner_box`" :title="obj.bannerTitle">
      <template #bg>
        <img src="~~/assets/video/banner1.png" alt="">
      </template>
    </VideoCard>
    <!-- 人像美颜 -->
    <VideoCard v-bind="obj.portraitBeauty">
      <template #bg>
        <img src="~~/assets/video/banner2.png" alt="">
      </template>
    </VideoCard>
    <VideoQualityImprovement />
    <!-- 视频滤镜 -->
    <VideoCard is-right v-bind="obj.videoFilter" :box-style="{left: '60%'}">
      <template #bg>
        <img src="~~/assets/video/banner3.png" alt="">
      </template>
      <UiTagList :items="obj.videoFilter.items" />
    </VideoCard>
    <!-- 人脸特效 -->
    <VideoCard v-bind="obj.faceEffect">
      <template #bg>
        <img src="~~/assets/video/banner4.png" alt="">
      </template>
    </VideoCard>
    <!-- 3D卡通驱动 -->
    <VideoCard is-right v-bind="obj.cartoonDriver" :box-style="{left: '60%'}">
      <template #bg>
        <img src="~~/assets/video/banner5.png" alt="">
      </template>
    </VideoCard>
    <!-- 人脸检测对齐 -->
    <VideoCard v-bind="obj.faceDetectionAlignment">
      <template #bg>
        <img src="~~/assets/video/banner6.png" alt="">
      </template>
    </VideoCard>
    <!-- 视频人脸识别 -->
    <VideoCard is-right v-bind="obj.faceRecognition">
      <template #bg>
        <img src="~~/assets/video/banner7.png" alt="">
      </template>
    </VideoCard>
    <!-- 视频虚拟背景 -->
    <VideoCard v-bind="obj.virtualBackground">
      <template #bg>
        <img src="~~/assets/video/banner8.png" alt="">
      </template>
    </VideoCard>
    <!-- 全平台支持 -->
    <VideoCard is-right v-bind="obj.fullPlatformSupport">
      <template #bg>
        <img src="~~/assets/video/banner9.png" alt="">
      </template>
    </VideoCard>
    <!-- 5G视频质量监测管理系统 -->
    <VideoCard is-right v-bind="obj.qualityMms" :box-class="`${cls}_qmms_box`">
      <template #bg>
        <img src="~~/assets/video/banner10.png" alt="">
      </template>
    </VideoCard>
    <!-- 5G 智能视频客服业务系统 -->
    <VideoCard v-bind="obj.smartVideoCss">
      <template #bg>
        <img src="~~/assets/video/banner8.png" alt="">
      </template>
    </VideoCard>
    <!-- 高清视频会议系统 -->
    <VideoCard is-right v-bind="obj.conferenceSystem" :box-style="{left: '60%'}">
      <template #bg>
        <img src="~~/assets/video/banner12.png" alt="">
      </template>
    </VideoCard>
    <VideoUseCase />
  </div>
</template>

<script setup>
const cls = 'page-video'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.videoPage)
</script>

<style lang="less">
.page-video {
  &_banner_box {
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
  &_qmms_box {
    h2, p {
      color: #fff;
    }
  }
}
</style>
