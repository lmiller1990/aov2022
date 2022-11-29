export const hasDuplicateInArray = arr => {
  return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
  const nameList = list.map(person => person.name)
  const emailList = list.map(person => person.email)
  return hasDuplicates(nameList) || hasDuplicates(emailList)
}

export const matchPeople = people => {
  let pool = [...people]
  pool = pool.sort(() => 0.5 - Math.random())
  let secretSantaList = []
  people.forEach(person => {
    const secretSanta = pool.find(poolPerson => poolPerson.email !== person.email)

    if (secretSanta) {
      // Successful match!
      // Removing secret santa from the pool.
      pool = pool.filter(poolPerson => poolPerson.email !== secretSanta.email)
      secretSantaList.push({ receiver: person, giver: secretSanta })
    } else {
      // The last person left in the pool is the giver themselve!
      // In this case, we swap them out with the last successfully assigned pair.
      const lastSecretSanta = secretSantaList[0]
      const newSecretSantaIndex = secretSantaList.findIndex(lastPerson => {
        return lastPerson.email !== lastSecretSanta.giver.email
      })
      secretSantaList.push({
        receiver: person,
        giver: secretSantaList[newSecretSantaIndex].giver,
      })
      secretSantaList[newSecretSantaIndex].secretSanta = person
    }
  })

  return secretSantaList
}
