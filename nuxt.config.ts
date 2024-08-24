// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  ssr: false,

  app: {
    head: {
      title: "Rafael | Front-end Developer",
      htmlAttrs: { lang: "pt-br" },
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },

  devtools: { enabled: false },

  typescript: {
    typeCheck: true,
  },

  plugins: ["~/plugins/vue-the-mask.js"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@formkit/auto-animate",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
    'nuxt-particles'
  ],

  particles: {
    lazy: false,
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-07-26",
});
