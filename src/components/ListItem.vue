<script setup>
import { useList } from '@/stores/secretSanta'
const store = useList()

const { name, email } = defineProps({
  name: { type: String, required: true },
  email: { type: String, required: true },
})
</script>

<template>
  <div class="border-2 border-green rounded-md my-2 p-2 flex">
    <div class="flex-1">
      <h2 class="text-lg font-bold">{{ name }}</h2>
      <p class="text-gray-500">{{ email }}</p>
    </div>
    <button @click="store.remove(email)">🗑</button>
  </div>
</template>

<style lang="scss" scoped></style>
