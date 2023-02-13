function canSum(targetSum, numbers, obj = {}) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  if (targetSum in obj) return obj[targetSum]

  const results = []
  numbers = Array.from(new Set(numbers))

  numbers.forEach(number => results.push(
    canSum(targetSum - number, numbers, obj)
  ))

  return obj[targetSum] = results.some(result => result)
}

console.log(
  canSum(6, [3, 2, 5, 3]) // true
)

console.log(
  canSum(7, [5, 3, 4, 7]) // true
)

console.log(
  canSum(7, [2, 4]) // false
)

console.log(
  canSum(1000, [2]) // true
)