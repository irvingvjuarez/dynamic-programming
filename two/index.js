function move(x, y) {
  if (x === 1 || y === 1) return 1

  return move(x - 1, y) + move(x, y - 1)
}

console.log(
  move(6, 2)
)