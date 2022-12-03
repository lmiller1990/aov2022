<script setup lang="ts">
import { ref } from 'vue'

interface Joke {
  setup: string
  delivery: string
}

const joke = ref<Joke>()
const showDelivery = ref(false)

async function fetchJoke() {
  const json = await window.fetch('https://v2.jokeapi.dev/joke/christmas')
  const res = await json.json()
  return res as Joke
}

async function getJoke() {
  showDelivery.value = false
  const res = await fetchJoke()
  joke.value = res
}

function handleShowDelivery() {
  showDelivery.value = true
}

getJoke()
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div v-if="joke">
      <div>{{ joke.setup }}</div>
      <template v-if="showDelivery">
        <div >{{ joke.delivery }}</div>
        <button @click="getJoke">{{ 'Another' }}</button>
      </template>
      <button v-else="showDelivery" @click="handleShowDelivery">{{ 'Tell Me!' }}</button>
    </div>
  </div>
</template>
