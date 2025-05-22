const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function hotelCost(nights) {
  return nights * 140;
}

async function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

async function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
}

async function totalVacationCost() {
  let nights;
  while (true) {
    const answer = await askQuestion("How many nights would you like to stay at the hotel? ");
    if (!isNaN(answer) && answer.trim() !== "") {
      nights = parseInt(answer);
      break;
    }
    console.log("Please enter a valid number.");
  }

  let destination;
  while (true) {
    const answer = await askQuestion("What is your destination? ");
    if (isNaN(answer) && answer.trim() !== "") {
      destination = answer;
      break;
    }
    console.log("Please enter a valid destination.");
  }

  let days;
  while (true) {
    const answer = await askQuestion("How many days would you like to rent the car? ");
    if (!isNaN(answer) && answer.trim() !== "") {
      days = parseInt(answer);
      break;
    }
    console.log("Please enter a valid number.");
  }

  const hotel = await hotelCost(nights);
  const plane = await planeRideCost(destination);
  const car = await rentalCarCost(days);
  const total = hotel + plane + car;

  console.log(`\nThe car cost: $${car}`);
  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane tickets cost: $${plane}`);
  console.log(`Total vacation cost: $${total}`);

  rl.close();
}


totalVacationCost();
