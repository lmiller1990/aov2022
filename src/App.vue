<script setup lang="ts">
import { useItemComparison } from './itemComparison';
import ItemSelect from './ItemSelect.vue'

const { itemA, itemB, items, message } = useItemComparison()
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model="itemA" :items="items" />
      <ItemSelect v-model="itemB" :items="items" />
    </div>
    {{ message }}
  </div>
</template>