<template>
  <div id="projects" class="mt-[30%] w-full px-16 mb-60 relative flex flex-col justify-center">
    <div
      class="flex border-b border-b-zinc-900 py-4"
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
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
