<script setup>
import Alert from './Alert.vue'
import { ref } from 'vue'
import { useList } from '@/stores/secretSanta'
const store = useList()

const nameField = ref(null)
const error = ref('')
const name = ref('')
const email = ref('')
const addPerson = () => {
  const person = store.list.find(person => {
    return person.name === name.value || person.email === email.value
  })
  if (Boolean(person)) {
    return (error.value = `This name and/or email already exists in the list (${person.name}, ${person.email})`)
  }
  if (!name.value || !email.value) {
    return (error.value = 'Please enter a name and email address')
  }
  store.add({ name: name.value, email: email.value })
  name.value = ''
  email.value = ''
  error.value = ''
  nameField.value.focus()
}
</script>

<template>
  <form @submit.prevent="addPerson" class="flex w-full">
    <input
      ref="nameField"
      v-model="name"
      type="text"
      class="border-2 border-gray-500 rounded-md flex-1 p-2 mr-2"
      placeholder="Name"
    />
    <input
      v-model="email"
      type="text"
      class="border-2 border-gray-500 rounded-md flex-1 p-2 mr-2"
      placeholder="Email"
    />
    <button class="bg-green text-white font-bold rounded-md px-2">Add to list 🎅🏻</button>
  </form>
  <Alert :error="error" />
</template>

<style lang="scss" scoped></style>
