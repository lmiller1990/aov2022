import { it, expect } from 'vitest'
import { fisherYates, matchPeople } from './match'

it('works', () => {
  const init = [
    { name: 'a', email: 'a' },
    { name: 'b', email: 'b' },
    { name: 'c', email: 'c' },
    { name: 'd', email: 'd' },
  ]

  const res = matchPeople(init)

  for (const pair of res) {
    expect(pair.receiver).toBeDefined()
    expect(pair.giver).toBeDefined()
    expect(pair.receiver).not.toEqual(pair.giver)
  }
})
