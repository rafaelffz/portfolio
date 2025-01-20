<template>
  <div id="about" class="scrollto w-full px-5 mt-[30%] sm:px-16 flex flex-col justify-center overflow-hidden">
    <MotionWrapper
      class="flex border-b border-b-zinc-900 w-full py-4"
      :initial="{ opacity: 0, x: -100 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="800"
    >
      <span class="text-4xl sm:text-5xl font-Lora interactive font-medium">Sobre mim</span>
    </MotionWrapper>

    <div class="flex justify-between w-full relative text-left mt-8">
      <MotionWrapper
        class="md:w-1/2 font-Raleway font-normal text-base sm:text-xl sm:leading-relaxed interactive"
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :duration="800"
        :delay="250"
      >
        <p class="">
          Meu nome é Rafael, tenho 18 anos e atualmente sou desenvolvedor front-end na empresa
          <span class="font-medium">CemiCloud</span>. Tenho uma grande paixão por aprender e acredito que isso é
          essencial para me tornar um profissional melhor, pois, ao adquirir novos conhecimentos, consigo resolver
          problemas mais desafiadores e enfrentar situações novas com mais confiança. <br />
          Sempre em busca de aprimoramento, estou constantemente explorando novas ferramentas e tecnologias,
          questionando até onde a inovação pode nos levar para melhorar a maneira como realizamos tarefas. Acredito que
          minha curiosidade é o que me impulsiona a continuar avançando, tanto profissionalmente quanto pessoalmente.
        </p>
      </MotionWrapper>

      <div
        class="md:absolute md:block hidden right-0 interactive"
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1000"
      >
        <img src="../../assets/images/boy-holding-laptop.png" class="w-full" />
      </div>
    </div>

    <div class="mt-[25%] flex flex-col justify-center w-full sm:w-full sm:px-0">
      <MotionWrapper
        class="flex border-b border-b-zinc-900 py-4"
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <span class="text-4xl sm:text-5xl font-Lora interactive font-medium">Experiência profissional</span>
      </MotionWrapper>

      <MotionWrapper
        class="mt-8 flex flex-col gap-12 w-full"
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="100"
      >
        <MotionWrapper
          class="flex flex-col gap-10"
          v-for="experience in experiences"
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="200"
        >
          <div class="flex flex-col md:flex-row justify-between md:items-center">
            <div class="flex flex-col items-start gap-2">
              <div class="font-Sans font-medium text-2xl md:text-3xl">{{ experience.company }}</div>

              <div class="capitalize border border-gray-primary px-2 py-1.5 rounded-lg text-xs font-Sans font-bold">
                {{ experience.position }}
              </div>

              <div class="w-full flex align-center justify-between pr-3 sm:hidden">
                <div class="uppercase font-bold font-Sans text-gray-primary">{{ experience.period }}</div>
                <div class="font-Sans font-medium text-sm">{{ experience.location }} ({{ experience.modality }})</div>
              </div>

              <div class="mb-1 flex flex-col">
                <ul
                  class="list-disc list-inside flex flex-col gap-1.5 font-Sans text-sm sm:text-base font-medium text-start"
                >
                  <li v-for="about in experience.about">
                    {{ about }}
                  </li>
                </ul>
              </div>

              <div class="flex flex-wrap gap-2 items-center">
                <div
                  class="items-center rounded-md capitalize text-xs font-Sans font-bold"
                  v-for="(tech, index) in experience.techs"
                  :key="index"
                >
                  <span class="text-blue-700">&lt;</span>
                  {{ tech }}
                  <span class="text-blue-700">&gt;</span>
                </div>
              </div>
            </div>

            <div class="hidden sm:flex flex-col w-1/3 text-end">
              <div class="font-Sans font-medium text-base whitespace-nowrap">
                {{ experience.location }} ({{ experience.modality }})
              </div>
              <div class="uppercase font-bold font-Sans text-gray-primary whitespace-nowrap">
                {{ experience.period }}
              </div>
            </div>
          </div>

          <MotionWrapper
            v-if="experience.previousPositions"
            v-for="previous in experience.previousPositions"
            class="flex flex-col md:flex-row justify-between md:items-center"
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="300"
          >
            <div class="flex flex-col items-start gap-2">
              <div class="capitalize border border-gray-primary px-2 py-1.5 rounded-lg text-xs font-Sans font-bold">
                {{ previous.position }}
              </div>

              <div class="w-full flex align-center justify-between pr-3 sm:hidden">
                <div class="uppercase font-bold font-Sans text-gray-primary">{{ previous.period }}</div>
                <div class="font-Sans font-medium text-sm">{{ previous.location }} ({{ previous.modality }})</div>
              </div>

              <div class="mb-1 flex flex-col">
                <ul
                  class="list-disc list-inside flex flex-col gap-1.5 font-Sans text-sm sm:text-base font-medium text-start"
                >
                  <li v-for="about in previous.about">
                    {{ about }}
                  </li>
                </ul>
              </div>

              <div class="flex flex-wrap gap-2 items-center">
                <div
                  class="items-center rounded-md capitalize text-xs font-Sans font-bold"
                  v-for="(tech, index) in previous.techs"
                  :key="index"
                >
                  <span class="text-blue-700">&lt;</span>
                  {{ tech }}
                  <span class="text-blue-700">&gt;</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col w-1/3 items-end mt-2">
              <div class="hidden sm:flex flex-col text-end">
                <div class="font-Sans font-medium text-base whitespace-nowrap">
                  {{ previous.location }} ({{ previous.modality }})
                </div>
                <div class="uppercase font-bold font-Sans text-gray-primary whitespace-nowrap">
                  {{ previous.period }}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </MotionWrapper>
      </MotionWrapper>
    </div>

    <div class="mt-[25%] flex flex-col justify-center w-full sm:w-full sm:px-0">
      <MotionWrapper
        class="flex border-b border-b-zinc-900 py-4"
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <span class="text-4xl sm:text-5xl font-Lora interactive font-medium">Experiência Acadêmica</span>
      </MotionWrapper>

      <div class="flex flex-col gap-10 w-full mt-8">
        <MotionWrapper
          v-for="experience in academicExperiences"
          class="border border-gray-primary rounded-lg p-4"
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="100"
        >
          <div class="flex flex-col md:flex-row justify-between md:items-center">
            <div class="flex flex-col items-start gap-2">
              <div class="font-Sans font-medium text-2xl md:text-3xl">{{ experience.institution }}</div>

              <div
                class="capitalize border border-gray-primary px-2 py-1.5 my-2 rounded-lg text-xs font-Sans font-bold"
              >
                {{ experience.degree }}
              </div>

              <div class="w-full flex align-center justify-between pr-3 sm:hidden">
                <div class="uppercase font-bold font-Sans text-gray-primary">{{ experience.period }}</div>
                <div class="font-Sans font-medium text-sm">{{ experience.location }}</div>
              </div>
            </div>

            <div class="hidden sm:flex flex-col w-1/3 text-end">
              <div class="font-Sans font-medium text-base whitespace-nowrap">
                {{ experience.location }}
              </div>
              <div class="uppercase font-bold font-Sans text-gray-primary whitespace-nowrap">
                {{ experience.period }}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>

    <div class="mt-[20%] flex items-center justify-center w-full">
      <a href="/cv-rafaelffz.pdf" download="cv-rafaelffz.pdf"
        ><MotionWrapper
          :initial="{ opacity: 0, x: -100 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
          class="cursor-pointer border border-gray-primary relative w-max px-6 flex items-center text-base gap-2 py-2 rounded-full font-medium overflow-hidden hover:text-white before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:w-full before:h-0 before:transition-all before:duration-200 before:bg-gray-primary hover:before:h-full"
        >
          <span class="relative">Baixe o meu CV</span>
          <Icon name="material-symbols:download-rounded" size="24" /> </MotionWrapper
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Experience {
  company: string;
  location: string;
  modality: string;
  position: string;
  about: string[];
  techs: string[];
  period: string;
  previousPositions?: Omit<Experience, "company">[];
}

const experiences: Experience[] = [
  {
    company: "CemiCloud",
    location: "Bilac - BR",
    modality: "remoto",
    position: "Desenvolvedor Front-End Jr.",
    about: [
      "Desenvolvimento de interfaces interativas e responsivas com Vue 3, utilizando Pinia para gerenciamento de estado e TypeScript para maior robustez e escalabilidade do código",
      "Criação e estilização de componentes customizados e reutilizáveis com Vuetify",
      "Integração de APIs REST para consumo de dados",
      "Colaboração com a equipe para corrigir bugs e implementar melhorias no código",
    ],
    techs: ["JavaScript", "TypeScript", "VueJS", "Vuetify", "Pinia", "Axios", "Git", "GitHub"],
    period: "jan 2025 ~ atual",
    previousPositions: [
      {
        location: "Bilac - BR",
        modality: "remoto",
        position: "Estágio Desenvolvedor Front-End",
        about: [
          "Desenvolvimento e manutenção de páginas web responsivas, focadas em boa experiência do usuário",
          "Integração de APIs REST para consumo de dados",
          "Criação de layouts utilizando Vue 2 e Vue 3, garantindo fidelidade ao design proposto",
        ],
        techs: ["JavaScript", "VueJS", "Vuetify", "Axios", "Git", "GitHub"],
        period: "dez 2023 ~ jan 2025",
      },
    ],
  },
];

const academicExperiences: any = [
  {
    institution: "Centro Universitário Católico Salesiano Auxilium - UniSALESIANO",
    degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    period: "2025 ~ 2027",
    location: "Araçatuba - SP",
  },
  {
    institution: "E.E Enzo Bruno Carramaschi",
    degree: "Ensino Fundamental/Médio ",
    period: "2018 ~ 2024",
    location: "Bilac - SP",
  },
];
</script>

<style scoped></style>
