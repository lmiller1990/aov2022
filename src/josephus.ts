export interface State {
  arr: number[]
  currIdx: number
}

export function josephus (state: State): State {
  const next = state.currIdx + 1

  if (state.arr[next] === undefined) {
    return {
      arr: state.arr.slice(1),
      currIdx: 0,
    }
  }

  const ns = state.arr.filter((_, idx) => {
    if (state.currIdx + 1 === idx) {
      return false
    }
    return true
  })

  return {
    arr: ns,
    currIdx: ns[next] ? next : 0
  }
}