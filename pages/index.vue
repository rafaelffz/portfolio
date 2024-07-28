<template>
  <ScrollIndicator :sections="['presentation', 'about', 'skills', 'projects', 'contact']" />
  <div class="w-full h-full flex flex-col items-center justify-center text-center overflow-hidden !scroll-smooth">
    <div id="presentation" class="pt-[12%] h-[calc(100vh-56px)] presentation interactive">
      <div
        class="text-6xl font-Lora leading-tight tracking-tight"
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1000"
        :delay="2000"
      >
        Olá! Eu sou <span class="font-normal">Rafael,</span>
      </div>
      <div
        class="text-6xl font-Lora leading-tight tracking-tight"
        v-motion
        :initial="{ opacity: 0, y: 150 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1000"
        :delay="2000"
      >
        <span>desenvolvedor front-end.</span>
      </div>

      <div class="mt-[25%] interactive flex flex-col items-center justify-center">
        <span class="tet-sm font-Raleway font-medium">role para mais</span>
        <Icon class="mt-12 floating-animation" name="bi:chevron-down" size="16" />
      </div>
    </div>

    <!-- SOBRE -->
    <SectionsAbout />

    <!-- HABILIDADES -->
    <SectionsSkills />

    <!-- PROJETOS -->
    <SectionsProjects />

    <!-- CONTATO -->
    <SectionsContact />
  </div>
</template>

<script setup lang="ts"></script>

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
