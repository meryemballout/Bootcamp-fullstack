const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let suffix = ordinal[index + 1];
  index === 0 || index === 1 || index === 2
    ? console.log(`${index + 1}${suffix} choice is ${color}.`)
    : console.log(`${index + 1}th choice is ${color}.`);
});
