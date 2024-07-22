// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Rafael | Front-end Developer",
      htmlAttrs: { lang: "pt-br" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }], 
    },
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@formkit/auto-animate",
    "@nuxt/fonts",
    "@nuxt/image"
  ],
  css: ["~/assets/css/main.css"],
});