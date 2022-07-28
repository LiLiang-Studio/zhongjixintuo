export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const router = useRouter()
  const isEn = () => route.query.lang === 'en'
  return {
    provide: {
      isEn,
      switchLang: () => {
        isEn()
          ? router.replace({
            path: route.path,
            query: { ...route.query, lang: undefined }
          })
          : router.replace({
            path: route.path,
            query: { ...route.query, lang: 'en' }
          })
      },
      getTo: url => {
        const r = router.resolve(url)
        return router.resolve({
          path: r.path,
          query: { ...r.query, lang: isEn() ? 'en' : undefined }
        }).href
      }
    }
  }
})
