<script setup lang="ts">
import { nextTick, ref, watch, watchEffect } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import Spinner from './Spinner.vue'

const searchTerm = ref('')
const products = ref<Product[]>([])
const loading = ref(false)

const endpoint = 'https://dummyjson.com/products/search'

interface Product {
  id: number
  title: string
  price: number
}

const findProducts = async (term: string) => {
  const json = await window.fetch(`${endpoint}?q=${term}`)
  const result = await json.json()
  return result.products as Product[]
}

async function handleSearch(newTerm: string) {
  const res = await findProducts(newTerm)
  loading.value = false

  if (!res.length) {
    alert(`No products found for ${newTerm}. Please try again.`)
  } else {
    products.value = res
  }
}

watch(searchTerm, () => {
  loading.value = true
})

watch(searchTerm, useDebounceFn(handleSearch, 500))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <Spinner v-if="loading" />
    <ul class="list-disc" v-else>
      <li v-for="product of products" :key="product.id">{{ product.title }} - ${{ product.price }}</li>
    </ul>
  </div>
</template>
