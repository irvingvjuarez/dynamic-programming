function move(x, y, obj = {}) {
  if (x === 1 || y === 1) return 1
  if (`${x} ${y}` in obj) return obj[`${x} ${y}`]

  return obj[`${x} ${y}`] = move(x - 1, y, obj) + move(x, y - 1, obj)
}

console.log(
  move(3, 3)
)