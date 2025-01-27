// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module", "@nuxt/image", '@vueuse/nuxt',],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})