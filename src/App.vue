<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const christmasDate = new Date('2022/12/25')

const count = Math.ceil((+christmasDate - +new Date()) / (1000 * 60 * 60 * 24))

const locales = [
  { key: 'en', flag: '🇺🇸' },
  { key: 'ja-JP', flag: '🇯🇵' },
  { key: 'de', flag: '🇩🇪' },
]

const { t, locale, d } = useI18n()

function useCycle<T>(list: T[]) {
  const i = ref(0)

  function next () {
    if (i.value >= list.length - 1) {
      i.value = 0
    } else {
      i.value++
    }
  }

  const current = computed(() => list[i.value])

  return {
    next,
    current
  }
}

const { current, next } = useCycle(locales)

watchEffect(() => {
  locale.value = current.value.key
})
</script>

<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t('happyHolidays') }}
        <span class="i-twemoji-world-map"></span>
        <div>{{ current.flag }}</div>
        <button @click="next">Next</button>
        <div>{{ t('christmasIsComing', { 
          date: d(christmasDate, 'long'),
          time: t('day', count) }) }}</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
