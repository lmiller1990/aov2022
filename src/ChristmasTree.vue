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

function random (n: number) {
  return Math.round(Math.random() * 100) % n
}

const Ball: FunctionalComponent = props => {
  const delay = [
    `[animation-delay:200ms]`, 
    `[animation-delay:600ms]`,
    `[animation-delay:1000ms]`
  ]

  const posX = [
    `-ml-6`,
    `-ml-4`,
    `-ml-0`,
    `ml-4`,
    `ml-6`,
  ]

  const posY = [
    `-mt-6`,
    `-mt-4`,
    `-mt-0`,
    `mt-4`,
    `mt-6`,
  ]

  return <div class={`
    relative rounded-full bg-green-600 
    w-16 h-16 -m-2 
    flex justify-center items-center`}
  >
    <div class={`
      w-2 h-2 bg-yellow-200 rounded
      animate-[twinkle_1s_infinite]
      ${delay[random(delay.length)]}
      ${posX[random(posX.length)]}
      ${posY[random(posY.length)]}
    `} />
  </div>
}
</script>

<template>
  <div>
    <div v-for="i in size" class="flex justify-center">
      <Ball v-for="j in i" />
    </div>
  </div>
</template>
