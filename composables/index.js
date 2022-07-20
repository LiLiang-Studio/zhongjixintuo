import zhCn from "~~/i18n/zh-cn"
import en from "~~/i18n/en"

export const useCounter = () => useState('counter', () => 0)
export const useColor = () => useState('color', () => 'pink')
export const useI18n = () => {
  const route = useRoute()
  return computed(() => {
    return ({ en, 'zh-cn': zhCn })[route.query.lang || 'zh-cn']
  })
}
