<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>

<template>
  <div>
    <div class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center" />
  </div>
</template>
