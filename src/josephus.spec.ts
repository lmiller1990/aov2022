import { describe, it, expect } from "vitest";
import { State, josephus } from './josephus'

describe('josephus', () => {
  it('iterates until one element remains', () => {
    const init : State = {
      arr: [0, 1, 2, 3, 4],
      currIdx: 0
    }

    const expected : State = {
      arr: [0, 2, 3, 4],
      currIdx: 1
    }

    let res = josephus(init)
    expect(res).toEqual(expected)

    res = josephus(res)
    expect(res).toEqual<State>({
      arr: [0, 2, 4],
      currIdx: 2
    })

    res = josephus(res)
    expect(res).toEqual<State>({
      arr: [2, 4],
      currIdx: 0
    })

    res = josephus(res)
    expect(res).toEqual<State>({
      arr: [2],
      currIdx: 0
    })
  })
})