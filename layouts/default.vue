<template>
  <Preloader />
  <div class="h-full w-full bg-[#F8F5F1] overflow-hidden" id="scroll-container" data-scroll-container>
    <div
      id="scroll-indicator"
      class="fixed top-0 left-0 h-1 bg-neutral-600 z-30"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    ></div>

    <header
      class="fixed w-full h-14 flex justify-between px-10 sm:px-16 pt-4 z-30 bg-[#F8F5F1]"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <div
        class="font-Raleway text-xl font-semibold tracking-wide flex-1 cursor-pointer"
        @click="scroll.scrollTo('#hero')"
      >
        <span class="text-blue-800">&lt;&#47;</span><span>rafaelffz</span><span class="text-blue-800">&gt;</span>
      </div>

      <div class="hidden sm:flex gap-6 capitalize font-Raleway text-base font-medium text-black">
        <div
          class="interactive cursor-pointer transition-all"
          v-for="(menu, index) in menus"
          :key="index"
          @click="scrollToSection(menu.link)"
        >
          {{ menu.name }}
        </div>
      </div>
    </header>

    <slot />

    <footer class="pb-4 px-5 sm:px-16 mt-36">
      <div class="flex items-end text-base justify-between font-Raleway my-6 font-medium tracking-wide">
        <span class="font-normal text-xs sm:text-sm">
          Imagens por <a class="font-medium" href="https://icons8.com" target="_blank">Icons8</a>
        </span>

        <div class="flex flex-col items-end text-xs sm:text-base">
          <span>Desenvolvido por Rafael</span>
          <span class="font-normal text-xs sm:text-sm">copyright &copy; 2024</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Menu {
  name: string;
  link: string;
}

const menus = ref<Menu[]>([
  { name: "sobre", link: "#about" },
  { name: "habilidades", link: "#skills" },
  { name: "projetos", link: "#projects" },
  { name: "contato", link: "#contact" },
]);

gsap.registerPlugin(ScrollTrigger);
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

let scroll: any;
let scrollPaddingTop: number = 56;

const scrollToSection = (selector: string) => {
  const targetElement = document.querySelector(selector) as HTMLElement;
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - scrollPaddingTop;
    scroll.scrollTo(offsetTop);
  }
};

onMounted(() => {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]") as HTMLElement,
    smooth: true,
    multiplier: 0.8,
  });

  scroll.on("scroll", (args: any) => {
    const progress = args.scroll.y / args.limit.y;
    gsap.to("#scroll-indicator", { width: `${progress * 100}%`, duration: 0.25 });
  });
});
</script>
