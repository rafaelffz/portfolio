<template>
  <div class="absolute top-0 left-0 w-full h-screen z-30 flex">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :style="{ animationDelay: `${index * 120}ms` }"
      class="bg-gray-primary w-full animate-stair-drop"
    ></div>
  </div>
</template>

<script setup lang="ts">
const steps = Array.from({ length: 5 });
</script>

<style scoped>
@keyframes stairDrop {
  0% {
    height: 100vh;
  }
  100% {
    height: 0;
  }
}

.animate-stair-drop {
  animation: stairDrop 250ms ease-in forwards;
}
</style>
