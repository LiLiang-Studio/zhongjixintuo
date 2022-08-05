/** @type {import("@nuxt/schema").RouterConfig} */
export default {
  scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0 }
}
