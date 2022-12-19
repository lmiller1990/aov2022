<script setup lang="ts">
import { getDistance, Unit } from '../utils/distance'
import { useGeolocation } from '@vueuse/core'
import { ref, computed } from 'vue'

// hint: coords.latitude + cords.latitude
const { coords } = useGeolocation()

const unit = ref<Unit>('km')

const distance = computed(() => {
  if (!coords.value.latitude || !coords.value.longitude) {
    return
  }

  return getDistance(coords.value.latitude, coords.value.longitude, unit.value)
})

const toggleUnit = () => {
  unit.value = unit.value === 'km' ? 'mile' : 'km'
}
</script>

<template>
  <slot :distance="distance" :toggleUnit="toggleUnit" :unit="unit" />
</template>
