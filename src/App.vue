<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in sorted"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
    </div>
    <button @click="handleChange">Sort by {{ order === 'asc' ? 'desc' : 'asc' }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import presents from './presents.json'
import { sort } from './sort'
import type { Order } from './sort'

const order = ref<Order>()

function handleChange () {
  if (!order.value || order.value === 'desc') {
    order.value = 'asc'
  } else {
    order.value = 'desc'
  }
}

const sorted = computed(() => {
  if (!order.value) {
    return presents
  }

  return sort(presents, order.value)
})

</script>
