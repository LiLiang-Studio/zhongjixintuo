export default defineEventHandler(event => {
  const config = useRuntimeConfig()
  const cookies = useCookies(event)
  return { key: config.KEY, cookies }
})
