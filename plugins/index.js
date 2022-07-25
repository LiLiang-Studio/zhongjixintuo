import en from "~~/i18n/en"
import zhCn from "~~/i18n/zh-cn"

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const router = useRouter()
  const isEn = computed(() => route.query.lang === 'en')
  return {
    provide: {
      switchLang: () => {
        if (isEn.value) {
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
      t: computed(() => isEn.value ? en : zhCn),
      getTo: url => {
        const r = router.resolve(url)
        return router.resolve({
          path: r.path,
          query: { ...r.query, lang: isEn.value ? 'en' : undefined }
        }).href
      }
    }
  }
})
