<template>
  <div id="skills" class="w-full px-16 relative flex flex-col items-center justify-center">
    <div
      class="flex w-full items-center justify-center border-b border-b-zinc-900 py-4 mb-4"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="600"
    >
      <span class="text-5xl font-Lora interactive">Habilidades e Tecnologias</span>
    </div>

    <div class="flex flex-wrap pb-24 items-center justify-center gap-5 mt-8 uppercase w-1/2">
      <div
        class="skill-item flex py-3 px-6 bg-[#c5c3c0] rounded-md z-10 cursor-default interactive"
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
  "vuetify",
  "nuxt",
  "typescript",
  "tailwindcss",
  "node",
]);
</script>

<style scoped>
.skill-item {
  position: relative;
  overflow: hidden;
  transition: color 0.2s;
}

.skill-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #313131;
  transform: translateX(-105%);
  transition: transform 0.2s;
}

.skill-item:hover::before {
  transform: translateX(0);
}

.skill-item:hover {
  color: white;
}
</style>
