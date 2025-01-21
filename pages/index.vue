<template>
  <div class="w-full">
    <StairTransition />

    <div id="hero" class="h-[calc(100vh-56px)] flex flex-col justify-center hero interactive w-full px-5">
      <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>

      <div class="flex flex-col justify-center items-center text-center h-full mt-[56px] pt-12">
        <div>
          <div
            class="text-4xl sm:text-5xl md:text-6xl font-Lora font-normal leading-tight tracking-tight"
            v-motion
            :initial="{ opacity: 0, x: 150 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :duration="800"
            :delay="200"
          >
            Olá! Eu sou o Rafael,
          </div>
          <div
            class="text-4xl sm:text-5xl md:text-6xl font-Lora font-normal leading-tight tracking-tight"
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="800"
            :delay="200"
          >
            <span>desenvolvedor front-end</span>
          </div>
        </div>
      </div>

      <div class="interactive h-1/2 flex flex-col items-center justify-center">
        <span class="tet-sm font-Raleway font-medium z-20">role para mais</span>
        <Icon class="mt-12 floating-animation" name="bi:chevron-down" size="16" />
      </div>
    </div>

    <div class="w-full">
      <!-- SOBRE -->
      <LazySectionsAbout />

      <!-- HABILIDADES -->
      <LazySectionsSkills />

      <!-- PROJETOS -->
      <LazySectionsProjects />

      <!-- CONTATO -->
      <LazySectionsContact />
    </div>
  </div>
</template>

<script setup lang="ts">
const options = {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  style: {
    position: "absolute",
    height: "100vh",
  },
  fpsLimit: 40,
  background: {
    color: {
      value: "#F8F5F1",
    },
  },
  particles: {
    color: {
      value: "#b1b1b1",
    },
    links: {
      color: "#b1b1b1",
      enable: true,
    },
    move: {
      enable: true,
      speed: 1,
    },
    number: {
      value: 20,
    },
  },
};

const onLoad = (container: any) => {
  container.play();
};
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
</style>
