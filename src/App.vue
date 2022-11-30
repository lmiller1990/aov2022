<script setup>
import { ref } from 'vue'
import List from '@/components/List.vue'
import ParticipantForm from '@/components/ParticipantForm.vue'
import SecretSantaList from '@/components/SecretSantaList.vue'
import { useList } from '@/stores/secretSanta'
import { matchPeople } from '@/helpers/match'
import demoData from '@/helpers/demoData'
const store = useList()
store.init(demoData)
const secretSantaList = ref([])

const generateList = () => (secretSantaList.value = matchPeople(store.list))
</script>

<template>
  <div class="w-full h-full flex pb-48 items-center flex-col">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-green font-bold">Secret Santa List Generator</h1>
      <div v-if="!secretSantaList.length">
        <p class="text-gray-500 my-8">
          You can add people's names to this list. Using the button <strong>generate</strong>, a list of matches for
          each other will be created.
        </p>
        <ParticipantForm />
        <div class="mt-12 text-center">
          <button class="bg-green text-white text-2xl font-bold rounded-md px-12 py-4 my-2" @click="generateList">
            Generate list 🎁
          </button>
          <List />
        </div>
      </div>
      <div v-else>
        <h1 class="text-2xl text-center text-red-500 font-bold">Matches</h1>
        <SecretSantaList :matches="secretSantaList" />
        <button class="w-full bg-green text-white text-4xl font-bold rounded-md px-12 py-4 my-2" @click="generateList">
          Shuffle 🎲
        </button>
        <button
          class="w-full bg-green text-white text-4xl font-bold rounded-md px-12 py-4 my-2"
          @click="secretSantaList = []"
        >
          ⬅️ Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
