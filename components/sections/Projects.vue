<template>
  <div id="projects" class="scrollto w-full mt-[30%] px-5 sm:px-16 relative flex flex-col justify-center">
    <div
      class="flex border-b border-b-zinc-900 py-4"
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="600"
    >
      <span class="text-4xl sm:text-5xl font-Lora interactive">Projetos</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left mt-12 gap-8 w-full">
      <div
        class="interactive flex flex-col justify-between w-full md:w-[300px] h-min-32 flex-wrap bg-white rounded-lg border border-zinc-700 shadow-md hover:shadow-2xl transition-shadow p-3"
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
              class="flex items-center relative gap-1 z-10 w-max h-max font-Raleway font-semibold text-xs md:text-sm py-1 px-3 rounded-full bg-gray-primary text-white border border-black hover:text-black before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-white hover:before:h-full before:transition-all before:duration-200 overflow-hidden"
            >
              <span class="z-10">Ver projeto</span>
              <Icon name="tabler:external-link" size="16" />
            </a>
          </div>

          <div class="flex" v-if="project.repoLink">
            <a
              :href="project.repoLink"
              target="_blank"
              class="flex items-center relative gap-1 w-max font-Raleway font-semibold text-xs md:text-sm py-1 px-3 rounded-full bg-gray-primary text-white border border-black hover:text-black before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-white hover:before:h-full before:transition-all before:duration-200 overflow-hidden"
            >
              <span class="z-10">Ver repositório</span>
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
    title: "Portfólio v3 (atual)",
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
  {
    title: "Users Auth API",
    repoLink: "https://github.com/rafaelffz/api-users-auth",
    stacks: ["back-end"],
  },
  {
    title: "Gam3r.store",
    repoLink: "https://github.com/rafaelffz/gam3r.store",
    stacks: ["front-end"],
  },
  {
    title: "Extreme Week 2",
    repoLink: "https://github.com/rafaelffz/extreme-week2",
    liveLink: "https://rafaelffz-extweek2.vercel.app/",
    stacks: ["front-end", "back-end"],
  },
]);
</script>
