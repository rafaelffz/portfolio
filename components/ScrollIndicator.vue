<template>
  <div class="scroll-indicator fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
    <NuxtLink v-for="(section, index) in sections" :key="index" :to="section.link">
      <div
        class="indicator w-2 h-2 rounded-full border border-black transition-all hover:scale-150 cursor-pointer"
        :class="{ 'bg-black': isActive(index) }"
      ></div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const activeIndex = ref<number>(0);

const isActive = (index: number) => index === activeIndex.value;

const updateActiveIndicator = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const sectionsCount = sections.value.length;

  if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
    activeIndex.value = sectionsCount - 1;
  } else {
    activeIndex.value = sections.value.findIndex((section, index) => {
      const threshold = (index + 1) * (100 / sectionsCount);
      return scrollPercent < threshold;
    });
  }
};

interface ISection {
  name: string;
  link: string;
}

const sections = ref<ISection[]>([
  { name: "home", link: "/" },
  { name: "sobre", link: "#about" },
  { name: "habilidades", link: "#skills" },
  { name: "projetos", link: "#projects" },
  { name: "contato", link: "#contact" },
]);

// const scrollToSection = (index: string) => {
//   const sectionId = props.sections[index];
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
// };

onMounted(() => {
  window.addEventListener("scroll", updateActiveIndicator);
  updateActiveIndicator();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveIndicator);
});
</script>

<style scoped></style>
