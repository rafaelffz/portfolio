<template>
  <div>
    <div id="about" class="mt-[5%] w-full px-16 mb-[15%] relative flex flex-col justify-center">
      <div
        class="flex border-b border-b-zinc-900 py-4"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <span class="text-5xl font-Lora interactive font-medium">Sobre mim</span>
      </div>

      <div class="flex text-left mt-8">
        <div
          class="w-1/2 font-Raleway font-normal text-xl leading-normal interactive"
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1 }"
          :duration="800"
          :delay="250"
        >
          Meu nome é Rafael, tenho 17 anos e atualmente sou um desenvolvedor front-end cursando o 3º ano do ensino
          médio. Gosto de aprender novas coisas porque dessa forma consigo sempre melhorar para resolver novos
          problemas, enfrentar novas situações e aumentar meu conhecimento. <br />
          Apaixonado por tecnologia, estou sempre buscando me aperfeiçoar e aprender novas ferramentas para expandir meu
          conhecimento e habilidades, pensando até onde ela seria capaz de chegar para nos ajudar a realizar
          determinadas tarefas. Por isso, acredito que essa minha curiosidade me ajuda a continuar avançando.
        </div>

        <div
          class="absolute left-2/3 top-0 interactive"
          v-motion
          :initial="{ opacity: 0, y: 150 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :duration="1000"
        >
          <img src="../assets/images/boy-holding-laptop.png" />
        </div>
      </div>
    </div>

    <div class="w-full px-16 mb-52 relative flex flex-col justify-center">
      <div
        class="flex border-b border-b-zinc-900 py-4"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <span class="text-5xl font-Lora interactive font-medium">Experiência profissional</span>
      </div>

      <div
        class="mt-8 flex flex-col gap-8"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="100"
      >
        <div class="flex justify-between items-center" v-for="experience in experiences">
          <div class="flex flex-col gap-2">
            <div class="font-Sans font-medium text-3xl">{{ experience.company }}</div>
            <div
              class="capitalize border border-gray-primary px-2 py-1.5 rounded-lg text-xs font-Sans font-semibold w-max"
            >
              {{ experience.position }}
            </div>
          </div>

          <div class="flex flex-col">
            <div class="font-Sans font-medium text-base">{{ experience.location }} ({{ experience.modality }})</div>
            <div class="uppercase font-bold font-Sans text-gray-primary">{{ experience.period }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = ref([
  {
    company: "CemiCloud",
    location: "Bilac - BR",
    modality: "remoto",
    position: "Estágio Desenvolvedor Front-End",
    period: "dez 2023 ~ atual",
  },
]);
</script>

<style scoped></style>
