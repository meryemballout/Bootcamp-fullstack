//🌟 Exercise 2 : Your favorite colors

let colors = ["purple", "black", "green", "blue", "red"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}




function getSuffix(n) {
  if (n === 1) return "st";
  if (n === 2) return "nd";
  if (n === 3) return "rd";
  return "th";
}

for (let i = 0; i < colors.length; i++) {
  let position = i + 1;
  let suffix = getSuffix(position);
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}


let suffixes = ["st", "nd", "rd", "th", "th"]; 

for (let i = 0; i < colors.length; i++) {
  let position = i + 1;
  let suffix = suffixes[i] || "th";
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}