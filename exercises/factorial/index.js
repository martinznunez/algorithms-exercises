
/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1

  Call the function factorial

  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6
*/

function factorial(n) {

  if(n < 2) {
    return n
  }

  return n * factorial(n - 1)
}



module.exports = factorial;