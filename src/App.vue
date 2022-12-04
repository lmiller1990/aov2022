<script setup lang="ts">
import { ref } from 'vue';

interface Joke {
  setup: string
  delivery: string
}

const joke = ref<Joke>()
const show = ref(false)

async function fetchJoke () {
  const res = await window.fetch('https://v2.jokeapi.dev/joke/christmas') 
  const json = await res.json()
  return json as Joke
}

async function getJoke () {
  const data = await fetchJoke()
  joke.value = data
}

function handleShow () {
  show.value = true
}

function handleAnother () {
  joke.value = undefined
  show.value = false
  getJoke()
}

getJoke()
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div v-if="joke">
      <div>{{ joke.setup }}</div>
      <template v-if="show">
        <div>{{ joke.delivery }}</div>
        <button @click="handleAnother">Another</button>
      </template>
      <button v-else @click="handleShow">Tell Me!</button>
    </div>
  </div>
</template>