// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { 
  //   enabled: true 
  // },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/styles.scss'
  ],
  build: {
    transpile: ['vuetify'],
  },
  // vite: {
  //   define: {
  //     'process.env.DEBUG': false,
  //   },
  // },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  imports: {
    dirs: ['stores'],
  },
})
