<template>
  <div>
    <!-- banner -->
    <img src="/images/ai/banner1.jpg" style="width:100%;">
    <UiRowCard v-bind="obj.imageVideoRecognition">
      <template #bg>
        <img src="/images/ai/1.png" alt="">
      </template>
      <UiTagList :items="obj.imageVideoRecognition.items" />
    </UiRowCard>
    <!-- 图像视频分类 -->
    <UiRowCard is-right v-bind="obj.imageVideoClassification">
      <template #bg>
        <img src="/images/ai/2.png" alt="">
      </template>
    </UiRowCard>
    <!-- 音视频增强 -->
    <UiRowCard v-bind="obj.AudioAndVideoEnhancement">
      <template #bg>
        <img src="/images/ai/3.png" alt="">
      </template>
    </UiRowCard>
    <!-- 自然语言理解 -->
    <UiRowCard is-right v-bind="obj.naturalLanguageUnderstanding" :box-class="`${cls}_nau_box`">
      <template #bg>
        <img src="/images/ai/4.png" alt="">
      </template>
      <ul>
        <li v-for="_ in obj.naturalLanguageUnderstanding.items" :key="_.title">
          <div class="img">
            <img :src="_.icon" alt="">
          </div>
          <div>{{ _.title }}</div>
        </li>
      </ul>
      <p v-html="obj.naturalLanguageUnderstanding.desc"></p>
    </UiRowCard>
    <!-- 文本机器人 -->
    <UiRowCard v-bind="obj.textRobot" :box-class="`${cls}_text_robot`">
      <template #bg>
        <img src="/images/ai/5.png" alt="">
      </template>
      <ul>
        <li v-for="_ in obj.textRobot.items" :key="_.title">
          <div class="img">
            <img :src="_.icon" alt="">
          </div>
          <div>{{ _.title }}</div>
        </li>
      </ul>
      <p v-html="obj.textRobot.desc"></p>
    </UiRowCard>
    <!-- 全平台支持 -->
    <UiPlatformSupport v-bind="videoPage.fullPlatformSupport" />
    <!-- 使用案例 -->
    <UiCaseCardBox v-bind="obj.useCase" />
  </div>
</template>

<script setup>
const cls = 'page-ai'
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.aiPage)
const videoPage = computed(() => langPkg.value.videoPage)
</script>

<style lang="less">
.page-ai {
  &_nau_box {
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
    @media screen and (max-width: 750px) {
      .img {
        width: 4rem;
        height: 4rem;
        border-radius: 4rem;
        padding: .2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 2.5rem;
          object-fit: contain;
        }
      }
    }
  }
  &_text_robot {
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
}
</style>
