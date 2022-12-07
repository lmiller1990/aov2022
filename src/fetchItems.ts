export interface Item {
  id: number
  price: number
  title: string
}

export async function fetchItems() {
  const res = await window.fetch(`https://dummyjson.com/products`)
  const json = await res.json()
  return json.products as Item[]
}
