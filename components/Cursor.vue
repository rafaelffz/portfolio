<template>
  <div>
    <div class="cursor absolute w-12 h-12 border border-zinc-500 rounded-full"></div>
    <div class="cursor2 absolute w-2 h-2 bg-zinc-500 rounded-full"></div>
  </div>
</template>

<script setup lang="ts">
const cursor = ref<HTMLElement | null>(null);
const cursor2 = ref<HTMLElement | null>(null);

onMounted(() => {
  cursor.value = document.querySelector(".cursor");
  cursor2.value = document.querySelector(".cursor2");

  const interactiveElements = document.querySelectorAll(".interactive");

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.value?.classList.add("hovered");
      cursor2.value?.classList.add("hovered");
    });

    element.addEventListener("mouseleave", () => {
      cursor.value?.classList.remove("hovered");
      cursor2.value?.classList.remove("hovered");
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (cursor.value && cursor2.value) {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      cursor.value.style.cssText = cursor2.value.style.cssText = `left: ${x}px; top: ${y}px;`;
    }
  });
});
</script>

<style scoped>
.cursor {
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.15s;
  z-index: 100;
}

.cursor2 {
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.2s;
}

.hovered {
  transform: translate(-50%, -50%) scale(1.2);
  background-color: #5e5e5e85;
  opacity: 0.5;
}

.cursor2.hovered {
  opacity: 0;
}
</style>
