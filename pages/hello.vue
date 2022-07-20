<template>
<div>
  <div>{{ data }}</div>
  <div>{{ $hello('test') }}</div>
  <div>{{ i18n.navMenu.video }}</div>
  <button @click="onSwitchLang">切换语言</button>
</div>
</template>

<script setup>
const data = await $fetch('/api/submit', {
  method: 'post',
  body: { test: 123 }
})
const { $hello } = useNuxtApp()
const i18n = useI18n()

const route = useRoute()
const router = useRouter()
const onSwitchLang = () => {
  if (route.query.lang === 'en') {
    router.replace({
      path: route.path,
      query: { ...route.query, lang: undefined }
    })
  } else {
    router.replace({
      path: route.path,
      query: { ...route.query, lang: 'en' }
    })
  }
}
</script>
