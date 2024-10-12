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
        class="md:w-1/2 font-Raleway font-normal text-base sm:text-xl leading-normal interactive"
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :duration="800"
        :delay="250"
      >
        Meu nome é Rafael, tenho 18 anos e atualmente sou um desenvolvedor front-end cursando o 3º ano do ensino médio.
        Gosto de aprender novas coisas porque dessa forma consigo sempre melhorar para resolver novos problemas,
        enfrentar novas situações e aumentar meu conhecimento. <br />
        Apaixonado por tecnologia, estou sempre buscando me aperfeiçoar e aprender novas ferramentas para expandir meu
        conhecimento e habilidades, pensando até onde ela seria capaz de chegar para nos ajudar a realizar determinadas
        tarefas. Por isso, acredito que essa minha curiosidade me ajuda a continuar avançando.
      </div>

      <div
        class="md:absolute md:block hidden right-0 interactive"
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1000"
      >
        <img src="../../assets/images/boy-holding-laptop.png" class="w-full" />
      </div>
    </div>

    <div class="mt-[25%] relative flex flex-col justify-center w-full sm:w-full sm:px-0">
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
        class="mt-8 flex flex-col gap-8 w-full"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="100"
      >
        <div class="flex flex-col md:flex-row justify-between md:items-center" v-for="experience in experiences">
          <div class="flex flex-col items-start gap-2">
            <div class="font-Sans font-medium text-3xl">{{ experience.company }}</div>

            <div class="font-Sans font-medium text-sm sm:hidden">
              {{ experience.location }} ({{ experience.modality }})
            </div>

            <div class="capitalize border border-gray-primary px-2 py-1.5 rounded-lg text-xs font-Sans font-bold w-max">
              {{ experience.position }}
            </div>

            <div class="uppercase font-bold font-Sans text-gray-primary sm:hidden">{{ experience.period }}</div>

            <div class="mb-1 -ml-1 flex flex-col">
              <ul class="list-disc list-inside font-Sans font-medium text-start">
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

          <div class="flex flex-col w-max mt-2">
            <div class="hidden sm:flex flex-col">
              <div class="font-Sans font-medium text-base">{{ experience.location }} ({{ experience.modality }})</div>
              <div class="uppercase font-bold font-Sans text-gray-primary">{{ experience.period }}</div>
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
}

const experiences = ref<Experience[]>([
  {
    company: "CemiCloud",
    location: "Bilac - BR",
    modality: "remoto",
    position: "Estágio Desenvolvedor Front-End",
    about: ["Desenvolvimento e manutenção de páginas web", "Integração de APIs", "Criação de layouts"],
    techs: ["JavaScript", "VueJS", "Vuetify", "Axios", "Git"],
    period: "dez 2023 ~ atual",
  },
]);
</script>

<style scoped></style>
