// 1, 1, 2, 3, 5, 8

function fib(nth) {
  if (nth === 1 || nth === 2) return 1

  return fib(nth - 1) + fib(nth - 2)
}

console.log(fib(6))