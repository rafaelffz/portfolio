<template>
  <div class="scroll-indicator fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="indicator w-2 h-2 rounded-full border border-black transition-all hover:scale-150 cursor-pointer"
      :class="{ 'bg-black': isActive(index) }"
      @click="scrollToSection(index)"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sections: string[];
}>();

const activeIndex = ref<number>(0);

const isActive = (index: number) => index === activeIndex.value;

const updateActiveIndicator = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const sectionsCount = props.sections.length;

  if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
    activeIndex.value = sectionsCount - 1;
  } else {
    activeIndex.value = props.sections.findIndex((section, index) => {
      const threshold = (index + 1) * (100 / sectionsCount);
      return scrollPercent < threshold;
    });
  }
};

const scrollToSection = (index: number) => {
  const sectionId = props.sections[index];
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveIndicator);
  updateActiveIndicator();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveIndicator);
});
</script>

<style scoped></style>
