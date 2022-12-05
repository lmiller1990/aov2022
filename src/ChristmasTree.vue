<script setup lang="ts">
import { FunctionalComponent, h } from 'vue'

const props = withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
const Ball: FunctionalComponent = () => {
  return (
    h('div', { class: "relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center" })
  )
}
</script>

<template>
  <div>
    <div v-for="t in props.size" :key="t" class="flex justify-center">
      <Ball v-for="n in t" :key="`${t}-${n}`" />
    </div>
  </div>
</template>
