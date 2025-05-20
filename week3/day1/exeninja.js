
//Q1
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log(numbers.toString());
// ==> "5,0,9,1,7,4,2,6,3,8"

//Q2
console.log(numbers.join("+"));  "5+0+9+1+7+4+2+6+3+8"
console.log(numbers.join(" "));  "5 0 9 1 7 4 2 6 3 8"
console.log(numbers.join(""));   "5091742638"

//Q3

const nombre = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Bubble Sort in descending order
for (let i = 0; i < numbers.length; i++) {
  // loop dakhel loop
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    // kanchouf wach current number < mn li b3do
    if (numbers[j] < numbers[j + 1]) {
      // kanbdlouhom b tmp variable
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;

      // n3rfou fin w9a3 lchange
      console.log(`Swapped ${numbers[j]} and ${numbers[j + 1]} => [${numbers.join(', ')}]`);
    }
  }
}

console.log("Final sorted array (descending):", numbers);