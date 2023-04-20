const fibonacciSequence = (/** @type number */ length) => {
  if (length < 0) length = 0
  const result = /** @type {number[]} */ ([])

  for (let i = 0; i < length; i++) {
    if (result.length < 2) {
      result.push(1)
      continue
    }
    const prev = result[i - 2]
    const next = result[i - 1]
    // @ts-expect-error
    const sum = prev + next
    result.push(sum)
  }
  return result
}

console.log(fibonacciSequence(10))
