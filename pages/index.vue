<template>
  <div
    data-scroll-container
    class="w-full h-full flex flex-col items-center justify-center text-center overflow-hidden !scroll-smooth"
  >
    <div id="hero" class="h-[calc(100vh-56px)] flex flex-col justify-center hero interactive w-full px-5">
      <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>

      <div class="flex flex-col justify-center h-full mt-[56px] pt-12">
        <div>
          <div
            class="text-5xl md:text-6xl font-Lora font-normal leading-tight tracking-tight"
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="1000"
            :delay="2000"
          >
            Olá! Eu sou <span class="font-normal">Rafael,</span>
          </div>
          <div
            class="text-5xl md:text-6xl font-Lora font-normal leading-tight tracking-tight"
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :duration="1000"
            :delay="2000"
          >
            <span class="hidden sm:block">desenvolvedor front-end</span>
            <span class="block sm:hidden">desenvolvedor</span> <span class="block sm:hidden">front-end</span>
          </div>
        </div>
      </div>

      <div class="interactive h-1/2 flex flex-col items-center justify-center">
        <span class="tet-sm font-Raleway font-medium z-20">role para mais</span>
        <Icon class="mt-12 floating-animation" name="bi:chevron-down" size="16" />
      </div>
    </div>

    <div>
      <!-- SOBRE -->
      <SectionsAbout />

      <!-- HABILIDADES -->
      <SectionsSkills />

      <!-- PROJETOS -->
      <SectionsProjects />

      <!-- CONTATO -->
      <SectionsContact />
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
  fpsLimit: 120,
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
      value: 40,
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
