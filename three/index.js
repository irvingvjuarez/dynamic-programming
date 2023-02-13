function canSum(targetSum, numbers) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  const results = []
  numbers = Array.from(new Set(numbers)).sort((a, b) => {
    let res = 0
    if (a > b) res = 1
    if (a < b) res = -1
    return res
  })

  numbers.forEach(number => {
    results.push(canSum(targetSum - number, numbers))
  })

  return results.some(result => result)
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