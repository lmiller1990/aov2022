<script setup lang="tsx">
import { FunctionalComponent } from 'vue'

const props = withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)

function random(n: number) {
  return (Math.round(Math.random() * 100) % n)
}

const Ball: FunctionalComponent = props => {
  const delay = ['[animation-delay:200ms]', '[animation-delay:500ms]', '[animation-delay:1s]']
  const margin = ['-mt-8', '-mt-4', '-mt-2', 'mt-2', 'mt-4', 'mt-8']
  const marginY = ['-ml-8', '-ml-4', '-ml-2', 'ml-2', 'ml-4', 'ml-8']
  const klass = `
  rounded bg-yellow-400 h-2 w-2 absolute z-10 animate-[twinkle_1s_ease-in-out_infinite] 
  ${delay[random(delay.length)]} 
  ${margin[random(margin.length)]}
  ${marginY[random(marginY.length)]}
  `

  return (
    <div class="relative rounded-full bg-green-500 w-16 h-16 -m-2 flex justify-center items-center">
      <div class={klass}></div>
    </div>
  )
}
</script>

<template>
  <div>
    <div v-for="i in size" class="flex justify-center">
      <Ball v-for="j in i" />
    </div>
  </div>
</template>
