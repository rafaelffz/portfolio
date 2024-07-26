<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-center overflow-hidden !scroll-smooth">
    <div class="pt-[12%] h-[calc(100vh-44px)] presentation interactive">
      <div
        class="text-6xl font-Lora leading-tight tracking-tight"
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1200"
        :delay="2000"
      >
        Olá! Eu sou <span class="font-normal">Rafael,</span>
      </div>
      <div
        class="text-6xl font-Lora leading-tight tracking-tight"
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1200"
        :delay="2150"
      >
        <span>desenvolvedor front-end.</span>
      </div>

      <div class="mt-44 interactive flex flex-col items-center justify-center">
        <span class="tet-sm font-Raleway font-medium">role para mais</span>
        <Icon class="mt-12 floating-animation" name="bi:chevron-down" size="16" />
      </div>
    </div>

    <!-- SOBRE -->
    <div id="about" class="mt-72 w-full px-16 mb-60 relative flex flex-col justify-center">
      <div
        class="flex border-b border-b-zinc-900 py-4 pl-2"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="600"
      >
        <span class="text-5xl font-Lora interactive">Sobre mim</span>
      </div>

      <div class="flex text-left mt-8">
        <div
          class="w-1/2 font-Raleway font-normal text-xl leading-normal pl-2 interactive"
          v-motion
          :initial="{ opacity: 0, y: 120 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="150"
        >
          Sou um desenvolvedor front-end cursando o 3º ano do ensino médio. Apaixonado por tecnologia, estou sempre
          buscando me aperfeiçoar e aprender novas ferramentas para expandir meu conhecimento e habilidades, com o
          objetivo de ajudar as pessoas a resolverem seus problemas.
        </div>

        <div
          class="absolute left-2/3 top-0 interactive"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :duration="800"
        >
          <img src="../assets/images/boy-holding-laptop.png" />
        </div>
      </div>
    </div>

    <!-- HABILIDADES -->
    <div id="skills" class="w-full px-16 mt-60 pb-10 relative flex flex-col items-center justify-center">
      <div
        class="flex w-full items-center justify-center border-b border-b-zinc-900 py-4 pl-2 mb-4"
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

    <!-- PROJETOS -->
    <div id="projects" class="mt-72 w-full px-16 mb-60 relative flex flex-col justify-center">
      <div
        class="flex border-b border-b-zinc-900 py-4 pl-2"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="600"
      >
        <span class="text-5xl font-Lora interactive">Projetos</span>
      </div>

      <div class="flex flex-wrap text-left mt-12 gap-8 w-full">
        <div
          class="interactive flex flex-col justify-between w-[320px] flex-wrap h-32 bg-white rounded-lg border border-gray-primary shadow-md hover:shadow-2xl transition-shadow py-3 px-4"
          v-for="project in projects"
          v-motion
          :initial="{ opacity: 0, y: 120 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="150"
        >
          <div id="title" class="flex items-center font-semibold text-lg font-Raleway">
            {{ project.title }}
          </div>

          <div id="stacks" class="flex font-Raleway font-semibold tracking-tight text-sm lowercase">
            <div class="flex items-center" v-for="stack in project.stacks">
              <Icon name="mdi:chevron-double-left" size="16" class="bg-blue-700" />
              <span>{{ stack }}</span>
              <Icon name="mdi:chevron-double-right" size="16" class="bg-blue-700" />
            </div>
          </div>

          <div class="flex justify-between">
            <div class="flex" v-if="project.liveLink">
              <a
                :href="project.liveLink"
                target="_blank"
                class="flex items-center gap-1 font-Raleway font-semibold text-sm py-1 px-3 rounded-full bg-gray-primary text-white"
              >
                Ver projeto
                <Icon name="tabler:external-link" size="16" />
              </a>
            </div>

            <div class="flex" v-if="project.repoLink">
              <a
                :href="project.repoLink"
                target="_blank"
                class="flex items-center gap-1 font-Raleway font-semibold text-sm py-1 px-3 rounded-full bg-gray-primary text-white"
              >
                Ver repositório
                <Icon name="tabler:external-link" size="18" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTATO -->
    <div id="projects" class="mt-52 w-full px-16 mb-20 relative flex flex-col justify-center">
      <div
        class="flex border-b border-b-zinc-900 py-4 pl-2"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="600"
      >
        <span class="text-5xl font-Lora interactive">Fale comigo!</span>
      </div>

      <div class="border flex justify-between mt-16 border-red-600">
        <div class="flex w-[410px] flex-col gap-5 border border-red-600">
          <div
            @click="contact.link ? openContact(contact.link) : ''"
            class="cursor-pointer flex items-center border-2 border-gray-primary bg-white max-w-[410px] justify-between py-2 px-4 interactive hover:shadow-xl transition-shadow"
            v-for="contact in contacts"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{ opacity: 1, x: 0 }"
            :duration="600"
            :delay="150"
          >
            <div class="flex gap-3 items-center">
              <Icon :name="contact.icon" size="26" />

              <div class="flex font-Raleway font-bold text-normal self-end">{{ contact.title }}</div>
            </div>

            <div>
              <Icon name="tabler:external-link" size="26" />
            </div>
          </div>
        </div>

        <div class="border border-red-600">
          <form>
            <div class="flex flex-col items-start font-Raleway font-medium text-base">
              <label for="name">Nome<span class="text-red-600">*</span></label>
              <input type="text" id="name" class="w-full border-2 border-gray-primary rounded-md py-2 px-2" />
            </div>

            <div class="flex flex-col items-start font-Raleway font-medium text-base">
              <label for="name">Email<span class="text-red-600">*</span></label>
              <input type="email" id="email" class="w-full border-2 border-gray-primary rounded-md py-2 px-2" />
            </div>

            <div class="flex flex-col items-start font-Raleway font-medium text-base">
              <label for="name">Telefone</label>
              <input type="tel" id="phone" class="w-full border-2 border-gray-primary rounded-md py-2 px-2" />
            </div>

            <div>
              <label for="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                class="w-full border-2 border-gray-primary rounded-md py-2 px-2"
              ></textarea>
            </div>

            <button class="w-full bg-red-600 text-white py-2 px-4 rounded-md">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Cursor />
</template>

<script setup lang="ts">
import { usePreloaderStore } from "~/stores/preloader";

const preloaderStore = usePreloaderStore();

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

interface Project {
  title: string;
  repoLink: string;
  liveLink?: string;
  stacks: string[];
}

const projects = ref<Project[]>([
  {
    title: "Portfólio (esse em que você está)",
    repoLink: "https://github.com/rafaelffz/portfolio",
    liveLink: "https://rafaelffz.vercel.app",
    stacks: ["front-end"],
  },
  {
    title: "Portfólio v2",
    repoLink: "https://github.com/rafaelffz/portfolio-v2",
    liveLink: "https://rafaelffz-portfolio-v2.vercel.app/",
    stacks: ["front-end"],
  },
  {
    title: "Portfólio v1",
    repoLink: "https://github.com/rafaelffz/portfolio-v1",
    liveLink: "https://rafaelffz.github.io/portfolio-v1/",
    stacks: ["front-end"],
  },
  {
    title: "NLW-Expert-Nodejs",
    repoLink: "https://github.com/rafaelffz/nlw-expert-nodejs",
    stacks: ["back-end"],
  },
]);

interface Contact {
  icon: string;
  link: string;
  title: string;
}

const contacts = ref<Contact[]>([
  {
    icon: "mdi:instagram",
    link: "https://instagram.com/ffzrafaa_",
    title: "Instagram",
  },
  {
    icon: "ph:github-logo-bold",
    link: "https://github.com/rafaelffz",
    title: "GitHub",
  },
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/rafaelffz/",
    title: "LinkedIn",
  },
]);

function openContact(link: string) {
  window.open(link, "_blank");
}

onMounted(() => {
  nextTick(() => {
    preloaderStore.complete();
    console.log(preloaderStore.isCompleted);
  });
});
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
