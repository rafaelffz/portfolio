<template>
  <div
    :class="props.class"
    v-motion
    :initial="props.initial"
    :visibleOnce="props.visibleOnce ? props.visibleOnce : undefined"
    :visible="props.visible ? props.visible : undefined"
    :duration="props.duration"
    :delay="props.delay"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string;
  initial: any;
  visibleOnce?: any;
  visible?: any;
  duration: number;
  delay?: number;
}>();
</script>
