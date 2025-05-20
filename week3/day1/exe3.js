const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (input) => {
  const n = Number(input);

  if (isNaN(n)) console.log("That's not a number!");
  else if (n < 10) console.log(" Too small!");
  else console.log("Valid number:", n);

  readline.close();
});
