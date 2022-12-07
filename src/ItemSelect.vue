<script setup lang="ts">
import { Item } from './fetchItems'

const props = defineProps<{
  items: Item[]
  modelValue?: Item
}>()

const emits = defineEmits<{
  (event: 'update:modelValue', item: Item): void
}>()

function handleChange(event: Event) {
  const val = parseInt((event.target as HTMLSelectElement).value, 10)
  emits('update:modelValue', props.items.find(x => x.id === val)!)
}
</script>

<template>
  <select @change="handleChange" class="p-2 border-2 border-gray-dark">
    <option selected disabled value="">Select an item</option>
    <option 
      v-for="item in items" 
      :selected="props.modelValue && item.id === props.modelValue?.id" 
      :value="item.id">
      {{ item.title }} - ${{ item.price }}
    </option>
  </select>
</template>
