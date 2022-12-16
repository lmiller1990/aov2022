export const hasDuplicateInArray = arr => {
  return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
  const nameList = list.map(person => person.name)
  const emailList = list.map(person => person.email)
  return hasDuplicates(nameList) || hasDuplicates(emailList)
}

export interface Person {
  name: string
  email: string
}

export interface Pair {
  giver: Person
  receiver: Person
}

export function fisherYates<T>(arr: T[]) {
  let m = arr.length
  let temp: T
  let i: number
  while (m) {
    // pick element
    i = Math.floor(Math.random() * m)
    m--
    // swap
    temp = arr[m]
    arr[m] = arr[i]
    arr[i] = temp
  }
  return arr
}

export const matchPeople = (people: Person[]): Pair[] => {
  return fisherYates(people.slice()).map((x, i, a) => ({
    giver: a[i],
    receiver: a[i + 1] ?? a[0],
  }))
}
