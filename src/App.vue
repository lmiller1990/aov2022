<script setup lang="ts">
import { computed, ref } from 'vue';
import { State, josephus } from './josephus'

const len = 10
const count = ref(1)
const init = Array(len).fill(null).map((_, idx) => idx)

const result = computed(() => {
  let state: State = {
    arr: init,
    currIdx: 0
  }

  for (let i = 0; i < count.value; i++) {
    state = josephus(state)
  }

  return state
})

function handleNext () {
  count.value++
}
</script>

<template>
  <button @click="handleNext">Next</button>
  <div class="flex justify-content">
    <div v-for="idx of init" class="h-12 w-12 border"
      :class="{
        'opacity-10': !result.arr.includes(idx)
      }"
    >
      {{ idx }}
    </div>
  </div>
</template>