export default defineEventHandler(event => {
  return `Hello, ${event.context.params.name}`
})
