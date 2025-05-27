let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Arrow function to display the fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

// Arrow function to clone and modify groceries
const cloneGroceries = () => {
    // Copy the value of client (primitive type - string)
    let user = client;

    // Change the value of the client variable
    client = "Betty";

    // Will user also be changed? No, because strings are passed by value.
    // The variable user keeps the original value "John"

    // Reference copy - both shopping and groceries point to the same object
    let shopping = groceries;

    // Change totalPrice in shopping
    shopping.totalPrice = "35$";

    // This change **will** affect the groceries object too,
    // because objects are passed by reference

    // Change the paid property inside the 'other' object
    shopping.other.paid = false;

    // This change also affects groceries.other.paid because it's a nested object (still by reference)
}

// Call the cloneGroceries function
cloneGroceries();

// Optional: check the results
console.log(client); // Outputs: "Betty"
console.log(groceries.totalPrice); // Outputs: "35$"
console.log(groceries.other.paid); // Outputs: false
