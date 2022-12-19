<script setup lang="ts">
import { getDistanceKm, getDistanceMiles } from '../utils/distance'
import { useGeolocation } from '@vueuse/core'
import { ref, computed } from 'vue'

// hint: coords.latitude + cords.latitude
const { coords } = useGeolocation()

const unit = ref<'km' | 'mile'>('mile')

const distance = computed(() => {
  if (unit.value === 'km') {
    return getDistanceKm(coords.value.latitude, coords.value.longitude)
  }
})

const toggleUnit = () => {
  unit.value = unit.value === 'km' ? 'mile' : 'km'
}
</script>

<template>
  <!-- this should only render a slot -->
  <slot  />
</template>
