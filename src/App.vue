<script setup>
import NorthPoleDistance from './components/NorthPoleDistance.vue'
</script>

<template>
  <div class="container mx-auto px-4">
    <h2>Example 1</h2>
    <NorthPoleDistance v-slot="{ distance, toggleUnit }">
      Distance: {{ distance }}
      <button @click="toggleUnit">Toggle</button>
     </NorthPoleDistance>

    <h2 class="mt-16">Example 2</h2>
    <NorthPoleDistance v-slot="{ distance, toggleUnit, unit }">
      Another component: {{ distance }}
      <button @click="toggleUnit">Toggle (units are {{ unit }})</button>
    </NorthPoleDistance>
  </div>
</template>
