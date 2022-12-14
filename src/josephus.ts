// i = 0
// a = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 0 kills 1
// i++

// i = 1
// a = [0, 2, 3, 4, 5, 6, 7, 8]
// 2 kills 3

// i = 2
// a = [0, 2, 4, 5, 6, 7, 8]
// 4 kills 5

// i = 3
// a = [0, 2, 4, 6, 7, 8]
// 6 kills 7

// i = 4
// a = [0, 2, 4, 6, 8]
// 8 kills 0 because 8 is the last element

// i = 0
// a = [2, 4, 6, 8]
// 2 kills 4

// i = 0
// a = [2, 4, 6, 8]
// 2 kills 4

export interface State {
  currIdx: number
  arr: number[]
}

export function josephus(state: State): State {
  if (state.arr[state.currIdx + 1] === undefined) {
    return {
      currIdx: 0,
      arr: state.arr.slice(1),
    }
  }

  const ns = state.arr.filter((_, idx) => {
    return idx !== state.currIdx + 1
  })

  const next = state.currIdx + 1

  return {
    arr: ns,
    currIdx: ns[next] ? next : 0
  }
}
