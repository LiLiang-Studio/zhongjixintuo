import en from "~~/i18n/en"
import zhCn from "~~/i18n/zh-cn"

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const router = useRouter()
  return {
    provide: {
      hello: msg => `Hello ${msg}`,
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
      t: computed(() => route.query.lang === 'en' ? en : zhCn)
    }
  }
})
