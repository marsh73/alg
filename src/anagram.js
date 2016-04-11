export function anagram (one, two) {
  one = one.replace(/ /g, '').toLowerCase().split('')
  two = two.replace(/ /g, '').toLowerCase().split('')
  if (one.length !== two.length) {
    return false
  }
  while (one.length) {
    let letter = one.shift()
    if (!two.indexOf(letter) === 0) {
      return false
    }
    two.splice(two.indexOf(letter), 1)
  }
  if (two.length) {
    return false
  }

  return true
}

export function anagramSort (one, two) {
  one = one.replace(/ /g, '').toLowerCase().split('').sort().join('')
  two = two.replace(/ /g, '').toLowerCase().split('').sort().join('')
  return one === two
}
