// 1, 1, 2, 3, 5, 8

function fib(nth, obj = {}) {
  if (nth <= 2) return 1
  if (nth in obj) return obj[nth]

  return obj[nth] = fib(nth - 1, obj) + fib(nth - 2, obj)
}

console.log(fib(50))