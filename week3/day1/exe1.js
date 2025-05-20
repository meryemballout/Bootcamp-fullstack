//🌟 Exercise 1 : List of people


const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[people.indexOf("James")] = "Jason";
people.push("meryem");

console.log(people.indexOf("Mary"));

const newPeople = people.slice(1, -1);
console.log(newPeople);

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];
console.log("Last element:", last);


console.log("Looping all:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

console.log("Looping until Devon:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}





//exe3
