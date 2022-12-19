<script setup lang="ts">
import { getDistanceKm, getDistanceMiles } from '../utils/distance'
import { useGeolocation } from '@vueuse/core'
import { ref, computed } from 'vue'

// hint: coords.latitude + cords.latitude
const { coords } = useGeolocation()

const unit = ref<'km' | 'mile'>('mile')

const distance = computed(() => {
})

const toggleUnit = () => {
}
</script>

<template>
  <slot :distance="distance" :toggleUnit="toggleUnit" />
</template>
