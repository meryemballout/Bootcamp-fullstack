function isAnagram(str1, str2) {
}

// Array of string pairs to test
const pairs = [
  ["Astronomer", "Moon starer"],
  ["School master", "The classroom"],
  ["The Morse Code", "Here come dots"],
  ["Hello", "World"],
  ["Listen", "Silent"],
  ["Test", "Taste"],
];

// Display results for each pair
pairs.forEach(([str1, str2]) => {
  if (isAnagram(str1, str2)) {
    console.log(`"${str1}" is an anagram of "${str2}"`);
  } else {
    console.log(`"${str1}" is NOT an anagram of "${str2}"`);
  }
});