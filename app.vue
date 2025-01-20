<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Rafael | Front-end Developer",
  ogTitle: "Rafael | Front-end Developer",
  description: "Olá! Eu sou o Rafael, um desenvolvedor front-end.",
  ogDescription: "Conheça meu trabalho como desenvolvedor front-end.",
  twitterSite: "@rafaaffz",
  ogType: "website",
  ogUrl: "https://rafaelffz.vercel.app",
  ogLocale: "pt_BR",
});
</script>
