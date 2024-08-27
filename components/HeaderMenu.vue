<template>
  <div class="sm:hidden fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col p-5 pt-0">
    <div class="flex flex-col w-full h-full justify-center relative">
      <div class="absolute top-5 right-0">
        <Icon class="text-white cursor-pointer" name="material-symbols:close" size="32" @click="closeMenu" />
      </div>

      <div class="flex flex-col justify-center items-center gap-10 h-full">
        <div
          class="text-neutral-200 tracking-wide w-max relative uppercase text-center font-Sans text-4xl cursor-pointer font-medium after:content-[''] after:absolute after:left-0 after:w-full after:scale-x-0 after:-bottom-0.5 after:h-[1px] after:bg-neutral-200 hover:after:scale-x-100 after:transition-all after:duration-300"
          v-for="(menu, index) in menus"
          :key="index"
          @click="scrollToSection(menu.link)"
        >
          {{ menu.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ scroll: any }>();

const emit = defineEmits(["close"]);

const closeMenu = () => {
  emit("close");
};

const menus = [
  { name: "sobre", link: "#about" },
  { name: "habilidades", link: "#skills" },
  { name: "projetos", link: "#projects" },
  { name: "contato", link: "#contact" },
];

let scrollPaddingTop: number = 56;

const scrollToSection = (selector: string) => {
  const targetElement = document.querySelector(selector) as HTMLElement;
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - scrollPaddingTop;
    emit("close");
    props.scroll.scrollTo(offsetTop);
  }
};

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>
