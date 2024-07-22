<template>
  <div class="w-full h-full mt-44 flex flex-col items-center justify-center text-center overflow-hidden">
    <div class="apresentation interactive text-6xl font-Lora leading-tight tracking-tight">
      Olá! Eu sou <span class="font-normal">Rafael</span>, <br />
      <span>desenvolvedor front-end.</span>
    </div>

    <div class="mt-36 interactive flex flex-col items-center justify-center">
      <span class="font-Raleway font-medium">role para mais</span>
      <Icon class="mt-12 floating-animation" name="bi:chevron-down" size="16" />
    </div>

    <!-- SOBRE -->
    <div id="about" class="mt-72 w-full px-11 pb-28 relative flex flex-col justify-center">
      <div class="flex border-b border-b-zinc-900 py-4 pl-2">
        <span class="text-4xl font-Lora interactive">Sobre mim</span>
      </div>

      <div class="flex text-left mt-12">
        <div class="w-1/2 font-Raleway font-normal text-xl leading-normal pl-2 interactive">
          Sou um desenvolvedor front-end cursando o 3º ano do Ensino Médio. Apaixonado por tecnologia, estou sempre
          buscando me aperfeiçoar e aprender novas ferramentas para expandir meu conhecimento e habilidades, com o
          objetivo de ajudar as pessoas a resolver seus problemas.
        </div>

        <div class="absolute left-2/3 top-0 interactive">
          <img src="../assets/images/boy-holding-laptop.png" />
        </div>
      </div>
    </div>

    <div class="my-40 interactive">
      <Icon class="floating-animation" name="bi:chevron-down" size="18" />
    </div>

    <!-- HABILIDADES -->
    <div id="skills" class="w-full px-11 pb-28 relative flex flex-col justify-center">
      <div class="flex border-b border-b-zinc-900 py-4 pl-2 mb-4">
        <span class="text-4xl font-Lora interactive">Habilidades e Tecnologias</span>
      </div>

      <div class="flex flex-wrap gap-5 uppercase ml-2 w-3/5">
        <div
          class="skill-item w-max flex items-center py-2 px-5 bg-[#c5c3c0] rounded-md z-10 cursor-default"
          v-for="skill in skills"
        >
          <span class="font-Raleway font-bold text-xs -tracking-tighter z-10">{{ skill }}</span>
        </div>
      </div>

      <img src="../assets/images/3d-code-editing.gif" class="absolute left-2/3 -top-40 z-10" />
    </div>
  </div>
  <Cursor />
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
]);
</script>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.floating-animation {
  animation: floating 3s infinite;
}

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
