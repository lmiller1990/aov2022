<script setup>
const { error } = defineProps({
  error: { type: String, default: '' },
})
</script>

<template>
  <div v-if="error" class="bg-red-500 text-white p-2 rounded-md my-2 flex">
    <p class="flex-1">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
