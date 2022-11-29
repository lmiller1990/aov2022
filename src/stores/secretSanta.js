import { ref } from 'vue'
import { defineStore } from 'pinia'

const filterForEmail = email => {
  return item => item.email !== email
}

export const useList = defineStore('hohoho', () => {
  const list = ref([])

  const init = initData => (list.value = initData)
  const add = ({ name, email }) => list.value.push({ name, email })
  const remove = email => {
    list.value = list.value.filter(filterForEmail(email))
  }

  return { list, init, add, remove }
})
