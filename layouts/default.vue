<template>
  <Preloader />
  <div class="h-full w-full bg-[#F8F5F1] overflow-hidden">
    <header class="flex justify-between items-center px-16 pt-4">
      <div class="font-Raleway text-xl font-semibold tracking-wide flex-1">
        <NuxtLink to="/" class="interactive cursor-pointer">
          <span class="text-blue-800">&lt;&#47;</span><span>rafaelffz</span><span class="text-blue-800">&gt;</span>
        </NuxtLink>
      </div>

      <div class="teste flex gap-6 capitalize font-Raleway text-base font-medium text-black">
        <NuxtLink v-for="menu in menus" :to="menu.link">
          <div class="interactive cursor-pointer transition-all">{{ menu.name }}</div>
        </NuxtLink>
      </div>
    </header>

    <slot />

    <footer class="pb-4 px-16 mt-20">
      <div class="flex items-center text-base justify-between font-Raleway py-6 font-medium tracking-wide">
        <span class="font-normal text-sm">
          Images by <a class="font-medium" href="https://icons8.com" target="_blank">Icons8</a>
        </span>

        <div class="flex flex-col items-end">
          <span>Desenvolvido por Rafael</span>
          <span class="font-normal text-sm">copyright &copy; 2024</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
interface Menu {
  name: string;
  link: string;
}

const menus = ref<Menu[]>([
  {
    name: "sobre",
    link: "/about",
  },
  {
    name: "habilidades",
    link: "/skills",
  },
  {
    name: "projetos",
    link: "/projects",
  },
  {
    name: "contato",
    link: "/contact",
  },
]);
</script>

<style scoped>
a.router-link-active {
  font-weight: 600;
}
</style>
