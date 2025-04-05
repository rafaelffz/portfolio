<template>
  <div id="about" class="scrollto w-full px-5 mt-[30%] sm:px-16 flex flex-col justify-center overflow-hidden">
    <div
      class="flex border-b border-b-zinc-900 w-full py-4"
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="800"
    >
      <span class="text-4xl sm:text-5xl font-Lora interactive font-medium">Sobre mim</span>
    </div>

    <div class="flex justify-between w-full relative text-left mt-8">
      <div
        class="md:w-1/2 font-Raleway font-normal text-base sm:text-xl sm:leading-relaxed interactive"
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :duration="800"
        :delay="250"
      >
        <p class="">
          Meu nome é Rafael, tenho 18 anos e atualmente sou desenvolvedor web na empresa
          <span class="font-medium">CemiCloud</span>. Tenho uma grande paixão por aprender e acredito que isso é
          essencial para me tornar um profissional melhor, pois, ao adquirir novos conhecimentos, consigo resolver
          problemas mais desafiadores e enfrentar situações novas com mais confiança. <br />
          Sempre em busca de aprimoramento, estou constantemente explorando novas ferramentas e tecnologias,
          questionando até onde a inovação pode nos levar para melhorar a maneira como realizamos tarefas. Acredito que
          minha curiosidade é o que me impulsiona a continuar avançando, tanto profissionalmente quanto pessoalmente.
        </p>
      </div>

      <div
        class="md:absolute md:flex items-center justify-center hidden right-0 -top-[25%] w-2/5"
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="800"
      >
        <img src="../../assets/images/rafaelffz-notebook.png" alt="boy holding laptop" class="w-3/4 rounded-full" />
      </div>
    </div>

    <div class="mt-[25%] flex flex-col justify-center w-full sm:w-full sm:px-0">
      <div
        class="flex border-b border-b-zinc-900 py-4"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <span class="text-4xl sm:text-5xl font-Lora interactive font-medium">Experiência profissional</span>
      </div>

      <div
        class="mt-8 flex flex-col gap-12 w-full"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="100"
      >
        <div
          class="flex flex-col gap-10"
          v-for="experience in experiences"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="200"
        >
          <div class="flex flex-col md:flex-row justify-between md:items-center">
            <div class="flex flex-col items-start gap-2 pl-2">
              <div class="font-Sans font-medium text-2xl md:text-3xl -ml-2">{{ experience.company }}</div>

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

          <div
            v-if="experience.previousPositions"
            v-for="previous in experience.previousPositions"
            class="flex flex-col md:flex-row justify-between md:items-center pl-2"
            v-motion
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
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[25%] flex flex-col justify-center w-full sm:w-full sm:px-0">
      <div
        class="flex border-b border-b-zinc-900 py-4"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <span class="text-4xl sm:text-5xl font-Lora interactive font-medium">Experiência Acadêmica</span>
      </div>

      <div class="flex flex-col gap-10 w-full mt-8">
        <div
          v-for="experience in academicExperiences"
          class="border border-gray-primary rounded-lg p-4"
          v-motion
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
        </div>
      </div>
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

interface academicExperience {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

const experiences: Experience[] = [
  {
    company: "CemiCloud",
    location: "Bilac - BR",
    modality: "remoto",
    position: "Desenvolvedor Web Jr.",
    about: [
      "Criação de interfaces interativas e responsivas com Vue 3, utilizando Pinia para gerenciamento de estado e TypeScript para maior robustez e escalabilidade do código",
      "Criação e estilização de componentes reutilizáveis com Vuetify",
      "Integração de APIs REST para consumo e fornecimento de dados",
      " Desenvolvimento de APIs e serviços no back-end com Java e Spring Boot, utilizando JPA e JDBI para acesso a dados no PostgreSQL",
      "Colaboração com a equipe para corrigir bugs e implementar melhorias no código",
    ],
    techs: [
      "JavaScript",
      "TypeScript",
      "VueJS",
      "Vuetify",
      "Pinia",
      "Axios",
      "Git",
      "GitHub",
      "Java",
      "Spring Boot",
      "JPA",
      "JDBI",
    ],
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
        techs: ["JavaScript", "VueJS", "Vuex", "Pinia", "Vuetify", "Axios", "Git", "GitHub"],
        period: "dez 2023 ~ jan 2025",
      },
    ],
  },
];

const academicExperiences: academicExperience[] = [
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

<style scoped>
.floating {
  animation: floating 2s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
