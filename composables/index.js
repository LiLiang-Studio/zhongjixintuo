import en from "~~/i18n/en"
import zhCn from "~~/i18n/zh-cn"

export const useCounter = () => useState('counter', () => 0)
export const useColor = () => useState('color', () => 'pink')

export const useI18n = () => {
  const route = useRoute()
  return computed(() => route.query.lang === 'en' ? en : zhCn)
}
