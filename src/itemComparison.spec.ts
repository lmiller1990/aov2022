import { describe, it, expect } from "vitest";
import { Item } from "./fetchItems";
import { compare } from "./itemComparison";

const itemA: Item = {
  id: 1,
  title: 'a',
  price: 50
}

const itemB: Item = {
  id: 2,
  title: 'b',
  price: 5
}

describe('compare', () => {
  it('shows a message for items with the same price', () => {
    const actual = compare(itemA, {...itemB, price: itemA.price })
    expect(actual).toMatchInlineSnapshot('"Items have the same price."')
  })

  it('shows the correct comparison', () => {
    const actual = compare(itemA, itemB)
    expect(actual).toMatchInlineSnapshot('"Instead of buying 1 a you can buy 10 number of b."')
  })
})