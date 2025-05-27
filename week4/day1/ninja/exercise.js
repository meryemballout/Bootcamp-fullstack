// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }

const mergeWords = (word) => {
  let sentence = word;

  const next = (nextWord) => {
    if (nextWord === undefined) {
      return sentence;
    }
    sentence += ' ' + nextWord;
    return next;
  };

  return next;
};


const result = mergeWords('There')('is')('no')('spoon.')(); 
console.log(result);