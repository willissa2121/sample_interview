//---------------- recursion vbelow, copy paste into js file ------------- //

//Return 2 per bunny, until no bunies
const bunnyEars = bunnies => {
  if (bunnies === 0) {
    return 0
  } else {
    return 2 + bunnyEars(bunnies - 1) // bunnies(4), bunnies(3)
  }
}

// LIFO, call cant execute, unless all calls above are executed

console.log(bunnyEars(5)) // will output 10, 2 per bunny

//return factorial of input
const factorial = int => {
  if (int === 1) {
    return 1
  } else {
    return int * factorial(int - 1)
  }
}

console.log(factorial(5)) // will output 120

//return sum of all numners smaller than input
const sumRange = int => {
  if (int === 0) {
    return 0
  } else {
    return int + sumRange(int - 1)
  }
}

console.log(sumRange(5)) // will output 15

////// --- Non Uniform return functions --- //////

const differentReturns = int => {
  if (int < 10) {
    return 1
  } else {
    if (int % 10 <= 5) {
      return 10 + differentReturns(Math.round(int / 10))
    } else {
      return 3 * differentReturns(Math.round(int / 5))
    }
  }
}

console.log(
  `The total value of this weird function is: ${differentReturns(767)}`
)

// will output 63
// Order of call is, 3 * 10 + 10 + 1, but these calls are put onto the stack. Stack is last in first out data structure, and a call on the stack cant execute until it is on top of the stack, so the calls executes in opposite order. While we execute the function at 3 * 10 + 10 + 1, the calculation is 1 + 10 + 10 * 3, in that order, with each calculation happening 1 at a time.

const weirdBunnyEars = bunnies => {
  if (bunnies === 0) {
    return 0
  } else {
    if (bunnies % 2 === 0) {
      return 2 * weirdBunnyEars(bunnies - 1)
    } else {
      return 3 + weirdBunnyEars(bunnies - 1)
    }
  }
}

console.log(`The weird bunnyears Value is: ${weirdBunnyEars(6)}`) // will output 42
// Order of call is 2 * 3 + 2 * 3 + 2 * 3 + 0. Same as last problem, these will execute one at a time, in backwards order, since the stack is last in first out data structure.

const tryAndFigureOut = int => {
  if (int <= 5) {
    return 1
  } else {
    if (int % 10 <= 2) {
      return 5 + tryAndFigureOut(Math.round(int / 12))
    } else if (int % 10 <= 5) {
      return 6 * tryAndFigureOut(Math.round(int / 3))
    } else {
      return tryAndFigureOut(12) + tryAndFigureOut(Math.round(int / 10))
    }
  }
}
//This one is super hard! It should take awhile.
// console.log(tryAndFigureOut(100))
// console.log(tryAndFigureOut(250))
// console.log(tryAndFigureOut(500))

const alsoTryThisOne = int => {
  if (int === 0) {
    return 1
  } else {
    if (int % 2 === 0) {
      return 2 * alsoTryThisOne(Math.round(int / 7))
    } else {
      return -3 + alsoTryThisOne(Math.round(int / 2))
    }
  }
}