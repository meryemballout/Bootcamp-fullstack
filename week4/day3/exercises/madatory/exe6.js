//[2] === [2] 
// False
//{} === {}
// False

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5


class Dog {
  constructor(name,type,color) {
    this.name = name;
    this.type = type;
    this.color = color;

  }
};

class Mammal extends Dog {
  constructor(name, type, color) {
    super(name, type, color);
  }

 sound(noise) {
    return `${this.name} is a ${this.color} ${this.type} and it makes this sound: ${noise}`;
  }
}
// Example usage:

const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));
