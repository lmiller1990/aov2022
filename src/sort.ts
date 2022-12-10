import type presents from './presents.json'

export type Present = typeof presents[number]

export type Order = 'asc' | 'desc'

function area (dimensions: Present['dimensions']) {
  return dimensions.height * dimensions.width
}

export function sort (list: Present[], order: Order) {
  if (order === 'asc') {
    return list.sort((x, y) => {
      return area(x.dimensions) > area(y.dimensions) ? 1 : -1
    })
  }

  return list.sort((x, y) => {
    return area(x.dimensions) < area(y.dimensions) ? 1 : -1
  })
}