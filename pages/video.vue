<template>
  <div :class="cls">
    <!-- 我们能做些什么？ -->
    <UiRowCard fixed-layout :box-class="`${cls}_banner_box`" :title="obj.bannerTitle">
      <template #bg>
        <img src="/images/video/banner1.png" alt="">
      </template>
    </UiRowCard>
    <!-- 人像美颜 -->
    <UiRowCard v-bind="obj.portraitBeauty">
      <template #bg>
        <img src="/images/video/banner2.png" alt="">
      </template>
    </UiRowCard>
    <VideoQualityImprovement v-bind="obj.qualityImprovement" />
    <!-- 视频滤镜 -->
    <UiRowCard is-right v-bind="obj.videoFilter" :box-style="{left: '60%'}">
      <template #bg>
        <img src="/images/video/banner3.png" alt="">
      </template>
      <UiTagList :items="obj.videoFilter.items" />
    </UiRowCard>
    <!-- 人脸特效 -->
    <UiRowCard v-bind="obj.faceEffect">
      <template #bg>
        <img src="/images/video/banner4.png" alt="">
      </template>
    </UiRowCard>
    <!-- 3D卡通驱动 -->
    <UiRowCard is-right v-bind="obj.cartoonDriver" :box-style="{left: '60%'}">
      <template #bg>
        <img src="/images/video/banner5.png" alt="">
      </template>
    </UiRowCard>
    <!-- 人脸检测对齐 -->
    <UiRowCard v-bind="obj.faceDetectionAlignment">
      <template #bg>
        <img src="/images/video/banner6.png" alt="">
      </template>
    </UiRowCard>
    <!-- 视频人脸识别 -->
    <UiRowCard is-right v-bind="obj.faceRecognition">
      <template #bg>
        <img src="/images/video/banner7.png" alt="">
      </template>
    </UiRowCard>
    <!-- 视频虚拟背景 -->
    <UiRowCard v-bind="obj.virtualBackground">
      <template #bg>
        <img src="/images/video/banner8.png" alt="">
      </template>
    </UiRowCard>
    <!-- 全平台支持 -->
    <UiRowCard is-right v-bind="obj.fullPlatformSupport">
      <template #bg>
        <img src="/images/video/banner9.png" alt="">
      </template>
    </UiRowCard>
    <!-- 5G视频质量监测管理系统 -->
    <UiRowCard is-right v-bind="obj.qualityMms" :box-class="`${cls}_qmms_box`">
      <template #bg>
        <img src="/images/video/banner10.png" alt="">
      </template>
    </UiRowCard>
    <!-- 5G 智能视频客服业务系统 -->
    <UiRowCard v-bind="obj.smartVideoCss">
      <template #bg>
        <img src="/images/video/banner8.png" alt="">
      </template>
    </UiRowCard>
    <!-- 高清视频会议系统 -->
    <UiRowCard is-right v-bind="obj.conferenceSystem" :box-style="{left: '60%'}">
      <template #bg>
        <img src="/images/video/banner12.png" alt="">
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
  &_case {
    padding: 3rem 10%;
    &_title {
      text-align: center;
      font-size: 2.4rem;
      margin-bottom: 3rem;
    }
  }
}
</style>
