import en from "~~/i18n/en"
import zhCn from "~~/i18n/zh-cn"

export const useLangPkg = () => {
  const route = useRoute()
  const router = useRouter()

  const isEn = useState('is-en', () => false)
  const langPkg = useState('lang-pkg', () => zhCn)

  const switchLang = () => {
    isEn.value
      ? router.replace({
        path: route.path,
        query: { ...route.query, lang: undefined }
      })
      : router.replace({
        path: route.path,
        query: { ...route.query, lang: 'en' }
      })
  }

  const getTo = url => {
    const r = router.resolve(url)
    return router.resolve({
      path: r.path,
      query: {
        ...r.query,
        lang: isEn.value ? 'en' : undefined
      }
    }).href
  }

  const updateValue = () => {
    isEn.value = route.query.lang === 'en'
    langPkg.value = isEn.value ? en : zhCn
  }

  onMounted(updateValue)
  watch(route, updateValue)

  return { langPkg, isEn, switchLang, getTo }
}
