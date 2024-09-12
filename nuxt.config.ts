import { DefineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/firebase.client.ts'],
})