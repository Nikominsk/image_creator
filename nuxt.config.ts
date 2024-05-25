// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ],
    runtimeConfig: {
      public: {
        BREVO_API_KEY: process.env.BREVO_API_KEY 
      }
    },
})
