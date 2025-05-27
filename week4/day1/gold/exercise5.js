const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// console.log(compose(add1, add5)(10))

// console.log(add1)

// Output will be 16 becausewe have a the result of a function inside another one inside again anohter one.