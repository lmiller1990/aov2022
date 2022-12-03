<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import Spinner from "./Spinner.vue"

const api = `https://dummyjson.com/products/search`

interface Product {
  id: number
  price: number
  title: string
}

const products = ref<Product[]>([])
const loading = ref(false)
const searchTerm = ref('')

async function fetchProducts (term: string) {
  const res = await window.fetch(`${api}?q=${term}`)
  const json = await res.json()
  return json.products as Product[]
}

async function getProducts (newTerm: string) {
  const result = await fetchProducts(newTerm)
  products.value = result
  loading.value = false
}

watch(products, (newProducts) => {
  if (newProducts.length === 0) {
    window.alert(`No products were found. Please try again.`)
  }
})

watch(searchTerm, () => {
  loading.value = true
})

watch(searchTerm, useDebounceFn(getProducts, 1000))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <Spinner v-if="loading" />
    <ul v-else class="list-disc">
      <li v-for="product of products" :key="product.id">
        {{ product.title }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>