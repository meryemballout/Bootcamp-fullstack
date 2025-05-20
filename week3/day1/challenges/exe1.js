let sentence = "This dinner is bad !";
let wordNot = sentence.indexOf("not");
console.log(wordNot);
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

let result = "";

if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
    
  result = sentence.substring(0, wordNot);
  result = result.concat("good");
  result = result.concat(sentence.substring(wordBad + 3));
  console.log(result);
}
else{
    console.log(sentence);
}


