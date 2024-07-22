<template>
  <div class="h-full w-full bg-[#F8F5F1] overflow-hidden">
    <header class="flex justify-between items-center px-11 pt-4">
      <div class="font-Raleway text-xl font-semibold tracking-wide flex-1">
        <NuxtLink to="/" class="interactive cursor-pointer">
          <span class="text-blue-800">&lt;&#47;</span><span>rafaelffz</span><span class="text-blue-800">&gt;</span>
        </NuxtLink>
      </div>

      <div class="teste flex gap-6 capitalize font-Raleway text-base font-medium text-black mr-24">
        <NuxtLink to="/about">
          <div class="interactive cursor-pointer hover:font-medium transition-all">sobre</div>
        </NuxtLink>
        <div class="interactive cursor-pointer transition-all">habilidades</div>
        <div class="interactive cursor-pointer transition-all">projetos</div>
        <div class="interactive cursor-pointer transition-all">contato</div>
      </div>

      <div>
        <Icon name="material-symbols:wb-sunny-outline-rounded" size="28" />
      </div>
    </header>

    <slot />

    <footer class="mt-14 pb-4 px-11">
      <div class="flex items-center text-base justify-between font-Raleway py-6 font-medium tracking-wide">
        <span class="font-normal">copyright &copy; 2024</span>
        
        <div>
          <!-- <span class="text-blue-800">&lt;&#47;</span><span>rafaelffz</span><span class="text-blue-800">&gt;</span> -->
           Desenvolvido por Rafael
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
