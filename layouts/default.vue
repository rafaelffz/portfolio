<template>
  <Preloader />

  <Transition name="slide-in">
    <HeaderMenu v-if="menu" :scroll="scroll" @close="menu = false" />
  </Transition>

  <div
    class="w-full min-h-screen flex flex-col bg-[#F8F5F1] overflow-hidden"
    id="scroll-container"
    data-scroll-container
  >
    <header
      :class="['w-full h-14 z-30 bg-[#F8F5F1]', isMobile ? 'fixed top-0 left-0 right-0' : '']"
      data-scroll
      :data-scroll-sticky="!isMobile"
      data-scroll-target="#scroll-container"
    >
      <div id="scroll-indicator" class="h-1 bg-neutral-600 z-30"></div>

      <div class="header-content flex items-center h-full w-full px-5 sm:px-16">
        <div
          class="font-Raleway text-xl font-semibold tracking-wide flex-1 select-none"
          @click="scroll.scrollTo('#hero')"
        >
          <div class="cursor-pointer w-max">
            <span class="text-blue-800">&lt;&#47;</span><span>rafaelffz</span><span class="text-blue-800">&gt;</span>
          </div>
        </div>

        <nav id="navbar" class="hidden sm:flex gap-6 capitalize font-Raleway text-base font-medium text-black">
          <ul>
            <li class="hidden sm:flex gap-6 capitalize font-Raleway text-base text-black">
              <a
                class="scrollto interactive cursor-pointer transition-all select-none duration-200"
                v-for="(menu, index) in menus"
                :key="index"
                :href="menu.link"
                @click.prevent="scrollToSection(menu.link)"
              >
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex sm:hidden">
          <Icon class="cursor-pointer" @click="menu = !menu" name="material-symbols:menu" size="32" />
        </div>
      </div>
    </header>

    <div class="flex-1 w-full bg-[#F8F5F1] overflow-hidden">
      <slot />
    </div>

    <footer class="px-5 sm:px-16 mt-28">
      <div
        class="flex flex-col gap-2 sm:gap-0 sm:flex-row text-base items-center sm:items-end sm:justify-between font-Raleway my-4 font-medium tracking-wide"
      >
        <div class="flex-col items-center sm:items-start gap-2 sm:gap-0 hidden sm:flex">
          <span class="font-normal text-sm">
            Imagens por <a class="font-medium" href="https://icons8.com" target="_blank">Icons8</a>
          </span>

          <span class="text-base font-medium">Desenvolvido por Rafael</span>
        </div>

        <div class="flex items-end">
          <span class="font-normal text-base">rafaelffz &copy; 2024</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

interface Menu {
  name: string;
  link: string;
}

const menu = ref<boolean>(false);

const menus = ref<Menu[]>([
  { name: "sobre", link: "#about" },
  { name: "habilidades", link: "#skills" },
  { name: "projetos", link: "#projects" },
  { name: "contato", link: "#contact" },
]);

const { isSmallerOrEqual } = useBreakpoints(breakpointsTailwind);
const isMobile = isSmallerOrEqual('sm');

let scroll: any;
let scrollPaddingTop: number = 56;

const scrollToSection = (selector: string) => {
  const targetElement = document.querySelector(selector) as HTMLElement;
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - scrollPaddingTop;
    scroll.scrollTo(offsetTop);
  }
};

let navbarLinks = ref<NodeListOf<HTMLAnchorElement>>();

const navbarLinksActive = (position: number) => {
  navbarLinks.value = document.querySelectorAll("#navbar .scrollto");

  navbarLinks.value.forEach((menu: any) => {
    let section = document.querySelector(menu.hash);
    if (!section) return;
    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      menu.classList.add("font-semibold");
    } else {
      menu.classList.remove("font-semibold");
    }
  });
};

onMounted(() => {
  let position = window.scrollY + 200;
  navbarLinksActive(position);

  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]") as HTMLElement,
    smooth: true,
    multiplier: 0.8,
  });

  const initialProgress = window.scrollY / document.body.scrollHeight;
  gsap.to("#scroll-indicator", { width: `${initialProgress * 100}%`, duration: 0.25 });

  scroll.on("scroll", (args: any) => {
    const position = args.scroll.y + 200;

    navbarLinksActive(position);

    const progress = args.scroll.y / args.limit.y;
    gsap.to("#scroll-indicator", { width: `${progress * 100}%`, duration: 0.25 });
  });
});
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.5s ease;
}

.slide-in-enter-from {
  transform: translateX(100%);
}

.slide-in-leave-from {
  transform: translateX(0%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}
</style>
