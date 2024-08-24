<template>
  <div id="projects" class="w-full mt-[30%] px-5 sm:px-16 relative flex flex-col justify-center">
    <div
      class="flex border-b border-b-zinc-900 py-4"
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="600"
    >
      <span class="text-5xl font-Lora interactive">Projetos</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left mt-12 gap-8 w-full">
      <div
        class="interactive flex flex-col justify-between w-full md:w-[300px] h-min-32 flex-wrap bg-white rounded-lg border border-neutral-500 shadow-md hover:shadow-2xl transition-shadow py-3 px-4"
        v-for="project in projects"
        v-motion
        :initial="{ opacity: 0, y: 120 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="150"
      >
        <div id="title" class="flex flex-wrap text-wrap items-center font-semibold text-lg font-Raleway">
          {{ project.title }}
        </div>

        <div id="stacks" class="flex font-Raleway font-semibold tracking-tight text-sm lowercase">
          <div class="flex items-center py-2" v-for="stack in project.stacks">
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
              class="flex items-center gap-1 font-Raleway font-semibold text-xs md:text-sm py-1 px-3 rounded-full bg-gray-primary text-white"
            >
              Ver projeto
              <Icon name="tabler:external-link" size="16" />
            </a>
          </div>

          <div class="flex" v-if="project.repoLink">
            <a
              :href="project.repoLink"
              target="_blank"
              class="flex items-center gap-1 font-Raleway font-semibold text-xs md:text-sm py-1 px-3 rounded-full bg-gray-primary text-white"
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
    title: "Portfólio (esse que você está)",
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
  {
    title: "Bookings API",
    repoLink: "https://github.com/rafaelffz/bookings-api",
    stacks: ["back-end"],
  },
]);
</script>

<style scoped></style>
