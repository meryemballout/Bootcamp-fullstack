// Exercise 3 : Is it a string ?

const isString = (value) => (typeof value === "string" ? true : false);
// Test cases
console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false
