import { computed, ref } from "vue";
import { fetchItems, Item } from "./fetchItems";

export const useItemComparison = () => {
  const itemA = ref<Item>()
  const itemB = ref<Item>()
  const items = ref<Item[]>([])

  async function getItems () {
    const res = await fetchItems()
    items.value = res
  }

  const message = computed(() => {
    if (!itemA.value || !itemB.value) {
      return ""
    }

    return compare(itemA.value, itemB.value)
  })

  getItems()

  return {
    itemA,
    itemB,
    items,
    message
  }
}

export function compare(a: Item, b: Item): string {
  if (a.price === b.price) {
    return `Items have the same price.`
  }

  const [cheap, expensive] = [a, b].sort((x, y) => x.price > y.price ? 1 : -1)

  const diff = Math.floor(expensive.price / cheap.price)

  return `Instead of buying 1 ${expensive.title} you can buy ${diff} number of ${cheap.title}.`
}
