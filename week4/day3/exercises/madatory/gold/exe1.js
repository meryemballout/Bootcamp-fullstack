function printFullName(person) {
  return `Your full name is ${person.first} ${person.last}`;
}
console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));