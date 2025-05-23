// Creating two objects with personal information
const person1 = {
  fullName: "Alice Dupont",
  mass: 68, 
  height: 1.65, 
  calculateBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const person2 = {
  fullName: "Jean Martin",
  mass: 85,
  height: 1.75, 
  calculateBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};


// Function to compare BMI of two persons
function compareBMI(p1,p2){
   let bmi1 = p1.calculateBMI();
   let bmi2 = p2.calculateBMI();
   if(bmi1>bmi2){
      console.log(`${p1.fullName} has the higher BMI: ${bmi1.toFixed(2)}`);
   } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the higher BMI: ${bmi2.toFixed(2)}`);
   } else {
    console.log(`Both ${p1.fullName} and ${p2.fullName} have the same BMI: ${bmi1.toFixed(2)}`);
  }

}

// Calling the function to compare
compareBMI(person1, person2);



