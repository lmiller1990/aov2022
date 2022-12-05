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

const Ball: FunctionalComponent = props => {
  return <div class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center" />
}
</script>

<template>
  <div>
    <div v-for="i in size" class="flex justify-center">
      <Ball v-for="j in i" />
    </div>
  </div>
</template>
