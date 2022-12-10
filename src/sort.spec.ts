import { describe, expect, it } from 'vitest'
import type { Present } from './sort'
import { sort } from './sort'

const a: Present = {
  id: 1,
  src: '',
  dimensions: {
    height: 1,
    width: 1
  }
}

const b: Present = {
  id: 2,
  src: '',
  dimensions: {
    height: 2,
    width: 2
  }
}

describe('sort', () => {
  it('sorts in ascending order', () => {
    const expected: Present[] = [
      a, b
    ]
    const actual = sort([b, a], 'asc')
    expect(actual).toEqual(expected)
  })

  it('sorts in descending order', () => {
    const expected: Present[] = [
      b, a
    ]
    const actual = sort([a, b], 'desc')
    expect(actual).toEqual(expected)
  })
})
