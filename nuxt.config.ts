// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  ssr: false,

  app: {
    head: {
      title: "Rafael | Front-end Developer",
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content:
            "Olá! Eu sou o Rafael, um desenvolvedor front-end focado em criar interfaces modernas e responsivas. Conheça meu trabalho!",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
        { rel: "canonical", href: "https://rafaelffz.vercel.app" },
      ],
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
    "nuxt-particles",
  ],

  particles: {
    lazy: false,
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-07-26",
});
