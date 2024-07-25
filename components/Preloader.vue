<template>
  <div class="preloader fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
    <div class="preloader__percent text-8xl opacity-0 transition-opacity duration-100">
      {{ progress ? progress : 0 }}%
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { usePreloaderStore } from "~/stores/preloader";

const preloaderStore = usePreloaderStore();

const number = ref<number>(0);
const progress = computed(() => Math.min(number.value, 100));

onMounted(() => {
  console.log(preloaderStore.isCompleted);

  nextTick(() => {
    setTimeout(() => {
      gsap.to(".preloader__percent", {
        opacity: 1,
        duration: 0.2,
      });

      gsap.set("body", {
        overflow: "hidden",
      });

      simulateLoading();
    }, 0);
  });
});

function simulateLoading() {
  preloaderStore.isCompleted = false;

  const interval = setInterval(() => {
    if (number.value < 100) {
      number.value++;
    } else {
      clearInterval(interval);
    }
  }, 15);
}

watch(progress, (value) => {
  if (value === 100) {
    setTimeout(() => {
      gsap.fromTo(
        ".preloader",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 0.7,
          onComplete() {
            gsap.set("body", {
              clearProps: "all",
            });
            preloaderStore.complete();
          },
        }
      );
    }, 200);
  }
});
</script>

<style scoped>
.preloader__percent {
  opacity: 0;
}
</style>