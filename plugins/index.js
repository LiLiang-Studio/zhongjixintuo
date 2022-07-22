import en from "~~/i18n/en"
import zhCn from "~~/i18n/zh-cn"

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const router = useRouter()
  const isEn = computed(() => route.query.lang === 'en')
  return {
    provide: {
      switchLang: () => {
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
      },
      isEn,
      t: computed(() => isEn.value ? en : zhCn)
    }
  }
})
