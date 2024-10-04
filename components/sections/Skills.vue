<template>
  <div id="skills" class="scrollto w-full px-5 sm:px-16 mt-[30%] relative flex flex-col items-center justify-center">
    <div
      class="flex w-full items-center justify-center border-b border-b-zinc-900 py-4 mb-4"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="600"
    >
      <span class="text-4xl sm:text-5xl font-Lora interactive">Habilidades e Tecnologias</span>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-5 mt-8 uppercase w-full md:w-3/4 lg:w-1/2">
      <div
        class="skill-item transition-colors duration-200 overflow-hidden relative flex items-center justify-center py-3 px-6 bg-[#c5c3c0] rounded-md z-10 cursor-default interactive hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#313131] before:transition-transform before:-translate-x-[105%] before:duration-200 before:ease-in-out before:hover:translate-x-0"
        v-for="skill in skills"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="800"
        :delay="150"
      >
        <span class="font-Raleway font-bold text-xs -tracking-tighter z-10">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = ref<string[]>([
  "html",
  "css",
  "javascript",
  "git",
  "github",
  "vue",
  "pinia",
  "vuetify",
  "nuxt",
  "typescript",
  "tailwindcss",
  "node",
  "fastify",
  "react",
  "prisma",
  "zod",
  "vercel",
  "jwt",
]);
</script>
