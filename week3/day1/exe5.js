let  family = {
  father: "John",
  mother: "Jane",
  son: "Mike",
  daughter: "Emily",
  pet: "Buddy"
};


for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}