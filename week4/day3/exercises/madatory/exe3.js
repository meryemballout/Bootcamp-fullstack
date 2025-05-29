const users = { user1: 18273, user2: 92833, user3: 90315 };
//Using methods taught in class, turn the users object into an array:
const usersArray = Object.entries(users);
console.log(usersArray);

// Étape 2 : Multiplier les IDs par 2
const updatedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(updatedUsersArray);
