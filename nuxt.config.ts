// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['quasar/dist/quasar.prod.css', '@quasar/extras/material-icons/material-icons.css'],
  experimental: {
    viewTransition: true
  }
})
