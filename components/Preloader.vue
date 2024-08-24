<template>
  <div class="preloader fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
    <div class="console w-full mx-10 md:mx-0 md:w-1/3 h-40 bg-zinc-900 rounded-lg py-3 px-4">
      <div class="top flex items-center justify-between">
        <div class="flex gap-1.5">
          <div class="w-3 h-3 bg-red-600 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div class="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>

        <div>
          <div class="w-3 h-1 border-t border-t-zinc-400"></div>
          <div class="w-3 h-1 border-t border-t-zinc-400"></div>
          <div class="w-3 h-1 border-t border-t-zinc-400"></div>
        </div>
      </div>

      <div class="content-console mt-3 font-Sans font-medium text-sm">
        <div class="flex flex-col items-start gap-2 pr-1 w-max">
          <div class="flex items-center gap-2">
            <Icon name="material-symbols:chevron-right" size="16" />
            <span class="typewriter" data-text="npm run dev"></span>
          </div>

          <div class="flex items-center gap-2">
            <Icon name="material-symbols:chevron-right" size="16" />
            <span class="text-yellow-500 typewriter" data-text="Starting..."></span>
          </div>

          <div class="flex items-center gap-2">
            <Icon name="material-symbols:chevron-right" size="16" />
            <div class="preloader__percent opacity-0 transition-opacity duration-100 font-Sans font-semibold">
              {{ progress ? progress : 0 }}%
            </div>
          </div>

          <div class="flex items-center gap-2">
            <Icon name="material-symbols:chevron-right" size="16" />
            <span class="text-green-500 typewriter" data-text="Success!"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

const number = ref<number>(0);
const progress = computed(() => Math.min(number.value, 100));

onMounted(() => {
  document.body.style.overflow = "hidden";
  animateTypewriter();
});

function simulateLoading() {
  return new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (number.value < 100) {
        number.value++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 8);
  });
}

function animateTypewriter() {
  const elements = document.querySelectorAll<HTMLElement>(".typewriter");
  let elementIndex = 0;

  function typeNext() {
    return new Promise<void>((resolve) => {
      if (elementIndex < elements.length) {
        const element = elements[elementIndex];
        const text = element.getAttribute("data-text") || "";
        let charIndex = 0;

        const interval = setInterval(() => {
          if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(interval);
            elementIndex++;
            if (elementIndex === 2) {
              gsap.to(".preloader__percent", {
                opacity: 1,
                duration: 0.2,
              });

              gsap.set("body", {
                overflow: "hidden",
              });

              simulateLoading().then(() => {
                typeNext().then(resolve);
              });
            } else {
              typeNext().then(resolve);
            }
          }
        }, 30);
      } else {
        resolve();
      }
    });
  }

  return typeNext();
}

watch(progress, (value) => {
  if (value === 100) {
    const successElement = document.querySelector<HTMLElement>(".typewriter[data-text='Success!']");

    if (successElement) {
      successElement.style.opacity = "1";
    }

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
            document.body.style.overflow = "";
            gsap.set("body", {
              clearProps: "all",
            });
          },
        }
      );
    }, 500);
  }
});
</script>

<style>
.preloader__percent {
  opacity: 0;
}
</style>
