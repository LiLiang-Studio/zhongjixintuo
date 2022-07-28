import en from "~~/i18n/en"
import zhCn from "~~/i18n/zh-cn"

export const useLangPkg = () => {
  const route = useRoute()
  const langPkg = useState('lang-pkg', () => zhCn)
  const updateValue = () => {
    langPkg.value = route.query.lang === 'en' ? en : zhCn
  }
  onMounted(updateValue)
  watch(route, updateValue)
  return langPkg
}
