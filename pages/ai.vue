<template>
  <div>
    <!-- banner -->
    <UiRowCard>
      <template #bg>
        <img src="~~/assets/ai/banner1.png" alt="">
      </template>
    </UiRowCard>
    <UiRowCard v-bind="obj.imageVideoRecognition">
      <template #bg>
        <img src="~~/assets/ai/banner2.png" alt="">
      </template>
      <UiTagList :items="obj.imageVideoRecognition.items" />
    </UiRowCard>
    <!-- 图像视频分类 -->
    <UiRowCard is-right v-bind="obj.imageVideoClassification">
      <template #bg>
        <img src="~~/assets/ai/banner3.png" alt="">
      </template>
    </UiRowCard>
    <!-- 音视频增强 -->
    <UiRowCard v-bind="obj.AudioAndVideoEnhancement">
      <template #bg>
        <img src="~~/assets/ai/banner4.png" alt="">
      </template>
    </UiRowCard>
    <!-- 自然语言理解 -->
    <UiRowCard is-right v-bind="obj.naturalLanguageUnderstanding" :box-class="`${cls}_nau_box`">
      <template #bg>
        <img src="~~/assets/ai/banner5.png" alt="">
      </template>
      <ul>
        <li v-for="_ in obj.naturalLanguageUnderstanding.items" :key="_.title">
          <img :src="_.icon" alt="">
          <div>{{ _.title }}</div>
        </li>
      </ul>
      <p v-html="obj.naturalLanguageUnderstanding.desc"></p>
    </UiRowCard>
    <!-- 文本机器人 -->
    <UiRowCard v-bind="obj.textRobot" :box-class="`${cls}_text_robot`">
      <template #bg>
        <img src="~~/assets/ai/banner6.png" alt="">
      </template>
      <ul>
        <li v-for="_ in obj.textRobot.items" :key="_.title">
          <img :src="_.icon" alt="">
          <div>{{ _.title }}</div>
        </li>
      </ul>
      <p v-html="obj.textRobot.desc"></p>
    </UiRowCard>
    <!-- 全平台支持 -->
    <UiRowCard is-right v-bind="videoPage.fullPlatformSupport">
      <template #bg>
        <img src="~~/assets/video/banner9.png" alt="">
      </template>
    </UiRowCard>
    <!-- 使用案例 -->
    <UiCaseCardBox v-bind="obj.useCase" />
  </div>
</template>

<script setup>
const cls = 'page-ai'
const { $t } = useNuxtApp()
const obj = computed(() => $t.value.aiPage)
const videoPage = computed(() => $t.value.videoPage)
</script>

<style lang="less">
.page-ai {
  &_nau_box {
    * {
      color: #fff;
    }
    ul {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin: 2rem 0;
      font-size: .9rem;
      img {
        height: 3rem;
      }
    }
  }
  &_text_robot {
    p {
      color: #616161;
    }
    ul {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin: 2rem 0;
      font-size: .9rem;
      color: #616161;
      img {
        height: 3rem;
      }
    }
  }
}
</style>
